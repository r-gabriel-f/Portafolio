import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = ["INICIO", "SOBRE MI", "SERVICIOS", "CONTACTOS"];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScrollToSection = (section) => {
    setMobileOpen(false);
    const offset = window.innerWidth >= 600 ? -70 : 0;
    const duration = window.innerWidth >= 600 ? 500 : 0;
    const delay = window.innerWidth >= 600 ? 0 : 300;
    setTimeout(() => {
      window.scrollTo({
        top:
          document.getElementById(section.toLowerCase().replace(' ', '-'))
            .offsetTop + offset,
        behavior: 'smooth',
      });
    }, delay);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center' }}>
              <Link
                to={item.toLowerCase().replace(' ', '-')}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={handleDrawerToggle} // Agregamos el evento onClick para cerrar el drawer
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#25292B' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              mr: 2,
              textAlign: { xs: 'center', sm: 'left' },
              my: { xs: 2, sm: 0 },
            }}
          >
            <ion-icon
              name="code-working-outline"
              id="logo-code"
              style={{
                fontSize: '2rem',
                verticalAlign: 'middle',
                marginRight: '0.5rem',
              }}
            ></ion-icon>
            RG.
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link
                  to={item.toLowerCase().replace(' ', '-')}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link"
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#25292B',
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;