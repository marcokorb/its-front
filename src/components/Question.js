import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { questionActions } from '../actions';

const styles = {
  container: {
    margin: '20px auto',
    width: '50%'
  },
  header: {
    padding: '24px 24px 12px 24px',
    fontSize: '1.3rem'
  }
  ,
  content: {
    padding: '12px 0',
    fontSize: '1rem'
  }
}

const mapStateToProps = ({ question }) => {
  return { question };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...questionActions}, dispatch);
}


class Question extends Component {

  state = {
    alternativeId: null
  };

  componentDidMount() {
    this.props.getQuestion();
  }

  answerQuestion = () => {

    this.props.answerQuestion({
      questionId: this.props.question.pk,
      alternativeId: this.state.alternativeId      
    });
  }

  handleChange = (event) => {
    this.setState({alternativeId: event.target.value});
  }

  renderQuestion = () => {

    const { question } = this.props;

    return (
      <div>
        <FormControl component="fieldset">          
          <FormLabel component="legend">QUESTÃO {question.number}</FormLabel>
          <div style={styles.content}>{question.content}</div>
          
          <RadioGroup
            aria-label="Alternatives"
            name="alternatives"
            value={`${this.state.alternativeId}`}
            onChange={this.handleChange}
          >
            {question.alternatives.map(alternative => {
              return(
                <FormControlLabel
                  key={alternative.pk}
                  value={`${alternative.pk}`}
                  control={<Radio />}
                  label={`${alternative.content}${alternative.status ? '(Certa)' : ''}`}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={this.answerQuestion}>
          Enviar
        </Button>
      </div>
    );
  }

  render() {

    const { question } = this.props;

    return(
      <div style={styles.container}>
        {!!question ? this.renderQuestion() : 'Todas as questões foram realizadas'}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
