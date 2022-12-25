import React, { FC } from "react";
import { SORT_TYPE } from "../../../constants/constants";
import { UsersState } from "../../../store/user-store";
import { TUsers, TUserProps } from "../../../types/user.type";
import "./user-list.css";

export const UserList: FC<TUserProps> = ({ removeUser, sortName }) => {
  const { users, currentData, nameSort, emailSort } = UsersState();

  return (
    <>
      <div id="infinite-main-item-div" className="infinite-main-item-div">
        <div className="container table-responsive py-3">
          <table
            className="table table-bordered table-hover"
            data-testid="user-list-table"
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  Name
                  <span
                    className="fa fa-sort name"
                    onClick={() =>
                      sortName(
                        nameSort === SORT_TYPE.AES
                          ? SORT_TYPE.DEC
                          : SORT_TYPE.AES,
                        "name"
                      )
                    }
                  ></span>
                </th>
                <th scope="col">
                  Email
                  <span
                    className="fa fa-sort email"
                    onClick={() =>
                      sortName(
                        emailSort === SORT_TYPE.AES
                          ? SORT_TYPE.DEC
                          : SORT_TYPE.AES,
                        "email"
                      )
                    }
                  ></span>
                </th>
                <th scope="col">Post</th>
                <th scope="col">Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users?.slice(0, currentData).map((item: TUsers) => (
                <tr key={item.id} data-testid={`user-list-data-${item.id}`}>
                  <th scope="row">{item.id}</th>
                  <th>{item.name}</th>
                  <th>{item.email}</th>
                  <th>{item.body}</th>
                  <th className="remove-btn">
                    <span
                      onClick={() => removeUser(item.id)}
                      className="fa fa-trash"
                    ></span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
