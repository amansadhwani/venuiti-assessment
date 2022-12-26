import { UserList } from "./components/containers/user-list/user-list";
import { UsersState } from "./store/user-store";
import { AddUserModal } from "./components/add-user-modal/add-user-modal";
import { TUsers } from "./types/user.type";
import { showToaster, sortAZZA } from "./helpers/helpers";
import Toaster from "./components/toaster/toaster";
import { InifinteScroll } from "./components/infinite-scroll/infinite-scroll";

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
      <InifinteScroll loadMore={loadMore} divID={"infinite-main-item-div"}>
        <UserList removeUser={removeUser} sortName={onClickSortName} />
      </InifinteScroll>
      <AddUserModal />
      <Toaster message={"Action performed sucessfully"} />
    </>
  );
}

export default App;
