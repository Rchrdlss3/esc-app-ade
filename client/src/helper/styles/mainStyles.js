export const mainStyle = (theme) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.primary,
        color: theme.font.regular,
        transition: '1s'
    }
}

export const miniComponentStyle = () => {
    return {
        width: '300px',
        height: '150px',
        // border: '1px solid',
        borderRadius: '5px'
    }
}