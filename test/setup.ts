import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock SVG imports
vi.mock("@/src/assets/banners/leftSideHero.svg", () => ({
  default: "leftSideHero.svg",
}));

vi.mock("@/src/assets/banners/rightSideHero.svg", () => ({
  default: "rightSideHero.svg",
}));

vi.mock("@/src/assets/banners/CreateAnInviteBelong.svg", () => ({
  default: "CreateAnInviteBelong.svg",
}));

vi.mock("@/src/assets/banners/Where hanging out is easy.svg", () => ({
  default: "Where hanging out is easy.svg",
}));

vi.mock("@/src/assets/banners/From few to a fandom.svg", () => ({
  default: "From few to a fandom.svg",
}));

vi.mock("@/src/assets/banners/RELIABLETECHFORSTAYINGCLOSE.svg", () => ({
  default: "RELIABLETECHFORSTAYINGCLOSE.svg",
}));

vi.mock("@/src/assets/banners/HomePageStars.svg", () => ({
  default: "HomePageStars.svg",
}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return React.createElement("img", props);
  },
}));
