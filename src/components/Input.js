import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';

const Input = ({
  label,
  filledImg,
  unfilledImg,
  value,
  password,
  onFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={{paddingTop: 20}}>
      <Text style={[styles.paragraph, {paddingBottom: 10}]}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={isFocused ? filledImg : unfilledImg}
        />
        <TextInput
          value={value}
          secureTextEntry={hidePassword}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={styles.input}
          {...props}
        />
        {password && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image
              style={styles.icon}
              source={
                hidePassword
                  ? require('../assets/icons/Show_Password.png')
                  : require('../assets/icons/Hide_Password.png')
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 5,
    color: '#BDBDBD',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: Metrics.screenWidth * (8 / 100),
    height: Metrics.screenHeight * (8 / 100),
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#151515',
    color: '#FFFFFF',
    marginLeft: 10,
  },
});
