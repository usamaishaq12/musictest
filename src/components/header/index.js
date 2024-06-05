import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SmallText} from '~components/text';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const Header = ({children = '', containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SmallText color={AppColors.white}>{children}</SmallText>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(3),
  },
});
