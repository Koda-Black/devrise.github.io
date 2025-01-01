import {
  BookOpenIcon,
  LightBulbIcon,
  FolderPlusIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/20/solid";
import TechGirl from "../assets/images/female techie.jpg";

const MortgageTech = () => {
  const features = [
    {
      name: "Pratical Learning.",
      description: "Flexible online learning sessions.",
      icon: BookOpenIcon,
    },
    {
      name: "Mentorship.",
      description: "Mentorship from experienced developers.",
      icon: LightBulbIcon,
    },
    {
      name: "Hands-on Projects.",
      description: "Real life projects for your portfolio.",
      icon: FolderPlusIcon,
    },
    {
      name: "Community Access.",
      description:
        "Life-time access to a community dedicated to learning and growth.",
      icon: ChatBubbleBottomCenterIcon,
    },
  ];
  //   {
  //     id: 1,
  //     name: "Transactions every 24 hours",
  //     value: (
  //       <UserGroupIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
  //     ),
  //   },
  //   {
  //     id: 2,
  //     name: "Assets under holding",
  //     value: (
  //       <BriefcaseIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
  //     ),
  //   },
  //   {
  //     id: 3,
  //     name: "Users security measures",
  //     value: (
  //       <FingerPrintIcon
  //         className="h-8 w-8 text-indigo-600"
  //         aria-hidden="true"
  //       />
  //     ),
  //   },
  // ];

  return (
    <section className="lg:pl-16 lg:pr-0 py-16">
      <div className="overflow-hidden py-24 sm:py-32 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="text-left lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg usm:px-8 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-primary-color">
                  Welcome to pivot tech
                </h2>
                <p className="mt-2 text-3xl usm:text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Unique Approach
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We are on a mission to help busy professionals easily
                  transition into tech by teaching them the necessary skills in
                  a manner it does not interfere with their daily jobs, and
                  providing a community to enable their fast-paced growth.
                </p>
                <dl className="mt-0 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-primary-color"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              {/* <div className="py-14 sm:py-10">
                <div className="mx-auto max-w-3xl pr-16">
                  <dl className="grid grid-cols-3 gap-x-8 gap-y-16 p-8 text-center items-center divide-x bg-dark-grey rounded">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="mx-auto flex max-w-xs flex-col gap-y-4 items-center"
                      >
                        <dt className="text-base leading-7 text-gray-600 sm:text-sm">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-lg">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div> */}
            </div>
            <img
              src={TechGirl}
              alt="Mortgage Home screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 usm:w-[57rem] usm:rounded-none md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageTech;
