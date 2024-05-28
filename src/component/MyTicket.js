import React from 'react';
import { FlatList} from "react-native";
import {Text} from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";


import TicketDetail from './TicketDetail';


export default function MyTicket() {
   const cartItems = useSelector(selectCartItems);

   return (
      cartItems.length === 0 ? (
         <Text style={{ fontSize: 24, color: '#D56A6A' }}>您尚未購票</Text>
      ) : (<FlatList
         showsVerticalScrollIndicator={false}
         data={cartItems}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (
            <TicketDetail item={item}/>
         )}
      />)


   );
}
