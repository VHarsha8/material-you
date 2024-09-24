import { useState } from 'react';

function CseTabs() {
    const [selectedDept, setSelectedDept] = useState("CSE_AIML_IT");

    // Data for each department
    const departmentData = {
        CSE_AIML_IT: [
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
                    "Dr.B.AshaLatha (9059673773)",
                    "Mrs.P.Nancy Anurag (9110534403)",
                    "Mrs K.Neeharika (9494344774)",
                    "Mr.N.Vijay kumar",
                    "Mrs.N.V.L.Manaswini"
                ],
                studentcoordinators: [
                    "Satish.Y(21HP1A05B8)(IV-II) (9676298793)",
                    "Prashanth.D(22HP1A05B3) (III-II) (9912342267)",
                    "M.Pratap(23HP1A05I6) (II-III) (8639730871)",
                ]
            },
            {
                event: "Spot Event(TUG OF WORDS)",
                topics: [
                    " Team Size Maximim 3 and minimum 1",
                    " Presentation time :2 minutes",
                    " Rule: Keywords should not be repeated"
                ],
                prize: "-",
                facultycoordinators: [
                    "Mrs.Y Karuna Manjusha (9866113094)",
                    "Mrs.B.Alekhya (9502823166)",
                    "Mrs.I.Kamalamma (9704347061)",
                ],
                studentcoordinators: [
                    "P.Pavan Kumar(21HP1A05B4) (9652158578)",
                    "CH.Nandini(21HP1A0515) (8019546445)",
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
                    "Mrs. V. Munni (8099205522)",
                    "Mrs. Sk.Rubeena (9550006982)",
                    "Mrs P. Nikhitha (8019834672)",
                    "Mr. M. Pavan (9980228863)",
                    
                ],
                studentcoordinators: [
                    "Y.V.S.Pranay (22HP1A4461) (III CSD) (9059555806)",
                    "R. Rajesh (22HP1A4452) (III CSD) (7989563453)",
                    "Mythreya (22HP1A4448) (III CSD) (8885672255)",
                   
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
                    "Mr. Y.C. Ashok kumar (9502476366)",
                    "Ms. K. Reena (7842334403)",
                    "Mrs. M. Rojitha Priyadarshini (9494756351)",
                    "Ms. M. Mounika Aaradhana (9490218799)",
                   
                ],
                studentcoordinators: [
                    "D. Viraz (22HP1A4229) (III CSM) (8885982299)",
                    "N. Nikith (22HP1A4261) (III CSM) (7989535986)",
                    "Md. Yazer (22HP1A4263) (III CSM) (9059728338)",
                    "Md. Raiyan (22HP1A4234) (III CSM) (6304154863)",
                    
                ]
            },
            {
                event: "Technical Quiz (IT)",
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
                event: "Paper Presentation",
                topics: [
                    "Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (mech.epi24@aliet.ac.in)",
                    "Maximum of two authors per paper.",
                    "Presentation time should be (8Min) and Queries (2Min) in total 10Min.",
                    "Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                ],
                prize: "3N1",
                facultycoordinators: [
                    "Dr G G Srinivasu (9849490282)",
                    "Mrs B Susmitha (9885697122)"
                ],
                studentcoordinators: [
                    "Mr Greeshmant (6304693684)",
                    
                ]
            },
            {
                event: "Spot Event (Catia, Autocad & Assembly & Disassembly)",
                topics: [
                    "Maximum 1 participant per team.",
                    "Points are noted for drafting, detailing, labelling and colouring",
                    "The final result will be judged on the basis of completeness and optimum time.",
                    "For Assembly & Disassembly of Engine Maximum 2 participant per team"
                ], 
                prize: "CAD LAB or 4E1",
                facultycoordinators: [
                    "Mr M Srinivas Reddy (8801455454)",
                    "Mr K Teja Swarup (9121851618)"
                ],
                studentcoordinators: [
                    "Mr. Md Basha (9347459295)",
                    
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Team size: Maximum of 4 members are allowed.",
                    "Presentation: Should be a working Prototy only.",
                    "Project display: Free-standing and made of durable materials.",
                    "Project safety: Be Careful / Prohibit experiments that could injure other people during demonstration "
                ],
                prize: "MOS LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (8143365255)"
                ]
            },
            {
                event: "QUIZ",
                topics: [
                    "Team size: Maximum of 4 members are allowed."
                ],
                prize: "4E 8",
                facultycoordinators: [
                    "Mr K. Udhay kiran (9493361299)",
                    "Mr.M. Sudhakar (7306569993)"
                ],
                studentcoordinators: [
                    "Mr. Ajay (6300997574)"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Team size: Maximum of 2 members are allowed.",
                    "Max. Posters : Only one poster will be allowed to present per team.",
                    "Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
                    "Language : The official language for the poster will be English.",
                    "Poster Size: maximum 36”x48” (Printed or A2-Hand Made).",
                     "Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.",
                     "Judgement : Decision of the judges/committee will be final."


                ],
                prize: "TOM LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (81433652559)"
                ]
            }
        ],
        EEE: [
            {
                event: "Paper Presentation",
                topics: [
                    "Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (mech.epi24@aliet.ac.in)",
                    "Maximum of two authors per paper.",
                    "Presentation time should be (8Min) and Queries (2Min) in total 10Min.",
                    "Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                ],
                prize: "3N1",
                facultycoordinators: [
                    "Dr G G Srinivasu (9849490282)",
                    "Mrs B Susmitha (9885697122)"
                ],
                studentcoordinators: [
                    "Mr Greeshmant (6304693684)",
                    
                ]
            },
            {
                event: "Spot Event (Catia, Autocad & Assembly & Disassembly)",
                topics: [
                    "Maximum 1 participant per team.",
                    "Points are noted for drafting, detailing, labelling and colouring",
                    "The final result will be judged on the basis of completeness and optimum time.",
                    "For Assembly & Disassembly of Engine Maximum 2 participant per team"
                ], 
                prize: "CAD LAB or 4E1",
                facultycoordinators: [
                    "Mr M Srinivas Reddy (8801455454)",
                    "Mr K Teja Swarup (9121851618)"
                ],
                studentcoordinators: [
                    "Mr. Md Basha (9347459295)",
                    
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Team size: Maximum of 4 members are allowed.",
                    "Presentation: Should be a working Prototy only.",
                    "Project display: Free-standing and made of durable materials.",
                    "Project safety: Be Careful / Prohibit experiments that could injure other people during demonstration "
                ],
                prize: "MOS LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (8143365255)"
                ]
            },
            {
                event: "QUIZ",
                topics: [
                    "Team size: Maximum of 4 members are allowed."
                ],
                prize: "4E 8",
                facultycoordinators: [
                    "Mr K. Udhay kiran (9493361299)",
                    "Mr.M. Sudhakar (7306569993)"
                ],
                studentcoordinators: [
                    "Mr. Ajay (6300997574)"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Team size: Maximum of 2 members are allowed.",
                    "Max. Posters : Only one poster will be allowed to present per team.",
                    "Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
                    "Language : The official language for the poster will be English.",
                    "Poster Size: maximum 36”x48” (Printed or A2-Hand Made).",
                     "Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.",
                     "Judgement : Decision of the judges/committee will be final."


                ],
                prize: "TOM LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (81433652559)"
                ]
            }
        ],
        ECE: [
            {
                event: "Paper Presentation",
                topics: [
                    "Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (mech.epi24@aliet.ac.in)",
                    "Maximum of two authors per paper.",
                    "Presentation time should be (8Min) and Queries (2Min) in total 10Min.",
                    "Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                ],
                prize: "3N1",
                facultycoordinators: [
                    "Dr G G Srinivasu (9849490282)",
                    "Mrs B Susmitha (9885697122)"
                ],
                studentcoordinators: [
                    "Mr Greeshmant (6304693684)",
                    
                ]
            },
            {
                event: "Spot Event (Catia, Autocad & Assembly & Disassembly)",
                topics: [
                    "Maximum 1 participant per team.",
                    "Points are noted for drafting, detailing, labelling and colouring",
                    "The final result will be judged on the basis of completeness and optimum time.",
                    "For Assembly & Disassembly of Engine Maximum 2 participant per team"
                ], 
                prize: "CAD LAB or 4E1",
                facultycoordinators: [
                    "Mr M Srinivas Reddy (8801455454)",
                    "Mr K Teja Swarup (9121851618)"
                ],
                studentcoordinators: [
                    "Mr. Md Basha (9347459295)",
                    
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Team size: Maximum of 4 members are allowed.",
                    "Presentation: Should be a working Prototy only.",
                    "Project display: Free-standing and made of durable materials.",
                    "Project safety: Be Careful / Prohibit experiments that could injure other people during demonstration "
                ],
                prize: "MOS LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (8143365255)"
                ]
            },
            {
                event: "QUIZ",
                topics: [
                    "Team size: Maximum of 4 members are allowed."
                ],
                prize: "4E 8",
                facultycoordinators: [
                    "Mr K. Udhay kiran (9493361299)",
                    "Mr.M. Sudhakar (7306569993)"
                ],
                studentcoordinators: [
                    "Mr. Ajay (6300997574)"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Team size: Maximum of 2 members are allowed.",
                    "Max. Posters : Only one poster will be allowed to present per team.",
                    "Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
                    "Language : The official language for the poster will be English.",
                    "Poster Size: maximum 36”x48” (Printed or A2-Hand Made).",
                     "Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.",
                     "Judgement : Decision of the judges/committee will be final."


                ],
                prize: "TOM LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (81433652559)"
                ]
            }
        ],
        CIVIL: [
            {
                event: "Paper Presentation",
                topics: [
                    "Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (mech.epi24@aliet.ac.in)",
                    "Maximum of two authors per paper.",
                    "Presentation time should be (8Min) and Queries (2Min) in total 10Min.",
                    "Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
                ],
                prize: "3N1",
                facultycoordinators: [
                    "Dr G G Srinivasu (9849490282)",
                    "Mrs B Susmitha (9885697122)"
                ],
                studentcoordinators: [
                    "Mr Greeshmant (6304693684)",
                    
                ]
            },
            {
                event: "Spot Event (Catia, Autocad & Assembly & Disassembly)",
                topics: [
                    "Maximum 1 participant per team.",
                    "Points are noted for drafting, detailing, labelling and colouring",
                    "The final result will be judged on the basis of completeness and optimum time.",
                    "For Assembly & Disassembly of Engine Maximum 2 participant per team"
                ], 
                prize: "CAD LAB or 4E1",
                facultycoordinators: [
                    "Mr M Srinivas Reddy (8801455454)",
                    "Mr K Teja Swarup (9121851618)"
                ],
                studentcoordinators: [
                    "Mr. Md Basha (9347459295)",
                    
                ]
            },
            {
                event: "Project Expo",
                topics: [
                    "Team size: Maximum of 4 members are allowed.",
                    "Presentation: Should be a working Prototy only.",
                    "Project display: Free-standing and made of durable materials.",
                    "Project safety: Be Careful / Prohibit experiments that could injure other people during demonstration "
                ],
                prize: "MOS LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (8143365255)"
                ]
            },
            {
                event: "QUIZ",
                topics: [
                    "Team size: Maximum of 4 members are allowed."
                ],
                prize: "4E 8",
                facultycoordinators: [
                    "Mr K. Udhay kiran (9493361299)",
                    "Mr.M. Sudhakar (7306569993)"
                ],
                studentcoordinators: [
                    "Mr. Ajay (6300997574)"
                ]
            },
            {
                event: "Poster Presentation",
                topics: [
                    "Team size: Maximum of 2 members are allowed.",
                    "Max. Posters : Only one poster will be allowed to present per team.",
                    "Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
                    "Language : The official language for the poster will be English.",
                    "Poster Size: maximum 36”x48” (Printed or A2-Hand Made).",
                     "Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.",
                     "Judgement : Decision of the judges/committee will be final."


                ],
                prize: "TOM LAB",
                facultycoordinators: [
                    "Mr. Ch. Ranga Rao (9030791806)",
                    "Mr. T. Subba Reddy (8919000751)"
                ],
                studentcoordinators: [
                    "Mr. Siroj (81433652559)"
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
        <div  id="event-schedule" className="flex flex-col  my-6 mx-6">
            {/* Department Selection Buttons */}
           <div class="md:text-center mt-14 md:mt-16 mb-4">
                 <h1 class="text-2xl md:text-3xl mb-4 font-semibold text-gray-700">
                             Explore Your Department's Events
                </h1>
                 <h1 class="text-md md:text-xl  text-gray-700">
                 Check the event details and schedules for your department to participate in the activities you’re interested in.
                </h1>
            </div>
            <div className="flex flex-wrap gap-4  py-2 md:px-0 md:items-center md:justify-center md:gap-10">
                {["CSE_AIML_IT", "MECH", "EEE", "CIVIL", "ECE"].map((dept) => (
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
            {/* <div className="flex flex-col w-full px-4 my-5 md:px-10">
                <div className='flex'>
                    <h1 className="px-3 py-2 text-xs md:text-sm text-gray-600 border border-gray-400 rounded-full backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins text-center">
                    {selectedDept === "CSE_AIML_IT" ? "CSE | AIML | IT" : selectedDept}
                </h1>
                </div>
            </div> */}

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