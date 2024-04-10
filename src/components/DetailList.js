/*情緒細節清單的單個元件*/
import { Text, Box } from "@gluestack-ui/themed";
import { useTheme, useNavigation } from '@react-navigation/native';
import { Pressable } from "react-native";

const EmotionList = ({ detail }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    // 會影響排版的變數
    const textColor = detail === "自定義" ? "#898989" : colors.character;

    return (
        <Pressable onPress={ () => {navigation.navigate("Diary", detail)} }>
            <Text 
                color={textColor} 
                fontSize={24} 
                px={52} pt={18} pb={22} mx={8}
                bg={colors.bg_normal} 
                borderRadius={30}>{detail}</Text>
        </Pressable>
    );
};

export default EmotionList;