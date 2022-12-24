import { TUsers } from "../types/user.type";

export const sortAZZA = (
  sortType: string,
  sortData: TUsers[],
  sortProperty: string
) => {
  if (sortType === "AES") {
    return sortData.sort((p1: any, p2: any) =>
      p1[sortProperty] > p2[sortProperty]
        ? 1
        : p1[sortProperty] < p2[sortProperty]
        ? -1
        : 0
    );
  } else {
    return sortData.sort((p1: any, p2: any) =>
      p1[sortProperty] > p2[sortProperty]
        ? -1
        : p1[sortProperty] < p2[sortProperty]
        ? 1
        : 0
    );
  }
};

export const showToaster = () => {
  let x: any = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
