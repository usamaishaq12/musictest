import React, {forwardRef} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native';
import {SmallText} from '~components/text';
import AppColors from '~utills/AppColors';
import styles from './styles';
const Input = (
  {
    onChangeText,
    value,
    error,
    inputStyle = {},
    containerStyle = {},
    placeholder,
    placeholderColor = AppColors.snowWhite,
    inputProps,
    keyboardType = 'default',
    onSubmitEditing,
    returnKeyType = 'default',
    secureTextEntry = false,
  },
  ref,
) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      <SmallText>{error}</SmallText>
    </View>
  );
};

export default forwardRef(Input);
