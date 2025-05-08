export interface Class {
    subject: string;
    date: string;
    time: string;
    duration: number;
    teacherId: string;
    studentIds: string[];
    room?: string;
    description?: string;
    materials?: string[];
    category?: string;
  }
  
  export interface Student {
    name: string;
    email: string;
    major?: string;
    year?: number;
    studentId?: string;
  }
  