import Card from "./Card"
import { useTranslation } from "react-i18next";

export default function HomeCards() {
    const { t } = useTranslation();

    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-2xl font-bold">{t('HOME.FOR_DEVELOPERS') }</h2>
                        <p className="mt-2 mb-4">
                            {t('HOME.BROWSE_JOBS')}
                        </p>
                        <a
                            to="/jobs"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                         {t('HOME.BROWSE')}   
                        </a>
                    </Card>
                    <Card bg="bg-indigo-100">
                        <h2 className="text-2xl font-bold">{t('HOME.FOR_EMPLOYERS') }</h2>
                        <p className="mt-2 mb-4">
                            {t('HOME.LIST_JOB')}
                        </p>
                        <a
                            to="/add-job"
                            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            {t('HOME.ADD_JOB')}
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    );
}