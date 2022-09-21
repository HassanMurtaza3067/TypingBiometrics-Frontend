import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Metrics from '../theme/metrics';

const SocialButton = ({image, onPress}) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image style={styles.icon} source={image} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  icon: {
    width: Metrics.screenWidth * (8 / 100),
    height: Metrics.screenHeight * (8 / 100),
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: '#151515',
    width: Metrics.screenWidth * (17 / 100),
    height: Metrics.screenWidth * (17 / 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
