import { describe, it, expect } from "vitest";
import { errorCodeToMessage } from "./errorCodeToMessage";

describe("errorCodeToMessage", () => {
  it("returns correct message for invalid email", () => {
    expect(errorCodeToMessage("auth/invalid-email")).toBe(
      "Dane logowanie lub hasło są nieprawidłowe"
    );
  });

  it("returns correct message for email already in use", () => {
    expect(errorCodeToMessage("auth/email-already-in-use")).toBe(
      "Adres e-mail jest już zarejestrowany"
    );
  });

  it("returns correct message for name in use", () => {
    expect(errorCodeToMessage("auth/name-in-use")).toBe(
      "Ta nazwa użytkownika jest niedostępna."
    );
  });

  it("returns correct message for invalid credentials", () => {
    expect(errorCodeToMessage("auth/invalid-credential")).toBe(
      "Dane logowanie lub hasło są nieprawidłowe"
    );
  });

  it("returns correct message for required field", () => {
    expect(errorCodeToMessage("required")).toBe("Wymagane");
  });

  it("returns default message for unknown error code", () => {
    expect(errorCodeToMessage("unknown-error")).toBe("Nieznany błąd");
  });
});
