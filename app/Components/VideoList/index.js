import React, { Component } from "react";
import Placeholder from 'rn-placeholder';

import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header
} from "native-base";
 // Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable"; 
import Ionicons from "react-native-vector-icons/Ionicons";

/**
 *  Main screen for the videos
 */
export default class Index extends Component {
   
  constructor(props) {
    super(props);
    this.state = {

      data: [],
      isReady:false
    };


    //get the video lists on load.
    fetch('https://api.letsbuildthatapp.com/youtube/home_feed')
    .then(res => res.json())
    .then((result) => {
       
       this.setState({

        data: result.videos,
        isReady: true


       });
    }); 


  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
      'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
      'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),
      'SFUIDisplay-Semibold': require('../../Fonts/SFUIDisplay-Semibold.ttf'),

    });
    this.setState({ fontLoaded: true });
  }


 

  render() {
    const data = this.state.data;
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#33CAFF", true);
      StatusBar.setTranslucent(true);
    }

    


    if(!this.state.fontLoaded) 
    {

       return <Expo.AppLoading />;
     
    }

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left>
            <Text> </Text>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.textTitle}>Real World App Bar</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity>
              <Ionicons name="ios-refresh" size={25} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={{padding:5}}>
          <View
            style={styles.rowMainView}
            animation="bounceInUp"
            duration={700}
            delay={500}
          >
            {data.map((item, index) => {
              return (
                <View
                  style={
                    index === data.length - 1 ? styles.lastRowBg : styles.rowBg
                  }
                  key={index}
                >
                 

 <TouchableOpacity  onPress={()=> { this.props.navigation.navigate('VideoDetails',
  {
    id: item.id,
    title: item.name

  }
 ) } }>
 <Placeholder.ImageContent
 
 
 onReady={this.state.isReady}   
 >
                    
                 
                    <Image
                      style={styles.postDescImage}
                      source={{uri:item.imageUrl}}
                    />
                    
       
</Placeholder.ImageContent>            
                <View style={styles.rowHeaderView}>
                    
                     
                    <Image
                    style={styles.profileImg}
                    source={{uri: item.channel.profileImageUrl}}
                  />
                  
                 <View style={styles.rowHeaderNameView}>
                    <Text style={styles.rowNameTxt}>{item.name}</Text>
                    <Text style={styles.rownumberOfViews}>Number of Views: {item.numberOfViews}</Text>
                  </View>

                
                </View>
                
</TouchableOpacity>


                  
               

                  
                </View>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
