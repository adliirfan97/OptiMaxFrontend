import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 justify-center items-center bg-blue-500">
        <Text className="text-white text-lg">This screen doesn't exist.</Text>
      </View>
    </>
  );
}
