import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../state/app-context";

export const DesktopNavItemComponent = (props) => {
  const { backgroundClr } = useAppContext();
  const { link } = props;
  return (
    <Link
      style={{
        color: backgroundClr,
      }}
      to={link.href}
      className="hover:text-gray-200 transition duration-200">
      {link.name}
    </Link>
  );
};

export const MobileNavItemComponent = (props) => {
  const { link } = props;
  return (
    <Link
      to={link.href}
      className="block py-2 px-2 rounded hover:bg-blue-500 transition duration-200">
      {link.name}
    </Link>
  );
};
