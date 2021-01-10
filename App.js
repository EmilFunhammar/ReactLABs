import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View
      style={{ flexDirection: 'row', height:100, backgroundColor: 'yellow' }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={require('./assets/house.png')}
      />
      <Text style={{ color: 'blue', fontSize: 22, fontWeight: 'bold' }}>
        SmartHome
      </Text>
    </View>
  );
};

const Box = ({ textValue }) => {
  return (
    <View style={{ backgroundColor: 'lightgray' }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('./assets/living-room.png')}
      />
      <Text>{textValue}</Text>
    </View>
  );
};
const Boxes = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box value={'./assets/bed.png'} textValue="Bedroom" />
      <Box value={'./assets/living-room.png'} textValue="Living room" />
      <Box value={'./assets/kitchen.png'} textValue="Kitchen" />
    </View>
  );
};

const Panel = ({ value }) => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginTop: 15
      }}
    >
      <View style={{ backgroundColor: 'red', height: 10, width: 10 }}></View>
      <Text>{value}</Text>
    </View>
  );
};

const Panels = () => {
  return (
    <View>
      <Panel value="Bed room"></Panel>
      <Panel value="Living room"></Panel>
      <Panel value="Kitchen"></Panel>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
        Rooms
      </Text>
      <Boxes></Boxes>
      <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
        Devices
      </Text>
      <Panels></Panels>
      <Text>Total Devices on {0}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
    marginTop: 50,
    marginBottom: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
});
