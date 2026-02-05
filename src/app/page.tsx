import type { Metadata } from 'next';
import LinkButton from './components/LinkButton';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Braden Carter | Full-Stack Developer',
  description: 'Full-stack developer specializing in modern web applications with React, Next.js, and Node.js.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-theme-color-dark-gray relative overflow-hidden">
      {/* Tech grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 w-full h-[40vh]"
        style={{
          zIndex: 0,
        }}
      >
        <Image
          src="/glowing_hexes.png"
          alt="Tech Grid Background"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
            style={{
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>


      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Name + Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-theme-color-blue">
            Braden Carter
          </h1>
          <p className="text-2xl md:text-3xl text-theme-color-mint">
            Full-Stack Solutions Developer
          </p>
        </div>

        {/* Positioning Statement */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-theme-color-light-gray">
            Building scalable web applications with modern technologies. 
            Focused on clean architecture, performance, and exceptional user experiences.
          </p>
        </div>

        {/* Core Stack Summary */}
        <div className="pt-4">
          <p className="text-lg md:text-xl text-theme-color-light-gray">
            TypeScript • React • Next.js • Node.js • SQL Server
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <LinkButton href="/projects">View Projects</LinkButton>
          <LinkButton href="/resume" variant="outline">Skills & Experience</LinkButton>
        </div>
      </div>

      {/* Logo branding */}
      <Image
        src="/bc_logo_transparent.png"
        alt="BC Logo"
        width={160}
        height={160}
        className="hidden sm:block absolute sm:w-40 sm:h-40 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 opacity-70 hover:opacity-100 transition-opacity z-20"
        priority
        style={{ pointerEvents: 'none' }}
      />
    </main>
  );
}
