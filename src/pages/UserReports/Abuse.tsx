import { MessageCircle, Star, CalendarDays, Filter } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const ReviewStatsAbuse = [
  {
    id: 1,
    title: "Total Reviews",
    value: "94",
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Average Rating",
    value: "4.4",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Last Updated",
    value: "18 May 2025",
    icon: CalendarDays,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
  },
];

export default function Abuse() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <AbuseCards />
      <div className="flex justify-end gap-2 mt-4">
        <Button>Add New Report</Button>
        <Button>Escalate</Button>
        <Button>Export Logs</Button>
      </div>
      <ReportedTabAreas />
      {showFilter && <Abusefilter />}
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filter" : "Show Filter"}
        </Button>
      </div>
    </div>
  );
}

function AbuseCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-2 py-1">
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
}

function ReportedTabAreas() {
  const [activeTabs, setActiveTabs] = useState("chats");
  return (
    <div className="mt-4">
      <Tabs value={activeTabs} onValueChange={setActiveTabs}>
        <TabsList className="grid w-full h-10 grid-cols-4 gap-2 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="chats">Chats</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="public_posts">Public Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="chats">
          <div>Chats data</div>
        </TabsContent>
        <TabsContent value="sessions">
          <div>Sessions data</div>
        </TabsContent>
        <TabsContent value="comments">
          <div>Comments data</div>
        </TabsContent>
        <TabsContent value="public_posts">
          <div>Public posts data</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Abusefilter() {
  return <div>Filter</div>;
}
