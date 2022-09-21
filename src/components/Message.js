import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Message = ({message, pass, onPress, message2}) => {
  return (
    <View
      style={{
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text style={[styles.paragraph, {textAlign: 'center'}]}>{message}</Text>
      {pass && (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[
              styles.paragraph,
              {color: '#FFFFFF', paddingLeft: 5, fontWeight: 'bold'},
            ]}>
            {message2}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 5,
    color: '#BDBDBD',
    fontSize: 15,
  },
});
