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
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Hackathon",
                topics: [
                    "24-hour coding competition",
                    "Team size: 3-5",
                    "Topics will be provided at the event"
                ],
                prize: "7000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Code Debugging",
                topics: [
                    "Participants must debug a set of given programs.",
                    "Time limit: 30 minutes"
                ],
                prize: "3000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Quiz",
                topics: [
                    "Technical quiz on CSE, ECE, IT-related topics",
                    "Maximum of 2 participants per team"
                ],
                prize: "2000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            }
        ],
        MECH: [
            {
                event: "CAD Design",
                topics: [
                    "Submit soft copy with complete student details and PPT.",
                    "Max two authors per paper.",
                    "Presentation: 8 minutes + 2 minutes for queries."
                ],
                prize: "3N1",
                facultycoordinators: [
                    "Mrs B Susmitha",
                    "Dr G G Srinivasu"
                ],
                studentcoordinators: [
                    "Mr Greeshmant",
                    
                ]
            },
            {
                event: "Spot Event (Catia, Autocad & Assembly & Disassembly)",
                topics: [
                    "One participant per team for drafting events.",
                    "For Assembly & Disassembly of Engine, max 2 participants per team."
                ],
                prize: "CAD LAB or 4E1",
                facultycoordinators: [
                    "Mr M Srinivas Reddy",
                    "Mr K Teja Swarup"
                ],
                studentcoordinators: [
                    "Mr. Md Basha",
                    
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Team size: Max 4 members.",
                    "Prototype presentation.",
                    "Projects must be safe for public display."
                ],
                prize: "MOS LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao",
                    "Mr. T. Subba Reddy"
                ],
                studentcoordinators: [
                    "Mr. Siroj"
                ]
            },
            {
                event: "QUIZ",
                topics: [
                    "Team size: Max 4 members."
                ],
                prize: "4E 8",
                facultycoordinators: [
                    "Mr K. Udhay kiran",
                    "Mr.M. Sudhakar "
                ],
                studentcoordinators: [
                    "Mr. Ajay"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Team size: Max 2 members per team.",
                    "Official language is English.",
                    "Poster size: max 36”x48” (Printed or A2-Hand Made)."
                ],
                prize: "TOM LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao",
                    "Mr. T. Subba Reddy"
                ],
                studentcoordinators: [
                    "Mr. Siroj"
                ]
            }
        ],
        EEE: [
            {
                event: "Poster Presentation",
                topics: [
                    "Participants must present their designs with explanations.",
                    "Max two authors per paper."
                ],
                prize: "5000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Robo Race",
                topics: [
                    "Control robots to compete in a race.",
                    "Track provided on the event day."
                ],
                prize: "4000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Display electrical projects.",
                    "Judging based on innovation and design."
                ],
                prize: "6000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Quiz",
                topics: [
                    "Technical quiz on electrical circuits and systems.",
                    "Max 2 participants per team."
                ],
                prize: "2000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            }
        ],
        CIVIL: [
            {
                event: "Bridge Design",
                topics: [
                    "Civil Engineering",
                    "Structural Analysis"
                ],
                prize: "6000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                stydentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Surveying Challenge",
                topics: [
                    "Hands-on experience with land surveying tools.",
                    "Survey a designated area."
                ],
                prize: "5000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Concrete Testing",
                topics: [
                    "Conduct strength tests on concrete samples.",
                    "Safety equipment required."
                ],
                prize: "4000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Innovative construction techniques.",
                    "Sustainable materials in civil engineering."
                ],
                prize: "3000/- Prize money",
                facultycoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ],
                studentcoordinators: [
                    "G. Shiva",
                    "H. Naveen"
                ]
            }
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
                <td className="px-4 py-2 border text-xs md:text-lg font-poppins">
                    <ul className="list-disc list-inside">
                        {item.facultycoordinators.map((faculty, idx) => (
                            <li key={idx}>{faculty}</li>
                        ))}
                    </ul>
                </td>
                <td className="px-4 py-2 border text-xs md:text-lg font-poppins">
                    <ul className="list-disc list-inside">
                        {item.studentcoordinators.map((student, idx) => ( // Fixed key name here
                            <li key={idx}>{student}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        ));
    };

    return (
        <div className="flex flex-col my-6 mx-6">
            {/* Department Selection Buttons */}
            <div className="flex flex-wrap gap-4 px-4 py-2 md:px-0 md:items-center md:justify-center md:gap-10">
                {["CSE_ECE_IT", "MECH", "EEE", "CIVIL"].map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`${
                            selectedDept === dept ? "bg-blue-500" : "bg-gray-300"
                        } text-white py-2 px-4 rounded-lg`}
                    >
                        {dept}
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

            {/* Event Table */}
            <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full border-separate">
                    <thead>
                        <tr className="bg-darkgreybackground">
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Event</th>
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Topics</th>
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Prize</th>
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Faculty-Coordinators</th>
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Student Volunteers</th>
                        </tr>
                    </thead>
                    <tbody>{renderRows()}</tbody>
                </table>
            </div>
        </div>
    );
}

export default CseTabs;