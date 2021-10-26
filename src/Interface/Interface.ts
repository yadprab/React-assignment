export interface IData {
  state: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

export interface IFormData {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IData2 {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface IState {
  state: {
    isEdit: boolean;
    isDelete: boolean;
    submitEdit: boolean;
    submitDelete: boolean;
    isNew: boolean;
    submitNew: boolean;
    data: IData["state"];
    isTheme: boolean;
    isLoading: boolean;
    copyData: IData["state"];
    error?: "";
    isError: boolean;
  };
}

export type Action = { type: string; payload?: any };
export type Action2 = { type: "INITIAL_DATA"; payload: IData["state"] };

export interface IContext {
  ctx: {
    state: IState["state"];
    dispatch: React.Dispatch<Action | Action2>;
  };
}
