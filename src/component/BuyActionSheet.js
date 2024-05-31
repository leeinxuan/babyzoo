import React from "react";
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
  InputSlot, InputIcon, LeadingIcon, InputField
} from '@gluestack-ui/themed';
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import BuyNotification from "./BuyNotification";


const BuyActionSheet = ({ payOpen, payClose, bgc, type, tickettype, num, total }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [showAlertDialog, setShowAlertDialog] = React.useState(false)

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
        snapPoints={[50]}
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
                  <Text fontWeight="$bold">Mastercard</Text>
                  <Text>Card ending in 2345</Text>
                </VStack>
              </HStack>
              <FormControl mt={36}>
                <FormControlLabel>
                  <FormControlLabelText>
                    Confirm security code
                  </FormControlLabelText>
                </FormControlLabel>
                <Input w="$full">
                  <InputSlot>
                    <InputIcon as={LeadingIcon} ml="$2" />
                  </InputSlot>
                  <InputField placeholder="CVC/CVV" />
                </Input>
                <Button onPress={addToCart} mt={20} borderRadius={15} bgColor={colors.deepblue} h={50}
                >
                  <ButtonText fontSize={22}>Pay ${total}</ButtonText>
                </Button>
              </FormControl>
            </VStack>
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
      <BuyNotification
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
        bgc={bgc}
      />
    </>
  );
};

export default BuyActionSheet;