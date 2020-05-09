import { makeStyles } from '@material-ui/core/styles';
import {lightBlue, blueGrey, red, blue, grey, pink, indigo} from '@material-ui/core/colors';

export const pWhite = makeStyles({
  root: {
    color: lightBlue[50],
    fontSize: 24
  }
});

export const h1White = makeStyles({
    root: {
      color: lightBlue[50],
      fontSize: 50
    }
  });

export const linkStyle = makeStyles({
    main: {
      color: lightBlue[500],
      fontSize: 20,
      padding: "30px 30px 30px 30px"
    },
    smallWhite: {
      color: lightBlue[50],
      fontSize: 18,
      padding: "0px 10px 0px 10px",
      flexGrow: 1
    },
    bigWhite: {
      color: lightBlue[50],
      fontSize: 32,
      padding: "0px 10px 0px 10px",
      flexGrow: 1
    }
  });


  export const marginDiv = makeStyles({
    root: {
      margin: '30px 30px 30px 30px'
    }
  });

  export const lineStyle = makeStyles({
    primary: {
      height: '1px',
      backgroundColor: lightBlue[700]
    }
  });

  export const selectStyle = makeStyles({
    primary: {
      fontSize: 18,
      minWidth: '300px'
    }
  });

  export const textFieldStyle = makeStyles({
    small: {
      fontSize: 18,
      minWidth: '200px'
    },
    medium: {
      fontSize: 18,
      minWidth: '400px'
    },
    big: {
      fontSize: 18,
      minWidth: '800px'
    }
  });

  export const buttonStyle = makeStyles({
    profileItems: {
      backgroundColor: blueGrey[400],
      color: blueGrey[50]
    },
    primary: {
      backgroundColor: blueGrey[500],
      color: blueGrey[50],
      minHeight: '40px',
      margin: '5px'
    },
    secondary:{
      backgroundColor: blue[300],
      color: blue[50],
      minHeight: '40px',
      margin: '5px'
    },
    cancel:{
      backgroundColor: grey[500],
      color: grey[50],
      minHeight: '40px',
      margin: '5px'
    },
    delete:{
      backgroundColor: red[400],
      color: red[50],
      minHeight: '40px',
      margin: '5px'
    }
  });


  export const loginStyle = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: blue[300],
      color: blue[50],
      fontSize: 18
    },
    title:{
      color: blueGrey[500],
      fontSize: 45
    },
    link:{
      color: blue[300],
      fontSize: 14
    }
  }));

  export const iconStyle = makeStyles({
    facebook: {
      color: blue[800]
    },
    instagram:{
      color: pink[200]
    },
    linkedin:{
      color: indigo[500]
    },
    web:{
      color: blueGrey[500]
    },
    twitter:{
      color: blue[500]
    },
    youtube:{
      color: red[500]
    }
  });