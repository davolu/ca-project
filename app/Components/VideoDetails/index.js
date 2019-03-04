import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, TouchableOpacity , ListView,  I18nManager} from 'react-native';
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

    

      const rowHasChanged = (r1, r2) => r1 !== r2
      const ds = new ListView.DataSource({rowHasChanged})

      
    const { navigation } = this.props; 

   		this.state = {
        isLoading: true,
        fontLoaded: false,
        param_id:navigation.getParam('id', ' '),
        param_title:navigation.getParam('title', ' '),
        dataSource: ds.cloneWithRows([]),
      };


      fetch('https://api.letsbuildthatapp.com/youtube/course_detail?id='+this.state.param_id)
      .then(res => res.json())
      .then((data) => {
          this.setState({

          dataSource:this.state.dataSource.cloneWithRows(data),


         });
      });
      


     }
     
     async componentWillMount() {
      await Expo.Font.loadAsync({
        'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
        'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
        'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),
        'SFUIDisplay-Bold': require('../../Fonts/SFUIDisplay-Bold.ttf'),

      });
      this.setState({ fontLoaded: true });
    }
  

    _renderRow(rowData) {
      return(
        <View>
          <TouchableOpacity onPress={()=>  this.props.navigation.navigate('InAppBrowser',
          { 
            title :rowData.name,
            link: rowData.link
          })}>
        <View style={styles.rowMain}>
          <Image source={{uri: rowData.imageUrl}} style={styles.images}/>
          <View style={styles.videoContent}>
            <Text numberOfLines={1} style={styles.name}>{rowData.name}</Text>
            <Text numberOfLines={3} style={styles.duration}>{rowData.duration}</Text>
            <View style={styles.followContent}>
            
              <View style={styles.likeContent}> 
                <Text style={styles.textStyle}>{rowData.date}</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.separatorStyle}/>

        </View>
      )

    }
  render(){

 

		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}  

    var that = this;
    var underlineStyle = ((I18nManager.isRTL) ? styles.tabUnderLineTrans : styles.tabUnderLine );


    if (!this.state.fontLoaded) { 
      return <Expo.AppLoading />;
     }


    return(
      <Container style={styles.main}>
      
      <Header style={styles.header} >
          <Left>
          <TouchableOpacity onPress={()=>  this.props.navigation.navigate('VideoList')}>
              <Ionicons name="ios-arrow-back" size={35} color="white" />
            </TouchableOpacity>

          </Left>

          <Body style={styles.body}>
            <Text style={styles.textTitle}>{this.state.param_title.substring(0,25)}...</Text>
          </Body>
          <Right style={styles.right}>
            
          </Right>
        </Header>


<View>

<ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
</View>

       
      </Container>
    )
  }
}
