import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

import Metrics from '../theme/metrics';
import FlatButton from '../components/FlatButton';

const Splash = ({navigation}) => {
  return (
    // MAIN CONTAINER
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND IMAGE AND LOGO CONTAINER */}
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require('../assets/images/splash_image.png')}>
          {/* LOGO */}
          <Image
            style={styles.image}
            source={require('../assets/logo/logo.png')}
          />
        </ImageBackground>
      </View>

      {/* TEXT AND LOGIN SIGNUP CONTAINER */}
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        {/* TEXT CONTAINER */}
        <View style={styles.textContainer}>
          <Text style={styles.header}>Multi Factor Authentication</Text>
          <Text style={styles.paragraph}>
            Identifies the users by the way they type using Artificial
            Intelligence and Machine Learning
          </Text>
        </View>

        {/* LOGIN SIGNUP BUTTONS */}
        <View style={styles.btnContainer}>
          {/* LOGIN BUTTON */}
          <View style={{width: '48%'}}>
            <FlatButton
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>

          {/* SIGNUP BUTTON */}
          <View style={{width: '48%'}}>
            <FlatButton
              text="Registration"
              onPress={() => navigation.navigate('SignUp')}
              backgroundColor="#4B4FED"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingVertical: 20,
  },
  imageContainer: {
    height: Metrics.screenHeight * (60 / 100),
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  image: {
    marginLeft: 20,
    resizeMode: 'contain',
    width: Metrics.screenWidth * (40 / 100),
    height: Metrics.screenHeight * (10 / 100),
  },
  header: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 5,
    color: '#BDBDBD',
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
