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

// export enum TSortType {
//  AES="AES",
//  DEC="DEC"
// }

export type ButtonStatus = 'AES' | 'DEC';



export type TUserContext = {
  loading:boolean;
  setLoading?: () => void;
  currentData:number;
  setCurrentData?:any
  users:TUsers[] | any
  setUsers?:any
  nameSort:string
  setNameSort?:  any
  emailSort:string;
  setEmailSort?:any
}

export type TChildren = {
  children: React.ReactNode;
}


