import React from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "100%",
  },
  form: {
    '& > *': {
      marginBottom: theme.spacing(3),
      width: "100%",
    },
  },
  button: {
    '& > *': {
      width: "100%",   
    },
  },
}));

export default function PaperSheet() {
  React.useEffect(() => {
    axios.get('http://localhost:4000/getLast')
      .then(res => {
        setMail({ number: res.data+1 })
      })
  }, [])

  const classes = useStyles();
  const [mail, setMail] = React.useState({
    nomor_surat: 1,
    nama: '',
  });

  const handleChange = nama => event => {
    setMail({ ...mail, [nama]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:4000/', mail)
      .then(res => console.log(res.data))
  }

  return (
    <>
      <CssBaseline />
        <Container maxWidth="sm">
          <Paper className={classes.root}>
            <form className={classes.form} noValidate autoComplete="off">
              <center><h2>Input Nomor Surat</h2></center>
              <TextField
                id="standard-name"
                label="Nomor Surat"
                value={mail.nomor_surat}
                onChange={handleChange('nomor_surat')}
                margin="normal"
              />
              <TextField
                id="standard-nim"
                label="Nama"
                value={mail.nama}
                onChange={handleChange('nama')}
                margin="normal"
              />
              <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
                Submit
              </Button>
            </form>
          </Paper>
      </Container>
    </>
  );
}