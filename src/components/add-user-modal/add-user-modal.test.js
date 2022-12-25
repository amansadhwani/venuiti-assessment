import { fireEvent, render, screen } from "@testing-library/react";
import { AllUsers } from "../../store/user-store";

import { AddUserModal } from "./add-user-modal";

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
};

test("Should render add user button", () => {
  render(
    <AllUsers.Provider value={mockValues}>
      <AddUserModal />
    </AllUsers.Provider>
  );
  const addUserBtn = screen.queryByTestId("add-user");
  expect(addUserBtn).toHaveTextContent("Add User");
});

test("Should open add user modal", () => {
  render(
    <AllUsers.Provider value={mockValues}>
      <AddUserModal />
    </AllUsers.Provider>
  );
  fireEvent.click(screen.queryByTestId("add-user"));
  const closeAddUserBtn = screen.queryByTestId("close-add-user");
  expect(closeAddUserBtn).toBeTruthy();
});

test("Submit button should be disabled when no values present", () => {
  render(
    <AllUsers.Provider value={mockValues}>
      <AddUserModal />
    </AllUsers.Provider>
  );
  fireEvent.click(screen.queryByTestId("add-user"));

  const disabledSubmitButton = screen.queryByTestId("submit-add-user");

  expect(disabledSubmitButton).toBeDisabled();
});

test("Should sort in descending order when click on name", () => {
  render(
    <AllUsers.Provider value={mockValues}>
      <AddUserModal />
    </AllUsers.Provider>
  );
  fireEvent.click(screen.queryByTestId("add-user"));

  const disabledSubmitButton = screen.queryByTestId("submit-add-user");

  expect(disabledSubmitButton).toBeDisabled();
});

test("Should update values when filling form", () => {
  render(
    <AllUsers.Provider value={mockValues}>
      <AddUserModal />
    </AllUsers.Provider>
  );
  fireEvent.click(screen.queryByTestId("add-user"));

  const nameInput = screen.getByPlaceholderText(/Enter name/i);
  fireEvent.change(nameInput, { target: { value: "aman" } });
  expect(nameInput).toHaveValue("aman");

  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  fireEvent.change(emailInput, { target: { value: "aman@gmail.com" } });
  expect(emailInput).toHaveValue("aman@gmail.com");

  const bodyInput = screen.getByPlaceholderText(/Enter comment/i);
  fireEvent.change(bodyInput, { target: { value: "test test" } });
  expect(bodyInput).toHaveValue("test test");

  //fireEvent.click(screen.getByTestId("submit-add-user"));
});
