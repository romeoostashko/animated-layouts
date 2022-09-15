import { faker } from "@faker-js/faker";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const img = [
	{
		img: `https://picsum.photos/id/1041/${height}/${width}.jpg`,
	},

	{
		img: `https://picsum.photos/id/1024/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1031/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1066/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1005/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1006/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1011/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1008/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1009/${height}/${width}.jpg`,
	},
	{
		img: `https://picsum.photos/id/1010/${height}/${width}.jpg`,
	},
];

export const DATA = [...Array(10).keys()].map((i, index) => {
	return {
		key: String(i),
		title: faker.name.jobTitle(),
		description: faker.commerce.productDescription(),
		location: faker.address.streetAddress(true),
		user: {
			name: faker.name.fullName(),
			job: faker.name.jobTitle(),
			avatar: faker.internet.avatar(),
			img: img[index].img,
			details: [
				{ label: "Posts", value: faker.random.numeric(3) },
				{ label: "Followers", value: faker.random.numeric(3) },
				{ label: "Followerings", value: faker.random.numeric(3) },
			],
		},
	};
});
