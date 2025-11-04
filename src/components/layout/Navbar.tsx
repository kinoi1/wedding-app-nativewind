import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface NavbarProps {
  title?: string;
  onMenuPress: () => void;
}

export default function Navbar({ title = "MyApp", onMenuPress }: NavbarProps) {
  return (
    <View className="flex-row" style={style.flexRow}>
      <Text className="text-xl font-bold text-blue-600">{title}</Text>
      <Pressable
        className="p-2 rounded-full bg-blue-100"
        onPress={onMenuPress}
      >
        <Ionicons name="menu" size={24} color="#2563EB" />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
    flexRow: {flexDirection:"row"}
});