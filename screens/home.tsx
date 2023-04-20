import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { getRestaurants, getRandomInt } from '../food_finder';
import styles from './styles';
  
  {/*
      <ImageBackground
        // The background image of the app
        source={require('../Image_Files/background.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
      */}
  
         {/*</ImageBackground>*/}
  
  

{/* Homescreen with user inputs */}
const HomeScreen = ({navigation} : {navigation:any}) => {
    const [location, setLocation] = useState('empty');
    const [price, setPrice] = useState('empty');
    const [food, setFood] = useState('empty');
    const [foodIndex, setIndex] = useState(0);
    const [errmsg, setErrmsg] = useState('');
  
    const foodTypes = ['Random Option',
                       'Breakfast & Brunch',
                       'Diners',
                       'Sandwiches',
                       'Hot Dogs',
                       'Burgers',
                       'Pizza',
                       'Barbeque',
                       'Seafood',
                       'Steakhouses',
                       'Vegetarian',
                       'Vegan',
                       'Poke',
                       'Southern',
                       'Soul Food',
                       'Cajun/Creole',
                       'Comfort Food',
                       'Tex-Mex',
                       'Latin American',
                       'Mexican',
                       'Colombian',
                       'Brazilian',
                       'Peruvian',
                       'Dominican',
                       'Puerto Rican',
                       'Venezuelan',
                       'Cuban',
                       'Tacos',
                       'Haitian',
                       'Spanish',
                       'Italian',
                       'French',
                       'Mediterranean',
                       'Middle Eastern',
                       'Greek',
                       'Halal',
                       'Indian',
                       'Chinese',
                       'Japanese',
                       'Korean',
                       'Vietnamese',
                       'Thai',
                       'Ramen',
                       'Noodles',
                       'Asian Fusion',
                       'Coffee & Tea',
                       'Cafes',
                       'Desserts',
                       'Bakeries',
                       'Ice Cream & Frozen Yogurt'
                      ];

    
    const foodValues = ['random',
                        'breakfast_brunch',
                        'diners',
                        'sandwiches',
                        'hotdogs',
                        'burgers',
                        'pizza',
                        'bbq',
                        'seafood',
                        'steakhouses',
                        'vegetarian',
                        'vegan',
                        'poke',
                        'southern',
                        'soulfood',
                        'cajun',
                        'comfortfood',
                        'tex-mex',
                        'latin',
                        'mexican',
                        'colombian',
                        'brazilian',
                        'peruvian',
                        'dominican',
                        'puertorican',
                        'venezuelan',
                        'cuban',
                        'tacos',
                        'haitian',
                        'spanish',
                        'italian',
                        'french',
                        'mediterranean',
                        'mideastern',
                        'greek',
                        'halal',
                        'indian',
                        'chinese',
                        'japanese',
                        'korean',
                        'vietnamese',
                        'thai',
                        'ramen',
                        'noodles',
                        'asianfusion',
                        'coffee',
                        'cafes',
                        'desserts',
                        'bakeries',
                        'icecream'
                       ];


  
    return (
      <View style={styles.container}>
        <Image 
          source={require('./shuffle_bite_small.png')}
          style={{ marginBottom: 20, marginTop: 50 }} 
        />

        <Text style={styles.textContainer}>Enter Locaton/Zipcode:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Location"
          placeholderTextColor={"#5f471f"}
          onChangeText={newLocation => setLocation(newLocation)}
        />

        <Text style={styles.textContainer}>Choose Price:</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setPrice('1')
              styles.button1.backgroundColor = '#5f471f'
              styles.buttonText1.color = '#ecd0a1'

              styles.button2.backgroundColor = '#ecd0a1'
              styles.buttonText2.color = '#5f471f'
              
              styles.button3.backgroundColor = '#ecd0a1'
              styles.buttonText3.color = '#5f471f'

              styles.button4.backgroundColor = '#ecd0a1'
              styles.buttonText4.color = '#5f471f'
            }}
            style={styles.button1}   
          >
            <Text style={styles.buttonText1}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPrice('2')
              styles.button1.backgroundColor = '#ecd0a1'
              styles.buttonText1.color = '#5f471f'

              styles.button2.backgroundColor = '#5f471f'
              styles.buttonText2.color = '#ecd0a1'
              
              styles.button3.backgroundColor = '#ecd0a1'
              styles.buttonText3.color = '#5f471f'

              styles.button4.backgroundColor = '#ecd0a1'
              styles.buttonText4.color = '#5f471f'
            }}
            style={styles.button2}    
          > 
            <Text style={styles.buttonText2}>$$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPrice('3')
              styles.button1.backgroundColor = '#ecd0a1'
              styles.buttonText1.color = '#5f471f'

              styles.button2.backgroundColor = '#ecd0a1'
              styles.buttonText2.color = '#5f471f'

              styles.button3.backgroundColor = '#5f471f'
              styles.buttonText3.color = '#ecd0a1'

              styles.button4.backgroundColor = '#ecd0a1'
              styles.buttonText4.color = '#5f471f'
            }} 
            style={styles.button3}   
          >
            <Text style={styles.buttonText3}>$$$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPrice('4')
              styles.button1.backgroundColor = '#ecd0a1'
              styles.buttonText1.color = '#5f471f'

              styles.button2.backgroundColor = '#ecd0a1'
              styles.buttonText2.color = '#5f471f'
              
              styles.button3.backgroundColor = '#ecd0a1'
              styles.buttonText3.color = '#5f471f'

              styles.button4.backgroundColor = '#5f471f'
              styles.buttonText4.color = '#ecd0a1'
            }}
            style={styles.button4}     
          >
            <Text style={styles.buttonText4}>$$$$</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textContainer}>Choose Food Type:</Text>

        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          data={foodTypes}
          onSelect={(foodType: string, index: number) => {
                      setFood(foodType);
                      setIndex(index);

                      if (index === 0) setIndex(getRandomInt(foodValues.length));
                    }}
          defaultButtonText='Select Option'
        />
  
        <TouchableOpacity 
          style={styles.foodFinderButton}
          onPress={async () => {
            if (location === 'empty' || price === 'empty' || food === 'empty')
            {
              setErrmsg('AAAAAAAAAAAA');
            }
            else
            {
              const choices = await getRestaurants(location, foodValues[foodIndex], price);
              navigation.navigate('Choices', {foodChoices: choices});
            }
          }}
        >
          <Text style={styles.buttonText}>Find Food!</Text>
          {/*<Text style={{color: 'red',
                        marginTop: 1,
                        fontWeight: 'bold'
                      }}
          >
            {errmsg}
          </Text>*/}
        </TouchableOpacity>
      </View>
    );
  };

  export default HomeScreen;