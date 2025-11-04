import React, { useState } from "react";
import {
  View,
  StatusBar,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
  backgroundColor?: string;
}

/**
 * Layout utama aplikasi.
 *
 * - Mengatur area aman (SafeAreaView)
 * - Menyediakan opsi scroll (untuk halaman panjang)
 * - Dapat diatur warna background
 */
export default function Layout({
  children,
  scrollable = false,
  backgroundColor = "#F5F0FE",
}: LayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        />
        <View style={styles.container}>
          <Sidebar
            visible={sidebarVisible}
            onClose={() => setSidebarVisible(false)}
          />
          <View style={styles.main}>
            {children}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%"
  },
  main: {
    height: "100%",
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    boxShadow: "-5px 0px 10px -2px rgba(0,0,0,0.2)",
  }
});
// -webkit-box-shadow: -5px 0px 9px -2px rgba(0,0,0,0.4); 
// box-shadow: -5px 0px 9px -2px rgba(0,0,0,0.4);