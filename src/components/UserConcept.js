import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { userConceptActions } from '../actions';

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

const mapStateToProps = ({ userConcept }) => {
  return { userConcept };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...userConceptActions }, dispatch);
};

class UserConcept extends Component {
  state = {
    choices: []
  };

  componentDidMount() {
    this.props.getUserConcepts();
  }

  handleChange = event => {
    this.setState({ alternativeId: event.target.value });
  };

  render() {
    const { userConcept } = this.props;

    return (
      <div style={styles.container}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Conceitos</FormLabel>
          <RadioGroup
            aria-label="Alternatives"
            name="alternatives"
            value={this.state.alternativeId}
            onChange={this.handleChange}
          >
            {userConcept.items.map(item => {
              return (
                <FormControlLabel
                  key={item.pk}
                  value={item.pk}
                  control={<Radio />}
                  label={`${item.content}`}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={this.answerQuestion}
        >
          Primary
        </Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserConcept);
