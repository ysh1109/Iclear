import React from 'react'
import {View,StyleSheet,Dimensions } from 'react-native'
import VideoPlayer from 'react-native-video-player';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const VideoUrl = [
    {id:1,uri:'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'},
    {id:2,uri:'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'},
    {id:3,uri:'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'}
]
const  VideoPlayerComp =()=> {
    return (
        <View style={{flex:1,justifyContent:'center',width:SCREEN_WIDTH-10,alignSelf:'center'}}>
           {VideoUrl.map((video,index)=>(

               <VideoPlayer 
                    autoplay={true}
                    key={video.id}
                    style={styles.player}
                    video={{uri:video.uri}}
               />
               ))}
        </View>
    )
}

export default VideoPlayerComp


const styles = StyleSheet.create({

    player : {
        height:SCREEN_HEIGHT/3.3,
        backgroundColor:'white',
        borderColor:'black',
        marginTop:10,
        elevation:5
    }
})