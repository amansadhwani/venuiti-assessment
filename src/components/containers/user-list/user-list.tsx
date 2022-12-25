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
        <table data-testid="user-list-table">
          <tr>
            <th>User ID</th>
            <th>
              Name
              <span
                className="fa fa-sort"
                onClick={() =>
                  sortName(
                    nameSort === SORT_TYPE.AES ? SORT_TYPE.DEC : SORT_TYPE.AES,
                    "name"
                  )
                }
              ></span>
            </th>
            <th>
              Email
              <span
                className="fa fa-sort"
                onClick={() =>
                  sortName(
                    emailSort === SORT_TYPE.AES ? SORT_TYPE.DEC : SORT_TYPE.AES,
                    "email"
                  )
                }
              ></span>
            </th>
            <th>Post</th>
            <th>Delete User</th>
          </tr>
          {users?.slice(0, currentData).map((item: TUsers) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
              <td className="remove-btn">
                <span
                  onClick={() => removeUser(item.id)}
                  className="fa fa-trash"
                ></span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
