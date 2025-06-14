import React from "react";
import CounterStat from "../Components/CounterStat";
import NewHero from "../Components/Heros/NewHero";
import img1 from "../assets/Images/img1.jpg";
import WhoWeAre from "../Components/WhoWeAre";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import ChoiceUs from "../Components/ChoiceUs";
import img2 from "../assets/Images/choiceimg.jpg";
import Gallery from "../Components/Gallery";
import bgImg from "../assets/Images/galleryimg1.jpg";
import galimg2 from "../assets/Images/galleryimg2.jpg";
import galimg3 from "../assets/Images/galleryimg3.jpg";
import galimg4 from "../assets/Images/galleryimg4.jpg";
import galimg5 from "../assets/Images/galleryimg5.jpg";
import galimg6 from "../assets/Images/galleryimg6.jpg";
import Testimonial from "../Components/Testimonial";
import CallAction from "../Components/CallAction";
import Blog from "../Components/Blog";

const listData = [
	"24 Hour Consultation",
	"Certification Team",
	"More Office Branch",
	"Best Work Result",
];

function Home() {
	return (
		<div className="bg-[#F3ECDC]">
			<NewHero
				img={img1}
				largeText={
					<>
						<span className="text-[#F3ECDC]">Ayo,</span>
						<span className="text-[#588157]">Cari</span>
						<span className="text-[#F3ECDC]">Apartemen Impian</span>
						<span className="text-[#588157]">Anda Disini..</span>
					</>
				}
				lowerText="Sewa Aparteme Impian Anda. Ruang Nyaman,Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kamil!"
				isButton={true}
				isIcon={true}
			/>
			<CounterStat />
			<WhoWeAre />
			<AboutUs />
			<Services
				texts={true}
				upperText="kasiye"
				title="Nardos"
				isGreen
				bottomText={true}
				isHome={true}
			/>
			<ChoiceUs
				title="Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda"
				img2={img2}
				bottomText="Free Consultation"
				lastText="tersedia konsultasi terbaik"
				rightTop="Fasilitas memadai tempat yang modern"
				list={listData}
			/>
			<Gallery
				bgImg={bgImg}
				galimg2={galimg2}
				galimg3={galimg3}
				galimg4={galimg4}
				galimg5={galimg5}
				galimg6={galimg6}
			/>
			<Testimonial />
			<CallAction title1={true} button1={true} />
			<Blog />
		</div>
	);
}

export default Home;
