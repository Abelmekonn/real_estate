import React from "react";
import NewHero from "../Components/Heros/NewHero";
import img3 from "../assets/Images/img3.jpg";
import Services from "../Components/Services";
import Gallery from "../Components/Gallery";
import bgImg from "../assets/Images/gallerybuid1.jpg";
import galimg2 from "../assets/Images/gallerybuil2.jpg";
import galimg3 from "../assets/Images/gallerybuid3.jpg";
import galimg4 from "../assets/Images/gallerybuild4.jpg";
import galimg5 from "../assets/Images/gallerybuid5.jpg";
import galimg6 from "../assets/Images/gallerybuil6.jpg";
import CallAction from "../Components/CallAction";

function Service() {
	return (
		<div className="bg-[#F3ECDC]">
			<NewHero
				lowerText="
				Memberikan layanan terbaik untuk seluruh pengunjung, dan memberikan fasilitas yang sangat memadai untuk kebutuhan sehari hari"
				largeText={
					<>
						<span className="text-[#F3ECDC]">Layanan</span>{" "}
						<span className="text-[#588157]">Kami</span>
					</>
				}
				page="LAYANAN KAMI"
				link={true}
				img={img3}
			/>
			<Services additionalBoxes={true} />
			<Gallery
				bgImg={bgImg}
				galimg2={galimg2}
				galimg3={galimg3}
				galimg4={galimg4}
				galimg5={galimg5}
				galimg6={galimg6}
			/>
			<CallAction title2={true} button2={true} />
		</div>
	);
}

export default Service;
