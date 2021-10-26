import { useEffect, useReducer } from "react";
import { dataContext } from "./Components/dataContext";
import { Main } from "./Components/Main";
import { Action, Action2, IState } from "./Interface/Interface";
import "./Styles/Style.css";

const initialState: IState["state"] = {
  isEdit: false,
  isDelete: false,
  submitEdit: false,
  submitDelete: false,
  isNew: false,
  submitNew: false,
  data: [],
  isTheme: true,
  copyData: [],
  isLoading: true,
  error: "",
  isError: false,
};

const reducer = (state: IState["state"], action: Action | Action2) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        isError: true,
        error: action.payload,
      };
    case "INITIAL_DATA":
      return {
        ...state,
        isError: false,
        data: action.payload,
        copyData: action.payload,
      };
    case "INITIAL_LOADER":
      return {
        ...state,
        isLoading: false,
      };

    case "EDIT_PROCESS":
      return {
        ...state,
        isEdit: true,
        copyData: state.copyData.filter((c) => {
          return c.first_name === action.payload;
        }),
      };

    case "DELETE_PROCESS":
      return {
        ...state,
        isDelete: true,
        copyData: state.copyData.filter((c) => {
          return c.first_name === action.payload;
        }),
      };
    case "POST__PROCESS":
      return {
        ...state,
        isNew: true,
      };

    case "POST__COMPLETED":
      return {
        ...state,
        isError: false,
        isNew: false,
        submitNew: true,
        data: [
          ...state.data,
          {
            id: parseInt(action.payload.id),
            email: action.payload.email,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            avatar: action.payload.avatar,
          },
        ],
        copyData: [
          ...state.data,
          {
            id: parseInt(action.payload.id),
            email: action.payload.email,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            avatar: action.payload.avatar,
          },
        ],
      };

    case "UPDATE__COMPLETE":
      return {
        ...state,
        isEdit: false,
        isError: false,
        submitEdit: true,
        data: state.data.map((s) => {
          return s.id === parseInt(action.payload.id)
            ? {
                ...s,
                email:
                  action.payload.data.email === ""
                    ? s.email
                    : action.payload.data.email,
                first_name:
                  action.payload.data.first_name === ""
                    ? s.first_name
                    : action.payload.data.first_name,
                last_name:
                  action.payload.data.last_name === ""
                    ? s.last_name
                    : action.payload.data.last_name,
              }
            : s;
        }),
        copyData: state.data.map((s) => {
          return s.id === parseInt(action.payload.id)
            ? {
                ...s,
                email:
                  action.payload.data.email === ""
                    ? s.email
                    : action.payload.data.email,
                first_name:
                  action.payload.data.first_name === ""
                    ? s.first_name
                    : action.payload.data.first_name,
                last_name:
                  action.payload.data.last_name === ""
                    ? s.last_name
                    : action.payload.data.last_name,
              }
            : s;
        }),
      };

    case "Close__Process":
      return {
        ...state,
        isEdit: false,
        copyData: [...state.data],
      };

    case "Close__Process__Del":
      return {
        ...state,
        isDelete: false,
        copyData: [...state.data],
      };

    case "Close__Add":
      return {
        ...state,
        isNew: false,
      };

    case "Delete__Complete":
      return {
        ...state,
        isError: false,
        isDelete: false,
        submitDelete: true,
        data: state.data.filter((sd) => {
          return sd.id !== parseInt(action.payload);
        }),
        copyData: state.data.filter((sd) => {
          return sd.id !== parseInt(action.payload);
        }),
      };

    case "SUBMIT__NOTIF":
      return {
        ...state,
        submitEdit: false,
        submitNew: false,
        submitDelete: false,
      };
    case "THEME__PROCESS":
      return {
        ...state,
        isTheme: !state.isTheme,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isTheme) {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [state.isTheme]);
  return (
    <>
      <dataContext.Provider value={{ state, dispatch }}>
        <Main />
      </dataContext.Provider>
    </>
  );
}

export default App;
