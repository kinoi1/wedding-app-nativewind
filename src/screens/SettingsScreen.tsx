import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/layout/Layout';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type SettingsNav = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

export default function SettingsScreen() {
  const navigation = useNavigation<SettingsNav>();

  return (
    <Layout>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>⚙️ Pengaturan</Text>
        <Button title="Kembali ke Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </Layout>
  );
}
