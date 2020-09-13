import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { device } from './helpers/device';
import colors from './helpers/colors';

const Container = styled(Grid)`
@media ${device.mobileS} {  
    padding: 40px;
  }

  @media ${device.laptop} {  
    padding: 80px;
  }
`;

const Button = styled.button`
  width: auto;
  background-color: ${colors.primary};
  color: white;
  margin: 36px 0px;
  padding: 20px 40px;
  border-radius: 60px;
  border-color: ${colors.primary};
  font-size: 16px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container container spacing={12} style={{ alignItems: 'center' }}>
          <Grid item xs={12} md={7}>
            <div className="intro-text">
              <div>Hello</div>
              <div><a className="weight-extraBold" style={{ color: colors.primary }}>I'm Fahsai</a>, Front-End </div>
              <div >Developer</div>
            </div>
            <Button>Get Started</Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <img style={{ width: '100%' }} alt="dev" src="https://static.dribbble.com/users/942794/screenshots/12233236/dribbble.png" />
          </Grid>
        </Container>

      </header>
      <body>
        <p>
          Test
        </p>
      </body>
    </div>
  );
}

export default App;
