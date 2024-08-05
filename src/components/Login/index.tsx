import React from 'react';
import "./style.scss";
import ResponsiveModal from '../Modal';
import useAuthenticationStore from '../../store/authentication';
import { TextField } from '@mui/material';

const LoginPage = () => {

    const { isLogin, setIsLogin, setIsRegister } = useAuthenticationStore();

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây
        console.log("submit")
    };

    const contentLogin = () => {
        return (
            <div className='content-page-login'>
                <p className='icon-close' onClick={() => setIsLogin(false)}>X</p>
                <h1 className='title'>Đăng nhập Airbnb</h1>
                <form onSubmit={handleLoginSubmit}>
                    <label className='label-email'>Email</label>
                    <div className='text-email'>
                        <TextField placeholder="Vui lòng nhập tài khoản" type="email" classes={{ root: "email" }} />
                    </div>
                    <label className='label-password'>Mật khẩu</label>
                    <div className='text-password'>
                        <TextField placeholder="Vui lòng nhập mật khẩu" type="password" classes={{ root: "password" }} />
                    </div>
                    <div className="button-authen">
                        <button className='btn btn-register'
                            onClick={() => {
                                setIsLogin(false)
                                setIsRegister(true)
                            }}
                        >
                            Đăng ký
                        </button>
                        <button className='btn btn-login' type="submit">  Đăng nhập</button>
                    </div>
                </form>
            </div>
        )
    }


    return (
        <ResponsiveModal
            open={isLogin}
            handleClose={() => setIsLogin(false)}
            content={contentLogin()}
            className='modal-login'
        />
    )
}

export default LoginPage