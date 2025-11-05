import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Home, User, Settings, Menu } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/AppNavigator";
import main from "@/styles/main";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Sidebar() {
  const navigation = useNavigation<NavigationProp>();
  const [collapse, setCollapse] = useState(false);
  const menus = [
    { name: "Home", label: "Beranda", icon: Home },
    { name: "Profile", label: "Profil", icon: User },
    { name: "Settings", label: "Pengaturan", icon: Settings },
  ];

  return (
    <View style={[styles.sidebar, collapse && styles.sidebarActive]}>
      {/* Daftar Menu */}
      <View style={[main.justifyCenter,main.pr2, collapse && styles.sidebarBorder]}>
        <View style={[main.itemsCenter, main.mt4]}>
          <Pressable onPress={() => setCollapse(!collapse)}>
            <Menu color="gray" size={30} />
          </Pressable>
        </View>
        {menus.map((item, index) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              key={index}
              style={styles.sidebarContainer}
              onPress={() =>
                navigation.navigate(item.name as keyof RootStackParamList)
              }
            >
              <View
                style={[
                  main.justifyCenter,
                  main.itemsCenter,
                  main.aspectRatio1,
                ]}
              >
                <Icon color="gray" size={30} />
              </View>
              <Text style={[styles.sidebarLabel, main.textCenter]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {collapse && (
        <View style={main.m4}>
          <Text>tes</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: "row",
    width: 90,
    height: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    // borderRightWidth: 1,
    // borderRightColor: "#919191ff",
    // borderStyle: "solid",
    backgroundColor: "#F5F0FE",
  },
  sidebarActive: {
    flexDirection: "row",
    width: 300,
    height: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    // borderRightWidth: 1,
    // borderRightColor: "#919191ff",
    // borderStyle: "solid",
    backgroundColor: "#F5F0FE",
  },
  sidebarContainer: {
    paddingBottom: 8,
  },
  sidebarLabel: {
    fontSize: 11,
  },
  sidebarBorder: {
    borderRightWidth: 1,
    borderRightColor: "#919191ff",
    borderStyle: "solid",
  }
});
