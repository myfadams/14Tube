import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        marginLeft: 10
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      youtubeIcon: {
        width: 32,
        height: 32,
        marginLeft: 20,
      },
      headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
      },
      headerIcon: {
        width: 40,
        height: 30,
        marginLeft: 15,
      },
      vectors: {
        width: 25,
        height: 25,
        marginLeft: 15,
      },
      bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
      },
      bottomNavItem: {
        alignItems: 'center',
      },
      bottomNavIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
      },
      bottomNavItemText: {
        fontSize: 12,
        color: 'white'
      },
})
export default styles