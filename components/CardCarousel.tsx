import { Animated, ScrollView, Text, useAnimatedValue, useWindowDimensions, View } from "react-native";
import CreditCard from "@/components/CreditCard";

export default function CardCarousel({ creditCards, handleCreditCardPress }) {
    const scrollX = useAnimatedValue(0);
    const {width: windowWidth} = useWindowDimensions();

    return (
        <>
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
        </>
    );
}