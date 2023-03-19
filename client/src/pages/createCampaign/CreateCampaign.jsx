import "./createCampaign.scss";
import { BsCurrencyDollar } from "react-icons/bs";
import { useContext, useState } from "react";
import { CrowdFundingContext } from "../../context/CrowdFundingContext";
import { ethers } from "ethers";
import Loader from "../../components/loader/Loader";

const CreateCampaign = () => {
	const [loading, setLoading] = useState(false);
	const { address, createCampaign } = useContext(CrowdFundingContext);

	const [formData, setFormData] = useState({
		name: "",
		title: "",
		description: "",
		target: "",
		deadline: "",
		img: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const { name, title, description, target, deadline, img } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		await createCampaign({
			...formData,
			address,
			target: ethers.utils.parseUnits(target, 18),
		});
		setLoading(false);
	};

	return (
		<div className="createCampaign">
			<h2>Start a Campaign</h2>
			<form onSubmit={handleSubmit}>
				<div className="inputTop">
					<div className="formInputLeft">
						<label>Your name *</label>
						<input
							type="text"
							placeholder="Enter your name"
							name="name"
							value={name}
							onChange={handleChange}
						/>
					</div>
					<div className="formInputRight">
						<label>Campaign Title *</label>
						<input
							type="text"
							placeholder="Enter title"
							name="title"
							value={title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="textArea">
					<label>Campaign Description *</label>
					<textarea
						rows="4"
						value={description}
						name="description"
						onChange={handleChange}
					></textarea>
				</div>
				<div className="assurance">
					<BsCurrencyDollar />
					<span>You will receive 100% of the raised amount</span>
				</div>
				<div className="inputTop">
					<div className="formInputLeft">
						<label>Goal *</label>
						<input
							type="text"
							placeholder="0.5 ETH"
							name="target"
							value={target}
							onChange={handleChange}
						/>
					</div>
					<div className="formInputRight">
						<label>End Date *</label>
						<input
							type="date"
							name="deadline"
							value={deadline}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="campaignImg">
					<label>Campaign Image *</label>
					<input
						type="text"
						placeholder="Paste image URL of your new campaign"
						name="img"
						value={img}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">
					{loading ? <Loader /> : "Submit New Campaign"}
				</button>
			</form>
		</div>
	);
};

export default CreateCampaign;
