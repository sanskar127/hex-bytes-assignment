import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

const Sidebar = ({ children, subHeader }) => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <List
        component="nav"
        aria-label="users sidebar"
        subheader={subHeader}
        sx={{ flexGrow: 1 }}
      >
        {children}
      </List>
      <Divider orientation="vertical" sx={{ height: '100%' }} />
    </Box>
  );
};

export default Sidebar;
