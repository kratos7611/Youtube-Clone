import React from 'react'
import { Link } from 'react-router-dom'

import { Box, CardMedia, Typography, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture, demoChannelUrl } from '../../utils/constants'

const ChannelCard = ({ channeldetail, marginTop }) => (
    
    <Box 
      sx={{ boxShadow:'none', borderRadius:'20px', width:{ xs:'356px', md:'300px', marginTop  } }}
    >
      <Link to={`/channel/${channeldetail?.id?.channelId}`}>
        <CardContent 
          sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}
        >
          <CardMedia 
            image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channeldetail?.snippet?.title}
            sx={{ width:'180px', height:'180px', borderRadius:'50%', mb:2, border:'1px solid #e3e3e3' }}
          />
          <Typography variant='h6' sx={{ color:'white' }}>
            {channeldetail?.snippet?.title}
            <CheckCircle 
                sx={{ fontSize:17, color:'gray', ml:'5px' }}
              />
          </Typography>
          {
            (channeldetail?.statistics?.subscriberCount && 
              <Typography sx={{ color:'white' }}>
                {parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>)
          }
        </CardContent>

      </Link>
    </Box>
)

export default ChannelCard