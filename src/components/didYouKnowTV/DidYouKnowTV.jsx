import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DidYouKnowTV.css'
import backgroundImage from './../../images/screenshot.png';

const DidYouKnowTV = () => {
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
            const response = await axios.get(
                'https://www.googleapis.com/youtube/v3/playlistItems',
                {
                    params: {
                    part: 'snippet',
                    playlistId: 'PLmbqX3EgB-VMK2fBCUKYgBuJn-Dlrh9Ky', 
                    maxResults: 1,
                    order: 'date',
                    key: 'AIzaSyBJC1nwZpWgeKwdX9B04c0hW9meIZD7wps', 
                    },
                } 
            );
            
            const latestVideoId = 
            response.data.items[0]?.snippet.resourceId.videoId || 'DEFAULT_VIDEO_ID';

        setVideoId(latestVideoId);
      } catch (error) {
        console.error('Error fetching latest video from playlist:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!videoId) {
    return <div>Loading...</div>;
  }

  return ( 
    <div>
            <div className="flex items-center justify-start p-20"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <h1 className='text-5xl font-bold mb-4 text-[#eeebde]'>Did You Know TV</h1>
            </div>

            <div className="video-container flex flex-col items-center justify-center my-8 ">
                <iframe className='outline rounded'
                    width="800"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p className="text-xl mt-12 mb-8">Discover more content on our founders YouTube channel.</p>
                <a href="https://www.youtube.com/@2Badda"
                className="mt-5 bg-[#262626] text-[#FFFFFF] font-bold py-2 px-4 rounded hover:bg-[#e76d71]"
                target="_blank" rel="noopener noreferrer">2 Badda's Youtube Page
                </a>
            </div>
        </div>
    );
};

export default DidYouKnowTV;


