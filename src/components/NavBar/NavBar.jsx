import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import HomePage from '../HomePage';
import Settings from '../Settings';
import About from '../About';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home', 
			activeItemComp : <HomePage/>
}

  handleItemClick = (e, { name }) =>{ 
	switch (name) {
		case 'home':
			this.setState({ activeItem: name , activeItemComp : <HomePage/>});
			break;
			case 'settings':
			this.setState({ activeItem: name , activeItemComp : <Settings/>});
			break;
			case 'about':
			this.setState({ activeItem: name , activeItemComp : <About/>});
			break;

		 
	
		default:
			break;
	}
	
	
	
	
		

}

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'

            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='settings'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
           {this.state.activeItemComp}

        </Segment>
      </div>
    )
  }
}