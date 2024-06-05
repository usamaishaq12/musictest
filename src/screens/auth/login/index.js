import React, {useRef, useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icons} from '~assets/icons';
import {Button, Input, ScreenWrapper} from '~components';
import {setAppLoader} from '~redux/slices/config';
import {setIsLoggedIn, setUserMeta} from '~redux/slices/user';
import AppColors from '~utills/AppColors';
import {errorMessage, successMessage} from '~utills/Methods';
import styles from './styles';
export default function Login() {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = () => {
    if (email !== '' && password !== '') {
      dispatch(setAppLoader(true));
      setTimeout(() => {
        dispatch(setIsLoggedIn(true));
        dispatch(
          setUserMeta({
            name: 'John',
            email: email,
          }),
        );
        successMessage('Welcome to the REACT NATIVE BOILERPLATE');
        dispatch(setAppLoader(false));
      }, 600);
    } else errorMessage('Email or Password is misssing!');
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle={'light-content'}
      scrollEnabled>
      <View style={styles.mainViewContainer}>
        <Image source={Icons.logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputContainer}>
          <Input
            placeholder="joe@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
            onSubmitEditing={() => passwordRef?.current?.focus()}
            returnKeyType="next"
          />
          <Input
            ref={passwordRef}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Button withShadow onPress={loginHandler}>
          Login
        </Button>
      </View>
    </ScreenWrapper>
  );
}
