
import { Link } from "react-router-dom";
import "./produitpage.css";

export default function Produitpage() {
  return (
    <div className="produit">
      <div className="produitTitleContainer">
        <h1 className="produitTitle">Edit Produit</h1>
        <Link to="/newproduct">
          <button className="produitAddButton">Create</button>
        </Link>
      </div>

      <div className="produitUpdate">
        <span className="produitUpdateTitle">Edit</span>
        <form className="produitUpdateForm">
          <div className="produitUpdateLeft">
            <div className="produitUpdateItem">
              <label>Designation</label>
              <input
                type="text"
                placeholder="nike"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Reference</label>
              <input
                type="text"
                placeholder="14525bf"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Categorie</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Quantité</label>
              <input
                type="number"
                placeholder="67"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Prix D'achat</label>
              <input
                type="number"
                placeholder="255220"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Prix D'achat</label>
              <input
                type="number"
                placeholder="255220"
                className="produitUpdateInput"
              />
            </div>
          </div>
          <div className="produitUpdateRight">
            <button className="produitUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
