/*暫時用*/
import { Center, Text } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

const DiaryScreen = ({ route }) => {
    const { colors } = useTheme(); 

    const detail = route.params;

    return (
        <Center flex={1}>
            <Text>撰寫日記的頁面</Text>
        </Center>
    );
};

export default DiaryScreen;