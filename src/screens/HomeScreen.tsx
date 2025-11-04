import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppNavigator";
import Layout from "@/components/layout/Layout";

type HomeNav = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNav>();

  return (
    <Layout>
      <View className="tex-lg">
        <Text className="w-[1rem]" style={{ fontSize: 20, fontWeight: "bold" }}>
          Halaman Utama
        </Text>
        <Button
          title="Ke Profil"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button
          title="Ke Pengaturan"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </Layout>
  );
}