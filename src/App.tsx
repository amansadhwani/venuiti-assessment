/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { UserList } from "./components/containers/user-list/user-list";
import { UsersState } from "./store/user";
import { AddUserModal } from "./components/add-user-modal/add-user-modal";
import { TUsers } from "./types/user.type";
import { showToaster, sortAZZA } from "./helpers/helpers";
import Toaster from "./components/toaster/toaster";
import "./App.css";

function App() {
  const { users, setUsers, setCurrentData, setNameSort, setEmailSort } =
    UsersState();
  const removeUser = (id: string | number) => {
    const filterUser = users.filter((item: TUsers) => item.id !== id);
    setUsers(filterUser);
    showToaster();
  };

  const loadMore = () => {
    setCurrentData((prevData: number) => prevData + 10);
  };
  const onScroll = (e: any): void => {
    if (
      e.target.scrollTop + e.target.clientHeight + 1 >=
      e.target.scrollHeight
    ) {
      loadMore();
    }
  };
  useEffect(() => {
    let infiniteID: any = document.getElementById("infinite-main-item-div");
    infiniteID.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClickSortName = (sortType: string, sortProperty: string) => {
    const sortedData = sortAZZA(sortType, users, sortProperty);
    setUsers(sortedData);
    if (sortProperty === "name") {
      setNameSort(sortType);
    } else {
      setEmailSort(sortType);
    }
  };

  return (
    <>
      <UserList removeUser={removeUser} sortName={onClickSortName} />
      <AddUserModal />
      <Toaster message={"Action performed sucessfully"} />
    </>
  );
}

export default App;
