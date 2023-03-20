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
				{campaign?.title.length < 30 ? (
					<p className="title">{campaign.title}</p>
				) : (
					<p className="title">{campaign.title.slice(0, 30)}...</p>
				)}
				{campaign.description < 30 ? (
					<span className="description">{campaign.description}</span>
				) : (
					<span className="description">
						{campaign.description.slice(0, 30)}...
					</span>
				)}
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
