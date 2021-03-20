import {Text, View, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import React, {useState } from 'react'
import RNSliderRuler from 'react-native-slider-ruler';
import * as Progress from 'react-native-progress';
const App = () => {
    const stepWidth = useWindowDimensions().width;
    const [age, setAge] = useState();
    const [step, setStep] = useState(1);
    return (
        <View style={styleSheets.container}>
          <View style={styleSheets.stepper}>
            <TouchableOpacity style={{left: 20}}>
              <Image style={styleSheets.image} source={require('./images/back.png')}/>
            </TouchableOpacity>
            <Progress.Bar 
              style={styleSheets.progress}
              color={'#7bccd6'}
              unfilledColor={'#f0f0f0'}
              progress={`${step}` / 8} 
              width={stepWidth - 150} 
              height={10} />
            <Text style={styleSheets.stepText}>{`${step}`}/8</Text>
          </View>
          <View style={styleSheets.headerContainer}>
            <Text style={styleSheets.headerText}>
                How old are you ?
            </Text>
          </View>
          <RNSliderRuler 
            style={{width: '100%', height: 140}}
            minValue={18}
            maxValue={90}
            step={1}
            num={10}
            unit={""}
            defaultValue={18}
            onSelect={(value) => {
            setAge(value)
            }}
          ></RNSliderRuler>
          <TouchableOpacity style={styleSheets.touchable} onPress={()=> {}}>
                    <Text style={styleSheets.Text}>Continue</Text>
          </TouchableOpacity>
        </View>
    )
}

export default App;

const styleSheets = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    stepper: {
        position: 'absolute',
        height: 40,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    image: {
        width: 30,
        height: 30,
        top: 5
    },
    progress: {
        height: 10,
        top: 15,
        borderWidth: 0,
        borderRadius: 6
    },
    stepText: {
      right: 20,
      lineHeight: 40,
      color: '#515a60',
      fontWeight: 'bold',
    },
    headerContainer: {
        width: '100%',
        top: 60,
        left: 20
    },
    headerText: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#515a60',
    },
    touchable: {
        width: '60%',
        height: 50,
        borderRadius: 30,
        bottom: 50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#53ced8"
    },
    Text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
