import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import styles from "./style";
import ResultImc from "./ResultImc/index/";


//conteudo do Form
export default function Form() {
    /* Setou alguns states  para ajudar a controlar algumas informações dentro de algumas funções, variaveis*/
    const [heigth, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura:");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    /* Função para calcular o IMC*/
    function imcCalculator() {
        let heightFormat = heigth.replace(",", ".");
        return setImc((weight / (heigth * heigth)).toFixed(2));
    }

    /* Função para verificar se os campos estão vazios, se sim chama a API vibrar*/
    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        }
    }
    /* Função para verificar se os campos estão nulos se sim irá vibrar e mostrar um alerta*/
    function validationImc() {
        if (weight != null && heigth != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        }
        else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return (
        /* Pressable: fechar o teclado ao clicar em qualquer lugar da tela*/
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={heigth}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric" />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 75.365"
                        keyboardType="numeric" />

                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>

                    <ResultImc messageResultImc={messageImc}
                        resultImc={imc} />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
    /* TouchableOpacity é o boton, é um efeito para melhorar o visual*/
}
