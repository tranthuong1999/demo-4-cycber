import React from 'react';
import "./style.scss";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';


const ListRoomCommon = (props: { data: any[] }) => {
    const { data } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const navigate = useNavigate();

    const handleItemClick = (e: any, item: any) => {
        if (e.target.closest('.swiper-button-prev') || e.target.closest('.swiper-button-next')) {
            e.stopPropagation();
            return;
        }
        navigate(`/room-detail/1`, { state: item });
    };

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
    )
}

export default ListRoomCommon