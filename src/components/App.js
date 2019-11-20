import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom';

import Header from './Header';
import Concept from './Concept';
import UserConcept from './UserConcept';
import UsersFromConcept from './UsersFromConcept';
import Question from './Question';

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>                    
          <Route path="/concepts" component={Concept} />
          
          <Route path="/users_from_concepts" component={UsersFromConcept} />
          <Route path="/questions" component={Question} />
        </main>
      </Container>          
    </React.Fragment>
  );
}

// <Route path="/user_concepts" component={UserConcept} />