import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Bottom" 
            options={{
                headerShown: false
            }}
            component={BottomTabNavigator}/> 
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
             name="Home"
             component={Home}
             options={{
                headerShown:false
             }}   
            />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="Money">
            <BottomTab.Screen 
            name="Main"
            component={""}
            options={{
                title: "Main",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => <FontAwesome name="exclamation-triangle" size={20} color="black" />
            }}    
            />
            <BottomTab.Screen 
            name="Analytics"
            component={""}
            options={{
                title: "Analytics",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => <Ionicons name="ios-analytics" size={26} color="black" />
            }}    
            />
            <BottomTab.Screen 
            name="Money"
            component={MainNavigator}
            options={{
                title: "Money",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => <MaterialIcons name="attach-money" size={40} color="black" />
            }}    
            />
            <BottomTab.Screen 
            name="Profile"
            component={""}
            options={{
                title: "Profile",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
            }}    
            />
            <BottomTab.Screen 
            name="Settings"
            component={""}
            options={{
                title: "Settings",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => <Ionicons name="ios-settings-outline" size={24} color="black" />
            }}    
            />
        </BottomTab.Navigator>
    )
}

export default RootNavigator