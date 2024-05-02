import React from "react";
import { View , Text } from "react-native";
import styles from "./style";

export default function ResultImc(props){
    return(
        <View styles={styles.resultImc}>
            <Text styles={styles.information}>{props.messageResultImc}</Text>
            <Text styles={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}
