const cardNumbers: Record<string, Record<string, string[]>> = {
    americanExpress: {
        '34': ['15'],
        '37': ['15'],
    },
    mastercard: {
        '2221-2720': ['16'],
        '51-55': ['16'],
    },
    visa: {
        '4': ['13-19'],
    },
};

export default cardNumbers;