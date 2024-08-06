import React, { useState } from 'react';
import "./style.scss";
import ResponsiveModal from '../Modal';
import useAuthenticationStore from '../../store/authentication';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import CommonSnackbar from '../SnackBar';

const LoginPage = () => {

    const { isLogin, setIsLogin, setIsRegister, apiLogin } = useAuthenticationStore();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)
    const [message, setMessage] = useState("");

    const onSubmit = async (data: any) => {
        await apiLogin(data)
            .then((result: any) => {
                setIsLoginSuccess(true);
                if (result.statusCode === 200) {
                    localStorage.setItem("user", JSON.stringify(result.content.user))
                    setMessage("Đăng nhập thành công")
                    setTimeout(() => {
                        setIsLogin(false)
                    }, 1000);
                }
                else {
                    setMessage("Đăng nhập thất bại")
                }
            })
    };

    const contentLogin = () => {
        return (
            <div className='content-page-login'>
                <p className='icon-close' onClick={() => setIsLogin(false)}>X</p>
                <h1 className='title'>Đăng nhập Airbnb</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='label-email'>Email</label>
                    <div className='text-email'>
                        <input
                            placeholder="Vui lòng điền email vào đây..."
                            className={classNames("email", errors.email ? "email-error" : "")}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Email is not valid'
                                }
                            })}
                        />
                        {errors.email && <p className='error'>{String(errors.email.message)}</p>}
                    </div>

                    <label className="label-password ">Password</label>
                    <div className='text-password'>
                        <input
                            placeholder="Vui lòng điền mật khẩu vào đây..."
                            className='password'
                            type='password'
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className='error'>{String(errors.password.message)}</p>}
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
        <>
            <ResponsiveModal
                open={isLogin}
                handleClose={() => setIsLogin(false)}
                content={contentLogin()}
                className='modal-login'
            />
            {
                <CommonSnackbar
                    open={isLoginSuccess}
                    onClose={() => setIsLoginSuccess(false)}
                    message={message}
                    duration={3000}
                    isSuccess={message == "Đăng nhập thành công" ? true : false}
                />
            }
        </>

    )
}

export default LoginPage