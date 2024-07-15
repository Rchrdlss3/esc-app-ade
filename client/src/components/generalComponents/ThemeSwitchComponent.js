import {useState} from 'react'
import { getTheme, switchTheme } from "../../functions/themeFunctions";
import { darkTheme } from '../../models/themes';
import { themeSwitchWrapper,labelStyle,inputStyle,switchButtonStyle,switchToggleStyle } from '../../helper/styles/navigationStyles';

export default function ThemeSwitchComponent({theme,setTheme}){
    const [isChecked,setIsChecked] = useState(getTheme() === darkTheme)

    return (
        <div style = {themeSwitchWrapper()}>
            <label style = {labelStyle()}>
            <input 
            type = "checkbox" 
            checked = {isChecked}
            style = {inputStyle()}
            onChange={(e) => {
                    setIsChecked(e.target.checked)
                    setTheme(switchTheme())
                }}
            />
            <span style = {switchButtonStyle(theme,isChecked)}/>
            <span style = {switchToggleStyle()}/>
            </label>
        </div>
    )
}