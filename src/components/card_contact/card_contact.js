import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CardContact = props => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
        <View style={styles.container}>
          <Image
            source={{uri: props.image}}
            resizeMode={'cover'}
            style={styles.iconWrapper}
          />
          <View style={styles.contentContact}>
            <Text style={styles.name}>{props.name}</Text>
            {props.age && (
              <Text style={styles.txtOther}>{props.age} Tahun</Text>
            )}
            <Text style={styles.txtOther}>{props.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardContact;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: '45%',
    height: 150,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    elevation: 5,
  },
  container: {
    width: '100%',
    backgroundColor: 'tranparant',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: 'gray',
    // marginRight:'auto',
    height: 55,
    width: 55,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  wrapper: {
    flex: 1,
    padding: 15,
    paddingVertical: 35,
  },
  contentContact: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  name: {
    fontWeight: '700',
    color: '#121212',
    fontSize: 16,
  },
  txtOther: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'gray',
  },
});
