import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, User, UserImage, Button } from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/apiCalls";

export default function UserList() {
  // const [data, setData] = useState(userRows);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   deleteUser(id, dispatch);
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "Użytkownik",
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <UserImage
              src={params.row.img || "https://pomagamy.se/image/NoUser.webp"}
              alt="user avatar"
            />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Akcja",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <Button>Edytuj</Button>
            </Link>
            <DeleteOutline
              style={{ color: "red", cursor: "pointer" }}
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
}
