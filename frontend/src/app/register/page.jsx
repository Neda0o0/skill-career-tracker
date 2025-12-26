import Header from "@/components/layout/Header/Header";
import RegisterHero from "./_components/RegisterHero";
import RegisterForm from "./_components/RegisterForm";
import Footer from "@/components/layout/Footer/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <main className="grid md:grid-cols-2 text-gray-200">
        <RegisterHero />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default Register;
