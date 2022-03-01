import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting("Good Morning");
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Night");
        }
    }, [greeting]);
  
    function handleAddNewSkill() {
      setMySkills(oldState => [...oldState, newSkill]);
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Wagner</Text>
        <Text style={styles.greetingText}>{ greeting }</Text>
  
        <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor="#777"
          onChangeText={setNewSkill}
        />
  
        <Button onPress={handleAddNewSkill}/>
  
        <Text style={[ styles.title, {marginTop: 35 } ]}>
          My Skills
        </Text>
  
        
        <FlatList
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <SkillCard skill={item}/>
            )}
        />
  
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 30,
      paddingVertical: 50,
    },
    title: {
      color: '#d2d2d2',
      fontWeight: '500',
      fontSize: 22
    },
    input: {
      backgroundColor: '#1F1E25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 20
    },
    greetingText: {
        color: '#FFF',
        marginVertical: 2,
    }
    
  })