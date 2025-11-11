import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";
import AuthLayout from "../../components/Layout/AuthLayout"
import {email, json, z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form"

const schema = z.object({
  email: z.email("Email cannot be blank and must be in the format abc@abc.com"),
  password: z.string().min(3,"Password must not be lesser than 3 characters")
  .max(16, "Password must not be greater than 16 characters"),
  confirmPassword:z.string().min(3,"Password must not be lesser than 3 characters")
  .max(16, "Password must not be greater than 16 characters")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type Schema = z.infer<typeof schema>

export default function SignUp() {
  const navigate = useNavigate();

  const {register , handleSubmit, formState:{errors}} = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    if(users.find((u: any) => u.email === data.email)){
      alert("User already exists, Try logging in");
      return;
    }
    users.push({
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("token", "mock_token");

    navigate('/home');
  }


  return (
    <AuthLayout
      title="Create a new account"
      footer={
        <>
          <h2 className="text-sm lg:text-m text-center">Already have an account?</h2>
          <Link to="/Login">
            <Button variant="text">Login</Button>
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <TextField
          {...register("email")}
          error= {!!errors.email}
          helperText = {errors.email?.message}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
        />

        <TextField
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        />

        <TextField
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        />
        <Button onClick={handleSubmit(onSubmit)} size="large" type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
}
