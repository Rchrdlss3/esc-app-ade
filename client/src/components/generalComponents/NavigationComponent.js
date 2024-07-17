import React from 'react';
import ThemeSwitchComponent from './ThemeSwitchComponent';
import { navigationLinks } from '../../helper/navigation/links';
import { NavLink } from 'react-router-dom';
import { navigationWrapperStyle, navLinkStyle } from '../../helper/styles/navigationStyles';
import { escappadeLogo } from '../../helper/constants/general';

export default function NavigationComponent({theme,setTheme}) {
    return (
        <div style = {navigationWrapperStyle()}>
            <img style = {{
                width: '30px',
                verticalAlign: 'middle'
            }}
            src={escappadeLogo} />
            {navigationLinks.map(link => {
                return <NavLink 
                to = {link.path} 
                key = {link.name}
                style = {({isActive,isPending,isTransitioning}) => {
                    return navLinkStyle(theme,isActive)
                }}>{link.name}</NavLink>
            })}
            <ThemeSwitchComponent theme = {theme} setTheme = {setTheme}/>
        </div>
    );
};