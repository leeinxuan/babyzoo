import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Center,
  Button,
  ButtonText,
  Heading,
  Icon,
  CheckCircleIcon,
  ButtonGroup
} from '@gluestack-ui/themed';
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";

const BuyButton = ({ bgc,type ,tickettype,num,total}) => {
  const dispatch = useDispatch();
  const [showAlertDialog, setShowAlertDialog] = React.useState(false)

  const addToCart = () => {
    dispatch(addCartItem({ id: Date.now(), type,quantity: num,tickettype,total }))
    setShowAlertDialog(true);
  };

  return (
    <Center mb={10} zIndex={1}>
      <Button onPress={addToCart}
        width={138} height={50} borderRadius={20} backgroundColor={bgc}
      >
        <ButtonText fontSize={20}>訂購</ButtonText>
      </Button>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false)
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent borderRadius={20}>
          <AlertDialogHeader>
            <Heading size="lg" color={bgc}><Icon as={CheckCircleIcon} color={bgc} />完成訂購</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              訂購成功!!{'\n'}
              請至"我的門票"中查看
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                bg={bgc}
                borderRadius={12}
                action="negative"
                onPress={() => {
                  setShowAlertDialog(false)
                }}
              >
                <ButtonText>確定</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
};

const styles = StyleSheet.create({

})

export default BuyButton;