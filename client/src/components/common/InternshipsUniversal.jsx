import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import countryData from "../TESTJSONS/countries+states+cities.json";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaClipboardList,
  FaTimes,
  FaClock,
  FaCheck,
  FaBuilding,
  FaArrowLeft,
  FaRunning,
  FaStar,
  FaQuestion,
  FaFilter,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import Spinner from "../common/Spinner";
import getUserIdFromToken from "../student/auth/authUtils";
import TimeAgo from "../common/TimeAgo";
import api from "../common/server_url";
import { toast } from "react-toastify";
// import CustomDropdown from './utils/CustomDropdown';
import Select from "react-select";
import CustomRadio from "../student/utils/CustomRadio";
import StipendSlider from "../student/utils/StipendSlider";
import { useStudent } from "../student/context/studentContext";
import statesAndCities from "../common/statesAndCities";
// import CustomRadio from './utils/CustomRadio';

const InternshipsUniversal = () => {
  const [internships, setInternships] = useState([]);
  // const [appliedInternships, setAppliedInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [selectedInternship, setSelectedInternship] = useState(null);

  const { login } = useStudent();
  const userId = getUserIdFromToken();
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 9;
  const scrollableRef = useRef(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [internshipsCount, setInternshipsCount] = useState(null);

  const jobProfiles = [
    "3D Animation",
    "Account Management",
    "Accounting & Auditing",
    "Acting/Performing Arts",
    "Administrative Assistant",
    "Advertising Specialist",
    "Aerospace Engineering",
    "AI (Artificial Intelligence)",
    "Android Development",
    "Animation Design",
    "App Developer",
    "Application Support Engineer",
    "Architecture",
    "Art Director",
    "Asset Management",
    "Assistant Producer",
    "Audio Engineer",
    "Automation Engineer",
    "Automotive Engineering",
    "AWS Development",
    "Back-End Development",
    "Bank Teller",
    "Banking Operations",
    "Big Data Engineer",
    "Bioinformatics Researcher",
    "Biomedical Engineering",
    "Blockchain Development",
    "Brand Management",
    "Broadcast Engineering",
    "Budget Analyst",
    "Building Inspector",
    "Business Analyst",
    "Business Consultant",
    "Business Development",
    "Business Intelligence Analyst",
    "Call Center Agent",
    "Cartography",
    "Chemical Engineering",
    "Civil Engineering",
    "Claims Adjuster",
    "Cloud Architect",
    "Cloud Computing",
    "Cloud Security Engineer",
    "Communications Specialist",
    "Compliance Officer",
    "Computer Hardware Engineer",
    "Construction Manager",
    "Content Creation",
    "Content Editor",
    "Content Management",
    "Content Marketing",
    "Content Strategist",
    "Content Writing",
    "Corporate Law Intern",
    "Corporate Trainer",
    "Cost Estimator",
    "Creative Director",
    "CRM Development",
    "Customer Success Manager",
    "Cybersecurity",
    "Data Analytics",
    "Data Architect",
    "Data Engineering",
    "Data Entry Clerk",
    "Data Governance Specialist",
    "Data Quality Analyst",
    "Data Science",
    "Database Administration",
    "Debt Collection Officer",
    "Dental Assistant",
    "Dentist",
    "Design Engineer",
    "Desktop Support Technician",
    "DevOps Engineer",
    "Digital Illustrator",
    "Digital Marketing",
    "Digital Product Designer",
    "E-Commerce Management",
    "Electrical Engineering",
    "Elementary School Teacher",
    "Embedded Systems Development",
    "Environmental Engineer",
    "ERP Development",
    "Event Coordination",
    "Event Management",
    "Exhibition Designer",
    "Fashion Design",
    "Fashion Marketing",
    "Fashion Stylist",
    "Film Director",
    "Film Editor",
    "FinTech Development",
    "Financial Analyst",
    "Financial Planner",
    "Fitness Trainer",
    "Flutter Development",
    "Food Technology",
    "Forensic Scientist",
    "Front-End Development",
    "Full-Stack Development",
    "Fundraising Coordinator",
    "Game Design",
    "Game Development",
    "General Practitioner (Doctor)",
    "Genetic Counselor",
    "Geologist",
    "Graphic Design",
    "Green Energy Consultant",
    "Hair Stylist",
    "Hardware Development",
    "Healthcare Administration",
    "Healthcare Management",
    "Hotel Management",
    "HR Business Partner",
    "HR Generalist",
    "HR Management",
    "HVAC Engineer",
    "Illustrator",
    "Industrial Designer",
    "Industrial Engineering",
    "Information Security Analyst",
    "Information Systems Manager",
    "Interior Design",
    "International Trade Specialist",
    "Investment Banking",
    "IT Consultant",
    "IT Security Specialist",
    "IT Support",
    "IT Systems Administrator",
    "Java Development",
    "Journalism",
    "Lab Technician",
    "Language Translation",
    "Law/Legal Intern",
    "Litigation Assistant",
    "Logistics Coordinator",
    "Machine Learning Engineer",
    "Maintenance Engineer",
    "Manufacturing Engineering",
    "Marine Biologist",
    "Market Research",
    "Marketing Analyst",
    "Marketing Manager",
    "Materials Engineer",
    "Mechanical Engineering",
    "Medical Assistant",
    "Medical Coding",
    "Medical Equipment Technician",
    "Medical Laboratory Scientist",
    "Medical Research",
    "Microbiologist",
    "Mobile App Development (Android)",
    "Mobile App Development (iOS)",
    "Motion Graphics Design",
    "Museum Curator",
    "Music Producer",
    "Network Administrator",
    "Network Engineer",
    "Nutritionist/Dietician",
    "Occupational Therapist",
    "Office Administrator",
    "Oil and Gas Engineer",
    "Operations Analyst",
    "Operations Management",
    "Packaging Design",
    "Paralegal",
    "Patent Analyst",
    "Payroll Specialist",
    "Performance Marketing Specialist",
    "Personal Assistant",
    "Petroleum Engineer",
    "Pharmacist",
    "Photographer",
    "PHP Development",
    "Physical Therapist",
    "Physiotherapist",
    "Pilates Instructor",
    "Policy Analyst",
    "Political Campaign Manager",
    "Portfolio Manager",
    "PR (Public Relations) Specialist",
    "Private Equity Analyst",
    "Product Design",
    "Product Management",
    "Production Assistant",
    "Production Engineer",
    "Project Management",
    "Property Manager",
    "Python Development",
    "Quality Assurance (QA)",
    "Quality Control Analyst",
    "React Native Development",
    "Real Estate Development",
    "Recruiter",
    "Renewable Energy Engineer",
    "Research Analyst",
    "Respiratory Therapist",
    "Restaurant Manager",
    "Risk Management Analyst",
    "Ruby on Rails Development",
    "Travels",
    "Tourism",
    "Web Development",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login();
      navigate(`/student/internships/${userId}`);
      return;
    }
  }, [navigate, userId]);

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    setFilterOpen(isLargeScreen);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState([]);
  const [workType, setWorkType] = useState("All Internships");
  const [selectedStipend, setSelectedStipend] = useState(0);


  // state for country and state

  const [selectedProfile, setSelectedProfile] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const constructQueryStringReset = () => {
    let query = `page=${1}`;
    if (workType && workType !== 'All Internships') query += `&workType=${workType}`;
    if (selectedProfile.length > 0) query += `&jobProfile=${selectedProfile.join(',')}`;
    if (selectedStipend !== 0) query += `&stipend=${selectedStipend}`;
    if (selectedLocation) query += `&location=${selectedLocation}`;
    return query;
  };

  const constructQueryStringPageUpdation = () => {
    let query = `page=${page}`;
    if (workType && workType !== 'All Internships') query += `&workType=${workType}`;
    if (selectedProfile.length > 0) query += `&jobProfile=${selectedProfile.join(',')}`;
    if (selectedStipend !== 0) query += `&stipend=${selectedStipend}`;
    if (selectedLocation) query += `&location=${selectedLocation}`;
    return query;
  };

  useEffect(() => {
    const fetchInternships = async () => {

      try {

        setLoading(true);
        const queryString = constructQueryStringReset();
        const response = await axios.get(`${api}/student/internships?${queryString}`);
        setTotalPages(response.data.totalPages);
        setInternshipsCount(response.data.numOfInternships);

        // setAppliedInternships(appliedResponse.data);
        const sortedInternships = response.data.internships.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const internshipsWithLogo = await Promise.all(
          sortedInternships.map(async (internship) => {
            if (internship.recruiter && internship.recruiter._id) {
              try {
                // Kick off the logo fetch but don't await it here
                const logoPromise = axios.get(
                  `${api}/recruiter/internship/${internship._id}/${internship.recruiter._id}/get-logo`,
                  { responseType: "blob" }
                );

                // Once the promise resolves, process the logo
                const res = await logoPromise;
                const logoBlob = new Blob([res.data], {
                  type: res.headers["content-type"],
                });
                const logoUrl = URL.createObjectURL(logoBlob);

                // Return the internship with the logo URL
                return {
                  ...internship,
                  logoUrl,
                };
              } catch (error) {
                console.error("Error fetching logo:", error);

                // Return internship with a default or null logo URL in case of an error
                return {
                  ...internship,
                  logoUrl: null, // Or use a default image URL here
                };
              }
            }

            // If no recruiter, return the internship as is
            return internship;
          })
        );

        setInternships(internshipsWithLogo);
        // localStorage.setItem('cachedInternships', JSON.stringify(internshipsWithLogo));
        console.log("internhsipswith logo", internshipsWithLogo);
        setLoading(false);

      } catch (err) {
        console.error("Error fetching internships:", err);
        setError("Failed to fetch internships. Please try again later.");
        setLoading(false);
      }
    };

    fetchInternships();
    setPage(1);
  }, [workType, selectedProfile, selectedStipend, selectedLocation]);

  useEffect(() => {

    const fetchInternships = async () => {

      try {
        setLoading(true);
        const queryString = constructQueryStringPageUpdation();
        const response = await axios.get(`${api}/student/internships?${queryString}`);
        setTotalPages(response.data.totalPages);
        setInternshipsCount(response.data.numOfInternships);
        const sortedInternships = response.data.internships.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const internshipsWithLogo = await Promise.all(
          sortedInternships.map(async (internship) => {
            if (internship.recruiter && internship.recruiter._id) {
              try {
                // Kick off the logo fetch but don't await it here
                const logoPromise = axios.get(
                  `${api}/recruiter/internship/${internship._id}/${internship.recruiter._id}/get-logo`,
                  { responseType: "blob" }
                );

                // Once the promise resolves, process the logo
                const res = await logoPromise;
                const logoBlob = new Blob([res.data], {
                  type: res.headers["content-type"],
                });
                const logoUrl = URL.createObjectURL(logoBlob);

                // Return the internship with the logo URL
                return {
                  ...internship,
                  logoUrl,
                };
              } catch (error) {
                console.error("Error fetching logo:", error);

                // Return internship with a default or null logo URL in case of an error
                return {
                  ...internship,
                  logoUrl: null, // Or use a default image URL here
                };
              }
            }

            // If no recruiter, return the internship as is
            return internship;
          })
        );

        setInternships(internshipsWithLogo);
        // localStorage.setItem('cachedInternships', JSON.stringify(internshipsWithLogo));
        console.log("internhsipswith logo", internshipsWithLogo);
        setLoading(false);

      } catch (err) {
        console.error("Error fetching internships:", err);
        setError("Failed to fetch internships. Please try again later.");
        setLoading(false);
      }
    };

    fetchInternships();
  }, [page]);

  const handleRedirect = () => {
    navigate("/student/login");
  };


  // const indexOfLastInternship = currentPage * internshipsPerPage;
  // const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  // const currentInternships = filteredInternships.slice(
  //   indexOfFirstInternship,
  //   indexOfLastInternship
  // );
  // const totalPages = Math.ceil(filteredInternships.length / internshipsPerPage);

  const handleNextPage = () => {

    setPage(page + 1);
    // setTimeout(() => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    //   scrollToTop();
    // }, 500);

  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      //   setTimeout(() => {
      //     window.scrollTo({ top: 0, behavior: 'smooth' });
      //     scrollToTop();
      //   }, 500);

    }
  };

  useEffect(() => {
    if (internships.length > 0) {
      scrollToTop();
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }
  }, [internships])


  const scrollToTop = () => {
    scrollableRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleChange = (value) => {
    setSelectedLocation(value);
  };

  const handleReset = () => {
    setSelectedLocation([]);
    setWorkType("All Internships");
    setSelectedStipend(0);
    setSelectedProfile([]);
  };


  console.log('this is location', selectedLocation)
  console.log('this is page no', page)

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }
  // country state city Api

  // Get available states and cities based on selections
  const states = selectedCountry
    ? countryData.find((c) => c.name === selectedCountry)?.states
    : [];
  const cities = selectedState
    ? states.find((s) => s.name === selectedState)?.cities
    : [];

  return (
    <div className="py-10 px-5 mt-10 min-h-screen bg-gray-100 relative">

      <div className="flex flex-col lg:flex-row w-full lg:w-[90%] mx-auto gap-10">
        {/* this below div is filter button */}
        <div
          className={`lg:hidden flex space-x-1 border-2 px-3 py-1 rounded-lg w-fit items-center bg-white hover:cursor-pointer hover:border-blue-400 mt-5 ${filterOpen && "border-blue-400"
            }`}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <span>Filters</span>
          <FaFilter className="hover:cursor-pointer text-blue-500" />
        </div>

        {/* this below div is filter options */}
        <div
          className={` ${filterOpen ? "block" : "hidden"
            } w-[84%] md:w-[90%] mx-auto lg:w-[40%] xl:w-[30%] h-full lg:max-h-screen lg:mt-24 px-6 shadow-xl border-t py-6 overflow-y-auto scrollbar-thin bg-white rounded-lg relative `}
        >
          <h1 className="text-center font-extrabold text-xl tracking-widest">
            Filters
          </h1>
          <FaTimes
            onClick={() => setFilterOpen(false)}
            className="absolute right-3 top-5 lg:hidden text-blue-500 hover:cursor-pointer"
          />

          <p className="mb-4 mt-6">Type of Internship:</p>
          <button
            onClick={handleReset}
            className="absolute right-5 top-[76px] text-blue-400 underline"
          >
            Reset filters
          </button>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="work-type"
                value="All Internships"
                checked={workType === "All Internships"}
                onChange={(e) => setWorkType(e.target.value)}
                className="form-radio text-blue-600 h-6 w-6 "
              />
              <span className="text-[17px]">All Internships</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="work-type"
                value="Work from Home"
                checked={workType === "Work from Home"}
                onChange={(e) => setWorkType(e.target.value)}
                className="form-radio text-green-600 h-6 w-6"
              />
              <span className="">Work from Home</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="work-type"
                value="Work from Office"
                checked={workType === "Work from Office"}
                onChange={(e) => setWorkType(e.target.value)}
                className="form-radio text-blue-600 h-6 w-6"
              />
              <span className="">Work from Office</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="work-type"
                value="Hybrid"
                checked={workType === "Hybrid"}
                onChange={(e) => setWorkType(e.target.value)}
                className="form-radio text-blue-600 h-6 w-6"
              />
              <span className="">Hybrid</span>
            </label>
          </div>

          <StipendSlider
            selectedStipend={selectedStipend}
            setSelectedStipend={setSelectedStipend}
          />
          <div className="my-4 ">
            <p>Profile</p>
            <Select
              value={selectedProfile.map((profile) => ({
                value: profile,
                label: profile,
              }))}
              onChange={(values) => setSelectedProfile(values.map((option) => option.value))}
              options={jobProfiles.map((job) => ({
                value: job,
                label: job,
              }))}
              isMulti
              placeholder="e.g Marketing"
              className="w-full mb-3 shadow-md  "
              classNamePrefix="custom-select-dropdown"
            />
          </div>

          {(workType === "Work from Office" || workType === "Hybrid") && (
            <div className="mt-7">
              <p className="mt-6 mb-2 font-bold">Location</p>
              {/* <Select
                options={statesAndCities}
                value={selectedLocation.map((location) => ({
                  value: location,
                  label: location,
                }))}
                onChange={(values)=>setSelectedLocation(values.map((option)=>option.value))}
                placeholder="Select a location"
                searchable={true}
                isMulti
                className="w-full shadow-md"
                classNamePrefix="custom-select-dropdown"
              /> */}
              <div className="flex flex-col gap-3">
                {/* Country Dropdown */}
                <select
                  className="border-2 py-1 rounded-md px-2"
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedState(""); // Reset state and cities dropdowns
                  }}
                >
                  <option value="">-- Select Country --</option>
                  {countryData.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                {/* State Dropdown */}
                <select
                  className="border-2 py-1 rounded-md px-2"
                  id="state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  disabled={!selectedCountry}
                >
                  <option value="">-- Select State --</option>
                  {states?.map((state) => (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>

                {/* City Dropdown */}
                <select
                  id="city"
                  disabled={!selectedState}
                  className="border-2 py-1 rounded-md px-2"
                >
                  <option value="">-- Select City --</option>
                  {cities?.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2  text-center lg:hidden">
          {internshipsCount} Total Internships
        </h1>

        {/* internships div */}
        <div className="w-full lg:w-[79%]">
          <h1 className="text-3xl font-bold mb-8 mt-8 text-center hidden lg:block">
            {internshipsCount} Total Internships
          </h1>

          {/* list of internships */}
          <div className="flex-1  lg:mt-0    h-screen scrollbar-thin">
            <div className="flex flex-col justify-center bg-gray-100 ">
              {/* this below div is list of internships */}

              <div ref={scrollableRef} className="overflow-scroll scrollbar-thin h-[90vh] overflow-x-hidden ">
                {internships.map((internship) => (
                  <div
                    key={internship._id}
                    className="bg-white shadow-md rounded-lg px-3 py-2 w-full  h-fit lg:w-[90%] mb-3 mx-auto relative "
                  >
                    <div className="flex justify-between items-center">
                      <div className="mb-0">
                        <h2 className="text-lg lg:text-2xl font-semibold md:mb-0">
                          {internship.internshipName}
                        </h2>
                        <p className="text-gray-600">
                          {internship.recruiter.companyName !== '' ? internship.recruiter.companyName : internship.recruiter.firstname + ' ' + internship.recruiter.lastname}
                        </p>
                      </div>

                      <div className="flex space-x-3 items-center">
                        <button
                          onClick={handleRedirect}
                          className="hidden sm:flex justify-center text-white ml-0 gap-2 items-center mx-auto  text-md bg-blue-400 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-lg before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-1 overflow-hidden border-2 rounded-md group h-fit  "
                        >
                          Apply
                        </button>
                        {internship.logoUrl ? (
                          <img
                            src={internship.logoUrl}
                            alt={internship.logoUrl}
                            className=" w-16 h-16"
                          />
                        ) : (
                          <FaBuilding className=" w-16 h-16 text-gray-600" />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col text-sm md:text-base md:space-x-3 md:flex-row ">
                      <div className="flex items-center text-gray-700 mb-2">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>
                          {internship.internLocation
                            ? `${internship.internLocation}`
                            : "Remote"}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-700 mb-2">
                        <FaClock className="mr-2" />
                        <span>{internship.duration} Months</span>
                      </div>

                      {internship.stipendType === "unpaid" && (
                        <div className="flex items-center text-gray-700 mb-2">
                          <FaMoneyBillWave className="mr-1" />
                          <span>Unpaid</span>
                        </div>
                      )}

                      {internship.stipendType !== "unpaid" && (
                        <div className="flex items-center space-x-1">
                          <div className="flex items-center text-gray-700 mb-2">
                            <FaMoneyBillWave className="mr-1" />
                            <span>
                              {internship.currency} {internship.stipend} /month
                            </span>
                          </div>

                          {internship.stipendType === "performance-based" && (
                            <div className="flex items-center text-gray-700">
                              <span>+ incentives</span>
                              <div className="relative group ">
                                <FaQuestion className="border border-black p-1 mx-1 rounded-full hover:cursor-pointer" />
                                <span className="absolute hidden group-hover:block bg-gray-700 text-white text-base rounded p-1 w-[250px]">
                                  This is a Performance Based internship.{" "}
                                  {internship.incentiveDescription}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex text-sm md:text-base space-x-4 items-center">
                      <div
                        className={`${internship.studentCount < 20
                            ? "text-green-500"
                            : "text-gray-500"
                          }  w-fit my-2 sm:my-0 md:w-auto`}
                      >
                        {internship.studentCount} Applicants
                      </div>

                      {internship.studentCount < 20 && (
                        <div className="flex  space-x-2 items-center">
                          <FaRunning className="text-yellow-500  w-5 h-5" />
                          <span className="text-gray-500">Early Applicant</span>
                        </div>
                      )}

                      {internship.ppoCheck === "yes" && (
                        <div className="text-gray-500 flex space-x-2 items-center">
                          <FaStar /> <span>Job offer Available</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-500 mb-2 md:mb-4 text-sm md:text-base">
                      Posted: {TimeAgo(internship.createdAt)}
                    </p>

                    <button
                      onClick={handleRedirect}
                      className="flex sm:hidden justify-center text-white ml-0 gap-2 items-center mx-auto  text-md bg-blue-400 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-lg before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-1 overflow-hidden border-2 rounded-md group h-fit  "
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>


              
              {internships.length > 0 && <div className="flex justify-center my-4 space-x-4">
                {/* <button
                  onClick={handlePreviousPage}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md ${page === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                >
                  <FaAngleLeft />
                </button> */}

                {/* <span>{page} / {totalPages}</span> */}
                <button
                  onClick={handlePreviousPage}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md ${page === 1
                    ? 'bg-gray-300'
                    : 'bg-blue-500 text-white'

                    }`}
                >
                  <FaAngleLeft />
                </button>

                <span>
                  {page} / {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-md ${page ===
                     totalPages
                      ? "bg-gray-300"
                      : "bg-blue-500 text-white"
                    }`}
                >
                  <FaAngleRight />
                </button>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsUniversal;
