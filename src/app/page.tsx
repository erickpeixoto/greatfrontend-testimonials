import { TestimonialCard } from "@/components/testimonial-card";

export default function Home() {
  const testimonial = {
    profile: "/profile-thumbnail.png",
    name: "sarah dole",
    at: "@aarahdole",
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  };
  return (
    <main className="bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end h-screen w-full text-neutral-900 grid place-items-center">
      <TestimonialCard {...testimonial} />
    </main>
  );
}
