import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import PieChart from "react-native-pie-chart";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from "react-native-paper";

const Home = () => {

    const widthAndHeight = 250
    const sliceColor = ['pink', 'white']

    const [money, setMoney] = React.useState(1000)
    const [cash, setCash] = React.useState("")

    const handleChangeSavings = () => {
        setMoney((money) => money + parseInt(cash))
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
            series={[money/100,180]}
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
                <View>
                    <Text>January</Text>
                    <ProgressBar style={{height: 15, borderRadius: 20}} progress={0.3} color={'green'}/>
                </View>
                <View>
                    <Text>February</Text>
                    <ProgressBar style={{height: 15, borderRadius: 20}} progress={0.6} color={'green'}/>
                </View>
                <View>
                    <Text>March</Text>
                    <ProgressBar style={{height: 15, borderRadius: 20}} progress={0.1} color={'green'}/>
                </View>
            </View>
            <View style={style.bottomSecondContainer}>
                <View>
                    <Text style={style.statement}>Statement</Text>
                </View>
                <View style={style.months}>
                    <Text style={style.month}>January</Text>
                    <View style={style.eachMonth}>
                        <Text>1 January</Text>
                        <Text>+ $20</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>15 January</Text>
                        <Text>+ $100</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>25 January</Text>
                        <Text>+ $50</Text>
                    </View>
                </View>
                <View style={style.months}>
                    <Text style={style.month}>February</Text>
                    <View style={style.eachMonth}>
                        <Text>1 February</Text>
                        <Text>+ $60</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>15 February</Text>
                        <Text>+ $200</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>25 February</Text>
                        <Text>+ $20</Text>
                    </View>
                </View>
                <View style={style.months}>
                    <Text style={style.month}>March</Text>
                    <View style={style.eachMonth}>
                        <Text>1 March</Text>
                        <Text>+ $10</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>15 March</Text>
                        <Text>+ $10</Text>
                    </View>
                    <View style={style.eachMonth}>
                        <Text>25 March</Text>
                        <Text>+ $20</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Home

const style = StyleSheet.create({
    month: {
        fontWeight: 'bold'
    },
    eachMonth: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    months: {
        paddingTop: 10
    },
    statement: {
        fontWeight: 'bold'
    },
    bottomSecondContainer: {
        paddingTop: 30
    },
    input: {
        width: Dimensions.get('screen').width/2,
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        borderRadius: 10
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
        paddingTop: 50,
        height: Dimensions.get('screen').height/4,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    savings: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 10,
        backgroundColor: '#fbe4fb',
        marginTop: 50
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})