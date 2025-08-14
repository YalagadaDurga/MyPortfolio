import React from 'react';
import smartinterviewscert from '../assets/smartinterviewscert.png';
import JavaFoundationCert from '../assets/JavaFoundationCert.png';
import OracleSQLCert from '../assets/OracleSQLCert.png';

const certificates = [
  {
    title: "Smart Coder",
    image: smartinterviewscert,
    link: "https://drive.google.com/file/d/14znxNR4GYHhmvRdLT3K3H_jLg8-yZeMh/view?usp=sharing"
  },
  {
    title: "Java Foundation Certification",
    image: JavaFoundationCert,
    link: "https://drive.google.com/file/d/1RS7r4w2dU8fREblWksWqA7BSrreEjJqb/view?usp=sharing"
  },
  {
    title: "Database Programming with SQL",
    image: OracleSQLCert,
    link: "https://drive.google.com/file/d/1BQmZg8eVj8TRuek1s60Tkxd_dJiobWyB/view?usp=sharing"
  }
];

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mt-6">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-pink-500/30 hover:scale-[1.03] transition-all"
        >
          <img src={cert.image} alt={cert.title} className="w-full h-48 object-contain rounded-md mb-4 border border-gray-700" />
          <h3 className="text-white text-lg font-semibold mb-4">{cert.title}</h3>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="no-underline inline-block text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:scale-105 transition">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
