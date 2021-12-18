import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CardContact, ModalContact} from '../../../components';
import endpoint from '../../../config/services/endpoint';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const ContactCard = () => {
  const dispatch = useDispatch();
  const dataContacts = useSelector(state => state.contactsReducer);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({
    id: null,
    firstName: '',
    lastName: '',
    age: null,
    photo: '',
  });

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (dataContacts.refresh === 'refresh') {
      getData();
      dispatch({type: 'REFRESH', refresh: null});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataContacts.refresh]);

  const getData = async () => {
    const url = endpoint.CONTACT;
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(([_, data]) => {
        // console.log(`${res}:`, data);
        dispatch({type: 'GET_CONTACTS', contacts: data.data});
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const detailDataManipulation = async (id, method) => {
    var url = `${endpoint.CONTACT}/${id}`;
    var methodFetch = 'get';
    var Header = {};
    var data = `firstName=${detail.firstName}&lastName=${detail.lastName}&age=${detail.age}&photo=${detail.photo}`;
    var config = {};

    if (method === 'GET') {
      methodFetch = 'get';
      Header = {};
      config = {
        method: methodFetch,
        url: url,
        headers: Header,
      };
    } else if (method === 'PUT') {
      methodFetch = 'put';
      Header = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      config = {
        method: methodFetch,
        url: url,
        headers: Header,
        data: data,
      };
    } else if (method === 'DELETE') {
      methodFetch = 'delete';
      Header = {};
      config = {
        method: methodFetch,
        url: url,
        headers: Header,
      };
    }

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data, 'respom'));
        if (method === 'GET') {
          setDetail({
            id: response?.data?.data?.id,
            firstName: response?.data?.data?.firstName,
            lastName: response?.data?.data?.lastName,
            age: response?.data?.data?.age,
            photo: response?.data?.data?.photo,
          });
        }
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showNotif = () => {
    if (showModal) {
      return (
        <ModalContact
          fullName={`${detail.firstName} ${detail.lastName}`}
          valFirstName={detail.firstName}
          valLastName={detail.lastName}
          valAge={`${detail.age}`}
          valPhoto={`${detail.photo}`}
          getBack={() => {
            getData();
            setShowModal(false);
          }}
          changeFirstName={text => setDetail({...detail, firstName: text})}
          editFirstName={() => setDetail({...detail, firstName: ''})}
          changeLastName={text => setDetail({...detail, lastName: text})}
          editLastName={() => setDetail({...detail, lastName: ''})}
          changeAge={text =>
            setDetail({...detail, age: text.replace(/[^0-9]/g, '')})
          }
          editAge={() => setDetail({...detail, age: ''})}
          changePhoto={text => setDetail({...detail, photo: text})}
          editPhoto={() => setDetail({...detail, photo: 'https://'})}
          onSubmit={({nativeEvent: {_}}) => {
            detailDataManipulation(detail.id, 'PUT');
          }}
          onBack={() => {
            setShowModal(false);
            getData();
          }}
          delAcc={() => {
            setShowModal(false);
            detailDataManipulation(detail.id, 'DELETE');
          }}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerCardMenu}>
        {dataContacts.contacts?.map((item, idx) => {
          return (
            <CardContact
              key={idx}
              name={item?.firstName}
              age={item?.age}
              id={item?.id}
              image={item?.photo}
              onPress={async () => {
                await detailDataManipulation(item?.id, 'GET');
                setShowModal(true);
              }}
            />
          );
        })}
        {showNotif()}
      </ScrollView>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff9c4',
    flex: 1,
    paddingHorizontal: 12,
  },
  containerCardMenu: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 100,
  },
});
