import React from 'react'

import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Videos from '../Videos/Videos'
import ChannelCard from '../ChannelCard/ChannelCard'
import { fetchFromApi } from '../../utils/FetchFromApi'


function ChannelDetail() {

  const [channelDetails, setchannelDetails] = useState(null)
  const [videos, setvideos] = useState([]) 

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetails(data?.items[0]))
      
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setvideos(data?.items))
  },[id])


  return (
    <Box minHeight='95vh'>
      <Box align='center'>
        <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', height:'300px', zIndex:10 }} />
        <ChannelCard channeldetail={channelDetails} marginTop='-93px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm:'100px'} }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail