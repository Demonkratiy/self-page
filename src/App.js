import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { PersonCard, HeaderMenu } from './components'

import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <Container>
      <HeaderMenu />
      <Segment attached='bottom'>
        <PersonCard />
      </Segment>
    </Container>
  );
}

export default App;
