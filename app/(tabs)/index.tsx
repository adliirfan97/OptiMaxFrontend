import AddCardButton from "@/components/AddCardButton";
import CardCarousel from "@/components/CardCarousel";
import RewardsView from "@/components/RewardsView";
import { useRouter } from "expo-router";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function HomeScreen() {
    const router = useRouter();

    const creditCards = [
        {
            id: "citi-premiermiles",
            cardName: "Citi PremierMiles Card",
            cardNumber: "**** **** **** 4242",
            expiryDate: "12/29",
            image: require("../../assets/cards/Citi_PremierMiles_Card.png")
        },
        {
            id: "citi-rewards",
            cardName: "Citi Rewards Card",
            cardNumber: "**** **** **** 4444",
            expiryDate: "08/27",
            image: require("../../assets/cards/Citi_Rewards_Card.png")
        },
        {
            id: "standard-chartered-simplycash",
            cardName: "Standard Chartered SimplyCash",
            cardNumber: "**** **** **** 8888",
            expiryDate: "04/28",
            image: require("../../assets/cards/Standard_Chartered_Simply_Cash_Credit_Card.png")
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
        router.push("../addCard");
    }

    function handleCreditCardPress(card) {
        // Navigate to transaction history
    }

    return (
        <View className={"flex-1 bg-white"}>
            {creditCards.length > 0 ? (
                <ScrollView className={"py-4"}>
                    <View className={"gap-y-4"}>

                        <CardCarousel creditCards={creditCards} handleCreditCardPress={handleCreditCardPress}/>

                        <AddCardButton handleAddCard={handleAddCard}/>

                        <RewardsView cardRewards={cardRewards}/>
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
