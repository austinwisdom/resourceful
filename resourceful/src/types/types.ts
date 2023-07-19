export type LoggedIn = boolean;
export type SetLoggedIn = React.Dispatch<React.SetStateAction<boolean>>;

export type LoginError = {message:string}

export type SubmitEvent = React.FormEvent<HTMLFormElement>
export type InputEvent = React.FormEvent<HTMLInputElement> 

export type SetUserInfo = React.Dispatch<React.SetStateAction<string>>;

export interface ResourcesResponse { 
    _id: string
    title: string
    link: string
    category: string
    subcategory: string
}

