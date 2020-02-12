export type TMenuState = {
    currentPage: string,
    currentHeader: string,
    tabs: {
        authenticationPage: {
            value: number
        }
    }
}

export interface IMenuContext {
    menuState: TMenuState,
    setMenuState: (o: TMenuState) => void
}