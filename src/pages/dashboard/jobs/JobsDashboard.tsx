import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi";
import { Delete, Edit, Trash2Icon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";


export default function JobsDashboard() {
    const { data, isLoading } = useGetJobsQuery({ page: 1, limit: 10 })
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <Table className="text-left">
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Salary</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {data?.data?.map((job) => (
                        <TableRow key={job._id}>
                            <Link to={`/dashboard/job-management/${job._id}`}>
                                <TableCell>{job.title}</TableCell>
                            </Link>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.location}</TableCell>
                            <TableCell>{job.salary}$</TableCell>

                            <TableCell className="flex justify-end gap-2 items-center">
                                <Button variant={"outline"}><Edit /></Button>
                                <Button variant={'outline'}><TrashIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4} className="text-right">Total Jobs: {data?.total}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
