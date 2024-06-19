import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CastIcon from '../assets/icons/Cast.png';
import NotificationIcon from '../assets/icons/Notification.png';
import SearchIcon from '../assets/icons/Search.png';
import YouTubeLogo from '../assets/images/YouMate.png';

const TopNavigationBar = () => {
  return (
    <View style={styles.header}>
        <View style={styles.brand}>
          <Image source={YouTubeLogo} style={styles.logo} />
          <Text style={styles.headerText}>StreaMate</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={CastIcon} style={styles.vectors} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={NotificationIcon} style={styles.vectors} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={SearchIcon} style={styles.vectors} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default TopNavigationBar