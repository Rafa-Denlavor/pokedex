import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  test("renders learn react link", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
