import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 20,
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    logo: {
      width: 50,
      height: 50,
      marginBottom: 20,
    },
    title: {
      fontSize: 50,
      color: '#fff',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#222',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 10,
      width: '100%',
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: '#fff',
      height: 40,
    },
    iconRight: {
      marginLeft: 10,
    },
    forgotPassword: {
      color: '#888',
      alignSelf: 'flex-end',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#FF0000',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 15,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    iconContainer: {
      flexDirection: 'row',
      margin: 30,
    },
    signupText: {
      color: 'grey',
    },
    signupLink: {
      color: 'white',
      textDecorationLine: 'underline',
    },
  });

export default styles