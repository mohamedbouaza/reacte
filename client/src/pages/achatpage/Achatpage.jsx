import { Link } from "react-router-dom";
import "./achatpage.css"

export default function Achatpage() {
  return (
    <div className="vente">
      <div className="produitTitleContainer">
        <h1 className="produitTitle">Edit Vente</h1>
        <Link to="/newachat">
          <button className="produitAddButton">Create</button>
        </Link>
      </div>

      <div className="produitUpdate">
        <span className="produitUpdateTitle">Edit</span>
        <form className="produitUpdateForm">
          <div className="produitUpdateLeft">
            <div className="produitUpdateItem">
              <label>Facture</label>
              <input
                type="number"
                placeholder="nike"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Date</label>
              <input
                type="date"
                placeholder="14525bf"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Nomber D'article</label>
              <input
                type="number"
                placeholder="annabeck99@gmail.com"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Fornisseur</label>
              <input
                type="text"
                placeholder="67"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Grand Total</label>
              <input
                type="number"
                placeholder="255220"
                className="produitUpdateInput"
              />
            </div>
            <div className="produitUpdateItem">
              <label>Payé</label>
              <select className="produitUpdateInput" name="active" id="">
                <option value="yes">Oui</option>
                <option value="no">Non</option>
              </select>
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
