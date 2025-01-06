import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import coffeeImg from './assets/images/iced-coffee.png';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <StatusBar style="auto" /> */}
			<ImageBackground
				source={coffeeImg}
				resizeMode="cover"
				style={styles.image}
			>
				<LinearGradient colors={['rgba(0,0,0,0.4)', 'transparent']} style={styles.gradient}>
					<Text style={styles.text}>
						Open up App.js to start working on your app!
					</Text>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		flexDirection: 'column',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	gradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	text: {
		fontSize: 36,
		fontWeight: 'bold',
		color: 'white',
		// backgroundColor: 'red',
		padding: 12,
		textAlign: 'center',
	},
	image: {
		height: '100%',
		width: '100%',
		flex: 1,
		// resizeMode: 'cover',
		justifyContent: 'center',

		// alignItems: 'center'
	},
});
