import ArrowSplit from "../components/icons/ArrowSplit";
import ArrowSync from "../components/icons/ArrowSync";
import Briefcase from "../components/icons/Briefcase";
import Calendar from "../components/icons/Calendar";
import ChevronCircle from "../components/icons/ChevronCircle";
import Emoji from "../components/icons/Emoji";
import Globe from "../components/icons/Globe";
import Link from "../components/icons/Link";
import Person from "../components/icons/Person";
import ThreeDots from "../components/icons/ThreeDots";

// spreadsheet
export const columnGroup = [
  { label: "", colSpan: 1 },
  {
    label: "Q3 Financial Overview",
    colSpan: 4,
    bgColor: "bg-[#E2E2E2]",
    prefix: <Link />,
    suffix: <ArrowSync />,
  },
  {
    label: "",
    colSpan: 1,
  },
  {
    label: "ABC",
    colSpan: 1,
    bgColor: "bg-[#D2E0D4]",
    prefix: <ArrowSplit fill='#A3ACA3' />,
    suffix: <ThreeDots />,
  },
  {
    label: "Answer a question",
    colSpan: 2,
    bgColor: "bg-[#DCCFFC]",
    prefix: <ArrowSplit />,
    suffix: <ThreeDots />,
  },
  {
    label: "Extract",
    colSpan: 1,
    bgColor: "bg-[#FAC2AF]",
    prefix: <ArrowSplit />,
    suffix: <ThreeDots />,
  },
  { label: "+", colSpan: 1, bgColor: "bg-[#EEEEEE]" },
];

export const columns = [
  { label: "#", bgColor: "bg-[#EEEEEE]" },
  {
    label: "Job Request",
    icon: <Briefcase />,
    dropdown: true,
    bgColor: "bg-[#EEEEEE]",
  },
  {
    label: "Submitted",
    icon: <Calendar />,
    dropdown: true,
    bgColor: "bg-[#EEEEEE]",
  },
  {
    label: "Status",
    icon: <ChevronCircle />,
    dropdown: true,
    bgColor: "bg-[#EEEEEE]",
  },
  {
    label: "Submitter",
    icon: <Person />,
    dropdown: true,
    bgColor: "bg-[#EEEEEE]",
  },
  { label: "URL", icon: <Globe />, dropdown: true, bgColor: "bg-[#EEEEEE]" },
  {
    label: "Assigned",
    icon: <Emoji />,
    dropdown: true,
    bgColor: "bg-[#E8F0E9]",
  },
  { label: "Priority", bgColor: "bg-[#EAE3FC]" },
  { label: "Due Date", bgColor: "bg-[#EAE3FC]" },
  { label: "Est. Value", bgColor: "bg-[#FFE9E0]" },
  { label: "", bgColor: "bg-white" },
];

export const initialData = [
  [
    1,
    "Launch social media campaign for",
    "15-11-2024",
    "In-process",
    "Aisha Patel",
    "www.aishapatel.com",
    "Sophie Choudhury",
    "Medium",
    "20-11-2024",
    "6,200,000 ₹",
    "",
  ],
  [
    2,
    "Update press kit for company redesign",
    "28-10-2024",
    "Need to start",
    "Irfan Khan",
    "www.irfankhan.com",
    "Tejas Pandey",
    "High",
    "30-10-2024",
    "3,500,000 ₹",
    "",
  ],

  // Additional rows
  ...Array.from({ length: 28 }, (_, i) => [
    i + 3,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]),
];

export const priorityStyles = {
  Low: "text-center text-xs text-blue-500 font-medium",
  Medium: "text-center text-xs text-yellow-700 font-medium",
  High: "text-center text-xs text-red-600 font-medium",
};

export const initialTabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
