import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export const Start = ({ navigation }) => {
	return (
		<SafeAreaView>
			<TouchableOpacity
				onPress={() => navigation.navigate("BottomSheetStack")}
				style={styles.buttonContainer}
			>
				<Text>Bottom Sheet Animated Layout</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("SocialNetworkStack")}
				style={styles.buttonContainer}
			>
				<Text>SocialNetworkAnimated Layout</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	buttonContainer: { padding: 8, backgroundColor: "orange", marginBottom: 8 },
});
