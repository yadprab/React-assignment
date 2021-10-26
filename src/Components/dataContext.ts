import { createContext } from "react";
import { IContext } from "./../Interface/Interface";

export const dataContext = createContext<IContext["ctx"] | null>(null);
