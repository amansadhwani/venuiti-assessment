import { SORT_TYPE } from "../constants/constants";
import { sortAZZA } from "./helpers";

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

describe("test sorting data", () => {
  test("Should render in ascending order", () => {
    const sortedData = sortAZZA(SORT_TYPE.AES, Data, "name");
    expect(sortedData[0].name).toEqual("nam qui et");
  });

  test("Should render in descending order", () => {
    const sortedData = sortAZZA(SORT_TYPE.DES, Data, "name");
    expect(sortedData[0].name).toEqual("voluptas deleniti ut");
  });
});
