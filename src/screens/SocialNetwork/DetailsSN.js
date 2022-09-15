import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useRef } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "../../components/BackIcon";
import { UserCard } from "../../components/SocialNetwork/UserCard";
import { Masonry } from "../../components/Masonry";
import { SharedElement } from "react-navigation-shared-element";

const { height } = Dimensions.get("window");

export const DetailsSN = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<View style={{ flex: 1, paddingTop: 40, paddingHorizontal: 12 }}>
			<BackIcon onPress={() => navigation.goBack()} style={{}} />
			<SharedElement
				style={[StyleSheet.absoluteFill, { height: height / 2 }]}
				id={`item.${item.key}.bg`}
			>
				<Image
					source={{ uri: item?.user?.img }}
					style={[StyleSheet.absoluteFill, { height: height / 2 }]}
				/>
			</SharedElement>

			<ScrollView
				contentContainerStyle={{
					alignSelf: "center",

					width: "100%",
					paddingTop: height / 2 - 140,
				}}
			>
				<SharedElement
					id={`item.${item.key}.card`}
					style={{
						width: "100%",
						alignSelf: "center",
					}}
				>
					<UserCard user={item.user} />
				</SharedElement>
				<Masonry />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});
