/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import moment from 'moment';
import React, { useState, useEffect } from 'react';
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

function App() {
  const [landScape, setLandScape] = useState(isLandscape());
  window.addEventListener('resize', () => {
    setLandScape(isLandscape());
  });
  const [id, setId] = useState(document.location.hash.replace('#', '').replace('/', ''));
  return (
    <Grid style={{ width: '100%', paddingLeft: isMobile() ? '25px' : '0px', backgroundColor: '#034694' }}>
      <Grid.Row>
        <Container style={{ width: !isMobile() ? '60%' : '100%' }}>
          <Menu widths={7} stackable fluid>
            <Menu.Item href='#profile' key="profile" active={id === 'profile'} name="Profile" onClick={() => setId('profile')} />
            <Menu.Item href='#highlights' key="highlights" active={id === 'highlights'} name="Highlights" onClick={() => setId('highlights')} />
            <Menu.Item href='#training' key="training" active={id === 'training'} name="Training" onClick={() => setId('training')} />
            <Menu.Item href='#breakaways' key="breakaways" active={id === 'breakaways'} name="Breakaways" onClick={() => setId('breakaways')} />
            <Menu.Item href='#catching' key="catching" active={id === 'catching'} name="Catching" onClick={() => setId('catching')} />
            <Menu.Item href='#goalkicks' key="goalkicks" active={id === 'goalkicks'} name="Goal Kicks" onClick={() => setId('goalkicks')} />
            <Menu.Item href='#punts' key="punts" active={id === 'punts'} name="Punts" onClick={() => setId('punts')} />
          </Menu>
          <Carousel
            ls={landScape}
            elements={elements(landScape)}
            duration={3000}
            // animation="slide right"
            showNextPrev={false}
            showIndicators
          />
          <Card.Group id='profile' fluid itemsPerRow={isMobile() ? 1 : 2}>
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
          </Card.Group>
          <Card
            id='highlights'
            style={{ textAlign: 'center', display: 'flex', backgroundColor: '#d1d3d4' }}
            fluid
            header='Spring 2020 Highlights'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <Video src="https://www.dailymotion.com/embed/video/x7uu81w?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7uu81v?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7uu81z?queue-enable=false" />
                <br />
                <Video src="https://www.dailymotion.com/embed/video/x7uu81x?queue-enable=false" />
                <br />
                <Video src="https://www.dailymotion.com/embed/video/x7uu81y?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7sz1po?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7sz235?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7sz23a?queue-enable=false" />
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
                <Video src="https://www.dailymotion.com/embed/video/x7sz23b?queue-enable=false" />
              </div>
            )}
          />
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default App;