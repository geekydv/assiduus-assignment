
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, monthData, ytd) {
  return { name, monthData, ytd };
}

const rows = [
  createData('Sales', '1,194.58', '11,418.29'),
  createData('Advertising', '6,879.02', '9,271.36'),
  createData('Inventory', '4,692.26', '9768.09'),
  createData('Entertainment', '0.00', '0.00'),
  createData('Product', '4,652.10', '2,529.90'),
];
export default function AccountWatchList() {
  return (
    <TableContainer component={Paper} sx={{width: '500px', height: '400px'}}>
      <h4 style={{textAlign:'left', padding: '10px 0 20px 16px',borderBottom: '1px solid #b9b9b9',marginBottom: '0'}}>Account watchlist</h4>
      <Table sx={{ minWidth: 500,[`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    } }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '300px'}}><span style={{color: '#b9b9b9'}}>Account</span></TableCell>
            <TableCell sx={{width: '100px'}} align="left"><span style={{color: '#b9b9b9'}}>This Month</span></TableCell>
            <TableCell sx={{width: '100px'}} align="left"><span style={{color: '#b9b9b9'}}>YTD</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span style={{fontWeight: '700'}}>{row.name}</span>
              </TableCell>
              <TableCell align="left"><span style={{fontWeight: '700'}}>{row.monthData}</span></TableCell>
              <TableCell align="left"><span style={{fontWeight: '700'}}>{row.ytd}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
