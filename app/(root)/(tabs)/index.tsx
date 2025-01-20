import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="bg-orange-300 border-2 border-dashed text-blue-50">
                Edit app/index.tsx to edit this screen.
            </Text>
            <Link href={"/sign-in"}>SignIn</Link>
            <Link href={"/properties/123"}>Properties</Link>
        </View>
    );
}
