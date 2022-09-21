import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Metrics from '../theme/metrics';

const FlatButton = ({onPress, text, backgroundColor}) => {
  return (
    <View style={{paddingVertical: 40}}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btnStyle, {backgroundColor: backgroundColor}]}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#4B4FED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
