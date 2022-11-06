import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
export interface IContactUs {}

const ContactUs: React.FC<IContactUs> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lfhthul',
        'template_c2o26ev',
        form.current!,
        'w1EJ60zr-5vTRWgd3'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email has been sent', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <!-- Contact Section: With Image Cover Brand -->
    <div className="bg-cover">
      <div className="">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-16 lg:space-y-0 lg:space-x-16">
            {/* <!-- Heading with Company Info --> */}
            <div className="lg:w-2/5 text-white">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-gray-300">
                We reply in 24hrs
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Contact Us
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-900">
                If something does not make sense, feel free to contact us and we
                will get back to you as soon as possible.
              </h3>
              <div className="text-gray-900 mt-10">
                <h4 className="font-semibold tracking-wider mb-4">
                  Etoilistes Everywhere
                </h4>
                <div className="leading-relaxed">
                  1080 Sunshine Valley, Suite 2563
                  <br />
                  San Francisco, CA 85214
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </div>
              </div>
            </div>
            {/* <!-- END Heading with Company Info --> */}

            {/* <!-- Contact Form --> */}
            <div className="lg:w-3/5 p-2 bg-white bg-opacity-10 rounded-xl">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white rounded-lg p-6 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="from_name" className="font-medium">
                      Full Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email_subj" className="font-medium">
                    Subject
                  </label>
                  <input
                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    type="text"
                    id="email_subj"
                    name="email_subj"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email_email" className="font-medium">
                    Email
                  </label>
                  <input
                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    type="email"
                    id="email_email"
                    name="email_email"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    className="block border border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    id="message"
                    name="message"
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-3 leading-6 rounded border-red-700 bg-red-700 text-white hover:text-white hover:bg-red-800 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-700 active:border-red-700"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  <span>Send Message</span>
                </button>
                <input
                  className="hidden h-0 m-0"
                  type="text"
                  id="email_src"
                  name="email_src"
                  defaultValue={'website'}
                />
              </form>
            </div>
            {/* <!-- END Contact Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
