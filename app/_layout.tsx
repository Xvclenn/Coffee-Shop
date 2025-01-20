import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Sora-Bold": require("../assets/fonts/Sora-Bold.ttf"),
        "Sora-ExtraBold": require("../assets/fonts/Sora-ExtraBold.ttf"),
        "Sora-ExtraLight": require("../assets/fonts/Sora-ExtraLight.ttf"),
        "Sora-Light": require("../assets/fonts/Sora-Light.ttf"),
        "Sora-Medium": require("../assets/fonts/Sora-Medium.ttf"),
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
        "Sora-Thin": require("../assets/fonts/Sora-Thin.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack screenOptions={{ headerShown: false }} />;
}
