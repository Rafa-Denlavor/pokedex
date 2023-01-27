import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../components/Card";
describe("Card", () => {
  test("Should return all props", () => {
    const { container } = render(
      <Card id="10" image="images/2.svg" name="Pokemon" />
    );

    screen.getByText("#10");

    expect(container).toMatchSnapshot();
  });

  test("Should capture text from image's alt attribute", () => {
    const { container } = render(<Card id="10" image="" name="Pikachu" />);

    screen.getByText("Pikachu");

    expect(container).toMatchSnapshot();
  });

  test("It should show pokémon's position if there is no image or name", () => {
    const { container } = render(<Card id="10" image="" name="" />);

    screen.getByText("Pokemon da posição: #10");

    expect(container).toMatchSnapshot();
  });
});
