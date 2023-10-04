import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Menu.module.css'

export const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className={styles.containerMenu}>
      <Toolbar variant="dense" className={styles.contentOptionMenu}>
      <Typography variant="h6" color="inherit" component="div" className={styles.labelMenu}>
          Home
        </Typography>
        <Typography variant="h6" color="inherit" component="div" className={styles.labelMenu}>
          Reservas
        </Typography>
        <IconButton  edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon className={styles.hamburgerButton} />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);
}