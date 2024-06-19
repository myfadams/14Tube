import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';
import LikeIcon from '../../assets/icons/Like.png';
import DislikeIcon from '../../assets/icons/Dislike.png';
import DownloadIcon from '../../assets/icons/Download.png';
import CutIcon from '../../assets/icons/Cut.png';
import ShareIcon from '../../assets/icons/Share.png';
import ReportIcon from '../../assets/icons/Repor user.png';
import SaveIcon from '../../assets/icons/Clone.png';

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
        <ScrollView horizontal>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={LikeIcon} style={styles.vectors} />
            <Text style={styles.actionText}>1.4k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={DislikeIcon} style={styles.vectors} />
            <Text style={styles.actionText}>1.4k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={ShareIcon} style={styles.vectors} />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={DownloadIcon} style={styles.vectors} />
            <Text style={styles.actionText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={CutIcon} style={styles.vectors} />
            <Text style={styles.actionText}>Cut</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={SaveIcon} style={styles.vectors} />
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
          <Image source={ReportIcon} style={styles.vectors} />
            <Text style={styles.actionText}>Report</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View style={styles.userContainer}>

        <Image style={styles.avatar} source={{uri: video.user.image}} />
        <View style={styles.userInfo}>
        <Text style={styles.channelName}>{video.user.name}</Text>
        <Text style={styles.channelSubscribers}>{video.user.subscribers}</Text>
        </View>
        <TouchableOpacity>
        <Text style={styles.subscribeBtn}>Subscribe</Text>
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
      <View style={styles.comments}>
        <Text style={{fontWeight: 'bold', color:'grey'}}>Comments 333</Text>
        <View style={styles.commentContainer}>
          <Image style={styles.commentAvatar} source={{uri: video.user.image}} />
          <View style={{flex: 1, justifyContent: 'center',}}>
            <Text style={{color:'white'}}>Thank you. Best video ever!!</Text>
          </View>
      </View>
      </View>
      </TouchableOpacity>
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