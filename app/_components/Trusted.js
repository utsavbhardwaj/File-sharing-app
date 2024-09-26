import React from 'react';

const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png' },
  { name: 'InnoSoft', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgLhg5vRr3A4MXdb9BZOg92OBBHUxVdcIQg&s?height=40&width=120' },
  { name: 'Citrix', logo: 'https://w7.pngwing.com/pngs/988/754/png-transparent-sharefile-logo-file-sharing-citrix-systems-share-folder-text-logo-cloud-computing.png?height=40&width=120' },
  { name: 'Kodak', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Eastman_Kodak_Company_logo_%282016%29.svg/1200px-Eastman_Kodak_Company_logo_%282016%29.svg.png?height=40&width=120' },
  { name: 'SalesForce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png?height=40&width=120' },
];

function Trusted() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Trusted by the biggest companies
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Join over 1,000 companies trusting our file sharing software for seamless collaboration
          and boosted productivity. Experience it today!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trusted;
