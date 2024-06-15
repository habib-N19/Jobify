import { DeleteCompanyDialogue } from "@/components/DeleteCompanyDialogue";
import { PaginationComponent } from "@/components/PaginationComponent";


import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetCompaniesQuery } from "@/redux/features/company-management/companiesApi";
import { Edit } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function CompaniesDashboard() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetCompaniesQuery({ page: page, limit: 10 })
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <Table className="text-left">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Industry</TableHead>
                        <TableHead>Contact Mail</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {data?.data?.map((company) => (
                        <TableRow key={company._id}>
                            <Link to={`/dashboard/company-management/${company._id}`}>
                                <TableCell>{company.name}</TableCell>
                            </Link>
                            <TableCell>{company.industry}</TableCell>
                            <TableCell>{company.contactEmail}</TableCell>
                            <TableCell>{company.address}$</TableCell>

                            <TableCell className="flex justify-end gap-2 items-center">
                                <Link to={`/dashboard/company-management/update/${company._id}`}><Edit /></Link>
                                <DeleteCompanyDialogue id={company._id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <PaginationComponent page={data?.page || 1} setPage={setPage} totalPages={data?.pages || 0} />
                        <TableCell colSpan={4} className="text-right">Total Jobs: {data?.total}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
