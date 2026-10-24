registerExam({
  id: 'tb-m3',
  title: 'Textbook MCQ — Module 3: Data visualisation',
  source: 'Textbook', year: 2025, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 99,
  coverNotes: `<p>Multiple-choice questions from the textbook exercises for Module 3. Answers were prepared from the textbook content (the textbook has no answer key).</p>`,
  groups: [
    // ===== Exercise 3.1.1 =====
    { number: '1', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of data visualisation?</p>`,
          options: [`To increase the amount of data collected.`, `To replace statistical analysis entirely.`, `To convert data into visuals for easy interpretation.`, `To store data securely.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To convert data into visuals for easy interpretation. Data visualisation turns raw data into charts, graphs and other visual formats so information is easier to understand (textbook pp. 272–273).</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is data visualisation important for enterprises?</p>`,
          options: [`It makes complex data easier to understand and explain.`, `It reduces storage requirements for data.`, `It replaces employees with automated systems.`, `It eliminates the need for data analysis.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It makes complex data easier to understand and explain. Visualisations let enterprises explain complex data quickly to stakeholders and support decisions; they do not replace analysis or reduce storage (textbook pp. 272–280).</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes a "data story"?</p>`,
          options: [`A collection of unrelated charts and graphs.`, `A narrative formed by connecting data insights in a meaningful sequence.`, `A summary of raw data without any visual aids.`, `A fictional account created to illustrate data trends.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A narrative formed by connecting data insights in a meaningful sequence. Telling a story with data means linking insights into a logical narrative that guides the audience to a conclusion (textbook pp. 271–280).</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the goal of data visualisation?</p>`,
          options: [`To showcase artistic design without focusing on data accuracy.`, `To transform all text-based communication into visuals.`, `To eliminate the need for human decision-making.`, `To communicate insights effectively and drive informed actions.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To communicate insights effectively and drive informed actions. The purpose of a visualisation is to communicate insights clearly so that people can make informed decisions (textbook pp. 272–280).</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best explains the importance of highlighting significant results in data visualisation?</p>`,
          options: [`To ensure all data is equally emphasised`, `To identify trends, patterns or outliers that might be missed otherwise`, `To obscure complex data relationships`, `To replace analysis with visual appeal`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To identify trends, patterns or outliers that might be missed otherwise. Highlighting significant results draws attention to key trends, patterns and outliers that could be overlooked in raw data (textbook pp. 272–280).</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>How is data visualisation helpful for managing large datasets?</p>`,
          options: [`It increases the size of the dataset.`, `It reduces the amount of data needed.`, `It organises data in a more visual and understandable format.`, `It deletes unnecessary information.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It organises data in a more visual and understandable format. Large datasets are hard to interpret as raw numbers; visualisation presents them in a form that is easier to understand (textbook pp. 272–280).</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a "Pivot Table" in spreadsheet software?</p>`,
          options: [`To create a final report.`, `To summarise and reorganise data from a spreadsheet.`, `To print a dataset.`, `To combine multiple datasets.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To summarise and reorganise data from a spreadsheet. Pivot tables let users quickly summarise, group and rearrange spreadsheet data to reveal patterns (textbook pp. 281–290).</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What does the advanced text customisation in creative design applications help improve?</p>`,
          options: [`Visual hierarchy and readability.`, `Data accuracy.`, `Data collection.`, `Calculation of trends.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Visual hierarchy and readability. Controlling fonts, sizes and styles helps establish what the viewer reads first and makes text easier to read; it does not affect data accuracy or calculations (textbook pp. 281–290).</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of reducing visual noise in data visualisations?</p>`,
          options: [`To focus attention on key data points.`, `To add more decorative elements.`, `To increase the number of data sources.`, `To make the dataset larger.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To focus attention on key data points. Removing unnecessary clutter lets the audience focus on the important data rather than distracting elements (textbook pp. 281–290).</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Exercise 3.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the use of exponential smoothing in visual analytics?</p>`,
          options: [`To animate data changes over time.`, `To create 3D visual models.`, `To merge datasets from different sources.`, `To predict future values based on weighted past observations.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To predict future values based on weighted past observations. Exponential smoothing is a forecasting technique that weights recent observations more heavily than older ones to predict future values (textbook pp. 281–290).</p>` }
      ] },

    // ===== Exercise 3.1.2 =====
    { number: '11', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the main goal of interpreting and comparing datasets in an enterprise?</p>`,
          options: [`Reducing data storage costs.`, `Eliminating the need for data collection.`, `Replacing human decision-makers.`, `Highlighting patterns for informed decision-making.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Highlighting patterns for informed decision-making. Interpreting and comparing datasets reveals trends and patterns that enterprises use to make informed decisions (textbook pp. 293–305).</p>` }
      ] },
    { number: '12', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which data visualisation type is commonly used to display trends?</p>`,
          options: [`Bar chart.`, `Heatmap.`, `Line chart.`, `Pie chart.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Line chart. Line charts plot values over time, making upward or downward trends easy to see (textbook pp. 293–305).</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which type of trend increases or decreases at a constant rate?</p>`,
          options: [`Cyclical trend.`, `Linear trend.`, `Seasonal trend.`, `Non-linear trend.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Linear trend. A linear trend changes by a constant amount over time and appears as a straight line (textbook pp. 293–305).</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Seasonality in data refers to patterns tied to:</p>`,
          options: [`Random events.`, `Data anomalies.`, `Specific times of the year.`, `Long-term economic changes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Specific times of the year. Seasonal patterns repeat at the same times each year (e.g. holiday sales peaks); long-term economic changes are cyclical trends (textbook pp. 293–305).</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a key use of historical data in business?</p>`,
          options: [`Predicting future outcomes.`, `Reducing storage requirements.`, `Avoiding anomalies.`, `Discarding irrelevant information.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Predicting future outcomes. Historical data reveals past trends that are used in forecasting and predictive data analytics (textbook pp. 293–305).</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which data visualisation type is most effective for detecting correlations?</p>`,
          options: [`Line graph.`, `Histogram.`, `Pie chart.`, `Scatter plot.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Scatter plot. A scatter plot shows the relationship between two variables, so a positive or negative correlation is easy to spot (textbook pp. 293–305).</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a major social and ethical issue associated with predictive data analytics?</p>`,
          options: [`Increased website traffic.`, `Data breaches leading to loss of user trust.`, `Simplified inventory management.`, `Reduction in data storage costs.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data breaches leading to loss of user trust. Predictive analytics relies on large amounts of personal data, so privacy and security breaches are a key social and ethical concern; the other options are business benefits, not issues (textbook pp. 293–305).</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of data mishandling?</p>`,
          options: [`Sharing data with unauthorised individuals.`, `Conducting privacy impact assessments.`, `Encrypting sensitive data.`, `Accurate reporting of trends.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Sharing data with unauthorised individuals. The other options are good data-handling practices; giving data to people who are not authorised to see it is mishandling (textbook pp. 293–305).</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What does 'garbage in, garbage out' imply in the context of data visualisations?</p>`,
          options: [`Data visualisations are always reliable.`, `Predictive data analytics can bypass poor data.`, `The quality of output depends on input accuracy.`, `Data processing is expensive.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The quality of output depends on input accuracy. Poor-quality input data leads to wrong conclusions, which is why data integrity matters (textbook p. 317).</p>` }
      ] },
    { number: '20', marks: 1, layout: 0, section: 'Exercise 3.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which factor can introduce bias in data visualisations?</p>`,
          options: [`Verifying data accuracy.`, `Manipulating scales and axes.`, `Using clear titles and labels.`, `Cross-referencing data sources.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Manipulating scales and axes. Truncated or altered axes can exaggerate or hide differences and mislead the viewer; the other options reduce bias (textbook pp. 293–305).</p>` }
      ] },

    // ===== Exercise 3.1.3 =====
    { number: '21', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the main role of hardware in data analytics?</p>`,
          options: [`Designing user interfaces.`, `Providing tools for data visualisation.`, `Enabling data processing and storage.`, `Writing programming scripts.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Enabling data processing and storage. Hardware determines the speed and capacity for processing and storing big data, while software provides the tools for analysing and visualising it (textbook p. 308).</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which technology is essential for handling large datasets in real-time?</p>`,
          options: [`Spreadsheet software.`, `High-performance CPU and GPU chips.`, `Desktop applications.`, `External hard drives.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — High-performance CPU and GPU chips. Modern multi-core CPUs and GPUs are built to handle large datasets and complex tasks quickly (textbook p. 308).</p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is parallel processing primarily used for?</p>`,
          options: [`Designing user interfaces.`, `Reducing storage space.`, `Managing data warehouses.`, `Distributing tasks across multiple processors.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Distributing tasks across multiple processors. Parallel processing breaks a task into smaller parts that run at the same time on multiple CPUs or processors (textbook p. 308).</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of server virtualisation?</p>`,
          options: [`To partition one physical server into virtual machines.`, `To eliminate the need for data analysis.`, `To increase network bandwidth.`, `To create multiple physical servers.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To partition one physical server into virtual machines. Virtualisation lets one physical server run several virtual machines, managed by a hypervisor (textbook p. 310).</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a primary benefit of cloud storage?</p>`,
          options: [`Non-collaborative data access.`, `Cost-effective and scalable solutions.`, `Limited accessibility.`, `An expensive storage solution.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Cost-effective and scalable solutions. Cloud data centres let businesses of all sizes store, share and analyse data without needing their own hardware (textbook pp. 309–310).</p>` }
      ] },
    { number: '26', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What does an OLAP cube represent?</p>`,
          options: [`A two-dimensional array of information.`, `Unstructured data files.`, `Multi-dimensional data structures.`, `Relational databases.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Multi-dimensional data structures. OLAP cubes are multi-dimensional data models (often with more than three dimensions, called hypercubes) used for rapid analysis (textbook p. 312).</p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the slicing operation in OLAP?</p>`,
          options: [`Extracting one value of a dimension for analysis.`, `Rotating data for better visualisation.`, `Combining multiple dimensions into a single dataset.`, `Removing irrelevant data from a dataset.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Extracting one value of a dimension for analysis. The slice operation extracts one specific value of a dimension to create a two-dimensional view of the cube; rotating is pivoting (textbook p. 313).</p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant advantage of an OLAP system?</p>`,
          options: [`It replaces the need for data cleaning.`, `It requires extensive coding.`, `It only works for small datasets.`, `It handles complex queries with multi-dimensional data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It handles complex queries with multi-dimensional data. OLAP stores data in many dimensions and is designed to quickly analyse large amounts of data from a data warehouse (textbook pp. 311–312).</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes HOLAP from MOLAP and ROLAP?</p>`,
          options: [`HOLAP uses only relational data storage.`, `HOLAP integrates both multi-dimensional and relational data storage.`, `HOLAP eliminates the need for data visualisation.`, `HOLAP focuses on one-dimensional data analysis.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — HOLAP integrates both multi-dimensional and relational data storage. Hybrid OLAP stores some data in cubes (for speed) and some in relational databases (for flexibility) (textbook p. 314).</p>` }
      ] },
    { number: '30', marks: 1, layout: 0, section: 'Exercise 3.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is pivoting in an OLAP system?</p>`,
          options: [`Rotating data for alternative views.`, `Aggregating data into summaries.`, `Filtering data for specific values.`, `Combining unrelated datasets.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Rotating data for alternative views. Pivoting rotates the OLAP cube along one of its dimensions to give a different perspective on the data; aggregating is roll-up (textbook p. 314).</p>` }
      ] },

    // ===== Exercise 3.1.4 =====
    { number: '31', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary focus of assessing data integrity in data visualisations?</p>`,
          options: [`Increasing operational costs.`, `Designing interactive interfaces.`, `Ensuring data reflects its source accurately.`, `Identifying new market trends.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ensuring data reflects its source accurately. Data integrity is the accuracy and consistency of data; it is checked so the visualisation presents accurate, reliable insights (textbook p. 317).</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following laws must enterprises comply with regarding data ownership in Australia?</p>`,
          options: [`Australian Consumer Law.`, `Australian Privacy Act 1988.`, `Fair Work Act 2009.`, `Copyright Act 1968.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Australian Privacy Act 1988. Under ownership, the textbook states enterprise data containing personal data must comply with the Privacy Act 1988 and the Australian Privacy Principles (textbook p. 317).</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which type of source is considered the most reliable for data collection?</p>`,
          options: [`Secondary sources.`, `Outdated sources.`, `Primary sources.`, `External social media platforms.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Primary sources. Data taken from primary sources (those that originally collected the data) is more reliable than secondary sources (textbook p. 318).</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of cross-referencing in data validation?</p>`,
          options: [`Simplifying user interfaces.`, `Highlighting irrelevant trends.`, `Automating data aggregation.`, `Comparing data against multiple sources for accuracy.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Comparing data against multiple sources for accuracy. Cross-referencing compares data against multiple sources to verify its accuracy and identify discrepancies (textbook p. 319).</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is a key risk associated with compromised data integrity?</p>`,
          options: [`Financial loss.`, `Enhanced predictive data analytics.`, `Increased stakeholder trust.`, `Higher operational efficiency.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Financial loss. Inaccurate results in a visualisation can lead to poor decisions such as investing in the wrong areas, causing financial loss (textbook p. 320).</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of a data warehouse?</p>`,
          options: [`Store and process enterprise data from multiple sources.`, `Visualise real-time data.`, `Generate datasets.`, `Replace all external data sources.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Store and process enterprise data from multiple sources. A data warehouse is a centralised system that collects large volumes of organisational data from various sources for storage and analytics (textbook pp. 310, 322).</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which feature of data refinement is focused on removing inaccuracies?</p>`,
          options: [`Data aggregation.`, `Data profiling.`, `Data cleaning.`, `Data indexing.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data cleaning. Data cleaning detects and corrects errors and redundant data such as duplicates and missing values (textbook pp. 319, 322–324).</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a risk of compromised data integrity in visualisations?</p>`,
          options: [`Legal implications.`, `Increased stakeholder trust.`, `Financial loss.`, `Social consequences.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Increased stakeholder trust. Compromised integrity causes a break in trust, not an increase; financial loss and legal implications are listed risks (textbook p. 320).</p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is used for detecting errors and patterns in data?</p>`,
          options: [`Predictive data analytics.`, `Data matching.`, `Indexing systems.`, `Data profiling.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Data profiling. Data profiling tools analyse datasets for consistency and quality, identifying quality issues, irregular patterns and anomalies (textbook p. 320).</p>` }
      ] },
    { number: '40', marks: 1, layout: 0, section: 'Exercise 3.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which data visualisation type is frequently updated with real-time data?</p>`,
          options: [`Static pie charts.`, `Interactive dashboards.`, `Cluster maps.`, `Comparative bar graphs.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Interactive dashboards. Dashboards connect to live data sources and update in real time, whereas static charts show a fixed snapshot (textbook pp. 317–324).</p>` }
      ] },

    // ===== Exercise 3.1.5 =====
    { number: '41', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What are the three key characteristics of big data?</p>`,
          options: [`Volume, Variety and Velocity.`, `Accuracy, Accessibility and Affordability.`, `Speed, Structure and Security.`, `Validation, Velocity and Visibility.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Volume, Variety and Velocity. Big data is characterised by its large volume, variety of data types and the velocity (speed) at which it is generated (textbook p. 327).</p>` }
      ] },
    { number: '42', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What does the scope of visible information in data visualisation aim to achieve?</p>`,
          options: [`Replace manual data entry processes.`, `Display all available data in a single view.`, `Speed, Structure and Security.`, `Summarise and present data in a user-friendly and digestible format.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Summarise and present data in a user-friendly and digestible format. With big data, a visualisation cannot show everything at once, so it limits what is visible to a summarised, digestible view (textbook pp. 327–330).</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What type of bias may result from focusing only on certain data sources?</p>`,
          options: [`Selection bias.`, `Confirmation bias.`, `Data source bias.`, `Audience bias.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data source bias. Data source bias happens when some data sources are favoured over others, so the visualisation shows only part of the picture (textbook p. 332).</p><p><em>Note: option A is also arguable because the textbook describes selection bias as choosing data that supports a specific outcome, but "focusing only on certain data sources" matches its definition of data source bias.</em></p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What is one method to simplify large datasets in data visualisation?</p>`,
          options: [`Displaying all data points in a single view.`, `Aggregating data to present relevant insights.`, `Eliminating unstructured data.`, `Relying only on real-time data feeds.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Aggregating data to present relevant insights. Aggregation combines and summarises data points (totals, averages, counts) so large datasets become concise and comprehensible (textbook pp. 327–330, 355).</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>How does descriptive analytics support enterprises?</p>`,
          options: [`By providing real-time updates of live data.`, `By prescribing specific actions for decision-making.`, `By identifying trends and explaining past outcomes.`, `By predicting future outcomes using statistical models.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By identifying trends and explaining past outcomes. Descriptive analytics describes what has happened; predicting is predictive analytics and recommending actions is prescriptive analytics (textbook pp. 327–330).</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>How can audience bias affect data visualisations?</p>`,
          options: [`It eliminates errors in large datasets.`, `It ensures all user preferences are represented equally.`, `It results in visualisations reflecting only a partial view of data.`, `It speeds up data collection processes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It results in visualisations reflecting only a partial view of data. Audience bias shapes data to match what the audience expects to see rather than showing the full picture (textbook p. 332).</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What is a benefit of using drill-down capabilities in data visualisations?</p>`,
          options: [`Allows users to explore granular details within summaries.`, `Automatically identifies errors in datasets.`, `Avoids the need for data integration.`, `Reduces the volume of big data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Allows users to explore granular details within summaries. Drill-down moves from summary-level data to more detailed information within the data hierarchy (textbook pp. 313, 327–330).</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>How does the diversity of big data affect the design of data visualisations?</p>`,
          options: [`It requires all data to be converted into numerical formats.`, `It limits the types of data visualisation tools available.`, `It simplifies the data aggregation process.`, `It necessitates support for multiple formats and data integration.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It necessitates support for multiple formats and data integration. Big data comes in a wide variety of structured and unstructured types, so visualisation tools must integrate and handle many formats (textbook pp. 327–330).</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>How does real-time data visualisation benefit enterprises?</p>`,
          options: [`By eliminating historical data from analyses.`, `By allowing instant reaction to trends and anomalies.`, `By simplifying complex datasets into one format.`, `By reducing the velocity of big data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By allowing instant reaction to trends and anomalies. Real-time visualisations show the latest data so enterprises can respond quickly to changes (textbook pp. 327–330).</p>` }
      ] },
    { number: '50', marks: 1, layout: 0, section: 'Exercise 3.1.5',
      items: [
        { type: 'mcq',
          question: `<p>What is one benefit of interactive elements in data visualisation?</p>`,
          options: [`They prevent errors in data storage.`, `They eliminate the need for validation.`, `They focus solely on numerical data.`, `They allow users to navigate and explore large datasets dynamically.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They allow users to navigate and explore large datasets dynamically. Interactive features such as filters and drill-downs let users explore big data in more depth (textbook pp. 327–330).</p>` }
      ] },

    // ===== Exercise 3.2.1 =====
    { number: '51', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the main reason for using data visualisations?</p>`,
          options: [`To store data more securely.`, `To make data easier to understand and action.`, `To eliminate outliers.`, `To reduce data size.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To make data easier to understand and action. Large datasets are hard to discern anything useful from; visualisations make the data understandable so action can be taken (textbook p. 339).</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Why are tables alone insufficient for analysing data?</p>`,
          options: [`They are visually unappealing.`, `They can't store large datasets.`, `They do not allow for the immediate identification of patterns.`, `They are difficult to update.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They do not allow for the immediate identification of patterns. Rows of numbers hide trends and patterns that a chart reveals at a glance (textbook pp. 337–339).</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>How do data analysts and data visualisation developers differ in their roles?</p>`,
          options: [`Developers focus on insights; analysts create visualisations.`, `Analysts derive insights; developers create the medium for exploration.`, `Both have identical roles and skillsets.`, `Developers are responsible for data integrity.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Analysts derive insights; developers create the medium for exploration. Data analysts interpret data to find insights, while data visualisation developers build the visualisations and tools used to explore it (textbook pp. 337–339).</p>` }
      ] },
    { number: '54', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant limitation of spreadsheet software?</p>`,
          options: [`It cannot perform statistical analysis.`, `It is too expensive for most users.`, `It lacks advanced interactivity for exploring data.`, `It is incompatible with other software.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It lacks advanced interactivity for exploring data. Spreadsheets offer a limited range of static visualisations that lack interactive features such as drill-down; they are low-cost and do support statistical functions (textbook p. 340).</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What makes cloud-based presentation software useful in enterprise work environments?</p>`,
          options: [`Real-time collaboration and accessibility from any device.`, `Local file storage options.`, `Integration with non-visual datasets.`, `Complex data analysis tools.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Real-time collaboration and accessibility from any device. Cloud-based presentation tools let teams work on the same presentation at once from anywhere (textbook pp. 341–353).</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the first step in interrogating the data shown in a data visualisation?</p>`,
          options: [`Analyse patterns.`, `Consider the implications.`, `Examine anomalies.`, `Understand the context.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Understand the context. Interrogating data begins with understanding the context of the visualisation; next you look for patterns and anomalies, and finally consider the implications (textbook p. 354).</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which question should be asked when anomalies are found in a data visualisation?</p>`,
          options: [`Should I ignore this and focus only on the trend?`, `Are all labels present?`, `Are there any external factors influencing these results?`, `What is the maximum value?`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Are there any external factors influencing these results? The textbook says to question trends and anomalies, e.g. whether external factors like market conditions or promotions explain them (textbook p. 354).</p>` }
      ] },
    { number: '58', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Interpreting a line chart involves:</p>`,
          options: [`Adjusting the scale.`, `Observing relationships and patterns.`, `Changing the dataset.`, `Removing outliers.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Observing relationships and patterns. Interpreting what you see means analysing the visual elements to observe trends, relationships and patterns, not changing the data (textbook p. 354).</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What impact does data aggregation have on data visualisation?</p>`,
          options: [`It complicates analysis.`, `It hides all trends.`, `It simplifies large datasets.`, `It excludes irrelevant data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It simplifies large datasets. A key advantage of aggregation is its ability to distil large, complex datasets into simpler, digestible formats (textbook p. 355).</p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Exercise 3.2.1',
      items: [
        { type: 'mcq',
          question: `<p>The primary purpose of filtering in data visualisation is:</p>`,
          options: [`To remove anomalies.`, `To focus on specific subsets of data.`, `To smooth out trends.`, `To summarise datasets.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To focus on specific subsets of data. Filtering narrows the view to the data that meets chosen criteria; summarising is aggregation (textbook pp. 356–357).</p>` }
      ] },

    // ===== Exercise 3.3.1 =====
    { number: '61', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the main goal of data visualisation?</p>`,
          options: [`To create visually complex designs.`, `To replace the need for data analysis.`, `To make data easier to understand and interpret.`, `To focus solely on aesthetic appeal.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To make data easier to understand and interpret. Data visualisation turns raw data into visual formats, making information easier to understand (textbook pp. 362, 367).</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>How does graphic design enhance data visualisation?</p>`,
          options: [`It automates the creation of charts and graphs.`, `It eliminates the need for data cleaning and preparation.`, `It ensures all visualisations are interactive and animated.`, `It improves clarity, engagement, and aesthetic appeal making data more accessible.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It improves clarity, engagement, and aesthetic appeal making data more accessible. Graphic design tools make data more readable, visually appealing and engaging so key insights stand out (textbook p. 362).</p>` }
      ] },
    { number: '63', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a key design principle used in data visualisation?</p>`,
          options: [`Emphasis.`, `Balance.`, `Animation.`, `White space.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Animation. The key design principles listed are emphasis, balance, contrast, repetition, proportion, movement and white space; animation is not one of them (textbook p. 365).</p>` }
      ] },
    { number: '64', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is colour theory important in data visualisation?</p>`,
          options: [`It creates a chaotic and confusing visual experience.`, `To ensure accessibility, highlight trends, and evoke appropriate emotions.`, `The use of as many colours as possible makes the design eye-catching.`, `It randomly assigns colours to data points without specific meaning.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To ensure accessibility, highlight trends, and evoke appropriate emotions. Colour theory makes visualisations attractive and accessible, and chosen colours can evoke emotions or highlight trends (textbook p. 366).</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of typography in data visualisation?</p>`,
          options: [`It is purely decorative and has no impact on readability.`, `It affects readability, sets the tone and ensures legibility.`, `It doesn't overwhelm and reinforces the message by maintaining uniformity in visual elements`, `It stifles creativity and limits the use of various design elements.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It affects readability, sets the tone and ensures legibility. Typography sets the tone and ensures legibility, and font choice affects how well viewers can read the visualisation; option C describes consistency (textbook pp. 364, 366).</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of hierarchy in data visualisation design?</p>`,
          options: [`To create a flat design where all elements have equal visual weight.`, `To first guide the viewer to the most important data points.`, `To hide key insights by using small font sizes and dull colours.`, `To arrange elements randomly without considering their importance.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To first guide the viewer to the most important data points. Hierarchy guides the viewer's focus to the most important insights first, using size, colour or position (textbook p. 366).</p>` }
      ] },
    { number: '67', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>How does white space benefit data visualisations?</p>`,
          options: [`It reduces the amount of information that can be displayed.`, `It makes the design look complete.`, `It prevents clutter, improves readability, and allows viewers to focus on key data points.`, `Visualisations with minimal data are only necessary.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It prevents clutter, improves readability, and allows viewers to focus on key data points. White space prevents visual clutter, makes the design easier to read and lets viewers focus on the main elements (textbook pp. 365–366).</p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which graphic design tool is known for its user-friendliness and accessibility for beginners?</p>`,
          options: [`Adobe Illustrator.`, `Canva.`, `Tableau.`, `Figma.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Canva. Canva provides a large library of templates and design elements that make it easy to create attractive visualisations, whereas Illustrator, Tableau and Figma are more specialised professional tools (textbook pp. 362–363).</p><p><em>Note: the textbook calls Datawrapper the beginner-friendly tool (not an option here); of the options given, Canva is the best fit.</em></p>` }
      ] },
    { number: '69', marks: 1, layout: 0, section: 'Exercise 3.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What is a common challenge in designing for data visualisation?</p>`,
          options: [`The abundance of user-friendly design tools.`, `More available datasets need to be made available for visualisation.`, `The potential for a cluttered interface due to the volume of data.`, `The simplicity of representing complex data visually.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The potential for a cluttered interface due to the volume of data. The overwhelming nature of data can make a design look cluttered as creators try to fit everything on screen (textbook p. 368).</p>` }
      ] },

    // ===== Exercise 3.3.2 =====
    { number: '70', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a quantitative metric for evaluating user experience (UX)?</p>`,
          options: [`Task success rate.`, `Time on task.`, `User interview feedback.`, `Error rate.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — User interview feedback. Task success rate, time on task and error rate are numerical metrics; what users say in interviews is qualitative feedback (textbook pp. 374–375).</p>` }
      ] },
    { number: '71', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a generally acceptable task success rate for essential functions in a user interface?</p>`,
          options: [`50%.`, `65%.`, `80%.`, `95%.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — 80%. The textbook benchmark is that at least 80% of users should be able to complete key tasks; above 80% usually means the design is working well (textbook pp. 374–375).</p>` }
      ] },
    { number: '72', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an example of an emerging hardware technology?</p>`,
          options: [`Foldable smartphones.`, `Quantum computers.`, `Voice recognition systems.`, `Wearable technology.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Voice recognition systems. The textbook lists voice recognition (e.g. Siri, Alexa) as an emerging software technology; foldable displays, quantum computers and wearables are hardware (textbook pp. 377–378).</p>` }
      ] },
    { number: '73', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a key characteristic of cloud computing platforms?</p>`,
          options: [`They enable secure, transparent data management.`, `They allow on-demand access to computing resources without local hardware.`, `They create immersive 3D experiences.`, `They enhance health monitoring and connectivity.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow on-demand access to computing resources without local hardware. Platforms like Microsoft Azure and AWS provide on-demand computing resources; option A describes blockchain, C AR/VR and D wearables (textbook p. 378).</p>` }
      ] },
    { number: '74', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What type of data does analytics tracking tools primarily collect?</p>`,
          options: [`Demographic data.`, `Behavioural data.`, `Financial data.`, `Psychographic data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Behavioural data. Analytics tools track how users move through a website or app: where they click, how long they stay and where they stop (textbook p. 374).</p>` }
      ] },
    { number: '75', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important for UX evaluation criteria to remain flexible and adaptable?</p>`,
          options: [`To accommodate changing budget constraints.`, `To keep pace with evolving technologies and user expectations.`, `To simplify the evaluation process.`, `To reduce the need for user research.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To keep pace with evolving technologies and user expectations. UX evaluation is a continuous cycle across changing platforms and devices, so criteria must adapt as technology and user needs change (textbook pp. 375–378).</p>` }
      ] },
    { number: '76', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What type of insights does qualitative feedback offer that quantitative metrics may not?</p>`,
          options: [`Statistical significance.`, `Objective measurements.`, `Predictive modelling data.`, `Contextual understanding and user motivations.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Contextual understanding and user motivations. Qualitative feedback shows how people feel and explains why something is or isn't working, which numbers alone might miss (textbook p. 375).</p>` }
      ] },
    { number: '77', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which emerging technology is associated with decentralised and secure data management?</p>`,
          options: [`Artificial intelligence.`, `Blockchain technology.`, `Cloud computing.`, `Internet of Things.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Blockchain technology. Blockchain is a decentralised system for secure, transparent data management (textbook p. 378).</p>` }
      ] },
    { number: '78', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>How do advanced display technologies impact UI design?</p>`,
          options: [`They prioritise spatial layouts and depth perception.`, `They require clear and concise feedback mechanisms.`, `They demand interfaces designed for small screens or no screens.`, `They enable the creation of interfaces that adapt to different screen shapes and resolutions.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They enable the creation of interfaces that adapt to different screen shapes and resolutions. With flexible, foldable and high-resolution displays, designers must create interfaces that adapt to different screen shapes, resolutions and orientations; A is AR/VR, B voice and C IoT (textbook pp. 379–380).</p>` }
      ] },
    { number: '79', marks: 1, layout: 0, section: 'Exercise 3.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key benefit of integrating emerging technologies in UI/UX design?</p>`,
          options: [`It ensures privacy and security of user data.`, `It avoids cognitive overload in complex systems.`, `It eliminates the need for visual interfaces.`, `It creates interfaces and experiences that meet users' evolving needs and expectations.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It creates interfaces and experiences that meet users' evolving needs and expectations. The textbook says integrating these tools lets developers meet users' evolving needs; privacy and cognitive overload are listed as challenges, not benefits (textbook pp. 378, 380).</p>` }
      ] },

    // ===== Exercise 3.4.1 =====
    { number: '80', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of data visualisation?</p>`,
          options: [`To replace the need for written reports.`, `To analyse data using algorithms.`, `To present data in a way that is easily interpreted.`, `To ensure data storage is secure.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To present data in a way that is easily interpreted. Data visualisation presents data visually so the audience can quickly understand it (textbook pp. 383–392).</p>` }
      ] },
    { number: '81', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>When organising data for visualisation, which process involves removing duplicates and inconsistencies?</p>`,
          options: [`Data mining.`, `Data cleaning.`, `Data compression.`, `Data encryption.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data cleaning. Data cleaning detects and corrects errors and redundant data such as duplicate entries and missing values (textbook pp. 319, 384–392).</p>` }
      ] },
    { number: '82', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What would be most appropriate for visualising data trends over time?</p>`,
          options: [`Pie chart.`, `Bubble plot.`, `Area chart.`, `Sunburst chart.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Area chart. Like a line chart, an area chart plots values along a time axis to show trends; pie and sunburst charts show parts of a whole (textbook pp. 384–392).</p>` }
      ] },
    { number: '83', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an essential consideration when designing a data visualisation?</p>`,
          options: [`The use of clear and concise labels.`, `The relevance of the data to the scenario.`, `The size of the dataset.`, `The intended audience.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The size of the dataset. Clear labels, relevant data and the intended audience are all key design considerations; the dataset's size is not in itself a design requirement (textbook pp. 384–392).</p>` }
      ] },
    { number: '84', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to consider your audience when designing a data visualisation?</p>`,
          options: [`Because all audiences prefer detailed technical data.`, `To ensure that the colours match their company branding.`, `So the visualisation is tailored to their level of understanding and needs.`, `To avoid using software that the audience might not understand.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — So the visualisation is tailored to their level of understanding and needs. Visualisations should match what the audience already knows and needs to learn (textbook pp. 368, 384–392).</p>` }
      ] },
    { number: '85', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What is one reason to create a sketch or storyboard before building your data visualisation?</p>`,
          options: [`To help plan the flow and layout of the visualisation.`, `To avoid having to choose what data is to be used.`, `To make sure that the brightest colours get used.`, `To make sure that all the white space is used.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To help plan the flow and layout of the visualisation. Sketching a rough layout first lets you plan the key message, flow and placement of elements (textbook pp. 367, 384–392).</p>` }
      ] },
    { number: '86', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>Which statement best describes the difference between a linear and an exponential trendline?</p>`,
          options: [`A linear trendline curves to show slow changes, while an exponential one stays flat.`, `Linear trendlines are for financial data while exponential ones are for scientific data.`, `Linear trendlines are always more accurate than exponential ones.`, `A linear trendline increases or decreases steadily while an exponential one changes faster over time.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A linear trendline increases or decreases steadily while an exponential one changes faster over time. A linear trend changes at a constant rate; an exponential trend's rate of change grows over time (textbook pp. 384–392).</p>` }
      ] },
    { number: '87', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What should you do when organising your data for a visualisation?</p>`,
          options: [`Add colourful icons and titles.`, `Group similar data and check for consistency.`, `Change values just lightly to make your graphs look better.`, `Remove all outliers without checking them.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Group similar data and check for consistency. Organising data means grouping related data and checking it is consistent; altering values or removing outliers unchecked damages data integrity (textbook pp. 384–392).</p>` }
      ] },
    { number: '88', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to keep a record of your data sources?</p>`,
          options: [`So you can reuse them for every project.`, `To avoid having to explain your results.`, `To prove your findings are reliable.`, `To make your visualisation more interesting.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To prove your findings are reliable. Recording sources shows where the data came from so others can verify it and trust the findings (textbook pp. 318, 384).</p>` }
      ] },
    { number: '89', marks: 1, layout: 0, section: 'Exercise 3.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What type of question does quantitative data help answer?</p>`,
          options: [`Why did it happen?`, `What does it feel like?`, `How much?`, `Who does it affect?`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — How much? Quantitative data is numerical, so it answers questions about quantity such as how much or how many; "why" and "how it feels" are qualitative (textbook pp. 384–392).</p>` }
      ] },

    // ===== Exercise 3.4.2 =====
    { number: '90', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important for enterprises to secure data visualisations?</p>`,
          options: [`So they load faster on all devices.`, `To allow all staff members to view the visualisations.`, `To prevent unauthorised access or changes to sensitive information.`, `To make the graphics much more appealing.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To prevent unauthorised access or changes to sensitive information. Security procedures make sure visualisations cannot be accessed or changed by people who shouldn't see them (textbook p. 394).</p>` }
      ] },
    { number: '91', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the key difference between data anonymisation and data masking?</p>`,
          options: [`Anonymisation changes values to simulated patterns; masking deletes the data.`, `Masking removes data entirely; anonymisation encrypts it.`, `Anonymisation removes details; masking replaces them with realistic substitutes.`, `They are the same and can be used interchangeably.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Anonymisation removes details; masking replaces them with realistic substitutes. Anonymisation changes or removes personal details so no one can be identified; masking replaces private information with simulated values that follow the same patterns (textbook p. 394).</p>` }
      ] },
    { number: '92', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is Australia's primary legislation for protecting personal data, including data visualisations?</p>`,
          options: [`My Health Records Act 2012.`, `Australian Consumer Law.`, `Privacy Act 1988.`, `Freedom of Information Act.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Privacy Act 1988. The textbook names the Privacy Act 1988 as the law ensuring personal data is handled safely (textbook p. 394).</p>` }
      ] },
    { number: '93', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>How does auditing and logging contribute to the security of data visualisations?</p>`,
          options: [`It restricts access to authorised devices only.`, `It compresses visualisations to reduce data exposure.`, `It tracks all access activity to detect unauthorised attempts.`, `It automatically anonymises all visual data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It tracks all access activity to detect unauthorised attempts. Audit logs record who accessed what and when, so suspicious or unauthorised activity can be detected (textbook pp. 395–397).</p>` }
      ] },
    { number: '94', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Why is two-factor authentication (2FA) important when accessing data visualisations remotely?</p>`,
          options: [`It increases internet speed during dashboard access.`, `It allows users to bypass encryption requirements.`, `It verifies user identity using two separate methods before granting access.`, `It automatically encrypts data during access.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It verifies user identity using two separate methods before granting access. 2FA requires two different forms of verification, so a stolen password alone is not enough to gain access (textbook pp. 395–397).</p>` }
      ] },
    { number: '95', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a key difference between symmetric and asymmetric encryption?</p>`,
          options: [`Symmetric encryption uses a public key; asymmetric uses a private key only.`, `Symmetric encryption uses the same key for both encryption and decryption; asymmetric uses two separate keys.`, `Asymmetric encryption is only used for stored data; symmetric is used for transmitted data.`, `Both types require exchanging private keys over a network.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Symmetric encryption uses the same key for both encryption and decryption; asymmetric uses two separate keys. Asymmetric encryption uses a public key to encrypt and a private key to decrypt (textbook pp. 395–397).</p>` }
      ] },
    { number: '96', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of using role-based access control in managing access to data visualisations?</p>`,
          options: [`To make all dashboards available to the public for transparency.`, `To simplify software development by reducing the number of data sources.`, `To ensure that users only access visual data appropriate to their role and clearance.`, `To increase the loading speed of data visualisations across an enterprise.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To ensure that users only access visual data appropriate to their role and clearance. Role-based access control grants permissions based on a user's role in the organisation (textbook pp. 395–397).</p>` }
      ] },
    { number: '97', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>How does an incremental backup differ from a differential backup?</p>`,
          options: [`Incremental backups copy all files since the last full backup, while differential backups copy only the most recently changed files.`, `Incremental backups require more storage space than differential backups.`, `Incremental backups copy files changed since the last backup (full or partial), while differential backups copy files changed since the last full backup only.`, `Incremental backups are performed weekly, while differential backups are performed hourly.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Incremental backups copy files changed since the last backup (full or partial), while differential backups copy files changed since the last full backup only. This matches the textbook's definitions of each partial backup type (textbook p. 399).</p>` }
      ] },
    { number: '98', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Why are protocols like HTTPS and VPNs important when transferring data used in visualisations?</p>`,
          options: [`They improve the visual quality of dashboards.`, `They allow unlimited access to all organisational data.`, `They remove the need for encryption or authentication.`, `They protect data in transit from interception and unauthorised access.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They protect data in transit from interception and unauthorised access. HTTPS and VPNs encrypt data while it travels over a network so it cannot be intercepted (textbook pp. 395–398).</p>` }
      ] },
    { number: '99', marks: 1, layout: 0, section: 'Exercise 3.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of performing a full backup?</p>`,
          options: [`It requires less storage than other types of backups.`, `It only backs up files that have recently changed.`, `It is the fastest type of backup to perform.`, `It is the easiest and fastest type of backup to restore.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It is the easiest and fastest type of backup to restore. Full backups are the easiest to restore because they are simply copied back, but they take a long time and need lots of storage (textbook p. 399).</p>` }
      ] }
  ]
});
