import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, form, TextInput, TouchableOpacity, StyleSheet, Linking, SafeAreaView } from 'react-native';
import { router } from 'expo-router';


export default function LoginScreen() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
 
      <View style={styles.container}>
        <Text style={styles.heading}>Log In</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your Email"
          value={form.email}
          onChangeText={text => handleChange("email", text)}
          style={styles.input}
          keyboardType="email-address"
        />
         <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={form.password}
          onChangeText={text => handleChange("password", text)}
          style={styles.input}
          secureTextEntry
        />


        <View style={styles.forgotContainer}>
         <Text style={styles.footerText}>
          Forget your password?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => router.push('signin')}>
            Forget password
          </Text>
        </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cc0000',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 12,
    marginBottom: 5,
    backgroundColor: '#f2f2f2',
  },
  forgotContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 20,
  },
  forgotLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#cc0000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
