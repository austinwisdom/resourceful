export type SetUser = (user: User | "") => void;

export type LoggedIn = boolean;
export type SetLoggedIn = React.Dispatch<React.SetStateAction<boolean>>;

export type LoginError = { message: string };

export type SubmitEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;

export type SetUserInfo = React.Dispatch<React.SetStateAction<string>>;

export type SetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export interface User {
  userName: string;
}
export interface ResourcesResponse {
  _id: string;
  title: string;
  link: string;
  category: string;
  subcategory: string;
}
