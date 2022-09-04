import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesing from "@expo/vector-icons/AntDesign";

export const BackIcon = ({ onPress }) => {
	return (
		<AntDesing
			name="arrowleft"
			size={24}
			style={{ padding: 12 }}
			color="#444"
			onPress={onPress}
		/>
	);
};

const styles = StyleSheet.create({});
