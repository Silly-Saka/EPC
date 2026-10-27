registerExam({
  id: 'cssa2025',
  title: 'CSSA 2025 Enterprise Computing Trial HSC Examination',
  source: 'CSSA',
  year: 2025,
  kind: 'trial',
  readingMinutes: 10,
  workingMinutes: 140,
  totalMarks: 80,
  coverNotes: `<p><strong>General Instructions</strong></p>
<ul>
<li>Reading time – 10 minutes</li>
<li>Working time – 2 hours and 20 minutes</li>
<li>Write using black pen</li>
<li>Draw diagrams using pencil</li>
<li>Answer Questions 1–25 in the spaces provided</li>
</ul>
<p><strong>Total marks: 80</strong></p>
<ul>
<li>Attempt Questions 1–25</li>
<li>Allow 2 hours and 20 minutes to attempt the questions</li>
<li>If you include diagrams in your answer, ensure that they are clearly labelled.</li>
</ul>`,
  groups: [
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>When utilising the iterative approach in Enterprise Computing, what typically happens after each iteration?</p>`,
          options: [
            `The entire project is restarted from scratch.`,
            `The project is handed over to the client for final approval.`,
            `The development team disbands and reforms with new members.`,
            `Feedback is gathered and used to improve the next iteration of the project.`
          ],
          answer: 4,
          guide: `<p><em>Outcomes assessed: EC-12-08 · Targeted performance bands: 2–3</em></p>
<p>Answer: D. Feedback is gathered and used to improve the next iteration of the project.</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is the key difference between quantitative and qualitative data?</p>`,
          options: [
            `Quantitative data is used to describe a phenomenon, while qualitative data is used for performing statistical analysis.`,
            `Quantitative data refers to data collected from surveys, while qualitative data refers to data collected from experiments.`,
            `Quantitative data is measured and expressed numerically, while qualitative data is descriptive and deals with characteristics.`,
            `Quantitative data involves the collection of thoughts and opinions, while qualitative data involves the counting of the number of occurrences.`
          ],
          answer: 3,
          guide: `<p><em>Outcomes assessed: EC-12-02 · Targeted performance bands: 2–3</em></p>
<p>Answer: C. Quantitative data is measured and expressed numerically, while qualitative data is descriptive and deals with characteristics.</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following best describes the purpose of data visualisation?</p>
<p>(Multiple items may be selected.)</p>`,
          options: [
            `Telling data-driven stories.`,
            `Simplifying complex information.`,
            `Enhancing data storage capabilities.`,
            `Highlighting significant trends and insights.`
          ],
          answer: [1, 2, 4],
          guide: `<p><em>Outcomes assessed: EC-12-04 · Targeted performance bands: 2–3</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies ALL the correct answers</td><td>1</td></tr>
</tbody></table>
<p>Answer: A, B and D</p>
<ul>
<li>A. Telling data-driven stories.</li>
<li>B. Simplifying complex information.</li>
<li>D. Highlighting significant trends and insights.</li>
</ul>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>In a chemical plant, an expert system monitors temperature, pressure, and chemical flow. It adjusts settings in real time to keep the process running efficiently and prevent failures.</p>
<p>What is the main purpose of the expert system in this scenario?</p>`,
          options: [
            `Providing investment advice based on market trends.`,
            `Controlling and optimising machinery in an industrial process.`,
            `Diagnosing medical conditions based on symptoms and test results.`,
            `Scheduling maintenance and managing resources in manufacturing.`
          ],
          answer: 2,
          guide: `<p><em>Outcomes assessed: EC-12-01 · Targeted performance bands: 2–3</em></p>
<p>Answer: B. Controlling and optimising machinery in an industrial process.</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes how blockchain technology is used to manage and verify data?</p>`,
          options: [
            `Blockchain stores data in a centralised location, allowing authorised users to access and modify it easily.`,
            `Blockchain requires a third-party intermediary to manage and verify transactions and data storage between users.`,
            `Blockchain verifies data by using cryptographic hashes, with each block linked to the previous, to create an immutable ledger.`,
            `Blockchain uses a single database system where data is encrypted and stored in a cloud server, making it easily accessible to all users.`
          ],
          answer: 3,
          guide: `<p><em>Outcomes assessed: EC-12-01 · Targeted performance bands: 3–4</em></p>
<p>Answer: C. Blockchain verifies data by using cryptographic hashes, with each block linked to the previous, to create an immutable ledger.</p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following features of software is the most important in ensuring the privacy and security of data?</p>`,
          options: [
            `Encryption`,
            `Auto-update`,
            `Multilingual support`,
            `User interface design`
          ],
          answer: 1,
          guide: `<p><em>Outcomes assessed: EC-12-03 · Targeted performance bands: 3–4</em></p>
<p>Answer: A. Encryption</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of an unstructured data set?</p>`,
          options: [
            `A CSV file with employee attendance records.`,
            `A folder of image files from a company’s marketing campaign.`,
            `A database table listing student IDs, grades, and enrolment dates.`,
            `A spreadsheet containing customer names, phone numbers, and purchase amounts.`
          ],
          answer: 2,
          guide: `<p><em>Outcomes assessed: EC-12-04 · Targeted performance bands: 3–4</em></p>
<p>Answer: B. A folder of image files from a company’s marketing campaign.</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following innovative technologies have impacted the field of data analytics?</p>
<p>(Multiple items may be selected.)</p>`,
          options: [
            `Quantum computing`,
            `Optic fibre technology`,
            `Infrastructure as a service`,
            `Internet of things communication protocol`
          ],
          answer: [1, 3, 4],
          guide: `<p><em>Outcomes assessed: EC-12-06 · Targeted performance bands: 4–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies ALL correct answers</td><td>1</td></tr>
</tbody></table>
<p>Answer: A, C and D</p>
<ul>
<li>A. Quantum computing</li>
<li>C. Infrastructure as a service</li>
<li>D. Internet of things communication protocols</li>
</ul>` }
      ]
    },
    {
      number: '9', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>An expert system is designed to diagnose a medical condition based on symptoms. The system uses the following certainty factors (CF) for two symptoms:</p>
<ol>
<li>Symptom One: Fever (CF = 0.9)</li>
<li>Symptom Two: Cough (CF = 0.6)</li>
</ol>
<p>The expert system then checks a final symptom:</p>
<ol start="3">
<li>Symptom Three: Body ache (CF = 0.7)</li>
</ol>
<p>Which of the following is the most appropriate next step for the expert system to construct its decision tree, based on certainty factors?</p>`,
          options: [
            `Recommend rest (CF = 0.4) for the patient`,
            `Diagnose cold (CF = 0.3) based on symptoms`,
            `Check if the patient has a sore throat (CF = 0.5)`,
            `Diagnose flu (CF = 0.8) based on fever, cough, and body ache`
          ],
          answer: 4,
          guide: `<p><em>Outcomes assessed: EC-12-09 · Targeted performance bands: 4–5</em></p>
<p>Answer: D. Diagnose flu (CF = 0.8) based on fever, cough, and body ache</p>` }
      ]
    },
    {
      number: '10', marks: 2, layout: 0,
      items: [
        { type: 'html', marks: 2,
          question: `<p>Match the following tools with the correct characteristic.</p>
<p>Tools: Decision tree, Gantt chart, Implementation plan, system Flowchart</p>
<table class="hoa-table-normal"><thead><tr><th>Tool</th><th>Characteristic</th></tr></thead><tbody>
<tr><td>(a) <select class="hoa-select" name="cssa25q10-a"><option value=""></option><option value="Decision tree">Decision tree</option><option value="Gantt chart">Gantt chart</option><option value="Implementation plan">Implementation plan</option><option value="System flowchart">System flowchart</option></select></td><td>Displays dependencies and resource allocations</td></tr>
<tr><td>(b) <select class="hoa-select" name="cssa25q10-b"><option value=""></option><option value="Decision tree">Decision tree</option><option value="Gantt chart">Gantt chart</option><option value="Implementation plan">Implementation plan</option><option value="System flowchart">System flowchart</option></select></td><td>Visual representations of how data is processed within a system</td></tr>
<tr><td>(c) <select class="hoa-select" name="cssa25q10-c"><option value=""></option><option value="Decision tree">Decision tree</option><option value="Gantt chart">Gantt chart</option><option value="Implementation plan">Implementation plan</option><option value="System flowchart">System flowchart</option></select></td><td>Organises data into a series of choices and their possible outcomes</td></tr>
<tr><td>(d) <select class="hoa-select" name="cssa25q10-d"><option value=""></option><option value="Decision tree">Decision tree</option><option value="Gantt chart">Gantt chart</option><option value="Implementation plan">Implementation plan</option><option value="System flowchart">System flowchart</option></select></td><td>Describes how staff will be trained to use the new enterprise system</td></tr>
</tbody></table>`,
          answer: { 'cssa25q10-a': 'Gantt chart', 'cssa25q10-b': 'System flowchart', 'cssa25q10-c': 'Decision tree', 'cssa25q10-d': 'Implementation plan' },
          guide: `<p><em>Outcomes assessed: EC-12-09 · Targeted performance bands: 4–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly matches ALL tools with their characteristics</td><td>2</td></tr>
<tr><td>Correctly matches TWO tools with their characteristics</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Tool</th><th>Characteristic</th></tr></thead><tbody>
<tr><td>(a) Gantt chart</td><td>Displays dependencies and resource allocations</td></tr>
<tr><td>(b) System flowchart</td><td>Visual representations of how data is processed within a system</td></tr>
<tr><td>(c) Decision tree</td><td>Organises data into a series of choices and their possible outcomes</td></tr>
<tr><td>(d) Implementation plan</td><td>Describes how staff will be trained to use the new enterprise system</td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '11', marks: 2, layout: 3,
      stimulus: `<p>The school has introduced an online ticketing app to make it easier for students to book and pay for tickets to school drama and band performances. Students use the app to browse available performances and book tickets. After selecting the tickets, they make payments directly through the app to the bank. Once the payment is processed, they receive a confirmation email with their ticket(s).</p>`,
      items: [
        { type: 'drawing', marks: 2,
          question: `<p>Complete the following Level 0 data flow diagram to represent this system.</p>
<p><img src="assets/cssa2025/q11-dfd.png" alt="Level 0 data flow diagram template: two external entities (left and right) joined to a central process by two pairs of data flow arrows, with blank dashed label boxes"></p>`,
          guide: `<p><em>Outcomes assessed: EC-12-09 · Targeted performance bands: 5–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly completes the Level 0 data flow diagram</td><td>2</td></tr>
<tr><td>Provides some correct details</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<p><img src="assets/cssa2025/q11-sample-answer.png" alt="Completed Level 0 DFD: Student and Bank external entities either side of the School Ticketing App process"></p>
<ul>
<li>External entity (left): <strong>Student</strong>; process: <strong>School Ticketing App</strong>; external entity (right): <strong>Bank</strong></li>
<li>Student → App: Student and event details</li>
<li>App → Student: Event confirmation</li>
<li>App → Bank: Student payment details</li>
<li>Bank → App: Payment confirmation</li>
</ul>` }
      ]
    },
    {
      number: '12', marks: 3, layout: 1,
      stimulus: `<p>A teacher has set up a spreadsheet to calculate the average mark for each student based on their results from the three tasks completed during the course. This average mark is then used to calculate a course grade using the Grade Table. It then checks the grade and if the student has received an A for the course, they will be receiving an award at the end-of-course presentations night.</p>
<p>Formulae are needed for:</p>
<ul class="hoa-ul" style="list-style-type:'(a)' !important; margin-left:0.5em;margin-bottom:1em"><li class="hoa-li" style="margin-bottom:0.66em"><span class="hoa-li-span"><strong>(i)</strong> Cell E3 to calculate the average of the three tasks in cells B3, C3 and D3. This formula will be used to fill down to cells E4 to E7. (1 mark)</span></li></ul>
<ul class="hoa-ul" style="list-style-type:'' !important; margin-left:0.5em;margin-bottom:1em"><li class="hoa-li" style="margin-bottom:0.66em"><span class="hoa-li-span"><strong>(ii)</strong> Cell F3 to display the grade achieved, based on the lookup table that is located in cells A12:B16. This formula will be used to fill down to cells F4 to F7. (1 mark)</span></li></ul>
<ul class="hoa-ul" style="list-style-type:'' !important; margin-left:0.5em;margin-bottom:1em"><li class="hoa-li" style="margin-bottom:0.66em"><span class="hoa-li-span"><strong>(iii)</strong> Cell G3 to determine whether the student will be receiving an award if they have achieved an A grade. It will display “Yes” for receiving an award, or “No” for not receiving an award. This formula will be used to fill down to cells G4 to G7. (1 mark)</span></li></ul>`,
      items: [
        { type: 'spreadsheet', marks: 3,
          question: `<p>Enter your formulas for (a) (i), (ii) and (iii) in cells E3, F3 and G3.</p>`,
          seed: {
            cells: {
              A1: 'Markbook',
              A2: 'Student Name', B2: 'Task 1', C2: 'Task 2', D2: 'Task 3', E2: 'Average', F2: 'Grade', G2: 'Award',
              A3: 'Jim Goss', B3: 81, C3: 87, D3: 90,
              A4: 'Michelle Lenna', B4: 45, C4: 23, D4: 50, E4: 39, F4: 'D', G4: 'No',
              A5: 'Austin Barr', B5: 34, C5: 54, D5: 54, E5: 47, F5: 'C', G5: 'No',
              A6: 'Maisy Foxglove', B6: 89, C6: 95, D6: 100, E6: 95, F6: 'A', G6: 'Yes',
              A7: 'Rocky La Nanii', B7: 100, C7: 76, D7: 43, E7: 73, F7: 'B', G7: 'No',
              A10: 'Grade Table',
              A11: 'Average', B11: 'Grade',
              A12: 0, B12: 'E', A13: 20, B13: 'D', A14: 40, B14: 'C', A15: 60, B15: 'B', A16: 80, B16: 'A'
            },
            bold: ['A1:G2', 'A10:B11'], center: ['A1:G1', 'B2:G7', 'A10:B16'], merge: ['A1:G1', 'A10:B10'],
            colWidths: { A: 130, B: 80, C: 80, D: 80, E: 80, F: 80, G: 80 }
          },
          guide: `<p><em>Outcomes assessed: EC-12-05 · Targeted performance bands: 5–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly identifies ALL formulas</td><td>3</td></tr>
<tr><td>Correctly identifies TWO formulas</td><td>2</td></tr>
<tr><td>Correctly identifies ONE formula</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>(i) Cell E3: <code>=AVERAGE(B3:D3)</code></p>
<p>(ii) Cell F3: <code>=VLOOKUP(E3,&#36;A&#36;12:&#36;B&#36;16,2)</code></p>
<p>(iii) Cell G3: <code>=IF(F3="A","Yes","No")</code></p>
<p><em>Note: the CSSA paper says “the three tasks in cells B3, B4 and B5”, and its marking guidelines give <code>=AVERAGE(B4:E4)</code>. Both are misprints: a student’s three tasks are across the row (B3, C3 and D3), and B4:E4 is the wrong row and would include the Average column. The question above uses the corrected cells.</em></p>` }
      ]
    },
    {
      number: '13', marks: 4, layout: 3,
      stimulus: `<p>A medical centre has decided to implement a new appointment management system to replace their paper-based appointment book.</p>`,
      items: [
        { type: 'html', part: 'a', marks: 2,
          question: `<p>Add the appropriate fields into each of the tables to show a correctly normalised schema. Use (P) to indicate primary key and (F) to indicate foreign key. The fields for Patient table have been included for you.</p>
<p><img src="assets/cssa2025/q13a-schema.png" alt="Schema diagram: Doctor table with 3 blank fields linked to Appointment table with 5 blank fields, which is linked to Patient table (PatientID (P), PatientFirstName, PatientLastName, PatientDOB)"></p>
<table class="hoa-table-normal"><thead><tr><th>Doctor</th></tr></thead><tbody>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-d1"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-d2"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-d3"></td></tr>
</tbody></table>
<table class="hoa-table-normal"><thead><tr><th>Appointment</th></tr></thead><tbody>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-a1"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-a2"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-a3"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-a4"></td></tr>
<tr><td><input class="hoa-input" type="text" name="cssa25q13a-a5"></td></tr>
</tbody></table>
<table class="hoa-table-normal"><thead><tr><th>Patient</th></tr></thead><tbody>
<tr><td>PatientID (P)</td></tr>
<tr><td>PatientFirstName</td></tr>
<tr><td>PatientLastName</td></tr>
<tr><td>PatientDOB</td></tr>
</tbody></table>`,
          guide: `<p><em>Outcomes assessed: EC-12-08 · Targeted performance bands: 5–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td><ul><li>Adds appropriate fields into each of the tables to produce a correctly normalised schema</li><li>Indicates the primary and foreign keys</li></ul></td><td>2</td></tr>
<tr><td><ul><li>Provides most of the fields to produce a normalised schema</li></ul>OR<ul><li>Provides some relevant fields to produce a normalised schema and indicates AT LEAST ONE primary OR foreign key</li></ul></td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Doctor</th><th>Appointment</th><th>Patient</th></tr></thead><tbody>
<tr><td>DoctorID (P)</td><td>AppointmentID (P)</td><td>PatientID (P)</td></tr>
<tr><td>DoctorFirstName</td><td>DoctorID (F)</td><td>PatientFirstName</td></tr>
<tr><td>DoctorLastName</td><td>PatientID (F)</td><td>PatientLastName</td></tr>
<tr><td></td><td>AppointmentDate</td><td>PatientDOB</td></tr>
<tr><td></td><td>AppointmentTime</td><td></td></tr>
</tbody></table>
<p>Doctor is linked to Appointment through DoctorID; Patient is linked to Appointment through PatientID.</p>` },
        { type: 'sql', part: 'b', marks: 2,
          sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT PatientFirstName, PatientLastName, PatientDOB FROM Patient WHERE PatientDOB >= '2007-01-01' ORDER BY PatientDOB ASC`] },
          question: `<p>The following shows an extract of the information stored in the system’s Patient table:</p>
<table class="hoa-table-normal"><thead><tr><th>PatientID</th><th>PatientFirstName</th><th>PatientLastName</th><th>PatientDOB</th></tr></thead><tbody>
<tr><td>ALM001</td><td>Ally</td><td>MacDonald</td><td>01/01/2007</td></tr>
<tr><td>COB001</td><td>Colin</td><td>Bird</td><td>28/02/2019</td></tr>
<tr><td>OZB001</td><td>Oz</td><td>Barram</td><td>08/12/1979</td></tr>
<tr><td>MIL001</td><td>Michelle</td><td>Lena</td><td>05/05/1985</td></tr>
<tr><td>HFO001</td><td>Hayley</td><td>Foxglove</td><td>15/09/2009</td></tr>
<tr><td>JMO001</td><td>Jim</td><td>Moss</td><td>31/08/2006</td></tr>
</tbody></table>
<p>Construct an SQL statement to identify the patients who are born on or after 01/01/2007. List the first and last names of the patients as well as their date of birth in chronological ascending order of their date of birth.</p>`,
          setup: `CREATE TABLE Patient (PatientID TEXT PRIMARY KEY, PatientFirstName TEXT, PatientLastName TEXT, PatientDOB TEXT);
INSERT INTO Patient VALUES ('ALM001','Ally','MacDonald','2007-01-01');
INSERT INTO Patient VALUES ('COB001','Colin','Bird','2019-02-28');
INSERT INTO Patient VALUES ('OZB001','Oz','Barram','1979-12-08');
INSERT INTO Patient VALUES ('MIL001','Michelle','Lena','1985-05-05');
INSERT INTO Patient VALUES ('HFO001','Hayley','Foxglove','2009-09-15');
INSERT INTO Patient VALUES ('JMO001','Jim','Moss','2006-08-31');`,
          guide: `<p><em>Outcomes assessed: EC-12-05 · Targeted performance bands: 4–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a correct SQL statement</td><td>2</td></tr>
<tr><td>Shows some understanding of SQL</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<pre class="hoa-code">SELECT PatientFirstName, PatientLastName, PatientDOB
FROM Patient
WHERE PatientDOB &gt;= 01/01/2007
ORDER BY PatientDOB asc</pre>
<p><em>Note: in this practice database the dates are stored as text in YYYY-MM-DD form, so to run the query here use <code>WHERE PatientDOB &gt;= '2007-01-01'</code>. Expected result: Ally MacDonald (2007), Hayley Foxglove (2009), Colin Bird (2019).</em></p>` }
      ]
    },
    {
      number: '14', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>Describe the role of the inference engine in an expert system.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-01 · Targeted performance bands: 2–3</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes the role of an inference engine in an expert system</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The inference engine applies logical reasoning to the knowledge base to solve problems or draw conclusions. It evaluates rules and facts to provide advice or solutions based on user queries.</p>` }
      ]
    },
    {
      number: '15', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Explain how prototypes can be used to inform the requirements and limitations of an enterprise system. Provide an example in your response.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-09 · Targeted performance bands: 2–4</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how prototypes can be used to inform the requirements and limitations of an enterprise system with an appropriate example</td><td>3</td></tr>
<tr><td>Describes how prototypes can be used to inform the requirements and/or limitations of an enterprise system with an example</td><td>2</td></tr>
<tr><td>Provides an example or some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Prototypes can be used to test the functionality and usability of an enterprise system before full implementation. They help identify limitations, such as missing features or performance issues, by allowing users to interact with a working model. For example, a business could create a prototype of a supply chain management system to test if it effectively tracks inventory and generates reports in real-time. Feedback from users interacting with the prototype can highlight necessary improvements.</p>` }
      ]
    },
    {
      number: '16', marks: 4, layout: 3,
      stimulus: `<p>A local sports club is updating the system that manages its membership. They want to employ a specialist software development company to design a working model of the updated system.</p>`,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>Recommend a combination of development approaches for the proposed system and justify your choice.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-09 · Targeted performance bands: 3–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies the prototyping development approach and ONE other development approach with justification of the choices showing thorough understanding of system development and the scenario</td><td>4</td></tr>
<tr><td><ul><li>Identifies a suitable development approach and provides a thorough justification</li></ul>OR<ul><li>Identifies a suitable combination of development approaches and shows some understanding of each method</li></ul></td><td>3</td></tr>
<tr><td><ul><li>Shows some understanding of development approaches</li></ul>OR<ul><li>Identifies a suitable combination of development approaches</li></ul></td><td>2</td></tr>
<tr><td>Identifies a feature of development approaches</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The local sports club should use the outsourcing and prototyping development approaches to update their membership information system. The outsourcing development approach involves contracting an external company that specialises in the development of such services. The sports club does not have the necessary software development skills and expertise to develop the new system. Using the outsourcing development approach will allow the sports club staff to focus on their day-to-day jobs. The external company with extensive experience in systems development will provide a higher quality system that better meets the requirements.</p>
<p>In a prototyping development approach a limited model of the future system is developed to demonstrate the system to the users. The sports club can use this prototype model to verify and validate the user requirements of the new system. This development approach can increase the timeframe for the project due to the extra time taken to develop the model and manage new requirements from the users as they use the model. With proper management though, this development approach is successful at delivering systems closely aligned with the user requirements.</p>
<p><strong>Answers may include:</strong></p>
<p>Agile, Traditional and Customisation development approaches with appropriate justification for their use.</p>` }
      ]
    },
    {
      number: '17', marks: 6, layout: 3,
      stimulus: `<p>ShopSmart is a global e-commerce company that collects vast amounts of data from its customers. The data includes purchase history, user behaviour on the website, customer feedback, product reviews, and location data. ShopSmart has been expanding rapidly and operates in multiple regions, leading to an increasing amount of data being generated daily. The company aims to utilise this data to improve customer experience, optimise inventory, predict trends, and personalise product recommendations.</p>
<p>To manage this growing volume of data, ShopSmart has implemented a data warehousing solution that consolidates data from multiple sources into a central repository. The company also uses advanced simulation and data modelling tools to predict future sales trends and to optimise its supply chain operations. Additionally, the company has automated its inventory management system to ensure timely stock replenishment based on the predicted demand.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3, wordLimit: 80,
          question: `<p>Outline the use of big data and data warehousing in ShopSmart’s operations. In your response, you should consider volume, variety, and velocity.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-04 · Targeted performance bands: 2–4</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Outlines the use of big data and data warehousing in SmartShop’s operations, considering volume, variety, and velocity, in the context of ShopSmart’s operations</td><td>3</td></tr>
<tr><td>Outlines the use of big data and/or data warehousing in SmartShop’s operations, considering volume and/or variety and/or velocity, with some reference to ShopSmart’s operations</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<ul>
<li><strong>Volume</strong>: With the rapid growth of the company and the increasing number of customers, the volume of data being generated daily is substantial. ShopSmart needs to be able to store and process large amounts of data efficiently.</li>
<li><strong>Variety</strong>: The data collected by ShopSmart comes in multiple forms, such as structured data (purchase history, product information) and unstructured data (user reviews, customer feedback, website clickstream data). The company uses data warehousing to consolidate and organise this diverse data into a central repository for easier analysis and decision-making.</li>
<li><strong>Velocity</strong>: The speed at which ShopSmart generates data is high, especially with real-time customer transactions and web interactions. To manage this, the company likely uses real-time processing techniques within its data warehousing solution, enabling quick insights for timely decisions, such as product recommendations or inventory restocking.</li>
</ul>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>Explain the application of data modelling and the automation of systems in ShopSmart’s operations.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-02 · Targeted performance bands: 3–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the application of data modelling and the automation of systems in ShopSmart’s operations</td><td>3</td></tr>
<tr><td>Describes the application of data modelling and/or the automation of systems in ShopSmart’s operations</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>ShopSmart uses data modelling to analyse customer behaviour and predict future purchasing patterns. By building predictive models, the company can make data-driven decisions on which products to recommend to specific customers or regions, personalising the shopping experience and improving sales.</p>
<p>ShopSmart has automated its inventory management system. By using automated systems, the company can restock products based on predicted demand, reducing human intervention and ensuring that inventory is always aligned with customer needs. Automation also enhances operational efficiency, reducing the risk of errors in stock management and improving customer satisfaction.</p>` }
      ]
    },
    {
      number: '18', marks: 4, layout: 3,
      stimulus: `<p>A medical expert system can use a flowchart to determine possible causes of a fever based on symptoms. The system follows the following IF-THEN rules to guide decision-making:</p>
<ol>
<li>IF the patient has a fever → THEN check for a sore throat.</li>
<li>IF the patient has a sore throat → THEN check for white spots in the throat.</li>
<li>IF white spots are present → THEN diagnose strep throat and recommend a doctor visit.</li>
<li>IF no white spots → THEN diagnose flu and suggest rest and fluids.</li>
<li>IF no sore throat but a runny nose and sneezing → THEN diagnose common cold and recommend home care</li>
<li>IF no sore throat and no runny nose and sneezing → THEN run further tests</li>
</ol>`,
      items: [
        { type: 'drawing', marks: 4,
          question: `<p>Create a flowchart to represent a decision-making process using IF-THEN rules in the medical expert system.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-08 · Targeted performance bands: 3–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Creates a substantially correct flowchart that shows a thorough understanding of the decision-making process using IF-THEN rules in the medical expert system</td><td>4</td></tr>
<tr><td>Creates a flowchart to that shows a sound understanding of the decision-making process using mostly correct IF-THEN rules in the medical expert system</td><td>3</td></tr>
<tr><td>Creates a flowchart that shows some understanding of the rules in the medical expert system</td><td>2</td></tr>
<tr><td><ul><li>Identifies a feature of a flowchart</li></ul>OR<ul><li>Creates a diagram that shows a basic understanding of the rules in the medical expert system</li></ul></td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/cssa2025/q18-sample-answer.png" alt="Sample flowchart: START, Sore throat? decision; Yes leads to White spots in throat? (Yes: diagnose strep throat, recommend doctor visit; No: diagnose flu and recommend rest and fluids); No leads to Runny nose and sneezing? (Yes: diagnose common cold and recommend home care; No: run further tests); all paths join to END"></p>
<ul>
<li>START → decision <em>Sore throat?</em></li>
<li>Yes → decision <em>White spots in throat?</em> — Yes → Diagnose strep throat, recommend doctor visit; No → Diagnose flu and recommend rest and fluids</li>
<li>No → decision <em>Runny nose and sneezing?</em> — Yes → Diagnose common cold and recommend home care; No → Run further tests</li>
<li>All outcomes → END</li>
</ul>` }
      ]
    },
    {
      number: '19', marks: 4, layout: 3,
      stimulus: `<p>A company has implemented a new customer relationship management (CRM) system.</p>
<p>During the testing and evaluation phase, the project team must verify and validate the system to ensure it is effective and reliable.</p>`,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>Explain, using examples, the methods the project team can use to verify and validate the CRM system.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-10 · Targeted performance bands: 2–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the methods the project team can use to verify and validate the CRM system, using examples</td><td>4</td></tr>
<tr><td>Explains a method the project team can use to verify and validate the CRM system and describes another, using examples</td><td>3</td></tr>
<tr><td><ul><li>Describes a method the project team can use to verify and validate the CRM system</li></ul>OR<ul><li>Outlines methods the project team can use to verify and validate the CRM system</li></ul></td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The project team could evaluate test data, such as a set of sample customer profiles, to verify that the CRM system correctly stores, retrieves, and updates customer information. For example, they might test if entering a new customer’s details reflects accurately in all linked reports and dashboards.</p>
<p>Trialling the operation and maintenance documentation ensures employees can use the system effectively and resolve issues independently. For instance, the team could ask staff to follow the documentation to perform tasks like updating customer information or troubleshooting login problems, ensuring the instructions are clear and functional.</p>
<p><strong>Answers could include:</strong></p>
<ul>
<li>Reviewing the impact of system implementation within relevant environments</li>
<li>Modifying designs to improve functionality</li>
<li>Testing, evaluating, and maintaining the developed system</li>
</ul>` }
      ]
    },
    {
      number: '20', marks: 6, layout: 1,
      stimulus: `<p>A book shop tracks its monthly sales performance using spreadsheet software. The dataset below records sales revenue, expenses, profit, units sold, and customer satisfaction across different regions and products over three months. The company relies on this data to identify trends and improve decision-making.</p>
<p>Please refer to the following sample spreadsheet to answer Queston 20.</p>
<table class="hoa-table-normal"><thead><tr><th>Month</th><th>Region</th><th>Product</th><th>Sales (&#36;)</th><th>Expenses (&#36;)</th><th>Profit (&#36;)</th><th>Units Sold</th><th>Customer Satisfaction (%)</th></tr></thead><tbody>
<tr><td>Jan</td><td>North</td><td>Dictionary</td><td>12,000</td><td>7,500</td><td>4,500</td><td>320</td><td>85</td></tr>
<tr><td>Jan</td><td>North</td><td>Atlas</td><td>9,500</td><td>6,200</td><td>3,300</td><td>280</td><td>78</td></tr>
<tr><td>Jan</td><td>South</td><td>Dictionary</td><td>11,000</td><td>7,000</td><td>4,000</td><td>300</td><td>82</td></tr>
<tr><td>Feb</td><td>North</td><td>Dictionary</td><td>13,500</td><td>8,000</td><td>5,500</td><td>350</td><td>88</td></tr>
<tr><td>Feb</td><td>South</td><td>Atlas</td><td>10,200</td><td>6,700</td><td>3,500</td><td>290</td><td>80</td></tr>
<tr><td>March</td><td>North</td><td>Atlas</td><td>12,700</td><td>7,800</td><td>4,900</td><td>330</td><td>84</td></tr>
<tr><td>March</td><td>South</td><td>Dictionary</td><td>14,300</td><td>8,500</td><td>5,800</td><td>370</td><td>87</td></tr>
</tbody></table>`,
      items: [
        { type: 'spreadsheet', part: 'a', marks: 3,
          question: `<p>Using the book shop’s spreadsheet, create two different visual representations of key trends in the data that would be displayed in a data dashboard.</p>
<p>Ensure your visualisations are clear and effectively communicate insights.</p>`,
          seed: {
            cells: {
              A1: 'Month', B1: 'Region', C1: 'Product', D1: 'Sales ($)', E1: 'Expenses ($)', F1: 'Profit ($)', G1: 'Units Sold', H1: 'Customer Satisfaction (%)',
              A2: 'Jan', B2: 'North', C2: 'Dictionary', D2: 12000, E2: 7500, F2: 4500, G2: 320, H2: 85,
              A3: 'Jan', B3: 'North', C3: 'Atlas', D3: 9500, E3: 6200, F3: 3300, G3: 280, H3: 78,
              A4: 'Jan', B4: 'South', C4: 'Dictionary', D4: 11000, E4: 7000, F4: 4000, G4: 300, H4: 82,
              A5: 'Feb', B5: 'North', C5: 'Dictionary', D5: 13500, E5: 8000, F5: 5500, G5: 350, H5: 88,
              A6: 'Feb', B6: 'South', C6: 'Atlas', D6: 10200, E6: 6700, F6: 3500, G6: 290, H6: 80,
              A7: 'March', B7: 'North', C7: 'Atlas', D7: 12700, E7: 7800, F7: 4900, G7: 330, H7: 84,
              A8: 'March', B8: 'South', C8: 'Dictionary', D8: 14300, E8: 8500, F8: 5800, G8: 370, H8: 87
            },
            bold: ['A1:H1'],
            colWidths: { A: 70, B: 70, C: 90, D: 80, E: 90, F: 80, G: 80, H: 170 }
          },
          guide: `<p><em>Outcomes assessed: EC-12-11 · Targeted performance bands: 3–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Constructs a data dashboard that contains TWO different data visualisations, that accurately represent key trends from the given scenario.</td><td>3</td></tr>
<tr><td>Constructs a data visualisation which represented data from the given scenario.</td><td>2</td></tr>
<tr><td>Provides some relevant information.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><strong>Four Sample Data Visualisations provided. <u>NOTE</u>: Only two required.</strong></p>
<p><strong>Data Visualisation Sample 1</strong> – Total Sales and Profit by Month: This bar chart compares the total sales and profit for each month, helping to identify peak sales periods and profitability trends.</p>
<p><img src="assets/cssa2025/q20a-sample-answer-1.png" alt="Column chart: total sales and profit by month (Feb, Jan, March)"></p>
<p><strong>Data Visualisation Sample 2</strong> – Average Customer Satisfaction by Region: This bar chart shows the average customer satisfaction percentage for each region, helping to analyse regional performance in terms of customer experience.</p>
<p><img src="assets/cssa2025/q20a-sample-answer-2.png" alt="Column chart: average customer satisfaction (%) by region, North and South both about 83"></p>
<p><strong>Data Visualisation Sample 3</strong> – Sales Distribution by Product. This visualisation helps illustrate the proportion of total sales contributed by each product category.</p>
<p><img src="assets/cssa2025/q20a-sample-answer-3.png" alt="Pie chart: sales distribution by product, Atlas 38.9%, Dictionary 61.1%"></p>
<p><strong>Data Visualisation Sample 4</strong> – line chart illustrating the Sales and Profit Trends Over Time. This visualisation helps track fluctuations in sales and profit across different months, making it easier to identify trends and seasonal variations.</p>
<p><img src="assets/cssa2025/q20a-sample-answer-4.png" alt="Line chart: sales and profit trends over time (Feb, Jan, March)"></p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>The book shop operates a large online store that collects vast amounts of customer data, including browsing history and purchases. It uses machine learning to recommend products and real-time tracking to offer instant discounts. Some users worry about how their data is stored and whether their digital footprint is used ethically.</p>
<p>Describe the impact of data scale for the book shop. In your response, consider at least two of the following aspects: volume, storage, real-time streaming, changes in human behaviour, or ethical implications.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-04 · Targeted performance bands: 3–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes TWO relevant impacts data scale could have on the book shop</td><td>3</td></tr>
<tr><td>Outlines the impact data scale could have on the given scenario</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The scale of data in the system affects how customer information is collected, stored, and used.</p>
<p>Firstly, the volume of raw data is very large, as every customer’s browsing history, purchases, and interactions are stored. This requires advanced storage solutions, such as cloud servers, to keep data organised and accessible.</p>
<p>Secondly, real-time tracking allows the company to monitor customer activity as they are browsing and adding items to their cart and, if the customer takes longer than a specified time to check out, offer instant discounts to encourage purchases therefore influencing customer decisions.</p>
<p>Overall, data scale impacts how businesses manage large amounts of information and use it to personalise services.</p>` }
      ]
    },
    {
      number: '21', marks: 7, layout: 3,
      stimulus: `<p>HealthPlus, a healthcare provider, is adopting an enterprise computing system to manage patient records, appointments, and medical histories. The system will integrate data from various sources, including electronic health records (EHR), wearable devices, and lab results. HealthPlus plans to use machine learning and statistical modelling to analyse big data for predicting patient outcomes, identifying trends, and improving treatment plans.</p>
<p>The implementation plan involves ensuring data privacy and compliance with legal regulations, as well as training staff to use the new system effectively.</p>`,
      items: [
        { type: 'mcq', part: 'a', marks: 1,
          question: `<p>HealthPlus would like to first implement the new system in one of its clinics to evaluate the new system before rolling it out to all its clinic locations.</p>
<p>Which method of implementation is being proposed?</p>`,
          options: [
            `Direct`,
            `Parallel`,
            `Phased`,
            `Pilot`
          ],
          answer: 4,
          guide: `<p><em>Outcomes assessed: EC-12-07 · Targeted performance bands: 2–3</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies the correct answer</td><td>1</td></tr>
</tbody></table>
<p>Answer: D. Pilot</p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>Explain the role of intelligent systems in surveillance within the HealthPlus system.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-01 · Targeted performance bands: 4–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the role of intelligent systems in surveillance with reference to the scenario</td><td>3</td></tr>
<tr><td>Describes the role of intelligent systems in surveillance</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Intelligent systems play a crucial role in surveillance within the enterprise computing system at HealthPlus by monitoring patient data and ensuring the security and privacy of sensitive information. These systems can continuously analyse data from various sources, such as electronic health records (EHR), wearable devices, and lab results, to detect any unusual patterns or anomalies that may indicate potential security breaches or unauthorised access. Additionally, intelligent systems can help in monitoring the compliance of healthcare practices with legal and ethical standards, ensuring that patient data is handled appropriately. By providing real-time alerts and automated responses to potential threats, intelligent systems enhance the overall security and integrity of the healthcare provider’s operations, thereby protecting patient information and maintaining trust.</p>` },
        { type: 'text', part: 'c', marks: 3, wordLimit: 80,
          question: `<p>Explain how machine learning and statistical modelling are used in the HealthPlus system to analyse big data.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-04 · Targeted performance bands: 4–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how machine learning and statistical modelling are used to analyse big data with reference to the scenario</td><td>3</td></tr>
<tr><td>Describes how machine learning and statistical modelling are used to analyse big data</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Machine learning and statistical modelling are used to analyse patient data from various sources, such as EHRs, wearable devices, and lab results. Accessing this data from a data warehouse, these techniques help in identifying patterns and trends in patient health, predicting patient outcomes, and providing personalised treatment plans. For example, machine learning algorithms can predict the likelihood of a patient developing a chronic condition based on their medical history and lifestyle data, allowing for early intervention and better management of the condition.</p>` }
      ]
    },
    {
      number: '22', marks: 6, layout: 3,
      stimulus: `<p>A large city museum uses advanced technologies to enhance its operations and visitor experience. The museum employs online analytical processing (OLAP) to analyse visitor data and uses intelligent systems incorporating virtual reality (VR) and touch and gesture interfaces in its interactive exhibits.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3, wordLimit: 80,
          question: `<p>Explain how OLAP can be used to analyse visitor data in this museum.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-05 · Targeted performance bands: 2–5</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how OLAP can be used to analyse visitor data in this museum</td><td>3</td></tr>
<tr><td>Outlines how OLAP can be used to analyse visitor data in this museum</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>OLAP is used to analyse data from multiple perspectives by organising it into a multidimensional format. For example, it allows the museum to compare visitor numbers across different exhibits, time periods, or age groups. This helps the museum identify popular exhibits and allocate resources effectively to improve visitor satisfaction.</p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>Explain the role of TWO hardware components used in the museum’s intelligent system.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-06 · Targeted performance bands: 4–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the role of TWO hardware components used in the museum’s intelligent system</td><td>3</td></tr>
<tr><td>Outlines the role of hardware components used in the museum’s intelligent system</td><td>2</td></tr>
<tr><td>Identifies hardware components</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>One hardware component is motion sensors, which detect visitor movements to activate exhibits or adjust content based on their actions and gestures, creating an interactive experience. Another component is touchscreens, which allow visitors to select and explore information directly, providing a hands-on and engaging way to learn. These components enhance the system’s responsiveness and make the museum visit more immersive.</p>
<p><strong>Answers could include:</strong></p>
<ul>
<li>VR Headsets</li>
<li>Cameras or infrared sensors to detect hand movements or gestures for interacting with digital displays</li>
<li>Microphones and voice recognition hardware for hands-free navigation</li>
<li>AR glasses or tablets to overlay digital information onto physical exhibits</li>
<li>Haptic devices to provide tactile feedback, eg vibrating controllers</li>
<li>Microcontrollers embedded to control exhibit functions like lighting, sounds or movement</li>
<li>High Resolution projectors for creating immersive, large-scale visual displays or virtual tours</li>
<li>3D scanners to allow visitors to explore detailed 3D models of artifacts that are too fragile or small to handle</li>
</ul>` }
      ]
    },
    {
      number: '23', marks: 6, layout: 3,
      stimulus: `<p>A data scientist is undertaking a project that analyses player statistics from a local football app used for game and team management. The data visualisations will be used to predict future representative players.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3, wordLimit: 80,
          question: `<p>Describe TWO strategies to be used by the data scientist to maintain data quality and data security when developing the football club data visualisations.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-03 · Targeted performance bands: 2–4</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes TWO strategies to be used with references to the scenario</td><td>3</td></tr>
<tr><td><ul><li>Describes ONE strategy and limited reference to another</li></ul>OR<ul><li>Outlines TWO strategies to be used</li></ul></td><td>2</td></tr>
<tr><td>Provides some relevant information about strategies to be used</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The data scientist can use processes to verify data ownership and conduct validation checks to maintain data quality and data security when developing the football clubs data visualisations.</p>
<p>The data scientist must ensure that the players/coaches have given permission for their data to be used in this project. The data scientist should establish protocols to confirm that the player statistics are provided by a trusted source, and the data is correctly attributed to the rightful owners. The data scientist then needs to implement processes to only provide authorised access to this data to ensure data security. For example, records should be maintained of who accesses the data with the timestamp so you can cross check this information with the list of authorised users.</p>
<p>The data scientist should design and implement validation rules to automatically check the accuracy, consistency and completeness of the player statistics before the data is used in any data visualisations. An example is checking that all dates are entered in the Australian format of DD/MM/YYYY without a timestamp. These validation checks will maintain the quality of the data.</p>
<p><strong>Answers could include:</strong></p>
<ul>
<li>setting up processes for verifying data ownership</li>
<li>ensuring proper validation checks</li>
<li>implementing risk mitigation measures</li>
</ul>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>The data scientist needs to work together with a group of officials and representatives within the football league to refine the data visualisations being produced in this project.</p>
<p>Describe TWO online communication systems that allows sharing and collaboration by allowing this group to work remotely together in real-time.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-11 · Targeted performance bands: 4–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes TWO online communication systems that allow collaboration between the data scientist and the group of officials and representatives</td><td>3</td></tr>
<tr><td>Outlines communication systems that allow collaboration between the data scientist and the group of officials and representatives</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>There are a number of online communication systems that allows the data scientist and the group of officials and representatives to share and collaborate in real-time regardless of their physical location.</p>
<p>Microsoft Teams integrates real-time chat, voice and video calls allowing participants to communicate from different parts of the world. Participants can share their screen to present their work or update electronic media during the meeting like a whiteboard. Meetings can be recording for absentee participants. This system can be accessed for free or via a paid subscription. Teams can be also accessed from mobile and computer devices with different operating systems.</p>
<p>Google Docs allows multiple users to work on the same document at the same time. The document is shared with other members via an email or shareable link. Edits are instantly visible to all collaborators, and changes are automatically saved, making it easy to work together without version conflicts. Content can be easily converted to other languages for non-English speaking collaborators.</p>
<p><strong>Answers could include:</strong></p>
<ul>
<li>Google Docs, Sheets, Slides, Drive, Meet</li>
<li>Zoom</li>
<li>Discord</li>
<li>Microsoft Teams, OneDrive, OneNote, SharePoint, Microsoft 365</li>
</ul>` }
      ]
    },
    {
      number: '24', marks: 4, layout: 3,
      stimulus: `<p>A large e-commerce company collects personal data from millions of users, including their purchasing habits, location, and browsing history. The company uses this data to create personalised advertisements and optimise its services. However, concerns have been raised about the privacy of users, the ethical implications of data collection, and the environmental impact of maintaining large-scale data centres.</p>`,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>Explain the social, ethical, and legal implications of this company using personal data for personalised advertisements and service optimisation. In your answer, show the impact on individuals, society, and the environment.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-07 · Targeted performance bands: 3–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the social, ethical, and legal implications of this company using personal data for personalised advertisements and service optimisation and clearly shows the impact on individuals, society, and the environment</td><td>4</td></tr>
<tr><td>Describes the social, ethical, and/or legal implications of this company using personal data for personalised advertisements and service optimisation with some reference to the impact on individuals, society, and/or the environment</td><td>3</td></tr>
<tr><td>Outlines the social, ethical, and/or legal implications of this company using personal data for personalised advertisements and service optimisation with limited reference to the impact on individuals, society, and/or the environment</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Socially, the widespread collection and use of personal data can lead to changes in the nature of work and interpersonal relationships. For example, personalised advertisements may influence consumer behavior, which could shift job markets or alter how people interact with businesses. Additionally, as more services are tailored to individual preferences, there is a risk of increasing social isolation as people may rely more on digital interactions rather than face-to-face communication.</p>
<p>Ethically, the collection of personal data raises concerns about privacy and the appropriate use of information. Companies must ensure that data is collected and used transparently, with informed consent from users. Data integrity is crucial to prevent misuse or manipulation of personal information. Furthermore, inclusivity and accessibility should be prioritised to ensure that all individuals, regardless of background, are treated fairly in digital environments.</p>
<p>Legally, the company must comply with privacy laws, such as data protection regulations, to safeguard individuals’ personal information. Failure to adhere to these laws could result in legal consequences. In addition, the company must respect copyright laws, ensuring that any data collected from third-party sources is used appropriately.</p>` }
      ]
    },
    {
      number: '25', marks: 8, layout: 3,
      stimulus: `<p>A healthcare organisation is developing a data visualisation tool to track patient recovery rates from various treatments. The tool aggregates patient data from electronic health records (EHRs), surveys, and follow-up assessments. However, the data collection process is focused primarily on patients from urban hospitals, with limited data from rural or remote healthcare facilities.</p>`,
      items: [
        { type: 'text', marks: 8, wordLimit: 200,
          question: `<p>Explain how bias in data collection, storage, and analysis could impact the development of the healthcare data visualisation tool and how these issues could be addressed.</p>`,
          guide: `<p><em>Outcomes assessed: EC-12-03 · Targeted performance bands: 2–6</em></p>
<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how bias in data collection, storage, and analysis could impact the development of the healthcare data visualisation tool and how these issues could be addressed</td><td>8</td></tr>
<tr><td>Describes bias in data collection, storage, and analysis could impact the development of the healthcare data visualisation tool and how these issues could be addressed</td><td>6–7</td></tr>
<tr><td>Shows a sound understanding of bias when developing visualisations and how to address these issues</td><td>4–5</td></tr>
<tr><td>Shows some understanding of bias when developing visualisations and/or how to address these issues</td><td>2–3</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><strong>Data Collection Bias:</strong><br>The primary source of bias in this scenario is the limited representation of rural or remote healthcare facilities in the data collection process. Since the tool focuses primarily on data from urban hospitals, it may not capture the full spectrum of patient recovery rates, especially those related to geographic, socioeconomic, and healthcare access differences. Patients in rural areas often face unique challenges such as longer travel times to healthcare facilities, limited access to specialised treatments, and fewer healthcare professionals. These factors can affect their recovery rates differently than patients in urban settings. To address this, the healthcare organisation should ensure that data is collected from a more diverse range of healthcare facilities, including rural and remote hospitals, to provide a more comprehensive and accurate view of recovery rates across all patient populations.</p>
<p><strong>Data Storage Bias:</strong><br>Data storage practices can also contribute to bias, especially if data is not securely stored or organised in a way that reflects the diversity of the patient population. In the case of healthcare data, ensuring that all patient information, including those from rural and urban areas, is properly categorised and protected from unauthorised access is crucial. If certain groups’ data is inadvertently excluded or not properly stored, this can further skew the analysis. To address this, secure and encrypted storage systems should be used, along with clear organisation of data to ensure that all groups are fairly represented. Additionally, the storage system should include robust metadata tagging, which helps in accurately identifying and categorising data from different populations.</p>
<p><strong>Data Analysis Bias:</strong><br>Bias can be introduced during data analysis if the underrepresentation of rural patient data is not corrected. Statistical methods, such as weighting the data to account for the differences in the sample sizes of urban and rural populations, can help mitigate this bias. If the data analysis does not appropriately balance these differences, the resulting visualisation may inaccurately reflect the overall recovery rates, potentially misleading healthcare providers and policymakers. Additionally, the visualisation tool itself must be designed to present data in an unbiased way, ensuring that trends from both urban and rural populations are clearly represented. This can include using appropriate data visualisation techniques, such as separate graphs for different demographics or using color-coding to highlight disparities.</p>
<p><strong>Addressing the Issues:</strong><br>To effectively address these biases, the healthcare organisation must ensure that the data collection process is inclusive of all patient groups, using diverse data sources to capture a full range of experiences. During data storage, stringent security measures should be put in place to protect patient privacy while maintaining data integrity. In the analysis phase, advanced statistical techniques should be used to adjust for any demographic imbalances in the data, ensuring that the final visualisations are accurate and reflective of all populations. Moreover, the tool should be regularly audited for biases to ensure that it evolves with changes in healthcare access and patient demographics.</p>` }
      ]
    }
  ],
  figures: [
    { out: 'assets/cssa2025/q11-dfd.png', file: 'cssa2025-q.pdf', page: 6, box: [825, 57, 1060, 877], rotate: 90 },
    { out: 'assets/cssa2025/q13a-schema.png', file: 'cssa2025-q.pdf', page: 9, box: [305, 147, 575, 837], rotate: 90 },
    { out: 'assets/cssa2025/q11-sample-answer.png', file: 'cssa2025-a.pdf', page: 5, box: [305, 82, 505, 882], rotate: 90 },
    { out: 'assets/cssa2025/q18-sample-answer.png', file: 'cssa2025-a.pdf', page: 11, box: [480, 322, 1030, 867], rotate: 90 },
    { out: 'assets/cssa2025/q20a-sample-answer-1.png', file: 'cssa2025-a.pdf', page: 13, box: [475, 422, 735, 877], rotate: 90 },
    { out: 'assets/cssa2025/q20a-sample-answer-2.png', file: 'cssa2025-a.pdf', page: 13, box: [795, 437, 1085, 877], rotate: 90 },
    { out: 'assets/cssa2025/q20a-sample-answer-3.png', file: 'cssa2025-a.pdf', page: 14, box: [170, 337, 645, 862], rotate: 90 },
    { out: 'assets/cssa2025/q20a-sample-answer-4.png', file: 'cssa2025-a.pdf', page: 14, box: [745, 282, 1080, 872], rotate: 90 }
  ]
});
