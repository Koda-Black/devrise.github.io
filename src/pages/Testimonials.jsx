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
            <div className="h-full w-full p-6 md:p-4 bg-white rounded-lg shadow-md flex flex-col">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={movingCouple}
                  alt="Mortgage Home screenshot"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">Bisi Alabi</p>
                  <small>Prodigy Finance</small>
                </div>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, ipsum non eleifend dictum, velit nunc accumsan
                velit, at posuere mauris velit at justo.
              </p>
            </div>

            <div className="h-full w-full p-6 bg-white rounded-lg shadow-md flex flex-col">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={vanCouple}
                  alt="Mortgage Home screenshot"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">C. Oluebube</p>
                  <small>Dumbely Wool</small>
                </div>
              </div>
              <p className="text-center pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, ipsum non eleifend dictum, velit nunc accumsan
                velit, at posuere mauris velit at justo.
              </p>
            </div>

            <div className="h-full w-full p-6 bg-white rounded-lg shadow-md flex flex-col">
              <div className="flex flex-row space-x-4 pb-6">
                <img
                  src={oldCouple}
                  alt="Mortgage Home screenshot"
                  className="w-[50px] h-auto object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-base">Uche Nnamani</p>
                  <small>Fitness Space</small>
                </div>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, ipsum non eleifend dictum, velit nunc accumsan
                velit, at posuere mauris velit at justo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
