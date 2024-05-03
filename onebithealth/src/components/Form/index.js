import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import ResultImc from "./ResultImc/index/";


//conteudo do Form
export default function Form(){

const [heigth, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessageImc] = useState("Preencha o peso e altura:");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weight/(heigth*heigth)).toFixed(2));
}
function validationImc(){
    if(weight != null && heigth != null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageImc("Seu IMC é igual: ");
        setTextButton("Calcular Novamente");
        return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text> 
                <TextInput 
                style={styles.input}
                onChangeText={setHeight} 
                value={heigth} 
                placeholder="Ex. 1.75" 
                keyboardType="numeric"/>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight} 
                value={weight} 
                placeholder="Ex. 75.365" 
                keyboardType="numeric"/>

                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            
            <ResultImc messageResultImc={messageImc} resultImc = {imc} />
        </View>
    );
}
