import "./style.scss";
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import ban_do from "../../assets/ban_do.jpg"
import ListRoomCommon from '../ListRoom';
import { useEffect } from "react";
import useListRoomStore from "../../store/room";

const DetailRoomPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const { state } = useLocation();
    const { listRoomByLocation, apiFetchRoomByCodeLocation } = useListRoomStore();

    useEffect(() => {
        apiFetchRoomByCodeLocation(state);
    }, [state])



    return (
        <div className={classNames("detail-room-page ", isMobile ? "detail-room-page-mobile" : "")}>
            <div className='detail-room-page_block-1'>
                <p className="title">Có 4 chỗ ở tại Hồ Chí Minh • 04/08/2024 – 11/08/2024</p>
                <h1 className="header">Chỗ ở tại khu vực bản đồ đã chọn</h1>
                <ListRoomCommon data={listRoomByLocation} />
            </div>

            <div className='detail-room-page_block-2'>
                <img src={ban_do} style={{ width: "100%", height: '800px', borderRadius: '8px' }} />
            </div>

        </div>
    )
}
export default DetailRoomPage;
