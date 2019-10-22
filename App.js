import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import User from './app/navigations/user';
import firebaseConfig from './app/utils/FireBase';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<User />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
