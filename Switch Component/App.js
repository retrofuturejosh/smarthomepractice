import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import axios from 'axios';

let { width } = Dimensions.get('window');
console.log(width);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOn: true,
      switchState: 'Turn Off',
      powerOffIcon: require('./assets/power-red.png'),
      powerOnIcon: require('./assets/power-green.png')
    };
    this.handleTap = this.handleTap.bind(this);
  }

  handleTap(e) {
    if (this.state.switchState === '...') return;
    switch (this.state.isOn) {
      case true: {
        this.setState({ switchState: '...' });
        this.togglePower('OFF');
        break;
      }
      case false: {
        this.setState({ switchState: '...' });
        this.togglePower('ON');
        break;
      }
      default: {
        break;
      }
    }
  }

  togglePower(command) {
    return axios
      .put(
        `https://c2yolf4d1e.execute-api.us-east-1.amazonaws.com/dev/plug/ZWaveNode2ZW096SmartSwitch6_Switch/toggle`,
        JSON.stringify({ isOn: !!(command === 'ON') })
      )
      .then(res => {
        if (res.status === 200) {
          command === 'ON'
            ? this.setState({ isOn: true, switchState: 'Turn Off' })
            : this.setState({ isOn: false, switchState: 'Turn On' });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.handleTap}>
          <Image
            style={styles.icon}
            source={
              this.state.isOn ? this.state.powerOnIcon : this.state.powerOffIcon
            }
          />/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: (width * 0.5),
    resizeMode: 'contain'
  }
});
