import moment from 'moment';
import React, { useState } from 'react';
import { Card, Container, Grid, Image, Menu } from 'semantic-ui-react';
import './App.css';
import Carousel from './Carousel';
import GKStat from './GKStat';
import Stats from './Stat';

const picture1 = require('./resources/pic1.jpg');
const picture2 = require('./resources/pic2.jpg');
const picture3 = require('./resources/pic3.jpg');
const profile = require('./resources/profile.jpg');

const currentAge = moment.duration(moment.now() - 1137232800000).years();

const elements = [
  {
    render: () => {
      return (
        <Image src={picture1} />
      );
    },
  },
  {
    render: () => {
      return <Image src={picture2} />;
    },
  },
  {
    render: () => {
      return (
        <Image src={picture3} />
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
  const [id, setId] = useState(document.location.hash.replace('#', '').replace('/', ''));
  return (
    <Grid>
      <Grid.Row>
        <Container style={{ width: '50%' }}>
          <Menu widths={6} stackable fluid>
            <Menu.Item href='#profile' key="profile" active={id === 'profile'} name="Profile" onClick={() => setId('profile')} />
            <Menu.Item href='#highlights' key="highlights" active={id === 'highlights'} name="Highlights" onClick={() => setId('highlights')} />
            <Menu.Item href='#breakaways' key="breakaways" active={id === 'breakaways'} name="Breakaways" onClick={() => setId('breakaways')} />
            <Menu.Item href='#catching' key="catching" active={id === 'catching'} name="Catching" onClick={() => setId('catching')} />
            <Menu.Item href='#goalkicks' key="goalkicks" active={id === 'goalkicks'} name="Goal Kicks" onClick={() => setId('goalkicks')} />
            <Menu.Item href='#punts' key="punts" active={id === 'punts'} name="Punts" onClick={() => setId('punts')} />
          </Menu>
          <Carousel
            elements={elements}
            duration={3000}
            // animation="slide right"
            showNextPrev={false}
            showIndicators
          />
          <Card.Group id='profile' fluid itemsPerRow={2}>
            <Card
              style={{ width: '50%' }}
              image={profile}
              header='Corey Chachere'
              meta={`${currentAge} years old (Born 01/14/2006)`}
              description={Stats}
            />
            <Card
              style={{ width: '44%' }}
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
            style={{ textAlign: 'center' }}
            fluid
            header='Highlights'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <iframe title="Highlights" frameBorder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x7sz239" allowFullScreen allow="autoplay" />
              </div>
            )}
          />
          <Card
            id='breakaways'
            style={{ textAlign: 'center' }}
            fluid
            header='Breakaways'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <iframe title="Breakaways" frameBorder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x7sz1po" allowFullScreen allow="autoplay" />
              </div>
            )}
          />
          <Card
            id='catching'
            style={{ textAlign: 'center' }}
            fluid
            header='Catching'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <iframe title="Catching" frameBorder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x7sz235" allowFullScreen allow="autoplay" />
              </div>
            )}
          />
          <Card
            id='goalkicks'
            style={{ textAlign: 'center' }}
            fluid
            header='Goal Kicks'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <iframe title="Goal Kicks" frameBorder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x7sz23a" allowFullScreen allow="autoplay" />
              </div>
            )}
          />
          <Card
            id='punts'
            style={{ textAlign: 'center' }}
            fluid
            header='Punts'
            description={(
              <div style={{ textAlign: 'center' }} className="videoWrapper">
                <br />
                <iframe title="Punts" frameBorder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x7sz23b" allowFullScreen allow="autoplay" />
              </div>
            )}
          />
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default App;
