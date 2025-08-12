import { MapPinned, TentTree, Snowflake } from "lucide-react";

export const services = [
  {
    icon: <MapPinned className="w-10 h-10" />,
    title: "Guided Tours",
    link: "/services",
    description:
      "Choose from our itineraries or request a custom itinerary of choice",
  },
  {
    icon: <TentTree className="w-10 h-10" />,
    title: "Camping Tours",
    link: "/services",
    description:
      "Spend a night or multiple nights under the starlight with our premium camping gear",
  },
  {
    icon: <Snowflake className="w-10 h-10" />,
    title: "Glacial Walks",
    link: "/services",
    description: "Guided walks on glacial ice frozen for over 240,000 years",
  },
];
