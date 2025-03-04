import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { screenWidth } from '../constants/ScreenDimensions';

interface CreditCardIO {
    card: { image: any };
    onPress: () => void;
}

export default function CreditCard({ card, onPress }: CreditCardIO): JSX.Element {
    if (!card || !card.image) {
        return <View />;
    }
    const cardWidth = screenWidth * 0.8;
    const cardHeight = cardWidth * (3 / 5);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[{ width: cardWidth, height: cardHeight }]} className={"rounded-lg overflow-hidden"}>
            <ImageBackground source={card.image} className={"flex-1"}/>
        </TouchableOpacity>
    );
}