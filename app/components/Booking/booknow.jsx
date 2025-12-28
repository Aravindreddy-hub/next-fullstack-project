"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const resorts = [
  {
    id: 1,
    name: "Ocean Breeze Resort",
    location: "Goa, India",
    description:
      "A luxury beachfront resort offering sea-view rooms, infinity pool, private beach access, and delicious seafood restaurants.",
    image: "/image1.jpg",
  },
  {
    id: 2,
    name: "Mountain Escape Resort",
    location: "Manali, India",
    description:
      "A peaceful hill-view resort surrounded by mountains, featuring cozy cabins, adventure sports, and breathtaking sunrise views.",
    image: "/image2.jpg",
  },
  {
    id: 3,
    name: "Green Valley Eco Resort",
    location: "Kerala, India",
    description:
      "An eco-friendly resort located inside green forests with Ayurvedic spa, tree-house rooms, and nature trails.",
    image: "/image3.jpg",
  },
  {
    id: 4,
    name: "Royal Palace Resort",
    location: "Jaipur, India",
    description:
      "A heritage luxury resort inspired by Rajasthani royal architecture with palace-style interiors and cultural performances.",
    image: "/image4.jpg",
  },
  {
    id: 5,
    name: "Desert Dunes Resort",
    location: "Jaisalmer, India",
    description:
      "A desert-themed resort featuring tent rooms, camel safari, traditional dance nights, and open-sky dining.",
    image: "/image5.jpg",
  },
  {
    id: 6,
    name: "Skyline View Resort",
    location: "Bangalore, India",
    description:
      "A modern city-view resort with rooftop pool, fine dining, spa services, and luxurious premium rooms.",
    image: "/image6.jpg",
  },
];

export default function ResortsPage() {
  const router = useRouter();

  return (
    <div className="resort-list">
      {resorts.map((resort) => (
        <div key={resort.id} className="resort-card">
          <div className="resort-left">
            <Image
              src={resort.image}
              alt={resort.name}
              width={220}
              height={140}
              className="resort-image"
            />
            <h2 className="resort-title">{resort.name}</h2>
          </div>

          <div className="resort-details">
            <div>
              <p className="location">{resort.location}</p>
              <p className="desc">{resort.description}</p>
            </div>

            <div>
              <button
                onClick={() => router.push(`/Bookmodal`)}
                className="book-btn"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
