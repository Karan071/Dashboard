import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { HelpCircle, LogOut } from "lucide-react";
import logo from "@/assets/logo.png"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItems = [
    {
        title: "Users",
        items: [
            { content: "Explorers", url: "/explorers" },
            { content: "Coaches", url: "/coaches" },
            { content: "Organisations", url: "/organisations" },
        ],
        isActive: true,
    },
    {
        title: "Approvals",
        url: "/approvals",
        isSingleLink: true,
        isActive: true
    },
    {
        title: "Products",
        items: [
            { content: "Assessments", url: "/assessments" },
            { content: "Sessions", url: "/sessions" },
            { content: "Sessions Pool", url: "/sessions-pool" },
            { content: "Masterclasses", url: "/masterclasses" },
            { content: "Learning", url: "/learning" },
            { content: "Access Code", url: "/access-code" },
        ],
        isActive: true,
    },
    {
        title: "CMS",
        items: [
            { content: "Insights", url: "/insights" },
            { content: "Videos Library", url: "/videoLibrary" },
            { content: "In the News", url: "/inTheNews" },
            { content: "Testimonials", url: "/testimonials" },
            { content: "Libraries", url: "/libraries" },
            { content: "Online Surveys", url: "/surveys" },
            { content: "Help Articles", url: "/helpArticles" },
            { content: "FAQs", url: "/faqspages" },
            { content: "Team Members", url: "/teamDirectory" },
        ],
        isActive: true,
    },
    {
        title: "Business Enquiries",
        items: [
            { content: "Callback", url: "/callback" },
            { content: "Chat Requests", url: "/chat-requests" },
            { content: "Career Enquiries", url: "/career-enquiries" },
            { content: "CareerLabs", url: "/careerlabs" },
            { content: "Partners", url: "/partners" },
        ],
        isActive: false,
    },
    {
        title: "User Reports",
        items: [
            { content: "Reviews", url: "/reviews" },
            { content: "Feedbacks", url: "/feedbacks" },
            { content: "Problems", url: "/problems" },
            { content: "Bugs", url: "/bugs" },
            { content: "Abuses", url: "/abuses" },
        ],
        isActive: true,
    },
    {
        title: "Finance",
        items: [
            { content: "Payments", url: "/payments" },
            { content: "Payout", url: "/payouts" },
            { content: "P&L", url: "/pl" },
            { content: "Reports", url: "/reports" },
        ],
        isActive: true,
    },
    {
        title: "Push Notifications",
        items: [
            { content: "Web / App", url: "/notifications-web" },
            { content: "WhatsApp", url: "/notifications-whatsapp" },
            { content: "Email", url: "/notifications-email" },
        ],
        isActive: false,
    }
];

export default function UISidebar() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleSectionToggle = (section: string) => {
        setOpenSection(prev => prev === section ? null : section);
    };

    return (
        <div className="">
            <Sidebar >
                <SidebarHeader className="flex space-y-10 items-center px-6 ">
                    <div className="text-lg font-semibold flex flex-col items-center gap-4 p-0.5">
                        <img src={logo} alt="logo" className="h-20 w-20" />
                        <div className="font-bold text-2xl">Aimshala Admin</div>
                    </div>
                </SidebarHeader>

                <SidebarContent className="mt-4">
                    {SidebarItems.map((x) => (
                        <SidebarMenu key={x.title}>
                            {x.isSingleLink ? (
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link to={x.url} className="block py-2 hover:bg-gray-100 rounded-md px-2">
                                            <span className="ml-4">{x.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ) : (
                                <Collapsible
                                    open={openSection === x.title}
                                    onOpenChange={() => handleSectionToggle(x.title)}
                                    className={`group/collapsible ${!x.isActive ? 'opacity-50 pointer-events-none' : ''}`}
                                >
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <CollapsibleTrigger className="w-full">
                                                <div className="flex items-center justify-between w-full ml-4">
                                                    <span>{x.title}</span>
                                                    <ChevronDown className="mr-2 h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                </div>
                                            </CollapsibleTrigger>
                                        </SidebarMenuButton>
                                        <CollapsibleContent>
                                            <div className="pl-6">
                                                {x.items?.map((item) => (
                                                    <SidebarMenuItem key={item.content}>
                                                        <SidebarMenuButton asChild>
                                                            <Link to={item.url} className="block py-2 hover:bg-gray-100 rounded-md px-2">
                                                                {item.content}
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                            </div>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            )}
                        </SidebarMenu>
                    ))}
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
                            <Link to={"/"}>
                                <SidebarMenuButton>
                                    <LogOut />
                                    <span>Logout</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
{/* <SidebarContent className="px-2 py-4 ">
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
                        }       
                    </SidebarMenu>
                    
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
                                        </SidebarMenuItem>
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
                                    </div>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    </SidebarMenu>
                    
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
                </SidebarContent> */}
