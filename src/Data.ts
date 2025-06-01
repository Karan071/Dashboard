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
interface VideoTableItem {
    id: string;
    title: string;
    speaker: string;
    mode: string;
    category: string;
    mapping: string;
    for: string;
    playCount: number;
    videoUrl: string;
    status: string;
}

export const VideoTableData: VideoTableItem[] = [
    {
        id: "1",
        title: "Career Planning in Tech",
        speaker: "Rahul Sharma",
        mode: "Live",
        category: "Career Guidance",
        mapping: "Tech Careers",
        for: "UG Students",
        playCount: 1240,
        videoUrl: "https://example.com/video1",
        status: "Published"
    },
    {
        id: "2",
        title: "Interview Preparation",
        speaker: "Priya Patel",
        mode: "Recorded",
        category: "Skills",
        mapping: "Job Ready",
        for: "Final Year",
        playCount: 890,
        videoUrl: "https://example.com/video2",
        status: "Published"
    },
    // Add more mock data as needed...
];
export const NewsMentionsData = [
  {
    "id": "1",
    "logo": "![Logo]",
    "title": "Aimshala Recognized by Economic Times",
    "source": "Economic Times",
    "link": "[Read More]",
    "clicks": "1,124",
    "date": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "2",
    "logo": "![Logo]",
    "title": "Career Innovation Spotlight on NDTV",
    "source": "NDTV",
    "link": "[Read More]",
    "clicks": "879",
    "date": "13 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "3",
    "logo": "![Logo]",
    "title": "How Aimshala is Changing Education",
    "source": "Hindustan Times",
    "link": "[Read More]",
    "clicks": "704",
    "date": "09 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "4",
    "logo": "![Logo]",
    "title": "Future of Learning: Aimshala's AI Push",
    "source": "Business Standard",
    "link": "[Read More]",
    "clicks": "945",
    "date": "08 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "5",
    "logo": "![Logo]",
    "title": "Startups to Watch: Aimshala",
    "source": "Inc42",
    "link": "[Read More]",
    "clicks": "1,230",
    "date": "05 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "6",
    "logo": "![Logo]",
    "title": "Aimshala's Journey in EdTech",
    "source": "Forbes India",
    "link": "[Read More]",
    "clicks": "768",
    "date": "02 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "7",
    "logo": "![Logo]",
    "title": "Empowering Rural Youth: Aimshala’s Impact",
    "source": "The Hindu",
    "link": "[Read More]",
    "clicks": "989",
    "date": "30 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "8",
    "logo": "![Logo]",
    "title": "Tech for Good: Aimshala’s Learning Tools",
    "source": "YourStory",
    "link": "[Read More]",
    "clicks": "812",
    "date": "28 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "9",
    "logo": "![Logo]",
    "title": "Aimshala Among Top EdTech Innovators",
    "source": "Entrepreneur India",
    "link": "[Read More]",
    "clicks": "1,015",
    "date": "26 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "10",
    "logo": "![Logo]",
    "title": "EdTech Trends 2025: Featuring Aimshala",
    "source": "Mint",
    "link": "[Read More]",
    "clicks": "653",
    "date": "23 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "11",
    "logo": "![Logo]",
    "title": "Aimshala’s Bootcamps Transforming Lives",
    "source": "TOI",
    "link": "[Read More]",
    "clicks": "912",
    "date": "21 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "12",
    "logo": "![Logo]",
    "title": "Inside Aimshala's Learning Innovation Hub",
    "source": "India Today",
    "link": "[Read More]",
    "clicks": "574",
    "date": "19 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "13",
    "logo": "![Logo]",
    "title": "Learning on Mobile: Aimshala's New App",
    "source": "ET Tech",
    "link": "[Read More]",
    "clicks": "1,156",
    "date": "17 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "14",
    "logo": "![Logo]",
    "title": "How Aimshala Keeps Students Motivated",
    "source": "Indian Express",
    "link": "[Read More]",
    "clicks": "478",
    "date": "14 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "15",
    "logo": "![Logo]",
    "title": "Women in EdTech: Aimshala Leads the Way",
    "source": "Femina",
    "link": "[Read More]",
    "clicks": "833",
    "date": "12 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "16",
    "logo": "![Logo]",
    "title": "AI in Classrooms: Aimshala's Strategy",
    "source": "Analytics India",
    "link": "[Read More]",
    "clicks": "697",
    "date": "10 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "17",
    "logo": "![Logo]",
    "title": "Aimshala Brings Learning to Tier-2 Cities",
    "source": "LiveMint",
    "link": "[Read More]",
    "clicks": "1,042",
    "date": "07 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "18",
    "logo": "![Logo]",
    "title": "Student Voices: How Aimshala Changed My Life",
    "source": "Times Now",
    "link": "[Read More]",
    "clicks": "690",
    "date": "05 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  }
]
export const testimonialsData =[
  {
    "id": "1",
    "picture": "photo-aanya.jpg",
    "name": "Aanya Kapoor",
    "role": "Student, Class 12",
    "category": "Student",
    "audience": "11–12, UG",
    "type": "Text",
    "contentPreview": "The guidance helped me select my stream",
    "date": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "2",
    "picture": "photo-sandeep.jpg",
    "name": "Sandeep Khosla",
    "role": "Parent of 10th Grader",
    "category": "Parent",
    "audience": "9–10, UG",
    "type": "Video",
    "contentPreview": "Amazing clarity for our son's choices",
    "date": "17 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "3",
    "picture": "photo-neha.jpg",
    "name": "Neha Malhotra",
    "role": "Career Consultant",
    "category": "Coach",
    "audience": "Professionals",
    "type": "Text",
    "contentPreview": "A robust ecosystem for mentor support",
    "date": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "4",
    "picture": "photo-joseph.jpg",
    "name": "Joseph Mathew",
    "role": "Principal, Hope Academy",
    "category": "Partner",
    "audience": "Schools, NGOs",
    "type": "Video",
    "contentPreview": "Great collaboration with our school",
    "date": "14 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "5",
    "picture": "photo-rhea.jpg",
    "name": "Rhea Sharma",
    "role": "Student, Class 11",
    "category": "Student",
    "audience": "11–12",
    "type": "Text",
    "contentPreview": "Cleared all my doubts about future careers",
    "date": "13 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "6",
    "picture": "photo-tarun.jpg",
    "name": "Tarun Bajaj",
    "role": "Working Professional",
    "category": "Coach",
    "audience": "UG, Professionals",
    "type": "Video",
    "contentPreview": "The mentorship boosted my career",
    "date": "12 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "7",
    "picture": "photo-ruchi.jpg",
    "name": "Ruchi Mehta",
    "role": "Parent of Class 9 Student",
    "category": "Parent",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Relieved to have professional support",
    "date": "11 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "8",
    "picture": "photo-amit.jpg",
    "name": "Amit Rawal",
    "role": "NGO Director",
    "category": "Partner",
    "audience": "NGOs",
    "type": "Video",
    "contentPreview": "Valuable impact in remote communities",
    "date": "10 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "9",
    "picture": "photo-meena.jpg",
    "name": "Meena Arora",
    "role": "Student, Class 10",
    "category": "Student",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Made learning more interesting",
    "date": "09 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "10",
    "picture": "photo-harsh.jpg",
    "name": "Harshvardhan Patel",
    "role": "Coach, MBA Prep",
    "category": "Coach",
    "audience": "UG, PG",
    "type": "Text",
    "contentPreview": "Structured and impactful sessions",
    "date": "08 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "11",
    "picture": "photo-rekha.jpg",
    "name": "Rekha Nair",
    "role": "Parent of a College Student",
    "category": "Parent",
    "audience": "UG",
    "type": "Video",
    "contentPreview": "Guidance at the right time",
    "date": "07 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "12",
    "picture": "photo-rajesh.jpg",
    "name": "Rajesh Khanna",
    "role": "Principal, City School",
    "category": "Partner",
    "audience": "Schools",
    "type": "Text",
    "contentPreview": "Inspired teaching through collaboration",
    "date": "06 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "13",
    "picture": "photo-shalini.jpg",
    "name": "Shalini Vyas",
    "role": "Career Coach",
    "category": "Coach",
    "audience": "Professionals",
    "type": "Video",
    "contentPreview": "Career breakthrough for my mentees",
    "date": "05 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "14",
    "picture": "photo-anshul.jpg",
    "name": "Anshul Mehra",
    "role": "Student, Final Year UG",
    "category": "Student",
    "audience": "UG",
    "type": "Text",
    "contentPreview": "Realigned my career goals effectively",
    "date": "04 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "15",
    "picture": "photo-farha.jpg",
    "name": "Farha Qureshi",
    "role": "Counselor",
    "category": "Coach",
    "audience": "9–12",
    "type": "Text",
    "contentPreview": "Students respond so well to the program",
    "date": "03 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "16",
    "picture": "photo-vikram.jpg",
    "name": "Vikram Das",
    "role": "Parent of UG Student",
    "category": "Parent",
    "audience": "UG",
    "type": "Text",
    "contentPreview": "Best decision we took this year",
    "date": "02 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "17",
    "picture": "photo-anita.jpg",
    "name": "Anita Roy",
    "role": "Principal, Future High School",
    "category": "Partner",
    "audience": "Schools",
    "type": "Video",
    "contentPreview": "Collaboration helps our faculty grow",
    "date": "01 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "18",
    "picture": "photo-yash.jpg",
    "name": "Yash Jain",
    "role": "Student, Class 9",
    "category": "Student",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Fun and helpful resources",
    "date": "30 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "19",
    "picture": "photo-rina.jpg",
    "name": "Rina Thakur",
    "role": "NGO Project Coordinator",
    "category": "Partner",
    "audience": "NGOs",
    "type": "Text",
    "contentPreview": "Structured and timely assistance",
    "date": "29 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  }
]
export const teamDirectoryTableData =[
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Riya Malhotra",
    "role": "Co-Founder & Content Head",
    "linkedin": "View Profile",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Ankur Sharma",
    "role": "Lead Backend Engineer",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Neha Joshi",
    "role": "UX/UI Designer",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Ravi Kapoor",
    "role": "Outreach Strategist",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Rohan Sen",
    "role": "Program Advisor",
    "linkedin": "LinkedIn",
    "status": "Inactive",
    "actions": ["Edit", "Activate"]
  }
]
export const LibraryTableData = [
  {
    "title": "Career Options in Cybersecurity",
    "tags": ["Security", "IT"],
    "for": "UG, PG",
    "source": "Public Data",
    "lastUpdated": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Exploring Graphic Design Paths",
    "tags": ["Creativity", "Media"],
    "for": "UG",
    "source": "On Request",
    "lastUpdated": "16 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const ExamsTableData = [
  {
    "title": "CUET UG 2025 Schedule",
    "tags": ["CUET", "UG"],
    "for": "11–12, UG",
    "source": "Public Data",
    "upcomingDate": "15 July 2025",
    "lastUpdated": "17 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Schedule"]
  },
  {
    "title": "CLAT 2025 Key Dates",
    "tags": ["Law", "Entrance"],
    "for": "UG",
    "source": "Public Data",
    "upcomingDate": "10 Dec 2025",
    "lastUpdated": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  }
]
export const ScholarshipsTableData = [
  {
    "title": "Women in STEM UG Scholarship",
    "tags": ["Gender", "STEM"],
    "for": "UG",
    "source": "On Request",
    "upcomingDate": "05 September 2025",
    "lastUpdated": "18 May 2025",
    "status": "Pending",
    "actions": ["Edit", "Approve"]
  },
  {
    "title": "International Leaders Fund",
    "tags": ["Global", "PG"],
    "for": "PG",
    "source": "Owner",
    "upcomingDate": "30 October 2025",
    "lastUpdated": "14 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export  const NGOsTableData = [
  {
    "title": "Skill Building for Youth",
    "tags": ["Development", "Edu"],
    "for": "Schools, UG",
    "source": "Owner",
    "lastUpdated": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "NGO-College Career Bridges",
    "tags": ["Awareness", "Support"],
    "for": "UG, PG",
    "source": "Public Data",
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const SurveysTableData = [
  {
    "title": "Career Preferences Survey",
    "createdBy": "Riya Malhotra",
    "for": "11–12, UG",
    "questions": 10,
    "responses": 4120,
    "status": "Active",
    "lastUpdated": "16 May 2025",
    "actions": ["Edit", "Results", "Close"]
  },
  {
    "title": "Online Learning Feedback",
    "createdBy": "Team Aimshala",
    "for": "UG, PG",
    "questions": 8,
    "responses": 2630,
    "status": "Active",
    "lastUpdated": "14 May 2025",
    "actions": ["Edit", "Results", "Close"]
  },
  {
    "title": "Skill Awareness Check",
    "createdBy": "Rahul Sen",
    "for": "PG",
    "questions": 6,
    "responses": 1020,
    "status": "Draft",
    "lastUpdated": "12 May 2025",
    "actions": ["Edit", "Activate", "Delete"]
  }
]
export const HelpArticlesTableData = [
  {
    "title": "How to Book a Session",
    "category": "Sessions",
    "tags": ["Booking", "Call"],
    "for": "Students",
    "author": "Team Aimshala",
    "lastUpdated": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Accessing Your Assessment Results",
    "category": "Assessments",
    "tags": ["Results", "Score"],
    "for": "Students",
    "author": "Riya Malhotra",
    "lastUpdated": "15 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Resetting Your Password",
    "category": "Technical Support",
    "tags": ["Login", "Account"],
    "for": "All Users",
    "author": "Rahul Sen",
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const FAQsTableData = [
  {
    "pageTitle": "Student Onboarding",
    "for": "Students",
    "questions": 15,
    "lastUpdated": "18 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Coach FAQs",
    "for": "Coaches",
    "questions": 11,
    "lastUpdated": "17 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Parent Support & Guidance",
    "for": "Parents",
    "questions": 9,
    "lastUpdated": "16 May 2025",
    "status": "Draft",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Session & Booking Help",
    "for": "All Users",
    "questions": 14,
    "lastUpdated": "15 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Technical Troubleshooting",
    "for": "All Users",
    "questions": 12,
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["View FAQs →"]
  }
]

export const PublishedTableData = [
  {
    "title": "Future-Proof Careers in 2030",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["AI", "Automation"],
    "for": "UG, PG, Professionals",
    "views": 4010,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "NEET 2025 Prep Guide",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["NEET", "MBBS"],
    "for": "11-12, UG",
    "views": 2220,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Careers in Climate Tech",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["Climate", "Sustainability"],
    "for": "UG, PG",
    "views": 1580,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Understanding CUET UG Exam",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["CUET", "UG"],
    "for": "11-12",
    "views": 1980,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Top 5 Digital Marketing Roles",
    "author": "Ankur Sharma",
    "category": "Careers",
    "tags": ["Marketing", "SEO"],
    "for": "UG, Professionals",
    "views": 3120,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Scholarships for Indian Girls in STEM",
    "author": "Neha Joshi",
    "category": "Scholarships",
    "tags": ["STEM", "Gender"],
    "for": "UG",
    "views": 1420,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Animation & VFX Careers",
    "author": "Ravi Kapoor",
    "category": "Careers",
    "tags": ["Design", "Animation"],
    "for": "UG",
    "views": 1760,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Law Entrance Exams Overview",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["CLAT", "Law"],
    "for": "UG",
    "views": 2450,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "MBA vs PGDM – What to Choose?",
    "author": "Rohan Sen",
    "category": "Higher Education",
    "tags": ["MBA", "PGDM"],
    "for": "PG",
    "views": 1680,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "How to Get Into Ivy League Schools",
    "author": "Team Aimshala",
    "category": "Study Abroad",
    "tags": ["Ivy League", "SAT"],
    "for": "UG",
    "views": 2780,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Beginner’s Guide to Data Science",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["Data", "Python"],
    "for": "UG, PG",
    "views": 3840,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "International Scholarships for PG Students",
    "author": "Neha Joshi",
    "category": "Scholarships",
    "tags": ["Global", "Funding"],
    "for": "PG",
    "views": 1190,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Coding Bootcamps: Are They Worth It?",
    "author": "Ankur Sharma",
    "category": "Careers",
    "tags": ["Coding", "Bootcamp"],
    "for": "UG, PG",
    "views": 2070,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Top Indian Universities for Arts",
    "author": "Rohan Sen",
    "category": "Colleges",
    "tags": ["Arts", "UG"],
    "for": "UG",
    "views": 2210,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Mastering Time Management for Exams",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["Productivity", "Focus"],
    "for": "Students",
    "views": 1350,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Exploring UI/UX Design Careers",
    "author": "Neha Joshi",
    "category": "Careers",
    "tags": ["Design", "UI/UX"],
    "for": "UG, PG",
    "views": 1940,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Financial Aid Tips for College Applicants",
    "author": "Riya Malhotra",
    "category": "Scholarships",
    "tags": ["Finance", "Loans"],
    "for": "UG, PG",
    "views": 1685,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  }
]
export const DraftsTableData = [
  {
    "title": "Interview Tips for Freshers",
    "author": "Meera Kapoor",
    "category": "Skills",
    "lastEdited": "17 May 2025",
    "suggestedTags": ["Communication", "HR"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Mastering Public Speaking",
    "author": "Ravi Sharma",
    "category": "Skills",
    "lastEdited": "16 May 2025",
    "suggestedTags": ["Confidence", "Presentation"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Resume Writing Guide",
    "author": "Anjali Mehta",
    "category": "Careers",
    "lastEdited": "15 May 2025",
    "suggestedTags": ["Resume", "Writing"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Time Management Hacks",
    "author": "Neha Joshi",
    "category": "Productivity",
    "lastEdited": "14 May 2025",
    "suggestedTags": ["Time", "Efficiency"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Basics of Graphic Design",
    "author": "Rohan Sen",
    "category": "Design",
    "lastEdited": "13 May 2025",
    "suggestedTags": ["Creativity", "Visuals"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Coding Bootcamps vs. CS Degrees",
    "author": "Ankur Sharma",
    "category": "Technology",
    "lastEdited": "12 May 2025",
    "suggestedTags": ["Programming", "Career Path"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Effective Group Discussion Tips",
    "author": "Meera Kapoor",
    "category": "Skills",
    "lastEdited": "11 May 2025",
    "suggestedTags": ["GD", "Speaking"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Choosing the Right MBA Specialization",
    "author": "Rahul Sen",
    "category": "Education",
    "lastEdited": "10 May 2025",
    "suggestedTags": ["MBA", "Business"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Introduction to Freelancing",
    "author": "Priya Desai",
    "category": "Careers",
    "lastEdited": "09 May 2025",
    "suggestedTags": ["Freelance", "Gig Economy"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Career Paths in AI",
    "author": "Riya Malhotra",
    "category": "Technology",
    "lastEdited": "08 May 2025",
    "suggestedTags": ["AI", "ML"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "How to Prepare for Campus Placements",
    "author": "Team Aimshala",
    "category": "Careers",
    "lastEdited": "07 May 2025",
    "suggestedTags": ["Campus", "Interviews"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Portfolio Building for Designers",
    "author": "Neha Joshi",
    "category": "Design",
    "lastEdited": "06 May 2025",
    "suggestedTags": ["Portfolio", "Design"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Digital Marketing Basics",
    "author": "Ravi Kapoor",
    "category": "Marketing",
    "lastEdited": "05 May 2025",
    "suggestedTags": ["SEO", "Social Media"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Scholarships for Indian Students Abroad",
    "author": "Priya Desai",
    "category": "Scholarships",
    "lastEdited": "04 May 2025",
    "suggestedTags": ["Abroad", "Funding"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Top Programming Languages in 2025",
    "author": "Ankur Sharma",
    "category": "Technology",
    "lastEdited": "03 May 2025",
    "suggestedTags": ["Coding", "Languages"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Creative Careers After 12th",
    "author": "Riya Malhotra",
    "category": "Careers",
    "lastEdited": "02 May 2025",
    "suggestedTags": ["Design", "Arts"],
    "actions": ["Edit", "Delete"]
  }
]
export const PendingApprovalTableData =[
  {
    "title": "Women in Tech Leadership",
    "author": "Rahul Sen",
    "category": "Careers",
    "submittedOn": "18 May 2025",
    "assignedEditor": "Riya Malhotra",
    "actions": ["Review", "Approve", "Reject"]
  }
]
