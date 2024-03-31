import { Center, VStack, Text } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import EmotionList from "../components/EmotionList"

const Question1Screen = ({ navigation }) => {
    //返回鍵之後會寫在 Stack 導覽的 Header 上
    const { colors } = useTheme(); // 該 Hooks 函數由<NavigationContainer>傳遞，得寫在函式裡
    return (
        <Center flex={1} bg={colors.bg_normal}>
            <VStack>
                <Text color={colors.character} fontSize={30}>Hi！你今天感覺如何？</Text>
                <EmotionList navigation={navigation} />
            </VStack>
        </Center>
    );
};

export default Question1Screen;