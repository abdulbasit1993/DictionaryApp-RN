import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DetailBox from '../components/DetailBox';
import {getWordDefinition} from '../config/apiService';
import Loader from '../components/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    setIsLoading(true);
    getWordDefinition(word)
      .then(res => {
        console.log('response data getDefinition ===>>> ', res?.data);
        setIsLoading(false);
        setData(res?.data);
      })
      .catch(e => {
        console.log('Error: ', e);
        ToastAndroid.show(e?.response?.data?.title, ToastAndroid.SHORT);
        setData([]);

        setIsLoading(false);
      });
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28282B'}}>
      <Header title="English Dictionary" />

      <View style={{}}>
        <SearchBar
          onChangeText={text => {
            setWord(text);
          }}
          onSearchPress={() => {
            handleSubmit();
          }}
        />

        {isLoading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Loader />
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <DetailBox data={data} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
