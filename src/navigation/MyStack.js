import { NavigationContainer } from "@react-navigation/native";
import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { Start } from "../screens/Start";

import { HomeBSH } from "../screens/BottomSheet/HomeBSH";
import { DetailsBSH } from "../screens/BottomSheet/DetailsBSH";
import { HomeSN } from "../screens/SocialNetwork/HomeSN";
import { DetailsSN } from "../screens/SocialNetwork/DetailsSN";

const forFade = ({ current }) => ({
	cardStyle: { opacity: current.progress },
});

const config = {
	animation: "timing",
	config: {
		duration: 1000,
	},
};

const BSHStack = createSharedElementStackNavigator();
const BottomSheetStack = () => {
	return (
		<BSHStack.Navigator initialRouteName="HomeBSH" headerMode="none">
			<BSHStack.Screen
				name="HomeBSH"
				component={HomeBSH}
				options={{
					cardStyleInterpolator: forFade,
					transitionSpec: { open: config, close: config },
				}}
			></BSHStack.Screen>
			<BSHStack.Screen
				name="DetailsBSH"
				component={DetailsBSH}
				sharedElements={(route, otherRoute, showing) => {
					const { item } = route.params;
					return [
						`item.${item.key}.bg`,

						`item.${item.key}.subTitle`,
						`item.${item.key}.title`,
						`item.${item.key}.img`,
						`general.bg`,
					];
				}}
				options={{
					cardStyleInterpolator: forFade,
					transitionSpec: { open: config, close: config },
				}}
			></BSHStack.Screen>
		</BSHStack.Navigator>
	);
};

const SNStack = createSharedElementStackNavigator();

const SocialNetworkStack = () => {
	return (
		<SNStack.Navigator initialRouteName="HomeSN" headerMode="none">
			<SNStack.Screen
				name="HomeSN"
				component={HomeSN}
				options={{
					cardStyleInterpolator: forFade,
					transitionSpec: { open: config, close: config },
				}}
			/>
			<SNStack.Screen
				name="DetailsSN"
				component={DetailsSN}
				options={{
					cardStyleInterpolator: forFade,
					transitionSpec: { open: config, close: config },
				}}
				sharedElements={(route, otherRoute, showing) => {
					const { item } = route.params;
					return [
						`item.${item.key}.bg`,
						`item.${item.key}.card`,

						`item.${item.key}.title`,
						`item.${item.key}.img`,
						`general.bg`,
					];
				}}
			/>
		</SNStack.Navigator>
	);
};

const Stack = createStackNavigator();
export const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Start" headerMode="none">
				<Stack.Screen name="Start" component={Start}></Stack.Screen>
				<Stack.Screen name="HomeBSH" component={HomeBSH}></Stack.Screen>
				<Stack.Screen
					name="BottomSheetStack"
					component={BottomSheetStack}
				></Stack.Screen>
				<Stack.Screen
					name="SocialNetworkStack"
					component={SocialNetworkStack}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
