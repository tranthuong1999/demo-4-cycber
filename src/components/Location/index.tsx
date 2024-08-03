import React, { useState } from 'react';
import "./style.scss";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import {  data_adrress } from './data';
import BasicPopover from '../PopoverCommon';
// chuý ý cách sử dụng flex-wrap
const LocationPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    const [openAddress, setOpenAddress] = useState(false)
    const [anchoAddress, setAnchoAddress] = useState()
    const [goProvince, setGoProvince] = useState('');
    const [anchoGuest, setAnchoGuest] = useState('');
    const [countGuest, setCountGuest] = useState(1)

    const contentAddress = () => {
        return (
            <div className='id-address'>
                <h6 className='title'> Tìm kiếm địa điểm</h6>
                <div className={classNames("list-address", isMobile ? "list-address-mobile" : "")}>
                    {
                        data_adrress.map((item) => {
                            return (
                                <div
                                    className='item-address'
                                    onClick={() => {
                                        if (item.province === 'None') {
                                            setOpenAddress(false)
                                            setGoProvince('')
                                            return;
                                        }
                                        setGoProvince(item.province)
                                        setOpenAddress(false)
                                    }}
                                >
                                    <div className='img-logo'>
                                        <img src={item.image} />
                                    </div>
                                    <p> {item.province}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const contentGuest = () => {
        return (
            <div className='content-guest'>
                <p> Khách</p>
                <div className='count'>
                    <span
                        onClick={() => {
                            setCountGuest((prev) => prev < 2 ? 1 : prev - 1)
                        }}
                        className='decrease'
                    >
                        -
                    </span>
                    {countGuest}
                    <span onClick={() => setCountGuest(countGuest + 1)} className='increase'>+</span>
                </div>
            </div>
        )
    }

    return (
        <div className='location-page'>
            <div className={classNames("location-block-1", isMobile ? "location-block-1-mobile" : "")}>
                <div className='location-block-1_child-1'
                    onClick={(event: any) => {
                        setOpenAddress(true)
                        setAnchoAddress(event.currentTarget);
                    }}>
                    <p className='address'>Địa điểm</p>
                    <p className='go'>{goProvince ? <span>{goProvince}</span> : "Bạn sắp đi đâu?"}</p>
                </div>
                <div className='location-block-1_child-2'>
                    <p >02/08/2024 – 09/08/2024</p>
                </div>
                <div
                    className='location-block-1_child-3'
                    onClick={(event: any) => {
                        setAnchoGuest(event.currentTarget);
                    }}
                >
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
            {
                openAddress &&
                <BasicPopover
                    open={openAddress}
                    onClose={() => setOpenAddress(false)}
                    anchorEl={anchoAddress}
                    content={contentAddress()}
                />
            }
            {
                anchoGuest &&
                <BasicPopover
                    open={Boolean(anchoGuest)}
                    onClose={() => setAnchoGuest('')}
                    anchorEl={anchoGuest}
                    content={contentGuest()}
                    className="custom-popover"
                />
            }
        </div>
    )
}

export default LocationPage