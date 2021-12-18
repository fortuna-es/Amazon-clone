import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import Order from "./Order";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51K0ZUDCUQzcA8DOU4Au81fl5e4lSHDNhsYO0wrSm7yf0oyi1V4uIDcBG0hRPskyQCPHvvoBCBb9JqCr6yEFkExoq00Ic3Jcfue"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/payment" element={<Elements  stripe={promise}>
              <Payment />
              </Elements>}>
          
          </Route>

          {/* <Route exact path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>} /> */}

          <Route path="/" element={<Home />}></Route>
        </Routes>
       
      </div>
    </Router>
    
  );
}

export default App;
