import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';
import Input from '../components/Input';
import Message from '../components/Message';
import SocialButton from '../components/SocialButton';
import FlatButton from '../components/FlatButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo/logo.png')}
        />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.paragraph}>Please Log in to your account</Text>
        </View>

        {/* EMAIL INPUT FIELD */}
        <Input
          label="Email"
          filledImg={require('../assets/icons/Email_Filled.png')}
          unfilledImg={require('../assets/icons/Email_Unfilled.png')}
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="Enter Email"
          keyboardType="email-address"
          placeholderTextColor="#BDBDBD"
        />

        {/* PASSWORD INPUT FIELD */}
        <Input
          label="Password"
          filledImg={require('../assets/icons/Lock_Filled.png')}
          unfilledImg={require('../assets/icons/Lock_Unfilled.png')}
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholder="Enter Password"
          password
          placeholderTextColor="#BDBDBD"
        />

        {/* Login FlatBUTTON */}
        <FlatButton
          text="Login"
          onPress={() => navigation.navigate('Authentication')}
          backgroundColor="#4B4FED"
        />

        {/* MESSAGE FOR SOCIAL ICONS BUTTONS*/}
        <Message message="Continue with social accounts" />

        {/* // SOCIAL ICONS */}
        <View style={styles.iconsContainer}>
          <SocialButton
            image={require('../assets/icons/apple.png')}
            onPress={() => alert('Your Press Apple Button')}
          />
          <SocialButton
            image={require('../assets/icons/google.png')}
            onPress={() => alert('Your Press Google Button')}
          />
          <SocialButton
            image={require('../assets/icons/facebook.png')}
            onPress={() => alert('Your Press Facebook Button')}
          />
        </View>

        {/* MESSAGE FOR REGISTRATION */}
        <Message
          message="Don’t have an accounts "
          pass
          onPress={() => navigation.navigate('SignUp')}
          message2="Register Here"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: 'contain',
    width: Metrics.screenWidth * (40 / 100),
    height: Metrics.screenHeight * (15 / 100),
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
  iconsContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
