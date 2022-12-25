import { render, screen } from "@testing-library/react";
import Toaster from "./toaster";

test("Should render toast message", () => {
  render(<Toaster message="test toaster" />);
  const toastMessage = screen.queryByTestId("toast");
  expect(toastMessage).toHaveTextContent("test toaster");
});
