import React from 'react';
import { IMenuContext } from "../interfaces";

export type SetMenuContext = (user?: IMenuContext) => void;

export interface IAuthContext {

    setMenuContext?: SetMenuContext
}

const menuContext: IMenuContext = {};

export const MenuContext = React.createContext(menuContext);