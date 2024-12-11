import Image from "next/image";
import React from "react";

export default function FeedbackCard({
  imageUrl,
  name,
  about,
}: {
  imageUrl: string;
  name: string;
  about: string;
}) {
  return (
    <div className="bg-[#CCF6E5] w-full lg:w-[400px] mx-auto rounded-lg">
      <div>
        <Image src={imageUrl} alt="image" height={120} width={200} />
      </div>
      <div className="py-8 px-8 space-y-4">
        <h4 className="font-[700]">{name}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
}
