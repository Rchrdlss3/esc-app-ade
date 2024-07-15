export const navigationWrapperStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '5px'
    }
}

export const navLinkStyle = (theme,isActive) => {
    return {
        textTransform: 'capitalize',
        margin: '5px',
        textDecoration: 'none',
        color: isActive ? theme.font.link : theme.font.regular,
        fontWeight: '600'
    }
}
export const themeSwitchWrapper = () => {
    return {
        display: 'inline-flex',
        marginTop: '1vh'
    }
}

export const labelStyle = () => {
    return {
        position: 'relative',
        display: 'inline-block',
        width: '44px',
        height: '14px'
    }
}

export const inputStyle = () => {
    return {
        opacity: 0,
        width: 0,
        height: 0
    }
}

export const switchButtonStyle = (theme,isChecked) => {
    return {
        width: '13px',
        height: '14px',
        position: 'absolute',
        borderRadius: '50%',
        transition: '.4s',
        WebkitTransition: '.4s',
        backgroundColor: theme.main,
        right: isChecked ? 0 : null,
        left: isChecked ? null : 0
    }
}

export const switchToggleStyle = () => {
    return {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        border: '1px solid ',
        borderRadius: '14px',
        transition: '.4s',
    }
}