import { Genres } from "@/components/genres";
import { Header } from "@/components/header";
import { Text, View } from "react-native";

export function Profile() {
    return (
        <View className="w-full flex-1 bg-primary-400 ">
            <Header />
            <Text className="m-4 font-bold text-2xl">Discovery</Text>
            <Genres />
        </View>
    )
}