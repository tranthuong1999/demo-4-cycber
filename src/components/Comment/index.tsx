import React, { useEffect, useState } from 'react';
import "./style.scss";
import { Rating, TextField } from '@mui/material';
// import { data } from './data';
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import useListRoomStore from '../../store/room';

const CommentPage = () => {

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const userString = localStorage.getItem("user");
  const user = userString && userString !== "undefined" ? JSON.parse(userString) : null;
  const { listCommentByRoom } = useListRoomStore();



  const renderContent = () => {
    return (
      <>
        <div className="img-logo-com">
          <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
          <p className='hello'> Xin chao</p>
        </div>
        <div className='rating'>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              // setValue(newValue);
            }}
          />
        </div>
        <div className='content-review'>
          <TextField classes={{ root: 'input-review' }} />
        </div>
        <div className='btn'>
          <button className='btn-review'>Đánh giá</button>
        </div>
      </>
    )
  }

  return (
    <div className="comment-page">
      {
        user ? renderContent() :
          <div className='no-login'>
            <p>Cần đăng nhập để bình luận</p>
          </div>
      }
      <div className='comment'>
        <h4 className='content-comment'> Bình luận</h4>
        <div className={classNames("list-comment", isMobile ? "list-comment-mobile" : "")}>
          {
            listCommentByRoom.map((item: any) => {
              return (
                <div className='item-comment'>
                  <div className='block-1'>
                    <div className='img-logo-comment'>
                      {!item.avatar ? <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" /> : <img className='avartar-2' src={item.avatar} />}
                    </div>
                    <div>
                      <h4 className='hello'>{item.tenNguoiBinhLuan}
                        <span> {item.saoBinhLuan > 0 && <Rating value={item.saoBinhLuan} sx={{ color: "rgb(251, 92, 91)" }} />}</span>
                      </h4>
                      <p>3 ngày trước</p>
                    </div>
                  </div>

                  <div className='block-2'>
                    {item.noiDung}
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default CommentPage