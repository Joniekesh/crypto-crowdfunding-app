import "./leftBar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const LeftBar = () => {
	return (
		<div className="leftBar">
			<div className="leftBarContainer">
				<ul className="list">
					<Link className="link" to="/">
						<li>
							<AiOutlineHome />
							<span>Home</span>
						</li>
					</Link>
					<Link className="link" to="/profile">
						<li>
							<CgProfile />
							<span>Profile</span>
						</li>
					</Link>
					<Link className="link" to="/createcampaign">
						<li>
							<IoIosCreate />
							<span>Create</span>
						</li>
					</Link>
					<li>
						<BiNews />
						<span>News</span>
					</li>
					<li>
						<IoMdLogOut />
						<span>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LeftBar;
