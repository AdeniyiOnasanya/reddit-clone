import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";

interface IFormInput{
      firstName: string,
      lastName: string,
      iceCreamType: {label: string; value:string};
    }


export default function Signup() {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Submitted the form");
    console.log(data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button variant="contained">Sign UP</Button>
    </form>
  );
};
