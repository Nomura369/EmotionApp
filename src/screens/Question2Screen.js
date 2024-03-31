/*暫時用*/
import { Center, Text, Image } from "@gluestack-ui/themed";

import emotionDetail from "../json/emotion_detail.json"

const Question2Screen = ({ route }) => { //以後會有 navigation 函式
    const { emotion } = route.params;
    const data = emotionDetail.data
    return (
        <Center flex={1}>
            <Text>HI</Text>
            
        </Center>
    );
};

export default Question2Screen;