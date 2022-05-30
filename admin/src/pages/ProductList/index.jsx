import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import { Item, Img, Button } from "./ProductList";
import { Container } from "../../components/Container";
export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "product",
      headerName: "Produkt",
      width: 200,
      renderCell: (params) => {
        return (
          <Item>
            <Img
              className="productListImg"
              src={params.row.img}
              alt="product image"
            />
            {params.row.title}
          </Item>
        );
      },
    },
    {
      field: "inStock",
      headerName: "Na stanie",
      width: 200,
      renderCell: (params) => (params.row.inStock === true ? "tak" : "nie"),
    },
    {
      field: "price",
      headerName: "Cena",
      width: 160,
    },
    {
      field: "action",
      headerName: "Akcje",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <Button>Edytuj</Button>
            </Link>
            <DeleteOutline
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
}
