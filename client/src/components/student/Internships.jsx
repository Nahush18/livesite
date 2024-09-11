import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaMoneyBillWave, FaUsers, FaClipboardList, FaTimes, FaClock, FaCheck, FaBuilding, FaArrowLeft } from 'react-icons/fa';
import Spinner from '../common/Spinner';
import getUserIdFromToken from './auth/authUtils';
import TimeAgo from '../common/TimeAgo';
import api from '../common/server_url';
import { toast } from 'react-toastify';
// import CustomDropdown from './utils/CustomDropdown';
import Select from 'react-select';
import CustomRadio from './utils/CustomRadio';
import StipendSlider from './utils/StipendSlider';
import { useStudent } from './context/studentContext'
// import CustomRadio from './utils/CustomRadio';


const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [appliedInternships, setAppliedInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { student } = useStudent();
  const userId = getUserIdFromToken();
  const statesAndUTs = [
    { value: 'All Locations', label: 'All Locations' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },
    { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: 'Lakshadweep', label: 'Lakshadweep' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Puducherry', label: 'Puducherry' },
    { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
    { value: 'Ladakh', label: 'Ladakh' }
  ];
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
    "Web Development"
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [workType, setWorkType] = useState('');
  const [selectedStipend, setSelectedStipend] = useState(0);
  const [isInterestedModalOpen, setIsInterestedModalOpen] = useState(false);
  const [availability, setAvailability] = useState('Yes! Will join Immediately');
  const [resumeUrl, setResumeUrl] = useState(null);
  const [resumeFilename, setResumeFilename] = useState(null);
  console.log(workType);



  useEffect(() => {
    const fetchInternships = async () => {
      try {
        console.log('LocationName', selectedLocation);
        console.log('WorkType:', workType);
        console.log('profile', selectedProfile);

        let queryParam = '';
        if (workType === 'Work from Home') {
          queryParam = '?workType=Work from Home';
          setSelectedLocation(null);
        } else if (workType === 'Work from Office' && selectedLocation) {
          queryParam = `?workType=Work from Office&locationName=${selectedLocation.value}`;
        } else if (workType === 'Work from Office' && !selectedLocation) {
          queryParam = '?workType=Work from Office';
        }

        if (selectedStipend > 0) {
          queryParam += queryParam ? `&minStipend=${selectedStipend}` : `?minStipend=${selectedStipend}`;
        }

        if (selectedProfile) {
          queryParam += queryParam ? `&profile=${selectedProfile.value}` : `?profile=${selectedProfile.value}`;
        }


        const response = await axios.get(`${api}/student/${userId}/internships${queryParam}`);
        const sortedInternships = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const internshipsWithLogo = await Promise.all(sortedInternships.map(async (internship) => {
          if (internship.recruiter && internship.recruiter._id) {
            try {
              const res = await axios.get(`${api}/recruiter/internship/${internship._id}/${internship.recruiter._id}/get-logo`, {
                responseType: 'blob'
              });

              const logoBlob = new Blob([res.data], { type: res.headers['content-type'] });
              const logoUrl = URL.createObjectURL(logoBlob);
              console.log(logoUrl);

              return {
                ...internship,
                logoUrl
              };
            } catch (error) {
              console.error('Error fetching logo:', error);
              return {
                ...internship,
                logoUrl: null // Or a default image URL
              };
            }
          }
          return internship;
        }));

        setInternships(internshipsWithLogo);
        console.log('internhsipswith logo', internshipsWithLogo);

        const appliedResponse = await axios.get(`${api}/student/internship/${userId}/applied-internships`);
        setAppliedInternships(appliedResponse.data);
        setLoading(false);

      } catch (err) {
        console.error('Error fetching internships:', err);
        setError('Failed to fetch internships. Please try again later.');
        setLoading(false);
      }
    };

    fetchInternships();
  }, [userId, workType, selectedLocation, selectedStipend, selectedProfile]);

  useEffect(() => {
    // Fetch the resume from the backend
    const fetchResume = async () => {
      try {
        const response = await axios.get(`${api}/student/resume/${userId}`, {
          responseType: 'blob', // Set response type to blob for binary data
        });


        // Create a URL for the blob data
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setResumeUrl(url);
        console.log(resumeUrl);

        const contentDisposition = response.headers['content-disposition'];
        // console.log('contentDisposition:', contentDisposition);
        // console.log(Object.keys(response.headers));
        // console.log('response.headers:', response.headers);
        if (contentDisposition) {
          console.log('yattttaaa');
          const matches = /filename="([^"]*)"/.exec(contentDisposition);
          if (matches) setResumeFilename(matches[1]);
        }

        // setResumeCreatedAt(createdAt);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [userId]);
  console.log('this is resume', resumeUrl);


  const openModal = async (internship) => {
    setSelectedInternship(internship);
    console.log('selected internship', internship);
    try {
      const response = await axios.put(`${api}/student/internship/${internship._id}/view`);
      // console.log(response.data);
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };

  const closeModal = () => {
    setSelectedInternship(null);
    setIsInterestedModalOpen(false);
  };

  const openInterestedModal = () => {
    setIsInterestedModalOpen(true);
  };

  const closeInterestedModal = () => {
    setIsInterestedModalOpen(false);
  };

  const applyToInternship = async (internshipId) => {
    try {
      const response = await axios.post(`${api}/student/internship/${userId}/apply/${internshipId}`);
      if (response.status === 200) {
        if (response.data.success) {
          toast.success('You have already applied for this Internship');
          return;
        }
        toast.success('Successfully applied to the internship');
      } else {
        toast.error('Failed to apply');
      }
    } catch (error) {
      toast.error('Error applying to internship');
    }
  };

  const handleChange = (value) => {
    setSelectedLocation(value);
  }

  const handleReset = () => {
    setSelectedLocation(null);
    setWorkType('');
    setSelectedStipend(0);
    setSelectedProfile(null);
  }

  const isAlreadyApplied = (internshipId) => {
    return appliedInternships.some((applied) => applied.internship._id === internshipId);
  };

  const handleRadioChange = (e) => {
    if (e.target.value === 'Yes') setAvailability('Yes! Will join Immediately');
    else if (e.target.value === 'No') setAvailability('No! Cannot Join immediately')
  }

  console.log(selectedStipend);


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

  return (

    <div className="py-10 px-5 mt-10 relative min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 mt-8 absolute left-1/2 transform-translate-x-1/2 translate-x-14">{internships.length} Total Internships</h1>

      <div className='flex justify-end '>
        <div className=' w-[20%] mt-0 px-6 h-screen fixed left-28 shadow-xl border-t py-6 overflow-y-hidden bg-white'>
          <h1 className='text-center font-extrabold text-xl tracking-widest'>Filters</h1>

          <p className='mb-4 mt-6'>Type of Internship:</p>
          <button onClick={handleReset} className='absolute right-4 top-20 text-blue-400 underline'>Reset filters</button>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="work-type"
                value=""
                checked={workType === ''}
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
                checked={workType === 'Work from Home'}
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
                checked={workType === 'Work from Office'}
                onChange={(e) => setWorkType(e.target.value)}
                className="form-radio text-blue-600 h-6 w-6"
              />
              <span className="">Work from Office</span>
            </label>
          </div>
          <div className='my-4'>
            <p>Profile</p>
            <Select
              value={selectedProfile}
              onChange={(values) => setSelectedProfile(values)}
              options={jobProfiles.map(job => (
                {
                  value: job,
                  label: job
                }
              ))}
              placeholder="e.g Marketing"
              className='w-full mb-3 shadow-md'
            />
          </div>

          <StipendSlider selectedStipend={selectedStipend}
            setSelectedStipend={setSelectedStipend} />


          {
            workType === 'Work from Office' &&
            <div className='mt-12'>
              <p className='mt-6 mb-2 font-bold'>Location</p>
              <Select
                options={statesAndUTs}
                values={selectedLocation}
                onChange={handleChange}
                placeholder="Select a location"
                searchable={true}
                className='w-full shadow-md'

              />
            </div>

          }

        </div>


        <div className="w-[60%] mr-32 mt-28 ">

          <div className="flex flex-col justify-center bg-gray-100">
            {internships.map((internship) => (
              <div key={internship._id} className="bg-white shadow-md rounded-lg p-6 w-[95%] my-3 mx-auto relative">
                <h2 className="text-2xl font-semibold mb-2">{internship.internshipName}</h2>


                {internship.logoUrl ? (<img src={internship.logoUrl} alt={internship.logoUrl} className='absolute right-4 top-2 w-20 h-20' />) : (<FaBuilding />)}

                {/* <p className="text-gray-600 mb-4">Posted by: {internship.recruiter.firstname} {internship.recruiter.lastname}</p> */}
                <p className='text-gray-600 mb-4'>Posted: {TimeAgo(internship.createdAt)}</p>

                <div className="flex items-center text-gray-700 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{internship.internLocation ? `${internship.internLocation}` : 'Remote'}</span>
                </div>

                <div className="flex items-center text-gray-700 mb-2">
                  <FaMoneyBillWave className="mr-2" />
                  <span>₹ {internship.stipend}</span>
                </div>


                {/* {internship.internLocation &&
                  <div className="flex items-center text-gray-700 mb-4">
                    <FaClipboardList className="mr-2" />
                    <span>{internship.internshipType}</span>
                  </div>
                } */}

                {/* <h3 className="text-lg font-medium mb-2">Skills Required:</h3>
                <div className="flex flex-wrap mb-4">
                  {internship.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}

                {isAlreadyApplied(internship._id) && (
                  <p className="text-green-600 inline-flex rounded-xl border border-green-600 px-2 py-1">Applied<FaCheck className='ml-2 mt-1' /></p>
                )}
                <div className='text-gray-500 my-2'>{internship.studentCount} Applicants</div>
                {/* <FaBuilding /> */}
                <button
                  onClick={() => openModal(internship)}
                  className=" w-auto my-2 rounded-md text-blue-500 hover:scale-105 duration-300"
                >
                  View details
                </button>

              </div>
            ))}

            {selectedInternship && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40  " onClick={closeModal}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white border-2 border-gray-600 rounded-lg shadow-3xl w-[60%] h-[90%] p-6 relative overflow-auto">
                    <div className='border-b'>
                      <h2 className="text-2xl font-semibold mb-4">Applying for {selectedInternship.internshipName}</h2>
                      <button
                        onClick={closeModal}
                        className="absolute top-7 right-4 text-blue-500 hover:text-blue-700 focus:outline-none"
                      >
                        <FaTimes />
                      </button>
                      <p className="text-gray-600 mb-4">{selectedInternship.recruiter.companyName}</p>
                    </div>

                    <button
                      onClick={openInterestedModal}
                      className='absolute bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-xl right-5 top-[130px]'
                    >
                      I'm Interested
                    </button>

                    <div className="flex items-center text-gray-700 mb-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{selectedInternship.internLocation ? `${selectedInternship.internLocation}` : 'Remote'}</span>
                    </div>

                    <div className="flex items-center text-gray-700 mb-2">
                      <FaMoneyBillWave className="mr-2" />
                      <span>₹ {selectedInternship.stipend}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaClock className="mr-2" />
                      <span>{selectedInternship.duration} Months</span>
                    </div>

                    <div className="flex items-center text-gray-700 mb-2">
                      <FaUsers className="mr-2" />
                      <span>{selectedInternship.numberOfOpenings} Openings</span>
                    </div>

                    {selectedInternship.internLocation &&
                      <div className="flex items-center text-gray-700 mb-4">
                        <FaClipboardList className="mr-2" />
                        <span>{selectedInternship.internshipType}</span>
                      </div>
                    }

                    <h3 className="text-lg font-medium mb-2">Skills Required:</h3>
                    <div className="flex flex-wrap mb-4">
                      {selectedInternship.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-medium mb-2">Description:</h3>
                    <div
                      className="text-gray-700 mb-4"
                      dangerouslySetInnerHTML={{ __html: selectedInternship.description }}
                    ></div>

                    <h3 className="text-lg font-medium mb-2">Perks and Benefits</h3>
                    <div className="flex flex-wrap mb-4">
                      {selectedInternship.perks.map((perk, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                        >
                          {perk}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </>
            )}

            {isInterestedModalOpen && (<>
              <div className="fixed inset-0 bg-black bg-opacity-5 z-40" onClick={closeModal}></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white border-2 border-gray-600 rounded-lg shadow-3xl w-[60%] h-[90%] py-8 px-10 relative overflow-auto flex flex-col space-y-3">
                  <div className='border-b '>

                    <h2 className="text-2xl font-semibold mb-1">Thank you for showing interest!</h2>
                    <h1 className='text-gray-700 my-2'>{selectedInternship.recruiter.companyName}</h1>

                    <button
                      onClick={closeModal}
                      className="absolute top-7 right-4 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      <FaTimes />
                    </button>

                  </div>
                  {selectedInternship.internLocation !== '' && student.homeLocation !== selectedInternship.internLocation && (
                    <h1 className='text-red-500'>This Internship requires Relocation!</h1>
                  )}

                  <div>
                    <div className='resume-box mt-4'>
                      <h1 className='text-xl font-semibold'>Your Resume</h1>

                      <div className='flex space-x-2'>
                        <h1 className='text-gray-600'>This Resume will be submitted along with you application</h1>
                        {resumeUrl && (
                          <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-400'
                            download={resumeFilename}
                          >
                            Click to view
                          </a>
                        )}
                      </div>
                    </div>

                    <div className='about-yourself-box mt-9'>
                      <h1 className='text-xl font-semibold'>Tell us about yourself</h1>
                      <textarea className='my-3 w-[80%] p-2 border-2' placeholder='Mention your skills, your interests, your previous experience in my company, achievements and Why do you want to work with us.' rows={4}></textarea>
                    </div>

                    <div className='availability-check mt-4'>
                      <h1>Can you join Immediately?</h1>
                      <div className='flex flex-col text-gray-600 my-2'>
                        <label >
                          <input
                            type="radio"
                            value="Yes"
                            checked={availability === 'Yes! Will join Immediately'}
                            onChange={handleRadioChange}
                          />
                          <span className='mx-1'>Yes</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="No"
                            checked={availability === 'No! Cannot Join immediately'}
                            onChange={handleRadioChange}
                          />
                          <span className='mx-1'>No</span>
                        </label>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Internships;
