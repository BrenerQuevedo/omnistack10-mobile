import React , {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';


function Main({navigation}){
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(()=> {
        async function loadInitialPosition() {
            //faz uma requisição de permissão ao usuário
            const {granted} = await requestPermissionsAsync(); 
        
            if(granted) {
                //obtém a localização caso o usuário permita (granted), para maior precisão o GPS deve estar ligado
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const {latitude, longitude} = coords;
            
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta:0.04,
                    longitudeDelta:0.04,
                });
            }
        }

        loadInitialPosition()
    }, [])

    if(!currentRegion) {
        return null;
    }

    return <MapView  style = {styles.map} initialRegion={currentRegion}>
            <Marker coordinate={{latitude:-7.2399455,longitude: -35.9043105}}>
            <Image style={styles.avatar} source={{uri: "https://avatars1.githubusercontent.com/u/39017457?s=460&v=4"}}/>

            <Callout onPress={()=> navigation.navigate("Profile", {github_username: "BrenerQuevedo"})}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Brener Quevedo</Text>
                    <Text style={styles.devBio}>bio de teste</Text>
                    <Text style={styles.devTechs}>ReactJS, NODE, react native</Text>
                </View>
            </Callout>

            </Marker>
        </MapView>
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar:{
        width: 54,
        height: 54,
        borderRadius:4,
        borderWidth: 4,
        borderColor: "#fff"
    },
    callout: {
        width: 260,

    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio:{
        color: "#666",
        marginTop: 5,
    },
    devTechs:{
        marginTop: 5
    }
});


export default Main;