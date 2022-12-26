import React from "react";

export type TUsers = {
  postId: number;
  id: number | string;
  name: string;
  email: string;
  body: string;
};

export type TUserProps = {
  removeUser: (id: number | string) => void;
  sortName: (sortType: string, sortProperty: string) => void;
};

export type TNotification = {
  message: string;
};

export type TInfiniteScroll = {
  loadMore: () => void;
  children: React.ReactNode;
  divID: string;
};

export enum ABC {
  name,
  email,
}

export type name = string;
export type email = string;

export type HELLO = name | email;
