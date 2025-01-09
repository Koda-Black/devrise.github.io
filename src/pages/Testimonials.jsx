import movingCouple from "../assets/images/moving-couple.webp";
import oldCouple from "../assets/images/old-couple.webp";
import vanCouple from "../assets/images/van-couple.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="py-40 usm:px-8 usm:py-20 xl:px-24">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Great Testimonials
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-primary-color usm:text-2xl uppercase">
          What our students are saying
        </p>
        <div className="px-20 usm:px-0 py-10">
          <div className="flex flex-col md:flex-row justify-center usm:flex-col usm:space-x-0 usm:gap-8 space-x-10">
            <div className="h-full w-full p-6 md:p-4 bg-white rounded-lg shadow-md flex flex-col hover:animate-slide-up">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={movingCouple}
                  alt="Testimonial image"
                  loading="lazy"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">Bisi Alabi</p>
                  <small>PayU | Frontend Web Dev</small>
                </div>
              </div>
              <p className="text-center">
                Devrise Coding School helped me pivot into tech with ease. The
                hands-on projects and mentorship landed me my first job as a
                front-end developer. Highly recommend!
              </p>
            </div>

            <div className="h-full w-full p-6 md:p-4 bg-white rounded-lg shadow-md flex flex-col hover:animate-slide-up">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={vanCouple}
                  loading="lazy"
                  alt="Testimonial image"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">C. Oluebube</p>
                  <small>Coral Pay | Backend Developer</small>
                </div>
              </div>
              <p className="text-center pb-4">
                I thought coding was too hard, but Devrise made it simple.
                Thanks to their guidance, I’m now a backend engineer mentoring
                others!
              </p>
            </div>

            <div className="h-full w-full p-6 md:p-4 bg-white rounded-lg shadow-md flex flex-col hover:animate-slide-up">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={oldCouple}
                  loading="lazy"
                  alt="Testimonial image"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">Uche Nnamani</p>
                  <small>Fitness Space | Mentor</small>
                </div>
              </div>
              <p className="text-center">
                Mentoring at Devrise has been so rewarding. Watching students
                grow into skilled developers is amazing. This school changes
                lives!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
