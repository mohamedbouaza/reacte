import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "react-router-dom";
export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            <div className="tableau">
              <DashboardIcon />
            </div>
            Tableau de bord
          </h3>
          <ul className="sidebarListe">
            <Link to="/" className="Link">
            <li className="listitem active">
              <LineStyleIcon />
              Home
              </li>
              </Link>
            <Link to="product/*" className="Link">
              <li className="listitem">
                <QrCode2Icon />
                Produits
              </li>
            </Link>
            <Link to="/achat" className="Link">
              <li className="listitem">
                <ShoppingCartSharpIcon />
                Achats
              </li>
            </Link>
            <Link to="/vente" className="Link">
              <li className="listitem">
                <MonetizationOnIcon />
                Ventes
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
