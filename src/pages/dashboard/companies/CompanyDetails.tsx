import Loading from '@/components/Loading'
import { useGetCompanyByIdQuery } from '@/redux/features/company-management/companiesApi'
import { useGetJobsByCompanyIdQuery } from '@/redux/features/jobs/jobsApi'
import { Link, useParams } from 'react-router-dom'

export default function CompanyDetails() {
    const { id } = useParams<{ id: string }>()
    const companyId = id || ""

    const { data, isLoading } = useGetCompanyByIdQuery({ companyId })

    const { data: jobInfo } = useGetJobsByCompanyIdQuery({ companyId })

    if (isLoading) {
        return <Loading />
    }
    console.log(jobInfo);


    return (
        <>
            <h1 className="font-bold text-xl  lg:text-3xl">


                Company Name: {data?.data.name}
            </h1>

            <div className="text-left w-2/3 mx-auto p-5">
                <p>Job Description: {data?.data.address}</p>
                <p>Salary : {data?.data.industry}</p>
                <p>Location : {data?.data.contactEmail}</p>

                <div>
                    <h1>Available Jobs</h1>
                    <ul>
                        {jobInfo?.data.map((job) => (
                            <li key={job._id}>
                                <Link to={`/dashboard/job-management/${job._id}`}>{job.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </>

    )
}
