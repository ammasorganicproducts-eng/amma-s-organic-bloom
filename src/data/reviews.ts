export interface Review {
  name: string;
  place: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Lakshmi P.",
    place: "Vijayawada",
    rating: 5,
    text: "The moringa and beetroot powders smell so fresh. You can tell everything is made at home with care.",
  },
  {
    name: "Srinivas R.",
    place: "Guntur",
    rating: 5,
    text: "Ordered the ubtan and walnut scrub soaps for my family. Simple, natural and very well packed.",
  },
  {
    name: "Anitha K.",
    place: "Vijayawada",
    rating: 5,
    text: "Amma answers every question on WhatsApp patiently. The curry leaves powder is now a kitchen staple.",
  },
  {
    name: "Ramesh B.",
    place: "Hyderabad",
    rating: 5,
    text: "Bought a combo pack as a festival gift. Everyone loved the presentation and the quality.",
  },
];
