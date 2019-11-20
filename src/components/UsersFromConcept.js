import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { usersFromConceptActions } from '../actions';

const styles = {
  container: {
    margin: '20px auto',
    width: '50%'
  },
  header: {
    padding: '24px 24px 12px 24px',
    fontSize: '1.3rem'
  },
  content: {
    padding: '12px 0',
    fontSize: '1rem'
  }
};

const mapStateToProps = ({ usersFromConcept }) => {
  return { usersFromConcept };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...usersFromConceptActions }, dispatch);
};

class UsersFromConcept extends Component {
  state = {
    choices: []
  };

  componentDidMount() {
    this.props.getUsersFromConcepts();
  }

  handleChange = event => {
    this.setState({ alternativeId: event.target.value });
  };

  render() {
    console.log(this);
    const { usersFromConcept } = this.props;

    return (
      <div style={styles.container}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Usuários</FormLabel>
          
          <br />
          
          {usersFromConcept.items.map(item => {
            return (
              <div key={item.pk}>
                <br />
                <b>{item.username}</b>
                <div>
                  {item.subjects.map((subject) => {
                    return (
                      <div key={subject.pk}>
                        <p>Nome: {subject.name}</p>
                        <p>Valor: {subject.value}</p>
                        <p>Indice: {subject.time_index}</p>
                      </div>
                    );
                  })}
                  <span></span>
                </div>
              </div>
            );
          })}
        </FormControl>      
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersFromConcept);

