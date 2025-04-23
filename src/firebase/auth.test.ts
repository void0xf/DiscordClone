import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { createNewUser, loginUser, logOutUser } from "./auth";
import { addUserDataToFireStore } from "./firestore";
import { User, UserStatus } from "../types/user.t";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";

// Mock Firebase modules
vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(),
}));

const mockAuth = {
  currentUser: null,
};

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => mockAuth),
  createUserWithEmailAndPassword: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock("./firestore", () => ({
  addUserDataToFireStore: vi.fn(),
}));

const originalConsoleError = console.error;

beforeEach(() => {
  vi.clearAllMocks();
  mockAuth.currentUser = null;
  // Mock console.error to prevent output during tests
  console.error = vi.fn();
});

afterEach(() => {
  // Restore original console.error after tests
  console.error = originalConsoleError;
});

describe("Auth Functions", () => {
  const mockUser: User = {
    id: "test-uid",
    nickName: "testuser",
    profilePicture: "Default",
    name: "Test User",
    servers: [],
    friends: [],
    outgoingFriendRequests: [],
    incomingFriendRequests: [],
    birth: "2000-01-01",
    DirectMessages: [],
    status: UserStatus.online,
    customStatus: "",
  };

  describe("createNewUser", () => {
    it("creates a new user successfully", async () => {
      const mockUserCredential = {
        user: { uid: "test-uid" },
      };

      (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue(
        mockUserCredential
      );
      (addUserDataToFireStore as jest.Mock).mockResolvedValue(true);

      const result = await createNewUser(
        "test@example.com",
        "password123",
        mockUser
      );

      expect(result).toBe(true);
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        mockAuth,
        "test@example.com",
        "password123"
      );
      expect(addUserDataToFireStore).toHaveBeenCalledWith("test-uid", mockUser);
    });

    it("handles registration error", async () => {
      const error = new Error("Registration failed");
      (createUserWithEmailAndPassword as jest.Mock).mockRejectedValue(error);

      await expect(
        createNewUser("test@example.com", "password123", mockUser)
      ).rejects.toThrow("Registration failed");
    });
  });

  describe("loginUser", () => {
    it("logs in user successfully", async () => {
      const mockUserCredential = {
        user: { uid: "test-uid" },
      };

      (signInWithEmailAndPassword as jest.Mock).mockResolvedValue(
        mockUserCredential
      );

      const result = await loginUser("test@example.com", "password123");

      expect(result).toBe("test-uid");
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        mockAuth,
        "test@example.com",
        "password123"
      );
    });

    it("handles login error", async () => {
      const error = new Error("Invalid credentials");
      (signInWithEmailAndPassword as jest.Mock).mockRejectedValue(error);

      await expect(
        loginUser("test@example.com", "wrongpassword")
      ).rejects.toThrow("Invalid credentials");
    });
  });

  describe("logOutUser", () => {
    it("logs out user successfully", async () => {
      (signOut as jest.Mock).mockResolvedValue(undefined);

      const result = await logOutUser();

      expect(result).toBe(true);
      expect(signOut).toHaveBeenCalledWith(mockAuth);
    });

    it("handles logout error", async () => {
      const error = new Error("Logout failed");

      // Mock the implementation to throw the error when signOut is called
      (signOut as jest.Mock).mockImplementation(() => {
        throw error;
      });

      const result = await logOutUser();

      expect(result).toBe(false);
    });
  });
});
