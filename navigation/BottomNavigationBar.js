import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import HomeIcon from '../assets/icons/Home.png';
import ShortsIcon from '../assets/icons/Short.png';
import SubscriptionIcon from '../assets/icons/Subscriptions.png';
import AddIcon from '../assets/icons/Add.png';
import LibraryIcon from '../assets/icons/Library.png';

const BottomNavigationBar = ({navigation}) => {
  return (
    <View>
        <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')}>
        <Image source={HomeIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
        <Image source={ShortsIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavItemText}>Shorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={AddIcon} style={{width: 35, height:35, marginLeft: 15}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Subscription')} >
        <Image source={SubscriptionIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavItemText}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('You')} >
        <Image source={LibraryIcon} style={styles.bottomNavIcon}  />
          <Text style={styles.bottomNavItemText}>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomNavigationBar