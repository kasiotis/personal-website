import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Portfolio', 'Contact'];

  const getPath = (item: string) => {
    return item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item} component={Link} to={getPath(item)} sx={{ '&:hover': { backgroundColor: 'background.default' } }}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          background: 'background.paper',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 6 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  component={Link}
                  to={getPath(item)}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontFamily: 'monospace',
                    position: 'relative',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    '&:hover:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -2,
                      width: '100%',
                      height: 2,
                      backgroundColor: 'primary.main',
                      animation: 'underline 0.3s ease-in-out forwards'
                    },
                  }}
                >
                  <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <style>
        {`
          @keyframes underline {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
