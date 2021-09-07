import React from "react";
import { Header, Image, Label, Grid } from "semantic-ui-react";
import logoImage from "./ICON.png";
import Bar from "../Checkbox/Bar";
import "./BodyHeader.css";
const BodyHeader = ({ headerVisible, headerCallback }) => {
  return (
    <div>
      <Grid columns="3">
        <Grid.Column width={2}>
          <Bar parentCallback={headerCallback} setStatus={headerVisible} />
        </Grid.Column>
        <Grid.Column width={14}>
          <Header
            className="logoHeader"
            textAlign="center"
            size="large"
            style={{ color: "#FCECDD" }}
            as="h2"
          >
            Google Meet Attendance Downloader
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default BodyHeader;
