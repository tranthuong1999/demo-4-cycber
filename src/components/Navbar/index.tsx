import React, { useState } from 'react';
import "./style.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from "@mui/material/styles";
import { Avatar, Button, useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
// @ts-ignore
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';
import ResponsiveModal from '../Modal';
import classNames from 'classnames';

const dataMenu = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Pricing" },
    { title: "Contact" },
]
const styleMenu = {
    color: 'red',
    backgroundColor: "#fff"
}

const MenuPage = (() => {
    const theme = useTheme();
    const isComputer = useMediaQuery(theme.breakpoints.up(1024));
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    // const navigate = useNavigate();

    const currentUer = JSON?.parse(localStorage?.getItem("currentUser")!)
    const [open, setOpen] = React.useState(false);
    const [openModalAuthen, setOpenModalAuthen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleLogin = () => {
        // navigate("/sign-in")
    }
    const handleRegister = () => {
        // navigate("/sign-up")
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {(!currentUer ? ['Đăng nhập', 'Đăng kí'] : [`${currentUer?.hoTen}`, "Đăng xuất"]).map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton sx={{ '&:hover': styleMenu }}>
                            <ListItemIcon sx={{ '&:hover': styleMenu }}>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {dataMenu.map((item: any, index) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ '&:hover': styleMenu }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={classNames("menu", (isMobile || isTabnet) ? "menu-screen-small" : "")}>
            <div className='menu-bar'>
                <div className='img-logo'>
                    <img src="https://demo4.cybersoft.edu.vn/static/media/airbnb-1.aabeefedaf30b8c7011a022cdb5a6425.svg" />
                    <p className='name-header'>airbnb</p>
                </div>
                {
                    isComputer ?
                        (
                            <>
                                <div className='event-cinema'>
                                    {
                                        dataMenu.map((item, index) => <li className={classNames('btn', `btn-${index + 1}`)}>{item.title}</li>)
                                    }
                                </div>
                                <div className='event-user'>
                                    <button className='btn' onClick={() => setOpenModalAuthen(!openModalAuthen)}>
                                        <span> <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" className='img-btn' /></span>
                                    </button>
                                </div>
                                {openModalAuthen && <div data-aos="fade-down" data-aos-duration={700} className={classNames("form-register", openModalAuthen ? "form-register-active" : "")}>
                                    <p className='btn-singup'> Đăng nhập</p>
                                    <p className='btn-signin'> Đăng kí</p>
                                </div>}
                            </>
                        )
                        :
                        (
                            <div>
                                <div onClick={toggleDrawer(!open)} className='icon-menu'>
                                    <DehazeIcon sx={{ color: "red" }} />
                                </div>
                                <Drawer open={open} onClose={toggleDrawer(false)}>
                                    {DrawerList}
                                </Drawer>
                            </div>
                        )
                }
            </div >
        </div >
    )
})

export default MenuPage;