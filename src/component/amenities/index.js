import ListItem from "../list-item";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

import Pool from "./Pool.svg"
import Gym from "./Gym.svg"
import Breackfast from "./Breackfast.svg"
import FreeWifi from "./FreeWifi.svg"
import Parking from "./Parking.svg"
import Pets from "./Pets.svg"
import AirportShuttle from "./AirportShuttle.svg"
import Concierge from "./Concierge.svg"
import RoomService from "./RoomService.svg"
import ChildFriendly from "./ChildFriendly.svg"




export default function Amenities({
		
	pool, 
	gym,
	freeBreakfast,
	freeWiFi,
	parking,
	petsAllowed, 
	airportShuttle,
	conciergeService,
	roomService,
	childFriendly,
}) {
	return (
		<Box shadow>
			<div className="propertyDetails">
				<Heading  border>Зручності:</Heading>
				<div >		
					<div className={pool ? '' : 'none'}>
						<ListItem imageSrc={Pool}  >
							<span> Басейн </span>
						</ListItem>
					</div>
					<div className={gym ? '' : 'none'}>
						<ListItem imageSrc={Gym}  >
							<span> Спортивний зал </span>
						</ListItem>
					</div>
					<div className={freeBreakfast ? '' : 'none'}>
						<ListItem imageSrc={Breackfast}  >
							<span> Безкоштовний сніданок </span>
						</ListItem>
					</div>
					<div className={freeWiFi ? '' : 'none'}>
						<ListItem imageSrc={FreeWifi}  >
							<span> Безкоштовний сніданок </span>
						</ListItem>
					</div>
					<div className={parking ? '' : 'none'}>
						<ListItem imageSrc={Parking}  >
							<span> Безкоштовний вуличний паркінг </span>
						</ListItem>
					</div>
					<div className={petsAllowed ? '' : 'none'}>
						<ListItem imageSrc={Pets}  >
							<span> Дозволено розміщення з домашніми тваринами </span>
						</ListItem>
					</div>
					<div className={airportShuttle ? '' : 'none'}>
						<ListItem imageSrc={AirportShuttle}  >
							<span> Трансфер до/з аеропорту </span>
						</ListItem>
					</div>
					<div className={conciergeService ? '' : 'none'}>
						<ListItem imageSrc={Concierge}  >
							<span> Консьєрж-сервіс </span>
						</ListItem>
					</div>
					<div className={roomService ? '' : 'none'}>
						<ListItem imageSrc={RoomService}  >
							<span> Обслуговування номерів </span>
						</ListItem>
					</div>
					<div className={childFriendly ? '' : 'none'}>
						<ListItem imageSrc={ChildFriendly}  >
							<span>Підходить для дітей </span>
						</ListItem>
					</div>					
				</div>
			</div>
		</Box>
	)

		
}