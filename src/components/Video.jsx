import React, { useState, useRef } from 'react'
import video from '../assets/video.mp4';

import { MdPlayArrow, MdOutlinePause } from "react-icons/md";



const Video = () => {
    const [playVideo, setPlayVideo] = useState(true);
    const videoRef = useRef();
    const handleOnClick = () => {
        setPlayVideo((prevValue) => !prevValue);

        if (playVideo) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }

    }

    return (
        <section className='video section' style={{ padding: 0 }}>
            <div className="video__wrapper" >
                <video
                    src={video}
                    ref={videoRef}
                    type='video/mp4'
                    loop
                    controls={false}
                />
                <div className="video__wrapper-overlay">
                    <div className="button" onClick={handleOnClick} data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" >
                        {playVideo ? <MdPlayArrow /> : <MdOutlinePause />}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Video
