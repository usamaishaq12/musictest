import React, { useState } from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { Icons } from "~assets/icons";
import { Button, Input, LargeText, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import AppColors from "~utills/AppColors";
import styles from "./styles";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle={'light-content'}  >
      <View style={styles.mainViewContainer}>
       <Image  source={Icons.logo} style={styles.logo} resizeMode='contain' />
       <View style={styles.inputContainer}>
       <Input
        placeholder='joe@gmail.com'
        />
         <Input
        placeholder='********'
        />
       </View>
        <Button
          withShadow
          onPress={() => {
            dispatch(setAppLoader(true));
            setTimeout(() => {
              dispatch(setIsLoggedIn(true));
              dispatch(
                setUserMeta({
                  name: "John",
                  email: "John Doe",
                })
              );
              dispatch(setAppLoader(false));
            }, 600);
          }}
        >
          Login
        </Button>
      </View>
    </ScreenWrapper>
  );
}
