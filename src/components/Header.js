import { AppBar, Box, Button, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';
import Container from "@mui/material/Container";
import RecyclingIcon from "@mui/icons-material/Recycling";
import * as React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: 90
  },
}));

const pages = [ 'Currencies', 'Trade', 'Orders' ];
const settings = [ 'Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
  const classes = useStyles();
  const [ isLogged, setIsLogged ] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Stack  flexDirection="row" alignItems="center" justifyContent='space-between'>
              <RecyclingIcon />
              <Typography variant="h5" align="center" mr={6}>Hashok</Typography>
              {!isLogged ?
                <Button
                  color="secondary"
                  startIcon={<LoginIcon />}
                  // component={Link}
                  // to="/login"
                >
                  Logowanie
                </Button> :
                <Stack>
                  <Typography>Twoje konto: 300 points</Typography>
                  <Button color="primary" size="large">Leaderboard: </Button>
                </Stack>
              }
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
