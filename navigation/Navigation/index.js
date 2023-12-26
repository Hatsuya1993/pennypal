import RootNavigator from "../RootNavigator"

const { NavigationContainer } = require("@react-navigation/native")

const Navigation = () => {

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )

}

export default Navigation