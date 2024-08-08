import React from 'react';
import "./style.scss";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation, useNavigate } from 'react-router-dom';
import { data_province } from '../Address/data';


const ListRoomCommon = (props: { data: any[] }) => {
    const { data } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const navigate = useNavigate();
    const location = useLocation();

    const handleItemClick = (e: any, item: any) => {
        if (e.target.closest('.swiper-button-prev') || e.target.closest('.swiper-button-next')) {
            e.stopPropagation();
            return;
        }
        navigate(`/room-detail/${item.id}`, { state: item.id });
    };

    const province = data_province.find((item) => {
        const parts = location.pathname.split('/');
        return item.router === parts[parts.length - 1];
    })

    // const check_tinh = data.map((item: any) => {
    //     const find_tinh = data_province.find((i) => item.maViTri === i.maViTri)
    //     return {
    //         ...item,
    //         ...find_tinh
    //     }
    // })

    // console.log("check tinh", check_tinh);


    return (
        <div className={classNames("list-room")}>
            {
                data.map((item) => {
                    return (
                        <div
                            data-aos="zoom-in"
                            onClick={(e) => handleItemClick(e, item)}
                            className={classNames("item-room", isMobile ? "item-room-mobile" : "")}
                        >
                            <div className={classNames("img-logo", isMobile ? 'img-logo-mobile' : "")}>
                                <Swiper
                                    navigation={true}
                                    pagination={true}
                                    modules={[Navigation, Pagination]}
                                    className="my-swiper-room"
                                >
                                    {[1, 2, 3, 4, 5].map((i) => {
                                        return (
                                            <SwiperSlide>
                                                {/* @ts-ignore */}
                                                <img src={item.hinhAnh} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className='desc-room'>
                                <p className='favorite'>Guest favorite</p>
                                <p className='icon-heart'>
                                    <FavoriteBorderIcon classes={{ root: "icon" }} />
                                </p>
                            </div>
                            <div className={classNames("room-desc", isMobile ? "room-desc-mobile" : "")}>
                                <div className="block-1">
                                    {/* @ts-ignore */}
                                    <p className='title-1'> Toàn bộ căn hộ dịch vụ tại {province?.province}</p>
                                    <p className='title-2'>{item.tenPhong}</p>
                                    <span></span>
                                    <p className='title-3'>
                                        {item?.khach && "Khách •"} {item?.studio && "Phòng Studio •"} {item?.phongNgu && "Phòng ngủ •"} {item?.giuong && "Giường •"} {item?.phongTam && "Phòng tắm •"}
                                    </p>
                                    <p className='title-4'>
                                        {item.wifi && "Wifi •"} {item.mayGiat && "Máy giặt •"}  {item.tivi && "Ti vi •"} {item?.doXe && "Đỗ xe •"} {item?.hoBoi && "Hồ bơi •"}
                                    </p>
                                </div>

                                <div className="block-2"> <span>$ {item.giaTien} </span> / đêm</div>

                            </div>

                        </div>
                    )
                })

            }
        </div>
    )
}

export default ListRoomCommon