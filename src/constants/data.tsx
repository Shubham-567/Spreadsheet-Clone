import ArrowSplit from "../components/icons/ArrowSplit";
import Briefcase from "../components/icons/Briefcase";
import Calendar from "../components/icons/Calendar";
import ChevronCircle from "../components/icons/ChevronCircle";
import Emoji from "../components/icons/Emoji";
import Globe from "../components/icons/Globe";
import Person from "../components/icons/Person";
import ThreeDots from "../components/icons/ThreeDots";

// spreadsheet
export const columnGroup = [
  { label: "", colSpan: 1 },
  {
    label: "Overview",
    colSpan: 4,
    bgColor: "bg-[#E2E2E2]",
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
  { label: "+", colSpan: 1, bgColor: "#EEEEEE" },
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
  { label: "" },
];

export const initialData = [
  [
    1,
    "Launch social media campaign for pro...",
    "15-11-2024",
    "In-process",
    "Aisha Patel",
    "www.aishapatel...",
    "Sophie Choudhury",
    "Medium",
    "20-11-2024",
    "6,200,000 ₹",
  ],
  [
    2,
    "Update press kit for company redesign",
    "28-10-2024",
    "Need to start",
    "Irfan Khan",
    "www.irfankhanp...",
    "Tejas Pandey",
    "High",
    "30-10-2024",
    "3,500,000 ₹",
  ],
  [3, "", "", "", "", "", "", "", "", ""],
  [4, "", "", "", "", "", "", "", "", ""],
  [5, "", "", "", "", "", "", "", "", ""],
  [6, "", "", "", "", "", "", "", "", ""],
  [7, "", "", "", "", "", "", "", "", ""],
  [8, "", "", "", "", "", "", "", "", ""],
  [9, "", "", "", "", "", "", "", "", ""],
  [10, "", "", "", "", "", "", "", "", ""],
  [11, "", "", "", "", "", "", "", "", ""],
  [12, "", "", "", "", "", "", "", "", ""],
  [13, "", "", "", "", "", "", "", "", ""],
  [14, "", "", "", "", "", "", "", "", ""],
  [15, "", "", "", "", "", "", "", "", ""],
  [16, "", "", "", "", "", "", "", "", ""],
  [17, "", "", "", "", "", "", "", "", ""],
  [19, "", "", "", "", "", "", "", "", ""],
  [19, "", "", "", "", "", "", "", "", ""],
  [20, "", "", "", "", "", "", "", "", ""],
  [21, "", "", "", "", "", "", "", "", ""],
  [22, "", "", "", "", "", "", "", "", ""],
  [23, "", "", "", "", "", "", "", "", ""],
  [24, "", "", "", "", "", "", "", "", ""],
  [25, "", "", "", "", "", "", "", "", ""],
  [26, "", "", "", "", "", "", "", "", ""],
  [27, "", "", "", "", "", "", "", "", ""],
  [28, "", "", "", "", "", "", "", "", ""],
  [29, "", "", "", "", "", "", "", "", ""],
  [30, "", "", "", "", "", "", "", "", ""],
];
