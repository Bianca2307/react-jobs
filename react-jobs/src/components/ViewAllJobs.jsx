import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function ViewAllJobs() {
    const { t } = useTranslation();

    return (
        <>
            <section className="m-auto max-w-lg my-10 px-6">
                <Link
                    to="jobs"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                   {t('ALL_JOBS.VIEW_ALL')}
                </Link>
            </section>
        </>
    );
}
