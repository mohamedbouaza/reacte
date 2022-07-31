import "./newvente.css"

export default function Newvente() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Vente</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Facture</label>
          <input type="number" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <input type="date" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Nomber D'article</label>
          <input type="number" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Fornisseur</label>
          <input type="number" placeholder="6000" />
        </div>
        <div className="newUserItem">
          <label>Grand Total</label>
          <input type="number" placeholder="3 456 78" />
        </div>
        <div className="newUserItem">
          <label>Payé</label>
          <select className="venteUpdateInput" name="active" id="">
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
}
