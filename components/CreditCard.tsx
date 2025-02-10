import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function CreditCard({ card, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} className={"w-80 h-48 rounded-lg overflow-hidden"}>
            <ImageBackground source={card.image} className={"flex-1"}/>
        </TouchableOpacity>
    );
}