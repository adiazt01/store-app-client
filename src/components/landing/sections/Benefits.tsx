import { BiAlarm } from "react-icons/bi";
import { motion } from "framer-motion";
import { cardBenefitVariants } from "../../../animations/navbarLanding";
import { ShapeTop } from "../shape/ShapeTop";

const benefits = [
  { title: "Benefit 1", description: "This is benefit 1", icon: <BiAlarm /> },
  { title: "Benefit 2", description: "This is benefit 2", icon: <BiAlarm /> },
  { title: "Benefit 3", description: "This is benefit 3", icon: <BiAlarm /> },
  { title: "Benefit 4", description: "This is benefit 3", icon: <BiAlarm /> },
];

export const Benefits = () => {
  return (
    <>
      <section className="bg-blue-600 h-auto flex flex-col justify-center w-full pb-24 pt-12">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="mb-2 flex flex-col p-8 bg-gray-100 shadow-md w-10/12 mx-auto rounded hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              variants={cardBenefitVariants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl m-auto">{benefit.icon}</div>
              <h3 className="text-xl text-center font-semibold mt-4">
                {benefit.title}
              </h3>
              <p className="text-center mt-2">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
