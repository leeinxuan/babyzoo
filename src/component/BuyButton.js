import React from "react";
import {
  Center,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import BuyActionSheet from "./BuyActionSheet";


const BuyButton = ({ bgc,type ,tickettype,num,total}) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false)


  return (
    <Center mb={10} zIndex={1}>
      <Button onPress={() => setShowActionsheet(true)}
        width={138} height={50} borderRadius={20} backgroundColor={bgc}
      >
        <ButtonText fontSize={20}>訂購</ButtonText>
      </Button>
      <BuyActionSheet
        payOpen={showActionsheet}
        payClose={() => setShowActionsheet(false)}
        bgc={bgc}
        type={type}
        tickettype={tickettype}
        num={num}
        total={total}
      />
    </Center>
  );
};



export default BuyButton;