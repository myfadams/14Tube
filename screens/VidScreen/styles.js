import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    videoContainer: {
      position: 'relative',
    },
    video: {
      width: '100%',
      height: 200,
    },
    overlay: {
      position: 'absolute',
      top: '40%',
      left: '45%',
    },
    infoContainer: {
      padding: 16,
    },
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    tags: {
        color: '#0094e3',
        fontSize: 12,
        fontWeight: '500',
    },
    views: {
        color: '#606060',
    },
    details: {
      color: 'gray',
      fontSize: 14,
      marginVertical: 4,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 15,
    },
    actionButton: {
      alignItems: 'center',
    },
    actionText: {
      color: 'white',
      fontSize: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'darkgrey',
    },
    channelName: {
        fontSize: 18,
        color: 'white'
    },
    channelSubscribers: {
        fontSize: 15,
        color: 'white'
    },
    subscribeBtn: {
        color: 'red',
        padding: 10,
        fontSize: 15,
        borderRadius: 15
    },
    recommendations: {
      padding: 16,
    },
    recommendationHeader: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    recommendationItem: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    recommendationThumbnail: {
      width: 100,
      height: 100,
      borderRadius: 4,
    },
    recommendationInfo: {
      flex: 1,
      marginLeft: 8,
      justifyContent: 'center',
    },
    recommendationTitle: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
    recommendationDetails: {
      color: 'gray',
      fontSize: 12,
      marginTop: 4,
    },
    commentSection: {
      padding: 10,
    },
    commentHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    addCommentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    commentInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      padding: 10,
      marginRight: 10,
    },
    commentButton: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
    },
    commentButtonText: {
      color: 'black',
    },
    commentContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    commentAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    commentTextContainer: {
      flex: 1,
    },
    commentUser: {
      fontWeight: 'bold',
    },
    commentContent: {
      marginTop: 5,
    },
  });
export default styles