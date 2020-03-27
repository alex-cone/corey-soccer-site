import React from 'react';
import { Container, Grid, Icon, Image, Menu, Tab, Card } from 'semantic-ui-react';
import Carousel from './Carousel';
import Stats from './Stat';
import GKStat from './GKStat';
import './App.css';
import moment from 'moment';

const picture1 = require('./resources/goalie1.jpg');

const currentAge = moment.duration(moment.now() - 1137232800000).years();
const items = [
  { key: 'profile', active: true, name: 'Corey\'s Profile' },
  { key: 'hightlights', name: 'Highlights' },
  { key: 'distribution', name: 'Distribution' },
];

const picItem = [
  { key: '1', active: true, content: <Icon style={{ opacity: '1!important' }} name='dot circle' /> },
  { key: '2', content: <Icon name='circle outline' /> },
  { key: '3', content: <Icon name='circle outline' /> },
];

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
      return <Image src={picture1} />;
    },
  },
  {
    render: () => {
      return (
        <Image src={picture1} />
      );
    },
  },
];

function App() {
  return (
    <Grid>
      <Grid.Row>
        <Container style={{ width: '50%' }}>
          <Menu widths={3} stackable fluid items={items} />
          <Carousel
            elements={elements}
            duration={10000}
            // animation="slide right"
            showNextPrev={false}
            showIndicators
          />
          <Card.Group style={{ height: '10px' }} fluid itemsPerRow={2}>
            <Card
              style={{ width: '50%' }}
              image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
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
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default App;
