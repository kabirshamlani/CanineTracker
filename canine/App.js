// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight, Alert, Platform } from 'react-native';
import { useImageDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login from './app/screens/Login';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './app/screens/Register';

const Stack = createNativeStackNavigator();
export default function App() {
  // const handlepress = () => { console.log("handle Press in funct") }
  // const view = useDeviceOrientation();
  // console.log(useDeviceOrientation());
  // console.log(view);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register'}}
        />
      </Stack.Navigator>
      {/* <WelcomeScreen /> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });


{/* <Text numberOfLines={1} onPress={handlepress}>Hi Guies hello </Text>
      <TouchableHighlight onPress={() => { Alert.alert("My tittle", "My message", [{ text: "Yes", onPress: () => console.log("Yes") }, { text: "No", onPress: () => console.log("No") }]) }}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            "width": 100,
            "height": 200,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableHighlight>
      <StatusBar style="auto" /> */}

//   <View
//   style={{
//     "backgroundColor": "#fff",
//     "flex": 1
//     // "width": "100%",
//     // height: view === "landscape" ? "100%" : "30%",
//   }}>

// </View>


////////////////////////

{/* <View
        style={{
          "backgroundColor": "#fff",
          "flex": 1,
          "flexDirection": "row",
          "justifyContent": "center",
          "alignItems": "center",
          "alignContent": "center", // only works with wrapping
          // "flexWrap": "wrap" 
        }}>
        <View
          style={{
            "backgroundColor": "dodgerblue",
            // "flexBasis": 500,
            // "flexGrow": 1,
            // "flexShrink": 1,
            "height": "15%",
            "width": "20%",
            // "alignSelf": "flex-end"
          }}>
        </View>
        <View
          style={{
            "backgroundColor": "tomato",
            // "flex": 1
            "height": "15%",
            "width": "20%",
            "top": 20,
          }}>
        </View>

        <View
          style={{
            "backgroundColor": "gold",
            // "flex": 1
            "height": "15%",
            "width": "20%"
          }}>
        </View>
      </View> */}