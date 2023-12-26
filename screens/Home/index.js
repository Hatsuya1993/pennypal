import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import PieChart from "react-native-pie-chart";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const Home = () => {

    const widthAndHeight = 250
    const series = [120,180]
    const sliceColor = ['pink', 'white']

    const [money, setMoney] = React.useState(1000)
    const [cash, setCash] = React.useState("")

    const handleChangeSavings = () => {
        setMoney((money) => money + parseInt(cash))
    }

    return (
        <SafeAreaView>
        <View style={style.container}>
            <View style={style.topContainer}>
                <View>
                    <Text style={style.savings}>Savings</Text>
                </View>
                <View>
                <EvilIcons name="refresh" size={35} color="black" />
                </View>
            </View>
            <View style={style.middleContainer}>
            <Text style={style.money}>${money}</Text>
            <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.7}
            coverFill={'white'}
          />
            </View>
            <View style={style.middleSecondContainer}>
                <TextInput value={cash} onChangeText={setCash} style={style.input} placeholder="Input cash"/>
                <Pressable onPress={() => handleChangeSavings()}><AntDesign name="plus" size={24} color="black" /></Pressable>
            </View>
            <View style={style.bottomContainer}>

            </View>
        </View>
        </SafeAreaView>
    )
}

export default Home

const style = StyleSheet.create({
    input: {
        width: Dimensions.get('screen').width/2,
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10
    },
    middleSecondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    money: {color: 'pink', fontSize: 40, fontWeight: 'bold', position: 'absolute', zIndex: 1},
    middleContainer: {
        justifyContent: 'center',
        alignItems: "center",
        height: Dimensions.get('screen').height/2.5
    },
    bottomContainer: {
        backgroundColor: 'black',
    },
    savings: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 10
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})