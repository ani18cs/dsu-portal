"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export default function CarbonNeutralPage() {
  const [data, setData] = useState([
    { id: 1, name: "Prof. Abhijith", role: "Chairperson", dept: "Asst. Professor - Mechanical Dept DSU", email: "Abhijith-cvl@dsu.edu.in", phone: "+91 9740384379" },
    { id: 2, name: "Prof. Archana P Lokkur", role: "Member", dept: "Asst Professor - SCMS DSU", email: "Archanapl-socm@dsu.edu.in", phone: "+91 9900967010" },
    { id: 3, name: "Dr. Prashant Tiwari", role: "Member", dept: "Asst Professor - Dept of Pharmacology DSU", email: "Prashanttiwari-sps@dsu.edu.in", phone: "+91 7828865022" },
    { id: 4, name: "Mr. Vimal John Samuel", role: "Member", dept: "Asst Professor - Dept of Pharmacology DSU", email: "Vimal-sps@dsu.edu.in", phone: "+91 8892022234" },
    { id: 5, name: "Dr. Dinesh Gowda", role: "Member", dept: "Asst Professor - Genetics Dept of SBAS DSU", email: "Dineshgowda1-sbas@dsu.edu.in", phone: "+91 9844490637" },
    { id: 6, name: "Ms. Sunaya Ghosh", role: "Member", dept: "Lecturer - CONS DSU", email: "Ghoshsunaya1994@gmail.com", phone: "+91 7676545186" },
    { id: 7, name: "Prof. Shubha Javagal", role: "Member", dept: "Asst Prof - Mechanical Dept DSU", email: "Shubha-cvl@dsu.edu.in", phone: "+91 8105176460" },
  ]);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortByName = () => {
    const sorted = [...data].sort((a, b) => {
      return sortOrder === "asc" 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#002366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#002366] mb-8 uppercase tracking-wide drop-shadow-md border-b-4 border-dsu-gold inline-block pb-3">
          Carbon Neutral Campus Committee
        </h1>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                {/* STRICT REQUIREMENT: Royal Blue Header */}
                <tr className="bg-[#002366] text-white">
                  <th className="p-5 border-r border-[#003399] font-bold w-16 text-center uppercase tracking-wider text-sm">Sl. No</th>
                  <th className="p-5 border-r border-[#003399] font-bold cursor-pointer hover:bg-white/10 transition-colors group uppercase tracking-wider text-sm" onClick={sortByName}>
                    <div className="flex items-center gap-2">
                      Name
                      <ArrowUpDown className="w-4 h-4 text-dsu-gold group-hover:scale-110 transition-transform" />
                    </div>
                  </th>
                  <th className="p-5 border-r border-[#003399] font-bold w-40 uppercase tracking-wider text-sm">Role</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm">Contact No. / Email ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {/* STRICT REQUIREMENT: Alternating Light Blue / White Rows */}
                {data.map((row, index) => (
                  <tr key={row.name} className={`${index % 2 === 0 ? "bg-white" : "bg-blue-50/60"} hover:bg-blue-100/50 transition-colors`}>
                    <td className="p-5 border-r border-blue-100/50 text-center text-[#002366] font-bold">{row.id}</td>
                    <td className="p-5 border-r border-blue-100/50">
                      <p className="font-bold text-[#002366] text-lg">{row.name}</p>
                      <p className="text-sm text-gray-500 mt-1 font-medium">{row.dept}</p>
                    </td>
                    <td className="p-5 border-r border-blue-100/50">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${row.role === 'Chairperson' ? 'bg-dsu-gold/20 text-dsu-gold' : 'bg-gray-100 text-gray-600'}`}>
                        {row.role}
                      </span>
                    </td>
                    <td className="p-5">
                      <a href={`mailto:${row.email}`} className="text-[#002366] font-bold hover:text-dsu-gold transition-colors block">{row.email}</a>
                      <p className="text-gray-500 mt-1 font-medium">{row.phone}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
