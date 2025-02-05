import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 justify-center items-center bg-blue-500">
          <Text className="text-white text-lg">Hello, NativeWind!</Text>
          <Text className="text-white text-lg">This is the Home Screen</Text>
        </View>
    );
}
