import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import { DATA } from "../../data/SocialNetwork";

const { height, width } = Dimensions.get("window");

export const Masonry = () => {
	return (
		<View
			style={{
				backgroundColor: "black",
				flexWrap: "wrap",

				justifyContent: "center",
				flexDirection: "row",
			}}
		>
			<View>
				{DATA.map(
					(i, index) =>
						index % 2 === 0 && (
							<View style={{ padding: 5 }}>
								<Image
									source={{ uri: i.user.img }}
									style={{
										height:
											index === 0 ? width / 2 - 24 : (width / 2 - 24) * 1.6,
										width: width / 2 - 24,
										resizeMode: "cover",
									}}
								/>
							</View>
						)
				)}
			</View>
			<View>
				{DATA.map(
					(i, index) =>
						index % 2 !== 0 && (
							<View style={{ padding: 5 }}>
								<Image
									source={{ uri: i.user.img }}
									style={{
										height: (width / 2 - 24) * 1.6,
										width: width / 2 - 24,
									}}
								/>
							</View>
						)
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});
