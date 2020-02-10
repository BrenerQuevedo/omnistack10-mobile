import React , {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';


function Main(){
    useEffect(()=> {
        async function loadInitialPosition() {
            //faz uma requisição de permissão ao usuário
            const {granted} = await requestPermissionsAsync(); 
        
            if(granted) {
                //obtém a localização caso o usuário permita (granted), para maior precisão o GPS deve estar ligado
                const location = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                location.
            }
        }

        loadInitialPosition()
    }, [])

    return <MapView style = {styles.map}/>
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
});


export default Main;