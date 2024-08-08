import React, { useState } from 'react';
import "./style.scss";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
// @ts-ignore
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import LoginPage from '../Login';
import useAuthenticationStore from '../../store/authentication';
import RegisterPage from '../Register';
import { data_province } from '../Address/data';

const dataMenu = [
    { title: "Home", navigate: "/" },
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
    const navigate = useNavigate();
    const location = useLocation();

    const currentUer = JSON?.parse(localStorage?.getItem("user")!)
    const [open, setOpen] = React.useState(false);
    const [openModalAuthen, setOpenModalAuthen] = useState(false);
    const province = data_province.find((item) => {
        const parts = location.pathname.split('/');
        return item.router === parts[parts.length - 1];
    })

    const { isLogin, setIsLogin, isRegister, setIsRegister } = useAuthenticationStore();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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

    const renderContentAuthen = () => {
        return (
            <div data-aos="fade-down" data-aos-duration={700} className={classNames("form-register", (isMobile || isTabnet) ? "form-register-mobile" : "")}>
                <p className='btn-singup' onClick={() => { setIsLogin(true); setOpenModalAuthen(false); setIsRegister(false) }}> Đăng nhập</p>
                <p
                    className='btn-signin'
                    onClick={() => {
                        setIsRegister(true);
                        setIsLogin(false);
                        setOpenModalAuthen(false)
                    }}
                >
                    Đăng kí
                </p>
            </div>
        )
    }

    return (
        <div className={classNames("all-menu", location.pathname === "/" ? 'all-menu-main' : 'all-menu-secondary')}>
            {location.pathname !== "/" && <p className="province">
                {province?.province || <span>Thông tin người dùng {currentUer?.name}</span>}</p>}
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
                                            dataMenu.map((item, index) => <li onClick={() => {
                                                if (item?.navigate) {
                                                    navigate("/")
                                                }
                                            }}
                                                className={classNames('btn', `btn-${index + 1}`)}>
                                                {item.title}
                                            </li>)
                                        }
                                    </div>
                                    <div className='event-user'>
                                        <button className='btn' onClick={() => setOpenModalAuthen(!openModalAuthen)}>
                                            <span> <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" className='img-btn' /></span>
                                        </button>
                                    </div>
                                    {
                                        openModalAuthen && renderContentAuthen()
                                    }
                                </>
                            )
                            :
                            (
                                <div className='menu-mobile'>
                                    <div className='event-user'>
                                        <button className='btn' onClick={() => setOpenModalAuthen(!openModalAuthen)}>
                                            <span> <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" className='img-btn' /></span>
                                        </button>
                                    </div>
                                    <div onClick={toggleDrawer(!open)} className='icon-menu'>
                                        <DehazeIcon sx={{ color: "black" }} />
                                    </div>
                                    <Drawer data-aos="fade-down" classes={{ root: "custom-menu-mobile" }} open={open} anchor='top' onClose={toggleDrawer(false)}>
                                        {DrawerList}
                                    </Drawer>
                                    {
                                        openModalAuthen && renderContentAuthen()
                                    }
                                </div>
                            )
                    }
                </div >
            </div >
            {
                isLogin &&
                < LoginPage />
            }
            {
                isRegister &&
                < RegisterPage />
            }
        </div>
    )
})

export default MenuPage;