import React, { useEffect, useState } from 'react';
import "./style.scss";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import DoneIcon from '@mui/icons-material/Done';
import ListRoomCommon from '../ListRoom';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import useListRoomStore from '../../store/room';
import ResponsiveModal from '../Modal';
import { useForm } from "react-hook-form";
import useAuthenticationStore from '../../store/authentication';
import CommonSnackbar from '../SnackBar';


const InforUserPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const userString = localStorage.getItem("user");
    const user = userString && userString !== "undefined" ? JSON.parse(userString) : null;
    const { apiGetRoomByUser, apiGetDetailRoom } = useListRoomStore();
    const [listAllRoomHire, setListAllRoomHire] = useState<any[]>([]);
    const [showUpdateInforUser, setShowUpdateInforUser] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { apiUpdateUser } = useAuthenticationStore();
    const [isUpdateSucc, setIsUpdateSucc] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const result = await apiGetRoomByUser(user?.id);
                if (result.statusCode === 200) {
                    const roomDetailsPromises = result.content.map((item: any) => apiGetDetailRoom(item.maPhong));
                    const roomDetails = await Promise.all(roomDetailsPromises);
                    const allRooms = roomDetails.map((res: any) => res.content);
                    setListAllRoomHire(allRooms);
                }
            } catch (error) {
                console.error("Error fetching room details", error);
            }
        };
        fetchRoomDetails();
    }, [])

    const onSubmit = async (data: any) => {
        const gender = data.gender === "Nam" ? true : false
        await apiUpdateUser(user.id, { ...data, gender })
            .then((result: any) => {
                if (result.statusCode !== 200) {
                    return;
                }
                setIsUpdateSucc(true);
                setShowUpdateInforUser(false);
                localStorage.setItem("user", JSON.stringify(result.content))
            })
    };

    const renderContentUpdateInforUser = () => {
        return (
            <div className='update-infor-user'>
                <div className='block-1'>
                    <h4 className='title'> Chỉnh sửa hồ sơ</h4>
                    <p className='icon-close' onClick={() => setShowUpdateInforUser(false)}> X </p>
                </div>
                <div className='block-2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='block-2-form'>
                            <div className='block-2-child'>
                                <label className="name-label"><span>*</span>Email</label>
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
                                        defaultValue={user?.email}
                                    />
                                    {errors.email && <p className='error'>{String(errors.email.message)}</p>}
                                </div>
                            </div>
                            <div className='block-2-child'>
                                <label className="name-label"><span>*</span>Name</label>
                                <div className="text-name">
                                    <input
                                        defaultValue={user?.name}
                                        placeholder="Vui lòng điền tên vào đây..."
                                        className={classNames("name", errors.name ? "name-error" : "")}
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <p className='error'>{String(errors.name.message)}</p>}
                                </div>
                            </div>

                            <div className='block-2-child'>
                                <label className="name-label"><span>*</span>Phone</label>
                                <div className="text-name">
                                    <input
                                        defaultValue={user?.phone}
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
                            </div>
                            {/* birth day */}
                            <div className='block-2-child'>
                                <label className="name-label"><span>*</span>Birthday</label>
                                <div>
                                    <input
                                        defaultValue={user?.birthday}
                                        className={classNames("birthday")}
                                        type="date"
                                        {...register('birthday', { required: 'Birthday is required' })}
                                    />
                                    {errors.birthday && <p className='error'>{String(errors.birthday.message)}</p>}
                                </div>
                            </div>
                            {/* gender */}
                            <div className='block-2-child'>
                                <label className="name-label"><span>*</span>Gender</label>
                                <div>
                                    <select defaultValue="Nam" className={classNames("gender")} {...register('gender', { required: 'Gender is required' })}>
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                    {errors.gender && <p className='error'>{String(errors.gender.message)}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="div-update">
                            <button type="submit" className='btn-update'>Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

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
                <h6 className='title'>Xin chào, tôi là <span>{user?.name} </span></h6>
                <p className='start'>Bắt đầu tham gia vào 2023</p>
                <div className='btn-edit'>
                    <button className='btn-resume' onClick={() => setShowUpdateInforUser(true)}> Chỉnh sửa hồ sơ</button>
                </div>
                <h4 className='room-hire'>Phòng đã thuê</h4>
                <ListRoomCommon data={listAllRoomHire} />
            </div>
            {
                showUpdateInforUser &&
                <ResponsiveModal
                    open={showUpdateInforUser}
                    handleClose={() => setShowUpdateInforUser(false)}
                    content={renderContentUpdateInforUser()}
                    className='modal-update-user-infor'
                />
            }
            {
                isUpdateSucc &&
                <CommonSnackbar
                    open={isUpdateSucc}
                    onClose={() => setIsUpdateSucc(false)}
                    message='Cập nhật thành công'
                    isSuccess={true}
                />
            }
        </div>
    )
}

export default InforUserPage