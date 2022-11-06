import Image from 'next/image';

export interface ICompaign {}

const Compaign: React.FC<ICompaign> = () => {
  let events = [
    {
      id: 1,
      title: 'Rjelek Fel Ghorba Tben',
      background: '/assets/imgs/compaigns/rjelek_fel_ghorba.png',
      date: 'Mar 3, 2022',
      desc: 'Rjelek Fel Ghorba Tben',
      n_members: '147',
      t_amount: '11218',
      n_country: '17',
    },
    {
      id: 2,
      title: 'Siempre_Presente 2021-2022',
      background: '/assets/imgs/compaigns/abos.jpg',
      date: 'Feb 23, 2021',
      desc: 'Siempre_Presente 2021-2022',
      n_members: '147',
      t_amount: '11218',
      n_country: '17',
    },
    {
      id: 3,
      title: 'Monthly membership donations',
      background: '/assets/imgs/compaigns/monthly_donations.jpg',
      date: 'Feb 15, 2021',
      desc: 'Monthly membership donations',
      n_members: '147',
      t_amount: '11218',
      n_country: '17',
    },
  ];
  return (
    <div className="bg-white">
      <div className="space-y-12 container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-16">
        {/* <!-- Heading --> */}
        <div className="border-b py-2 flex items-center justify-between">
          <h3 className="uppercase font-semibold tracking-wide my-2">
            Latests Compaigns
          </h3>
        </div>
        {/* <!-- END Heading --> */}

        {/* <!-- Blog Posts --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events?.map((event, index) => (
            <div className="flex flex-col" key={index}>
              <a
                href="#"
                className="block relative group rounded overflow-hidden"
              >
                <div className="flex items-center justify-center absolute inset-0 bg-red-700 bg-opacity-75 opacity-40 transition ease-out duration-150 group-hover:opacity-100 z-40">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <Image
                  src={event.background}
                  alt="Featured Image of blog post"
                  height={'600'}
                  width={'800'}
                />
              </a>
              <p className="text-gray-600 text-sm font-medium mt-3 mb-1">
                {event.date}
              </p>
              <h4 className="font-bold text-lg sm:text-xl mb-4 grow">
                <a
                  href="#"
                  className="leading-7 text-gray-800 hover:text-gray-600"
                >
                  {event.title}
                </a>
              </h4>
              <div className="space-x-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500 hi-solid hi-user-group inline-block w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{event.t_amount}</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500 hi-solid hi-user-group inline-block w-6 h-6"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>

                  <span>{event.n_members}</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500 hi-solid hi-user-group inline-block w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />{' '}
                  </svg>

                  <span>{event.n_country}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- END Blog Posts --> */}
      </div>
    </div>
  );
};

export default Compaign;
