/* Logic - Spreadsheet formulas. Auto-marked questions from ec.eforge.online (Data Science) and the EPC textbook. Built by build-logic.ps1. */
(function () {

registerExam({
  id: 'logic-ss',
  title: 'Logic — Spreadsheet formulas',
  source: 'ec.eforge.online + EPC textbook + CSSA style', year: 2026, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 86,
  coverNotes: `<p>Answer each question in the spreadsheet tool used in the HSC online exam. Type your formulas into the outlined cells; they are calculated on the sheet and compared with the expected results (formulas that should be filled down are checked as if filled down). Questions 1 to 26 are from ec.eforge.online (Data Science) and the EPC textbook. Questions 27 to 35 are in the CSSA style: you are given a scenario and the cells to complete, and you decide which formulas to use.</p>`,
  groups: [
    // ================= Ec.eforge — Data Science: Summarise Data using Spreadsheets =================
    { number: '1', marks: 1, layout: 0, section: 'Ec.eforge · Calculate the Total',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>B11</strong> to calculate the total sales from cells B2 to B10.</p>`,
          sheet: [
            ['Day', 'Sales ($)'],
            ['Mon 3 Mar', 420], ['Tue 4 Mar', 515], ['Wed 5 Mar', 380], ['Thu 6 Mar', 610], ['Fri 7 Mar', 745],
            ['Sat 8 Mar', 980], ['Sun 9 Mar', 865], ['Mon 10 Mar', 455], ['Tue 11 Mar', 530],
            ['Total', null],
          ],
          cells: [{ cell: 'B11', answer: '=SUM(B2:B10)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=SUM(B2:B10)</code></p><p>SUM adds every number in the range B2 to B10.</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Ec.eforge · Calculate the Average',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>F2</strong> to calculate the average test score in the range C2:C30.</p>`,
          sheet: [
            ['Student', 'Class', 'Score', null, 'Average score', null],
            ['Ava', '12A', 78], ['Ben', '12A', 64], ['Chloe', '12A', 91], ['Daniel', '12A', 55], ['Ella', '12A', 83],
            ['Finn', '12A', 70], ['Grace', '12A', 88], ['Harry', '12A', 47], ['Isla', '12A', 95], ['Jack', '12A', 62],
            ['Kiara', '12B', 74], ['Liam', '12B', 81], ['Mia', '12B', 59], ['Noah', '12B', 86], ['Olivia', '12B', 93],
            ['Patrick', '12B', 68], ['Quinn', '12B', 77], ['Ruby', '12B', 52], ['Sam', '12B', 84], ['Tara', '12B', 90],
            ['Uma', '12C', 66], ['Vince', '12C', 73], ['Willow', '12C', 88], ['Xavier', '12C', 58], ['Yasmin', '12C', 79],
            ['Zac', '12C', 61], ['Amelia', '12C', 97], ['Blake', '12C', 71], ['Cooper', '12C', 65],
          ],
          cells: [{ cell: 'F2', answer: '=AVERAGE(C2:C30)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=AVERAGE(C2:C30)</code></p><p>AVERAGE adds the scores and divides by how many there are.</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Ec.eforge · Find the Maximum Value',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>G2</strong> that returns the highest value in column D.</p>`,
          sheet: [
            ['Order', 'Customer', 'Product', 'Amount ($)', null, null, null],
            [1001, 'Alice', 'Laptop', 1200], [1002, 'Ben', 'Tablet', 900], [1003, 'Cara', 'Laptop', 2300],
            [1004, 'Dylan', 'Phone', 4000], [1005, 'Ella', 'Tablet', 1280], [1006, 'Finn', 'Phone', 800],
            [1007, 'Gia', 'Laptop', 3450],
          ],
          cells: [{ cell: 'G2', answer: '=MAX(D:D)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=MAX(D:D)</code> (or <code>=MAX(D2:D8)</code>)</p><p>MAX returns the largest number in the range; <code>D:D</code> means the whole column, and the text heading is ignored.</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Ec.eforge · Find the Minimum Value',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>H2</strong> that returns the lowest value from cells E2:E20.</p>`,
          sheet: [
            ['Week', 'Store', 'Staff', 'Hours', 'Units sold', null, null, null],
            [1, 'North', 4, 120, 342], [2, 'North', 4, 118, 298], [3, 'North', 5, 140, 410], [4, 'North', 4, 122, 276],
            [5, 'North', 3, 96, 233], [6, 'North', 4, 125, 318], [7, 'North', 5, 138, 402], [8, 'North', 5, 141, 455],
            [9, 'North', 4, 119, 301], [10, 'North', 3, 92, 219], [11, 'North', 4, 121, 287], [12, 'North', 4, 124, 330],
            [13, 'North', 5, 139, 398], [14, 'North', 5, 143, 431], [15, 'North', 4, 117, 265], [16, 'North', 3, 95, 241],
            [17, 'North', 4, 120, 306], [18, 'North', 4, 123, 322], [19, 'North', 5, 137, 389],
          ],
          cells: [{ cell: 'H2', answer: '=MIN(E2:E20)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=MIN(E2:E20)</code></p><p>MIN returns the smallest number in the range.</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Ec.eforge · Conditional Statements',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>G2</strong> such that if cell F2 is greater than 50, it displays "Pass"; otherwise it displays "Fail". Your formula will be filled down to G8.</p>`,
          sheet: [
            ['Student', null, null, null, null, 'Mark', 'Result'],
            ['Ava', null, null, null, null, 72], ['Ben', null, null, null, null, 50], ['Chloe', null, null, null, null, 49],
            ['Daniel', null, null, null, null, 88], ['Ella', null, null, null, null, 51], ['Finn', null, null, null, null, 35],
            ['Grace', null, null, null, null, 100],
          ],
          cells: [{ cell: 'G2', fill: 'G2:G8', answer: '=IF(F2>50,"Pass","Fail")' }],
          guide: `<p><strong>Sample answer:</strong> <code>=IF(F2&gt;50, "Pass", "Fail")</code></p><p>IF tests a condition and returns the first value when it is TRUE and the second when it is FALSE. A mark of exactly 50 is not greater than 50, so it shows "Fail".</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Ec.eforge · Counting Occurrences',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>I2</strong> to count the number of students who scored more than 75 in cells G2 to G100.</p>`,
          sheet: [
            ['Student', null, null, null, null, null, 'Score', null, 'Scored over 75'],
            ['Ava', null, null, null, null, null, 82], ['Ben', null, null, null, null, null, 75], ['Chloe', null, null, null, null, null, 91],
            ['Daniel', null, null, null, null, null, 64], ['Ella', null, null, null, null, null, 76], ['Finn', null, null, null, null, null, 58],
            ['Grace', null, null, null, null, null, 99], ['Harry', null, null, null, null, null, 70], ['Isla', null, null, null, null, null, 88],
            ['Jack', null, null, null, null, null, 75], ['Kiara', null, null, null, null, null, 43], ['Liam', null, null, null, null, null, 80],
          ],
          cells: [{ cell: 'I2', answer: '=COUNTIF(G2:G100,">75")' }],
          guide: `<p><strong>Sample answer:</strong> <code>=COUNTIF(G2:G100, "&gt;75")</code></p><p>COUNTIF counts the cells in a range that meet a condition; the condition is written in quotes. Scores of exactly 75 are not counted.</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Ec.eforge · Joining Text Values',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>C2</strong> that combines the contents of cells A2 (First Name) and B2 (Last Name) into one full name, with a space between them. Your formula will be filled down to C6.</p>`,
          sheet: [
            ['First Name', 'Last Name', 'Full Name'],
            ['Alice', 'Brown'], ['Ben', 'Lee'], ['Cara', 'Smith'], ['Dylan', 'Wong'], ['Ella', 'Jones'],
          ],
          cells: [{ cell: 'C2', fill: 'C2:C6', answer: '=A2&" "&B2' }],
          guide: `<p><strong>Sample answer:</strong> <code>=A2 &amp; " " &amp; B2</code> or <code>=CONCATENATE(A2, " ", B2)</code></p><p>The &amp; operator joins text; the " " adds the space between the names.</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Ec.eforge · Rounding',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Write a formula in cell <strong>D2</strong> to round the number in cell C2 to 2 decimal places. Your formula will be filled down to D6.</p>`,
          sheet: [
            ['Item', 'Qty', 'Unit cost', 'Rounded'],
            ['Bolts', 12, 3.14159], ['Nuts', 40, 0.0875], ['Washers', 25, 1.236], ['Screws', 100, 12.3456], ['Rivets', 8, 7.999],
          ],
          cells: [{ cell: 'D2', fill: 'D2:D6', answer: '=ROUND(C2,2)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=ROUND(C2, 2)</code></p><p>ROUND(number, digits) rounds to the given number of decimal places.</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Ec.eforge · Looking Up Values',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>Use a VLOOKUP in cell <strong>B2</strong> to retrieve the price of the product whose ID is in A2, from the table in range J2:K100. Your formula will be filled down to B6.</p>`,
          sheet: [
            ['Product ID', 'Price', null, null, null, null, null, null, null, 'Product ID', 'Price'],
            ['P104', null, null, null, null, null, null, null, null, 'P107', 45],
            ['P101', null, null, null, null, null, null, null, null, 'P101', 12.5],
            ['P107', null, null, null, null, null, null, null, null, 'P104', 30],
            ['P102', null, null, null, null, null, null, null, null, 'P110', 99],
            ['P110', null, null, null, null, null, null, null, null, 'P102', 18],
          ],
          cells: [{ cell: 'B2', fill: 'B2:B6', answer: '=VLOOKUP(A2,$J$2:$K$100,2,FALSE)' }],
          guide: `<p><strong>Sample answer:</strong> <code>=VLOOKUP(A2, $J$2:$K$100, 2, FALSE)</code></p><p>VLOOKUP finds A2 in the first column of the table and returns the value from column 2 (the price). FALSE asks for an exact match — needed here because the product IDs are not sorted. Absolute references ($) keep the table fixed when the formula is filled down.</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Ec.eforge · Linking Sheets',
      items: [
        { type: 'formula', marks: 1,
          question: `<p>This workbook has a <strong>Summary</strong> sheet (shown below) and a <strong>Sales</strong> sheet. The total sales are in cell B10 of the Sales sheet.</p>
<p><strong>Sales</strong> sheet:</p>
<table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th></tr></thead><tbody>
<tr><td>1</td><td>Month</td><td>Sales ($)</td></tr><tr><td>2</td><td>Jan</td><td>12 400</td></tr><tr><td>3</td><td>Feb</td><td>10 950</td></tr><tr><td>4</td><td>Mar</td><td>14 300</td></tr>
<tr><td>5</td><td>Apr</td><td>13 120</td></tr><tr><td>6</td><td>May</td><td>15 870</td></tr><tr><td>7</td><td>Jun</td><td>16 205</td></tr><tr><td>8</td><td>Jul</td><td>12 980</td></tr><tr><td>9</td><td>Aug</td><td>14 015</td></tr>
<tr><td>10</td><td>Total</td><td>=SUM(B2:B9)</td></tr></tbody></table>
<p>Write a formula in cell <strong>B1</strong> of the Summary sheet that shows the total sales by referencing Sales!B10.</p>`,
          sheet: [
            ['Total sales', null],
          ],
          sheets: { Sales: [['Month', 'Sales ($)'], ['Jan', 12400], ['Feb', 10950], ['Mar', 14300], ['Apr', 13120], ['May', 15870], ['Jun', 16205], ['Jul', 12980], ['Aug', 14015], ['Total', '=SUM(B2:B9)']] },
          cells: [{ cell: 'B1', answer: "='Sales'!B10" }],
          guide: `<p><strong>Sample answer:</strong> <code>=Sales!B10</code> (or <code>='Sales'!B10</code>)</p><p>A reference to another sheet is the sheet name, an exclamation mark, then the cell. If the source cell changes, the Summary sheet updates automatically.</p>` }
      ] },

{ number: '11', marks: 4, layout: 0, section: 'Textbook p. 148 · Activity: Applying Informatics tools to data analysis',
  stimulus: `<p><strong>Analysing a movie dataset</strong></p><p>A data analyst is using a spreadsheet to explore a small dataset about five films. Each row describes one film using four fields:</p><p><strong>Movie title</strong>: the name of the film.<br><strong>Genre</strong>: the type of film, such as Action, Comedy or Drama.<br><strong>Box office revenue</strong>: the total amount the film earned from cinema ticket sales, in millions.<br><strong>Audience rating</strong>: how satisfied viewers were, on a scale from 1 (very dissatisfied) to 5 (very satisfied).</p><p>The analyst wants some summary statistics so the films can be compared.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>The dataset has been entered in a spreadsheet (data in rows 2 to 6). Write a formula in each cell:</p>
<ul><li><strong>B8</strong>: the average box office revenue</li><li><strong>B9</strong>: the average audience rating</li><li><strong>B10</strong>: the highest audience rating</li><li><strong>B11</strong>: the lowest audience rating</li></ul>`,
      sheet: [
        ['Movie title', 'Genre', 'Box office revenue (Millions)', 'Audience Rating (1-5)'],
        ['The Karate Kid', 'Action', 150, 4],
        ['The Super Mario Bros Movie', 'Comedy', 90, 5],
        ['Downton Abbey', 'Drama', 70, 3],
        ['Jumanji', 'Action', 200, 5],
        ['Ice Age 2', 'Comedy', 50, 2],
        [null, null, null, null],
        ['Average box office revenue', null, null, null],
        ['Average audience rating', null, null, null],
        ['Highest audience rating', null, null, null],
        ['Lowest audience rating', null, null, null]
      ],
      cells: [
        { cell: 'B8', answer: '=AVERAGE(C2:C6)' },
        { cell: 'B9', answer: '=AVERAGE(D2:D6)' },
        { cell: 'B10', answer: '=MAX(D2:D6)' },
        { cell: 'B11', answer: '=MIN(D2:D6)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B8 <code>=AVERAGE(C2:C6)</code> (112), B9 <code>=AVERAGE(D2:D6)</code> (3.8), B10 <code>=MAX(D2:D6)</code> (5), B11 <code>=MIN(D2:D6)</code> (2).</p><p>These are the formulas given in Step 4 of the activity (textbook p. 149). MAX and MIN return the rating itself, not the movie's title; two movies share the highest rating of 5.</p>` }
  ] },
{ number: '12', marks: 7, layout: 0, section: 'Textbook p. 205 · Summarising data using a spreadsheet',
  items: [
    { type: 'formula', part: 'a', marks: 4,
      question: `<p>A weather station recorded the daily temperature and rainfall for 10 days (sample data, rows 2 to 11). Use the basic functions SUM, AVERAGE, MIN and MAX to summarise the data. Write a formula in each cell:</p>
<ul><li><strong>B13</strong>: the total rainfall</li><li><strong>B14</strong>: the average temperature</li><li><strong>B15</strong>: the highest temperature</li><li><strong>B16</strong>: the lowest temperature</li></ul>`,
      sheet: [
        ['Day', 'Temperature (°C)', 'Rainfall (mm)'],
        ['Day 1', 24, 0],
        ['Day 2', 27, 0],
        ['Day 3', 22, 12],
        ['Day 4', 19, 25],
        ['Day 5', 21, 8],
        ['Day 6', 26, 0],
        ['Day 7', 29, 3],
        ['Day 8', 31, 0],
        ['Day 9', 23, 6],
        ['Day 10', 20, 14],
        [null, null, null],
        ['Total rainfall (mm)', null, null],
        ['Average temperature (°C)', null, null],
        ['Highest temperature (°C)', null, null],
        ['Lowest temperature (°C)', null, null]
      ],
      cells: [
        { cell: 'B13', answer: '=SUM(C2:C11)' },
        { cell: 'B14', answer: '=AVERAGE(B2:B11)' },
        { cell: 'B15', answer: '=MAX(B2:B11)' },
        { cell: 'B16', answer: '=MIN(B2:B11)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B13 <code>=SUM(C2:C11)</code> (68), B14 <code>=AVERAGE(B2:B11)</code> (24.2), B15 <code>=MAX(B2:B11)</code> (31), B16 <code>=MIN(B2:B11)</code> (19).</p><p>SUM adds a range, AVERAGE finds the mean, and MIN and MAX find the smallest and largest values (textbook p. 205).</p>` },
    { type: 'formula', part: 'b', marks: 3,
      question: `<p>Using the same weather data, write <strong>conditional summary</strong> formulas (SUMIF, COUNTIF, AVERAGEIF) in each cell:</p>
<ul><li><strong>B13</strong>: the total rainfall on days when the temperature exceeded 25°C</li><li><strong>B14</strong>: the number of rainy days (days with more than 0 mm of rain)</li><li><strong>B15</strong>: the average temperature on rainy days</li></ul>`,
      sheet: [
        ['Day', 'Temperature (°C)', 'Rainfall (mm)'],
        ['Day 1', 24, 0],
        ['Day 2', 27, 0],
        ['Day 3', 22, 12],
        ['Day 4', 19, 25],
        ['Day 5', 21, 8],
        ['Day 6', 26, 0],
        ['Day 7', 29, 3],
        ['Day 8', 31, 0],
        ['Day 9', 23, 6],
        ['Day 10', 20, 14],
        [null, null, null],
        ['Rainfall on days above 25°C (mm)', null, null],
        ['Number of rainy days', null, null],
        ['Average temperature on rainy days (°C)', null, null]
      ],
      cells: [
        { cell: 'B13', answer: '=SUMIF(B2:B11,">25",C2:C11)' },
        { cell: 'B14', answer: '=COUNTIF(C2:C11,">0")' },
        { cell: 'B15', answer: '=AVERAGEIF(C2:C11,">0",B2:B11)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B13 <code>=SUMIF(B2:B11,"&gt;25",C2:C11)</code> (3), B14 <code>=COUNTIF(C2:C11,"&gt;0")</code> (6), B15 <code>=AVERAGEIF(C2:C11,"&gt;0",B2:B11)</code> (22.33).</p><p>The textbook's example is <code>=SUMIF(Temperature, "&gt;25", Rainfall)</code> (p. 205): the first range is tested against the criterion and the matching cells of the last range are added. AVERAGEIF works the same way.</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
  ] },
{ number: '13', marks: 2, layout: 0, section: 'Textbook p. 208 · Linking multiple sheets (cell references)',
  items: [
    { type: 'formula', marks: 2,
      question: `<p>"Sheet2" of a workbook contains a table of product prices (shown below). The order form is on Sheet1.</p>
<ul><li>In <strong>C2</strong>, write a formula that displays the price of the Stapler by referring to its cell on Sheet2.</li><li>In <strong>D2</strong>, write a formula for the total cost of the order (quantity × unit price).</li></ul>
<p><strong>Sheet2</strong></p><table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th></tr></thead><tbody>
<tr><th>1</th><td>Product</td><td>Price</td></tr>
<tr><th>2</th><td>Pens (box of 10)</td><td>4.50</td></tr>
<tr><th>3</th><td>A4 paper (ream)</td><td>6.95</td></tr>
<tr><th>4</th><td>Glue stick</td><td>2.20</td></tr>
<tr><th>5</th><td>Stapler</td><td>12.95</td></tr>
<tr><th>6</th><td>Scissors</td><td>5.50</td></tr>
</tbody></table><p><strong>Sheet1</strong> (the order form) is below.</p>`,
      sheet: [
        ['Product', 'Quantity', 'Unit price', 'Total'],
        ['Stapler', 3, null, null]
      ],
      sheets: { Sheet2: [
        ['Product', 'Price'],
        ['Pens (box of 10)', 4.5],
        ['A4 paper (ream)', 6.95],
        ['Glue stick', 2.2],
        ['Stapler', 12.95],
        ['Scissors', 5.5]
      ] },
      cells: [
        { cell: 'C2', answer: '=Sheet2!B5' },
        { cell: 'D2', answer: '=B2*C2' }
      ],
      guide: `<p><strong>Sample answers:</strong> C2 <code>=Sheet2!B5</code> (12.95), D2 <code>=B2*C2</code> (38.85).</p><p>A cell reference to another sheet is written as the sheet name, an exclamation mark, then the cell, e.g. =Sheet2!B5. If a price on Sheet2 changes, the order form updates automatically (textbook p. 208).</p>` }
  ] },
{ number: '14', marks: 3, layout: 0, section: 'Textbook p. 209 · Linking multiple sheets (weather summary)',
  items: [
    { type: 'formula', marks: 3,
      question: `<p>A weather workbook has a <strong>Temperature</strong> sheet and a <strong>Rainfall</strong> sheet (sample data shown below). Sheet1 is a summary sheet. Write a formula in each cell of Sheet1:</p>
<ul><li><strong>B2</strong>: the average daily temperature from the Temperature sheet</li><li><strong>B3</strong>: the total rainfall for the storm on Day 9 and Day 10 (cells C10 and C11 of the Rainfall sheet)</li><li><strong>B4</strong>: the total rainfall for all 10 days</li></ul>
<p><strong>Temperature</strong></p><table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th></tr></thead><tbody>
<tr><th>1</th><td>Date</td><td>Temperature (°C)</td></tr>
<tr><th>2</th><td>Day 1</td><td>28</td></tr>
<tr><th>3</th><td>Day 2</td><td>30</td></tr>
<tr><th>4</th><td>Day 3</td><td>27</td></tr>
<tr><th>5</th><td>Day 4</td><td>25</td></tr>
<tr><th>6</th><td>Day 5</td><td>24</td></tr>
<tr><th>7</th><td>Day 6</td><td>26</td></tr>
<tr><th>8</th><td>Day 7</td><td>29</td></tr>
<tr><th>9</th><td>Day 8</td><td>31</td></tr>
<tr><th>10</th><td>Day 9</td><td>22</td></tr>
<tr><th>11</th><td>Day 10</td><td>21</td></tr>
</tbody></table>
<p><strong>Rainfall</strong></p><table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
<tr><th>1</th><td>Date</td><td>Condition</td><td>Rainfall (mm)</td></tr>
<tr><th>2</th><td>Day 1</td><td>Sunny</td><td>0</td></tr>
<tr><th>3</th><td>Day 2</td><td>Sunny</td><td>0</td></tr>
<tr><th>4</th><td>Day 3</td><td>Cloudy</td><td>2</td></tr>
<tr><th>5</th><td>Day 4</td><td>Rain</td><td>6</td></tr>
<tr><th>6</th><td>Day 5</td><td>Sunny</td><td>0</td></tr>
<tr><th>7</th><td>Day 6</td><td>Cloudy</td><td>1</td></tr>
<tr><th>8</th><td>Day 7</td><td>Sunny</td><td>0</td></tr>
<tr><th>9</th><td>Day 8</td><td>Cloudy</td><td>3</td></tr>
<tr><th>10</th><td>Day 9</td><td>Storm</td><td>38</td></tr>
<tr><th>11</th><td>Day 10</td><td>Storm</td><td>45</td></tr>
</tbody></table><p><strong>Sheet1</strong> (the summary sheet) is below.</p>`,
      sheet: [
        ['Weather summary', null],
        ['Average temperature (°C)', null],
        ['Storm rainfall (mm)', null],
        ['Total rainfall (mm)', null]
      ],
      sheets: {
        Temperature: [
          ['Date', 'Temperature (°C)'],
          ['Day 1', 28], ['Day 2', 30], ['Day 3', 27], ['Day 4', 25], ['Day 5', 24],
          ['Day 6', 26], ['Day 7', 29], ['Day 8', 31], ['Day 9', 22], ['Day 10', 21]
        ],
        Rainfall: [
          ['Date', 'Condition', 'Rainfall (mm)'],
          ['Day 1', 'Sunny', 0], ['Day 2', 'Sunny', 0], ['Day 3', 'Cloudy', 2], ['Day 4', 'Rain', 6], ['Day 5', 'Sunny', 0],
          ['Day 6', 'Cloudy', 1], ['Day 7', 'Sunny', 0], ['Day 8', 'Cloudy', 3], ['Day 9', 'Storm', 38], ['Day 10', 'Storm', 45]
        ]
      },
      cells: [
        { cell: 'B2', answer: '=AVERAGE(Temperature!B2:B11)' },
        { cell: 'B3', answer: '=Rainfall!C10+Rainfall!C11' },
        { cell: 'B4', answer: '=SUM(Rainfall!C2:C11)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B2 <code>=AVERAGE(Temperature!B2:B11)</code> (26.3), B3 <code>=Rainfall!C10+Rainfall!C11</code> (83), B4 <code>=SUM(Rainfall!C2:C11)</code> (95).</p><p>These follow the textbook's examples <code>=AVERAGE(Temperature!B2:B32)</code> and <code>=Rainfall!C10+Rainfall!C11</code> (p. 209); the sample sheets here hold 10 days instead of a whole month.</p>` }
  ] },
{ number: '15', marks: 1, layout: 0, section: 'Textbook p. 211 · Methods of making comparisons in a spreadsheet',
  items: [
    { type: 'formula', marks: 1,
      question: `<p>A shop lists each product's sales for two years side by side (sample data). In <strong>D2</strong>, write a formula that calculates the <strong>percentage change</strong> in sales from 2023 to 2024, so that it can be filled down to D6. Give the answer as a percentage number (e.g. 25 for a 25% increase).</p>`,
      sheet: [
        ['Product', '2023 Sales ($)', '2024 Sales ($)', '% change'],
        ['Product A', 12000, 15000, null],
        ['Product B', 8000, 7200, null],
        ['Product C', 5000, 6500, null],
        ['Product D', 20000, 19000, null],
        ['Product E', 4000, 5000, null]
      ],
      cells: [ { cell: 'D2', fill: 'D2:D6', answer: '=((C2-B2)/B2)*100' } ],
      guide: `<p><strong>Sample answer:</strong> <code>=((C2-B2)/B2)*100</code>, filled down to D6 (25, -10, 30, -5, 25).</p><p>The textbook's formula is =((New Value - Old Value) / Old Value) * 100 (p. 211). A negative result is a decrease. Relative references change row by row when the formula is filled down.</p>` }
  ] },
{ number: '16', marks: 2, layout: 0, section: 'Textbook p. 215 · Activity: Creating and analysing a weather forecast spreadsheet (Step 2)',
  stimulus: `<p><strong>Weekly weather spreadsheet</strong></p><p>A student is building a spreadsheet to record and analyse one week of local weather. Each day from Monday to Sunday has its own row on Sheet1, showing the temperature (°C), wind speed (km/h), rainfall (mm) and a one-word description of the conditions (Sunny, Cloudy or Rain).</p><p>The student needs summary figures for the week that can be reported and later reused in a weather dashboard. In the finished workbook these figures sit on a separate Summary sheet whose formulas refer back to the data on Sheet1, so the summary updates whenever the data changes.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>The weather data is in Sheet1 (rows 2 to 8). For this question, write the summary formulas below the data:</p>
<ul><li><strong>B10</strong>: the average temperature for the week</li><li><strong>B11</strong>: the total rainfall for the week</li></ul>`,
      sheet: [
        ['Date', 'Temperature (°C)', 'Wind Speed (km/h)', 'Rainfall (mm)', 'Condition'],
        ['Monday', 25, 10, 0, 'Sunny'],
        ['Tuesday', 20, 15, 5, 'Cloudy'],
        ['Wednesday', 18, 20, 10, 'Rain'],
        ['Thursday', 20, 15, 0, 'Sunny'],
        ['Friday', 25, 10, 0, 'Sunny'],
        ['Saturday', 20, 15, 5, 'Rain'],
        ['Sunday', 18, 15, 15, 'Rain'],
        [null, null, null, null, null],
        ['Average Temperature:', null, null, null, null],
        ['Total Rainfall:', null, null, null, null]
      ],
      cells: [
        { cell: 'B10', answer: '=AVERAGE(Sheet1!B2:B8)' },
        { cell: 'B11', answer: '=SUM(Sheet1!D2:D8)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B10 <code>=AVERAGE(Sheet1!B2:B8)</code> (20.86), B11 <code>=SUM(Sheet1!D2:D8)</code> (35).</p><p>These are the summary formulas from Step 2 (textbook p. 215), which the dashboard activity reuses (p. 227). On the same sheet <code>=AVERAGE(B2:B8)</code> and <code>=SUM(D2:D8)</code> give the same results; the Sheet1! prefix is needed when the formula is on a different sheet.</p>` }
  ] },
{ number: '17', marks: 1, layout: 0, section: 'Textbook p. 222 · Example: Tracking monthly expenses',
  stimulus: `<p><strong>Tracking monthly expenses</strong></p><p>A person keeps a simple spreadsheet of their spending. Each purchase is entered on its own row with the date, a category (Food, Transport or Bills) and the amount in dollars.</p><p>They want to see quickly how much has been spent in each category. A pivot table could produce this summary, with Category as the rows and the total of Amount as the values. The same totals can also be calculated with ordinary formulas in a small summary table beside the data (columns E and F), which updates as new expenses are added.</p>`,
  items: [
    { type: 'formula', marks: 1,
      question: `<p>In <strong>F2</strong>, write a formula that adds up the amounts for the category named in E2, so that it can be filled down to F4.</p>`,
      sheet: [
        ['Date', 'Category', 'Amount', null, 'Category', 'Total Amount'],
        ['01/01/2024', 'Food', 50, null, 'Food', null],
        ['02/01/2024', 'Transport', 30, null, 'Transport', null],
        ['03/01/2024', 'Food', 20, null, 'Bills', null],
        ['04/01/2024', 'Bills', 100, null, null, null],
        ['05/01/2024', 'Transport', 40, null, null, null],
        ['06/01/2024', 'Food', 30, null, null, null]
      ],
      cells: [ { cell: 'F2', fill: 'F2:F4', answer: '=SUMIF($B$2:$B$7,E2,$C$2:$C$7)' } ],
      guide: `<p><strong>Sample answer:</strong> <code>=SUMIF($B$2:$B$7,E2,$C$2:$C$7)</code>, filled down to F4 (Food 100, Transport 70, Bills 100).</p><p>The absolute references ($) keep the data ranges fixed when the formula is filled down, while E2 changes to E3 and E4. The results match the pivot table on textbook p. 222.</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
  ] },
{ number: '18', marks: 2, layout: 0, section: 'Textbook p. 225 · Activity: Building a weather dashboard (Step 3A)',
  stimulus: `<p><strong>Weather dashboard</strong></p><p>A student is building a dashboard from one week of weather observations. Sheet1 has one row per day showing the temperature (°C), wind speed (km/h), rainfall (mm) and that day's condition (Sunny, Cloudy or Rain).</p><p>To show which kind of weather brought the most rain, the student created a pivot table with Condition as the rows and the <strong>Sum of Rainfall (mm)</strong> as the values. The pivot table lists each condition once, in alphabetical order, and ends with a Grand Total row giving the rainfall for the whole week.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>Reproduce the pivot table with formulas in columns G and H:</p>
<ul><li>In <strong>H2</strong>, write a formula for the total rainfall of the condition in G2, so that it can be filled down to H4.</li><li>In <strong>H5</strong>, write a formula for the grand total.</li></ul>`,
      sheet: [
        ['Date', 'Temperature (°C)', 'Wind Speed (km/h)', 'Rainfall (mm)', 'Condition', null, 'Row Labels', 'Sum of Rainfall (mm)'],
        ['Monday', 27, 10, 0, 'Sunny', null, 'Cloudy', null],
        ['Tuesday', 22, 15, 5, 'Cloudy', null, 'Rain', null],
        ['Wednesday', 20, 20, 10, 'Rain', null, 'Sunny', null],
        ['Thursday', 22, 15, 0, 'Sunny', null, 'Grand Total', null],
        ['Friday', 27, 10, 0, 'Sunny', null, null, null],
        ['Saturday', 22, 15, 5, 'Rain', null, null, null],
        ['Sunday', 20, 15, 15, 'Rain', null, null, null]
      ],
      cells: [
        { cell: 'H2', fill: 'H2:H4', answer: '=SUMIF($E$2:$E$8,G2,$D$2:$D$8)' },
        { cell: 'H5', answer: '=SUM(H2:H4)' }
      ],
      guide: `<p><strong>Sample answers:</strong> H2 <code>=SUMIF($E$2:$E$8,G2,$D$2:$D$8)</code> filled down to H4 (Cloudy 5, Rain 30, Sunny 0); H5 <code>=SUM(H2:H4)</code> (35). <code>=SUM(D2:D8)</code> also gives 35.</p><p>These match the pivot table in the dashboard activity (textbook pp. 225–227).</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
  ] },
{ number: '19', marks: 3, layout: 0, section: 'Textbook p. 284 · Activity: Mean, median, and mode',
  items: [
    { type: 'formula', marks: 3,
      question: `<p>The number of books read by 12 students in one month has been entered in A2:A13. Write a formula in each cell:</p>
<ul><li><strong>D2</strong>: the mean number of books read</li><li><strong>D3</strong>: the median number of books read</li><li><strong>D4</strong>: the range (the max minus the min)</li></ul>`,
      sheet: [
        ['Books read', null, null, null],
        [2, null, 'Mean', null],
        [3, null, 'Median', null],
        [4, null, 'Range', null],
        [2, null, null, null],
        [5, null, null, null],
        [3, null, null, null],
        [4, null, null, null],
        [6, null, null, null],
        [2, null, null, null],
        [4, null, null, null],
        [3, null, null, null],
        [5, null, null, null]
      ],
      cells: [
        { cell: 'D2', answer: '=AVERAGE(A2:A13)' },
        { cell: 'D3', answer: '=MEDIAN(A2:A13)' },
        { cell: 'D4', answer: '=MAX(A2:A13)-MIN(A2:A13)' }
      ],
      guide: `<p><strong>Sample answers:</strong> D2 <code>=AVERAGE(A2:A13)</code> (43 ÷ 12 = 3.58), D3 <code>=MEDIAN(A2:A13)</code> (3.5, the mean of the 6th and 7th values in order), D4 <code>=MAX(A2:A13)-MIN(A2:A13)</code> (6 − 2 = 4).</p><p>The activity also asks for the mode: 2, 3 and 4 each appear three times, so this data set has three modes (textbook p. 284).</p>` }
  ] },
{ number: '20', marks: 2, layout: 0, section: 'Textbook p. 286 · Conditional formatting',
  stimulus: `<p><strong>Colour-coded test scores</strong></p><p>A teacher records each student's test score in a spreadsheet and uses conditional formatting so that every score cell is shaded automatically according to its value. The legend in rows 10 to 13 explains the three bands: green for a high score, yellow for an average score and pink for a low score.</p><p>Colours can be hard to tell apart when the sheet is printed in black and white or read by someone who is colour-blind, so the teacher also wants each student's band shown as a word in column C.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>Instead of colours, write a formula in <strong>C2</strong> that displays the band as text: <strong>High</strong> for a score above 90, <strong>Average</strong> for a score from 70 to 90, and <strong>Low</strong> for a score below 70. It should be possible to fill it down to C8.</p>`,
      sheet: [
        ['Student', 'Score', 'Band'],
        ['Ava', 92, null],
        ['Ben', 75, null],
        ['Chloe', 88, null],
        ['Daniel', 63, null],
        ['Ella', 97, null],
        ['Finn', 70, null],
        ['Grace', 82, null],
        [null, null, null],
        ['Legend', null, null],
        ['Green', 'High score (>90)', null],
        ['Yellow', 'Average score (70–90)', null],
        ['Pink', 'Low score (<70)', null]
      ],
      cells: [ { cell: 'C2', fill: 'C2:C8', answer: '=IF(B2>90,"High",IF(B2>=70,"Average","Low"))' } ],
      guide: `<p><strong>Sample answer:</strong> <code>=IF(B2&gt;90,"High",IF(B2&gt;=70,"Average","Low"))</code>, filled down to C8.</p><p>A nested IF tests the conditions in order: above 90 first, then 70 or more, and anything else is Low. Ava and Ella are High, Daniel is Low and the rest are Average (legend from textbook p. 286; the book's screenshot shades Ava's 92 yellow, which does not match its own legend).</p>` }
  ] },
{ number: '21', marks: 1, layout: 0, section: 'Textbook p. 287 · Pivot tables and charts',
  stimulus: `<p><strong>Student results by task</strong></p><p>A teacher records a class's assessment results in a spreadsheet. Each row is one task: the student's name, the subject (Maths or Science), the task number (1 to 3) and the score. Every student completed three tasks in each subject, so each student has six rows.</p><p>To summarise the data the teacher built a pivot table. It shows each student's average score in each subject, plus a Total column giving the student's <strong>average score</strong> across all six of their tasks.</p>`,
  items: [
    { type: 'formula', marks: 1,
      question: `<p>The data for six of the students is in A1:D37. In <strong>G2</strong>, write a formula that calculates the average score across all tasks (the pivot table's Total) for the student named in F2, so that it can be filled down to G7.</p>`,
      sheet: [
        ['Student', 'Subject', 'Task Number', 'Score', null, 'Student', 'Average score'],
        ['Ava', 'Maths', 1, 92, null, 'Ava', null],
        ['Ava', 'Science', 1, 85, null, 'Ben', null],
        ['Ava', 'Maths', 2, 85, null, 'Chloe', null],
        ['Ava', 'Science', 2, 75, null, 'Daniel', null],
        ['Ava', 'Maths', 3, 79, null, 'Dave', null],
        ['Ava', 'Science', 3, 78, null, 'Ella', null],
        ['Ben', 'Maths', 1, 75],
        ['Ben', 'Science', 1, 78],
        ['Ben', 'Maths', 2, 78],
        ['Ben', 'Science', 2, 85],
        ['Ben', 'Maths', 3, 92],
        ['Ben', 'Science', 3, 90],
        ['Chloe', 'Maths', 1, 88],
        ['Chloe', 'Science', 1, 90],
        ['Chloe', 'Maths', 2, 90],
        ['Chloe', 'Science', 2, 78],
        ['Chloe', 'Maths', 3, 75],
        ['Chloe', 'Science', 3, 66],
        ['Daniel', 'Maths', 1, 63],
        ['Daniel', 'Science', 1, 66],
        ['Daniel', 'Maths', 2, 66],
        ['Daniel', 'Science', 2, 90],
        ['Daniel', 'Maths', 3, 88],
        ['Daniel', 'Science', 3, 93],
        ['Dave', 'Maths', 1, 35],
        ['Dave', 'Science', 2, 56],
        ['Dave', 'Maths', 3, 32],
        ['Dave', 'Science', 1, 42],
        ['Dave', 'Maths', 2, 32],
        ['Dave', 'Science', 3, 41],
        ['Ella', 'Maths', 1, 97],
        ['Ella', 'Science', 1, 72],
        ['Ella', 'Maths', 2, 93],
        ['Ella', 'Science', 2, 66],
        ['Ella', 'Maths', 3, 63],
        ['Ella', 'Science', 3, 70]
      ],
      cells: [ { cell: 'G2', fill: 'G2:G7', answer: '=AVERAGEIF($A$2:$A$37,F2,$D$2:$D$37)' } ],
      guide: `<p><strong>Sample answer:</strong> <code>=AVERAGEIF($A$2:$A$37,F2,$D$2:$D$37)</code>, filled down to G7.</p><p>AVERAGEIF averages the scores in column D whose student in column A matches F2. The results (Ava 82.3, Ben 83, Chloe 81.2, Daniel 77.7, Dave 39.7, Ella 76.8) round to the Total column of the pivot table on textbook p. 287. Finn and Grace are left out because their rows are cut off in the book's screenshot.</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
  ] },
{ number: '22', marks: 5, layout: 0, section: 'Textbook p. 299 · Activity: Correlation',
  stimulus: `<p><strong>Fred's prediction theory</strong></p><p>Fred, an Enterprise Computing (EC) student, believes that a student's HSC EC result is closely linked to their English and Maths results. To test the idea he collected the EC, English and Maths marks of 15 students in his EC class (including his own) and entered them in a spreadsheet. He hopes to predict any student's English and Maths marks from their EC mark alone.</p><p>Below the marks, Fred summarises each subject with sample statistics. Because his classmates are only a sample of all EC students, he uses the sample standard deviation. The correlation coefficient, which ranges from −1 to 1, measures how closely each subject's marks rise and fall with the EC marks; a value near 1 indicates a strong positive relationship.</p>`,
  items: [
    { type: 'formula', marks: 5,
      question: `<p>Reproduce the <strong>sample data statistics</strong> in Fred's spreadsheet. Write a formula in each cell so that it can be filled across to column D:</p>
<ul><li><strong>B22</strong>: the average (fill across to D22)</li><li><strong>B24</strong>: the median (fill across to D24)</li><li><strong>B25</strong>: the range, max minus min (fill across to D25)</li><li><strong>B26</strong>: the standard deviation of the sample (fill across to D26)</li><li><strong>C27</strong>: the correlation between the EC marks and that column's marks (fill across to D27)</li></ul>`,
      sheet: [
        ['Freds HSC EC Predictor of HSC English and Maths Results', null, null, null],
        [null, null, null, null],
        ['SAMPLE DATA', null, null, null],
        ['Name', 'EC', 'English', 'Maths'],
        ['Fred', 70, 72, 69],
        ['Mary', 65, 65, 61],
        ['John', 76, 77, 72],
        ['Sue', 58, 68, 59],
        ['Ali', 81, 76, 76],
        ['Mark', 66, 70, 64],
        ['Sharon', 71, 78, 73],
        ['Mike', 72, 73, 78],
        ['Jane', 86, 81, 74],
        ['Michelle', 92, 93, 83],
        ['Perry', 69, 75, 77],
        ['Melissa', 82, 85, 75],
        ['Kim', 78, 73, 68],
        ['Luke', 66, 62, 60],
        ['Louise', 77, 74, 71],
        [null, null, null, null],
        ['SAMPLE DATA STATISTICS', null, null, null],
        ['Average', null, null, null],
        ['Mode', 66, 73, '#N/A'],
        ['Median', null, null, null],
        ['Range', null, null, null],
        ['Std Deviation', null, null, null],
        ['Correlation', null, null, null]
      ],
      style: { bold: ['A1', 'A3', 'A4:D4', 'A21'], merge: ['A1:D1'] },
      cells: [
        { cell: 'B22', fill: 'B22:D22', answer: '=AVERAGE(B5:B19)' },
        { cell: 'B24', fill: 'B24:D24', answer: '=MEDIAN(B5:B19)' },
        { cell: 'B25', fill: 'B25:D25', answer: '=MAX(B5:B19)-MIN(B5:B19)' },
        { cell: 'B26', fill: 'B26:D26', answer: '=STDEV(B5:B19)' },
        { cell: 'C27', fill: 'C27:D27', answer: '=CORREL($B$5:$B$19,C5:C19)' }
      ],
      guide: `<p><strong>Sample answers:</strong> B22 <code>=AVERAGE(B5:B19)</code>, B24 <code>=MEDIAN(B5:B19)</code>, B25 <code>=MAX(B5:B19)-MIN(B5:B19)</code>, B26 <code>=STDEV(B5:B19)</code>, each filled across to column D; C27 <code>=CORREL($B$5:$B$19,C5:C19)</code> filled across to D27.</p><p>The results match Fred's spreadsheet on textbook p. 299: averages 73.9, 74.8, 70.7; medians 72, 74, 72; ranges 34, 31, 24; standard deviations 9.0, 7.7, 7.1; correlations 0.85 (English) and 0.77 (Maths). The EC range must stay fixed ($B$5:$B$19) in CORREL. STDEV (STDEV.S) is the sample standard deviation. The book's mode row and its TREND predictions (rows 29 to 35) are not checked here.</p>` }
  ] },
{ number: '23', marks: 4, layout: 0, section: 'Textbook p. 346 · Activity: Developing a personal budget dashboard',
  items: [
    { type: 'formula', marks: 4,
      question: `<p>A budget workbook has a <strong>Raw Data</strong> sheet (sample data shown below) with the headers Month, Income, Expense Category and Expense Amount. Sheet1 is the dashboard. Write a formula in each cell of Sheet1:</p>
<ul><li><strong>B1</strong>: Total Income (the total of the Income column on Raw Data)</li><li><strong>B2</strong>: Total Expenses</li><li><strong>B3</strong>: Total Savings (total income minus total expenses)</li><li><strong>B4</strong>: the total spent on the Groceries category</li></ul>
<p><strong>Raw Data</strong> (a sheet name with a space must be written in single quotes, e.g. 'Raw Data'!B2)</p><table class="hoa-table-normal"><thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><th>1</th><td>Month</td><td>Income</td><td>Expense Category</td><td>Expense Amount</td></tr>
<tr><th>2</th><td>January</td><td>3200</td><td>Rent</td><td>1400</td></tr>
<tr><th>3</th><td>January</td><td></td><td>Groceries</td><td>520</td></tr>
<tr><th>4</th><td>February</td><td>3200</td><td>Rent</td><td>1400</td></tr>
<tr><th>5</th><td>February</td><td></td><td>Entertainment</td><td>180</td></tr>
<tr><th>6</th><td>March</td><td>3350</td><td>Rent</td><td>1400</td></tr>
<tr><th>7</th><td>March</td><td></td><td>Groceries</td><td>610</td></tr>
<tr><th>8</th><td>April</td><td>3200</td><td>Utilities</td><td>290</td></tr>
<tr><th>9</th><td>April</td><td></td><td>Groceries</td><td>480</td></tr>
</tbody></table><p><strong>Sheet1</strong> (the dashboard) is below.</p>`,
      sheet: [
        ['Total Income', null],
        ['Total Expenses', null],
        ['Total Savings', null],
        ['Total spent on Groceries', null]
      ],
      sheets: { 'Raw Data': [
        ['Month', 'Income', 'Expense Category', 'Expense Amount'],
        ['January', 3200, 'Rent', 1400],
        ['January', null, 'Groceries', 520],
        ['February', 3200, 'Rent', 1400],
        ['February', null, 'Entertainment', 180],
        ['March', 3350, 'Rent', 1400],
        ['March', null, 'Groceries', 610],
        ['April', 3200, 'Utilities', 290],
        ['April', null, 'Groceries', 480]
      ] },
      cells: [
        { cell: 'B1', answer: "=SUM('Raw Data'!B2:B9)" },
        { cell: 'B2', answer: "=SUM('Raw Data'!D2:D9)" },
        { cell: 'B3', answer: '=B1-B2' },
        { cell: 'B4', answer: "=SUMIF('Raw Data'!C2:C9,\"Groceries\",'Raw Data'!D2:D9)" }
      ],
      guide: `<p><strong>Sample answers:</strong> B1 <code>=SUM('Raw Data'!B2:B9)</code> (12950), B2 <code>=SUM('Raw Data'!D2:D9)</code> (6280), B3 <code>=B1-B2</code> (6670), B4 <code>=SUMIF('Raw Data'!C2:C9,"Groceries",'Raw Data'!D2:D9)</code> (1610).</p><p>The activity's dashboard uses =SUM for the totals and "=Total Income - Total Expenses" for savings (textbook p. 346). SUMIF gives the total for one expense category, which is what the activity's pie chart of category totals needs.</p><p><em>Note: the spreadsheet in the NESA online exam does not support COUNTIF, SUMIF or AVERAGEIF (they show #ERROR!). Know them for written answers, but in the exam spreadsheet you may need another approach, e.g. an IF column that is then added up with SUM or COUNT.</em></p>` }
  ] },
{ number: '24', marks: 2, layout: 0, section: 'Textbook p. 394 · Activity: Anonymise and mask a dataset',
  stimulus: `<p><strong>Protecting personal data</strong></p><p>An organisation holds a fictional dataset about seven people: each person's name, age, suburb, medical condition and mobile phone number. Before the data is used for analysis, personal details must be protected, as Australian privacy law such as the Privacy Act 1988 expects, while the data stays useful for spotting trends.</p><p><strong>Data masking</strong> hides part of a value but keeps its overall format, so a masked phone number still looks like a phone number. <strong>Anonymisation</strong> removes or generalises details that could identify a person; for example, an exact age can be replaced by a broader age group.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>Write a formula in each cell so that it can be filled down to row 8:</p>
<ul><li><strong>F2</strong>: the masked contact number, which keeps the first four digits and replaces the rest with X, e.g. <code>0413 XXX XXX</code> (fill down to F8)</li><li><strong>G2</strong>: an age group instead of the exact age: <strong>Under 20</strong> or <strong>20 and over</strong> (fill down to G8)</li></ul>`,
      sheet: [
        ['Name', 'Age', 'Suburb', 'Medical Condition', 'Contact', 'Masked contact', 'Age group'],
        ['Lily Monk', 21, 'St Albans', 'Asthma', '0413 125 567', null, null],
        ['Mark Ore', 19, 'Bondi', 'Diabetes', '0422 987 654', null, null],
        ['Ann Batty', 22, 'Brighton', 'Allergies', '0421 123 987', null, null],
        ['Bill Clarke', 18, 'Fairfield', 'Broken leg', '0422 321 987', null, null],
        ['Rosy Muy', 17, 'Kew', 'Asthma', '0435 123 456', null, null],
        ['Dave Hob', 21, 'Padstow', 'Allergies', '0421 555 333', null, null],
        ['Pip Staves', 17, 'Williamsburg', 'Diabetes', '0422 741 852', null, null]
      ],
      cells: [
        { cell: 'F2', fill: 'F2:F8', answer: '=LEFT(E2,4)&" XXX XXX"' },
        { cell: 'G2', fill: 'G2:G8', answer: '=IF(B2<20,"Under 20","20 and over")' }
      ],
      guide: `<p><strong>Sample answers:</strong> F2 <code>=LEFT(E2,4)&amp;" XXX XXX"</code> and G2 <code>=IF(B2&lt;20,"Under 20","20 and over")</code>, each filled down to row 8.</p><p>Masking hides part of a value while keeping its format; replacing exact ages with age ranges is one of the anonymisation techniques on textbook p. 393. Data from the activity on p. 394.</p>` }
  ] },
{ number: '25', marks: 2, layout: 0, section: 'Textbook p. 497 · Combining certainty factors',
  stimulus: `<p><strong>Certainty factors in MYCIN</strong></p><p>MYCIN was an early expert system for diagnosing infections. Each of its rules has a certainty factor (CF) from −1 to 1: a positive CF is evidence for a conclusion, a negative CF is evidence against it, and 0 means the rule tells us nothing. When two rules that fire bear on the same conclusion, their CFs X and Y are combined into a single CF:</p><ul><li>X + Y − XY if X and Y are both greater than 0</li><li>X + Y + XY if X and Y are both less than 0</li><li>(X + Y) / (1 − Min(|X|, |Y|)) otherwise</li></ul><p>Evidence is added one rule at a time: the combined CF so far becomes X and the next rule's CF becomes Y. The rows of the sheet use rules from a simple expert system for deciding whether a person has a cold.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>In <strong>D2</strong>, write one formula that combines the CFs in B2 and C2 using the correct rule, so that it can be filled down to D8.</p>`,
      sheet: [
        ['Evidence', 'CF X', 'CF Y', 'Combined CF'],
        ['Runny nose + sore throat', 0.6, 0.7, null],
        ['... + headache', 0.88, 0.5, null],
        ['... + temperature normal', 0.94, -0.2, null],
        ['Headache + temperature normal', 0.5, -0.2, null],
        ['Exercise 4.3.1 Q3', 0.5, 0.7, null],
        ['Exercise 4.3.1 Q4', 0.6, -0.3, null],
        ['Two negative CFs', -0.2, -0.3, null]
      ],
      cells: [ { cell: 'D2', fill: 'D2:D8', answer: '=IF(AND(B2>0,C2>0),B2+C2-B2*C2,IF(AND(B2<0,C2<0),B2+C2+B2*C2,(B2+C2)/(1-MIN(ABS(B2),ABS(C2)))))' } ],
      guide: `<p><strong>Sample answer:</strong></p><pre class="hoa-code">=IF(AND(B2&gt;0,C2&gt;0),B2+C2-B2*C2,IF(AND(B2&lt;0,C2&lt;0),B2+C2+B2*C2,(B2+C2)/(1-MIN(ABS(B2),ABS(C2)))))</pre><p>Filled down to D8 this gives 0.88, 0.94, 0.925, 0.375, 0.85, 0.43 and −0.44. The first four match the worked example and decision tree (textbook pp. 497–499), and rows 6 and 7 are the Exercise 4.3.1 multiple-choice questions (p. 525; answers C 0.85 and C 0.43). The last row is extra sample data to test the "both negative" rule.</p>` }
  ] },
{ number: '26', marks: 2, layout: 0, section: 'Textbook p. 518 · Comparing proposed versus actual outputs',
  stimulus: `<p><strong>Evaluating a decision support system</strong></p><p>A supermarket uses a decision support system (DSS) to forecast how many loaves of bread it will sell each week, so that it can order the right amount of stock. Ordering too much bread leads to waste, while ordering too little means lost sales.</p><p>To judge how well the DSS is performing, the manager compares its proposed output (the predicted sales) with the actual number of loaves sold in each of five weeks. A positive difference means more bread was sold than the DSS predicted; a negative difference means the DSS over-estimated demand.</p>`,
  items: [
    { type: 'formula', marks: 2,
      question: `<p>The predicted and actual weekly sales are shown in the spreadsheet.</p>
<ul><li>In <strong>D2</strong>, write a formula for the difference between the actual and predicted sales (actual − predicted), so that it can be filled down to D6.</li><li>In <strong>D7</strong>, write a formula for the average difference over the five weeks.</li></ul>`,
      sheet: [
        ['Week', 'Predicted Sales (Loaves)', 'Actual Sales (Loaves)', 'Difference'],
        ['Week 1', 500, 480, null],
        ['Week 2', 520, 530, null],
        ['Week 3', 550, 560, null],
        ['Week 4', 580, 570, null],
        ['Week 5', 600, 620, null],
        ['Average difference', null, null, null]
      ],
      cells: [
        { cell: 'D2', fill: 'D2:D6', answer: '=C2-B2' },
        { cell: 'D7', answer: '=AVERAGE(D2:D6)' }
      ],
      guide: `<p><strong>Sample answers:</strong> D2 <code>=C2-B2</code> filled down to D6 (−20, 10, 10, −10, 20); D7 <code>=AVERAGE(D2:D6)</code> (2).</p><p>A positive difference means the DSS under-predicted. The predictions were never more than 20 loaves out, and on average the DSS under-predicted by only 2 loaves a week, so it does not consistently over- or under-estimate (graph on textbook p. 518; discussion questions on p. 519).</p>` }
  ] },
    // ================= CSSA-style: a scenario and the cells to fill — you decide which formulas to use =================
{ number: '27', marks: 4, layout: 0, section: 'CSSA 2026 Q18 · Car dealership commissions',
  stimulus: `<p>A small used car dealership wants to use a spreadsheet to keep track of its sales and the commissions earned by each of its sales staff each month.</p>
<p>Sales staff receive a commission of 10% of the profits from each car they sell. If a car is sold for more than double its original trade-in price, then the sales staff receive a higher commission of 15% for that sale. If no profit is made on a sale, then the commission will be a flat rate of $50.00.</p>
<p>To further reward high-performing sales staff, a bonus is also added based on the commission earned from each sale, shown in the Bonus Calculation Table in the spreadsheet.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the required information will automatically be displayed when the sales figures are entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>F3</strong>, <strong>G3</strong> and <strong>H3</strong>.</p>`,
      sheet: [
        ['Sales for July 2026'],
        ['StockID', 'Trade-In Price', 'Sale Date', 'Sale Price', 'Sold By', 'Profit', 'Commission', 'Bonus'],
        ['MAZ754', 13500, '1 Jul 2026', 21500, 'Peter', null, null, null],
        ['TOY432', 23000, '5 Jul 2026', 34600, 'Deborah', 11600, 1160, 1000],
        ['FOR983', 8000, '10 Jul 2026', 12990, 'Chloe', 4990, 499, 0],
        ['PEU834', 9900, '10 Jul 2026', 21400, 'Andrew', 11500, 1725, 1500],
        ['TES315', 21500, '11 Jul 2026', 28990, 'Andrew', 7490, 749, 500],
        ['VOL174', 11000, '20 Jul 2026', 16500, 'Alison', 5500, 550, 500],
        ['REN432', 3500, '21 Jul 2026', 9990, 'Amelia', 6490, 973.5, 500],
        ['SUB953', 1500, '24 Jul 2026', 4000, 'Peter', 2500, 375, 0],
        ['MIT235', 1000, '24 Jul 2026', 950, 'Peter', -50, 50, 0],
        [],
        ['Bonus Calculation Table'],
        ['Commission', 'Min', 'Bonus'],
        ['0-500', 0, 0],
        ['501-1000', 501, 500],
        ['1001-1500', 1001, 1000],
        ['1501-2000', 1501, 1500],
        ['>= 2001', 2001, 2000]
      ],
      style: { bold: ['A1:H2', 'A13:C14'], center: ['A1:H1', 'A13:C13'], merge: ['A1:H1', 'A13:C13'],
        colWidths: { A: 110, B: 115, C: 105, D: 90, E: 90, F: 80, G: 105, H: 80 } },
      cells: [
        { cell: 'F3', fill: 'F3:F11', marks: 1, answer: '=D3-B3' },
        { cell: 'G3', fill: 'G3:G11', marks: 2, answer: '=IF(F3<=0,50,IF(D3>B3*2,F3*0.15,F3*0.1))' },
        { cell: 'H3', fill: 'H3:H11', marks: 1, answer: '=VLOOKUP(G3,$B$15:$C$19,2)' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">F3: =D3-B3
G3: =IF(F3&lt;=0, 50, IF(D3&gt;B3*2, F3*0.15, F3*0.1))
H3: =VLOOKUP(G3,$B$15:$C$19,2)</pre>
<p>Row 3 (MAZ754) gives Profit 8000, Commission 800 and Bonus 500. The commission needs a nested IF: check for no profit first, then whether the sale price is more than double the trade-in price. The VLOOKUP looks the commission up in the <strong>Min</strong> column (B15:B19), not the text ranges in column A, and leaves out the last argument so it finds the band the commission falls in. The lookup table must be absolute ($B$15:$C$19) so it stays put when filled down.</p>
<p>Marking (CSSA): 4 marks for addressing all the requirements. Here F3 and H3 are worth 1 mark each and G3 is worth 2.</p>` }
  ] },
{ number: '28', marks: 4, layout: 0, section: 'CSSA style · Gym membership fees',
  stimulus: `<p>FitLife Gym charges each member a monthly fee that depends on their membership type. The fee for each type is listed in the Membership Table in the spreadsheet, so the gym can change its prices without changing any formulas.</p>
<p>Members who are students or seniors are entitled to a concession: they receive a discount of 20% off their monthly fee. Everyone else pays the full fee.</p>
<p>The manager also wants to see the total amount the gym will collect for the month.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the monthly fee, discount and amount due are calculated automatically for each member, along with the total for the month. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>D3</strong>, <strong>E3</strong>, <strong>F3</strong> and <strong>F11</strong>.</p>`,
      sheet: [
        ['FitLife Gym – Monthly Fees', null, null, null, null, null, null, 'Membership Table'],
        ['Member', 'Membership', 'Concession', 'Monthly Fee', 'Discount', 'Amount Due', null, 'Membership', 'Fee'],
        ['Ava Lewis', 'Plus', 'Yes', null, null, null, null, 'Basic', 30],
        ['Ben Ortiz', 'Basic', 'No', 30, 0, 30, null, 'Plus', 45],
        ['Chloe Park', 'Premium', 'No', 60, 0, 60, null, 'Premium', 60],
        ['Daniel Reid', 'Basic', 'Yes', 30, 6, 24],
        ['Ella Moore', 'Premium', 'Yes', 60, 12, 48],
        ['Finn Hayes', 'Plus', 'No', 45, 0, 45],
        ['Grace Tan', 'Premium', 'No', 60, 0, 60],
        [],
        [null, null, null, null, 'Total', null]
      ],
      style: { bold: ['A1:F2', 'H1:I2', 'E11'], merge: ['A1:F1', 'H1:I1'], center: ['A1:F1', 'H1:I1'], currency: ['D3:F11', 'I3:I5'],
        colWidths: { A: 120, B: 115, C: 105, D: 115, E: 90, F: 115, G: 40, H: 115, I: 70 } },
      cells: [
        { cell: 'D3', fill: 'D3:D9', answer: '=VLOOKUP(B3,$H$3:$I$5,2,FALSE)' },
        { cell: 'E3', fill: 'E3:E9', answer: '=IF(C3="Yes",D3*0.2,0)' },
        { cell: 'F3', fill: 'F3:F9', answer: '=D3-E3' },
        { cell: 'F11', answer: '=SUM(F3:F9)' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">D3:  =VLOOKUP(B3,$H$3:$I$5,2,FALSE)
E3:  =IF(C3="Yes", D3*20%, 0)
F3:  =D3-E3
F11: =SUM(F3:F9)</pre>
<p>Ava's row gives $45.00, $9.00 and $36.00, and the month's total is $303.00. The VLOOKUP needs FALSE (an exact match) because the membership types are text and are not in order. The table reference must be absolute so it does not move when the formula is filled down.</p>` }
  ] },
{ number: '29', marks: 4, layout: 0, section: 'CSSA style · Electricity bills',
  stimulus: `<p>PowerUp Energy sends each household a quarterly electricity bill made up of two parts:</p>
<ul><li>a <strong>supply charge</strong>: a fixed daily charge for every day in the billing period</li><li>a <strong>usage charge</strong>: the first 1000 kWh used are charged at the standard rate, and any usage above 1000 kWh is charged at the higher rate</li></ul>
<p>The rates are kept in the Rates table in the spreadsheet so that they can be updated when prices change, without editing any formulas.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that each customer’s supply charge, usage charge and total bill are calculated automatically from the rates in the Rates table. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>D3</strong>, <strong>E3</strong> and <strong>F3</strong>.</p>`,
      sheet: [
        ['Quarterly Bills', null, null, null, null, null, null, 'Rates'],
        ['Customer', 'Days', 'Usage (kWh)', 'Supply Charge', 'Usage Charge', 'Total Bill', null, 'Daily supply charge', 1.1],
        ['Harris', 91, 850, null, null, null, null, 'Standard rate (first 1000 kWh)', 0.3],
        ['Nguyen', 92, 1240, 101.2, 396, 497.2, null, 'Higher rate (above 1000 kWh)', 0.4],
        ['Patel', 90, 1000, 99, 300, 399],
        ['Smith', 91, 640, 100.1, 192, 292.1],
        ['Taylor', 92, 1515, 101.2, 506, 607.2],
        ['Wong', 90, 1100, 99, 340, 439]
      ],
      style: { bold: ['A1:F2', 'H1:I1'], merge: ['A1:F1', 'H1:I1'], center: ['A1:F1', 'H1:I1'], currency: ['D3:F8', 'I2:I4'],
        colWidths: { A: 100, B: 70, C: 110, D: 120, E: 120, F: 100, G: 40, H: 250, I: 70 } },
      cells: [
        { cell: 'D3', fill: 'D3:D8', marks: 1, answer: '=B3*$I$2' },
        { cell: 'E3', fill: 'E3:E8', marks: 2, answer: '=IF(C3>1000,1000*$I$3+(C3-1000)*$I$4,C3*$I$3)' },
        { cell: 'F3', fill: 'F3:F8', marks: 1, answer: '=D3+E3' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">D3: =B3*$I$2
E3: =IF(C3&gt;1000, 1000*$I$3 + (C3-1000)*$I$4, C3*$I$3)
F3: =D3+E3</pre>
<p>Harris's row gives $100.10, $255.00 and $355.10. Only the usage <em>above</em> 1000 kWh is charged at the higher rate, so Nguyen pays 1000 × $0.30 + 240 × $0.40 = $396. The rates must be absolute references ($I$2, $I$3, $I$4); typing the numbers into the formula gives the right answers today but would not update when the rates change.</p>
<p>Another correct usage formula: <code>=MIN(C3,1000)*$I$3+MAX(C3-1000,0)*$I$4</code>.</p>` }
  ] },
{ number: '30', marks: 3, layout: 0, section: 'CSSA style · Library late fees',
  stimulus: `<p>Northside Library lends books for 14 days. If a book is kept longer than that, a late fee of $0.50 is charged for each day beyond the 14 days, up to a maximum fee of $10.00 per book.</p>
<p>A borrower whose late fee for a book is $5.00 or more is blocked from borrowing again until the fee is paid. All other borrowers are shown as OK.</p>`,
  items: [
    { type: 'formula', marks: 3,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the number of days late, the late fee and the borrower’s status are displayed automatically when the number of days a book was kept is entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>D3</strong>, <strong>E3</strong> and <strong>F3</strong>.</p>`,
      sheet: [
        ['Northside Library – Returns'],
        ['Borrower', 'Book', 'Days Kept', 'Days Late', 'Late Fee', 'Status'],
        ['Liam', 'The Hobbit', 21, null, null, null],
        ['Mia', 'Wonder', 10, 0, 0, 'OK'],
        ['Noah', 'Holes', 30, 16, 8, 'Blocked'],
        ['Olivia', 'Matilda', 14, 0, 0, 'OK'],
        ['Ruby', 'Dune', 45, 31, 10, 'Blocked'],
        ['Sam', 'Hatchet', 24, 10, 5, 'Blocked'],
        ['Zoe', 'Coraline', 15, 1, 0.5, 'OK']
      ],
      style: { bold: ['A1:F2'], merge: ['A1:F1'], center: ['A1:F1'], currency: ['E3:E9'], colWidths: { A: 100, B: 120 } },
      cells: [
        { cell: 'D3', fill: 'D3:D9', answer: '=IF(C3>14,C3-14,0)' },
        { cell: 'E3', fill: 'E3:E9', answer: '=MIN(D3*0.5,10)' },
        { cell: 'F3', fill: 'F3:F9', answer: '=IF(E3>=5,"Blocked","OK")' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">D3: =IF(C3&gt;14, C3-14, 0)       (or =MAX(C3-14, 0))
E3: =MIN(D3*0.5, 10)           (or =IF(D3*0.5&gt;10, 10, D3*0.5))
F3: =IF(E3&gt;=5, "Blocked", "OK")</pre>
<p>Liam kept his book 7 days too long, so he owes $3.50 and is OK. Ruby's fee would be $15.50, but MIN caps it at $10.00. Sam owes exactly $5.00, which counts as "$5.00 or more", so the test must be &gt;= and not &gt;.</p>` }
  ] },
{ number: '31', marks: 3, layout: 0, section: 'CSSA style · Online store shipping',
  stimulus: `<p>An online store works out the shipping cost of each order from the parcel’s weight, using the Shipping Rates table in the spreadsheet. A parcel is charged the rate for the band its weight falls in; for example, a 2.5 kg parcel is in the band that starts at 1 kg.</p>
<p>Orders worth $100 or more are shipped free by standard delivery. Customers who choose Express delivery pay an extra $12.00 on top of the shipping cost, even if their standard shipping is free.</p>`,
  items: [
    { type: 'formula', marks: 3,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the shipping cost and total cost of each order are calculated automatically. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>E3</strong> and <strong>F3</strong>.</p>`,
      sheet: [
        ['Orders', null, null, null, null, null, null, 'Shipping Rates'],
        ['Order No', 'Order Value', 'Weight (kg)', 'Delivery', 'Shipping', 'Total Cost', null, 'Weight from (kg)', 'Cost'],
        ['#1001', 45, 0.8, 'Standard', null, null, null, 0, 8.95],
        ['#1002', 120, 2.5, 'Standard', 0, 120, null, 1, 12.95],
        ['#1003', 89.9, 3, 'Express', 28.95, 118.85, null, 3, 16.95],
        ['#1004', 150, 6.2, 'Express', 12, 162, null, 5, 24.95],
        ['#1005', 35.5, 12, 'Standard', 34.95, 70.45, null, 10, 34.95],
        ['#1006', 99.99, 1, 'Standard', 12.95, 112.94],
        ['#1007', 64, 4.9, 'Express', 28.95, 92.95]
      ],
      style: { bold: ['A1:F2', 'H1:I2'], merge: ['A1:F1', 'H1:I1'], center: ['A1:F1', 'H1:I1'], currency: ['B3:B9', 'E3:F9', 'I3:I7'],
        colWidths: { A: 90, B: 110, C: 105, D: 90, E: 90, F: 100, G: 40, H: 140, I: 80 } },
      cells: [
        { cell: 'E3', fill: 'E3:E9', marks: 2, answer: '=IF(B3>=100,0,VLOOKUP(C3,$H$3:$I$7,2))+IF(D3="Express",12,0)' },
        { cell: 'F3', fill: 'F3:F9', marks: 1, answer: '=B3+E3' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">E3: =IF(B3&gt;=100, 0, VLOOKUP(C3,$H$3:$I$7,2)) + IF(D3="Express", 12, 0)
F3: =B3+E3</pre>
<p>Order #1001 gives $8.95 and $53.95. The VLOOKUP has no FALSE: it needs the <em>approximate</em> match, which finds the largest "Weight from" that is not more than the parcel's weight. Order #1004 is over $100, so its standard shipping is free, but Express still adds $12.00. An order of exactly $100 also ships free, so the test is &gt;=.</p>
<p>Another correct answer: <code>=IF(D3="Express",12,0)+IF(B3&lt;100,VLOOKUP(C3,$H$3:$I$7,2),0)</code>.</p>` }
  ] },
{ number: '32', marks: 4, layout: 0, section: 'CSSA style · Café payroll',
  stimulus: `<p>The Corner Café pays its staff an hourly rate. Any hours worked above 38 in a week are overtime and are paid at time-and-a-half (1.5 × the employee’s hourly rate).</p>
<p>Tax is withheld from each employee’s gross pay before they are paid: 15% if the gross pay is $1000 or less, otherwise 25%. The net pay is what is left after tax.</p>
<p>The owner also needs to know the total gross pay for the week.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that each employee’s gross pay, tax and net pay, and the week’s total gross pay, are calculated automatically when the hours are entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>D3</strong>, <strong>E3</strong>, <strong>F3</strong> and <strong>D10</strong>.</p>`,
      sheet: [
        ['Weekly Payroll'],
        ['Employee', 'Hourly Rate', 'Hours Worked', 'Gross Pay', 'Tax', 'Net Pay'],
        ['Aisha', 28, 40, null, null, null],
        ['Ben', 25, 30, 750, 112.5, 637.5],
        ['Carla', 32, 38, 1216, 304, 912],
        ['Dev', 24, 20, 480, 72, 408],
        ['Emma', 30, 44, 1410, 352.5, 1057.5],
        ['Felix', 26, 35, 910, 136.5, 773.5],
        [],
        [null, null, 'Total', null]
      ],
      style: { bold: ['A1:F2', 'C10'], merge: ['A1:F1'], center: ['A1:F1'], currency: ['B3:B8', 'D3:F10'], colWidths: { A: 100, B: 110, C: 120, D: 105, E: 90, F: 100 } },
      cells: [
        { cell: 'D3', fill: 'D3:D8', answer: '=IF(C3>38,38*B3+(C3-38)*B3*1.5,C3*B3)' },
        { cell: 'E3', fill: 'E3:E8', answer: '=IF(D3<=1000,D3*0.15,D3*0.25)' },
        { cell: 'F3', fill: 'F3:F8', answer: '=D3-E3' },
        { cell: 'D10', answer: '=SUM(D3:D8)' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">D3:  =IF(C3&gt;38, 38*B3 + (C3-38)*B3*1.5, C3*B3)
E3:  =IF(D3&lt;=1000, D3*15%, D3*25%)
F3:  =D3-E3
D10: =SUM(D3:D8)</pre>
<p>Aisha worked 2 hours of overtime: 38 × $28 + 2 × $42 = $1148.00 gross, $287.00 tax and $861.00 net. The week's total gross pay is $5914.00. Only the hours <em>above</em> 38 are paid at 1.5 times the rate. Carla worked exactly 38 hours, so she has no overtime.</p>
<p>Each of the four cells is worth 1 mark. D10 only gives the right total once D3, E3 and F3 work for every row.</p>` }
  ] },
{ number: '33', marks: 4, layout: 0, section: 'CSSA style · Hardware store stock',
  stimulus: `<p>A hardware store uses a spreadsheet to track its stock. Each item has a reorder level: when the quantity in stock falls to or below the reorder level, the item must be reordered. When an item is reordered, the store orders enough to bring its stock back up to the item’s maximum stock level. Items that do not need reordering have an order quantity of 0.</p>
<p>For insurance purposes, the store also needs the value of the stock on hand for each item (unit cost × quantity in stock) and the total value of all its stock.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that the required information is displayed automatically when the stock levels are updated. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>F3</strong>, <strong>G3</strong>, <strong>H3</strong> and <strong>H10</strong>.</p>`,
      sheet: [
        ['Stock Report'],
        ['Item', 'Unit Cost', 'In Stock', 'Reorder Level', 'Max Stock', 'Reorder?', 'Order Qty', 'Stock Value'],
        ['Hammer', 18.5, 12, 15, 60, null, null, null],
        ['Screwdriver set', 24, 40, 20, 80, 'No', 0, 960],
        ['Drill bits', 12.75, 20, 20, 50, 'Yes', 30, 255],
        ['Tape measure', 9.9, 35, 10, 40, 'No', 0, 346.5],
        ['Spirit level', 32, 3, 8, 25, 'Yes', 22, 96],
        ['Paint brush', 6.45, 100, 30, 150, 'No', 0, 645],
        [],
        [null, null, null, null, null, null, 'Total', null]
      ],
      style: { bold: ['A1:H2', 'G10'], merge: ['A1:H1'], center: ['A1:H1'], currency: ['B3:B8', 'H3:H10'], colWidths: { A: 140, D: 120, E: 100, G: 100, H: 110 } },
      cells: [
        { cell: 'F3', fill: 'F3:F8', answer: '=IF(C3<=D3,"Yes","No")' },
        { cell: 'G3', fill: 'G3:G8', answer: '=IF(F3="Yes",E3-C3,0)' },
        { cell: 'H3', fill: 'H3:H8', answer: '=B3*C3' },
        { cell: 'H10', answer: '=SUM(H3:H8)' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">F3:  =IF(C3&lt;=D3, "Yes", "No")
G3:  =IF(F3="Yes", E3-C3, 0)      (or =IF(C3&lt;=D3, E3-C3, 0))
H3:  =B3*C3
H10: =SUM(H3:H8)</pre>
<p>The hammers need reordering (12 is at or below 15), so the store orders 60 − 12 = 48; their stock value is $222.00. The total stock value is $2524.50. The drill bits are exactly at their reorder level, so the test must be &lt;= ("falls to or below").</p>` }
  ] },
{ number: '34', marks: 4, layout: 0, section: 'CSSA style · Final marks and grades',
  stimulus: `<p>A school works out each student’s final mark for a course from three assessments. Each assessment has a weighting, stored in row 11 of the spreadsheet so that the weightings can be changed later. The final mark is the weighted total, rounded to the nearest whole number.</p>
<p>The final mark is then converted to a grade using the Grade Table.</p>
<p>To pass the course, a student must have a final mark of at least 50 <strong>and</strong> a mark of at least 40 in the exam. Otherwise the result is a Fail.</p>`,
  items: [
    { type: 'formula', marks: 4,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that each student’s final mark, grade and result are displayed automatically when their marks are entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>E3</strong>, <strong>F3</strong> and <strong>G3</strong>.</p>`,
      sheet: [
        ['Course Results'],
        ['Student', 'Task 1', 'Task 2', 'Exam', 'Final Mark', 'Grade', 'Result'],
        ['Ava', 80, 70, 90, null, null, null],
        ['Ben', 60, 55, 38, 48, 'E', 'Fail'],
        ['Chloe', 92, 88, 95, 93, 'A', 'Pass'],
        ['Daniel', 70, 80, 35, 55, 'D', 'Fail'],
        ['Ella', 65, 60, 72, 67, 'C', 'Pass'],
        ['Finn', 45, 50, 52, 50, 'D', 'Pass'],
        ['Grace', 78, 74, 76, 76, 'B', 'Pass'],
        [],
        ['Weighting', 0.25, 0.25, 0.5],
        [],
        ['Grade Table'],
        ['Mark', 'Grade'],
        [0, 'E'], [50, 'D'], [65, 'C'], [75, 'B'], [85, 'A']
      ],
      style: { bold: ['A1:G2', 'A11', 'A13:B14'], merge: ['A1:G1', 'A13:B13'], center: ['A1:G1', 'B2:G9', 'A13:B19'], percent: ['B11:D11'], colWidths: { A: 110, E: 105 } },
      cells: [
        { cell: 'E3', fill: 'E3:E9', marks: 2, answer: '=ROUND(B3*$B$11+C3*$C$11+D3*$D$11,0)' },
        { cell: 'F3', fill: 'F3:F9', answer: '=VLOOKUP(E3,$A$15:$B$19,2)' },
        { cell: 'G3', fill: 'G3:G9', answer: '=IF(AND(E3>=50,D3>=40),"Pass","Fail")' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">E3: =ROUND(B3*$B$11 + C3*$C$11 + D3*$D$11, 0)
F3: =VLOOKUP(E3,$A$15:$B$19,2)
G3: =IF(AND(E3&gt;=50, D3&gt;=40), "Pass", "Fail")</pre>
<p>Ava: 80 × 25% + 70 × 25% + 90 × 50% = 82.5, which rounds to 83, so she gets a B and passes. The weightings must be absolute ($B$11, $C$11, $D$11) or they would move down a row with every student. Daniel's final mark of 55 is enough, but his exam mark of 35 is not, so AND makes him Fail. Finn's 49.75 rounds to 50, which is a pass.</p>` }
  ] },
{ number: '35', marks: 3, layout: 0, section: 'CSSA style · Staff usernames',
  stimulus: `<p>Harbour Tech creates computer accounts for its new employees automatically from a spreadsheet.</p>
<ul><li>The <strong>username</strong> is the first letter of the employee’s first name followed by their surname, all in lower case (e.g. Olivia Chen → ochen).</li>
<li>The <strong>email address</strong> is the username followed by @harbourtech.com.au.</li>
<li>The <strong>staff code</strong> is the first three letters of the surname in capitals, followed by the year the employee started (e.g. CHE2026).</li></ul>`,
  items: [
    { type: 'formula', marks: 3,
      question: `<p>Part of the spreadsheet has been set up. Complete the spreadsheet so that each new employee’s username, email address and staff code are created automatically when their details are entered. You need to allow for ‘fill down’ when appropriate.</p>
<p>Complete the outlined cells <strong>D3</strong>, <strong>E3</strong> and <strong>F3</strong>.</p>`,
      sheet: [
        ['New Staff Accounts'],
        ['First Name', 'Surname', 'Start Year', 'Username', 'Email', 'Staff Code'],
        ['Olivia', 'Chen', 2026, null, null, null],
        ['Marcus', 'Williams', 2025, 'mwilliams', 'mwilliams@harbourtech.com.au', 'WIL2025'],
        ['Priya', 'Sharma', 2026, 'psharma', 'psharma@harbourtech.com.au', 'SHA2026'],
        ['Tom', 'Nguyen', 2024, 'tnguyen', 'tnguyen@harbourtech.com.au', 'NGU2024'],
        ['Sofia', 'Rossi', 2026, 'srossi', 'srossi@harbourtech.com.au', 'ROS2026'],
        ['Ethan', 'Brown', 2025, 'ebrown', 'ebrown@harbourtech.com.au', 'BRO2025']
      ],
      style: { bold: ['A1:F2'], merge: ['A1:F1'], center: ['A1:F1'], colWidths: { A: 110, B: 100, C: 100, D: 110, E: 260, F: 110 } },
      cells: [
        { cell: 'D3', fill: 'D3:D8', answer: '=LOWER(LEFT(A3,1)&B3)' },
        { cell: 'E3', fill: 'E3:E8', answer: '=D3&"@harbourtech.com.au"' },
        { cell: 'F3', fill: 'F3:F8', answer: '=UPPER(LEFT(B3,3))&C3' }
      ],
      guide: `<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">D3: =LOWER(LEFT(A3,1) &amp; B3)
E3: =D3 &amp; "@harbourtech.com.au"
F3: =UPPER(LEFT(B3,3)) &amp; C3</pre>
<p>LEFT takes characters from the start of the text, &amp; joins text together (CONCATENATE does the same), and LOWER and UPPER change the case. Olivia Chen gets ochen, ochen@harbourtech.com.au and CHE2026.</p>` }
  ] }


  ]
});
})();
