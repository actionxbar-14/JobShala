// Updated JobData with companyId linking each job to its company.
// Ensure these companyId values match the ids used in CompanyData.js
export const JobData = [
  {
    id: 1,
    companyId: 1, // TechCorp (example)
    title: "Frontend Developer",
    type: "Contractual",
    location: "Malaysia",
    salary: "$200 - $500 USD",
    timeRemaining: "13h 9m",
    logo: "https://img.icons8.com/ios/50/developer.png",
  },
  {
    id: 2,
    companyId: 2, // Designify Inc.
    title: "UI/UX Designer",
    type: "Part Time",
    location: "Ireland",
    salary: "Competitive",
    timeRemaining: "4d 13h",
    logo: "https://img.icons8.com/ios/50/design.png",
  },
  {
    id: 3,
    companyId: 3, // VueWorks
    title: "Vue JS Developer",
    type: "Intern",
    location: "Tunisia",
    salary: "Competitive",
    timeRemaining: "3d 13h",
    logo: "https://img.icons8.com/ios/50/internship.png",
  },
  {
    id: 4,
    companyId: 3, // same company, different role
    title: "Intern Frontend Developer",
    type: "Full Time",
    location: "Philippines",
    salary: "$50 - $200 USD",
    timeRemaining: "3d 13h",
    logo: "https://img.icons8.com/ios/50/internship.png",
  },
  {
    id: 5,
    companyId: 4, // ReactNative Labs
    title: "React Native Developer",
    type: "Remote",
    location: "India",
    salary: "$300 - $600 USD",
    timeRemaining: "5d 2h",
    logo: "https://img.icons8.com/ios/50/react-native.png",
  },
];
