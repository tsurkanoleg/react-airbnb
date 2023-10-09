import "./index.css";
import Box from "../box";

export default function Additional({
	rules, 
	cancellation, 
	transportation, 
	languages, 
	offers, 
	registration,
}) {
	return(
		<div className="title">
			<Box shadow>
				<div className="additional__box"> 
					<h1 className="title__text">Додаткові властивості</h1>
					<div className="title__sub">
						<div className="title__sub-block">
							<span className="title__sub--title">Правила дому</span>
							<span className="title__sub--description">{rules}</span>
						</div>
						<div className="title__sub-block">
							<span className="title__sub--title">Політика скасування</span>
							<span className="title__sub--description">{cancellation}</span>
						</div>
						<div className="title__sub-block">
							<span className="title__sub--title">Місцевий транспорт</span>
							<span className="title__sub--description">{transportation}</span>
						</div>
						<div className="title__sub-block">
							<span className="title__sub--title">Мови хоста</span>
							<span className="title__sub--description">{languages}</span>
						</div>
						<div className="title__sub-block">
							<span className="title__sub--title">Спеціальні пропозиції:</span>
							<span className="title__sub--description">{offers}</span>
						</div>
						<div className="title__sub-block">
							<span className="title__sub--title">Інструкції щодо реєстрації</span>
							<span className="title__sub--description">{registration}</span>
						</div>
					</div>
				</div>
			</Box>
		
		</div>
	);
}