import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { HelpCircle, LogOut } from "lucide-react";
import logo from "@/assets/logo.png"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function UISidebar() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleSectionToggle = (section: string) => {
        setOpenSection(prev => prev === section ? null : section);
    };

    return (
        <Sidebar >
            <SidebarHeader className="flex space-y-10 items-center px-6 ">
                <div className="text-lg font-semibold flex flex-col items-center gap-4 p-0.5">
                    <img src={logo} alt="logo" className="h-20 w-20" />
                    <div className="font-bold text-2xl">Aimshala Admin</div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4 ">
                {/* users */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'users'}
                        onOpenChange={() => handleSectionToggle('users')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>User's</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Explorers</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Coaches</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Organizations</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* Products */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'approvals'}
                        onOpenChange={() => handleSectionToggle('approvals')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Approvals</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Coaches Profile</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Organisations Profiles</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Google Map Listings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <span>Forms Data</span>
                                    </SidebarMenuButton>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* Approval */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'products'}
                        onOpenChange={() => handleSectionToggle('products')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Products</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Assessments</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Sessions</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Sessions Pool</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Master Classes</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Learning</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* CMS */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'cms'}
                        onOpenChange={() => handleSectionToggle('cms')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>CMS</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Insights</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Video Library</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>In the News</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Testimonials</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Libraries</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Online Surveys</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Help Articles</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>FAQ's</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Team Members</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* Bussiness Enquires */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'business'}
                        onOpenChange={() => handleSectionToggle('business')}
                        className="group/collapsible opacity-50 pointer-events-none "
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Business Enquires</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Callback</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Chat Requests</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Career Enquiries</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Career Labs</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Partners</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* User Reports */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'reports'}
                        onOpenChange={() => handleSectionToggle('reports')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>User Report</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Reviews</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Feedbacks</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Problems</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Bugs</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Abuses</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* Notifications */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'notifications'}
                        onOpenChange={() => handleSectionToggle('notifications')}
                        className="group/collapsible opacity-50 pointer-events-none"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Push Notification</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Web/App</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>WhatsApp</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Email</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Stakeholder & Stage-based</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Abuses</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                {/* Finance */}
                <SidebarMenu>
                    <Collapsible
                        open={openSection === 'finance'}
                        onOpenChange={() => handleSectionToggle('finance')}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Finance</span>
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarMenuButton>
                            <CollapsibleContent>
                                <div className="pl-6">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Payments</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Payouts</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>P&L</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <span>Reports</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
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
    