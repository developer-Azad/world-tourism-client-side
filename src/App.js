
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/HeadSection/Footer/Footer';
import Header from './components/HeadSection/Header/Header';
import AddNewService from './components/MainPages/AllServices/AddNewService/AddNewService';
import Home from './components/MainPages/Home/Home';
import MyOrders from './components/MainPages/OrderSection/MyOrders/MyOrders';
import PlaceOrder from './components/MainPages/OrderSection/PlaceOrder/PlaceOrder'
import Login from './components/Resistration/Login/Login';
import PrivateRoute from './components/Resistration/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addNewService">
          <AddNewService></AddNewService>
          </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/placeOrder/:orderId">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route pate="/myorders">
          <MyOrders></MyOrders>
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
