import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import Animated, {
	useAnimatedStyle,
	interpolate,
} from "react-native-reanimated";

import styled from "styled-components/native";

const AVATAR_SIZE = 72;
const SPASING = 12;
const { width, height } = Dimensions.get("window");
export const UserCard = ({ user, index, scrollX }) => {
	let AnimatedStyle = {};
	if (scrollX) {
		AnimatedStyle = useAnimatedStyle(() => {
			const inputRange = [
				(index - 0.5) * width,
				index * width,
				(index + 0.5) * width,
			];
			const opacity = interpolate(scrollX.value, inputRange, [0, 0.9, 0]);
			const scale = interpolate(scrollX.value, inputRange, [0.7, 1, 0.7]);
			return {
				opacity,
				transform: [{ scale }],
			};
		});
	}

	return (
		<Animated.View
			style={[
				scrollX ? AnimatedStyle : null,
				{ backgroundColor: "white", padding: SPASING, opacity: 1 },
			]}
		>
			<TopRow>
				<Image
					source={{ uri: user?.avatar }}
					style={{
						height: AVATAR_SIZE,
						width: AVATAR_SIZE,
						borderRadius: AVATAR_SIZE / 2,
					}}
				/>
				<TextWrapper>
					<UserName>{user?.name}</UserName>
					<UseProfession>{user?.job}</UseProfession>
				</TextWrapper>
			</TopRow>

			<BottonRow>
				<Cell>
					<CellNum>{user?.details[0]?.value}</CellNum>
					<CellText>{user?.details[0]?.label}</CellText>
				</Cell>
				<Cell>
					<CellNum>{user?.details[1]?.value}</CellNum>
					<CellText>{user?.details[1]?.label}</CellText>
				</Cell>
				<Cell>
					<CellNum>{user?.details[2]?.value}</CellNum>
					<CellText>{user?.details[2]?.label}</CellText>
				</Cell>
			</BottonRow>
		</Animated.View>
	);
};

const TopRow = styled.View`
	flex-direction: row;
	align-items: center;
`;

const TextWrapper = styled.View`
	margin-left: ${SPASING}px;
`;

const UserName = styled.Text`
	font-size: 16px;
	font-weight: 700;
`;

const UseProfession = styled.Text`
	opacity: 0.9;
	color: #888;
	font-size: 12px;
`;

const BottonRow = styled.View`
	margin-top: ${SPASING};
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

const Cell = styled.View`
	align-items: center;
`;

const CellNum = styled.Text`
	font-weight: 700;
	font-size: 16px;
`;

const CellText = styled.Text`
	font-weight: 400;
	opacity: 0.9;
	color: #888;
	font-size: 12px;
`;
