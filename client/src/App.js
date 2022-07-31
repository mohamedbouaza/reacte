import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Produit from "./pages/produit/Produit.jsx";
import Achat from "./pages/achats/Achat.jsx";
import Vente from "./pages/vente/Vente.jsx";
import Produitpage from "./pages/produitpage/Produitpage";
import Newproduct from "./pages/newproduct/Newproduct";
import Ventepage from "./pages/ventepage/Ventepage.jsx";
import Newvente from "./pages/newvente/Newvente.jsx"
import Achatpage from "./pages/achatpage/Achatpage";
import Newvachat from "./pages/newachat/Newachat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = true;
  return (
    <div>
      <Topbar />
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="product/*" element={<Produit />} />
            <Route path="/achat" element={<Achat />} />
            <Route path="/vente" element={<Vente />} />
            <Route path="/produitpage/:produitID" element={<Produitpage />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/ventepage/:venteID" element={<Ventepage />} />
            <Route path="/newvente" element={<Newvente />} />
            <Route path="/achatpage/:achatID" element={<Achatpage />} />
            <Route path="/newachat" element={<Newvachat />} />
            <Route path="/login" element= {user ? <Navigate to="/" /> : <Login />}/>
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
