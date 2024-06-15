
import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";


export default function DashboardLLayout() {


    return (
        <div className="flex justify-between">
            <Sidebar />
            <main
                className={cn(
                    " border w-full",

                )}
            >
                <Outlet />
            </main>
        </div>
    );
}
