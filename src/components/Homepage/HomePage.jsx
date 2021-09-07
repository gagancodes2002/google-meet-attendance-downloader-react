import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

import CustomButtons from "../Buttons/CustomButtons";
import SubHeader from "./SubHeader";

const HomePage = () => {
  return (
    <div>
      <Container>
        <SubHeader/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <p>
                <span>Four</span>
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p>
                <span>Eight</span>
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>
                <span>Four</span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
