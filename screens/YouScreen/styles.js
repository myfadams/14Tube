import { StyleSheet } from 'react-native';
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
      headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerIcon: {
        width: 40,
        height: 30,
        marginLeft: 15,
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
      padding: 10,
    },
    button: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    btnText: {
        marginLeft: 5,
        color: 'white'
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
      color: 'grey',
      alignSelf: 'flex-end',
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
        color: 'white'
    },
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderTopColor: 'gray',
      borderTopWidth: 0.5,
    },
    profileImageSmall: {
      width: 25,
      height: 25,
      borderRadius: 12.5,
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