import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {SmallText} from '~components';
import styles from './styles';
const DropDownMenu = ({
  isVisible = false,
  onClose = () => {},
  onPressFirstBtn = () => {},
  onPressSecondBtn = () => {},
  firstBtnText = '',
  secondBtnText = '',
  thirdText = '',
  onPressThirdBtn = () => {},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeInUpBig"
      animationInTiming={1000}>
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressFirstBtn}>
            <SmallText>{firstBtnText}</SmallText>
          </TouchableOpacity>

          <View style={styles.line} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressSecondBtn}>
            <SmallText>{secondBtnText}</SmallText>
          </TouchableOpacity>

          {thirdText !== '' && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressThirdBtn}>
                <SmallText>{thirdText}</SmallText>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cancelBtn}
          onPress={onClose}>
          <SmallText>Cancel</SmallText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default DropDownMenu;
