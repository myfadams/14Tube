// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/data/videos.json';
import YouTubeLogo from '../assets/images/YouMate.png';
import styles from '../components/VideoListItem/styles';
styles

const HomeScreen = ({ navigation }) => {
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
              <Text style={styles.categoryText}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>NBA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>iFerg</Text>
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
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="home" size={25} color="white" style={styles.headerIcon} onPress={() => navigation.navigate('Home')} />
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
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="person-circle-outline" size={25} color="white" style={styles.headerIcon} onPress={() => navigation.navigate('You')} />
          <Text style={styles.bottomNavItemText}>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
