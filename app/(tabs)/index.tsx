import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CreditCard from "@/components/CreditCard";

export default function HomeScreen() {

    const creditCards = [
        {
            cardName: "Citi PremierMiles Card",
            cardNumber: "4242-4242-4242-4242",
            expiryDate: "12/2029",
            imageLink: "../assets/images/citi_premiermiles.jpeg"
        },
        {
            cardName: "HSBC Platinum Mastercard",
            cardNumber: "1111-2222-3333-4444",
            expiryDate: "08/2027",
            imageLink: "../assets/images/citi_premiermiles.jpeg"
        },
        {
            cardName: "American Express Gold Card",
            cardNumber: "5555-6666-7777-8888",
            expiryDate: "04/2028",
            imageLink: "../assets/images/citi_premiermiles.jpeg"
        },
    ]
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

    return (
        <View className={"flex-1 bg-white"}>
            <ScrollView className={"p-4"}>
                <View className={"gap-y-4"}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={160} // This will snap to the full width of each card
                        snapToAlignment="center" // This ensures the card is centered
                        decelerationRate="fast" // For smooth scrolling
                        className={"gap-x-20"}
                    >
                        {creditCards.map((card, index) => (
                            <CreditCard key={index} card={card}/>
                        ))}
                    </ScrollView>

                    <TouchableOpacity onPress={handleAddCard}
                                      className={"bg-pink-300 p-4 rounded-full self-center"}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>

                    <Text className={"text-xl font-bold"}>Your Rewards on this card</Text>

                    <View className={"gap-y-4"}>
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
        </View>
    );
}
