import React, {useMemo} from 'react';
import {Image, Pressable, View} from 'react-native';
import {EditPen} from '~assets/SVG';
import {SmallText} from '~components';
import AppColors from '~utills/AppColors';
import {width} from '~utills/Dimension';
import styles from './styles';

const Avatar = ({
  source = undefined,
  onPress,
  variant = 'primary', //'primary' | 'secondary';
  withShadow = true,
  containerStyle = {},
  imageStyle = {},
  size = 30,
  showEdit = false,
}) => {
  const getStyles = useMemo(() => {
    return {
      containerStyleSecondary: {
        height: width(size + 16),
        width: width(size + 16),
      },
      containerStylePrimary: {
        height: width(size),
        width: width(size),
      },
      imageStyle: {
        height: width(size),
        width: width(size),
        borderRadius: width(100),
        borderColor: AppColors.white,
        backgroundColor: AppColors.white,
      },
      imageContainer: {
        ...(variant === 'secondary'
          ? styles.secondaryContainer
          : styles.primaryContainer),
      },
    };
  }, [size, withShadow]);

  return (
    <View
      style={[
        variant == 'secondary'
          ? getStyles.containerStyleSecondary
          : getStyles.containerStylePrimary,
        styles.container,
        containerStyle,
      ]}>
      {source && (
        <Image
          source={source}
          resizeMode="cover"
          style={[getStyles.imageStyle, getStyles.imageContainer, imageStyle]}
        />
      )}
      {showEdit && (
        <Pressable style={styles.editButton} onPress={onPress}>
          <EditPen />
        </Pressable>
      )}
    </View>
  );
};

export default Avatar;
