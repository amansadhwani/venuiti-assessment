import React, { useRef, useState } from "react";
import { showToaster } from "../../helpers/helpers";
import { UsersState } from "../../store/user-store";
import { TUsers } from "../../types/user.type";
import "./add-user-modal.css";

export const AddUserModal = () => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const { setUsers } = UsersState();
  const closeRef = useRef<any>();
  const name = useRef<any>();
  const email = useRef<any>();
  const body = useRef<any>();

  const handleChange = (): void => {
    const isDisabled =
      !name?.current?.value || !email.current.value || !body.current.value;
    if (isDisabled !== disableSubmit) {
      setDisableSubmit(isDisabled);
    }
  };

  const performCleanUp = () => {
    closeRef.current.click();
    name.current.value = "";
    email.current.value = "";
    body.current.value = "";
    setDisableSubmit(true);
  };

  const onClickAddUser = (): void => {
    const newUserData = {
      postId: 1,
      id: Math.random(),
      name: name.current.value,
      email: email.current.value,
      body: body.current.value,
    };
    setUsers((prevData: TUsers[]) => [...prevData, newUserData]);
    showToaster();
    performCleanUp();
  };

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-sm add-modal-btn"
          data-toggle="modal"
          data-target="#myModal"
          data-testid="add-user"
        >
          Add User
        </button>
      </div>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add User</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter name"
                  name="name"
                  ref={name}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  ref={email}
                />
              </div>
              <div className="form-group">
                <label>Comment:</label>
                <input
                  onChange={handleChange}
                  type="textarea"
                  className="form-control"
                  placeholder="Enter comment"
                  name="body"
                  ref={body}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                disabled={disableSubmit}
                onClick={() => onClickAddUser()}
                type="submit"
                className={`btn btn-primary ${disableSubmit && "disabled"}`}
                data-testid="submit-add-user"
              >
                Submit
              </button>
              <button
                onClick={performCleanUp}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                ref={closeRef}
                data-testid="close-add-user"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
