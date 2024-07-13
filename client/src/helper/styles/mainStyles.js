export function mainStyle(theme) {
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