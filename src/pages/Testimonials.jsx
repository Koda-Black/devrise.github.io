import movingCouple from "../assets/images/moving-couple.jpg";
import oldCouple from "../assets/images/old-couple.jpg";
import vanCouple from "../assets/images/van-couple.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="py-40">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Great Testimonials
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl uppercase">
          What our students are saying
        </p>
        <div className="flex justify-center px-20 py-10">
          <div className="flex flex-row space-x-10">
            <div className="h-full w-full p-6 bg-white rounded-lg shadow-md flex flex-col">
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
                  <p className="font-bold text-base">Chukwu Oluebube</p>
                  <small>Dumbely Wool Works</small>
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
