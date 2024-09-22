import { useState } from 'react';

function CseTabs() {
    const [selectedDept, setSelectedDept] = useState("CSE_ECE_IT");

    // Data for each department
    const departmentData = {
        CSE_ECE_IT: [
            {
                event: "Poster Presentation",
                topics: [
                    "AI",
                    "ML",
                    "Blockchain",
                    "Cybersecurity",
                    "Generative AI"
                ],
                prize: "5000/- Prize money",
                winners: "-",
                coordinators: [
                    "O.Bharath Kiran",
                    "Y.Satish Reddy",
                    "S. Sai Kumar"
                ]
            },
        ],
        MECH: [
            {
                event: "CAD Design",
                topics: [
                    "1. Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (mech.epi24@aliet.ac.in)",
                    "2. Maximum of two authors per paper",
                    "3. Presentation time will be 10 minutes followed by 5 minutes of Q&A"
                ],
                prize: "5000/- Prize money",
                winners: "-",
                coordinators: [
                    "P. Harshitha",
                    "R. Sanjay"
                ]
            },
        ],
        EEE: [
            {
                event: "Circuit Design",
                topics: [
                    "1. Participants must present their designs with proper explanations.",
                    "2. Maximum of two authors per paper."
                ],
                prize: "5000/- Prize money",
                winners: "-",
                coordinators: [
                    "S. Satish",
                    "P. Kumar"
                ]
            },
        ],
        CIVIL: [
            {
                event: "Bridge Design",
                topics: [
                    "1. Civil Engineering",
                    "2. Structural Analysis"
                ],
                prize: "6000/- Prize money",
                winners: "-",
                coordinators: [
                    "N. Sai",
                    "P. Lakshmi"
                ]
            },
        ],
    };

    const renderRows = () => {
        const data = departmentData[selectedDept];
        return data.map((item, index) => (
            <tr className="bg-white" key={index}>
                <td className="px-4 py-2 border text-xs md:text-xl font-poppins">{item.event}</td>
                <td className="px-4 py-2 border text-xs md:text-lg font-poppins">
                    <ul className="list-disc list-inside">
                        {item.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                        ))}
                    </ul>
                </td>
                <td className="px-4 py-2 border text-xs md:text-lg font-poppins">{item.prize}</td>
                <td className="px-4 py-2 border text-center text-xs md:text-lg font-poppins">{item.winners}</td>
                <td className="px-4 py-2 border text-xs md:text-lg font-poppins">
                    <ul className="list-disc list-inside">
                        {item.coordinators.map((coordinator, idx) => (
                            <li key={idx}>{coordinator}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        ));
    };

    return (
        <div className="flex flex-col">
            {/* Department Selection Buttons */}
            <div className="flex flex-wrap gap-4 px-4 py-2 md:px-0 md:items-center md:justify-center md:gap-10">
                {["CSE_ECE_IT", "MECH", "EEE", "CIVIL"].map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`px-3 py-1 text-xs md:text-lg text-center text-gray-500 border border-gray-400 rounded-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins ${
                            selectedDept === dept ? "bg-green-500 text-white" : ""
                        }`}
                    >
                        {dept === "CSE_ECE_IT" ? "CSE | ECE | IT" : dept}
                    </button>
                ))}
            </div>

            {/* Department Header */}
            <div className="flex flex-col w-full px-4 my-5 md:px-10">
                <div className='flex'>
                    <h1 className="px-3 py-2 text-xs md:text-sm text-gray-600 border border-gray-400 rounded-full backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins text-center">
                    {selectedDept === "CSE_ECE_IT" ? "CSE | ECE | IT" : selectedDept}
                </h1>
                </div>
            </div>

            {/* Table */}
            <div className="w-full px-4 my-5 overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="bg-darkgreybackground text-white text-xs md:text-xl">
                            <th className="border border-gray-300 px-2 min-w-[200px] py-2">Event</th>
                            <th className="border border-gray-300 px-2 py-2">Topics & Rules</th>
                            <th className="border border-gray-300 px-2 py-2">Prizes</th>
                            <th className="border border-gray-300 px-2 py-2">Winners</th>
                            <th className="border border-gray-300 px-2 py-2">Coordinators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CseTabs;
