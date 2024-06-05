import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container:{
    width:'100%',
  },
  input:{
    backgroundColor:AppColors.secondary,
    height:height(6),
    borderRadius:width(2),
    paddingLeft:width(2),
    color:AppColors.white
  }
});

export default styles;