import { render, screen } from "@testing-library/react";
import Toaster from "./toaster";

test("renders learn react link", () => {
  render(<Toaster message="test toaster" />);
  const toastMessage = screen.queryByTestId("home-shows");
  //expect(toastMessage).toBeTruthy();
});
