import React,{ forwardRef } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";
import { SmallText } from "~components/text";
import AppColors from "~utills/AppColors";
import styles from "./styles";
const Input = ({ onChangeText, value, error, inputStyle = {},containerStyle={},placeholder,placeholderColor=AppColors.white ,rest,}, ref) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      <SmallText>{error}</SmallText>
    </View>
  );
};

export default forwardRef(Input);
