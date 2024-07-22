import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./schemas/Login.schemas";
import { Button, Label, TextInput } from "flowbite-react";

function App() {
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });

  // const onKeyStroke = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: joiResolver(LoginSchema),
  });

  const submitForm = (form: any) => {
    console.log(form);
  };

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-control">
          <Label htmlFor="email" className="label">
            Email
          </Label>
          <TextInput type="email" id="email" {...register("email")} />
        </div>
        <div className="form-control">
          <Label htmlFor="password" className="label">
            Password
          </Label>
          <TextInput
            type="password"
            id="password"
            {...register("password")}
            color={errors.password ? "failure" : "success"}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <Button type="submit" className="btn">
          Submit
        </Button>
      </form>
    </main>
  );
}

export default App;
