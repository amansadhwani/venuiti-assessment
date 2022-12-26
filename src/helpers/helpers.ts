import { SORT_TYPE } from "../constants/constants";
import { TUsers } from "../types/user.type";

export const sortAZZA = (
  sortType: string,
  sortData: TUsers[],
  sortProperty: string
) => {
  if (sortType === SORT_TYPE.AES) {
    return sortData.sort((p1: TUsers, p2: TUsers) =>
      p1[sortProperty as keyof TUsers] > p2[sortProperty as keyof TUsers]
        ? 1
        : p1[sortProperty as keyof TUsers] < p2[sortProperty as keyof TUsers]
        ? -1
        : 0
    );
  } else {
    return sortData.sort((p1: TUsers, p2: TUsers) =>
      p1[sortProperty as keyof TUsers] > p2[sortProperty as keyof TUsers]
        ? -1
        : p1[sortProperty as keyof TUsers] < p2[sortProperty as keyof TUsers]
        ? 1
        : 0
    );
  }
};

export const showToaster = () => {
  let element: HTMLElement = document.getElementById("toast");
  element.className = "show";
  setTimeout(function () {
    element.className = element.className.replace("show", "");
  }, 3000);
};
