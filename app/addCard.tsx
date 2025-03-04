import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function AddCard({ navigation }) {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [ccv, setCcv] = useState('');

    const handleAddCard = () => {
        // Implementation of adding card logic
        // For example, you can send the card details to your backend server or update the state
        console.log({ cardName, cardNumber, expiryDate, ccv });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Card</Text>
            <Text style={styles.titleDescription}>Verify and complete your card information</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={cardName}
                    onChangeText={setCardName}
                    placeholder="Enter card name"
                />
                <Text style={styles.label}>Card Number</Text>
                <TextInput
                    style={styles.input}
                    value={cardNumber}
                    onChangeText={
                        (text) => {
                            if (text.length > 16) {
                                setCardNumber(text.slice(0, 16));
                            } else {
                                setCardNumber(text);
                            }
                        }
                    }
                    placeholder="Enter card number"
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                    // const maxLength = 5;
                    style={styles.input}
                    value={expiryDate}
                    onChangeText={
                        (text) => {
                            if (text.length === 2 && expiryDate.length === 1) {
                                setExpiryDate(text + '/');
                            } else if (text.length === 2 && expiryDate.length === 2) {
                                setExpiryDate(text.slice(0, 1));
                            } else if (text.length > 5) {
                                setExpiryDate(text.slice(0, 5));
                            }   else {
                                setExpiryDate(text);
                            }
                        }
                    }
                    placeholder="MM/YY"
                    keyboardType='numeric'
                />
                <Text style={styles.label}>CCV</Text>
                <TextInput
                    style={styles.input}
                    value={ccv}
                    onChangeText={
                        (text) => {
                            if (text.length > 3) {
                                setCcv(text.slice(0, 3));
                            } else {
                                setCcv(text);
                            }
                        }
                    }
                    placeholder="Enter CCV"
                    keyboardType="numeric"
                    secureTextEntry
                />
                <TouchableOpacity onPress={handleAddCard} className="bg-gray-300 p-4 rounded">
                    <Text className="text-black font self-center">Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'center',
    },
    titleDescription: {
        fontSize: 16,
        marginBottom: 16,
        alignSelf: 'center',
    },
    inputContainer: {
        marginTop: 16,
        padding: 16,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});