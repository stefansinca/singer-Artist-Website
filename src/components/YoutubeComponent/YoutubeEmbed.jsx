import React from 'react';
import PropTypes  from 'prop-types';

import './YouTubeEmbed.css';

const YoutubeEmbed = ({embedId}) => {
  return (
    <div className='video-responsive'>
        <iframe
        width='100%'
        height='100%' 
        src={`https://www.youtube.com/embed/${embedId}`} 
        frameBorder="0"
        allow='accelerometer; autoplay; clipboard-write; encrypted-media'
        allowFullScreen
        title='Embedded youtube'
        />
    </div>
  );

  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
}

export default YoutubeEmbed;