import React from 'react';
import "./style.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from './data';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";


const DetailRoomPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    // const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    const { state } = useLocation();
    const navigate = useNavigate();


    return (
        <div className={classNames("detail-room-page ", isMobile ? "detail-room-page-mobile" : "")}>
            <div className='detail-room-page_block-1'>
                <p className="title">Có 4 chỗ ở tại Hồ Chí Minh • 04/08/2024 – 11/08/2024</p>
                <h1 className="header">Chỗ ở tại khu vực bản đồ đã chọn</h1>
                <div className={classNames("list-room")}>
                    {
                        data.map((item) => {
                            return (
                                <div data-aos="zoom" onClick={() => navigate(`/room-detail/1`, { state: item })} className={classNames("item-room", isMobile ? "item-room-mobile" : "")}>
                                    <div className='img-logo'>
                                        <img src={item.hinhAnh} />
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
                Bản đồ
            </div>

        </div>
    )
}
export default DetailRoomPage;
