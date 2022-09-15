import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Dimensions,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

import { SharedElement } from "react-navigation-shared-element";

import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	useAnimatedScrollHandler,
} from "react-native-reanimated";

import { UserCard } from "../../components/SocialNetwork/UserCard";
import { DATA } from "../../data/SocialNetwork";

const { width, height } = Dimensions.get("window");

export const HomeSN = ({ navigation }) => {
	const scrollX = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			scrollX.value = e.contentOffset.x;
		},
	});

	return (
		<View style={{ flex: 1 }}>
			<Animated.FlatList
				bounces={false}
				onScroll={scrollHandler}
				scrollEventThrottle={16}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				data={DATA}
				style={{ flexGrow: 1 }}
				contentContainerStyle={{ position: "relative" }}
				renderItem={({ item, index }) => {
					console.log(item.user);

					return (
						<View
							style={{
								width,
								paddingHorizontal: 12,
								flex: 0,
								paddingTop: 60,
							}}
						>
							<SharedElement
								id={`item.${item.key}.bg`}
								style={{
									height,
									width,
									...StyleSheet.absoluteFill,
								}}
							>
								<Image
									source={{ uri: item?.user?.img }}
									style={{
										height,
										width,
										...StyleSheet.absoluteFill,
										resizeMode: "cover",
									}}
								/>
							</SharedElement>
							<TouchableOpacity
								onPress={() => navigation.navigate("DetailsSN", { item: item })}
								activeOpacity={0.8}
							>
								<SharedElement id={`item.${item.key}.card`}>
									<UserCard user={item.user} index={index} scrollX={scrollX} />
								</SharedElement>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
			<View
				style={{
					backgroundColor: "red",
					position: "absolute",

					alignItems: "center",
					bottom: 120,

					width,
				}}
			>
				{DATA.map((i, index) => {
					return <BottomText index={index} scrollX={scrollX} i={i} />;
				})}
			</View>
		</View>
	);
};

const BottomText = ({ index, scrollX, i }) => {
	const opasityStyle = useAnimatedStyle(() => {
		const inputRange = [
			(index - 0.5) * width,
			index * width,
			(index + 0.5) * width,
		];
		const opacity = interpolate(scrollX.value, inputRange, [0, 1, 0]);
		const translateY = interpolate(scrollX.value, inputRange, [-35, 0, 35]);
		return { opacity: opacity, transform: [{ translateY: translateY }] };
	});
	return (
		<Animated.Text
			style={[
				{
					color: "white",
					position: "absolute",
					fontSize: 24,
					fontWeight: "600",
				},
				opasityStyle,
			]}
		>
			{i.title}
		</Animated.Text>
	);
};

const styles = StyleSheet.create({});
