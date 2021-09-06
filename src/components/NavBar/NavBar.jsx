import React from "react";
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
import HomePage from "../HomePage";
import Settings from "../Settings";
import About from "../About";
import "../NavBar/NavBar.css";
import { handleRef } from "@fluentui/react-component-ref";

const NavBar = () => {
  const [handlerElem, setVisible] = React.useState({
    visible: false,
    landingPage: <HomePage />,
  });
 
  
  const handleItemClick = (e, data) => {
    console.log("CLicked :", data.name);
    
     

    setVisible({
      visible: false,
      landingPage:  data.name === "home" ? (
        <HomePage />
      ) : data.name === "settings" ? (
        <Settings />
      ) : data.name === "about" ? (
        <About />
      ) : (
        ""
      )
    });
  };
  return (
    <div className={"extBody"}>
      
       
      <Checkbox
        checked={handlerElem.visible}
        label={{ children: <code>visible</code> }}
        
        onChange={(e, data) => setVisible({ visible: data.checked,
          landingPage : handlerElem.landingPage 
        
        })}
      />

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          // onHide={() => {
          //   setVisible({ visible: false,
          //      landingPage : handlerElem.currentPage
          //   });
          // }}
          vertical
          visible={handlerElem.visible}
          width="thin"
        >
          <Menu.Item as="a" name="home" onClick={handleItemClick}>
            <Icon name="home" />
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
