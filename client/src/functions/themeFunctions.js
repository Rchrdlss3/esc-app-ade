import { darkTheme, lightTheme } from "../models/themes";

const DARK_THEME = "DARK_THEME"; const LIGHT_THEME = "LIGHT_THEME";

function setTheme (inputTheme) {
    localStorage.setItem("THEME",inputTheme)
}

export function getTheme() {
    const currentTheme = localStorage.getItem("THEME")
    switch(true) {
        case currentTheme === LIGHT_THEME:
            return lightTheme
        case currentTheme === DARK_THEME:
            return darkTheme
        default:
            setTheme(LIGHT_THEME)
            return lightTheme
    }
}

export function switchTheme() {
    const currentTheme = localStorage.getItem("THEME")
    switch(true) {
        case currentTheme === DARK_THEME:
            setTheme(LIGHT_THEME)
            return lightTheme
        case currentTheme === LIGHT_THEME:
            setTheme(DARK_THEME)
            return darkTheme
        default:
                setTheme(LIGHT_THEME)
                return lightTheme
    }
}