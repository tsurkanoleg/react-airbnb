import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";
import ListItem from "../list-item";

export default function GuestReviews({list}) {
	return (
		<Box shadow>
			<div className="attraction__block">
				<Heading border>Пам'ятки поблизу</Heading>
				<div className="attraction__list">
					{list.map(({id, ...rest}) => (
						<Fragment key={id}>
							<Item {...rest}/>
						</Fragment>
					))}
				</div>
			</div>
		</Box>
	);
}

function Item({ name, link}) {
	return (
		<ListItem>
			<a href={link} className="attraction__item">{name}</a>	
		</ListItem>
				
	)
}