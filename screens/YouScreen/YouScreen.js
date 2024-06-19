import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import YouTubeLogo from '../../assets/images/YouMate.png';
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import TopNavigationBar from '../../navigation/TopNavigationBar';
import UserIcon from '../../assets/icons/User.png';
import IcognitoIcon from '../../assets/icons/Anonymity.png';
import MovieIcon from '../../assets/icons/Movie.png';
import YoutubeIcon from '../../assets/icons/Youtube.png';
import AnalysticsIcon from '../../assets/icons/Analystics.png';
import UnknownIcon from '../../assets/icons/Unknown.png';
import PlayIcon from '../../assets/icons/Play.png';
import DownloadIcon from '../../assets/icons/Download.png';
import HistoryIcon from '../../assets/icons/History.png';
import BottomNavigationBar from '../../navigation/BottomNavigationBar';


const YouScreen = ({navigation}) => {
  return (
<View style={styles.container}>
    <TopNavigationBar />

    <ScrollView>
    <View style={styles.profileSection}>
        <Image
          style={styles.profileImageLarge}
          source={{uri: video.user.image}}
        />
        <Text style={styles.profileName}>Ama Ata Aidoo</Text>
        <Text style={styles.profileHandle}>@amadoo</Text>
        <TouchableOpacity>
          <Text style={styles.viewChannel}>View channel</Text>
        </TouchableOpacity>
    </View>
      

      <View style={styles.buttonRow}>
        <ScrollView horizontal>
        <TouchableOpacity style={styles.button}>
        <Image source={UserIcon} style={styles.icon} />
          <Text style={styles.btnText}>Switch account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-google" size={18} color="white" />
          <Text style={styles.btnText}>Google Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={IcognitoIcon} style={styles.icon} />
          <Text style={styles.btnText}>Turn on Incognito</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>

      
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>History</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
        <ScrollView horizontal>
          <TouchableOpacity>
          <Image
            style={styles.videoThumbnail}
            source={{uri: video.thumbnail}}
          />
          {/* <Text style={{color: 'white'}}>
          {video.title}  
          </Text> */}
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.videoThumbnail}
            source={{uri: video.thumbnail}}
          />
          {/* <Text style={{color: 'white'}}>
          {video.title}  
          </Text> */}
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.videoThumbnail}
            source={{uri: video.thumbnail}}
          />
          {/* <Text style={{color: 'white'}}>
          {video.title}  
          </Text> */}
          </TouchableOpacity>
        </ScrollView>
    </View>
      
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>Playlists</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newPlaylist}>
          <MaterialIcons name="add" size={24} color="white" />
          <Text style={{color: 'white'}}>New playlist</Text>
        </TouchableOpacity>
    </View>
      
    <View style={styles.section}>
        <TouchableOpacity style={styles.listItem}>
        <Image source={PlayIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Your videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={DownloadIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={HistoryIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Watch later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={MovieIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Your movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={YoutubeIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Get premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={UnknownIcon} style={styles.icon} />
          <Text style={styles.listItemText}>Help and feedback</Text>
        </TouchableOpacity>

    </View>
    </ScrollView>

    <BottomNavigationBar route={'You'} navigation={navigation} />
</View>
  )
}

export default YouScreen