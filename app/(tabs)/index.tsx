import { Image, ScrollView, Text, View } from 'react-native';
import CreditCard from "@/components/CreditCard";

export default function HomeScreen() {
    return (
        <View className={"flex-1 bg-white"}>
            <ScrollView className={"p-4"}>
                <CreditCard />

                <Text className={"text-xl font-bold"}>Your Rewards on this card</Text>

            </ScrollView>
        </View>
    );
}
