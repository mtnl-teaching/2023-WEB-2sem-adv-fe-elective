import { Inter } from "next/font/google";
import styles from "@/styles/Index.module.css";
import { formatLocationsUrl } from "@/utils/formatUrls";
import WWButton from "@/components/WWButton";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export interface WWLocation {
  id: number;
  name: string;
  status: "available" | "maintenance";
}

export interface LocationsProps {
  locations: WWLocation[];
}

export async function getStaticProps() {
  return await fetch(formatLocationsUrl())
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      return { props: { locations: body.response.locations } };
    });
}

export default function Locations({ locations }: LocationsProps) {
  const router = useRouter();

  const handleClick = (location: WWLocation) => {
    console.log(location);
    router.push(`/location/${location.id}`);
  };

  return (
    <div>
      <div className={styles.description}>
        <h1>Velkommen til Wash World</h1>
        <p>Vælg den lokation du ønsker at starte en vask ved</p>
      </div>
      <div className={styles.buttonsGrid}>
        {locations
          .map((location) => {
            return {
              available: location.status === "available",
              ...location,
            };
          })
          .map((location) => {
            return (
              <WWButton
                key={location.id}
                backgroundColor={location.available ? "#00c167" : "grey"}
                onClick={() => handleClick(location)}
                disabled={!location.available}
                badgeText={location.available ? "" : "Closed for maintenance"}
                buttonText={location.name}
              />
            );
          })}
      </div>
    </div>
  );
}
