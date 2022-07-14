import React, { ReactElement, FC } from "react";
import {BottomNavigation ,BottomNavigationAction,Box,Container,Typography} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
interface HeaderProps  {
    title: String,
    pictureUrl:String
}
 const Footer =  ({ title,pictureUrl }: HeaderProps)=> {
    const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
    return (
        <Box
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    //     <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
    //     <BottomNavigationAction
    //       label="Recents"
    //       value="recents"
    //       icon={<RestoreIcon />}
    //     />
    //     <BottomNavigationAction
    //       label="Favorites"
    //       value="favorites"
    //       icon={<FavoriteIcon />}
    //     />
    //     <BottomNavigationAction
    //       label="Nearby"
    //       value="nearby"
    //       icon={<LocationOnIcon />}
    //     />
    //     <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    //   </BottomNavigation>
    );
};
export default Footer;
