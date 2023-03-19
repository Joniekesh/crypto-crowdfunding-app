import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateCampaign from "./pages/createCampaign/CreateCampaign";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import SingleCampaign from "./pages/singleCampaign/SingleCampaign";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="container">
					<LeftBar />
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route
								path="/createcampaign"
								element={<CreateCampaign />}
							></Route>
							<Route path="/profile" element={<Profile />}></Route>
							<Route path="/:id" element={<SingleCampaign />}></Route>
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
