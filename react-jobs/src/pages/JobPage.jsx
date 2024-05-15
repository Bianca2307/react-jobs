/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function JobPage({deleteJob}) {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const res = await fetch(`http://localhost:8000/jobs/${id}`);
                const data = await res.json();
                console.log(data);
                setJobDetails(data);
            } catch (error) {
                console.log('Error fetching job details', error);
            }
        }
        fetchJobDetails();
    }, [id])

    const onDeleteClick = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this job?');

        if (!confirm) return;

        deleteJob(id);

        toast.success('Job deleted successfully');
        
        navigate("/jobs")
   }
    

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> {t('JOB_DETAILS.BACK')}
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">
                                    {jobDetails.type ? jobDetails.type : ""}
                                </div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {jobDetails.title}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className="text-orange-700 mr-1" />
                                    <p className="text-orange-700">
                                        {jobDetails.location ? jobDetails.location : ""}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    {t('JOB_DETAILS.DESCRIPTION')}
                                </h3>

                                <p className="mb-4">{jobDetails.description ? jobDetails.description : ""}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                                    {t('JOB_DETAILS.SALARY')}
                                </h3>

                                <p className="mb-4">{jobDetails.salary ? jobDetails.salary : ""} / Year</p>
                            </div>
                        </main>
                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">
                                    {t('JOB_DETAILS.COMPANY_INFO')}
                                </h3>

                                 {/* <h2 className="text-2xl">{jobDetails.company.name}</h2>

                                 <p className="my-2">
                                    {jobDetails.company.description}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {jobDetails.company.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {" "}
                                    {jobDetails.company.contactPhone}
                                </p>   */}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">
                                    {t('JOB_DETAILS.MANAGE')}
                                </h3>
                                <Link
                                    to={`/edit/${jobDetails.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    {t('JOB_DETAILS.EDIT')}
                                </Link>
                                <button
                                    onClick={() => onDeleteClick(jobDetails.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    {t('JOB_DETAILS.DELETE')}
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}