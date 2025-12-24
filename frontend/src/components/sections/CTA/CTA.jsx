import Button from "@/components/ui/Button";

const CTA = () => {
  return (
    <section className="w-full bg-blue-500 flex flex-col justify-center items-center p-4 mt-5">
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-200 dark:text-white">
        Ready to advance your career?
      </h2>
      <h4 className="mt-2 text-md font-medium tracking-tight text-gray-200 dark:text-white">
        Join thousands of professionals tracking their growth.
      </h4>
      <Button variant="secondaryOutline" className="mt-5 bg-white">
        Get Started Free
      </Button>
      <span className="mt-3 text-xs font-medium text-gray-200">
        No credit card required.
      </span>
    </section>
  );
};

export default CTA;
