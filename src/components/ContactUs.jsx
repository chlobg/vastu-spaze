import { CONTACT_INFO } from "../constants";
import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4" id="contact">
      <div className="my-20 text-center">
        <h2 className="text-xl lg:text-3xl tracking-light uppercase mb-6">
          Contact Us
        </h2>
        <p className="max-w-2xl text-lg mb-12 mx-auto">{CONTACT_INFO.text}</p>

        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-12">
          {/* Phone */}
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p
                className="text-lg font-semibold display: flex
;"
              >
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-lg">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p
                className="text-lg font-semibold    display: flex
;"
              >
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-lg">{CONTACT_INFO.email.value}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p
                className="text-lg font-semibold   display: flex
;"
              >
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
