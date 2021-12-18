import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cuber} from '../../../assets';
import {AddContactModal} from '../../../components';
import {ContactCard} from '../../templates';
import axios from 'axios';
import {useDispatch} from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [addContactModal, setAddContactModal] = useState(false);
  const [filled, setFilled] = useState({
    firstName: '',
    lastName: '',
    age: null,
    photo: '',
  });

  const postContact = () => {
    var data = `firstName=${filled.firstName}&lastName=${filled.lastName}&age=27&photo=${filled.photo}`;

    var config = {
      method: 'post',
      url: 'https://simple-contact-crud.herokuapp.com/contact',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const showNotif = () => {
    if (addContactModal) {
      return (
        <AddContactModal
          onPress={() => {
            postContact();
            setAddContactModal(false);
            dispatch({type: 'REFRESH', refresh: 'refresh'});
          }}
          changeFirstName={text => setFilled({...filled, firstName: text})}
          changeLastName={text => setFilled({...filled, lastName: text})}
          changeAge={text =>
            setFilled({...filled, age: text.replace(/[^0-9]/g, '')})
          }
          valAge={filled.age}
          changePhoto={text => setFilled({...filled, photo: text})}
          onBack={() => {
            dispatch({type: 'REFRESH', refresh: 'refresh'});
            setAddContactModal(false);
          }}
        />
      );
    }
  };

  return (
    <View
      style={[
        styles.safeArea,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.containerTitle}>
        <ImageBackground
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode={'cover'}
          source={cuber}>
          <View style={styles.wrapperTitle}>
            <Text style={styles.allContact}>All Contact</Text>
          </View>
        </ImageBackground>
      </View>

      <CurvedBottomBar.Navigator
        strokeWidth={0.9}
        style={{flex: 1}}
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        swipeEnabled
        renderCircle={() => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => {
                setFilled({...filled, age: null});
                setAddContactModal(true);
              }}>
              <Ionicons name={'add'} color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="title1"
          position="left"
          component={() => <ContactCard />}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={() => (
            <View
              style={{
                backgroundColor: '#FFEBCD',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Text style={{color: 'gray', fontSize: 40, fontWeight: '600'}}>
                  About
                </Text>
              </View>
            </View>
          )}
          position="right"
        />
      </CurvedBottomBar.Navigator>
      {showNotif()}
    </View>
  );
};
export default ContactsPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerTitle: {
    backgroundColor: 'white',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    elevation: 2,
  },
  wrapperTitle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  allContact: {
    fontWeight: '600',
    fontSize: 30,
    color: '#9E9E9E',
  },
});
