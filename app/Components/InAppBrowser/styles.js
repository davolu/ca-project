
import { Platform, StyleSheet } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({

  container: {
      flex: 1,
    },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  textTitle :{
    color: "#fff"
  },
  header: {
    backgroundColor: '#33CAFF',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
  },

  body: {
    flex: 3,
    alignItems: 'center',
  },

  right: {
    flex: 0.5,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
  },

  headerTitle: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayBold,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
    fontSize : Fonts.moderateScale(17),
    letterSpacing:0.7
  },

  rowMain:{
    margin:(Metrics.WIDTH * 0.035),
    flexDirection: 'row'
  },

  images: {
    height: (Metrics.HEIGHT*0.15),
    width: (Metrics.WIDTH*0.30),
    resizeMode: 'cover',
    marginTop: (Metrics.HEIGHT) * 0.007
  },


});

export default styles;
