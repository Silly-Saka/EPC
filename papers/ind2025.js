registerExam({
  id: 'ind2025',
  title: 'Independent 2025 Enterprise Computing Trial HSC Examination',
  source: 'Independent',
  year: 2025,
  kind: 'trial',
  readingMinutes: 10,
  workingMinutes: 140,
  totalMarks: 80,
  coverNotes: `<p><strong>Section I</strong> – 20 marks (pages 3–11)</p>
<ul>
  <li>Attempt Questions 1–16</li>
  <li>Allow about 25 minutes for this section</li>
  <li>Questions 1–8: select the alternative that best answers the question (8 marks)</li>
  <li>Questions 9–12: select each alternative that answers the question – multiple items may be selected (4 marks)</li>
  <li>Questions 13–16: match items on the left with matching items on the right (8 marks)</li>
</ul>
<p><strong>Section II</strong> – 60 marks (pages 12–23)</p>
<ul>
  <li>Attempt ALL questions</li>
  <li>Allow about 1 hour and 55 minutes for this section</li>
  <li>If you include diagrams in your answer, ensure they are clearly labelled.</li>
</ul>`,
  groups: [
    // ---------------- Section I : Questions 1-8 (single answer) ----------------
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>What is the main difference between qualitative and quantitative data?</p>`,
          options: [
            `Qualitative data is numerical and used for mathematical calculations; quantitative data is descriptive and observed.`,
            `Quantitative data is descriptive and gathered through interviews; qualitative data is measured and analysed statistically.`,
            `Qualitative data is non-numerical and observed through methods like interviews; quantitative data is numerical and used for statistical analysis.`,
            `Quantitative data includes opinions and emotions; qualitative data includes test scores and financial figures.`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Consider the following SQL query:</p>
<pre class="hoa-code">SELECT First_name, Last_name
FROM Users
WHERE Score &gt; 80
ORDER BY Score ASC</pre>
<p>What does the SQL query do?</p>`,
          options: [
            `Returns all users and displays their scores in descending order.`,
            `Returns first and last names of users along with their score if it is less than 80, in ascending order by score.`,
            `Updates the scores of users who scored more than 80 and returns the result sorted by scores.`,
            `Returns first and last names of users with a score greater than 80, sorted by score in ascending order.`
          ],
          answer: 4,
          guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Within business analytics software, which of the following is a limitation?</p>`,
          options: [
            `Compatibility with multiple data sources.`,
            `User-friendly tools for presentation creation.`,
            `Fewer options for customising data visualisations.`,
            `Support for real-time data updates and team collaboration.`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>What is the main advantage of using a pivot table in a spreadsheet program?</p>`,
          options: [
            `It automatically formats the spreadsheet into a visualisation suitable for printing.`,
            `It permanently deletes irrelevant data such as redundant data and outliers which results in a reduced file size.`,
            `It links the spreadsheet directly to a database such that alterations to the database are reflected in real time within the spreadsheet.`,
            `It enables users to efficiently analyse, sort and summarise data from different perspectives.`
          ],
          answer: 4,
          guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>In which type of decision support system is a fixed set of rules followed without human involvement?</p>`,
          options: [`Heuristic`, `Structured`, `Unstructured`, `Semi-structured`],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>What is a typical use of sensors and actuators in an intelligent manufacturing system?</p>`,
          options: [
            `Recording staff leave entitlements`,
            `Managing customer loyalty programs`,
            `Encrypting enterprise data during transmission`,
            `Enabling real-time monitoring and control of machinery`
          ],
          answer: 4,
          guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Why may a development team decide to create a prototype when developing an enterprise system?</p>`,
          options: [
            `To document research obtained during the development process.`,
            `To refine system requirements during the research and planning stage of development.`,
            `To test ideas in real world scenarios and obtain feedback.`,
            `As a final model of a system that is then distributed commercially to clients.`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 1,
      stimulus: `<p><img src="assets/ind2025/q8-dfd.png" alt="Data flow diagram with elements labelled 1 to 10"></p>
<table class="hoa-table-normal">
  <thead><tr><th></th><th>Unprocessed data</th><th>A report</th><th>System database</th><th>Users</th><th>Processing data</th><th>Report creation</th></tr></thead>
  <tbody>
    <tr><td>(A)</td><td>2</td><td>10</td><td>7</td><td>5</td><td>9</td><td>3</td></tr>
    <tr><td>(B)</td><td>10</td><td>2</td><td>5</td><td>1</td><td>9</td><td>3</td></tr>
    <tr><td>(C)</td><td>1</td><td>6</td><td>1</td><td>7</td><td>3</td><td>4</td></tr>
    <tr><td>(D)</td><td>10</td><td>2</td><td>5</td><td>1</td><td>7</td><td>2</td></tr>
  </tbody>
</table>`,
      items: [
        { type: 'mcq',
          question: `<p>The labels in the data flow diagram below could be used to represent which of the following elements?</p>`,
          options: [
            `Unprocessed data 2; A report 10; System database 7; Users 5; Processing data 9; Report creation 3`,
            `Unprocessed data 10; A report 2; System database 5; Users 1; Processing data 9; Report creation 3`,
            `Unprocessed data 1; A report 6; System database 1; Users 7; Processing data 3; Report creation 4`,
            `Unprocessed data 10; A report 2; System database 5; Users 1; Processing data 7; Report creation 2`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    // ---------------- Section I : Questions 9-12 (multiple answer) ----------------
    {
      number: '9', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following device are part of the internet of me (IoMe) and the internet of things (IoT)?</p><p>(Multiple items may be selected)</p>`,
          options: [
            `Industrial robots`,
            `Smart watches`,
            `Speed cameras`,
            `Automated irrigation systems`,
            `Voice assistants such as Apple’s Siri, Google Assistant and Amazon’s Alexa`,
            `Glucose monitors for diabetics`,
            `Electric toaster`,
            `Fitness trackers`,
            `Vacuum cleaner`
          ],
          answer: [2, 5, 6, 8],
          guide: `<p>Answer: B, E, F, H</p>` }
      ]
    },
    {
      number: '10', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following methods helps maintain data security?</p><p>(Multiple items may be selected)</p>`,
          options: [
            `Using public Wi-Fi for backup transfers.`,
            `Encrypting data when stored and transmitted.`,
            `Regularly updating software with security patches.`,
            `Keeping all backups in one location for convenience.`,
            `Implementing access levels to restrict users’ viewing of unnecessary data.`,
            `Applying the 3-2-1 backup rule - keep three copies of data, on two different media types, with one copy offsite.`,
            `Saving login credentials within the browser for sites that do not use multi-factor authentication.`
          ],
          answer: [2, 3, 5, 6],
          guide: `<p>Answer: B, C, E, F</p>` }
      ]
    },
    {
      number: '11', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which techniques are used by inference engines?</p><p>(Multiple items may be selected)</p>`,
          options: [
            `Forward chaining`,
            `Hypothetical reasoning`,
            `Bubble sort`,
            `Heuristic knowledge`,
            `Backward chaining`,
            `Neural broadcasting`,
            `Binary search`
          ],
          answer: [1, 2, 4, 5],
          guide: `<p>Answer: A, B, D, E</p>` }
      ]
    },
    {
      number: '12', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which of the following system development approaches are supported by an iterative methodology?</p><p>(Multiple items may be selected)</p>`,
          options: [`Structured`, `Waterfall`, `Prototyping`, `Agile`, `End-user`, `Outsourcing`],
          answer: [3, 4],
          guide: `<p>Answer: C, D</p>` }
      ]
    },
    // ---------------- Section I : Questions 13-16 (matching) ----------------
    {
      number: '13', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each description with the best term.</p>`,
          rowHeader: 'Description',
          columns: ['A – Data Mining', 'B – Pivot Table', 'C – Blockchain', 'D – Data Warehouse', 'E – Ordinal Data', 'F – Ratio Data'],
          rows: [
            `1. A central system for storing large volumes of data from multiple sources`,
            `2. Data that includes a meaningful zero and allows for comparison using multiplication/division`,
            `3. A tool used in spreadsheets to summarise and group large datasets`,
            `4. Technology that records transactions securely in a decentralised, tamper-proof ledger`,
            `5. A type of data that is ordered but does not have consistent intervals between values.`,
            `6. Analysis process that reveals patterns or trends in large datasets`
          ],
          answer: [4, 6, 2, 3, 5, 1],
          guide: `<p>Answer: 1 – D, 2 – F, 3 – B, 4 – C, 5 – E, 6 – A</p>
<p><em>Note: the published answer key lists 1D, 2E, 3B, 4C, 5F, 6A, which appears to swap items 2 and 5 (description 2 defines ratio data; description 5 defines ordinal data). The answer above follows the descriptions.</em></p>` }
      ]
    },
    {
      number: '14', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each description with its correct concept.</p>`,
          rowHeader: 'Description',
          columns: ['A – Pattern Recognition', 'B – Aggregation and Filtering', 'C – Predictive Analysis', 'D – Real-Time Data Updates', 'E – Unstructured Dataset', 'F – Interactive Visualisation'],
          rows: [
            `1. Selecting from datasets based on specific conditions and summarising using trends, averages and clusters.`,
            `2. Uses forecasts and past data trends to help users anticipate future events.`,
            `3. Dashboards that constantly refresh with new data.`,
            `4. Identifying similarities within data enabling the system to learn, make decisions and solve problems.`,
            `5. The ability for users to specify criteria or drill down and the display refreshes immediately.`,
            `6. Data that has no fixed format, such as text and video.`
          ],
          answer: [2, 3, 4, 1, 6, 5],
          guide: `<p>Answer: 1 – B, 2 – C, 3 – D, 4 – A, 5 – F, 6 – E</p>` }
      ]
    },
    {
      number: '15', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each description with the best term.</p>`,
          rowHeader: 'Description',
          columns: ['A – Biometrics', 'B – Haptics', 'C – Touch and Gesture Recognition', 'D – Microcontrollers', 'E – Sensors', 'F – Actuators and Motors'],
          rows: [
            `1. Low-level embedded processors that execute programmed control logic in real time.`,
            `2. Convert electrical signals into mechanical movement, enabling physical responses based on digital instructions`,
            `3. Physical feedback from a system including pressure, vibration and pulses.`,
            `4. Measures quantifiable changes in the environment and provides raw input data to a system.`,
            `5. Using a person’s physical or behaviour traits to identify or verify who they are.`,
            `6. Capture tactile or motion-based input and interpret it as user commands.`
          ],
          answer: [4, 6, 2, 5, 1, 3],
          guide: `<p>Answer: 1 – D, 2 – F, 3 – B, 4 – E, 5 – A, 6 – C</p>` }
      ]
    },
    {
      number: '16', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match the system flowchart symbols displayed below with their correct names.</p>`,
          rowHeader: 'Symbol',
          columns: ['A – Direct Access Storage', 'B – Online Input', 'C – Online Display', 'D – Manual Operation', 'E – Paper Document', 'F – Process'],
          rows: [
            `1 <img src="assets/ind2025/q16-symbol1.png" alt="Symbol 1">`,
            `2 <img src="assets/ind2025/q16-symbol2.png" alt="Symbol 2">`,
            `3 <img src="assets/ind2025/q16-symbol3.png" alt="Symbol 3">`,
            `4 <img src="assets/ind2025/q16-symbol4.png" alt="Symbol 4">`,
            `5 <img src="assets/ind2025/q16-symbol5.png" alt="Symbol 5">`,
            `6 <img src="assets/ind2025/q16-symbol6.png" alt="Symbol 6">`
          ],
          answer: [6, 3, 1, 2, 5, 4],
          guide: `<p>Answer: 1 – F (Process), 2 – C (Online Display), 3 – A (Direct Access Storage), 4 – B (Online Input), 5 – E (Paper Document), 6 – D (Manual Operation)</p>` }
      ]
    },
    // ---------------- Section II ----------------
    {
      number: '17', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2,
          question: `<p>Define Data Bias.</p>`,
          wordLimit: 50,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correctly defines data bias.</td><td>2</td></tr>
<tr><td>Identifies a feature of data bias.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data bias refers to systematic errors in a dataset that can arise from issues such as selective sampling, underrepresentation of certain groups, or measurement errors. Data bias leads to inaccurate, misleading, or discriminatory results in analysis or decision-making.</p>` }
      ]
    },
    {
      number: '18', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3,
          question: `<p>Distinguish between a Data Lake and a Data Swamp.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a clear distinction between a data lake and a data swamp.</td><td>3</td></tr>
<tr><td>Outlines a data lake and/or a data swamp.</td><td>2</td></tr>
<tr><td>Identifies features of a data lake and/or a data swamp.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A Data Lake is a centralised storage system that holds vast amounts of raw data in its native format, whether structured or unstructured. It is well-managed with proper governance, metadata and indexing. It allows users to easily find, access and analyse the data for insights and decision-making.</p>
<p>In contrast, a Data Swamp occurs when a Data Lake is poorly managed or neglected. It becomes cluttered with disorganised, low-quality or outdated data. It also lacks proper structure and metadata. This makes the data difficult to trust, find or use effectively, ultimately reducing its value for any meaningful analysis.</p>` }
      ]
    },
    {
      number: '19', marks: 4, layout: 3,
      stimulus: `<p>A pet shop stores data on pet owners and their pets.</p>
<p>An extract of the database schema is reproduced below:</p>
<p><img src="assets/ind2025/q19-schema.png" alt="Database schema: Owners (Owner_ID (P), First_name, Surname, Phone, Address, Email) related one-to-many to Pets (Pet_ID (P), Pet_name, Type, DOB, Gender, Owner_ID (F))"></p>`,
      items: [
        { type: 'sql', marks: 4,
          sqlAnswer: { orderBy: [[3, 'asc']], queries: [
            `SELECT Owners.First_name, Owners.Surname, Owners.Email, Pets.Pet_name, Pets.DOB FROM Owners RIGHT JOIN Pets ON Owners.Owner_ID = Pets.Owner_ID WHERE Pets.Type = 'Dog' ORDER BY Pets.Pet_name`,
            `SELECT Owners.First_name, Owners.Surname, Owners.Email, Pets.Pet_name, Pets.DOB FROM Owners, Pets WHERE Owners.Owner_ID = Pets.Owner_ID AND Pets.Type = 'Dog' ORDER BY Pets.Pet_name`] },
          question: `<p>Construct an SQL query that retrieves all records where the Type of pet is a dog. Each row retrieved should include the first name, surname and email of the owner along with the pet’s name and DOB. The results are to be sorted alphabetically by the pet’s name.</p>
<p><em>(The practice database below contains sample data for testing your query; the paper shows only the schema.)</em></p>`,
          setup: `CREATE TABLE Owners (Owner_ID INTEGER PRIMARY KEY, First_name TEXT, Surname TEXT, Phone TEXT, Address TEXT, Email TEXT);
CREATE TABLE Pets (Pet_ID INTEGER PRIMARY KEY, Pet_name TEXT, Type TEXT, DOB TEXT, Gender TEXT, Owner_ID INTEGER REFERENCES Owners(Owner_ID));
INSERT INTO Owners VALUES (1,'Indie','Richards','0412 345 678','12 Smith St, Parramatta','indie.r@example.com');
INSERT INTO Owners VALUES (2,'Jack','Newman','0423 456 789','4 King Rd, Penrith','jnewman@example.com');
INSERT INTO Owners VALUES (3,'Alicia','Hayes','0434 567 890','78 Hill Ave, Ryde','alicia.hayes@example.com');
INSERT INTO Owners VALUES (4,'Luke','Mendez','0445 678 901','9 Bay St, Manly','lmendez@example.com');
INSERT INTO Pets VALUES (101,'Rex','Dog','2019-03-14','M',1);
INSERT INTO Pets VALUES (102,'Whiskers','Cat','2020-07-02','F',2);
INSERT INTO Pets VALUES (103,'Bella','Dog','2021-11-20','F',3);
INSERT INTO Pets VALUES (104,'Polly','Parrot','2018-05-09','F',3);
INSERT INTO Pets VALUES (105,'Max','Dog','2017-01-30','M',4);
INSERT INTO Pets VALUES (106,'Nibbles','Hamster','2023-02-14','M',2);
INSERT INTO Pets VALUES (107,'Charlie','Dog','2022-08-08','M',1);
INSERT INTO Pets VALUES (108,'Daisy','Dog','2024-04-01','F',NULL);`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Constructs a syntactically correct SQL query that returns the required information.</td><td>4</td></tr>
<tr><td>Constructs an SQL query that provides most of the required information.</td><td>3</td></tr>
<tr><td>Constructs an SQL query that identifies some links to the data.</td><td>2</td></tr>
<tr><td>Identifies components of an SQL query.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><em>The following solution uses a right join which ensures that all pets, whether associated with an owner or not, are returned.</em></p>
<pre class="hoa-code">SELECT
   Owners.First_name,
   Owners.Surname,
   Owners.Email,
   Pets.Pet_name,
   Pets.DOB
FROM
   Owners
   RIGHT JOIN Pets ON Owners.Owner_ID = Pets.Owner_ID
WHERE
   Pets.Type = "Dog"
ORDER BY
   Pets.Pet_name;</pre>
<p><em>The following solution returns all pets that have an owner. Strictly this does not answer the question precisely, however the Course Specifications do not specify the JOIN keyword hence this solution should also be awarded full marks.</em></p>
<pre class="hoa-code">SELECT
   Owners.First_name,
   Owners.Surname,
   Owners.Email,
   Pets.Pet_name,
   Pets.DOB
FROM
   Owners,
   Pets
WHERE
   Owners.Owner_ID = Pets.Owner_ID
   AND Pets.Type = "Dog"
ORDER BY
   Pets.Pet_name;</pre>
<p><em>It is arguable that qualifying each field using the table name is not required when the field name is unique across the query. We recommend students do fully qualify fields using the table name to be clear in all cases.</em></p>` }
      ]
    },
    {
      number: '20', marks: 6, layout: 1,
      stimulus: `<p>Consider the following sample data for sales at a pet store:</p>
<table class="hoa-table-normal">
  <thead><tr><th>Sale ID</th><th>Date</th><th>Item</th><th>Category</th><th>Quantity</th><th>Unit Price</th><th>Total</th><th>Customer Name</th></tr></thead>
  <tbody>
    <tr><td>1001</td><td>Jan-3</td><td>Dog</td><td>Animal</td><td>1</td><td>400</td><td>400</td><td>Indie Richards</td></tr>
    <tr><td>1002</td><td>Jan-3</td><td>Cat Litter (10kg)</td><td>Product</td><td>3</td><td>12.5</td><td>37.5</td><td>Jack Newman</td></tr>
    <tr><td>1003</td><td>Jan-3</td><td>Parrot</td><td>Animal</td><td>2</td><td>75</td><td>150</td><td>Alicia Hayes</td></tr>
    <tr><td>1004</td><td>Jan-4</td><td>Dog Food (5kg)</td><td>Product</td><td>5</td><td>22</td><td>110</td><td>Luke Mendez</td></tr>
    <tr><td>1005</td><td>Jan-4</td><td>Aquarium Starter</td><td>Product</td><td>1</td><td>180</td><td>180</td><td>Jordan Zhang</td></tr>
    <tr><td>1006</td><td>Jan-4</td><td>Cat</td><td>Animal</td><td>1</td><td>120</td><td>120</td><td>Katie Carlisle</td></tr>
    <tr><td>1007</td><td>Jan-4</td><td>Hamster Cage Set</td><td>Product</td><td>2</td><td>45</td><td>90</td><td>Zane Powell</td></tr>
    <tr><td>1008</td><td>Jan-4</td><td>Fish (Tropical)</td><td>Animal</td><td>10</td><td>6</td><td>60</td><td>Hugo Nguyen</td></tr>
    <tr><td>1009</td><td>Jan-5</td><td>Bird Feed (5kg)</td><td>Product</td><td>4</td><td>9</td><td>36</td><td>Ava Thompson</td></tr>
    <tr><td>1010</td><td>Jan-5</td><td>Puppy Bed (Small)</td><td>Product</td><td>2</td><td>35</td><td>70</td><td>Sienna Kim</td></tr>
  </tbody>
</table>`,
      items: [
        { type: 'text', marks: 6,
          question: `<p>With reference to the above data, discuss how informatics can support a deeper understanding of the data.</p>`,
          wordLimit: 150,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Comprehensively explains how informatics tools and processes can be applied to the given scenario to support a deeper understanding of the data.</td><td>6</td></tr>
<tr><td>Describes how informatics tools and processes can be applied to the given scenario to support a deeper understanding of the data.</td><td>5</td></tr>
<tr><td>Outlines how informatics tools and processes can be applied to the given scenario to support a deeper understanding of data.</td><td>4</td></tr>
<tr><td>Outlines how informatics tools and/or processes can be applied to support a deeper understanding of data.</td><td>3</td></tr>
<tr><td>Identifies informatics tools and/or processes.</td><td>2</td></tr>
<tr><td>Identifies a feature of an informatics tool and/or process.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The sales data provided lists details for various transactions. Informatics plays a crucial role in enhancing our understanding of this data by improving how we collect, organise, analyse, share, and visualise it.</p>
<p><strong>1. Data Collection</strong></p>
<p>Informatics enables efficient collection of data like this through electronic point-of-sale (POS) systems, digital forms, and automated inventory tracking. Each pet store sale is captured electronically with accurate data, quantities, and customer details. This reduces human error and ensures that the data is timely and comprehensive, which is essential for managing stock and understanding customer purchasing habits.</p>
<p><strong>2. Data Organisation</strong></p>
<p>Once collected, informatics tools such as relational databases or data management systems help organise the sales data systematically. This dataset could be stored in a database where each transaction is a record with fields like date, item, quantity, price, and customer extracted from the underlying database as is shown in the example. This allows quick retrieval and updating and supports complex queries (e.g. sales by date or by category) and maintains data integrity for future analysis.</p>
<p><strong>3. Data Analysis</strong></p>
<p>Informatics offers statistical software and machine learning tools that can analyse this sales data to discover trends or anomalies. For example, analysts could identify which items sell best, detect seasonal sales patterns, or segment customers by purchase behaviour. Using such analysis, the pet store could optimise inventory, target marketing campaigns, or forecast future demand more accurately.</p>
<p><strong>4. Data Interoperability</strong></p>
<p>Through informatics standards and protocols (such as CSV, XML, or APIs), this sales data can be easily shared with accounting software, inventory management systems, or marketing platforms. This interoperability means that data collected at the point of sale can be reused across multiple systems without manual re-entry.</p>
<p><strong>5. Data Visualisation</strong></p>
<p>Finally, informatics enables visualisation of this data through charts, dashboards, or interactive reports. For instance, a dashboard could display total sales by category over time, highlight top-selling items, or track customer purchase frequency. Visualisations make it easier for managers and stakeholders to grasp complex data quickly and make informed decisions based on clear patterns or insights revealed.</p>` }
      ]
    },
    {
      number: '21', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2,
          question: `<p>Define data integrity and outline its importance.</p>`,
          wordLimit: 50,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Defines data integrity and outlines its importance</td><td>2</td></tr>
<tr><td>Defines data integrity or outlines some aspect of its importance</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data integrity refers to the accuracy, consistency, and reliability of data throughout its lifecycle, ensuring that it remains correct and unchanged unless properly modified. When data integrity is high the resulting information and data visualisations will truthfully reflect reality and hence decisions will be better informed. If data is out of date or inaccurate then data visualisations and decisions are compromised. Furthermore inaccurate data, such as out-of-date email addresses, credit cards, etc. will result in poor marketing and invoicing.</p>` }
      ]
    },
    {
      number: '22', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3,
          question: `<p>Describe how data visualisations assist in understanding and communicating data. Include examples of data visualisations to illustrate your response.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes how data visualisations improve understanding and communication AND provides multiple examples of data visualisations.</td><td>3</td></tr>
<tr><td>Outlines how data visualisations improve understanding and communication AND provides at least one example of a data visualisation.</td><td>2</td></tr>
<tr><td>Identifies a feature of data visualisations that would improve understanding and communication OR provides at least one example of a data visualisation.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Data visualisation aims to simplify understanding by converting complex data into visual formats. Visual tools serve two key purposes, identifying data patterns and clearly communicating insights. Visual tools such as graphs, charts, and maps help users detect trends, relationships, and outliers that may be difficult to recognise in raw numerical data. For example, a line graph displaying monthly temperatures allows users to quickly see seasonal changes over time. In addition to making data easier to interpret, visualisations also support effective communication. They allow complex information to be presented simply and engagingly, making it easier for different audiences, including non-technical users, to understand the main message. By combining clarity with visual appeal, data visualisations enhance the understanding and communication of data.</p>
<p>Responses may also be in point:</p>
<ul>
  <li>Supporting decision-making – Visualisations help stakeholders quickly assess the current situation, compare options, and choose the most informed action (e.g. sales dashboards showing performance by region).</li>
  <li>Simplifying complex data – Data visualisations condense large volumes of information into accessible visuals, helping users process data more efficiently without needing to interpret raw figures.</li>
  <li>Highlighting relationships or correlations – Scatter plots or heat maps can show how variables relate to each other, revealing potential causes, trends, or anomalies.</li>
  <li>Engaging the audience – Well-designed visuals attract attention and maintain interest, especially when storytelling is used to guide the viewer through the data.</li>
</ul>` }
      ]
    },
    {
      number: '23', marks: 4, layout: 1,
      stimulus: `<p>The table below is a small extract of the results of a survey of over 4000 children aged 5 to 13 years of age to determine the time spent using a screen during weekdays and during weekends. The data has been anonymised to remove each child’s personal details.</p>
<table class="hoa-table-normal">
  <thead><tr><th>ID</th><th>Age (years)</th><th>Weekday Screen Time (minutes)</th><th>Weekend Screen Time (minutes)</th></tr></thead>
  <tbody>
    <tr><td>3009</td><td>6</td><td>101</td><td>123</td></tr>
    <tr><td>3010</td><td>10</td><td>20</td><td>227</td></tr>
    <tr><td>3011</td><td>5</td><td>16</td><td>125</td></tr>
    <tr><td>3012</td><td>7</td><td>93</td><td>153</td></tr>
    <tr><td>3013</td><td>10</td><td>155</td><td>252</td></tr>
    <tr><td>3014</td><td>6</td><td>95</td><td>113</td></tr>
    <tr><td>3016</td><td>8</td><td>83</td><td>153</td></tr>
    <tr><td>3017</td><td>5</td><td>112</td><td>137</td></tr>
    <tr><td>3018</td><td>12</td><td>160</td><td>255</td></tr>
    <tr><td>3019</td><td>8</td><td>106</td><td>158</td></tr>
    <tr><td>3021</td><td>8</td><td>87</td><td>166</td></tr>
    <tr><td>3022</td><td>10</td><td>153</td><td>217</td></tr>
    <tr><td>3023</td><td>5</td><td>56</td><td>151</td></tr>
    <tr><td>3024</td><td>12</td><td>221</td><td>297</td></tr>
    <tr><td>3025</td><td>13</td><td>203</td><td>255</td></tr>
    <tr><td>3026</td><td>9</td><td>105</td><td>177</td></tr>
    <tr><td>3028</td><td>11</td><td>151</td><td>239</td></tr>
  </tbody>
</table>`,
      items: [
        { type: 'text', marks: 4,
          question: `<p>Describe a suitable data visualisation and how it could be produced from the above data. The data visualisation is to display the size and relative differences between weekday and weekend screen time for each age child.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes a visualisation that meets the requirements of the question AND describes how to produce such a visualisation.</td><td>4</td></tr>
<tr><td>Describes a visualisation that meets some of requirements of the question AND outlines how to produce such a visualisation.</td><td>3</td></tr>
<tr><td>Describes a visualisation that meets the requirements of the question OR describes how to produce such a visualisation. OR<br>Outlines a visualisation that meets some requirements AND identifies how to produce it in simple terms.</td><td>2</td></tr>
<tr><td>Outlines a visualisation that meets some requirements OR identifies how to produce it in simple terms.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A bar graph that has a bar for average weekday screen time and average weekend screen time for each age child would be a suitable data visualisation.</p>
<p>The visualisation would be best produced using a spreadsheet and then use its pivot table and pivot graph functionality. First import the data from the survey into a worksheet. Highlight the data and use the pivot table and pivot chart options.</p>
<p>Each row in the pivot chart will be a different age in ascending order. There will be a column for age, column for average weekday and column for average weekend. In Excel this is accomplished by dragging the Age attribute to the Rows area of the Pivot table fields dialogue. Drag weekday and weekend to the columns area and choose average as the aggregate function for each. Do similar for the pivot table and then add a legend such that the colours for the weekday and weekend averages contrast.</p>
<p>The final pivot chart will visually show the difference between weekday and weekend screen time for each age group. It also shows at a glance the relative differences between ages – perhaps older children spend more time in front of a screen for example.</p>
<p><em>The following screenshot is from the solution spreadsheet “q23 screen time by age.xlsx” supplied with the marking guidelines.</em></p>
<p><img src="assets/ind2025/q23-answer-pivot.png" alt="Pivot table of average weekday and weekend screen time by age with a clustered bar pivot chart"></p>` }
      ]
    },
    {
      number: '24', marks: 6, layout: 1,
      stimulus: `<p><img src="assets/ind2025/q24-dashboard.jpg" alt="Example dashboard containing line graphs, bar charts, a radar chart, a timeline, gauges and percentage rings"></p>`,
      items: [
        { type: 'text', marks: 6,
          question: `<p>Explain how user experience (UX) design principles enhance the effectiveness of data visualisations. You may refer to the following example dashboard to assist your response.</p>`,
          wordLimit: 150,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Comprehensive explanation demonstrating an in-depth understanding of how a range of UX design principles enhance users’ ability to quickly and accurately interpret data, clearly showing how these principles contribute to effective data visualisation.</td><td>6</td></tr>
<tr><td>Thorough description demonstrating a clear understanding of how a range of UX design principles help users interpret data to improve the effectiveness of data visualisation.</td><td>5</td></tr>
<tr><td>Sound description showing how selected UX design principles support users in interpreting data through data visualisation.</td><td>4</td></tr>
<tr><td>Outlines how some UX design principles support data interpretation in data visualisation.</td><td>3</td></tr>
<tr><td>Outlines a UX design principle that supports data interpretation in data visualisation.</td><td>2</td></tr>
<tr><td>States a UX design principle or element of data visualisation.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>User experience (UX) principles are design strategies that focus on creating intuitive, user-centred interactions. These principles aim to improve how users interact with and interpret information, ensuring it is clear, meaningful, and engaging. Data visualisation involves turning complex data into visual formats such as graphs, charts, or dashboards (as we see in the screenshot) to help users identify trends, outliers, patterns, and insights more effectively.</p>
<p>When applied to data visualisation, UX principles become powerful tools for insight and decision-making. They significantly enhance the user’s ability to interpret data quickly and accurately to gain meaning or understand its purpose. For instance, the line graphs and bar charts like those in the screenshot are excellent for visualising trends both historical and also predictions for the future.</p>
<p>UX design principles such as clarity, interactivity, storytelling and consistency focus on creating user-friendly visualisations that allow users to interpret data quickly and accurately to make informed business decisions.</p>
<ul>
  <li>Clarity: Clear data visualisations are crucial for user understanding. Effective UX design simplifies complex data into easily interpretable visuals. The bar charts, pie charts, and other graphs in the screenshot are well spaced with borders and “white space” used well to separate elements visually. Choosing the right visualisation type and ensuring the visual elements are not cluttered enhances clarity.</li>
  <li>Interactivity: UX design often includes interactive features that make data visualisations more engaging. Elements like zooming, filtering, and hovering over data points to reveal additional information allow users to explore data on their terms. This interactivity enhances engagement and enables users to focus on the data most relevant to their specific needs. Additionally, users can manipulate the data, providing them with more control over their experience, which leads to more relevant and meaningful insights.</li>
  <li>Storytelling: Good visualisations tell a story by providing context and a clear narrative. For example the timeline in the screenshot is a great way to convey significant events over time and hence tells and historical story. This might include highlighting a key trend, adding explanatory notes, or sequencing charts to build a logical flow. Effective data visualisation helps to curate data into a form that is easier to understand, spotlighting trends and outliers.</li>
  <li>Consistency: Consistent design reduces mental effort and builds trust. When visual elements like colours, fonts, and layouts remain uniform across charts, users don’t have to relearn styles and can focus on the data itself. For example, using the same colour to represent a category across several charts prevents confusion. Similarly, placing navigation controls in the same location makes interactions intuitive. Headings, legends and data labels should be consistent in terms of design font and size. A consistent design also looks professional and strengthens users’ confidence in the information presented.</li>
</ul>
<p><em>There are no specific design principles specified in the syllabus – students may respond by classifying design principles in a range of different and legitimate ways. For example responses may include the following.</em></p>
<ul>
  <li>Audience Understanding: One of the core UX principles is tailoring the visualisation to the target audience. Understanding who will be interacting with the visualisation, whether a general user, a data analyst, or a decision-maker, is essential for creating relevant and intuitive designs. For instance, a visualisation aimed at business executives may focus on high-level trends, while one for data experts may include more granular details. Aligning the visualisation with the user’s expertise and needs makes it more effective and engaging.</li>
  <li>Consistent Visual Language: A consistent visual language across all data visualisations reduces cognitive load and makes it easier for users to interpret the data. By maintaining uniformity in design elements, such as colours, chart types, and labels, UX principles help ensure that users can quickly understand the meaning behind the visuals. Consistency in design creates familiarity, reducing the mental effort required to interpret different data points and allowing users to focus on analysis and decision-making.</li>
  <li>Live Analysis: Incorporating live analysis into data visualisations adds another layer of interactivity and relevance. Live analysis enables users to interact with real-time data and access up-to-date insights for immediate decision-making. For instance, real-time stock market data can be integrated into visualisations in a financial dashboard to reflect current trends. This dynamic feature enhances the user experience by providing the most current information, ensuring that users make timely and well-informed decisions.</li>
  <li>Customisation: The ability to customise a data visualisation is another key UX principle. Customisation allows users to adjust visualisations according to their preferences, such as changing chart types, adjusting time ranges, or highlighting specific data points. This personalisation ensures that users can focus on the most relevant aspects of the data for their specific context, improving comprehension and decision-making. For example, a user might want to filter out certain variables that are not important to their analysis, thereby enhancing the focus and clarity of the visualisation.</li>
  <li>Emotional Engagement: UX design can also focus on emotional engagement, making data more relatable and memorable. By leveraging storytelling techniques, visualisations can highlight trends or anomalies that evoke emotions, making the data more impactful. When users can connect emotionally to the data, they are more likely to remember key insights and take appropriate action. For example, visualising data in a narrative form helps users understand not just the numbers but also the story behind them, increasing the emotional resonance of the data.</li>
  <li>Accessibility: Good UX includes everyone. Ensuring adequate colour contrast, readable font sizes, and visuals that are screen-reader friendly makes the data usable by people with diverse needs.</li>
</ul>` }
      ]
    },
    {
      number: '25', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2,
          question: `<p>Outline one way an intelligent system uses data to support automated decision-making in an enterprise.</p>`,
          wordLimit: 50,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Clearly outlines an example enterprise where the data leads to an automated intelligent decision.</td><td>2</td></tr>
<tr><td>Identifies a correct example of data use in automated decision-making.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Stock control within a retail enterprise. Historical sales data and the wholesale price of items is analysed to predict future sales and decide how much stock to carry at different times of the year. Some products, such as Christmas items, are very seasonal but their wholesale price is also likely much higher in the lead up to Christmas. An intelligent system can make decisions about when and how much product in order to optimise profitability.</p>` }
      ]
    },
    {
      number: '26', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3,
          question: `<p>Discuss ethical issues associated with the use of cameras, including facial recognition, in retail stores to identify possible security concerns.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Good discussion of a range of ethical issues relevant to the scenario.</td><td>3</td></tr>
<tr><td>Outlines ethical issues relevant to the scenario.</td><td>2</td></tr>
<tr><td>Identifies an ethical issue of relevance.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The use of cameras with facial recognition in retail stores raises several ethical issues, particularly around privacy, consent, bias, and data security:</p>
<p>Customers are entitled to a certain level of privacy even in public setting. This is a particular issue if customers are not aware they are being recorded or scanned by facial recognition systems. It can feel intrusive, especially when personal traits are analysed without explicit consent.</p>
<p>There is balance between the retail store being able to detect theft and the privacy of customers. Perhaps seeking consent via signs at the entrance to the store will go some way to alleviating theft and privacy concerns. A potential thief is likely deterred if they suspect their identity can be determined using facial recognition.</p>
<p>There is evidence showing the facial recognition software is less accurate for certain racial backgrounds and body types. This could lead to bias, false identification and false charges.</p>
<p>Data security of the video and identification of customers resulting from the facial recognition system. Should a retail store be able to store such data in the first place, and how will they secure such data? Facial biometric data could potentially be used to perform identity theft, for example.</p>` }
      ]
    },
    {
      number: '27', marks: 4, layout: 3,
      stimulus: `<table class="hoa-table-normal">
  <thead><tr><th>Component</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Biometric Scanner</td><td>Authenticates users by scanning facial features or fingerprints</td></tr>
    <tr><td>Microcontroller</td><td>Receives input data and sends signals to other devices</td></tr>
    <tr><td>Sensors</td><td>Detects motion and sound near restricted access areas</td></tr>
    <tr><td>Actuator</td><td>Locks or unlocks doors based on access permissions</td></tr>
  </tbody>
</table>`,
      items: [
        { type: 'text', marks: 4,
          question: `<p>Analyse how the interaction between the above components contributes to the effectiveness of an enterprise’s intelligent security system.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a clear, well-reasoned analysis of how all components interact, and judges their combined effectiveness in the system.</td><td>4</td></tr>
<tr><td>Describes how most components interact and makes a reasonable connection to system effectiveness.</td><td>3</td></tr>
<tr><td>Outlines multiple relevant components and their functions in intelligent security systems</td><td>2</td></tr>
<tr><td>Identifies some relevant components and their functions</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The components work together to automate and secure the system.</p>
<p>The biometric scanner takes an image of the person and identifies particular facial features or analyses their fingerprints. It then looks for a match with users in the system. If a match is found, then a signal is sent to the microcontroller in the relevant door lock. The controller then opens a circuit to provide power to the lock such that the actuator (likely an electromagnet) causes the striker to be disengaged such that the door opens.</p>
<p>Motion sensors generally detect movement using infrared heat but may also detect sound waves. The sensor then closes a circuit attached to the microcontroller which in turn sends a digital signal to the intelligent system. Often when motion is detected a camera is turned on and commences recording in the relevant area. A guard can be directed to the area to investigate via a text message.</p>
<p>The use of intelligent security systems reduces the need for human guards and provides fast, secure, and traceable access control. The interaction between the system components helps ensure that only authorised individuals gain entry and unauthorised entry is detected which increases both security and efficiency.</p>` }
      ]
    },
    {
      number: '28', marks: 6, layout: 3,
      stimulus: `<p>The following text describes how a mechanic diagnoses an engine that won’t start.</p>
<p><em>A customer brings in a car that won’t start. The mechanic first checks the battery and finds it’s fully charged, so that’s not the problem. Next, they turn the key and hear the engine crank, which means the starter motor is working. Then, they pull out a spark plug and test it—no spark. That points to an ignition problem. They inspect the ignition coil and find it has failed. After replacing the coil, the mechanic tests the engine again. This time, it starts right up.</em></p>
<p><em>If it did not start the mechanic would continue by checking for fuel reaching the engine. If no fuel, then they would check various fuel system components. If the engine still fails to start, then they move on to other system such as the computer control system and its various sensors.</em></p>`,
      items: [
        { type: 'text', marks: 6,
          question: `<p>Describe the role of each significant component of an expert system that simulates a mechanic diagnosing an engine that won’t start.</p>`,
          wordLimit: 150,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes the role of each significant component of an expert system that simulates a mechanic diagnosing an engine that won’t start.</td><td>6</td></tr>
<tr><td>Describes the role of most components of an expert system that simulates a mechanic diagnosing an engine that won’t start.</td><td>5</td></tr>
<tr><td>Describes the role of at least two components of an expert system that simulates a mechanic diagnosing an engine that won’t start.</td><td>4</td></tr>
<tr><td>Outlines the role of most expert system components without significant reference to the scenario.</td><td>3</td></tr>
<tr><td>Identifies most expert system components without significant reference to the scenario.</td><td>2</td></tr>
<tr><td>Response indicates some knowledge specific to expert systems.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>An expert system that simulates a mechanic diagnosing an engine that won’t start mirrors the logical steps and knowledge of an experienced mechanic.</p>
<p>An expert system typically includes the following components:</p>
<ul>
  <li>Knowledge base. This is where the system stores the mechanic’s knowledge, facts, and rules. For example it would include symptoms, such as “engine cranks but does not start”. Also rules such as “if battery is charged and engine cranks and no spark then check ignition coil”. Some rules are not so definitely, they may be based on rules of thumb aka heuristics. For instance a mechanic may know from experience that ignition issues in a single cylinder are something like 60% likely due to a faulty spark plug.</li>
  <li>Inference engine: This is the component that does the thinking. It uses the known facts and rules to reach conclusions. If a definitive conclusion cannot be reached then further questions will be needed to enable the inference engine to further interrogate the knowledge base. For example, if replacing the ignition coil does not solve the problem then the inference requires detail on the fuel system in order to diagnose fuel system components based on its knowledge base.</li>
  <li>User interface: The means by which the expert system communicates with the user to ask questions and provide advice.</li>
  <li>Explanation mechanism: Expert systems are able to explain why they reach conclusions by examining each of the rules that fired. For example, the system can explain that as the engine cranks there is no issue with the starter motor.</li>
  <li>Knowledge acquisition: This is for collecting the facts and rules. Often a knowledge engineer is engaged to logically code the expertise of the mechanic. The knowledge engineer works with the expert to create the knowledge base.</li>
</ul>` }
      ]
    },
    {
      number: '29', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2,
          question: `<p>Outline two tools that support the design and development of enterprise projects.</p>`,
          wordLimit: 50,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Outlines two tools that support the design and development of enterprise projects.</td><td>2</td></tr>
<tr><td>Identifies a tool that could be used to manage an enterprise project</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A Gantt chart is a visual tool for planning and ensuring that enterprise projects are being completed to schedule, with different subprojects having different deadlines. A process diary may also be used by a team to record daily project activities and reflections as a part of their system development process.</p>
<p><em>Answers could also include:</em></p>
<ul>
  <li>Online collaboration</li>
  <li>Budget</li>
  <li>System flowcharts</li>
  <li>Data flow diagrams</li>
  <li>Decision trees</li>
</ul>` }
      ]
    },
    {
      number: '30', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3,
          question: `<p>Explain how stakeholder feedback can influence the design and development of an enterprise system. In your response, refer to a specific development approach where feedback supports system development.</p>`,
          wordLimit: 80,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how stakeholder feedback can influence the design and development of an enterprise system. References a specific development approach where feedback supports system development.</td><td>3</td></tr>
<tr><td>Describes how stakeholder feedback can influence the design and development of an enterprise system.</td><td>2</td></tr>
<tr><td>Identifies a feature of feedback</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Stakeholder feedback can reveal specific needs or unexpected issues related to a developing system, prompting teams to adjust timelines, budgets or features. Effective communication with stakeholders ensures user satisfaction in the development of a new project, enhancing the possibility of a final product’s success.</p>
<p>The prototyping system development approach can incorporate stakeholder feedback as a part of the development process. Stakeholders can experience a working model of a developing system and provide their input related to areas of function, efficiency and design. From here a development team can then modify the prototype to better meet the stakeholders’ needs.</p>` }
      ]
    },
    {
      number: '31', marks: 4, layout: 1,
      stimulus: `<p>The decision tree below illustrates how multi-factor authentication is used to manage access to an enterprise system. A one-time password (OTP) is sent as a text message to the user’s mobile phone.</p>
<p><img src="assets/ind2025/q31-decision-tree.png" alt="Decision tree: User authentication branches on Username (Incorrect leads to Access Denied; Correct leads to Password). Password Incorrect: OTP Incorrect – Denied, OTP Correct – Granted. Password Correct: OTP Incorrect – Denied, OTP Correct – Granted."></p>`,
      items: [
        { type: 'text', marks: 4,
          question: `<p>Identify different ways users can authenticate themselves when accessing this system. Justify the reasoning that may be behind the use of this specific strategy and outline any issues you perceive.</p>`,
          wordLimit: 100,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Using the information presented in the decision tree, explains different ways users can authenticate themselves when accessing this new system AND justifies the reasoning that may be behind the use of this specific strategy and outline any perceived issues.</td><td>4</td></tr>
<tr><td>Using the information presented in the decision tree, explains different ways users can authenticate themselves when accessing this new system.</td><td>3</td></tr>
<tr><td>Outlines ways users can authenticate themselves when accessing this new system based on the decision tree.</td><td>2</td></tr>
<tr><td>Identifies a feature of a decision tree.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Based on the decision tree displayed, users need to firstly authenticate themselves using their username credential. If a user is unable to remember their username information, then there is no way they can access this new system.</p>
<p>When it comes to their password there appears to be a bit more flexibility. This may be at the discretion of each user, but if a user does not enter or remember their correct password, they are still able to access the system using multi-factor authentication (MFA) and entering a correct one-time password (OTP) that is sent to their mobile phone as a text message. This supports system access for the user by using flexible security protocols.</p>
<p>While this method provides options to support user access, it may make using password authentication a bit redundant as it can be bypassed to access the system. It could also be seen as impacting the integrity of the MFA method, as not all factors are required to access the system.</p>
<p>Answers may also include an argument that correct username and password should allow users direct access to a system without the use of MFA.</p>` }
      ]
    },
    {
      number: '32', marks: 6, layout: 3,
      stimulus: `<p>Maxwell is leading a small enterprise computing project for a new start-up developing a mobile productivity app. His team includes a freelance UX designer in Vietnam, a remote backend developer based in Perth and a local university intern.</p>`,
      items: [
        { type: 'text', marks: 6,
          question: `<p>Discuss how the following factors may affect the development of Maxwell’s project.</p>
<ul>
  <li>Offshore development</li>
  <li>Working remotely</li>
  <li>Freelance work</li>
  <li>Enabling the growth of start-ups</li>
</ul>`,
          wordLimit: 150,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Excellent discussion, addressing all FOUR factors and how each affects the development of the scenario’s system.</td><td>6</td></tr>
<tr><td>Good discussion, addressing all FOUR factors and how each affects the development of the scenario’s system</td><td>5</td></tr>
<tr><td>Good discussion, addressing THREE factors and how each affects the development of the scenario’s system</td><td>4</td></tr>
<tr><td>Good discussion, addressing TWO factors well OR all FOUR factors trivially, including how each affects the development of the scenario’s system.</td><td>3</td></tr>
<tr><td>Outlines ONE factor OR discusses TWO factors.</td><td>2</td></tr>
<tr><td>Identifies a relevant factor.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Offshore development has allowed Maxwell to access skilled professionals in different countries, the freelance UX designer in Vietnam provides design services that may not be locally available or potentially be more affordable than local workers, supporting both the quality and cost of the system being developed.</p>
<p>Working remotely offers flexibility for developers and project managers, as seen with the backend developer based in Perth. This can improve job satisfaction and reduce costs for the enterprise. Freelance work provides enterprises and start-ups with the ability to scale their workforce temporarily without committing to long-term contracts.</p>
<p>However, working across time zones can delay communication and feedback, leading to slower iterations and potential misunderstandings unless clear schedules and online collaboration tools are used effectively. Freelancers may be working on multiple projects simultaneously, which can reduce availability and commitment to the enterprise project unless expectations are clearly defined upfront.</p>
<p>The changing nature of enterprise has enabled the growth of start-ups by lowering entry barriers. Cloud-based collaboration, flexible staffing models and remote work options mean start-ups like Maxwell’s can operate without large investments in physical infrastructure or full-time staff, especially when supported by larger enterprises. This agility allows them to innovate quickly and respond rapidly to market demands, making enterprise computing projects more dynamic and scalable.</p>` }
      ]
    }
  ],
  figures: [
    { out: 'assets/ind2025/q8-dfd.png', file: 'ind2025-q.pdf', page: 5, box: [200, 455, 730, 825] },
    { out: 'assets/ind2025/q16-symbol1.png', file: 'ind2025-q.pdf', page: 11, box: [172, 178, 378, 292] },
    { out: 'assets/ind2025/q16-symbol2.png', file: 'ind2025-q.pdf', page: 11, box: [172, 301, 378, 417] },
    { out: 'assets/ind2025/q16-symbol3.png', file: 'ind2025-q.pdf', page: 11, box: [172, 426, 378, 540] },
    { out: 'assets/ind2025/q16-symbol4.png', file: 'ind2025-q.pdf', page: 11, box: [172, 550, 378, 665] },
    { out: 'assets/ind2025/q16-symbol5.png', file: 'ind2025-q.pdf', page: 11, box: [172, 674, 378, 787] },
    { out: 'assets/ind2025/q16-symbol6.png', file: 'ind2025-q.pdf', page: 11, box: [172, 797, 378, 910] },
    { out: 'assets/ind2025/q19-schema.png', file: 'ind2025-q.pdf', page: 13, box: [160, 238, 690, 422] },
    { out: 'assets/ind2025/q23-answer-pivot.png', file: 'ind2025-a.pdf', page: 6, box: [140, 800, 815, 1102] },
    { out: 'assets/ind2025/q24-dashboard.jpg', file: 'ind2025-q.pdf', page: 17, box: [80, 195, 780, 555] },
    { out: 'assets/ind2025/q31-decision-tree.png', file: 'ind2025-q.pdf', page: 22, box: [95, 225, 800, 500] }
  ]
});
