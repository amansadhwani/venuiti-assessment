import React, { FC, useCallback, useEffect } from "react";
import { TInfiniteScroll } from "../../types/user.type";
import "./infinite-scroll.css";

export const InifinteScroll: FC<TInfiniteScroll> = ({
  loadMore,
  children,
  divID,
}) => {
  const onScroll: EventListener = useCallback((e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.scrollTop + target.clientHeight + 1 >= target.scrollHeight) {
      loadMore();
    }
  }, []);

  useEffect(() => {
    let infiniteID = document.getElementById(divID);
    infiniteID.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id={divID}
      className="infinite-main-item-div"
      data-testid="infinite-main-item-div"
    >
      {children}
    </div>
  );
};
