import { render, screen } from "@testing-library/react";
import { AllUsers } from "../../store/user-store";
import { InifinteScroll } from "./infinite-scroll";

const loadMore = jest.fn();
const divID = "randomDIV";

test("Should render InifinteScroll", () => {
  render(
    <AllUsers.Provider value={{}}>
      <InifinteScroll loadMore={loadMore} divID={divID}>
        <h1>random</h1>
      </InifinteScroll>
    </AllUsers.Provider>
  );
  const checkDiv = screen.queryByTestId("infinite-main-item-div");
  expect(checkDiv).toBeTruthy();
});
