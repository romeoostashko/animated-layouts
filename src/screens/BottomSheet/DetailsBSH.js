import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
} from "react-native";
import Animated, {
	withTiming,
	interpolate,
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withDelay,
	BounceIn,
	FadeInUp,
	FadeInDown,
} from "react-native-reanimated";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import AntDesing from "@expo/vector-icons/AntDesign";

import { BackIcon } from "../../components/BackIcon";
import { icons } from "../../data/BottomSheet";
const { height, width } = Dimensions.get("window");
const SPASING = 8;
const ITEM_HEIGHT = height * 0.18;

const TOP_HEADER_HEIGHT = height * 0.3;

const enteringAnimated = (index) => {
	return () => {
		"worklet";
		const animations = {
			// your animations
			opacity: withTiming(1, { duration: 2000 }),
			transform: [
				{ translateY: withDelay(600, withSpring(0)) },
				//{ scale: withTiming(1, { duration: 3500 }) },
			],
		};
		const initialValues = {
			// initial values for animations
			opacity: 0,
			transform: [{ translateY: 50 }],
		};
		return {
			initialValues,
			animations,
		};
	};
};
export const DetailsBSH = ({ navigation, route }) => {
	const { item } = route.params;
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<SharedElement
				id={`item.${item.key}.bg`}
				style={{ ...StyleSheet.absoluteFill }}
			>
				<View
					style={[
						{
							...StyleSheet.absoluteFill,
							backgroundColor: item.color,
							height: TOP_HEADER_HEIGHT + 32,
						},
					]}
				/>
			</SharedElement>

			<BackIcon onPress={() => navigation.goBack()} style={{}} />
			<SharedElement
				id={`item.${item.key}.img`}
				style={{
					...StyleSheet.absoluteFill,
				}}
			>
				<Image source={item.url} style={styles.image} />
			</SharedElement>
			<SharedElement
				id={`item.${item.key}.title`}
				style={{
					position: "absolute",
					top: TOP_HEADER_HEIGHT - SPASING * 6,
					left: SPASING * 2,
				}}
			>
				<Text style={styles.title}>{item.title}</Text>
			</SharedElement>
			<SharedElement
				id={`item.${item.key}.subTitle`}
				style={{
					position: "absolute",
					top: TOP_HEADER_HEIGHT / 2,
				}}
			>
				<Text style={styles.subTitle}>{item.subTitle}</Text>
			</SharedElement>

			<SharedElement
				id={`general.bg`}
				style={{
					position: "absolute",
					width,
					height,
					backgroundColor: "white",
					transform: [{ translateY: TOP_HEADER_HEIGHT }],
					borderRadius: 32,
				}}
			>
				<View style={styles.bsh}>
					<ScrollView>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-evenly",
								marginBottom: 32,
								marginTop: 32,
							}}
						>
							{icons.map((item, index) => (
								<Animated.View
									entering={BounceIn.delay(index * 150 + 800)}
									key={item.name}
									style={{
										backgroundColor: item.color,
										height: 56,
										width: 56,
										alignItems: "center",
										justifyContent: "center",
										borderRadius: 32,
									}}
								>
									<AntDesing name={item.icon} color={"white"} size={22} />
								</Animated.View>
							))}
						</View>
						<View>
							{item.category.map((category, index) => {
								return (
									<Animated.View
										key={category.title}
										style={{ marginBottom: 24 }}
										entering={FadeInDown.delay(index * 150 + 700).duration(950)}
									>
										<Text style={styles.category}>{category.title}</Text>
										{category.subcategory.map((subcategory) => {
											return (
												<View
													key={subcategory.title}
													style={{ flexDirection: "row", alignItems: "center" }}
												>
													<View
														style={{
															height: 8,
															width: 8,
															backgroundColor: "gold",
															borderRadius: 4,
															marginRight: 6,
														}}
													/>
													<Text style={styles.subcategory}>
														{subcategory.title}
													</Text>
												</View>
											);
										})}
									</Animated.View>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</SharedElement>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "700",
		//position: "absolute",
		//top: TOP_HEADER_HEIGHT - SPASING * 5,
		//left: SPASING * 2,
	},
	subTitle: {
		fontSize: 14,
		fontWeight: "400",
		opacity: 0.7,
		width: width - ITEM_HEIGHT,
		color: "#000",
		//position: "absolute",
		//top: TOP_HEADER_HEIGHT / 2,
		left: SPASING * 2,
	},
	bsh: {
		position: "absolute",
		width,
		height,
		backgroundColor: "white",
		//transform: [{ translateY: TOP_HEADER_HEIGHT }],
		borderRadius: 32,
		padding: SPASING * 2,
		paddingTop: 0,
	},
	image: {
		height: ITEM_HEIGHT * 0.8,
		width: ITEM_HEIGHT * 0.8,
		resizeMode: "contain",
		position: "absolute",
		top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8,
		right: SPASING * 2,
	},
	category: { fontSize: 20, fontWeight: "600", marginBottom: 6 },
	subcategory: {
		fontSize: 15,
		fontWeight: "500",
		opacity: 0.7,
		marginBottom: 3,
	},
});
