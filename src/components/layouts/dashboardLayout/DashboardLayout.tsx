
import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";


export default function DashboardLLayout() {


    return (
        <div className="flex justify-between gap-4">
            <Sidebar />
            <main
                className={cn(
                    " border border-gray-200 rounded-md p-4 w-full h-full overflow-y-auto",

                )}
            >
                <Outlet />
            </main>
        </div>
    );
}
