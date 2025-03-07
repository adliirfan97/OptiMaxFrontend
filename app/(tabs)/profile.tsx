import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login"); // Redirect to the main app
  };

  return (
      <View className="flex-1 justify-center items-center bg-blue-500">
        <Text className="text-white text-lg">Hello, NativeWind!</Text>
        <Text className="text-white text-lg">This is the Profile Screen</Text>
        <TouchableOpacity onPress={handleLogout} className="bg-gray-300 p-4 rounded">
          <Text className="text-black font self-center">Logout</Text>
        </TouchableOpacity>
      </View>
  );
}
