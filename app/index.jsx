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
      <Text>hello?????
      </Text>

    <Text
    style={{
      innerWidth: "center",
      color: "yellow",
    }}
    >nice to meet you </Text>
    
    <Link rel="stylesheet" href={"/welcome"}>welcome</Link>
    </View>
  );
}
