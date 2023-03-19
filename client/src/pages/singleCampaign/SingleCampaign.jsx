import "./singleCampaign.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { daysLeft, donation } from "../../utils";
import { useContext, useEffect, useState } from "react";
import { CrowdFundingContext } from "../../context/CrowdFundingContext";
import Loader from "../../components/loader/Loader";

const SingleCampaign = () => {
	const { state } = useLocation();
	const [amount, setAmount] = useState("");
	const [donators, setDonators] = useState([]);

	const [loading, setLoading] = useState(false);

	const { donate, getDonations, contract, address } =
		useContext(CrowdFundingContext);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		await donate(state.pId, amount);

		navigate("/");
		setLoading(false);
	};

	const fetchDonators = async () => {
		const data = await getDonations(state.pId);

		setDonators(data);
	};

	useEffect(() => {
		if (contract) fetchDonators();
	}, [contract, address]);

	return (
		<div className="singleCampaign">
			<div className="top">
				<div className="topLeft">
					<img src={state?.img} alt="" />
					<div className="outerBar">
						<div
							className="innerBar"
							style={{
								width: `${donation(state?.amountCollected, state?.target)}%`,
							}}
						>
							{donation(state?.amountCollected, state?.target)}%
						</div>
					</div>
				</div>
				<div className="topRight">
					<div className="item">
						<span>{daysLeft(state?.deadline)}</span>
						<span>Days left</span>
					</div>
					<div className="item">
						<span>{state.amountCollected} ETH</span>
						<span>Of {state.target}</span>
					</div>
					<div className="item">
						<span>{donators.length}</span>
						<span>Total Donators</span>
					</div>
				</div>
			</div>
			<div className="bottom">
				<div className="bottomLeft">
					<div className="creatorInfo">
						<span className="creator">CREATOR</span>
						<div className="creatorAdrress">
							<img src="https://bit.ly/42uFQmr" alt="" />
							<span className="cryptoAddress">
								{state?.owner.slice(0, 5)}...
								{state?.owner.slice(state.owner.length - 4)}
							</span>
						</div>
					</div>
					<div className="blItem">
						<span className="desc">DESCRIPTION</span>
						<span>{state?.description}</span>
					</div>
					<div className="donators">
						<span className="donatorTitle">DONATORS</span>
						<div className="list">
							{donators.length > 0 ? (
								donators.map((item, index) => (
									<div className="listItem" key={index}>
										<div className="listItemLeft">
											<span className="sNo">{index + 1}.</span>
											<span>{item.donator}</span>
										</div>
										<span>{item.donation}</span>
									</div>
								))
							) : (
								<span>No donator yet. Be the first to donate.</span>
							)}
						</div>
					</div>
				</div>
				<div className="bottomRight">
					<h3>Fund</h3>
					<span>Pledge without reward</span>
					<form onSubmit={handleSubmit}>
						<input
							type="number"
							step="0.0001"
							placeholder="ETH 0.1"
							// min="0.00000001"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
						<div className="backUp">
							<span className="desc1">Back it because you believe in it</span>
							<span className="desc2">
								Lorem ipsum dolor sit amet consectetur.
							</span>
						</div>
						<button type="submit">
							{loading ? <Loader /> : "Fund Campaign"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SingleCampaign;
