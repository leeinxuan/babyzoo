import React from "react";
import { Text} from "react-native";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
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

const BuyNotification = ({ isOpen, onClose,bgc}) => {


  return (
    <Center mb={10} zIndex={1}>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
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
                onPress={onClose}
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

export default BuyNotification;