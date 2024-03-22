import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        sudah punya akun? registrasi <Link href={"/auth/login "}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;