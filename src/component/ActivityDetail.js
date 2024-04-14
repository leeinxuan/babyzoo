import React from "react";
import { Text, Image, StyleSheet, View, Pressable } from "react-native";


const ActivityDetail = ({ data }) => {

    return (

        <View style={styles.activityContent}>
            <Image
                style={styles.imageStyle}
                source={{ uri: data.image }}
            />
            <Text 
            style={{fontSize:16,fontWeight:'600',color:'#60969D',marginTop:10}}>
                {data.actname}
            </Text>
            <Text style={{fontSize:12,fontWeight:'600',color:'#B1D9DE',marginTop:2}}>
                {data.descriptions}
                </Text>
            <Pressable
            // onPress={() => navigation.navigate('Detail', book)}
            style={styles.more}
            >
                <Text style={{fontSize:12,color:'white',fontWeight:'600'}}>
                    更多
                </Text>
            </Pressable>
        </View>



    );
};

const styles = StyleSheet.create({
    activityContent: {
        flexDirection: 'column',
        backgroundColor:'white',
        marginRight:16,
        width: 180,
        height: 250,
        padding:16,
        borderRadius:20,
        shadowOffset:{width:0,height:4},
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowRadius:4,
        elevation:4

    },
    imageStyle:{
        width:150,
        height:107,
        borderRadius:20,
        marginTop:2
    },
    more:{
        alignItems:'center',
        width:51,
        height:22,
        backgroundColor:'#E59B9B',
        borderRadius:6,
        marginTop:4,
        paddingTop:1
        
    }
});

export default ActivityDetail;