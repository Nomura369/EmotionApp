/*統整表情的元件*/
import { Image, VStack, Text, HStack, Center } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { Pressable } from "react-native";


const EmotionList = ({ navigation }) => {
    const { colors } = useTheme(); // 該 Hooks 函數由 mavigation 傳遞，得寫在函式裡
    const emotions = ["happy", "angry", "sad", "fear"];

    return (
        <Center>
            <HStack mt={56}>
                <VStack alignItems="center" mr={40}>
                    <Text color={colors.character} fontSize={20} mb={8}>喜悅</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2Stack", emotions[0])} }> 
                        <Image
                            width={110}
                            height={116}
                            source={require("../images/happy.png")} 
                            alt="happy"
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text color={colors.character} fontSize={20} mb={10}>憤怒</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2Stack", emotions[1])} }>
                        <Image
                            width={92}
                            height={105}
                            source={require("../images/angry.png")} 
                            alt="angry"
                        />
                    </Pressable>
                </VStack>
            </HStack>

            <HStack mt={23}>
                <VStack alignItems="center" mr={35}>
                    <Text color={colors.character} fontSize={20} mb={8}>哀傷</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2Stack", emotions[2])} }>
                        <Image
                            width={110}
                            height={100}
                            source={require("../images/sad.png")} 
                            alt="sad"
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text color={colors.character} fontSize={20} mb={8}>恐懼</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2Stack", emotions[3])} }>
                        <Image
                            width={112}
                            height={100}
                            source={require("../images/fear.png")} 
                            alt="fear"
                        />
                    </Pressable>
                </VStack>
            </HStack>
        </Center>
    );
};

export default EmotionList;