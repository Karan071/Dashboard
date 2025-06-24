import { useState } from "react";
import { CalendarDays, Clock, Star, Briefcase, Hourglass } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const stats = [
    {
        title: "Total Pooled Sessions",
        value: "326",
        icon: CalendarDays,
        color: "text-blue-500",
        bgColor: "bg-blue-100"
    },
    {
        title: "Instant Sessions Available",
        value: "112",
        icon: Clock,
        color: "text-green-500",
        bgColor: "bg-green-100"
    },
    {
        title: "Introductory Sessions Listed",
        value: "89",
        icon: Star,
        color: "text-yellow-500",
        bgColor: "bg-yellow-100"
    },
    {
        title: "B2B Sessions Published",
        value: "125",
        icon: Briefcase,
        color: "text-purple-500",
        bgColor: "bg-purple-100"
    },
    {
        title: "Waiting for Coach to Accept",
        value: "21",
        icon: Hourglass,
        color: "text-red-500",
        bgColor: "bg-red-100"
    }
];


function StatCards() {
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

export default function SessionPool() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Top Overview </h1>
            <StatCards />
            <div className="flex justify-end items-center gap-4">
                <Button>Add Session</Button>
                <Button>Export Pool List</Button>
                <Button>Assign Slots</Button>
                <Button>Manage Availability</Button>
            </div>
            <FilterPool />
            <PoolTables />
        </div>
    );
}

function FilterPool() {
    return (
        <div>
            Filter
        </div>
    )
}

function PoolTables() {
    const [activeTab, setActiveTab] = useState("instant-sessions");
    return (
        <div className="md:col-span-4 mt-6 cursor-pointer p-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full h-12 grid-cols-4 gap-2 bg-gray-100 p-1 rounded-lg">
                    <TabsTrigger
                        value="instant-sessions"
                        className={`px-4 py-2 rounded-md transition-all ${activeTab === "instant-sessions"
                            ? "bg-white/90 shadow-sm text-black font-semibold"
                            : "text-gray-900 hover:bg-gray-200"
                            }`}
                    >
                        Instant Sessions
                    </TabsTrigger>
                    <TabsTrigger
                        value="introductory-sessions"
                        className={`px-4 py-2 rounded-md transition-all ${activeTab === "introductory-sessions"
                            ? "bg-white/90 shadow-sm text-black font-semibold"
                            : "text-gray-900 hover:bg-gray-200"
                            }`}
                    >
                        Introductory Sessions
                    </TabsTrigger>
                    <TabsTrigger
                        value="b2b-sessions"
                        className={`px-4 py-2 rounded-md transition-all ${activeTab === "b2b-sessions"
                            ? "bg-white/90 shadow-sm text-black font-semibold"
                            : "text-gray-900 hover:bg-gray-200"
                            }`}
                    >
                        B2B Sessions
                    </TabsTrigger>
                    <TabsTrigger
                        value="pending-approvals"
                        className={`px-4 py-2 rounded-md transition-all ${activeTab === "pending-approvals"
                            ? "bg-white/90 shadow-sm text-black font-semibold"
                            : "text-gray-900 hover:bg-gray-200"
                            }`}
                    >
                        Pending Approvals
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="instant-sessions" className="mt-4">
                    <div>
                        Instant Sessions
                    </div>
                </TabsContent>
                <TabsContent value="introductory-sessions" className="mt-4">
                    <div>
                        Introductory sessions
                    </div>
                </TabsContent>
                <TabsContent value="b2b-sessions" className="mt-4">
                    <div>
                        B2B Sessions
                    </div>
                </TabsContent>
                <TabsContent value="pending-approvals" className="mt-4">
                    <div>
                        Pending Approvals
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}


