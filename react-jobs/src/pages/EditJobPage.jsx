/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EditJobPage({updateJobSubmit}) {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()
    const { t } = useTranslation();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log("Error fetching job", error);
            }
        };
        fetchJob();
    }, []);

       const [form, setForm] = useState({
           type: "",
           title: "",
           description: "",
           salary: "",
           location: "",
           company: "",
           company_description: "",
           contact_email: "",
           contact_phone: "",
       });
    
    useEffect(() => {
        setForm({
            type: job.type,
            title: job.title,
            description: job.description,
            salary: job.salary,
            location: job.location,
            //company:job.company.name ? job.company.name : ''
           
        });
    }, [job]);

       function handleChange(event) {
           setForm((prevFormData) => ({
               ...prevFormData,
               [event.target.name]: event.target.value,
           }));
       }

       const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("Submit");

           const updatedJob = {
              id,
              title: form.title,
              type: form.type,
              description: form.description,
              salary: form.salary,
              location: form.location,
              company: {
                  name: form.company,
                  description: form.company_description,
                  contactEmail: form.contact_email,
                  contactPhone: form.contact_phone,
              },
          };

          updateJobSubmit(updatedJob);
        
          return navigate(`/jobs/${id}`);

       };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl text-center font-semibold mb-6">
                            Edit Job
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.JOB_TYPE')}
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                {t('ADD_JOB.JOB_LISTING_NAME')}
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.DESCRIPTION')}
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Add any job duties, expectations, requirements, etc"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.SALARY')}
                            </label>
                            <select
                                id="salary"
                                name="salary"
                                value={form.salary}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            >
                                <option value="Under $50K">Under $50K</option>
                                <option value="$50K - 60K">$50K - $60K</option>
                                <option value="$60K - 70K">$60K - $70K</option>
                                <option value="$70K - 80K">$70K - $80K</option>
                                <option value="$80K - 90K">$80K - $90K</option>
                                <option value="$90K - 100K">
                                    $90K - $100K
                                </option>
                                <option value="$100K - 125K">
                                    $100K - $125K
                                </option>
                                <option value="$125K - 150K">
                                    $125K - $150K
                                </option>
                                <option value="$150K - 175K">
                                    $150K - $175K
                                </option>
                                <option value="$175K - 200K">
                                    $175K - $200K
                                </option>
                                <option value="Over $200K">Over $200K</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                {t('ADD_JOB.LOCATION')}
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Company Location"
                                required
                            />
                        </div>

                        <h3 className="text-2xl mb-5">Company Info</h3>

                        <div className="mb-4">
                            <label
                                htmlFor="company"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.COMPANY_NAME')}
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="company_description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.COMPANY_DESCRIPTION')}
                            </label>
                            <textarea
                                id="company_description"
                                name="company_description"
                                value={form.company_description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="What does your company do?"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="contact_email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.CONTACT_EMAIL')}
                            </label>
                            <input
                                type="email"
                                id="contact_email"
                                name="contact_email"
                                value={form.contact_email}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Email address for applicants"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact_phone"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {t('ADD_JOB.CONTACT_PHONE')}
                            </label>
                            <input
                                type="tel"
                                id="contact_phone"
                                name="contact_phone"
                                value={form.contact_phone}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Optional phone for applicants"
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {t('HOME.ADD_JOB')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}