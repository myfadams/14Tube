import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/data/videos.json';
import styles from '../components/VideoListItem/styles';
import TopNavigationBar from '../navigation/TopNavigationBar';
import BottomNavigationBar from '../navigation/BottomNavigationBar';
import ExploreIcon from '../assets/icons/Explore.png'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavigationBar />

      <ScrollView>
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.categoryItem}>
              <Image source={ExploreIcon} style={{width:20, height: 20}} />
            </TouchableOpacity>
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
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('Video')}
          >
            <VideoListItem video={item} />
          </TouchableOpacity>
          ) }
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>

      <BottomNavigationBar route={'Home'} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
