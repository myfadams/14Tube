// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



type VideoListItemProps = {
    video: {
        id: string,
        createdAt: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: string,
        user: {
            name: string,
            image?: string,
        }
    }
}
const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;

  return (
      <View>
            {/* Video Component */}
            <View style={styles.videoContainer}>
                {/* Thumbnail */}
                <View>
                    <Image style={styles.thumbnail} source={{uri: video.thumbnail}} />
                    <View style={styles.durationContainer}>
                        <Text style={styles.durationText}>{video.duration}</Text>
                    </View>
                </View>

                {/* Title row */}
                <View style={styles.videoInfo}>
                    {/* Avatar */}
                    <Image style={styles.channelImage} source={{uri: video.user.image}}/>
                    {/* Middle */}
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{video.title}</Text>
                        <Text style={styles.views}>{video.user.name} • {video.views} • {video.createdAt}</Text>
                    </View>
                    {/* Icon */}
                    {/* <Ionicons name="ellipsis-vertical" size={20} style={styles.icon}/> */}
                </View>

            </View>
 
        </View>
  );
};


export default VideoListItem;
