import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import "./style.scss";

const VideoPlayer = () => {
    const playerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current) {
                //   @ts-ignore
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= 160) { // 160 giây tương đương với phút thứ 2 phút 40 giây
                    //   @ts-ignore
                    playerRef.current.seekTo(100, 'seconds'); // 100 giây
                }
            }
        }, 1000); // Kiểm tra mỗi giây

        return () => clearInterval(interval); // Dọn dẹp khi component bị hủy
    }, []);

    return (
        <div className='video-player'>
            <ReactPlayer
                modestbranding={true}
                showinfo={0}
                rel={0}
                ref={playerRef}
                url='https://www.youtube.com/watch?v=NSnkb1IAjbE'
                playing={true}
                controls={false}
                loop={false} // Không lặp lại toàn bộ video
                muted={true} // Tắt tiếng để cho phép tự động phát
                // style={{ width: "100% !important", height: "700px !important", marginTop: '50px' }}
                //   @ts-ignore
                onReady={() => playerRef.current.seekTo(100, 'seconds')}

                className="custom-video"
            />
        </div>
    );
};

export default VideoPlayer;
