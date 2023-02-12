import React, { useState } from "react";
import styles from './NavBar.module.css'
import logo from './trans.png'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };


    return (
        <div className={styles.container} > 

      <nav className={styles.navbar}>
<div className={styles.small}> 
        <div className={styles.blink} > 
        <img className={styles.imagen} src="https://jmconstruction.com/wp-content/uploads/200x200.png" alt="logo"/>
        
         </div>
{/* ACA USAMOS MATERIAL PARA SETEAR EL MENU SANDWICH QUE SOLO SE VEA CUANDO LA PANTALLA SEA MAS CHICA */}
<div className={styles.sandwich}>
<div>
      <Button 
      className={styles.button1}
      id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
      >
       <MenuIcon  className={styles.button1} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose2}>Inicio</MenuItem>
        <MenuItem onClick={handleClose2}>Servicios</MenuItem>
        <MenuItem onClick={handleClose2}>Contacto</MenuItem>
        <MenuItem onClick={handleClose2}>About</MenuItem>

      </Menu>
    </div>
    </div>


      
       </div>
        <div className={styles.textcontainer}> 
            <h3 className={styles.items}> Inicio</h3>
            <h3 className={styles.items}> Servicios</h3>
            <h3 className={styles.items}> Contacto </h3>
            <h3 className={styles.items}> About</h3>
        </div>
       {/* ACA EMPEZAMOS A USAR MATERIAL  */}




    
       <div className={styles.avatar1}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              
          <IconButton 
          className={styles.iconavatar}
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className={styles.iconavatar2}  sx={{ width: 40, height: 40 , bgcolor: "#e3deded4;" , color : "white"}}>JM</Avatar>
          </IconButton>
        
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> Mi cuenta
        </MenuItem>
        <Divider />
             <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configuración
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </div>
       
      </nav>
      
       </div>
    );
  };

export default NavBar








