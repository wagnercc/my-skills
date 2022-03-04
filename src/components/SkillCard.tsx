import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface SkillCard extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCard ) {
    return (
        <TouchableOpacity style={styles.buttonSkills} {...rest}>
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