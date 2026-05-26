import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

function scrollToSection(id: string) {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'background.paper' : 'transparent',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          backdropFilter: trigger ? 'blur(8px)' : 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 4 }, justifyContent: 'flex-end' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                sx={{
                  color: trigger ? 'text.primary' : 'white',
                  '&:hover': {
                    color: 'secondary.main',
                    bgcolor: 'transparent',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { md: 'none' }, color: trigger ? 'text.primary' : 'white' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(item);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
