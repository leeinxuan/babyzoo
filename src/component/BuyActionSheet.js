import React from "react";
import { useEffect } from "react";
import { Keyboard } from "react-native";
import { useTheme } from '@react-navigation/native';
import {
  Box, Button, ButtonText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  KeyboardAvoidingView,
  VStack, HStack, Image, Text, FormControl, FormControlLabel, FormControlLabelText, Input,
  InputSlot, InputField
} from '@gluestack-ui/themed';
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import BuyNotification from "./BuyNotification";


const BuyActionSheet = ({ payOpen, payClose, bgc, type, tickettype, num, total }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [snapPoints, setSnapPoints] = React.useState([50]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setSnapPoints([75]);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setSnapPoints([50]);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);


  const addToCart = () => {
    dispatch(addCartItem({ id: Date.now(), type, quantity: num, tickettype, total }))
    setShowAlertDialog(true);
    payClose();
  };

  return (
    <>
      <Actionsheet
        isOpen={payOpen}
        onClose={payClose}
        snapPoints={snapPoints}
      >
        <KeyboardAvoidingView
          behavior="position"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: "relative",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="75%">
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <VStack w="$full" p={20}>
              <HStack justifyContent="center" alignItems="center" space="md">
                <Box
                  w={50}
                  h="$full"
                  px="$2"
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="$borderLight300"
                  rounded="$sm"
                >
                  <Image
                    source={{ uri: "https://i.imgur.com/UwTLr26.png" }}
                    flex={1}
                    resizeMode="contain"
                    alt="信用卡"
                  />
                </Box>
                <VStack flex={1}>
                  <Text fontWeight="$bold" fontSize={25}>Mastercard</Text>
                </VStack>
              </HStack>
              <FormControl mt={36}>
                <Box mb={10}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      信用卡卡號
                    </FormControlLabelText>
                  </FormControlLabel>
                  <HStack>
                    <Input w={72} >
                      <InputSlot>
                      </InputSlot>
                      <InputField placeholder="XXXX"/>
                    </Input>
                    <Box justifyContent="center" ml={5} mr={5}><Text>-</Text></Box>
                    <Input w={72}>
                      <InputSlot>
                      </InputSlot>
                      <InputField placeholder="XXXX"/>
                    </Input>
                    <Box justifyContent="center" ml={5} mr={5}><Text>-</Text></Box>
                    <Input w={72}>
                      <InputSlot>
                      </InputSlot>
                      <InputField placeholder="XXXX"/>
                    </Input>
                    <Box justifyContent="center" ml={5} mr={5}><Text>-</Text></Box>
                    <Input w={72}>
                      <InputSlot>
                      </InputSlot>
                      <InputField placeholder="XXXX"/>
                    </Input>
                  </HStack>
                </Box>
                <Box>
                  <FormControlLabel>
                    <FormControlLabelText>
                      確認安全碼
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input w="$full">
                    <InputSlot>
                    </InputSlot>
                    <InputField placeholder="CVC/CVV" />
                  </Input>
                  <Button onPress={addToCart} mt={20} borderRadius={15} bgColor={colors.deepblue} h={50}
                  >
                    <ButtonText fontSize={22}>付款 ${total}</ButtonText>
                  </Button>
                  </Box>
              </FormControl>
          </VStack>
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet >
      <BuyNotification
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
        bgc={bgc}
      />
    </>
  );
};

export default BuyActionSheet;