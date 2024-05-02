import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultIMC/";

//conteudo do Form
export default function Form(){

const [heigth, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessage] = useState("Preencha o peso e altura:");
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
        setMessageButton("Calcular Novamente");
        return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
}

    return(
        <View>
            <View>
                <Text>Altura</Text> 
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 75.365" keyboardType="numeric"></TextInput>

                <Button title="Calcular IMC" ></Button>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc} />
        </View>
    );
}
