import "./menu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CrowdFundingContext } from "../../context/CrowdFundingContext";

const Menu = ({ setMenuOpen }) => {
	const navigate = useNavigate();

	const handleClose = () => {
		setMenuOpen(false);
	};

	const { address, connect } = useContext(CrowdFundingContext);

	const handleClick = () => {
		if (address) {
			navigate("/createcampaign");
		} else {
			connect();
		}

		setMenuOpen(false);
	};

	return (
		<div className="menu">
			<ul className="menuList">
				<button className="connectBtn" onClick={handleClick}>
					{address ? "Create Campaign" : "Connect Wallet"}
				</button>
				<Link className="link" to="/">
					<li className="menuListItem" onClick={handleClose}>
						<AiOutlineHome />
						<span>Home</span>
					</li>
				</Link>
				<Link className="link" to="/profile">
					<li className="menuListItem" onClick={handleClose}>
						<CgProfile />
						<span>Profile</span>
					</li>
				</Link>
				<Link className="link" to="/createcampaign">
					<li className="menuListItem" onClick={handleClose}>
						<IoIosCreate />
						<span>Create</span>
					</li>
				</Link>
				<li className="menuListItem" onClick={handleClose}>
					<BiNews />
					<span>News</span>
				</li>
				<li className="menuListItem" onClick={handleClose}>
					<IoMdLogOut />
					<span>Logout</span>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
