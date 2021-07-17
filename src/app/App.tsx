
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {Container} from 'react-bootstrap';

import './App.css';


export const App = () => {

  return (
    <Container style={{padding: "10px"}}>
      <Menu menuButton={<MenuButton  className='btn btn-success'>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label="Open">
            <MenuItem>index.html</MenuItem>
            <MenuItem>example.js</MenuItem>
            <SubMenu label="Styles">
                <MenuItem>about.css</MenuItem>
                <MenuItem>home.css</MenuItem>
                <MenuItem>index.css</MenuItem>
                <SubMenu label="Other Styles">
                  <MenuItem>one.css</MenuItem>
                  <MenuItem>two.css</MenuItem>
                  <MenuItem>three.css</MenuItem>
                </SubMenu>
            </SubMenu>
        </SubMenu>
        <MenuItem>Save</MenuItem>
      </Menu>
    </Container>
  );
}

export default App;
