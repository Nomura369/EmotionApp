/*統整表情的元件*/
import { Image, VStack, Text, HStack, Center } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { Pressable } from "react-native";

import EmotionDetail from "../json/emotion_detail.json";


const EmotionList = ({ navigation }) => {
    const { colors } = useTheme(); // 該 Hooks 函數由 mavigation 傳遞，得寫在函式裡
    let emotions = EmotionDetail.data;

    return (
        <Center>
            <HStack mt={56}>
                <VStack alignItems="center" mr={40}>
                    <Text color={colors.character} fontSize={20} mb={8}>喜悅</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[0].title)} }> 
                        <Image
                            width={110}
                            height={116}
                            source={{ uri: emotions[0].img_s }} 
                            alt="happy"
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text color={colors.character} fontSize={20} mb={10}>憤怒</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[1].title)} }>
                        <Image
                            width={92}
                            height={105}
                            source={{ uri: emotions[1].img_s }} 
                            alt="angry"
                        />
                    </Pressable>
                </VStack>
            </HStack>

            <HStack mt={23}>
                <VStack alignItems="center" mr={35}>
                    <Text color={colors.character} fontSize={20} mb={8}>哀傷</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[2].title)} }>
                        <Image
                            width={110}
                            height={100}
                            source={{ uri: emotions[2].img_s }} 
                            alt="sad"
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text color={colors.character} fontSize={20} mb={8}>恐懼</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[3].title)} }>
                        <Image
                            width={112}
                            height={100}
                            source={{ uri: emotions[3].img_s }} 
                            alt="fear"
                        />
                    </Pressable>
                </VStack>
            </HStack>
        </Center>
    );
};

export default EmotionList;