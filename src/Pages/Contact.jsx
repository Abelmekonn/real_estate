import React from "react";
import NewHero from "../Components/Heros/NewHero";
import img4 from "../assets/Images/img4.jpg";
import ContactForm from "../Components/ContactForm";
import Map from "../Components/Map";

function Contact() {
	return (
		<div>
			<NewHero
				lowerText="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				largeText={
					<>
						<span className="text-[#F3ECDC]">Hubungi</span>{" "}
						<span className="text-[#588157]">Kami</span>
					</>
				}
				page="CONTACT US"
				link={true}
				img={img4}
			/>
			<ContactForm />
			<Map />
		</div>
	);
}

export default Contact;
