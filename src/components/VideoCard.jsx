import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CartContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from '../utils/constants';

const VideoCard = ({ video: { id: videoId }, snippet }) => {
  console.log(snippet);
  return (
    <Card>
      <Link to={'/video/FHTbsZEJspU'}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.tittle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  );
};

export default VideoCard;
