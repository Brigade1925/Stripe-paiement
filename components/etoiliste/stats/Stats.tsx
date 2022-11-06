import { IUser } from '../../../types';

export interface IStats {
  Stats: IUser[];
}

const Stats: React.FC<IStats> = ({ Stats }) => {
  return (
    // <!-- Alternate Statistics with Icons Grid -->
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 lg:gap-8 text-center text-sm">
      {/* <!-- Card: Alternate Widget with Icon --> */}
      <div className="flex flex-col rounded-2xl shadow-md bg-white overflow-hidden">
        {/* <!-- Card Body: Alternate Widget with Icon --> */}
        <div className="p-2 lg:p-6 grow w-full">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 mx-auto mt-5 bg-red-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="py-5">
            <dt className="text-3xl font-bold">36</dt>
            <dd className="text-lg text-gray-500">Sales</dd>
          </dl>
        </div>
        {/* <!-- END Card Body: Alternate Widget with Icon --> */}
      </div>
      {/* <!-- END Card: Alternate Widget with Icon --> */}

      {/* <!-- Card: Alternate Widget with Icon --> */}
      <div className="flex flex-col rounded-2xl shadow-md bg-white overflow-hidden">
        {/* <!-- Card Body: Alternate Widget with Icon --> */}
        <div className="p-2 lg:p-6 grow w-full">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 mx-auto mt-5 bg-red-100">
            <svg
              className="hi-solid hi-chart-pie inline-block w-8 h-8 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          </div>
          <dl className="py-5">
            <dt className="text-3xl font-bold">$3,699</dt>
            <dd className="text-lg text-gray-500">Earnings</dd>
          </dl>
        </div>
        {/* <!-- END Card Body: Alternate Widget with Icon --> */}
      </div>
      {/* <!-- END Card: Alternate Widget with Icon --> */}

      {/* <!-- Card: Alternate Widget with Icon --> */}
      <div className="flex flex-col rounded-2xl shadow-md bg-white overflow-hidden">
        {/* <!-- Card Body: Alternate Widget with Icon --> */}
        <div className="p-2 lg:p-6 grow w-full">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 mx-auto mt-5 bg-red-100">
            <svg
              className="hi-solid hi-briefcase inline-block w-8 h-8 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <dl className="py-5">
            <dt className="text-3xl font-bold">$36,304</dt>
            <dd className="text-lg text-gray-500">Wallet</dd>
          </dl>
        </div>
        {/* <!-- END Card Body: Alternate Widget with Icon --> */}
      </div>
      {/* <!-- END Card: Alternate Widget with Icon --> */}
    </div>
    // <!-- END Alternate Statistics with Icons Grid -->
  );
};

export default Stats;
