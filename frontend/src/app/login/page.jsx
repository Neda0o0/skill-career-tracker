import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import LoginForm from "@/app/login/_components/LoginForm";
import LoginHero from "@/app/login/_components/LoginHero";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      <main className="flex-1 grid md:grid-cols-2 pb-5">
        <LoginHero />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
