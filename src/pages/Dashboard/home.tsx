import Card from '@mui/material/Card';
import Navbar from '../../components/Navbar'
import AddDialog from '../../components/AddDialog'
import React, { useState } from 'react';
import AddProfile from '../../components/AddProfile';
import SummaryCard from '../../components/SummaryCard';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose =() => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const[anchorEl, setanchorEl] = useState<HTMLElement | null>(null)
  const handleProfileOpen =(event: React.MouseEvent<HTMLElement>) => setanchorEl(event.currentTarget) 
  const handleProfileClose =() => setanchorEl(null);
  const isProfileOpen =Boolean(anchorEl);
  return (
    <Card>
      <Navbar onAddClick = {handleOpen} onProfileClick={handleProfileOpen}/>

      <AddDialog open={isOpen} onClose={handleClose}/>

      <AddProfile open ={isProfileOpen} onClose={handleProfileClose} anchorEl={anchorEl} />
      <SummaryCard />
    </Card>
    
  );
}
