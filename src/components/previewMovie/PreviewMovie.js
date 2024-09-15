import Image from "next/image";

import { Button } from "../button/Button";

export const PreviewMovie = () => {
  return (
    <div className="px-20 pt-20">
      <h1 className="text-5xl text-slate-500 font-semibold pb-5">
        Featured Movie
      </h1>
      <div className="relative">
        <Image
          className="object-cover bg-slate-500 outline-none rounded-lg relative aspect-video overflow-hidden w-full "
          height="550"
          width="1280"
          style={{
            aspectRatio: "1280/550",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8">
          <div className="space-y-2 text-white">
            <h3 className="text-2xl font-bold text-slate-800">Inception</h3>
            <p className="text-sm text-slate-800">
              A thief who enters the dreams of others to steal secrets from
              their subconscious.
            </p>
            <Button className="inline-flex items-center justify-center bg-slate-800 p-2 rounded-md text-slate-300">
              Watch Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
