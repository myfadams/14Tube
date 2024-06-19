import {   StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem'
import YouTubeLogo from '../../assets/images/YouMate.png';
import BottomNavigationBar from '../../navigation/BottomNavigationBar'
import TopNavigationBar from '../../navigation/TopNavigationBar'


const SubscriptionScreen = ({navigation}) => {
  return (
<View style={styles.container}>
  <TopNavigationBar />
    <ScrollView>
      <View>
        <ScrollView horizontal style={styles.channelList}>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Technical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Netflix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Marvel Stu.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>CharliMarie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Technical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Netflix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>Marvel Stu.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.channelItem}>
            <Image
              source={{ uri: video.user.image }} // Replace with your actual image
              style={styles.channelImage}
            />
            <Text style={styles.channelText}>CharliMarie</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Continue watching</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Unwatch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Unwatch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Unwatch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Unwatch</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>

    <BottomNavigationBar route={'Subscription'} navigation={navigation} />
    </View>
  )
}

export default SubscriptionScreen