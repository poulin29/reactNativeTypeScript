import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';
import { Pet } from './Components/Pet';
import { PetQualities } from './Components/PetQualities';


export default function App() {
  const petName = {
    firstName: 'Teddy',
    lastName: 'Hailey'
  }

  const qualities = [
    {
      qualOne: 'a dog',
      qualTwo: 'enoromous',
      qualThree: 'scary and very naughty',
      age: 4

    },
    {
      qualOne: 'brown',
      qualTwo: 'wheatish',
      qualThree: 'very cute and silent',
      age: 2

    },
  ]

  const constMessage = "Are these two pets really adorable ?"
  const [finalMessage, setFinalMessage] = useState('Yes they are really adorable');

  return(
    <View style={styles.container}>
      <Welcome  name="Poulina" age={32} gender={true}/>
      <Pet petName={petName} type='TeddyBear'/>
      <PetQualities  qualities={qualities}/>
      <Text>{constMessage}</Text>
      <Text>{finalMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});

