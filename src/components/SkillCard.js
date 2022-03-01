import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkills}>
            <Text style={styles.textSkills}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkills: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 20,
        marginTop: 10
      },
      textSkills: {
        color: '#FFF',
        fontSize: 16,
      }
});