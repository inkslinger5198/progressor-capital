import { React, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import "./Footer.css";
// import Guide from "../../assets/Thesis.pptx"
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "progressor-capital-growth-session",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <a href="/" className="navbar-logo">
            <div className="nav-logo">
              Progressor Capital
            </div>
          </a>
        </div>

        <div className="footer-top-right">
          <div className="social-links">
            <h3 className="text">Follow Us</h3>
            <a
              href="https://www.linkedin.com/company/progressor-media/about/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linkedin">
                <p className="sub-text">LinkedIn</p>
              </div>
            </a>
          </div>
          <div className="learn-more-link">
            <div className="learn-more-links">
              <h3 className="text">
                Learn More
              </h3>

              <a
                href="https://www.linkedin.com/in/pravitbhatia/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className="sub-text">Pravit Bhatia</p>
                </div>
              </a>
              {/* <a href={Guide} download="Progressor Media Thesis Guide">
              <div>
                <p className="sub-text">Guide <FiDownload /></p>
              </div>
            </a> */}
            </div>
          </div>
          <div className="contact-links">
            <h3 className="text">Contact Us</h3>
            <a
              href="mailto:pravit@progressormedia.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="email">
                <p className="sub-text">Email</p>
              </div>
            </a>

            <button
              className="cal-button navbar-laptop"
              data-cal-namespace="progressor-capital-growth-session"
              data-cal-link="pravitbh/progressor-capital-growth-session"
              data-cal-config='{"layout":"month_view"}'
            >
              <p className="sub-text">Schedule Meeting</p>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="sub-text">© Progressor Capital - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
