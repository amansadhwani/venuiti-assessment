/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import { AllUsers } from "../../../store/user-store";

import { UserList } from "./user-list";

const removeUser = jest.fn();
const sortName = jest.fn();

const Data = [
  {
    postId: 9,
    id: 41,
    name: "voluptas deleniti ut",
    email: "Lucio@gladys.tv",
    body: "facere repudiandae vitae ea aut sed quo ut et\nfacere nihil ut voluptates in\nsaepe cupiditate accusantium numquam dolores\ninventore sint mollitia provident",
  },
  {
    postId: 9,
    id: 42,
    name: "nam qui et",
    email: "Shemar@ewell.name",
    body: "aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui",
  },
];

const mockValues = {
  users: Data,
  currentData: 10,
  nameSort: "AES",
  emailSort: "AES",
};

describe("User list component", () => {
  test("Should render user list table", () => {
    render(
      <AllUsers.Provider value={mockValues}>
        <UserList removeUser={removeUser} sortName={sortName} />
      </AllUsers.Provider>
    );

    const userList = screen.queryAllByTestId(/user-list-data/);
    expect(userList).toHaveLength(2);
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
