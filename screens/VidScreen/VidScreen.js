import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';

const VidScreen = () => {
  return (
<ScrollView style={styles.container}>
      <View style={styles.videoContainer}>
      <VideoPlayer videoURI={video.videoURI} thumbnailURI={video.thumbnail} />
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.views}>{video.user.name} • {video.views} • {video.createdAt}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="thumbs-up-outline" size={24} color="white" />
            <Text style={styles.actionText}>1.4k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="thumbs-down-outline" size={24} color="white" />
            <Text style={styles.actionText}>1.4k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="send-outline" size={24} color="white" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="download-outline" size={24} color="white" />
            <Text style={styles.actionText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark-outline" size={24} color="white" />
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userContainer}>

        <Image style={styles.avatar} source={{uri: video.user.image}} />
        <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <Text style={styles.channelName}>{video.user.name}</Text>
        <Text style={styles.channelSubscribers}>{video.user.subscribers} subscribers</Text>
        </View>
        <TouchableOpacity>
        <Text style={styles.subscribeBtn}>SUBSCRIBE</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.recommendations}>
        <Text style={styles.recommendationHeader}>Maybe you like that</Text>     
      </View>
    </ScrollView>
  )
}

const VideoScreenWithRecommendation = () => {
    return (
      <SafeAreaView style={styles.container}>
          <FlatList
            data={videos}
            renderItem={({ item }) => <VideoListItem video={item} />}
            ListHeaderComponent={VidScreen}
          />
      </SafeAreaView>
    );
  };

export default VideoScreenWithRecommendation