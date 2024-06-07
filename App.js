import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from '@react-native-community/blur';

import { Ionicons } from '@expo/vector-icons';

import Login from './screens/Login';
// import Account from './screens/Account';
import { colors } from './constants/colors';

import { store } from './store/store';
import Signup from './screens/Signup';
import Search from './screens/Search';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import ShowDetails from './screens/ShowDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Account() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary500 },
        headerTintColor: colors.primary50,
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ title: 'Log In' }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ title: 'Sign Up' }}
      />
    </Stack.Navigator>
  );
}

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary500 },
        headerTitleAlign: 'center',
        headerTintColor: colors.primary50,
        tabBarStyle: {
          backgroundColor: colors.primary600,
          position: 'absolute',
          bottom: 12,
          left: 12,
          right: 12,
          borderRadius: 10,
          overflow: 'hidden',
        },
        tabBarActiveBackgroundColor: colors.primary300,
        tabBarActiveTintColor: colors.primary100,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name='home-outline'
              color={color}
              size={focused ? 35 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name='search'
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name='search' color={color} size={focused ? 35 : 30} />
          ),
        }}
      />
      <Tab.Screen
        name='fav'
        component={Favorites}
        options={{
          title: 'Favorite Movies',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name='star-outline'
              color={color}
              size={focused ? 35 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name='account'
        component={Account}
        options={{
          title: 'Your Account',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name='person-circle'
              color={color}
              size={focused ? 35 : 30}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={TabBar} />
          <Stack.Screen
            name='details'
            component={ShowDetails}
            options={{
              
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
  },
});
