import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Text,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {notes} from '../../assets';

const AddContactModal = props => {
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
            source={notes}
            resizeMode={'cover'}
            imageStyle={{borderRadius: 10}}
            style={styles.imgBackground}>
            <View style={styles.detailContact}>
              <Text style={styles.boldTxt}>New Contact</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.changeFirstName}
                  onSubmitEditing={props.onSubmit}
                  placeholder="First Name(must be filled)"
                  placeholderTextColor={'black'}
                />
                <Octicons
                  name={'pin'}
                  size={16}
                  color={'red'}
                  style={{marginRight: 10}}
                />
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
                  onSubmitEditing={props.onSubmit}
                  placeholder="Last Name(must be filled)"
                  placeholderTextColor={'black'}
                />
                <Octicons
                  name={'pin'}
                  size={16}
                  color={'red'}
                  style={{marginRight: 10}}
                />
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
                  onSubmitEditing={props.onSubmit}
                  value={props.valAge}
                  placeholder="Age(must be filled)"
                  placeholderTextColor={'black'}
                />
                <Octicons
                  name={'pin'}
                  size={16}
                  color={'red'}
                  style={{marginRight: 10}}
                />
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
                  onSubmitEditing={props.onSubmit}
                  placeholder="Image URL"
                  placeholderTextColor={'black'}
                  placeholderTextColor={'black'}
                />
                <Octicons
                  name={'pin'}
                  size={16}
                  color={'red'}
                  style={{marginRight: 10}}
                />
              </View>
              <TouchableOpacity
                onPress={props.onPress}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 20,
                  borderWidth: 2,
                  borderRadius: 20,
                }}>
                <Entypo
                  name={'check'}
                  size={26}
                  color={'black'}
                  style={{marginRight: 10}}
                />
                <Text
                  style={[
                    styles.boldTxt,
                    {color: 'red', fontSize: 20, marginRight: 8},
                  ]}>
                  Add Contact
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
    backgroundColor: 'white',
  },
  detailContact: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    marginRight: 20,
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
    marginLeft: 30,
    flex: 4,
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  boldTxt: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
});

export default AddContactModal;
