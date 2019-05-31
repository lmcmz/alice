/**
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, NativeModules} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
	state = {
		ethers: ''
	}
	async componentDidMount() {
	}

	send = () => {
		NativeModules.NativeModuleCallSwift.helloSwift("0xA1b02d8c67b0FDCF4E379855868DeB470E169cfB", "0xE115012aA32a46F53b09e0A71CD0afa0658Da55F", "10000000000");
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.welcome}>{this.state.ethers}</Text>
					<TouchableOpacity style={{backgroundColor: '#000', borderRadius: 10, height: 35, padding: 5, alignItems: 'center', justifyContent: 'center'}} onPress={this.send}><Text style={{color: 'white', fontSize: 25}}>Send</Text></TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});