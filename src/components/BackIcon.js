import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesing from "@expo/vector-icons/AntDesign";

export const BackIcon = ({ onPress }) => {
	return (
		<AntDesing
			name="arrowleft"
			size={24}
			style={{
				paddingHorizontal: 8,
				zIndex: 9,
			}}
			color="white"
			onPress={onPress}
		/>
	);
};

const styles = StyleSheet.create({});
