/*暫時用*/
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import ActionButton from "../components/ActionButton";

const DiaryScreen = ({ route }) => {
    const { colors } = useTheme(); 

    const choice = route.params; // 物件，裡面有 name 和 detail 

    // 文字顏色設定
    const textColor = choice.detail === "自定義" ? colors.character_sec : colors.character;
    
    // 背景色設定
    let bgColor;
    switch(choice.name){
        case "happy":
            bgColor = colors.bg_happy_light;
            break;
        case "angry":
            bgColor = colors.bg_angry_light;
            break;
        case "sad":
            bgColor = colors.bg_sad_light;
            break;
        case "fear":
            bgColor = colors.bg_fear_light;
            break;
        default:
            console.log("無法設定背景色");
    }

    // 日期設定
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let week;
    switch(d.getDay()){
        case 0:
            week = "一";
            break;
        case 1:
            week = "二";
            break;
        case 2:
            week = "三";
            break;
        case 3:
            week = "四";
            break;
        case 4:
            week = "五";
            break;
        case 5:
            week = "六";
            break;
        case 6:
            week = "日";
            break;
        default:
            console.log("今天星期幾？");
    }
    const date = year + "年" + month + "月" + day + "日 星期" + week; //今日日期


    return (
        <Center flex={1} bg={bgColor}>
            <VStack>
                <Text color={colors.character} fontSize={18}>{date}</Text>
                <ActionButton choice={choice} />

            </VStack>
        </Center>
    );
};

export default DiaryScreen;