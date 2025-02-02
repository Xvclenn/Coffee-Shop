import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Link } from "expo-router";

const SignIn = () => {
    const handleLogin = () => {
        alert("You clicked button");
    };

    return (
        <SafeAreaView className="h-full">
            <ScrollView contentContainerClassName="h-full">
                <View className="px-10 flex flex-col justify-between">
                    <Image
                        source={images.coffee_splash_screen as any}
                        className="w-full h-4/6"
                        resizeMode="contain"
                    />
                    <Text className="text-4xl font-sora-bold text-primary text-center ">
                        Fall in Love with {"\n"}
                        <Text className="text-secondary">Coffee</Text> in
                        Blissful Delight!
                    </Text>
                    <Text className="text-center font-sora-light mt-3 text-primary">
                        Login to{" "}
                        <Text className="text-secondary">Coffee shop</Text> App
                        with your email
                    </Text>
                    <Link
                        className="bg-secondary rounded-full w-full shadow-md shadow-zinc-300 text-center text-fourth font-sora-bold text-xl py-4"
                        href={"/register"}
                    >
                        Get Started
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
