import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 20,
    },
    logo: {
      width: 80,
      height: 80,
      marginBottom: 20,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop: 60,
      
    },
    subtitle2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        
      },
    description: {
      fontSize: 14,
      color: 'grey',
      textAlign: 'center',
      margin: 30,
    },
    loginButton: {
      backgroundColor: '#FF0000',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 20,
      marginTop: 30,
    },
    loginButtonText: {
        padding: 10,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 40,
    },
    icon: {

      marginHorizontal: 10,
    },
    signupText: {
        marginTop: 20,
      color: 'grey',
    },
    signupLink: {
      color: 'white',
      textDecorationLine: 'underline',
    },
  });

export default styles