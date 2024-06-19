import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginLeft: 15,
    },
    profileSection: {
      alignItems: 'center',
      padding: 10,
      flexDirection: 'row'
    },
    profileImageLarge: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    profileName: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 10,
      color: 'white',
      left: 10,
      bottom: 20
    },
    profileHandle: {
      fontSize: 14,
      color: 'gray',
      top: 15,
      right: 145
    },
    viewChannel: {
      color: 'grey',
      fontWeight: 'bold',
      top: 15,
      right: 130
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5,
    },
    button: {
      backgroundColor: '#1F1F1F',
      borderRadius: 40,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginRight: 10,
      flexDirection: 'row',
      alignContent: 'center'
    },
    btnText: {
        marginLeft: 5,
        color: 'white'
    },
    icon: {
      width: 20,
      height: 20,
    },
    section: {
      padding: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    viewAll: {
      color: 'white',
      alignSelf: 'flex-end',
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 30,
      paddingVertical: 2,
      paddingHorizontal: 10,
      marginBottom: 5
    },
    videoThumbnail: {
      width: 150,
      height: 100,
      marginRight: 10,
      borderRadius: 5
    },
    newPlaylist: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    listItem: {
      paddingVertical: 10,
      borderBottomColor: 'gray',
      flexDirection: 'row',
      alignItems: 'center'
    },
    listItemText: {
        color: 'white',
        marginLeft: 5
    },
  });
export default styles