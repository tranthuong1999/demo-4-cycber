import "./style.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from './data';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import ban_do from "../../assets/ban_do.jpg"
import ListRoomCommon from '../ListRoom';

const DetailRoomPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div className={classNames("detail-room-page ", isMobile ? "detail-room-page-mobile" : "")}>
            <div className='detail-room-page_block-1'>
                <p className="title">Có 4 chỗ ở tại Hồ Chí Minh • 04/08/2024 – 11/08/2024</p>
                <h1 className="header">Chỗ ở tại khu vực bản đồ đã chọn</h1>
                <ListRoomCommon data={data} />
            </div>

            <div className='detail-room-page_block-2'>
                <img src={ban_do} style={{ width: "100%", height: '800px', borderRadius: '8px' }} />
            </div>

        </div>
    )
}
export default DetailRoomPage;
