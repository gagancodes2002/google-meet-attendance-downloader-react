import React from 'react';
import {Container,Grid,Header} from 'semantic-ui-react'
import CustomButtons from './Buttons/CustomButtons';
const HomePage = () => {
	return (
		<div>
			
				<Container>
					<style>
						{`
						html,body
						{
							max-height : 6	00px;
							max-width : 450px;
							border : solid white 1px;
							background-color: #252839 !important;
						}

						`}

					</style>
					<Header as='h2' inverted textAlign='center'>
     Home
    </Header>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>

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