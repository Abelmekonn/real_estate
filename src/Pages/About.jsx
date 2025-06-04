import React from "react";
import img2 from "../assets/Images/img2.jpg";
import NewHero from "../Components/Heros/NewHero";
import AboutUs from "../Components/AboutUs";
import ChoiceUs from "../Components/ChoiceUs";
import choiceimg from "../assets/Images/choiceimg2.jpg";
import CallAction from "../Components/CallAction";

const listData = [
	"24 Hour Consultation",
	"Certification Team",
	"More Office Branch",
	"Best Work Result",
];
function About() {
	return (
		<div className="bg-[#F3ECDC]">
			<NewHero
				img={img2}
				largeText={
					<>
						<span className="text-[#F3ECDC]">Tentang</span>{" "}
						<span className="text-[#588157]">Kami</span>
					</>
				}
				lowerText="Sewa Aparteme Impian Anda. Ruang Nyaman,Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kamil!"
				link={true}
				page="ABOUT US"
			/>
			<AboutUs />
			<ChoiceUs
				title="Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda"
				img2={choiceimg}
				bottomText="Gratis Konsultasi"
				lastText="Tersedia konsultasi terbak"
				rightTop="Lorem ipsum dolor sit amet consectetur adipsing elit"
				list={listData}
			/>
			<CallAction title1={true} button2={true} />
		</div>
	);
}

export default About;
