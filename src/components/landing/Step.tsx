import Image from "next/image";

export default function Step({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-[#CCF6E5] w-[100%] md:w-[311px] lg:w-[411px] overflow-hidden">
      <div className="h-[60%] relative">
        <Image src="./mask.svg" alt={title} height={223} width={411} />
        <div className="absolute top-[70px] lg:top-[153px] left-[24px] px-[20px] py-[12px] rounded-full bg-[#CCF6E5]">
          <p className="font-[800] text-md">{id}</p>
        </div>
      </div>
      <div className="px-8 py-8 space-y-2">
        <p className="text-sm font-[700] lg:text-lg">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
