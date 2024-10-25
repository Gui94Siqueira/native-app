import { Image, View } from "react-native";

export function Header() {
    return (
        <View className="m-4 justify-between flex-row">
            <Image
                source={require("@/assets/Menu.png")}
                className="w-4 h-4"
            />

            <Image
                source={require("@/assets/Notification.png")}
                className="w-4 h-4"
            />
        </View>
    )
}