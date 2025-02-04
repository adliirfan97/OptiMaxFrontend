import { Image, Text, View } from "react-native";

export default function CreditCard() {
    return (
        <View className={"justify-center items-center gap-y-2"}>
            <Image
                className={"w-80 h-48 rounded-xl"}
                source={require("../assets/images/citi_premiermiles.jpeg")}
            />

            <View className={"w-80 gap-y-2"}>
                <View>
                    <Text className={"font-bold"}>Citi PremierMiles Card</Text>
                </View>
                <View>
                    <Text>4242-4242-4242-4242</Text>
                </View>
                <View>
                    <Text>Expiry Date: 12/2029</Text>
                </View>
            </View>
        </View>
    );
}