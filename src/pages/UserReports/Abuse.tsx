import { MessageCircle, Star, CalendarDays } from "lucide-react";
import {Card, CardHeader} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ReviewStatsAbuse = [
    {
        id: 1,
        title: "Total Reviews",
        value: "94",
        icon: MessageCircle, 
        color: "text-blue-600",
        bgColor: "bg-blue-100"
    },
    {
        id: 2,
        title: "Average Rating",
        value: "4.4",
        icon: Star, 
        color: "text-yellow-500",
        bgColor: "bg-yellow-100"
    },
    {
        id: 3,
        title: "Last Updated",
        value: "18 May 2025",
        icon: CalendarDays, 
        color: "text-gray-600",
        bgColor: "bg-gray-100"
    }
];

export default function Abuse() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <AbuseCards/>
            <div>
                <Button></Button>
            </div>
        </div>
    );
}

function AbuseCards(){
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-2 py-1">
            {ReviewStatsAbuse.map((stat, index) => (
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
    );
};