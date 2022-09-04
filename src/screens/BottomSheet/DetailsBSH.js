import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

import { BackIcon } from "../../components/BackIcon";
export const DetailsBSH = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<BackIcon onPress={() => navigation.goBack()} />
			<SharedElement id={`item.photo`}>
				<Text>DetailsBSH</Text>
			</SharedElement>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});
