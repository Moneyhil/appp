import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,textDecorationL} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { push } from 'expo-router/build/global-state/routing';
import { router } from 'expo-router';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignUp = () => {
    // Add your Firebase auth logic here
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Sign Up button clicked!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.heading}>Sign Up</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          value={form.name}
          onChangeText={text => handleChange("name", text)}
          style={styles.input}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your Email"
          value={form.email}
          onChangeText={text => handleChange("email", text)}
          style={styles.input}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone number</Text>
        <TextInput
          placeholder="Enter your phone number"
          value={form.phone}
          onChangeText={text => handleChange("phone", text)}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={form.password}
          onChangeText={text => handleChange("password", text)}
          style={styles.input}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="confirm your password"
          value={form.confirmPassword}
          onChangeText={text => handleChange("confirmPassword", text)}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => router.push('signin')}>
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c00808ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#d40000',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#d40000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#444',
    marginTop: 10,
  },
  loginLink: {
    color: '#0000ff',
    textDecorationL
  },
})