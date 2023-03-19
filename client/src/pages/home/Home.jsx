import "./home.scss";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Campaigns from "../../components/campaigns/Campaigns";
import { ethers } from "ethers";
import Loader from "../../components/loader/Loader";

const Home = () => {
	const { contract } = useContract(
		"0x9021414A8fA862f2F9D3e5Cf8641BAfc7A4EF457"
	);
	const { data, isLoading } = useContractRead(contract, "getCampains");

	const campaigns = data?.map((campaign, i) => ({
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

	return (
		<div className="home">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className="homeCampaigns">
						<h3>All Campaigns ({campaigns.length})</h3>
						<Campaigns campaigns={campaigns} />
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
