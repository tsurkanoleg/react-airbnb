import ListItem from "../list-item";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

import guest from "./guests.svg";
import bedroom from "./bedrooms.svg";
import bed from "./beds.svg";
import bath from "./baths.svg";



export default function PropertyDetails({guests, bedrooms, beds, baths}) {
	return (
		<Box shadow>
			<div className="propertyDetails">
				<Heading  border>Деталі властивості:</Heading>
				<div className="propertyDetails__list">
					<ListItem imageSrc={guest} >
						<span>
							{guests}
						</span>
						<span> гості </span>
					</ListItem>
					<ListItem imageSrc={bedroom}>
						<span>
							{bedrooms}
						</span>
						<span>спальня</span>
					</ListItem>
					<ListItem imageSrc={bed} >
						<span>
							{beds}
						</span>
						<span>ліжко</span>
					</ListItem>
					<ListItem imageSrc={bath} >
						<span>
							{baths}
						</span>
						<span>ванна кімната</span>
					</ListItem>
				</div>
			</div>
		</Box>
	)

		
}