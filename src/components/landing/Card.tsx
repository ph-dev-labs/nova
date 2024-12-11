import Image from "next/image";
import Button from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Card({
  title,
  description,
  color,
  imageUrl,
  btnTitle,
  imageClassName,
}: {
  title: string;
  description: string;
  imageUrl: string | StaticImport;
  color: string;
  btnTitle: string;
  imageClassName: string;
}) {
  return (
    <div
      className={`px-8 py-8 rounded-lg space-y-4 relative lg:h-[360px] lg:space-y-8 overflow-hidden`}
      style={{
        backgroundColor: color,
      }}
    >
      <h4 className="font-[600] text-md lg:text-xl">{title}</h4>
      <p className="text-sm lg:text-md lg:w-[60%]">{description}</p>
      <Button className="w-[12rem] lg:w-[16rem] text-sm">{btnTitle}</Button>
      <div className={imageClassName + " hidden lg:block overflow-hidden"}>
        <Image src={imageUrl} width={308} height={208} alt={title} />
      </div>
    </div>
  );
}
