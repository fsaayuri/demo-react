import Box from '@mui/material/Box'

const MainMenu = () => {
    const { nav, ulMenu } = styles
    return (
        <Box component="nav" sx={nav}>
            <ul style={ulMenu}>Menu</ul>
        </Box>
    )
}

const styles = {
    nav: {
        background: '#1C6E8C',
        color: '#000',
        padding: '20px',
        marginTop: '5px'
    },
    ulMenu: {
        listStyleType: 'none'
    }
}


export default MainMenu