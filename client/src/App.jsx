import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SuccessPayment from "./pages/SuccessPayment";

const App = () => {
  const user = false;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist/:category" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<SuccessPayment />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
