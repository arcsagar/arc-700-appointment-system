import React from "react";
import reactLogo from "../logos/react-logo.png";
import NavLinkButton from "./NavLinkButton";
import { headerLinkType } from "./commonTypes";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeUserData } from "../store/userReducer/userReducer";
import { useNavigate } from "react-router-dom";

const Header: React.FC<{ headerLink: headerLinkType[] }> = ({ headerLink }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(removeUserData(0))
    navigate('/')
  }

  const headerLinkNavs = headerLink.map((link: headerLinkType) => {
    return (
      <li  key={link.btName}>
        <NavLinkButton
         
          btPath={link.btPath}
          btName={link.btName}
          btType={link.btType}
        />
      </li>
    );
  });

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-amber-200">
      <div className="flex items-center">
        <img
          src={reactLogo} // Replace with your logo image path
          alt="Logo"
          className="h-8 mr-4"
        />
        <h1 className="text-xl font-bold">Header</h1>
      </div>
      {/* flex-col  items-center space-y-4*/}
      <nav className="mt-4 md:mt-0">
        <ul className="flex  md:space-y-0 md:space-x-4 md:flex-row flex-col  items-center space-y-4">
          {headerLinkNavs}
          <li>
            <Button btName="logout" btFun={logOut} btType="bt-error" />
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
