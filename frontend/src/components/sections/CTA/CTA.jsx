// import Button from "@/components/ui/Button";

// const CTA = () => {
//   return (
//     <section
//       id="cta"
//       className="w-full bg-purple-600 dark:bg-purple-800 flex flex-col justify-center items-center p-4 mt-5"
//     >
//       <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-200 dark:text-white">
//         Ready to advance your career?
//       </h2>
//       <h4 className="mt-2 text-md font-medium tracking-tight text-gray-200 dark:text-white">
//         Join thousands of professionals tracking their growth.
//       </h4>
//       <Button variant="secondaryOutline" className="mt-5 bg-white">
//         Get Started Free
//       </Button>
//       <span className="mt-3 text-xs font-medium text-gray-200">
//         No credit card required.
//       </span>
//     </section>
//   );
// };

// export default CTA;
import Button from "@/components/ui/Button";

const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full glass flex flex-col justify-center items-center p-8 mt-5 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        Ready to advance your career?
      </h2>
      <h4 className="mt-2 text-md font-medium tracking-tight text-foreground/80">
        Join thousands of professionals tracking their growth.
      </h4>
      <Button className="glass px-6 py-3 font-semibold rounded-xl mt-5">
        Get Started Free
      </Button>
      <span className="mt-3 text-xs font-medium text-foreground/60">
        No credit card required.
      </span>
    </section>
  );
};

export default CTA;
