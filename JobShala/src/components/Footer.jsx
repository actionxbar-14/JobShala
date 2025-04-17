import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white/5 text-white p-6 pt-12 pb-6 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <RiGraduationCapFill  className="text-white text-xl" />
            <span className="text-xl font-bold text-white">JobShala</span>
          </div>
          <p className="text-gray-300 text-sm mb-2">
            <span className="font-semibold text-white">Call Now:</span>{" "}
            <span className="italic">319-555-0115</span>
          </p>
          <p className="text-gray-400 text-sm">
            Discover tailored opportunities for job seekers and top talent for employers
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Candidate */}
        <div>
          <h3 className="font-semibold text-white mb-3">Candidate</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Browse Jobs</li>
            <li>Browse Candidates</li>
            <li>Candidate Dashboard</li>
            <li>Saved Jobs</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Employer */}
        <div>
          <h3 className="font-semibold text-white mb-3">Employer</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Post a Job</li>
            <li>Browse Companies</li>
            <li>Companies Dashboard</li>
            <li>Applications</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>FAQ</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© JobShala 2025 | All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
