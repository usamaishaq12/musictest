import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    paddingTop:height(4),

  },
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(4),
    marginBottom: height(2)
  },
  inputContainer:{
    width:width(80),
    marginVertical:height(2)
  },
  logo:{
    marginBottom:height(4)
  }
});
export default styles;
