/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import ReactGA from 'react-ga';
import moment from 'moment';
import React, { useState } from 'react';
import { Card, Container, Grid, Image, Menu } from 'semantic-ui-react';
import './App.css';
import Carousel from './Carousel';
import GKStat from './GKStat';
import Stats from './Stat';
import { isMobile, isLandscape } from './Utils';
import Video from './Video';

const picture0 = require('./resources/diving_pic.jpg');
const picture1 = require('./resources/pic1.jpg');
const picture2 = require('./resources/pic2.jpg');
const picture3 = require('./resources/pic3.jpg');
const profile = require('./resources/profile.jpg');

const currentAge = moment.duration(moment.now() - 1137232800000).years();
const elements = (landScape) => [
  {
    render: () => {
      return (
        <Image style={{ paddingTop: isMobile() ? (landScape ? '2px' : '7px') : '1%' }} src={picture0} />
      );
    },
  },
  {
    render: () => {
      return (
        <Image style={{ paddingTop: isMobile() ? (landScape ? '30px' : '25px') : '6%' }} src={picture1} />
      );
    },
  },
  {
    render: () => {
      return <Image style={{ paddingTop: isMobile() ? (landScape ? '30px' : '25px') : '6%' }} src={picture2} />;
    },
  },
  {
    render: () => {
      return (
        <Image style={{ paddingTop: isMobile() ? (landScape ? '30px' : '25px') : '6%' }} src={picture3} />
      );
    },
  },
];
// Jump to hash id
if (document.location.hash) {
  const id = document.location.hash.replace('#', '').replace('/', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
}

ReactGA.initialize(process.env.REACT_APP_GA_CODE);
ReactGA.pageview(window.location.pathname + window.location.hash);

function App() {
  const [landScape, setLandScape] = useState(isLandscape());
  window.addEventListener('resize', () => {
    setLandScape(isLandscape());
  });
  const [id, setId] = useState(document.location.hash.replace('#', '').replace('/', ''));
  const changeId = (key) => {
    ReactGA.event({
      category: 'Home',
      action: `Clicked on ${key}`,
    });
    setId(key);
  };
  return (
    <div style={{ width: '100%', backgroundColor: '#034694' }}>
      <Grid style={{ width: '100%', paddingLeft: isMobile() ? '25px' : '0px', backgroundColor: '#034694' }}>
        <Grid.Row>
          <Container style={{ justifyContent: 'center', width: !isMobile() ? '60%' : '100%' }}>
            <Menu widths={7} stackable fluid>
              <Menu.Item href='#profile' key="profile" active={id === 'profile'} name="Profile" onClick={() => changeId('profile')} />
              <Menu.Item href='#highlights' key="highlights" active={id === 'highlights'} name="Highlights" onClick={() => changeId('highlights')} />
              <Menu.Item href='#training' key="training" active={id === 'training'} name="Training" onClick={() => changeId('training')} />
              <Menu.Item href='#breakaways' key="breakaways" active={id === 'breakaways'} name="Breakaways" onClick={() => changeId('breakaways')} />
              <Menu.Item href='#catching' key="catching" active={id === 'catching'} name="Catching" onClick={() => changeId('catching')} />
              <Menu.Item href='#goalkicks' key="goalkicks" active={id === 'goalkicks'} name="Goal Kicks" onClick={() => changeId('goalkicks')} />
              <Menu.Item href='#punts' key="punts" active={id === 'punts'} name="Punts" onClick={() => changeId('punts')} />
            </Menu>
            <Carousel
              ls={landScape}
              elements={elements(landScape)}
              duration={3000}
              // animation="slide right"
              showNextPrev={false}
              showIndicators
            />
            <Card
              style={{ display: 'flex', textAlign: 'center', width: !isMobile() ? '50%' : '100%', backgroundColor: '#d1d3d4', marginLeft: !isMobile() ? '25%' : '0%' }}
              image={profile}
              header='Corey Chachere'
              meta={`${currentAge} years old (Born 01/14/2006)`}
              description={Stats}
            />
            {/* <Card.Group id='profile' fluid itemsPerRow={isMobile() ? 1 : 2}>
              <Card
                style={{ display: 'flex', backgroundColor: '#d1d3d4' }}
                image={profile}
                header='Corey Chachere'
                meta={`${currentAge} years old (Born 01/14/2006)`}
                description={Stats}
              />
              <Card
                style={{ display: 'flex', backgroundColor: '#d1d3d4' }}
                header='Goalkeeper Stats'
                meta={(
                  <div>
                    Fall 2019 Season
                    <br />
                    <br />
                  </div>
                )}
                description={GKStat}
              />
            </Card.Group> */}
            <Card
              id='highlights'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='2021 Highlights'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/D6mdpzXy_Ww" />
                </div>
              )}
            />
            <Card
              id='highlights'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Spring 2020 Highlights'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/y55VAIfPI40" />
                </div>
              )}
            />
            <Card
              id='highlights'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Fall 2019 Highlights'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/WSEo6R2gLjs" />
                </div>
              )}
            />
            <Card
              id='training'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Summer 2020 Training'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/25-Jy1hAgh4 " />
                  <br />
                  <Video src="https://www.youtube.com/embed/osjY5Q49RQY" />
                  <br />
                  <Video src="https://www.youtube.com/embed/1ZqvKQ2v74M" />
                </div>
              )}
            />
            <Card
              id='breakaways'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Breakaways'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/Kp22IpuXCpc" />
                </div>
              )}
            />
            <Card
              id='catching'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Catching'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/7O0lVZwW9D0" />
                </div>
              )}
            />
            <Card
              id='goalkicks'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Goal Kicks'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/wClLa3PK6ws" />
                </div>
              )}
            />
            <Card
              id='punts'
              style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
              fluid
              header='Punts'
              description={(
                <div style={{ textAlign: 'center' }} className="videoWrapper">
                  <br />
                  <Video src="https://www.youtube.com/embed/FNsxpVF7ISY" />
                </div>
              )}
            />
          </Container>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
