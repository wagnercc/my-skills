import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export function Button({ onPress }) {
    return (
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={.8}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        marginTop: 5,
        borderRadius: 7,
        alignItems: 'center'
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
      }
})