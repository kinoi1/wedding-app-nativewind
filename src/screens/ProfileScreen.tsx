import { View, Text, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="items-center justify-center bg-gray-100">
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
        className="w-24 h-24 rounded-full mb-4"
      />
      <Text className="text-xl font-bold text-gray-800">Agil Supriyanto</Text>
      <Text className="text-gray-500 mt-2">Web Developer</Text>
    </View>
  );
}
