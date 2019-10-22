import React from 'react';
import { Icon } from 'react-native-elements';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

//Screens

import HomeScreen from '../screens/Home';
import TopFiveScreen from '../screens/TopFive';
import SearchScreen from '../screens/Search';
//Screens MyAccount
import MyAccountScreen from '../screens/MyAccount/MyAccount';
import RegisterScreen from '../screens/MyAccount/Register';
import LoginScreen from '../screens/MyAccount/Login';

const homeScreenStack = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Home'
		})
	}
});

const topFiveScreenStack = createStackNavigator({
	TopFive: {
		screen: TopFiveScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Top 5 Restaurant'
		})
	}
});

const searchScreenStack = createStackNavigator({
	Search: {
		screen: SearchScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Buscar'
		})
	}
});

const myAccountScreenStack = createStackNavigator({
	MyAccount: {
		screen: MyAccountScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Mi Cuenta'
		})
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Registro'
		})
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Login'
		})
	}
});

const RootStack = createBottomTabNavigator(
	{
		Home: {
			screen: homeScreenStack,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="home" type="material-community" size={40} color={tintColor} />
				)
			})
		},
		TopFive: {
			screen: topFiveScreenStack,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Top 5',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="star-outline" type="material-community" size={40} color={tintColor} />
				)
			})
		},
		Search: {
			screen: searchScreenStack,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Buscar',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="magnify" type="material-community" size={35} color={tintColor} />
				)
			})
		},
		MyAccount: {
			screen: myAccountScreenStack,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Mi Cuenta',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="account" type="material-community" size={35} color={tintColor} />
				)
			})
		}
	},
	{
		initialRouteName: 'MyAccount',
		tabBarOptions: {
			inactiveTintColor: '#646464',
			activeTintColor: '#00a680'
		}
	}
);

export default createAppContainer(RootStack);
