import React from 'react';
import ThemeSwitchComponent from './ThemeSwitchComponent';

export default function NavigationComponent({theme,setTheme}) {
    return (
        <div>
            <ThemeSwitchComponent setTheme = {setTheme}/>
            Navigation Component
        </div>
    );
};