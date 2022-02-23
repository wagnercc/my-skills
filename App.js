import React, { useState } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Wagner</Text>

      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[ styles.title, {marginTop: 35 } ]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkills}>
          <Text style={styles.textSkills}>
            {skill}
          </Text>
        </TouchableOpacity>
        ))
      }


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
  },
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
})
