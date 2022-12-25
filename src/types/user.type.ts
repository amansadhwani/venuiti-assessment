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
