import React from 'react';
import {Container,Grid,Header} from 'semantic-ui-react'
 
import CustomButtons from './Buttons/CustomButtons';
 
const HomePage = () => {
	return (
		<div >
			
				<Container>
					 
					<Header as='h2' inverted textAlign='center' color=''>
     Google Meet Attendance Downloader
    </Header>
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