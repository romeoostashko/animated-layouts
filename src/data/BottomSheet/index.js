import niceColor from "nice-color-palettes/100";

const category = [
	{
		title: "General information",
		subcategory: [
			{ title: "Scientific name: Phoenicopterus" },
			{ title: "Higher classification: Flamingos" },
			{ title: "Rank: Genus" },
		],
	},
	{
		title: "Physique",
		subcategory: [
			{ title: "Speed: 37 mph" },
			{ title: "Height: 3.6 – 4.9 ft." },
			{ title: "Wingspan: 3 – 3.4 ft." },
		],
	},
	{
		title: "Particularity",
		subcategory: [
			{ title: "The genus was introduced in 1758" },
			{ title: "Was introduced by Carl Linnaeus" },
			{ title: "The genus name is Latin for 'flamingo'" },
		],
	},
];

const img = [
	{
		url: require("../../img/imgBSH/cat.png"),
		title: "Cat",
		subTitle: "Whole animal protein is important food for cats",
	},
	{
		url: require("../../img/imgBSH/cow.png"),
		title: "Cow",
		subTitle: "A cow eats grass",
	},
	{
		url: require("../../img/imgBSH/crab.png"),
		title: "Crab",
		subTitle: "They are carnivores, which means they like to eat meat ",
	},
	{
		url: require("../../img/imgBSH/dog.png"),
		title: "Dog",
		subTitle: "Dogs are classified as omnivores",
	},
	{
		url: require("../../img/imgBSH/flamingo.png"),
		title: "Flamingo",
		subTitle:
			"Flamingos are omnivorous birds, and they will filter and eat whatever nutritious organisms they can find in their lake",
	},
	{
		url: require("../../img/imgBSH/lion.png"),
		title: "Lion",
		subTitle:
			"Lions are carnivores, which means they are animals that only eat meat",
	},
	{
		url: require("../../img/imgBSH/monkey.png"),
		title: "Monkey",
		subTitle:
			"Most monkeys are omnivores; they eat plant-based foods, fruits and nuts,some meat, lizards and bird eggs.",
	},
	{
		url: require("../../img/imgBSH/panda-bear.png"),
		title: "Panda",
		subTitle:
			"Pandas subsist almost entirely on bamboo, eating from 26 to 84 pounds per day",
	},
	{
		url: require("../../img/imgBSH/penguin.png"),
		title: "Penguin",
		subTitle:
			"All 18 species of penguin are carnivores, smaller penguin species are considered",
	},
	{
		url: require("../../img/imgBSH/pig.png"),
		title: "Pig",
		subTitle: "Farmers feed pigs a high-quality, grain-based diet",
	},
	{
		url: require("../../img/imgBSH/rabbit.png"),
		title: "Rabbit",
		subTitle:
			"Rabbits should have a daily diet of mostly hay, a smaller amount of fresh vegetables",
	},
	{
		url: require("../../img/imgBSH/sheep.png"),
		title: "Sheep",
		subTitle: "Sheep are herbivores and eat mainly plant material",
	},
	{
		url: require("../../img/imgBSH/snake.png"),
		title: "Snake",
		subTitle: "All snakes are carnivores. Their diet depends on the species.",
	},
	{
		url: require("../../img/imgBSH/whale.png"),
		title: "Whale",
		subTitle:
			"They usually eat large schools of fish and sea creatures like small crabs",
	},
];

const colors = [
	"#89b0ae",
	"#ffd6ba",
	"#ffcad4",
	"#cae9ff",
	"#efe9ae",
	"#9fd7f1",
	"#f2988f",
	"#89b0ae",
	"#ffd6ba",
	"#ffcad4",
	"#cae9ff",
	"#efe9ae",
	"#9fd7f1",
	"#f2988f",
	"#89b0ae",
	"#ffd6ba",
	"#ffcad4",
	"#cae9ff",
	"#efe9ae",
	"#9fd7f1",
	"#f2988f",
];

export const DATA = img.map((item, index) => ({
	...item,
	color: colors[index],
	key: `${niceColor[index].slice(0, 1)[0]}-${index}`,
	category: category,
}));

export const icons = [
	{ color: "#9fd7f1", icon: "isv" },
	{ color: "#f3b000", icon: "Trophy" },
	{ color: "#f2988f", icon: "edit" },
];
