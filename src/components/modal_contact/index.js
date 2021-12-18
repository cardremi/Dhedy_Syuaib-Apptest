import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalContact = props => {
  return (
    <Modal
      animationType={'slide'}
      statusBarTranslucent={true}
      transparent={true}
      onRequestClose={props.onBack}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyBoardAvoid}>
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: props.valPhoto,
            }}
            resizeMode={'cover'}
            imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            style={styles.imgBackground}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={props.getBack}>
              <FontAwesome
                name={'close'}
                size={22}
                color={'red'}
                style={{paddingTop: 10, paddingRight: 10}}
              />
            </TouchableOpacity>
            <Text style={styles.nameContact}>{props.fullName}</Text>
          </ImageBackground>
          <View style={styles.detailContact}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.input}
                onChangeText={props.changeFirstName}
                value={props.valFirstName}
                onSubmitEditing={props.onSubmit}
              />
              <TouchableOpacity style={{flex: 1}} onPress={props.editFirstName}>
                <FontAwesome5 name={'edit'} size={16} color={'gray'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.input}
                onChangeText={props.changeLastName}
                value={props.valLastName}
                onSubmitEditing={props.onSubmit}
              />
              <TouchableOpacity style={{flex: 1}} onPress={props.editLastName}>
                <FontAwesome5 name={'edit'} size={16} color={'gray'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.input}
                onChangeText={props.changeAge}
                value={props.valAge}
                onSubmitEditing={props.onSubmit}
              />
              <TouchableOpacity style={{flex: 1}} onPress={props.editAge}>
                <FontAwesome5 name={'edit'} size={16} color={'gray'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.input}
                onChangeText={props.changePhoto}
                value={props.valPhoto}
                onSubmitEditing={props.onSubmit}
              />
              <TouchableOpacity style={{flex: 1}} onPress={props.editPhoto}>
                <FontAwesome5 name={'edit'} size={16} color={'gray'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={props.delAcc}>
              <Text style={styles.delete}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  keyBoardAvoid: {
    flex: 1,
  },
  container: {
    width: '80%',
    marginVertical: '40%',
    height: '60%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  detailContact: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  nameContact: {
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    paddingLeft: 10,
    // paddingVertical: 10,
    // marginVertical: 10,
    marginLeft: 40,
    flex: 4,
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 10,
  },
});

export default ModalContact;
