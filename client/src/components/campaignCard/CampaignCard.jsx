import "./campaignCard.scss";
import { useNavigate } from "react-router-dom";
import { daysLeft } from "../../utils";

const CampaignCard = ({ campaign }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${campaign.pId}`, { state: campaign });
	};

	return (
		<div className="campaignCard" onClick={handleNavigate}>
			<div className="top">
				<img className="topImg" src={campaign.img} alt="" />
			</div>
			<div className="bottom">
				<p className="title">{campaign.title}</p>
				<span className="description">{campaign.description}</span>
				<div className="reception">
					<div className="receptionLeft">
						<span>{campaign.amountCollected} ETH</span>
						<span>Received of {campaign.target}</span>
					</div>
					<div className="receptionRight">
						<span>{daysLeft(campaign.deadline)}</span>
						<span>Days left</span>
					</div>
				</div>
				<div className="walletDetails">
					<img className="walletImg" src="https://bit.ly/42uFQmr" alt="" />
					<span className="wAddress">
						By {campaign.owner.slice(0, 5)}...
						{campaign.owner.slice(campaign.owner.length - 4)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CampaignCard;
