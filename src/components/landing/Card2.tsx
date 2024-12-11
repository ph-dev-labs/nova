import Image from "next/image";

export default function Card2({
  imageUrl,
  title,
  description,
  bgColor,
}: {
  imageUrl: string;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="py-10 space-y-2 rounded-lg px-8"
    >
      <div>
        <Image src={imageUrl} alt={title} height={64} width={64} />
      </div>
      <div className="space-y-2">
        <p className="font-[700] text-md">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
