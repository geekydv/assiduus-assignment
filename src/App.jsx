import Sidebar from './Sidebar'
import './App.css'
import TotalCashFlow from './TotalCashFlow'
import LineGraph from './LineGraph'
import AccountWatchList from './AccountWatchList'
import InvoiceBarChart from './InvoiceBarChart'
import TopBar from './TopBar'

function App() {

  return (
    <><TopBar />
    <div style={{ display: 'flex',background: '#F6F7F9'}}>
    <Sidebar />
    <div style={{marginLeft: '40px',display: 'flex', flexWrap: 'wrap', gap: '30px', margin: '40px 0 40px 40px'}}>
      <LineGraph />
      <InvoiceBarChart />
      <TotalCashFlow />
      <AccountWatchList />
    </div>
    </div>
    </>
  )
}

export default App
