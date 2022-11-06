import { t } from '@lingui/macro';
export interface IStats {}

const Stats: React.FC<IStats> = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="container max-w-full xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* <!-- Heading --> */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-red-700">
            {t`land_stats_sm_title`}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trusted by thousands of professionals
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Web developers from all over the world are using our products. Join
            them and build something amazing!
          </h3>
        </div>
        {/* <!-- END Heading --> */}

        {/* <!-- Stats --> */}
        <div className="relative">
          <div className="grid grid-cols-3 text-center rounded-xl shadow-md bg-white divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden relative font-glory font-thin">
            <dl className="space-y-1 px-2 py-8 md:py-12 hover:bg-gray-50 hover:bg-opacity-50">
              <dt className="sm:text-4xl text-2xl font-bold font-bebas text-red-600">
                1925
              </dt>
              <dd className="text-xs sm:text-sm uppercase tracking-wide font-semibold">
                Events and Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-2 py-8 md:py-12 hover:bg-gray-50 hover:bg-opacity-50">
              <dt className="sm:text-4xl text-2xl font-bold font-bebas text-red-600">
                260
              </dt>
              <dd className="text-xs sm:text-sm uppercase tracking-wide font-semibold">
                Members
              </dd>
            </dl>
            <dl className="space-y-1 px-2 py-8 md:py-12 hover:bg-gray-50 hover:bg-opacity-50">
              <dt className="sm:text-4xl text-2xl font-bold font-bebas text-red-600">
                175,000
              </dt>
              <dd className="text-xs sm:text-sm uppercase tracking-wide font-semibold">
                Money raised
              </dd>
            </dl>
          </div>
        </div>
        {/* <!-- END Stats --> */}
      </div>
    </div>
  );
};

export default Stats;
