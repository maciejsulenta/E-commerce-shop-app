import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";
import { useState } from "react";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  Container,
  Title,
  Form,
  Item,
  Label,
  Input,
  Button,
} from "./NewUser";

export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
          // console.log({ ...inputs, img: downloadURL });
          const user = {
            ...inputs,
            img: downloadURL,
          };
          addUser(user, dispatch);
        });
      }
    );
  };

  return (
    <Container>
      <Title>Nowy użytkownik</Title>
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
          <Label>Login</Label>
          <Input
            name="username"
            type="text"
            placeholder="Login"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Imię i nazwisko</Label>
          <Input
            name="name"
            type="text"
            placeholder="Imię i nazwisko"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Hasło</Label>
          <Input
            name="password"
            type="password"
            placeholder="Hasło"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Numer kontaktowy</Label>
          <Input
            name="phone"
            type="text"
            placeholder="+48 123 456 78"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Adres zamieszkania</Label>
          <Input
            name="address"
            type="text"
            placeholder="Adres zamieszkania"
            onChange={handleChange}
          />
        </Item>
        <Button onClick={handleClick}>Stwórz użytkownika</Button>
      </Form>
    </Container>
  );
}
