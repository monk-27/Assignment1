import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
import Tab from './components/Tab';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';






const useStyles = makeStyles({
  table: {
    minWidth: 450,
    
  },
});


function createData(Dept, Access, number, lastupdated, visibility) {
  return { Dept, Access, number, lastupdated, };
}

const rows = [
  createData('Management Team', 'All access', 4, '1 minute ago',<VisibilityIcon/>),
  createData('Procurement Team', 'Restricted access', 8, '1 minute ago'),
  createData('Project Team', 'Restricted access', 16, '1 minute ago'),
  createData('IT Team', 'Restricted access', 4, '1 minute ago'),
  createData('Super Access', 'All access', 1, '1 minute ago'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <><div style = {{paddingTop:'100px',paddingLeft:'8px'}}><Tab/><p>Last Synced 15 mins ago</p></div
    >
    <div>
      
    <TableContainer component={Paper}>
      <Table classDept={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Department/role name</TableCell>
            <TableCell align="right">Access Level</TableCell>
            <TableCell align="right">No. of members</TableCell>
            <TableCell align="right">Last Updated</TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.Dept}>
              <TableCell component="th" scope="row">
                {row.Dept}
              </TableCell>
              {index ===0 &&<TableCell align="right"><p style = {{backgroundColor:'green',borderRadius:'50px'}}>{row.Access}</p></TableCell>}
              {index !==0 &&<TableCell align="right"><p style = {{backgroundColor:'red',borderRadius:'50px'}}>{row.Access}</p></TableCell>}
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.lastupdated}</TableCell>
              <TableCell align="right"><VisibilityIcon/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    
    
    <div style = {{paddingTop:'100px',paddingLeft:'8px'}}><Tab2/></div>
    <div style = {{paddingTop:'100px',paddingLeft:'8px'}}><Tab3/></div>
    <p>Last Synced 15 mins ago</p>
    <div style = {{paddingTop:'40px'}}><Table2/></div>
    <div style = {{paddingTop:'100px',paddingLeft:'8px'}}><Tab2/></div>
    <div style = {{paddingTop:'100px',paddingLeft:'8px'}}><Tab3/></div>
    <p>Last Synced 15 mins ago</p>
    <div style = {{paddingTop:'40px'}}><Table3/></div>
    {/* <SimpleTabs/> */}
    </div>
    </>
  );
          }




// Row.propTypes = {
//   row: PropTypes.shape({
//     Access: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     Dept: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };



