import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert(`Registered successfully with email: ${email}`);
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F9F2ED]">
            <ScrollView contentContainerClassName="flex-grow justify-center px-5">
                <Text className="text-3xl font-bold text-center text-[#C67C4E] mb-8">
                    Create an Account
                </Text>

                {/* Email Input */}
                <View className="mb-4">
                    <TextInput
                        className="bg-[#E3E3E3] text-[#313131] text-base p-4 rounded-lg"
                        placeholder="Email"
                        placeholderTextColor="#9E9E9E"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Input */}
                <View className="mb-4">
                    <TextInput
                        className="bg-[#E3E3E3] text-[#313131] text-base p-4 rounded-lg"
                        placeholder="Password"
                        placeholderTextColor="#9E9E9E"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* Confirm Password Input */}
                <View className="mb-6">
                    <TextInput
                        className="bg-[#E3E3E3] text-[#313131] text-base p-4 rounded-lg"
                        placeholder="Confirm Password"
                        placeholderTextColor="#9E9E9E"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                {/* Register Button */}
                <TouchableOpacity
                    className="bg-[#C67C4E] rounded-lg py-4 shadow-lg"
                    onPress={handleRegister}
                >
                    <Text className="text-center text-[#F9F2ED] text-lg font-bold">
                        Sign Up
                    </Text>
                </TouchableOpacity>

                {/* Footer Text */}
                <Text className="mt-6 text-center text-sm text-[#9E9E9E]">
                    Already have an account?{" "}
                    <Text className="text-[#C67C4E] font-bold">Login</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
