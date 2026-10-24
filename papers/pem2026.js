registerExam({
  id: 'pem2026',
  title: 'PEM 2026 Enterprise Computing Trial HSC Examination',
  source: 'PEM',
  year: 2026,
  kind: 'trial',
  readingMinutes: 10,
  workingMinutes: 140,
  totalMarks: 80,
  coverNotes: `<p><strong>General Instructions</strong></p>
<ul>
<li>Reading time – 10 minutes</li>
<li>Working time – 2 hours and 20 minutes</li>
<li>Draw diagrams using pencil</li>
</ul>
<p><strong>Section I – Objective Responses</strong></p>
<ul>
<li>20 marks</li>
<li>Attempt Questions 1–15</li>
<li>Allow about 25 minutes for this section</li>
</ul>
<p><strong>Section II – Short Answer Responses</strong></p>
<ul>
<li>60 marks</li>
<li>Attempt Questions 16–25</li>
<li>Allow about 1 hour and 55 minutes for this section</li>
<li>If you include diagrams in your answer, ensure that they are clearly labelled.</li>
</ul>`,
  groups: [
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which option best explains the difference between qualitative and quantitative data in the context of data analysis?</p>`,
          options: [
            `Qualitative data is based on measurable quantities, while quantitative data focuses on descriptive characteristics.`,
            `Quantitative data includes numerical values that can be analysed statistically, whereas qualitative data captures descriptive information such as opinions or experiences.`,
            `Qualitative data is always collected through surveys, while quantitative data is collected through observation only.`,
            `Quantitative data describes qualities and characteristics, while qualitative data is used for calculations and measurements.`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>An employee receives a message on a social media platform from a user claiming to be their manager. The message asks for sensitive company information. What type of social networking vulnerability is being exploited in this scenario?</p>`,
          options: [
            `Password reuse`,
            `Malware distribution`,
            `Spear Phishing attack`,
            `Network interception`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>In the context of analytic tools, which option is <u>NOT</u> a purpose of data visualisation?</p>`,
          options: [
            `Revealing patterns and trends within datasets`,
            `Improving the clarity and understanding of complex data`,
            `Increasing the capacity for storing large volumes of data`,
            `Communicating insights through visual representations`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>What is the primary benefit of using a pivot table within a spreadsheet application?</p>`,
          options: [
            `It automatically converts raw data into charts and graphs suitable for presentation.`,
            `It removes duplicate and unnecessary data to improve accuracy and reduce file size.`,
            `It allows users to reorganise and summarise large datasets to identify patterns and trends.`,
            `It synchronises spreadsheet data with external databases in real time.`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Some decision-making systems operate by applying a clearly defined set of rules to reach an outcome without requiring judgement. What type of problem does this describe?</p>`,
          options: [
            `Semi-structured`,
            `Unstructured`,
            `Structured`,
            `Heuristic`
          ],
          answer: 2,
          guide: `<p>Answer: B (as given in the published marking guidelines).</p>
<p><em>Note: a problem solved by applying a clearly defined set of rules without judgement is normally described as a <strong>structured</strong> problem (C). The published key gives B.</em></p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>In automated production environments, how are sensors and actuators commonly used together?</p>`,
          options: [
            `To secure data by encrypting communications between systems`,
            `To collect and respond to physical conditions within machinery in real time`,
            `To store employee records and track workforce attendance`,
            `To manage marketing data such as customer rewards and purchasing trends`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>During the early stages of system development, a team builds a working model to test ideas and gather feedback. What is the main purpose of this approach?</p>`,
          options: [
            `To produce a finished system ready for deployment to users`,
            `To explore and clarify system requirements before full development begins`,
            `To record and present all research findings to stakeholders`,
            `To demonstrate that the system has undergone complete testing across all scenarios`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 3,
      stimulus: `<p>The Data Flow Diagram below represents a library borrowing system.</p>
<p><img src="assets/pem2026/q8-dfd.png" alt="Data flow diagram: Student, Borrow Book and Library Database with book details and confirmation flows"></p>`,
      items: [
        { type: 'mcq',
          question: `<p>Which option correctly identifies each component?</p>`,
          options: [
            `<table class="hoa-table-normal"><thead><tr><th>External Entity</th><th>Process</th><th>Data Store</th><th>Data Flow (Input)</th><th>Data Flow (Output)</th></tr></thead><tbody><tr><td>Student</td><td>Borrow Book</td><td>Library Database</td><td>book details</td><td>confirmation</td></tr></tbody></table>`,
            `<table class="hoa-table-normal"><thead><tr><th>External Entity</th><th>Process</th><th>Data Store</th><th>Data Flow (Input)</th><th>Data Flow (Output)</th></tr></thead><tbody><tr><td>Library Database</td><td>Borrow Book</td><td>Student</td><td>confirmation</td><td>book details</td></tr></tbody></table>`,
            `<table class="hoa-table-normal"><thead><tr><th>External Entity</th><th>Process</th><th>Data Store</th><th>Data Flow (Input)</th><th>Data Flow (Output)</th></tr></thead><tbody><tr><td>Student</td><td>Library Database</td><td>Borrow Book</td><td>book details</td><td>confirmation</td></tr></tbody></table>`,
            `<table class="hoa-table-normal"><thead><tr><th>External Entity</th><th>Process</th><th>Data Store</th><th>Data Flow (Input)</th><th>Data Flow (Output)</th></tr></thead><tbody><tr><td>Borrow Book</td><td>Student</td><td>Library Database</td><td>confirmation</td><td>book details</td></tr></tbody></table>`
          ],
          answer: 1,
          guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '9', marks: 2, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following are examples of devices used in the Internet of Me (IoMe)? (Select all that apply)</p>`,
          options: [
            `Wearable continuous glucose monitors`,
            `Personalised sleep tracking device worn overnight`,
            `Automated watering systems used in agriculture`,
            `Digital Projector allowing wireless connection`,
            `Roadside cameras used by Police to monitor vehicle speed`,
            `Industrial robots used in automated manufacturing`,
            `Personal fitness trackers that record activity levels`,
            `Smart hearing aids that automatically adjust sound and collect personalised data`
          ],
          answer: [1, 2, 7, 8],
          guide: `<p>Answer: A, B, G, H (2 marks)</p>` }
      ]
    },
    {
      number: '10', marks: 2, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following practices contribute to protecting data within an enterprise system? (Select all that apply)</p>`,
          options: [
            `Transferring sensitive data over unsecured public networks`,
            `Applying encryption to stored data and during transmission`,
            `Regularly installing system updates and security patches`,
            `Keeping all backup copies in a single location for ease of access`,
            `Assigning user permissions based on roles and responsibilities`,
            `Maintaining multiple backups across different storage types and locations`,
            `Storing login details in a browser for accounts without multi-factor authentication`,
            `Sharing generic user accounts among staff to simplify access`
          ],
          answer: [2, 3, 5, 6],
          guide: `<p>Answer: B, C, E, F (2 marks)</p>` }
      ]
    },
    {
      number: '11', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>In an iterative development process, what is the typical outcome at the end of each development cycle?</p>`,
          options: [
            `The system is completed and delivered to the client for final use`,
            `The project is restarted to correct earlier design decisions`,
            `User and stakeholder feedback is reviewed to refine and improve the next version`,
            `A new development team is assigned to continue the project`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '12', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which <u>one</u> of the following system development approaches would be appropriate for a web-based system which regularly obtains and acts on live feedback?</p>`,
          options: [
            `Waterfall`,
            `Prototyping`,
            `Agile`,
            `End-user`,
            `Outsourcing`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '13', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each description with its correct concept.</p>`,
          rowHeader: 'Description',
          columns: ['A – Data Types', 'B – Computational Thinking', 'C – Information', 'D – Data Sampling', 'E – Systems Thinking', 'F – Informatics'],
          rows: [
            `1. Analysing a subset of dataset to determine meaningful information.`,
            `2. The science of processing data for storage and retrieval.`,
            `3. A process in which a problem is analysed and solved so that a human, machine or computer can effectively implement the solution.`,
            `4. The presentation of data in a manner that is readily understood.`,
            `5. An understanding of how related objects or components interact with each other.`,
            `6. String/text, character, integer floating point or real, date and time, boolean.`
          ],
          answer: [4, 6, 2, 3, 5, 1],
          guide: `<p>Answer: 1 – D, 2 – F, 3 – B, 4 – C, 5 – E, 6 – A (2 marks)</p>` }
      ]
    },
    {
      number: '14', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each description with its correct concept.</p>`,
          rowHeader: 'Description',
          columns: ['A – Visualisation', 'B – Dataset', 'C – User Interface (UI)', 'D – Artificial Intelligence', 'E – Automation', 'F – Hardware'],
          rows: [
            `1. A collection of numbers or values relating to a particular subject.`,
            `2. The presentation of data or information through pictures or graphics to help the intended audience understand.`,
            `3. The collection of physical components that constitute a computer system, all of which are tangible objects.`,
            `4. The means by which users interact with software, this usually comprises fields for text and number entry, mouse pointers and buttons.`,
            `5. Intelligence demonstrated by machines. Sometimes called machine intelligence.`,
            `6. The process of transforming and manipulating data that does not require user intervention.`
          ],
          answer: [2, 1, 6, 3, 4, 5],
          guide: `<p>Answer: 1 – B, 2 – A, 3 – F, 4 – C, 5 – D, 6 – E (2 marks)</p>` }
      ]
    },
    {
      number: '15', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each symbol displayed bellow with their correct name.</p>`,
          rowHeader: 'Symbol',
          columns: ['A – Manual Operation', 'B – Edge', 'C – Internet', 'D – Paper Document', 'E – Wireless device', 'F – Online Input'],
          rows: [
            `1 <img src="assets/pem2026/q15-symbol1.png" alt="Symbol 1">`,
            `2 <img src="assets/pem2026/q15-symbol2.png" alt="Symbol 2">`,
            `3 <img src="assets/pem2026/q15-symbol3.png" alt="Symbol 3">`,
            `4 <img src="assets/pem2026/q15-symbol4.png" alt="Symbol 4">`,
            `5 <img src="assets/pem2026/q15-symbol5.png" alt="Symbol 5">`,
            `6 <img src="assets/pem2026/q15-symbol6.png" alt="Symbol 6">`
          ],
          answer: [6, 3, 1, 2, 5, 4],
          guide: `<p>Answer: 1 – F, 2 – C, 3 – A, 4 – B, 5 – E, 6 – D (2 marks)</p>` }
      ]
    },
    {
      number: '16', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>Define data bias.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a correct definition of data bias</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data bias is a systematic error in a dataset that produces results that are not representative of the true population or situation. It occurs when certain groups or values are over, or under-represented, which can lead to inaccurate or unfair conclusions.</p>` }
      ]
    },
    {
      number: '17', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Compare and contrast data swamp and data warehouse.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Compares and contrasts data swamp and data warehouse</td><td>3</td></tr>
<tr><td>Compares OR contrasts, not both</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Similarities</th><th>Differences</th></tr></thead><tbody>
<tr><td>Both store large volumes of data for analysis and decision-making.</td><td>A data warehouse is structured, organised, and curated, whereas a data swamp is unstructured, disorganised, and difficult to manage.</td></tr>
<tr><td>Both can contain data from multiple sources.</td><td>Data in a warehouse is cleaned, validated, and optimised for queries; data in a swamp is often raw, inconsistent, and incomplete.</td></tr>
<tr><td>Both can support business intelligence and reporting.</td><td>Warehouses are reliable and high-quality sources of information; swamps can lead to misleading insights due to poor data quality.</td></tr>
<tr><td>Both may require storage solutions and management tools.</td><td>Accessing and analysing data in a warehouse is efficient and systematic, while a swamp it is time-consuming &amp; error-prone</td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '18', marks: 14, layout: 3,
      stimulus: `<p>SportSmart is a large sporting retail company. They have recently expanded their operations and now collect extensive customer and product data from website interactions, mobile app usage, warehouse sensors and delivery tracking systems. To improve decision making, the company is planning to upgrade its data infrastructure and analytic processes.</p>
<p>Use the scenario above for questions <strong>18 (a), (b), (c) and (d)</strong></p>`,
      items: [
        { type: 'text', part: 'a', marks: 4, wordLimit: 100,
          question: `<p>SportSmart is considering the use of a data warehouse to manage its growing information needs. Identify and outline how the three components of Big Data will impact on SportSmarts decision to use a data warehouse.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly identifies all three components of Big Data (Volume, Velocity and Variety), clearly outlining how each component impacts SportSmart’s decision to use a data warehouse with explicit links to the scenario</td><td>4</td></tr>
<tr><td>Correctly identifies all three components, with adequate outline of impact for most components, with limited or no reference to the scenario<br><strong>OR</strong><br>Correctly identifies two components and clearly outlines their impact with strong links to the scenario</td><td>3</td></tr>
<tr><td>Identifies one or more relevant components with limited outline of impact. May make limited reference to the scenario</td><td>2</td></tr>
<tr><td>Identifies some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The three components of Big Data that impact SportSmart’s decision to use a data warehouse are i) Volume, ii) Velocity and Variety.</p>
<p><strong>Volume</strong> impacts SportSmart because the company now collects extensive data from website interactions, mobile app usage, warehouse sensors and delivery tracking systems. As this data continues to grow, traditional databases may become inefficient for storing and analysing it. This may influence SportSmart’s decision to use a data warehouse because it can centralise and manage large volumes of historical and current data, improving reporting and supporting more informed business decisions.</p>
<p><strong>Velocity</strong> impacts SportSmart because data from warehouse sensors, delivery tracking systems and online interactions is generated continuously and at high speed. This may influence the decision to use a data warehouse because SportSmart needs infrastructure capable of processing and integrating data quickly so managers can respond faster to inventory issues, delivery delays and changing customer behaviour.</p>
<p><strong>Variety</strong> impacts SportSmart because the company collects different forms of data, including structured sales data, semi-structured app and tracking data, and potentially unstructured customer interaction data. This may influence the decision to use a data warehouse because it can integrate these diverse data sources into a single repository, making analysis more consistent and improving decision making across the business.</p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>SportSmart plans to use data mining to identify customer purchase patterns and predict future demand. Discuss data mining in this context.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Discuss positive and negative uses of data mining in the prediction of future demands. Must link to the scenario.</td><td>3</td></tr>
<tr><td>Describes only positive OR a negative aspect of data mining.</td><td>2</td></tr>
<tr><td>Identifies some relevant insight into use of data mining.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data mining allows SportSmart to analyse large datasets from customer purchases, website activity, mobile app usage and delivery systems to identify patterns and trends. This can help the company discover issues such as frequently co-purchased products or seasonal demand fluctuations.</p>
<p>On the positive side, data mining can significantly improve SportSmart’s decision making. It can identify customer purchase patterns that are not easily visible through manual analysis, allowing the company to personalise marketing and optimise product recommendations. It can also predict future demand, improve inventory management and reduce the risk of overstocking or stock shortages.</p>
<p>However, there are limitations and risks. The accuracy of data mining depends heavily on the quality and completeness of the data collected. If SportSmart’s data from different systems (e.g. sensors, app usage, and online purchases) is inconsistent or incomplete, predictions may be unreliable. There are also potential issues around data privacy and ethical use of customer behaviour data, which may affect customer trust and compliance with regulations.</p>` },
        { type: 'text', part: 'c', marks: 3, wordLimit: 80,
          question: `<p>SportSmart sponsors an annual Athletics Camp. In addition to using a spreadsheet to analyse fitness results, several other enterprise system digital tools are used during the Research and Planning component. Identify the tools SportSmart would use to meet both the financial constraints and agreed deadlines; and outline how they will assist in these areas.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes relevant tools SportSmart could utilise to manage both financial constraints and agreed deadlines.</td><td>3</td></tr>
<tr><td>Outlines tools SportSmart could utilise to manage both financial constraints and agreed deadlines.</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>SportSmart could use a budget, developed using a financial management system, to meet the financial requirements of the annual Athletics Camp. During the research and planning stage, estimated costs such as venue hire, equipment, coaching staff and catering are entered into the budget to ensure total expenditure remains within available funds. Actual costs are tracked against the budget to identify overspending early, allowing SportSmart to adjust and maintain financial control.</p>
<p>To meet agreed deadlines, SportSmart could use project management software to create a time action plan, represented by a Gantt chart. The Gantt chart breaks the project into tasks such as planning, bookings, registrations and final preparation, each with defined start and end dates. This allows SportSmart to monitor progress, identify task dependencies and ensure all activities are completed on time for the Athletics Camp.</p>` },
        { type: 'drawing', part: 'd', marks: 4,
          question: `<p>SportSmart is developing a new online checkout system to improve the customer purchasing experience. The form must allow the customer to select their product of choice, choose a payment type, enter a delivery address, and capture personal details needed to determine demographics, gender and age. Design a user interface for this purpose, clearly labelling all features.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Designs a suitable user interface that captures all the required data using correct features. Features are correctly labeled.</td><td>4</td></tr>
<tr><td>Designs a suitable user interface that captures all required data using correct features but does not label, or incorrect labels features.<br><strong>OR</strong><br>Designs a suitable user interface that captures most of the required data using correct features. May or may not include correct labelling.</td><td>3</td></tr>
<tr><td>Designs a user interface that includes some relevant features.</td><td>2</td></tr>
<tr><td>Identifies some relevant information.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/pem2026/q18d-sample-answer.png" alt="Sample online checkout screen design with labelled dropdown menu, textboxes, input masks, radio buttons and button"></p>` }
      ]
    },
    {
      number: '19', marks: 12, layout: 1,
      stimulus: `<p>GreenPaws Veterinary Clinic currently stores patient, owner, treatment and payment information in a single flat file database. As the clinic has grown, the flat file database has presented several challenges, specifically around data duplication. To improve efficiency and accuracy, the clinic is reviewing its current data structure.</p>
<p>The table below shows an extract from the flat file database currently in use. Use this flat file database when answering questions <strong>19 (a), (b), and (c)</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Pet Type</th><th>Pet Name</th><th>Pet DOB</th><th>Pet Gender</th><th>Owner First Name</th><th>Owner Surname</th><th>Date of treatment</th><th>Type of treatment</th><th>Account Paid</th></tr></thead><tbody>
<tr><td>Dog</td><td>Oscar</td><td>03/10/22</td><td>Male</td><td>Sam</td><td>Hayes</td><td>03/10/22</td><td>Dental</td><td>Yes</td></tr>
<tr><td>Cat</td><td>Kim</td><td>02/03/23</td><td>Male</td><td>Luke</td><td>Mendes</td><td>02/03/23</td><td>Checkup</td><td>No</td></tr>
<tr><td>Dog</td><td>Frankie</td><td>13/11/23</td><td>Female</td><td>Ava</td><td>Zhang</td><td>13/11/23</td><td>Dental</td><td>Yes</td></tr>
<tr><td>Dog</td><td>Bluey</td><td>06/08/20</td><td>Female</td><td>Priya</td><td>Sharma</td><td>18/12/24</td><td>Surgery</td><td>Yes</td></tr>
<tr><td>Bird</td><td>Dory</td><td>07/05/21</td><td>Male</td><td>Li</td><td>Mei</td><td>09/07/25</td><td>Checkup</td><td>No</td></tr>
</tbody></table>`,
      items: [
        { type: 'drawing', part: 'a', marks: 5,
          question: `<p>Draw a schema which normalises the database above. The schema should be labelled and include correct symbols and relationships.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Accurately normalises the flat file database through the drawing of an effective schema which removes all data redundancies, is accurately labelled, including correct relationship types, PK, FK and necessary fields without the addition of unnecessary content</td><td>5</td></tr>
<tr><td>Normalises the flat file database through the drawing of a schema which removes most of the data redundancy. The schema should be labeled, and relationships correct, but may contain unnecessary content, and/or schema solution is not the most effective solution</td><td>4</td></tr>
<tr><td>Normalises the flat file database through the drawing of a schema which may include minor errors or oversights</td><td>3</td></tr>
<tr><td>Attempts to normalise the flat file database; however, includes several prominent errors or oversights</td><td>2</td></tr>
<tr><td>Identifies some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/pem2026/q19a-sample-answer.png" alt="Sample schema: PetTBL (PetID PK, Name, Type, DOB, Gender) 1-to-many CheckupTBL (CheckupID PK, CheckupDate, Pet FK, Owner FK, Treatment, Paid) many-to-1 OwnerTBL (OwnerID PK, FirstName, Surname, ContactDetails)"></p>
<p>PetTBL (PetID (PK), Name, Type, DOB, Gender) — 1 : many — CheckupTBL (CheckupID (PK), CheckupDate, Pet (FK), Owner (FK), Treatment, Paid) — many : 1 — OwnerTBL (OwnerID (PK), FirstName, Surname, ContactDetails)</p>` },
        { type: 'sql', part: 'b', marks: 4,
          sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT OwnerFirstName, OwnerSurname, PetName, PetDOB FROM FlatFile WHERE PetType = 'Dog' ORDER BY PetName ASC`] },
          question: `<p>The following shows the output from the GreenPaws Veterinary Clinic database after an SQL query was run.</p>
<p style="margin-left:2em"><em>Priya Sharma, <u>psharma@gmail.com</u>, Bluey, 6/8/20<br>Ava Zhang, <u>ahang@gmail.com</u>, Frankie, 13/11/23<br>Sam Hayes, <u>shayes@gmail.com</u>, Oscar, 3/10/22</em></p>
<p>Construct the SQL query that would have provided these results.</p>
<p><em>(Practice note: the SQL editor contains only the flat file extract shown, as table <code>FlatFile</code>; it does not include owner email addresses.)</em></p>`,
          setup: `CREATE TABLE FlatFile (PetType TEXT, PetName TEXT, PetDOB TEXT, PetGender TEXT, OwnerFirstName TEXT, OwnerSurname TEXT, DateOfTreatment TEXT, TypeOfTreatment TEXT, AccountPaid TEXT);
INSERT INTO FlatFile VALUES ('Dog','Oscar','03/10/22','Male','Sam','Hayes','03/10/22','Dental','Yes');
INSERT INTO FlatFile VALUES ('Cat','Kim','02/03/23','Male','Luke','Mendes','02/03/23','Checkup','No');
INSERT INTO FlatFile VALUES ('Dog','Frankie','13/11/23','Female','Ava','Zhang','13/11/23','Dental','Yes');
INSERT INTO FlatFile VALUES ('Dog','Bluey','06/08/20','Female','Priya','Sharma','18/12/24','Surgery','Yes');
INSERT INTO FlatFile VALUES ('Bird','Dory','07/05/21','Male','Li','Mei','09/07/25','Checkup','No');`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly writes an SQL with no errors that produces the required results</td><td>4</td></tr>
<tr><td>Writes an SQL with minimal errors or oversite</td><td>3</td></tr>
<tr><td>Attempts to write an SQL showing some understanding; however, may include some errors and structural oversites</td><td>2</td></tr>
<tr><td>Identifies some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<pre class="hoa-code"><strong>SELECT</strong> Owner.FirstName, Owner.Surname, Owner.Email, Pet.Petname, Pet.DOB
<strong>FROM</strong> Owner, Pet
<strong>WHERE</strong> Pet.Type = ‘Dog’
<strong>ORDER BY</strong> Pet.Name ASC</pre>` },
        { type: 'html', part: 'c', marks: 3,
          question: `<p>Below is a partially completed Data Dictionary for the GreenPaws Veterinary Clinic relational database. Identify missing content for cells labelled A, B, C, D, E and F.</p>
<table class="hoa-table-normal"><thead><tr><th>Field Name</th><th>Data Type</th><th>Data Format</th><th>Field Size</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>Treatment ID</td><td><strong>A</strong> <input class="hoa-input" type="text" name="pem26q19c-A"></td><td>XXXNNNN</td><td>7</td><td>Unique field</td><td>dog1190</td></tr>
<tr><td>Pet Name</td><td>Text</td><td>XXX…XXX</td><td>25</td><td>Name of pet</td><td>Bluey</td></tr>
<tr><td>Owner Name</td><td><strong>B</strong> <input class="hoa-input" type="text" name="pem26q19c-B"></td><td>XXX…XXX</td><td>25</td><td>Owner FirstName</td><td>Priya</td></tr>
<tr><td>Treatment Date</td><td><strong>C</strong> <input class="hoa-input" type="text" name="pem26q19c-C"></td><td>DD/MM/YY</td><td><strong>D</strong> <input class="hoa-input" type="text" name="pem26q19c-D"></td><td>Treatment date</td><td>18/12/24</td></tr>
<tr><td>Treatment Type</td><td>Text</td><td>XXX…XXX</td><td>25</td><td>Treatment type</td><td>Surgery</td></tr>
<tr><td>Account paid</td><td><strong>E</strong> <input class="hoa-input" type="text" name="pem26q19c-E"></td><td>XXX</td><td><strong>F</strong> <input class="hoa-input" type="text" name="pem26q19c-F"></td><td>Yes or No</td><td>Yes</td></tr>
</tbody></table>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly identifies all five</td><td>3</td></tr>
<tr><td>Correctly identifies two to four</td><td>2</td></tr>
<tr><td>Identifies one</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Field Name</th><th>Data Type</th><th>Data Format</th><th>Field Size</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>Treatment ID</td><td><strong>TEXT</strong></td><td>XXXNNNN</td><td>7</td><td>Unique field</td><td>dog1190</td></tr>
<tr><td>Pet Name</td><td>Text</td><td>XXX…XXX</td><td>25</td><td>Name of pet</td><td>Bluey</td></tr>
<tr><td>Owner Name</td><td><strong>TEXT</strong></td><td>XXX…XXX</td><td>25</td><td>Owner FirstName</td><td>Priya</td></tr>
<tr><td>Treatment Date</td><td><strong>DATE</strong></td><td>DD/MM/YY</td><td><strong>8</strong></td><td>Treatment date</td><td>18/12/24</td></tr>
<tr><td>Treatment Type</td><td>Text</td><td>XXX…XXX</td><td>25</td><td>Treatment type</td><td>Surgery</td></tr>
<tr><td>Account paid</td><td><strong>Boolean</strong></td><td>XXX</td><td>3</td><td>Yes or No</td><td>Yes</td></tr>
</tbody></table>
<p>A = TEXT, B = TEXT, C = DATE, D = 8, E = Boolean, F = 3</p>` }
      ]
    },
    {
      number: '20', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Define data integrity and outline its importance within the design of database management systems.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides both a definition of data integrity and an outline of its importance</td><td>3</td></tr>
<tr><td>Provides a definition of data integrity</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data integrity refers to the accuracy, consistency, and reliability of data. It ensures that the information entered, maintained, and retrieved from a system remains correct, complete, and unaltered except by authorised processes.</p>` }
      ]
    },
    {
      number: '21', marks: 4, layout: 1,
      stimulus: `<p><img src="assets/pem2026/q21-dashboard.jpg" alt="Example executive performance data dashboard with KPI tiles, bar charts, area chart, donut chart and a sales team table"></p>
<p style="text-align:center"><em>Image generated using Adobe Firefly (Adobe Inc.), April 2026</em></p>`,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>Explain how User experience (UX) design principles enhance the effectiveness of data visualisations. You may refer to the following example of a data dashboard to assist your response.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains the cause and effect key UX design principles have on the effectiveness of data visualisation</td><td>4</td></tr>
<tr><td>Explains the cause and effect UX principles have on data visualisation, but does not prioritise the key design principles<br><strong>OR</strong><br>Describes the impact of key UX design principles on data visualisation</td><td>3</td></tr>
<tr><td>Outlines the impact of UX design principles on data visualisation</td><td>2</td></tr>
<tr><td>Identifies and or shows some understanding of UX design principles</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data visualisations are most effective when guided by UX design principles, because these principles act as the cause that shapes how clearly and interactively information is presented. For example, the principle of consistency in colours, labels, and layouts allows the viewer to easily recognise categories and comparisons, which has the effect of reducing confusion and enhancing comprehension. Likewise, the principle of simplicity causes unnecessary detail to be removed, with the effect of making complex data more digestible and reducing cognitive load. By basing visualisations on interactivity and personalisation, UX design causes users to feel more connected to the data, which has the effect of making the information easier to interpret and more meaningful.</p>
<p>The application of UX design also assists data visualisations to be more engaging, personalised, and memorable for the intended audience. For instance, the use of contrast and hierarchy in dashboards causes attention to be drawn to the most important values, with the effect of supporting faster and more accurate decision-making. Features such as nudging and the use of cookies cause the system to adapt to the user’s behaviours, which has the effect of creating a personalised feel and encouraging repeat engagement. Overall, UX design principles act as the cause, while the effect is a positive experience where users not only understand the data but are happy to return to it and recommend it to others.</p>` }
      ]
    },
    {
      number: '22', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Describe one way an intelligent system uses data to support automated decision-making.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes a method intelligent system can automate decision making through collected data.</td><td>3</td></tr>
<tr><td>Outlines a method intelligent system can automate decision making through collected data.</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer 1:</strong></p>
<p>Recommendation engines are intelligent systems that collect and analyse user data, such as past purchases, viewing history, or search behaviour. Algorithms identify patterns in this data and automatically decide what products, movies, or content to suggest. This supports automated decision-making by reducing the user’s effort, personalising their experience, and increasing the likelihood of relevant and useful choices being presented.</p>
<p><strong>Sample answer 2:</strong></p>
<p>Inference engine in are an expert system. The inference engine applies rules from a stored knowledge base and combines them with data from the user or environment to draw logical conclusions. For example, in a medical expert system, it analyses patient symptoms and test results against medical rules, allowing it to suggest a likely diagnosis or treatment option without direct human intervention.</p>` }
      ]
    },
    {
      number: '23', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Discuss the ethical issues associated with the use of security cameras used in a retail store, including facial recognition.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Discuses relevant and prominent positive and negative ethical issues when security cameras are used. Must link to the scenario</td><td>3</td></tr>
<tr><td>Describes only positive OR a negative ethical issue when security cameras are used.<br><strong>OR</strong><br>Outlines ethical issues when security cameras are used</td><td>2</td></tr>
<tr><td>Identifies some relevant insight into use of security cameras</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>For</th><th>Against</th></tr></thead><tbody>
<tr><td><ul>
<li>Security cameras can improve customer and staff safety by deterring theft and assisting with identifying offenders, along with mitigation of violence and other poor behaviour from customers which is on the rise.</li>
<li>They also support efficiency by automating monitoring and can reduce the reliance on human security staff, lowering business costs. From a security perspective, they provide strong evidence in cases of shoplifting or workplace disputes.</li>
</ul></td><td><ul>
<li>On the other hand, there are ethical issues against their use. Facial recognition involves the collection and storage of biometric data, which raises concerns about privacy and the potential for misuse of personal information. Customers may feel constantly monitored, creating an atmosphere of mistrust and reducing their comfort while shopping.</li>
<li>There is also the issue of bias in facial recognition algorithms, which may result in unfair targeting of certain groups. Furthermore, questions of consent arise, as shoppers are often not explicitly informed or given a choice about their data being captured and analysed.</li>
<li>And finally, some are concerned that jobs may be lost with the reduction in need for security staff, or that less sales staff are needed to monitor the store.</li>
</ul></td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '24', marks: 10, layout: 1,
      stimulus: `<p>The Decision Tree below illustrates how multi-factor authentication is used to manage access to an enterprise system. A one-time password (OTP) is sent as a text message to the user’s mobile phone. The approval of access is determined by the system with no human judgment required.</p>
<p>Use this Decision Tree when answering questions <strong>24 (a), (b), and (c).</strong></p>
<p><img src="assets/pem2026/q24-decision-tree.png" alt="Decision tree: User authentication branches on Username, Password and OTP to Access granted or denied"></p>`,
      items: [
        { type: 'drawing', part: 'a', marks: 4,
          question: `<p>Draw a Flow Chart that represents the Decision Tree above.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Accurately draws a Flow Chart that represents the Decision Tree in the provided scenario, including accurate symbols that are correct labelled and follows the most efficient process.</td><td>4</td></tr>
<tr><td>Draws Flow Chart that represents the Decision Tree in the provided scenario, with a workable solution; however, the design may not be efficient, and/or there may be a minor error.</td><td>3</td></tr>
<tr><td>Attempts to draw a Flow Chart; however, includes several errors or oversights.</td><td>2</td></tr>
<tr><td>Identifies some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/pem2026/q24a-sample-answer.png" alt="Sample flowchart: Start, input username, decision u/w correct (No to DENIED), input password, decision p/w correct (Y and No both to OTP), input OTP, decision OTP correct (Y to ACCESS, No to DENIED), end"></p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>Outline an additional hardware component that could be integrated into the multi-factor authentication process outlined above that would assist in determining the user’s identity.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Outlines an appropriate hardware component that would assist in the multi-factor authentication process</td><td>3</td></tr>
<tr><td>Identify a hardware component that would assist in the multi-factor authentication process</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>An additional hardware component that could be integrated into the multi-factor authentication process is a <strong>fingerprint scanner</strong>. This device captures the unique biometric pattern of the user’s fingerprint and compares it against stored records. The main feature is that it provides a physical characteristic that is very difficult to replicate or steal, assisting in confirming the user’s identity beyond a password or PIN</p>
<p><strong>Other options</strong></p>
<ol>
<li>Facial recognition camera</li>
<li>Iris (eye) scanner</li>
<li>A security token (e.g., USB key or smart card, RFID).</li>
<li>Voice recognition</li>
<li>More rare - blood sample or other biometric health sensor</li>
</ol>` },
        { type: 'text', part: 'c', marks: 3, wordLimit: 80,
          question: `<p>Compare and contrast Decision Support Systems and Intelligent Systems; and justify which would be used in the above multi-factor authentication system.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Compares &amp; contrasts DSS and IS, along with an accurate justification of which would be used in MFA, with IS being the correct solution as it does not require human involvement in the decision, unlike DSS.</td><td>3</td></tr>
<tr><td>Compares OR contrasts – not both, or at a limited level, but includes justification</td><td>2</td></tr>
<tr><td>Provides some relevant information</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<table class="hoa-table-normal"><thead><tr><th>Similarities</th><th>Differences</th></tr></thead><tbody>
<tr><td>Both use data to support decision-making.</td><td><strong>DSS</strong> assists human decision-making by providing reports, models, and 'what-if' analysis; <strong>IS</strong> can make decisions automatically using AI, expert systems, or machine learning.</td></tr>
<tr><td>Both aim to improve efficiency, accuracy, and outcomes in problem-solving.</td><td><strong>DSS</strong> relies heavily on the user’s judgment to interpret results; <strong>IS</strong> reduces the need for human input by drawing its own inferences.</td></tr>
<tr><td>Both may combine information from multiple sources (databases, sensors, inputs).</td><td><strong>DSS</strong> is typically rule- and model-driven; <strong>IS</strong> often uses algorithms, neural networks, and inference engines.</td></tr>
<tr><td>Both can be applied across industries such as healthcare, business, and security.</td><td><strong>DSS</strong> enhances decision-making power of managers; <strong>IS</strong> mimics human intelligence and can learn or adapt to new conditions.</td></tr>
</tbody></table>` }
      ]
    },
    {
      number: '25', marks: 6, layout: 0,
      items: [
        { type: 'text', marks: 6, wordLimit: 150,
          question: `<p>Arjun is leading a small enterprise computing project for a new start-up developing a mobile productivity app. His team includes a freelance UX designer in Vietnam, a remote backend developer in Perth and a local university intern.</p>
<p>Discuss how the following factors may affect the development of Arjun’s project and identify two potential security risks.</p>
<ul>
<li>Offshore developments</li>
<li>Working remotely</li>
<li>Freelance work</li>
<li>Enabling the growth of start-ups</li>
</ul>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>At an extensive level, explores the Positives and Negative impact of offshore development, remote working, freelance work and start-up growth, would have Arjuns scenario. Identification of two relevant security risks included.</td><td>6</td></tr>
<tr><td>Explores the Positives and Negatives of all 4 areas in at a thorough level with no security risks<br><strong>OR</strong><br>Explores the Positives and Negatives of all 4 areas in at satisfactory level. Identification of two relevant security risks included.</td><td>5</td></tr>
<tr><td>Explores the Positives or Negatives (not both) of all 4 areas in at a thorough level, including security risks<br><strong>OR</strong><br>Explores the Positives and Negatives of most areas in at a thorough level, including security risks</td><td>4</td></tr>
<tr><td>Describes all 4 factors and identifies two security risks</td><td>3</td></tr>
<tr><td>Attempts to define the 4 factors and/or identifies two security risks.</td><td>2</td></tr>
<tr><td>Identifies some relevant information, e.g. 1 security risk identified</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><strong>Offshore development</strong> may <u>positively</u> affect Arjun’s project by giving access to skilled developers at lower costs, helping the start-up stretch its limited budget. <u>However</u>, issues can arise due to time zone differences, language barriers, and difficulties in coordinating tasks across countries, which may delay development.</p>
<p><strong>Working remotely</strong> <u>enables</u> flexibility, reduces overhead costs such as office space, and allows Arjun to source talent beyond his local area. The <u>downside</u> is that it may reduce collaboration and make communication harder to manage, especially when team members rely heavily on digital tools.</p>
<p><strong>Freelance</strong> work provides the <u>benefit</u> of specialised expertise on demand, such as the UX designer contributing a professional interface design without needing a long-term contract. <u>On the other hand</u>, freelancers may have competing commitments, limited availability, or lower accountability, which can affect project reliability and deadlines.</p>
<p><strong>Enabling the growth of start-ups</strong> means Arjun’s team can take <u>advantage</u> of cloud-based tools (SaaS, IaaS and PaaS) and online platforms, allowing the project to develop quickly and cost-effectively. The competitive environment, <u>however</u>, creates pressure to deliver quickly and can increase the risk of burnout or rushed decision-making.</p>
<p><strong>Two security risks</strong>: (1) data breaches when sensitive project files are transferred across unsecured networks between remote and offshore team members, and (2) unauthorised access to source code or intellectual property if strong authentication and access controls are not enforced on shared systems.</p>` }
      ]
    }
  ],
  figures: [
    { out: 'assets/pem2026/q8-dfd.png', file: 'pem2026-q.pdf', page: 4, box: [110, 245, 722, 372] },
    { out: 'assets/pem2026/q15-symbol1.png', file: 'pem2026-q.pdf', page: 8, box: [140, 330, 365, 432] },
    { out: 'assets/pem2026/q15-symbol2.png', file: 'pem2026-q.pdf', page: 8, box: [140, 452, 365, 554] },
    { out: 'assets/pem2026/q15-symbol3.png', file: 'pem2026-q.pdf', page: 8, box: [140, 578, 365, 680] },
    { out: 'assets/pem2026/q15-symbol4.png', file: 'pem2026-q.pdf', page: 8, box: [140, 700, 365, 802] },
    { out: 'assets/pem2026/q15-symbol5.png', file: 'pem2026-q.pdf', page: 8, box: [140, 824, 365, 928] },
    { out: 'assets/pem2026/q15-symbol6.png', file: 'pem2026-q.pdf', page: 8, box: [140, 946, 365, 1050] },
    { out: 'assets/pem2026/q21-dashboard.jpg', file: 'pem2026-q.pdf', page: 11, box: [107, 803, 826, 1220] },
    { out: 'assets/pem2026/q24-decision-tree.png', file: 'pem2026-q.pdf', page: 12, box: [120, 548, 800, 808] },
    { out: 'assets/pem2026/q18d-sample-answer.png', file: 'pem2026-a.pdf', page: 5, box: [255, 458, 695, 1004] },
    { out: 'assets/pem2026/q19a-sample-answer.png', file: 'pem2026-a.pdf', page: 6, box: [105, 535, 845, 760] },
    { out: 'assets/pem2026/q24a-sample-answer.png', file: 'pem2026-a.pdf', page: 10, box: [292, 455, 662, 1120] }
  ]
});
