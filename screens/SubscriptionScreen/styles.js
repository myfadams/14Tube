import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      marginTop: 30
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 8,
      marginBottom: 10,
      marginTop: 10,
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
    channelList: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    channelItem: {
      alignItems: 'center',
      marginRight: 16,
    },
    channelImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    channelText: {
      fontSize: 12,
      marginTop: 4,
      color: 'white'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    button: {
      backgroundColor: '#f0f0f0',
      padding: 8,
      borderRadius: 4,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    videoContainer: {
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    videoThumbnail: {
      position: 'relative',
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
    videoThumbnailImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    videoDuration: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 4,
      borderRadius: 4,
    },
    videoDurationText: {
      color: '#fff',
      fontSize: 12,
    },
    galleryIcon: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 24,
      height: 24,
    },
    videoInfo: {
      marginTop: 8,
    },
    videoTitle: {
      marginBottom: 4,
    },
    videoTitleText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    videoDetails: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    figmaIcon: {
      width: 16,
      height: 16,
      marginRight: 8,
    },
    videoDetailsText: {
      fontSize: 12,
    },
    videoOptions: {
      marginLeft: 'auto',
    },
    videoOptionIcon: {
      width: 20,
      height: 20,
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
  });
  
export default styles