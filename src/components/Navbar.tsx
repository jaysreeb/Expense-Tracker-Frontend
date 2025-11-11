import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Stack from '@mui/material/Stack';
import type React from "react";

type NavbarProps ={
  onAddClick : () => void;
  onProfileClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Navbar({onAddClick, onProfileClick}: NavbarProps) {
  return (
    <Box display="flex" justifyContent={"space-between"} alignItems={"center"} px={4} py={2} boxShadow={2}>
      <Typography variant="h5" fontWeight="bold">
        Spendly
      </Typography>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
      <IconButton  aria-label="Add expense Button">
        < AddCircleRoundedIcon fontSize="large" color="primary" onClick ={onAddClick}/>
      </IconButton>
      <IconButton aria-label="User Profile" size="large" onClick={onProfileClick}>
        <AccountCircleIcon fontSize="large" color="primary" />
      </IconButton>
      </Stack>
    </Box>
  );
}

