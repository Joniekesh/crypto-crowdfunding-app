import "./profile.scss";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Campaigns from "../../components/campaigns/Campaigns";
import { ethers } from "ethers";
import Loader from "../../components/loader/Loader";

const Profile = () => {
	const { contract } = useContract(
		"0x9021414A8fA862f2F9D3e5Cf8641BAfc7A4EF457"
	);
	const { data, isLoading } = useContractRead(contract, "getCampains");
	const address = useAddress();

	const formatedCampaigns = data?.map((campaign, i) => ({
		owner: campaign.owner,
		title: campaign.title,
		description: campaign.description,
		target: ethers.utils.formatEther(campaign.target.toString()),
		deadline: campaign.deadline.toNumber(),
		amountCollected: ethers.utils.formatEther(
			campaign.amountCollected.toString()
		),
		img: campaign.img,
		pId: i,
		transactionHash: campaign.transactionHash,
	}));

	const filteredCampaigns = formatedCampaigns?.filter(
		(campaign) => campaign.owner === address
	);

	return (
		<div className="profile">
			{isLoading ? (
				<Loader />
			) : (
				<div className="profileCampaigns">
					<h3>Your Campaigns ({filteredCampaigns?.length})</h3>
					<Campaigns campaigns={filteredCampaigns} />
				</div>
			)}
		</div>
	);
};

export default Profile;
