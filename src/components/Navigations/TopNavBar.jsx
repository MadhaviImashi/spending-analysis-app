import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppLogo from '@mui/icons-material/MonetizationOn';

const pages = ['Budget', 'All Transactions', 'Monthly Report'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TopBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <AppLogo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#33FFF2',
                    textDecoration: 'none',
                }}
                >
                Spendee
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={{}}
                    color="#33A6FF"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={{}}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean({})}
                    onClose={{}}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem key={page} onClick={{}}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
                <AppLogo sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#33A6FF',
                    textDecoration: 'none',
                }}
                >
                LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    onClick={{}}
                    sx={{ my: 2, color: '#33A6FF', display: 'block' }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={{}} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                </Box>
            </Toolbar>
            </Container>
            </AppBar>
    )
}

export default TopBar;