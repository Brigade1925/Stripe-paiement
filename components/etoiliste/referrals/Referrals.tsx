import Image from 'next/image';
import { IUser } from '../../../types';

export interface IReferrals {
  referrals: IUser[];
}

const Referrals: React.FC<IReferrals> = ({ referrals }) => {
  return (
    <div>
      <h1 className="text-red-600 font-glory text-lg">List of Refferals</h1>
      <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
        {/* <!-- Striped Table --> */}
        <table className="min-w-full text-sm align-middle whitespace-nowrap">
          {/* <!-- Table Header --> */}
          <thead>
            <tr>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Avatar
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Name
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Email
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Membership
              </th>
            </tr>
          </thead>
          {/* <!-- END Table Header --> */}

          {/* <!-- Table Body --> */}
          <tbody>
            {referrals.map((person, index) => (
              <tr key={index}>
                <td className="p-3 text-center">
                  <Image
                    src={person.image}
                    alt="User Avatar"
                    className="inline-block w-10 h-10 rounded-full"
                    height={56}
                    width={56}
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">{person.name}</p>
                  <p className="text-gray-500">{person.jobTitle}</p>
                </td>
                <td className="p-3 text-gray-500 truncate">{person.email}</td>
                <td className="p-3 text-center">
                  <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-700 bg-emerald-200">
                    Agency
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <!-- END Table Body --> */}
        </table>
        {/* <!-- END Striped Table --> */}
      </div>
    </div>
  );
};

export default Referrals;
