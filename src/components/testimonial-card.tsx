import Image from "next/image";

type TestimonialCard = {
  profile: string;
  name: string;
  at: string;
  text: string;
};

export function TestimonialCard({ profile, name, at, text }: TestimonialCard) {
  return (
    <div className="bg-white w-[340px] h-[233px] p-6 rounded-lg shadow ">
      <div className="flex gap-3">
        <div className="">
          <Image src={profile} width={48} height={48} alt={profile} />
        </div>
        <div className="">
          <h1 className="text-lg font-semibold capitalize">{name}</h1>
          <h3 className="text-sm text-neutral-600">{at}</h3>
        </div>
      </div>
      <p className="text-neutral-600 text-base pt-4">{text}</p>
    </div>
  );
}
