import { FaBuilding, FaDraftingCompass, FaShieldAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RiPaintBrushLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import img5 from "../assets/Images/img5.jpg";

export const mainBoxes = [
	{
		title: "Apartemen Terbaik",
		desc: "Memberikan list apartemen terbaik di selunuh Indonesis",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <FaDraftingCompass className="text-[#588157] text-4xl" />,
	},
	{
		title: "Ruangan Modern",
		desc: "Memberikan kamar yang modem dan sesual dengan impian anda",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <MdHome className="text-[#588157] text-4xl" />,
	},
	{
		title: "Apartemen Terbaik",
		desc: "Menyediakan semua fasiltas yang mendukung dan memadal",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <RiPaintBrushLine className="text-[#588157] text-4xl" />,
	},
	{
		title: "Apartemen Terbaik",
		desc: "Memberikan list apartemen terbaik di selunuh Indonesis",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <FaShieldAlt className="text-[#588157] text-4xl" />,
	},
	{
		title: "Ruangan Modern",
		desc: "Memberikan kamar yang modem dan sesual dengan impian anda",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <FaBuilding className="text-[#588157] text-4xl" />,
	},
	{
		title: "Apartemen Terbaik",
		desc: "Menyediakan semua fasiltas yang mendukung dan memadal",
		bg: "#F9F9F9",
		textColor: "text-black",
		icon: <TbBuildingEstate className="text-[#588157] text-4xl" />,
	},
];

export const apartementList = [
	{
		id: 1,
		name: "Apartemen Mewah",
		location: "Jakarta",
		rating: 4.5,
		reviews: 120,
		type: [
			{ name: "Kamar Deluxe", price: "$100" },
			{ name: "Kamar Suite", price: "$150" },
			{ name: "more name", price: "$200" },
		],
		image: img5,
		badges: ["Free WiFi", "Breakfast Included", "Pool Access"],
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.0266604518847!2d38.75649468520902!3d8.990283977256825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84486b128ed9%3A0xe4a635c65cc21189!2sLancha%20Station!5e1!3m2!1sen!2set!4v1725898052036!5m2!1sen!2set",
	},
	{
		id: 2,
		name: "Apartemen Modern",
		location: "Bandung",
		rating: 4.8,
		reviews: 150,
		type: [{ name: "Kamar Deluxe", price: "$80" }],
		image: img5,
		badges: ["Free WiFi", "Breakfast Included", "Pool Access"],
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14982.726261891235!2d38.76218433897117!3d9.003192787955554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a8f559330b%3A0x22a3d10af2ce742!2sUrael%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1750528838877!5m2!1sen!2set",
	},
	{
		id: 3,
		name: "Apartemen Terbaik",
		location: "Surabaya",
		rating: 4.9,
		reviews: 180,
		type: [
			{ name: "Kamar Deluxe", price: "$100" },
			{ name: "Kamar Suite", price: "$150" },
			{ name: "more name", price: "$200" },
		],
		image: img5,
		badges: ["Free WiFi", "Breakfast Included", "Pool Access", "more Badges"],
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.0266604518847!2d38.75649468520902!3d8.990283977256825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84486b128ed9%3A0xe4a635c65cc21189!2sLancha%20Station!5e1!3m2!1sen!2set!4v1725898052036!5m2!1sen!2set",
	},
	{
		id: 4,
		name: "Apartemen Terbaik",
		location: "Surabaya",
		rating: 4.9,
		reviews: 180,
		type: [
			{ name: "Kamar Deluxe", price: "$100" },
			{ name: "Kamar Suite", price: "$150" },
			{ name: "Kamar Deluxe", price: "$100" },
			{ name: "Kamar Suite", price: "$150" },
		],
		image: img5,
		badges: ["Free WiFi", "Breakfast Included", "Pool Access", "more Badges"],
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14982.726261891235!2d38.76218433897117!3d9.003192787955554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a8f559330b%3A0x22a3d10af2ce742!2sUrael%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1750528838877!5m2!1sen!2set",
	},
	{
		id: 5,
		name: "Apartemen Terbaik",
		location: "Surabaya",
		rating: 4.9,
		reviews: 180,
		type: [
			{ name: "Kamar Deluxe", price: "$100" },
			{ name: "Kamar Suite", price: "$150" },
		],
		badges: ["Free WiFi", "Breakfast Included", "Pool Access"],
		image: img5,
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.0266604518847!2d38.75649468520902!3d8.990283977256825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84486b128ed9%3A0xe4a635c65cc21189!2sLancha%20Station!5e1!3m2!1sen!2set!4v1725898052036!5m2!1sen!2set",
	},
];
