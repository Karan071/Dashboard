import { Users, Building2, UserPlus, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockUsers } from "@/Data";
import { Eye, Flag, ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
    {
        title: "Coaches Profiles",
        value: "34",
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        title: "Organisation Profile",
        value: "12",
        icon: Building2,
        color: "text-green-500",
        bgColor: "bg-green-100",
    },
    {
        title: "Map Listing",
        value: "7",
        icon: UserPlus,
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        title: "Form Data Submission",
        value: "15",
        icon: MessageSquare,
        color: "text-yellow-500",
        bgColor: "bg-yellow-100",
    },
]

const CoachProfileData = [
    {
        "name": "Dr. Seema Rao",
        "email": "seema@edu.com",
        "phone": "+91-XXXXX",
        "speciality": "Psychology",
        "submitted": "17 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "name": "Ramesh Patel",
        "email": "ramesh@career.in",
        "phone": "+91-XXXXX",
        "speciality": "STEM",
        "submitted": "16 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    }
];



export default function Approvals() {

    const [selectedUsers, setSelectedUsers] = useState<String[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    // Calculate pagination data
    const totalPages = Math.ceil(mockUsers.length / recordsPerPage)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = mockUsers.slice(indexOfFirstRecord, indexOfLastRecord)

    const toggleSelectAll = () => {
        if (selectedUsers.length === currentRecords.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(currentRecords.map((user) => user.id))
        }
    }

    const toggleSelectUser = (userId: string) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId))
        } else {
            setSelectedUsers([...selectedUsers, userId])
        }
    }


    return (
        <div>
            {/* Cards */}
            <h1 className="heading-title">Overview Stats (Pending Approvals) </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-2 py-1">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-md font-medium">{stat.title}</CardTitle>
                            <div className={`${stat.bgColor} rounded-full p-2`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* Coach Table */}
            <div>
                <h2 className="heading-title">Coach Profile Pending</h2>
                <div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]"></TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Speciality</TableHead>
                                    <TableHead>Submitted</TableHead>
                                    <TableHead>Profile</TableHead>
                                    <TableHead className="text-center">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {CoachProfileData.map((user) => (
                                    <TableRow key={user.name}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedUsers.includes(user.name)}
                                                onCheckedChange={() => toggleSelectUser(user.name)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                                                    <img
                                                        // src={user.photo || "/placeholder.svg"}
                                                        alt={user.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{user.name}</div>
                                                    {/* <div className="text-xs text-gray-500">{user.gender}</div> */}
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="text-sm">{user.email}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{user.phone}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-sm">
                                                {user.speciality}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-sm">
                                                {user.submitted}
                                            </div>
                                        </TableCell>
                                        <TableCell>{user.profile_link}</TableCell>
                                        <TableCell>
                                            <div className="flex justify-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                // onClick={() => navigate(`/user-details/${user.id}`)}
                                                >
                                                    <Eye className="h-4 w-4" />
                                                    <span className="sr-only">View</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <MessageSquare className="h-4 w-4" />
                                                    <span className="sr-only">Chat</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <Flag className="h-4 w-4" />
                                                    <span className="sr-only">Flag</span>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between border-t p-4">
                        <div className="text-sm text-gray-500">
                            Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, mockUsers.length)} of {mockUsers.length} explorers
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <Button
                                    key={page}
                                    variant={page === currentPage ? "default" : "outline"}
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </Button>
                            ))}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="heading-title">Organization Profiles - Pending Approvals</h2>
            <div>

            </div>  
            
            {/* Google */}
            <h2>Google Map Listing - Approval Needed</h2>
            <div>

            </div>
        </div>
    )
}