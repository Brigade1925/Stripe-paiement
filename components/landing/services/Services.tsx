import { t } from '@lingui/macro';
export interface IServices {}

const Services: React.FC<IServices> = () => {
  return (
    <div className="bg-white">
      <div className="space-y-16 container lg:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-red-700">
            {t`land_serv_sm_title`}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t`land_serv_lg_title`}
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            {t`land_serv_main_desc`}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 text-center sm:text-left">
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-red-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-red-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-code inline-block w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Framework Agnostic</h4>
              <p className="leading-relaxed text-gray-600">
                Each component is an HTML code snippet which you can easily
                copy-paste into your code and customize it to match your needs.
                They will work in any JS or other framework you are using.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-red-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-red-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-device-mobile inline-block w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Fully Responsive</h4>
              <p className="leading-relaxed text-gray-600">
                They are designed to work in various screen sizes, from mobile
                to desktop. Their design will adapt based on the device you are
                using, and you can easily preview them beforehand.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-red-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-red-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <span className="font-semibold text-xl text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100">
                JS
              </span>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Alpine.js Snippets</h4>
              <p className="leading-relaxed text-gray-600">
                A few components might need a bit of JavaScript to work. We
                provide pure HTML examples with inline comments for which
                classes to toggle with JS but also working Alpine.js variations
                as well.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-red-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-red-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-cog inline-block w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Helper Tools</h4>
              <p className="leading-relaxed text-gray-600">
                Search and copy SVG icons, build your button markup or copy your
                favorite color classes with powerful tools. More are under
                development to give you superpowers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
