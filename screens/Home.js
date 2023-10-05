import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



function HomeScreen() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  

    const navigation = useNavigation();

    
    const handleLogin = () => {
      console.log('login', login, 'password', password);
        const newUser = {
            Email: login,
            Password: password,
          };
    const backendUrl = 'http://192.168.31.170:5001/api/user/login';

    axios.post(backendUrl, newUser)
  .then(response => {
    console.log('Успішно ввійшли', response.data);
    navigation.navigate('Dashboard');
  })
  .catch(error => {
    if (error.response) {
      // Відповідь від сервера має статус, який може бути оброблений
      console.error('Помилка від сервера', error.response.data);
    } else if (error.request) {
      // Запит був відправлений, але не було отримано відповідь (може бути мережевою помилкою)
      console.error('Мережева помилка', error.request);
    } else {
      // Інші помилки
      console.error('Інша помилка', error.message);
    }
  });
      


    };

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Login</Text>
          <TextInput
            placeholder="Login"
            value={login}
            onChangeText={text => setLogin(text)}
            style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          />
          <Button title="Login" onPress={handleLogin}  />
        </View>
      );
    }
    
export default HomeScreen;