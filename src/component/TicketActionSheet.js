import React from "react";
import {  StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';
import {
    Box, Button, ButtonText,
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicatorWrapper,
    ActionsheetDragIndicator,
    ActionsheetItem,
    ActionsheetItemText,
    ActionsheetIcon,
    Icon,TrashIcon,CloseIcon,EditIcon,ThreeDotsIcon,CircleIcon
} from '@gluestack-ui/themed';
import { useDispatch,useSelector } from "react-redux";
import { removeCartItem } from "../redux/cartSlice";


const TicketActionSheet = ({item}) => {
    const { colors } = useTheme();
    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const handleClose = () => setShowActionsheet(!showActionsheet)
    const dispatch = useDispatch();
    

    const handleRemove = (cartItems) => {
        dispatch(removeCartItem(cartItems));
    };
    return (
    <Box>
      <Button onPress={handleClose} w={45} h={45} borderRadius={50} borderColor={item.type == "入園門票" ? colors.red : colors.deepblue} borderWidth={3} bgColor="#FFF2C5" >
      <Icon as={ThreeDotsIcon} m="$2" w="$7" h="$7" color={item.type == "入園門票" ? colors.red : colors.deepblue}/>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon>
              <Icon as={EditIcon} m="$2" w="$4" h="$4" color={colors.deepblue}/>
            </ActionsheetIcon>
            <ActionsheetItemText color={colors.deepblue} fontWeight="600">修改</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleRemove(item)}>
            <ActionsheetIcon>
              <Icon as={TrashIcon} m="$2" w="$4" h="$4" color={colors.red}/>
            </ActionsheetIcon>
            <ActionsheetItemText color={colors.red} fontWeight="600">刪除</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon>
              <Icon as={CloseIcon} m="$2" w="$4" h="$4"/>
            </ActionsheetIcon>
            <ActionsheetItemText fontWeight="600">關閉</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      </Box>
    );
};

const styles = StyleSheet.create({

})

export default TicketActionSheet;