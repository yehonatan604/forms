import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./schemas/Login.schemas";

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
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" {...register("password")} />
          <span className="error">{errors.password?.message}</span>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
