import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator
        color={'#FFF'}
        size="large"
        style={{marginBottom: 10}}
      />
      <Text style={{color: '#FFF', fontSize: 18}}>Loading...</Text>
    </View>
  );
};

export default Loader;
