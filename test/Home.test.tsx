import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../src/components/presentational/Hero";

describe("test", () => {
  it("should Render", () => {
    render(<Hero />);
    const message = screen.queryByText(/IMAGINE A PLACE.../);
    expect(message).toBeVisible();
  });
});
