import React, { useEffect } from 'react';
import "./style.scss";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import { data_province, data_any_where } from './data';
import { useNavigate } from 'react-router-dom';
import useAuthenticationStore from '../../store/authentication';


const AddressPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    const navigate = useNavigate();
    const todos = useAuthenticationStore((state) => state.todos);

    console.log("todos",todos)


    return (
        <div className='address-page'>
            <div className={classNames("location-block-3", isMobile ? "location-block-3-mobile" : "", isTabnet ? "location-block-3-tabnet" : "")}>
                {
                    data_province.map((item) => {
                        return (
                            <div data-aos="zoom-in" data-aos-duration={700} data-aos-delay={100} className='location-block-3_item' onClick={() => navigate(`/room/${item.router}`, { state: item.maViTri })}>
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
                                <div
                                    onClick={() => navigate(`/room/${item.router}`, { state: item.maViTri })}
                                    data-aos="zoom-in" data-aos-duration={700} data-aos-delay={100} className='location-block-4_item'>
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

export default AddressPage