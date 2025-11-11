import { TextField, Button } from "@mui/material";
import {Link, Navigate, useNavigate} from "react-router";
import AuthLayout from "../../components/Layout/AuthLayout";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

const schema = z.object({
  email: z.email("Email cannot be blank and must be in the format abc@abc.com"),
  password: z.string()
  .min(3,"Password can not be blank")
  .max(16, "Password must not be greater than 16 characters")
})

type Schema = z.infer<typeof schema>


export default function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const navigate =useNavigate();

const onSubmit = (data : Schema) => {

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u: any) => u.email === data.email && u.password === data.password);
  if (user) {
    localStorage.setItem("token", "mock_token");
    navigate("/home");
  } else {
    alert("Invalid credentials");
}

};

  return (
    <AuthLayout
      title="Login to your account"
      footer={
        <>
          <h2 className="text-sm lg:text-m text-center">To create an account</h2>
          <Link to="/SignUp">
            <Button variant="text">Sign Up</Button>
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <TextField
          {...register("email")}
          error= {!!errors.email}  
          helperText={errors.email?.message}        
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
        />

        <TextField
          {...register("password")}
          error = {!!errors.password}
          helperText = {errors.password?.message}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />

        <Button 
        onClick={handleSubmit(onSubmit)}
        size="large" type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}
