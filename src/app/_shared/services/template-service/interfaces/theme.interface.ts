export interface ThemeElement {
    title: string
    backgroundColor?: string,
    border?: string
    color?: string
    elements: HTMLElement[]
}

export interface ThemeColors {
    backgroundColor: string,
    fontColor: string,
    borderColor: string,
    contentColor: string,
    titleColor: string,
    sideMenuBG: string
}