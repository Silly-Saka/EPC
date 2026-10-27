registerExam({
  id: 'cssa2026',
  title: 'CSSA 2026 Enterprise Computing Trial HSC Examination',
  source: 'CSSA',
  year: 2026,
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
<li>Answer the questions in the spaces provided. These spaces provide guidance for the expected length of response.</li>
<li>If you include diagrams in your answer, ensure that they are clearly labelled.</li>
</ul>`,
  groups: [
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>An approach to problem-solving that involves breaking down complex problems into parts and utilising skills such as decomposition, abstraction and pattern recognition is known as:</p>`,
          options: [
            `algorithmic thinking.`,
            `computational thinking.`,
            `design thinking.`,
            `systems thinking.`
          ],
          answer: 2,
          guide: `<p>Answer: B. computational thinking.</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a method to maintain data security?</p>`,
          options: [
            `Allowing staff to share passwords`,
            `Controlling who has access to the data`,
            `Insist on staff using a shared pool of USBs`,
            `Sharing login details via the office group chat`
          ],
          answer: 2,
          guide: `<p>Answer: B. Controlling who has access to the data</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 3,
      stimulus: `<p>A school stores student information in a table that includes student_id, name and year group. It also stores written comments from teachers about student progress separately as written text files.</p>`,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following correctly identifies the type of dataset used in each case?</p>`,
          options: [
            `Both the table and the written comments are structured data.`,
            `Both the table and the written comments are unstructured data.`,
            `The table is unstructured data and the written comments are structured data.`,
            `The table is structured data and the written comments are unstructured data.`
          ],
          answer: 4,
          guide: `<p>Answer: D. The table is structured data and the written comments are unstructured data.</p>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is essential for successful collaboration during the development of an enterprise project?</p>`,
          options: [
            `Clear communication channels`,
            `Weekly review of project expenses`,
            `Competition between team members`,
            `Up-to-date maintenance documentation`
          ],
          answer: 1,
          guide: `<p>Answer: A. Clear communication channels</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 3,
      stimulus: `<p>A retail company regularly analyses customer transactions stored in their data warehouse to improve future sales. The company collects:</p>
<ul>
<li>Millions of purchase records daily</li>
<li>Real-time customer feedback from social media</li>
<li>Data from multiple stores and online platforms</li>
</ul>
<p>Big data is commonly described using the characteristics Variety, Velocity and Volume.</p>`,
      items: [
        { type: 'mcq',
          question: `<p>Which row of the table correctly identifies the big data characteristic of the data collected by the retail company?</p>
<table class="hoa-table-normal"><thead><tr><th></th><th>Purchase records</th><th>Real-time social media feedback</th><th>Data from multiple stores and online platforms</th></tr></thead>
<tbody>
<tr><td>A.</td><td>Velocity</td><td>Variety</td><td>Volume</td></tr>
<tr><td>B.</td><td>Variety</td><td>Volume</td><td>Velocity</td></tr>
<tr><td>C.</td><td>Volume</td><td>Velocity</td><td>Variety</td></tr>
<tr><td>D.</td><td>Velocity</td><td>Volume</td><td>Variety</td></tr>
</tbody></table>`,
          options: [
            `Velocity | Variety | Volume`,
            `Variety | Volume | Velocity`,
            `Volume | Velocity | Variety`,
            `Velocity | Volume | Variety`
          ],
          answer: 3,
          guide: `<p>Answer: C. Purchase records – Volume; Real-time social media feedback – Velocity; Data from multiple stores and online platforms – Variety</p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>A school wants to interrogate data from a data visualisation of their HSC results.</p>
<p>Which of the following is an appropriate technique?</p>`,
          options: [
            `Aggregation`,
            `Ignore the scale and axes`,
            `Give special consideration to the unique needs of the school`,
            `Avoid participating in cross-checking activities with other data sources`
          ],
          answer: 1,
          guide: `<p>Answer: A. Aggregation</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>A security system uses infrared technology to detect changes in heat and movement within a building.</p>
<p>Which hardware component is performing this function?</p>`,
          options: [
            `Actuator`,
            `Microcontroller`,
            `Motor`,
            `Sensor`
          ],
          answer: 4,
          guide: `<p>Answer: D. Sensor</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Digital assistants such as Siri and Alexa help users complete their tasks quickly and conveniently.</p>
<p>Which of the following best explains how the expert system contributes to its efficiency?</p>`,
          options: [
            `It controls volume settings based on user preferences.`,
            `It connects to other smart devices through wireless links.`,
            `It streams music and weather updates from online sources.`,
            `It uses decision rules to give helpful, context-aware replies.`
          ],
          answer: 4,
          guide: `<p>Answer: D. It uses decision rules to give helpful, context-aware replies.</p>` }
      ]
    },
    {
      number: '9', marks: 1, layout: 3,
      stimulus: `<p>A student is developing an expert system for indoor plant care. They are testing how the system should use a rule, a fact and a recommendation to automate advice.</p>`,
      items: [
        { type: 'mcq',
          question: `<p>Which row correctly identifies the rule, fact and recommendation for the automated device?</p>
<table class="hoa-table-normal"><thead><tr><th></th><th>Rule</th><th>Fact</th><th>Recommendation</th></tr></thead>
<tbody>
<tr><td>A.</td><td>Soil moisture is below 20%</td><td>Plants in direct sunlight require more water</td><td>Increase watering frequency</td></tr>
<tr><td>B.</td><td>Increase watering frequency</td><td>Soil moisture is below 20%</td><td>Plants in direct sunlight require more water</td></tr>
<tr><td>C.</td><td>Plants in direct sunlight require more water</td><td>Soil moisture is below 20%</td><td>Increase watering frequency</td></tr>
<tr><td>D.</td><td>Plants in direct sunlight require more water</td><td>Increase watering frequency</td><td>Soil moisture is below 20%</td></tr>
</tbody></table>`,
          options: [
            `Soil moisture is below 20% | Plants in direct sunlight require more water | Increase watering frequency`,
            `Increase watering frequency | Soil moisture is below 20% | Plants in direct sunlight require more water`,
            `Plants in direct sunlight require more water | Soil moisture is below 20% | Increase watering frequency`,
            `Plants in direct sunlight require more water | Increase watering frequency | Soil moisture is below 20%`
          ],
          answer: 3,
          guide: `<p>Answer: C. Rule – Plants in direct sunlight require more water; Fact – Soil moisture is below 20%; Recommendation – Increase watering frequency</p>` }
      ]
    },
    {
      number: '10', marks: 1, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Select the most appropriate measurement of data for each situation outlined in the ‘Description’ column.</p>`,
          rowHeader: 'Description',
          columns: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
          rows: [
            `Rank items, but the difference between each rank is not equal`,
            `Ordered with equal gaps, but no true 0`,
            `Categorises items without any order or ranking`,
            `Data that has a true 0`
          ],
          answer: [2, 3, 1, 4],
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly matches each example to the most appropriate data measurement</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Description</th><th>Nominal</th><th>Ordinal</th><th>Interval</th><th>Ratio</th></tr></thead><tbody>
<tr><td>Rank items, but the difference between each rank is not equal.</td><td></td><td>X</td><td></td><td></td></tr>
<tr><td>Ordered with equal gaps, but no true 0.</td><td></td><td></td><td>X</td><td></td></tr>
<tr><td>Categorises items without any order or ranking.</td><td>X</td><td></td><td></td><td></td></tr>
<tr><td>Data that has a true 0.</td><td></td><td></td><td></td><td>X</td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '11', marks: 2, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following is TRUE about passive data collection?</p>`,
          options: [
            `It never requires consent or privacy notices because no forms are filled out.`,
            `It can raise privacy and ethical issues and must comply with policies/legislation.`,
            `It always produces fully accurate and complete data because users are not involved.`,
            `It typically occurs automatically/continuously in the background and can reduce self-report bias.`,
            `It is collected without the user actively entering information, often via sensors, server logs or cookies.`
          ],
          answer: [2, 4, 5],
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies true or false correctly for all FIVE checkboxes</td><td>2</td></tr>
<tr><td>Identifies true or false correctly for FOUR of the five checkboxes</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<ul>
<li>(B) It can raise privacy and ethical issues and must comply with policies/legislation.</li>
<li>(D) It typically occurs automatically/continuously in the background and can reduce self-report bias.</li>
<li>(E) It is collected without the user actively entering information, often via sensors, server logs or cookies.</li>
</ul>` }
      ]
    },
    {
      number: '12', marks: 2, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>A new government app, powered by artificial intelligence, is designed to help people plan their trips on public transport.</p>
<p>Which of the following features would be needed to ensure that everyone can access and benefit from the app?</p>`,
          options: [
            `Different language options`,
            `A high-contrast option for the user interface`,
            `Only works on the latest high-powered smartphones`,
            `Easy to use for those not confident with using technology`,
            `Premium pricing to recover the costs of research and development`
          ],
          answer: [1, 2, 4],
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies true or false correctly for all FIVE checkboxes</td><td>2</td></tr>
<tr><td>Identifies true or false correctly for FOUR of the five checkboxes</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<ul>
<li>(A) Different language options.</li>
<li>(B) A high-contrast option for the user interface.</li>
<li>(D) Easy to use for those not confident with using technology.</li>
</ul>` }
      ]
    },
    {
      number: '13', marks: 3, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>The following table contains characteristics of different tools for storing data.</p>
<p>Select the most appropriate tool that contains the characteristic listed.</p>`,
          rowHeader: 'Characteristic',
          columns: ['Spreadsheet', 'Flat-file database', 'Relational database'],
          rows: [
            `A single table with each row contains a record and each column represents a field`,
            `Relationships are created using foreign keys`,
            `Data is stored in a single, self-contained table`,
            `Can link multiple sheets to extract data and create summaries`,
            `Contains multiple tables representing a specific category or entity`,
            `Utilises cell references`
          ],
          answer: [2, 3, 2, 1, 3, 1],
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly completes ALL the options</td><td>3</td></tr>
<tr><td>Correctly completes FOUR options</td><td>2</td></tr>
<tr><td>Correctly completes TWO options</td><td>1</td></tr>
</tbody></table>
<p><strong>Answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Characteristic</th><th>Spreadsheet</th><th>Flat File Database</th><th>Relational Database</th></tr></thead><tbody>
<tr><td>A single table with each row contains a record and each column represents a field</td><td></td><td>X</td><td></td></tr>
<tr><td>Relationships are created using foreign keys</td><td></td><td></td><td>X</td></tr>
<tr><td>Data is stored in a single, self-contained table</td><td></td><td>X</td><td></td></tr>
<tr><td>Can link multiple sheets to extract data and create summaries</td><td>X</td><td></td><td></td></tr>
<tr><td>Contains multiple tables representing a specific category or entity</td><td></td><td></td><td>X</td></tr>
<tr><td>Utilises cell references</td><td>X</td><td></td><td></td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '14', marks: 3, layout: 3,
      stimulus: `<p>A large multinational company uses an online voting system for shareholder and corporate decision-making.</p>`,
      items: [
        { type: 'text',
          question: `<p>Explain how blockchain technology could benefit data verification in this online voting system.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the benefit of data verification by using blockchain technology in the online voting system</td><td>3</td></tr>
<tr><td>Describes blockchain technology with reference to data verification in the online voting system</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Blockchain technology incorporates data verification in online voting systems in a number of ways.</p>
<p>One benefit is the voting data is encrypted and therefore not able to be tampered with. Once a person submits their vote electronically, it is then encrypted and stored on the blockchain, making it impossible to change without affecting the entire system.</p>
<p>Blockchain technology also uses cryptographic algorithms to ensure that data is accurate and secure. Transactions are verified and confirmed by multiple participants in the network, which makes it difficult to falsify or alter data. This creates a verifiable and transparent record of transactions that can be used to track and verify data.</p>
<p><em>Note: the CSSA sample answer attributes tamper-resistance to encryption. Strictly, it comes from hashing: each block stores the cryptographic hash of the previous block, so changing a recorded vote changes its hash and breaks the chain, and the change is rejected by the other nodes (consensus) holding copies of the ledger. Encryption keeps votes confidential but does not by itself stop them being altered.</em></p>` }
      ]
    },
    {
      number: '15', marks: 6, layout: 1,
      stimulus: `<p>A school uses a student information system. Details for each student are stored in the Student table.</p>
<p>The following three tables are from the student information system.</p>
<p><strong>Student</strong></p>
<table class="hoa-table-normal"><thead><tr><th>StudentID</th><th>FirstName</th><th>LastName</th><th>DateOfBirth</th><th>YearGroup</th><th>ActiveStudent</th></tr></thead><tbody>
<tr><td>JSM001</td><td>Jane</td><td>Smith</td><td>01/12/2010</td><td>11</td><td>Y</td></tr>
<tr><td>CBI001</td><td>Colin</td><td>Bird</td><td>02/02/2010</td><td>11</td><td>N</td></tr>
<tr><td>RLI001</td><td>Rocky</td><td>Lianni</td><td>07/11/2010</td><td>11</td><td>Y</td></tr>
<tr><td>JAL001</td><td>Jasmine</td><td>Lee</td><td>05/06/2010</td><td>11</td><td>Y</td></tr>
</tbody></table>
<p><strong>Class</strong></p>
<table class="hoa-table-normal"><thead><tr><th>ClassID</th><th>Subject</th><th>Year</th><th>Faculty</th></tr></thead><tbody>
<tr><td>11SEN1_2026</td><td>Software Engineering</td><td>11</td><td>Computing Studies</td></tr>
<tr><td>11ENC1_2026</td><td>Enterprise Computing</td><td>11</td><td>Computing Studies</td></tr>
<tr><td>11ENS1_2026</td><td>English Standard</td><td>11</td><td>English</td></tr>
<tr><td>11PHY1_2026</td><td>Physics</td><td>11</td><td>Science</td></tr>
</tbody></table>
<p><strong>ClassEnrolment</strong></p>
<table class="hoa-table-normal"><thead><tr><th>ClassEnrolmentID</th><th>StudentID</th><th>ClassID</th><th>StartDate</th><th>EndDate</th></tr></thead><tbody>
<tr><td>1</td><td>JSM001</td><td>11ENC1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
<tr><td>2</td><td>CBI001</td><td>11ENC1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
<tr><td>3</td><td>JAL001</td><td>11ENC1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
<tr><td>4</td><td>RLI001</td><td>11SEN1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
<tr><td>5</td><td>JSM001</td><td>11PHY1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
<tr><td>6</td><td>CBI001</td><td>11ENS1_2026</td><td>01/01/2026</td><td>31/12/2026</td></tr>
</tbody></table>`,
      items: [
        { type: 'html', part: 'a', marks: 2,
          question: `<p>Complete the data dictionary for the Student table below, with the most appropriate data type and data format for each of the fields numbers (i) to (vi).</p>
<p>Choose from the following options:</p>
<ul>
<li>Data type options: Boolean, Currency, Date, Integer, Text</li>
<li>Data format options: NN, XX, NNNXXX, XXXNNN, DD/MM/YYYY, MM/DD/YYYY, NNN...XXX, XXX...XXX</li>
</ul>
<table class="hoa-table-normal"><thead><tr><th>Field name</th><th>Data type</th><th>Data format</th><th>Field size</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>StudentID</td><td>(i) <select class="hoa-select" name="cssa26q15a-i"><option value=""></option><option>Boolean</option><option>Currency</option><option>Date</option><option>Integer</option><option>Text</option></select></td><td>(ii) <select class="hoa-select" name="cssa26q15a-ii"><option value=""></option><option>NN</option><option>XX</option><option>NNNXXX</option><option>XXXNNN</option><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option><option>NNN...XXX</option><option>XXX...XXX</option></select></td><td>6</td><td>Unique identifier for student</td><td>JSM001</td></tr>
<tr><td>FirstName</td><td>Text</td><td>XXX...XXX</td><td>25</td><td>Student first name</td><td>Jane</td></tr>
<tr><td>LastName</td><td>Text</td><td>XXX...XXX</td><td>25</td><td>Student last name</td><td>Smith</td></tr>
<tr><td>DateOfBirth</td><td>Date</td><td>(iii) <select class="hoa-select" name="cssa26q15a-iii"><option value=""></option><option>NN</option><option>XX</option><option>NNNXXX</option><option>XXXNNN</option><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option><option>NNN...XXX</option><option>XXX...XXX</option></select></td><td>10</td><td>Student date of birth</td><td>17/12/2020</td></tr>
<tr><td>YearGroup</td><td>(iv) <select class="hoa-select" name="cssa26q15a-iv"><option value=""></option><option>Boolean</option><option>Currency</option><option>Date</option><option>Integer</option><option>Text</option></select></td><td>(v) <select class="hoa-select" name="cssa26q15a-v"><option value=""></option><option>NN</option><option>XX</option><option>NNNXXX</option><option>XXXNNN</option><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option><option>NNN...XXX</option><option>XXX...XXX</option></select></td><td>2</td><td>Academic year group of student</td><td>11</td></tr>
<tr><td>ActiveStudent</td><td>(vi) <select class="hoa-select" name="cssa26q15a-vi"><option value=""></option><option>Boolean</option><option>Currency</option><option>Date</option><option>Integer</option><option>Text</option></select></td><td></td><td>1</td><td>Student is currently an active enrolled student (Y/N)</td><td>Y</td></tr>
</tbody></table>`,
          answer: { 'cssa26q15a-i': 'Text', 'cssa26q15a-ii': 'XXXNNN', 'cssa26q15a-iii': 'DD/MM/YYYY', 'cssa26q15a-iv': 'Integer', 'cssa26q15a-v': 'NN', 'cssa26q15a-vi': 'Boolean' },
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly completes ALL the options</td><td>2</td></tr>
<tr><td>Correctly completes THREE options</td><td>1</td></tr>
</tbody></table>
<p><strong>Suggested answer:</strong></p>
<ul>
<li>(i) Text</li>
<li>(ii) XXXNNN</li>
<li>(iii) DD/MM/YYYY</li>
<li>(iv) Integer</li>
<li>(v) NN</li>
<li>(vi) Boolean</li>
</ul>` },
        { type: 'sql', part: 'b', marks: 4,
          sqlAnswer: { orderBy: [[1, 'asc']], queries: [`SELECT FirstName, LastName FROM Student, Class, ClassEnrolment WHERE Student.StudentID = ClassEnrolment.StudentID AND Class.ClassID = ClassEnrolment.ClassID AND Student.ActiveStudent = 'Y' AND Class.Subject = 'Enterprise Computing' ORDER BY LastName ASC`] },
          question: `<p>Write an SQL query to display the first name and last name of all currently active students studying Enterprise Computing. Display the results in alphabetical order by last name.</p>`,
          setup: `CREATE TABLE Student (StudentID TEXT, FirstName TEXT, LastName TEXT, DateOfBirth TEXT, YearGroup INTEGER, ActiveStudent TEXT);
INSERT INTO Student VALUES ('JSM001','Jane','Smith','01/12/2010',11,'Y');
INSERT INTO Student VALUES ('CBI001','Colin','Bird','02/02/2010',11,'N');
INSERT INTO Student VALUES ('RLI001','Rocky','Lianni','07/11/2010',11,'Y');
INSERT INTO Student VALUES ('JAL001','Jasmine','Lee','05/06/2010',11,'Y');
CREATE TABLE Class (ClassID TEXT, Subject TEXT, Year INTEGER, Faculty TEXT);
INSERT INTO Class VALUES ('11SEN1_2026','Software Engineering',11,'Computing Studies');
INSERT INTO Class VALUES ('11ENC1_2026','Enterprise Computing',11,'Computing Studies');
INSERT INTO Class VALUES ('11ENS1_2026','English Standard',11,'English');
INSERT INTO Class VALUES ('11PHY1_2026','Physics',11,'Science');
CREATE TABLE ClassEnrolment (ClassEnrolmentID INTEGER, StudentID TEXT, ClassID TEXT, StartDate TEXT, EndDate TEXT);
INSERT INTO ClassEnrolment VALUES (1,'JSM001','11ENC1_2026','01/01/2026','31/12/2026');
INSERT INTO ClassEnrolment VALUES (2,'CBI001','11ENC1_2026','01/01/2026','31/12/2026');
INSERT INTO ClassEnrolment VALUES (3,'JAL001','11ENC1_2026','01/01/2026','31/12/2026');
INSERT INTO ClassEnrolment VALUES (4,'RLI001','11SEN1_2026','01/01/2026','31/12/2026');
INSERT INTO ClassEnrolment VALUES (5,'JSM001','11PHY1_2026','01/01/2026','31/12/2026');
INSERT INTO ClassEnrolment VALUES (6,'CBI001','11ENS1_2026','01/01/2026','31/12/2026');`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a correct SQL query</td><td>4</td></tr>
<tr><td>Provides a SQL query that addresses most of the requirements</td><td>3</td></tr>
<tr><td>Shows some understanding of the problem or SQL</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Suggested answer:</strong></p>
<pre class="hoa-code">SELECT    FirstName, LastName
FROM      Student, Class, ClassEnrolment
WHERE     Student.StudentID = ClassEnrolment.StudentID
          AND Class.ClassID = ClassEnrolment.ClassID
          AND Student.ActiveStudent = 'Y'
          AND Class.Subject = 'Enterprise Computing'
ORDER BY  LastName ASC</pre>` }
      ]
    },
    {
      number: '16', marks: 8, layout: 3,
      stimulus: `<p>An environmental organisation is developing an interactive dashboard to help local councils analyse recycling behaviours. The dashboard draws on bin collection data, community surveys and third-party environmental sensors.</p>
<p>It is intended to be shared with the public to encourage better sustainability practices. The company uses tools to analyse and visualise the data but has concerns about whether all the data being used is accurate and appropriate.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 4,
          question: `<p>Explain how Online Analytical Processing (OLAP) could be used to support the development of the environmental organisation’s interactive dashboard.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how OLAP could be used to support the development of the environmental organisation’s dashboard, with reference to the stimulus</td><td>4</td></tr>
<tr><td>Describes how OLAP could be used to support the development of the environmental organisation’s dashboard, with reference to the stimulus</td><td>3</td></tr>
<tr><td>Outlines OLAP<br>OR<br>Provides an example relevant to the stimulus</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>OLAP is an interactive tool that is used to analyse large amounts of data by organising the data into dimensions to quickly sort and summarise data. OLAP would allow the environmental organisation to explore the dataset from multiple perspectives, such as filtering by suburb, waste type or time period. This helps identify patterns and trends in recycling habits, like which areas recycle more or how habits change seasonally. These insights can then be visualised quickly and clearly using dashboards, charts or infographics that can be viewed by councils and the public. As OLAP makes it easier to summarise large volumes of data quickly and interactively, it could improve decision-making and communication for both councils and the public.</p>` },
        { type: 'text', part: 'b', marks: 4,
          question: `<p>Explain why it is important for the environmental organisation to assess data integrity when developing this data visualisation.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains why it is important for the environmental organisation to assess data integrity when developing this data visualisation</td><td>4</td></tr>
<tr><td>Describes a reason why it is important for the environmental organisation to assess data integrity when developing this data visualisation</td><td>3</td></tr>
<tr><td>Outlines a reason why it is important for the environmental organisation to assess data integrity when developing this data visualisation</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data integrity refers to the accuracy and consistency of the data contained in the data visualisation. It is important the environmental organisation assesses data integrity to ensure the dashboard presents accurate, reliable and ethical information. If the ownership of third-party data is unclear, they risk breaching copyright or using data without permission. If the source is unreliable, such as self-reported surveys or unverified sensors, the information may be biased or inaccurate. Without proper validation, errors or inconsistencies could mislead councils and the public. These risks could result in poor decision-making, reputational damage and reduced trust in the visualisation. Assessing data integrity ensures the final product supports meaningful insights and responsible action.</p>` }
      ]
    },
    {
      number: '17', marks: 6, layout: 3,
      stimulus: `<p>A farmer uses a farming expert system app on his iPad to answer questions about his crops and soil conditions. The expert system compares his inputs with saved farming facts on crop types, soil characteristics, weather patterns and known plant diseases. As new answers are entered, the system continually updates all related facts. The system reasons through the rules to diagnose pests and nutrient problems in the soil. It then gives clear advice and asks simple follow-up questions to help the farmer grow better crops and save money.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3,
          question: `<p>Describe how the key features of an expert system have been implemented in this farming system.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes how the knowledge base, inference engine and user interface have been implemented in the farming system</td><td>3</td></tr>
<tr><td>Outlines the implementation of knowledge base AND/OR inference engine AND/OR user interface</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Suggested answer:</strong></p>
<p>The key features of this expert system are the knowledge base, inference engine and user interface.</p>
<p>The knowledge base stores accurate information about the crops, information about crop pests and diseases, and rules such as if the leaves are yellow there is deficiency in the soil.</p>
<p>The inference engine performs the match, resolve and execute processes using forward and backward chaining. It uses the inputs from the farmer to compare them with the facts and rules in the knowledge base to provide a diagnosis.</p>
<p>The user interface is how the user interacts with the iPad. It asks the farmer questions about the plant and soil conditions, and shows results in the form of a diagnosis, i.e. plant is dying or images such as a healthy plant. The user interface must let the user enter information easily and be easy to understand.</p>` },
        { type: 'text', part: 'b', marks: 3,
          question: `<p>Distinguish between the truth maintenance techniques and ontology classification techniques used by inference engines in this expert system, providing a benefit of each.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Distinguishes between truth maintenance techniques and ontology classification techniques, outlining a benefit of each</td><td>3</td></tr>
<tr><td>Outlines the difference between truth maintenance techniques and ontology classification techniques</td><td>2</td></tr>
<tr><td>Identifies a feature of truth maintenance techniques or ontology classification techniques</td><td>1</td></tr>
</tbody></table>
<p><strong>Suggested answer:</strong></p>
<p>Truth maintenance systems are used by inference engines to ensure that when new information is added or existing information is revised, the system consistently updates all related facts. For example, in the farming expert system when the farmer enters new information, the system is updated with this new data and all related rules and actions are updated accordingly.</p>
<p>Ontology classification techniques are used by inference engines to organise knowledge into categories, defining relationships between them. This helps the system understand and reason about the data in a structured way. For example, in the farming expert system, ontology classification is used to structure the volumes of farming data into categories like crop types, soil characteristics and plant diseases. The classification will also create relationships between these data items to help the system make its recommendations and diagnosis.</p>
<p>Truth maintenance systems offer the benefit of ensuring the systems knowledge is accurate and up-to-date, while ontology classification techniques improve the system’s ability to understand and reason about complex domains.</p>` }
      ]
    },
    {
      number: '18', marks: 4, layout: 1,
      stimulus: `<p>A small used car dealership wants to use a spreadsheet to keep track of its sales and the commissions earned by each of its sales staff each month.</p>
<p>Sales staff receive a commission of 10% of the profits from each car they sell. If a car is sold for more than double its original trade-in price, then the sales staff receive a higher commission of 15% for that sale. If no profit is made on a sale, then the commission will be a flat rate of $50.00.</p>
<p>To further reward high-performing sales staff, a bonus is also added based on the commission earned from each sale, shown in the Bonus Calculation Table in the spreadsheet below.</p>
<table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr></thead><tbody>
<tr><th>1</th><td colspan="8" style="text-align:center"><strong>Sales for July 2026</strong></td></tr>
<tr><th>2</th><td><strong>StockID</strong></td><td><strong>Trade-In Price</strong></td><td><strong>Sale Date</strong></td><td><strong>Sale Price</strong></td><td><strong>Sold By</strong></td><td><strong>Profit</strong></td><td><strong>Commission</strong></td><td><strong>Bonus</strong></td></tr>
<tr><th>3</th><td>MAZ754</td><td>13500</td><td>1/7/2026</td><td>21500</td><td>Peter</td><td></td><td></td><td></td></tr>
<tr><th>4</th><td>TOY432</td><td>23000</td><td>5/7/2026</td><td>34600</td><td>Deborah</td><td>11600</td><td>1160</td><td>1000</td></tr>
<tr><th>5</th><td>FOR983</td><td>8000</td><td>10/7/2026</td><td>12990</td><td>Chloe</td><td>4990</td><td>499</td><td>0</td></tr>
<tr><th>6</th><td>PEU834</td><td>9900</td><td>10/7/2026</td><td>21400</td><td>Andrew</td><td>11500</td><td>1725</td><td>1500</td></tr>
<tr><th>7</th><td>TES315</td><td>21500</td><td>11/7/2026</td><td>28990</td><td>Andrew</td><td>7490</td><td>749</td><td>500</td></tr>
<tr><th>8</th><td>VOL174</td><td>11000</td><td>20/7/2026</td><td>16500</td><td>Alison</td><td>5500</td><td>550</td><td>500</td></tr>
<tr><th>9</th><td>REN432</td><td>3500</td><td>21/7/2026</td><td>9990</td><td>Amelia</td><td>6490</td><td>973.5</td><td>500</td></tr>
<tr><th>10</th><td>SUB953</td><td>1500</td><td>24/7/2026</td><td>4000</td><td>Peter</td><td>2500</td><td>375</td><td>0</td></tr>
<tr><th>11</th><td>MIT235</td><td>1000</td><td>24/7/2026</td><td>950</td><td>Peter</td><td>-50</td><td>50</td><td>0</td></tr>
<tr><th>12</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>13</th><td colspan="3" style="text-align:center"><strong>Bonus Calculation Table</strong></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>14</th><td><strong>Commission</strong></td><td><strong>Min</strong></td><td><strong>Bonus</strong></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>15</th><td>0-500</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>16</th><td>501-1000</td><td>501</td><td>500</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>17</th><td>1001-1500</td><td>1001</td><td>1000</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>18</th><td>1501-2000</td><td>1501</td><td>1500</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>19</th><td>&gt;= 2001</td><td>2001</td><td>2000</td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>`,
      items: [
        { type: 'spreadsheet',
          question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the required information will automatically be displayed when the sales figures are entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Enter your formulas in cells F3, G3 and H3.</p>`,
          seed: {
            cells: {
              A1: 'Sales for July 2026',
              A2: 'StockID', B2: 'Trade-In Price', C2: 'Sale Date', D2: 'Sale Price', E2: 'Sold By', F2: 'Profit', G2: 'Commission', H2: 'Bonus',
              A3: 'MAZ754', B3: 13500, C3: '1/7/2026', D3: 21500, E3: 'Peter',
              A4: 'TOY432', B4: 23000, C4: '5/7/2026', D4: 34600, E4: 'Deborah', F4: 11600, G4: 1160, H4: 1000,
              A5: 'FOR983', B5: 8000, C5: '10/7/2026', D5: 12990, E5: 'Chloe', F5: 4990, G5: 499, H5: 0,
              A6: 'PEU834', B6: 9900, C6: '10/7/2026', D6: 21400, E6: 'Andrew', F6: 11500, G6: 1725, H6: 1500,
              A7: 'TES315', B7: 21500, C7: '11/7/2026', D7: 28990, E7: 'Andrew', F7: 7490, G7: 749, H7: 500,
              A8: 'VOL174', B8: 11000, C8: '20/7/2026', D8: 16500, E8: 'Alison', F8: 5500, G8: 550, H8: 500,
              A9: 'REN432', B9: 3500, C9: '21/7/2026', D9: 9990, E9: 'Amelia', F9: 6490, G9: 973.5, H9: 500,
              A10: 'SUB953', B10: 1500, C10: '24/7/2026', D10: 4000, E10: 'Peter', F10: 2500, G10: 375, H10: 0,
              A11: 'MIT235', B11: 1000, C11: '24/7/2026', D11: 950, E11: 'Peter', F11: -50, G11: 50, H11: 0,
              A13: 'Bonus Calculation Table',
              A14: 'Commission', B14: 'Min', C14: 'Bonus',
              A15: '0-500', B15: 0, C15: 0,
              A16: '501-1000', B16: 501, C16: 500,
              A17: '1001-1500', B17: 1001, C17: 1000,
              A18: '1501-2000', B18: 1501, C18: 1500,
              A19: '>= 2001', B19: 2001, C19: 2000
            },
            bold: ['A1:H2', 'A13:C14'],
            center: ['A1:H1', 'A13:C13'],
            merge: ['A1:H1', 'A13:C13'],
            colWidths: { A: 110, B: 100, C: 90, D: 80, E: 80, F: 70, G: 95, H: 70 }
          },
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Completes the spreadsheet, addressing all the requirements</td><td>4</td></tr>
<tr><td>Completes the spreadsheet, addressing most of the requirements</td><td>3</td></tr>
<tr><td>Provides some correct information and an appropriate formula for the spreadsheet</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">F3: =D3-B3
G3: =IF(D3&gt;B3*2, F3*0.15, IF(D3&lt;=B3, 50, F3*0.10))
H3: =VLOOKUP(G3,$B$15:$C$19,2)</pre>
<p>Completed row 3 (MAZ754): Profit 8000, Commission 800, Bonus 500.</p>` }
      ]
    },
    {
      number: '19', marks: 3, layout: 3,
      stimulus: `<p>A veterinary clinic is expanding its business by offering a dog kennel service to provide temporary accommodation for dogs when their owners are away. A project team will develop an enterprise system to manage this new service.</p>`,
      items: [
        { type: 'text',
          question: `<p>Describe TWO tools that can be used by the project team to develop the requirements for the dog kennel service.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes TWO enterprise project tools to inform the requirements for the dog kennel service</td><td>3</td></tr>
<tr><td>Outlines one enterprise project tools to inform the requirements</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Two tools that can be used by the project team to develop the requirements for the dog kennel service are interviews and surveys. They can interview the key stakeholders such as end-users and decision-makers. Interviewing existing dog owner customers and the staff who would manage the dog kennel service will provide them with in-depth, qualitative data, by allowing them to elaborate on their needs and expectations of the new system.</p>
<p>Surveys can be used to gather information from more stakeholders. They may only be able to interview ten customers, but they can send the survey to all their customers, giving them a structured way to express their needs from the dog kennel service. Survey results can be used to prioritise requirements for the dog kennel service.</p>` }
      ]
    },
    {
      number: '20', marks: 3, layout: 3,
      stimulus: `<p>A logistics company uses an artificial intelligence-based route system to optimise delivery schedules. The system collects data from:</p>
<ul>
<li>GPS devices in delivery trucks</li>
<li>Online customer delivery requests</li>
<li>Real-time traffic and weather data</li>
</ul>`,
      items: [
        { type: 'text',
          question: `<p>Describe how the data collected is used by the intelligent system to improve the company’s operations.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes how intelligent systems uses TWO of the collected data areas to improve the company’s operations, with reference to the scenario</td><td>3</td></tr>
<tr><td>Outlines how intelligent systems uses ONE of the collected data areas to improve the company’s operations</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The intelligent system uses GPS data from delivery trucks to monitor their locations and travel times, customer delivery requests to determine delivery destinations and priorities, and real-time traffic and weather data to identify delays or hazards. The AI analyses this data to optimise delivery routes and schedules in real time, allowing drivers to avoid congestion and adjust routes as conditions change. This improves the company’s operations by increasing delivery efficiency, reducing delays and fuel use, and improving customer satisfaction.</p>` }
      ]
    },
    {
      number: '21', marks: 5, layout: 3,
      stimulus: `<p>An e-commerce company uses a decision-making system to determine what discount, if any, should be offered to customers who are browsing its website.</p>
<p>Returning customers are automatically offered a 5% discount.</p>
<p>For new customers, a discount is offered only if they show engagement with the website. New customers who have added items to their cart may receive a discount based on the value of their cart. If the cart value is more than $100, a 15% discount is offered; otherwise a 10% discount is offered.</p>
<p>New customers who have not added items to their cart may still receive a 10% discount if they have been browsing for more than 5 minutes. Customers who do not meet any of these conditions receive no discount.</p>`,
      items: [
        { type: 'drawing',
          question: `<p>Draw a decision tree to show how the system decides the discount offered to a browsing customer.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Constructs a substantially correct decision tree that includes all relevant decisions and outcomes</td><td>5</td></tr>
<tr><td>Constructs a decision tree that addresses most aspects of the system</td><td>4</td></tr>
<tr><td>Constructs a decision tree that includes some aspects of the system</td><td>3</td></tr>
<tr><td>Provides a diagram that shows some understanding of the system<br>OR<br>Identifies the key components of a decision tree</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/cssa2026/q21-sample-answer.png" alt="Sample decision tree: Returning Customer, Items in Cart, Cart Value, Browsing Time, Discount Applied"></p>
<ul>
<li>Returning customer – Yes → 5%</li>
<li>Returning customer – No, items in cart – Yes, cart value more than $100 → 15%</li>
<li>Returning customer – No, items in cart – Yes, cart value less than $100 → 10%</li>
<li>Returning customer – No, items in cart – No, browsing more than 5 minutes → 10%</li>
<li>Returning customer – No, items in cart – No, browsing less than 5 minutes → No discount</li>
</ul>
<p><em>Note: the sample tree leaves the boundaries out. By the stimulus, a cart of exactly &#36;100 gets 10% (“otherwise”) and browsing for exactly 5 minutes gets no discount, so the lower branches should read “&#36;100 or less” and “5 minutes or less”.</em></p>` }
      ]
    },
    {
      number: '22', marks: 5, layout: 3,
      stimulus: `<p>TCW Physio runs three clinics and currently uses a spreadsheet and email to manage bookings.</p>
<p>Management wants a simple booking and notes system within four weeks and has limited funds for implementation.</p>
<p>Two senior receptionists are confident with spreadsheet and database software and will build the first version themselves, so it exactly matches their workflow.</p>
<p>The IT team at TCW Physio will assist with data security and an SQL back-end but cannot spare developer time. Staff will review the system each Friday over four weeks and suggest improvements.</p>
<p>The first release must have two screens:</p>
<ul>
<li>Appointments List: date filter, therapist filter and search</li>
<li>Appointment Details: client name, service, booking details, notes</li>
</ul>`,
      items: [
        { type: 'text', part: 'a', marks: 3,
          question: `<p>Explain the development approach that will be used in this project.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the end-user development approach and its suitability for this project</td><td>3</td></tr>
<tr><td>Describes the end-user development approach and its suitability for this project</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The end-user development approach would be the most suitable approach for TCW Physio. TCW have domain expertise in their staff, who have a willingness to complete the project. With a short time frame and limited budget, these skilled end-users will be able to create the system to mirror their workflow and preferences, and it helps avoid misunderstandings and keeps the features closely aligned with actual workplace needs.</p>
<p>End-user development empowers those users to build and customise the solution quickly, avoiding delays waiting for scarce developers. The weekly reviews indicate an iterative cycle where staff prototype and refine features (e.g., filters on the Appointments List and buttons like Save/Back to List on Appointment Details). This approach delivers a tailored system rapidly, aligned to real tasks, with minimal cost.</p>` },
        { type: 'drawing', part: 'b', marks: 2,
          question: `<p>Design a user interface for the Appointment Details page. Clearly label all features.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Designs a user interface for the Appointment Details page with features labelled</td><td>2</td></tr>
<tr><td>Designs a user interface with some relevant features</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/cssa2026/q22b-sample-answer.png" alt="Sample Appointment Details screen with labelled text boxes, calendar date picker, drop-down lists and buttons"></p>
<p>Screen titled “PHYSIO – Appointment Details” with a Home button; Client (text box); Date (calendar date picker); Time, Therapist and Service (drop-down lists); Notes (text box); Back and Save buttons.</p>` }
      ]
    },
    {
      number: '23', marks: 7, layout: 3,
      stimulus: `<p>A national food delivery company collects large datasets from its daily operations, including order volumes, delivery times, customer ratings and operating costs across different regions.</p>
<p>To analyse this data, the company uses spreadsheets to create charts, tables, and formulas and creative design applications to develop interactive dashboards. These visualisations allow management to compare performance between regions, track changes over time and forecast future demand to support business decisions.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3,
          question: `<p>Describe how features of software contribute to a better understanding of datasets through data visualisation.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes how features of software are used to visualise data and improve understanding of datasets</td><td>3</td></tr>
<tr><td>Outlines how a software feature is used to represent data visually and assist in understanding the dataset</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Software features such as graphs, charts, tables and dashboards can visually represent large datasets, making information easier to interpret quickly. Spreadsheets can be used to automatically generate graphs and summaries. Interactive dashboards allow users to customise the visualisation by filtering and comparing data. Presenting data visually using an interactive dashboard reduces cognitive load by simplifying complex datasets, helping users recognise key information and relationships more efficiently.</p>` },
        { type: 'text', part: 'b', marks: 4,
          question: `<p>Explain how interactive data visualisation supports predictive data analytics and future enterprise decision-making. Support your answer with examples from the stimulus.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how enterprises are supported by interactive data visualisation when undertaking predictive data analytics future enterprise decision-making, with reference to the scenario</td><td>4</td></tr>
<tr><td>Describes how enterprises are supported by data visualisation when undertaking predictive data analytics future enterprise decision-making, with some reference to the scenario</td><td>3</td></tr>
<tr><td>Outlines how enterprises are supported by data visualisation when undertaking predictive data analytics future enterprise decision-making</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The company uses data visualisation tools, such as interactive dashboards and charts, to display large datasets in an accessible way. These dashboards allow management not only to see overall trends, such as peak order times and regional differences in delivery demand, but also to interact with the data and investigate specific areas in more detail. By exploring these patterns, the company identify patterns and trends and make predictions about future demand and optimise resources accordingly. For example, tracking real-time traffic and customer orders through the dashboards helps forecast delivery times and adjust routes, supporting more efficient scheduling and informed enterprise decision-making.</p>` }
      ]
    },
    {
      number: '24', marks: 5, layout: 3,
      stimulus: `<p>A health-tech company collects data from a mobile fitness app used by thousands of customers.</p>
<p>The app tracks a user’s daily activity levels, heart rate, sleep patterns and location data to provide personalised health recommendations. The company uses this data for research purposes, such as identifying trends in population health and developing new fitness programs.</p>
<p>Some data is shared with third-party partners for research and marketing purposes. Some users have expressed concern about how their personal information is being used.</p>`,
      items: [
        { type: 'text',
          question: `<p>Analyse the ethical implications that may arise from how the company’s enterprise computing system uses personal data for research purposes. Support your answer with examples from the scenario.</p>`,
          wordLimit: 120,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Analyses how aspects of the system’s use of personal data raise ethical concerns for research purposes, with reference to the scenario</td><td>5</td></tr>
<tr><td>Explains how aspects of the system’s use of personal data raise ethical concerns for research purposes, with some reference to the scenario</td><td>4</td></tr>
<tr><td>Describes ethical issues related to the use of personal data for research, with some reference to the scenario</td><td>3</td></tr>
<tr><td>Outlines general ethical considerations associated with using personal data for research</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The enterprise computing system collects sensitive personal data such as health metrics, sleep patterns, and location information. This raises privacy and confidentiality concerns, as users may not fully understand how extensively their personal data is stored, combined, and reused beyond the app’s primary function. The implication is that users may lose control over who can access their information and for what purpose.</p>
<p>The system retains large volumes of data over time and shares some of this data with third-party organisations for research and marketing. This creates ethical risks around data retention and ownership, particularly if third parties store the data for extended periods or use it in ways that could re-identify individuals. The relationship between the enterprise system and third-party partners increases the likelihood of misuse if governance and safeguards are unclear.</p>
<p>Sharing personal data externally also introduces potential security risks. If third-party systems are breached or lack adequate protections, users’ sensitive health and location data could be exposed, leading to harm such as identity misuse or loss of trust in digital health systems.</p>
<p>The system’s use of algorithms to analyse data for research and recommendations introduces the risk of bias, as users are not informed how data is processed or which assumptions underpin the models. This may result in skewed research outcomes or recommendations that do not accurately represent all user groups, reducing the ethical integrity of the research.</p>
<p>Finally, the use of personal data for marketing purposes raises concerns about unwarranted marketing, where users may be targeted based on sensitive health information. This highlights ethical implications related to informed consent and ownership of data, as users may not expect their personal health data to influence commercial advertising decisions.</p>` }
      ]
    },
    {
      number: '25', marks: 8, layout: 1,
      stimulus: `<p class="hoa-p-05em">The following slideshow was prepared by a student as part of a research project.</p>
<p class="hoa-p-1em"><em>Navigate the slideshow by clicking the forward and back arrows, or clicking on the individual dots to view specific slides.</em></p>
<div style="margin-top:10px;border:2px solid #bdf5ff;padding:2px;cursor:zoom-in"><slideshow images="['assets/cssa2026/q25-slide1.jpg','assets/cssa2026/q25-slide2.jpg','assets/cssa2026/q25-slide3.jpg','assets/cssa2026/q25-slide4.jpg','assets/cssa2026/q25-slide5.jpg','assets/cssa2026/q25-slide6.jpg','assets/cssa2026/q25-slide7.jpg']"></slideshow></div>`,
      items: [
        { type: 'text',
          question: `<p>Assess how machine learning and statistical modelling enable enterprises to analyse big data and make predictions. Support your answer with information from the stimulus.</p>`,
          wordLimit: 200,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td><ul><li>Assesses how machine learning AND statistical modelling enable enterprises to analyse big data AND make predictions</li><li>Supports answer with relevant examples from the stimulus</li></ul></td><td>8</td></tr>
<tr><td><ul><li>Describes how machine learning AND statistical modelling enable enterprises to analyse big data and/or make predictions</li><li>Supports answer with some examples from the stimulus</li></ul></td><td>6–7</td></tr>
<tr><td><ul><li>Shows an understanding of how machine learning and/or statistical modelling enable enterprises to analyse big data and/or make predictions</li><li>Refers to one or more of the examples in the stimulus</li></ul></td><td>4–5</td></tr>
<tr><td>Identifies features of machine learning and/or statistical modelling</td><td>2–3</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Expert systems such as machine learning along with statistical modelling enable organisations to analyse big data at scale and make defensible predictions that improve decisions. They surface patterns faster and with more consistency than manual analysis. Humans or further ML software can judge whether those patterns make sense in context.</p>
<p>Enterprises use statistical models to track and forecast share performance by looking at price, volume and simple market indicators. Models such as basic regression help analysts estimate likely directions and test relationships. On big datasets, this gives clearer, more objective signals for risk management and planning such as what-if scenarios. The strengths are transparency and stability, and it can be easier to explain decisions to non-technical stakeholders. However, models can be wrong, especially if fed low-quality data, and may over-simplify complex market behaviour. Ethical issues also arise, as heavy reliance on automated signals can create an information bubble, and poor data governance risks leaking sensitive trading information. As seen in the stimulus, statistical modelling is actively used to determine buyer patterns and stock decisions for a company. Having this accurate data allows companies to save money by not overstocking on products and staying ahead of buying patterns when appropriate by making accurate predictions on buyer habits.</p>
<p>Neural networks are a type of machine learning. They learn patterns in medical images (e.g. chest X-rays, skin lesions) to flag likely abnormalities for a clinician to review first. Trained on thousands of labelled images, they can recognise subtle features faster than a human on a busy shift, reducing time to treatment and helping hospitals prioritise scarce resources. On big data, they continue to improve as more examples are seen. Benefits include earlier detection, more consistent triage, and support for rural or understaffed clinics. As seen in the stimulus this reinforcement learning/training allows accuracy to be increased. Limits still remain, however. Models can reflect bias if training images under-represent certain groups e.g. genders/race. Explainability is weaker than simpler methods as neural networks internal decision making is still mostly unknown to its creators. Data privacy must be protected from collection through storage and sharing.</p>
<p>Both approaches turn big data into usable predictions by allowing volume, velocity and variety to be analysed in ways that were previously not possible or required excessive resources to accomplish. To a large extent, the best outcomes come from combining the two processed together with sound governance, including, clean data pipelines, validation on fresh cases, human oversight, and clear escalation when predictions are uncertain.</p>
<p>When combined machine learning acts as the tool for handling large sometime messy datasets, spotting complex, non-linear patterns and producing fast predictions at scale. Statistical modelling explains what those patterns mean. It clarifies relationships, quantifies uncertainty and tests assumptions. In practice, ML helps enterprises act now (who to flag, what to recommend), while statistical models help them understand why and how much. Used together, organisations both predict and explain.</p>
<p><em>Note: two points in the CSSA sample answer (and the stimulus slide titled “Expert Systems”) are inaccurate. Machine learning is not a type of expert system: an expert system reasons with rules written by human experts (knowledge base + inference engine), whereas machine learning learns its model from data. Also, neural networks trained on thousands of labelled images use supervised learning, not reinforcement learning (which learns from rewards for actions).</em></p>` }
      ]
    }
  ],
  figures: [
    { out: 'assets/cssa2026/q25-slide1.jpg', file: 'cssa2026-q.pdf', page: 23, box: [81, 199, 826, 612] },
    { out: 'assets/cssa2026/q25-slide2.jpg', file: 'cssa2026-q.pdf', page: 23, box: [88, 624, 833, 1037] },
    { out: 'assets/cssa2026/q25-slide3.jpg', file: 'cssa2026-q.pdf', page: 24, box: [95, 186, 834, 605] },
    { out: 'assets/cssa2026/q25-slide4.jpg', file: 'cssa2026-q.pdf', page: 24, box: [96, 614, 837, 1033] },
    { out: 'assets/cssa2026/q25-slide5.jpg', file: 'cssa2026-q.pdf', page: 25, box: [81, 173, 824, 587] },
    { out: 'assets/cssa2026/q25-slide6.jpg', file: 'cssa2026-q.pdf', page: 25, box: [86, 600, 830, 1010] },
    { out: 'assets/cssa2026/q25-slide7.jpg', file: 'cssa2026-q.pdf', page: 26, box: [94, 183, 835, 605] },
    { out: 'assets/cssa2026/q21-sample-answer.png', file: 'cssa2026-a.pdf', page: 16, box: [80, 452, 875, 832] },
    { out: 'assets/cssa2026/q22b-sample-answer.png', file: 'cssa2026-a.pdf', page: 18, box: [105, 315, 875, 915] }
  ]
});
