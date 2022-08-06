import "./vente.css";
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { venterows } from "../../DammyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Vente() {
   const [data, setdata] = useState(venterows);
   const handeleDelete = (id) => {
     setdata(data.filter((item) => item.id !== id));
   };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "facture", headerName: "Facture", width: 70 },
    { field: "date", headerName: "Date", type: "date", width: 130 },
    { field: "nbr_article", headerName: "Nombre d'article", width: 130 },
    { field: "fornisseur", headerName: "Fornisseur", width: 130 },
    {
      field: "grand_totale",
      headerName: "Grand Total",
      type: "number",
      width: 90,
    },
    {
      field: "paye",
      headerName: "Payé",
      type: "number",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <>
          <Link to={"/ventepage/" + params.row.id}>
            <button className="venteajout">Edit</button>
          </Link>
          <DeleteIcon
            className="ventedelete"
            onClick={() => handeleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="vente">
      <Link to="/newvente">
        <button className="newventeButton">Create</button>
      </Link>
      <div className="ventetitle">
        <h3>Ventes</h3>
        <div className="iconachat">
          <MonetizationOnIcon />
        </div>
      </div>
      <div className="table" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
