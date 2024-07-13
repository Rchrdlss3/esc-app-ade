import React from 'react';
import ThemeSwitchComponent from './ThemeSwitchComponent';
import { navigationLinks } from '../../helper/navigation/links';
import { NavLink } from 'react-router-dom';

export default function NavigationComponent({theme,setTheme}) {
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'}}>
            {navigationLinks.map(link => {
                return <NavLink 
                to = {link.path} 
                key = {link.name}
                style = {({isActive,isPending,isTransitioning}) => {
                    return {textTransform: 'capitalize'}
                }}>{link.name}</NavLink>
            })}
            <ThemeSwitchComponent setTheme = {setTheme}/>
        </div>
    );
};