// import { SidebarProvider } from "@/components/ui/sidebar";
// import UISidebar from "./Sidebar";
// import Navbar from "@/components/layouts/Navbar"
// export default function MainLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <SidebarProvider>
//             <UISidebar />
//             <Navbar />
//             <main>
//                 {children}
//             </main>

//         </SidebarProvider>
//     )
// }
import { SidebarProvider } from "@/components/ui/sidebar";
import UISidebar from "./Sidebar";
import Navbar from "@/components/layouts/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            
            <div className="flex">
                <UISidebar />
                <div className="flex flex-col">
                    <Navbar />
                    <main className="w-screen p-4">
                        <div className="mt-20">
                            {children}
                        </div>

                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
