import picture1 from "@/assets/icon1.png"
import picture2 from "@/assets/icon2.png"
import picture3 from "@/assets/icons3.png"
import picture4 from "@/assets/icons4.jpeg"

export const mockUsers = [
    {
        id: "1",
        name: "Rahul Sharma",
        email: "rahul.s@example.com",
        phone: "+91 9876543210",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (12)",
        profileStage: "Registered",
        assessments: {
            total: 2,
            completed: 1,
        },
        sessions: {
            total: 3,
            missed: 1,
        },
        source: "BA Campaign",
        joinDate: "15 May 2023",
        lastLogin: "17 May 2023",
        status: "Active",
    },
    {
        id: "2",
        name: "Priya Patel",
        email: "priya.p@example.com",
        phone: "+91 9876543211",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (10)",
        profileStage: "Enquiry",
        assessments: {
            total: 1,
            completed: 0,
        },
        sessions: {
            total: 1,
            missed: 0,
        },
        source: "Consultant",
        joinDate: "10 May 2023",
        lastLogin: "16 May 2023",
        status: "Active",
    },
    {
        id: "3",
        name: "Amit Kumar",
        email: "amit.k@example.com",
        phone: "+91 9876543212",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (UG)",
        profileStage: "Registered",
        assessments: {
            total: 2,
            completed: 2,
        },
        sessions: {
            total: 4,
            missed: 0,
        },
        source: "Organisation",
        joinDate: "5 May 2023",
        lastLogin: "15 May 2023",
        status: "Active",
    },
    {
        id: "4",
        name: "Sneha Gupta",
        email: "sneha.g@example.com",
        phone: "+91 9876543213",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (12)",
        profileStage: "Guest",
        assessments: {
            total: 0,
            completed: 0,
        },
        sessions: {
            total: 0,
            missed: 0,
        },
        source: "Organic",
        joinDate: "12 May 2023",
        lastLogin: "12 May 2023",
        status: "Inactive",
    },
    {
        id: "5",
        name: "Vikram Singh",
        email: "vikram.s@example.com",
        phone: "+91 9876543214",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (UG)",
        profileStage: "Registered",
        assessments: {
            total: 2,
            completed: 1,
        },
        sessions: {
            total: 2,
            missed: 1,
        },
        source: "BA Campaign",
        joinDate: "8 May 2023",
        lastLogin: "14 May 2023",
        status: "Active",
    },
    {
        id: "6",
        name: "Anjali Mehta",
        email: "anjali.m@example.com",
        phone: "+91 9876543215",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (10)",
        profileStage: "Enquiry",
        assessments: {
            total: 1,
            completed: 1,
        },
        sessions: {
            total: 1,
            missed: 0,
        },
        source: "Consultant",
        joinDate: "9 May 2023",
        lastLogin: "10 May 2023",
        status: "Active",
    },
    {
        id: "7",
        name: "Rohit Verma",
        email: "rohit.v@example.com",
        phone: "+91 9876543216",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (UG)",
        profileStage: "Registered",
        assessments: {
            total: 3,
            completed: 2,
        },
        sessions: {
            total: 3,
            missed: 1,
        },
        source: "Referral",
        joinDate: "6 May 2023",
        lastLogin: "8 May 2023",
        status: "Active",
    },
    {
        id: "8",
        name: "Kavya Reddy",
        email: "kavya.r@example.com",
        phone: "+91 9876543217",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (12)",
        profileStage: "Registered",
        assessments: {
            total: 2,
            completed: 0,
        },
        sessions: {
            total: 2,
            missed: 2,
        },
        source: "Organic",
        joinDate: "7 May 2023",
        lastLogin: "9 May 2023",
        status: "Inactive",
    },
    {
        id: "9",
        name: "Nikhil Joshi",
        email: "nikhil.j@example.com",
        phone: "+91 9876543218",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (PG)",
        profileStage: "Enquiry",
        assessments: {
            total: 1,
            completed: 1,
        },
        sessions: {
            total: 1,
            missed: 0,
        },
        source: "Consultant",
        joinDate: "10 May 2023",
        lastLogin: "11 May 2023",
        status: "Active",
    },
    {
        id: "10",
        name: "Meera Nair",
        email: "meera.n@example.com",
        phone: "+91 9876543219",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (UG)",
        profileStage: "Registered",
        assessments: {
            total: 3,
            completed: 3,
        },
        sessions: {
            total: 3,
            missed: 0,
        },
        source: "BA Campaign",
        joinDate: "11 May 2023",
        lastLogin: "13 May 2023",
        status: "Active",
    },
    {
        id: "11",
        name: "Siddharth Rao",
        email: "siddharth.r@example.com",
        phone: "+91 9876543220",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (12)",
        profileStage: "Guest",
        assessments: {
            total: 0,
            completed: 0,
        },
        sessions: {
            total: 0,
            missed: 0,
        },
        source: "Organisation",
        joinDate: "13 May 2023",
        lastLogin: "13 May 2023",
        status: "Inactive",
    },
    {
        id: "12",
        name: "Pooja Iyer",
        email: "pooja.i@example.com",
        phone: "+91 9876543221",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (PG)",
        profileStage: "Registered",
        assessments: {
            total: 2,
            completed: 2,
        },
        sessions: {
            total: 2,
            missed: 0,
        },
        source: "Referral",
        joinDate: "14 May 2023",
        lastLogin: "15 May 2023",
        status: "Active",
    },
    {
        id: "13",
        name: "Arjun Desai",
        email: "arjun.d@example.com",
        phone: "+91 9876543222",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (10)",
        profileStage: "Guest",
        assessments: {
            total: 0,
            completed: 0,
        },
        sessions: {
            total: 1,
            missed: 1,
        },
        source: "Organic",
        joinDate: "6 May 2023",
        lastLogin: "6 May 2023",
        status: "Inactive",
    },
    {
        id: "14",
        name: "Neha Bansal",
        email: "neha.b@example.com",
        phone: "+91 9876543223",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Female",
        userType: "Student (UG)",
        profileStage: "Registered",
        assessments: {
            total: 3,
            completed: 1,
        },
        sessions: {
            total: 2,
            missed: 1,
        },
        source: "Consultant",
        joinDate: "4 May 2023",
        lastLogin: "6 May 2023",
        status: "Active",
    },
    {
        id: "15",
        name: "Manish Agarwal",
        email: "manish.a@example.com",
        phone: "+91 9876543224",
        photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
        gender: "Male",
        userType: "Student (PG)",
        profileStage: "Enquiry",
        assessments: {
            total: 1,
            completed: 0,
        },
        sessions: {
            total: 1,
            missed: 0,
        },
        source: "BA Campaign",
        joinDate: "3 May 2023",
        lastLogin: "5 May 2023",
        status: "Active",
    }
]




// A
export const API = {
    "user": {
        "id": "",
        "role_id": "",
        "is_active": "",
        "name": "",
        "username": "",
        "email": "",
        "headline": "",
        "phone": "",
        "country": "",
        "language": {
            "id": "",
            "code": "",
            "name": ""
        },
        "status": "",
        "payout": {
            "method": "",
            "icon": "",
            "email": ""
        },
        "created_at": "",
        "updated_at": "",
        "last_activity_at": "",
        "registration_at": "",
        "avatar": "",
        "web_token": "",
        "teach_via": ""
    },
    "details": {
        "id": "",
        "user_id": "",
        "gender": "",
        "dob": "",
        "profile_type": "",
        "class": "",
        "qualification": "",
        "aadhar_details": {
            "status": "",
            "ref_id": "",
            "aadhar_num": "",
            "care_of": "",
            "address": "",
            "dob": "",
            "gender": "",
            "mobile_hash": ""
        },
        "pan_details": {
            "pan_status": "",
            "reference_id": "",
            "name_pan_card": "",
            "pan": "",
            "type": "",
            "aadhaar_seeding_status": ""
        },
        "bank_details": {
            "account_status": "",
            "reference_id": "",
            "name_at_bank": "",
            "bank_name": "",
            "micr": "",
            "ifsc": "",
            "type": "",
            "number": "",
            "address": ""
        },
        "career_classes": {
            "id": "",
            "name": "",
            "qualification_id": "",
            "qus_type": ""
        },
        "created_at": "",
        "updated_at": ""
    }
}



export const CoachProfileData = [
    {
        "id": 1,
        "name": "Dr. Seema Rao",
        "email": "seema@edu.com",
        "phone": "+91-9582292522",
        "speciality": "Psychology",
        "submitted": "17 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 2,
        "name": "Ramesh Patel",
        "email": "ramesh@career.in",
        "phone": "+91-7756913200",
        "speciality": "STEM",
        "submitted": "16 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 3,
        "name": "Anjali Mehra",
        "email": "anjali@eduplus.org",
        "phone": "+91-9811122233",
        "speciality": "Life Coaching",
        "submitted": "15 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 4,
        "name": "Vikram Singh",
        "email": "vikram@techmentor.com",
        "phone": "+91-9922334455",
        "speciality": "Technology",
        "submitted": "14 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 5,
        "name": "Neha Sharma",
        "email": "neha@wellnesshub.in",
        "phone": "+91-9090909090",
        "speciality": "Health & Wellness",
        "submitted": "13 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 6,
        "name": "Amit Verma",
        "email": "amit@mathmentor.com",
        "phone": "+91-9898989898",
        "speciality": "Mathematics",
        "submitted": "12 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 7,
        "name": "Priya Nair",
        "email": "priya@mindworks.org",
        "phone": "+91-9123456789",
        "speciality": "Cognitive Science",
        "submitted": "11 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 8,
        "name": "Manoj Desai",
        "email": "manoj@skilldev.in",
        "phone": "+91-9988776655",
        "speciality": "Skill Development",
        "submitted": "10 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 9,
        "name": "Sunita Reddy",
        "email": "sunita@wellbeing.org",
        "phone": "+91-8877665544",
        "speciality": "Mental Health",
        "submitted": "09 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 10,
        "name": "Karan Mehta",
        "email": "karan@leadcoach.com",
        "phone": "+91-7788990011",
        "speciality": "Leadership",
        "submitted": "08 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 11,
        "name": "Ritika Das",
        "email": "ritika@creativemind.in",
        "phone": "+91-8899776655",
        "speciality": "Creative Thinking",
        "submitted": "07 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 12,
        "name": "Siddharth Roy",
        "email": "sid@aiacademy.org",
        "phone": "+91-9000011122",
        "speciality": "Artificial Intelligence",
        "submitted": "06 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 13,
        "name": "Meera Joshi",
        "email": "meera@eduvision.com",
        "phone": "+91-7000550066",
        "speciality": "Education Strategy",
        "submitted": "05 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 14,
        "name": "Arjun Kapoor",
        "email": "arjun@coachpro.in",
        "phone": "+91-6666555544",
        "speciality": "Sports Psychology",
        "submitted": "04 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 15,
        "name": "Divya Malhotra",
        "email": "divya@growthhub.com",
        "phone": "+91-9911223344",
        "speciality": "Career Growth",
        "submitted": "03 May 2025",
        "profile_link": "View Profile",
        "actions": ["Approve", "Reject"]
    }
];


export const OrganisationProfiles = [
    {
        "id": 1,
        "organisation": "Bright Future School",
        "location": "Pune",
        "contact": "+91-9823123456",
        "type": "School",
        "submitted": "16 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 2,
        "organisation": "Global Tech Institute",
        "location": "Bengaluru",
        "contact": "+91-9745612345",
        "type": "Institute",
        "submitted": "15 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 3,
        "organisation": "Sunrise Academy",
        "location": "Delhi",
        "contact": "+91-9810022334",
        "type": "School",
        "submitted": "14 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 4,
        "organisation": "NextGen Learning",
        "location": "Hyderabad",
        "contact": "+91-9000011122",
        "type": "Institute",
        "submitted": "13 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 5,
        "organisation": "EduBridge Foundation",
        "location": "Chennai",
        "contact": "+91-9888777666",
        "type": "NGO",
        "submitted": "12 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 6,
        "organisation": "Inspire Junior School",
        "location": "Ahmedabad",
        "contact": "+91-9556677889",
        "type": "School",
        "submitted": "11 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 7,
        "organisation": "SkillRise Academy",
        "location": "Kolkata",
        "contact": "+91-9665544332",
        "type": "Institute",
        "submitted": "10 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 8,
        "organisation": "New Era School",
        "location": "Jaipur",
        "contact": "+91-9776655443",
        "type": "School",
        "submitted": "09 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 9,
        "organisation": "Future Minds",
        "location": "Lucknow",
        "contact": "+91-9345612398",
        "type": "NGO",
        "submitted": "08 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 10,
        "organisation": "TechPro Institute",
        "location": "Mumbai",
        "contact": "+91-9876543210",
        "type": "Institute",
        "submitted": "07 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 11,
        "organisation": "Leap High School",
        "location": "Nagpur",
        "contact": "+91-9182736450",
        "type": "School",
        "submitted": "06 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 12,
        "organisation": "Bright Path Institute",
        "location": "Bhopal",
        "contact": "+91-9032165478",
        "type": "Institute",
        "submitted": "05 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 13,
        "organisation": "Hope Foundation",
        "location": "Patna",
        "contact": "+91-9123456780",
        "type": "NGO",
        "submitted": "04 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 14,
        "organisation": "Smart Kids School",
        "location": "Surat",
        "contact": "+91-9112233445",
        "type": "School",
        "submitted": "03 May 2025",
        "docs": "Verify",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 15,
        "organisation": "National Institute of Skills",
        "location": "Noida",
        "contact": "+91-9879879876",
        "type": "Institute",
        "submitted": "02 May 2025",
        "docs": "Check Files",
        "actions": ["Approve", "Reject"]
    }
];


export const GoogleMapListings = [
    {
        "id": 1,
        "listing": "Bright Future School",
        "address": "Pune, MH",
        "linked_org": "Bright Future",
        "submitted": "15 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 2,
        "listing": "Global Tech Institute",
        "address": "Bangalore, KA",
        "linked_org": "Global Tech",
        "submitted": "14 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 3,
        "listing": "Sunrise Academy",
        "address": "Delhi, DL",
        "linked_org": "Sunrise Edu",
        "submitted": "13 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 4,
        "listing": "NextGen Learning Hub",
        "address": "Hyderabad, TG",
        "linked_org": "NextGen",
        "submitted": "12 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 5,
        "listing": "EduBridge Foundation",
        "address": "Chennai, TN",
        "linked_org": "EduBridge",
        "submitted": "11 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 6,
        "listing": "Inspire Junior School",
        "address": "Ahmedabad, GJ",
        "linked_org": "Inspire",
        "submitted": "10 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 7,
        "listing": "SkillRise Academy",
        "address": "Kolkata, WB",
        "linked_org": "SkillRise",
        "submitted": "09 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 8,
        "listing": "New Era School",
        "address": "Jaipur, RJ",
        "linked_org": "New Era Foundation",
        "submitted": "08 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 9,
        "listing": "Future Minds Institute",
        "address": "Lucknow, UP",
        "linked_org": "Future Minds",
        "submitted": "07 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 10,
        "listing": "TechPro Campus",
        "address": "Mumbai, MH",
        "linked_org": "TechPro",
        "submitted": "06 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 11,
        "listing": "Leap High School",
        "address": "Nagpur, MH",
        "linked_org": "Leap High",
        "submitted": "05 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 12,
        "listing": "Bright Path Institute",
        "address": "Bhopal, MP",
        "linked_org": "Bright Path",
        "submitted": "04 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 13,
        "listing": "Hope Foundation Center",
        "address": "Patna, BR",
        "linked_org": "Hope Foundation",
        "submitted": "03 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 14,
        "listing": "Smart Kids School",
        "address": "Surat, GJ",
        "linked_org": "Smart Kids",
        "submitted": "02 May 2025",
        "map_preview": "Map Link",
        "actions": ["Approve", "Reject"]
    },
    {
        "id": 15,
        "listing": "National Skills Campus",
        "address": "Noida, UP",
        "linked_org": "National Institute of Skills",
        "submitted": "01 May 2025",
        "map_preview": "View Map",
        "actions": ["Approve", "Reject"]
    }
];


export const FormsSubmittedData = [
    {
        "id": 1,
        "user": "Aarav Mehta",
        "type": "School",
        "name": "Shining Star Academy",
        "location": "Varanasi",
        "submitted": "17 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 2,
        "user": "Neha Sharma",
        "type": "Organisation",
        "name": "SkillWise Hub",
        "location": "Jaipur",
        "submitted": "15 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 3,
        "user": "Rohit Verma",
        "type": "College",
        "name": "Pioneer Degree College",
        "location": "Delhi",
        "submitted": "14 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 4,
        "user": "Meera Joshi",
        "type": "School",
        "name": "Green Valley Public School",
        "location": "Ahmedabad",
        "submitted": "13 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 5,
        "user": "Amit Rao",
        "type": "Organisation",
        "name": "TechBridge Network",
        "location": "Mumbai",
        "submitted": "12 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 6,
        "user": "Sara Iqbal",
        "type": "College",
        "name": "Lighthouse Women’s College",
        "location": "Kolkata",
        "submitted": "11 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 7,
        "user": "Kunal Malhotra",
        "type": "School",
        "name": "New Generation School",
        "location": "Chandigarh",
        "submitted": "10 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 8,
        "user": "Anita George",
        "type": "Organisation",
        "name": "WellBeing Circle",
        "location": "Bengaluru",
        "submitted": "09 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 9,
        "user": "Dev Sharma",
        "type": "College",
        "name": "Unity Arts College",
        "location": "Hyderabad",
        "submitted": "08 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 10,
        "user": "Isha Anand",
        "type": "School",
        "name": "Rainbow International School",
        "location": "Surat",
        "submitted": "07 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 11,
        "user": "Rajeev Nair",
        "type": "Organisation",
        "name": "EduSpark Foundation",
        "location": "Kochi",
        "submitted": "06 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 12,
        "user": "Priya Bhandari",
        "type": "College",
        "name": "Eastern Commerce College",
        "location": "Patna",
        "submitted": "05 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 13,
        "user": "Tanmay Kapoor",
        "type": "School",
        "name": "Future Scholars School",
        "location": "Indore",
        "submitted": "04 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 14,
        "user": "Ritika Shah",
        "type": "Organisation",
        "name": "Global Youth Initiative",
        "location": "Noida",
        "submitted": "03 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    },
    {
        "id": 15,
        "user": "Manoj Desai",
        "type": "School",
        "name": "Bright Horizon School",
        "location": "Nashik",
        "submitted": "02 May 2025",
        "entry": "View",
        "actions": ["Add to List", "Reject"]
    }
];
