import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import {
  Container,
  Title,
  Form,
  Item,
  Label,
  Input,
  Select,
  Option,
  Button,
} from "./NewProduct";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  console.log(file);
  return (
    <Container>
      <Title>Dodaj nowy produkt</Title>
      <Form>
        <Item>
          <Label>Avatar</Label>
          <Input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Item>
        <Item>
          <Label>Nazwa</Label>
          <Input
            name="title"
            type="text"
            placeholder="Nazwa produktu"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Cena</Label>
          <Input
            name="price"
            type="number"
            placeholder="Cena produktu"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Opis</Label>
          <Input
            name="desc"
            type="text"
            placeholder="Opis produktu"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Kategorie</Label>
          <Input
            name="categories"
            type="text"
            placeholder="Kategorie produktu"
            onChange={handleCategories}
          />
        </Item>
        <Item>
          <Label>Na stanie</Label>
          <Select name="inStock" onChange={handleChange}>
            <Option value="true">tak</Option>
            <Option value="false">nie</Option>
          </Select>
        </Item>
        <Button className="addProductButton" onClick={handleClick}>
          Stwórz produkt
        </Button>
      </Form>
    </Container>

    // <div className="newProduct">
    //   <h1 className="addProductTitle">New Product</h1>
    //   <form className="addProductForm">
    //     <div className="addProductItem">
    //       <label>Image</label>
    //       <input
    //         type="file"
    //         id="file"
    //         onChange={(e) => setFile(e.target.files[0])}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Title</label>
    //       <input
    //         name="title"
    //         type="text"
    //         placeholder="Item title"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Price</label>
    //       <input
    //         name="price"
    //         type="number"
    //         placeholder="price"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Desc</label>
    //       <input
    //         name="desc"
    //         type="text"
    //         placeholder="description"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Categories</label>
    //       <input
    //         name="categories"
    //         type="text"
    //         placeholder="categories"
    //         onChange={handleCategories}
    //       />
    //     </div>
    //     <div className="addProductItem">
    //       <label>Stock</label>
    //       <select name="inStock" onChange={handleChange}>
    //         <option value="true">tak</option>
    //         <option value="false">nie</option>
    //       </select>
    //     </div>
    //     <button className="addProductButton" onClick={handleClick}>
    //       Create
    //     </button>
    //   </form>
    // </div>
  );
}
