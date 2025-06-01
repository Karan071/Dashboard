import { Users, Building2, UserPlus, Link, CalendarDays, Eye, MessageSquare, Flag, ChevronLeft, ChevronRight, Bell, Download, X } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/application-component/date-range-picker";
import { ChevronDown, Filter } from "lucide-react"
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { coachTableData } from "@/Data";

const coachStats = [
    {
        title: "Total Coaches",
        value: "1234",
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        title: "Pending Approvals",
        value: "34",
        icon: Building2,
        color: "text-green-500",
        bgColor: "bg-green-100",
    },
    {
        title: "New This Week",
        value: "27",
        icon: UserPlus,
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        title: "Sessions Conducted",
        value: "4860",
        icon: MessageSquare,
        color: "text-yellow-500",
        bgColor: "bg-yellow-100",
    },
    {
        title: "Masterclasses Hosted",
        value: "67",
        icon: CalendarDays,
        color: "text-red-500",
        bgColor: "bg-red-100",
    },
    {
        title: "Coaches Linked with Orgs",
        value: "182",
        icon: Link,
        color: "text-indigo-500",
        bgColor: "bg-indigo-100",
    }
]


export default function Coach() {
    const [filtersOpen, setFiltersOpen] = useState<Boolean>(false);

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h1 className="text-2xl font-bold">Coaches Dashboard</h1>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                    </Button>
                    <Button>Bulk Actions</Button>
                </div>
            </div>
            {/* Coach card data */}
            <div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
                    {coachStats.map((stat, index) => (
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
            </div>
            <div>
                {filtersOpen && <CoachFilter />}
                <div className="flex justify-end mt-4 p-4">
                    <Button
                        variant="outline"
                        onClick={() => setFiltersOpen(!filtersOpen)}
                        className="flex items-center gap-2"
                    >
                        <Filter className="h-4 w-4" />
                        {filtersOpen ? "Hide Filters" : "Show Filters"}
                    </Button>
                </div>
            </div>

            <div>
                <ExplorerTable />
            </div>

        </div>
    )
}

function CoachFilter() {
    return (
        <div className="p-4">
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name / Email / Phone</label>
                            <Input placeholder="Search by name, email or phone" className="mt-2" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Status</label>
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

function ExplorerTable() {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const navigate = useNavigate();
    const recordsPerPage = 5

    // Calculate pagination data
    const totalPages = Math.ceil(coachTableData.length / recordsPerPage)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = coachTableData.slice(indexOfFirstRecord, indexOfLastRecord)

    const toggleSelectAll = () => {
        if (selectedUsers.length === currentRecords.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(currentRecords.map((user): string => user.id.toString()))
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
        <div className="rounded-md border bg-white p-5">
            <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="select-all"
                        checked={selectedUsers.length === currentRecords.length && currentRecords.length > 0}
                        onCheckedChange={toggleSelectAll}
                    />
                    <label htmlFor="select-all" className="text-sm font-medium">
                        Select All
                    </label>
                    {selectedUsers.length > 0 && (
                        <Badge variant="outline" className="ml-2">
                            {selectedUsers.length} selected
                        </Badge>
                    )}
                </div>

                {selectedUsers.length > 0 && (
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Bell className="mr-2 h-4 w-4" />
                            Send Notification
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export Selected
                        </Button>
                        <Button variant="destructive" size="sm">
                            <X className="mr-2 h-4 w-4" />
                            Mark Inactive
                        </Button>
                    </div>
                )}
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead>Profile</TableHead>
                            <TableHead>Speciality</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Sessions</TableHead>
                            <TableHead>Assessments</TableHead>
                            <TableHead>Org Linked</TableHead>
                            <TableHead>DOJ / Last Active Date</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentRecords.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedUsers.includes(user.id.toString())}
                                        onCheckedChange={() => toggleSelectUser(user.id.toString())}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                                            <img
                                                src={user.profile.photo || "/placeholder.svg"}
                                                alt={user.profile.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-medium">{user.profile.name}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{user.specialty}</TableCell>
                                <TableCell>
                                    <div className="text-sm">{user.contact.email}</div>
                                    <div className="text-xs text-gray-500">{user.contact.phone}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{user.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="text-sm">
                                        {`${user.sessions.total}(${user.sessions.completed} Completed)`}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-sm">
                                        {user.assessments}
                                    </div>
                                </TableCell>
                                <TableCell>{user.orgLinked}</TableCell>
                                <TableCell>
                                    <div className="text-sm">{user.joined}</div>
                                    <div className="text-xs text-gray-500">{user.lastActive}</div>
                                </TableCell>

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

            <div className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-gray-500">
                    Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, coachTableData.length)} of {coachTableData.length} explorers
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
    )
}
