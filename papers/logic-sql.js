/* Logic - SQL queries. Auto-marked questions from ec.eforge.online (Data Science) and the EPC textbook. Built by build-logic.ps1. */
(function () {
var SCHOOL_DB = `CREATE TABLE Students (StudentID INTEGER PRIMARY KEY, FirstName TEXT, LastName TEXT, YearGroup INTEGER);
INSERT INTO Students VALUES (1,'Mia','Nguyen',12);
INSERT INTO Students VALUES (2,'Liam','Martin',11);
INSERT INTO Students VALUES (3,'Zoe','Taylor',12);
INSERT INTO Students VALUES (4,'Noah','Morris',12);
INSERT INTO Students VALUES (5,'Ava','Smith',11);
INSERT INTO Students VALUES (6,'Ethan','Patel',12);
INSERT INTO Students VALUES (7,'Chloe','Mitchell',11);
INSERT INTO Students VALUES (8,'Jack','Brown',12);
CREATE TABLE Enrolments (EnrolmentID INTEGER PRIMARY KEY, StudentID INTEGER REFERENCES Students(StudentID), CourseName TEXT);
INSERT INTO Enrolments VALUES (1,1,'Enterprise Computing');
INSERT INTO Enrolments VALUES (2,1,'Business Studies');
INSERT INTO Enrolments VALUES (3,2,'Business Studies');
INSERT INTO Enrolments VALUES (4,3,'Enterprise Computing');
INSERT INTO Enrolments VALUES (5,4,'Software Engineering');
INSERT INTO Enrolments VALUES (6,4,'Enterprise Computing');
INSERT INTO Enrolments VALUES (7,5,'Business Studies');
INSERT INTO Enrolments VALUES (8,6,'Enterprise Computing');
INSERT INTO Enrolments VALUES (9,7,'Software Engineering');
INSERT INTO Enrolments VALUES (10,8,'Business Studies');
INSERT INTO Enrolments VALUES (11,8,'Enterprise Computing');
INSERT INTO Enrolments VALUES (12,3,'Mathematics Advanced');
CREATE TABLE Teachers (TeacherID TEXT PRIMARY KEY, FirstName TEXT, LastName TEXT, SubjectCode TEXT);
INSERT INTO Teachers VALUES ('T01','Sarah','Wilson','EC101');
INSERT INTO Teachers VALUES ('T02','David','Chen','BS201');
INSERT INTO Teachers VALUES ('T03','Priya','Kumar','EC101');
INSERT INTO Teachers VALUES ('T04','Tom','Harris','SE301');
INSERT INTO Teachers VALUES ('T05','Lucy','Evans','MA101');`;
var SALES_DB = `CREATE TABLE sales_data (order_id INTEGER PRIMARY KEY, customer_name TEXT, region TEXT, product TEXT, quantity INTEGER, price REAL, order_date TEXT);
INSERT INTO sales_data VALUES (101,'Alice Brown','East','Laptop',1,1200,'2024-03-01');
INSERT INTO sales_data VALUES (102,'Ben Lee','West','Tablet',3,300,'2024-03-02');
INSERT INTO sales_data VALUES (103,'Cara Smith','North','Laptop',2,1150,'2024-03-05');
INSERT INTO sales_data VALUES (104,'Dylan Wong','East','Phone',5,800,'2024-03-05');
INSERT INTO sales_data VALUES (105,'Ella Jones','South','Tablet',4,320,'2024-03-06');
CREATE TABLE customers (customer_name TEXT, region TEXT, sales_rep TEXT);
INSERT INTO customers VALUES ('Alice Brown','East','Rep A');
INSERT INTO customers VALUES ('Ben Lee','West','Rep B');
INSERT INTO customers VALUES ('Cara Smith','North','Rep C');
INSERT INTO customers VALUES ('Dylan Wong','East','Rep A');
INSERT INTO customers VALUES ('Ella Jones','South','Rep D');`;
registerExam({
  id: 'logic-sql',
  title: 'Logic — SQL queries',
  source: 'ec.eforge.online + EPC textbook', year: 2026, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 63,
  coverNotes: `<p>Write SQL queries and check them: your query is run on the tables shown and its output is compared with the expected output (column names and order do not matter). Questions from ec.eforge.online (Data Science) and the EPC textbook.</p>`,
  groups: [
    // ================= Ec.eforge — Data Science: Using SQL for Sorting & Searching =================
    { number: '1', marks: 1, layout: 0, section: 'Ec.eforge · Basic SELECT',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to display all fields from the table called <strong>Students</strong>.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT * FROM Students`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM Students;</pre><p>The * means "all fields".</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Ec.eforge · SELECT with Specific Columns',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to show only the FirstName, LastName and YearGroup of the students in the Students table.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT FirstName, LastName, YearGroup FROM Students`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT FirstName, LastName, YearGroup
FROM Students;</pre>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Ec.eforge · WHERE Clause',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to find all students in YearGroup 12 from the Students table.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT * FROM Students WHERE YearGroup = 12`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM Students
WHERE YearGroup = 12;</pre><p>WHERE keeps only the rows that meet the condition.</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Ec.eforge · ORDER BY',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to list all students in the Students table ordered by LastName in alphabetical order.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT * FROM Students ORDER BY LastName ASC`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM Students
ORDER BY LastName ASC;</pre><p>ASC (ascending, A → Z) is the default order.</p>` }
      ] },
    { number: '5', marks: 2, layout: 0, section: 'Ec.eforge · JOIN Two Tables',
      items: [
        { type: 'sql', marks: 2, showTables: true,
          question: `<p>You have two tables: Students(StudentID, FirstName, LastName, YearGroup) and Enrolments(EnrolmentID, StudentID, CourseName).</p><p>Write an SQL query to show each student's full name with the course they are enrolled in.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [
            `SELECT Students.FirstName, Students.LastName, Enrolments.CourseName FROM Students JOIN Enrolments ON Students.StudentID = Enrolments.StudentID`,
            `SELECT Students.FirstName || ' ' || Students.LastName, Enrolments.CourseName FROM Students JOIN Enrolments ON Students.StudentID = Enrolments.StudentID`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Students.FirstName, Students.LastName, Enrolments.CourseName
FROM Students
JOIN Enrolments ON Students.StudentID = Enrolments.StudentID;</pre><p>The JOIN links each enrolment to its student using the shared StudentID (primary key → foreign key). Combining the names into one column (FirstName || ' ' || LastName) is also accepted.</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Ec.eforge · COUNT Aggregate Function',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to count the number of students in the Enrolments table with the CourseName "Business Studies".</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT COUNT(*) FROM Enrolments WHERE CourseName = 'Business Studies'`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT COUNT(*)
FROM Enrolments
WHERE CourseName = 'Business Studies';</pre><p>COUNT(*) counts the rows left after the WHERE filter.</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Ec.eforge · DISTINCT Keyword',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to list every unique CourseName in the Enrolments table.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT DISTINCT CourseName FROM Enrolments`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT DISTINCT CourseName
FROM Enrolments;</pre><p>DISTINCT removes duplicate values from the result.</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Ec.eforge · LIKE Pattern Matching',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to find all students in the Students table whose LastName starts with the letter "M".</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT * FROM Students WHERE LastName LIKE 'M%'`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM Students
WHERE LastName LIKE 'M%';</pre><p>In a LIKE pattern, % stands for any number of characters, so 'M%' means "starts with M".</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Ec.eforge · Data Dictionary Prompt',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Given the table Teachers(TeacherID, FirstName, LastName, SubjectCode), write an SQL query to list all teachers who teach the subject with code "EC101".</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { queries: [`SELECT * FROM Teachers WHERE SubjectCode = 'EC101'`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM Teachers
WHERE SubjectCode = 'EC101';</pre>` }
      ] },
    { number: '10', marks: 3, layout: 0, section: 'Ec.eforge · Parameter for Report Generation',
      items: [
        { type: 'sql', marks: 3, showTables: true,
          question: `<p>You have two tables: Students(StudentID, FirstName, LastName, YearGroup) and Enrolments(EnrolmentID, StudentID, CourseName).</p><p>Write an SQL query suitable for a report that shows the FirstName, LastName and CourseName of all enrolments for the course named "Enterprise Computing", sorted by student LastName.</p>`,
          setup: SCHOOL_DB,
          sqlAnswer: { orderBy: [[1, 'asc']], queries: [`SELECT Students.FirstName, Students.LastName, Enrolments.CourseName FROM Students JOIN Enrolments ON Students.StudentID = Enrolments.StudentID WHERE Enrolments.CourseName = 'Enterprise Computing' ORDER BY Students.LastName`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Students.FirstName, Students.LastName, Enrolments.CourseName
FROM Students
JOIN Enrolments ON Students.StudentID = Enrolments.StudentID
WHERE Enrolments.CourseName = 'Enterprise Computing'
ORDER BY Students.LastName;</pre><p><em>The ec.eforge site gives no sample answer for this question; this one was written to match the task.</em></p>` }
      ] },
    { number: '11', marks: 1, layout: 0, section: 'Ec.eforge · Inspect the Dataset',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Write an SQL query to display all records from <strong>sales_data</strong>.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT * FROM sales_data`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT *
FROM sales_data;</pre>` }
      ] },
    { number: '12', marks: 1, layout: 0, section: 'Ec.eforge · Choose Specific Information',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Using sales_data, display only the customer_name, product and quantity columns.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT customer_name, product, quantity FROM sales_data`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT customer_name, product, quantity
FROM sales_data;</pre>` }
      ] },
    { number: '13', marks: 2, layout: 0, section: 'Ec.eforge · Filter the Records',
      items: [
        { type: 'sql', marks: 2, showTables: true,
          question: `<p>Using sales_data, show only the Tablet sales, sorted by region (A → Z).</p>`,
          setup: SALES_DB,
          sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT * FROM sales_data WHERE product = 'Tablet' ORDER BY region ASC`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT *
FROM sales_data
WHERE product = 'Tablet'
ORDER BY region ASC;</pre><p><em>The ec.eforge site's sample answer (WHERE region = 'East') doesn't match this task, so it was corrected.</em></p>` }
      ] },
    { number: '14', marks: 2, layout: 0, section: 'Ec.eforge · Calculate Totals per Region',
      items: [
        { type: 'sql', marks: 2, showTables: true,
          question: `<p>Use GROUP BY to display the total sales (quantity × price) for each region in sales_data.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT region, SUM(quantity * price) AS total_sales FROM sales_data GROUP BY region ORDER BY total_sales DESC`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT region, SUM(quantity * price) AS total_sales
FROM sales_data
GROUP BY region
ORDER BY total_sales DESC;</pre><p>GROUP BY makes one row per region and SUM adds up quantity × price for the orders in each group. (Sorting is optional here.)</p>` }
      ] },
    { number: '15', marks: 3, layout: 0, section: 'Ec.eforge · Combine Datasets',
      items: [
        { type: 'sql', marks: 3, showTables: true,
          question: `<p>Join the <strong>customers</strong> table with sales_data to show each order with its sales representative. Show the order_id, customer_name, region, product, quantity, price and sales_rep.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [
            `SELECT s.order_id, s.customer_name, s.region, s.product, s.quantity, s.price, c.sales_rep FROM sales_data AS s JOIN customers AS c ON s.customer_name = c.customer_name AND s.region = c.region`,
            `SELECT s.*, c.sales_rep FROM sales_data AS s JOIN customers AS c ON s.customer_name = c.customer_name`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT s.order_id, s.customer_name, s.region, s.product,
       s.quantity, s.price, c.sales_rep
FROM sales_data AS s
JOIN customers AS c
  ON s.customer_name = c.customer_name
 AND s.region = c.region;</pre><p>The tables share customer_name (and region), so the JOIN matches each order to the customer's sales representative. AS gives the tables short aliases.</p>` }
      ] },
    { number: '16', marks: 2, layout: 0, section: 'Ec.eforge · Count Orders by Product',
      items: [
        { type: 'sql', marks: 2, showTables: true,
          question: `<p>Using sales_data, show how many orders were placed for each product, using COUNT().</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT product, COUNT(*) AS order_count FROM sales_data GROUP BY product ORDER BY order_count DESC, product`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT product, COUNT(*) AS order_count
FROM sales_data
GROUP BY product
ORDER BY order_count DESC, product;</pre>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Ec.eforge · Identify Unique Regions',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Return a list of the distinct regions in sales_data.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT DISTINCT region FROM sales_data ORDER BY region`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT DISTINCT region
FROM sales_data
ORDER BY region;</pre>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Ec.eforge · Sort the Results',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Display all orders in sales_data sorted by price in descending order.</p>`,
          setup: SALES_DB,
          sqlAnswer: { orderBy: [[5, 'desc']], queries: [`SELECT * FROM sales_data ORDER BY price DESC`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT *
FROM sales_data
ORDER BY price DESC;</pre>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Ec.eforge · Search by Product Name',
      items: [
        { type: 'sql', marks: 1, showTables: true,
          question: `<p>Show all orders in sales_data where the product name contains the word "Tab", using LIKE.</p>`,
          setup: SALES_DB,
          sqlAnswer: { queries: [`SELECT * FROM sales_data WHERE product LIKE '%Tab%'`] },
          guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT *
FROM sales_data
WHERE product LIKE '%Tab%';</pre><p>'%Tab%' matches "Tab" anywhere in the text.</p>` }
      ] },

{ number: '20', marks: 1, layout: 0, section: 'Textbook p. 228 · The flat-file database',
  stimulus: `<p><strong>School library catalogue</strong></p><p>A school library records its whole collection in a flat-file database: all the data is held in a single table, <strong>Library</strong>, with one row per book. Each row stores the book's ISBN, title, author, genre and year of publication, along with its current loan status.</p><p>The <strong>Availability</strong> field holds either <em>Available</em> (the book is on the shelf) or <em>Borrowed</em> (the book is out on loan). For a borrowed book, <strong>BorrowerName</strong> records who has it and <strong>DueDate</strong> records when it must be returned; for a book on the shelf both fields are empty (NULL). Dates are stored as text in the form YYYY-MM-DD, and field names contain no spaces so they are easy to use in SQL.</p>`,
  items: [
    { type: 'sql', marks: 1,
      question: `<p>Write an SQL query that lists the <strong>Title</strong> and <strong>Author</strong> of every book in the <strong>Fantasy</strong> genre that is currently <strong>Available</strong>.</p>
<p><strong>Library</strong></p><table class="hoa-table-normal"><thead><tr><th>ISBN</th><th>Title</th><th>Author</th><th>Genre</th><th>YearPublished</th><th>Availability</th><th>BorrowerName</th><th>DueDate</th></tr></thead><tbody>
<tr><td>978-0064404990</td><td>The Lion, the Witch &amp; Wardrobe</td><td>C.S. Lewis</td><td>Fantasy</td><td>1950</td><td>Borrowed</td><td>Alice Johnson</td><td>2025-03-12</td></tr>
<tr><td>978-0142410370</td><td>Matilda</td><td>Roald Dahl</td><td>Fiction</td><td>1988</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0312367541</td><td>A Wrinkle in Time</td><td>Madeleine L'Engle</td><td>Sci-Fi</td><td>1962</td><td>Borrowed</td><td>Ben Thompson</td><td>2025-03-15</td></tr>
<tr><td>978-1514638811</td><td>Anne of Green Gables</td><td>L.M. Montgomery</td><td>Classic</td><td>1908</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0064401883</td><td>The Secret Garden</td><td>Frances Hodgson Burnett</td><td>Classic</td><td>1911</td><td>Borrowed</td><td>Sophie Lee</td><td>2025-03-10</td></tr>
<tr><td>978-0064410939</td><td>Charlotte's Web</td><td>E.B. White</td><td>Fiction</td><td>1952</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-1503222687</td><td>Alice's Adventures in Wonderland</td><td>Lewis Carroll</td><td>Fantasy</td><td>1865</td><td>Borrowed</td><td>Daniel Carter</td><td>2025-03-14</td></tr>
<tr><td>978-0747532743</td><td>Harry Potter and the Philosopher's Stone</td><td>J.K. Rowling</td><td>Fantasy</td><td>1997</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0547928227</td><td>The Hobbit</td><td>J.R.R. Tolkien</td><td>Fantasy</td><td>1937</td><td>Borrowed</td><td>Emma Roberts</td><td>2025-03-18</td></tr>
<tr><td>978-0786838653</td><td>Percy Jackson &amp; The Lightning Thief</td><td>Rick Riordan</td><td>Fantasy</td><td>2005</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Library (ISBN TEXT PRIMARY KEY, Title TEXT, Author TEXT, Genre TEXT, YearPublished INTEGER, Availability TEXT, BorrowerName TEXT, DueDate TEXT);
INSERT INTO Library VALUES ('978-0064404990','The Lion, the Witch & Wardrobe','C.S. Lewis','Fantasy',1950,'Borrowed','Alice Johnson','2025-03-12');
INSERT INTO Library VALUES ('978-0142410370','Matilda','Roald Dahl','Fiction',1988,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0312367541','A Wrinkle in Time','Madeleine L''Engle','Sci-Fi',1962,'Borrowed','Ben Thompson','2025-03-15');
INSERT INTO Library VALUES ('978-1514638811','Anne of Green Gables','L.M. Montgomery','Classic',1908,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0064401883','The Secret Garden','Frances Hodgson Burnett','Classic',1911,'Borrowed','Sophie Lee','2025-03-10');
INSERT INTO Library VALUES ('978-0064410939','Charlotte''s Web','E.B. White','Fiction',1952,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-1503222687','Alice''s Adventures in Wonderland','Lewis Carroll','Fantasy',1865,'Borrowed','Daniel Carter','2025-03-14');
INSERT INTO Library VALUES ('978-0747532743','Harry Potter and the Philosopher''s Stone','J.K. Rowling','Fantasy',1997,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0547928227','The Hobbit','J.R.R. Tolkien','Fantasy',1937,'Borrowed','Emma Roberts','2025-03-18');
INSERT INTO Library VALUES ('978-0786838653','Percy Jackson & The Lightning Thief','Rick Riordan','Fantasy',2005,'Available',NULL,NULL);`,
      sqlAnswer: { queries: [`SELECT Title, Author FROM Library WHERE Genre = 'Fantasy' AND Availability = 'Available'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Title, Author
FROM Library
WHERE Genre = 'Fantasy' AND Availability = 'Available';</pre><p>Both conditions must be true, so they are joined with AND. Only Harry Potter and the Philosopher's Stone and Percy Jackson &amp; The Lightning Thief are returned (textbook p. 228). The book's table shows dates as dd/mm/yyyy and '-' for empty cells; here dates are stored as YYYY-MM-DD and empty cells as NULL.</p>` }
  ] },
{ number: '21', marks: 2, layout: 0, section: 'Textbook p. 228 · The flat-file database',
  stimulus: `<p><strong>School library catalogue</strong></p><p>A school library records its whole collection in a flat-file database: all the data is held in a single table, <strong>Library</strong>, with one row per book. Each row stores the book's ISBN, title, author, genre and year of publication, along with its current loan status.</p><p>The <strong>Availability</strong> field holds either <em>Available</em> (the book is on the shelf) or <em>Borrowed</em> (the book is out on loan). For a borrowed book, <strong>BorrowerName</strong> records who has it and <strong>DueDate</strong> records when it must be returned; for a book on the shelf both fields are empty (NULL). Dates are stored as text in the form YYYY-MM-DD, and field names contain no spaces so they are easy to use in SQL.</p>`,
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Using the <strong>Library</strong> table, write an SQL query that lists the <strong>Title</strong>, <strong>BorrowerName</strong> and <strong>DueDate</strong> of every book that is currently <strong>Borrowed</strong>, with the book that is due back soonest listed first.</p>
<p><strong>Library</strong></p><table class="hoa-table-normal"><thead><tr><th>ISBN</th><th>Title</th><th>Author</th><th>Genre</th><th>YearPublished</th><th>Availability</th><th>BorrowerName</th><th>DueDate</th></tr></thead><tbody>
<tr><td>978-0064404990</td><td>The Lion, the Witch &amp; Wardrobe</td><td>C.S. Lewis</td><td>Fantasy</td><td>1950</td><td>Borrowed</td><td>Alice Johnson</td><td>2025-03-12</td></tr>
<tr><td>978-0142410370</td><td>Matilda</td><td>Roald Dahl</td><td>Fiction</td><td>1988</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0312367541</td><td>A Wrinkle in Time</td><td>Madeleine L'Engle</td><td>Sci-Fi</td><td>1962</td><td>Borrowed</td><td>Ben Thompson</td><td>2025-03-15</td></tr>
<tr><td>978-1514638811</td><td>Anne of Green Gables</td><td>L.M. Montgomery</td><td>Classic</td><td>1908</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0064401883</td><td>The Secret Garden</td><td>Frances Hodgson Burnett</td><td>Classic</td><td>1911</td><td>Borrowed</td><td>Sophie Lee</td><td>2025-03-10</td></tr>
<tr><td>978-0064410939</td><td>Charlotte's Web</td><td>E.B. White</td><td>Fiction</td><td>1952</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-1503222687</td><td>Alice's Adventures in Wonderland</td><td>Lewis Carroll</td><td>Fantasy</td><td>1865</td><td>Borrowed</td><td>Daniel Carter</td><td>2025-03-14</td></tr>
<tr><td>978-0747532743</td><td>Harry Potter and the Philosopher's Stone</td><td>J.K. Rowling</td><td>Fantasy</td><td>1997</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0547928227</td><td>The Hobbit</td><td>J.R.R. Tolkien</td><td>Fantasy</td><td>1937</td><td>Borrowed</td><td>Emma Roberts</td><td>2025-03-18</td></tr>
<tr><td>978-0786838653</td><td>Percy Jackson &amp; The Lightning Thief</td><td>Rick Riordan</td><td>Fantasy</td><td>2005</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Library (ISBN TEXT PRIMARY KEY, Title TEXT, Author TEXT, Genre TEXT, YearPublished INTEGER, Availability TEXT, BorrowerName TEXT, DueDate TEXT);
INSERT INTO Library VALUES ('978-0064404990','The Lion, the Witch & Wardrobe','C.S. Lewis','Fantasy',1950,'Borrowed','Alice Johnson','2025-03-12');
INSERT INTO Library VALUES ('978-0142410370','Matilda','Roald Dahl','Fiction',1988,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0312367541','A Wrinkle in Time','Madeleine L''Engle','Sci-Fi',1962,'Borrowed','Ben Thompson','2025-03-15');
INSERT INTO Library VALUES ('978-1514638811','Anne of Green Gables','L.M. Montgomery','Classic',1908,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0064401883','The Secret Garden','Frances Hodgson Burnett','Classic',1911,'Borrowed','Sophie Lee','2025-03-10');
INSERT INTO Library VALUES ('978-0064410939','Charlotte''s Web','E.B. White','Fiction',1952,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-1503222687','Alice''s Adventures in Wonderland','Lewis Carroll','Fantasy',1865,'Borrowed','Daniel Carter','2025-03-14');
INSERT INTO Library VALUES ('978-0747532743','Harry Potter and the Philosopher''s Stone','J.K. Rowling','Fantasy',1997,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0547928227','The Hobbit','J.R.R. Tolkien','Fantasy',1937,'Borrowed','Emma Roberts','2025-03-18');
INSERT INTO Library VALUES ('978-0786838653','Percy Jackson & The Lightning Thief','Rick Riordan','Fantasy',2005,'Available',NULL,NULL);`,
      sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT Title, BorrowerName, DueDate FROM Library WHERE Availability = 'Borrowed' ORDER BY DueDate ASC`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Title, BorrowerName, DueDate
FROM Library
WHERE Availability = 'Borrowed'
ORDER BY DueDate ASC;</pre><p>WHERE keeps only the borrowed books and ORDER BY DueDate ASC puts the earliest due date (The Secret Garden, 2025-03-10) first. Dates stored as YYYY-MM-DD text sort correctly in date order (textbook p. 228).</p>` }
  ] },
{ number: '22', marks: 2, layout: 0, section: 'Textbook p. 228 · The flat-file database',
  stimulus: `<p><strong>School library catalogue</strong></p><p>A school library records its whole collection in a flat-file database: all the data is held in a single table, <strong>Library</strong>, with one row per book. Each row stores the book's ISBN, title, author, genre and year of publication, along with its current loan status.</p><p>The <strong>Availability</strong> field holds either <em>Available</em> (the book is on the shelf) or <em>Borrowed</em> (the book is out on loan). For a borrowed book, <strong>BorrowerName</strong> records who has it and <strong>DueDate</strong> records when it must be returned; for a book on the shelf both fields are empty (NULL). Dates are stored as text in the form YYYY-MM-DD, and field names contain no spaces so they are easy to use in SQL.</p>`,
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Using the <strong>Library</strong> table, write an SQL query that shows each <strong>Genre</strong> together with the <strong>number of books</strong> in that genre.</p>
<p><strong>Library</strong></p><table class="hoa-table-normal"><thead><tr><th>ISBN</th><th>Title</th><th>Author</th><th>Genre</th><th>YearPublished</th><th>Availability</th><th>BorrowerName</th><th>DueDate</th></tr></thead><tbody>
<tr><td>978-0064404990</td><td>The Lion, the Witch &amp; Wardrobe</td><td>C.S. Lewis</td><td>Fantasy</td><td>1950</td><td>Borrowed</td><td>Alice Johnson</td><td>2025-03-12</td></tr>
<tr><td>978-0142410370</td><td>Matilda</td><td>Roald Dahl</td><td>Fiction</td><td>1988</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0312367541</td><td>A Wrinkle in Time</td><td>Madeleine L'Engle</td><td>Sci-Fi</td><td>1962</td><td>Borrowed</td><td>Ben Thompson</td><td>2025-03-15</td></tr>
<tr><td>978-1514638811</td><td>Anne of Green Gables</td><td>L.M. Montgomery</td><td>Classic</td><td>1908</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0064401883</td><td>The Secret Garden</td><td>Frances Hodgson Burnett</td><td>Classic</td><td>1911</td><td>Borrowed</td><td>Sophie Lee</td><td>2025-03-10</td></tr>
<tr><td>978-0064410939</td><td>Charlotte's Web</td><td>E.B. White</td><td>Fiction</td><td>1952</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-1503222687</td><td>Alice's Adventures in Wonderland</td><td>Lewis Carroll</td><td>Fantasy</td><td>1865</td><td>Borrowed</td><td>Daniel Carter</td><td>2025-03-14</td></tr>
<tr><td>978-0747532743</td><td>Harry Potter and the Philosopher's Stone</td><td>J.K. Rowling</td><td>Fantasy</td><td>1997</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
<tr><td>978-0547928227</td><td>The Hobbit</td><td>J.R.R. Tolkien</td><td>Fantasy</td><td>1937</td><td>Borrowed</td><td>Emma Roberts</td><td>2025-03-18</td></tr>
<tr><td>978-0786838653</td><td>Percy Jackson &amp; The Lightning Thief</td><td>Rick Riordan</td><td>Fantasy</td><td>2005</td><td>Available</td><td>NULL</td><td>NULL</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Library (ISBN TEXT PRIMARY KEY, Title TEXT, Author TEXT, Genre TEXT, YearPublished INTEGER, Availability TEXT, BorrowerName TEXT, DueDate TEXT);
INSERT INTO Library VALUES ('978-0064404990','The Lion, the Witch & Wardrobe','C.S. Lewis','Fantasy',1950,'Borrowed','Alice Johnson','2025-03-12');
INSERT INTO Library VALUES ('978-0142410370','Matilda','Roald Dahl','Fiction',1988,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0312367541','A Wrinkle in Time','Madeleine L''Engle','Sci-Fi',1962,'Borrowed','Ben Thompson','2025-03-15');
INSERT INTO Library VALUES ('978-1514638811','Anne of Green Gables','L.M. Montgomery','Classic',1908,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0064401883','The Secret Garden','Frances Hodgson Burnett','Classic',1911,'Borrowed','Sophie Lee','2025-03-10');
INSERT INTO Library VALUES ('978-0064410939','Charlotte''s Web','E.B. White','Fiction',1952,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-1503222687','Alice''s Adventures in Wonderland','Lewis Carroll','Fantasy',1865,'Borrowed','Daniel Carter','2025-03-14');
INSERT INTO Library VALUES ('978-0747532743','Harry Potter and the Philosopher''s Stone','J.K. Rowling','Fantasy',1997,'Available',NULL,NULL);
INSERT INTO Library VALUES ('978-0547928227','The Hobbit','J.R.R. Tolkien','Fantasy',1937,'Borrowed','Emma Roberts','2025-03-18');
INSERT INTO Library VALUES ('978-0786838653','Percy Jackson & The Lightning Thief','Rick Riordan','Fantasy',2005,'Available',NULL,NULL);`,
      sqlAnswer: { queries: [`SELECT Genre, COUNT(*) AS NumberOfBooks FROM Library GROUP BY Genre`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Genre, COUNT(*) AS NumberOfBooks
FROM Library
GROUP BY Genre;</pre><p>GROUP BY makes one row per genre and COUNT(*) counts the books in each group: Classic 2, Fantasy 5, Fiction 2, Sci-Fi 1 (textbook p. 228).</p>` }
  ] },
{ number: '23', marks: 1, layout: 0, section: 'Textbook p. 236 · The logical organisation of relational databases',
  items: [
    { type: 'sql', marks: 1,
      question: `<p>The library database contains a <strong>Titles</strong> table. Write an SQL query that lists the <strong>Title</strong> and <strong>ISBN</strong> of every title that begins with <strong>SDD</strong>.</p>
<p><strong>Titles</strong></p><table class="hoa-table-normal"><thead><tr><th>TitleID</th><th>Title</th><th>ISBN</th></tr></thead><tbody>
<tr><td>1</td><td>IPT The HSC Course</td><td>0 9578910 3 2</td></tr>
<tr><td>2</td><td>IPT The Preliminary Course</td><td>0 9578910 5 9</td></tr>
<tr><td>3</td><td>SDD The HSC Course</td><td>0 646 40837 2</td></tr>
<tr><td>4</td><td>SDD The Preliminary Course</td><td>0 9578910 1 6</td></tr>
<tr><td>5</td><td>SDD The Preliminary Course TRK</td><td>0 9578910 2 4</td></tr>
<tr><td>6</td><td>SDD The HSC Course TRK</td><td>0 9578910 0 8</td></tr>
<tr><td>7</td><td>IPT The Preliminary Course TRK</td><td>0 9578910 6 7</td></tr>
<tr><td>8</td><td>IPT The HSC Course TRK</td><td>0 9578910 4 0</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Titles (TitleID INTEGER PRIMARY KEY, Title TEXT, ISBN TEXT);
INSERT INTO Titles VALUES (1,'IPT The HSC Course','0 9578910 3 2');
INSERT INTO Titles VALUES (2,'IPT The Preliminary Course','0 9578910 5 9');
INSERT INTO Titles VALUES (3,'SDD The HSC Course','0 646 40837 2');
INSERT INTO Titles VALUES (4,'SDD The Preliminary Course','0 9578910 1 6');
INSERT INTO Titles VALUES (5,'SDD The Preliminary Course TRK','0 9578910 2 4');
INSERT INTO Titles VALUES (6,'SDD The HSC Course TRK','0 9578910 0 8');
INSERT INTO Titles VALUES (7,'IPT The Preliminary Course TRK','0 9578910 6 7');
INSERT INTO Titles VALUES (8,'IPT The HSC Course TRK','0 9578910 4 0');`,
      sqlAnswer: { queries: [`SELECT Title, ISBN FROM Titles WHERE Title LIKE 'SDD%'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Title, ISBN
FROM Titles
WHERE Title LIKE 'SDD%';</pre><p>LIKE with the wildcard % matches any title that starts with "SDD" (TitleIDs 3 to 6). The Titles table and its data are from the Microsoft Access library database on textbook p. 236.</p>` }
  ] },
{ number: '24', marks: 2, layout: 0, section: 'Textbook p. 238 · Primary keys',
  stimulus: `<p><strong>Library loans database</strong></p><p>A library uses a relational database with five tables. <strong>Borrowers</strong> has one row per member, identified by BorrowerID; LoanDuration is the number of days a member may keep a book. <strong>Titles</strong> has one row per published title, identified by TitleID. Because the library can own several copies of the same title, <strong>Books</strong> has one row per physical copy (BookID), linked to its title by the foreign key TitleID.</p><p>Each time a member borrows, a row is added to <strong>Loans</strong> with the date and the member's BorrowerID (a foreign key to Borrowers). LoanID values are generated randomly, so they can look unusual or be negative. A single loan can include several books, so <strong>BookLoans</strong> has one row for each book on each loan; LoanID and BookID together form its composite primary key.</p><p>Relationships: Borrowers 1:∞ Loans 1:∞ BookLoans ∞:1 Books ∞:1 Titles.</p>`,
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Write an SQL query that lists, for every loan, the borrower's <strong>FirstName</strong> and <strong>LastName</strong> and the <strong>LoanDate</strong>.</p>
<p><strong>Borrowers</strong></p><table class="hoa-table-normal"><thead><tr><th>BorrowerID</th><th>FirstName</th><th>LastName</th><th>PhoneNumber</th><th>JoinDate</th><th>LoanDuration</th></tr></thead><tbody>
<tr><td>1</td><td>Fred</td><td>Nerk</td><td>98769876</td><td>2006-02-15</td><td>14</td></tr>
<tr><td>2</td><td>Mary</td><td>Lamb</td><td>92343456</td><td>2001-01-07</td><td>14</td></tr>
<tr><td>3</td><td>John</td><td>Boole</td><td>46783456</td><td>2002-04-01</td><td>14</td></tr>
</tbody></table>
<p><strong>Loans</strong></p><table class="hoa-table-normal"><thead><tr><th>LoanID</th><th>BorrowerID</th><th>LoanDate</th></tr></thead><tbody>
<tr><td>-1311765733</td><td>2</td><td>2006-06-06</td></tr>
<tr><td>264188354</td><td>1</td><td>2006-06-06</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Borrowers (BorrowerID INTEGER PRIMARY KEY, FirstName TEXT, LastName TEXT, PhoneNumber TEXT, JoinDate TEXT, LoanDuration INTEGER);
INSERT INTO Borrowers VALUES (1,'Fred','Nerk','98769876','2006-02-15',14);
INSERT INTO Borrowers VALUES (2,'Mary','Lamb','92343456','2001-01-07',14);
INSERT INTO Borrowers VALUES (3,'John','Boole','46783456','2002-04-01',14);
CREATE TABLE Loans (LoanID INTEGER PRIMARY KEY, BorrowerID INTEGER REFERENCES Borrowers(BorrowerID), LoanDate TEXT);
INSERT INTO Loans VALUES (-1311765733,2,'2006-06-06');
INSERT INTO Loans VALUES (264188354,1,'2006-06-06');`,
      sqlAnswer: { queries: [`SELECT Borrowers.FirstName, Borrowers.LastName, Loans.LoanDate FROM Borrowers JOIN Loans ON Borrowers.BorrowerID = Loans.BorrowerID`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Borrowers.FirstName, Borrowers.LastName, Loans.LoanDate
FROM Borrowers
JOIN Loans ON Borrowers.BorrowerID = Loans.BorrowerID;</pre><p>The join matches the primary key BorrowerID in Borrowers with the foreign key BorrowerID in Loans, giving Mary Lamb and Fred Nerk (John Boole has no loans). Table data is from textbook pp. 237–238; the dates are shown as YYYY-MM-DD.</p>` }
  ] },
{ number: '25', marks: 2, layout: 0, section: 'Textbook p. 238 · Primary keys (composite key)',
  stimulus: `<p><strong>Library loans database</strong></p><p>A library uses a relational database with five tables. <strong>Borrowers</strong> has one row per member, identified by BorrowerID; LoanDuration is the number of days a member may keep a book. <strong>Titles</strong> has one row per published title, identified by TitleID. Because the library can own several copies of the same title, <strong>Books</strong> has one row per physical copy (BookID), linked to its title by the foreign key TitleID.</p><p>Each time a member borrows, a row is added to <strong>Loans</strong> with the date and the member's BorrowerID (a foreign key to Borrowers). LoanID values are generated randomly, so they can look unusual or be negative. A single loan can include several books, so <strong>BookLoans</strong> has one row for each book on each loan; LoanID and BookID together form its composite primary key.</p><p>Relationships: Borrowers 1:∞ Loans 1:∞ BookLoans ∞:1 Books ∞:1 Titles.</p>`,
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Write an SQL query that shows each <strong>LoanID</strong> and the <strong>number of books</strong> borrowed on that loan.</p>
<p><strong>BookLoans</strong></p><table class="hoa-table-normal"><thead><tr><th>LoanID</th><th>BookID</th></tr></thead><tbody>
<tr><td>-1311765733</td><td>4</td></tr>
<tr><td>-1311765733</td><td>11</td></tr>
<tr><td>-1311765733</td><td>16</td></tr>
<tr><td>264188354</td><td>3</td></tr>
<tr><td>264188354</td><td>9</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE BookLoans (LoanID INTEGER, BookID INTEGER, PRIMARY KEY (LoanID, BookID));
INSERT INTO BookLoans VALUES (-1311765733,4);
INSERT INTO BookLoans VALUES (-1311765733,11);
INSERT INTO BookLoans VALUES (-1311765733,16);
INSERT INTO BookLoans VALUES (264188354,3);
INSERT INTO BookLoans VALUES (264188354,9);`,
      sqlAnswer: { queries: [`SELECT LoanID, COUNT(*) AS NumberOfBooks FROM BookLoans GROUP BY LoanID`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT LoanID, COUNT(*) AS NumberOfBooks
FROM BookLoans
GROUP BY LoanID;</pre><p>GROUP BY LoanID makes one row per loan and COUNT(*) counts its books: loan -1311765733 has 3 books and loan 264188354 has 2 (BookLoans data from textbook p. 238).</p>` }
  ] },
{ number: '26', marks: 3, layout: 0, section: 'Textbook p. 242 · Relationships (library schema)',
  stimulus: `<p><strong>Library loans database</strong></p><p>A library uses a relational database with five tables. <strong>Borrowers</strong> has one row per member, identified by BorrowerID; LoanDuration is the number of days a member may keep a book. <strong>Titles</strong> has one row per published title, identified by TitleID. Because the library can own several copies of the same title, <strong>Books</strong> has one row per physical copy (BookID), linked to its title by the foreign key TitleID.</p><p>Each time a member borrows, a row is added to <strong>Loans</strong> with the date and the member's BorrowerID (a foreign key to Borrowers). LoanID values are generated randomly, so they can look unusual or be negative. A single loan can include several books, so <strong>BookLoans</strong> has one row for each book on each loan; LoanID and BookID together form its composite primary key.</p><p>Relationships: Borrowers 1:∞ Loans 1:∞ BookLoans ∞:1 Books ∞:1 Titles.</p>`,
  items: [
    { type: 'sql', marks: 3,
      question: `<p>Write an SQL query that lists the <strong>Title</strong> of every book borrowed by <strong>Mary Lamb</strong>. (The textbook does not show the Books table's data, so sample data is provided so you can test your query.)</p>
<p><strong>Borrowers</strong></p><table class="hoa-table-normal"><thead><tr><th>BorrowerID</th><th>FirstName</th><th>LastName</th><th>PhoneNumber</th><th>JoinDate</th><th>LoanDuration</th></tr></thead><tbody>
<tr><td>1</td><td>Fred</td><td>Nerk</td><td>98769876</td><td>2006-02-15</td><td>14</td></tr>
<tr><td>2</td><td>Mary</td><td>Lamb</td><td>92343456</td><td>2001-01-07</td><td>14</td></tr>
<tr><td>3</td><td>John</td><td>Boole</td><td>46783456</td><td>2002-04-01</td><td>14</td></tr>
</tbody></table>
<p><strong>Loans</strong></p><table class="hoa-table-normal"><thead><tr><th>LoanID</th><th>BorrowerID</th><th>LoanDate</th></tr></thead><tbody>
<tr><td>-1311765733</td><td>2</td><td>2006-06-06</td></tr>
<tr><td>264188354</td><td>1</td><td>2006-06-06</td></tr>
</tbody></table>
<p><strong>BookLoans</strong></p><table class="hoa-table-normal"><thead><tr><th>LoanID</th><th>BookID</th></tr></thead><tbody>
<tr><td>-1311765733</td><td>4</td></tr>
<tr><td>-1311765733</td><td>11</td></tr>
<tr><td>-1311765733</td><td>16</td></tr>
<tr><td>264188354</td><td>3</td></tr>
<tr><td>264188354</td><td>9</td></tr>
</tbody></table>
<p><strong>Books</strong> (sample data)</p><table class="hoa-table-normal"><thead><tr><th>BookID</th><th>TitleID</th><th>Notes</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>NULL</td></tr>
<tr><td>2</td><td>1</td><td>NULL</td></tr>
<tr><td>3</td><td>2</td><td>NULL</td></tr>
<tr><td>4</td><td>3</td><td>NULL</td></tr>
<tr><td>5</td><td>3</td><td>Cover damaged</td></tr>
<tr><td>6</td><td>4</td><td>NULL</td></tr>
<tr><td>7</td><td>5</td><td>NULL</td></tr>
<tr><td>8</td><td>6</td><td>NULL</td></tr>
<tr><td>9</td><td>7</td><td>NULL</td></tr>
<tr><td>10</td><td>8</td><td>NULL</td></tr>
<tr><td>11</td><td>1</td><td>NULL</td></tr>
<tr><td>12</td><td>2</td><td>Donated</td></tr>
<tr><td>13</td><td>4</td><td>NULL</td></tr>
<tr><td>14</td><td>6</td><td>NULL</td></tr>
<tr><td>15</td><td>7</td><td>NULL</td></tr>
<tr><td>16</td><td>8</td><td>NULL</td></tr>
</tbody></table>
<p><strong>Titles</strong></p><table class="hoa-table-normal"><thead><tr><th>TitleID</th><th>Title</th><th>ISBN</th></tr></thead><tbody>
<tr><td>1</td><td>IPT The HSC Course</td><td>0 9578910 3 2</td></tr>
<tr><td>2</td><td>IPT The Preliminary Course</td><td>0 9578910 5 9</td></tr>
<tr><td>3</td><td>SDD The HSC Course</td><td>0 646 40837 2</td></tr>
<tr><td>4</td><td>SDD The Preliminary Course</td><td>0 9578910 1 6</td></tr>
<tr><td>5</td><td>SDD The Preliminary Course TRK</td><td>0 9578910 2 4</td></tr>
<tr><td>6</td><td>SDD The HSC Course TRK</td><td>0 9578910 0 8</td></tr>
<tr><td>7</td><td>IPT The Preliminary Course TRK</td><td>0 9578910 6 7</td></tr>
<tr><td>8</td><td>IPT The HSC Course TRK</td><td>0 9578910 4 0</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE Borrowers (BorrowerID INTEGER PRIMARY KEY, FirstName TEXT, LastName TEXT, PhoneNumber TEXT, JoinDate TEXT, LoanDuration INTEGER);
INSERT INTO Borrowers VALUES (1,'Fred','Nerk','98769876','2006-02-15',14);
INSERT INTO Borrowers VALUES (2,'Mary','Lamb','92343456','2001-01-07',14);
INSERT INTO Borrowers VALUES (3,'John','Boole','46783456','2002-04-01',14);
CREATE TABLE Loans (LoanID INTEGER PRIMARY KEY, BorrowerID INTEGER REFERENCES Borrowers(BorrowerID), LoanDate TEXT);
INSERT INTO Loans VALUES (-1311765733,2,'2006-06-06');
INSERT INTO Loans VALUES (264188354,1,'2006-06-06');
CREATE TABLE Titles (TitleID INTEGER PRIMARY KEY, Title TEXT, ISBN TEXT);
INSERT INTO Titles VALUES (1,'IPT The HSC Course','0 9578910 3 2');
INSERT INTO Titles VALUES (2,'IPT The Preliminary Course','0 9578910 5 9');
INSERT INTO Titles VALUES (3,'SDD The HSC Course','0 646 40837 2');
INSERT INTO Titles VALUES (4,'SDD The Preliminary Course','0 9578910 1 6');
INSERT INTO Titles VALUES (5,'SDD The Preliminary Course TRK','0 9578910 2 4');
INSERT INTO Titles VALUES (6,'SDD The HSC Course TRK','0 9578910 0 8');
INSERT INTO Titles VALUES (7,'IPT The Preliminary Course TRK','0 9578910 6 7');
INSERT INTO Titles VALUES (8,'IPT The HSC Course TRK','0 9578910 4 0');
CREATE TABLE Books (BookID INTEGER PRIMARY KEY, TitleID INTEGER REFERENCES Titles(TitleID), Notes TEXT);
INSERT INTO Books VALUES (1,1,NULL);
INSERT INTO Books VALUES (2,1,NULL);
INSERT INTO Books VALUES (3,2,NULL);
INSERT INTO Books VALUES (4,3,NULL);
INSERT INTO Books VALUES (5,3,'Cover damaged');
INSERT INTO Books VALUES (6,4,NULL);
INSERT INTO Books VALUES (7,5,NULL);
INSERT INTO Books VALUES (8,6,NULL);
INSERT INTO Books VALUES (9,7,NULL);
INSERT INTO Books VALUES (10,8,NULL);
INSERT INTO Books VALUES (11,1,NULL);
INSERT INTO Books VALUES (12,2,'Donated');
INSERT INTO Books VALUES (13,4,NULL);
INSERT INTO Books VALUES (14,6,NULL);
INSERT INTO Books VALUES (15,7,NULL);
INSERT INTO Books VALUES (16,8,NULL);
CREATE TABLE BookLoans (LoanID INTEGER REFERENCES Loans(LoanID), BookID INTEGER REFERENCES Books(BookID), PRIMARY KEY (LoanID, BookID));
INSERT INTO BookLoans VALUES (-1311765733,4);
INSERT INTO BookLoans VALUES (-1311765733,11);
INSERT INTO BookLoans VALUES (-1311765733,16);
INSERT INTO BookLoans VALUES (264188354,3);
INSERT INTO BookLoans VALUES (264188354,9);`,
      sqlAnswer: { queries: [`SELECT Titles.Title FROM Borrowers JOIN Loans ON Borrowers.BorrowerID = Loans.BorrowerID JOIN BookLoans ON Loans.LoanID = BookLoans.LoanID JOIN Books ON BookLoans.BookID = Books.BookID JOIN Titles ON Books.TitleID = Titles.TitleID WHERE Borrowers.FirstName = 'Mary' AND Borrowers.LastName = 'Lamb'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT Titles.Title
FROM Borrowers
JOIN Loans ON Borrowers.BorrowerID = Loans.BorrowerID
JOIN BookLoans ON Loans.LoanID = BookLoans.LoanID
JOIN Books ON BookLoans.BookID = Books.BookID
JOIN Titles ON Books.TitleID = Titles.TitleID
WHERE Borrowers.FirstName = 'Mary' AND Borrowers.LastName = 'Lamb';</pre><p>The query follows the relationships in the schema (textbook p. 242): Mary's loan, the books on that loan (BookIDs 4, 11 and 16) and then each book's title: SDD The HSC Course, IPT The HSC Course and IPT The HSC Course TRK. Using Borrowers.BorrowerID = 2 instead of the name also works.</p>` }
  ] },
{ number: '27', marks: 2, layout: 0, section: 'Textbook p. 243 · Key tasks performed using SQL',
  items: [
    { type: 'sql', marks: 1,
      question: `<p>A school stores student records in a <strong>students</strong> table (structure from the data dictionary on textbook p. 245). Sample data is provided so you can test your query.</p>
<p>Write an SQL query that shows <strong>all the data</strong> for every student, sorted by <strong>last name</strong> in ascending (A to Z) order.</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>course</th><th>grade</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>101</td><td>Christiana</td><td>Smith</td><td>2005-07-15</td><td>christiana.smith@student.edu.au</td><td>Mathematics</td><td>A</td><td>2023-09-01</td></tr>
<tr><td>102</td><td>Liam</td><td>Brown</td><td>2006-02-03</td><td>liam.brown@student.edu.au</td><td>Science</td><td>B</td><td>2023-09-01</td></tr>
<tr><td>103</td><td>Olivia</td><td>Wilson</td><td>2005-11-21</td><td>olivia.wilson@student.edu.au</td><td>Mathematics</td><td>B</td><td>2023-09-04</td></tr>
<tr><td>104</td><td>Noah</td><td>Taylor</td><td>2006-05-30</td><td>noah.taylor@student.edu.au</td><td>English</td><td>C</td><td>2023-09-04</td></tr>
<tr><td>105</td><td>Mia</td><td>Anderson</td><td>2005-08-12</td><td>mia.anderson@student.edu.au</td><td>Mathematics</td><td>C</td><td>2023-09-05</td></tr>
<tr><td>106</td><td>Jack</td><td>Thomas</td><td>2006-01-17</td><td>jack.thomas@student.edu.au</td><td>Science</td><td>A</td><td>2023-09-06</td></tr>
<tr><td>107</td><td>Zoe</td><td>Clarke</td><td>2005-12-09</td><td>zoe.clarke@student.edu.au</td><td>English</td><td>B</td><td>2023-09-06</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, course TEXT, grade TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (101,'Christiana','Smith','2005-07-15','christiana.smith@student.edu.au','Mathematics','A','2023-09-01');
INSERT INTO students VALUES (102,'Liam','Brown','2006-02-03','liam.brown@student.edu.au','Science','B','2023-09-01');
INSERT INTO students VALUES (103,'Olivia','Wilson','2005-11-21','olivia.wilson@student.edu.au','Mathematics','B','2023-09-04');
INSERT INTO students VALUES (104,'Noah','Taylor','2006-05-30','noah.taylor@student.edu.au','English','C','2023-09-04');
INSERT INTO students VALUES (105,'Mia','Anderson','2005-08-12','mia.anderson@student.edu.au','Mathematics','C','2023-09-05');
INSERT INTO students VALUES (106,'Jack','Thomas','2006-01-17','jack.thomas@student.edu.au','Science','A','2023-09-06');
INSERT INTO students VALUES (107,'Zoe','Clarke','2005-12-09','zoe.clarke@student.edu.au','English','B','2023-09-06');`,
      sqlAnswer: { orderBy: [[2, 'asc']], queries: [`SELECT * FROM students ORDER BY last_name ASC`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM students ORDER BY last_name ASC;</pre><p>* returns every column and ORDER BY last_name ASC sorts the rows A to Z by surname (Anderson, Brown, Clarke, Smith, Taylor, Thomas, Wilson). This is the sorting example on textbook p. 243.</p>` },
    { type: 'sql', marks: 1,
      question: `<p>Using the same <strong>students</strong> table, write an SQL query that shows <strong>all the data</strong> for the students enrolled in the course <strong>Mathematics</strong>.</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>course</th><th>grade</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>101</td><td>Christiana</td><td>Smith</td><td>2005-07-15</td><td>christiana.smith@student.edu.au</td><td>Mathematics</td><td>A</td><td>2023-09-01</td></tr>
<tr><td>102</td><td>Liam</td><td>Brown</td><td>2006-02-03</td><td>liam.brown@student.edu.au</td><td>Science</td><td>B</td><td>2023-09-01</td></tr>
<tr><td>103</td><td>Olivia</td><td>Wilson</td><td>2005-11-21</td><td>olivia.wilson@student.edu.au</td><td>Mathematics</td><td>B</td><td>2023-09-04</td></tr>
<tr><td>104</td><td>Noah</td><td>Taylor</td><td>2006-05-30</td><td>noah.taylor@student.edu.au</td><td>English</td><td>C</td><td>2023-09-04</td></tr>
<tr><td>105</td><td>Mia</td><td>Anderson</td><td>2005-08-12</td><td>mia.anderson@student.edu.au</td><td>Mathematics</td><td>C</td><td>2023-09-05</td></tr>
<tr><td>106</td><td>Jack</td><td>Thomas</td><td>2006-01-17</td><td>jack.thomas@student.edu.au</td><td>Science</td><td>A</td><td>2023-09-06</td></tr>
<tr><td>107</td><td>Zoe</td><td>Clarke</td><td>2005-12-09</td><td>zoe.clarke@student.edu.au</td><td>English</td><td>B</td><td>2023-09-06</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, course TEXT, grade TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (101,'Christiana','Smith','2005-07-15','christiana.smith@student.edu.au','Mathematics','A','2023-09-01');
INSERT INTO students VALUES (102,'Liam','Brown','2006-02-03','liam.brown@student.edu.au','Science','B','2023-09-01');
INSERT INTO students VALUES (103,'Olivia','Wilson','2005-11-21','olivia.wilson@student.edu.au','Mathematics','B','2023-09-04');
INSERT INTO students VALUES (104,'Noah','Taylor','2006-05-30','noah.taylor@student.edu.au','English','C','2023-09-04');
INSERT INTO students VALUES (105,'Mia','Anderson','2005-08-12','mia.anderson@student.edu.au','Mathematics','C','2023-09-05');
INSERT INTO students VALUES (106,'Jack','Thomas','2006-01-17','jack.thomas@student.edu.au','Science','A','2023-09-06');
INSERT INTO students VALUES (107,'Zoe','Clarke','2005-12-09','zoe.clarke@student.edu.au','English','B','2023-09-06');`,
      sqlAnswer: { queries: [`SELECT * FROM students WHERE course = 'Mathematics'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT * FROM students WHERE course = 'Mathematics';</pre><p>WHERE filters the rows so only the three Mathematics students are returned. Text values go in single quotes. This is the filtering example on textbook p. 243.</p>` }
  ] },
{ number: '28', marks: 2, layout: 0, section: 'Textbook p. 244 · Joining tables',
  items: [
    { type: 'sql', marks: 2,
      question: `<p>A school database links students to the courses they take through an <strong>enrolments</strong> table. Sample data is provided so you can test your query.</p>
<p>Write an SQL query that lists each student's <strong>name</strong> together with the <strong>course_name</strong> of every course they are enrolled in.</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>name</th></tr></thead><tbody>
<tr><td>121</td><td>Ava Patel</td></tr>
<tr><td>122</td><td>Ben Clarke</td></tr>
<tr><td>123</td><td>Chloe Nguyen</td></tr>
<tr><td>124</td><td>Clarissa Smith</td></tr>
<tr><td>125</td><td>Dev Sharma</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>course_id</th></tr></thead><tbody>
<tr><td>121</td><td>1</td></tr>
<tr><td>121</td><td>2</td></tr>
<tr><td>122</td><td>3</td></tr>
<tr><td>123</td><td>1</td></tr>
<tr><td>123</td><td>3</td></tr>
<tr><td>124</td><td>2</td></tr>
</tbody></table>
<p><strong>courses</strong></p><table class="hoa-table-normal"><thead><tr><th>course_id</th><th>course_name</th></tr></thead><tbody>
<tr><td>1</td><td>Mathematics</td></tr>
<tr><td>2</td><td>Science</td></tr>
<tr><td>3</td><td>English</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO students VALUES (121,'Ava Patel');
INSERT INTO students VALUES (122,'Ben Clarke');
INSERT INTO students VALUES (123,'Chloe Nguyen');
INSERT INTO students VALUES (124,'Clarissa Smith');
INSERT INTO students VALUES (125,'Dev Sharma');
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, course_name TEXT);
INSERT INTO courses VALUES (1,'Mathematics');
INSERT INTO courses VALUES (2,'Science');
INSERT INTO courses VALUES (3,'English');
CREATE TABLE enrolments (student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id));
INSERT INTO enrolments VALUES (121,1);
INSERT INTO enrolments VALUES (121,2);
INSERT INTO enrolments VALUES (122,3);
INSERT INTO enrolments VALUES (123,1);
INSERT INTO enrolments VALUES (123,3);
INSERT INTO enrolments VALUES (124,2);`,
      sqlAnswer: { queries: [`SELECT students.name, courses.course_name FROM students JOIN enrolments ON students.student_id = enrolments.student_id JOIN courses ON enrolments.course_id = courses.course_id`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT students.name, courses.course_name
FROM students
JOIN enrolments ON students.student_id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.course_id;</pre><p>The enrolments table links the two other tables, so two joins are needed. Dev Sharma has no enrolments and does not appear (textbook p. 244).</p>` }
  ] },
{ number: '29', marks: 2, layout: 0, section: 'Textbook p. 244 · Aggregating data',
  items: [
    { type: 'sql', marks: 2,
      question: `<p>In this <strong>students</strong> table the <strong>grade</strong> field holds each student's mark out of 100. Sample data is provided so you can test your query.</p>
<p>Write an SQL query that calculates the <strong>average grade</strong> of the students in the course <strong>Mathematics</strong>.</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>name</th><th>course</th><th>grade</th></tr></thead><tbody>
<tr><td>121</td><td>Ava Patel</td><td>Mathematics</td><td>78</td></tr>
<tr><td>122</td><td>Ben Clarke</td><td>Science</td><td>70</td></tr>
<tr><td>123</td><td>Chloe Nguyen</td><td>Mathematics</td><td>92</td></tr>
<tr><td>124</td><td>Clarissa Smith</td><td>Science</td><td>88</td></tr>
<tr><td>125</td><td>Dev Sharma</td><td>Mathematics</td><td>85</td></tr>
<tr><td>126</td><td>Ella Roberts</td><td>English</td><td>81</td></tr>
<tr><td>127</td><td>Finn Walsh</td><td>Mathematics</td><td>64</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, name TEXT, course TEXT, grade INTEGER);
INSERT INTO students VALUES (121,'Ava Patel','Mathematics',78);
INSERT INTO students VALUES (122,'Ben Clarke','Science',70);
INSERT INTO students VALUES (123,'Chloe Nguyen','Mathematics',92);
INSERT INTO students VALUES (124,'Clarissa Smith','Science',88);
INSERT INTO students VALUES (125,'Dev Sharma','Mathematics',85);
INSERT INTO students VALUES (126,'Ella Roberts','English',81);
INSERT INTO students VALUES (127,'Finn Walsh','Mathematics',64);`,
      sqlAnswer: { queries: [`SELECT AVG(grade) FROM students WHERE course = 'Mathematics'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT AVG(grade) FROM students WHERE course = 'Mathematics';</pre><p>WHERE first keeps only the Mathematics rows, then AVG works out their mean: (78 + 92 + 85 + 64) ÷ 4 = 79.75. Other aggregate functions are SUM, COUNT, MIN and MAX (textbook p. 244).</p>` }
  ] },
{ number: '30', marks: 2, layout: 0, section: 'Textbook p. 244 · Using subqueries',
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Using the students and enrolments tables below, write an SQL query that uses a <strong>subquery</strong> to list the <strong>name</strong> of every student enrolled in the course with <strong>course_id 1</strong>. Sample data is provided so you can test your query.</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>name</th></tr></thead><tbody>
<tr><td>121</td><td>Ava Patel</td></tr>
<tr><td>122</td><td>Ben Clarke</td></tr>
<tr><td>123</td><td>Chloe Nguyen</td></tr>
<tr><td>124</td><td>Clarissa Smith</td></tr>
<tr><td>125</td><td>Dev Sharma</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>course_id</th></tr></thead><tbody>
<tr><td>121</td><td>1</td></tr>
<tr><td>121</td><td>2</td></tr>
<tr><td>122</td><td>3</td></tr>
<tr><td>123</td><td>1</td></tr>
<tr><td>123</td><td>3</td></tr>
<tr><td>124</td><td>2</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO students VALUES (121,'Ava Patel');
INSERT INTO students VALUES (122,'Ben Clarke');
INSERT INTO students VALUES (123,'Chloe Nguyen');
INSERT INTO students VALUES (124,'Clarissa Smith');
INSERT INTO students VALUES (125,'Dev Sharma');
CREATE TABLE enrolments (student_id INTEGER REFERENCES students(student_id), course_id INTEGER);
INSERT INTO enrolments VALUES (121,1);
INSERT INTO enrolments VALUES (121,2);
INSERT INTO enrolments VALUES (122,3);
INSERT INTO enrolments VALUES (123,1);
INSERT INTO enrolments VALUES (123,3);
INSERT INTO enrolments VALUES (124,2);`,
      sqlAnswer: { queries: [`SELECT name FROM students WHERE student_id IN (SELECT student_id FROM enrolments WHERE course_id = 1)`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT name FROM students
WHERE student_id IN (SELECT student_id FROM enrolments WHERE course_id = 1);</pre><p>The inner query finds the student_ids enrolled in course 1 (121 and 123); the outer query returns the names that match: Ava Patel and Chloe Nguyen (textbook p. 244). A JOIN with WHERE enrolments.course_id = 1 gives the same output.</p>` }
  ] },
{ number: '31', marks: 2, layout: 0, section: 'Textbook p. 251 · Activity: Design a relational database for a school system (Step 7)',
  stimulus: `<p><strong>School enrolment database (School_DB)</strong></p><p>A school uses a relational database, School_DB, to keep track of which students take which courses. It has three tables.</p><p><strong>students</strong> has one row per student, identified by student_id. Its enrolment_date field is the date the student enrolled at the school.</p><p><strong>courses</strong> has one row per course, identified by course_id, with the course's name and code.</p><p><strong>enrolments</strong> has one row for each student enrolled in each course. Its student_id and course_id fields are foreign keys to the other two tables, and grade is the grade the student received in that course. A NULL grade means no grade has been awarded yet. A student can take several courses, and a course can have many students.</p>`,
  items: [
    { type: 'sql', marks: 2,
      question: `<p>Write an SQL query that shows a table of students with their enrolled courses and grades: each student's <strong>first_name</strong>, <strong>last_name</strong>, the <strong>course_name</strong> and the <strong>grade</strong>. (Sample data is provided so you can test your query.)</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>1</td><td>Maryan</td><td>Jones</td><td>2002-05-12</td><td>maryan@email.com</td><td>2024-01-15</td></tr>
<tr><td>2</td><td>Jordan</td><td>Smith</td><td>2001-09-23</td><td>jordan@email.com</td><td>2024-02-10</td></tr>
<tr><td>3</td><td>Aisha</td><td>Khan</td><td>2007-03-04</td><td>aisha@email.com</td><td>2024-01-29</td></tr>
<tr><td>4</td><td>Ben</td><td>Nguyen</td><td>2007-11-19</td><td>ben@email.com</td><td>2024-01-29</td></tr>
<tr><td>5</td><td>Chloe</td><td>Martin</td><td>2008-01-08</td><td>chloe@email.com</td><td>2024-02-05</td></tr>
<tr><td>6</td><td>Daniel</td><td>Rossi</td><td>2007-06-30</td><td>daniel@email.com</td><td>2024-02-12</td></tr>
<tr><td>7</td><td>Emily</td><td>Chen</td><td>2007-09-14</td><td>emily@email.com</td><td>2024-02-19</td></tr>
<tr><td>8</td><td>Finn</td><td>Walker</td><td>2008-04-02</td><td>finn@email.com</td><td>2024-03-04</td></tr>
<tr><td>9</td><td>Grace</td><td>Taylor</td><td>2007-12-21</td><td>grace@email.com</td><td>2024-03-11</td></tr>
</tbody></table>
<p><strong>courses</strong></p><table class="hoa-table-normal"><thead><tr><th>course_id</th><th>course_name</th><th>course_code</th></tr></thead><tbody>
<tr><td>1</td><td>Enterprise Computing</td><td>EC101</td></tr>
<tr><td>2</td><td>Geography</td><td>GE102</td></tr>
<tr><td>3</td><td>Mathematics</td><td>MA103</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>enrolment_id</th><th>student_id</th><th>course_id</th><th>grade</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td>2</td><td>2</td><td>B</td></tr>
<tr><td>3</td><td>3</td><td>1</td><td>B</td></tr>
<tr><td>4</td><td>4</td><td>1</td><td>C</td></tr>
<tr><td>5</td><td>5</td><td>1</td><td>A</td></tr>
<tr><td>6</td><td>6</td><td>1</td><td>B</td></tr>
<tr><td>7</td><td>7</td><td>1</td><td>NULL</td></tr>
<tr><td>8</td><td>3</td><td>3</td><td>A</td></tr>
<tr><td>9</td><td>8</td><td>2</td><td>C</td></tr>
<tr><td>10</td><td>9</td><td>2</td><td>NULL</td></tr>
<tr><td>11</td><td>5</td><td>2</td><td>B</td></tr>
<tr><td>12</td><td>9</td><td>3</td><td>B</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (1,'Maryan','Jones','2002-05-12','maryan@email.com','2024-01-15');
INSERT INTO students VALUES (2,'Jordan','Smith','2001-09-23','jordan@email.com','2024-02-10');
INSERT INTO students VALUES (3,'Aisha','Khan','2007-03-04','aisha@email.com','2024-01-29');
INSERT INTO students VALUES (4,'Ben','Nguyen','2007-11-19','ben@email.com','2024-01-29');
INSERT INTO students VALUES (5,'Chloe','Martin','2008-01-08','chloe@email.com','2024-02-05');
INSERT INTO students VALUES (6,'Daniel','Rossi','2007-06-30','daniel@email.com','2024-02-12');
INSERT INTO students VALUES (7,'Emily','Chen','2007-09-14','emily@email.com','2024-02-19');
INSERT INTO students VALUES (8,'Finn','Walker','2008-04-02','finn@email.com','2024-03-04');
INSERT INTO students VALUES (9,'Grace','Taylor','2007-12-21','grace@email.com','2024-03-11');
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, course_name TEXT, course_code TEXT);
INSERT INTO courses VALUES (1,'Enterprise Computing','EC101');
INSERT INTO courses VALUES (2,'Geography','GE102');
INSERT INTO courses VALUES (3,'Mathematics','MA103');
CREATE TABLE enrolments (enrolment_id INTEGER PRIMARY KEY, student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id), grade TEXT);
INSERT INTO enrolments VALUES (1,1,1,'A');
INSERT INTO enrolments VALUES (2,2,2,'B');
INSERT INTO enrolments VALUES (3,3,1,'B');
INSERT INTO enrolments VALUES (4,4,1,'C');
INSERT INTO enrolments VALUES (5,5,1,'A');
INSERT INTO enrolments VALUES (6,6,1,'B');
INSERT INTO enrolments VALUES (7,7,1,NULL);
INSERT INTO enrolments VALUES (8,3,3,'A');
INSERT INTO enrolments VALUES (9,8,2,'C');
INSERT INTO enrolments VALUES (10,9,2,NULL);
INSERT INTO enrolments VALUES (11,5,2,'B');
INSERT INTO enrolments VALUES (12,9,3,'B');`,
      sqlAnswer: { queries: [`SELECT students.first_name, students.last_name, courses.course_name, enrolments.grade FROM students JOIN enrolments ON students.student_id = enrolments.student_id JOIN courses ON enrolments.course_id = courses.course_id`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT students.first_name, students.last_name, courses.course_name, enrolments.grade
FROM students
JOIN enrolments ON students.student_id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.course_id;</pre><p>This is the query from Step 7 (textbook p. 251). Each enrolment row becomes one output row (12 rows), with the student's name looked up through student_id and the course name through course_id.</p>` }
  ] },
{ number: '32', marks: 1, layout: 0, section: 'Textbook p. 251 · Exercise 1: Retrieve all students from the database',
  items: [
    { type: 'sql', marks: 1,
      question: `<p>The query <code>SELECT * FROM students;</code> displays every field of every student record in School_DB.</p>
<p><strong>Task:</strong> Modify the query to only show <strong>first name</strong>, <strong>last name</strong> and <strong>email</strong>. (Sample data is provided so you can test your query.)</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>1</td><td>Maryan</td><td>Jones</td><td>2002-05-12</td><td>maryan@email.com</td><td>2024-01-15</td></tr>
<tr><td>2</td><td>Jordan</td><td>Smith</td><td>2001-09-23</td><td>jordan@email.com</td><td>2024-02-10</td></tr>
<tr><td>3</td><td>Aisha</td><td>Khan</td><td>2007-03-04</td><td>aisha@email.com</td><td>2024-01-29</td></tr>
<tr><td>4</td><td>Ben</td><td>Nguyen</td><td>2007-11-19</td><td>ben@email.com</td><td>2024-01-29</td></tr>
<tr><td>5</td><td>Chloe</td><td>Martin</td><td>2008-01-08</td><td>chloe@email.com</td><td>2024-02-05</td></tr>
<tr><td>6</td><td>Daniel</td><td>Rossi</td><td>2007-06-30</td><td>daniel@email.com</td><td>2024-02-12</td></tr>
<tr><td>7</td><td>Emily</td><td>Chen</td><td>2007-09-14</td><td>emily@email.com</td><td>2024-02-19</td></tr>
<tr><td>8</td><td>Finn</td><td>Walker</td><td>2008-04-02</td><td>finn@email.com</td><td>2024-03-04</td></tr>
<tr><td>9</td><td>Grace</td><td>Taylor</td><td>2007-12-21</td><td>grace@email.com</td><td>2024-03-11</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (1,'Maryan','Jones','2002-05-12','maryan@email.com','2024-01-15');
INSERT INTO students VALUES (2,'Jordan','Smith','2001-09-23','jordan@email.com','2024-02-10');
INSERT INTO students VALUES (3,'Aisha','Khan','2007-03-04','aisha@email.com','2024-01-29');
INSERT INTO students VALUES (4,'Ben','Nguyen','2007-11-19','ben@email.com','2024-01-29');
INSERT INTO students VALUES (5,'Chloe','Martin','2008-01-08','chloe@email.com','2024-02-05');
INSERT INTO students VALUES (6,'Daniel','Rossi','2007-06-30','daniel@email.com','2024-02-12');
INSERT INTO students VALUES (7,'Emily','Chen','2007-09-14','emily@email.com','2024-02-19');
INSERT INTO students VALUES (8,'Finn','Walker','2008-04-02','finn@email.com','2024-03-04');
INSERT INTO students VALUES (9,'Grace','Taylor','2007-12-21','grace@email.com','2024-03-11');`,
      sqlAnswer: { queries: [`SELECT first_name, last_name, email FROM students`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT first_name, last_name, email FROM students;</pre><p>Replacing * with a list of field names returns only those columns (textbook p. 251).</p>` }
  ] },
{ number: '33', marks: 3, layout: 0, section: 'Textbook p. 252 · Exercise 2: List all students enrolled in a specific course',
  stimulus: `<p><strong>School enrolment database (School_DB)</strong></p><p>A school uses a relational database, School_DB, to keep track of which students take which courses. It has three tables.</p><p><strong>students</strong> has one row per student, identified by student_id. Its enrolment_date field is the date the student enrolled at the school.</p><p><strong>courses</strong> has one row per course, identified by course_id, with the course's name and code.</p><p><strong>enrolments</strong> has one row for each student enrolled in each course. Its student_id and course_id fields are foreign keys to the other two tables, and grade is the grade the student received in that course. A NULL grade means no grade has been awarded yet. A student can take several courses, and a course can have many students.</p>`,
  items: [
    { type: 'sql', marks: 3,
      question: `<p>A query displays the first name, last name and enrolment date of students enrolled in "Enterprise Computing".</p>
<p><strong>Task:</strong> Write a query to find the students in another course: show the <strong>first_name</strong>, <strong>last_name</strong> and <strong>enrolment_date</strong> of every student enrolled in <strong>Geography</strong>. (Sample data is provided so you can test your query. Note that enrolment_date is stored in the students table.)</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>1</td><td>Maryan</td><td>Jones</td><td>2002-05-12</td><td>maryan@email.com</td><td>2024-01-15</td></tr>
<tr><td>2</td><td>Jordan</td><td>Smith</td><td>2001-09-23</td><td>jordan@email.com</td><td>2024-02-10</td></tr>
<tr><td>3</td><td>Aisha</td><td>Khan</td><td>2007-03-04</td><td>aisha@email.com</td><td>2024-01-29</td></tr>
<tr><td>4</td><td>Ben</td><td>Nguyen</td><td>2007-11-19</td><td>ben@email.com</td><td>2024-01-29</td></tr>
<tr><td>5</td><td>Chloe</td><td>Martin</td><td>2008-01-08</td><td>chloe@email.com</td><td>2024-02-05</td></tr>
<tr><td>6</td><td>Daniel</td><td>Rossi</td><td>2007-06-30</td><td>daniel@email.com</td><td>2024-02-12</td></tr>
<tr><td>7</td><td>Emily</td><td>Chen</td><td>2007-09-14</td><td>emily@email.com</td><td>2024-02-19</td></tr>
<tr><td>8</td><td>Finn</td><td>Walker</td><td>2008-04-02</td><td>finn@email.com</td><td>2024-03-04</td></tr>
<tr><td>9</td><td>Grace</td><td>Taylor</td><td>2007-12-21</td><td>grace@email.com</td><td>2024-03-11</td></tr>
</tbody></table>
<p><strong>courses</strong></p><table class="hoa-table-normal"><thead><tr><th>course_id</th><th>course_name</th><th>course_code</th></tr></thead><tbody>
<tr><td>1</td><td>Enterprise Computing</td><td>EC101</td></tr>
<tr><td>2</td><td>Geography</td><td>GE102</td></tr>
<tr><td>3</td><td>Mathematics</td><td>MA103</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>enrolment_id</th><th>student_id</th><th>course_id</th><th>grade</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td>2</td><td>2</td><td>B</td></tr>
<tr><td>3</td><td>3</td><td>1</td><td>B</td></tr>
<tr><td>4</td><td>4</td><td>1</td><td>C</td></tr>
<tr><td>5</td><td>5</td><td>1</td><td>A</td></tr>
<tr><td>6</td><td>6</td><td>1</td><td>B</td></tr>
<tr><td>7</td><td>7</td><td>1</td><td>NULL</td></tr>
<tr><td>8</td><td>3</td><td>3</td><td>A</td></tr>
<tr><td>9</td><td>8</td><td>2</td><td>C</td></tr>
<tr><td>10</td><td>9</td><td>2</td><td>NULL</td></tr>
<tr><td>11</td><td>5</td><td>2</td><td>B</td></tr>
<tr><td>12</td><td>9</td><td>3</td><td>B</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (1,'Maryan','Jones','2002-05-12','maryan@email.com','2024-01-15');
INSERT INTO students VALUES (2,'Jordan','Smith','2001-09-23','jordan@email.com','2024-02-10');
INSERT INTO students VALUES (3,'Aisha','Khan','2007-03-04','aisha@email.com','2024-01-29');
INSERT INTO students VALUES (4,'Ben','Nguyen','2007-11-19','ben@email.com','2024-01-29');
INSERT INTO students VALUES (5,'Chloe','Martin','2008-01-08','chloe@email.com','2024-02-05');
INSERT INTO students VALUES (6,'Daniel','Rossi','2007-06-30','daniel@email.com','2024-02-12');
INSERT INTO students VALUES (7,'Emily','Chen','2007-09-14','emily@email.com','2024-02-19');
INSERT INTO students VALUES (8,'Finn','Walker','2008-04-02','finn@email.com','2024-03-04');
INSERT INTO students VALUES (9,'Grace','Taylor','2007-12-21','grace@email.com','2024-03-11');
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, course_name TEXT, course_code TEXT);
INSERT INTO courses VALUES (1,'Enterprise Computing','EC101');
INSERT INTO courses VALUES (2,'Geography','GE102');
INSERT INTO courses VALUES (3,'Mathematics','MA103');
CREATE TABLE enrolments (enrolment_id INTEGER PRIMARY KEY, student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id), grade TEXT);
INSERT INTO enrolments VALUES (1,1,1,'A');
INSERT INTO enrolments VALUES (2,2,2,'B');
INSERT INTO enrolments VALUES (3,3,1,'B');
INSERT INTO enrolments VALUES (4,4,1,'C');
INSERT INTO enrolments VALUES (5,5,1,'A');
INSERT INTO enrolments VALUES (6,6,1,'B');
INSERT INTO enrolments VALUES (7,7,1,NULL);
INSERT INTO enrolments VALUES (8,3,3,'A');
INSERT INTO enrolments VALUES (9,8,2,'C');
INSERT INTO enrolments VALUES (10,9,2,NULL);
INSERT INTO enrolments VALUES (11,5,2,'B');
INSERT INTO enrolments VALUES (12,9,3,'B');`,
      sqlAnswer: { queries: [`SELECT students.first_name, students.last_name, students.enrolment_date FROM students JOIN enrolments ON students.student_id = enrolments.student_id JOIN courses ON enrolments.course_id = courses.course_id WHERE courses.course_name = 'Geography'`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT students.first_name, students.last_name, students.enrolment_date
FROM students
JOIN enrolments ON students.student_id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.course_id
WHERE courses.course_name = 'Geography';</pre><p>Only the WHERE condition changes from the Enterprise Computing query. Result: Jordan Smith, Chloe Martin, Finn Walker and Grace Taylor. Note: the query (p. 252) selects enrolments.enrolment_date, but in this database enrolment_date is a field of the students table (Step 3, p. 247), so it must be students.enrolment_date.</p>` }
  ] },
{ number: '34', marks: 3, layout: 0, section: 'Textbook p. 252 · Exercise 3: Count the number of students in each course',
  stimulus: `<p><strong>School enrolment database (School_DB)</strong></p><p>A school uses a relational database, School_DB, to keep track of which students take which courses. It has three tables.</p><p><strong>students</strong> has one row per student, identified by student_id. Its enrolment_date field is the date the student enrolled at the school.</p><p><strong>courses</strong> has one row per course, identified by course_id, with the course's name and code.</p><p><strong>enrolments</strong> has one row for each student enrolled in each course. Its student_id and course_id fields are foreign keys to the other two tables, and grade is the grade the student received in that course. A NULL grade means no grade has been awarded yet. A student can take several courses, and a course can have many students.</p>`,
  items: [
    { type: 'sql', marks: 3,
      question: `<p>A query shows each course along with the number of students enrolled in it:</p>
<pre class="hoa-code">SELECT courses.course_name, COUNT(enrolments.student_id) AS total_students
FROM courses
JOIN enrolments ON courses.course_id = enrolments.course_id
GROUP BY courses.course_name;</pre>
<p><strong>Task:</strong> Change the query to <strong>only show courses with more than 5 students</strong>. (Sample data is provided so you can test your query.)</p>
<p><strong>courses</strong></p><table class="hoa-table-normal"><thead><tr><th>course_id</th><th>course_name</th><th>course_code</th></tr></thead><tbody>
<tr><td>1</td><td>Enterprise Computing</td><td>EC101</td></tr>
<tr><td>2</td><td>Geography</td><td>GE102</td></tr>
<tr><td>3</td><td>Mathematics</td><td>MA103</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>enrolment_id</th><th>student_id</th><th>course_id</th><th>grade</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td>2</td><td>2</td><td>B</td></tr>
<tr><td>3</td><td>3</td><td>1</td><td>B</td></tr>
<tr><td>4</td><td>4</td><td>1</td><td>C</td></tr>
<tr><td>5</td><td>5</td><td>1</td><td>A</td></tr>
<tr><td>6</td><td>6</td><td>1</td><td>B</td></tr>
<tr><td>7</td><td>7</td><td>1</td><td>NULL</td></tr>
<tr><td>8</td><td>3</td><td>3</td><td>A</td></tr>
<tr><td>9</td><td>8</td><td>2</td><td>C</td></tr>
<tr><td>10</td><td>9</td><td>2</td><td>NULL</td></tr>
<tr><td>11</td><td>5</td><td>2</td><td>B</td></tr>
<tr><td>12</td><td>9</td><td>3</td><td>B</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE courses (course_id INTEGER PRIMARY KEY, course_name TEXT, course_code TEXT);
INSERT INTO courses VALUES (1,'Enterprise Computing','EC101');
INSERT INTO courses VALUES (2,'Geography','GE102');
INSERT INTO courses VALUES (3,'Mathematics','MA103');
CREATE TABLE enrolments (enrolment_id INTEGER PRIMARY KEY, student_id INTEGER, course_id INTEGER REFERENCES courses(course_id), grade TEXT);
INSERT INTO enrolments VALUES (1,1,1,'A');
INSERT INTO enrolments VALUES (2,2,2,'B');
INSERT INTO enrolments VALUES (3,3,1,'B');
INSERT INTO enrolments VALUES (4,4,1,'C');
INSERT INTO enrolments VALUES (5,5,1,'A');
INSERT INTO enrolments VALUES (6,6,1,'B');
INSERT INTO enrolments VALUES (7,7,1,NULL);
INSERT INTO enrolments VALUES (8,3,3,'A');
INSERT INTO enrolments VALUES (9,8,2,'C');
INSERT INTO enrolments VALUES (10,9,2,NULL);
INSERT INTO enrolments VALUES (11,5,2,'B');
INSERT INTO enrolments VALUES (12,9,3,'B');`,
      sqlAnswer: { queries: [`SELECT courses.course_name, COUNT(enrolments.student_id) AS total_students FROM courses JOIN enrolments ON courses.course_id = enrolments.course_id GROUP BY courses.course_name HAVING COUNT(enrolments.student_id) > 5`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT courses.course_name, COUNT(enrolments.student_id) AS total_students
FROM courses
JOIN enrolments ON courses.course_id = enrolments.course_id
GROUP BY courses.course_name
HAVING COUNT(enrolments.student_id) > 5;</pre><p>WHERE cannot test an aggregate, so the condition goes in a HAVING clause after GROUP BY. Only Enterprise Computing (6 students) is returned; Geography has 4 and Mathematics 2 (textbook p. 252).</p>` }
  ] },
{ number: '35', marks: 3, layout: 0, section: 'Textbook p. 253 · Exercise 5: Find students who are enrolled in more than one course',
  stimulus: `<p><strong>School enrolment database (School_DB)</strong></p><p>A school uses a relational database, School_DB, to keep track of which students take which courses. It has three tables.</p><p><strong>students</strong> has one row per student, identified by student_id. Its enrolment_date field is the date the student enrolled at the school.</p><p><strong>courses</strong> has one row per course, identified by course_id, with the course's name and code.</p><p><strong>enrolments</strong> has one row for each student enrolled in each course. Its student_id and course_id fields are foreign keys to the other two tables, and grade is the grade the student received in that course. A NULL grade means no grade has been awarded yet. A student can take several courses, and a course can have many students.</p>`,
  items: [
    { type: 'sql', marks: 3,
      question: `<p>Write an SQL query that finds the students who are enrolled in <strong>more than one course</strong>, showing each student's <strong>first_name</strong> and <strong>last_name</strong>. (Sample data is provided so you can test your query.)</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>1</td><td>Maryan</td><td>Jones</td><td>2002-05-12</td><td>maryan@email.com</td><td>2024-01-15</td></tr>
<tr><td>2</td><td>Jordan</td><td>Smith</td><td>2001-09-23</td><td>jordan@email.com</td><td>2024-02-10</td></tr>
<tr><td>3</td><td>Aisha</td><td>Khan</td><td>2007-03-04</td><td>aisha@email.com</td><td>2024-01-29</td></tr>
<tr><td>4</td><td>Ben</td><td>Nguyen</td><td>2007-11-19</td><td>ben@email.com</td><td>2024-01-29</td></tr>
<tr><td>5</td><td>Chloe</td><td>Martin</td><td>2008-01-08</td><td>chloe@email.com</td><td>2024-02-05</td></tr>
<tr><td>6</td><td>Daniel</td><td>Rossi</td><td>2007-06-30</td><td>daniel@email.com</td><td>2024-02-12</td></tr>
<tr><td>7</td><td>Emily</td><td>Chen</td><td>2007-09-14</td><td>emily@email.com</td><td>2024-02-19</td></tr>
<tr><td>8</td><td>Finn</td><td>Walker</td><td>2008-04-02</td><td>finn@email.com</td><td>2024-03-04</td></tr>
<tr><td>9</td><td>Grace</td><td>Taylor</td><td>2007-12-21</td><td>grace@email.com</td><td>2024-03-11</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>enrolment_id</th><th>student_id</th><th>course_id</th><th>grade</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td>2</td><td>2</td><td>B</td></tr>
<tr><td>3</td><td>3</td><td>1</td><td>B</td></tr>
<tr><td>4</td><td>4</td><td>1</td><td>C</td></tr>
<tr><td>5</td><td>5</td><td>1</td><td>A</td></tr>
<tr><td>6</td><td>6</td><td>1</td><td>B</td></tr>
<tr><td>7</td><td>7</td><td>1</td><td>NULL</td></tr>
<tr><td>8</td><td>3</td><td>3</td><td>A</td></tr>
<tr><td>9</td><td>8</td><td>2</td><td>C</td></tr>
<tr><td>10</td><td>9</td><td>2</td><td>NULL</td></tr>
<tr><td>11</td><td>5</td><td>2</td><td>B</td></tr>
<tr><td>12</td><td>9</td><td>3</td><td>B</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (1,'Maryan','Jones','2002-05-12','maryan@email.com','2024-01-15');
INSERT INTO students VALUES (2,'Jordan','Smith','2001-09-23','jordan@email.com','2024-02-10');
INSERT INTO students VALUES (3,'Aisha','Khan','2007-03-04','aisha@email.com','2024-01-29');
INSERT INTO students VALUES (4,'Ben','Nguyen','2007-11-19','ben@email.com','2024-01-29');
INSERT INTO students VALUES (5,'Chloe','Martin','2008-01-08','chloe@email.com','2024-02-05');
INSERT INTO students VALUES (6,'Daniel','Rossi','2007-06-30','daniel@email.com','2024-02-12');
INSERT INTO students VALUES (7,'Emily','Chen','2007-09-14','emily@email.com','2024-02-19');
INSERT INTO students VALUES (8,'Finn','Walker','2008-04-02','finn@email.com','2024-03-04');
INSERT INTO students VALUES (9,'Grace','Taylor','2007-12-21','grace@email.com','2024-03-11');
CREATE TABLE enrolments (enrolment_id INTEGER PRIMARY KEY, student_id INTEGER REFERENCES students(student_id), course_id INTEGER, grade TEXT);
INSERT INTO enrolments VALUES (1,1,1,'A');
INSERT INTO enrolments VALUES (2,2,2,'B');
INSERT INTO enrolments VALUES (3,3,1,'B');
INSERT INTO enrolments VALUES (4,4,1,'C');
INSERT INTO enrolments VALUES (5,5,1,'A');
INSERT INTO enrolments VALUES (6,6,1,'B');
INSERT INTO enrolments VALUES (7,7,1,NULL);
INSERT INTO enrolments VALUES (8,3,3,'A');
INSERT INTO enrolments VALUES (9,8,2,'C');
INSERT INTO enrolments VALUES (10,9,2,NULL);
INSERT INTO enrolments VALUES (11,5,2,'B');
INSERT INTO enrolments VALUES (12,9,3,'B');`,
      sqlAnswer: { queries: [`SELECT students.first_name, students.last_name FROM students JOIN enrolments ON students.student_id = enrolments.student_id GROUP BY students.student_id, students.first_name, students.last_name HAVING COUNT(enrolments.course_id) > 1`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT students.first_name, students.last_name
FROM students
JOIN enrolments ON students.student_id = enrolments.student_id
GROUP BY students.student_id, students.first_name, students.last_name
HAVING COUNT(enrolments.course_id) > 1;</pre><p>Grouping by student and keeping groups with a count above 1 gives Aisha Khan, Chloe Martin and Grace Taylor. (On textbook p. 253 the query printed under Exercise 5 is a copy of Exercise 4's; this answer follows the exercise's title.)</p>` }
  ] },
{ number: '36', marks: 3, layout: 0, section: 'Textbook p. 253 · Bonus Challenge',
  stimulus: `<p><strong>School enrolment database (School_DB)</strong></p><p>A school uses a relational database, School_DB, to keep track of which students take which courses. It has three tables.</p><p><strong>students</strong> has one row per student, identified by student_id. Its enrolment_date field is the date the student enrolled at the school.</p><p><strong>courses</strong> has one row per course, identified by course_id, with the course's name and code.</p><p><strong>enrolments</strong> has one row for each student enrolled in each course. Its student_id and course_id fields are foreign keys to the other two tables, and grade is the grade the student received in that course. A NULL grade means no grade has been awarded yet. A student can take several courses, and a course can have many students.</p>`,
  items: [
    { type: 'sql', marks: 3,
      question: `<p><strong>Bonus Challenge:</strong> Write a query to list the students who have not received a grade yet (NULL grades in the enrolments table). Show each student's <strong>first_name</strong>, <strong>last_name</strong> and the <strong>course_name</strong> of the course without a grade. (Sample data is provided so you can test your query.)</p>
<p><strong>students</strong></p><table class="hoa-table-normal"><thead><tr><th>student_id</th><th>first_name</th><th>last_name</th><th>date_of_birth</th><th>email</th><th>enrolment_date</th></tr></thead><tbody>
<tr><td>1</td><td>Maryan</td><td>Jones</td><td>2002-05-12</td><td>maryan@email.com</td><td>2024-01-15</td></tr>
<tr><td>2</td><td>Jordan</td><td>Smith</td><td>2001-09-23</td><td>jordan@email.com</td><td>2024-02-10</td></tr>
<tr><td>3</td><td>Aisha</td><td>Khan</td><td>2007-03-04</td><td>aisha@email.com</td><td>2024-01-29</td></tr>
<tr><td>4</td><td>Ben</td><td>Nguyen</td><td>2007-11-19</td><td>ben@email.com</td><td>2024-01-29</td></tr>
<tr><td>5</td><td>Chloe</td><td>Martin</td><td>2008-01-08</td><td>chloe@email.com</td><td>2024-02-05</td></tr>
<tr><td>6</td><td>Daniel</td><td>Rossi</td><td>2007-06-30</td><td>daniel@email.com</td><td>2024-02-12</td></tr>
<tr><td>7</td><td>Emily</td><td>Chen</td><td>2007-09-14</td><td>emily@email.com</td><td>2024-02-19</td></tr>
<tr><td>8</td><td>Finn</td><td>Walker</td><td>2008-04-02</td><td>finn@email.com</td><td>2024-03-04</td></tr>
<tr><td>9</td><td>Grace</td><td>Taylor</td><td>2007-12-21</td><td>grace@email.com</td><td>2024-03-11</td></tr>
</tbody></table>
<p><strong>courses</strong></p><table class="hoa-table-normal"><thead><tr><th>course_id</th><th>course_name</th><th>course_code</th></tr></thead><tbody>
<tr><td>1</td><td>Enterprise Computing</td><td>EC101</td></tr>
<tr><td>2</td><td>Geography</td><td>GE102</td></tr>
<tr><td>3</td><td>Mathematics</td><td>MA103</td></tr>
</tbody></table>
<p><strong>enrolments</strong></p><table class="hoa-table-normal"><thead><tr><th>enrolment_id</th><th>student_id</th><th>course_id</th><th>grade</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td>2</td><td>2</td><td>B</td></tr>
<tr><td>3</td><td>3</td><td>1</td><td>B</td></tr>
<tr><td>4</td><td>4</td><td>1</td><td>C</td></tr>
<tr><td>5</td><td>5</td><td>1</td><td>A</td></tr>
<tr><td>6</td><td>6</td><td>1</td><td>B</td></tr>
<tr><td>7</td><td>7</td><td>1</td><td>NULL</td></tr>
<tr><td>8</td><td>3</td><td>3</td><td>A</td></tr>
<tr><td>9</td><td>8</td><td>2</td><td>C</td></tr>
<tr><td>10</td><td>9</td><td>2</td><td>NULL</td></tr>
<tr><td>11</td><td>5</td><td>2</td><td>B</td></tr>
<tr><td>12</td><td>9</td><td>3</td><td>B</td></tr>
</tbody></table>`,
      setup: `CREATE TABLE students (student_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, date_of_birth TEXT, email TEXT, enrolment_date TEXT);
INSERT INTO students VALUES (1,'Maryan','Jones','2002-05-12','maryan@email.com','2024-01-15');
INSERT INTO students VALUES (2,'Jordan','Smith','2001-09-23','jordan@email.com','2024-02-10');
INSERT INTO students VALUES (3,'Aisha','Khan','2007-03-04','aisha@email.com','2024-01-29');
INSERT INTO students VALUES (4,'Ben','Nguyen','2007-11-19','ben@email.com','2024-01-29');
INSERT INTO students VALUES (5,'Chloe','Martin','2008-01-08','chloe@email.com','2024-02-05');
INSERT INTO students VALUES (6,'Daniel','Rossi','2007-06-30','daniel@email.com','2024-02-12');
INSERT INTO students VALUES (7,'Emily','Chen','2007-09-14','emily@email.com','2024-02-19');
INSERT INTO students VALUES (8,'Finn','Walker','2008-04-02','finn@email.com','2024-03-04');
INSERT INTO students VALUES (9,'Grace','Taylor','2007-12-21','grace@email.com','2024-03-11');
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, course_name TEXT, course_code TEXT);
INSERT INTO courses VALUES (1,'Enterprise Computing','EC101');
INSERT INTO courses VALUES (2,'Geography','GE102');
INSERT INTO courses VALUES (3,'Mathematics','MA103');
CREATE TABLE enrolments (enrolment_id INTEGER PRIMARY KEY, student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id), grade TEXT);
INSERT INTO enrolments VALUES (1,1,1,'A');
INSERT INTO enrolments VALUES (2,2,2,'B');
INSERT INTO enrolments VALUES (3,3,1,'B');
INSERT INTO enrolments VALUES (4,4,1,'C');
INSERT INTO enrolments VALUES (5,5,1,'A');
INSERT INTO enrolments VALUES (6,6,1,'B');
INSERT INTO enrolments VALUES (7,7,1,NULL);
INSERT INTO enrolments VALUES (8,3,3,'A');
INSERT INTO enrolments VALUES (9,8,2,'C');
INSERT INTO enrolments VALUES (10,9,2,NULL);
INSERT INTO enrolments VALUES (11,5,2,'B');
INSERT INTO enrolments VALUES (12,9,3,'B');`,
      sqlAnswer: { queries: [`SELECT students.first_name, students.last_name, courses.course_name FROM students JOIN enrolments ON students.student_id = enrolments.student_id JOIN courses ON enrolments.course_id = courses.course_id WHERE enrolments.grade IS NULL`] },
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">SELECT students.first_name, students.last_name, courses.course_name
FROM students
JOIN enrolments ON students.student_id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.course_id
WHERE enrolments.grade IS NULL;</pre><p>NULL means "no value", so it is tested with IS NULL; <code>grade = NULL</code> never matches anything. Result: Emily Chen (Enterprise Computing) and Grace Taylor (Geography) (textbook p. 253).</p>` }
  ] }
  ]
});
})();
