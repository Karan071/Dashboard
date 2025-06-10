import { CalendarDays, CheckCircle2, XCircle, Clock, PlayCircle, HelpCircle, IndianRupee, Video } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { DatePickerWithRange } from "@/components/application-component/date-range-picker";

const stats = [
    {
        title: "Total Sessions Booked",
        value: "5,248",
        icon: CalendarDays,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        title: "Completed Sessions",
        value: "3,780",
        icon: CheckCircle2,
        color: "text-green-500",
        bgColor: "bg-green-100",
    },
    {
        title: "Missed / No-Show",
        value: "341",
        icon: XCircle,
        color: "text-red-500",
        bgColor: "bg-red-100",
    },
    {
        title: "Upcoming Sessions",
        value: "446",
        icon: Clock,
        color: "text-yellow-500",
        bgColor: "bg-yellow-100",
    },
    {
        title: "Live Sessions",
        value: "12",
        icon: PlayCircle,
        color: "text-indigo-500",
        bgColor: "bg-indigo-100",
    },
    {
        title: "Session Recordings Available",
        value: "298",
        icon: Video,
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        title: "Refund Requests",
        value: "27",
        icon: HelpCircle,
        color: "text-orange-500",
        bgColor: "bg-orange-100",
    },
    {
        title: "Refunds Processed",
        value: "₹42,500",
        icon: IndianRupee,
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
    },
];

export default function Sessions() {
    return (
        <div className="p-6">
            <h1 className="font-semibold px-2 text-2xl">Sessions – Admin Desk</h1>
            <SessionCards />
            <div className="mt-6 flex justify-end gap-2">
                <Button>
                    Create Manual Session
                </Button>
                <Button>
                    Find Coach
                </Button>
                <Button>
                    Export Sessions
                </Button>
                <Button>
                    Refund Requests
                </Button>
                <Button>
                    Live Sessions
                </Button>
                <Button>
                    Access Recording
                </Button>
            </div>
            <SessionFilter />
            <SessionTable />
        </div>
    );
}

function SessionCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-2 py-1">
            {stats.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex items-center justify-start">
                        <div className={`${stat.bgColor} rounded-full p-2`}>
                            <stat.icon className={`h-10 w-10 ${stat.color}`} />
                        </div>
                        <div className="flex flex-col  ml-2 ">
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-md font-medium">{stat.title}</div>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}

function SessionFilter() {
    return (
        <div className="p-4">
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-lg">Session Filters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name / Email / Phone</label>
                            <Input placeholder="Search by name, email or phone" className="mt-2" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Session Type</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="approved" />
                                    <label htmlFor="approved" className="text-sm">
                                        Approved
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="pending" />
                                    <label htmlFor="pending" className="text-sm">
                                        Pending
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="blocked" />
                                    <label htmlFor="blocked" className="text-sm">
                                        Blocked
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Specialization</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="career" />
                                    <label htmlFor="career" className="text-sm">
                                        Career
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="psychology" />
                                    <label htmlFor="psychology" className="text-sm">
                                        Psychology
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="STEM" />
                                    <label htmlFor="STEM" className="text-sm">
                                        STEM
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="Design" />
                                    <label htmlFor="Design" className="text-sm">
                                        Design
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="law" />
                                    <label htmlFor="law" className="text-sm">
                                        Law
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Session Type</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="1:1" />
                                    <label htmlFor="1:1" className="text-sm">
                                        1:1
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="group" />
                                    <label htmlFor="group" className="text-sm">
                                        Group
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="instant" />
                                    <label htmlFor="instant" className="text-sm">
                                        Instant
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="b2b" />
                                    <label htmlFor="b2b" className="text-sm">
                                        B2B
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Session Type</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="1:1" />
                                    <label htmlFor="1:1" className="text-sm">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="b2b" />
                                    <label htmlFor="b2b" className="text-sm">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-2">
                            <label className="text-sm font-medium">State / City</label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between mt-2">
                                        <span>Select location</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[200px]">
                                    <DropdownMenuItem>Delhi</DropdownMenuItem>
                                    <DropdownMenuItem>Mumbai</DropdownMenuItem>
                                    <DropdownMenuItem>Bangalore</DropdownMenuItem>
                                    <DropdownMenuItem>Chennai</DropdownMenuItem>
                                    <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Active</label>
                            <div className="">
                                <DatePickerWithRange />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-2 ">
                        <Button variant="outline">Reset</Button>
                        <Button>Apply Filters</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function SessionTable() {
    return (
        <div>
            Table
        </div>
    )
}