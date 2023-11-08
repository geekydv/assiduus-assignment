import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Sidebar() {
const [activeItem, setActiveItem] = useState('Dashboard');

  const handleListItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="sidebar-container" style={{height: '100vh', width: '240px', background: '#fff'}}>
    <div>
        <List sx={{paddingTop: '0'}}>
        <ListItem  sx={activeItem === 'Dashboard' ? { backgroundColor: '#47B747', color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Dashboard')}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={activeItem === 'Accounts' ? { backgroundColor: '#47B747',color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Accounts')}>
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary={'Accounts'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={activeItem === 'Payroll' ? { backgroundColor: '#47B747',color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Payroll')}>
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={'Payroll'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={activeItem === 'Reports' ? { backgroundColor: '#47B747',color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Reports')}>
          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={'Reports'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={activeItem === 'Advisor' ? { backgroundColor: '#47B747', color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Advisor')}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={'Advisor'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={activeItem === 'Contacts' ? { backgroundColor: '#47B747',color: '#fff' } : {color: '#000'}}
            onClick={() => handleListItemClick('Contacts')}>
          <ListItemButton>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary={'Contacts'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
    </div>
  )
}
