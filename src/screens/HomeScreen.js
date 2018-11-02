import React, {Component} from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';
import { USERNAME } from '../utils/Constants';

type Props = {};
class HomeScreen extends Component<Props> {
  state = {
    username: ''
  }

  componentWillMount() {
    this.checkUsername();
  }

  checkUsername = async() => {
    try {
      let result = await AsyncStorage.getItem(USERNAME);
      if (result) {
        this.setState({
          username: result
        });
      }
    } catch (error) {
      // Error retrieving data
      console.warn(error)
    }
  }

  logout = () => {
    this.deleteUsernameAtAsyncStorage().then(this.navToLogin());
  }

  deleteUsernameAtAsyncStorage = async() => {
    let result = await AsyncStorage.removeItem(USERNAME);
    
    return result;
  }

  navToLogin = () => {
    this.props.navigation.navigate('Login');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.username}</Text>
        <Button
          onPress={this.logout}
          color='blue'
          title='LOGOUT'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;