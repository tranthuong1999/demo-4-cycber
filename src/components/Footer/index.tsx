import React from 'react'
import "./style.scss";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import { data } from './data';

const FooterPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    return (
        <div className='footer-page'>
            <div className={classNames("footer-page-block-list", isMobile ? "footer-page-block-list-mobile" : "", isTabnet ? "footer-page-block-list-tabnet" : "")}>
                {
                    data.map((item) => {
                        return (
                            <div className='footer-page-block-item'>
                                <h3> {item.title}</h3>
                                {
                                    item.data.map((desc) => {
                                        return (
                                            <div className='desc'> {desc}</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default FooterPage