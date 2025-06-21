import React from "react";
import img5 from "../assets/Images/img5.jpg";
import NewHero from "../Components/Heros/NewHero";
import Card from "../Components/card";
import { apartementList } from "../Constant/data";
import Map from "../Components/Map";
import { useState } from "react";

// ...existing code...
function List() {
	const [selectedAppartement, setSelectedApartement] = useState(
		apartementList[0].id
	);

	const selectedItem = apartementList.find(
		(item) => item.id === selectedAppartement
	);

	return (
		<div>
			<NewHero
				lowerText="Segera pilih apartemen impian anda dibawah ini"
				largeText="List Hotel dan Apartemen"
				page="LIST APARTEMEN"
				link={true}
				img={img5}
			/>
			<div className="md:flex justify-between px-5 md:px-10 lg:px-20 py-10 space-y-3 ">
				<div className="space-y-7 ">
					{apartementList.map((item) => (
						<div key={item.id} onClick={() => setSelectedApartement(item.id)}>
							<Card
								name={item.name}
								location={item.location}
								rating={item.rating}
								reviews={item.reviews}
								type={item.type}
								image={item.image}
								badges={item.badges}
							/>
						</div>
					))}
				</div>
				<Map location={selectedItem?.map} />
			</div>
		</div>
	);
}

export default List;
