import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Textarea,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styleCS from '../Categories/styleCS.css'


const SlidesForm = ({ state }) => {

  const [initialValues, setInitialValues] = useState({
    name: state?.name || "",
    description: state?.description || "",
    image: state?.image || "",
  });


  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
    if (e.target.name === "order") {
      setInitialValues({ ...initialValues, order: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviado ", initialValues);
    if (initialValues) {
      const res = await axios.patch("Slides/:id", initialValues);
      return res;
    } else {
      const res = await axios.post("Slides/create", initialValues);
      return res;
    }
  };

  return (
    <form className="global" onSubmit={handleSubmit}>
      <Stack>
        <Heading>Edición/Creación de Slides</Heading>
      </Stack>
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Name</FormLabel>
           <Input
            minLength={4}
            isInvalid
            focusBorderColor="red.300"
            variant="filled"
            type="text"
            name="name"
            value={initialValues.name}
            onChange={handleChange}
            placeholder="Name"
          ></Input>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Order</FormLabel>
          <Input
            isInvalid
            focusBorderColor="red.300"
            variant="filled"
            type="text"
            name="order"
            value={initialValues.order}
            onChange={handleChange}
            placeholder="order"
          ></Input>
        </FormControl>
      </Stack>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Description</FormLabel>
          <CKEditor
                config={{ placeholder: "...Description" }}
                editor={ClassicEditor}
                data={initialValues.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log(data);
                  setInitialValues({ ...initialValues, description: data });
                }}
              />
        </FormControl>
      </Stack>

      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Image</FormLabel>
          <Input
            id="image"
            type="file"
            variant="flushed"
            onChange={(event) => {
              const files = event.target.files;
              let myFiles = Array.from(files);
              setInitialValues({
                ...initialValues,
                image: myFiles[0].name,
              });
            }}
            mb={2}
          />
          <Image id="img-preview"></Image>
        </FormControl>
      </Stack>
      <Stack spacing={4}>
        <Button mt={4} colorScheme="teal" type="submit">
          Send
        </Button>
      </Stack>
    </form>
  );
};

export default SlidesForm;





