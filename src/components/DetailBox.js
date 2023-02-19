import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const DetailBox = ({data}) => {
  const renderItem = ({item, index}) => {
    let meaningitems = [];

    const meaningsArray = item?.meanings;

    if (item?.meanings) {
      meaningitems = meaningsArray?.map(row => {
        return (
          <View style={{marginTop: 15, marginBottom: 20}}>
            <Text style={styles.partOfSpeechHead}>{row?.partOfSpeech}</Text>

            {row?.definitions?.map((item, index) => {
              return (
                <View style={{margin: 10}}>
                  <Text style={{color: '#FFF', fontSize: 20, marginBottom: 10}}>
                    {`${index + 1}.\n${item?.definition}`}
                  </Text>
                  {item?.example && (
                    <>
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 22,
                          fontStyle: 'italic',
                          textDecorationLine: 'underline',
                        }}>
                        Example:
                      </Text>
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 20,
                          fontStyle: 'italic',
                        }}>
                        "{item?.example}"
                      </Text>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        );
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.wordHead}>{item?.word}</Text>

        {meaningitems}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={{paddingBottom: 300}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    margin: 10,
  },
  partOfSpeechHead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  wordHead: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default DetailBox;
