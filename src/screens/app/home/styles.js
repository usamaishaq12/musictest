import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    paddingTop: height(3),
  },
});
export default styles;
