import SendEmail from "./SendEmail";
import "../../styles/App.css";
import Footer from "../Footer";

export const Contact = () => {
  return (
    <>
      <section className="contact-section1 mt-10">
        <div className="contact-us lg:w-2/4 block">
          <SendEmail />
        </div>
      </section>
      <section className="flex items-center justify-center xs:h-auto  my-16">
        <div
          className="flex 
        xs:h-auto lg:py-10
        xs:flex-col xs:w-5/6 lg:flex-row items-center bg-marshalls-black rounded-3xl lg: text-marshalls-white"
        >
          <div className="p-10 contact-infos">
            <h1 className="font-bold text-custom-blue text-4xl my-5">
              Contact Information:
            </h1>
            <p className="flex">
              <img
                src="/icons/phone.png"
                alt="Phone Icon"
                className="h-5 pr-1"
              />
              <strong>Phone # (Globe):</strong>
            </p>
            <p className="detail">0945-273-1101</p>
            <p className="flex">
              <img
                src="/icons/phone.png"
                alt="Phone Icon"
                className="h-5 pr-1"
              />
              <strong>Phone # (Smart):</strong>
            </p>
            <p className="detail">0939-740-1011</p>
            <p className="flex">
              <img
                src="/icons/email.png"
                alt="Email Icon"
                className="h-5 pr-1"
              />
              <strong>Email:</strong>
            </p>
            <p className="detail">
              <a className="email" href="mailto:marshalls.tailoring@gmail.com">
                marshalls.tailoring@gmail.com
              </a>
            </p>
            <p className="flex">
              <img
                src="/icons/location.png"
                alt="Location Icon"
                className="h-5 pr-1"
              />
              <strong>Location:</strong>
            </p>
            <p className="detail">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/32+Malabanan+St,+Lipa,+4217+Batangas/@13.942881,121.161315,423m/data=!3m1!1e3!4m6!3m5!1s0x33bd6ca2e6b1f06d:0x8186c2023439c014!8m2!3d13.9428886!4d121.1613117!16s%2Fg%2F11h1mk4zhz?hl=en&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              >
                2nd Floor Bldg. 1, Lipa City Public Market, Lipa City, Batangas
              </a>
            </p>
          </div>
          <div className="p-10 xs:p-5 xs:w-full xs:h-full sm:h-[300px] md:h-[350px] lg-h[500px] xl:h-[500px] location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.0499337984141!2d121.16133252946199!3d13.942715884393415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ca2e6ba4347%3A0x849c98e70a13e6a3!2s32%20Malabanan%20St%2C%20Lipa%2C%204217%20Batangas!5e1!3m2!1sen!2sph!4v1736742733890!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>
        </div>
      </section>
      {/* <section className="contact-section2 sm:h-auto sm:mb-8">
        <div className="contact-info-container sm:flex-col lg:flex-row">
          <div className="contact-infos block">
            <p>
              <img src="/icons/phone.png" alt="Phone Icon" className="icon" />
              <strong>Phone # (Globe):</strong>
            </p>
            <p className="detail">0945-273-1101</p>
            <p>
              <img src="/icons/phone.png" alt="Phone Icon" className="icon" />
              <strong>Phone # (Smart):</strong>
            </p>
            <p className="detail">0939-740-1011</p>
            <p>
              <img src="/icons/email.png" alt="Email Icon" className="icon" />
              <strong>Email:</strong>
            </p>
            <p className="detail">
              <a className="email" href="mailto:marshalls.tailoring@gmail.com">
                marshalls.tailoring@gmail.com
              </a>
            </p>
            <p>
              <img
                src="/icons/location.png"
                alt="Location Icon"
                className="icon"
              />
              <strong>Location:</strong>
            </p>
            <p className="detail">
              2nd Floor Bldg. 1, Lipa City Public Market, Lipa City, Batangas
            </p>
          </div>

          <div className="location block lg:w-fit">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/32+Malabanan+St,+Lipa,+4217+Batangas/@13.9427959,121.1613138,101m/data=!3m1!1e3!4m6!3m5!1s0x33bd6ca2e6ba4347:0x849c98e70a13e6a3!8m2!3d13.9428812!4d121.1613151!16s%2Fg%2F11nnkn42xs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.0499337984141!2d121.16133252946199!3d13.942715884393415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ca2e6ba4347%3A0x849c98e70a13e6a3!2s32%20Malabanan%20St%2C%20Lipa%2C%204217%20Batangas!5e1!3m2!1sen!2sph!4v1736742733890!5m2!1sen!2sph"
                  width="450"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </section> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};
