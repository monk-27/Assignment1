import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';


const useStyles = makeStyles({
  table: {
    minWidth: 450,
    marginTop: '30px'
  },
});


function createData(Dept, Access, summary, lastupdated, visibility) {
  return { Dept, Access, summary, lastupdated, };
}

const rows = [
  createData('Budget', 'All access', 'view|create|edit|delete', '1 minute ago',<ToggleOnIcon/>),
  createData('Bidding', 'No access', '-', '1 minute ago'),
  createData('Vendor Portal', 'Restricted access', 'view|create', '1 minute ago'),
  createData('Purchase Order/Work Order', 'Restricted access', 'view|create', '1 minute ago'),
  createData('Organisational Profile', 'All access', 'view|create|edit|delete', '1 minute ago'),
  createData('Permission & Access control', 'No access', '-', '1 minute ago'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table classDept={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Department/role name</TableCell>
            <TableCell align="right">Access Level</TableCell>
            <TableCell align="right">Summary</TableCell>
            <TableCell align="right">Last Updated</TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.Dept}>
              <TableCell component="th" scope="row">
                {row.Dept}
              </TableCell>
              {index ===0 &&<TableCell align="right"><p style = {{backgroundColor:'green',borderRadius:'50px'}}>{row.Access}</p></TableCell>}
              {index !==0 &&<TableCell align="right"><p style = {{backgroundColor:'red',borderRadius:'50px'}}>{row.Access}</p></TableCell>}
              <TableCell align="right">{row.summary}</TableCell>
              <TableCell align="right">{row.lastupdated}</TableCell>
              <TableCell align="right"><ToggleOnIcon/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }