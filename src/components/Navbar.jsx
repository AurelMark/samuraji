import React, { useState } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [urls] = useState([
    { url: "dom", path: "/" },
    { url: "aktualności", path: "/news" },
    { url: "ustawienia", path: "/settings" },
  ]);

  const history = useHistory();

  const redirectUrl = (e) => {
    history.push(e.path);
  };

  return (
    <Menu theme="dark" mode="horizontal">
      {urls.map((el) => (
        <Menu.Item onClick={() => redirectUrl(el)} key={el.url}>{`${el.url
          .substring(0, 1)
          .toLocaleUpperCase()}${el.url.substring(1)}`}</Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
