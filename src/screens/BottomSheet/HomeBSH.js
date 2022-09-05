import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

import { DATA } from "../../data/BottomSheet";

const { height, width } = Dimensions.get("window");

const SPASING = 8;
const ITEM_HEIGHT = height * 0.18;

export const HomeBSH = ({ navigation, route }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				data={DATA}
				keyExtractor={(item) => item.key}
				contentContainerStyle={{ padding: SPASING }}
				renderItem={({ item }) => {
					console.log(item);
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate("DetailsBSH", { item })}
							activeOpacity={1}
							style={{ marginBottom: SPASING, height: ITEM_HEIGHT }}
						>
							<View style={{ flex: 1, padding: SPASING }}>
								<SharedElement
									id={`item.${item.key}.bg`}
									style={{ ...StyleSheet.absoluteFill }}
								>
									<View
										style={[
											styles.bg,
											{ backgroundColor: item.color, borderRadius: 16 },
										]}
									/>
								</SharedElement>
								<SharedElement
									id={`item.${item.key}.title`}
									style={{
										position: "absolute",
										top: 2 * SPASING,
										left: 2 * SPASING,
									}}
								>
									<Text style={styles.title}>{item.title}</Text>
								</SharedElement>
								<SharedElement
									id={`item.${item.key}.subTitle`}
									style={{
										position: "absolute",
										top: "50%",
										left: 2 * SPASING,
									}}
								>
									<Text style={styles.subTitle}>{item.subTitle}</Text>
								</SharedElement>
								<SharedElement id={`item.${item.key}.img`} style={styles.image}>
									<Image source={item.url} style={styles.image} />
								</SharedElement>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
			<SharedElement id={`general.bg`}>
				<View style={styles.bsh} />
			</SharedElement>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	bg: { ...StyleSheet.absoluteFill },
	image: {
		height: ITEM_HEIGHT * 0.8,
		width: ITEM_HEIGHT * 0.8,
		resizeMode: "contain",
		position: "absolute",
		bottom: 0,
		right: SPASING,
	},
	title: {
		position: "absolute",
		fontSize: 18,
		fontWeight: "700",
	},
	subTitle: {
		position: "absolute",
		fontSize: 12,
		fontWeight: "400",
		opacity: 0.7,
		width: width - ITEM_HEIGHT * 1.2,
		color: "#000",
	},

	bsh: {
		position: "absolute",
		width,
		height,
		backgroundColor: "#fff",
		transform: [{ translateY: height }],
		borderRadius: 32,
	},
});
