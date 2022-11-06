import { t } from '@lingui/macro';
import Image from 'next/image';

export interface IRecognition {}

const Recognition: React.FC<IRecognition> = () => {
  return (
    // <!-- Hero Content -->
    <div className="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <div className="lg:w-1/2 lg:flex lg:items-center">
        <div>
          <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-red-700 bg-red-200 animate-bounce">
            <p>{t`land_recog_sticker`}</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <p>{t`land_recog_titel`}</p>
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
            <p>{t`land_recog_desc`}</p>
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
            <a
              href="assets/imgs/recognitions/recognition-ess.jpg"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 
                      rounded border-red-700 bg-red-700 text-white hover:text-white hover:bg-red-800 hover:border-red-800 focus:ring focus:ring-red-500 
                      focus:ring-opacity-50 active:bg-red-700 active:border-red-700"
            >
              <span>{t`land_recog_btn_down_img`}</span>
              <svg
                className="hi-solid hi-arrow-circle-down inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/watch/?v=5355888881154461"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200
               text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
            >
              <span>{t`land_recog_btn_see_more`}</span>
              <svg
                className="hi-solid hi-external-link inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
        <div className="w-full m-auto sm:w-96 relative">
          <div className="hidden absolute rounded-full top-0 right-0 w-32 h-32 bg-red-200 bg-opacity-50 -mt-12 -mr-12"></div>
          <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-red-300 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
          <Image
            src="/assets/imgs/recognitions/recognition-ess.jpg"
            alt="Hero Image"
            height={'1000'}
            width={'800'}
            className="relative rounded-lg mx-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Recognition;
