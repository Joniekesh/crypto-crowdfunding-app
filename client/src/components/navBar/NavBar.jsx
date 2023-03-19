import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";
import { CrowdFundingContext } from "../../context/CrowdFundingContext";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const navigate = useNavigate();

	const { address, connect } = useContext(CrowdFundingContext);

	const handleClick = () => {
		if (address) {
			navigate("/createcampaign");
		} else {
			connect();
		}
	};

	return (
		<div className="navbar">
			<div className="left">
				<Link className="link" to="/">
					<h2>
						cryptFunding
						<span>.</span>
					</h2>
				</Link>
			</div>
			<div className="search">
				<input type="text" placeholder="Search for campaigns" />
				<button>Search</button>
			</div>
			<div className="right">
				<button onClick={handleClick}>
					{address ? "Create Campaign" : "Connect Wallet"}
				</button>

				<Link className="link" to="/profile">
					<img src="https://bit.ly/42uFQmr" alt="" />
				</Link>
				<span onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
					<GiHamburgerMenu />
				</span>
			</div>
			{menuOpen && <Menu setMenuOpen={setMenuOpen} />}
		</div>
	);
};

export default NavBar;
