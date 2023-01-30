export interface CreateCourseRequest {
    title: string;
    description: string;
    labels: string[];
    author: string;
    lengthInMinutes: number;
    level: LEVEL;
    finished: boolean;
    started: boolean;
    uploaded: Date;
    updated: Date;
    url: string;
}

export interface CreateAuthorRequest {
    name: string;
    url: string;
}

enum LEVEL {
    BEGINNER = "Beginner",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced",
}

export enum PLATFORM {
    UDEMY = "Udemy",
    PLURALSIGHT = "Pluralsight",
    CODECADEMY = "Codecademy",
    COURSERA = "Corsera",
    LINKEDIN_LEARNING = "LinkedIn Learning",
    EDX = "edX",
    KHAN_ACADEMY = "Khan Academy",
    KAGGLE = "KAGGLE",
    DATAQUEST = "DATAQUEST",
    EGGHEAD = "Egghead",
    UDACITY = "Udacity",
    TEAMTREEHOUSE = "TeamTreeHouse",
    FREECODECAMP = "FreeCodeCamp",
    CODEAVENUE = "CodeAvenue",
    W3SCHOOLS = "W3Schools",
    CODEWARS = "CodeWars",
    SKILLSHARE = "SkillShare",
    CODE_SCHOOL = "CodeSchool",
    SOLO_LEARN = "SoloLearn",
    CODE_ORG = "Code.org",
    CODEFIGHTS = "CodeFights",
    HACKERRANK = "HackerRank",
    SCRIMBA = "Scrimba",
    FRONTEND_MASTERS = "Frontend Masters",
    ZTM = "Zero To Mastery",
    ACADEMIND = "Academind",
    ANGULAR_UNIVERSITY = "Angular University",
    THE_NET_NINJA = "The Net Ninja",
    ULTIMATE_COURSES = "Ultimate Courses",
}

export interface CreatePlatformRequest {
    name: PLATFORM;
    url: string;
    fee: {
        monthly: {
            USD: number;
            EUR: number;
        },
        yearly: { 
            EUR: number; 
            USD: number; 
        }
    }
}

export interface CreateLabelRequest {
    name: string;
    description: string;
}