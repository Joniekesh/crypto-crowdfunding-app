import CampaignCard from "../campaignCard/CampaignCard";
import "./campaigns.scss";

const Campaigns = ({ campaigns }) => {
	return (
		<div className="campaigns">
			<div className="campaignList">
				{campaigns?.length > 0 ? (
					campaigns.map((campaign, pId) => (
						<CampaignCard campaign={campaign} key={pId} />
					))
				) : (
					<span>No campaign yet. Start one.</span>
				)}
			</div>
		</div>
	);
};

export default Campaigns;
