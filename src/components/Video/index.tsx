import React, { useCallback, useEffect, useState } from 'react'
import queryString from 'query-string'

import { VideoContainer } from './styles'
interface VideoProps {
  url: string
}

const Video: React.FC<VideoProps> = ({ url }) => {
  const [videoUrl, setVideoUrl] = useState(null)

  const parseVideoUrl = useCallback(() => {
    const isVimeo = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|([A-z0-9]+\/review\/))?([0-9]+)/i.exec(
      url
    )

    if (isVimeo) {
      const videoId = isVimeo[6]
      const serviceURL = 'https://player.vimeo.com/video'
      const params =
        'color=3bb454&byline=0&portrait=0&fun=0&playsinline=0&title=0'
      return `${serviceURL}/${videoId}?${params}`
    }

    const [, urlParams] = url.split('?')
    const { v: videoId, list: videoList } = queryString.parse(urlParams)
    const serviceURL = 'https://www.youtube.com/embed'
    const params =
      'autoplay=0&controls=2&modestbranding=0&playsinline=0&rel=0&showinfo=0'

    if (videoList) {
      return `${serviceURL}/videoseries?list=${videoList}&${params}`
    }
    setVideoUrl(`${serviceURL}/${videoId}?${params}`)
  }, [url])

  useEffect(() => {
    parseVideoUrl()
  }, [parseVideoUrl])

  return (
    <VideoContainer>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  )
}

export default Video
