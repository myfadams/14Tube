import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 8,
      marginBottom: 10,
      marginTop: 20,
    },
    brand: {
      flexDirection: 'row'
    },
    logo: {
      width: 50,
      height: 30,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    youtubeIcon: {
      width: 32,
      height: 32,
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerIcon: {
      width: 40,
      height: 30,
      marginLeft: 15,
    },
    userIcon: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    categoryContainer: {
      flexDirection: 'row',
      padding: 10,
    },
    categoryItem: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 0.5,
      borderColor: 'white'
    },
    categoryText: {
      fontSize: 14,
      color: 'white',
    },
    videoList: {
      paddingBottom: 100,
    },
    videoContainer: {
      marginBottom: 10,
    },
    thumbnail: {
      width: '100%',
      aspectRatio: 16/9,
    },
    videoInfo: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    channelImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    channel: {
      color: '#606060',
    },
    views: {
      color: '#606060',
    },
    durationContainer: {
      position: 'absolute',
      bottom: 15,
      right: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: 3,
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
    durationText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold'
    },
    icon :{
      bottom: 15
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'black',
      borderTopColor: '#eee',
    },
    bottomNavItem: {
      alignItems: 'center',
    },
    bottomNavIcon: {
      width: 24,
      height: 24,
      marginBottom: 4,
    },
    bottomNavItemText: {
      fontSize: 12,
      color: 'white'
    },
    shortsContainer: {
      marginVertical: 10,
    },
    shortsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 10,
      color: 'white'
    },
    shortItem: {
      marginHorizontal: 5,
    },
    shortThumbnail: {
      width: 100,
      height: 180,
      borderRadius: 8,
    },
    shortTitle: {
      width: 100,
      textAlign: 'center',
      marginTop: 5,
      color: 'white'
    },
  });

export default styles
  