/* eslint-disable testing-library/no-node-access */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { AllUsers } from "./store/user-store";
import { Data } from "./__mocks__/users.mock";

const removeUser = jest.fn();

const mockValues = {
  users: Data,
  setUsers: jest.fn(),
  loading: false,
  currentData: 10,
  setCurrentData: jest.fn(),
  nameSort: "AES",
  setNameSort: jest.fn(),
  emailSort: "AES",
  setEmailSort: jest.fn(),
};

describe("User list component", () => {
  test("should render add user button", () => {
    render(
      <AllUsers.Provider value={mockValues}>
        <App />
      </AllUsers.Provider>
    );
    const addUser = screen.queryByTestId("add-user");
    expect(addUser).toHaveTextContent("Add User");
  });

  test("should render header table", () => {
    render(
      <AllUsers.Provider value={mockValues}>
        <App />
      </AllUsers.Provider>
    );
    const headerElement = screen.queryByTestId("user-list-table");
    expect(headerElement).toBeTruthy();
  });

  test("should render user list with 7 records", () => {
    render(
      <AllUsers.Provider value={mockValues}>
        <App />
      </AllUsers.Provider>
    );
    const userListData = screen.queryAllByTestId(/user-list-data/);
    expect(userListData).toHaveLength(7);
  });

  test("should  sortby name when click on sort icon", () => {
    const { container } = render(
      <AllUsers.Provider value={mockValues}>
        <App />
      </AllUsers.Provider>
    );
    // eslint-disable-next-line testing-library/no-container
    const sortByName = container.getElementsByClassName("fa-sort name");
    fireEvent.click(sortByName[0]);
  });
});
