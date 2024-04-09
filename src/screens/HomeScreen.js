/*假首頁，以後會再整合*/
import { Center, Text } from "@gluestack-ui/themed";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <Center flex={1}>
            <Text mb={8}>這裡是首頁</Text>
            <Button 
                title="前往Q1"
                color="#0080FF"
                onPress = { () => navigation.navigate("Q1") }
            />
        </Center>
    );
};

export default HomeScreen;