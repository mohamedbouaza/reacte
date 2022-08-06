import "./achat.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { achatrows } from "../../DammyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Produit() {
  const [data, setdata] = useState(achatrows);
  const handeleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };
  const columns: GridColDef[] = [
  {field:"id",headerName:"id",width:40},
    { field: "facture", headerName: "Facture", width: 80 },
    { field: "date", headerName: "Date", type: "date", width: 140 },
    { field: "nbr_article", headerName: "Nombre d'article", width: 140 },
    { field: "fornisseur", headerName: "Fornisseur", width: 140 },
    {
      field: "grand_totale",
      headerName: "Grand Total",
      type: "number",
      width: 100,
    },
    {
      field: "paye",
      headerName: "Payé",
      type: "number",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={"/achatpage/" + params.row.id}>
            <button className="achatajout">Edit</button>
          </Link>
          <DeleteIcon
            className="achatdelete"
            onClick={() => handeleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="achat">
      <Link to="/newachat">
        <button className="newachatButton">Create</button>
      </Link>
      <div className="achattitle">
        <h3>Achats</h3>
        <div className="iconachat">
          <ShoppingCartIcon />
        </div>
      </div>
      
      <div className="table" style={{ height: 400, width: "88%",marginLeft:"65px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
