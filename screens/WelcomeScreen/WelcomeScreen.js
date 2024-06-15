import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTubeLogo from '../../assets/images/YouMate.png';

const WelcomeScreen = ({navigation}) => {
  return (
<View style={styles.container}>
      <Image
        source={YouTubeLogo}
        style={styles.logo}
      />
      <Text style={styles.title}>StreaMate</Text>
      <Text style={styles.subtitle}>Welcome</Text>
      <Text style={styles.subtitle2}>to best video app in world</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus curabitur cursus arcu mollis commodo fringilla.
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
        <Icon name="logo-google" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="logo-apple" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>Already have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Log in')} >Log in</Text></Text>
    </View>
  )
}

export default WelcomeScreen