import React, { useEffect } from "react";
import {
  Container,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import HomePage from "../Homepage/HomePage";
import Settings from "../Settings/Settings";
import About from "../About/About";
import "../NavBar/NavBar.css";
import Bar from "../Checkbox/Bar";
import BodyHeader from "../Header/BodyHeader";
import logoImage from '../Header/ICON.png';

const NavBar = () => {
  const [handlerElem, setVisible] = React.useState({
    visible: false,
    landingPage: <HomePage />,
  });
  const callback = (childState) => {
    console.log("ChildState : " + childState.active);
    setVisible({
      visible: childState.active ? false : true,
      landingPage: handlerElem.landingPage,
    });
  };
  useEffect(() => {}, []);

  const handleItemClick = (e, data) => {
    console.log("CLicked :", data.name);

    setVisible({
      visible: false,
      landingPage:
        data.name === "home" ? (
          <HomePage />
        ) : data.name === "settings" ? (
          <Settings />
        ) : data.name === "about" ? (
          <About />
        ) : (
          ""
        ),
    });
  };
  return (
    <div className={"extBody"}>
      {/* <Checkbox
        checked={handlerElem.visible}
        label={{ children: <code>visible</code> }}
        
        onChange={(e, data) => setVisible({ visible: data.checked,
          landingPage : handlerElem.landingPage 
        
        })}
      /> */}
      <BodyHeader
      headerVisible = {handlerElem.visible}
      headerCallback = {callback}
      />
      {/* <Bar setStatus={handlerElem.visible} parentCallback={callback} /> */}

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          // onHide={() => {
          //   setVisible({ visible: false,
          //      landingPage : handlerElem.landingPage
          //   });
          // }}
          vertical
          visible={handlerElem.visible}
          width="thin"
        >
          <Menu.Item   as="a" name="home" onClick={handleItemClick}  >
            <Container textAlign >
            <img style={{height : '50px'}} src={logoImage} alt='logo'/>
              </Container>
           
            Home
          </Menu.Item>
          <Menu.Item as="a" name="settings" onClick={handleItemClick}>
            <Icon name="settings" />
            Settings
          </Menu.Item>
          <Menu.Item as="a" name="about" onClick={handleItemClick}>
            <Icon name="help" />
            Help
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={handlerElem.visible}>
          {handlerElem.landingPage}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default NavBar;
