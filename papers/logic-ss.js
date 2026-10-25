/* Logic - Spreadsheet formulas. Auto-marked questions from ec.eforge.online (Data Science) and the EPC textbook. Built by build-logic.ps1. */
(function () {

registerExam({
  id: 'logic-ss',
  title: 'Logic — Spreadsheet formulas',
  source: 'ec.eforge.online + EPC textbook', year: 2026, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 53,
  coverNotes: `<p>Write spreadsheet formulas and check them: your formula is calculated on the sheet shown and compared with the expected results. Questions from ec.eforge.online (Data Science) and the EPC textbook.</p>`,
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
          guide: `<p><strong>Sample answer:</strong> <code>=COUNTIF(G2:G100, "&gt;75")</code></p><p>COUNTIF counts the cells in a range that meet a condition; the condition is written in quotes. Scores of exactly 75 are not counted.</p>` }
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
  items: [
    { type: 'formula', marks: 4,
      question: `<p>The movie dataset from the activity has been entered in a spreadsheet (data in rows 2 to 6). Write a formula in each cell:</p>
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
    { type: 'formula', marks: 4,
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
    { type: 'formula', marks: 3,
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
      guide: `<p><strong>Sample answers:</strong> B13 <code>=SUMIF(B2:B11,"&gt;25",C2:C11)</code> (3), B14 <code>=COUNTIF(C2:C11,"&gt;0")</code> (6), B15 <code>=AVERAGEIF(C2:C11,"&gt;0",B2:B11)</code> (22.33).</p><p>The textbook's example is <code>=SUMIF(Temperature, "&gt;25", Rainfall)</code> (p. 205): the first range is tested against the criterion and the matching cells of the last range are added. AVERAGEIF works the same way.</p>` }
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
  items: [
    { type: 'formula', marks: 2,
      question: `<p>The weather data from Step 1 of the activity is in Sheet1 (rows 2 to 8). In the textbook the summary is on a separate Summary sheet; here, write the summary formulas below the data:</p>
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
  items: [
    { type: 'formula', marks: 1,
      question: `<p>The textbook uses a pivot table to total the monthly expenses by category. The same summary can be made with a formula. In <strong>F2</strong>, write a formula that adds up the amounts for the category named in E2, so that it can be filled down to F4.</p>`,
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
      guide: `<p><strong>Sample answer:</strong> <code>=SUMIF($B$2:$B$7,E2,$C$2:$C$7)</code>, filled down to F4 (Food 100, Transport 70, Bills 100).</p><p>The absolute references ($) keep the data ranges fixed when the formula is filled down, while E2 changes to E3 and E4. The results match the pivot table on textbook p. 222.</p>` }
  ] },
{ number: '18', marks: 2, layout: 0, section: 'Textbook p. 225 · Activity: Building a weather dashboard (Step 3A)',
  items: [
    { type: 'formula', marks: 2,
      question: `<p>In the dashboard activity a pivot table shows the <strong>Sum of Rainfall (mm)</strong> for each Condition. Reproduce the pivot table with formulas:</p>
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
      guide: `<p><strong>Sample answers:</strong> H2 <code>=SUMIF($E$2:$E$8,G2,$D$2:$D$8)</code> filled down to H4 (Cloudy 5, Rain 30, Sunny 0); H5 <code>=SUM(H2:H4)</code> (35). <code>=SUM(D2:D8)</code> also gives 35.</p><p>These match the pivot table in the dashboard activity (textbook pp. 225–227).</p>` }
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
  items: [
    { type: 'formula', marks: 2,
      question: `<p>The textbook's conditional formatting example colours each score using the legend in rows 10 to 13. Instead of colours, write a formula in <strong>C2</strong> that displays the band as text: <strong>High</strong> for a score above 90, <strong>Average</strong> for a score from 70 to 89, and <strong>Low</strong> for a score below 70. It should be possible to fill it down to C8.</p>`,
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
        ['Yellow', 'Average score (70–89)', null],
        ['Pink', 'Low score (<70)', null]
      ],
      cells: [ { cell: 'C2', fill: 'C2:C8', answer: '=IF(B2>90,"High",IF(B2>=70,"Average","Low"))' } ],
      guide: `<p><strong>Sample answer:</strong> <code>=IF(B2&gt;90,"High",IF(B2&gt;=70,"Average","Low"))</code>, filled down to C8.</p><p>A nested IF tests the conditions in order: above 90 first, then 70 or more, and anything else is Low. Ava and Ella are High, Daniel is Low and the rest are Average (legend from textbook p. 286; the book's screenshot shades Ava's 92 yellow, which does not match its own legend).</p>` }
  ] },
{ number: '21', marks: 1, layout: 0, section: 'Textbook p. 287 · Pivot tables and charts',
  items: [
    { type: 'formula', marks: 1,
      question: `<p>The textbook's pivot table shows each student's <strong>average score</strong> across all their Maths and Science tasks (the "Total" column). The data for six of the students is in A1:D37. In <strong>G2</strong>, write a formula that calculates the average score of the student named in F2, so that it can be filled down to G7.</p>`,
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
      guide: `<p><strong>Sample answer:</strong> <code>=AVERAGEIF($A$2:$A$37,F2,$D$2:$D$37)</code>, filled down to G7.</p><p>AVERAGEIF averages the scores in column D whose student in column A matches F2. The results (Ava 82.3, Ben 83, Chloe 81.2, Daniel 77.7, Dave 39.7, Ella 76.8) round to the Total column of the pivot table on textbook p. 287. Finn and Grace are left out because their rows are cut off in the book's screenshot.</p>` }
  ] },
{ number: '22', marks: 5, layout: 0, section: 'Textbook p. 299 · Activity: Correlation',
  items: [
    { type: 'formula', marks: 5,
      question: `<p>Fred's spreadsheet (reproduced below) compares his classmates' Enterprise Computing (EC) results with their English and Maths results. Reproduce the <strong>sample data statistics</strong>. Write a formula in each cell so that it can be filled across to column D:</p>
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
      guide: `<p><strong>Sample answers:</strong> B1 <code>=SUM('Raw Data'!B2:B9)</code> (12950), B2 <code>=SUM('Raw Data'!D2:D9)</code> (6280), B3 <code>=B1-B2</code> (6670), B4 <code>=SUMIF('Raw Data'!C2:C9,"Groceries",'Raw Data'!D2:D9)</code> (1610).</p><p>The activity's dashboard uses =SUM for the totals and "=Total Income - Total Expenses" for savings (textbook p. 346). SUMIF gives the total for one expense category, which is what the activity's pie chart of category totals needs.</p>` }
  ] },
{ number: '24', marks: 2, layout: 0, section: 'Textbook p. 394 · Activity: Anonymise and mask a dataset',
  items: [
    { type: 'formula', marks: 2,
      question: `<p>The fictional dataset from the activity must be masked and anonymised before it is used for analysis. Write a formula in each cell so that it can be filled down to row 8:</p>
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
  items: [
    { type: 'formula', marks: 2,
      question: `<p>MYCIN combines two certainty factors X and Y with these formulas:</p>
<ul><li>X + Y − XY if X and Y are both greater than 0</li><li>X + Y + XY if X and Y are both less than 0</li><li>(X + Y) / (1 − Min(|X|, |Y|)) otherwise</li></ul>
<p>In <strong>D2</strong>, write one formula that combines the CFs in B2 and C2 using the correct rule, so that it can be filled down to D8.</p>`,
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
  items: [
    { type: 'formula', marks: 2,
      question: `<p>A supermarket's decision support system (DSS) predicted its weekly bread sales. The predicted and actual sales from the textbook's graph are below.</p>
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
  ] }
  ]
});
})();
