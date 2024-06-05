import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {useDispatch} from 'react-redux';
import {DropDownMenu} from '~components';
import {setIsLoggedIn, setUserMeta} from '~redux/slices/user';

const SettingModal = ({}, ref) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));

  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Logout"
      secondBtnText="Settings"
      onPressFirstBtn={() => {
        dispatch(setUserMeta(null));
        dispatch(setIsLoggedIn(false));
      }}
      onPressSecondBtn={() => {}}
      onPressThirdBtn={() => {}}
      onClose={() => setVisible(false)}
    />
  );
};
export default forwardRef(SettingModal);
