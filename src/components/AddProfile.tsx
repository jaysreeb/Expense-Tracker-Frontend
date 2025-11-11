import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';

type AddProfileProps ={
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement|null;
}
export default function AddProfile({open, onClose, anchorEl}: AddProfileProps){
  const handleProfileClick =() =>{
    console.log("Profile Clicked");
  }
  const handleAccountClick =() =>{
    console.log("Account Details");
  }
  const navigate =useNavigate();
  const handleLogout =() => {
    localStorage.removeItem("token");
    navigate('/login');

  }
  return (
    <div>
      <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleAccountClick}>My Account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
      
    </div>
  )
}
