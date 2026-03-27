import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DSU | Dayananda Sagar University",
  description: "Learn about the legacy, vision, and mission of Dayananda Sagar University.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-0">
      <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-dsu-navy mb-6">
          About DSU
        </h1>
        <div className="w-24 h-1.5 bg-dsu-gold mx-auto mb-10 rounded-full shadow-lg" />
        <p className="text-2xl font-serif text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
          Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today’s students into responsible citizens and professional leaders of tomorrow. 
        </p>
      </div>

      <div className="w-full bg-white py-16 border-y border-blue-100 shadow-sm relative overflow-hidden flex flex-col items-center">
        <div className="max-w-5xl mx-auto px-6 space-y-16 relative z-10">
          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Unveiling a Legacy
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p className="mb-4">
                Universities of great legacy across the world are the invaluable contribution of certain visionaries to the world. Universities don’t manufacture products with specific use and determined life cycle.
              </p>
              <p>
                They share & impart multitudes of streams of knowledge and create wonderful human beings – learned practitioners & Disseminators of knowledge to make the world a better place to be.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Proud to be DSU
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded by Late Sri Dayananda Sagar in the early sixties (with just four students), DSI has morphed into global education power house, spread over five campuses, catering to the education needs of over 17,000 students.
              </p>
            </div>
          </section>
          
          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Facilities & Labs
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p className="mb-4">
                Besides our high-calibre teaching staff, the students are given a challenging academic environment with well-equipped lecture theatres, laboratories, excellent libraries and computer networking facilities. DSU also has exceptional infrastructure for students who possess a passion for sports and games.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Inspired by Innovators
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p>
                Research, Innovation and Incubation (spread over 25,000 sft of industry quality labs) form the core of DSU. So it isn’t surprising that DSU has taken the next logical step: Laying the foundation to transform the entrepreneurial dream of every young Indian and global citizen into a reality. Enabling this transformation is the active support of industry leaders, industry bodies and a dedicated 4 lakh square feet modern ready-to-move-in infrastructure!
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Stellar Performance – Time and Again
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p>
                Dayananda Sagar Institutions (DSI) have consistent topped the academic charts in every area of knowledge standing out from the midst of a sea of institutions of repute. Its accomplishments are unparalleled. In the recent past, DSI secured 58 ranks from Visvesvaraya Technological University among 220 engineering colleges in Karnataka (in 2014).
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="text-3xl font-serif font-bold text-dsu-navy md:w-1/3 shrink-0 relative">
              Different Courses for Different Passions
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-dsu-gold"></span>
            </h2>
            <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg">
              <p>
                Beginning Academic Year 2015–16, Dayananda Sagar University would offer courses in Engineering, Computer Applications, Sciences, Arts and Management in the Bachelors, Masters and Ph.D levels. Supporting the academic activities are the Centers of Excellence in ICT, Health Care, Energy and Life Science, among other fast evolving fields of study.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Full Width Colored Banner Section for Vision / Mission */}
      <div className="w-full bg-[#002366] relative border-t-8 border-dsu-gold py-20 px-6 mt-16 shadow-2xl overflow-hidden flex flex-col justify-center items-center">
        {/* Abstract Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dsu-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-md">
              Throwing light on the way forward
            </h2>
            <div className="w-32 h-1 bg-white/20 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-dsu-gold uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-px bg-dsu-gold" /> Vision
              </h3>
              <p className="text-blue-50 text-lg leading-relaxed font-medium">To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-dsu-gold uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-px bg-dsu-gold" /> Mission
              </h3>
              <p className="text-blue-50 text-lg leading-relaxed font-medium">To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.</p>
            </div>
          </div>

          <div className="mt-16 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-serif font-bold mb-10 text-white text-center">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <strong className="block text-dsu-gold mb-3 text-lg font-bold">The Pursuit of Excellence</strong>
                <p className="text-blue-100/70 text-sm">A commitment to strive continuously to improve ourselves and our systems.</p>
              </div>
              <div className="text-center">
                <strong className="block text-dsu-gold mb-3 text-lg font-bold">Fairness</strong>
                <p className="text-blue-100/70 text-sm">A commitment to objectivity and impartiality, to earn the trust of society.</p>
              </div>
              <div className="text-center">
                <strong className="block text-dsu-gold mb-3 text-lg font-bold">Leadership</strong>
                <p className="text-blue-100/70 text-sm">A commitment to lead responsively and creatively in research processes.</p>
              </div>
              <div className="text-center">
                <strong className="block text-dsu-gold mb-3 text-lg font-bold">Integrity</strong>
                <p className="text-blue-100/70 text-sm">A commitment to be ethical, sincere and transparent in all activities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
