import React from 'react';
import "./style.scss"
import { data } from './data';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HomeIcon from '@mui/icons-material/Home';
import { Rating } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';

const RegisterRoomPage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));




  return (
    <div className='register-room-page'>
      <h1 className='title'> NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</h1>
      <p className='desc'> <span><AccessibilityIcon />  </span>Chủ nhà siêu cấp <span> Hồ Chí Minh, Việt Nam</span></p>
      <div className='img-logo'>
        <img src={data.hinhAnh} />
        <div className='icon-previous'><RemoveRedEyeIcon />Xem trước</div>
      </div>
      <div className={classNames("block-1", isMobile ? "block-1-mobile" : "")}>
        <div className='block-1_child-1'>
          <div className='child_3'>
            <div className='child-3_block-1'>
              <h1 className='title'>Toàn bộ căn hộ. Chủ nhà nnhatsang</h1>
              <p className='title-1'> 3 Khách • Phòng Studio • 1 Phòng ngủ • 1 giường • 1 Phòng tắm</p>
            </div>
            <div className='img-logo'>
              <img src="https://avatars.githubusercontent.com/u/93591100?v=4" />
            </div>
          </div>

          <div className='child_4'>
            <div className='item'>
              <div>
                <HomeIcon />
              </div>
              <div>
                <h4 className='title'> Toàn bộ nhà</h4>
                <p className='desc'> Bạn sẽ có chung cư cao cấp cho riêng mình.</p>
              </div>
            </div>

            <div className='item'>
              <div>
                <HomeIcon />
              </div>
              <div>
                <h4 className='title'> Vệ sinh tăng cường</h4>
                <p className='desc'>
                  Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb.<span>Hiển thị thêm</span>
                </p>
              </div>
            </div>

            <div className='item'>
              <div>
                <HomeIcon />
              </div>
              <div>
                <h4 className='title'>Phong là Chủ nhà siêu cấp</h4>
                <p className='desc'>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</p>
              </div>
            </div>

            <div className='item'>
              <div>
                <HomeIcon />
              </div>
              <div>
                <h4 className='title'>Miễn phí hủy trong 48 giờ</h4>
              </div>
            </div>
          </div>


          <div className='child_5'>
            <div className='btn-translate-elgish'>
              <button>Dịch sang tiếng Anh</button>
            </div>
            <p className='room-desc'>Tự nhận phòng Tự nhận phòng bằng khóa thông minh. Dinh Long là Chủ nhà siêu cấp Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</p>
            <div className='btn-show-more'>
              <a>Hiển thị thêm</a>
            </div>
          </div>
        </div>

        {/* block 2 */}

        <div className='block-1_child-2'>
          <div className='child-item_block-1'>
            <p> <span>$28/ </span>night</p>
            <p> <span> <Rating sx={{ color: "rgb(251, 92, 91)" }} max={1} defaultValue={1} size="small" /></span> <span className='count'>1.55</span><span className='review'>(42) đánh giá</span></p>
          </div>

          <div className='child-item_block-2'>
            <div className='child-item_block-2_child_1'>
              <div className="block-11">
                <p>  Nhận phòng</p>
                <p>  05-08-2024</p>
              </div>
              <div className="block-12">
                <p>Trả phòng</p>
                <p>05-08-2024</p>
              </div>
            </div>

            <div className='child-item_block-2_child_2'>
              <p className='guest'>Khách</p>
              <p className='guest-room'> <span className='descrease'>-</span>1 khách <span className='incease'>+</span></p>
            </div>
          </div>

          <div className='child-item_block-3'>
            <button>Đặt phòng</button>
          </div>
          <p className='decrease-money'>Bạn vẫn chưa bị trừ tiền</p>

          <div className='child-item_block-4'>
            <p>$28 X 7 nights</p>
            <p>$ 196</p>
          </div>

          <div className='child-item_block-5'>
            <p>Cleaning fee</p>
            <p>$ 8</p>
          </div>

          <div className='child-item_block-6'>
            <p>Total before taxes</p>
            <p>204</p>
          </div>


        </div>

      </div>

      <div className='block-2'>
        <div className='block-2_child-1'>
          <h4 className='header-room'> Các tiện ích đi kèm</h4>
          <div className='list-item'>
            <div className={classNames("item-child", isMobile ? "item-child-mobile" : "")}>
              <p><WifiIcon />Wifi</p>
              <p><HomeIcon />Tivi</p>
            </div>
            <div className={classNames("item-child", isMobile ? "item-child-mobile" : "")}>
              <p><span><HomeIcon /> </span>Bãi đỗ xe</p>
              <p><span><HomeIcon /> </span>Bàn ủi</p>
            </div>
            <div className={classNames("item-child", isMobile ? "item-child-mobile" : "")}>
              <p><span><HomeIcon /> </span>Hồ bơi</p>
              <p><span><HomeIcon /> </span>Máy giặt</p>
            </div>
          </div>
          <div className='btn-hide'>
            <button>Ẩn bớt tiện nghi</button>
          </div>
        </div>
        <div className='block-2_child-2'>
        </div>


      </div>


    </div>
  )
}

export default RegisterRoomPage


