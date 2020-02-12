import React from 'react';
import { IMenuContext, TMenuState } from "../interfaces";

export type SetMenuContext = (menuContext: IMenuContext) => void;

const menuContext: IMenuContext = {
    menuState: {
        currentPage: '',
        currentHeader: '',
        tabs: {
            authenticationPage: {
                value: 1
            }
        }
    },
    // Placeholder function that will be set later in order
    // to avoid Typescript requiring checking its presense
    setMenuState: (o: TMenuState) => { }
};

export const MenuContext = React.createContext(menuContext);