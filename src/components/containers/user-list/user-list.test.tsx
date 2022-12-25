/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import { AllUsers } from "../../../store/user-store";
import { Data } from "../../../__mocks__/users.mock";
import { UserList } from "./user-list";

const removeUser = jest.fn();
const sortName = jest.fn();

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
  test("Should render user list table", () => {
    render(
      <AllUsers.Provider value={mockValues}>
        <UserList removeUser={removeUser} sortName={sortName} />
      </AllUsers.Provider>
    );

    const userList = screen.queryAllByTestId(/user-list-data/);
    expect(userList).toHaveLength(7);
  });

  test("Should delete user when clicked on delete icon", () => {
    const { container } = render(
      <AllUsers.Provider value={mockValues}>
        <UserList removeUser={removeUser} sortName={sortName} />
      </AllUsers.Provider>
    );

    // eslint-disable-next-line testing-library/no-container
    const deleteRecord = container.getElementsByClassName("fa-trash");
    fireEvent.click(deleteRecord[0]);
    expect(removeUser).toHaveBeenCalledTimes(1);
  });

  test("Should sortby name when click on sort icon", () => {
    const { container } = render(
      <AllUsers.Provider value={mockValues}>
        <UserList removeUser={removeUser} sortName={sortName} />
      </AllUsers.Provider>
    );

    // eslint-disable-next-line testing-library/no-container
    const sortByName = container.getElementsByClassName("fa-sort name");
    fireEvent.click(sortByName[0]);
    expect(sortName).toHaveBeenCalledTimes(1);
  });

  test("Should sortby email when click on sort icon", () => {
    const { container } = render(
      <AllUsers.Provider value={mockValues}>
        <UserList removeUser={removeUser} sortName={sortName} />
      </AllUsers.Provider>
    );

    // eslint-disable-next-line testing-library/no-container
    const sortByEmail = container.getElementsByClassName("fa-sort email");
    fireEvent.click(sortByEmail[0]);
    expect(sortName).toHaveBeenCalledTimes(1);
  });
});
