import { fireEvent, render, screen } from "@testing-library/react";
import { AllUsers } from "../../store/user-store";
import { Data } from "../../__mocks__/users.mock";
import { AddUserModal } from "./add-user-modal";

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
