import {
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#24A3B5",
    color:"#181818"
  },
  logo:{
    cursor:"pointer"
  }
})

const Topbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <Typography variant="h6" noWrap className={classes.logo}>
          Money Manager
        </Typography>
        <Tooltip title="Profile">
          <IconButton  sx={{ p: 0 }}>
            <Avatar alt="profile" src="" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
