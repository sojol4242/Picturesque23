import {
  faCog,
  faCommentAlt,
  faFileMedical,
  faList,
  faLocation,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";

const Sidebar = ({ setTitle }) => {
  const {
    user: { email },
  } = useContext(UserContext);
  return (
    <>
      <div className="sideBrand">
        <Link to="/" className="navText" style={{ textDecoration: "none",color:"#fff" }}>
          TracePoint
        </Link>
      </div>

      <nav id="sideNavbar">
        <ul>
          {email === "bsmrstueee90@gmail.com" ? (
            <>
                 <li>
                <NavLink
                  onClick={() => setTitle("Map")}
                  activeClassName="activePage"
                  to="/dashboard/map"
                >
                  <FontAwesomeIcon icon={faLocation} className="icon" />Map
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Profile")}
                  activeClassName="activePage"
                  exact
                  to="/dashboard/profile"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="icon" />{" "}
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Bus List")}
                  activeClassName="activePage"
                  to="/dashboard/orderList"
                >
                  <FontAwesomeIcon icon={faList} className="icon" /> Bus lists
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Add Bus Driver")}
                  activeClassName="activePage"
                  to="/dashboard/addServices"
                >
                  <FontAwesomeIcon icon={faFileMedical} className="icon" /> Add
                  Driver
                </NavLink>
              </li>
              <li>
                {/* <NavLink onClick={() => setTitle('Make Admin')} activeClassName="activePage" to="/dashboard/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} className="icon"/> Make Admin
                    </NavLink> */}
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Manage Bus Driver")}
                  activeClassName="activePage"
                  to="/dashboard/manageServices"
                >
                  <FontAwesomeIcon icon={faCog} className="icon" /> Manage
                  Driver
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() => setTitle("Bus List")}
                  activeClassName="activePage"
                  exact
                  to="/dashboard/bookedList"
                >
                  <FontAwesomeIcon icon={faList} className="icon" /> Driver List
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() => setTitle("Review")}
                  activeClassName="activePage"
                  to="/dashboard/review"
                >
                  <FontAwesomeIcon icon={faCommentAlt} className="icon" />{" "}
                  Review
                </NavLink>
              </li>
            </>
          ) : (
            <>
            
              <li>
                <NavLink
                  onClick={() => setTitle("Map")}
                  activeClassName="activePage"
                  to="/dashboard/map"
                >
                  <FontAwesomeIcon icon={faLocation} className="icon" />Map
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Profile")}
                  activeClassName="activePage"
                  exact
                  to="/dashboard/profile"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="icon" />{" "}
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Bus List")}
                  activeClassName="activePage"
                  exact
                  to="/dashboard/bookedList"
                >
                  <FontAwesomeIcon icon={faList} className="icon" /> Bus List
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle("Review")}
                  activeClassName="activePage"
                  to="/dashboard/review"
                >
                  <FontAwesomeIcon icon={faCommentAlt} className="icon" />{" "}
                  Review
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
