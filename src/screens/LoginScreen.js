import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, Button, StyleSheet, TextInput, View } from 'react-native';
import { USERNAME } from '../utils/Constants';

type Props = {};
class LoginScreen extends Component<Props> {
  state = {
    placeholder: 'just input your name',
    username: '',
    loading: false
  }

  onChangeText = (username) => {
    this.setState({
      username: username
    });
  }

  login = () => {
    this.setState({
      loading: true
    });
    this.saveUsernameToAsyncstorage();
  }

  saveUsernameToAsyncstorage = async () => {
    const { username } = this.state;

    try {
      let result = await AsyncStorage.setItem(USERNAME, username);
      this.navToHomeScreen();
    } catch (error) {
      // Error saving data
      console.warn(error);
    }
  }

  navToHomeScreen = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style = {{
            width: '80%',
          }}
          underlineColorAndroid = 'blue'
          placeholder = {this.state.placeholder}
          value = {this.state.username}
          onChangeText = { (username) => this.onChangeText(username) }
        />
        <Button
          onPress={this.login}
          color='blue'
          title='LOGIN'
        />
        {
          this.state.loading ?
          <ActivityIndicator size='large' color='blue'/>
          : null
        }
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
  }
});

export default LoginScreen;

