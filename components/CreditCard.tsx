import { Image, Text, View } from "react-native";

export default function CreditCard({ card }) {
    return (
        <View className={"justify-center items-center gap-y-4"}>
            <Image
                className={"w-80 h-48 rounded-xl"}
                source={require("../assets/images/citi_premiermiles.jpeg")}
            />

            <View className={"w-80 gap-y-2"}>
                <View>
                    <Text className={"font-bold"}>{card.cardName}</Text>
                </View>
                <View>
                    <Text>{card.cardNumber}</Text>
                </View>
                <View>
                    <Text>Expiry Date: {card.expiryDate}</Text>
                </View>
            </View>
        </View>
    );
}