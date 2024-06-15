import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTubeLogo from '../../assets/images/YouMate.png'; // Use your local image
import styles from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton}>
    <Icon name="chevron-back" size={24} color="#fff" onPress={() => navigation.navigate('Welcome')} />
    </TouchableOpacity>
    <Image
      source={YouTubeLogo}
      style={styles.logo}
    />
    <Text style={styles.title}>StreaMate</Text>
    <View style={styles.inputContainer}>
      <Icon name="mail-outline" size={20} color="#fff" style={styles.icon} />
      <TextInput
        placeholder="Enter email"
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
    <View style={styles.inputContainer}>
      <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.icon} />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <Icon name="eye-off-outline" size={20} color="#888" style={styles.iconRight} />
    </View>
    <Text style={styles.forgotPassword}>Forget password?</Text>
    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')} >
      <Text style={styles.loginButtonText}>Log in</Text>
    </TouchableOpacity>
    <View style={styles.iconContainer}>
      <Icon name="logo-google" size={30} color="#fff" style={styles.icon} />
      <Icon name="logo-apple" size={30} color="#fff" style={styles.icon} />
    </View>
    <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Sign Up')} >Sign up</Text></Text>
  </View>
  )
}

export default LoginScreen