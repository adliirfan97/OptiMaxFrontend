import { Text, TouchableOpacity } from "react-native";

export default function AddCardButton({ handleAddCard }: { handleAddCard: () => void }) {
    return (
        <TouchableOpacity
            onPress={handleAddCard}
            className={"bg-pink-300 p-4 rounded-full self-center"}>
            <Text className={"text-xl text-white font-bold"}>Add Card</Text>
        </TouchableOpacity>
    );
}