import React from 'react';
import "./style.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from './data';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import ban_do from "../../assets/ban_do.jpg"




const DetailRoomPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleItemClick = (e: any, item: any) => {
        if (e.target.closest('.swiper-button-prev') || e.target.closest('.swiper-button-next')) {
            e.stopPropagation();
            return;
        }

        navigate(`/room-detail/1`, { state: item });
    };


    return (
        <div className={classNames("detail-room-page ", isMobile ? "detail-room-page-mobile" : "")}>
            <div className='detail-room-page_block-1'>
                <p className="title">Có 4 chỗ ở tại Hồ Chí Minh • 04/08/2024 – 11/08/2024</p>
                <h1 className="header">Chỗ ở tại khu vực bản đồ đã chọn</h1>
                <div className={classNames("list-room")}>
                    {
                        data.map((item) => {
                            return (
                                <div
                                    data-aos="zoom-in"
                                    onClick={(e) => handleItemClick(e, item)}
                                    className={classNames("item-room", isMobile ? "item-room-mobile" : "")}
                                >
                                    <div className='img-logo'>
                                        <Swiper
                                            navigation={true}
                                            pagination={true}
                                            modules={[Navigation, Pagination]}
                                            className="my-swiper-room"
                                        >
                                            {[1, 2, 3, 4, 5].map((i) => {
                                                return (
                                                    <SwiperSlide>
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
                                            <p className='title-1'> Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh</p>
                                            <p className='title-2'>STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ.STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ</p>
                                            <span></span>
                                            <p className='title-3'>
                                                3 Khách • Phòng Studio • 1 Phòng ngủ • 1 giường • 1 Phòng tắm
                                            </p>
                                            <p className='title-4'>
                                                Wifi • Máy giặt • Ti vi  • Đỗ xe  • Hồ bơi
                                            </p>
                                        </div>

                                        <div className="block-2"> <span>$ 28 </span> / đêm</div>

                                    </div>

                                </div>
                            )
                        })

                    }
                </div>
            </div>

            <div className='detail-room-page_block-2'>
                <img src={ban_do} style={{ width: "100%", height:'800px', borderRadius:'8px' }} />
            </div>

        </div>
    )
}
export default DetailRoomPage;
