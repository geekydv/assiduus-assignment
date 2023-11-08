import {useState} from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';

export default function TopBar() {
  const [searchBarValue, setSearchBarValue] = useState('');

  return (
    <div style={{display: 'flex',width: '100%', height: '50px', justifyContent: 'space-between', padding: '40px 20px 20px 20px', margin: '0', borderBottom: '1px solid #d7d7d7'}}>
      <img alt="assiduus-logo" src='./Assiduus_TM__logo.png' style={{height: '30px'}} />
            <div style={{position: 'relative', right: '40px', display: 'flex', alignItems: 'start'}}>
              <TextField
                id="search"
                type="search"
                sx={{ width: 350, height: 30, paddingRight: '20px', border: 'none' }}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{position: 'relative', bottom: '4px'}} />
                    </InputAdornment>
                  ),
                  disableUnderline: true
                }}
                InputBaseProps={{
                  sx: { height: 30},
                }}
                inputProps={{ style: {paddingTop: '7px', paddingBottom: '7px'} }}
                value={searchBarValue}
                onChange={(event) => {
                  setSearchBarValue(event.target.value);
                }}
              />
              <NotificationsIcon sx={{color: '#000', height: '40px', cursor: 'pointer'}} />
              <span style={{cursor: 'pointer'}}>
                <Person2Icon sx={{color: '#000', height: '40px', paddingLeft: '20px'}} />
                <ArrowDropDownIcon sx={{color: '#000', height: '40px', paddingLeft: '2px'}}/>
              </span>
              <Button onClick={() => location.reload()}>Refresh</Button>
            </div>
    </div>
  )
}
