import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {getRandomInt} from '../food_finder.js';

{/* Choice screen containers */}
export const ChoicesScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',
      padding: 10, 
      marginTop: '50%',
      marginBottom: 30}}>
        <TouchableOpacity
          onPress={() => 
            navigation.navigate('FinalChoice', {food: route.params.foodChoices[0]})
          }   
          style={{justifyContent: 'center',
                  alignItems: 'center',
                  width: 150, 
                  height: 150, }}  
        >
          <Image
            source={require('./shuffle_bite_back_small.png')}
            style={{
              marginBottom: 30,
              marginLeft: 50,
              marginRight: 67}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 
            navigation.navigate('FinalChoice', {food: route.params.foodChoices[1]})
          }   
          style={{justifyContent: 'center',
                  alignItems: 'center',
                  width: 150, 
                  height: 150, }}  
        >
          <Image
            source={require('./shuffle_bite_back_small.png')}
            style={{
              marginBottom: 30,
              marginLeft: 67,
              marginRight: 50}}
          />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        onPress={() => {
          const index = getRandomInt(2);
          navigation.navigate(`FinalChoice`, {food: route.params.foodChoices[index]})
        }}   
        style={{justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecd0a1', 
        marginLeft: 3,
        marginRight: 3,
        width: 100,
        height: 30,
        borderRadius: 10,
        borderColor: '#5f471f',
        borderWidth: 2,
        marginBottom: 200}}  
      >
        <Text style={styles.buttonText}>Can't Decide?</Text>
      </TouchableOpacity>

    </View>
  );
};
  
export const FinalChoiceScreen = ({route} : {route:any}) => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fafafa'}}>
      <Image
            source={require('./shuffle_bite_blank_small.png')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              }}
      />
      <Text style={{ position: 'absolute',
                     fontWeight: 'bold',
                     width: 200,
                     top: '40%',
                     color: '#5f471f'
                     }}
      >
        Name: {route.params.food[0]}
      </Text>
      <Text style={{ position: 'absolute',
                     fontWeight: 'bold',
                     width: 200,
                     top: '50%',
                     color: '#5f471f'
                     }}
      >
        Location: {route.params.food[1]}
      </Text>
      <Text style={{ position: 'absolute',
                     fontWeight: 'bold',
                     width: 200,
                     top: '60%',
                     color: '#5f471f'
                     }}
      >
        Phone: {route.params.food[2]}
      </Text>
    </View>
  )
};

export default ChoicesScreen;