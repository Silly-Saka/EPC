registerExam({
  id: 'ite2026',
  title: 'ITE 2026 Enterprise Computing Trial HSC Examination',
  source: 'ITE',
  year: 2026,
  kind: 'trial',
  readingMinutes: 10,
  workingMinutes: 140,
  totalMarks: 80,
  coverNotes: `<p><strong>Section I</strong> – 19 marks (Questions 1–15). Allow about 30 minutes for this section.</p>
<ul>
<li>Questions 1–7: select the alternative that best answers the question.</li>
<li>Questions 8–10: select each alternative that answers the question (multiple items may be selected).</li>
<li>Question 11: select the option in each row that best answers the question.</li>
<li>Questions 12–15: match items on the left with matching items on the right.</li>
</ul>
<p><strong>Section II</strong> – 61 marks (Questions 16–28). Attempt ALL questions. Allow about 1 hour and 50 minutes for this section.</p>
<p>If you include diagrams in your answer, ensure they are clearly labelled.</p>`,
  groups: [
    // ---------------- Section I ----------------
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which strategy is most effective in reducing the impact of unconscious bias in data visualisation?</p>`,
          options: [
            `Increasing reliance on automated tools`,
            `Limiting the dataset to a smaller sample`,
            `Reviewing data sources and assumptions during analysis`,
            `Removing all historical data from the dataset and analysis`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>An enterprise dashboard includes summary charts, trend lines, and highlighted anomalies in red.</p>
<p>Which combination of purposes is being achieved?</p>`,
          options: [
            `Data storage, identifying trends and data security`,
            `Data collection, data aggregation and processing efficiency`,
            `Reducing dataset size, predicting trends and eliminating data bias`,
            `Aggregating information, telling a story, and highlighting significant results`
          ],
          answer: 4,
          guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>What is the key difference between interval and ratio data?</p>`,
          options: [
            `Unlike ratio data, interval data cannot be measured numerically`,
            `Ratio data includes a true zero point, but interval data does not`,
            `Interval data is always categorical whilst ratio data is not`,
            `Unlike interval data, ratio data cannot be compared`
          ],
          answer: 2,
          guide: `<p>Answer: B. Ratio data has a true zero point; interval data does not.</p><p>(Note: the published marking guidelines list C for this question, which appears to be an error.)</p>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a major ethical concern associated with intelligent surveillance systems?</p>`,
          options: [
            `Storage limitations`,
            `Internet connectivity`,
            `Privacy principle issues`,
            `Increased electricity usage`
          ],
          answer: 3,
          guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>A large enterprise implements a rule-based expert system to provide IT support to staff. While the system successfully resolves standard software issues, employees report that complex problems often require assistance from human technicians.</p>
<p>Which limitation of expert systems is BEST demonstrated in this scenario?</p>`,
          options: [
            `High development costs`,
            `Limited reasoning flexibility`,
            `Dependence on accurate knowledge`,
            `Increased processing cycle requirements`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>A development team introduces a new system in only one store before deploying it company-wide throughout an enterprise.</p>
<p>Which implementation method is being used?</p>`,
          options: [
            `Pilot implementation`,
            `Direct implementation`,
            `Phased implementation`,
            `Parallel implementation`
          ],
          answer: 1,
          guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq',
          question: `<p>A team tests an online booking system using thousands of simultaneous users to determine whether performance degrades under heavy demand.</p>
<p>Identify which method of testing is being used.</p>`,
          options: [
            `Beta testing`,
            `Volume testing`,
            `Functional testing`,
            `Acceptance testing`
          ],
          answer: 2,
          guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>A video streaming service collects personal data from their subscribers for their records. They’re looking to share the information to another video streaming company without the informed consent from each subscriber or appropriate security measures.</p>
<p>Which of the following issues are demonstrated in this scenario? (Multiple items may be selected)</p>`,
          options: [
            `The organisation may be in breach of privacy laws such as the Privacy Act 1988`,
            `The organisation is demonstrating ethical data practices as the data is required for business purposes`,
            `Individuals’ rights and personal privacy may be violated when sharing such data without consent`,
            `The lack of security measures decreases the risk of data breaches`,
            `The organisation is improving profitability by sharing subscriber information`,
            `Sensitive information may be exposed to unauthorised access`
          ],
          answer: [1, 3, 6],
          guide: `<p>Answer: A, C, F</p>` }
      ]
    },
    {
      number: '9', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>Which methods can be used to restrict access to sensitive financial data? (Multiple items may be selected)</p>`,
          options: [
            `Encryption`,
            `RAID Storage`,
            `Mirrored Backup`,
            `Biometric Authentication`,
            `Multi-Factor Authentication`,
            `Role Based Access Control (RBAC)`,
            `Transaction Processing System (TPS)`
          ],
          answer: [4, 5, 6],
          guide: `<p>Answer: D, E, F</p>` }
      ]
    },
    {
      number: '10', marks: 1, layout: 0,
      items: [
        { type: 'multi',
          question: `<p>A bank introduces a machine learning system that continually refines its fraud detection by analysing customer transaction data and identifying unusual spending patterns.</p>
<p>Which characteristics of machine learning are demonstrated by this system? (Multiple items may be selected)</p>`,
          options: [
            `Static processing rules only`,
            `Identification of anomalies`,
            `Continuous improvement using data`,
            `Dependence on printed records`,
            `Automated analysis of transactions`,
            `Replacement of all bank employees`,
            `Requires manual review of every transaction`
          ],
          answer: [2, 3, 5],
          guide: `<p>Answer: B, C, E</p>` }
      ]
    },
    {
      number: '11', marks: 1, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Select the primary thinking skill demonstrated by each activity during the design and development of an enterprise system.</p>`,
          rowHeader: 'Activity',
          columns: ['A – Computational Thinking', 'B – Design Thinking', 'C – Systems Thinking'],
          rows: [
            `1. Analysing customer data to identify purchasing patterns.`,
            `2. Interviewing users and refining a prototype based on their feedback`,
            `3. Evaluating how a new CRM system will affect workflows across the organisation.`,
            `4. Comparing several interface designs before selecting the most appropriate solution.`,
            `5. Mapping how information flows between departments in an enterprise system.`,
            `6. Designing an formulas to automate invoice processing.`
          ],
          answer: [1, 2, 3, 2, 3, 1],
          guide: `<p>Answer: 1 – A, 2 – B, 3 – C, 4 – B, 5 – C, 6 – A (1 mark)</p>` }
      ]
    },
    {
      number: '12', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each definition with the correct term.</p>`,
          rowHeader: 'Definition',
          columns: ['A – Data Science', 'B – Expert System', 'C – Informatics', 'D – Machine Learning', 'E – Python', 'F – Qualitative Data', 'G – Quantative Data', 'H – Simulation', 'I – SQL', 'J – What-if Analysis'],
          rows: [
            `1. The process of exploring different scenarios by changing variables in a model to predict possible outcomes and support decision-making.`,
            `2. The discipline of collecting, managing, analysing and interpreting data to solve problems, support decision-making and gain insights.`,
            `3. A programming language commonly used to manage, query and manipulate data which is stored in relational databases.`,
            `4. Data that is descriptive and non-numerical, often collected through observations, interviews, opinions or open-ended responses.`,
            `5. A field of artificial intelligence in which computer systems learn from data to improve their performance or predictions without being explicitly programmed for every task.`
          ],
          answer: [10, 3, 9, 6, 4],
          guide: `<p>Answer: 1 – J, 2 – C, 3 – I, 4 – F, 5 – D (2 marks)</p>` }
      ]
    },
    {
      number: '13', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each scenario with the most appropriate chart.</p>`,
          rowHeader: 'Scenario',
          columns: ['A – Bar chart', 'B – Heat map', 'C – Line graph', 'D – Pie chart', 'E – Scatter plot', 'F – Stacked bar chart'],
          rows: [
            `1. Showing sales growth over 12 months`,
            `2. Comparing revenue across regions`,
            `3. Highlighting underperforming stores using colour intensity`,
            `4. Exploring the relationship between advertising spend and sales`,
            `5. Showing percentage of sales by product category`,
            `6. Comparing category contributions across regions`
          ],
          answer: [3, 1, 2, 5, 4, 6],
          guide: `<p>Answer: 1 – C, 2 – A, 3 – B, 4 – E, 5 – D, 6 – F (2 marks)</p>` }
      ]
    },
    {
      number: '14', marks: 2, layout: 0,
      items: [
        { type: 'grid',
          question: `<p>Match each ability with the most appropriate characteristic.</p>`,
          rowHeader: 'Ability',
          columns: ['A – Adaptability', 'B – Autonomous operation', 'C – Communication ability', 'D – Environmental awareness', 'E – Goal-oriented behaviour', 'F – Learning capability'],
          rows: [
            `1. The ability to improve performance using previous data or experiences`,
            `2. The ability to send and receive information from other systems`,
            `3. The ability to make decisions to achieve a specific objective`,
            `4. The ability to operate independently without constant human control`,
            `5. The ability to collect and respond to information from the environment`,
            `6. The ability to modify behaviour in response to changing conditions`
          ],
          answer: [6, 3, 5, 2, 4, 1],
          guide: `<p>Answer: 1 – F, 2 – C, 3 – E, 4 – B, 5 – D, 6 – A (2 marks)</p>` }
      ]
    },
    {
      number: '15', marks: 2, layout: 1,
      stimulus: `<p>A large fitness centre is developing a new membership management system to improve the efficiency of member check-ins and class bookings. The team has developed a system flowchart to represent their new system.</p>
<p><img src="assets/ite2026/q15-flowchart.png" alt="System flowchart: Members Scan Card (online input) to Check Membership process, which links to Member Database (direct access storage) and Login Interface (online display); Member Database connects via a telecommunication link to an Online Server (cloud); Check Membership leads to Booking Management, which displays Booking Information and outputs a Class Booking paper document"></p>`,
      items: [
        { type: 'grid',
          question: `<p>Match each process with the most appropriate symbols on the above system flowchart.</p>`,
          rowHeader: 'Process',
          columns: ['A – Cloud', 'B – Direct access storage', 'C – Online display', 'D – Online input', 'E – Paper document', 'F – Telecommunication link'],
          rows: [
            `1. Members scan card`,
            `2. Member database`,
            `3. Booking information displayed on screen`,
            `4. Connection to online server`,
            `5. Online server`,
            `6. Printed receipts of class bookings`
          ],
          answer: [4, 2, 3, 6, 1, 5],
          guide: `<p>Answer: 1 – D, 2 – B, 3 – C, 4 – F, 5 – A, 6 – E (2 marks)</p>` }
      ]
    },

    // ---------------- Section II ----------------
    {
      number: '16', marks: 2, layout: 3,
      stimulus: `<p>A company introduces a new hybrid work policy and, after three months, asks employees to complete an online survey about their experience. The survey link is included in the company's weekly office newsletter. At the end of the survey period, management reviews the responses and concludes that employees are highly satisfied with the new arrangement. When preparing a report, the manager gives greater emphasis to comments that support the decision to introduce hybrid work and regards a small number of critical responses as isolated opinions.</p>`,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>Identify TWO examples of bias present in the scenario.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies TWO examples of bias present in the stimulus scenario.</td><td>2</td></tr>
<tr><td>Identifies ONE example of bias present in the stimulus scenario.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The scenario contains several possible examples of bias. Suitable answers may include:</p>
<ul>
<li>Sampling bias – The survey is distributed through the company newsletter, so employees who rarely read it or have limited access may be underrepresented. As a result, the sample may not accurately represent all employees.</li>
<li>Selection bias – Completing the survey is voluntary, so employees who choose to respond may have different opinions from those who do not respond, making the results less representative.</li>
<li>Non-response bias – Employees who ignore or do not complete the survey are excluded from the results. If their opinions differ from respondents, the findings may be misleading.</li>
<li>Confirmation bias – The manager gives greater weight to comments that support the hybrid work policy while dismissing critical feedback, leading to conclusions that reinforce an existing belief rather than objectively reflecting the evidence.</li>
</ul>` }
      ]
    },
    {
      number: '17', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>Outline how the use of colour in a data visualisation can improve its effectiveness.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Outlines how colour improves the effectiveness of a data visualisation by helping users identify important data, patterns, trends, or key information.</td><td>2</td></tr>
<tr><td>Identifies a way colour can improve a data visualisation.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Colour improves a data visualisation by assisting users to quickly understand and interpret the data. Different colours are used to separate categories such as regions, products, or years, making comparisons easier. Colour can also highlight important information, trends, patterns, high and low values, or anomalies so users can identify key results faster.</p>
<p>Using consistent colours across charts improves readability and reduces confusion, especially when working with large or complex datasets. Contrast and colour choice can also guide the user’s attention to the most important information and improve accessibility for users viewing the visualisation.</p>
<p>Answers could include:</p>
<ul>
<li>Distinguishing between categories such as regions, products, or years</li>
<li>Highlighting important information, high and low values, or anomalies</li>
<li>Helping users identify patterns and trends in the data</li>
<li>Supporting comparison between different data groups</li>
<li>Improving readability and making the visualisation easier to understand</li>
<li>Using colour consistently across charts for easier interpretation</li>
<li>Creating a visual hierarchy by emphasising key information</li>
<li>Reducing confusion in large or complex datasets</li>
<li>Guiding the user’s attention to significant results</li>
<li>Improving the speed of data interpretation</li>
<li>Using contrast to make important data stand out</li>
<li>Supporting accessibility through clear colour contrast</li>
<li>Reinforcing meaning, such as red for poor performance and green for strong performance</li>
</ul>` }
      ]
    },
    {
      number: '18', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>An enterprise is developing a machine learning model to automate customer support requests.</p>
<p>Describe how the model could be trained.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes clearly how the model could be trained</td><td>2</td></tr>
<tr><td>Identifies relevant aspects of training a model</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The model is trained by providing it with a large dataset of previous customer support requests and their correct responses or categories. During training, the model identifies patterns and relationships in the data and adjusts its internal parameters to improve its predictions. The model is then tested using separate data to evaluate its accuracy before being deployed to automate new customer support requests.</p>
<p>Answers could include:</p>
<ul>
<li>Collecting a large dataset of historical customer support requests.</li>
<li>Cleaning and preparing the data by removing errors or inconsistencies.</li>
<li>Dividing the data into training, validation and/or testing datasets.</li>
<li>Adjusting the model's parameters (weights) to improve prediction accuracy.</li>
<li>Measuring the model's performance using validation or test data.</li>
<li>Repeating the training process to improve accuracy and reduce errors.</li>
</ul>` }
      ]
    },
    {
      number: '19', marks: 3, layout: 1,
      stimulus: `<p>The following diagram illustrates how a manufacturing enterprise uses AI systems to monitor machinery and predict equipment failures before breakdowns occur.</p>
<p><img src="assets/ite2026/q19-diagram.png" alt="Diagram: Machine Sensors → AI Monitoring System → Maintenance Alerts → Technicians"></p>`,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>Describe how the AI system improves enterprise operations in this scenario.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Describes how the AI system improves enterprise operations by linking the monitoring system, predictive analysis, maintenance alerts, and technician responses to increased efficiency, reduced downtime, or improved productivity.</td><td>3</td></tr>
<tr><td>Outlines how the AI system improves enterprise operations with some reference to the scenario or diagram.</td><td>2</td></tr>
<tr><td>Demonstrates limited understanding of the AI system or enterprise operations.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The AI system continuously analyses data from machine sensors to detect patterns that indicate potential equipment failures before they occur.</p>
<p>It automatically generates maintenance alerts, allowing technicians to perform repairs before machinery breaks down.</p>
<p>This reduces unplanned downtime and maintenance costs while improving productivity and the reliability of enterprise operations.</p>` }
      ]
    },
    {
      number: '20', marks: 7, layout: 1,
      stimulus: `<p>Refer to the following Retail Enterprise Performance Dashboard.</p>
<p><img src="assets/ite2026/q20-dashboard.jpg" alt="Retail Enterprise Performance Dashboard (Quarterly Sales and Customer Insights 2025): KPIs total sales 17.9M, total orders 125,430, new customers 23,650, average satisfaction 81%; filters for Region, Product Category and Month; total sales by region NSW 4.8, VIC 4.5, QLD 3.9, WA 2.6, SA 2.2 ($M); monthly sales trend Jan 1.8 to Jun 3.3 ($M); product category performance Electronics 6.5M, Clothing 5.2M, Home and Living 4.1M, Sports 2.2M; customer satisfaction by region NSW 78%, VIC 82%, QLD 74%, WA 88%, SA 85%; online vs in-store sales 62% / 38%; key insight bar"></p>`,
      items: [
        { type: 'text', part: 'a', marks: 3, wordLimit: 80,
          question: `<p>Explain how aggregation is used in the Retail Enterprise Performance Dashboard to help users identify overall patterns and trends in the data.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains, using relevant examples from the stimulus, how aggregation helps users identify overall patterns and trends to support data interpretation by users.</td><td>3</td></tr>
<tr><td>Outlines, using relevant examples from the stimulus, how aggregation helps users identify patterns and trends to support data interpretation by users.</td><td>2</td></tr>
<tr><td>States a feature of aggregation.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Aggregation is used in the dashboard by combining large amounts of sales and customer data into summary totals, percentages, and trends. For example, total sales are aggregated by region and product category rather than showing individual transactions. This allows users to identify overall patterns, such as NSW having the highest sales and Electronics being the top-performing category. Aggregation also helps users recognise trends over time, such as the steady increase in sales from January to June, making the data easier to interpret and compare to make insightful business decisions.</p>
<p>Responses could include:</p>
<ul>
<li>Combining individual transactions into summary totals</li>
<li>Summarising sales data by region, category, or time period</li>
<li>Aggregating customer satisfaction percentages or averages</li>
<li>Using totals, averages, counts, or percentages to simplify large datasets</li>
<li>Identifying overall sales trends over time (e.g. January to June growth)</li>
<li>Comparing performance between regions or product categories</li>
<li>Identifying the highest or lowest performing regions/categories</li>
<li>Recognising broader business patterns rather than individual data points</li>
<li>Reducing the complexity of large datasets to improve readability</li>
<li>Supporting quicker interpretation of business performance</li>
<li>Making dashboards easier to analyse and compare</li>
<li>Highlighting overall trends without displaying raw transactional data</li>
<li>Supporting business analysis and strategic planning</li>
<li>Improving clarity by grouping related data together</li>
<li>Allowing users to focus on significant results and patterns</li>
<li>Identifying seasonal or time-based trends</li>
<li>Supporting data driven decision-making through summarised insights</li>
<li>Helping users identify relationships between different categories of data</li>
<li>Displaying aggregated KPIs such as total revenue, average satisfaction, or monthly growth</li>
<li>Improving efficiency by presenting condensed and meaningful information instead of raw data</li>
</ul>` },
        { type: 'text', part: 'b', marks: 4, wordLimit: 100,
          question: `<p>Analyse how filtering on the Retail Enterprise Performance Dashboard helps managers identify business insights and make informed decisions.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a comprehensive analysis, using relevant examples from the stimulus, of how filtering allows users to isolate key data components, identify relationships, and uncover business insights that lead to actionable business decisions.</td><td>4</td></tr>
<tr><td>Provides an analysis, using relevant examples from the stimulus, of how filtering helps users to isolate key data components and identify relationships to uncover business insights.</td><td>3</td></tr>
<tr><td>Outlines, with at an example from the stimulus, how filtering helps isolate data or identify patterns to make business decisions.</td><td>2</td></tr>
<tr><td>Provides a feature of filtering.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Filtering improves the usefulness of data dashboard by allowing managers to isolate key components such as region, product category, and time, which makes relationships between variables clearer. For example, filtering by region shows that NSW has the highest sales (4.8M) but lower customer satisfaction (78%) compared to WA (88%) and SA (85%). This reveals a relationship where strong financial performance does not align with customer experience, suggesting that improving service quality in NSW may be necessary to maintain long-term growth.</p>
<p>Filtering by product category shows that Electronics is the highest-performing category (6.5M), while Sports is significantly lower (2.2M). This highlights differences in product performance, allowing managers to identify which categories are driving revenue and which may require review or additional investment.</p>
<p>Filtering over time also reveals a steady increase in sales from January (1.8M) to June (3.3M), showing a clear growth trend. When considered together, these relationships allow managers to draw broader implications, such as continuing successful sales strategies, improving customer satisfaction in high-performing regions, and reallocating resources to maximise performance across categories.</p>
<p>Overall, filtering supports deeper analysis by linking multiple components of the data, enabling managers to generate more detailed and actionable business insights.</p>` }
      ]
    },
    {
      number: '21', marks: 4, layout: 1,
      stimulus: `<p>A retail store manager records the total sales for each day of the week. Data for the current week has already been entered.</p>
<table class="hoa-table-normal">
<thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
<tbody>
<tr><td>1</td><td><em>Day</em></td><td><em>Sales</em></td><td><em>Above Average Sales</em></td></tr>
<tr><td>2</td><td>Monday</td><td>$1,260.50</td><td></td></tr>
<tr><td>3</td><td>Tuesday</td><td>$1,690.65</td><td></td></tr>
<tr><td>4</td><td>Wednesday</td><td>$1,380.00</td><td></td></tr>
<tr><td>5</td><td>Thursday</td><td>$1,745.75</td><td></td></tr>
<tr><td>6</td><td>Friday</td><td>$2,125.30</td><td></td></tr>
<tr><td>7</td><td>Saturday</td><td>$2,006.80</td><td></td></tr>
<tr><td>8</td><td>Sunday</td><td>$1,625.35</td><td></td></tr>
<tr><td>9</td><td></td><td></td><td></td></tr>
<tr><td>10</td><td><em>Total Sales</em></td><td></td><td></td></tr>
<tr><td>11</td><td><em>Average Sales</em></td><td></td><td></td></tr>
<tr><td>12</td><td><em>Highest Sale Day</em></td><td></td><td></td></tr>
</tbody>
</table>`,
      items: [
        { type: 'spreadsheet', marks: 4,
          question: `<p>Complete the spreadsheet by entering formulas to:</p>
<ul>
<li>Calculate the total sales for the week in cell B10</li>
<li>Calculate the average sales per day in cell B11</li>
<li>Display the day with the highest sales for the week in cell B12</li>
<li>Display "Busy Day" in cells C2 to C8 if the sales on that day are above average</li>
</ul>`,
          seed: {
            cells: {
              A1: 'Day', B1: 'Sales', C1: 'Above Average Sales',
              A2: 'Monday', B2: 1260.50,
              A3: 'Tuesday', B3: 1690.65,
              A4: 'Wednesday', B4: 1380.00,
              A5: 'Thursday', B5: 1745.75,
              A6: 'Friday', B6: 2125.30,
              A7: 'Saturday', B7: 2006.80,
              A8: 'Sunday', B8: 1625.35,
              A10: 'Total Sales', A11: 'Average Sales', A12: 'Highest Sale Day'
            },
            bold: ['A1:C1'],
            colWidths: { A: 140, B: 120, C: 170 },
            currency: ['B2:B11']
          },
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>All FOUR formulas correct</td><td>4</td></tr>
<tr><td>THREE formulas correct</td><td>3</td></tr>
<tr><td>TWO formulas correct</td><td>2</td></tr>
<tr><td>ONE formula correct</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">B10 =SUM(B2:B8)
B11 =AVERAGE(B2:B8)
B12 =LOOKUP(MAX(B2:B8),B2:B8,A2:A8)
C2  =IF(B2&gt;$B$11,"Busy Day")</pre>
<p>Similar formulas for C2 to C8 (absolute reference $B$11 is required for this mark)</p>
<p><em>Note: LOOKUP expects the lookup range to be sorted in ascending order. B2:B8 is not sorted, so the published B12 formula can return the wrong day (e.g. Sunday instead of Friday). A reliable formula is <code>=INDEX(A2:A8,MATCH(MAX(B2:B8),B2:B8,0))</code> (or <code>=XLOOKUP(MAX(B2:B8),B2:B8,A2:A8)</code>). Adding <code>,""</code> to the IF in C2 (<code>=IF(B2&gt;$B$11,"Busy Day","")</code>) stops FALSE appearing on other days.</em></p>` }
      ]
    },
    {
      number: '22', marks: 2, layout: 0,
      items: [
        { type: 'text', marks: 2, wordLimit: 50,
          question: `<p>Explain how a Gantt chart can assist in managing an enterprise computing project.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how a Gantt chart assists in managing an enterprise computing project.</td><td>2</td></tr>
<tr><td>Identifies features of a Gantt chart.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A Gantt chart is a visual tool for planning and ensuring that enterprise projects are being completed to schedule, with different subprojects having different deadlines. It helps project managers monitor progress, identify task dependencies, and ensure activities are completed in the correct order.</p>` }
      ]
    },
    {
      number: '23', marks: 4, layout: 0,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>Explain how testing and evaluation processes can be used to finalise and improve the effectiveness of a newly developed enterprise computing system.</p>
<p>In your answer, refer to:</p>
<ul>
<li>Evaluating test data</li>
<li>Trialling operation and maintenance documentation</li>
<li>Modifying the system to improve functionality</li>
</ul>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how testing and evaluation processes can be used to finalise and improve the effectiveness of a newly developed enterprise computing system.</td><td>4</td></tr>
<tr><td>Describes how testing and evaluation processes can be used to finalise and improve the effectiveness of a newly developed enterprise computing system.</td><td>3</td></tr>
<tr><td>Outlines testing and evaluation processes.</td><td>2</td></tr>
<tr><td>Identifies a feature of testing and evaluation.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Testing and evaluation processes improve the effectiveness of an enterprise computing system by identifying errors, usability issues and areas requiring improvement before and after implementation.</p>
<p>Evaluating test data allows developers to determine whether the system produces accurate, reliable and consistent outputs when operating under different conditions and with different types of users. This helps identify faults such as incorrect processing, missing data or performance issues that could negatively impact the organisation.</p>
<p>Trialling operation and maintenance documentation ensures users, administrators and support staff are able to correctly operate, troubleshoot and maintain the system. If documentation is unclear or incomplete, changes can be made to improve instructions, reduce confusion and minimise operational errors within the enterprise environment.</p>
<p>Feedback gathered during testing can also be used to modify system designs and improve functionality, accessibility and user experience. Ongoing testing, evaluation and maintenance help ensure the enterprise system continues to meet organisational requirements, remains secure and operates efficiently over time.</p>` }
      ]
    },
    {
      number: '24', marks: 4, layout: 0,
      items: [
        { type: 'text', marks: 4, wordLimit: 100,
          question: `<p>A smart city traffic management system collects live traffic data from sensors and displays congestion information on digital dashboards used by transport authorities.</p>
<p>Explain how the communication of real-time data improves decision-making in this enterprise system.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Explains how real-time data communication supports effective decision-making within the enterprise system. Demonstrates understanding of sensors, dashboards, data exchange, and the benefits of timely information.</td><td>4</td></tr>
<tr><td>Describes how real-time data communication improves decision-making with some reference to the enterprise system.</td><td>3</td></tr>
<tr><td>Outlines some understanding of real-time data communication or decision-making within the system.</td><td>2</td></tr>
<tr><td>Identifies a relevant component of communication or decision-making.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The communication of real-time data improves decision-making by allowing transport authorities to respond quickly to changing traffic conditions. Sensors collect live traffic information such as congestion levels, traffic speed, and accidents, which is transmitted through the network to digital dashboards.</p>
<p>The dashboards display current traffic conditions instantly, allowing authorities to identify congested areas and make informed decisions such as adjusting traffic light timings, redirecting vehicles, or responding to incidents faster. Real-time communication improves the accuracy and speed of decision-making and helps reduce traffic congestion across the city.</p>` }
      ]
    },
    {
      number: '25', marks: 5, layout: 3,
      stimulus: `<p>A farming enterprise is considering an intelligent irrigation system capable of automatically monitoring soil moisture and weather conditions. The system aims to optimise the operation of sprinklers to maximise crop yields.</p>
<p><img src="assets/ite2026/q25-photo.jpg" alt="Photograph of an automated overhead sprinkler boom spraying water over crops inside a large greenhouse"></p>`,
      items: [
        { type: 'text', marks: 5, wordLimit: 120,
          question: `<p>Recommend and justify the design of a suitable intelligent irrigation system solution.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Provides a comprehensive recommendation and justification of an intelligent system solution using a range of appropriate enterprise computing technologies. Clearly explains how components interact and provide relevant examples</td><td>5</td></tr>
<tr><td>Demonstrates sound understanding of an intelligent system solution. Describes appropriate technologies and provides some justification of design choices linked to the enterprise scenario.</td><td>4</td></tr>
<tr><td>Outlines some understanding of intelligent systems and identifies basic technologies or functions relevant to the scenario.</td><td>3</td></tr>
<tr><td>Outlines some understanding of intelligent systems and/or identifies basic technologies or functions relevant to the scenario.</td><td>2</td></tr>
<tr><td>Limited response with some relevance to the scenario.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>An appropriate intelligent system solution for the farming enterprise would include soil moisture sensors, weather monitoring sensors, wireless communication technologies, cloud storage, and an automated irrigation sprinkler controller. These technologies would work together to collect and process environmental data in real time.</p>
<p>The soil moisture sensors would monitor water levels in the soil and transmit data through a wireless IoT network to a cloud database. Weather sensors or external weather APIs could also provide information about rainfall, humidity, and temperature. An intelligent system could then analyse this data and automatically determine when irrigation is required. This would improve efficiency by reducing unnecessary water usage and ensuring crops receive the correct amount of water.</p>
<p>The use of automation is justified because it reduces the need for constant manual monitoring by workers. The system would also improve productivity and sustainability by conserving water and responding quickly to changing environmental conditions. A dashboard interface could allow farmers to monitor data remotely and receive alerts if abnormal conditions occur.</p>
<p>Cloud storage and intelligent data analysis are appropriate design choices because they allow historical data to be stored and analysed over time. This could help identify patterns in soil conditions and improve future irrigation decisions. Overall, the intelligent system would increase efficiency, reduce waste, and support more effective farm management.</p>` }
      ]
    },
    {
      number: '26', marks: 10, layout: 3,
      stimulus: `<p>A regional medical centre is developing a new enterprise computing system to manage patient appointments and prescription requests.</p>
<ul>
<li>Patients can book appointments, request prescriptions and update personal details through an online portal.</li>
<li>Reception staff confirm appointments and update doctor schedules.</li>
<li>Doctors approve prescription requests.</li>
</ul>
<p>The system stores information within appointment and prescription databases and communicates information back to patients.</p>`,
      items: [
        { type: 'text', part: 'a', marks: 3, wordLimit: 80,
          question: `<p>For the new medical centre system, identify examples of:</p>
<ul>
<li>participants</li>
<li>data</li>
<li>other system components.</li>
</ul>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Identifies examples of all THREE required elements</td><td>3</td></tr>
<tr><td>Identifies examples of TWO of the required elements</td><td>2</td></tr>
<tr><td>Identifies examples of ONE of the required elements</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Participants: Patients, reception staff, doctors.</p>
<p>Data: Patient personal details, appointment information, prescription requests, doctor availability.</p>
<p>Other system components: Online portal, database, scheduling software, user authentication system, network infrastructure.</p>` },
        { type: 'text', part: 'b', marks: 2, wordLimit: 50,
          question: `<p>Recommend a suitable tool to inform and refine the requirements for the regional medical centre's new system.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Recommends a suitable tool with reference to the scenario.</td><td>2</td></tr>
<tr><td>Identifies a suitable tool.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A survey could be used to inform the requirements and limitations of the new medical centre system.</p>
<p>Developers could send out an electronic survey to reception staff, doctors and patients to gather information about appointment scheduling, prescription approvals and issues with the current system.</p>
<p>The surveys can be collated and summarised automatically, identifying user needs, technical constraints and features required for the new system to operate more effectively.</p>` },
        { type: 'drawing', part: 'c', marks: 5,
          question: `<p>Construct a Level 1 data flow diagram (DFD) for the proposed patient appointments and prescription requests system.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Constructs a substantially correct level 1 data flow diagram that represents the external entities, processes, data and data stores of the proposed system.</td><td>5</td></tr>
<tr><td>Constructs a level 1 data flow diagram that represents most elements of the proposed system.</td><td>4</td></tr>
<tr><td>Constructs a data flow diagram that represents some elements of the proposed patient management system.</td><td>3</td></tr>
<tr><td>Constructs a data flow diagram that represents limited elements of the proposed system.</td><td>2</td></tr>
<tr><td>Identifies a feature of a data flow diagram.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/ite2026/q26c-sample-answer.png" alt="Sample Level 1 DFD: external entities Patient, Reception Staff and Doctors; processes Patient Authentication, Patient Requests, Prescription Approval and Generate Confirmation Message; data stores Patient Database, Appointments Database and Prescription Database; data flows include Login Details, Patient Details, Appointment Feedback, Appointment Date, Prescription Request, Prescription Feedback, Patient Prescription, Appointment Date / Requested Prescription"></p>` }
      ]
    },
    {
      number: '27', marks: 13, layout: 1,
      stimulus: `<p><strong>Shopping Centre Parking System</strong></p>
<p>A shopping centre uses a ticketless parking system that automatically recognises vehicle registration plates using cameras at the entry and exit gates. When a vehicle enters, its registration plate and entry time are recorded in the database. Customers receive the first 2 hours of parking free. After the free period, parking costs $5 per hour (or part thereof).</p>
<p>When a vehicle leaves, the exit camera records the registration plate and exit time. If the vehicle has parked for two hours or less, the gate opens automatically. Otherwise, payment must be made using Credit Card, Debit Card or Apple Pay at either an exit gate or a payment terminal located within the shopping centre. Once payment has been verified, the exit gate opens automatically.</p>
<p>The system stores information about parking sessions, payments and payment locations in a relational database to support parking management and reporting.</p>
<p>Some sample data is as follows.</p>
<p><strong>ParkingSession</strong></p>
<table class="hoa-table-normal">
<thead><tr><th>SessionID</th><th>RegistrationPlate</th><th>EntryTime</th><th>ExitTime</th></tr></thead>
<tbody>
<tr><td>101</td><td>YXE950</td><td>2026-07-12 12:45:00</td><td>2026-07-12 15:04:00</td></tr>
<tr><td>102</td><td>SHA619</td><td>2026-07-12 12:45:00</td><td>2026-07-12 17:05:00</td></tr>
<tr><td>103</td><td>WWX644</td><td>2026-07-12 14:30:00</td><td>2026-07-12 15:14:00</td></tr>
<tr><td>104</td><td>YNR478</td><td>2026-07-12 15:00:00</td><td></td></tr>
<tr><td>105</td><td>YUT409</td><td>2026-07-12 15:30:00</td><td></td></tr>
<tr><td>106</td><td>GKF832</td><td>2026-07-12 16:20:00</td><td>2026-07-12 19:11:00</td></tr>
<tr><td>107</td><td>SHA619</td><td>2026-07-12 16:20:00</td><td></td></tr>
<tr><td>108</td><td>LFO086</td><td>2026-07-12 17:20:00</td><td></td></tr>
</tbody>
</table>
<p><strong>PaymentLocation</strong></p>
<table class="hoa-table-normal">
<thead><tr><th>LocationID</th><th>Location</th></tr></thead>
<tbody>
<tr><td>1</td><td>Exit Gate 1</td></tr>
<tr><td>2</td><td>Exit Gate 2</td></tr>
<tr><td>3</td><td>Supermarket Terminal</td></tr>
<tr><td>4</td><td>Escalator</td></tr>
</tbody>
</table>
<p><strong>Payment</strong></p>
<table class="hoa-table-normal">
<thead><tr><th>PaymentID</th><th>SessionID</th><th>ReceiptNumber</th><th>PaymentTime</th><th>AmountPaid</th><th>PaymentMethod</th><th>LocationID</th></tr></thead>
<tbody>
<tr><td>67</td><td>98</td><td>ZOTXIUTR</td><td>2026-07-12 12:19:00</td><td>5</td><td>Apple Pay</td><td>3</td></tr>
<tr><td>68</td><td>99</td><td>V65CBKGP</td><td>2026-07-12 13:36:00</td><td>5</td><td>Apple Pay</td><td>2</td></tr>
<tr><td>69</td><td>100</td><td>AH26FNB2</td><td>2026-07-12 14:46:00</td><td>5</td><td>Credit Card</td><td>4</td></tr>
<tr><td>70</td><td>101</td><td>688EVKRW</td><td>2026-07-12 15:04:00</td><td>5</td><td>Debit Card</td><td>2</td></tr>
<tr><td>71</td><td>102</td><td>NL8OUYWU</td><td>2026-07-12 17:05:00</td><td>15</td><td>Debit Card</td><td>2</td></tr>
<tr><td>72</td><td>106</td><td>VOUUSQCI</td><td>2026-07-12 19:11:00</td><td>5</td><td>Debit Card</td><td>1</td></tr>
</tbody>
</table>`,
      items: [
        { type: 'drawing', part: 'a', marks: 5,
          question: `<p>Construct a database schema (or entity relationship diagram) for the Shopping Centre Parking System relational database.</p>
<p>Show all entities, attributes, keys and relationships between entities.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correct database schema including all entities, attributes, keys and relationships</td><td>5</td></tr>
<tr><td>Schema is missing one minor element</td><td>4</td></tr>
<tr><td>Schema is missing a significant element</td><td>3</td></tr>
<tr><td>Schema includes all entities</td><td>2</td></tr>
<tr><td>Provides some relevant information about a database schema</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><img src="assets/ite2026/q27a-sample-answer.png" alt="Sample schema: ParkingSession (SessionID PK, RegistrationPlate, EntryTime, ExitTime) 1 to many Payment (PaymentID PK, SessionID SK, ReceiptNumber, PaymentTime, AmountPaid, PaymentMethod, LocationID SK); PaymentLocation (LocationID PK, Location) 1 to many Payment"></p>
<ul>
<li><strong>ParkingSession</strong> (SessionID (PK), RegistrationPlate, EntryTime, ExitTime)</li>
<li><strong>Payment</strong> (PaymentID (PK), SessionID (SK), ReceiptNumber, PaymentTime, AmountPaid, PaymentMethod, LocationID (SK))</li>
<li><strong>PaymentLocation</strong> (LocationID (PK), Location)</li>
<li>ParkingSession 1 — m Payment; PaymentLocation 1 — m Payment</li>
</ul>
<p><em>Note: the published sample labels SessionID and LocationID in Payment as “SK”; they are foreign keys (FK) linking to ParkingSession and PaymentLocation.</em></p>` },
        { type: 'sql', part: 'b', marks: 4,
          sqlAnswer: { orderBy: [[2, 'desc']], queries: [
            `SELECT ParkingSession.RegistrationPlate, COUNT(ParkingSession.SessionID) AS NumberOfVisits, SUM(Payment.AmountPaid) AS TotalSpend FROM ParkingSession LEFT JOIN Payment ON ParkingSession.SessionID = Payment.SessionID GROUP BY ParkingSession.RegistrationPlate ORDER BY TotalSpend DESC`] },
          question: `<p>Write an SQL statement to return the registration plate, number of times each vehicle has been in the carpark along with their total spend. The results should be sorted in descending order by total spend.</p>`,
          setup: `CREATE TABLE ParkingSession (SessionID INTEGER PRIMARY KEY, RegistrationPlate TEXT, EntryTime TEXT, ExitTime TEXT);
INSERT INTO ParkingSession VALUES (101,'YXE950','2026-07-12 12:45:00','2026-07-12 15:04:00');
INSERT INTO ParkingSession VALUES (102,'SHA619','2026-07-12 12:45:00','2026-07-12 17:05:00');
INSERT INTO ParkingSession VALUES (103,'WWX644','2026-07-12 14:30:00','2026-07-12 15:14:00');
INSERT INTO ParkingSession VALUES (104,'YNR478','2026-07-12 15:00:00',NULL);
INSERT INTO ParkingSession VALUES (105,'YUT409','2026-07-12 15:30:00',NULL);
INSERT INTO ParkingSession VALUES (106,'GKF832','2026-07-12 16:20:00','2026-07-12 19:11:00');
INSERT INTO ParkingSession VALUES (107,'SHA619','2026-07-12 16:20:00',NULL);
INSERT INTO ParkingSession VALUES (108,'LFO086','2026-07-12 17:20:00',NULL);
CREATE TABLE PaymentLocation (LocationID INTEGER PRIMARY KEY, Location TEXT);
INSERT INTO PaymentLocation VALUES (1,'Exit Gate 1');
INSERT INTO PaymentLocation VALUES (2,'Exit Gate 2');
INSERT INTO PaymentLocation VALUES (3,'Supermarket Terminal');
INSERT INTO PaymentLocation VALUES (4,'Escalator');
CREATE TABLE Payment (PaymentID INTEGER PRIMARY KEY, SessionID INTEGER, ReceiptNumber TEXT, PaymentTime TEXT, AmountPaid REAL, PaymentMethod TEXT, LocationID INTEGER);
INSERT INTO Payment VALUES (67,98,'ZOTXIUTR','2026-07-12 12:19:00',5,'Apple Pay',3);
INSERT INTO Payment VALUES (68,99,'V65CBKGP','2026-07-12 13:36:00',5,'Apple Pay',2);
INSERT INTO Payment VALUES (69,100,'AH26FNB2','2026-07-12 14:46:00',5,'Credit Card',4);
INSERT INTO Payment VALUES (70,101,'688EVKRW','2026-07-12 15:04:00',5,'Debit Card',2);
INSERT INTO Payment VALUES (71,102,'NL8OUYWU','2026-07-12 17:05:00',15,'Debit Card',2);
INSERT INTO Payment VALUES (72,106,'VOUUSQCI','2026-07-12 19:11:00',5,'Debit Card',1);`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correct SQL statement that returns the registration plates, number of times each vehicle has been in the carpark along with their total spend, all sorted in descending order by total spend.</td><td>4</td></tr>
<tr><td>SQL returns most of the required elements correctly.</td><td>3</td></tr>
<tr><td>SQL returns some of the required elements.</td><td>2</td></tr>
<tr><td>Response shows some understanding of SQL.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<pre class="hoa-code">SELECT ParkingSession.RegistrationPlate, COUNT(ParkingSession.SessionID) AS NumberOfVisits,
SUM(Payment.AmountPaid) AS TotalSpend
FROM ParkingSession
LEFT JOIN Payment ON ParkingSession.SessionID = Payment.SessionID
GROUP BY ParkingSession.RegistrationPlate
ORDER BY TotalSpend DESC</pre>
<p>or</p>
<pre class="hoa-code">SELECT ParkingSession.RegistrationPlate, COUNT(ParkingSession.SessionID) AS NumberOfVisits,
SUM(Payment.AmountPaid) AS TotalSpend
FROM ParkingSession, Payment
WHERE ParkingSession.SessionID = Payment.SessionID
GROUP BY ParkingSession.RegistrationPlate
ORDER BY TotalSpend DESC</pre>
<p><em>Note: the second (inner join) version only counts sessions that have a payment, so it leaves out vehicles that never paid and under-counts visits (e.g. SHA619 shows 1 visit instead of 2). Only the LEFT JOIN version fully answers “number of times each vehicle has been in the carpark”.</em></p>` },
        { type: 'text', part: 'c', marks: 4, wordLimit: 100,
          question: `<p>The shopping centre wishes to extend the system so that staff and customers can book a parking space in advance using an online form.</p>
<p>Analyse this new requirement, including how the system could ensure that a parking space is available at the time of each booking and what modifications would be required to the relational database.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Excellent analysis, including how the system could ensure that a parking space is available for each booking and what modifications would be required to the relational database.</td><td>4</td></tr>
<tr><td>Good analysis, including how the system could ensure that a parking space is available for each booking and what modifications would be required to the relational database.</td><td>3</td></tr>
<tr><td>Identifies issues regarding booked spaces or relevant changes to the database.</td><td>2</td></tr>
<tr><td>Limited response with some merit.</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The system should check each requested booking time against existing bookings before confirming the booking. It could count the number of bookings that overlap the requested start and end time and compare this with the number of spaces available for pre-booking. If all spaces are already booked, the system should reject the booking or suggest another time. Casual customers may need to be rejected to enable bookings to be fulfilled.</p>
<p>The database would need a Customer table to store customer or staff details, such as CustomerID, Name, Email and CustomerType. It would also need a Booking table to store BookingID, CustomerID, RegistrationPlate, StartTime, EndTime and BookingStatus. The existing ParkingSession table could include an optional BookingID so that a vehicle entering the carpark can be matched to a pre-booking.</p>` }
      ]
    },
    {
      number: '28', marks: 3, layout: 0,
      items: [
        { type: 'text', marks: 3, wordLimit: 80,
          question: `<p>A retail chain collects sales, inventory and customer data from all of its stores into a central data warehouse each night.</p>
<p>Explain how the data warehouse improves business intelligence for the retail chain.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Thorough explanation of how the data warehouse improves business intelligence for management</td><td>3</td></tr>
<tr><td>Describes a data warehouse and how it can assist management</td><td>2</td></tr>
<tr><td>Limited understanding of data warehouses with some merit</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The data warehouse combines data from all stores into a single repository, allowing managers to analyse sales trends and customer behaviour across the business.</p>
<p>Historical data can be queried efficiently to produce reports and identify patterns that support strategic decision-making.</p>` }
      ]
    }
  ],
  figures: [
    { out: 'assets/ite2026/q15-flowchart.png', file: 'ite2026-q.pdf', page: 8, box: [205, 242, 702, 672] },
    { out: 'assets/ite2026/q19-diagram.png', file: 'ite2026-q.pdf', page: 11, box: [100, 224, 756, 524] },
    { out: 'assets/ite2026/q20-dashboard.jpg', file: 'ite2026-q.pdf', page: 12, box: [100, 226, 836, 724] },
    { out: 'assets/ite2026/q25-photo.jpg', file: 'ite2026-q.pdf', page: 17, box: [135, 238, 600, 554] },
    { out: 'assets/ite2026/q26c-sample-answer.png', file: 'ite2026-a.pdf', page: 7, box: [150, 660, 772, 1042] },
    { out: 'assets/ite2026/q27a-sample-answer.png', file: 'ite2026-a.pdf', page: 8, box: [160, 352, 792, 532] }
  ]
});
