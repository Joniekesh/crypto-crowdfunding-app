import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "./styles/globals.scss";
import { CrowdFundingContextProvider } from "./context/CrowdFundingContext";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ThirdwebProvider activeChain={ChainId.Goerli}>
			<CrowdFundingContextProvider>
				<App />
			</CrowdFundingContextProvider>
		</ThirdwebProvider>
	</React.StrictMode>
);
