export type TUsers = {
  postId: number;
  id: number | string;
  name: string;
  email: string;
  body: string;
};

export type TUserProps = {
  removeUser: any;
  sortName: any;
};

export type TNotification = {
  message: string;
};
