import RestaurantPageClient from "./RestaurantPageClient";

// Generate static params for all restaurant IDs
export function generateStaticParams() {
  // Mock restaurant IDs - in production, this would fetch from a database
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export default function RestaurantPage({ params }: { params: { id: string } }) {
  return <RestaurantPageClient id={params.id} />;
}
