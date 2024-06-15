import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import YouTubeLogo from '../../assets/images/YouMate.png';
import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'

const YouScreen = ({navigation}) => {
  return (
<View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.brand}>
          <Image source={YouTubeLogo} style={styles.logo} />
          <Text style={styles.headerText}>StreaMate</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="cast" size={25} color="white" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={25} color="white" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={25} color="white" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
    </View>

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
        <Ionicons name="person-circle-outline" size={25} color="white" />
          <Text style={styles.btnText}>Switch account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-google" size={20} color="white" />
          <Text style={styles.btnText}>Google Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="" size={20} color="white" />
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
            <Ionicons name="film-outline" size={25} color="white" style={{marginRight: 5,}} />
          <Text style={styles.listItemText}>Your videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Ionicons name="download-outline" size={25} color="white" style={{marginRight: 5,}} />
          <Text style={styles.listItemText}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Ionicons name="time-outline" size={25} color="white" style={{marginRight: 5,}} />
          <Text style={styles.listItemText}>Watch later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Ionicons name="download-outline" size={25} color="white" style={{marginRight: 5,}} />
          <Text style={styles.listItemText}>Your movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Ionicons name="cash" size={25} color="white" style={{marginRight: 5,}} />
          <Text style={styles.listItemText}>Get premium</Text>
        </TouchableOpacity>

    </View>
    </ScrollView>

    <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')} >
          <Ionicons name="home" size={25} color="white" style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="play-outline" size={25} color="white" style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Shorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="add-circle-outline" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Subscription')} >
          <Ionicons name="film-outline" size={25} color="white" style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('You')}>
          <Ionicons name="person-circle-outline" size={25} color="white" style={styles.headerIcon} />
          <Text style={styles.bottomNavItemText}>You</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default YouScreen