import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FontSize = "normal" | "large";

type FontSizeContextType = {
    fontSize: FontSize;
    setFontSize: (size: FontSize) => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(
    undefined
);

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
    const [fontSize, setFontSize] = useState<FontSize>("normal");

    useEffect(() => {
        // Fetch stored font size preference
        AsyncStorage.getItem("fontSize").then((size) => {
            if (size === "large") setFontSize("large");
        });
    }, []);

    // Function to update font size and save preference
    const updateFontSize = async (size: FontSize) => {
        setFontSize(size);
        await AsyncStorage.setItem("fontSize", size);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize: updateFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
}

// Custom hook to use font size
export function useFontSize() {
    const context = useContext(FontSizeContext);
    if (!context) {
        throw new Error("useFontSize must be used within a FontSizeProvider");
    }
    return context;
}