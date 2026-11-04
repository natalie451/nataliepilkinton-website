"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Testimonial } from "@/components/sections/Testimonial";
import { bookingTestimonials } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/data/navigation";

const reviewAuthors = ["Eric Adams", "Jean Hurt", "John E"] as const;

/**
 * Verified on YouTube, Nov 4, 2026. Playlist title: Testimonials.
 * Description: Hear directly from clients about their experience working with Natalie Pilkinton.
 * Channel: youtube.com/@NataliePilkintonRealtor
 */
const testimonialPlaylistId = "PLBcxeEVvk8jM";
const testimonialVideoId = "77n8w4QVrio";
const testimonialPlaylistUrl = `https://www.youtube.com/playlist?list=${testimonialPlaylistId}`;

const bio =
  "Natalie Pilkinton is a Houston-area REALTOR® with HomeRock Realty, a real estate investor and an educator with more than 20 years of experience helping buyers, sellers and investors across Spring, Houston and The Woodlands.";

export function NewHomesTrust() {
  const reviews = reviewAuthors
    .map((author) => bookingTestimonials.find((item) => item.author === author))
    .filter((item) => item !== undefined);

  return (
    <Section tone="light">
      <Container>
        <h2>What clients say</h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-lg">
          {reviews.map((review) => (
            <Testimonial key={review.author} {...review} onWhite />
          ))}
        </div>
        <Button href={siteConfig.googleReviewUrl} external variant="secondary">
          Read all reviews
        </Button>

        <h2 className="mt-3xl">Client stories</h2>
        <p className="max-w-[42rem] text-gray-dark">
          Testimonials from Natalie Pilkinton&apos;s YouTube channel. The video loads when you press play.
        </p>
        <TestimonialPlaylist />
        <p className="mt-md">
          <a href={testimonialPlaylistUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue">
            Watch the Testimonials playlist on YouTube
          </a>
        </p>

        <div className="mt-3xl grid grid-cols-2 max-md:grid-cols-1 items-center gap-xl">
          <Image
            src={siteConfig.headshotUrl}
            alt="Natalie Pilkinton, Houston REALTOR® with HomeRock Realty"
            width={640}
            height={640}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="h-auto w-full max-w-[24rem] rounded-sm"
          />
          <div>
            <h2 className="mt-0">Meet Natalie</h2>
            <p className="text-gray-dark">{bio}</p>
            <Button href="/about">About Natalie</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TestimonialPlaylist() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video max-w-[48rem] overflow-hidden rounded-xs bg-blue">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${testimonialVideoId}?list=${testimonialPlaylistId}&autoplay=1`}
          title="Testimonials playlist from Natalie Pilkinton"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 cursor-pointer border-0 bg-blue p-0 text-left"
        >
          <img
            src={`https://i.ytimg.com/vi/${testimonialVideoId}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-[#0a1a33]/35" />
          <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-sm rounded-xs bg-cream px-md py-sm text-sm font-semibold text-navy">
            Play testimonials
          </span>
        </button>
      )}
    </div>
  );
}
