import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { UsersRound, GraduationCap, HelpCircle, LogOut, Building2 } from "lucide-react";
import logo from "@/assets/logo.png"

export default function UISidebar() {
    return (
        <Sidebar >
            <SidebarHeader className="flex space-y-15 items-center px-6">
                <div className="text-lg font-semibold flex flex-col items-center gap-4 p-6">
                    <img src={logo} alt="logo" className="h-20 w-20" />
                    <div className="font-medium text-4xl">Aimshala Admin</div>
                </div>
            </SidebarHeader>
            <SidebarContent className="px-2 py-6 space-y-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <UsersRound />
                            <span>Explorers</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <GraduationCap />
                            <span>Coaches</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Building2 />
                            <span>Organizations</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuButton>
                        
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t-1 p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <HelpCircle />
                            <span>Help & Support</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <LogOut />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}       
