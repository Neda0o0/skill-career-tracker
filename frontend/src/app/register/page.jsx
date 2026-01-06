import Header from "@/components/layout/Header/Header";
import RegisterHero from "./_components/RegisterHero";
import RegisterForm from "./_components/RegisterForm";
import Footer from "@/components/layout/Footer/Footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      <main className="flex-1 grid md:grid-cols-2">
        <RegisterHero />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
