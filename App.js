import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import User from './app/navigations/user';

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
