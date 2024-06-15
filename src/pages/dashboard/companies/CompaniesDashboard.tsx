import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetCompaniesQuery } from "@/redux/features/company-management/companiesApi";
import { Edit, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";


export default function CompaniesDashboard() {
    const { data, isLoading } = useGetCompaniesQuery({ page: 1, limit: 10 })
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
                    {data?.data?.map((company) => (
                        <TableRow key={company._id}>
                            <Link to={`/dashboard/job-management/${company._id}`}>
                                <TableCell>{company.title}</TableCell>
                            </Link>
                            <TableCell>{company.company}</TableCell>
                            <TableCell>{company.location}</TableCell>
                            <TableCell>{company.salary}$</TableCell>

                            <TableCell className="flex justify-end gap-2 items-center">
                                <Link to={`/dashboard/job-management/update/${company._id}`}><Edit /></Link>
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
