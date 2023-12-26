import { Dimensions, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import PieChart from "react-native-pie-chart";

const Home = () => {

    const widthAndHeight = 250
    const series = [120,180]
    const sliceColor = ['pink', 'white']

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
            <Text style={{color: 'pink', fontSize: 40, fontWeight: 'bold', position: 'absolute', zIndex: 1}}>$1000</Text>
            <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.7}
            coverFill={'white'}
          />
            </View>
            <View style={style.bottomContainer}>

            </View>
        </View>
        </SafeAreaView>
    )
}

export default Home

const style = StyleSheet.create({
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