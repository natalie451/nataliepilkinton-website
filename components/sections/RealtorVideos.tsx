"use client";

import { useState } from "react";
import { realtorVideos } from "@/lib/data/videos";

function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-video bg-navy rounded-xs overflow-hidden">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer border-0 p-0 bg-navy"
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gold text-navy font-semibold text-sm px-md py-sm rounded-full shadow-brand-sm">
                Play
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-sm text-sm font-semibold text-navy">{title}</figcaption>
    </figure>
  );
}

export function RealtorVideos() {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-lg">
      {realtorVideos.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} />
      ))}
    </div>
  );
}
