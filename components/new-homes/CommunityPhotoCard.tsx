import Image from "next/image";
import Link from "next/link";
import { getCommunityGallery, publishedPriceLabel } from "@/lib/data/newHomePhotos";
import type { NewHomeCommunity } from "@/lib/data/newHomes";

export function CommunityPhotoCard({ community }: { community: NewHomeCommunity }) {
  const photo = getCommunityGallery(community.slug)?.photos[0];
  const price = publishedPriceLabel(community.priceNote);

  return (
    <Link href={`/new-homes/${community.citySlug}/${community.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xs border border-gray-light bg-white shadow-brand-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue hover:shadow-brand-lg">
        <div className="relative aspect-[16/10] overflow-hidden bg-blue">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-end p-md">
              <p className="mb-0 text-sm text-cream">No photo on the community site</p>
            </div>
          )}
          {price && (
            <span className="absolute left-3 top-3 rounded-full bg-cream px-md py-xs text-xs font-semibold uppercase tracking-[0.08em] text-navy shadow-brand-sm">
              {price}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-lg">
          <p className="mb-xs text-xs font-semibold uppercase tracking-[0.14em] text-blue">{community.developer}</p>
          <h3 className="mb-sm mt-0 text-2xl transition-colors group-hover:text-blue">{community.name}</h3>
          <p className="mb-0 line-clamp-3 text-gray-dark">{community.summary}</p>
        </div>
      </article>
    </Link>
  );
}
