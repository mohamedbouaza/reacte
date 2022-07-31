import "./newproduct.css";



export default function Newproduct() {
  
  return (
    
    <div className="newUser">
      <h1 className="newUserTitle">New Product</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Designation</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Reference</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Categorie</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Quantité</label>
          <input type="number" placeholder="6000" />
        </div>
        <div className="newUserItem">
          <label>Prix D'achat</label>
          <input type="number" placeholder="3 456 78" />
        </div>
        <div className="newUserItem">
          <label>Prix De Vente</label>
          <input type="number" placeholder="2115544548" />
        </div>

        
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
}
