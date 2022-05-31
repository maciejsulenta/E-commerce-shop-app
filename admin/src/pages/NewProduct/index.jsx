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
  Title,
  Form,
  Item,
  Label,
  Input,
  Select,
  Option,
  Button,
} from "./NewProduct";
import { Container } from "../../components/Container";
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };
  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };
  const handleSize = (e) => {
    setSize(e.target.value.split(","));
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
            categories,
            size,
            color,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  console.log(file);
  return (
    <Container padd style={{ justifyContent: "center", alignItems: "center" }}>
      <Form>
        <Title>Stwórz produkt</Title>
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
          <Label>Kolor</Label>
          <Input
            name="color"
            type="text"
            placeholder="Kolor produktu"
            onChange={handleColor}
          />
        </Item>
        <Item>
          <Label>Rozmiar</Label>
          <Input
            name="size"
            type="text"
            placeholder="Rozmiary produktu"
            onChange={handleSize}
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
  );
}
