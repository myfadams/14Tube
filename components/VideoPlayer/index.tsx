import { View, Text } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Video } from 'expo-av'
import { Playback } from 'expo-av/build/AV'

interface VideoPlayerProps {
  videoURI: string,
  thumbnailURI?: string
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;

  return (
    <View>
      <Video
        source={{ uri: videoURI }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        posterSource={{
          uri: thumbnailURI,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={false}
        useNativeControls
        resizeMode="contain"
      />
    </View>
  );
};

export default VideoPlayer