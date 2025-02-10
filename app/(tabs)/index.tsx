import {
    Animated,
    ScrollView,
    Text,
    TouchableOpacity, useAnimatedValue,
    useWindowDimensions,
    View
} from 'react-native';
import CreditCard from "@/components/CreditCard";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const scrollX = useAnimatedValue(0);
    const {width: windowWidth} = useWindowDimensions();
    const router = useRouter();

    const creditCards = [
        {
            id: "citi-premiermiles",
            cardName: "Citi PremierMiles Card",
            cardNumber: "**** **** **** 4242",
            expiryDate: "12/29",
            image: require("../../assets/images/citi_premiermiles.jpeg")
        },
        {
            id: "hsbc-platinum",
            cardName: "HSBC Platinum Mastercard",
            cardNumber: "**** **** **** 4444",
            expiryDate: "08/27",
            image: require("../../assets/images/citi_premiermiles.jpeg")
        },
        {
            id: "amex-gold",
            cardName: "American Express Gold Card",
            cardNumber: "**** **** **** 8888",
            expiryDate: "04/28",
            image: require("../../assets/images/citi_premiermiles.jpeg")
        },
    ];

    const cardRewards = [
        {name: "Groceries", reward: "Cashback Rate: 3%"},
        {name: "Special Promotion", reward: "10% off with an $80+ spend at CapitaLand Malls"},
        {name: "Dining", reward: "Cashback Rate: 2%"},
        {name: "Entertainment", reward: "Cashback Rate: 5%"},
        {name: "Travel", reward: "Cashback Rate: 4%"},
        {name: "Gas & Fuel", reward: "Cashback Rate: 3%"},
        {name: "Online Shopping", reward: "Cashback Rate: 6%"},
        {name: "Streaming Services", reward: "Cashback Rate: 2%"},
        {name: "Pharmacy", reward: "Cashback Rate: 1.5%"},
        {name: "Electronics", reward: "Cashback Rate: 4%"},
        {name: "Gym & Fitness", reward: "Cashback Rate: 2.5%"},
    ];


    function handleAddCard() {
        // Implementation of Add Card function
    }

    function handleCreditCardPress(card) {
        // Navigate to transaction history
    }

    return (
        <View className={"flex-1 bg-white"}>
            {creditCards.length > 0 ? (
                <ScrollView className={"py-4"}>
                    <View className={"gap-y-4"}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                {useNativeDriver: false}
                            )}
                            scrollEventThrottle={1}
                        >
                            {creditCards.map((card, index) => (
                                <View key={index} style={{width: windowWidth}}
                                      className={"items-center justify-center gap-y-2"}>
                                    <CreditCard card={card} onPress={handleCreditCardPress(card)}/>
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
                            ))}
                        </ScrollView>
                        <View className="flex-row items-center justify-center">
                            {creditCards.map((card, index) => {
                                const width = scrollX.interpolate({
                                    inputRange: [
                                        windowWidth * (index - 1),
                                        windowWidth * index,
                                        windowWidth * (index + 1),
                                    ],
                                    outputRange: [8, 16, 8],
                                    extrapolate: 'clamp',
                                });
                                return (
                                    <Animated.View
                                        key={index}
                                        className="h-2 bg-gray-400 mx-1 rounded-full"
                                        style={{width}}
                                    />
                                );
                            })}
                        </View>

                        <TouchableOpacity
                            onPress={handleAddCard}
                            className={"bg-pink-300 p-4 rounded-full self-center"}>
                            <Text className={"text-white font-bold"}>Add Card</Text>
                        </TouchableOpacity>

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
                    </View>
                </ScrollView>
            ) : (
                <View className="items-center justify-center py-10 gap-y-4">
                    <Text className="text-lg font-bold text-gray-600">No cards available</Text>
                    <Text className="text-gray-500">Add a card to start earning rewards</Text>
                    <TouchableOpacity
                        onPress={handleAddCard}
                        className="bg-pink-300 p-4 rounded-full self-center"
                    >
                        <Text className="text-white font-bold">Add Card</Text>
                    </TouchableOpacity>
                </View>


            )}
        </View>
    );
}
