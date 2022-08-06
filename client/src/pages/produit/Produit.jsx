import "./produit.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DeleteIcon from '@mui/icons-material/Delete';
import { produitrows } from "../../DammyData";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Produit() {
  const [data, setdata] = useState(produitrows);
  const handeleDelete = (id) => {
    setdata(data.filter(item => item.id !== id));
  }
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" , width: 70 },
    { field: "designation",headerName: "Designation" , width: 130 },
    { field: "reference", headerName: "Reference", width: 130 },
    { field: "categorie", headerName: "Categorie", width: 130 },
    {
      field: "quantite",
      headerName: "Quantité",
      type: "number",
      width: 90,
    },
    {
      field: "prix_achat",
      headerName: "Prix d'achat",
      type: "number",
      width: 140,
    },
    {
      field: "prix_vente",
      headerName: "Prix de vente ",
      type: "number",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <>
          <Link to={"/produitpage/" + params.row.id}>
            <button className="produitajout">Edit</button>
          </Link>
          <DeleteIcon className="produitdelete" onClick={() => handeleDelete(params.row.id)} />
        </>
      ),
    },
  ];

  return (
    <div className="produit">
      <Link to="/newproduct">
        <button className="newproduitButton">Create</button>
      </Link>
      <div className="produittitre">
        <h3> Produits</h3>
        <div className="iconproduit">
          <QrCode2Icon />
        </div>
      </div>
      <div className="table" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          // checkboxSelection
          rowsPerPageOptions={[5]}
  
        />
      </div>
    </div>
  );
}
