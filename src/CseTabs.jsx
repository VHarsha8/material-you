import { useState } from 'react';

function CseTabs() {
    const [selectedDept, setSelectedDept] = useState("CSE_ECE_IT");

    // Data for each department
    const departmentData = {
        CSE_ECE_IT: [
            {
                event: "Paper Presentation",
                topics: [
                    "Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (cse.epi24@aliet.ac.in)",
                    "Maximum of two authors per paper.",
                    "Presentation time should be (8Min) and Queries (2Min) in total 10Min.",
                    "Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                    
                ],
                prize: "-",
                facultycoordinators: [
                    "Dr.B.AshaLatha ",
                    "Mrs.P.Nancy Anurag",
                    "Mrs K.Neeharika",
                    "Mr.N.Vijay kumar",
                    "Mrs.N.V.L.Manaswini"
                ],
                studentcoordinators: [
                    "Satish.Y(21HP1A05B8)(IV-II)",
                    "Prashanth.D(22HP1A05B3) (III-II)",
                    "M.Pratap(23HP1A05I6) (II-III)",
                ]
            },
            {
                event: "Spot Event(TUG OF WORDS)",
                topics: [
                    "1. Team Size Maximim 3 and minimum 1",
                    "2. Presentation time :2 minutes",
                    "3. Rule: Keywords should not be repeated"
                ],
                prize: "-",
                facultycoordinators: [
                    "Mrs.Y Karuna Manjusha",
                    "Mrs.B.Alekhya",
                    "Mrs.I.Kamalamma",
                ],
                studentcoordinators: [
                    "P.Pavan Kumar(21HP1A05B4)",
                    "CH.Nandini(21HP1A0515)",
                    "R.Tejaswini naga likitha(21HP1A0514)",
                    "Inith Reddy(22HP1A05A3)",
                ]
            },
            {
                event: "Project Expo(CSD)",
                topics: [
                    " Team size: Maximum of 4 members are allowed.",
                    " Student ID: Student ID Card issued by College is compulsory.",
                    " Presentation: Should be in Power Point Presentation (ppt) only.",
                    " Project display: Free-standing and made of durable materials.",
                    " Project safety: Prohibit experiments that could injure people or animals, or that require adult  consent.",
                    " Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                    " Judgement : Judges decision will be final.",
                ],
                prize: "-",
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
                event: "Poster Presentation(CSM)",
                topics: [
                    " Team size: Maximum of 4 members are allowed.",
                    " Max Posters : Only one poster will be allowed to present per team.",
                    " Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
                    " Language : The official language for the poster will be English.",
                    " Poster Size: maximum 36”x48” (Printed or A2-Hand Made).",
                    " Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.",
                    " Judgement : Decision of the judges/committee will be final.",
                ],
                prize: "-",
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
                event: "Technical Quiz",
                topics: [
                    "Qualifying for Round-1 Top-10 Teams Multiple Choice questions.",
                    "Qualifying for Round-2 Top-5 Teams Multiple Choice questions.",
                    "Qualifying for Round-3 Buzzer Round Top-3 Teams",
                    "Team size: Maximum of 4 members are allowed.",
                ],
                prize: "-",
                facultycoordinators: [
                    "M. Suneela",
                   
                ],
                studentcoordinators: [
                    "K. Sai Vineela (21HP1A1209)",
                    "G. Bhavitha (21HP1A1202)",
                    "K. Nag Lakshmi (21HP1A1214)",
                    "G. Spoorthi (21HP1A1223)",
                    "Naga Lokesh (21HP1A1239)",
                    "J. Mohan Sai (21HP1A1244)",
                    
                ]
            }
        ],
        MECH: [
            {
                event: "CAD Design",
                topics: [
                    "Qualifying for Round-1 Top-10 Teams Multiple Choice questions.",
                    "Qualifying for Round-2 Top-5 Teams Multiple Choice questions.",
                    "Qualifying for Round-3 Buzzer Round Top-3 Teams",
                    "Team size: Maximum of 4 members are allowed.",
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
                prize: "-",
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
                prize: "-",
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
                prize: "-",
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
                prize: "-",
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
                prize: "-",
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
                event: "Surveying Challenge",
                topics: [
                    "Hands-on experience with land surveying tools.",
                    "Survey a designated area."
                ],
                prize: "-",
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
                prize: "-",
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
                prize: "-",
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
                <td className="px-4 py-2 border text-xs md:text-lg text-center font-poppins">{item.prize}</td>
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
                            selectedDept === dept ? "bg-green-600" : "bg-gray-300"
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
                        <tr className="bg-darkgreybackground ">
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Event</th>
                            <th className="px-4 py-2 border text-xs md:text-lg text-white font-poppins">Topics</th>
                            <th className="px-4 py-2 border text-xs  md:text-lg text-white font-poppins">Venue</th>
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