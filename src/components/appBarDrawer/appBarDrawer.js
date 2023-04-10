import * as React from 'react';
import "./appBarDrawer.css"
import { styled, useTheme, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { ReactComponent as GmailLogo } from "../../icons/gmailicon.svg";
import { Icon } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Compose from '../compose/compose';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {GUserContext} from "../../context/context"
import NormalUserProfileImg from '../normalUserProfileImg/normalUserProfileImg';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
//   marginTop: "60px",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    // marginTop: "60px",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
//   zIndex: 5,
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
  ...(open && {
      // marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "100%",
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
}),
);


//##########################################
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
//   [theme.breakpoints.up('md')]: {
//     width: '20ch',
//   },
},
}));

//###################################################


const AppBarDrawer =()=> {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };
    

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    const gcontext = useContext(GUserContext);
    const {logoutGUser, userFrmDB, Guser} = gcontext;

    // this logs out google authenticated users
    const handleLogout = ()=>{
      console.log(("clicked logout"));
      const res = window.confirm("Do you want to Log Out")
      if(res){
        logoutGUser()
      }
    }
   
   

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  return (
    <>
    <Box id="Dbox" sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar id="Dappbar" position="fixed" open={open}>
        <Toolbar id="toolbar">
          {!open ? <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'block' }),
            }}
          >
            <MenuIcon />
          </IconButton> : 
          <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'block' }),
          }}
        >
          <MenuIcon />
        </IconButton>
          }
          <GmailLogo />
          
          <Typography variant="h6" noWrap component="div">
            GMail
          </Typography>
          <Search id='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         <div id='topicondiv'>
            <HelpOutlineIcon/>
            <AppsIcon/>
            <SettingsIcon/>
            { 
              Guser ?
                <img className='profileIMG' onClick={handleLogout} src={userFrmDB.imgURL} alt="profile image" />
              :
                <NormalUserProfileImg logoutGUser={logoutGUser} />
            }
         </div>
        </Toolbar>
      </AppBar>
      <Drawer id='Ddrawer' variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <Compose open={open}/>
                    </ListItemIcon>
                    {/* <ListItemText primary={<Compose/>} sx={{ opacity: open ? 1 : 0 }} /> */}
                    
                </ListItemButton>
          </ListItem>
          
          {/* <Compose open={open}/> */}
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <StarOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Starred" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Draft" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <SendOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <DeleteOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <ReportGmailerrorredOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spam" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
          </ListItem>
      </List>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        <ReportGmailerrorredOutlinedIcon />
                    </ListItemIcon>
                    {/* <ListItemText primary="Spam" sx={{ opacity: open ? 1 : 0 }} /> */}
                    <ListItemText className="dropdown" sx={{ opacity: open ? 1 : 0 }}>
                        <ListItemButton  className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </ListItemButton>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                                                
                    </ListItemText>
                </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p:3}}>
        <DrawerHeader />
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        </Typography>
      </Box> */}
    </Box>
    <Outlet/>
    </>
  );
}


export default AppBarDrawer