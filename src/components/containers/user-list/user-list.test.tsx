import { render, screen } from "@testing-library/react";
import { UserList } from "./user-list";

const removeUser = jest.fn();
const sortName = jest.fn();

describe("User list component", () => {
  test("Should render user list table", () => {
    render(<UserList removeUser={removeUser} sortName={sortName} />);
    const tableElement = screen.queryByTestId("user-list-table");
    //expect(tableElement).toHaveTextContent("Email");
  });
});
