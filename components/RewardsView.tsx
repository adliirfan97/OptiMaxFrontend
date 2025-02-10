import { Text, View } from "react-native";

export default function RewardsView({ cardRewards }) {
    return (
        <View className={"gap-y-4 px-4"}>
            <Text className={"text-xl font-bold"}>Your Rewards on this card</Text>
            {cardRewards.map((reward, index) => (
                <View key={index} className={"flex-row gap-x-4"}>
                    <View className={"bg-gray-400 size-20 rounded-xl"}/>
                    <View className={"flex-1 gap-y-1"}>
                        <Text className={"text-lg font-semibold"}>{reward.name}</Text>
                        <Text className={"text-wrap"}>{reward.reward}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}