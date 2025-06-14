import React from "react";
import img5 from "../assets/Images/img5.jpg";
import NewHero from "../Components/Heros/NewHero";

function List() {
	return (
		<div>
			<NewHero
				lowerText="Segera pilih apartemen impian anda dibawah ini"
				largeText="List Hotel dan Apartemen"
				page="LIST APARTEMEN"
				link={true}
				img={img5}
			/>
		</div>
	);
}

export default List;
