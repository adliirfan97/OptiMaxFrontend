import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import cardNumbers from '../constants/CardNumbers';

const cardBrandImages: Record<string, any> = {
    visa: require("../assets/cardBrands/visa-classic-svgrepo-com.png"),
    mastercard: require("../assets/cardBrands/mastercard-full-svgrepo-com.png"),
    americanExpress: require("../assets/cardBrands/american-express-logo-svgrepo-com.png"),
};

export default function AddCard({ navigation }) {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [ccv, setCcv] = useState('');
    const [cardBrand, setCardBrand] = useState('');
    const [expiryError, setExpiryError] = useState('');
    const [cardNameError, setCardNameError] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');
    const [ccvError, setCcvError] = useState('');
    const router = useRouter();

    const handleAddCard = () => {
        let hasError = false;

        if (!cardName) {
            setCardNameError('Card name is required');
            hasError = true;
        } else {
            setCardNameError('');
        }

        if (!cardNumber) {
            setCardNumberError('Card number is required');
            hasError = true;
        } else {
            setCardNumberError('');
        }

        if (!expiryDate) {
            setExpiryError('Expiry date is required');
            hasError = true;
        } else {
            const error = checkExpiry(expiryDate);
            if (error) {
                setExpiryError(error);
                hasError = true;
            } else {
                setExpiryError('');
            }
        }

        if (!ccv) {
            setCcvError('CCV is required');
            hasError = true;
        } else {
            setCcvError('');
        }

        if (!hasError) {
            // Implementation of adding card logic
            // For example, you can send the card details to your backend server or update the state
            console.log({ cardName, cardNumber, expiryDate, ccv, cardBrand });
            router.push("/");
        }
    };

    const handleBack = () => {
        router.push("/");
    }

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
                {cardNameError ? <Text style={styles.errorText}>{cardNameError}</Text> : null}
                <Text style={styles.label}>Card Number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        value={cardNumber}
                        onChangeText={(text) => {
                            if (text.length > 19) {
                                setCardNumber(text.slice(0, 19));
                            } else {
                                setCardNumber(text);
                            }
                            const brand = getCardBrand(text);
                            setCardBrand(brand);
                        }}
                        placeholder="Enter card number"
                        keyboardType="numeric"
                    />
                    {cardBrand ? (
                        <Image source={cardBrandImages[cardBrand]} style={styles.cardBrandImage} />
                    ) : null}
                </View>
                {cardNumberError ? <Text style={styles.errorText}>{cardNumberError}</Text> : null}
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                    style={styles.input}
                    value={expiryDate}
                    onChangeText={(text) => {
                        if (text.length === 2 && expiryDate.length === 1) {
                            setExpiryDate(text + '/');
                        } else if (text.length === 2 && expiryDate.length === 2) {
                            setExpiryDate(text.slice(0, 1));
                        } else if (text.length > 5) {
                            setExpiryDate(text.slice(0, 5));
                        } else {
                            setExpiryDate(text);
                        }
                    }}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                />
                {expiryError ? <Text style={styles.errorText}>{expiryError}</Text> : null}
                <Text style={styles.label}>CCV</Text>
                <TextInput
                    style={styles.input}
                    value={ccv}
                    onChangeText={(text) => {
                        if (text.length > 3) {
                            setCcv(text.slice(0, 3));
                        } else {
                            setCcv(text);
                        }
                    }}
                    placeholder="Enter CCV"
                    keyboardType="numeric"
                    secureTextEntry
                />
                {ccvError ? <Text style={styles.errorText}>{ccvError}</Text> : null}
                <TouchableOpacity onPress={handleAddCard} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBack} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function checkExpiry(expiryDate: string): string {
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
    const currentMonth = new Date().getMonth() + 1; // Get current month (0-based index)

    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        return 'Card is expired';
    }
    return '';
}

function getCardBrand(cardNumber: string | number, validateLength = true): string {
    let foundCardBrand = '';
    let cardNum = cardNumber.toString().replace(/[-.\s]/g, '');

    if (/^[0-9]+$/.test(cardNum.charAt(0))) {
        cardNum = cardNum.replace(/[^0-9]/g, '0');
        cardNum = cardNum.padEnd(6, '0');

        const firstSixDigits = parseInt(cardNum.substring(0, 6), 10);
        const cardNumberLength = cardNum.length;

        for (const [brand, rows] of Object.entries(cardNumbers)) {
            for (const [prefix, lengths] of Object.entries(rows)) {
                let prefixMin = 0, prefixMax = 0;
                if (prefix.includes('-')) {
                    const [min, max] = prefix.split('-').map(p => parseInt(p.padEnd(6, '9'), 10));
                    prefixMin = parseInt(min.toString().padEnd(6, '0'), 10);
                    prefixMax = parseInt(max.toString().padEnd(6, '9'), 10);
                } else {
                    prefixMin = parseInt(prefix.padEnd(6, '0'), 10);
                    prefixMax = parseInt(prefix.padEnd(6, '9'), 10);
                }

                const isValidPrefix = firstSixDigits >= prefixMin && firstSixDigits <= prefixMax;

                if (isValidPrefix && !validateLength) {
                    return brand;
                }

                if (isValidPrefix && validateLength) {
                    for (const length of lengths) {
                        let isValidLength = false;
                        if (length.includes('-')) {
                            const [minLength, maxLength] = length.split('-').map(Number);
                            isValidLength = cardNumberLength >= minLength && cardNumberLength <= maxLength;
                        } else {
                            isValidLength = cardNumberLength === parseInt(length, 10);
                        }
                        if (isValidLength) {
                            return brand;
                        }
                    }
                }
            }
        }
    }
    return foundCardBrand;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
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
        marginTop: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 4,
        paddingHorizontal: 8,
    },
    cardBrandImage: {
        width: 50,
        height: 30,
        marginBottom: 8,
    },
    errorText: {
        color: 'red',
    },
    addButton: {
        marginTop: 24,
        backgroundColor: '#ddd',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    addButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});