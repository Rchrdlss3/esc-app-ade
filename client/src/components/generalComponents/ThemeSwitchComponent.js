import {useState} from 'react'
import { getTheme, switchTheme } from "../../functions/themeFunctions";
import { darkTheme } from '../../models/themes';

export default function ThemeSwitchComponent({setTheme}){
    const [isChecked,setIsChecked] = useState(getTheme() === darkTheme)

    return (
        <div>
            <input 
            type = "checkbox" 
            checked = {isChecked}
            onChange={(e) => {
                    setIsChecked(e.target.checked)
                    setTheme(switchTheme())
                }}
            />
        </div>
    )
}