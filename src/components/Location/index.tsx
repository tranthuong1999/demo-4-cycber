import React from 'react';
import "./style.scss";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import { data, data_any_where } from './data';

// chuý ý cách sử dụng flex-wrap

const LocationPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));


    return (
        <div className='location-page'>
            <div className='location-block-1'>
                <div className='location-block-1_child-1'>
                    <h6 className='address'>Địa điểm</h6>
                    <p className='go'>Bạn sắp đi đâu?</p>
                </div>
                <div className='location-block-1_child-2'>
                    <p >02/08/2024 – 09/08/2024</p>
                </div>
                <div className='location-block-1_child-3'>
                    <p>Thêm khách</p>
                    <span><SearchIcon sx={{ color: "#fff" }} /></span>
                </div>
            </div>
            <div className={classNames("location-block-2", isMobile ? "location-block-2-mobile" : "")}>
                <button> Loại nơi ở</button>
                <button> Giá</button>
                <button> Đặt ngay</button>
                <button> Phòng và phòng ngủ</button>
                <button> Bộ lọc khác</button>
            </div>
            <div className={classNames("location-block-3", isMobile ? "location-block-3-mobile" : "", isTabnet ? "location-block-3-tabnet" : "")}>
                {
                    data.map((item) => {
                        return (
                            <div className='location-block-3_item'>
                                <div className='img-logo'>
                                    <img src={item.image} />
                                </div>
                                <div className='desc'>
                                    <p className='province'> {item.province}</p>
                                    <p className='hour'> {item.hour}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            {/* block -4 */}
            <div className={"location-block-4"}>
                <h1 className='header'> Ở bất cứ đâu</h1>
                <div className={classNames("location-block-4_list", isMobile ? "location-block-4_list-mobile" : "", isTabnet ? "location-block-4_list-tabnet" : "")}>
                    {
                        data_any_where.map((item) => {
                            return (
                                <div data-aos="zoom-in" data-aos-duration={700} data-aos-delay={100} className='location-block-4_item'>
                                    <div className='img-logo'>
                                        <img src={item.image} />
                                    </div>
                                    <p className='title'> {item.title}</p>
                                </div>
                            )
                        })
                    }

                </div>


            </div>
        </div>
    )
}

export default LocationPage