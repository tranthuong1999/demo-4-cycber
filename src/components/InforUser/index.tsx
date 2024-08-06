import React, { useEffect } from 'react';
import "./style.scss";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import DoneIcon from '@mui/icons-material/Done';
import ListRoomCommon from '../ListRoom';
import { data } from './data';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const InforUserPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    // const user = JSON.parse(localStorage?.getItem('user')!)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/");
    //     }
    // }, [])
    return (
        <div className={classNames("infor-user-page", isMobile ? "infor-user-page-mobile" : "")}>
            <div className='infor-user-page_left'>
                <div className='img-logo'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
                </div>
                <button className='update-image'> Cập nhật ảnh</button>
                <p className='verify-user'><DomainVerificationIcon sx={{ color: "green" }} /> Xác minh danh tính</p>
                <p className='verify-gender'>Xác minh danh tính của bạn với huy hiệu xác minh danh tính.</p>
                <div className='btn'>
                    <button className='btn-baggage'> Nhận huy hiệu</button>
                </div>
                <p className='hello'> Xinchoa đã xác nhận</p>
                <p className='address'><DoneIcon /> Địa chỉ email</p>
            </div>
            <div className='infor-user-page_right'>
                <h6 className='title'>Xin chào, tôi là xinchao</h6>
                <p className='start'>Bắt đầu tham gia vào 2023</p>
                <div className='btn-edit'>
                    <button className='btn-resume'> Chỉnh sửa hồ sơ</button>
                </div>
                <h4 className='room-hire'>Phòng đã thuê</h4>
                <ListRoomCommon data={data} />
            </div>
        </div>
    )
}

export default InforUserPage