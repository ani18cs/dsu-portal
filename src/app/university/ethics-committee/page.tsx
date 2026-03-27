"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export default function EthicsCommitteePage() {
  const [data, setData] = useState([
    { id: 1, name: "Dr. Amit R Bhatt", title: "Vice Chancellor", committee: "Chairperson" },
    { id: 2, name: "Dr. Puttamadappa C", title: "Registrar", committee: "Member" },
    { id: 3, name: "Dr. Pushpa Sarkar", title: "Dean SOHS", committee: "Member" },
    { id: 4, name: "Dr. Udaya Kumar Reddy K R", title: "Dean SOE", committee: "Member" },
    { id: 5, name: "Dr. Subramanya Katte", title: "Director IQAC", committee: "Member" },
    { id: 6, name: "Dr. Sunil More", title: "Dean SBAS", committee: "Member" },
    { id: 7, name: "Dr. N M Raghavendra", title: "Principal Pharmaceutical Science", committee: "Member" },
    { id: 8, name: "Dr. Santham Sweet Rose", title: "Principal - Nursing", committee: "Member" },
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
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-dsu-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#002366] mb-10 border-b-4 border-dsu-gold inline-block pb-3 uppercase tracking-wide drop-shadow-md">
          Ethics Committee
        </h1>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#002366] text-white">
                  <th className="p-5 border-r border-[#003399] font-bold w-16 text-center uppercase tracking-wider text-sm">Sl. No</th>
                  <th className="p-5 border-r border-[#003399] font-bold cursor-pointer hover:bg-white/10 transition-colors group uppercase tracking-wider text-sm" onClick={sortByName}>
                    <div className="flex items-center gap-2">
                      Name
                      <ArrowUpDown className="w-4 h-4 text-dsu-gold group-hover:scale-110 transition-transform" />
                    </div>
                  </th>
                  <th className="p-5 border-r border-[#003399] font-bold uppercase tracking-wider text-sm">Designation</th>
                  <th className="p-5 font-bold w-40 uppercase tracking-wider text-sm">Committee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {data.map((row, index) => (
                  <tr key={row.name} className={`${index % 2 === 0 ? "bg-white" : "bg-blue-50/60"} hover:bg-blue-100/50 transition-colors`}>
                    <td className="p-5 border-r border-blue-100/50 text-center text-[#002366] font-bold text-lg">{row.id}</td>
                    <td className="p-5 border-r border-blue-100/50 font-bold text-[#002366] text-lg">{row.name}</td>
                    <td className="p-5 border-r border-blue-100/50 text-gray-600 font-medium">{row.title}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${row.committee === 'Chairperson' ? 'bg-dsu-gold/20 text-dsu-gold' : 'bg-gray-100 text-gray-600'}`}>
                        {row.committee}
                      </span>
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
