import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import firebase from 'firebase';
import db from '../config';
import { Header } from "react-native-elements";
import { RFValue } from 'react-native-responsive-fontsize';


export default class StartEarTestScreen extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    centerComponent={{ text: "Hi.. Let's Start Your Ear Test", style: { color: '#fff' } }}
                />
        <TouchableOpacity onPress = {() => {
            Alert.alert("CAUTION: Pls wear your headphone/ Earphone in order to start your test");
        }}> 
            <Text> START MY EAR TEST </Text>
            
        </TouchableOpacity>
            </View>
            
        )
    }
}