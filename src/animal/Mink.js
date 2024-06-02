import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Audio } from 'expo-av';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';


const Penguin = ({ }) => {
    const boxHeight = useSharedValue(200);
    const opacity = useSharedValue(0);
    const [icon, setIcon] = useState("downcircleo");
    // creating worklet via useAnimatedStyle, and incorporating the withTiming method
    const boxAnimation = useAnimatedStyle(() => {
        return {
            height: withTiming(boxHeight.value, { duration: 150 }),
        };
    });

    const textOpacityAnimation = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacity.value, { duration: 900 }),
        };
    });

    const [showWelcome, setShowWelcome] = useState(false);
    const toggleHeight = () => {
        boxHeight.value === 600 ? boxHeight.value = 200 : boxHeight.value = 600;
        setShowWelcome(prevState => !prevState);
        opacity.value = !opacity.value;
        setIcon(prevIcon => prevIcon === "downcircleo" ? "upcircleo" : "downcircleo"); // Toggle icon
    };
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../Media/penguin.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
    }

    async function pauseSound() {
        if (sound) {
            console.log('Pausing Sound');
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    const images = [
        { id: 1, source: require('../img/minkbaby.jpeg') },
        { id: 2, source: require('../img/minkbaby2.jpeg') },
        { id: 3, source: require('../img/minkbaby3.jpeg') },
        { id: 4, source: require('../img/minkbaby4.jpeg') },
        { id: 5, source: require('../img/minkbaby5.jpeg') },
    ];

    const renderItem = ({ item }) => (
        <Image source={item.source} style={styles.carouselImage} />
    );

    return (
        <View>
            <Carousel
                data={images}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={190}
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
            <View style={styles.activitySection1}>
                <View style={styles.textStyle}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', zIndex: 2 }}>Mink</Text>
                    <View style={{ width: 170, height: 16, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                </View>
                <View style={styles.app}>
                    <Animated.View style={[styles.box, boxAnimation]}>
                    <View style={styles.moreButtonContainer}>
                    <AntDesign name={icon} size={30} color="#60969D" onPress={() => toggleHeight()}/>
                    </View>
                        <View style={styles.textStyle2}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black' }}>本館位置</Text>
                            <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black' }}>軟萌雪貂館</Text>
                        </View>
                        <View style={styles.container2}>
                                    <Ionicons name="earth-sharp" size={50} color="black" />
                                    <AntDesign name="idcard" size={50} color="black" />
                                </View>
                        <View style={styles.container1}>
                                    <View style={styles.textContainer}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 21, zIndex: 2 }}>地理分佈</Text>
                                        <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }} />
                                    </View>
                                    <View style={styles.textContainer2}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 21, zIndex: 2 }}>形態特徵</Text>
                                        <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }} />
                                    </View>
                                </View>
                        {/* button that fires off toggleHeight() function every time it's pressed */}
                       
                        {showWelcome && (
                            <>
                                <Animated.View style={[styles.imgArrange1, textOpacityAnimation]}>
                                    <View style={styles.textsection3}>
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', left: -12 }}>
                                        雪貂的馴養歷史不明，但很有可能是早於2500年前就已經開始。
                                        </Text>
                                    </View>
                                    <View style={styles.line}>
                                        <View style={{ position: 'absolute', left: -175, width: 340, height: 3, backgroundColor: '#3C3C3C', borderRadius: 10, zIndex: 2 }} />
                                        <View style={{ width: 3, height: 180, backgroundColor: '#3C3C3C', borderRadius: 0, zIndex: 1, left: -5 }} />
                                    </View>
                                    <View style={styles.textsection2}>
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>1. 牠們是兩性異形體的，雄貂比雌貂大。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>2. 牠們一般呈褐色、黑色、白色或混色。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>3. 雪貂非常容易與歐洲鼬交配，因為兩者有著密切關聯。</Text>
                                    </View>
                                </Animated.View>
                                <Animated.View style={[styles.activitySection1, textOpacityAnimation]}>
                                <View style={styles.musicbox}>
                    <Image
                        source={require('../img/sloth_song.jpeg')}
                        style={styles.activitImg1} />
                    <View style={styles.textsection}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft:30}}>雪 Distance</Text>
                        <View style={styles.container}>
                            {isPlaying ? (
                                <IconButton icon="pause" onPress={pauseSound} color="#D56A6A" />
                            ) : (
                                <IconButton icon="play" onPress={playSound} color="#B1D9DE" />
                            )}
                        </View>
                    </View>
                </View>
                                </Animated.View>
                            </>
                        )}
                    </Animated.View>
                </View>
            </View>
            <View style={styles.activitySection}>
                <View style={styles.newstextsection}>
                    <Text style={styles.newstext}>我要認養</Text>
                </View>
            </View>
        </View>
                
    );
};

export default Penguin;

const styles = StyleSheet.create({
    activitySection1: {
        margin: 20,
        marginTop: 25,
    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    textStyle2: {
        alignItems: 'center',
    },
    imgArrange1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -26
    },
    textsection3: {
        marginLeft: 10,
        width: 150,
        height: 150,
        marginTop: 20,
    },
    textsection2: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    container1: {
        flexDirection: 'row', // 水平排列
        marginTop: 10,
        marginLeft: 3,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        marginTop: 20,// Adjust spacing as needed
    },
    box: {
        width: 350,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 20,
        padding: 20,
        display: 'flex'
    },
    moreButtonContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    textContainer: {
        paddingHorizontal: 10, // 文字間距
        marginLeft: 5,
    },
    textContainer2: {
        paddingHorizontal: 10, // 文字間距
        marginLeft: 75,
    },
    line: {
        position: 'relative',
        alignItems: 'flex-end',
    },
    activitySection: {
        margin: 20,
        alignItems: 'center',
    },
    activitySection1: {
        marginTop: 50,
        alignItems: 'center',
    },
    newstextsection: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2C5',
        marginTop: 20,
        width: 140,
        height: 55,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    newstext: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#B1D9DE',
        padding: 10,
        width: 70,
        height: 60,
        marginLeft: 40,
        marginTop: 15,
        borderRadius: 20,
    },
    textsection: {
        marginTop: 20,

    },
    activitImg1: {
        width: 130,
        height: 130,
        borderRadius: 35,
        marginRight: 15,
    },
    musicbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    carouselImage:{
        width:180,
        height:180,
        borderRadius: 25,
    },
})