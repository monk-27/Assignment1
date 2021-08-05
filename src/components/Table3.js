import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(Dept, Access, summary, lastupdated,) {
  return {Dept, Access, summary, lastupdated,
    history: [
      { access: 'All access(can access all items)', permission: 'view items in access' },
      { access: 'Restricted access(can access only assigned or created items)', permission: 'edit items in access'},
      {permission: 'create items in access'},
      {permission: 'delete items in access'},
    ],
    
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Dept}
        </TableCell>
        <TableCell align="right">{row.Access}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
              <TableCell align="right">{row.lastupdated}</TableCell>
              <TableCell align="right"><ToggleOnIcon/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                All Aspects
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Access Control</TableCell>
                    <TableCell>Permissions</TableCell>
                    {/* <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.access}>
                      <TableCell component="th" scope="row">
                        {historyRow.access}
                      </TableCell>
                      <TableCell>{historyRow.permission}</TableCell>
                      {/* <TableCell align="right">{historyRow.amount}</TableCell> */}
                      {/* <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
    createData('Budget', 'All access', 'view|create|edit|delete', '1 minute ago',),
    createData('Bidding', 'No access', '-', '1 minute ago'),
    createData('Vendor Portal', 'Restricted access', 'view|create', '1 minute ago'),
    createData('Purchase Order/Work Order', 'Restricted access', 'view|create', '1 minute ago'),
    createData('Organisational Profile', 'All access', 'view|create|edit|delete', '1 minute ago'),
    createData('Permission & Access control', 'No access', '-', '1 minute ago'),
  ];
  
  export default function CollapsibleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Department/role name</TableCell>
              <TableCell align="right">Access Level</TableCell>
              <TableCell align="right">Summary</TableCell>
              <TableCell align="right">Last Updated</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.Dept} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }