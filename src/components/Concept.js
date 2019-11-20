import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { conceptActions } from '../actions';

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

const mapStateToProps = ({ concept }) => {
  return { concept };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...conceptActions }, dispatch);
};

class Concept extends Component {
  state = {
    checkedItems: [],
    control: {}
  };

  componentDidMount() {
    this.props.getConcepts();
  }

  handleChange = (event,checked) => {
    this.props.toggleConcept(event.target.value, checked);
  };

  render() {
    const { concept } = this.props;

    return (
      <div style={styles.container}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Conceitos</FormLabel>
          {concept.items.map(item => {
            return (
              <FormControlLabel key={item.pk}
                control={
                  <Checkbox
                    checked={concept.checkedItems.indexOf(`${item.pk}`) !== -1}
                    onChange={this.handleChange}
                    value={item.pk}
                    color="primary"
                  />
                }
                label={item.content}
              />
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
)(Concept);
