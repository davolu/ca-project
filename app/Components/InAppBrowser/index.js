import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, TouchableOpacity , ListView, Dimensions, I18nManager, WebView} from 'react-native';
import { Container, Header, Right, Left,

  Content,
  Body
 } from 'native-base';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import Ionicons from "react-native-vector-icons/Ionicons";

 
export default class Index extends Component {

 
  

    constructor(props) {
   		super(props);

     const { navigation } = this.props; 

   		this.state = {

            
        param_title:navigation.getParam('title', ' '),
        param_link:navigation.getParam('link', ' '),
           };



                     }
     
   

   
  render(){

 
    const {goBack} = this.props.navigation;


		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;
    var underlineStyle = ((I18nManager.isRTL) ? styles.tabUnderLineTrans : styles.tabUnderLine );




    return(
      <Container style={styles.main}>
      
      <Header style={styles.header} >
          <Left>
          <TouchableOpacity onPress={()=>   this.props.navigation.goBack()}>
              <Ionicons name="ios-close" size={45} color="white" />
            </TouchableOpacity>

          </Left>

          <Body style={styles.body}>
            <Text style={styles.textTitle}>{this.state.param_title.substring(0,25)}...</Text>
          </Body>
          <Right style={styles.right}>
            
          </Right>
        </Header>


                <Content>

                <View style={{height:Dimensions.get("window").height, width:Dimensions.get("window").width}}>
                <WebView style={styles.webView}
                source={{uri: ''+this.state.param_link+''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                    >
                </WebView>

                </View>

                </Content>

       
      </Container>
    )
  }
}
