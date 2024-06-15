import {   StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem'
import YouTubeLogo from '../../assets/images/YouMate.png';


const SubscriptionScreen = ({navigation}) => {
  return (
<View style={styles.container}>
<View style={styles.header}>
        <View style={styles.brand}>
        <Image
      source={YouTubeLogo}
      style={styles.logo}
    />
        <Text style={styles.headerText}>StreaMate</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="cast" size={25} color='white' style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={25} color='white' style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={25} color='white' style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
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

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={25} color={'white'} style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
        <Ionicons name="play-outline" size={25} color={'white'} style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Shorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
        <Ionicons name="add-circle-outline" size={50} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}  onPress={() => navigation.navigate('Subscription')}>
        <Ionicons name="film" size={25} color={'white'} style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}  onPress={() => navigation.navigate('You')} >
        <Ionicons name="person-circle-outline" size={25} color={'white'} style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubscriptionScreen