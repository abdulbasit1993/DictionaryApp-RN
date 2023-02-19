import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({onChangeText, onSearchPress}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
        <TextInput
          placeholder="Enter a word here..."
          placeholderTextColor="#eed"
          onChangeText={onChangeText}
          style={{color: '#FFF'}}
        />
      </View>
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search" color="#FFF" style={{fontSize: 22}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 60,
    margin: 20,
  },
});

export default SearchBar;
