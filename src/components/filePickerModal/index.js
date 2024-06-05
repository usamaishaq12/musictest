import React, {forwardRef, useImperativeHandle, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {DropDownMenu} from '~components';

const FilePickerModal = ({onFilesSelected}, ref) => {
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
    cleanTempImages: () => {
      ImagePicker.clean()
        .then(() => {
          console.log('removed all tmp images from tmp directory');
        })
        .catch(console.log);
    },
  }));
  function openCamera() {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.01,
    }).then(onFilesSelected);
  }
  function openGallery() {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.1,
      height: 400,
      width: 400,
    }).then(onFilesSelected);
  }

  function openPicker(type = 0) {
    setVisible(false);
    setTimeout(type == 0 ? openCamera : openGallery, 400);
  }
  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Take Photo"
      secondBtnText="Choose from Library"
      onPressFirstBtn={() => openPicker(0)}
      onPressSecondBtn={() => openPicker(1)}
      onPressThirdBtn={() => openPicker(2)}
      onClose={() => setVisible(false)}
    />
  );
};
export default forwardRef(FilePickerModal);
