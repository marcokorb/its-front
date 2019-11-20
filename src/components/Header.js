import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { userActions } from '../actions';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const sections = [
  'Questões',
  'Consulta 1',
  'Consulta 2',
  'Consulta 3'
];

function Header(props) {

  const classes = useStyles();

  const [name, setName] = useState(props.user.username);

  const onChange = (event) => {
    setName(event.target.value);
  };

  const onClick = () => {
    props.setUser(name);
  }

  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <Button size="small"></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
                    Analytics
        </Typography>
        <TextField
          id="standard-name"
          value={name}
          label="Nome"
          margin="normal"
          onChange={onChange}
        />
        <Button variant="outlined" size="small" onClick={onClick}>
                    Salvar
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link
          color="inherit"
          to="/questions"
          variant="body2"
          className={classes.toolbarLink}
        >
                    Questões
        </Link>

        <Link
          color="inherit"
          to="/concepts"
          variant="body2"
          className={classes.toolbarLink}
        >
                    Conceitos
        </Link>

        <Link
          color="inherit"
          to="/users_from_concepts"
          variant="body2"
          className={classes.toolbarLink}
        >
                    Usuários
        </Link>

      </Toolbar>
    </header>
  );
}

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...userActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

/*<Link
color="inherit"
to="/user_concepts"
variant="body2"
className={classes.toolbarLink}
>
          Consulta 2
</Link>*/