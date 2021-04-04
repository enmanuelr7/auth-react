import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard.js"
import Login from "./components/Login.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
                  <PublicRoute path="/signup" component={Signup} />
                  <PublicRoute path="/login" component={Login} />
                  <PublicRoute path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
