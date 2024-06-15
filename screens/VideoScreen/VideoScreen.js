import React from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, Button, FlatList } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import VideoListItem from '../../components/VideoListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoPlayer from '../../components/VideoPlayer';
import BottomSheet from 'reanimated-bottom-sheet';



const VideoScreen = () => {
  return (
    <View>
      {/* Video Player */}
      <VideoPlayer videoURI={video.videoURI} thumbnailURI={video.thumbnail} />
      {/* Video Info */}
      <View style={styles.VideoInfoContainer}>
      <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.views}>{video.user.name} • {video.views} • {video.createdAt}</Text>
      </View>

      {/* Action list */}
      <View style={styles.actionListContainer}>
        <View style={styles.actionListItem}>
          <AntDesign name="like1" size={25} color="black" />
          <Text style={styles.actionText}>{video.likes}</Text>
        </View>

        <View style={styles.actionListItem}>
          <AntDesign name="dislike2" size={25} color="black" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>

        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="share-outline" size={25} color="black" />
          <Text style={styles.actionText}>Share</Text>
        </View>
        
        <View style={styles.actionListItem}>
          <AntDesign name="download" size={25} color="black" />
          <Text style={styles.actionText}>Download</Text>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userContainer}>

        <Image style={styles.avatar} source={{uri: video.user.image}} />
        <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
          <Text style={styles.channelName}>{video.user.name}</Text>
          <Text style={styles.channelSubscribers}>{video.user.subscribers} subscribers</Text>
        </View>

        <Text style={styles.subscribeBtn}>SUBSCRIBE</Text>
      </View>
      {/* Comments */}
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold'}}>Comments 333</Text>
        <View style={styles.commentContainer}>
          <Image style={styles.commentAvatar} source={{uri: video.user.image}} />
          <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
            <Text style={{marginLeft: 10}}>Thank you. Best video ever!!</Text>
          </View>
        </View>
      </View>

      {/* All comments */}

    </View>
  )
}

{/* Recom Videos */}
const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation