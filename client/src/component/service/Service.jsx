import "./service.css";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div className="service">
      <div className="service1">
        <div className="serviceitem">
          <span className="title">
            Article
            <div className="tuto">
              <QrCode2Icon />
            </div>
          </span>
          <div className="number">05</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">
              <Link to="product/*" className="Link">
                Plus d'information
              </Link>
            </div>
          </div>
        </div>
        <div className="serviceitem">
          <span className="title">
            Client
            <div className="tuto">
              <PersonAddIcon />
            </div>
          </span>
          <div className="number">03</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">Plus d'information</div>
          </div>
        </div>
        <div className="serviceitem">
          <span className="title">
            Fornisseur
            <div className="tuto">
              <GroupIcon />
            </div>
          </span>
          <div className="number">06</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">Plus d'information</div>
          </div>
        </div>
      </div>
      <div className="service2">
        <div className="serviceitem">
          <span className="title">
            Achat
            <div className="tuto">
              <ShoppingCartIcon />
            </div>
          </span>
          <div className="number">01</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">
              <Link to="/achat" className="Link">
                {" "}
                Plus d'information
              </Link>
            </div>
          </div>
        </div>
        <div className="serviceitem">
          <span className="title">
            Vente
            <div className="tuto">
              <MonetizationOnIcon />
            </div>
          </span>
          <div className="number">07</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">
              <Link to="/vente" className="Link">
                Plus d'information
              </Link>
            </div>
          </div>
        </div>
        <div className="serviceitem">
          <span className="title">
            Utilisateur
            <div className="tuto">
              <PersonIcon />
            </div>
          </span>
          <div className="number">03</div>
          <div className="info">
            <div className="info1">
              <ArrowCircleRightIcon />
            </div>
            <div className="flesh">Plus d'information</div>
          </div>
        </div>
      </div>
    </div>
  );
}
