import React from 'react';
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables() {
  const [mails, setMails] = React.useState(null)

  const classes = useStyles();

  React.useEffect(() => {
    axios.get('http://localhost:4000/list')
      .then(res => {
        setMails(res.data)
      })
  }, [])

 
  return mails !== null ? (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nomor Surat</StyledTableCell>
              <StyledTableCell align="right">Nama</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {mails.map(mail => {
            return (
              <TableRow key={mail.nomor_surat}>
                <TableCell align="center" component="th" scope="mail">
                  {mail.nomor_surat}
                </TableCell>
                <TableCell align="center">{mail.nama}</TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  ) : (
    <div>Loading</div>
  )
}