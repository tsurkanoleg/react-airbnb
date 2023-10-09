
import Heading from "../heading";

import "./index.css";
import Description from "../description";


export default function Contact({
		name,
		image,
		response_rate,
		response_time,
		info,
		phone,	
}) {
	return (
	
			<div className="propertyDetails">
				<div className="contact__details">
					<img src={image} className="contact__photo"/>
					<div className="contact__info">
						<Heading >Господар – {name} </Heading>
						<div  className="contact__response">
							<span className="contact__response-value">{phone} </span>
							<span className="contact__response-value">{response_time} </span>
							<span className="contact__response-value">rate:{response_rate}</span>
						</div>
					</div>
				</div>
				<Description>{info}</Description>
			</div>
		
	)

		
}