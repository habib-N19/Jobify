import { Link, NavLink } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Sidebar() {
    return (
        <aside className="flex flex-col space-y-3 p-4 min-w-32 text-left">
            <Link to='/' className="whitespace-nowrap font-bold text-xl">Jobify </Link>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400" : ""
                }
                end  >
                Dashboard
            </NavLink>


            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-nowrap">Job Management</AccordionTrigger>
                    <AccordionContent className="flex flex-col font-semibold space-y-4">
                        <NavLink
                            to="/dashboard/job-management"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-400" : ""
                            }
                            end
                        >
                            Job Management
                        </NavLink>
                        <NavLink
                            to="/dashboard/job-management/add-job"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-400" : ""
                            }
                        >
                            Add New Job
                        </NavLink>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">Company Management</AccordionTrigger>
                    <AccordionContent className="flex flex-col font-semibold space-y-4">
                        <NavLink
                            to="/dashboard/company-management"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-400" : ""
                            }
                        >
                            Company Management
                        </NavLink>
                        <NavLink
                            to="/dashboard/company-management/add-company"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-400" : ""
                            }
                        >
                            Add New Company
                        </NavLink>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    )
}
