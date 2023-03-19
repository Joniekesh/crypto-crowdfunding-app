import { createContext } from "react";
import {
	useContract,
	useContractWrite,
	useAddress,
	useMetamask,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

export const CrowdFundingContext = createContext();

export const CrowdFundingContextProvider = ({ children }) => {
	const address = useAddress();
	const connect = useMetamask();

	const { contract } = useContract(
		"0x9021414A8fA862f2F9D3e5Cf8641BAfc7A4EF457"
	);
	const { mutateAsync: createCampaign } = useContractWrite(
		contract,
		"createCampaign"
	);

	const publishCampaign = async (formData) => {
		try {
			const data = await createCampaign([
				address,
				formData.title,
				formData.description,
				formData.target,
				new Date(formData.deadline).getTime(),
				formData.img,
			]);

			console.log("Campaign created", data);
		} catch (error) {
			console.log(error);
		}
	};
	const donate = async (pId, amount) => {
		const data = await contract.call("donateToCampaign", pId, {
			value: ethers.utils.parseEther(amount),
		});

		return data;
	};

	const getDonations = async (pId) => {
		const donations = await contract.call("getDonators", pId);
		const numberOfDonations = donations[0].length;

		const parsedDonations = [];

		for (let i = 0; i < numberOfDonations; i++) {
			parsedDonations.push({
				donator: donations[0][i],
				donation: ethers.utils.formatEther(donations[1][i].toString()),
			});
		}

		return parsedDonations;
	};

	return (
		<CrowdFundingContext.Provider
			value={{
				address,
				contract,
				connect,
				createCampaign: publishCampaign,
				donate,
				getDonations,
			}}
		>
			{children}
		</CrowdFundingContext.Provider>
	);
};
