import { darkTheme, lightTheme } from "../models/themes";

const DARK_THEME = "DARK_THEME"; const LIGHT_THEME = "LIGHT_THEME";

const currentTheme = localStorage.getItem("THEME")

function setTheme (inputTheme) {
    localStorage.setItem("THEME",inputTheme)
}

export function getTheme() {
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