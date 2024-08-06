import React, { useState } from 'react';
import "./style.scss";
import ResponsiveModal from '../Modal';
import useAuthenticationStore from '../../store/authentication';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterPage = () => {
    const { isRegister, setIsRegister } = useAuthenticationStore();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log("register data", data);
    };
    const contentRegister = () => {
        return (
            <div className='register-page'>
                <p className='icon-close' onClick={() => setIsRegister(false)}>X</p>
                <h1 className='title'> Đăng ký tài khoản Airbnb </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="name-label">Name</label>
                    <div className="text-name">
                        <input
                            placeholder="Vui lòng điền tên vào đây..."
                            className={classNames("name", errors.name ? "name-error" : "")}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className='error'>{String(errors.name.message)}</p>}
                    </div>

                    <label className="name-label">Phone</label>
                    <div className="text-name">
                        <input
                            placeholder="Vui lòng điền số điện thoại vào đây..."
                            className={classNames("name", errors.name ? "name-error" : "")}
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Phone number must be 10 digits'
                                }
                            })}
                        />
                        {errors.phone && <p className='error'>{String(errors.phone.message)}</p>}
                    </div>

                    <label className="name-label">Email</label>
                    <div className="text-name">
                        <input
                            placeholder="Vui lòng điền email vào đây..."
                            className={classNames("name", errors.name ? "name-error" : "")}
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
                    <label className="name-label">Password</label>
                    <div className="text-name-password">
                        <input
                            placeholder="Vui lòng điền mật khẩu vào đây..."
                            className={classNames("name", errors.name ? "name-error" : "")}
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: 'Password is required' })}
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <RemoveRedEyeIcon className='icon-show' /> : <VisibilityOffIcon className='icon-show' />}
                        </span>
                        {errors.password && <p className='error'>{String(errors.password.message)}</p>}
                    </div>

                    {/* birth day */}
                    <div className='block-bottom'>
                        <div className='block-1'>
                            <label className="name-label">Birthday</label>
                            <div>
                                <input
                                    className={classNames("birthday", errors.birthday ? 'birthday-error' : "")}
                                    type="date"
                                    {...register('birthday', { required: 'Birthday is required' })}
                                />
                                {errors.birthday && <p className='error'>{String(errors.birthday.message)}</p>}
                            </div>
                        </div>
                        <div className='block-1'>
                            <label className="name-label">Gender</label>
                            <div>
                                <select className={classNames("gender", errors.birthday ? 'birthday-error' : "")} {...register('gender', { required: 'Gender is required' })}>
                                    <option value="">Chọn giới tính</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <p className='error'>{String(errors.gender.message)}</p>}
                            </div>
                        </div>


                    </div>

                    <div className="div-register">
                        <button type="submit" className='btn-register'>Đăng ký</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <ResponsiveModal
            open={isRegister}
            handleClose={() => setIsRegister(false)}
            content={contentRegister()}
            className='modal-register'
        />
    )
}

export default RegisterPage