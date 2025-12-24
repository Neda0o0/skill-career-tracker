import Image from "next/image";
import TestimonialsData from "@/components/sections/Testimonials/testimonials.data";
import RatingStars from "@/components/sections/Testimonials/RatingStars";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center items-center p-4"
    >
      <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
        Testimonials
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Loved by professionals worldwide
      </h2>
      <h4 className="mt-2 text-md font-medium tracking-tight text-gray-900 dark:text-white">
        See what users say about their growth journey
      </h4>
      <div className="mt-6">
        <ul className="grid md:grid-cols-3 gap-5">
          {TestimonialsData.map((item) => (
            <li
              key={item.id}
              className=" rounded-xl border border-gray-100 p-4 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mt-2 mb-4"
                />
                <span className="mt-2 mb-4 mr-5">
                  <RatingStars rating={item.rating} />
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.comment}</p>
              <span className="text-xs font-sans text-gray-500">
                {item.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
