import { NavLink } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Sidebar() {
    return (
        <aside className="flex flex-col space-y-3 p-4 min-w-24">
            <h1 className="whitespace-nowrap">Jobify Dashboard</h1>
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
                    <AccordionTrigger>Job Management</AccordionTrigger>
                    <AccordionContent>
                        <NavLink
                            to="/dashboard/job-management"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-400" : ""
                            }
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
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
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
