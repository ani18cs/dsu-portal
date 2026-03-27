"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, User, Mail, Phone } from "lucide-react";

export default function IQACEventsPage() {
  const events = [
    {
      title: "Interaction Meeting on NAAC Criteria",
      desc: "Join us to interact with our eminent speakers Dr. K.N.B Murthy, Dr. B.V. Ravishankar, and Dr. Mangala Keshava.",
      date: "24th & 25th November 2020",
      time: "02.30 PM - 04.00 PM",
      links: [
        { label: "Zoom", url: "https://zoom.us/j/5516619991" },
        { label: "YouTube", url: "https://www.youtube.com/channel/UCOulRShzEW0qSxHyHri96aQ" }
      ]
    },
    {
      title: "NAAC Pathway for Quality Assurance in Higher Educational Institutions",
      desc: "Seminar featuring Dr. K.N.B Murthy, VC, DSU & Dr. Ganesh A. Hegde, Adviser NAAC.",
      date: "21 October, 2020",
      time: "03.00 PM - 04.00 PM",
      links: [
        { label: "Zoom", url: "https://zoom.us/j/5516619991" },
        { label: "YouTube", url: "https://www.youtube.com/channel/UCOulRShzEW0qSxHyHri96aQ" }
      ]
    },
    {
      title: "Green/ Energy audit and its importance in energy management",
      desc: "Seminar featuring eminent Guest speaker Mr. Ramesh Dharmaraj, Senior Fellow – Industrial Efficiency Group - TERI.",
      date: "14 October, 2020",
      time: "03.00 PM - 04.00 PM"
    },
    {
      title: "Gender Equality in Contemporary India with Special Emphasis on Women Empowerment",
      desc: "Seminar featuring Ms. M.D. Gayathri Devi Dutt, Former Director, Regional Institute of English for South India.",
      date: "12 October, 2020",
      time: "03.00 PM - 04.00 PM"
    },
    {
      title: "NAAC Pathway for Quality Assurance in HEIs (Additional Session)",
      desc: "Seminar featuring Prof. Dr. K. Muthuchelian and Dr. Ganesh A. Hegde, Adviser NAAC.",
      date: "26 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 09449940967", email: "ganesh179@gmail.com" }
    },
    {
      title: "Psychology in contemporary sports, health and fitness perspective",
      desc: "Seminar featuring Prof. Dr. K. Muthuchelian and Dr. Anuradha Solanky, Sports Psychologist SAI.",
      date: "24 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 98108 27721", email: "anuradhasolanky@yahoo.com" }
    },
    {
      title: "DAAD online Information: Higher Studies in Germany",
      desc: "Department of Aerospace Engineering and Electronics and Communication Engineering invites parents and students.",
      date: "14 September, 2020",
      time: "03.15 PM - 04.15 PM"
    },
    {
      title: "Gender Equity Promotion",
      desc: "Featured speakers: Prof. Dr. Sharmila J, Principal Nusing DSU, Dr. Dinesh Selvam S, Dean of Studies.",
      date: "11 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 8778709065", email: "dinuselva@yahoo.com" }
    },
    {
      title: "Student Admission and Enrolment System in DSU",
      desc: "Interactive session mapping the future enrollment flow featuring Deepa RM, Associate Director.",
      date: "03 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9742021671", email: "deeparm@dsu.edu.in" }
    },
    {
      title: "Examination Evaluation Process and Reforms in DSU",
      desc: "Reviewing examination integrity featuring Prof. Anitha Ramalingam, Controller of Examination (COE).",
      date: "02 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9902559552", email: "coe@dsu.edu.in" }
    },
    {
      title: "Financial Management and Resource Mobilization in DSU",
      desc: "Session mapped by Mr. Udayakumar Shetty, Chief Financial Officer (CFO), DSU.",
      date: "02 September, 2020",
      time: "02.00 PM - 03.00 PM",
      contact: { phone: "+91 9980214141", email: "cfo@dsu.edu.in" }
    },
    {
      title: "ERP System in DSU",
      desc: "Showcase of internal portal infrastructure by Mr. Satish V, Chief Information Officer (CIO), DSU.",
      date: "01 September, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9844101674", email: "cio@dayanandasagar.edu" }
    },
    {
      title: "Access to Information sources through Library Networks",
      desc: "Deep digital linkage via Dr. N. Radhakrishnan, Professor LIS.",
      date: "20 August, 2020",
      time: "04.00 PM - 05.00 PM",
      contact: { phone: "+91 9715834805", email: "mkuradha@gmail.com" }
    },
    {
      title: "Ethics to Check Malpractices and Plagiarism in Research",
      desc: "Strict research integrity review featuring Dr. Johnson C. David, Chief Librarian DSU.",
      date: "20 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9443665690", email: "bsureshwin@gmail.com" }
    },
    {
      title: "LIBRARY AUTOMATION SYSTEMS IN DSU",
      desc: "Integrated Library Management overview by Dr. Johnson C. David.",
      date: "20 August, 2020",
      time: "02.00 PM - 03.00 PM",
      contact: { phone: "+91 9590505040", email: "library@dsu.edu.in" }
    },
    {
      title: "Career Counselling and Placement Activities",
      desc: "Job placement networking featuring Mr. M.N Guruvenkatesh, VP Placement Operations DSU.",
      date: "18 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9844165956", email: "gm-cr@dayanandasagar.edu" }
    },
    {
      title: "Industry Academia Innovation Practices",
      desc: "Enterprise linkage discussion featuring Mr. Vinod Shankar, CEO, AIC-DSU.",
      date: "17 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9845757103", email: "svinod3@gmail.com" }
    },
    {
      title: "NAAC Awareness: Students Contributions",
      desc: "Special panel regarding institutional NAAC processing for active enrolled students.",
      date: "12 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9896009959", email: "drrajeevmdu@gmail.com" }
    },
    {
      title: "NAAC Awareness: Role of Parents",
      desc: "Direct panel on how guardians internalize quality assurance in higher education.",
      date: "13 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9448408258", email: "allagirevanna@gmail.com" }
    },
    {
      title: "NAAC Awareness: Alumni Input",
      desc: "Stakeholder integration strategy mapping featuring Prof. Dr. V. Pandiyarajan.",
      date: "14 August, 2020",
      time: "03.00 PM - 04.00 PM",
      contact: { phone: "+91 9486720726", email: "premrajan2018@gmail.com" }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Aesthetic Blur Overlay */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-dsu-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#002366] drop-shadow-sm mb-6 uppercase tracking-wide">
            IQAC Events Repository
          </h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg" />
          <p className="mt-6 text-xl font-medium text-gray-600 max-w-3xl">Internal Quality Assurance Cell seminars, interactions, and deep NAAC orientations. Driving DSU's academic standards forward.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 p-8 flex flex-col group transition-all duration-300"
            >
              <h2 className="text-2xl font-bold font-serif text-[#002366] mb-3 group-hover:text-dsu-gold transition-colors">{event.title}</h2>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 flex-1">{event.desc}</p>
              
              <div className="bg-[#002366]/5 rounded-xl p-5 mb-6 flex flex-col md:flex-row md:items-center gap-4 border border-[#002366]/10">
                <div className="flex items-center gap-2 text-[#002366]">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-sm tracking-wide">{event.date}</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-[#002366]/20"></div>
                <div className="flex items-center gap-2 text-[#002366]">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-sm tracking-wide">{event.time}</span>
                </div>
              </div>

              {event.contact && (
                <div className="flex flex-col gap-2 mb-6 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-dsu-gold" />
                    <span>{event.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-dsu-gold" />
                    <span>{event.contact.email}</span>
                  </div>
                </div>
              )}

              {event.links && (
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100">
                  {event.links.map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs border border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-colors"
                    >
                      <Video className="w-4 h-4" />
                      {link.label} Link
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
