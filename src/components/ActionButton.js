import React from "react";
import {
  Box,
  Pressable,
  Text,
  Image,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetContent,
} from "@gluestack-ui/themed";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import StickerBox from "./StickerBox";
import emotionData from "../json/emotions.json"

export default ({ choice }) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const emotions = emotionData.data;
  let imgSrc;

  switch(choice.name){
      case "happy":
          imgSrc = emotions[0].img_detail
          break;
      case "angry":
          imgSrc = emotions[1].img_detail
          break;
      case "sad":
          imgSrc = emotions[2].img_detail
          break;
      case "fear":
          imgSrc = emotions[3].img_detail
          break;
      default:
          console.log("找不到對應的細節圖");
  }
  return (
    <Box>
      <Pressable onPress={handleClose}>
        <StickerBox choice={choice} emotions={emotions} />
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[0] }} />
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[1] }} />
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[2] }} />
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[3] }} />
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[4] }} />
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <Image alt="testing" source={{ uri: imgSrc[5] }} />
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};