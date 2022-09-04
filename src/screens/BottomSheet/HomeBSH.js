import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

export const HomeBSH = ({ navigation, route }) => {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<SharedElement id={`item.photo`}>
				<Text
					onPress={() => {
						navigation.navigate("DetailsBSH", { item: { id: 3 } });
					}}
				>
					HomeBSH
				</Text>
			</SharedElement>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});
