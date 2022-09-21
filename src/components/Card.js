import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';

const Card = ({icon, title, onPress}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        {backgroundColor: isSelected ? '#4B4FED' : '#151515'},
      ]}
      onPress={() => {
        setIsSelected(!isSelected);
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.icon} source={icon} />
        <Text style={[styles.header, {paddingLeft: 20}]}>{title}</Text>
      </View>
      <Image
        style={styles.icon}
        source={isSelected ? require('../assets/icons/check.png') : null}
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    width: Metrics.screenWidth * (10 / 100),
    height: Metrics.screenHeight * (10 / 100),
    resizeMode: 'contain',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
