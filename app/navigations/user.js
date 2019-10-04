import React from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

//Screens

import HomeScreen from '../screens/Home';
import TopFiveScreen from '../screens/TopFive';
import SearchScreen from '../screens/Search';
import MyAccountScreen from '../screens/MyAccount';

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
			title: 'TopFive Restaurant'
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
	Search: {
		screen: MyAccountScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Mi Cuenta'
		})
	}
});

const RootStack = createBottomTabNavigator({
	Home: {
		screen: homeScreenStack
	}
});

export default createAppContainer(RootStack);
