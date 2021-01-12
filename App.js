
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import VideoPlayerComp from './src/components/VideoPlayer.js'
const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fce4ec'}}>
      <VideoPlayerComp/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1
  },
  
});

export default App;
