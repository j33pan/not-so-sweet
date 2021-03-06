import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";
import NSSReceipe from "./pages/NSSReceipePage";
import CC from "./img/egg.jpg";

import {
  Container,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import OutsourceReceipePage from "./pages/OutsourceReceipePage";
import NRDetailPage from "./pages/NRDetailPage";
import OrderPage from "./pages/OrderPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { AccountContext } from "./Account";
import { NotificationProvider } from "./NotificationProvider";
import Notification from "./components/Notification";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${CC})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgb(188, 143, 143, 0.7)",
          backgroundAttachment: "fixed",
          height: "100vh",
        },
      },
    },
    // MuiButton: {
    //   label: {
    //     color: 'floralwhite',
    //   },
    // },
  },
  palette: {
    primary: {
      main: "rgb(188, 143, 143, 0.7)",
      contrastText: "floralwhite",
    },
    background: {
      paper: "rgb(188, 143, 143, 0.3)",
      default: "rgb(255,250,240,0.8)",
    },
    common: {
      white: "floralwhite",
    },
    text: {
      primary: "#603939",
    },
  },
  typography: {
    fontFamily: ["Kanit", "Varela Round"].join(","),
  },
});

function App() {
  const { authenticated, getSession } = React.useContext(AccountContext);
  React.useEffect(() => {
    getSession()
      .then((session) => {
        console.log(session);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authenticated, getSession]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationProvider>
        <BrowserRouter>
          <Notification />
          <NavBar />
          {/* {authenticated ? 'logged in' : 'not logged in'} */}
          <Container style={{ paddingBottom: 200 }}>
            <Switch>
              <Route component={NSSReceipe} path="/not-so-sweet" exact />
              <Route
                component={OutsourceReceipePage}
                path="/not-so-sweet/outsourcereceipe"
              />
              <Route component={LessonPage} path="/not-so-sweet/lesson" />
              <Route component={NSSReceipe} path="/nssreceipe" />
              <Route component={NRDetailPage} path="/not-so-sweet/nssdetail" />
              <Route component={OrderPage} path="/order" />
              <Route component={SignupPage} path="/signup" />
              <Route component={LoginPage} path="/login" />
            </Switch>
          </Container>
        </BrowserRouter>
      </NotificationProvider>
    </MuiThemeProvider>
  );
}

export default App;
