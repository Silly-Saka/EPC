/* Ec.eforge MCQ - Data Science. Source: ec.eforge.online HSC textbook revision questions (606 questions). */
registerExam({
  id: 'ef-ds',
  title: 'Ec.eforge MCQ — Data Science',
  source: 'ec.eforge.online', year: 2026, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 606,
  coverNotes: `<p>Multiple-choice revision questions from the ec.eforge.online Data Science textbook, grouped by topic. Answers and explanations are from the site.</p>`,
  groups: [
    // ---------------- What is Data Science? ----------------
    { number: '1', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the first step in the data science process?</p>`,
          options: [`Data collection through various sources like social media or digital transactions.`, `Cleaning and formatting the raw data.`, `Applying statistical tools and models to interpret the data.`, `Visualization of the interpreted data for non-technical stakeholders.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data collection through various sources like social media or digital transactions.</p><p>The first step in the data science process is data collection. Before data can be processed, analyzed or visualized, it needs to be collected from various sources.</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>How is data science applied in retail and e-commerce industry?</p>`,
          options: [`It is used to track user interactions on social media platforms.`, `It is used to identify fraudulent activities in banks.`, `It is used to analyse sales data and customer preferences to optimize supply chain.`, `It is used to analyse patient data and improve diagnostics in healthcare.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is used to analyse sales data and customer preferences to optimize supply chain.</p><p>Retailers like Walmart use data science to analyse sales data and customer preferences to optimize their supply chain and inventory management.</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>What is a key technique used by data scientists to make complex information accessible and easier to understand by non-technical stakeholders?</p>`,
          options: [`Data collection`, `Data visualisation`, `Data processing and cleaning`, `Data corroboration`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data visualisation</p><p>Data visualisation is a technique used by data scientists to create charts, graphs, dashboards, or infographics to visually represent analysed data, making complex information accessible and easier to understand.</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>What is a key non-technical skill required for a data scientist?</p>`,
          options: [`Ability to cook`, `Ability to paint`, `Ability to communicate effectively with non-technical stakeholders.`, `Ability to play musical instruments`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ability to communicate effectively with non-technical stakeholders.</p><p>A data scientist requires strong communication skills to effectively share their findings and insights with non-technical stakeholders in the organization.</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>Which industry applies data science to analyse large datasets of user interactions for improving user experience?</p>`,
          options: [`Healthcare`, `Social Media`, `Transportation`, `Finance`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Social Media</p><p>Social media platforms like Facebook and Twitter use data science to understand user preferences and improve user experience. They analyse datasets of user interactions, including likes, shares, and comments, to build recommendation algorithms.</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>What processes does data science incorporate for transforming raw data into valuable insights?</p>`,
          options: [`Data collection, Data cleaning, Data interpretation and Data visualization.`, `Data collection, Cleaning, Summarizing and Formulation of hypotheses.`, `Data cleaning, Experimental Design, Testing of hypotheses and Prediction.`, `Data collection, Curation, Storage and Retrieval.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data collection, Data cleaning, Data interpretation and Data visualization.</p><p>Data Science includes processes such as data collection, data processing (which can include cleaning), data analysis (or interpretation), and data visualisation to turn raw data into meaningful insights.</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the tasks a data scientist would perform when conducting basic analysis on the Iris dataset?</p>`,
          options: [`Determine the average passenger age on the Titanic`, `Classify the passengers of the Titanic by age`, `Calculate the average sepal length for the Iris dataset`, `Filter Titanic passengers by gender`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Calculate the average sepal length for the Iris dataset</p><p>Task 2: Basic Analysis details how a data scientist might calculate the average sepal length for the Iris dataset, not the other actions mentioned.</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>In which industry is data science used to analyse data for improving diagnostics and treatment?</p>`,
          options: [`Social media`, `Healthcare`, `Retail and e-commerce`, `Finance`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Healthcare</p><p>The Healthcare industry uses data science to analyze patient data to improve diagnostics and treatment. For instance, predictive models that use patient medical history can help predict the likelihood of diseases like diabetes or heart disease.</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>In the data science field, what is the purpose of performing data processing and cleaning?</p>`,
          options: [`To ensure the data does not contain any numerical values.`, `To find errors and redundancies in the data and format it for analysis.`, `To present the data in a visually appealing manner.`, `To predict the future trends based on the data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To find errors and redundancies in the data and format it for analysis.</p><p>Data processing and cleaning is performed to improve the quality of data by identifying and correcting errors, missing values and any other inconsistencies. This step is crucial because the quality of generated insights directly depends on the quality of the data being analysed.</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>What is important for a data scientist beyond just collecting numbers during data interpretation in the field of Data Science?</p>`,
          options: [`Making connections and identifying patterns within the data.`, `Collecting data from various sources.`, `Cleaning and formatting raw data.`, `Visually representing analysed data using graphs and charts.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Making connections and identifying patterns within the data.</p><p>In the data science field, just collecting numbers is not enough. It's important for a data scientist to turn the data into a story by making connections, identifying patterns, and deriving insights that are meaningful in a given context.</p>` }
      ] },
    { number: '11', marks: 1, layout: 0, section: 'What is Data Science?',
      items: [
        { type: 'mcq',
          question: `<p>How does data science assist the finance industry?</p>`,
          options: [`It helps in identifying high-demand areas for ridesharing services.`, `It aids in analyzing patient data for improved health diagnostics.`, `It assists in analyzation of transaction history for possibility of fraudulent activities.`, `It helps in recommending users certain content based on their preferences on social media.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It assists in analyzation of transaction history for possibility of fraudulent activities.</p><p>In the finance industry, data science analytics assists in detecting fraudulent activities by analyzing various datasets that include transaction history, customer demographics, and spending behaviors.</p>` }
      ] },
    // ---------------- Data Science Process ----------------
    { number: '12', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data consists of non-numerical information that describes characteristics, qualities, or categories?</p>`,
          options: [`Quantitative Data`, `Continuous Data`, `Qualitative Data`, `Discrete Data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Qualitative Data</p><p>Qualitative data includes non-numerical information that describes characteristics, qualities, or categories.</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What kind of analysis suggests actions to achieve desired outcomes?</p>`,
          options: [`Descriptive analysis`, `Diagnostic analysis`, `Predictive analysis`, `Prescriptive analysis`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Prescriptive analysis</p><p>Prescriptive analysis not only anticipates what will happen and when it will happen, but also why it will happen. Further, prescriptive analysis suggests decision options on how to take advantage of a future opportunity or mitigate a future risk and shows the implication of each decision option. In practice, prescriptive analysis can continually and automatically process new data to re-predict and re-prescribe, thus automatically improving prediction accuracy and prescribing better decision options.</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What is the advantage of using cloud storage for data?</p>`,
          options: [`It allows data to be moved between systems.`, `It provides scalable and flexible data storage solutions.`, `It is used for storing and transferring small amounts of data.`, `It is a large storage system capable of complex analysis.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It provides scalable and flexible data storage solutions.</p><p>Cloud storage is beneficial because it allows for scalable and flexible data storage solutions, meaning it can adapt and grow with user needs.</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>Which function in excel is used to calculate the mean for each attribute in the Iris dataset?</p>`,
          options: [`=AVERAGE()`, `=MIN()`, `=MAX()`, `=COUNTIF()`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — =AVERAGE()</p><p>The =AVERAGE() function is used to calculate the mean value of a range of cells in Excel.</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What is considered as an active form of data collection?</p>`,
          options: [`Gathering weather-related data continuously with a sensor.`, `Tracking user behavior on a website through cookies.`, `Users logging their daily workouts in a fitness app.`, `Measuring the height of students.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Users logging their daily workouts in a fitness app.</p><p>Active data collection requires direct participation. A fitness app asking users to log their daily workouts is considered active because it requires direct input from the user.</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>Which data analysis type aims to explain why something happened?</p>`,
          options: [`Prescriptive analysis`, `Predictive analysis`, `Descriptive analysis`, `Diagnostic analysis`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Diagnostic analysis</p><p>Diagnostic analysis is used to explain the reasons or causes of a certain event or outcome, hence it explains why something happened.</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What are common types of data storage?</p>`,
          options: [`Local storage, cloud storage and portable storage media`, `Data warehouses and cloud storage`, `Local data, international data and global data`, `Hard drives, Google Drive and Dropbox`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Local storage, cloud storage and portable storage media</p><p>The common types of data storage include local storage (physical devices), cloud storage (remote servers), and portable storage media (USB drives, external hard drives, CDs/DVDs).</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>Which function is used in Excel to count the number of times a specific species name appears in the data?</p>`,
          options: [`=AVERAGE()`, `=MIN()`, `=MAX()`, `=COUNTIF()`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — =COUNTIF()</p><p>The =COUNTIF() function in Excel is used to count the number of times a specific text (for instance, a species name) appears in a range of cells. In the Iris Dataset, it would be used to count the instances of each flower species.</p>` }
      ] },
    { number: '20', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What is the first step in the data analysis process?</p>`,
          options: [`Identify Relationships`, `Statistical Analysis`, `Data Cleaning`, `Visual Analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data Cleaning</p><p>The first step in data analysis is data cleaning which involves handling errors, duplicates, or missing values in the collected data to ensure accurate and meaningful analysis results.</p>` }
      ] },
    { number: '21', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What is NOT a characteristic of a data warehouse?</p>`,
          options: [`Limited to storing data from a single source.`, `Structured data from multiple sources can be stored.`, `They are designed to facilitate complex analyses.`, `Often used to store historical data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Limited to storing data from a single source.</p><p>A characteristic of data warehouses is that they store structured data collected from multiple sources, not just from a single source.</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What type of data consists of measurable information like numbers and quantities?</p>`,
          options: [`Quantitative Data`, `Qualitative Data`, `Sensor-based Data`, `Passive Data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Quantitative Data</p><p>Quantitative data consists of measurable information like numbers and quantities which are known as continuous quantities.</p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What types of data collection involves individuals providing responses to a set of questions?</p>`,
          options: [`Passive data collection`, `Active data collection`, `Sensor-based data collection`, `Automated data collection`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Active data collection</p><p>Active data collection requires direct participation such as filling out surveys or providing feedback.</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What are some of the most common types of data storage?</p>`,
          options: [`Local storage, cloud storage, and portable storage media`, `Cloud storage, data warehouses, and refrigeration storage`, `Local storage, supermarket shelves, and online databases`, `Portable storage media, briefcases, and cloud storage`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Local storage, cloud storage, and portable storage media</p><p>Local storage, cloud storage, and portable storage media are commonly used to store and protect data. Other options provided in Options B, C and D include unusual or incorrect methods of storing data.</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Data Science Process',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of visual analysis in data analysis?</p>`,
          options: [`It suggests actions to achieve desired outcomes.`, `It identifies errors, duplicates, or missing values in the data.`, `It assists with easy interpretation of data and helps identify patterns, trends, or anomalies.`, `It calculates the mean or median to summarise the data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It assists with easy interpretation of data and helps identify patterns, trends, or anomalies.</p><p>Visual analysis involves creating charts such as bar graphs, pie charts, or scatter plots. It allows for easy interpretation of data and helps identify patterns, trends, or anomalies.</p>` }
      ] },
    // ---------------- Quantitative vs Qualitative Data ----------------
    { number: '26', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of a use case for qualitative data?</p>`,
          options: [`Calculating the average age of individuals in a study`, `Determining the median income of a group of people`, `Identifying the correlation between height and weight.`, `Understanding customer opinions and preferences`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Understanding customer opinions and preferences</p><p>Qualitative data, unlike quantitative data, provides insights into the qualities or attributes of the data such as customer opinions and preferences rather than measurable numerical values.</p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What type of data is numerical and represents quantifiable characteristics?</p>`,
          options: [`Qualitative data`, `Quantitative data`, `Uncategorised data`, `Unquantifiable data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Quantitative data</p><p>Quantitative data is numerical and represents amounts, counts, or other quantifiable characteristics. ---</p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following use cases is appropriate for quantitative data?</p>`,
          options: [`Understanding user needs in product development`, `Evaluating patient's health in healthcare`, `Gathering qualitative data on community attitudes toward urban development projects`, `Collecting customer's opinions on service quality`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Evaluating patient's health in healthcare</p><p>Quantitative data includes measurable and numeric data like heart rate, blood sugar levels etc., which are essential in healthcare for patient diagnosis and evaluation.</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What accurately describes a primary difference between Quantitative and Qualitative data?</p>`,
          options: [`Quantitative data is descriptive while qualitative data is numerical`, `Quantitative data cannot be expressed as a number while qualitative data can be categorised and labeled`, `Qualitative data represents measurable attributes while quantitative data represents descriptive attributes`, `Quantitative data is numerical, while qualitative data is descriptive`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Quantitative data is numerical, while qualitative data is descriptive</p><p>The primary difference between the two types of data is that quantitative data is numerical and can be represented with numbers, allowing for mathematical calculations. On the other hand, qualitative data is descriptive and cannot be expressed numerically, but can be categorised and labelled.</p>` }
      ] },
    { number: '30', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following methods can be used to analyse qualitative data?</p>`,
          options: [`Statistical techniques`, `Calculating averages`, `Performing regression analysis`, `Content analysis`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Content analysis</p><p>Qualitative data can be analysed using methods like content analysis, thematic analysis, or categorical analysis.</p>` }
      ] },
    { number: '31', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data takes the form of words, phrases, or categories rather than numbers?</p>`,
          options: [`Quantitative data`, `Qualitative data`, `Factual data`, `Theoretical data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Qualitative data</p><p>Qualitative data is often descriptive and captures characteristics, qualities, or categories, often taking the form of words, phrases, or categories rather than numbers.</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>In which scenario would qualitative data be most useful?</p>`,
          options: [`A restaurant seeking feedback on service quality.`, `A doctor measuring vital signs for diagnostics.`, `A scientist conducting a study on plant growth.`, `A business analyzing sales trends.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — A restaurant seeking feedback on service quality.</p><p>Qualitative data is often collected to understand subjective phenomena like customer experiences and preferences. Therefore, a restaurant seeking feedback on service quality will find qualitative data most useful.</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the best way to describe discrete and continuous data as categories of quantitative data?</p>`,
          options: [`Discrete data are countable values with infinite possibilities, while continuous data can have a finite number of distinct values.`, `Discrete data are distinct values with a finite number of possibilities, while continuous data can take an infinite number of values within a range.`, `Both discrete and continuous data represent finite, countable values.`, `Both discrete and continuous data can take an infinite number of values within a given range.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Discrete data are distinct values with a finite number of possibilities, while continuous data can take an infinite number of values within a range.</p><p>Discrete data consists of distinct, countable values with a finite number of possibilities, while continuous data can take an infinite number of values within a defined range.</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What kind of data type would be used to express customer satisfaction levels?</p>`,
          options: [`Qualitative data`, `Quantitative data`, `Nominal data`, `Cardinal data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Qualitative data</p><p>Qualitative data is used to express attributes, characteristics, or levels of satisfaction, making it the best choice for expressing customer satisfaction levels as it does not typically express fixed numerical difference between levels.</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What method would be used to analyse quantitative data?</p>`,
          options: [`Thematic analysis`, `Content analysis`, `Calculating averages or performing regression analysis`, `Categorical analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Calculating averages or performing regression analysis</p><p>Quantitative data is analyzed using statistical techniques, such as calculating averages, identifying correlations, or performing regression analysis.</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>Among the following, what best describes quantitative data?</p>`,
          options: [`Data that is descriptive and captures characteristics`, `Data that is numerical and measurable`, `Data that takes the form of words`, `Data that shows a person's favorite color`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data that is numerical and measurable</p><p>Quantitative data is numerical and represents amounts, counts, or other quantifiable characteristics. It is measurable and can be expressed in numbers.</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>In which field is quantitative data typically used to make informed decisions based on sales trends or customer purchasing behavior?</p>`,
          options: [`Product Development`, `Customer Feedback`, `Business Analysis`, `Social Sciences`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Business Analysis</p><p>Quantitative data is used in Business Analysis to make informed decisions by understanding sales trends or customer purchasing behavior.</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data would be most pertinent in determining the physical characteristics of iris flowers?</p>`,
          options: [`Qualitative Data`, `Quantitative Data`, `Categorical Data`, `Nominal Data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Quantitative Data</p><p>The physical characteristics of iris flowers such as sepal length, sepal width, petal length, and petal width can be represented as quantitative data because they are measurable dimensions.</p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Quantitative vs Qualitative Data',
      items: [
        { type: 'mcq',
          question: `<p>What are the two types of qualitative data?</p>`,
          options: [`Integral and Decimal`, `Nominal and Ordinal`, `Positive and Negative`, `Exact and Approximate`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Nominal and Ordinal</p><p>The two types of qualitative data are nominal, which classifies or labels variables, and ordinal, which represents categories in a meaningful order but without consistent differences between levels.</p>` }
      ] },
    // ---------------- Data Sampling Techniques ----------------
    { number: '40', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements accurately describes a benefit of computerised sampling compared to manual sampling?</p>`,
          options: [`Computerised sampling is always cheaper in terms of labor.`, `Manual sampling introduces less risk of bias than computerised sampling.`, `Computerised sampling can efficiently process large amounts of data.`, `Computerised sampling is less useful for qualitative research.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Computerised sampling can efficiently process large amounts of data.</p><p>Computerised sampling is able to handle large amounts of data in a timely manner. It's especially useful when analyzing large datasets, for instance in fields such as e-commerce or social media. While the cost and effectiveness of computerised sampling compared to manual sampling can vary, this is a consistent advantage of computerised methods.</p>` }
      ] },
    { number: '41', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Which type of computerised sampling technique involves dividing the population into subgroups from which members are randomly selected?</p>`,
          options: [`Random Sampling`, `Stratified Random Sampling`, `Cluster Sampling`, `Sequential Sampling`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Stratified Random Sampling</p><p>Stratified random sampling involves dividing the population into subgroups or 'strata'. A computer program can then randomly select members from each subgroup to ensure that the sample is representative.</p>` }
      ] },
    { number: '42', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Which computerised sampling technique is most suitable when analysing datasets that are categorically or geographically organised?</p>`,
          options: [`Stratified Random Sampling`, `Random Sampling`, `Computerised Sampling`, `Cluster Sampling`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Cluster Sampling</p><p>Cluster sampling is the most suitable technique for datasets that are geographically or categorically organised. It involves dividing the group into clusters, then selecting entire clusters for sampling.</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of data sampling in data science and software engineering?</p>`,
          options: [`To remove duplicate data from a dataset.`, `To analyse the entire population of data.`, `To select a representative subset of data from a larger dataset for analysis.`, `To convert qualitative data into a quantitative format.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To select a representative subset of data from a larger dataset for analysis.</p><p>Data sampling involves selecting a representative subset of data from a larger dataset to analyse and draw conclusions because analysing an entire dataset may be impractical due to time, resources, or volume of data constraints.</p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>In the manual method of sampling, which technique involves selecting individuals at regular intervals from a list?</p>`,
          options: [`Stratified sampling`, `Simple random sampling`, `Systematic sampling`, `Cluster sampling`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Systematic sampling</p><p>The systematic sampling method involves the selection of individuals at regular intervals from a list. For example, every 10th customer might be selected from a list of 100 customers.</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a reason why manual sampling might be preferred over computerised sampling in some situations?</p>`,
          options: [`Manual sampling is more cost-effective.`, `Manual sampling is more efficient when dealing with large datasets.`, `Manual sampling reduces the risk of bias.`, `Manual sampling allows for human judgement where understanding context is important.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Manual sampling allows for human judgement where understanding context is important.</p><p>In some cases, such as in focus group studies, the context is important. Human intervention in manual sampling is beneficial for selecting samples that provide more in-depth insights based on specific characteristics.</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>In the context of the Iris dataset, which computerised sampling could ensure an equal number of samples are taken from each species?</p>`,
          options: [`Cluster Sampling`, `Stratified Random Sampling`, `Simple Random Sampling`, `Quota Sampling`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Stratified Random Sampling</p><p>Stratified random sampling is used when we divide the population into subgroups and ensure even representation of each group in the sample. In the iris dataset, these subgroups could be the different species of iris flowers.</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following manual sampling techniques involves dividing the population into subgroups that share similar characteristics, and taking a sample from each subgroup?</p>`,
          options: [`Simple Random Sampling`, `Systematic Sampling`, `Manual Random Sampling`, `Stratified Sampling`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Stratified Sampling</p><p>Stratified sampling involves dividing the population into homogeneous subgroups or strata, from which samples are then taken. This ensures that the sample is representative of the entire population by covering all the different subgroups.</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>Why is data sampling a significant part of data science and software engineering?</p>`,
          options: [`Because it allows data scientists to work with large, unmanageable amounts of data.`, `Because it requires the analysis of the entire population of data, making it highly accurate.`, `Because it involves selecting a representative subset of data from a larger dataset, allowing generalizations without processing the entire dataset.`, `Because it is less time consuming and requires fewer resources than manual and computerised sampling techniques.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Because it involves selecting a representative subset of data from a larger dataset, allowing generalizations without processing the entire dataset.</p><p>Data sampling involves selecting a subset of data from a larger dataset. This allows data scientists to work with a smaller, manageable portion of data that still accurately reflects the larger population, enabling them to make generalizations without having to process the entire dataset.</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Data Sampling Techniques',
      items: [
        { type: 'mcq',
          question: `<p>What is an advantage of using computerised sampling over manual sampling when handling large datasets?</p>`,
          options: [`Computerised sampling can handle large amounts of data quickly, making it ideal for fields like e-commerce or social media.`, `Computerised sampling requires human intervention to avoid any bias.`, `Computerised sampling can provide personalised recommendations based on the context of the dataset.`, `Computerised sampling is less costly and time-consuming than manual sampling.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Computerised sampling can handle large amounts of data quickly, making it ideal for fields like e-commerce or social media.</p><p>Unlike manual sampling which becomes more cumbersome and prone to errors as the size of dataset increases, computerised sampling can handle vast amounts of data quickly and efficiently, irrespective of the size of the dataset.</p>` }
      ] },
    // ---------------- Active & Passive Data Collection ----------------
    { number: '50', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an example of an active data collection method?</p>`,
          options: [`Surveys`, `Interviews`, `Direct measurements`, `Passive observation`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Passive observation</p><p>Passive observation is a data collection method, but it falls under passive data collection, not active. In active data collection methods such as surveys, interviews, and direct measurements, the individual or entity providing the data must intentionally participate in providing their responses or measurements.</p>` }
      ] },
    { number: '51', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of active data collection over passive data collection?</p>`,
          options: [`Active data collection is prone to less bias.`, `Active data collection does not require direct interaction.`, `Active data collection can provide detailed, subjective insights into opinions, emotions, and experiences.`, `Active data collection is highly scalable.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Active data collection can provide detailed, subjective insights into opinions, emotions, and experiences.</p><p>Active data collection allows researchers to gather detailed, nuanced insights directly from participants, such as their opinions, emotions, and experiences.</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>What is a disadvantage of active data collection?</p>`,
          options: [`Active data collection is not specific to the research purpose.`, `Active data collection does not allow for tailored responses.`, `Active data collection can lead to inaccuracies due to human error.`, `Active data collection requires minimal resources.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Active data collection can lead to inaccuracies due to human error.</p><p>Active data collection can lead to inaccuracies in the data collected due to human errors, such as misunderstanding a question or skipping the question, making it a disadvantage.</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not a characteristic of passive data collection?</p>`,
          options: [`It requires direct involvement from the subjects.`, `It captures behavior in real time.`, `It can collect large amounts of data.`, `It functions without requiring the subjects to report their actions.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It requires direct involvement from the subjects.</p><p>A characteristic of passive data collection is that it does not require direct involvement from the subjects. The data is collected automatically, without the subjects consciously reporting their actions.</p>` }
      ] },
    { number: '54', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data collection can provide detailed, subjective insights into opinions, emotions, and experiences?</p>`,
          options: [`Passive data collection`, `Automated data collection`, `Active data collection`, `None of the above`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Active data collection</p><p>Active data collection involves direct interaction from participants, which allows them to provide detailed, subjective insights into their opinions, emotions and experiences.</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential ethical concern around passive data collection?</p>`,
          options: [`It requires too much effort from the subjects.`, `It is less accurate than active data collection.`, `It raises privacy concerns as people may not be aware their data is being collected.`, `It can only be used for small data sets.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It raises privacy concerns as people may not be aware their data is being collected.</p><p>Passive data collection can raise ethical concerns as subjects may be unaware that their data is being collected or how it is being used.</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data collection is not as prone to producing biased responses due to its objective nature?</p>`,
          options: [`Active data collection`, `Passive data collection`, `Both active and passive data collection`, `Neither active nor passive data collection`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Passive data collection</p><p>Passive data collection is less prone to response bias because it measures real actions rather than reported behavior. It is generally more objective since data is gathered without interference.</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Active & Passive Data Collection',
      items: [
        { type: 'mcq',
          question: `<p>What is the key characteristic of active data collection?</p>`,
          options: [`The data collection is done without the involvement of participants.`, `The data collection is done with the direct involvement and engagement of the participants.`, `The data is collected passively without any questions being asked.`, `The data collection does not require any specific measurement.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The data collection is done with the direct involvement and engagement of the participants.</p><p>Active data collection requires direct involvement from the individual or entity providing the data. The person being studied or surveyed must consciously engage with the process of providing their responses or measurements.</p>` }
      ] },
    // ---------------- Data Accuracy, Validity & Reliability ----------------
    { number: '58', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What is data accuracy referring to?</p>`,
          options: [`How closely the data represents the real-world scenario it aims to describe.`, `The total number of data points collected in a study.`, `The relevance of data to the research topic.`, `The extent to which data can be generalized to other populations.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — How closely the data represents the real-world scenario it aims to describe.</p><p>Data accuracy refers to how closely the data represents the real-world scenario it aims to describe and is accurate if it is error-free and correctly reflects what it is supposed to measure.</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What is inaccurate data often linked to in data analysis?</p>`,
          options: [`Effective decisions`, `Incorrect conclusions`, `Quality data analysis`, `Suitable decision making`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Incorrect conclusions</p><p>Poor quality data can lead to incorrect or inaccurate conclusions that can impact data analysis and decision-making processes.</p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What does data validity refer to in the context of research?</p>`,
          options: [`Data validity refers to how much the data has been manipulated`, `Data validity refers to the process of data collection and how accurate it measures the intended variable`, `Data validity refers to the speed of data collection`, `Data validity refers to the amount of data collected`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data validity refers to the process of data collection and how accurate it measures the intended variable</p><p>Data validity is about whether the data collection process and the collected data make logical sense and measure the intended variable accurately in the context of the research goals.</p>` }
      ] },
    { number: '61', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What measures can be taken to ensure the accuracy of collected data?</p>`,
          options: [`Use automated tools for data entry and collection`, `Cross-check or verify the data`, `Both A and B`, `None of the above`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Both A and B</p><p>Using automated tools for data entry and collection, as well as cross-checking or verifying the collected data can help in minimizing errors, thus improving data accuracy.</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What are the three key components critical for ensuring data quality in data analysis?</p>`,
          options: [`Accuracy, Validity, and Reliability`, `Accuracy, Precision, and Bias`, `Accuracy, Consistency, and Diversity`, `Validity, Correctness, and Bias`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Accuracy, Validity, and Reliability</p><p>The three key pillars for ensuring data quality are accuracy, validity, and reliability. These pillars ensure that data is correct, relevant and consistently leads to the same conclusions when used under the same conditions.</p>` }
      ] },
    { number: '63', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What is Content Validity in the context of data collection?</p>`,
          options: [`It is about the data accurately measuring the intended variable.`, `It examines whether the method of collecting the data accurately represents the concept being studied.`, `It refers to the collected data making logical sense in the context of the research goals.`, `It refers to whether the dataset fully covers the topic or concept of interest.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It refers to whether the dataset fully covers the topic or concept of interest.</p><p>Content validity refers to whether the dataset fully covers the topic or concept of interest being studied. For instance, if collecting data on factors affecting students' academic performance, ignoring important factors like sleep patterns could reduce data validity.</p>` }
      ] },
    { number: '64', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>Why is reliability essential in data analysis?</p>`,
          options: [`It ensures the data is stable and consistent`, `It gives the data a fancy label`, `It makes the data appear more scientific`, `It makes the data look larger in volume`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It ensures the data is stable and consistent</p><p>Reliability ensures the stability and consistency of data, which is crucial in drawing dependable conclusions. Unreliable data may produce varying results under the same circumstances, rendering it untrustworthy for drawing accurate conclusions.</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What does internal consistency refer to in the context of data reliability?</p>`,
          options: [`It refers to the consistency between different people collecting the same data.`, `It measures whether the data collection method produces consistent results when applied multiple times.`, `It refers to how well different items within a survey or questionnaire measure the same concept.`, `It measures the variation in data readings taken under different conditions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It refers to how well different items within a survey or questionnaire measure the same concept.</p><p>In the context of data reliability, internal consistency refers to how well different items within a survey or questionnaire measure the same concept.</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What would be an indication that a survey lacks reliability in terms of data quality?</p>`,
          options: [`The responses change drastically when the survey is conducted twice, under the same conditions.`, `The survey questions are not relevant to the customer experience.`, `The customer responses do not accurately reflect their level of satisfaction.`, `The survey questions focus on product quality, delivery time, and customer service.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The responses change drastically when the survey is conducted twice, under the same conditions.</p><p>In terms of data quality, a survey is considered to lack reliability if the responses are inconsistent when the survey is conducted multiple times under the same or similar conditions.</p>` }
      ] },
    { number: '67', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>What is construct validity in the context of data collection?</p>`,
          options: [`It is about comparing the collected data with a validated standard.`, `It refers to whether the dataset fully covers the topic or concept of interest.`, `It examines whether the method of collecting the data accurately represents the concept being studied.`, `It refers to the process of validating the efficiency of data collection tools.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It examines whether the method of collecting the data accurately represents the concept being studied.</p><p>Construct validity is about examining whether the method used in collecting the data accurately represents the concept being studied. For example, if we want to measure "happiness" among students, using only one question like "Are you happy?" may not be sufficient. Therefore, several questions relating to mood, social interactions and satisfaction with life may be required.</p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Data Accuracy, Validity & Reliability',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important that data accurately reflects the real-world scenario it is describing?</p>`,
          options: [`Because incorrect data can lead to appropriate decision making`, `Because incorrect data doesn't influence the data analysis process`, `Because incorrect data can lead to flawed analysis and misleading results`, `Because incorrect data improves the decision-making process`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Because incorrect data can lead to flawed analysis and misleading results</p><p>When data accurately reflects the real-world scenario it's describing, it ensures that analyses and results are founded on truth. Incorrect or inaccurate data can misguide the process, leading to flawed analysis and false results which then influences the decision-making process negatively.</p>` }
      ] },
    // ---------------- Primary vs Secondary Data ----------------
    { number: '69', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What best describes primary data?</p>`,
          options: [`Data collected from secondary sources for a specific study.`, `Data that is collected directly from the original source for a specific purpose.`, `Data that is collected without a specific purpose or study in mind.`, `Data that is easy and cheap to collect.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data that is collected directly from the original source for a specific purpose.</p><p>Primary Data refers to data that is collected directly from the original source for the specific purpose of a study. It is first-hand data gathered by researchers to meet the exact needs of the study.</p>` }
      ] },
    { number: '70', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What are some potential drawbacks of using secondary data for research?</p>`,
          options: [`The data may be outdated or not specific enough for the current study.`, `There is a high possibility of encountering biases or inaccuracies.`, `Both A and B.`, `None of the above.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Both A and B.</p><p>The researcher has little control over the preciseness or contemporaries of secondary data. There may also be problems with its veracity due to bias or inaccuracies. Hence, both options A and B highlight potential drawbacks.</p>` }
      ] },
    { number: '71', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data collection allows for greater control over the process, ensuring accuracy and relevance?</p>`,
          options: [`Primary data collection`, `Secondary data collection`, `Both primary and secondary data collection`, `Neither primary nor secondary data collection`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Primary data collection</p><p>Primary data collection offers greater control over the process, allowing for greater accuracy and relevance, as it can be tailored specifically to the needs of the research.</p>` }
      ] },
    { number: '72', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential advantage of primary data over secondary data?</p>`,
          options: [`It is more cost-effective and quicker to access.`, `It allows for greater control and data accuracy.`, `It is always readily available.`, `It does not require any follow-up questions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows for greater control and data accuracy.</p><p>Primary data collection, though more expensive and time-consuming, provides researchers with more control over the data collection process and can result in more accurate data. This is not typically the case with secondary data, which may have been collected in a different context or for a different purpose.</p>` }
      ] },
    { number: '73', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What is considered an advantage of using secondary data for research purposes?</p>`,
          options: [`It provides control over data quality.`, `It provides specific data tailored to the needs of the current study.`, `It is accessible and cost-effective.`, `It can't be outdated.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is accessible and cost-effective.</p><p>Secondary data is already collected and compiled by others, saving time and resources thus making it accessible and cost-effective.</p>` }
      ] },
    { number: '74', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>Why is understanding the difference between primary and secondary data important in data science, software engineering, and research?</p>`,
          options: [`It helps make informed decisions and conduct effective analyses.`, `It helps make the process faster and less complex.`, `It helps reduce the cost of data collection.`, `It helps create better visual representations of the data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It helps make informed decisions and conduct effective analyses.</p><p>Understanding primary and secondary data influences its relevance, reliability, and suitability for addressing specific questions, thus aids in making informed decisions and conducting effective analyses.</p>` }
      ] },
    { number: '75', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What is a main advantage of using primary data in a study?</p>`,
          options: [`It is less time-consuming to collect.`, `It does not require specialized skills or tools to collect.`, `It is more likely to align with the specific goals of the study.`, `It is cheaper to collect compared to other types of data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is more likely to align with the specific goals of the study.</p><p>Since primary data is collected directly by the researcher for the specific purpose at hand, it is often more tailored to meet the exact needs of the study and more likely to align with specific research goals.</p>` }
      ] },
    { number: '76', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data collection is more flexible as it can be modified to suit changing needs?</p>`,
          options: [`Primary data collection`, `Secondary data collection`, `Both primary and secondary data collection`, `Neither primary nor secondary data collection`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Primary data collection</p><p>Primary data collection methods are flexible as they can be modified during the research to suit changing needs, unlike secondary data which is fixed.</p>` }
      ] },
    { number: '77', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the importance of understanding the source of data in data science, software engineering, and research?</p>`,
          options: [`It helps in understanding the coding language better`, `It influences the data's relevance, reliability, and suitability for specific questions`, `It helps to increase the system's efficiency`, `It helps to design better user interfaces`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It influences the data's relevance, reliability, and suitability for specific questions</p><p>The source of data greatly influences its relevance to the research question, its reliability in terms of accuracy, and its suitability for addressing specific research objectives.</p>` }
      ] },
    { number: '78', marks: 1, layout: 0, section: 'Primary vs Secondary Data',
      items: [
        { type: 'mcq',
          question: `<p>What type of data is data that has been previously gathered, processed, and possibly published by others like government reports or industry analyses?</p>`,
          options: [`Primary data`, `Tertiary data`, `Secondary data`, `Quaternary data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Secondary data</p><p>Secondary data is data that has been collected by someone else for some other purpose but can be used for a different analysis. It can come from sources such as government reports, published articles, industry reports, historical databases, and websites.</p>` }
      ] },
    // ---------------- Local, Cloud & Portable Media ----------------
    { number: '79', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is one reason why portable media like USB drives and SD cards are popular for data storage?</p>`,
          options: [`They are harder to lose or damage compared to cloud storage.`, `They can provide a quick and easy backup solution.`, `They have unlimited storage capacity.`, `They require internet access to transfer data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They can provide a quick and easy backup solution.</p><p>Portable media provide a quick and easy backup solution by allowing users to physically carry and transfer data between different locations or systems.</p>` }
      ] },
    { number: '80', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>In what scenario might a teacher choose to use local storage for data?</p>`,
          options: [`For collaborating on a project that requires easy remote access`, `For keeping student grades private and controlled`, `For quick transfers of data when internet access is unreliable`, `For sharing large files with students via a collaborative platform`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — For keeping student grades private and controlled</p><p>Local storage is often preferred when privacy and control over data is a significant concern.</p>` }
      ] },
    { number: '81', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is one major advantage of using local storage?</p>`,
          options: [`It eliminates the possibility of data loss.`, `It can be easily accessed remotely for collaboration.`, `Users have complete control over their data.`, `It does not require any physical storage devices.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Users have complete control over their data.</p><p>Users have complete ownership of their data with local storage and can implement security measures directly.</p>` }
      ] },
    { number: '82', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of Solid State Drives (SSDs) compared to Hard Disk Drives (HDDs)?</p>`,
          options: [`SSDs have greater storage capacity`, `SSDs are cheaper`, `SSDs offer faster performance`, `SSDs use spinning disks to store data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — SSDs offer faster performance</p><p>SSDs use flash memory, which makes them faster and more reliable than HDDs which use spinning disks for data storage.</p>` }
      ] },
    { number: '83', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Which one is not a type of storage used in data centers?</p>`,
          options: [`Block storage`, `File storage`, `Object storage`, `Portable storage`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Portable storage</p><p>Portable storage like USB drives and SD cards are not typically used in data centers. Instead, block, file, and object storage types are used.</p>` }
      ] },
    { number: '84', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Which data storage method is best suited for a scenario where remote access and collaboration are required?</p>`,
          options: [`Local storage`, `Portable media`, `Cloud storage`, `None of the above`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Cloud storage</p><p>Cloud storage is ideal when remote access and collaboration are required as it provides scalability and easy remote access.</p>` }
      ] },
    { number: '85', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant benefit of using cloud storage for data preservation?</p>`,
          options: [`Data is stored on local servers.`, `There is no risk of data breaches.`, `Data redundancy reduces the risk of data loss.`, `It eliminates the need for internet connection.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data redundancy reduces the risk of data loss.</p><p>Since most cloud service providers automatically replicate data across multiple servers, the risk of data loss is significantly reduced. This process is called data redundancy.</p>` }
      ] },
    { number: '86', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Why might a software developer choose to use portable media like an external hard drive for data backup?</p>`,
          options: [`Because it's harder to lose or damage compared to cloud storage`, `Because it provides quicker and easier backup solution`, `Because it offers unlimited storage capacity`, `Because it can be used without any physical access`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Because it provides quicker and easier backup solution</p><p>As the text states, a key advantage of portable media is providing a quick and easy solution for data backup. This gives added redundancy in case of a system failure.</p>` }
      ] },
    { number: '87', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following scenarios could represent a limitation of local storage?</p>`,
          options: [`A teacher stores student records on their laptop for privacy concerns.`, `A business implements security measures on their local storage to protect sensitive client data.`, `An educational software system is storing records locally to avoid unauthorized data sharing over the internet.`, `Developers in a software engineering project store the source code locally on their individual computers, making it challenging to collaborate remotely.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Developers in a software engineering project store the source code locally on their individual computers, making it challenging to collaborate remotely.</p><p>In this situation, the developers have difficulty collaborating effectively as each one of them is storing source code separately on their own computers due to local storage. This makes remote access and collaboration challenging, indicating a limitation of local storage.</p>` }
      ] },
    { number: '88', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Which type of storage offered by data centers is most suitable for handling unstructured data?</p>`,
          options: [`Block storage`, `File storage`, `Object storage`, `Solid State Drives (SSD)`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Object storage</p><p>Object storage is highly scalable and suitable for managing unstructured data, which is often employed in cloud services for storing multimedia or backup files.</p>` }
      ] },
    { number: '89', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is a downside of using portable media for data storage and transfer?</p>`,
          options: [`It requires internet access`, `It can be lost or stolen easily`, `It is not secure`, `It cannot be used for backup`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can be lost or stolen easily</p><p>Despite the convenience, portability can also be a downside to portable media because they can be lost or stolen easily. This could expose any unencrypted data to unauthorized users.</p>` }
      ] },
    { number: '90', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of using cloud storage for data?</p>`,
          options: [`It provides a physical backup of data`, `It allows data to be accessed from any location`, `It intensifies data vulnerability`, `It requires extensive investment in storage infrastructure`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows data to be accessed from any location</p><p>Cloud storage allows data to be accessed from any geographical location as long as there is internet access. This makes it beneficial for team projects, backups, and applications that require constant data synchronization.</p>` }
      ] },
    { number: '91', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>In which scenario would cloud storage be an ideal data storage method?</p>`,
          options: [`When a project requires ample control over data and privacy`, `When data needs to be quickly transferred or backed up`, `When collaboration and easy remote access to data is needed`, `When a project does not require scalability`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — When collaboration and easy remote access to data is needed</p><p>Cloud storage allows for easy remote access to data and supports scalability, making it an ideal solution for collaborative projects.</p>` }
      ] },
    { number: '92', marks: 1, layout: 0, section: 'Local, Cloud & Portable Media',
      items: [
        { type: 'mcq',
          question: `<p>Which one of the following is a potential disadvantage when using local storage?</p>`,
          options: [`Loss of control over access to data`, `Difficulty syncing data across devices`, `Data stored is only accessible with an internet connection`, `Data access time is very slow`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Difficulty syncing data across devices</p><p>As the data in local storage is not in the cloud, it's difficult to collaborate or sync it across different devices or for remote access. This can be impractical for projects in which several members need access to the same files.</p>` }
      ] },
    // ---------------- Investigating Data Warehouses ----------------
    { number: '93', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary function of a data warehouse in a business setting?</p>`,
          options: [`Allow for daily transactional operations`, `Consolidate information from various sources for comprehensive analysis and reporting`, `Store unstructured data only`, `Generate insights based on real-time data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Consolidate information from various sources for comprehensive analysis and reporting</p><p>Data warehouses are designed to integrate data from multiple sources for querying, analysis, reporting and support decision-making processes by providing comprehensive analysis and reporting. They are optimised for historical data, rather than real-time transactional operations.</p>` }
      ] },
    { number: '94', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What is the proper order of the ETL process in data warehousing?</p>`,
          options: [`Load, Extract, Transform`, `Transform, Extract, Load`, `Extract, Transform, Load`, `Load, Transform, Extract`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Extract, Transform, Load</p><p>ETL stands for Extract, Transform, Load, making the correct order: extracting data from sources, transforming it for consistency, and then loading it into the data warehouse.</p>` }
      ] },
    { number: '95', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of using a data warehouse within a retail company with multiple outlets?</p>`,
          options: [`It increases the complexity of data analysis`, `It allows each store to maintain its own data separately`, `It enables unified analysis of data across all outlets`, `It reduces the amount of data collected from each store`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It enables unified analysis of data across all outlets</p><p>A data warehouse enables a company to unify and analyze data from all of its outlets in one place. This makes it easier to identify and compare trends across different stores, aiding strategic decision-making.</p>` }
      ] },
    { number: '96', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What are ethical requirements of using a data warehouse which contains sensitive and personally identifiable information?</p>`,
          options: [`Ensuring organization implement robust security measures`, `Following data privacy regulations such as GDPR in Europe`, `Limiting access to authorized personnel and obtaining consent from individuals for the use of their data`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Ethical requirements of using a data warehouse that contains personally identifiable information include implementing proper security measures such as encryption and access control, following privacy regulations like GDPR, and limiting access to data only to authorized personnel while having consent for the use of individuals' data. It also includes preventing data misuse and striving for transparency in data practices.</p>` }
      ] },
    { number: '97', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What are the three stages involved in the ETL Process?</p>`,
          options: [`Examine, Test, Load.`, `Extract, Translate, Load.`, `Extract, Transfer, Load.`, `Extract, Transform, Load.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Extract, Transform, Load.</p><p>In a data warehouse, the ETL process involves extracting data from various source systems, transforming the collected data to ensure consistency, and loading the transformed data into the data warehouse for analysis.</p>` }
      ] },
    { number: '98', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant benefit of data warehouses?</p>`,
          options: [`Data Integration`, `Speed of Video Rendering`, `Social Media Marketing`, `Product Shipping Optimization`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data Integration</p><p>Data warehouses pull information from different systems into a unified platform, providing a comprehensive view of the business, which is invaluable for managers making data-driven decisions.</p>` }
      ] },
    { number: '99', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>How do data warehouses benefit e-commerce companies like Amazon?</p>`,
          options: [`They enable rapid entry and retrieval of individual records.`, `They analyze purchase data to recommend products, manage inventory, and create marketing campaigns.`, `They provide a platform for companies to share their data with competitors.`, `They primarily serve as data storage without any analytical functionality.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They analyze purchase data to recommend products, manage inventory, and create marketing campaigns.</p><p>E-commerce companies like Amazon utilize data warehouses to analyze extensive data on customer purchases, search histories, and preferences. This analysis helps in product recommendation, inventory management, and creating targeted marketing campaigns.</p>` }
      ] },
    { number: '100', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>How does a data warehouse support decision-making processes within an organization?</p>`,
          options: [`It allows businesses to store transactional operations from multiple sources.`, `It is optimized for complex queries and comprehensive analysis, enabling insights generation from structured and unstructured data.`, `It simply stores vast amounts of unstructured data from multiple sources.`, `It provides outlets to sell products.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is optimized for complex queries and comprehensive analysis, enabling insights generation from structured and unstructured data.</p><p>A data warehouse consolidates information from various sources and is optimised for queries and analysis. This makes it a critical tool for generating insights, thereby supporting decision-making processes within an organization.</p>` }
      ] },
    { number: '101', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What are some ethical concerns regarding data warehousing?</p>`,
          options: [`Collection of irrelevant data`, `Data privacy and security`, `Risk of data corruption`, `High costs of implementation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data privacy and security</p><p>Data warehouses often store sensitive and personally identifiable information (PII). If mishandled or accessed by unauthorized persons, this could lead to privacy violations hence, presenting ethical concerns about data privacy and security.</p>` }
      ] },
    { number: '102', marks: 1, layout: 0, section: 'Investigating Data Warehouses',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of the Transform phase in the ETL process of a data warehouse?</p>`,
          options: [`It sorts data in order of importance.`, `It deletes unnecessary data from the warehouse.`, `It loads the data into the warehouse.`, `It cleans and formats the data to ensure consistency.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It cleans and formats the data to ensure consistency.</p><p>In the transform phase of the ETL process, the collected data is cleaned and formatted. For example, converting all date formats to a standard type or removing duplicate records.</p>` }
      ] },
    // ---------------- Informatics: Making Sense of Data ----------------
    { number: '103', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>In what ways does informatics support decision-making in the fields of education?</p>`,
          options: [`By analysing sales data and consumer behaviour to optimise marketing strategies.`, `By analysing patient records and predict health risks for early intervention.`, `By monitoring students' participation in online learning platforms, analysing attendance records, grades and engagement data.`, `By analysing census data, employment rates, crime statistics, and health outcomes for policy decisions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By monitoring students' participation in online learning platforms, analysing attendance records, grades and engagement data.</p><p>In education, informatics is used to analyse various data like attendance records, engagements, grades and participation in online learning platforms, which help in making data-driven decisions and planning interventions for struggling students.</p>` }
      ] },
    { number: '104', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the first step in the informatics process?</p>`,
          options: [`Cleaning the data`, `Collecting relevant data`, `Organising the data into a database`, `Analyzing the data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Collecting relevant data</p><p>The first step in informatics is to collect relevant data which can come from a variety of sources such as surveys, sensors, transaction records, and digital interactions. This data is then stored, organized, and made accessible for further analysis.</p>` }
      ] },
    { number: '105', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of using data visualisation in informatics?</p>`,
          options: [`To present data in a complex way`, `To represent data in a way that is easy to understand and interpret`, `To make data more difficult to understand`, `To create long spreadsheets of raw data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To represent data in a way that is easy to understand and interpret</p><p>Data visualisation is used in informatics to represent data in a way that is easy to understand and interpret. This is done using tools such as charts, graphs, dashboards, and infographics.</p>` }
      ] },
    { number: '106', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What does the descriptive analysis focus on in data analysis?</p>`,
          options: [`It provides recommendations based on the data.`, `It uses historical data to make predictions.`, `It focuses on understanding what happened.`, `It tries to understand the reasons behind trends.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It focuses on understanding what happened.</p><p>Descriptive analysis focuses on summarizing data and understanding "what happened".</p>` }
      ] },
    { number: '107', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of analysis in data informatics mainly focuses on summarizing data and understanding the trends and patterns?</p>`,
          options: [`Predictive analysis`, `Prescriptive analysis`, `Diagnostic analysis`, `Descriptive analysis`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Descriptive analysis</p><p>Descriptive analysis emphasizes summarizing data and understanding "what happened." It provides an overview of trends and patterns.</p>` }
      ] },
    { number: '108', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the significance of cleaning data in the field of informatics?</p>`,
          options: [`It helps in collecting more data`, `It increases data redundancies and errors`, `It helps in standardising and categorizing responses correctly`, `It is irrelevant in decision making`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It helps in standardising and categorizing responses correctly</p><p>Data cleaning removes inconsistencies, duplicates, and errors, standardising and categorizing responses correctly. Clean data enables accurate insights which is essential in decision-making based on data analysis.</p>` }
      ] },
    { number: '109', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>How is informatics used in the healthcare field?</p>`,
          options: [`Informatics is used in healthcare to develop new medications`, `Healthcare informatics uses data to improve patient outcomes by analyzing patient records and predicting health risks`, `In healthcare, informatics is used in hospital administration functions only`, `Informatics is only used in healthcare for record keeping`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Healthcare informatics uses data to improve patient outcomes by analyzing patient records and predicting health risks</p><p>Data is collected and analyzed in healthcare informatics to identify patterns and predict health risks. This information is essential for patient safety and improving treatment strategies.</p>` }
      ] },
    { number: '110', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>Which tool in informatics provides an overview of key metrics and trends, combining multiple visualisations and data points for a comprehensive view of different aspects of a dataset?</p>`,
          options: [`Infographics`, `Dashboards`, `Bar Charts`, `Spreadsheets`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Dashboards</p><p>Dashboards are the tools in informatics that provide an overview of key metrics and trends as it combines multiple visualisations and data points, offering a comprehensive view.</p>` }
      ] },
    { number: '111', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What are some examples of data visualisation tools used in informatics?</p>`,
          options: [`Bar charts and dashboards`, `Spreadsheets and databases`, `Word documents and PDFs`, `Emails and forms`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Bar charts and dashboards</p><p>Data visualisation tools in informatics include bar charts, dashboards, graphs, and infographics. They are used to create visual representations of data for easy understanding and interpretation.</p>` }
      ] },
    { number: '112', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of predictive analysis in data informatics?</p>`,
          options: [`To identify the reasons behind trends or patterns`, `To provide recommendations on actions`, `To provide an overview of trends and patterns`, `To predict future outcomes based on historical data and statistical models`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To predict future outcomes based on historical data and statistical models</p><p>Predictive analysis in data informatics uses historical data and statistical models to predict future outcomes.</p>` }
      ] },
    { number: '113', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>What are the main steps involved in the informatics process?</p>`,
          options: [`Collecting, storing, organising, and analyzing data`, `Previewing, collecting, and graphing data`, `Observing, organizing, and interpreting data`, `Defining, observing, and analyzing data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Collecting, storing, organising, and analyzing data</p><p>The main steps in informatics are collecting data from various sources, storing collected data in databases, organising it, and making it accessible for further analysis.</p>` }
      ] },
    { number: '114', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>How is informatics applied in the field of business and marketing?</p>`,
          options: [`It is used to understand consumer behavior, track sales trends, and optimise marketing strategies.`, `It is exclusively used for inventory management.`, `It is only used to improve customer service.`, `It is solely used for tracking employee performance.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It is used to understand consumer behavior, track sales trends, and optimise marketing strategies.</p><p>Informatics in business and marketing is broadly used to understand consumer behaviour, track sales trends, and optimise marketing strategies. It supports businesses in making data-driven decisions.</p>` }
      ] },
    { number: '115', marks: 1, layout: 0, section: 'Informatics: Making Sense of Data',
      items: [
        { type: 'mcq',
          question: `<p>How does informatics contribute to the field of business?</p>`,
          options: [`It helps business keep track of their financial records.`, `It allows businesses to understand customer behavior and adjust their marketing strategies.`, `It helps businesses solve legal disputes.`, `It enables organisations to keep a physical count of their inventory.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows businesses to understand customer behavior and adjust their marketing strategies.</p><p>By using informatics, businesses can gather and analyze customer data and feedback which can then be used to understand their behaviors and trends. This understanding can guide the adjustment of the firms marketing strategies to better meet the needs of its customers.</p>` }
      ] },
    // ---------------- Structured vs Unstructured Data ----------------
    { number: '116', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data is ideal for situations that require quick retrieval and analysis of information?</p>`,
          options: [`Unstructured Data`, `Machine Data`, `Structured Data`, `Network Data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Structured Data</p><p>Structured data is well-organised and easy to search, making it ideal for quick retrieval and analysis of information.</p>` }
      ] },
    { number: '117', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>What format does structured data usually follow?</p>`,
          options: [`No specific format`, `A random format`, `A tabular format with defined rows and columns`, `A hierarchical format`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A tabular format with defined rows and columns</p><p>Structured data follows a strict format, typically tabular, with defined rows and columns.</p>` }
      ] },
    { number: '118', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>What is a characteristic of unstructured data?</p>`,
          options: [`It has a predetermined format.`, `It is easy to search and analyze.`, `It contains a mixture of text, images, videos, and other multimedia content.`, `It can be compressed as effectively as structured data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It contains a mixture of text, images, videos, and other multimedia content.</p><p>Unstructured data can include a combination of text, images, videos, and other multimedia content. It does not have a fixed format or structure, making it difficult to search, analyze, or compress effectively.</p>` }
      ] },
    { number: '119', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of unstructured data?</p>`,
          options: [`Spreadsheet`, `Database table`, `Audio recording of a customer support call`, `Numerical rating`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Audio recording of a customer support call</p><p>An audio recording of a customer support call is unstructured data as it contains spoken conversations which require transcription and audio analysis tools to analyse.</p>` }
      ] },
    { number: '120', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of structured data?</p>`,
          options: [`It is easily analyzed using automated tools.`, `It lacks flexibility.`, `It requires significant effort to maintain consistency.`, `It doesn't fit well with subjective or complex information.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It is easily analyzed using automated tools.</p><p>Due to its highly organized nature and consistent format, structured data can be easily analyzed using automated tools and algorithms, making it ideal for data-driven decision-making.</p>` }
      ] },
    { number: '121', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data is better suited for applications that require a deeper understanding of context, sentiment, or complex phenomena?</p>`,
          options: [`Structured Data`, `Unstructured Data`, `Both equally`, `Neither is suitable`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Unstructured Data</p><p>Unstructured data is rich in detail and contains more diverse information, making it better suited for applications that require a deeper understanding of context, sentiment, or complex phenomena.</p>` }
      ] },
    { number: '122', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>Which query language is typically used in searching structured data?</p>`,
          options: [`Java`, `Python`, `SQL`, `R`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — SQL</p><p>SQL (Structured Query Language) is typically used for querying structured data, as it offers efficient ways to search, filter, and aggregate information within structured data.</p>` }
      ] },
    { number: '123', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>What techniques are often required to process unstructured data?</p>`,
          options: [`Natural language processing and machine learning algorithms`, `Numerical analysis and spreadsheet tabulation`, `Image recognition and database queries`, `Graph theory and data normalization`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Natural language processing and machine learning algorithms</p><p>Due to the complex and unorganised nature of unstructured data, advanced techniques like NLP and machine learning algorithms are frequently needed to derive useful insights.</p>` }
      ] },
    { number: '124', marks: 1, layout: 0, section: 'Structured vs Unstructured Data',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data can healthcare providers use to track vital signs or monitor trends across patient groups?</p>`,
          options: [`Unstructured data from doctors' notes and medical imaging`, `Structured data from patient records`, `Unstructured data from user comments on websites`, `Structured data from website analytics tools`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Structured data from patient records</p><p>In healthcare, structured data includes patient records stored in databases, such as the patient’s name, age, weight, and medical history can be used to track vital signs or monitor trends across patient groups.</p>` }
      ] },
    // ---------------- Big Data & Metadata ----------------
    { number: '125', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT one of the four Vs of big data?</p>`,
          options: [`Volume`, `Variety`, `Velocity`, `Virtualization`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Virtualization</p><p>Virtualization is not one of the four Vs of big data; the correct attributes are volume, variety, velocity, and veracity.</p>` }
      ] },
    { number: '126', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements best describes the challenge of veracity in data management?</p>`,
          options: [`Veracity ensures all data collected is complete and error-free.`, `Veracity focuses on filtering out irrelevant data using manual methods.`, `Veracity involves ensuring data accuracy and reliability despite its diverse sources.`, `Veracity refers to increasing the volume of data collected from various sources.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Veracity involves ensuring data accuracy and reliability despite its diverse sources.</p><p>Veracity involves managing the reliability and trustworthiness of data, especially when it comes from varied and potentially inaccurate sources.</p>` }
      ] },
    { number: '127', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary challenges associated with the Volume of Big Data?</p>`,
          options: [`Ensuring data privacy`, `Efficient data storage and processing`, `Preventing data duplication`, `Securing data access`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Efficient data storage and processing</p><p>The Volume of Big Data presents challenges in efficiently storing and processing vast quantities of data.</p>` }
      ] },
    { number: '128', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>What is the main challenge related to the Velocity of Big Data that traditional databases struggle to address?</p>`,
          options: [`Storing large volumes of historical data`, `Managing data security and encryption`, `Processing data in real-time as it is generated`, `Ensuring data integrity and consistency`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Processing data in real-time as it is generated</p><p>Traditional databases struggle to process data in real-time as it is generated due to the high velocity of data.</p>` }
      ] },
    { number: '129', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of semi-structured data commonly used in web applications?</p>`,
          options: [`Customer purchase records`, `Images posted on social media`, `Product data in JSON format`, `Voice recordings from customer service calls`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Product data in JSON format</p><p>Product data in JSON format is considered semi-structured because it contains organizational metadata.</p>` }
      ] },
    { number: '130', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which type of metadata is responsible for managing data including access rights and technical specifications?</p>`,
          options: [`Descriptive metadata`, `Structural metadata`, `Administrative metadata`, `Analytical metadata`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Administrative metadata</p><p>Administrative metadata helps manage data by providing information about access rights, usage permissions, and technical specifications.</p>` }
      ] },
    { number: '131', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best represents the typical scale at which large social media platforms generate data daily?</p>`,
          options: [`Megabytes`, `Gigabytes`, `Terabytes`, `Kilobytes`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Terabytes</p><p>Large social media platforms generate terabytes of data every day from millions of users' posts, likes, and comments.</p>` }
      ] },
    { number: '132', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>What type of data contains a diverse mix of structured, semi-structured, and unstructured formats, posing challenges in data integration and analysis?</p>`,
          options: [`Structured data`, `Semi-structured data`, `Unstructured data`, `Big Data`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Big Data</p><p>Big Data includes a variety of structured, semi-structured, and unstructured data types, presenting challenges in integration and analysis.</p>` }
      ] },
    { number: '133', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>Which real-world application demonstrates the importance of data velocity due to the need for immediate processing and analysis?</p>`,
          options: [`Weather forecasting systems`, `Smart city traffic monitoring`, `Online retail inventory management`, `Historical data archiving`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Smart city traffic monitoring</p><p>Smart city traffic monitoring requires real-time data analysis to manage traffic flow and avoid congestion, highlighting the importance of data velocity.</p>` }
      ] },
    { number: '134', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>What is a common issue associated with sensor data in terms of veracity?</p>`,
          options: [`Rapid data influx leading to storage issues`, `Errors or signal interference causing inaccurate readings`, `Insufficient volume of data collected`, `Overly structured data making it hard to analyze`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Errors or signal interference causing inaccurate readings</p><p>Sensor data can suffer from errors or signal interference, leading to inaccurate readings, which is a veracity challenge.</p>` }
      ] },
    { number: '135', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>What role does metadata play in web applications like Google and Facebook?</p>`,
          options: [`It provides the main data content for users to consume.`, `It helps index and retrieve data efficiently through search engines and applications.`, `It primarily focuses on capturing user activity and preferences.`, `It replaces the need for big data analysis by offering all necessary insights.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps index and retrieve data efficiently through search engines and applications.</p><p>Metadata helps organize and retrieve data efficiently, allowing web applications to index and deliver relevant content quickly based on searches.</p>` }
      ] },
    { number: '136', marks: 1, layout: 0, section: 'Big Data & Metadata',
      items: [
        { type: 'mcq',
          question: `<p>How can businesses use the Velocity aspect of Big Data to their advantage?</p>`,
          options: [`By reducing the amount of data generated every day.`, `By using data to make real-time decisions and forecasts.`, `By focusing solely on structured data for analysis.`, `By ignoring inconsistent data from their analyses.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By using data to make real-time decisions and forecasts.</p><p>By utilising the Velocity of Big Data, businesses can implement predictive analytics to make real-time decisions and forecasts.</p>` }
      ] },
    // ---------------- Data Warehousing ----------------
    { number: '137', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a data warehouse in an organization?</p>`,
          options: [`To store data from different sources in one place.`, `To support business intelligence and data mining.`, `To enable better decision-making by providing a unified, historical view of data.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>A data warehouse is a critical aspect of managing Big Data, as it centralises data from multiple sources, supports business intelligence, data mining, and most importantly, helps in making data-driven decisions.</p>` }
      ] },
    { number: '138', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of having all relevant data integrated into one system?</p>`,
          options: [`It increases the complexity of the systems.`, `It reduces the need for decision-makers.`, `It improves the ability to perform cross-functional analysis leading to well-informed business strategies.`, `It decreases the speed of query performance.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It improves the ability to perform cross-functional analysis leading to well-informed business strategies.</p><p>When all relevant data is integrated into one system, decision-makers are able to perform comprehensive cross-functional analyses, which can lead to better-informed business strategies.</p>` }
      ] },
    { number: '139', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of Centralised Data Storage in a data warehouse?</p>`,
          options: [`To create a "single version of the truth" for accurate analysis`, `To standardise product IDs across different systems`, `To organise the data in a way that makes querying more efficient`, `To track trends and changes over time`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To create a "single version of the truth" for accurate analysis</p><p>Centralised Data Storage in a data warehouse collects data from various sources and stores it in one central location to create a "single version of the truth", which is critical for accurate analysis.</p>` }
      ] },
    { number: '140', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is one benefit of the transformation process in a data warehouse system?</p>`,
          options: [`It helps to make the system more user-friendly`, `It helps to standardize and cleanse data`, `It helps to optimize the inventory management`, `It helps speed up the queries`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps to standardize and cleanse data</p><p>The transformation process in a data warehouse helps to standardize and cleanse data, ensuring higher data quality. This makes the analysis more reliable and the resulting insights more trustworthy.</p>` }
      ] },
    { number: '141', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of ETL (Extract, Transform, Load) processes in a data warehouse?</p>`,
          options: [`The role is to facilitate efficient querying.`, `The role is to conduct transaction processing.`, `The role is to organize the data in a specific schema.`, `The role is to gather, clean, transform and load data from various sources into the data warehouse.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The role is to gather, clean, transform and load data from various sources into the data warehouse.</p><p>ETL process is used to extract data from different sources, clean and transform to maintain consistency before loading into the data warehouse, ensuring all data is compatible and ready for analysis.</p>` }
      ] },
    { number: '142', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is a critical aspect of managing and interpreting Big Data?</p>`,
          options: [`Data Visualization`, `Data Warehousing`, `Data Equation`, `Data Compression`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data Warehousing</p><p>Data Warehousing is a critical aspect of managing and interpreting Big Data as it provides a centralised repository where data is stored from multiple sources for querying and analysis.</p>` }
      ] },
    { number: '143', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>How does a data warehouse enhance the decision-making process within an organization?</p>`,
          options: [`By providing data on a global scale`, `By integrating all relevant data into one system for cross-functional analysis`, `By focusing solely on inventory management`, `By simplifying data, making it less complex`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By integrating all relevant data into one system for cross-functional analysis</p><p>A data warehouse integrates all relevant data into one system which allows for cross-functional analysis that can inform and enhance decision making and business strategies.</p>` }
      ] },
    { number: '144', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of a star schema in a data warehouse?</p>`,
          options: [`It organizes the data to facilitate efficient querying.`, `It helps divide the warehouse into data marts.`, `It focuses on real-time data processing.`, `It transforms and cleans the data before storage.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It organizes the data to facilitate efficient querying.</p><p>A star schema in a data warehouse organizes the data, allowing for efficient querying. It does this by using a central fact table and surrounding it with dimension tables.</p>` }
      ] },
    { number: '145', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>Which activities can a data warehouse support by storing data from different sources in a single location?</p>`,
          options: [`Online shopping and e-commerce.`, `Reporting, business intelligence (BI), and data mining.`, `Web development and design.`, `Social media management and online marketing.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Reporting, business intelligence (BI), and data mining.</p><p>By storing data from different sources in a single location, a data warehouse can effectively support activities such as reporting, business intelligence (BI), and data mining.</p>` }
      ] },
    { number: '146', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>How do data warehouses contribute to more efficient handling of complex queries?</p>`,
          options: [`They use automated algorithms to filter relevant data.`, `They use artificial intelligence to predict the outcome of the query.`, `They use optimized indexing and storage mechanisms to enhance query performance.`, `They use machine learning to continuously improve query handling.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They use optimized indexing and storage mechanisms to enhance query performance.</p><p>Data warehouses use optimized indexing and storage mechanisms, which are specifically designed for handling large-scale, complex queries efficiently.</p>` }
      ] },
    { number: '147', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>Which types of information can be found in the dimension tables of a data warehouse in a retail company?</p>`,
          options: [`Name and specialty of doctors`, `Product details and customer details`, `Treatment cost and patient visits`, `Sale amounts and promotional campaigns`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Product details and customer details</p><p>In the context of a retail company, dimension tables in a data warehouse would contain information such as product details and customer details.</p>` }
      ] },
    { number: '148', marks: 1, layout: 0, section: 'Data Warehousing',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of data marts in a data warehouse?</p>`,
          options: [`To store large volumes of historical data for trend analysis.`, `To facilitate the execution of complex queries.`, `To provide a subdivision of the data warehouse focused on a specific department or business unit.`, `To perform ETL (Extract, Transform, Load) processes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To provide a subdivision of the data warehouse focused on a specific department or business unit.</p><p>Data marts are specialised sections of a data warehouse dedicated to a particular business unit or department. For example, a retail company may have separate data marts for sales, marketing, and inventory. These data marts allow departments to quickly access the data most relevant to them without having to query the entire data warehouse.</p>` }
      ] },
    // ---------------- Impact of Data Scale ----------------
    { number: '149', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of machine learning and real-time data streaming used together in the healthcare industry?</p>`,
          options: [`Real-time patient monitoring systems collecting data on vital signs and machine learning models analysing the data to identify abnormal patterns.`, `Doctors diagnosing patients based on symptoms and history.`, `Patients booking appointments online.`, `Hospital administration managing patient records.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Real-time patient monitoring systems collecting data on vital signs and machine learning models analysing the data to identify abnormal patterns.</p><p>The combination of machine learning with real-time data streaming is used in the healthcare industry's real-time patient monitoring systems. These systems collect data on vital signs, and machine learning models analyse the data in real-time to identify abnormal patterns, which can help medical professionals intervene quicker in life-threatening situations.</p>` }
      ] },
    { number: '150', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>In the context of a transportation company like Uber, how is historical data used in relation to data scale?</p>`,
          options: [`It is used to predict demand for rides in different areas of a city.`, `It trains a machine learning model to understand factors influencing ride demand.`, `It forms part of a continuous data stream as new requests come in.`, `It ensures quick responses in industries that need them.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It trains a machine learning model to understand factors influencing ride demand.</p><p>Historical data includes ride records and other factors, which can be used to train a machine learning model to understand factors that influence ride demand. This is necessary to make effective future predictions about ride demand in various areas.</p>` }
      ] },
    { number: '151', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What are some challenges that might arise when scaling up machine learning applications to handle large-scale data?</p>`,
          options: [`The need for specialized hardware and distributed learning.`, `The need to reduce the size of the dataset.`, `The need to rewrite the algorithms used for small scale applications.`, `The need to obtain additional training data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The need for specialized hardware and distributed learning.</p><p>As the scale of data increases, certain challenges arise such as storage limitations, processing power requirements, and the need for efficient algorithms, which require specialized hardware and distributed learning techniques.</p>` }
      ] },
    { number: '152', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What is one benefit and one challenge of handling large volumes of data in machine learning?</p>`,
          options: [`Benefit is increasing model accuracy, challenge is ensuring data quality.`, `Benefit is ensuring data quality, challenge is improving model accuracy.`, `Benefit is storing and processing data, challenge is getting immediate insights.`, `Benefit is getting immediate insights, challenge is storing and processing data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Benefit is increasing model accuracy, challenge is ensuring data quality.</p><p>As more data is available, model accuracy improves. However, managing large volumes of data can present challenges in storing and processing data efficiently.</p>` }
      ] },
    { number: '153', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What challenges could an organization face when working with large-scale data for machine learning purposes?</p>`,
          options: [`The possibility of data leakage`, `Issues regarding data privacy and security`, `Problems related to storage limitation, processing power requirement, and the need for efficient algorithms`, `Difficulties in interpreting the results of machine learning models`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Problems related to storage limitation, processing power requirement, and the need for efficient algorithms</p><p>As the content mentions, when managing large-scale data for machine learning, organizations can face several challenges such as storage limitations, processing power requirements, and the need for efficient algorithms.</p>` }
      ] },
    { number: '154', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What advantage is yielded from the combination of machine learning and real-time data streaming in manufacturing?</p>`,
          options: [`Improves product quality`, `Increases output levels`, `Enables predictive maintenance`, `Reduces raw material use`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Enables predictive maintenance</p><p>The combination of real-time data streaming and machine learning in manufacturing enables predictive maintenance. Trained machine learning models analyse the continuous stream of operational data from machinery to recognise signs of wear or impending failure and inform the maintenance teams. This helps avoid machine breakdown and minimises downtime.</p>` }
      ] },
    { number: '155', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant concern for financial trading systems and why is real-time data streaming vital for such applications?</p>`,
          options: [`The significant concern is data privacy, and real-time streaming is vital to ensure data is encrypted.`, `The significant concern is data storage, and real-time streaming is vital to save storage space.`, `The significant concern is the processing speed, and real-time streaming is vital as delays can lead to financial losses.`, `The significant concern is data corruption, and real-time streaming is vital to keep the data accurate and consistent.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The significant concern is the processing speed, and real-time streaming is vital as delays can lead to financial losses.</p><p>For financial trading systems, quick processing of stock prices and trading information is crucial to make instant buy or sell decisions. Delays of even a few milliseconds can lead to significant financial loss, making real-time data streaming a critical element.</p>` }
      ] },
    { number: '156', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What roles do historical data and real-time data play in machine learning and real-time streaming systems for a transportation company like Uber?</p>`,
          options: [`Historical data helps train the machine learning model, and real-time data helps predict outcomes.`, `Historical data helps predict outcomes, and real-time data helps train the machine learning model.`, `Both historical data and real-time data are useful for training the machine learning model.`, `Neither historical data nor real-time data play significant roles.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Historical data helps train the machine learning model, and real-time data helps predict outcomes.</p><p>In a transportation company like Uber, historical data, including millions of ride records, is used to train a machine learning model to understand factors influencing ride demand. As new requests come in, they form a part of a continuous data stream. This real-time data is used to predict which areas are likely to see a surge in ride requests, ensuring that decisions can be made as events unfold.</p>` }
      ] },
    { number: '157', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What are the benefits and challenges of managing large datasets and real-time streaming in machine learning?</p>`,
          options: [`Benefits are improved model accuracy and immediate insights, challenges include storing and processing data efficiently and managing computational resources.`, `Benefits include improved data storage and processing efficiency, challenges are managing computational resources and ensuring data quality.`, `Benefits are immediate insights and managing computational resources, challenges are improved model accuracy and storing and processing data efficiently.`, `Benefits include managing computational resources and data quality, challenges are storing and processing data and immediate insights.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Benefits are improved model accuracy and immediate insights, challenges include storing and processing data efficiently and managing computational resources.</p><p>The benefits of managing large datasets include improved model accuracy and the provision of immediate insights that are crucial for time-sensitive applications. However, challenges in this area include storing and processing such large volumes of data efficiently and the need for managing computational resources effectively. Additionally, the importance of ensuring data quality should not be overlooked.</p>` }
      ] },
    { number: '158', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What types of applications often require real-time data streaming due to their need for immediate responses?</p>`,
          options: [`Video games and TV streaming services`, `Financial transactions and weather forecasting`, `Online shopping and banking`, `Email and text messaging.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Financial transactions and weather forecasting</p><p>According to the content, financial transactions and weather forecasting are among applications that require real-time data streaming due to their need for immediate responses.</p>` }
      ] },
    { number: '159', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>What are some of the benefits of scaling up machine learning with large datasets and real-time streaming in businesses?</p>`,
          options: [`Better understanding of customer behavior`, `Prediction of future trends`, `Automation of complex decisions`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Scaling up machine learning with large datasets and real-time streaming can transform industries, allowing businesses to better understand customer behavior, predict future trends, automate complex decisions, and improve service efficiency.</p>` }
      ] },
    { number: '160', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>How does the combination of machine learning and real-time data streaming benefit a fraud detection system used by banks?</p>`,
          options: [`It analyses only legitimate transactions in real time.`, `It stops all incoming transactions to prevent potential fraud.`, `It uses historical dataset for assessing only legitimate transactions.`, `It instantly assesses each incoming transaction, and if suspicious, can flag or even stop it before any damage occurs.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It instantly assesses each incoming transaction, and if suspicious, can flag or even stop it before any damage occurs.</p><p>The machine learning model combined with real-time streaming allows for instant analysis of each incoming transaction. It recognises patterns of potential fraud from its training on a historical dataset containing fraudulent and legitimate transactions. This enables the system to flag suspicious activities or even stop them, thus preventing any potential damage.</p>` }
      ] },
    { number: '161', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>How does the scale of data impact machine learning and real-time streaming systems?</p>`,
          options: [`The larger the data scale, the more complex it is for the system to process and make predictions.`, `The scale of data is not significant in machine learning and real-time streaming systems.`, `The smaller the data scale, the better a machine learning model can learn and predict outcomes.`, `The larger the data scale, the better a machine learning model can learn and predict outcomes.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The larger the data scale, the better a machine learning model can learn and predict outcomes.</p><p>The larger the data scale, the more information a machine learning model can access. This allows it to better learn and predict outcomes. Additionally, real-time streaming of data allows for instant decision making as events unfold, providing a significant advantage for industries requiring quick responses.</p>` }
      ] },
    { number: '162', marks: 1, layout: 0, section: 'Impact of Data Scale',
      items: [
        { type: 'mcq',
          question: `<p>How does the scale of data affect the accuracy and capabilities of a machine learning system?</p>`,
          options: [`A larger scale of data decreases the system's accuracy, but increases its capabilities.`, `A larger scale of data increases the system's accuracy and capabilities.`, `The scale of data has no impact on the accuracy or capabilities of the system.`, `A smaller scale of data increases the system's accuracy and capabilities.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A larger scale of data increases the system's accuracy and capabilities.</p><p>As the scale of data increases, machine learning systems can leverage more information to enhance their accuracy and capabilities. More data means more examples to learn from.</p>` }
      ] },
    // ---------------- Blockchain Technology ----------------
    { number: '163', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the benefits of using blockchain technology in data-driven systems?</p>`,
          options: [`Improved security, reduced efficiency, and trust in different party transactions`, `Improved security, increased efficiency, and trust in different party transactions`, `Decreased security, increased efficiency, and suspicion in different party transactions`, `Reduced security, increased efficiency, and trust in same party transactions`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Improved security, increased efficiency, and trust in different party transactions</p><p>Blockchain technology offers improved security through encryption and immutability, increased efficiency by removing the need for intermediaries, and fosters trust among parties through transparency and verifiability of transactions.</p>` }
      ] },
    { number: '164', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What are two significant issues blockchain technology faces?</p>`,
          options: [`Privacy and cost`, `Energy consumption and scalability`, `Speed and privacy`, `Cost and speed`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Energy consumption and scalability</p><p>Energy consumption of Proof of Work systems is a well-known issue, particularly due to Bitcoin mining's massive computational power requirement. Furthermore, scalability is another challenge for blockchain networks since they struggle to handle the same transaction volume as traditional systems like Visa or Mastercard.</p>` }
      ] },
    { number: '165', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What does a block consist of in a blockchain?</p>`,
          options: [`Data, hash, and previous block hash`, `Data, hash, and future block hash`, `Hash, previous block hash, and miner's ID`, `Data, hash, and node's information`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data, hash, and previous block hash</p><p>Each block in a blockchain includes transaction details (Data), a unique identifier generated by a cryptographic function (Hash), and the Hash of the previous block to keep the chain intact.</p>` }
      ] },
    { number: '166', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the primary way in which blockchain technology ensures data integrity?</p>`,
          options: [`By using a central authority to verify all transactions.`, `Through the use of cryptographic hashing and a network of computers called nodes.`, `Because each block links to the previous one.`, `Through the use of consensus algorithms like Proof of Work.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Through the use of cryptographic hashing and a network of computers called nodes.</p><p>Blockchain technology ensures data integrity primarily through the use of cryptographic hashing and a network of computers (nodes). This makes all recorded transactions secure, transparent, and tamper-proof due to its decentralised nature and distinct hashing system.</p>` }
      ] },
    { number: '167', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What does blockchain technology bring to the processes that traditionally involve intermediaries?</p>`,
          options: [`It introduces more intermediaries for better verification.`, `It centralizes verification into a single authority.`, `It eliminates the need for middlemen, reducing transaction times and costs.`, `It increases the time for transaction verification to ensure accuracy.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It eliminates the need for middlemen, reducing transaction times and costs.</p><p>Blockchain technology's decentralized verification eliminates the need for intermediaries, thereby reducing transaction times and costs.</p>` }
      ] },
    { number: '168', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What challenges currently face blockchain technology?</p>`,
          options: [`High energy consumption and scalability issues`, `Emphasis on data management across various sectors`, `Struggle to handle volume of transactions compared to Visa or Mastercard`, `Both A and C`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Both A and C</p><p>Blockchain technology currently deals with high energy consumption, particularly due to Proof of Work systems, and scalability issues, such as struggling to handle a high volume of transactions like traditional systems.</p>` }
      ] },
    { number: '169', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What is the function of a cryptographic hash in a blockchain?</p>`,
          options: [`It verifies and validates each transaction before it gets added to the blockchain.`, `It adds the next block based on the number of coins they hold.`, `It turns input data into a fixed-length string of characters.`, `It links each block to the previous one.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It turns input data into a fixed-length string of characters.</p><p>A cryptographic hash is a mathematical function that converts input data into a fixed-length string of characters, regardless of the input's size. Even a small change to the input data will result in a significantly different hash.</p>` }
      ] },
    { number: '170', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>How is the integrity of the blockchain ensured when a block of data is tampered with?</p>`,
          options: [`The hashing of the tampered block wouldn't match the next block, breaking the chain.`, `The tampered block gets deleted automatically.`, `The blockchain sends a warning message to all nodes about the tampered block.`, `All nodes in the network reject the tampered block.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The hashing of the tampered block wouldn't match the next block, breaking the chain.</p><p>If someone tries to change the data in a block, the cryptographic hash changes, making it immediately apparent that tampering has occurred and breaks the link with the next block. This ensures the integrity of the blockchain system.</p>` }
      ] },
    { number: '171', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of nodes in a blockchain network?</p>`,
          options: [`To add new blocks to the blockchain`, `To solve complex mathematical problems for Proof of Work`, `To verify and validate each transaction before it is added to the blockchain`, `To generate a unique hash for each block`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To verify and validate each transaction before it is added to the blockchain</p><p>Nodes in a blockchain network maintain copies of the blockchain ledger and verify and validate each transaction before it is added to the blockchain. This adds a layer of security by ensuring every transaction is legitimate.</p>` }
      ] },
    { number: '172', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>How does blockchain improve the efficiency of transactions in industries like finance?</p>`,
          options: [`By adding intermediaries to verify transactions.`, `By decentralizing the verification process, eliminating the need for intermediaries.`, `By encrypting the transactions, making them harder to manipulate.`, `By increasing the time taken for transactions to settle.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By decentralizing the verification process, eliminating the need for intermediaries.</p><p>Blockchain technology streamlines processes by decentralizing verification. This eliminates the need for middlemen, thereby reducing transaction times and lowering costs, leading to increased efficiency in industries like finance.</p>` }
      ] },
    { number: '173', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>What are the main challenges associated with proof of work systems in blockchain and how are they being addressed?</p>`,
          options: [`High energy consumption and scalability issues; being addressed by increasing computational power and network capacity.`, `Low energy consumption and scalability issues; being addressed by decreasing computational power and network capacity.`, `Scalability issues and transaction speed; being addressed by innovations like Layer 2 solutions and switching to Proof of Stake.`, `Privacy issues and data loss; being addressed by improving encryption methods and backup systems.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Scalability issues and transaction speed; being addressed by innovations like Layer 2 solutions and switching to Proof of Stake.</p><p>The main challenges with proof of work systems in blockchain are high energy consumption and scalability issues. Innovations such as Layer 2 solutions and the shift from Proof of Work to Proof of Stake are being used to address these challenges.</p>` }
      ] },
    { number: '174', marks: 1, layout: 0, section: 'Blockchain Technology',
      items: [
        { type: 'mcq',
          question: `<p>How is a new transaction added to the blockchain?</p>`,
          options: [`The user initiates a transaction that is broadcasted to the network of nodes, nodes validate the transaction, the validated transaction is added to a block which links to the previous block, and the updated blockchain is shared across all nodes.`, `The user initiates a transaction that is directly added to a block which links to the previous block, and the updated blockchain is shared across all nodes.`, `The user initiates a transaction that is broadcasted to the network of nodes, nodes directly add the transaction to a block and the updated blockchain is shared across all nodes.`, `The user directly adds a transaction to a block which links to the previous block, and the updated blockchain is shared across all nodes.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The user initiates a transaction that is broadcasted to the network of nodes, nodes validate the transaction, the validated transaction is added to a block which links to the previous block, and the updated blockchain is shared across all nodes.</p><p>In blockchain, a new transaction is added by the user initiating the transaction, which is then broadcasted to the network of nodes. Nodes validate the transaction using a consensus algorithm, then the validated transaction is added to a block which links to the previous block. The entire blockchain is then updated and shared across all nodes.</p>` }
      ] },
    // ---------------- Blockchain Voting & Identities ----------------
    { number: '175', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What challenges does blockchain for voting face?</p>`,
          options: [`Scalability issues due to the increasing number of voters.`, `Privacy concerns regarding voter identities being linked to their votes.`, `Limited accessibility due to technological constraints among citizens.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>Blockchain faces several challenges if used for voting, including being able to scale to the demands of the voting population, ensuring voter privacy while maintaining transparency, and ensuring the system is user-friendly for all citizens.</p>` }
      ] },
    { number: '176', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What are some advantages of blockchain-based identities?</p>`,
          options: [`Greater security and control over personal information`, `Increased risk of identity theft`, `It takes a longer time to verify documents`, `They are difficult to create and manage`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Greater security and control over personal information</p><p>Blockchain-based identities can provide greater security as users have control over their personal information, reducing the risks of identity theft. They also enhance efficiency as verification processes can be done instantly.</p>` }
      ] },
    { number: '177', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of a blockchain-based identity management system?</p>`,
          options: [`It is stored in a centralised database`, `It requires a third party organisation to manage it`, `It allows individuals to have control over their personal information`, `It requires a separate verification for each service`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows individuals to have control over their personal information</p><p>Blockchain-based identity management systems allow for self-sovereign identity, meaning individuals have control over what information to share and with whom, enhancing privacy and security.</p>` }
      ] },
    { number: '178', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the challenges that blockchain-based voting systems need to address for widespread adoption?</p>`,
          options: [`Reducing transaction costs`, `Implementing cryptocurrency rewards for voters`, `Creating an easily understandable and simple user interface`, `Enabling real-time voting results`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Creating an easily understandable and simple user interface</p><p>For widespread adoption, blockchain voting systems need to be user-friendly and accessible to all citizens even those with limited digital knowledge, as highlighted in the text.</p>` }
      ] },
    { number: '179', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What does immutability in a blockchain-based voting system ensure?</p>`,
          options: [`That votes can be altered without consequence`, `That votes can be retracted at any time`, `That once a vote is recorded, it is final`, `That only certain people can view the recorded votes`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — That once a vote is recorded, it is final</p><p>Immutability in the context of a blockchain-based voting system means that once a vote is stored, it cannot be modified. This ensures transparency, security, and trust in the validity of the votes.</p>` }
      ] },
    { number: '180', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What major issue could potentially limit the adoption of blockchain-based identities?</p>`,
          options: [`lack of user knowledge of blockchain technology`, `the speed of verification processes`, `increased risk of identity theft`, `Allowing users to control their personal information`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — lack of user knowledge of blockchain technology</p><p>As per the text, creating and managing a blockchain identity requires knowledge of blockchain technology, which not all users may possess. Therefore, the lack of knowledge can limit the adoption of this technology.</p>` }
      ] },
    { number: '181', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What does the concept of self-sovereign identity in blockchain-based identity management imply?</p>`,
          options: [`Individuals have no control over their personal information.`, `Third-party organisations manage personal information of individuals.`, `Individuals have control over their personal information and can choose what information to share and with whom.`, `All personal information is publicly available and can be accessed by anyone.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Individuals have control over their personal information and can choose what information to share and with whom.</p><p>Self-sovereign identity, a key concept in blockchain-based identity management, implies that individuals have control over their personal information. They can decide what details to share and with whom, enhancing privacy and security.</p>` }
      ] },
    { number: '182', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary concern for blockchain-based identities?</p>`,
          options: [`Risk of identity theft`, `Difficulty in verifying academic qualifications`, `Government and organizational regulation`, `The risk of misuse due to too much personal information being shared`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Government and organizational regulation</p><p>Government and organizational regulation is a primary concern because clear policies need to be developed for recognizing and using blockchain identities. Without such regulations, the utility of blockchain identities may be limited.</p>` }
      ] },
    { number: '183', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What are the key benefits of a blockchain-based voting system?</p>`,
          options: [`Security, Transparency, and Immutability`, `Speed, Transparency, and Openness`, `Anonymity, Cheapness, and Speed`, `Immutability, Speed, and Openness`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Security, Transparency, and Immutability</p><p>A blockchain-based voting system provides security by recording votes in an immutable ledger, mitigating risks of tampering and ensuring the integrity of the election. It also offers transparency as everyone with permission can verify that votes have been counted correctly without infringing voter privacy. Immutability refers to the fact that once a vote is recorded, it is final, preventing the manipulation of results after the fact.</p>` }
      ] },
    { number: '184', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What is the significance of decentralisation in blockchain-based identity management?</p>`,
          options: [`It ensures that there is a central point of failure`, `It exposes the data to unauthorized access or alteration`, `It adds resilience to attacks since data is stored across multiple nodes`, `It restricts the portability of the identities`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It adds resilience to attacks since data is stored across multiple nodes</p><p>Decentralisation equips the blockchain-based identities with resilience against attacks by storing data across multiple nodes. It also preserves data from unauthorized access or alteration since changing any data would require gaining control over the majority of the nodes.</p>` }
      ] },
    { number: '185', marks: 1, layout: 0, section: 'Blockchain Voting & Identities',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the factors that could potentially cause delays in blockchain-based voting systems as voter counts increase?</p>`,
          options: [`Scalability`, `Accessibility`, `Privacy`, `Transparency`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Scalability</p><p>As the number of voters increases, blockchain systems may struggle to handle the volume of transactions, leading to delays. This is related to the scalability issue.</p>` }
      ] },
    // ---------------- Exploring Data Bias & Its Impact ----------------
    { number: '186', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What could be the risks of bias present in data for analysis and decision making?</p>`,
          options: [`Damages reputation.`, `Misinformed decisions.`, `Unfair outcomes.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>Bias in data can lead to damages in reputation, misinformed transactions, and unfair results.</p>` }
      ] },
    { number: '187', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What is one strategy for addressing data bias during the data collection phase?</p>`,
          options: [`Implement bias detection tools during data processing and analysis`, `Frequently review and test machine learning models through algorithm auditing`, `Collect data from a diverse group that accurately reflects the entire population of interest`, `Add diversity to training datasets through data augmentation`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Collect data from a diverse group that accurately reflects the entire population of interest</p><p>Representative Sampling, which involves collecting data from a diverse group that accurately reflects the entire population of interest, is a strategy to address data bias during the data collection phase.</p>` }
      ] },
    { number: '188', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What is the consequence of Sampling Bias in data analysis?</p>`,
          options: [`Seeking out data that confirms existing beliefs`, `Introducing errors during data collection`, `Training machine learning models on biased datasets`, `Resulting in skewed results that do not accurately reflect reality`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Resulting in skewed results that do not accurately reflect reality</p><p>Sampling Bias often happens when the sample selection is not random or inclusive enough to cover all subgroups within the population. This results in skewed results that do not accurately reflect the reality.</p>` }
      ] },
    { number: '189', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>Which type of bias stems from the data collection methods or instruments creating errors in the data?</p>`,
          options: [`Sampling Bias`, `Confirmation Bias`, `Algorithmic Bias`, `Measurement Bias`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Measurement Bias</p><p>Measurement Bias occurs when there are errors introduced due to the methods of data collection or the tools used for collection.</p>` }
      ] },
    { number: '190', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What is an effective method to reduce bias in a facial recognition system's training dataset?</p>`,
          options: [`Implement bias detection tools in data processing and analysis`, `Include responses from various demographic groups for representative sampling`, `Add more training images representing underrepresented groups for data augmentation`, `Regularly audit the machine learning models`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Add more training images representing underrepresented groups for data augmentation</p><p>Adding more training images from underrepresented groups increases diversity in the dataset, thereby reducing biases, especially in facial recognition systems.</p>` }
      ] },
    { number: '191', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What are some potential consequences of biases in data in critical fields like healthcare or law enforcement?</p>`,
          options: [`It may result in misdiagnoses or unjustified penalties for individuals from underrepresented demographic groups.`, `It can lead to improvements in product design and personalization of services.`, `It encourages the collection of more data from different sources.`, `It facilitates accurate and fair decision-making processes.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It may result in misdiagnoses or unjustified penalties for individuals from underrepresented demographic groups.</p><p>Biases in healthcare data can lead to misdiagnoses for underrepresented groups. Similarly, in law enforcement, biases may result in unfair outcomes for people from specific backgrounds. Therefore, it is critical to identify and address data biases to ensure fair and equitable decision-making.</p>` }
      ] },
    { number: '192', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What tool can be used during data processing and analysis to highlight potential areas of bias?</p>`,
          options: [`Algorithm auditing`, `Representative Sampling`, `Data Augmentation`, `Bias Detection Tools`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Bias Detection Tools</p><p>Bias Detection Tools during data processing and analysis can highlight potential areas of bias, allowing adjustments to the data or models accordingly.</p>` }
      ] },
    { number: '193', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What is confirmation bias in data analysis?</p>`,
          options: [`When data collected is not representative of the entire population.`, `When machine learning models are trained on biased datasets.`, `When data collection methods or instruments introduce errors.`, `When data that confirms existing beliefs is sought after, while contradicting information is disregarded.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — When data that confirms existing beliefs is sought after, while contradicting information is disregarded.</p><p>Confirmation bias in data analysis involves seeking out data that supports existing beliefs while ignoring data that contradicts them. This can lead to incorrect conclusions and poorly informed decisions.</p>` }
      ] },
    { number: '194', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What types of outcomes can result from biases present in data?</p>`,
          options: [`More accurate outcomes.`, `More fair outcomes.`, `Misinformed decisions, unfair outcomes, and damage to reputation.`, `Improved trust among users.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Misinformed decisions, unfair outcomes, and damage to reputation.</p><p>Biases in data can lead to misinformed decisions, unfair outcomes, and damage to reputation, as the analysis and resulting decisions are skewed based on the biases. It can lead to situations where certain groups or types of information are overlooked or unfairly treated.</p>` }
      ] },
    { number: '195', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>Which type of bias results from disregarding data that contradicts existing beliefs while focusing on data that supports them?</p>`,
          options: [`Sampling Bias`, `Confirmation Bias`, `Algorithmic Bias`, `Measurement Bias`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Confirmation Bias</p><p>Confirmation bias involves seeking out data that confirms existing beliefs while disregarding data that contradicts them, potentially leading to incorrect conclusions.</p>` }
      ] },
    { number: '196', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>What is one strategy to mitigate sampling bias when collecting data for a new mobile app?</p>`,
          options: [`Collect data only from a specific age group.`, `Ensure responses from various age groups, genders, geographic locations, and socioeconomic backgrounds.`, `Include only responses from certain geographic locations.`, `Give preference to high-income respondents.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Ensure responses from various age groups, genders, geographic locations, and socioeconomic backgrounds.</p><p>Sampling bias can be mitigated by ensuring that the data is collected from a diverse group that accurately reflects the entire population of interest. This means including responses from various age groups, genders, geographic locations, and socioeconomic backgrounds.</p>` }
      ] },
    { number: '197', marks: 1, layout: 0, section: 'Exploring Data Bias & Its Impact',
      items: [
        { type: 'mcq',
          question: `<p>How can bias in data potentially impact software development, particularly in relation to user feedback and added features?</p>`,
          options: [`It could result in adding features that only a small, non-representative segment of users prefers.`, `It could result in a more streamlined and efficient software development process.`, `It could result in a larger audience adopting the software.`, `It does not have any significant impact on software development.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It could result in adding features that only a small, non-representative segment of users prefers.</p><p>When user feedback is biased, it leads developers to include features that only appeal to a small, unrepresentative segment of the user population. This could limit the software's appeal and may not adequately cater to a broader audience.</p>` }
      ] },
    // ---------------- Errors, Uncertainty & Limitations ----------------
    { number: '198', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>What are the two main types of errors in data analysis?</p>`,
          options: [`Accidental errors and deliberate errors`, `Systematic errors and random errors`, `Large-scale errors and small-scale errors`, `Internal errors and external errors`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Systematic errors and random errors</p><p>Systematic errors are consistent and predictable biases, often caused by flawed measurement instruments or processes, while random errors are unpredictable variations that occur due to chance.</p>` }
      ] },
    { number: '199', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>What factors may contribute to the limitations of data analysis?</p>`,
          options: [`Quality of data and the method of data collection.`, `The geographical location of the data.`, `The personal opinions of the team members analysing the data.`, `The type of software used for data analysis.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Quality of data and the method of data collection.</p><p>Limitations can arise from several factors such as the quality of the collected data, the methods employed for data collection, or the specific context of the analysis. These factors affect the reliability, completeness, or applicability of the data analysis.</p>` }
      ] },
    { number: '200', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>Why is it crucial for analysts to account for errors, uncertainty, and limitations in their data analysis?</p>`,
          options: [`To ensure that only error-free data is used in analysis.`, `To enhance the complexity of the data analysis.`, `To ensure transparency, enabling users of the data to make informed decisions based on the results.`, `To reduce the validity of the analysis.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To ensure transparency, enabling users of the data to make informed decisions based on the results.</p><p>When uncertainties and possible sources of errors are accounted for and disclosed, those who use the data can make decisions knowing the limitations and potential inaccuracies of the results.</p>` }
      ] },
    { number: '201', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>What does uncertainty refer to in the context of data analysis?</p>`,
          options: [`Limitations in knowing the true value due to imprecise measurements`, `Perfect measuring and data collection method`, `The difference between two recorded values`, `The exact final result of an analysis`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Limitations in knowing the true value due to imprecise measurements</p><p>Uncertainty in data analysis refers to the inherent limitations in knowing the exact value or outcome of a measurement due to the imprecisions and inaccuracies in the measuring process.</p>` }
      ] },
    { number: '202', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>What type of error is a deviation from accuracy due to consistent and predictable biases in data collection or analysis?</p>`,
          options: [`Random Error`, `Unpredictable Error`, `Systematic Error`, `Irregular Error`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Systematic Error</p><p>Systematic errors occur due to consistent and predictable biases in data collection or analysis, often due to flawed measurement instruments or processes that consistently skew the data.</p>` }
      ] },
    { number: '203', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>Why is it necessary for analysts to provide information about possible sources of errors and the uncertainties involved in their measurements or predictions?</p>`,
          options: [`To ensure users understand the potential limitations of data.`, `To make the users confused.`, `To make the data look less authoritative.`, `To make the data analysis process longer.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To ensure users understand the potential limitations of data.</p><p>Providing information about the possible sources of errors and the uncertainties involved in measurements or predictions allows users to have a comprehensive understanding of the data, its limitations, and it also helps in making informed decisions.</p>` }
      ] },
    { number: '204', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>What is meant by the uncertainty range in data analysis?</p>`,
          options: [`It refers to the upper and lower limits within which the exact value of a measurement may lie.`, `It represents the numerical value of the data recorded.`, `It is the location where data was collected.`, `It refers to the accuracy of the data collection device.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It refers to the upper and lower limits within which the exact value of a measurement may lie.</p><p>In data analysis, the uncertainty range is pivotal as it gives the limitations within which the true value of a measurement might lie, contributing to understanding how much confidence one can have in the result. This is due to limitations in the precision and accuracy of any measurement or data collection method.</p>` }
      ] },
    { number: '205', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not a limitation in data analysis?</p>`,
          options: [`Low data quality due to inconsistent data formats`, `Sampling limitations due to biased populations`, `Limitations due to non-usage of machine learning algorithms`, `Technological limitations due to lack of computational power`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Limitations due to non-usage of machine learning algorithms</p><p>Not being able to use machine learning algorithms is not a limitation in itself, as there are other methods for data analysis. However, lack of computational resources to run these algorithms, if required, would be a technological limitation.</p>` }
      ] },
    { number: '206', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>In the field of data analysis, what methods are often used to compensate for errors and limitations?</p>`,
          options: [`Confidence intervals and error analysis`, `Increased sample size only`, `Reduced data collection`, `Relying only on the mean results`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Confidence intervals and error analysis</p><p>Confidence intervals provide a range within which the true value is expected to lie and error analysis helps understand the impact of errors on overall data reliability. These are statistical methods used to mitigate limitations and account for uncertainty in data analysis.</p>` }
      ] },
    { number: '207', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>In the context of data analysis, why is uncertainty an important consideration when interpreting and comparing measurements?</p>`,
          options: [`Uncertainty highlights the limitations of data collection methods.`, `Uncertainty can inflate the accuracy and precision of measurements.`, `Uncertainty can lead to definitive conclusions.`, `Uncertainty reduces the significance of the differences in measurements.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Uncertainty highlights the limitations of data collection methods.</p><p>Uncertainty indicates the innate limitations of the data collection techniques and tools used. It shows the potential range within which the true value might fall. This is especially important when comparing data, as observed differences may simply be within the uncertainty range, thus not allowing definitive conclusions.</p>` }
      ] },
    { number: '208', marks: 1, layout: 0, section: 'Errors, Uncertainty & Limitations',
      items: [
        { type: 'mcq',
          question: `<p>In the context of data analysis, what makes random errors distinct from systematic errors?</p>`,
          options: [`Random errors are due to consistent biases, while systematic errors are unpredictable variations.`, `Random errors occur due to flawed measuring instruments, while systematic errors are due to chance.`, `Random errors are unpredictable variations that occur due to chance, while systematic errors are consistently skewed data.`, `Random errors and systematic errors are the same in how they affect data accuracy.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Random errors are unpredictable variations that occur due to chance, while systematic errors are consistently skewed data.</p><p>Random errors manifest as unpredictable variations and can happen by chance, making their influence on the results difficult to predict. Systematic errors, on the other hand, are consistent and predictable deviations in the data, often due to flawed processes or equipment.</p>` }
      ] },
    // ---------------- Data Sources: Raw vs Processed Data ----------------
    { number: '209', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is raw data?</p>`,
          options: [`A series of processed and cleaned data ready for analysis`, `The processed results from a data source like a survey`, `The original, unprocessed data collected from various sources`, `The final, organized results from data analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The original, unprocessed data collected from various sources</p><p>Raw data is the original, unprocessed data collected from different sources such as sensors, surveys, or social media, and it often contains errors, redundancies, and inconsistencies.</p>` }
      ] },
    { number: '210', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What challenges are involved in processing data?</p>`,
          options: [`Determining what values to remove or impute`, `Making decisions about normalising or aggregating data`, `Accounting for the biases of the analyst performing the processing`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>All the options are challenges faced during data processing. Determining what values to remove or impute, making decisions about normalising or aggregating data, and accounting for the biases of the analyst performing the processing are all significant challenges.</p>` }
      ] },
    { number: '211', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is processed data?</p>`,
          options: [`It refers to unfiltered data that is not ready for analysis.`, `Processed data is the information that has been cleaned, formatted, and unified, ready for interpretation and analysis.`, `It is the original form of data which is not organised.`, `The data that has not been modified or cleaned.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Processed data is the information that has been cleaned, formatted, and unified, ready for interpretation and analysis.</p><p>Processed data has been cleaned, filtered, organized, and transformed into a format which is ready for analysis, unlike raw data which is inconsistently formatted and may contain errors and missing values.</p>` }
      ] },
    { number: '212', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the main advantage of using raw data when conducting an analysis?</p>`,
          options: [`It provides a foundation for meaningful analysis`, `Analysts can directly identify trends and patterns`, `Raw data shows the original state of information and can help identify potential errors and inconsistencies`, `Using raw data saves time in the data analysis process`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Raw data shows the original state of information and can help identify potential errors and inconsistencies</p><p>Raw data offers transparency, showing the original state of the information. Analysts use it to understand what has been collected, thereby, helping them identify potential errors and inconsistencies.</p>` }
      ] },
    { number: '213', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is one potential disadvantage when using processed data?</p>`,
          options: [`It becomes difficult to visualize`, `It can introduce biases`, `It is more difficult to interpret`, `It has more outliers`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can introduce biases</p><p>When processing data, incorrect assumptions or inaccuracies during cleaning or transformation can introduce biases, potentially distorting the overall analysis.</p>` }
      ] },
    { number: '214', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What could the temperature value of -999 in a raw dataset potentially indicate?</p>`,
          options: [`A particularly cold temperature reading`, `An error or placeholder for missing measurement`, `A particularly high temperature reading`, `A normal temperature reading`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — An error or placeholder for missing measurement</p><p>In the context of raw datasets, unusual numerical values like -999 can often indicate an error or serve as a placeholder for missing measurement. This is an example of the inconsistencies or errors that can be found in raw data.</p>` }
      ] },
    { number: '215', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What factors can significantly influence data processing outcomes?</p>`,
          options: [`The decision whether to delete or impute missing rows in a dataset`, `The choice of normalising or aggregating data`, `The biases of the analyst conducting the processing`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>All these factors such as treatment of missing data, data normalisation or aggregation decision, and analyst's personal biases contribute significantly to the outcome of data processing.</p>` }
      ] },
    { number: '216', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>Why is it essential to transform raw data to processed data, especially in fields like healthcare and social media?</p>`,
          options: [`To shard data across different servers`, `To pack data with additional meta information`, `To reduce the cost of storage`, `To correct errors, normalize formats and derive meaningful insights by standardizing measurements and categorizing content`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To correct errors, normalize formats and derive meaningful insights by standardizing measurements and categorizing content</p><p>Processing data involves cleaning and organizing data, which facilitates trend analysis, pattern identification, and drawing insights. In fields such as healthcare and social media, this is important as raw data can contain inaccuracies. After processing, it becomes easier to derive meaningful insight like identifying health trends or determining user preferences.</p>` }
      ] },
    { number: '217', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What role does raw and processed data play in data analysis and software engineering?</p>`,
          options: [`Raw data gives an unaltered and complete picture while processed data is clean and suitable for analysis.`, `Raw data is used for general observations while processed data is used for complex calculations.`, `Raw data is preferred for its authenticity and processed data is usually avoided as it is unreliable.`, `Both raw and processed data have no significance and are equally unimportant.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Raw data gives an unaltered and complete picture while processed data is clean and suitable for analysis.</p><p>Raw data represents the original, untouched information while processed data is a modified version of the raw data, cleaned and transformed to enable easier analysis.</p>` }
      ] },
    { number: '218', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is one potential consequence of inaccurately calculated imputed values in data processing?</p>`,
          options: [`They can make the data easier to interpret.`, `They can help to reveal hidden patterns in the data.`, `They can distort the overall analysis.`, `They can reduce the likelihood of errors in the data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They can distort the overall analysis.</p><p>Incorrectly imputed values in data processing can distort the overall analysis, potentially leading to inaccurate conclusions.</p>` }
      ] },
    { number: '219', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What can be a potential disadvantage of raw data?</p>`,
          options: [`It contains maximum possible detail.`, `It is unbiased.`, `It might contain errors, redundancies, and inconsistencies.`, `It is easy to digest.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It might contain errors, redundancies, and inconsistencies.</p><p>Raw data is often messy and may contain errors, redundancies, and inconsistencies that require thorough cleaning before the data can be effectively utilized.</p>` }
      ] },
    { number: '220', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What might be the impact of careful consideration when processing data?</p>`,
          options: [`Decisions become more objective`, `It can reduce the analyst bias that can affect data results`, `Data processing becomes faster`, `Raw data is automatically transformed to processed data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can reduce the analyst bias that can affect data results</p><p>Treatment of missing data, normalization and aggregation of data are often influenced by the biases of the analyst. Thus, a thoughtful methodology can reduce these biases, which in turn influences the conclusions drawn from the data.</p>` }
      ] },
    { number: '221', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>What is one possible method of processing raw data with missing values?</p>`,
          options: [`Replacing the missing values with a "N/A" placeholder`, `Removing all data points that entail the missing values`, `Imputing the missing values with derived or average values`, `Ignoring the missing values during analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Imputing the missing values with derived or average values</p><p>The raw data set example shows a missing value being handled by imputing it with an average value, making it an example of data processing.</p>` }
      ] },
    { number: '222', marks: 1, layout: 0, section: 'Data Sources: Raw vs Processed Data',
      items: [
        { type: 'mcq',
          question: `<p>Why are both raw data and processed data important in data analysis and software engineering?</p>`,
          options: [`Because raw data provides a complete picture whereas processed data is suitable for analysis.`, `Because raw data is useful for storing whereas processed data is useful for reporting.`, `Because raw data is difficult to manage whereas processed data is easy to manipulate.`, `Because raw data is not reliable whereas processed data is free from errors.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Because raw data provides a complete picture whereas processed data is suitable for analysis.</p><p>In data analysis, raw data provides the original, unaltered information, while processed data, which is cleaned and transformed, is suitable for gaining insights and making informed decisions. The importance of both types of data is highlighted in fields like software engineering.</p>` }
      ] },
    // ---------------- Data Legislation & Protection ----------------
    { number: '223', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What are the main responsibilities of Data Protection Authorities (DPAs)?</p>`,
          options: [`Ensuring organizations follow data protection laws and handling complaints about data misuse.`, `Conducting investigations into data breaches and enforcing penalties for non-compliance with data laws.`, `Providing organizations and individuals with information and guidance on data protection regulations.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>The main responsibilities of DPAs include monitoring compliance with data protection laws, responding to complaints about data misuse, investigating data breaches, enforcing penalties for non-compliance, and providing guidance and awareness to organizations and individuals. So, the</p>` }
      ] },
    { number: '224', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>Why is data legislation and protection authorities significant for individuals and organisations?</p>`,
          options: [`It encourages individuals to share personal information as they can trust the organisation`, `Ensures sectors like healthcare handle sensitive data carefully`, `Empowers individuals by granting them rights over their data`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Data legislation and protection authorities are important as they build trust which encourages individuals to share personal data, they ensure sensitive data in sectors like healthcare is carefully handled and empower individuals by offering them rights over their data.</p>` }
      ] },
    { number: '225', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of data legislation such as GDPR and CCPA?</p>`,
          options: [`To grant corporations unlimited access to personal data.`, `To regulate how personal data is collected, processed, stored, and shared.`, `To establish a universal standard for data collection methods.`, `To give companies the authority to sell personal data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To regulate how personal data is collected, processed, stored, and shared.</p><p>Data legislation like GDPR and CCPA exist to regulate how organizations handle personal data, ensuring that it is used responsibly and that consumers' rights are respected.</p>` }
      ] },
    { number: '226', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of the Information Commissioner's Office (ICO) in the United Kingdom?</p>`,
          options: [`The ICO is responsible for monitoring drug trials.`, `The ICO is responsible for upholding data protection laws and investigating breaches of data security.`, `The ICO is responsible for regulating telecommunications companies.`, `The ICO is responsible for collecting taxes.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The ICO is responsible for upholding data protection laws and investigating breaches of data security.</p><p>The Information Commissioner's Office (ICO) in the United Kingdom is responsible for ensuring that data protection laws are upheld and investigating breaches of data security.</p>` }
      ] },
    { number: '227', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What is a key principle of GDPR regarding data misuse?</p>`,
          options: [`Data should be sold to third parties.`, `Data must be used for any purpose the organization wishes.`, `Data must be kept for as long as possible.`, `Data must be handled in a way that ensures its security, preventing unauthorized access or misuse.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Data must be handled in a way that ensures its security, preventing unauthorized access or misuse.</p><p>Under GDPR, integrity and confidentiality principle states that Data must be handled in a way that ensures its security, preventing unauthorized access or misuse.</p>` }
      ] },
    { number: '228', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What are the data subject rights considered under data legislation?</p>`,
          options: [`Right to access information, right to be forgotten, right to data portability.`, `Right to data extraction, right to data transfer, right to be notified.`, `Right to data storage, right to data backup, right to be informed.`, `Right to data replication, right to data concealing, right to demand.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Right to access information, right to be forgotten, right to data portability.</p><p>According to data legislation such as GDPR, data subject rights include the right to access information, the right to be forgotten or the right to ask for one's data to be deleted, and the right to data portability.</p>` }
      ] },
    { number: '229', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What must a marketing company do with customer data under data protection laws?</p>`,
          options: [`Use the data for any purpose the company sees fit.`, `Only use the collected data for the purpose agreed upon by the customers.`, `Share the data with other businesses without notifying the customers.`, `Refuse to delete the data if requested by the customers.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Only use the collected data for the purpose agreed upon by the customers.</p><p>Under data protection laws, companies must ensure to use the collected data only for the purpose it was agreed upon by the customers, collect it with proper consent, protect it from unauthorized access, and respect user rights, including the possibility to delete their data.</p>` }
      ] },
    { number: '230', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of the lawfulness, fairness, and transparency principle under GDPR?</p>`,
          options: [`To ensure organisations collect excessive amounts of data for legitimate reasons.`, `To require organisations to disclose the sale of data to third-party advertisers.`, `To mandate organisations to have a legitimate reason for collecting data and to be clear about its use.`, `To restrict organisations from collecting customer information for loyalty programs.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To mandate organisations to have a legitimate reason for collecting data and to be clear about its use.</p><p>The lawfulness, fairness, and transparency principle under GDPR places an obligation on organisations to have a legitimate reason for collecting data and to clearly explain how they intend to use it, thereby promoting transparency.</p>` }
      ] },
    { number: '231', marks: 1, layout: 0, section: 'Data Legislation & Protection',
      items: [
        { type: 'mcq',
          question: `<p>Who enforces data protection laws, providing guidelines, and ensuring compliance in the European context?</p>`,
          options: [`Organisations that collect and process data.`, `Information Commissioner's Office (ICO)`, `Data Protection Authorities (DPAs)`, `The general public`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data Protection Authorities (DPAs)</p><p>Data Protection Authorities (DPAs) are the independent bodies responsible for enforcing data protection laws, providing guidelines, and ensuring compliance in each European country.</p>` }
      ] },
    // ---------------- Data Collection & Handling Legalities ----------------
    { number: '232', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>Why is it essential for software engineers to understand the legal issues related to data collection and handling?</p>`,
          options: [`To ensure that organisations manage data responsibly and prevent misuse.`, `To increase their pay scale.`, `To reduce the effort in data handling.`, `To complete their professional certifications.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To ensure that organisations manage data responsibly and prevent misuse.</p><p>Understanding legal issues related to data handling ensures that organizations manage data responsibly, respect user privacy, which in return helps to prevent misuse.</p>` }
      ] },
    { number: '233', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What were the key takeaways from Google's inadvertent data collection in 2010?</p>`,
          options: [`Organisations can accidentally collect data without legal repercussions.`, `Data collection does not have to be transparent.`, `Unintentional data collection still subjects organisations to data protection laws and a need for transparency.`, `Companies are not accountable when data collection occurs unintentionally.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Unintentional data collection still subjects organisations to data protection laws and a need for transparency.</p><p>As shown by Google's case, even accidental or unintended data collection is subject to data protection laws. Google faced criticism for its lack of transparency about how data was being collected. Thus, organisations must be transparent about what data they are gathering and why, and are accountable, even when the data collection is unintentional.</p>` }
      ] },
    { number: '234', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What were the consequences of the 2018 British Airways data breach, according to the Information Commissioner’s Office (ICO)?</p>`,
          options: [`British Airways was fined £20 million by the ICO.`, `British Airways' security measures were found to be sufficient.`, `British Airways failed to notify affected individuals and data protection authorities within 72 hours of discovering the breach.`, `Personal and financial data of around 500,000 customers were not compromised.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — British Airways was fined £20 million by the ICO.</p><p>After an investigation into the breach, the ICO found that British Airways had insufficient security measures in place, leading to a fine of £20 million. The airline did, however, comply with the GDPR's requirement to notify affected parties within 72 hours.</p>` }
      ] },
    { number: '235', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What does GDPR require from retail companies regarding customer's personal data, such as email addresses and payment methods?</p>`,
          options: [`Companies must provide an opt-out option for marketing communications.`, `Companies should encrypt personal data.`, `Companies can freely use and store personal data without any restrictions.`, `Companies should ensure all customers are subscribed to marketing communications.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Companies should encrypt personal data.</p><p>GDPR's data security requirements stipulate that personal data, such as email addresses and payment methods, should be encrypted.</p>` }
      ] },
    { number: '236', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What type of information was unintentionally gathered by Google's Street View program in 2010?</p>`,
          options: [`Emails, passwords, and browsing history.`, `Personal photos and video footage.`, `Social security numbers and credit card information.`, `Medical Records and legal documents.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Emails, passwords, and browsing history.</p><p>In 2010, Google unintentionally collected emails, passwords, and browsing history from unsecured Wi-Fi networks through its Street View program.</p>` }
      ] },
    { number: '237', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of laws and regulations in managing data?</p>`,
          options: [`They ensure that organisations handle data irresponsibly`, `They prevent user privacy`, `They ensure that organisations manage data responsibly, respect user privacy, and prevent misuse`, `They allow organisations to misuse data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They ensure that organisations manage data responsibly, respect user privacy, and prevent misuse</p><p>Laws and regulations are meant to ensure responsible data management, respecting user privacy and preventing misuse, not to allow misuse or prevent privacy.</p>` }
      ] },
    { number: '238', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What steps were taken by British Airways after a data breach was discovered in 2018?</p>`,
          options: [`They increased their security measures and notified both the affected individuals and the relevant data protection authorities.`, `They increased their security measures but did not notify the affected individuals or data protection authorities.`, `They did not increase their security measures but did notify the affected individuals and the relevant data protection authorities.`, `They neither increased their security measures nor notified the affected individuals or data protection authorities.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They increased their security measures and notified both the affected individuals and the relevant data protection authorities.</p><p>After the data breach was discovered, British Airways took mitigating actions including enhancing their security measures, and notifying both the affected individuals and the relevant data protection authorities as per GDPR requirements.</p>` }
      ] },
    { number: '239', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What lessons can be learned from the Cambridge Analytica scandal regarding data protection and handling?</p>`,
          options: [`Data should be collected without informed consent`, `More data than necessary should be collected for the purpose`, `Users do not need to be clearly informed about how their data will be used`, `Only data necessary for a specific purpose should be collected and users should be informed about its use`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Only data necessary for a specific purpose should be collected and users should be informed about its use</p><p>The Cambridge Analytica scandal highlighted the importance of data minimisation and transparency, which are core principles of GDPR. These principles require only data necessary for a specific purpose to be collected and that users should be clearly informed about how their data will be used.</p>` }
      ] },
    { number: '240', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What are some of the legal obligations of a hospital concerning medical data according to health data regulations like HIPPA (in the U.S.) and GDPR (in the EU)?</p>`,
          options: [`Hospitals are obligated to share all patient medical records with pharmaceutical companies for research purposes.`, `Hospitals are obligated to keep the patient's medical history public for transparency.`, `Hospitals are obligated to store and protect medical data securely. They must also provide access to patients for their records, correct inaccuracies upon patient's request and notify individuals in case of a data breach.`, `Hospitals are obligated to only record minimum necessary treatment details about patients.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Hospitals are obligated to store and protect medical data securely. They must also provide access to patients for their records, correct inaccuracies upon patient's request and notify individuals in case of a data breach.</p><p>According to health data regulations like HIPAA and GDPR, hospitals must securely store and protect all medical data. They must also allow patients to access their data, rectify inaccuracies, and inform them if the data is compromised.</p>` }
      ] },
    { number: '241', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>Which principle under the General Data Protection Regulation (GDPR) was violated by Cambridge Analytica collecting more data than necessary for the stated purpose?</p>`,
          options: [`Data Minimisation`, `Transparency`, `Simplicity`, `Portability`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data Minimisation</p><p>The Data Minimisation principle of GDPR indicates that only data necessary for a specific purpose should be collected. Cambridge Analytica violated this by collecting more data than necessary for its stated purpose.</p>` }
      ] },
    { number: '242', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of studying real-world case studies related to legalities in data handling for software engineers?</p>`,
          options: [`To understand the implications of data laws and the importance of compliance`, `To explore methods for circumventing data laws`, `To learn about the details of specific data handling incidents only`, `To solely focus on past mistakes and avoid future advancements in data handling`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To understand the implications of data laws and the importance of compliance</p><p>Studying real-world case studies help software engineers understand the implications of data laws and underlines the importance of compliance. It's not meant for circumventing laws or solely focusing on the past.</p>` }
      ] },
    { number: '243', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What were the data protection implications of Google's inadvertent collection of personal data through its Street View program in 2010?</p>`,
          options: [`Only intentional data collection is subject to data protection laws.`, `Companies are responsible for what data they collect, whether intentionally or unintentionally under GDPR.`, `Companies have no accountability for unintentional data collection.`, `Companies do not need to be transparent about what data they are gathering and why.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Companies are responsible for what data they collect, whether intentionally or unintentionally under GDPR.</p><p>The Google case highlights that even unintentional data collection is covered by data protection laws like GDPR, holding companies accountable for all the data they collect, intentional or otherwise. They are also expected to be transparent about their data collection processes.</p>` }
      ] },
    { number: '244', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the legal requirements a retail company must satisfy when handling customer data according to GDPR?</p>`,
          options: [`Must provide employees access to customers' purchase history`, `Must allow customers to opt-out of marketing communications`, `Must make customers' payment methods visible to all employees`, `Must share customers' email addresses with third-party marketing firms`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Must allow customers to opt-out of marketing communications</p><p>According to the CCPA and GDPR, customers should have the right to opt-out of marketing communications. This helps to ensure transparency and safeguard individuals' rights.</p>` }
      ] },
    { number: '245', marks: 1, layout: 0, section: 'Data Collection & Handling Legalities',
      items: [
        { type: 'mcq',
          question: `<p>What were the consequences for British Airways after their data breach in 2018?</p>`,
          options: [`They were commended by ICO for their security measures.`, `They were fined £183 million by the ICO.`, `They faced a reduction in their customer base due to loss of trust.`, `They faced a fine of £20 million, reduced from £183 million due to mitigating actions after the breach was discovered.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They faced a fine of £20 million, reduced from £183 million due to mitigating actions after the breach was discovered.</p><p>After the data breach in 2018, British Airways was investigated by the Information Commissioner’s Office (ICO) and due to inadequate data security measures, they were fined. The fine was initially £183 million but was reduced to £20 million due to mitigating actions that the company took after the breach was discovered.</p>` }
      ] },
    // ---------------- Indigenous Data Sovereignty ----------------
    { number: '246', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What does Indigenous Cultural and Intellectual Property (ICIP) primarily aim to protect?</p>`,
          options: [`The economic interests of pharmaceutical companies`, `Indigenous peoples' traditional knowledge and cultural heritage`, `Global access to indigenous cultural expressions`, `The legal systems of indigenous communities`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Indigenous peoples' traditional knowledge and cultural heritage</p><p>ICIP aims to protect the traditional knowledge and cultural heritage of indigenous communities, ensuring their rights over their cultural and intellectual properties.</p>` }
      ] },
    { number: '247', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What is a crucial consideration for software engineers when handling indigenous data for app development projects?</p>`,
          options: [`Ensuring data is stored in the cloud for easy access`, `Guaranteeing data is shared without restrictions across jurisdictions`, `Handling the data with cultural sensitivity and obtaining free, prior, and informed consent`, `Using the data primarily for commercial gain`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Handling the data with cultural sensitivity and obtaining free, prior, and informed consent</p><p>Indigenous data should be handled with cultural sensitivity and in accordance with the principles of free, prior, and informed consent.</p>` }
      ] },
    { number: '248', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What are the concepts of Indigenous Cultural and Intellectual Property (ICIP) and data sovereignty meant to ensure for indigenous communities?</p>`,
          options: [`Economic development through cultural commodification.`, `Exclusive use of all technological advancements.`, `Protection and management of their cultural heritage and knowledge.`, `Global access to indigenous knowledge without restrictions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Protection and management of their cultural heritage and knowledge.</p><p>ICIP and data sovereignty are intended to allow indigenous communities to protect and manage their cultural heritage and knowledge.</p>` }
      ] },
    { number: '249', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary objective of data sovereignty for indigenous communities?</p>`,
          options: [`To ensure governments control indigenous data.`, `To allow corporations to profit from indigenous data.`, `To provide indigenous communities control over their own data.`, `To make indigenous data freely available to researchers.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To provide indigenous communities control over their own data.</p><p>Data sovereignty aims to provide indigenous communities control over their own data, allowing them to decide how it is collected, accessed, and used.</p>` }
      ] },
    { number: '250', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What is a key component of ensuring data sovereignty for indigenous communities in software engineering practices?</p>`,
          options: [`Storing data solely with international cloud providers`, `Involving communities in the consent process for data usage`, `Sharing all data openly without agreements`, `Using data without community consultation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Involving communities in the consent process for data usage</p><p>Involving communities in the consent process ensures respect for their data sovereignty and allows them to control how their data is used.</p>` }
      ] },
    { number: '251', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>Which practice is essential for ensuring that indigenous communities benefit from the use of their data in technological advancements?</p>`,
          options: [`Data Sharing Agreements`, `Benefit Sharing`, `Storage Location and Security`, `Free, Prior, and Informed Consent (FPIC)`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Benefit Sharing</p><p>Benefit Sharing ensures that communities receive advantages from the use of their data, such as profits or technological advancements.</p>` }
      ] },
    { number: '252', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of Indigenous Cultural and Intellectual Property (ICIP)?</p>`,
          options: [`A textbook on modern biology`, `Traditional knowledge about medicinal plants`, `A digital copy of a scientific research paper`, `A patent owned by a corporation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Traditional knowledge about medicinal plants</p><p>Traditional knowledge about medicinal plants is part of ICIP as it represents cultural knowledge passed down through generations within indigenous communities.</p>` }
      ] },
    { number: '253', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What does data sovereignty enable indigenous communities to decide about their data?</p>`,
          options: [`It allows them to sell their data for profit.`, `It enables them to give governments automatic access to their data.`, `It grants them the authority to protect and manage their data according to their own governance.`, `It forces them to share their data with all researchers equally.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It grants them the authority to protect and manage their data according to their own governance.</p><p>Data sovereignty allows indigenous communities to have authority over their data and manage it as part of their self-determination and governance.</p>` }
      ] },
    { number: '254', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to consider Indigenous Cultural and Intellectual Property (ICIP) and data sovereignty in today's data-driven society?</p>`,
          options: [`To ensure indigenous communities can monetize their cultural heritage.`, `To prevent unauthorized usage of indigenous knowledge and data.`, `To allow government agencies unrestricted access to indigenous information.`, `To create a global database of indigenous cultural artifacts.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To prevent unauthorized usage of indigenous knowledge and data.</p><p>The goal is to prevent unauthorized usage of indigenous knowledge and data, ensuring that it is used with consent and primarily benefits indigenous communities.</p>` }
      ] },
    { number: '255', marks: 1, layout: 0, section: 'Indigenous Data Sovereignty',
      items: [
        { type: 'mcq',
          question: `<p>What is typically required from indigenous communities for the use of their data in software projects?</p>`,
          options: [`Community's prior unawareness`, `Free, prior, and informed consent`, `Minimal information disclosure`, `Mandatory data sharing without consent`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Free, prior, and informed consent</p><p>Indigenous communities must provide free, prior, and informed consent for the use of their data.</p>` }
      ] },
    // ---------------- Influence of Data on Social Behavior ----------------
    { number: '256', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What are the main concerns connected to the use of curated data?</p>`,
          options: [`Elicitation and manipulation of users' data`, `Fear of public's misinformation and undermining democratic process`, `Track of a user's behavior without their actual knowledge`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>The use of curated data raises privacy and ethical concerns as user data are collected without their explicit understanding and could potentially be used for manipulation to serve interests not beneficial to the user.</p>` }
      ] },
    { number: '257', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of curated data within a social media platform?</p>`,
          options: [`To increase user time on the platform by showing personalised content.`, `To allow users to manually pick what content they see.`, `To crunch numbers and prepare detailed reports for stakeholders.`, `To collect and sell users' personal information.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To increase user time on the platform by showing personalised content.</p><p>Social media platforms use curated data, such as users' past behaviour, interests, and demographics, to inform the content they show to each user. The goal is to tailor the experience to individual users to increase the amount of time they spend on the platform.</p>` }
      ] },
    { number: '258', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential positive influence of curated data on social behavior?</p>`,
          options: [`Encourages people to engage in risky activities`, `Spreads misinformation easily`, `Promotes positive social behavior during a public health crisis`, `Control people's voting behavior during elections`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Promotes positive social behavior during a public health crisis</p><p>Curated data, when used properly, like during a public health crisis, can promote positive social behavior by delivering precise and helpful information to the public about safety measures, vaccinations, etc.</p>` }
      ] },
    { number: '259', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the common applications of curated data?</p>`,
          options: [`In healthcare`, `In agriculture`, `In social media`, `In automobile industry`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — In social media</p><p>The text mentions that one of the most common applications of curated data is in social media.</p>` }
      ] },
    { number: '260', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is a key responsibility of software engineers when creating algorithms for curating data?</p>`,
          options: [`Making their code publicly available`, `Ensuring the data used for training the algorithm is diverse`, `Maximising the amount of data collected`, `Making algorithms prioritize trending topics`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Ensuring the data used for training the algorithm is diverse</p><p>One key responsibility software engineers have when creating algorithms for curating data is to ensure the training data is diverse and represents different perspectives. This helps avoid algorithmic bias.</p>` }
      ] },
    { number: '261', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What negative effect could curated data have in the context of a political election?</p>`,
          options: [`It could encourage positive social behaviour.`, `It could help inform people about public health crises.`, `It could contribute to the spread of misinformation and manipulation.`, `It could ensure that important health information reaches the public quickly.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It could contribute to the spread of misinformation and manipulation.</p><p>In the context of a political election, curated data may be selectively used to create a biased narrative that leads to the spread of misinformation and manipulation.</p>` }
      ] },
    { number: '262', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is the consequence of social media algorithms showing users content that aligns with their existing beliefs and interests?</p>`,
          options: [`Users may only be exposed to one side of an issue`, `Users get bored of their feed`, `The content becomes less engaging to the users`, `The users get exposed to a balanced view on all issues`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Users may only be exposed to one side of an issue</p><p>Since algorithms show users content that they are likely to engage with, echo chambers are formed where users are repeatedly shown information that aligns with their existing beliefs and interests. This exposure to one side of an issue can lead to social polarisation and a narrow understanding of global affairs.</p>` }
      ] },
    { number: '263', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What is the essential difference between curated data and raw data?</p>`,
          options: [`Curated data is collected randomly, while raw data is selectively collected.`, `Curated data is organized and ready for interpretation, while raw data often requires significant analysis.`, `Raw data is used for personalized recommendations, but curated data is not.`, `Curated data is not suitable for visualizations, unlike raw data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Curated data is organized and ready for interpretation, while raw data often requires significant analysis.</p><p>Curated data is deliberately selected, processed, and organized, making it ready for interpretation by users. On the other hand, raw data is often unorganized and requires significant analysis.</p>` }
      ] },
    { number: '264', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>Why do ethical concerns arise in relation to curated data?</p>`,
          options: [`Because curated data can potentially exclude minor groups.`, `Because the use of curated data can manipulate users' views and behaviors.`, `Because platforms need to collect large amounts of curated data.`, `Because platforms fail to secure the users' curated data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Because the use of curated data can manipulate users' views and behaviors.</p><p>Ethical concerns arise when curated data is used to manipulate users in ways that may not be in their best interests, such as showing harmful ads to vulnerable groups or using misleading information for political campaigns. This manipulation can be harmful and undermine democratic processes.</p>` }
      ] },
    { number: '265', marks: 1, layout: 0, section: 'Influence of Data on Social Behavior',
      items: [
        { type: 'mcq',
          question: `<p>What could be the impact of an algorithm continuously curating content based on past behavior without introducing new categories?</p>`,
          options: [`The user might end up exploring many topics of interest.`, `The user may be in an echo chamber only encountering a single category of data.`, `Diverse content is more frequently recommended to the user.`, `The algorithm becomes less efficient in curating user data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The user may be in an echo chamber only encountering a single category of data.</p><p>If an algorithm continuously curates content based on a user's past behaviour without introducing new categories, it might lead the user into an echo chamber. This means the user is only encountering a single category of posts, potentially missing out on other important topics.</p>` }
      ] },
    // ---------------- Visualising Data ----------------
    { number: '266', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>When tracking sales growth over time, which type of visual would be most ideal?</p>`,
          options: [`Scatter Plot`, `Pie Chart`, `Line Graph`, `Infographic`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Line Graph</p><p>Line Graphs are ideal for showing how data changes over time such as tracking sales growth.</p>` }
      ] },
    { number: '267', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What type of graph is suitable for showing trends over time?</p>`,
          options: [`Bar Graph`, `Line Graph`, `Pie Chart`, `Scatter Plot`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Line Graph</p><p>Line graphs are used to show trends over time. They are particularly useful when analysing how something changes over a period.</p>` }
      ] },
    { number: '268', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What is a common use for dashboards in a business setting?</p>`,
          options: [`To track student progress in learning management systems.`, `To monitor patient health metrics in healthcare settings.`, `To provide real-time insights that support decision-making and performance tracking.`, `None of the above.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To provide real-time insights that support decision-making and performance tracking.</p><p>In a business setting, dashboards are often used to provide real-time insights that support decision-making and performance tracking. For instance, visualizations such as line graphs, bar charts, and pie charts can offer insights into sales growth, performance across regions, and product category contributions.</p>` }
      ] },
    { number: '269', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What are the components of a network diagram in data presentation?</p>`,
          options: [`Networks and servers`, `Nodes and edges`, `Maps and charts`, `Computers and routers`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Nodes and edges</p><p>Nodes in a network diagram represents the entities and edges represent the connections between these entities.</p>` }
      ] },
    { number: '270', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of data visualisation in the context of data science and software engineering?</p>`,
          options: [`It is used to make raw data look aesthetically pleasing.`, `It is used to produce complicated graphs and charts.`, `It is used to make complex data easy to understand by representing it graphically.`, `It is used to misrepresent data to suit a certain narrative.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is used to make complex data easy to understand by representing it graphically.</p><p>Data visualisation involves graphically representing data to simplify complex information, aiding understanding. This helps viewers spot patterns, trends, and insights that might not be immediately obvious in raw data.</p>` }
      ] },
    { number: '271', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What type of data visualization would be best suited to showcase correlations or relationships between two variables?</p>`,
          options: [`Bar graphs`, `Line graphs`, `Pie charts`, `Scatter plots`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Scatter plots</p><p>Scatter plots are best used for identifying correlations or relationships between two variables.</p>` }
      ] },
    { number: '272', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of using infographics?</p>`,
          options: [`To communicate complex data in an understandable manner.`, `To only display illustrations.`, `To highlight the use of icons.`, `To focus on text-based information.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To communicate complex data in an understandable manner.</p><p>Infographics combine data, text, and images to present complex data in an engaging and easily understandable format, making them suitable for a wider audience.</p>` }
      ] },
    { number: '273', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What kind of graph would be most suitable to visually represent the relationship between students' study hours and their exam scores?</p>`,
          options: [`Bar Graph`, `Line Graph`, `Pie Chart`, `Scatter Plot`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Scatter Plot</p><p>A scatter plot is used to show the relationship between two variables. In this case, the two variables are study hours and exam scores. By plotting these variables on a scatter plot, we can easily identify if more study hours lead to higher scores, thereby revealing a possible correlation.</p>` }
      ] },
    { number: '274', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>Which sector often utilizes dashboards to track patient health metrics such as blood pressure, heart rate, and temperature in real time?</p>`,
          options: [`Education`, `Business`, `Healthcare`, `Retail`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Healthcare</p><p>In the healthcare sector, dashboards are used to monitor various health metrics of multiple patients in real time, allowing healthcare professionals to take immediate actions if there are any concerning changes.</p>` }
      ] },
    { number: '275', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of utilising data visualisation in various fields such as business and healthcare?</p>`,
          options: [`To make data look aesthetically pleasing`, `To confuse audiences with complex graphs`, `To enable quick understanding, identification of key trends, and informed decision-making`, `To hide the raw data from the general view`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To enable quick understanding, identification of key trends, and informed decision-making</p><p>Data visualisation is intended to make complex data simple to understand. It allows for rapid recognition of key points or trends and helps efficient and informed decision-making, particularly in time-sensitive sectors such as business and healthcare.</p>` }
      ] },
    { number: '276', marks: 1, layout: 0, section: 'Visualising Data',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of network diagrams in data visualisation?</p>`,
          options: [`It is used for displaying pie charts and bar graphs.`, `It represents relationships and connections between various entities.`, `It shows the statistical distribution of data, usually numbers.`, `It presents complex information in a spreadsheet format.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It represents relationships and connections between various entities.</p><p>Network diagrams are used to represent the relationships and connections between various entities, which are represented as nodes and edges in the diagram. They are often used in fields where understanding these relationships is critical, such as computer science, sociology, and telecommunications.</p>` }
      ] },
    // ---------------- Network Diagrams & Maps ----------------
    { number: '277', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of using network diagrams to visualise data?</p>`,
          options: [`To understand how data varies by location`, `To understand relationships and connections between entities`, `To identify patterns across geographic areas`, `To make location-based decisions`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To understand relationships and connections between entities</p><p>Network diagrams are primarily used to understand relationships and connections between entities. They are effective when the goal is to understand how different parts of a system are connected and how they interact.</p>` }
      ] },
    { number: '278', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What do nodes represent in a network diagram?</p>`,
          options: [`Relationships or interactions`, `Complex datasets`, `Influential individuals or groups`, `Individual entities or elements`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Individual entities or elements</p><p>In a network diagram, nodes represent individual entities or elements.</p>` }
      ] },
    { number: '279', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What represents a user in a social media network diagram?</p>`,
          options: [`An edge`, `A node`, `The line of connectivity`, `The action of following`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A node</p><p>In a social media network diagram, each user is represented by a node.</p>` }
      ] },
    { number: '280', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What do choropleth maps use to represent data values in different geographic areas?</p>`,
          options: [`Different shades or colors`, `Dots`, `Lines showing movement`, `Darker colors for more intensity`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Different shades or colors</p><p>A choropleth map uses different shades or colors to represent data values in different geographic areas, making it easy to identify data distributions.</p>` }
      ] },
    { number: '281', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What type of map would be most suitable to visualise the movement of goods from manufacturing facilities to retail outlets?</p>`,
          options: [`Choropleth Maps`, `Heat Maps`, `Dot Density Maps`, `Flow Maps`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Flow Maps</p><p>Flow maps are used to show movement between different locations, making them ideal for visualising the movement of goods from manufacturing facilities to retail outlets.</p>` }
      ] },
    { number: '282', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What are maps often used for when it comes to data visualization?</p>`,
          options: [`To understand relational interactions between entities`, `To analyse the structural connections in a computer network`, `To identify patterns and variations in data across geographic locations`, `To visualise task dependencies in a project`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To identify patterns and variations in data across geographic locations</p><p>Maps are effective for understanding how data varies by location, identifying patterns across geographic areas, and making location-based decisions.</p>` }
      ] },
    { number: '283', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What does an edge represent in a network diagram in the context of social media?</p>`,
          options: [`An individual entity or element`, `A connection or relationship between nodes`, `The influential individuals or groups`, `The geographical location of a node`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A connection or relationship between nodes</p><p>An edge in a network diagram, particularly in a social media context, is used to represent the connections or relationships between nodes, such as a "friendship" or "follower" relationship.</p>` }
      ] },
    { number: '284', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>How can network diagrams be used in the context of a telecommunications company?</p>`,
          options: [`To show how various social media users are connected.`, `To visualize the relationship between different bus stops.`, `To depict how communication devices such as routers and towers are interconnected.`, `To depict relationships between different team members in a project management context.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To depict how communication devices such as routers and towers are interconnected.</p><p>In a telecommunications context, network diagrams represent communication devices, such as routers and towers, as nodes, and the communication lines between them as edges. This visualization helps in identifying potential bottlenecks or vulnerabilities in the system.</p>` }
      ] },
    { number: '285', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>During the COVID-19 pandemic, what type of map was used to represent the number of cases by country or state?</p>`,
          options: [`Road map`, `Flow map`, `Choropleth map`, `Topographic map`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Choropleth map</p><p>A choropleth map uses different shades of color to represent data values in different geographic areas. This was used during the COVID-19 pandemic to show the spread of the virus across different regions.</p>` }
      ] },
    { number: '286', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What term is given to influential nodes in a network diagram?</p>`,
          options: [`Edges`, `Points`, `Hubs`, `Links`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Hubs</p><p>The term "Hubs" is used to refer to influential nodes in a network diagram. These nodes can be identified through metrics like degree centrality or betweenness centrality.</p>` }
      ] },
    { number: '287', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of using heat maps in data visualization?</p>`,
          options: [`To show the movement between locations`, `To represent the presence of a specific feature in a location`, `To represent data density or intensity across a geographic area`, `To show data values in different geographic areas.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To represent data density or intensity across a geographic area</p><p>Heat maps are used to represent data density or intensity across a geographic area. For instance, areas with high traffic congestion can be displayed using darker colors to indicate more congestion.</p>` }
      ] },
    { number: '288', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>During the COVID-19 pandemic, how did maps help in managing the spread of the virus?</p>`,
          options: [`Maps were used to display game dynamics`, `Maps were used to track delivery routes`, `Maps were used to visualize the spread of the virus and allocate healthcare resources effectively`, `Maps were used to visualize the location of retail stores`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Maps were used to visualize the spread of the virus and allocate healthcare resources effectively</p><p>During the pandemic, choropleth maps were used to represent the count of cases in different geographical areas, enabling health authorities to understand the spread and therefore respond effectively by allocating resources where they were needed most.</p>` }
      ] },
    { number: '289', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What are network diagrams used for in the context of transportation planning?</p>`,
          options: [`For the visual representation of social media interactions`, `For showing how various communication devices are connected`, `For visualizing and analyzing the efficiency of routes and transfer points`, `For understanding the influence of certain individuals in a community`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — For visualizing and analyzing the efficiency of routes and transfer points</p><p>In the context of transportation planning, network diagrams are used to represent elements like bus stops or train stations (nodes) and routes (edges). Through this, they aid in identifying critical transfer points and routes important for maintaining the system's efficiency.</p>` }
      ] },
    { number: '290', marks: 1, layout: 0, section: 'Network Diagrams & Maps',
      items: [
        { type: 'mcq',
          question: `<p>What visualisation method could transportation planners utilise to identify areas in need of additional routes or services?</p>`,
          options: [`Network diagram overlaid with population density data.`, `Map showing the seasonal patterns of passenger counts.`, `Network diagram showing the busiest bus routes during peak hours.`, `Map showing the distribution of bus stops.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Network diagram overlaid with population density data.</p><p>A map overlaid with population density data can significantly help transportation planners identify areas underserved in terms of transportation routes and services. This will allow them to make informed decisions about where to add additional routes or services.</p>` }
      ] },
    // ---------------- Summarise Data using Spreadsheets ----------------
    { number: '291', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What are the key purposes of using a Pivot Table in spreadsheet programs like Microsoft Excel or Google Sheets?</p>`,
          options: [`To sort, count and average data in a dataset`, `To create complex formulas`, `To highlight data`, `To join multiple datasets`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To sort, count and average data in a dataset</p><p>Pivot tables are used to automatically sort, count, average, and provide summary reports of data in a dataset, aiding in the extraction of significant patterns and data analysis.</p>` }
      ] },
    { number: '292', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant advantage of using charts and graphs in spreadsheets?</p>`,
          options: [`They highlight the formulas used in the spreadsheet.`, `They allow for visual summaries and easier understanding of trends and patterns.`, `They can be used to hide sensitive data.`, `They can be used to calculate data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow for visual summaries and easier understanding of trends and patterns.</p><p>The graphical representation of data, such as in charts and graphs, can make complicated data trends and patterns more understandable and accessible to a wider audience.</p>` }
      ] },
    { number: '293', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a suitable summarisation technique for identifying the best selling products in the sales dataset?</p>`,
          options: [`Apply a filter to show only the sales from the last quarter.`, `Use =SUM(F2:F100) to get the total sales amount.`, `Create a bar chart to visualise total sales by product.`, `Highlight rows where Quantity Sold is less than 10 in red.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Create a bar chart to visualise total sales by product.</p><p>Creating a bar chart to visualise total sales by product is a suitable technique to quickly identify the best-selling products.</p>` }
      ] },
    { number: '294', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary uses for conditional formatting in spreadsheets?</p>`,
          options: [`It is used to automatically make changes to the appearance of cells depending on their values.`, `It is used to organize data in order of importance.`, `It is used to input data into the spreadsheet.`, `It is used to correct errors in the data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It is used to automatically make changes to the appearance of cells depending on their values.</p><p>Conditional formatting is primarily used to automatically adjust the appearance of cells based on the data they contain, aiding in visual analysis.</p>` }
      ] },
    { number: '295', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of using filters in data analysis?</p>`,
          options: [`To change the underlying data`, `To limit the data being displayed to meet specific criteria`, `To delete irrelevant data from the dataset`, `To add more data to the dataset`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To limit the data being displayed to meet specific criteria</p><p>Filters do not change, delete, or add data. They are used to limit the data being displayed according to specific criteria, making it easier to focus on what’s relevant.</p>` }
      ] },
    { number: '296', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>Which built-in function in a spreadsheet can be used to calculate the total sales for the year if you have a column representing monthly sales?</p>`,
          options: [`COUNT`, `MAX`, `AVERAGE`, `SUM`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — SUM</p><p>The SUM function adds up a range of numbers. This functionality can be used to calculate total sales in a year if each month's sales are listed in a column.</p>` }
      ] },
    { number: '297', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the summarization techniques applied on the sales dataset to understand recent performance?</p>`,
          options: [`Creating a bar chart to visualize total sales by product.`, `Applying a filter to show only the sales from the last quarter.`, `Using the AVERAGE function to calculate the average quantity sold per transaction.`, `Highlighting rows where Quantity Sold is less than 10 in red.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Applying a filter to show only the sales from the last quarter.</p><p>Applying a filter to show only the sales from the last quarter helps to focus on recent performance.</p>` }
      ] },
    { number: '298', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What does conditional formatting in a spreadsheet allow you to do?</p>`,
          options: [`It allows you to highlight data points based on their values.`, `It allows you to increase the font size in cells.`, `It allows you to create a bar chart based on data values.`, `It allows you to encrypt the data in the spreadsheet.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It allows you to highlight data points based on their values.</p><p>Conditional formatting allows you to change the appearance of cells based on their values, useful for highlighting data points that meet specific conditions.</p>` }
      ] },
    { number: '299', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What are the steps to creating a pivot table in spreadsheet programs such as Microsoft Excel or Google Sheets?</p>`,
          options: [`Select the dataset, insert a pivot table, and drag fields to their appropriate areas.`, `Arrange the dataset alphabetically, insert a chart, and rename it as a pivot table.`, `Select a random cell, insert a formula, and convert the cell into a pivot table.`, `Create a new spreadsheet, copy and paste the desired data, and manually calculate the summaries.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Select the dataset, insert a pivot table, and drag fields to their appropriate areas.</p><p>The correct steps to create a pivot table are to select the dataset, insert a pivot table, and then organize the fields in the correct areas. This process will allow the pivot table to automatically sort, count, and average the data as necessary.</p>` }
      ] },
    { number: '300', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What types of charts can be created using spreadsheet software for data summarisation?</p>`,
          options: [`Bar charts, line charts, and pie charts.`, `Heat maps, dendrograms, and scatter plots.`, `Music chart, news broadcast graph, and radar charts.`, `Sudoku charts, word cloud, and network graphs.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Bar charts, line charts, and pie charts.</p><p>Spreadsheet software allows you to create different types of charts such as bar charts, line charts, and pie charts, to provide visual data summarisation. Other chart types may be available but are not mentioned here.</p>` }
      ] },
    { number: '301', marks: 1, layout: 0, section: 'Summarise Data using Spreadsheets',
      items: [
        { type: 'mcq',
          question: `<p>What could be a practical use of filters in a spreadsheet dataset of customer service records for a company?</p>`,
          options: [`To view only the records where the 'Customer Name' is "John"`, `To hide all records that are more than a month old`, `To display only the rows where the 'Resolution Status' is "Pending"`, `To change the 'Date' of all entries in the dataset`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To display only the rows where the 'Resolution Status' is "Pending"</p><p>In the content, it was mentioned that if a manager wants to focus on only the unresolved cases, they can apply a filter to display rows where 'Resolution Status' is "Pending". This lets them concentrate on what’s immediately relevant without having to look through all the records.</p>` }
      ] },
    // ---------------- Forms & Reports with Linked Sheets ----------------
    { number: '302', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the benefits of using linked sheets in spreadsheets?</p>`,
          options: [`They reduce errors and improve data quality.`, `They enable data from multiple sources to be aggregated automatically.`, `They make data entry accessible to users unfamiliar with spreadsheets.`, `None of the above.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They enable data from multiple sources to be aggregated automatically.</p><p>Using linked sheets increases efficiency as it allows the aggregation of data from multiple sources automatically, saving time and effort.</p>` }
      ] },
    { number: '303', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>Why are forms useful in data collection for spreadsheets?</p>`,
          options: [`They automate and standardize data entry.`, `They make data entry more difficult.`, `They allow for a higher rate of errors.`, `They slow down the data entry process.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They automate and standardize data entry.</p><p>Forms in spreadsheets automate and standardize the data entry process, reducing errors and ensuring consistency, especially when multiple users are involved.</p>` }
      ] },
    { number: '304', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>In a spreadsheet tool, what functions could be utilised when creating a monthly sales report for a retail business?</p>`,
          options: [`SUM, AVERAGE, and MAX`, `SUM, AVERAGE, and COUNT`, `COUNT, AVERAGE, and MEAN`, `ADD, MULTIPLY, and DIVIDE`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — SUM, AVERAGE, and COUNT</p><p>In a sales report, functions like SUM (for total sales or revenue), AVERAGE (for average units sold or average revenue) and COUNT (for the number of sold units or selling days) are likely to be used.</p>` }
      ] },
    { number: '305', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of linking sheets in a spreadsheet?</p>`,
          options: [`To enable users to integrate data from different sheets and manage complex datasets`, `To make the spreadsheet look more attractive`, `To increase the file size of the spreadsheet`, `To make it difficult to analyze data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To enable users to integrate data from different sheets and manage complex datasets</p><p>The main purpose of linking sheets is to allow users to integrate data from different sheets into a single place, enabling efficient management of complex datasets particularly in scenarios when data is split across multiple sheets but needs to be analyzed or summarized in a single place.</p>` }
      ] },
    { number: '306', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What function is used in Google Sheets to pull data from one spreadsheet into another in order to analyze data across multiple sheets?</p>`,
          options: [`SUM`, `AVERAGE`, `IMPORTRANGE`, `Pivot tables`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — IMPORTRANGE</p><p>The IMPORTRANGE function in Google Sheets facilitates data integration from one sheet to another to create a consolidated view of data for easier analysis.</p>` }
      ] },
    { number: '307', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What does a linked spreadsheet setup allow for report generation?</p>`,
          options: [`It allows for automatic updates when new data is added.`, `It allows for copy-pasting data manually.`, `It allows for inserting more tables and charts in the reports.`, `It allows for writing complex function formulas in the report.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It allows for automatic updates when new data is added.</p><p>A linked spreadsheet setup can automatically update the report when new data is added to any of the linked sheets, ensuring that the reports are always up to date with the latest data.</p>` }
      ] },
    { number: '308', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What is the main advantage of using forms in an inventory management system for a retail store?</p>`,
          options: [`It increases the chances of errors.`, `It makes selections harder.`, `It ensures all necessary fields are completed and reduces errors.`, `It makes the data entry process chaotic.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It ensures all necessary fields are completed and reduces errors.</p><p>Utilizing forms ensures that all necessary data are input correctly. It simplifies data entry and reduces the risk of errors by offering drop-down lists for selection.</p>` }
      ] },
    { number: '309', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What are the benefits of designing forms, reports, and linked sheets in spreadsheets?</p>`,
          options: [`Forms ensure data consistency, linked sheets offer efficient data aggregation, changes are updated in real time in reports, and forms improve data entry accessibility.`, `Forms cause data inconsistency, linked sheets allows for efficient data segregation, and changes are updated in reports after a delay.`, `Forms improve data consistency, linked sheets cause inefficient data aggregation, and changes take time to reflect in reports.`, `None of the above.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Forms ensure data consistency, linked sheets offer efficient data aggregation, changes are updated in real time in reports, and forms improve data entry accessibility.</p><p>Designing forms, reports, and linked sheets have many benefits. Forms lead to more uniform data collection, reducing errors and improving data quality. Efficiency is enhanced through linked sheets by automatically aggregating data from multiple sources. Any updates made to the data source reflect in real time in the reports, ensuring the information used for decision-making is always updated. Forms also make data entry accessible to users who may not be familiar with spreadsheets, allowing for broader data collection.</p>` }
      ] },
    { number: '310', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>In the scenario of a multi-departmental budget, what is the benefit of linking each department's sheet to a summary sheet?</p>`,
          options: [`It allows each department to access the data of other departments.`, `It stops the need for using functions like SUM or AVERAGE.`, `It provides a holistic view of the overall expenses of the business.`, `It restricts departments from adding data into their own sheets.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It provides a holistic view of the overall expenses of the business.</p><p>By linking each department's sheet to a summary sheet, a business can get a holistic view of its overall expenses which can expedite insights into the company’s financial health.</p>` }
      ] },
    { number: '311', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>What are some benefits of using forms, reports, and linked sheets in spreadsheets?</p>`,
          options: [`They provide real-time updates and make data entry accessible.`, `They are only useful to users who have advanced knowledge in spreadsheets.`, `They create inconsistencies in data collection and analysis.`, `They reduce efficiency in managing and consolidating data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They provide real-time updates and make data entry accessible.</p><p>Forms, reports, and linked sheets in spreadsheets offer many benefits such as providing real-time updates, making data entry accessible to users, improving data quality via uniform data collection, and efficient processing by aggregating data from multiple sources in an easy-to-understand and structured manner.</p>` }
      ] },
    { number: '312', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>How can forms improve data entry in a retail business's inventory management system?</p>`,
          options: [`Forms reduce data entry errors by standardizing data input across multiple users.`, `Forms increase the chances of data entry errors by making the process more complicated.`, `Forms have no effect on the process of data entry.`, `Forms hinder the process of data entry by making it more time-consuming.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Forms reduce data entry errors by standardizing data input across multiple users.</p><p>Forms help in reducing data entry errors and make the process efficient by standardizing the data input, particularly when multiple users are involved in data entry. They ensure that all necessary fields are completed and can provide drop-down lists to make selections easier, thus minimizing the chances of errors. This is particularly helpful in complex systems such as a retail business's inventory management system.</p>` }
      ] },
    { number: '313', marks: 1, layout: 0, section: 'Forms & Reports with Linked Sheets',
      items: [
        { type: 'mcq',
          question: `<p>How can reports in spreadsheet tools enhance understanding of collected data?</p>`,
          options: [`They can present aggregated data in a structured manner.`, `They can delete irrelevant data.`, `They can multiply the amount of collected data.`, `They can copy data into a different database.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They can present aggregated data in a structured manner.</p><p>Reports in spreadsheet tools present aggregated data in a structured manner, allowing users to derive meaningful insights.</p>` }
      ] },
    // ---------------- Spreadsheet Grouping & Sorting ----------------
    { number: '314', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of sorting data in ascending order?</p>`,
          options: [`To arrange data from largest to smallest`, `To arrange data from smallest to largest or alphabetically`, `To arrange data by date of creation`, `To arrange data in reverse alphabetical order`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To arrange data from smallest to largest or alphabetically</p><p>Ascending order arranges data from smallest to largest or alphabetically, allowing easier search and retrieval of specific entries.</p>` }
      ] },
    { number: '315', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What are the benefits of combining grouping and sorting techniques in handling data?</p>`,
          options: [`It makes spreadsheets confusing`, `It enables businesses to gain valuable insights`, `It slows down decision-making processes`, `It impedes inventory management`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It enables businesses to gain valuable insights</p><p>Combining the techniques of grouping and sorting allows businesses to derive valuable insights such as understanding top-performing products in each region, which aids in targeted marketing strategies and inventory management.</p>` }
      ] },
    { number: '316', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What is the common use of grouping data?</p>`,
          options: [`To create summaries that provide a higher-level understanding`, `To change the original dataset`, `To separate individual data points`, `To reduce the amount of data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To create summaries that provide a higher-level understanding</p><p>Grouping data involves combining rows of data that share common characteristics to create summaries that provide a higher-level understanding, particularly useful for large datasets as it allows viewing of aggregated information rather than individual data points.</p>` }
      ] },
    { number: '317', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What is a common tool used for grouping and summarizing data?</p>`,
          options: [`Pivot tables`, `Flowcharts`, `Bar graphs`, `Venn diagrams`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Pivot tables</p><p>A pivot table is a dynamic tool often used in spreadsheet software for quickly grouping and summarizing data.</p>` }
      ] },
    { number: '318', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>Which sorting order is particularly useful for analyzing sales performance?</p>`,
          options: [`Ascending Order`, `Descending Order`, `Alphabetical Order`, `Random Order`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Descending Order</p><p>Descending order arranges data from largest to smallest or reverse alphabetical order, therefore it is useful for analyzing sales performance, where products might be sorted by total sales amount to see which items are performing best.</p>` }
      ] },
    { number: '319', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>How could grouping and sorting data in a spreadsheet provide insights into business performance?</p>`,
          options: [`By grouping data by Product and sorting in ascending order of Sales Amount.`, `By grouping data by Region and sorting by Product in descending order.`, `By grouping data by Region and sorting by Sales Amount in descending order.`, `By grouping data by Sales Amount and sorting by Region in ascending order.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By grouping data by Region and sorting by Sales Amount in descending order.</p><p>Grouping the data by Region and then sorting the products within each region by Sales Amount in descending order would help identify the top selling products in each region. This technique could aid in formulating targeted marketing strategies and managing inventories.</p>` }
      ] },
    { number: '320', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What is the function of grouping data in spreadsheet tools like Excel?</p>`,
          options: [`For altering the original data set.`, `To summarise individual data points.`, `To create informative summaries by combining rows of data that share common characteristics.`, `To sort data in ascending order.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To create informative summaries by combining rows of data that share common characteristics.</p><p>Grouping data is useful for summarising large datasets and creating informative summaries by combining rows of data that share common characteristics.</p>` }
      ] },
    { number: '321', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>What is a practical application for sorting data by Date in ascending order?</p>`,
          options: [`To see which products generate the most revenue`, `To search for specific individuals in a customer list`, `To focus marketing efforts on high-revenue products`, `To identify trends, such as peak sales periods or seasonal fluctuations`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To identify trends, such as peak sales periods or seasonal fluctuations</p><p>Sorting data by Date in ascending order allows for the observation of the progression of events over time, which can help identify trends such as peak sales periods or seasonal fluctuations.</p>` }
      ] },
    { number: '322', marks: 1, layout: 0, section: 'Spreadsheet Grouping & Sorting',
      items: [
        { type: 'mcq',
          question: `<p>How can grouping and sorting data help in business performance analysis?</p>`,
          options: [`By identifying the least popular products in each sales region.`, `By determining the top-performing products in each sales region.`, `By revealing trends in employee performance.`, `By evaluating the company's social media engagement.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By determining the top-performing products in each sales region.</p><p>Grouping and sorting data can reveal the top-performing products in each sales region, which is crucial for targeted marketing strategies and inventory management.</p>` }
      ] },
    // ---------------- Developing Flat-File Databases ----------------
    { number: '323', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a benefit of using flat-file databases?</p>`,
          options: [`Portability`, `Low overhead`, `Scalability`, `Avoidance of data redundancy`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Avoidance of data redundancy</p><p>Flat-file databases often lead to redundancy as all data is stored in a single table resulting in duplication of information. This is not a benefit, rather it's a limitation.</p>` }
      ] },
    { number: '324', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>What scenario could lead to the transition from a flat-file database to a relational database?</p>`,
          options: [`The need to store larger volumes of data`, `The need to track additional details like class assignments or teacher notes`, `The need to increase redundancy in data`, `The need to limit the accessibility and simplicity of the database.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The need to track additional details like class assignments or teacher notes</p><p>As a system grows in complexity and there's a necessity to track additional details, moving from a flat-file to a relational database would be a logical step. A relational database allows for data organization in different tables, reducing redundancy and simplifying the storage of more complex data.</p>` }
      ] },
    { number: '325', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>Flat-file databases store data in how many table formats?</p>`,
          options: [`Multiple`, `Two`, `Three`, `Single`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Single</p><p>Flat-file databases store all data in a single table format, unlike relational databases that use multiple tables linked by relationships.</p>` }
      ] },
    { number: '326', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>What is the common structure for data storage in flat-file databases?</p>`,
          options: [`Multiple interconnected tables`, `Single table with multiple categories and relationships`, `Single table format organized into rows and columns`, `Hierarchical structure with multi-level data categories`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Single table format organized into rows and columns</p><p>Flat-file databases organize data in a single table format where information is sorted into rows and columns, much like a spreadsheet.</p>` }
      ] },
    { number: '327', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>When scaling systems, which method can be used to make the student data more manageable than the flat-file database approach?</p>`,
          options: [`Linking student data with the attendance records.`, `Adding more columns.`, `Making a separate table for each student.`, `Storing all student data in a single row.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Linking student data with the attendance records.</p><p>As systems grow in complexity, developers often transition from a flat-file databases to relational databases where student data is moved to a separate table and linked with attendance records. This makes the data more manageable and avoids redundancy.</p>` }
      ] },
    { number: '328', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>What is a concern associated with the use of flat-file databases when dealing with high query complexity or large datasets?</p>`,
          options: [`It can be difficult to transfer between different systems.`, `They require the installation of database management software.`, `They result in a lack of portability and data congestion.`, `They become increasingly difficult to manage and search through.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They become increasingly difficult to manage and search through.</p><p>As flat-file databases grow in size, they become more difficult to manage and search, leading to inefficiencies – especially in the case of large datasets or high query complexity. This is a limitation of flat-file databases.</p>` }
      ] },
    { number: '329', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>Why are flat-file databases not typically used in multi-user environments like large web applications or collaborative software systems?</p>`,
          options: [`They are too expensive to implement.`, `They have limited data storage capacity.`, `They are not well-suited for concurrent access.`, `They are too complicated to set up.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They are not well-suited for concurrent access.</p><p>Flat-file databases, if accessed by multiple users or applications simultaneously, risk becoming corrupted or inconsistent. Therefore, they are not a good choice for multi-user environments.</p>` }
      ] },
    { number: '330', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>What type of data storage system is a flat-file database?</p>`,
          options: [`A relational database system with multiple interconnected tables`, `A single table formatted system where information is organised into rows and columns`, `A multi-dimensional data storage system`, `A tree structured database system`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A single table formatted system where information is organised into rows and columns</p><p>A flat-file database system is a single table formatted system, with data organised into rows and columns, much like a spreadsheet.</p>` }
      ] },
    { number: '331', marks: 1, layout: 0, section: 'Developing Flat-File Databases',
      items: [
        { type: 'mcq',
          question: `<p>What is one downside of using a flat-file database to track student attendance over a prolonged period?</p>`,
          options: [`No records for each student can be kept.`, `Data redundancy can cause bloating as more records are added.`, `It becomes impossible to track attendance for each student on different dates.`, `It does not allow for any other details such as teacher notes to be tracked.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data redundancy can cause bloating as more records are added.</p><p>Flat-file databases, if used for long periods, can lead to data redundancy (repeating student names and IDs) which can cause bloating as the number of records increases.</p>` }
      ] },
    // ---------------- Designing a Relational Database ----------------
    { number: '332', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>Which SQL operation is used to filter the results of a query using specific criteria?</p>`,
          options: [`SELECT`, `JOIN`, `WHERE`, `COUNT`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — WHERE</p><p>The WHERE clause in SQL is used to filter results based on specific criteria, allowing one to retrieve precise data from a database.</p>` }
      ] },
    { number: '333', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of a primary key in a relational database?</p>`,
          options: [`To create a relationship between two tables`, `To link two different databases`, `To be a unique identifier for each record in a table`, `To repeat the information from one table to another`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To be a unique identifier for each record in a table</p><p>A primary key serves as a unique identifier for each record in a table to ensure data is easily identifiable and unique.</p>` }
      ] },
    { number: '334', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What are the key steps to designing a relational database?</p>`,
          options: [`Identify Entities, Define Users, Set Interfaces, Establish Relationships`, `Define Attributes, Set Keys, Identify Entities, Establish Servers`, `Set Keys, Launch Prototype, Identify Entities, Define Attributes`, `Identify Entities, Define Attributes, Establish Relationships, Set Keys`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Identify Entities, Define Attributes, Establish Relationships, Set Keys</p><p>When designing a relational database, you should identify the entities, define their attributes, establish relationships between them and set keys to uniquely identify each entity and link related tables.</p>` }
      ] },
    { number: '335', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What query operation can be used to count how many students are enrolled in each course in SQL?</p>`,
          options: [`JOIN operation`, `SELECT operation`, `WHERE operation`, `Aggregation operation`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Aggregation operation</p><p>Aggregation, such as the COUNT() function, allows us to perform calculations on data, it would be used to count the number of students in each course.</p>` }
      ] },
    { number: '336', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements best describes the role of a foreign key in a relational database?</p>`,
          options: [`A foreign key is a column in one table that is irrelevant to the primary key in another table.`, `A foreign key is a unique identifier for each record in a table.`, `A foreign key is a column in one table that links to the primary key in another table.`, `A foreign key secures the database from intrusions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A foreign key is a column in one table that links to the primary key in another table.</p><p>In a relational database, a foreign key is a column in one table that creates a relationship by linking to the primary key in another table. This allows data from different tables to be connected and used together.</p>` }
      ] },
    { number: '337', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What is the fundamental difference between a relational database and a flat-file database?</p>`,
          options: [`A flat-file database uses multiple interconnected tables, while a relational database uses a single table.`, `A relational database is only used for managing school information, while a flat-file database can be used for any type of data.`, `A flat-file database cannot store data, while a relational database can store data.`, `A relational database uses multiple interconnected tables, while a flat-file database uses a single table.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A relational database uses multiple interconnected tables, while a flat-file database uses a single table.</p><p>Unlike flat-file databases, which store all data in a single table, relational databases use multiple interconnected tables to minimise redundancy and improve data management.</p>` }
      ] },
    { number: '338', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What are the functions of the foreign keys in the context of the library system relational database example?</p>`,
          options: [`They provide details about the books and borrowers in the library system.`, `They are used to track which books are borrowed by which borrowers.`, `They are dedicated to managing and preventing data duplication.`, `They serve as a mechanism to arrange data chronologically.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They are used to track which books are borrowed by which borrowers.</p><p>In the given library system example, the foreign keys (BorrowerID and BookID) are used to create relationships between the tables which helps in tracking which books are borrowed by which users.</p>` }
      ] },
    { number: '339', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What does each row in a table represent in a relational database?</p>`,
          options: [`A unique keyword`, `An entity attribute`, `A specific record`, `The connection between tables`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A specific record</p><p>In the context of relational databases, each row in a table represents a specific record. For instance, in a students table, each row could represent a unique student.</p>` }
      ] },
    { number: '340', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of the SELECT statement in SQL?</p>`,
          options: [`It provides a count of the records in a table`, `It is used to join two or more tables together`, `It allows for the retrieval of data from one or more tables`, `It filters the data based on specific conditions`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows for the retrieval of data from one or more tables</p><p>The SELECT statement in SQL is primarily used to retrieve specific data from one or more database tables.</p>` }
      ] },
    { number: '341', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of a primary key in a relational database?</p>`,
          options: [`To create a relationship between two different tables.`, `To keep track of the sequence of data inputted.`, `To ensure that each record in a table is uniquely identifiable.`, `To repeat all the student and course information in one table.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To ensure that each record in a table is uniquely identifiable.</p><p>A primary key is a unique identifier for each record in a table ensuring each record is uniquely identifiable.</p>` }
      ] },
    { number: '342', marks: 1, layout: 0, section: 'Designing a Relational Database',
      items: [
        { type: 'mcq',
          question: `<p>In a relational database pertaining to a library system, how is data redundancy prevented when tracking which books are borrowed by which users?</p>`,
          options: [`By using BookID and Title as primary keys in each table.`, `By creating relationships between tables using BorrowerID and BookID as foreign keys.`, `By assigning a unique StudentID to each book in the library.`, `By using Alice Smith and The Hobbit as examples in the library database.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By creating relationships between tables using BorrowerID and BookID as foreign keys.</p><p>In a relational database, data redundancy can be prevented by creating relationships between tables using foreign keys. In this example, BorrowerID and BookID are used as foreign keys to track which books are borrowed by which users without duplicating data.</p>` }
      ] },
    // ---------------- Using SQL for Sorting & Searching ----------------
    { number: '343', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>In SQL, what does the 'AND' logical operator do when applied to multiple conditions in a query?</p>`,
          options: [`It negates a condition`, `It returns true if at least one condition is true`, `It returns true if all conditions are true`, `It returns all the conditions irrespective of their truth values`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It returns true if all conditions are true</p><p>In SQL, 'AND' is a logical operator that returns true if all the conditions placed in a query are true.</p>` }
      ] },
    { number: '344', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What is the main role of the WHERE clause in SQL?</p>`,
          options: [`It is used to calculate the total number of rows in a table`, `It is used to filter results based on certain conditions`, `It is used to create new tables in the database`, `It allows you to insert new data into a table`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is used to filter results based on certain conditions</p><p>The WHERE clause is used in SQL to filter out data based on certain conditions matched to the data in a database then, return specific data.</p>` }
      ] },
    { number: '345', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>How would you sort customers by age in ascending order in SQL?</p>`,
          options: [`SELECT * FROM Customer ORDER BY Age;`, `SELECT * FROM Customer ORDER BY Age ASC;`, `SELECT * FROM Customer ORDER BY Age DESC;`, `SELECT * FROM Customer ORDER Age BY;`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — SELECT * FROM Customer ORDER BY Age ASC;</p><p>In SQL, data is sorted in ascending order by default. Therefore, both options A and B are correct. However, using the ASC keyword explicitly specifies the order, making the statement more clear.</p>` }
      ] },
    { number: '346', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following scenarios does not represent a practical application of sorting and searching in databases?</p>`,
          options: [`E-commerce websites use sorting and searching to find products based on price range, category, brand and to sort results by price, popularity, or reviews.`, `Social media platforms store user data and enable users to search for friends by name, filter results by location, and sort profiles based on various attributes.`, `School management systems use sorting and searching to search for students based on age, grade, or name and then sort the results.`, `A music streaming website uses database sorting and searching to randomly display songs from various genres.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A music streaming website uses database sorting and searching to randomly display songs from various genres.</p><p>The random display of songs in</p>` }
      ] },
    { number: '347', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What does the SQL LIKE operator % wildcard represent?</p>`,
          options: [`A single character`, `Any sequence of characters`, `A specific character`, `A numerical value`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Any sequence of characters</p><p>The % wildcard in SQL represents any sequence of characters.</p>` }
      ] },
    { number: '348', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>Which SQL keyword is used to sort data in descending order?</p>`,
          options: [`ASC`, `ORDER BY`, `DESC`, `SELECT`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — DESC</p><p>The DESC keyword is used in SQL to sort data in descending order, from highest to lowest or Z to A.</p>` }
      ] },
    { number: '349', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What does the 'NOT' logical operator do in a SQL query?</p>`,
          options: [`It makes all conditions true.`, `It negates a condition.`, `It requires at least one condition to be true.`, `It requires all conditions to be true.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It negates a condition.</p><p>The 'NOT' logical operator in SQL negates a condition, meaning, it reverses the truth-value of the condition that follows it.</p>` }
      ] },
    { number: '350', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of comparison operators in SQL?</p>`,
          options: [`To sort data in ascending or descending order`, `To connect multiple criteria in a query`, `To filter results based on specific conditions`, `To find duplicates in data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To filter results based on specific conditions</p><p>Comparison operators in SQL are used to filter results matching certain criteria. They can be used to find exact matches, ranges or data that meet specific conditions.</p>` }
      ] },
    { number: '351', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>Who developed the SQL programming language in the early 1970s?</p>`,
          options: [`Oracle Corporation`, `Donald D. Chamberlin and Raymond F. Boyce`, `Edgar F. Codd`, `Apple Inc.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Donald D. Chamberlin and Raymond F. Boyce</p><p>SQL was first developed in the early 1970s by IBM researchers Donald D. Chamberlin and Raymond F. Boyce.</p>` }
      ] },
    { number: '352', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of a practical application of sorting and searching in databases?</p>`,
          options: [`Searching for products based on specific criteria on e-commerce websites.`, `Organizing data alphabetically in a word document.`, `Sorting music playlists by song name on a music streaming service.`, `Grouping similar images together in a mobile photo album.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Searching for products based on specific criteria on e-commerce websites.</p><p>Searching for products based on specific criteria on e-commerce websites relates to searching in databases, where data is certain to be stored and efficiently managed. Options B, C and D are not necessarily related to storing and managing data in databases.</p>` }
      ] },
    { number: '353', marks: 1, layout: 0, section: 'Using SQL for Sorting & Searching',
      items: [
        { type: 'mcq',
          question: `<p>What can the LIKE operator in SQL be used for?</p>`,
          options: [`To sort data in ascending or descending order.`, `To find data that partially matches a certain condition with the use of wildcards.`, `To eliminate duplicates in data.`, `To define a condition to select rows from a table.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To find data that partially matches a certain condition with the use of wildcards.</p><p>The LIKE operator in SQL is used for pattern matching, which is useful when you want to find data that partially matches a certain condition with the help of wildcards.</p>` }
      ] },
    // ---------------- Machine Learning for Prediction ----------------
    { number: '354', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What are the three most common types of machine learning?</p>`,
          options: [`Supervised Learning, Unsupervised Learning, and Reinforcement Learning`, `Linear Learning, Regression Learning, and Labelled Learning`, `Predictive Learning, Analytical Learning, and Exponential Learning`, `Binary Learning, Tertiary Learning, and Multi-Factor Learning`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Supervised Learning, Unsupervised Learning, and Reinforcement Learning</p><p>Supervised Learning, Unsupervised Learning, and Reinforcement Learning are the three most common types of machine learning, as each one has a different approach and utility when it comes to building algorithms to process and learn from data.</p>` }
      ] },
    { number: '355', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What are the "4 V's" of big data?</p>`,
          options: [`Volume, Variety, Velocity, and Veracity`, `Volume, Variety, Vision, and Veracity`, `Volume, Variety, Velocity, and Variable`, `Volume, Value, Velocity, and Veracity`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Volume, Variety, Velocity, and Veracity</p><p>The power of big data is often described using the "4 V's" of big data: Volume, Variety, Velocity, and Veracity. Volume represents the massive amount of data, Variety refers to the different forms of data, Velocity indicates the high speed of data generation, and Veracity represents the quality and reliability of data.</p>` }
      ] },
    { number: '356', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What are some challenges faced by Big Data and Machine Learning?</p>`,
          options: [`Data quality issues, overfitting, computational power requirements, and ethical concerns.`, `Limited data availability, lack of training opportunities, high costs of software tools, and data privacy concerns.`, `Inadequate hardware, high cost of electricity, lack of skilled personnel, and ineffective communication between researchers and data analysts.`, `Dependency on internet connectivity, lack of high-quality cameras, inadequate cloud storage, and the threat of viruses.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data quality issues, overfitting, computational power requirements, and ethical concerns.</p><p>The text lists data quality, overfitting, computational power, and ethical concerns as the challenges faced by machine learning and big data analytics.</p>` }
      ] },
    { number: '357', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What are the four key characteristics of big data often referred to as the "4 V's" of big data?</p>`,
          options: [`Volume, Value, Velocity, Veracity`, `Value, Variety, Volume, Verity`, `Volume, Variety, Velocity, Veracity`, `Variety, Volume, Verity, Velocity`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Volume, Variety, Velocity, Veracity</p><p>The "4 V's" of big data are Volume, Variety, Velocity, and Veracity. These refer to the large amount of data, the different forms it comes in, the speed at which it is generated, and its quality and reliability.</p>` }
      ] },
    { number: '358', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What specific task does a supervised learning algorithm perform on a labeled dataset?</p>`,
          options: [`It finds patterns or relationships without knowing the correct outputs.`, `It strictly follows a pre-determined set of instructions written by developers.`, `It interacts with an environment and receives feedback as rewards or penalties.`, `It predicts the output based on the input data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It predicts the output based on the input data.</p><p>The task of a supervised learning algorithm on a labeled dataset is to predict the output based on the input data. A labeled dataset has both input data and the correct output. The algorithm is trained to identify the relationship and make predictions accordingly.</p>` }
      ] },
    { number: '359', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>How does the combination of big data and machine learning benefit predictive modeling?</p>`,
          options: [`It allows the models to produce accurate predictions.`, `It reduces the need for large amounts of data in modeling.`, `It makes models less complex and easy to understand.`, `It minimizes the risk of overfitting in models.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It allows the models to produce accurate predictions.</p><p>The combination of big data and machine learning enables the development of predictive models that can accurately forecast future events or trends based on historical data. This is due to large amounts of data allowing machine learning algorithms to find patterns and relationships that would be impossible to identify manually.</p>` }
      ] },
    { number: '360', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What does big data analytics involve?</p>`,
          options: [`Analyzing trends in social media interactions`, `Using simple techniques and tools to extract valuable insights`, `Using advanced techniques and tools to extract valuable insights from large datasets`, `Measuring the amount of data in terabytes or petabytes`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Using advanced techniques and tools to extract valuable insights from large datasets</p><p>Big data analytics involves using advanced techniques and tools to extract valuable insights from extremely large and complex datasets.</p>` }
      ] },
    { number: '361', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a challenge of Machine Learning and Big Data Analytics as mentioned in the text?</p>`,
          options: [`Data Quality`, `Overfitting`, `Computational Power`, `Data Volume`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Data Volume</p><p>According to the text, "Data Quality", "Overfitting", and "Computational Power" are challenges faced in Machine Learning and Big Data Analytics. "Data Volume" is not mentioned as a challenge in this context.</p>` }
      ] },
    { number: '362', marks: 1, layout: 0, section: 'Machine Learning for Prediction',
      items: [
        { type: 'mcq',
          question: `<p>What is the main difference between traditional programming and machine learning?</p>`,
          options: [`Traditional programming involves writing code to instruct a system step by step, while machine learning is not based on code.`, `Traditional programming involves loading vast amounts of data while machine learning does not require data.`, `Traditional programming involves creating visual designs, while machine learning is about auditory experiences.`, `Traditional programming involves writing code to instruct a system step by step, while machine learning enables a system to identify patterns and improve through experience.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Traditional programming involves writing code to instruct a system step by step, while machine learning enables a system to identify patterns and improve through experience.</p><p>In traditional programming, developers provide step-by-step instructions to the system. Conversely, machine learning enables a system to learn from data, identifying patterns and improving its performance over time without explicit programming for every task.</p>` }
      ] },
    // ---------------- Data Types ----------------
    { number: '363', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not considered to be a fundamental data type in data science and software engineering?</p>`,
          options: [`Nominal`, `Ordinal`, `Interval`, `Binary`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Binary</p><p>In the context provided, the four fundamental data types in data science and software engineering mentioned are nominal, ordinal, interval and ratio. Hence binary is not one of them.</p>` }
      ] },
    { number: '364', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What differentiates ordinal data from nominal data?</p>`,
          options: [`Ordinal data does not categorise information`, `Ordinal data categories have a meaningful order or ranking`, `Ordinal data provides information about the precise difference between positions`, `Ordinal data cannot be used to identify relative positions`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Ordinal data categories have a meaningful order or ranking</p><p>Nominal data categorises information, but without any meaningful order or ranking. Ordinal data has the same property plus the categories are in a meaningful order or ranking.</p>` }
      ] },
    { number: '365', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes ratio data from other types of data?</p>`,
          options: [`Ratio data uses only distinct numerical values`, `Ratio data is the lowest level of data measurement`, `Ratio data has an absolute zero point representing the total absence of the attribute being measured`, `Ratio data cannot be used in arithmetic operations`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ratio data has an absolute zero point representing the total absence of the attribute being measured</p><p>What sets ratio data apart from other data types is its absolute zero point. This refers to the fact that a value of zero represents the total absence of the attribute being measured. For example, in the context of height, a value of zero would indicate a total lack of height.</p>` }
      ] },
    { number: '366', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What type of data is classified as nominal data?</p>`,
          options: [`Data that contains numbers and can be arranged in a logical order.`, `Data that is purely descriptive and has no logical order or quantitative value.`, `Data that can be used in arithmetic operations such as addition or subtraction.`, `Data that can only be represented using bar or pie charts.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data that is purely descriptive and has no logical order or quantitative value.</p><p>Nominal data is purely descriptive and does not have any quantitative value or logical order. It simply categorises items based on shared characteristics. This type of data cannot be used in arithmetic operations.</p>` }
      ] },
    { number: '367', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes interval data from other forms of numerical data?</p>`,
          options: [`Interval data can be represented on line graphs.`, `Interval data always has a true "absence" of the measured attribute.`, `The intervals between values in interval data are equal and consistent.`, `In interval data, ratios are meaningful.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The intervals between values in interval data are equal and consistent.</p><p>Only interval data has the unique property of having equal intervals between values. This means the difference between the values is consistent throughout the scale.</p>` }
      ] },
    { number: '368', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What is NOT true about nominal data?</p>`,
          options: [`It only consists of text labels.`, `It can be used in arithmetic operations.`, `It categorises items based on shared characteristics.`, `Bar charts and pie charts can be used to visualise nominal data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can be used in arithmetic operations.</p><p>Unlike other forms of data, nominal data cannot be used in arithmetic operations such as addition, subtraction, or averaging. It is purely descriptive and categorized based on shared characteristics.</p>` }
      ] },
    { number: '369', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What is the main characteristic that distinguishes ratio data from interval data?</p>`,
          options: [`Ratio data does not have an absolute zero point`, `Ratio data cannot be used to calculate ratios`, `Ratio data does not have ordered values`, `Ratio data has an absolute zero point, which represents total absence of the attribute being measured.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Ratio data has an absolute zero point, which represents total absence of the attribute being measured.</p><p>The main difference between ratio and interval data is that ratio data has an absolute zero point, representing the total absence of the attribute being measured. This allows for all arithmetic operations, including the calculation of ratios.</p>` }
      ] },
    { number: '370', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Which statement about ordinal data is true?</p>`,
          options: [`The categories have no meaningful order or ranking.`, `The intervals between ranks are necessarily equal.`, `This type of data is appropriate for arithmetic operations like addition or subtraction.`, `The categories in ordinal data have a meaningful order or ranking, but the difference between the ranks cannot be precisely quantified.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The categories in ordinal data have a meaningful order or ranking, but the difference between the ranks cannot be precisely quantified.</p><p>Ordinal data is a category of data where the order matters but the difference between values does not. For instance, a rating of satisfaction is ordinal data. The ratings "satisfied" and "very satisfied" have an order, but the difference between the ratings is not quantifiable.</p>` }
      ] },
    { number: '371', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to understand the properties of data types such as nominal, ordinal, interval, and ratio in data science and software engineering?</p>`,
          options: [`It enhances the aesthetics of visualisations.`, `It helps determine what type of analysis can be performed and how the results should be interpreted.`, `It makes the data look more complex and impressive.`, `It assists in editing the data to fit desired expectations.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps determine what type of analysis can be performed and how the results should be interpreted.</p><p>Understanding the properties of each data type helps in manipulating the data more efficiently, making accurate predictive models, and driving meaningful insights. It greatly impacts the type of analysis that can be performed and the conclusions that can be drawn from it.</p>` }
      ] },
    { number: '372', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following characteristics is unique to interval data?</p>`,
          options: [`It has an absolute zero`, `Addition and subtraction are not meaningful`, `It has equal intervals between values`, `Ratios are meaningful`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It has equal intervals between values</p><p>Unlike other types of data, interval data has equal intervals between its values, making the difference between its values meaningful and consistent. This unique property allows it to be used in addition and subtraction. However, ratios are not meaningful because there is no true "absence" of the measured attribute, meaning there is no absolute zero.</p>` }
      ] },
    { number: '373', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What type of data visualisation is commonly used for nominal data?</p>`,
          options: [`Histogram`, `Bar chart`, `Line graph`, `Scatter plot`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Bar chart</p><p>Bar charts and pie charts are commonly used to visualise nominal data. Line graphs, histograms and scatter plots are typically used for continuous data.</p>` }
      ] },
    { number: '374', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Why is understanding data types pivotal in data science and software engineering?</p>`,
          options: [`It guides analysts on how best to manipulate and visualise the information.`, `It assists in making coffee`, `It helps perform a better dance routine`, `It aids in sleeping better`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It guides analysts on how best to manipulate and visualise the information.</p><p>Understanding data types lets analysts know how to best interpret, categorise, process, and visualise it, thus improving the efficiency and accuracy of their work.</p>` }
      ] },
    { number: '375', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>What is a characteristic of ratio data?</p>`,
          options: [`Ratio data does not allow the calculation of averages.`, `Ratio data does not have an absolute zero point.`, `Ratio data does not allow for the calculation of ratios.`, `Ratio data allows for more sophisticated statistical analyses, including the calculation of averages, percentages, and comparisons using ratios.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Ratio data allows for more sophisticated statistical analyses, including the calculation of averages, percentages, and comparisons using ratios.</p><p>Ratio data provides the highest level of measurement and allows for all arithmetic operations, including averages, percentages and ratios. It also has an absolute zero point, representing the total absence of the attribute being measured.</p>` }
      ] },
    { number: '376', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>When dealing with ordinal data, which operation is considered inappropriate?</p>`,
          options: [`Ranking items according to their properties`, `Determining the relative standing of data points`, `Performing arithmetic operations like addition or subtraction`, `Classifying data into meaningful ordered categories`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Performing arithmetic operations like addition or subtraction</p><p>Ordinal data provides information about the relative position of an item within a set, but it does not quantify the difference between those positions; hence, it's inappropriate for arithmetic operations like addition or subtraction.</p>` }
      ] },
    { number: '377', marks: 1, layout: 0, section: 'Data Types',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements about interval data is correct?</p>`,
          options: [`Interval data has an absolute zero point, representing the true "absence" of the measured attribute.`, `Calculations such as addition and subtraction are not possible with interval data.`, `In interval data, ratios are meaningful and significant.`, `The difference between values in interval data is consistent and meaningful.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The difference between values in interval data is consistent and meaningful.</p><p>Interval data is numerical, with a meaningful and consistent difference between values. However, it does not have an absolute zero point, making ratios invalid, even though calculations such as addition and subtraction are possible.</p>` }
      ] },
    // ---------------- Feedback in Data Form ----------------
    { number: '378', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What do "likes" on a social media post indicate from a data perspective?</p>`,
          options: [`The age of the user`, `The geographical location of the user`, `Popularity or engagement within a community`, `The number of followers a user has`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Popularity or engagement within a community</p><p>Likes provide quantitative feedback, indicating what is popular or engaging within a community. They can serve as an indicator of how well the content resonates with viewers.</p>` }
      ] },
    { number: '379', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of using emoticons or emojis in online feedback?</p>`,
          options: [`They provide users with a way to express themselves.`, `They allow users to express emotions more accurately than a simple "like."`, `They allow users to communicate with each other in a convenient way.`, `They make comments look more engaging.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow users to express emotions more accurately than a simple "like."</p><p>The text mentions that, "Emoticons (or emojis) have added a new dimension to online feedback, allowing users to express emotions more precisely than a simple "like.""</p>` }
      ] },
    { number: '380', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>How can memes provide useful feedback for companies and organizations?</p>`,
          options: [`By being shared widely on social platforms`, `By reflecting the mood of an online community or society.`, `By increasing their product sales`, `By attracting potential employees`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By reflecting the mood of an online community or society.</p><p>As indicated in the text, through trending memes, companies can gauge public sentiment which could serve as essential feedback for shaping public image. This is because, memes not only get shared widely, but also reflect a common feeling or shared experience among a large group of people, thereby providing insights into the mood of an online community or society at large.</p>` }
      ] },
    { number: '381', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>In marketing, how can likes, emoticons, and memes be used?</p>`,
          options: [`They can be used as a tool for understanding the target audience.`, `They can be used to increase profits.`, `They can be used to simplify complex data.`, `They are used to manipulate the audience.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They can be used as a tool for understanding the target audience.</p><p>Likes, emoticons, and memes provide data that can be analyzed to understand an audience's sentiment. They can indicate if a campaign is creating a connection with the audience, what the audience likes or dislikes, and what ideas or beliefs are resonating with them.</p>` }
      ] },
    { number: '382', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What can emoticons in a dataset of social media post reactions help content creators understand more accurately?</p>`,
          options: [`The number of users that viewed the post.`, `The age of users that reacted to the post.`, `The quantitative data of users reaction to the post.`, `The sentiment of users towards the post.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The sentiment of users towards the post.</p><p>Emoticons add qualitative data to the dataset, allowing for a better understanding of user sentiment towards the content of the post.</p>` }
      ] },
    { number: '383', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the challenges of interpreting memes for data analysis?</p>`,
          options: [`Memes may convey complex layers of meaning and cultural specificity.`, `Memes are always preferred by the audience.`, `People always understand the meaning of memes.`, `Memes never reflect collective beliefs or criticisms.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Memes may convey complex layers of meaning and cultural specificity.</p><p>Memes can be difficult to interpret due to their cultural specificity and the layers of meaning they can convey. Therefore, context, audience, and cultural trends must be considered while analyzing them.</p>` }
      ] },
    { number: '384', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of how likes can be analyzed as a form of user feedback from social media data?</p>`,
          options: [`Companies use the number of likes to determine how many users saw the post.`, `Likes are mainly used to confirm the number of active users on a platform.`, `Companies analyze likes to identify trending posts and further understand what made them successful.`, `The analysis of likes has no real utility.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Companies analyze likes to identify trending posts and further understand what made them successful.</p><p>From the data perspective, likes on a post can serve as a quantitative feedback mechanism. By analyzing the number of likes, companies can identify what content resonates with the users and which posts are more engaging or popular. Through further analysis, they can identify what factors contributed to its success.</p>` }
      ] },
    { number: '385', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What can a data analyst infer from the frequency and sentiment score of a meme shared on social platforms?</p>`,
          options: [`The analyst can determine the type of humor the meme is based on.`, `The analyst can judge the age group of the people sharing the meme.`, `The analyst can deduce the mood of the online community or society at large.`, `The analyst can predict the next trending meme.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The analyst can deduce the mood of the online community or society at large.</p><p>The frequency of shares and sentiment scores of a meme can help data analysts interpret the collective sentiment or mood of an online community or society. For instance, frequent shares of a meme with a positive sentiment might imply a shared joy or satisfaction, while that of a negative sentiment might imply a shared dissatisfaction or frustration.</p>` }
      ] },
    { number: '386', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential difficulty in using likes, emoticons, and memes for understanding user sentiment?</p>`,
          options: [`Users may not use these tools.`, `These tools cannot reflect personal feelings.`, `The tools are limited in number.`, `These tools may not capture the full complexity of user sentiment.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — These tools may not capture the full complexity of user sentiment.</p><p>Likes, emoticons, and memes, due to their simplicity and specificity, may often fail to capture the full range of user sentiment and emotions.</p>` }
      ] },
    { number: '387', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>Based on the given dataset, what insights can a company gain from analysing the sentiments and shares of memes?</p>`,
          options: [`The popularity and type of social media platforms users prefer`, `The mood of an online community or society`, `The number of active social media users`, `The individual users' personal details`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The mood of an online community or society</p><p>The sentiment score and shares of a meme can indicate the mood of an online community or society, as memes are reflective of collective sentiment and cultural trends. These insights do not reveal the preferred social media platform of users, the number of active social media users, or personal details of individual users.</p>` }
      ] },
    { number: '388', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>What do likes provide in terms of data for companies, and how can they use it?</p>`,
          options: [`Likes provide qualitative feedback, helping companies identify unpopular content.`, `Likes provide quantitative feedback, allowing companies to measure the success of their marketing efforts.`, `Likes supply narrative feedback, enabling companies to create more engaging advertisements.`, `Likes provide subjective feedback, conferring companies the ability to match user interests.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Likes provide quantitative feedback, allowing companies to measure the success of their marketing efforts.</p><p>From a data perspective, likes provide quantitative feedback, indicating what is popular or engaging within a community. Companies can use this information to measure the effectiveness of marketing campaigns, gauge audience preferences, and refine content to better match user interests.</p>` }
      ] },
    { number: '389', marks: 1, layout: 0, section: 'Feedback in Data Form',
      items: [
        { type: 'mcq',
          question: `<p>How can emoticons be helpful for content creators to gauge user sentiments towards their content?</p>`,
          options: [`They can show the positive or negative sentiment towards their content on specific posts.`, `They can show how many users viewed their content.`, `They can show how many users shared their content.`, `They can provide the physical location of the users.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They can show the positive or negative sentiment towards their content on specific posts.</p><p>Emoticons allow users to express a wider range of emotions like love, anger, laughter, or sadness, thereby providing qualitative data to understand the sentiment of users towards content in a more nuanced way. Thus, they inform content creators on how users feel about their posts.</p>` }
      ] },
    // ---------------- Tracking with Blockchain ----------------
    { number: '390', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant advantage of using blockchain for recordkeeping in various industries?</p>`,
          options: [`It provides a platform for advertising.`, `It ensures records can be altered without consent.`, `It allows for data manipulation.`, `It provides a reliable, tamper-proof method for recordkeeping.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It provides a reliable, tamper-proof method for recordkeeping.</p><p>Blockchain ensures that records, once added, cannot be modified or deleted without consensus among the participants, making it a reliable and tamper-proof solution for recordkeeping.</p>` }
      ] },
    { number: '391', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>Which key characteristic of blockchain technology ensures that once a record is written to it, it cannot be altered without changing subsequent blocks?</p>`,
          options: [`Security`, `Immutability`, `Anonymity`, `Decentralisation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Immutability</p><p>The Blockchain feature of immutability ensures that once a record is written to the blockchain, it cannot be altered without changing subsequent blocks, which makes it an ideal solution for record keeping where data integrity is crucial.</p>` }
      ] },
    { number: '392', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>Why is blockchain technology considered suitable for tracking items and maintaining records?</p>`,
          options: [`Because it incorporates the internet of things (IoT).`, `Because of its immutability, decentralisation, and security features.`, `Because it heavily relies on a single trusted authority for information.`, `Because it uses traditional centralized data storage.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Because of its immutability, decentralisation, and security features.</p><p>Blockchain's core features such as immutability (ensuring data integrity), decentralisation (allowing shared information without reliance on a single trusted authority), and security (increased data protection due to storage across many nodes), make it an ideal solution for tracking items and maintaining records.</p>` }
      ] },
    { number: '393', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the main benefits of using blockchain for tracking items in supply chain management?</p>`,
          options: [`It provides automatic payments to suppliers.`, `It allows for rapid tracing of a product from its initial production to the end consumer.`, `It enables efficient communication between different parties in the supply chain.`, `It provides a centralized database for recording all transactions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows for rapid tracing of a product from its initial production to the end consumer.</p><p>Traceability is a key benefit of blockchain in supply chain management as it provides visibility of a product's journey from its initial production to its ultimate consumer.</p>` }
      ] },
    { number: '394', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What potential application does blockchain-based recordkeeping have in the Healthcare sector?</p>`,
          options: [`To provide emergency services with real-time traffic data.`, `To store patient data ensuring its accuracy, security, privacy, and unchangeable medical history.`, `To track doctor's attendance and punctuality records.`, `To privately store health insurance company's financial data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To store patient data ensuring its accuracy, security, privacy, and unchangeable medical history.</p><p>Blockchain-based recordkeeping in healthcare can be used to securely store patient data, where each update to a patient’s record is added as a new block, leading to a comprehensive and unchangeable medical history. This ensures the accuracy, security, and privacy of patient records.</p>` }
      ] },
    { number: '395', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What are the main challenges faced by blockchain technology?</p>`,
          options: [`Scalability, regulation, and interoperability`, `High cost, fraud, and spamming`, `Inaccuracy, hacking, and security breaches`, `Data corruption, unavailability, and misuse`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Scalability, regulation, and interoperability</p><p>Scalability becomes a challenge as with more number of transactions the size of the blockchain increases, demanding more storage and computational power. Regulation is another issue as many industries are highly regulated and blockchain records are immutable, causing conflict with laws that demand the deletion of personal data. Interoperability is a concern as there is no standard protocol for blockchain technology at present, causing difficulty in the sharing of information between different blockchains.</p>` }
      ] },
    { number: '396', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>How does blockchain-based recordkeeping benefit the finance sector?</p>`,
          options: [`It ensures patient data confidentiality.`, `It creates a tamper-proof record of financial transactions.`, `It allows a quick consultation for recording patient details.`, `It provides a traceable history for land property transactions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It creates a tamper-proof record of financial transactions.</p><p>Blockchains in the finance sector provide an immutable and auditable record of financial transactions, thus preventing fraud and ensuring regulatory compliance.</p>` }
      ] },
    { number: '397', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>How does blockchain technology enhance efficiency in supply chain management?</p>`,
          options: [`By reducing the need for intermediaries through the use of smart contracts`, `By allowing only a single party to maintain records`, `By increasing the number of intermediaries`, `By delaying record updates and transactions`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By reducing the need for intermediaries through the use of smart contracts</p><p>Blockchain technology can enhance efficiency in supply chain management by leveraging smart contracts, which automate processes like payments thus reducing the need for intermediaries.</p>` }
      ] },
    { number: '398', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What makes blockchain technology particularly secure?</p>`,
          options: [`It relies on a single trusted authority`, `Data is altered easily without changing subsequent blocks`, `The information is stored across many nodes`, `It is not decentralized`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The information is stored across many nodes</p><p>Blockchain's data is stored across many nodes, making it difficult for a hacker to alter the information without gaining control of a majority of nodes, making it secure.</p>` }
      ] },
    { number: '399', marks: 1, layout: 0, section: 'Tracking with Blockchain',
      items: [
        { type: 'mcq',
          question: `<p>What challenge does blockchain technology face with data protection laws like the General Data Protection Regulation (GDPR)?</p>`,
          options: [`The requirement for more storage and computational power`, `The lack of standard protocol for blockchain technology`, `The inability to delete personal data due to immutable blockchain records`, `The lack of effective communication between different systems`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The inability to delete personal data due to immutable blockchain records</p><p>Blockchain technology faces the challenge of complying with data protection laws, specifically concerning the "right to be forgotten," due to the immutable nature of blockchain records which prevents deletion of personal data.</p>` }
      ] },
    // ---------------- Software Features & Data Privacy ----------------
    { number: '400', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What can be done to mitigate data privacy concerns when storing and processing inputted data into fields in a user form?</p>`,
          options: [`Using role-based permissions for access control.`, `Ensuring data encryption.`, `Focusing on data minimisation.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>Proper data privacy involves role-based permissions for access control, data encryption, and data minimisation. It ensures that sensitive user data is not accessible to everyone within an organization, the data is encrypted, and only essential data is collected.</p>` }
      ] },
    { number: '401', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant challenge of using autofill features from a privacy perspective?</p>`,
          options: [`Difficulty of storing information locally.`, `The inconvenience of entering form details.`, `Ensuring the protection of user data.`, `Increasing the risk of phishing attacks.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ensuring the protection of user data.</p><p>One of the primary challenges with autofill from a privacy perspective is ensuring users' data protection. Encryption is necessary to protect sensitive information, and users should be able to control the enabling or disabling autofill features for various websites.</p>` }
      ] },
    { number: '402', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential issue with the implementation of checkboxes on a form relating to data privacy?</p>`,
          options: [`They may lead to repeated data entries.`, `They can mislead users into consenting to data practices they don't agree with.`, `They are visually unappealing to users.`, `They allow unauthorized access to sensitive data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They can mislead users into consenting to data practices they don't agree with.</p><p>Misleading or manipulative checkbox implementations, like pre-checked boxes for data consent, can trick users into unknowingly consenting to data practices that they may not agree with.</p>` }
      ] },
    { number: '403', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a recommended practice to ensure data privacy in a website's forms and features?</p>`,
          options: [`Encrypting all user data collected through forms.`, `Using checkboxes that require users to opt in.`, `Collecting all available data to enhance user experience.`, `Implementing strict access control policies.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Collecting all available data to enhance user experience.</p><p>Data Minimisation, collecting only the necessary data required for the application functionality, is one of the best practices for ensuring data privacy. Collecting all available data contradicts this principle and increases the risk in case of a data breach.</p>` }
      ] },
    { number: '404', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What impacts can the usage of autofill, checkboxes, and other form elements have?</p>`,
          options: [`They have no impact on user data privacy.`, `They enhance usability and convenience but might compromise users' privacy if not properly implemented.`, `They lead to decreased website traffic.`, `They improve the website aesthetic while compromising security.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They enhance usability and convenience but might compromise users' privacy if not properly implemented.</p><p>These features increase the usability of digital platforms and make it easier for users. However, if they are not properly implemented, they can expose sensitive user data and compromise their privacy.</p>` }
      ] },
    { number: '405', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following form features enhances user convenience but also requires careful implementation to ensure data privacy?</p>`,
          options: [`Encryption`, `Autofill`, `Access controls`, `Password-protection`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Autofill</p><p>Autofill feature can both enhance usability and pose a threat to user data privacy if not properly secured. It needs to be implemented with careful consideration.</p>` }
      ] },
    { number: '406', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What principle should software developers focus on to ensure better compliance with data privacy regulations and to reduce potential risks in the event of a data breach?</p>`,
          options: [`Principle of frequent data collection`, `Principle of detailed data collection`, `Principle of data maximisation`, `Principle of data minimisation`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Principle of data minimisation</p><p>The principle of data minimisation means only collecting the data that is necessary for the functionality of the application. Collecting minimal data reduces the risk in case of a data breach and ensures better compliance with data privacy regulations.</p>` }
      ] },
    { number: '407', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What is a recommended best practice to ensure data privacy when developing features like autofill, checkboxes and forms?</p>`,
          options: [`Collecting as much data as possible to enhance functionality`, `Using pre-checked boxes for user consent`, `Implementing strict access control policies`, `Making the encryption of user data optional`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Implementing strict access control policies</p><p>Implementing strict access control policies ensures that only authorized individuals can access user data, preventing misuse of information and protecting against data breaches.</p>` }
      ] },
    { number: '408', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>Which regulation mandates that users must explicitly consent to their data being collected and processed?</p>`,
          options: [`California Consumer Privacy Act`, `General Data Protection Regulation`, `Children's Online Privacy Protection Act`, `Health Insurance Portability and Accountability Act`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — General Data Protection Regulation</p><p>The General Data Protection Regulation (GDPR) mandates that users must explicitly consent to their data being collected and processed.</p>` }
      ] },
    { number: '409', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>How does autofill function in software applications?</p>`,
          options: [`It predicts the user's input based on previously saved information`, `It completes the form by generating random data`, `It requires the user to manually fill in all the information`, `It uses artificial intelligence to fill the form fields`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It predicts the user's input based on previously saved information</p><p>Autofill improves user experience by automatically filling in form fields based on previously saved information. This can speed up processes such as online purchase checkouts, as fields like shipping address or payment information can be populated automatically.</p>` }
      ] },
    { number: '410', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>How does autofill improve user experience in software applications?</p>`,
          options: [`Autofill introduces more complex and challenging form elements.`, `Autofill speeds up the process of navigating through the application.`, `Autofill can populate fields such as shipping address or payment information, making transactions faster and more convenient.`, `Autofill limits the user's control over their data security settings.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Autofill can populate fields such as shipping address or payment information, making transactions faster and more convenient.</p><p>Autofill can automatically populate form fields with previously saved information, making tasks like online transactions faster and more convenient for the user.</p>` }
      ] },
    { number: '411', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What are the key responsibilities of developers when implementing form elements like text fields, dropdowns, and radio buttons?</p>`,
          options: [`Developers should collect excessive data to optimize user experience.`, `Developers should collect only the necessary data and protect it through encryption and access controls.`, `Developers should avoid informing users of how their data will be used, stored, and shared.`, `Developers need not consider data encryption for form elements.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Developers should collect only the necessary data and protect it through encryption and access controls.</p><p>It’s crucial that developers collect only the necessary data and ensure its protection through encryption and access controls. Informing users about how their data will be used is a part of transparent and responsible data handling.</p>` }
      ] },
    { number: '412', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What makes checkboxes an important tool in ensuring compliance with data privacy regulations such as GDPR?</p>`,
          options: [`They allow users to navigate forms quicker.`, `They facilitate visual appeal to forms.`, `They provide an explicit method of acquiring user consent.`, `They automate data collection processes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They provide an explicit method of acquiring user consent.</p><p>GDPR requires explicit consent from users for their data to be collected and processed. Checkboxes provide a clear and unambiguous way for users to provide this consent, ensuring companies meet this requirement.</p>` }
      ] },
    { number: '413', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What best practice can help to protect user data, even if it is accessed without authorization?</p>`,
          options: [`Clear Consent Mechanisms`, `Data Minimisation`, `Data Encryption`, `User Education`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data Encryption</p><p>Data Encryption ensures that if data is intercepted or accessed without authorization, it cannot be easily read or used.</p>` }
      ] },
    { number: '414', marks: 1, layout: 0, section: 'Software Features & Data Privacy',
      items: [
        { type: 'mcq',
          question: `<p>What is the importance of access control in maintaining data privacy in a website's forms and features?</p>`,
          options: [`It ensures that all personnel within an organisation have access to sensitive user information.`, `It ensures that only authorised personnel have access to sensitive user information.`, `It allows users to input data into fields without any restrictions.`, `It allows all data to be collected, stored, and processed by the application.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It ensures that only authorised personnel have access to sensitive user information.</p><p>Access control is crucial in maintaining data privacy as it makes sure that only the authorized personnel who truly need to view or use the sensitive user information for their work, have access to it. It prevents widespread access to sensitive data within an organization.</p>` }
      ] },
    // ---------------- Benefits & Risks of Data Mining ----------------
    { number: '415', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What is a major risk associated with data mining?</p>`,
          options: [`Invasion of personal privacy`, `Misinterpretation of data`, `Lack of interesting data`, `All of the above`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Invasion of personal privacy</p><p>This content specifically identifies the invasion of personal privacy as a major risk associated with data mining.</p>` }
      ] },
    { number: '416', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of how data mining can enhance decision-making in an e-commerce company?</p>`,
          options: [`By analyzing historical data to recommend products to customers.`, `By determining the geographical location of a customer.`, `By identifying the owner of the credit card.`, `By categorizing the customers into frequent, occasional, or seasonal buyers.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By analyzing historical data to recommend products to customers.</p><p>The content mentions that by analyzing historical data and customer purchasing habits, an e-commerce company can recommend products that are commonly bought together, thus enhancing decision-making.</p>` }
      ] },
    { number: '417', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What is a consequence of data misuse and unethical conduct associated with data mining?</p>`,
          options: [`Invasion of personal privacy`, `Discrimination or profiling`, `Inaccuracy of the data`, `Significant increase of security risks`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Discrimination or profiling</p><p>If data mining is misused, it can lead to harmful consequences like discrimination or profiling. For instance, a company could exclude specific customer groups from receiving offers based on income or ethnicity, which is a discriminatory practice.</p>` }
      ] },
    { number: '418', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What can be identified through data mining in a healthcare dataset?</p>`,
          options: [`Trending topics on social media platforms`, `Customer preferences on retail products`, `Disease outbreaks and effectiveness of different treatments`, `The most popular product combinations in a retail company`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Disease outbreaks and effectiveness of different treatments</p><p>According to the content, data mining in healthcare datasets can help healthcare providers predict disease outbreaks and identify the effectiveness of different treatments. This information would not be present in retail transaction datasets or social media engagement datasets.</p>` }
      ] },
    { number: '419', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What is one way data mining can enhance an e-commerce company's customer service?</p>`,
          options: [`By providing real-time tracking of customer's activity`, `By providing detailed demographic information of every customer`, `By analyzing customer purchasing habits to recommend relevant products`, `By assisting in creating personalised treatment plans for customers based on their purchasing history`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By analyzing customer purchasing habits to recommend relevant products</p><p>Data mining allows e-commerce companies to analyze customer purchasing habits and identify patterns which can then be used to recommend products that a customer is likely to be interested in, leading to increased sales and improved customer satisfaction.</p>` }
      ] },
    { number: '420', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of information contained within a retail transactions dataset?</p>`,
          options: [`User activity on social media platforms`, `Details of patient visits in hospitals`, `Details such as product names, prices, and quantities`, `Details about disease outbreaks`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Details such as product names, prices, and quantities</p><p>A retail transactions dataset contains details of transactions made in the retail company's stores and online platform, such as product names, prices, quantities, customer IDs, timestamps, and payment methods.</p>` }
      ] },
    { number: '421', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>How can data mining enhance targeted marketing and customer segmentation?</p>`,
          options: [`By segmenting customers based on their income level only`, `By sending the same marketing campaigns to all customers`, `By segmenting customers into different groups based on shared characteristics and tailoring marketing campaigns to each group's needs`, `By making random guesses about customer behavior without analyzing any data`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By segmenting customers into different groups based on shared characteristics and tailoring marketing campaigns to each group's needs</p><p>Data mining allows businesses to segment customers into different groups based on shared characteristics such as purchase history, demographics, and web browsing behavior and therefore tailor marketing campaigns to each group's specific needs and preferences, leading to more effective communication and higher return on investment.</p>` }
      ] },
    { number: '422', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>Which regulation companies must comply with to ensure the protection of personal data during data mining?</p>`,
          options: [`The US Privacy Act`, `The Electronic Communications Privacy Act`, `General Data Protection Regulation (GDPR)`, `The Federal Trade Commission Act`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — General Data Protection Regulation (GDPR)</p><p>The text mentions that companies must comply with data protection regulations like the General Data Protection Regulation (GDPR) to safeguard personal information during data mining.</p>` }
      ] },
    { number: '423', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a benefit of data mining as mentioned in the text?</p>`,
          options: [`Improved decision-making`, `Targeted marketing and customer segmentation`, `Real-time weather forecasting`, `Fraud detection`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Real-time weather forecasting</p><p>The text doesn't mention real-time weather forecasting as a benefit of data mining, while it identified improved decision-making, targeted marketing and customer segmentation, and fraud detection as benefits.</p>` }
      ] },
    { number: '424', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What kind of insights could be gained from data mining in a retail transactions dataset?</p>`,
          options: [`The effectiveness of different treatments in a hospital`, `The tailoring of care plans for individual patients`, `Customer preferences and product combination popularity`, `Trending topics on social media platforms`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Customer preferences and product combination popularity</p><p>Data mining in a retail transactions dataset allows the company to understand customer preferences, identify popular product combinations and optimize inventory management.</p>` }
      ] },
    { number: '425', marks: 1, layout: 0, section: 'Benefits & Risks of Data Mining',
      items: [
        { type: 'mcq',
          question: `<p>What can result from data mining when the data being analysed is incomplete or incorrect?</p>`,
          options: [`There will be a high risk of invasion of personal privacy.`, `It can lead to discrimination or profiling.`, `Outcomes of data mining will be flawed.`, `It will likely result in a security breach.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Outcomes of data mining will be flawed.</p><p>If a company relies on inaccurate or incomplete data for their data mining, the outcomes of the data mining process will be flawed, possibly leading to wrong conclusions or decisions.</p>` }
      ] },
    // ---------------- Ethical Use of Data in Research ----------------
    { number: '426', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is an ethical concern that arises when developing a machine learning model to predict creditworthiness?</p>`,
          options: [`The model is built on historical data that contains a disproportionate number of approved loans from wealthier neighborhoods, introducing potential bias.`, `The model is not sophisticated enough to accurately predict creditworthiness.`, `The model does not consider a customer's employment status or income when determining creditworthiness.`, `The model only considers the customer's credit score when determining creditworthiness.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The model is built on historical data that contains a disproportionate number of approved loans from wealthier neighborhoods, introducing potential bias.</p><p>The concern related to ethical data usage in this context is that using historical data that contains a disproportionate number of approved loans from wealthier neighborhoods might create a bias favoring these demographics, hence leading to discriminatory lending decisions.</p>` }
      ] },
    { number: '427', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of how bias can enter a machine learning model?</p>`,
          options: [`A facial recognition system performs poorly at recognising darker-skinned faces because the training data consisted primarily of lighter-skinned faces.`, `A system fails to identify certain fruits in images because its training data included only pictures of vegetables.`, `A translation system makes mistakes because it was trained on a dataset that included both English and French sentences.`, `A system incorrectly classifies cats as dogs because its training data included images of both animals.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — A facial recognition system performs poorly at recognising darker-skinned faces because the training data consisted primarily of lighter-skinned faces.</p><p>The</p>` }
      ] },
    { number: '428', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What does data ownership involve in the context of personal data?</p>`,
          options: [`It involves the person who collects the personal data automatically owning it.`, `It means that only companies can own personal data.`, `It means that any data collected can be used without the individual's knowledge or consent.`, `It involves user consent, the right to be forgotten, and who has the rights to access, use, modify, or share the data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It involves user consent, the right to be forgotten, and who has the rights to access, use, modify, or share the data.</p><p>In the context of personal data, data ownership involves user consent, the right to be forgotten, and determining who has rights to access, use, modify, or share the data. Without these elements, there could be breaches of privacy and potentially illegal activity.</p>` }
      ] },
    { number: '429', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What are some potential consequences of inaccurate data?</p>`,
          options: [`Poor decision-making and a loss of trust in technology`, `Flawed research outcomes`, `Severe consequences in healthcare and software development`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Inaccurate data can lead to poor decision-making, flawed research outcomes, a loss of trust in technology. Further, it has severe consequences in fields like healthcare and software development where it can lead to life-threatening situations and failed products respectively.</p>` }
      ] },
    { number: '430', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What could be a consequence of inaccurate data in healthcare settings?</p>`,
          options: [`New software features may not serve user needs`, `The patient may be exposed to life-threatening situations`, `Leads to loss of trust in technology`, `All of the above`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The patient may be exposed to life-threatening situations</p><p>The case gives an example where incorrect data about medication allergies in a patient's medical records could lead to severe consequences, such as a life-threatening situation.</p>` }
      ] },
    { number: '431', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is one method for identifying potential bias in loan approval decision-making?</p>`,
          options: [`Use a filter to check how many males vs. females have been approved for loans.`, `Ignore the data about the gender of the loan applicants.`, `Ignore the data about the income level of the loan applicants.`, `Analyze only the employment status of the loan applicants without considering their income.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use a filter to check how many males vs. females have been approved for loans.</p><p>The text suggests using a filter to check how many males vs. females have been approved for loans as a method to identify potential bias in the decision-making process.</p>` }
      ] },
    { number: '432', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is the main challenge in ensuring data ownership rights?</p>`,
          options: [`Obtaining consent from individuals before collecting their data`, `Ensuring privacy of the data collected`, `Allowing individuals to withdraw consent at any time`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>The main challenge is ensuring that data subjects have a say in how their data is used. This includes obtaining their consent before collecting data, ensuring privacy of the data collected, and allowing them to withdraw consent at any time. These aspects are all important in respecting data ownership rights.</p>` }
      ] },
    { number: '433', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What potential patterns could arise that may indicate bias in lending decisions?</p>`,
          options: [`Wealthier neighborhoods might have higher rates of approved loan applications.`, `Individuals with higher incomes will always have a higher credit score.`, `Males are more likely to get their loan applications approved than females.`, `Student and unemployed individuals have no chance of obtaining approved loan applications.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Wealthier neighborhoods might have higher rates of approved loan applications.</p><p>As the data includes information related to income, zip codes and loan status, it could potentially create biased patterns that favor wealthier neighborhoods based on higher rates of approved loans. This does not mean that the other options are impossible scenarios, but they are not as clearly implied by the data.</p>` }
      ] },
    { number: '434', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of General Data Protection Regulation (GDPR) in data ownership?</p>`,
          options: [`It enables organizations to use any data without consent.`, `It helps organizations to obtain consent from individuals before collecting their data.`, `It overlooks the privacy and consent while handling individuals' data.`, `It is primarily used in analyzing the dataset.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps organizations to obtain consent from individuals before collecting their data.</p><p>The General Data Protection Regulation (GDPR) requires organizations to obtain consent from individuals before collecting their data. It primarily ensures that the privacy rights of individuals are respected, and they understand how their data is being used.</p>` }
      ] },
    { number: '435', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the methods you could use to ensure the accuracy of data in a dataset?</p>`,
          options: [`Use conditional formatting to highlight entries with income recorded as 0 for employed individuals.`, `Remove any records where Consent Obtained is marked as Yes.`, `Check for outliers in age, such as entries indicating an age of 5.`, `Include all entries regardless of their accuracy to maintain data volume.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use conditional formatting to highlight entries with income recorded as 0 for employed individuals.</p><p>To ensure the accuracy of a dataset, you could use methods such as conditional formatting to highlight potential errors or discrepancies, such as income recorded as 0 for employed individuals.</p>` }
      ] },
    { number: '436', marks: 1, layout: 0, section: 'Ethical Use of Data in Research',
      items: [
        { type: 'mcq',
          question: `<p>In the context of a dataset for a medical study, how can data bias occur if only specific groups are overwhelmingly represented?</p>`,
          options: [`The study might become more accurate as more data is available for a specific group`, `The study can still accurately represent all demographic groups regardless of who is in the dataset`, `The applicability of the study to underrepresented or unrepresented groups will be limited, leading to biased conclusions`, `Bias cannot occur from group representation within a dataset`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The applicability of the study to underrepresented or unrepresented groups will be limited, leading to biased conclusions</p><p>If there is an overrepresentation of one group in a dataset, the model will be tailored and more applicable to that group. This limits its applicability for other demographic groups, possibly leading to biased conclusions.</p>` }
      ] },
    // ---------------- Project Concept ----------------
    { number: '437', marks: 1, layout: 0, section: 'Project Concept',
      items: [
        { type: 'mcq',
          question: `<p>Which option best describes what should be included in a strong problem statement before designing a Django enterprise system?</p>`,
          options: [`A problem statement should explain the database structure, the interface layout, and the Django tools used to build it.`, `A problem statement should list the preferred technology, the main web pages, and the features the system will include.`, `A problem statement should describe the current process, its main limitation, and the consequence for users or the organisation.`, `A problem statement should focus on the final solution, the visual design style, and the expected launch date for users.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A problem statement should describe the current process, its main limitation, and the consequence for users or the organisation.</p><p>The slide explains that a strong problem statement defines the situation needing improvement before choosing technologies or features. It should identify the current process, the key limitation, and why that limitation matters to users or the organisation.</p>` }
      ] },
    { number: '438', marks: 1, layout: 0, section: 'Project Concept',
      items: [
        { type: 'mcq',
          question: `<p>When planning a Django enterprise system, why is it important to describe target users in relation to their tasks and current problems?</p>`,
          options: [`It focuses mainly on the developer’s preferred workflow so the system can be built quickly and consistently.`, `It links each user group to their tasks, problems and justified needs so design choices reflect how the system will be used.`, `It lists every possible user group so the project includes as many features and permissions as possible.`, `It describes the database tables first so user roles can be added later once the main functions are complete.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It links each user group to their tasks, problems and justified needs so design choices reflect how the system will be used.</p><p>A strong Django project concept identifies target users and explains their tasks, problems and needs using evidence or reasoning. This helps guide design decisions such as models, views, forms, authentication and permissions from the users’ perspectives.</p>` }
      ] },
    { number: '439', marks: 1, layout: 0, section: 'Project Concept',
      items: [
        { type: 'mcq',
          question: `<p>A student proposes a Django booking system with online requests and staff approval. Which explanation best connects this feature to enterprise value?</p>`,
          options: [`It should show how the feature solves the stated problem by improving processes or information use.`, `It should focus on how the feature makes the project more complex and technically impressive.`, `It should list the feature’s interface screens and explain how each screen is styled for users.`, `It should describe the programming tools used to build the feature and justify the code structure.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It should show how the feature solves the stated problem by improving processes or information use.</p><p>Enterprise value comes from linking system features to the problem statement and explaining how they improve organisational processes or information management, such as reducing manual work, improving accuracy, improving access, or supporting decisions.</p>` }
      ] },
    { number: '440', marks: 1, layout: 0, section: 'Project Concept',
      items: [
        { type: 'mcq',
          question: `<p>Which project idea best balances feasibility with enterprise characteristics for a Year 11–12 Django project?</p>`,
          options: [`A full online marketplace with payments, disputes, ratings and advanced product search.`, `A simple personal notes page for one user with no permissions, reports or shared workflow.`, `A static information website listing textbook prices without accounts, forms or database storage.`, `A second-hand textbook listing system with roles, stored listings, search and controlled contact forms.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A second-hand textbook listing system with roles, stored listings, search and controlled contact forms.</p><p>A feasible Django enterprise project should be realistic in scope while still showing enterprise features such as structured data, user roles, forms, authentication, workflows and useful outputs. The textbook listing system has clear boundaries but still demonstrates these ideas.</p>` }
      ] },
    { number: '441', marks: 1, layout: 0, section: 'Project Concept',
      items: [
        { type: 'mcq',
          question: `<p>A student is proposing a Django system for a small company with remote staff and plans to expand. Which approach best reflects the enterprise conditions described in the slide?</p>`,
          options: [`It should focus mainly on local file storage so staff can work independently.`, `It should define core online tasks clearly while allowing secure access and later growth.`, `It should avoid documentation because distributed teams need flexible requirements.`, `It should include every possible feature at the start to suit future expansion.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It should define core online tasks clearly while allowing secure access and later growth.</p><p>Modern enterprise projects often involve remote access, distributed teams and start-up growth. A strong Django project concept should therefore support secure web-based work, have clear requirements for developers, and begin with essential features that can later scale.</p>` }
      ] },
    // ---------------- System Requirements ----------------
    { number: '442', marks: 1, layout: 0, section: 'System Requirements',
      items: [
        { type: 'mcq',
          question: `<p>A company wants to replace spreadsheet-based customer request tracking with a Django enterprise system. Why are requirements important after the problem has been defined?</p>`,
          options: [`They ensure every user request is included, even when time and budget are limited.`, `They translate the broad issue into specific targets that guide design and can be checked later.`, `They focus mainly on visual page layouts so developers can build templates quickly.`, `They replace the need for testing by describing the system before coding begins.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They translate the broad issue into specific targets that guide design and can be checked later.</p><p>Requirements matter because they turn a problem definition into clear, prioritised and verifiable development targets. They guide decisions about parts of the system such as data, authentication, testing and deployment, and help manage constraints.</p>` }
      ] },
    { number: '443', marks: 1, layout: 0, section: 'System Requirements',
      items: [
        { type: 'mcq',
          question: `<p>Which statement is the best example of a clear, testable functional requirement for a booking feature?</p>`,
          options: [`The system should provide a modern booking experience for all customers.`, `The system shall allow an authenticated customer to create, edit and cancel a booking before the deadline.`, `The system shall make bookings easier for customers and staff to organise.`, `The system should manage customer bookings in a simple and reliable way.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The system shall allow an authenticated customer to create, edit and cancel a booking before the deadline.</p><p>A clear functional requirement states what user can do, the actions available, the data involved and any conditions. The correct option identifies the authenticated customer, the booking actions and the deadline condition, making it testable.</p>` }
      ] },
    { number: '444', marks: 1, layout: 0, section: 'System Requirements',
      items: [
        { type: 'mcq',
          question: `<p>Which requirement is the best example of a measurable non-functional requirement for a Django enterprise reporting page?</p>`,
          options: [`The report page should allow users to export data as a spreadsheet file.`, `The report page should load within three seconds for most users during normal use.`, `The report page should display a summary chart after the user selects a class.`, `The report page should let teachers filter records by class and date range.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The report page should load within three seconds for most users during normal use.</p><p>A non-functional requirement describes how well the system must operate, such as performance, reliability or security. A measurable page load time is a performance requirement, while the other options describe specific features or user actions.</p>` }
      ] },
    { number: '445', marks: 1, layout: 0, section: 'System Requirements',
      items: [
        { type: 'mcq',
          question: `<p>A client asks a development team to add a new dashboard widget to a student assessment system. Why should the team ask which user story or business need the widget supports?</p>`,
          options: [`It removes the need to discuss the feature with clients or users.`, `It shows whether the feature supports a real user need or should be reconsidered.`, `It guarantees the feature will be completed before lower priority tasks.`, `It proves the feature can be built using the chosen programming language.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It shows whether the feature supports a real user need or should be reconsidered.</p><p>Traceability links requirements and features back to user stories, business goals or agreed constraints. This helps teams decide whether a requested feature is essential, lower priority, unnecessary or poorly understood.</p>` }
      ] },
    { number: '446', marks: 1, layout: 0, section: 'System Requirements',
      items: [
        { type: 'mcq',
          question: `<p>A Django enterprise system requirement states: “The customer search page must return matching records within two seconds when 50 staff search 10,000 records.” Which classification best fits this requirement?</p>`,
          options: [`It is a security requirement because it reduces exposure of customer records.`, `It is a performance requirement because it sets a response-time target under load.`, `It is an authorisation requirement because it controls who can run searches.`, `It is a usability requirement because it makes searching simpler for staff.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is a performance requirement because it sets a response-time target under load.</p><p>The requirement focuses on how quickly the system must respond when handling a defined workload, such as many records or users. That makes it a performance requirement, not mainly a security, usability or authorisation requirement.</p>` }
      ] },
    // ---------------- Feasibility Scope ----------------
    { number: '447', marks: 1, layout: 0, section: 'Feasibility Scope',
      items: [
        { type: 'mcq',
          question: `<p>Before starting implementation of a Django enterprise system, what is the main purpose of completing a feasibility scope?</p>`,
          options: [`Assess whether the team can build, test and deploy the system within the available constraints.`, `List the features users want and begin coding the system as quickly as possible.`, `Choose the most advanced tools available to make the system technically impressive.`, `Delay planning until after implementation so real problems can be identified.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Assess whether the team can build, test and deploy the system within the available constraints.</p><p>Feasibility in a Django project means judging whether the proposed system can realistically be completed using the available time, skills, resources and constraints. It should be evidence-based and completed before implementation to reduce risks such as excessive complexity, poor security or incomplete features.</p>` }
      ] },
    { number: '448', marks: 1, layout: 0, section: 'Feasibility Scope',
      items: [
        { type: 'mcq',
          question: `<p>A student team wants to add role-based access and file uploads to a Django enterprise project with a fixed school deadline. What is the best planning response before implementation begins?</p>`,
          options: [`Assign every task to one developer so responsibility is simple and communication is reduced.`, `Select the most impressive Django features first so the project appears complex and ambitious.`, `Assess the team’s Django skills and map dependent tasks so risky features and delays are identified early.`, `Begin coding the database and interface immediately so testing can be completed near the deadline.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Assess the team’s Django skills and map dependent tasks so risky features and delays are identified early.</p><p>Technical constraints involve the tools, infrastructure and skills available, while time constraints involve deadlines, task sequencing and dependencies. Identifying these early helps the team avoid unsafe or unreliable commitments and plan responsibilities using tools such as a Gantt chart and action plan.</p>` }
      ] },
    { number: '449', marks: 1, layout: 0, section: 'Feasibility Scope',
      items: [
        { type: 'mcq',
          question: `<p>A team is planning a Django system for school club events. They decide to include bookings and an admin dashboard, but exclude payments and SMS reminders for the first version. Why is this a good use of project scope?</p>`,
          options: [`It lists every possible feature so the team can decide what to build during coding.`, `It focuses mainly on advanced extras so the final system appears more impressive to users.`, `It sets agreed feature limits so the team can deliver the core requirements without uncontrolled additions.`, `It removes the need for user requirements because the team has already chosen the features.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It sets agreed feature limits so the team can deliver the core requirements without uncontrolled additions.</p><p>A clear scope statement defines what is included and deliberately excluded. This helps everyone share the same expectations and prevents scope creep, where extra features make the project unmanageable.</p>` }
      ] },
    { number: '450', marks: 1, layout: 0, section: 'Feasibility Scope',
      items: [
        { type: 'mcq',
          question: `<p>A student team is building a Django prototype using SQLite and free hosting. Before coding, they review hosting limits, backup needs, login security, testing time and what they would do if a team member became unavailable. What is the main purpose of this planning activity?</p>`,
          options: [`It identifies likely constraints and threats, then plans practical actions to reduce their effect.`, `It confirms that open-source tools remove the need for budgeting or risk planning.`, `It replaces technical testing by listing every feature the final system should contain.`, `It guarantees the project will succeed if the team follows the original schedule.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It identifies likely constraints and threats, then plans practical actions to reduce their effect.</p><p>Resource and budget planning checks whether the project is realistic with available tools, services, time and assumptions. Risk analysis then considers likelihood and impact of possible problems and matches them with mitigations, such as version control, backups, early permission testing and buffer time.</p>` }
      ] },
    { number: '451', marks: 1, layout: 0, section: 'Feasibility Scope',
      items: [
        { type: 'mcq',
          question: `<p>A team is planning an MVP for a Django event booking system with limited time and a fixed deadline. Which approach best matches the purpose of an MVP?</p>`,
          options: [`Build the visual reports first, because they are easiest to demonstrate even if bookings are incomplete.`, `Build the secure core booking workflow first, using the plan and risks to justify delaying extra features.`, `Build only the database tables first, because an MVP does not need meaningful user interaction.`, `Build every requested feature at once, because a wider feature list proves the system is more ambitious.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Build the secure core booking workflow first, using the plan and risks to justify delaying extra features.</p><p>An MVP is the smallest useful version that solves the main user problem and can be tested meaningfully. For the event system, this means delivering the secure core workflow, such as login, event listing, booking and administration, while justifying delayed extras using feasibility evidence such as constraints, schedule, budget and risks.</p>` }
      ] },
    // ---------------- Action Planning ----------------
    { number: '452', marks: 1, layout: 0, section: 'Action Planning',
      items: [
        { type: 'mcq',
          question: `<p>Why is an action plan important before building an enterprise Django project?</p>`,
          options: [`It focuses mainly on finishing the interface first so users can judge the system before data is added.`, `It lists coding tasks separately so each developer can complete their own section without coordination.`, `It maps linked tasks, evidence and responsibilities so components are built and reviewed in a logical order.`, `It records final testing results only so the completed system can be evaluated after development ends.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It maps linked tasks, evidence and responsibilities so components are built and reviewed in a logical order.</p><p>An effective action plan shows what must be done, when, by whom and how progress is checked. In a Django project, this is important because models, views and templates depend on each other, and documentation provides evidence of a controlled process.</p>` }
      ] },
    { number: '453', marks: 1, layout: 0, section: 'Action Planning',
      items: [
        { type: 'mcq',
          question: `<p>Which task order best shows realistic sequencing for part of a Django enterprise project?</p>`,
          options: [`Build protected forms, design entities, define stored data, then clarify login requirements.`, `Clarify login requirements, define stored data, design entities, then build protected forms.`, `Design entities, build protected forms, clarify login requirements, then define stored data.`, `Define stored data, build protected forms, clarify login requirements, then design entities.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Clarify login requirements, define stored data, design entities, then build protected forms.</p><p>Early planning tasks should establish requirements and data design before major coding. Protected forms depend on both the data model and clarified authentication or access-control requirements.</p>` }
      ] },
    { number: '454', marks: 1, layout: 0, section: 'Action Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django team notices that model implementation is taking longer than planned. How should a Gantt chart help the team respond?</p>`,
          options: [`It replaces the need for team discussion because all decisions are shown on the timeline.`, `It guarantees that each task will finish on time and prevents overlap between project phases.`, `It helps identify which later tasks may be affected and supports evidence-based changes to the schedule.`, `It mainly records final delivery dates so the project can be checked after completion.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It helps identify which later tasks may be affected and supports evidence-based changes to the schedule.</p><p>A Gantt chart is useful because it shows task durations, overlaps and dependencies. If one task is delayed, the team can see which later tasks may be affected and update the plan using actual progress evidence.</p>` }
      ] },
    { number: '455', marks: 1, layout: 0, section: 'Action Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django team reduces the scope of a feature after user feedback and then changes the next tasks in its action plan. What is the main value of recording this in the process diary?</p>`,
          options: [`It replaces the need for testing by proving that tasks were completed on time.`, `It mainly lists code files so developers can avoid revisiting earlier work.`, `It records reasons for changes and helps justify later adjustments to the plan.`, `It provides a final summary of the project after the system has been delivered.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It records reasons for changes and helps justify later adjustments to the plan.</p><p>A process diary is an ongoing record of decisions, problems, feedback and refinements. This supports evaluation during development and can justify changes to priorities, dependencies or deadlines in the action plan.</p>` }
      ] },
    { number: '456', marks: 1, layout: 0, section: 'Action Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django team plans a complex reporting feature but realises no team member has used the required reporting library before. What is the most appropriate way to improve the feasibility of the action plan?</p>`,
          options: [`Remove all testing tasks so the team has more time to learn the new technology.`, `Add a short prototype task and reassess the plan before building the feature fully.`, `Build the feature first and update the storyboard only if users complain later.`, `Keep the original schedule and solve issues only after the final system is complete.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Add a short prototype task and reassess the plan before building the feature fully.</p><p>Feasibility checking means comparing the plan with available time, skills, tools and resources. If a feature depends on unfamiliar technology, the plan should include research or prototyping before full implementation, then be refined using evidence from testing or feedback.</p>` }
      ] },
    // ---------------- Development Methods ----------------
    { number: '457', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>A team is planning a Django-based enterprise system with user accounts, forms, a database and administrative features. Which approach best shows an appropriate choice of development method?</p>`,
          options: [`Choose a method that focuses mainly on interface design before considering data or security.`, `Choose a method that lets the team start coding quickly and add documentation at the end.`, `Choose a method that suits the project’s risks, requirements, team skills and need for reliability.`, `Choose a method that avoids user feedback so changes do not interrupt development work.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Choose a method that suits the project’s risks, requirements, team skills and need for reliability.</p><p>The slide explains that a development method should match the nature of the problem, certainty of requirements, team skills, time available, and the importance of reliability, security and data quality. It should also help manage changes, risks, documentation and user involvement.</p>` }
      ] },
    { number: '458', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>An organisation needs a new reporting system for a highly regulated process. The data fields, reports and security rules are already fully defined before development begins. Which decision best fits the waterfall method?</p>`,
          options: [`Use waterfall because it lets users redesign workflows after each prototype.`, `Use waterfall because it is best when requirements are unclear at the start.`, `Use waterfall because the rules are stable and formal approval points are important.`, `Use waterfall because it avoids producing documentation until testing is complete.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use waterfall because the rules are stable and formal approval points are important.</p><p>Waterfall suits projects with well-understood, stable requirements and a need for documentation, approvals and predictable scheduling. It is less suitable when requirements are still emerging or need refinement through user interaction.</p>` }
      ] },
    { number: '459', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>A school is developing a Django system for room bookings, but staff are unsure which screens and rules will be easiest to use. Which action best reflects an Agile approach?</p>`,
          options: [`Delay testing the booking system until all features and reports have been fully implemented.`, `Define every booking requirement in detail, then avoid changes until the system is complete.`, `Focus only on writing code quickly, then add documentation after the final release.`, `Build a basic booking feature, test it with users, then refine the design in the next cycle.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Build a basic booking feature, test it with users, then refine the design in the next cycle.</p><p>Agile development uses short cycles to produce working increments, gather feedback and improve the system. It still includes planning, testing and documentation, but these happen continuously rather than only at the start or end.</p>` }
      ] },
    { number: '460', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>A company creates a simple Django prototype of a booking screen because staff are unsure which fields and navigation will best fit their process. What is the most appropriate next step?</p>`,
          options: [`Avoid showing the prototype to users, then base the final system on the developers’ original assumptions.`, `Treat every feature in the prototype as approved, then copy its temporary data structures into the final system.`, `Use the prototype to check the workflow with users, then document confirmed changes before building the full system.`, `Release the prototype as the final system quickly, then add missing validation only if users complain later.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use the prototype to check the workflow with users, then document confirmed changes before building the full system.</p><p>Prototyping helps users and developers explore requirements, test design ideas and reveal misunderstandings before committing to the final system. However, teams must be clear about what is experimental and what has been confirmed, because a prototype may have incomplete security, validation or data structures.</p>` }
      ] },
    { number: '461', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>A department has built a spreadsheet tool to track local tasks. Other departments now want to use it for shared records, user access and management reports. Which decision best reflects the risks and appropriate use of end-user development?</p>`,
          options: [`Outsource the whole system immediately because end-user tools are never suitable for business tasks.`, `Use the spreadsheet to explore needs, then develop the shared system through a controlled process.`, `Let each department build its own version so local requirements can be met without delays.`, `Keep expanding the spreadsheet because staff understand the workflow and can change it quickly.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use the spreadsheet to explore needs, then develop the shared system through a controlled process.</p><p>End-user development can be useful for small, low-risk tasks or for exploring requirements, but a shared system with user accounts and enterprise reporting needs proper design, testing, documentation and access controls. A controlled process is more suitable for the final system.</p>` }
      ] },
    { number: '462', marks: 1, layout: 0, section: 'Development Methods',
      items: [
        { type: 'mcq',
          question: `<p>A student team is building a Django system for managing school activity records. Staff know the general need, but are unsure about the exact data fields, validation rules and reports. Which development decision is best justified?</p>`,
          options: [`Use short iterations to build working Django features, gather user feedback, and refine models, forms and reports.`, `Let end users build the full system themselves because they best understand the current workflow.`, `Complete all models, forms and reports in a fixed sequence before showing users any working software.`, `Outsource the whole project immediately because Django applications always require specialist development.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use short iterations to build working Django features, gather user feedback, and refine models, forms and reports.</p><p>An iterative approach is justified when requirements become clearer during development and feedback is needed. Django supports this because features such as models, migrations, views, templates and forms can be built and refined in manageable stages.</p>` }
      ] },
    // ---------------- Project Environments ----------------
    { number: '463', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>A company is developing an enterprise system using remote staff, freelancers and a cloud provider. Which project management approach best reflects the changing workplace described in the slide?</p>`,
          options: [`Plan communication, access, contracts and quality controls as core project activities.`, `Reduce planning time because external providers manage their own responsibilities.`, `Assume the same office-based processes will work if tasks are clearly assigned.`, `Focus mainly on coding tasks and leave collaboration details to each team.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Plan communication, access, contracts and quality controls as core project activities.</p><p>Distributed enterprise projects require project managers to treat communication, data access, contracts, security, documentation and quality control as central parts of the project plan, not as minor administrative issues.</p>` }
      ] },
    { number: '464', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>An enterprise project team is working remotely and handling sensitive system data. Which approach best addresses both collaboration and security risks in this situation?</p>`,
          options: [`Set clear communication rules, document decisions, control versions, and secure access to project data.`, `Reduce scheduled communication, rely on informal updates, allow local file copies, and share access widely.`, `Focus mainly on hiring remote specialists, avoid strict meeting protocols, and let teams choose security methods.`, `Replace documentation with video meetings, use personal devices freely, and limit access controls to managers.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Set clear communication rules, document decisions, control versions, and secure access to project data.</p><p>Remote project work can improve flexibility, but it requires deliberate communication, careful documentation, visible task management, version control and security controls such as secure login, role-based access and encrypted communication.</p>` }
      ] },
    { number: '465', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>An Australian enterprise plans to use an offshore team to build and test part of a new system. Which approach best manages the main risks of this arrangement?</p>`,
          options: [`Use detailed specifications, regular reviews and agreed quality measures while checking legal and data requirements.`, `Share project data freely with the offshore provider as long as the contract sets a completion date.`, `Avoid time zone delays by removing formal review stages and accepting completed work at delivery.`, `Focus mainly on the lower development cost and allow the offshore team to decide the final requirements.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use detailed specifications, regular reviews and agreed quality measures while checking legal and data requirements.</p><p>Offshore development can reduce costs and provide skills, but it creates risks around communication, quality, privacy, intellectual property and data sovereignty. Effective management requires clear specifications, agreed deliverables, structured reviews, measurable quality criteria and compliance checks.</p>` }
      ] },
    { number: '466', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>A project manager hires a freelance cybersecurity tester for one stage of an enterprise system project. Which action best manages the main risks described in the slide?</p>`,
          options: [`Provide clear requirements, limited access, acceptance criteria and contract terms for ownership, confidentiality and support.`, `Give the freelancer broad system access, informal instructions and full control over how their work is delivered.`, `Treat the freelancer as permanent staff and remove the need for milestones, contracts and onboarding.`, `Avoid using freelancers for technical tasks because they cannot contribute securely to enterprise systems.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Provide clear requirements, limited access, acceptance criteria and contract terms for ownership, confidentiality and support.</p><p>Freelancers can provide specialist expertise for temporary project needs, but they require careful management. Clear requirements, onboarding, limited permissions, acceptance criteria and contract terms help ensure their work integrates safely with the enterprise system.</p>` }
      ] },
    { number: '467', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>A start-up's prototype is successful and its user base is growing quickly. Which project management decision best reflects the change from an early start-up to a growing enterprise?</p>`,
          options: [`Focus mainly on new features and user feedback instead of maintainability or support.`, `Plan scalable infrastructure, testing, roles and documentation while still allowing product changes.`, `Keep using informal fixes and rapid decisions so the team can maintain early speed.`, `Delay security and compliance planning until the product has reached a larger market.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Plan scalable infrastructure, testing, roles and documentation while still allowing product changes.</p><p>Rapid growth means a start-up must move beyond informal practices and plan for scalability, reliability, security, documentation, support and governance, while still balancing speed and adaptability.</p>` }
      ] },
    { number: '468', marks: 1, layout: 0, section: 'Project Environments',
      items: [
        { type: 'mcq',
          question: `<p>A software project is expanding from a small local team to include remote staff and freelance contributors. Which planning choice best applies the collaboration criteria described in the slide?</p>`,
          options: [`Rely on informal chats, individual file storage and flexible permissions so each worker can move quickly.`, `Use structured role definitions, shared tracking tools, version control and access rules to keep work coordinated.`, `Delay documentation until the final testing stage so the team can avoid slowing down development.`, `Focus mainly on hiring more developers, because extra staff will usually solve coordination problems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use structured role definitions, shared tracking tools, version control and access rules to keep work coordinated.</p><p>The slide emphasises that effective enterprise collaboration depends on clear roles, reliable communication, documentation, decision traceability, version control, issue tracking and controlled access. These practices help remote, freelance or growing teams reduce risk and coordinate work effectively.</p>` }
      ] },
    // ---------------- Prompt Setup ----------------
    { number: '469', marks: 1, layout: 0, section: 'Prompt Setup',
      items: [
        { type: 'mcq',
          question: `<p>A developer is using an AI tool to add features to an existing Django project. Which approach best follows the idea of a standard prompt feed?</p>`,
          options: [`Ask the AI for a complete Django system at once, then adjust the files later if the structure does not match.`, `Give the AI a prepared summary of the current project, request one feature, test it, then use the working version as context next time.`, `Focus the prompt mainly on the visual design, then add Django settings, models and URLs after the code is generated.`, `Give the AI only the feature name, so it can choose the best file names and app structure without being constrained.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Give the AI a prepared summary of the current project, request one feature, test it, then use the working version as context next time.</p><p>The slide explains that AI-generated Django code is more reliable when the prompt includes project context such as settings, URLs, views, models and apps. A standard prompt feed supports iterative development by requesting one feature, testing it, and using the tested version as the basis for the next prompt.</p>` }
      ] },
    { number: '470', marks: 1, layout: 0, section: 'Prompt Setup',
      items: [
        { type: 'mcq',
          question: `<p>Why should a prompt for an AI coding tool describe the existing Django apps and folder structure before asking it to add a feature?</p>`,
          options: [`It helps the AI place new code into the correct existing apps and folders.`, `It allows the AI to ignore the current Django settings and start again.`, `It makes the AI focus only on templates instead of views and URLs.`, `It ensures the AI chooses a new folder structure for every new feature.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It helps the AI place new code into the correct existing apps and folders.</p><p>A useful Django prompt describes the project name, installed apps, and folder structure so the AI can work with the existing system rather than creating incompatible new structures.</p>` }
      ] },
    { number: '471', marks: 1, layout: 0, section: 'Prompt Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student asks an AI tool to build an events list page in a Django app. Why is it better for the prompt to request changes to the URL file, view file, template and CSS file together?</p>`,
          options: [`It removes the need to test the feature after copying the files.`, `It lets the page be followed from the URL to the rendered interface.`, `It makes the AI focus mainly on improving the page’s visual design.`, `It ensures Django can create the database tables automatically.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It lets the page be followed from the URL to the rendered interface.</p><p>A complete and traceable prompt should connect the URL pattern, view, template and styling so the feature can be tested and documented from the browser request through to the final page. The other options confuse this with design, testing avoidance, or database creation.</p>` }
      ] },
    { number: '472', marks: 1, layout: 0, section: 'Prompt Setup',
      items: [
        { type: 'mcq',
          question: `<p>A developer uses an AI assistant to add a new page to an existing Django project. Which approach best shows both effective prompting and responsible development practice?</p>`,
          options: [`Ask for complete, labelled file changes, then test them against the project before committing.`, `Ask for short code snippets, then paste them wherever they seem to fit in the project.`, `Ask for a full replacement project, then assume the generated version matches the setup.`, `Ask the AI to rename files freely, then adjust the project later if errors appear.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Ask for complete, labelled file changes, then test them against the project before committing.</p><p>A good AI coding request should produce practical changes, such as complete file contents or clearly labelled edits, but the developer must still check that the output fits the existing project and use version control before accepting it.</p>` }
      ] },
    { number: '473', marks: 1, layout: 0, section: 'Prompt Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student uses AI to add a new Django page. After copying the generated code into the project, what should they do next to follow an iterative prototype workflow?</p>`,
          options: [`Ask the AI to rewrite the whole project, then check whether the server starts correctly.`, `Only inspect the code visually, then assume the new page will work if it looks correct.`, `Test the page immediately, then report any exact error and relevant files before continuing.`, `Add several more features first, then test the full project once everything is generated.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Test the page immediately, then report any exact error and relevant files before continuing.</p><p>The slide describes an iterative prototype process: after adding AI-generated code, the developer should run the server, open the URL, check for errors, and give the AI the exact error message plus relevant file contents if something fails. This helps find problems early before more features are added.</p>` }
      ] },
    // ---------------- Models Admin ----------------
    { number: '474', marks: 1, layout: 0, section: 'Models Admin',
      items: [
        { type: 'mcq',
          question: `<p>A team has a dbdiagram.io schema and wants to convert it into Django models for an enterprise system. Which approach best matches the recommended workflow?</p>`,
          options: [`Use AI to replace the schema, then accept the generated models as the final implementation.`, `Use AI to document the app name, then let Django infer the remaining relationships automatically.`, `Use AI to draft the models, then review constraints, relationships and conventions before testing.`, `Use AI to write only the database tables, then ignore field details until deployment.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use AI to draft the models, then review constraints, relationships and conventions before testing.</p><p>The slide explains that AI can help prototype Django models from a dbdiagram.io schema, but developers must still check details such as relationships, nullability, field lengths, unique constraints and project conventions before the code is reviewed and tested.</p>` }
      ] },
    { number: '475', marks: 1, layout: 0, section: 'Models Admin',
      items: [
        { type: 'mcq',
          question: `<p>Why should a prompt for generating Django code from a dbdiagram.io schema specify the exact app name my_app and request full contents for my_app/models.py and my_app/admin.py?</p>`,
          options: [`It allows the AI to focus mainly on explaining the schema rather than producing complete files.`, `It tells the AI the exact Django app and files to generate, reducing misplaced code and missing imports.`, `It encourages the AI to provide short code fragments, reducing the risk of repeated boilerplate.`, `It lets the AI choose a Django app name and file structure, making the output more flexible.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It tells the AI the exact Django app and files to generate, reducing misplaced code and missing imports.</p><p>A strong prompt should specify the app name, paths such as my_app/models.py and my_app/admin.py, and request complete file contents with imports. This helps the AI generate code that fits the Django project structure and avoids errors caused by wrong app names or incomplete code.</p>` }
      ] },
    { number: '476', marks: 1, layout: 0, section: 'Models Admin',
      items: [
        { type: 'mcq',
          question: `<p>A developer uses AI to generate Django models from a dbdiagram.io schema. Why is it important for a senior developer to review the generated models before running migrations?</p>`,
          options: [`It prevents developers from needing to compare the code with the original schema later.`, `It allows Django to choose more efficient field types after the database is created.`, `It automatically converts generic admin labels into readable record names during migration.`, `It helps ensure fields and relationships are mapped correctly before database changes are applied.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It helps ensure fields and relationships are mapped correctly before database changes are applied.</p><p>Senior developers should review generated models before running migrations because inaccurate tables, fields, or relationships can cause data loss, inconsistent records, or application errors. The review checks that the AI output matches the original schema before database changes are made.</p>` }
      ] },
    { number: '477', marks: 1, layout: 0, section: 'Models Admin',
      items: [
        { type: 'mcq',
          question: `<p>A team has used AI to generate several Django models for a prototype. What should their prompt ask the AI to do in admin.py, and why?</p>`,
          options: [`Register only the main generated model and leave related models hidden until custom user interfaces are fully built and tested.`, `Register the generated models mainly to improve the visual layout of the site before checking whether the data model works.`, `Register each generated model and add basic admin views so trusted users can inspect records, relationships and possible data issues during development.`, `Register each generated model so any user can directly edit stored records without needing custom screens or permissions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Register each generated model and add basic admin views so trusted users can inspect records, relationships and possible data issues during development.</p><p>Django admin registration makes models accessible in the admin site, allowing authorised users to create, view, edit and delete data. In a prototype, this helps developers inspect records, check relationships and find data problems before building custom interfaces. Access should still be limited to trusted users.</p>` }
      ] },
    { number: '478', marks: 1, layout: 0, section: 'Models Admin',
      items: [
        { type: 'mcq',
          question: `<p>After generated Django model and admin code has been added to a project, which workflow best tests whether the code has been successfully integrated with the database layer?</p>`,
          options: [`Run makemigrations and migrate, fix any errors, then confirm the models work in the admin site.`, `Edit the schema again, regenerate all code, then skip migrations if the admin file looks correct.`, `Start the server first, check the homepage, then assume the database tables were created correctly.`, `Create test records before migrating, then use any errors to decide which fields to remove.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Run makemigrations and migrate, fix any errors, then confirm the models work in the admin site.</p><p>The slide describes a disciplined workflow: run makemigrations to create migration files, run migrate to apply them, treat errors as evidence to correct the code, then use the Django admin site and test records to confirm the models behave as intended.</p>` }
      ] },
    // ---------------- Homepage Build ----------------
    { number: '479', marks: 1, layout: 0, section: 'Homepage Build',
      items: [
        { type: 'mcq',
          question: `<p>When using an AI coding assistant to update the homepage in this project, which prompt approach best reflects the slide’s guidance?</p>`,
          options: [`Give the AI only the desired homepage layout, because security and routing can be inferred from common project conventions.`, `Describe the current authentication flow, URL structure, homepage view, templates, and redirect settings so the AI can modify the existing system safely.`, `Ask the AI to create a visually appealing homepage first, then connect it to authentication and routing after the design is complete.`, `Tell the AI to replace the existing homepage view with a new one, then rebuild the login and logout processes around it.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Describe the current authentication flow, URL structure, homepage view, templates, and redirect settings so the AI can modify the existing system safely.</p><p>The slide emphasises that the homepage must connect to the existing authentication workflow and project architecture. Providing details such as URL structures, view names, template layout, and redirect settings helps the AI make accurate changes instead of guessing.</p>` }
      ] },
    { number: '480', marks: 1, layout: 0, section: 'Homepage Build',
      items: [
        { type: 'mcq',
          question: `<p>A developer wants an AI coding assistant to improve the homepage that users see after logging in. Which prompt strategy best follows the slide’s guidance?</p>`,
          options: [`Request a new homepage from scratch so the AI can replace the current views, templates and redirects.`, `Ask for a visually polished homepage first, then adjust any routing or login issues after testing it.`, `Give only the goal of making a homepage, because the AI can infer the project structure automatically.`, `Explain the existing authentication apps and routes, then request targeted homepage changes that keep current redirects working.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Explain the existing authentication apps and routes, then request targeted homepage changes that keep current redirects working.</p><p>The slide emphasises that an effective prompt combines a clear intention with specific project evidence, such as current routes, views, templates and login/logout settings. This helps the AI make a controlled change without breaking existing authentication behaviour.</p>` }
      ] },
    { number: '481', marks: 1, layout: 0, section: 'Homepage Build',
      items: [
        { type: 'mcq',
          question: `<p>A Django-style homepage displays information meant only for logged-in users. Which AI prompt instruction best matches the recommended secure and maintainable approach?</p>`,
          options: [`Require login, let the AI choose the view and template, and allow broad edits across the project.`, `Show the homepage first, add login later, and let the AI update any files it finds relevant.`, `Hide only the template elements, skip view authentication, and ask the AI to refactor related files.`, `Require login, state the target view and template, include user access if needed, and limit unrelated edits.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Require login, state the target view and template, include user access if needed, and limit unrelated edits.</p><p>The slide says a homepage showing logged-in user information should require authentication, usually by applying a login requirement to the view. A complete AI request should name the view, specify the template, say whether the current user object is needed, and avoid unnecessary changes to unrelated files.</p>` }
      ] },
    { number: '482', marks: 1, layout: 0, section: 'Homepage Build',
      items: [
        { type: 'mcq',
          question: `<p>A team is designing a prototype homepage for an enterprise system after users log in. Which design choice best follows the slide’s guidance?</p>`,
          options: [`It should prioritise decorative styling, hide complex options, and delay navigation until later.`, `It should focus on database features, minimise interface changes, and avoid user-specific content.`, `It should present every system function, use dense text, and reduce visual hierarchy.`, `It should confirm login, show clear navigation and logout, and use CSS to support usability.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It should confirm login, show clear navigation and logout, and use CSS to support usability.</p><p>The slide emphasises that the homepage is an authenticated landing page and prototype interface. It should reassure the user they are logged in, provide navigation to key areas, include logout, and use CSS for usability through readable layout, spacing and hierarchy.</p>` }
      ] },
    { number: '483', marks: 1, layout: 0, section: 'Homepage Build',
      items: [
        { type: 'mcq',
          question: `<p>Which testing sequence best verifies that an authenticated homepage is working as intended?</p>`,
          options: [`Start logged out, try random passwords, inspect the database, then confirm the homepage file has been generated.`, `Start logged in, open each link in a new tab, clear the cache, then confirm the login page still appears.`, `Start logged out, check direct access redirects to login, log in successfully, test links, then confirm logout blocks return.`, `Start logged in, check the homepage layout loads, refresh the page, then confirm the colours and links appear.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Start logged out, check direct access redirects to login, log in successfully, test links, then confirm logout blocks return.</p><p>The slide describes verifying the homepage against the authentication flow: begin logged out, ensure direct access redirects to login, confirm valid login reaches the authenticated homepage, check navigation URLs, and test logout prevents returning to the protected page.</p>` }
      ] },
    // ---------------- Create Feature ----------------
    { number: '484', marks: 1, layout: 0, section: 'Create Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer is asked to add a Django feature so users can create project tasks. Why should the requirement be written precisely before code is generated?</p>`,
          options: [`It replaces the need for a form, template and model in the prototype.`, `It allows any user to add records without checking who is logged in.`, `It clarifies fields, ownership and behaviour before building the prototype.`, `It focuses mainly on page appearance before deciding what data is stored.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It clarifies fields, ownership and behaviour before building the prototype.</p><p>A precise requirement states what data is collected, how it is stored, and which user it belongs to. This helps developers build a secure and complete create feature and makes later testing clearer.</p>` }
      ] },
    { number: '485', marks: 1, layout: 0, section: 'Create Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer wants to use AI to generate a Django feature for creating tasks. Which prompt detail would best reduce security and integration problems?</p>`,
          options: [`It should state that the task is linked to the logged-in user and ask for code organised by project file.`, `It should ask the AI to choose suitable app names and decide which files need changing.`, `It should request a working interface first and leave validation and ownership checks until testing.`, `It should focus mainly on page styling so the generated feature matches the existing layout.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It should state that the task is linked to the logged-in user and ask for code organised by project file.</p><p>A strong AI prompt for a Django create feature should include structured technical details such as the app, model, fields, file paths, behaviour, validation and styling. It should also make clear that tasks are saved to the currently authenticated user, because ownership is a security control, and request code separated by file to reduce placement errors.</p>` }
      ] },
    { number: '486', marks: 1, layout: 0, section: 'Create Feature',
      items: [
        { type: 'mcq',
          question: `<p>A Django task creation page receives a POST request from a logged-in user. Which handling process best matches a safe and reliable create feature?</p>`,
          options: [`It displays the form on both request types, then relies on the database to reject unsafe values.`, `It saves every submitted field directly, then reloads the form so the user can check the new task.`, `It validates the allowed inputs, sets protected values in the view, saves, then redirects to avoid repeated creation.`, `It adds all model fields to the form, then lets the user decide which values should be changed.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It validates the allowed inputs, sets protected values in the view, saves, then redirects to avoid repeated creation.</p><p>A Django create view should show a blank form for GET requests. For POST requests, it should validate only the fields the user is allowed to enter, set protected values such as the owner in application logic, save the record, and redirect after success to prevent duplicate submissions on refresh.</p>` }
      ] },
    { number: '487', marks: 1, layout: 0, section: 'Create Feature',
      items: [
        { type: 'mcq',
          question: `<p>A team is building a prototype Django page for creating new project records. Which design choice would best support both usability testing and reliable data entry?</p>`,
          options: [`Use the base layout, minimise labels, and rely on styling to explain each field.`, `Use a standalone layout, hide errors until submission, and omit the CSRF token.`, `Use the base layout, show clear labels and errors, and include the CSRF token.`, `Use a mock-up layout, place errors at the bottom, and disable security checks.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use the base layout, show clear labels and errors, and include the CSRF token.</p><p>A usable Django create interface should extend the base template for consistency, include a CSRF token for secure POST submissions, and make the form understandable with clear labels and visible validation errors near the relevant fields.</p>` }
      ] },
    { number: '488', marks: 1, layout: 0, section: 'Create Feature',
      items: [
        { type: 'mcq',
          question: `<p>A Django create feature passes several checks: the URL loads, the form appears, valid data saves, and invalid data shows errors. Which further test best focuses on validation rather than only verification?</p>`,
          options: [`Check whether valid task data saves successfully and redirects to the expected page.`, `Check whether empty fields and very long titles produce suitable validation errors.`, `Check whether the create URL loads quickly and the form appears with all expected fields.`, `Check whether each saved task is linked to the logged-in user and hidden from other users.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Check whether each saved task is linked to the logged-in user and hidden from other users.</p><p>Validation checks whether the feature meets the real user and system need. If tasks must belong to the currently logged-in user, the key validation test is confirming records are linked to that user and not visible or modifiable by other accounts.</p>` }
      ] },
    // ---------------- List Feature ----------------
    { number: '489', marks: 1, layout: 0, section: 'List Feature',
      items: [
        { type: 'mcq',
          question: `<p>A student is using AI to create a Django dashboard that lists support tickets. Which instruction best supports privacy and data integrity?</p>`,
          options: [`Let users enter an owner ID in the browser to choose records.`, `Rely on the dashboard URL to decide which records to display.`, `Show all records first and hide unrelated ones in the template.`, `Filter every list-page query so records belong to request.user.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Filter every list-page query so records belong to request.user.</p><p>The key requirement is that database queries for a list or dashboard page must filter records by the authenticated user, such as request.user. This prevents users from viewing other people's records by changing a URL or browser value.</p>` }
      ] },
    { number: '490', marks: 1, layout: 0, section: 'List Feature',
      items: [
        { type: 'mcq',
          question: `<p>A Django developer asks an AI tool to create a secure page listing a user’s tasks. Which approach best follows the slide’s guidance for protecting user data?</p>`,
          options: [`Filter the database query by owner=request.user before passing results to the template.`, `Load every Task record and rely on the browser to show only the current user’s tasks.`, `Retrieve all Task records, then hide tasks owned by other users in the template.`, `Query all tasks by due date first, then remove other users’ tasks after rendering.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Filter the database query by owner=request.user before passing results to the template.</p><p>Privacy should be enforced on the server before any data is sent to the browser. Filtering with owner=request.user means only records belonging to the authenticated user are retrieved and passed to the template.</p>` }
      ] },
    { number: '491', marks: 1, layout: 0, section: 'List Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer is using AI to help create a Django list page for a user’s tasks. Which prompt best matches the slide’s guidance for a usable and maintainable template?</p>`,
          options: [`Request a template that hides restricted tasks using CSS rules and adds buttons only for visible task cards.`, `Request a template that combines layout, styling, and security checks so the page works without view changes.`, `Request a template that filters tasks by user in the HTML loop and styles urgent tasks directly inline.`, `Request a responsive template that displays pre-filtered tasks with semantic HTML, clear class names, and separate CSS styling.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Request a responsive template that displays pre-filtered tasks with semantic HTML, clear class names, and separate CSS styling.</p><p>The slide says the template should present records already filtered by the view, not make security decisions. It also recommends semantic HTML, clear class names, responsive layout, and a separate CSS file to support maintainability.</p>` }
      ] },
    { number: '492', marks: 1, layout: 0, section: 'List Feature',
      items: [
        { type: 'mcq',
          question: `<p>Which testing plan best verifies that a user-specific list feature behaves correctly according to the slide?</p>`,
          options: [`Create separate records for two users, test logged-in and direct URL access, check the empty state, and confirm navigation links reach the list page.`, `Create several records for one user, refresh the list page, check that the records display, and confirm the page uses a clear table layout.`, `Create no records at first, confirm the page is blank, then add one record and check that the dashboard link still opens.`, `Create records for two users, check that both sets display, test the create button, and confirm the page loads quickly from the menu.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Create separate records for two users, test logged-in and direct URL access, check the empty state, and confirm navigation links reach the list page.</p><p>A complete test should check privacy using at least two accounts, direct access by URL, behaviour for unauthenticated users, the empty state, and navigation to the page. The distractors miss key requirements or include incorrect expectations, such as showing both users’ records.</p>` }
      ] },
    { number: '493', marks: 1, layout: 0, section: 'List Feature',
      items: [
        { type: 'mcq',
          question: `<p>An AI tool generates a Django feature to list customer orders in an enterprise system. Which review step best reflects the slide’s recommended professional process before relying on the code?</p>`,
          options: [`Confirm that the URL accepts a user ID, hides other users’ records in CSS, and has clear navigation.`, `Check whether the page has modern styling, loads quickly, includes sample data, and matches the prompt wording.`, `Test whether the template displays all records, formats them consistently, and uses descriptive class names.`, `Review whether the view filters by request.user, requires login, limits fields shown, and fits project conventions.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Review whether the view filters by request.user, requires login, limits fields shown, and fits project conventions.</p><p>The slide stresses that AI-generated code must be reviewed against the requirement that only the logged-in user’s data is displayed. This includes checking use of request.user, authentication, avoiding unnecessary field exposure, handling empty results, and maintaining project conventions.</p>` }
      ] },
    // ---------------- Edit Delete ----------------
    { number: '494', marks: 1, layout: 0, section: 'Edit Delete',
      items: [
        { type: 'mcq',
          question: `<p>A developer is preparing a prompt for an AI tool to generate an edit feature for an enterprise system. Which prompt detail would best reduce the risk of unsafe data changes?</p>`,
          options: [`Specify editable fields, validation rules, missing-record handling, and the result after saving.`, `Request a general update function, because the AI can infer which fields should change.`, `Ask for a form that changes records and rely on testing to find any missing behaviour.`, `Focus mainly on the page layout, since database outcomes can be adjusted after coding.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Specify editable fields, validation rules, missing-record handling, and the result after saving.</p><p>Edit features are risky because they alter stored data, so the developer should clearly describe authorised changes, validation, how existing data is loaded, and what happens if the record cannot be found. This helps the AI generate safer and more complete code.</p>` }
      ] },
    { number: '495', marks: 1, layout: 0, section: 'Edit Delete',
      items: [
        { type: 'mcq',
          question: `<p>A student wants an AI tool to help build an edit feature for a web application. Which prompt strategy best follows the approach described in the slide?</p>`,
          options: [`Request a working edit feature quickly, focusing mainly on saving changes to the database.`, `Describe the system layers to update, the edit workflow, validation rules, and likely failure cases.`, `Tell the AI which database table is used and allow it to infer the rest of the feature.`, `Ask the AI to write an edit page and then manually check whether the result runs.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Describe the system layers to update, the edit workflow, validation rules, and likely failure cases.</p><p>A strong prompt for an AI-generated edit feature should specify the application structure, files to update, expected user flow, validation, and failure cases. This helps avoid a solution that only works in one part of the system or misses important behaviours.</p>` }
      ] },
    { number: '496', marks: 1, layout: 0, section: 'Edit Delete',
      items: [
        { type: 'mcq',
          question: `<p>A team is designing a delete feature for an enterprise application. Which design choice best reduces the chance that a user deletes the wrong record?</p>`,
          options: [`Show a confirmation page with readable record details before changing the database.`, `Use only the record ID in the request to identify what should be deleted.`, `Delete the record immediately after the user clicks the delete button.`, `Hide cancellation options once the delete action has been selected.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Show a confirmation page with readable record details before changing the database.</p><p>Deletion is destructive, so the user should be given a clear confirmation step with meaningful identifying information and a chance to cancel. The database should only change after confirmation.</p>` }
      ] },
    { number: '497', marks: 1, layout: 0, section: 'Edit Delete',
      items: [
        { type: 'mcq',
          question: `<p>A developer is planning tests for an edit feature in a school records system. Which testing approach best matches the slide’s guidance?</p>`,
          options: [`Test a valid update, then assume validation rules and database changes work if no error message appears.`, `Test only invalid data, because successful edits are usually covered when users enter normal values.`, `Test the interface after editing, but avoid checking the database because it is hidden from the user.`, `Test a valid update, invalid data, missing records, and that changes appear in both the database and interface.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Test a valid update, invalid data, missing records, and that changes appear in both the database and interface.</p><p>The slide explains that edit testing must go beyond the successful path. A strong test set checks a valid edit, invalid inputs such as missing values or wrong data types, attempts to edit a non-existent record, and whether updated values are reflected in both the database and the user interface.</p>` }
      ] },
    { number: '498', marks: 1, layout: 0, section: 'Edit Delete',
      items: [
        { type: 'mcq',
          question: `<p>A developer tests a soft delete feature in an enterprise system. Which database check best matches the expected outcome described in the slide?</p>`,
          options: [`Check that the record has been fully removed from the table and that no trace remains in the database.`, `Check that the record still appears in searches and that a success message was shown to the user.`, `Check that a duplicate record was created and that the original record stayed unchanged in the table.`, `Check that the old record is no longer treated as current and that the expected status field has changed.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Check that the old record is no longer treated as current and that the expected status field has changed.</p><p>A soft delete does not remove the record from the database. Instead, it changes a field such as deleted, archived, or active so the record is no longer treated as current. The slide emphasises comparing the actual database state with the expected result, not relying only on the user interface.</p>` }
      ] },
    // ---------------- Advanced Feature ----------------
    { number: '499', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer is improving an enterprise asset management prototype. Testing notes show that staff often waste time finding specific equipment records. Which proposed extension best follows the principles in the slide?</p>`,
          options: [`Choose a colour theme because it makes the asset management system look more advanced.`, `Choose animated menus because they make the interface appear more complex to users.`, `Choose a search tool because testing showed staff struggled to locate equipment records quickly.`, `Choose extra icons because they add visual interest without changing the workflow.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Choose a search tool because testing showed staff struggled to locate equipment records quickly.</p><p>An advanced feature should improve usefulness by solving a real user problem and should be supported by evidence such as testing or user feedback. A search tool directly helps users complete an important task faster, unlike decorative changes that mainly affect appearance.</p>` }
      ] },
    { number: '500', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A student wants to use AI to add a dashboard card showing the number of overdue maintenance tasks. Which approach best reduces development risk according to the slide?</p>`,
          options: [`Map the inputs, rules, display location, and likely affected data before prompting the AI.`, `Skip planning because AI-generated code can be adjusted quickly after users report problems.`, `Focus on choosing the dashboard colours before checking whether the needed data exists.`, `Ask the AI to build the feature first, then decide which records and screens it should use.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Map the inputs, rules, display location, and likely affected data before prompting the AI.</p><p>The slide emphasises reducing risk by planning the feature before code is changed: identifying inputs, processing rules, outputs, user interaction, interface placement, and affected files or data. This helps reveal limitations such as missing data, unclear validation, or privacy issues early.</p>` }
      ] },
    { number: '501', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer wants AI help adding a search feature to a React and Firebase inventory prototype. Which prompt strategy best matches the slide’s advice for reducing unintended system changes?</p>`,
          options: [`Describe the project, feature goal, allowed files, relevant data fields, and constraints to preserve.`, `Ask the AI to add the feature quickly, then manually check whether the interface still works.`, `Request a complete rewrite of the system so the feature can be added consistently.`, `Tell the AI the feature name and let it decide which files and logic need changing.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Describe the project, feature goal, allowed files, relevant data fields, and constraints to preserve.</p><p>A strong prompt gives the AI clear context and boundaries, including the project purpose, intended feature, technology stack, data fields, exact editable file paths, and constraints such as preserving validation or authentication. This reduces accidental changes and makes testing easier.</p>` }
      ] },
    { number: '502', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer wants to add equipment filtering to an asset management system and also has ideas for dashboard, database and authentication changes. Which approach best reflects professional iterative development?</p>`,
          options: [`Add the filter only, test and document it, then save the working version before making further changes.`, `Ask AI to rewrite the main modules, run the system once, then fix any visible problems later.`, `Add filtering, dashboard updates, database changes and login fixes together to save development time.`, `Replace the current code with AI output if it appears complete and matches the requested feature.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Add the filter only, test and document it, then save the working version before making further changes.</p><p>The slide emphasises iterative development: make one controlled improvement, test it thoroughly, document it, and only then move on. This makes errors easier to trace and keeps the developer responsible for checking AI-generated code.</p>` }
      ] },
    { number: '503', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A developer has just built a category filter for an enterprise system and wants to start changing the dashboard next. Which testing approach best matches the slide’s advice?</p>`,
          options: [`Test many-record, one-record and no-record categories, then record expected results, actual results and fixes.`, `Test only categories with records, then record the final code changes made after the feature is released.`, `Test the filter after adding the dashboard, then record any user comments about the whole system.`, `Test only the most common category, then record whether the filter appears to work during a quick demo.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Test many-record, one-record and no-record categories, then record expected results, actual results and fixes.</p><p>The slide says testing should happen before changing another part of the system, and should include normal, boundary and error cases. For a filter, this means testing categories with many records, one record and no records, while documenting test data, expected results, actual results and fixes.</p>` }
      ] },
    { number: '504', marks: 1, layout: 0, section: 'Advanced Feature',
      items: [
        { type: 'mcq',
          question: `<p>A team adds an AI-assisted reporting feature to an enterprise system. It will summarise equipment usage across departments. Which design choice best follows the slide’s guidance?</p>`,
          options: [`Make the report update records automatically, so the stored data always matches the summary.`, `Make the report use existing permissions, hide sensitive fields, and document how the summary is produced.`, `Make the report include every stored field, since managers need complete data to make decisions.`, `Make the report run as administrator, so it can avoid missing records caused by access limits.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Make the report use existing permissions, hide sensitive fields, and document how the summary is produced.</p><p>Advanced features that summarise data must protect privacy, respect access controls, and remain maintainable through clear documentation. The other options risk exposing sensitive data, bypassing permissions, or changing data without clear validation and confirmation.</p>` }
      ] },
    // ---------------- Final Integration ----------------
    { number: '505', marks: 1, layout: 0, section: 'Final Integration',
      items: [
        { type: 'mcq',
          question: `<p>During final integration of a Django enterprise system, which approach best matches the purpose of this stage?</p>`,
          options: [`Use AI suggestions to update code, then submit the system once the error messages disappear.`, `Check each page separately, then assume the full system will behave correctly when combined.`, `Focus mainly on templates and forms, since database and authentication features work independently.`, `Test complete user workflows, fix issues, and retest to ensure the system still meets requirements.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Test complete user workflows, fix issues, and retest to ensure the system still meets requirements.</p><p>Final integration testing checks how the whole Django system behaves from the user's perspective. It should be iterative: test a workflow, record results, fix issues, and retest because changes in one area can create errors elsewhere. AI can support this process, but the developer must still verify changes and collect proper testing evidence.</p>` }
      ] },
    { number: '506', marks: 1, layout: 0, section: 'Final Integration',
      items: [
        { type: 'mcq',
          question: `<p>A Django enterprise system works correctly when the developer tests individual pages as an administrator. Which testing approach would best reveal remaining problems before final evaluation?</p>`,
          options: [`Test a full normal-user workflow with varied valid and invalid data, including permission checks.`, `Test the dashboard and search pages first, then check login if any errors appear.`, `Test each page while logged in as administrator, focusing mainly on whether it loads.`, `Test only the forms that change data, using one set of typical sample entries.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Test a full normal-user workflow with varied valid and invalid data, including permission checks.</p><p>Final testing should follow realistic user workflows in order, because some problems only appear after earlier actions affect permissions or database state. It should include normal users, authorisation checks, and varied data such as invalid, missing, duplicate, or unusually long inputs.</p>` }
      ] },
    { number: '507', marks: 1, layout: 0, section: 'Final Integration',
      items: [
        { type: 'mcq',
          question: `<p>A developer fixes a Django form error by changing a model field. What is the most disciplined next approach in an enterprise project?</p>`,
          options: [`Record the error details, compare expected and observed behaviour, fix it, then retest related features.`, `Change the code until the error disappears, note the final version, then test the same page again.`, `Ask an AI tool for corrected code, replace the faulty section, then continue with the next task.`, `Restart the server, check whether the problem remains, then document the fix if it works.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Record the error details, compare expected and observed behaviour, fix it, then retest related features.</p><p>Evidence-based debugging requires documenting what happened, where it happened, the input used, and the expected result. After the fix, regression testing should check related features to ensure the repair has not broken something else.</p>` }
      ] },
    { number: '508', marks: 1, layout: 0, section: 'Final Integration',
      items: [
        { type: 'mcq',
          question: `<p>A student is refining the interface of a Django enterprise system before final submission. Which approach best reflects the purpose of this stage?</p>`,
          options: [`Improve the navigation bar and headings only, while treating form labels, error messages and data display as minor details.`, `Keep the design consistent, readable and accessible, while checking users can complete workflows without exposing private data.`, `Make the pages look more visually impressive, while leaving workflow testing and privacy checks until after submission.`, `Focus mainly on adding more colours and buttons, while assuming Django will prevent any usability or access issues.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Keep the design consistent, readable and accessible, while checking users can complete workflows without exposing private data.</p><p>Final interface refinement is not just about appearance. It should improve consistency, accessibility, usability and responsible handling of personal data, so users can complete tasks accurately and securely.</p>` }
      ] },
    { number: '509', marks: 1, layout: 0, section: 'Final Integration',
      items: [
        { type: 'mcq',
          question: `<p>A student finds a minor bug in a Django enterprise system just before final submission and cannot fix it in time. What is the most appropriate action?</p>`,
          options: [`Record the issue clearly, explain its impact, and suggest a future fix.`, `Change the evaluation criteria so the issue is no longer relevant.`, `Only show screenshots from parts of the system that still work correctly.`, `Remove any mention of the issue so the project appears complete.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Record the issue clearly, explain its impact, and suggest a future fix.</p><p>The slide emphasises honest documentation of known limitations, including their impact and possible future solutions. This shows accurate reporting, maintainability, and professional evaluation rather than hiding problems.</p>` }
      ] },
    // ---------------- Desk Checking ----------------
    { number: '510', marks: 1, layout: 0, section: 'Desk Checking',
      items: [
        { type: 'mcq',
          question: `<p>A developer is about to add a reporting feature to an enterprise Django booking system. Why would desk checking the existing booking workflow be useful first?</p>`,
          options: [`Replace the booking code with automated tests so manual reasoning is no longer needed.`, `Check only that the booking page loads in the browser before moving on to the next feature.`, `Trace the request through the view, validation, model update and response to confirm the intended data state.`, `Run the application repeatedly after adding the report feature to see whether any user errors appear.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Trace the request through the view, validation, model update and response to confirm the intended data state.</p><p>Desk checking means manually tracing the expected flow of a user action through the system and checking that each logic step and database change matches the design. This helps find faults before later features depend on incorrect behaviour.</p>` }
      ] },
    { number: '511', marks: 1, layout: 0, section: 'Desk Checking',
      items: [
        { type: 'mcq',
          question: `<p>When desk checking a Django feature such as submitting a registration form, why is it useful to trace both control flow and data flow?</p>`,
          options: [`It separates the decisions made from the values changed, making issues like saving before validation easier to find.`, `It lists the database tables first, making issues like slow queries and missing indexes easier to find.`, `It rewrites the feature in stages, making issues like outdated libraries and syntax errors easier to find.`, `It checks the final web page only, making issues like poor layout and missing images easier to find.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It separates the decisions made from the values changed, making issues like saving before validation easier to find.</p><p>Desk checking follows a user action through Django’s request-response cycle, tracing both control flow and data flow. Separating decisions from value changes helps reveal logic and data-handling errors, such as saving data before validation or updating the wrong model instance.</p>` }
      ] },
    { number: '512', marks: 1, layout: 0, section: 'Desk Checking',
      items: [
        { type: 'mcq',
          question: `<p>A developer is desk checking a Django view that creates a support ticket. Which approach best uses test data to verify the feature’s behaviour?</p>`,
          options: [`Review the form labels and button text to ensure the support ticket process is clear to the user.`, `Run the view with several random inputs and check whether the page loads without showing an error message.`, `Define the initial records and the exact expected record changes, then compare them with the actual database state after running the view.`, `Check only that a Ticket record exists after submission, without considering linked users or unrelated records.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Define the initial records and the exact expected record changes, then compare them with the actual database state after running the view.</p><p>Desk checking with test data requires a clear expected database state before and after the feature runs. This includes created, updated and unchanged records, such as the new Ticket, its foreign key to the logged-in user, its status, and confirmation that unrelated records were not modified.</p>` }
      ] },
    { number: '513', marks: 1, layout: 0, section: 'Desk Checking',
      items: [
        { type: 'mcq',
          question: `<p>During desk checking, a Django edit page appears to load correctly, but the trace shows that some unauthorised users can change a protected record and save invalid data. What is the best next step?</p>`,
          options: [`Ignore the issue unless users complain, because hidden faults rarely affect enterprise decisions.`, `Fix the permission and validation logic now, then re-check the workflow before building further features.`, `Add the report first, because later features will make the database inconsistency easier to detect.`, `Wait until final system testing, because the page already loads and no visible error is shown.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Fix the permission and validation logic now, then re-check the workflow before building further features.</p><p>Desk checking is used to find hidden design and implementation faults early, such as missing validation or unauthorised changes. In an iterative testing approach, faults should be corrected and re-evaluated before more features are added, because small data inconsistencies can affect reliability, privacy, compliance and reporting.</p>` }
      ] },
    { number: '514', marks: 1, layout: 0, section: 'Desk Checking',
      items: [
        { type: 'mcq',
          question: `<p>A team is reviewing a Django feature that updates customer records before it is released in an enterprise system. Why would a desk check provide useful evidence for verification and validation?</p>`,
          options: [`It can ensure the interface looks professional and uses consistent visual styling throughout.`, `It can replace user testing because the developer has already traced the code manually.`, `It can show the feature matches the design and handles data appropriately for the process.`, `It can prove the feature will run faster and require less database storage overall.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It can show the feature matches the design and handles data appropriately for the process.</p><p>Desk checking supports verification by checking that a feature follows the intended design logic, and validation by checking that the resulting data state suits the real-world process. It also helps identify safety, security and accountability issues, but it does not replace user testing or mainly focus on performance or appearance.</p>` }
      ] },
    // ---------------- Testing Plan ----------------
    { number: '515', marks: 1, layout: 0, section: 'Testing Plan',
      items: [
        { type: 'mcq',
          question: `<p>Why is a structured testing plan important in an enterprise Django project?</p>`,
          options: [`It mainly proves that the interface looks professional and that all pages have been styled consistently before release.`, `It focuses on testing only the most visible features so that release can happen quickly and efficiently.`, `It provides documented evidence that features meet specifications and user needs, and helps reproduce and check defects later.`, `It replaces the need for maintenance by showing that the completed system has no remaining defects or risks.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It provides documented evidence that features meet specifications and user needs, and helps reproduce and check defects later.</p><p>A testing plan supports both verification and validation by recording test cases, data, expected results and actual results. This evidence helps prove system quality and also supports later maintenance by making defects easier to reproduce and fixes easier to confirm.</p>` }
      ] },
    { number: '516', marks: 1, layout: 0, section: 'Testing Plan',
      items: [
        { type: 'mcq',
          question: `<p>A Django application includes a student incident reporting form. Which test case best matches the feature requirement that users can submit valid incident reports?</p>`,
          options: [`It checks a valid report is saved with the right details and confirmation.`, `It checks the developer remembers the expected database outcome.`, `It checks every page layout is visually identical for all users.`, `It checks the form code uses the shortest possible database query.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It checks a valid report is saved with the right details and confirmation.</p><p>A good test case is linked to the feature requirement and states the input, steps, expected result and actual result. For the incident report form, the key behaviour is that valid data is stored correctly and the user receives confirmation.</p>` }
      ] },
    { number: '517', marks: 1, layout: 0, section: 'Testing Plan',
      items: [
        { type: 'mcq',
          question: `<p>A developer is testing a Django form with required fields, length limits, date validation, and file uploads. Which approach best uses test data to reveal different types of faults?</p>`,
          options: [`It checks the largest set of random inputs possible without defining expected outcomes.`, `It checks only common inputs first, then repeats the same tests after each software update.`, `It checks typical, edge, and invalid inputs, including clear expected responses for rejected data.`, `It checks invalid inputs mainly to prove the program fails when users make mistakes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It checks typical, edge, and invalid inputs, including clear expected responses for rejected data.</p><p>A strong test data plan uses normal data for routine behaviour, boundary data for limits, and error data for invalid inputs. For error tests, the expected result should include safe handling such as helpful messages, no invalid saving, no sensitive data exposure, and no crash.</p>` }
      ] },
    { number: '518', marks: 1, layout: 0, section: 'Testing Plan',
      items: [
        { type: 'mcq',
          question: `<p>A Django system handling student personal information has 48 passed tests, one failed test for a misaligned button, and one failed test that lets a normal user view another student's record. Which statement best explains how these results should be used as evaluation evidence?</p>`,
          options: [`It focuses on fixing visible interface faults first, so users see improvements before deeper issues are reviewed.`, `It records only the final retest result, so the defect history is shorter and easier to audit.`, `It counts how many test cases passed, so the system can be accepted when most tests are successful.`, `It links test outcomes to requirements and risks, so the evidence supports a justified decision about acceptability.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It links test outcomes to requirements and risks, so the evidence supports a justified decision about acceptability.</p><p>Evaluation means interpreting test results against requirements, user needs, and responsibilities such as privacy and security. A minor display failure and a serious data access failure should not be treated as equally important just because both are failed tests.</p>` }
      ] },
    { number: '519', marks: 1, layout: 0, section: 'Testing Plan',
      items: [
        { type: 'mcq',
          question: `<p>A Django project is being handed over to a school IT team. Which action best tests whether the maintenance documentation will support reliable system operation after handover?</p>`,
          options: [`Ask the developer to read the guide again and confirm that each command looks familiar.`, `Ask the project team to store the guide with the code and update it after major releases.`, `Ask a maintainer to follow the guide in the real deployment setup and note any unclear steps.`, `Ask a user to skim the guide quickly and check that the headings are easy to find.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ask a maintainer to follow the guide in the real deployment setup and note any unclear steps.</p><p>Documentation should be trialled by someone following the instructions to complete realistic tasks without extra help. For a Django system, maintenance instructions should also be checked against the actual deployment environment so errors in commands, assumptions, or technical level can be found before handover.</p>` }
      ] },
    // ---------------- System Evaluation ----------------
    { number: '520', marks: 1, layout: 0, section: 'System Evaluation',
      items: [
        { type: 'mcq',
          question: `<p>Which approach best shows a strong evaluation of whether a completed Django enterprise system meets its requirements?</p>`,
          options: [`Check that the main Django pages load correctly on the developer’s laptop without errors.`, `Confirm that the application includes the expected features and ignore hosting issues.`, `Compare each requirement with evidence from testing and use, including any limits in real deployment.`, `Ask the developer whether the application seems complete and record their judgement.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Compare each requirement with evidence from testing and use, including any limits in real deployment.</p><p>A strong system evaluation judges how well the completed system meets functional and non-functional requirements using evidence such as tests, feedback, logs, accessibility checks and performance data. It also considers whether the system will work in its real environment, not just on a developer’s machine.</p>` }
      ] },
    { number: '521', marks: 1, layout: 0, section: 'System Evaluation',
      items: [
        { type: 'mcq',
          question: `<p>A Django system passes its unit and integration tests, but teachers report that a key workflow is too slow for daily use. Which evaluation approach best reflects the difference between verification and validation?</p>`,
          options: [`Using version control commits as the sole proof that the system is complete.`, `Combining technical test results with user feedback to judge correctness and suitability.`, `Relying mainly on stakeholder opinions without recording test outcomes or issues.`, `Checking only that database models and forms match the written specifications.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Combining technical test results with user feedback to judge correctness and suitability.</p><p>Evaluation should use testing evidence for both verification and validation. Verification checks that the system was built correctly against specifications, while validation checks that it works well for real users and organisational tasks. Documentation such as test cases, bug reports and evaluation summaries supports this judgement.</p>` }
      ] },
    { number: '522', marks: 1, layout: 0, section: 'System Evaluation',
      items: [
        { type: 'mcq',
          question: `<p>A student evaluates a Django booking system used by a school. Which statement best shows a mature evaluation of the implemented system’s quality?</p>`,
          options: [`It judges the system by the number of errors found during testing and ignores user context.`, `It separates faults from realistic boundaries and explains how each affects fitness for purpose.`, `It lists Django features and concludes that the system is successful because the framework is reliable.`, `It focuses mainly on completed functions and avoids weaknesses that were outside the developer’s control.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It separates faults from realistic boundaries and explains how each affects fitness for purpose.</p><p>A mature evaluation should identify both strengths and weaknesses, distinguish true faults from limitations, and explain the impact on whether the system is fit for purpose. The other options are too one-sided or ignore important context.</p>` }
      ] },
    { number: '523', marks: 1, layout: 0, section: 'System Evaluation',
      items: [
        { type: 'mcq',
          question: `<p>Which option best describes a broad evaluation of a Django enterprise system’s social, ethical, legal and environmental impacts?</p>`,
          options: [`It checks server brand, file structure, browser choice and installation date.`, `It checks data protection, user impact, technical fit and long-term resource needs.`, `It checks page layout, code formatting, database names and colour consistency.`, `It checks login speed, menu wording, icon size and staff preferences.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It checks data protection, user impact, technical fit and long-term resource needs.</p><p>A mature evaluation considers social effects on users, ethical and legal handling of personal data, the technical/organisational environment, and environmental sustainability such as resource use and maintenance.</p>` }
      ] },
    { number: '524', marks: 1, layout: 0, section: 'System Evaluation',
      items: [
        { type: 'mcq',
          question: `<p>User review of a Django school system shows that the password reset process can expose personal data. Some staff also request a new analytics dashboard. Which recommendation best uses evaluation evidence to guide realistic modification?</p>`,
          options: [`Build the dashboard first, then fix the password reset issue if users continue to report problems.`, `Prioritise the password reset fix first, then assess dashboard changes against time, complexity and value.`, `Rewrite the whole system immediately, because any defect means the implementation cannot be trusted.`, `Add more visual feedback messages first, because interface changes are usually quicker than security work.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Prioritise the password reset fix first, then assess dashboard changes against time, complexity and value.</p><p>Security and data integrity defects usually need urgent attention because they affect privacy, compliance and trust. Larger enhancements such as dashboards should be considered later against feasibility, risk and organisational value.</p>` }
      ] },
    // ---------------- Maintenance Documentation ----------------
    { number: '525', marks: 1, layout: 0, section: 'Maintenance Documentation',
      items: [
        { type: 'mcq',
          question: `<p>Why should maintenance documentation for a Django enterprise system be treated as part of the final system rather than an optional extra?</p>`,
          options: [`It helps testers, users and support staff check, use and maintain the system after development.`, `It is mainly used to advertise the system’s features to managers and end users.`, `It replaces testing by explaining how the system is expected to behave in normal use.`, `It gives programmers a place to store code comments before the system is submitted.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It helps testers, users and support staff check, use and maintain the system after development.</p><p>Maintenance documentation is part of the final enterprise system because it supports verification, validation, support and long-term maintainability. It allows people other than the original developer to understand how to operate, test, support and improve the system.</p>` }
      ] },
    { number: '526', marks: 1, layout: 0, section: 'Maintenance Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A school’s Django booking system fails after deployment because staff did not load the required environment variables before starting the server. Which type of documentation should have prevented this problem, and why?</p>`,
          options: [`User documentation, because it lists the screens and actions needed to manage everyday records.`, `Operation documentation, because it describes how users interact with bookings and account features.`, `Operation documentation, because it explains how to start, configure and check the application in its environment.`, `User documentation, because it explains how ordinary users complete tasks without knowing the code.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Operation documentation, because it explains how to start, configure and check the application in its environment.</p><p>Operation documentation is aimed at running the system in its intended environment, such as activating a virtual environment, loading variables, starting servers and checking logs. User documentation focuses on everyday tasks from the user's point of view.</p>` }
      ] },
    { number: '527', marks: 1, layout: 0, section: 'Maintenance Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A company wants its Django system to be installed reliably on a new server by an administrator who did not build it. Which approach best supports reproducibility without creating a security risk?</p>`,
          options: [`It lets another administrator avoid documenting versions because Django installs suitable defaults automatically.`, `It lets another administrator publish secret keys so the setup can be checked and repeated exactly.`, `It lets another administrator recreate a working system while keeping real credentials out of shared files.`, `It lets another administrator bypass installation steps by copying the old server’s database and settings.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It lets another administrator recreate a working system while keeping real credentials out of shared files.</p><p>Setup documentation should make the Django system reproducible by recording versions, packages, configuration, database setup and required administrative data. However, it should only describe that secrets such as passwords or secret keys are needed, not expose their real values in shared documents or repositories.</p>` }
      ] },
    { number: '528', marks: 1, layout: 0, section: 'Maintenance Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A Django system passes its login, database and navigation tests, but user trial feedback shows staff find key workflows confusing and too slow with realistic data. Which documentation should mainly discuss this issue, and why?</p>`,
          options: [`Process diary documentation, because it records problems, decisions and changes made over time.`, `Evaluation documentation, because it judges whether the system works well for real users and requirements.`, `Maintenance documentation, because it explains how backups, updates and patches are carried out.`, `Testing documentation, because it lists each input, expected outcome and actual outcome from checks.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Evaluation documentation, because it judges whether the system works well for real users and requirements.</p><p>Testing documentation records whether checks pass or fail, while evaluation documentation interprets evidence such as user feedback, usability, performance, accessibility and security to judge whether the system is suitable for the organisation.</p>` }
      ] },
    { number: '529', marks: 1, layout: 0, section: 'Maintenance Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A team has written maintenance instructions for a Django system. Which approach would best verify and validate that the documentation works for its intended audience?</p>`,
          options: [`Ask a manager to approve the guide quickly, add a short summary page, then publish it for all users to follow.`, `Ask a user to check the screenshots only, replace any old images, then assume the instructions are complete.`, `Ask the developer to read the guide aloud, fix any spelling mistakes, then save the final version with the project files.`, `Ask a maintainer to follow the guide unaided, note any errors or confusion, then revise the unclear steps from that evidence.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Ask a maintainer to follow the guide unaided, note any errors or confusion, then revise the unclear steps from that evidence.</p><p>Documentation should be trialled by a suitable intended reader without extra help. Problems such as confusion, skipped steps or wrong commands show faults in the documentation, and revisions should be based on evidence from the trial.</p>` }
      ] },
    // ---------------- User Stories ----------------
    { number: '530', marks: 1, layout: 0, section: 'User Stories',
      items: [
        { type: 'mcq',
          question: `<p>Why is the user story “As a teacher, I want to view submitted student work, so that I can provide feedback and record progress” stronger than simply writing “create a submissions page”?</p>`,
          options: [`It identifies the teacher’s role, the task they need to perform, and the purpose of giving feedback.`, `It lists the database fields, validation rules, and interface controls needed for the submissions page.`, `It describes the programming steps required to build the submissions page in the Django system.`, `It focuses on the page name and layout before explaining who will use it or why.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It identifies the teacher’s role, the task they need to perform, and the purpose of giving feedback.</p><p>A strong user story follows the format: As a type of user, I want a goal or action, so that there is a reason or benefit. It is not meant to be a full technical specification, but a clear starting point linked to user needs and organisational purpose.</p>` }
      ] },
    { number: '531', marks: 1, layout: 0, section: 'User Stories',
      items: [
        { type: 'mcq',
          question: `<p>Which user story best follows the guidance for writing a clear, testable requirement for a Django system?</p>`,
          options: [`As a student, I want to receive a confirmation after submitting work, so that I know it was recorded.`, `As a user, I want the website to work properly, so that I can use it for school tasks.`, `As a student, I want a Django submission model, so that the database stores my assessment file.`, `As an administrator, I want better school records, so that the system is improved for everyone.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — As a student, I want to receive a confirmation after submitting work, so that I know it was recorded.</p><p>A strong user story identifies a clear role, describes the user goal rather than the technical implementation, and explains the value in a way that suggests a testable outcome.</p>` }
      ] },
    { number: '532', marks: 1, layout: 0, section: 'User Stories',
      items: [
        { type: 'mcq',
          question: `<p>A school asks for a Django learning management system. Teachers must be able to record feedback on student submissions, but they would also like an animated dashboard. What is the best way for the development team to respond?</p>`,
          options: [`Treat both features equally, because every client request is a required system need.`, `Prioritise storing feedback securely, and discuss the dashboard for a later stage if time allows.`, `Build the animated dashboard first, because user experience should guide all planning decisions.`, `Reject the dashboard immediately, because wants should never be included in enterprise systems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Prioritise storing feedback securely, and discuss the dashboard for a later stage if time allows.</p><p>A need is essential for the system to support required tasks or organisational operation, while a want may improve experience but is less critical. Securely storing feedback supports assessment and data management, so it should be prioritised; the dashboard can be negotiated based on time, budget and impact.</p>` }
      ] },
    { number: '533', marks: 1, layout: 0, section: 'User Stories',
      items: [
        { type: 'mcq',
          question: `<p>A team developing a Django school system hears that enrolment records are sometimes duplicated and that students are unsure whether uploads have worked. Which approach would best gather evidence for clear requirements?</p>`,
          options: [`Use surveys only, because broad numerical evidence is always more reliable than detailed explanations.`, `Use interviews with students to gather examples, and base the main requirement on the most detailed response.`, `Use surveys with administrators to collect opinions, and avoid interviews because they may introduce personal bias.`, `Use interviews with administrators to explore causes, and surveys with students to check how widespread the issue is.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Use interviews with administrators to explore causes, and surveys with students to check how widespread the issue is.</p><p>Interviews are best for exploring detailed explanations and asking follow-up questions, such as why duplicate records occur. Surveys are useful for gathering broader evidence from a larger group, such as how many students are affected or what patterns exist. Combining both methods supports evidence-based requirements.</p>` }
      ] },
    { number: '534', marks: 1, layout: 0, section: 'User Stories',
      items: [
        { type: 'mcq',
          question: `<p>A client asks a development team to add “a report page” to an enterprise system. Which response best applies collaborative requirements gathering?</p>`,
          options: [`They should clarify the report’s purpose, users, data, update timing and success criteria with stakeholders.`, `They should build a general report page first, then adjust it if users later complain.`, `They should delay the report entirely until every stakeholder has identical priorities.`, `They should ask only the client to define the report, because users lack technical knowledge.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They should clarify the report’s purpose, users, data, update timing and success criteria with stakeholders.</p><p>Collaborative requirements gathering means checking shared understanding before development. The team should question and document what the report is for, who uses it, what data it needs, how often it updates, and how success will be judged. This reduces the risk of building a technically working feature that does not meet the real organisational need.</p>` }
      ] },
    // ---------------- Collaboration Review ----------------
    { number: '535', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>During a collaboration review of a Django enterprise system, a user says a form is confusing and a peer says some validation is missing. What is the best way for the development team to use this feedback?</p>`,
          options: [`Ignore feedback about workflow or usability, because a Django project only needs to be judged by whether the code runs correctly.`, `Choose the suggestions that are easiest to implement, because a collaboration review is mainly about reducing development time.`, `Compare the feedback with the agreed requirements, then prioritise changes that improve usability, maintainability or fit with user needs.`, `Apply every suggestion immediately, because user and peer feedback should always override the original system requirements.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Compare the feedback with the agreed requirements, then prioritise changes that improve usability, maintainability or fit with user needs.</p><p>A collaboration review should use feedback to judge whether the system meets its intended purpose and negotiated requirements. Useful changes are those that improve areas such as usability, maintainability, validation or alignment with real organisational needs, rather than simply following preferences or making only easy changes.</p>` }
      ] },
    { number: '536', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>A developer wants feedback on a Django application that can be used as strong evidence for improving the system. Which approach is most appropriate?</p>`,
          options: [`Ask users if they like the application and record their overall opinions for later discussion.`, `Ask users to complete realistic tasks and record observed issues linked to specific requirements.`, `Ask developers to predict user problems and record possible fixes without testing the system.`, `Ask users to suggest new features and record the most popular ideas as final requirements.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Ask users to complete realistic tasks and record observed issues linked to specific requirements.</p><p>Useful feedback should produce evidence by observing users completing realistic tasks and linking what happens to the system’s goals or requirements. General opinions or guesses are less reliable because they are not directly tied to observable behaviour.</p>` }
      ] },
    { number: '537', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>A user testing a Django data-entry page enters information in the wrong field because a label is unclear. How should the development team classify and use this feedback?</p>`,
          options: [`Treat the label as a new requirement and add it without checking the plan.`, `Treat the label as a visual preference unless most users ask for the same change.`, `Treat the label as a minor complaint because the system still accepts correct input.`, `Treat the label as a usability issue and link it to any agreed requirement it affects.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Treat the label as a usability issue and link it to any agreed requirement it affects.</p><p>Feedback should be connected to negotiated requirements and usability criteria. A confusing label can affect how easily users operate the system and may cause incorrect data entry, so it should be reviewed objectively against relevant agreed needs.</p>` }
      ] },
    { number: '538', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>A Django enterprise system works correctly in testing, but a peer review finds hard-coded values in several views and similar code copied across pages. Why is this a maintainability concern?</p>`,
          options: [`They stop peer reviewers from testing the system during development.`, `They make later changes harder and increase the risk of inconsistent behaviour.`, `They prevent Django from connecting forms to the database correctly.`, `They make the interface slower and reduce the visual quality of each page.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They make later changes harder and increase the risk of inconsistent behaviour.</p><p>Hard-coded values and repeated code may still work during testing, but they reduce maintainability. They make the system harder to adapt in the future and can cause different parts of the system to behave inconsistently.</p>` }
      ] },
    { number: '539', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>A team has time to make only one improvement before the final review of an enterprise system. Users report that a validation rule sometimes accepts incorrect data, while another user requests an optional page animation. What is the most responsible decision?</p>`,
          options: [`Implement both changes immediately because all feedback should be treated equally once users have suggested it.`, `Prioritise the validation fix because it affects data quality and required work, while recording why the animation is postponed.`, `Reject both changes because altering the project after feedback may extend the scope beyond the original requirements.`, `Prioritise the animation because visible interface changes are easier for users to notice and evaluate during the review.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Prioritise the validation fix because it affects data quality and required work, while recording why the animation is postponed.</p><p>Developers should judge feedback by impact, effort and scope. A broken validation rule can affect correctness, data quality and the user’s ability to complete required work, so it should usually take priority over a low-impact appearance change such as an optional animation. The final review should also justify accepted and postponed improvements.</p>` }
      ] },
    { number: '540', marks: 1, layout: 0, section: 'Collaboration Review',
      items: [
        { type: 'mcq',
          question: `<p>A student is preparing a review after collecting user and peer feedback on a Django enterprise system. Which approach best shows evidence-based evaluation of the system?</p>`,
          options: [`Present the evidence, link it to requirements, propose changes, and explain the likely impact on users and responsibilities.`, `Describe the coding process, identify the tools used, include screenshots, and explain how the database stores records.`, `List the comments received, describe the interface, note completed tasks, and mention that users found the system helpful.`, `Show the final screens, summarise the main features, report that testing was done, and state the system is ready.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Present the evidence, link it to requirements, propose changes, and explain the likely impact on users and responsibilities.</p><p>A strong review should communicate feedback as evidence by identifying its source, linking it to requirements, explaining the issue, proposing a response, and considering impacts such as usability, decision-making, privacy, accessibility and access control.</p>` }
      ] },
    // ---------------- Security Review ----------------
    { number: '541', marks: 1, layout: 0, section: 'Security Review',
      items: [
        { type: 'mcq',
          question: `<p>Which approach best describes a security review for an enterprise Django project?</p>`,
          options: [`List the Django files that mention users, passwords, databases and forms to show that security features exist.`, `Evaluate authentication, permissions, data handling and evidence to judge whether the system is safe enough for its context.`, `Review only the deployment settings and database storage because these determine whether the enterprise system is secure.`, `Check that protected pages have login screens and record screenshots to prove that unauthorised users cannot enter.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Evaluate authentication, permissions, data handling and evidence to judge whether the system is safe enough for its context.</p><p>A security review is a structured evaluation of how authentication, access control and data handling protect the system in its intended environment, supported by evidence such as tests, screenshots, code extracts and limitations. The other options focus too narrowly on file names, login screens, or deployment settings alone.</p>` }
      ] },
    { number: '542', marks: 1, layout: 0, section: 'Security Review',
      items: [
        { type: 'mcq',
          question: `<p>A Django site has a page showing a user's account details. Which approach best protects this page from unauthenticated users?</p>`,
          options: [`Hide the link from menus and also enforce authentication on the server when the URL is requested.`, `Store passwords as plain text so the server can compare them quickly during login.`, `Rely on browser history to prevent logged-out users from reopening private pages directly.`, `Hide the link from menus so logged-out users cannot see where the private page is located.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Hide the link from menus and also enforce authentication on the server when the URL is requested.</p><p>Private pages must be protected on the server side, not just hidden in the interface. A logged-out user could type the URL directly, so Django should enforce authentication using tools such as @login_required or LoginRequiredMixin and redirect or deny access.</p>` }
      ] },
    { number: '543', marks: 1, layout: 0, section: 'Security Review',
      items: [
        { type: 'mcq',
          question: `<p>A Django shop allows logged-in users to view orders using URLs such as /orders/12/. What is the best way to prevent one customer from viewing another customer’s order by changing the number in the URL?</p>`,
          options: [`Use larger random order numbers so users cannot easily guess other URLs.`, `Hide order links in the interface when they belong to another user.`, `Filter the order query so it only returns records owned by request.user.`, `Check only that the user has logged in before showing the order page.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Filter the order query so it only returns records owned by request.user.</p><p>Access control must check both authentication and authorisation. In this case, the view should only retrieve an order if it belongs to the current user, preventing horizontal privilege escalation through direct URL changes or form submissions.</p>` }
      ] },
    { number: '544', marks: 1, layout: 0, section: 'Security Review',
      items: [
        { type: 'mcq',
          question: `<p>A school is deploying a Django system for student club sign-ups. Which approach best follows safe data collection, storage and manipulation principles?</p>`,
          options: [`Collect only the information needed, validate it before saving, and use production security settings.`, `Collect all user details by default, escape database records, and allow broad database permissions.`, `Collect extra information for future use, validate it after saving, and keep development settings enabled.`, `Collect private data in public tables, rely on backups, and leave debug messages visible.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Collect only the information needed, validate it before saving, and use production security settings.</p><p>Data minimisation means only collecting data required for the system’s purpose. Secure handling also includes validating input before saving and using production settings such as DEBUG = False, HTTPS, protected keys and restricted permissions.</p>` }
      ] },
    { number: '545', marks: 1, layout: 0, section: 'Security Review',
      items: [
        { type: 'mcq',
          question: `<p>Which statement best describes what a written security evaluation should include at the end of a Django system review?</p>`,
          options: [`It lists the main features, confirms the interface works and suggests new functions users requested.`, `It reports only successful tests, removes minor weaknesses and focuses on showing the system is complete.`, `It describes the database tables, shows sample records and explains how pages are linked together.`, `It records tested controls, evidence found, honest limits and realistic improvements for protecting user data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It records tested controls, evidence found, honest limits and realistic improvements for protecting user data.</p><p>A strong security review is part of verification and validation. It should document what was tested, evidence from security checks, any limitations, risks, and feasible improvements, while considering responsibility to protect user data.</p>` }
      ] },
    // ---------------- Database Diagram ----------------
    { number: '546', marks: 1, layout: 0, section: 'Database Diagram',
      items: [
        { type: 'mcq',
          question: `<p>Why should a Django project have a database diagram before the models.py file is written?</p>`,
          options: [`A database schema should be designed before coding because it automatically writes the models.py file for the project.`, `A database schema should be designed before coding because it mainly controls the visual layout users see on screen.`, `A database schema should be designed before coding because it replaces the need for flowcharts and data flow diagrams.`, `A database schema should be designed before coding because it turns planned data flows into suitable tables, fields and relationships.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A database schema should be designed before coding because it turns planned data flows into suitable tables, fields and relationships.</p><p>The slide explains that database diagrams should be created before writing Django models because the models become database tables. The schema uses earlier design work, such as flowcharts and data flow diagrams, to define the tables, fields and relationships needed to support the system.</p>` }
      ] },
    { number: '547', marks: 1, layout: 0, section: 'Database Diagram',
      items: [
        { type: 'mcq',
          question: `<p>A team is designing a Product table for an online shop in dbdiagram.io. Which design choice best follows good database schema practice?</p>`,
          options: [`Create one large table and keep all values as strings for easier form handling.`, `Select only necessary fields and assign data types that match the values being stored.`, `Use short field names and choose data types after the Django views are written.`, `Store every possible detail and use text fields so values can be changed later.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Select only necessary fields and assign data types that match the values being stored.</p><p>A good database schema stores only the data the system needs and uses suitable data types, such as int, decimal or datetime, so the database can enforce valid formats. This improves reliability, security and privacy.</p>` }
      ] },
    { number: '548', marks: 1, layout: 0, section: 'Database Diagram',
      items: [
        { type: 'mcq',
          question: `<p>A school store database has two students with the same full name, and both have placed orders. Which design would best ensure each order is linked to the correct student?</p>`,
          options: [`Use the order date as the primary key, and link users to that date.`, `Use the user’s email domain as the primary key, and store it in each order.`, `Use a separate id as the primary key, and link orders to that id with a foreign key.`, `Use the user’s name as the primary key, and copy it into each order record.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use a separate id as the primary key, and link orders to that id with a foreign key.</p><p>A primary key must uniquely identify each record, even when other details such as names are shared. A foreign key, such as user_id in an Order table, should refer to the User table’s primary key so each order can be linked reliably to one user.</p>` }
      ] },
    { number: '549', marks: 1, layout: 0, section: 'Database Diagram',
      items: [
        { type: 'mcq',
          question: `<p>A developer is reviewing a database diagram for a booking system before implementation. Which action would best test whether the database design is complete?</p>`,
          options: [`Trace each required feature to the tables, fields and relationships that store or process its data.`, `Compare the schema with another project to see whether it follows a similar database layout.`, `Count the number of tables to ensure the schema has enough components for the system.`, `Check whether the diagram is visually tidy and uses consistent table and field naming conventions.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Trace each required feature to the tables, fields and relationships that store or process its data.</p><p>A complete database design must support the system's required features. Each feature should be explainable through the schema using relevant tables, fields and relationships. Visual organisation or similarity to another project is not enough to prove the design is complete.</p>` }
      ] },
    { number: '550', marks: 1, layout: 0, section: 'Database Diagram',
      items: [
        { type: 'mcq',
          question: `<p>A developer has a dbdiagram.io schema for a shop system and wants AI to generate Django models from it. Which approach best matches a reliable workflow?</p>`,
          options: [`Skip the schema review and rely on Django admin screens to reveal any missing relationships later.`, `Send the diagram directly to the AI tool, then create migrations as soon as model code is returned.`, `Ask the AI tool to choose table names and keys, then adjust the database after users find errors.`, `Explain the stock rules and category relationships in the prompt, then review the generated models before migrations.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Explain the stock rules and category relationships in the prompt, then review the generated models before migrations.</p><p>The slide describes a workflow where the schema is clear first, the AI prompt includes important business rules, and the developer reviews and refines generated Django models before creating migrations.</p>` }
      ] },
    // ---------------- Wireframe Planning ----------------
    { number: '551', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>In a Django enterprise system, why are wireframes useful before development begins?</p>`,
          options: [`They replace database planning by showing all stored data directly on each screen layout.`, `They define each screen’s final colours and images so the team can approve the finished visual style.`, `They remove the need for coding by turning user requirements into complete working pages.`, `They plan each screen’s structure and user flow so the team can test and refine how the system will work.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They plan each screen’s structure and user flow so the team can test and refine how the system will work.</p><p>Wireframes are low-detail plans used before styling or coding. They help teams discuss layout, navigation, content areas and key interactions, while considering how screens fit into the wider system.</p>` }
      ] },
    { number: '552', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>When wireframing the homepage of a Django enterprise system, what is the main reason for identifying key tasks and dynamic data early?</p>`,
          options: [`It should avoid dynamic content so the homepage can be built without database queries or model access.`, `It should show the main actions and data needed so users and developers understand what the page must support.`, `It should focus mainly on visual branding so the homepage looks complete before any Django code is written.`, `It should include every possible system feature so users never need to navigate beyond the homepage.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It should show the main actions and data needed so users and developers understand what the page must support.</p><p>A homepage wireframe should clarify the system’s purpose, key user actions, navigation, account access and important static or dynamic data. This helps identify Django requirements such as views, templates, URL mappings and model queries before implementation.</p>` }
      ] },
    { number: '553', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>A student is designing a wireframe for a Django page where users review booking records and open individual bookings for more detail. Which design approach best matches the slide’s guidance?</p>`,
          options: [`A wireframe should focus mainly on colours and branding before deciding which data will appear.`, `A wireframe should centre on a single user task and show the data and controls needed to complete it.`, `A wireframe should combine related tasks so users can complete several functions from one busy page.`, `A wireframe should avoid technical planning because Django models and views are chosen after coding begins.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A wireframe should centre on a single user task and show the data and controls needed to complete it.</p><p>The slide explains that each wireframe should focus on one meaningful user task, such as viewing bookings or submitting a request. It should also show the required data, controls and feedback, helping plan Django models, forms, views and templates early.</p>` }
      ] },
    { number: '554', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>A team is wireframing an enterprise booking system. Several developers interpret the same form field differently, causing inconsistent validation and missing error messages. Which action best follows the slide’s guidance?</p>`,
          options: [`Add comments describing the database structure only, so testers can ignore the interface design.`, `Add notes explaining each element’s behaviour, data needs and validation so teams share the same understanding.`, `Add extra styling choices so developers can copy colours, fonts and spacing directly into the final site.`, `Add labels to make the wireframe look more polished before showing it to stakeholders and users.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Add notes explaining each element’s behaviour, data needs and validation so teams share the same understanding.</p><p>Annotations make design decisions explicit by describing what elements do, what data or logic they need, and how validation or errors should work. This reduces ambiguity between designers, developers, testers and stakeholders, helping development and maintenance.</p>` }
      ] },
    { number: '555', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>A team is wireframing a booking list page that already lets users view and filter bookings. A stakeholder suggests adding a complex reporting tool to the same page, even though it is not needed to complete the page’s main task. What is the best response based on the slide?</p>`,
          options: [`Remove the booking list filters and replace them with the report because reports are more advanced.`, `Move filtering to the booking detail page so the list page has space for the reporting feature.`, `Place the report as a future enhancement and keep the page focused on listing and filtering bookings.`, `Add the report to the booking list page so users can access every useful booking feature there.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Place the report as a future enhancement and keep the page focused on listing and filtering bookings.</p><p>The slide says page boundaries should keep each page focused on the content, actions and data needed for its intended task. Useful but non-essential features should be recorded as future enhancements to prevent overbuilding and scope creep.</p>` }
      ] },
    { number: '556', marks: 1, layout: 0, section: 'Wireframe Planning',
      items: [
        { type: 'mcq',
          question: `<p>A team has wireframed a Django system with a homepage, booking pages and different user roles. Before coding starts, what is the best way to test whether the design is feasible?</p>`,
          options: [`Delay reviewing permissions and integrations until coding reveals which features are difficult to complete.`, `Choose the most attractive layout style before deciding what data the system will store or process.`, `Check whether the planned screens can be built with the available models, data links, roles and resources.`, `Treat each page as a separate design so developers can implement screens in any order they prefer.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Check whether the planned screens can be built with the available models, data links, roles and resources.</p><p>The slide explains that wireframes should be reviewed before coding against user needs, data requirements and project constraints. Feasibility means checking whether the design can be implemented using the available Django models, relationships, time, skills and infrastructure, while identifying complex calculations, integrations or permissions early.</p>` }
      ] },
    // ---------------- User Workflows ----------------
    { number: '557', marks: 1, layout: 0, section: 'User Workflows',
      items: [
        { type: 'mcq',
          question: `<p>In a Django enterprise project, why is a user workflow useful when planning a feature such as updating a customer record?</p>`,
          options: [`It lists the screens in the order the user is expected to visit them during the task.`, `It records the visual layout of each page so designers can make the interface consistent.`, `It describes the database tables first, then adds pages that can edit each stored record.`, `It links each user action to interface pages, processing logic, validation, data storage and feedback.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It links each user action to interface pages, processing logic, validation, data storage and feedback.</p><p>A clear workflow shows more than screen order. It connects what the user does with how the system responds, including pages, views or processing, business rules such as validation, models or database updates, and messages shown to the user.</p>` }
      ] },
    { number: '558', marks: 1, layout: 0, section: 'User Workflows',
      items: [
        { type: 'mcq',
          question: `<p>In a Django enterprise system, why should a login workflow include the system’s access decision after checking a user's credentials?</p>`,
          options: [`It records every password attempt so staff can later check who typed credentials incorrectly.`, `It separates public pages from protected pages and shows how roles affect access after login.`, `It replaces the need for URL patterns because the workflow decides which view runs.`, `It ensures every registered user reaches the same dashboard with identical permissions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It separates public pages from protected pages and shows how roles affect access after login.</p><p>The slide explains that mapping the login workflow helps identify public pages, protected pages, and the access decisions made after authentication. It also shows that different roles, such as administrator or general staff, may have different permissions.</p>` }
      ] },
    { number: '559', marks: 1, layout: 0, section: 'User Workflows',
      items: [
        { type: 'mcq',
          question: `<p>Why would a data flow diagram be useful when designing a Django feature that lets users create a new booking?</p>`,
          options: [`It lists the visual layout choices used to make each page easier to read.`, `It shows how submitted data is validated, stored, and returned as a response.`, `It records the programming language rules used to write each database query.`, `It explains the business goals of the company before software development begins.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It shows how submitted data is validated, stored, and returned as a response.</p><p>A data flow diagram focuses on how information enters the system, is processed, stored, and returned to the user. In the booking example, this includes receiving form data, validating it, creating a database record, and returning a confirmation or redirect.</p>` }
      ] },
    { number: '560', marks: 1, layout: 0, section: 'User Workflows',
      items: [
        { type: 'mcq',
          question: `<p>When mapping a workflow for editing a user profile in a Django system, which sequence best describes the likely CRUD operations involved?</p>`,
          options: [`It creates a new profile record first, then deletes the old record after submission.`, `It updates the saved record first, then reads the old details for confirmation.`, `It deletes the current details first, then recreates them when the form is saved.`, `It reads the current details first, then updates the saved record after submission.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It reads the current details first, then updates the saved record after submission.</p><p>Editing an existing profile normally involves a read operation to load the current data into the form, followed by an update operation when the user submits changes. This helps identify the views, forms, model actions and permissions needed.</p>` }
      ] },
    { number: '561', marks: 1, layout: 0, section: 'User Workflows',
      items: [
        { type: 'mcq',
          question: `<p>When planning a Django login and form submission feature, why might a team use both a system flowchart and a decision tree before coding?</p>`,
          options: [`A flowchart records user feedback after testing, while a decision tree decides which programming language should be used.`, `A flowchart lists the database tables required, while a decision tree shows the final visual layout of each webpage.`, `A flowchart maps the overall process sequence, while a decision tree clarifies which route is taken after each condition is checked.`, `A flowchart replaces backend validation logic, while a decision tree stores submitted form data without using the database.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A flowchart maps the overall process sequence, while a decision tree clarifies which route is taken after each condition is checked.</p><p>The slide explains that system flowcharts show sequences of processes, decisions, inputs, outputs and data stores, while decision trees are especially useful for mapping different outcomes from conditions such as user roles or form validity.</p>` }
      ] },
    // ---------------- Design Documentation ----------------
    { number: '562', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>Which statement best explains what effective design documentation should do for a Django enterprise system?</p>`,
          options: [`It links the users, inputs, stored data and outputs to the specific problem the Django system solves.`, `It records the final interface screens after coding so the finished product is easier to present.`, `It describes a generic website flow so the design can be reused across different Django projects.`, `It lists the Django files used so developers can check the project folder structure is complete.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It links the users, inputs, stored data and outputs to the specific problem the Django system solves.</p><p>Good design documentation should be part of the design process and should clearly connect the problem being solved with the technical solution. In the booking example, this means identifying the student, booking form, booking model, and confirmation output rather than using a generic website diagram.</p>` }
      ] },
    { number: '563', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A team is designing a Django login feature. Which option best describes what their system flowchart should show?</p>`,
          options: [`It lists the exact Django code needed for each view, model, template and database query.`, `It shows the main path from request to response, including routing, processing, data access and user outcomes.`, `It focuses mainly on the visual layout of pages that users see after each action.`, `It records every possible server setting and library used to run the application.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It shows the main path from request to response, including routing, processing, data access and user outcomes.</p><p>A system flowchart is meant to make the sequence of key system actions visible, such as a user request being routed, processed by a view, linked to model/database activity, and returned as a response. It should not try to show every line of code or unrelated configuration detail.</p>` }
      ] },
    { number: '564', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A student submits an assessment request to a Django application. Which description best matches what a data flow diagram should represent for this situation?</p>`,
          options: [`It shows the app boundary, the view processing the request, the model storing it, and labelled data moving between them.`, `It focuses on the Python code structure, the template files used, and the order functions are called.`, `It places the student, the database model, and the payment service together inside the Django application.`, `It lists the exact screen sequence, the button clicks made, and the time taken for each page to load.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It shows the app boundary, the view processing the request, the model storing it, and labelled data moving between them.</p><p>A DFD focuses on how data moves between external entities, processes and data stores, with a clear system boundary. It does not mainly show the exact order of actions, code structure, or put external participants inside the system.</p>` }
      ] },
    { number: '565', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A Django team is planning the logic for an event booking feature before writing code. Why would a decision tree be the most suitable documentation tool?</p>`,
          options: [`It lists the database fields needed so every table can be created.`, `It records the coding tasks required so every view can be assigned.`, `It shows the screen layout choices so every template can be styled.`, `It maps each condition to a resulting action so every pathway can be tested.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It maps each condition to a resulting action so every pathway can be tested.</p><p>A decision tree represents branching logic: each branch is a condition and each endpoint is an action or result. This helps developers test each possible pathway and implement consistent behaviour before coding.</p>` }
      ] },
    { number: '566', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A team reviewing a Django system finds from a data flow diagram that it collects personal information that is not needed. Which process diary entry would best show effective use of evidence to improve the design?</p>`,
          options: [`It records test evidence, identifies the privacy issue, and explains the design change made to reduce risk.`, `It lists the lesson activities completed and includes the final diagram as proof of progress.`, `It describes the original data flow in detail and states that the feature is now documented.`, `It notes that user data is collected and recommends adding more fields for future reports.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It records test evidence, identifies the privacy issue, and explains the design change made to reduce risk.</p><p>A strong process diary uses evidence to evaluate the design and justify changes. In this case, the diary should connect the data flow diagram evidence to the privacy issue and explain how the design was improved.</p>` }
      ] },
    { number: '567', marks: 1, layout: 0, section: 'Design Documentation',
      items: [
        { type: 'mcq',
          question: `<p>A Django team’s design diagrams use vague labels such as “user”, “page” and “data store”, while the actual project contains files such as CustomerProfile, StaffApprovalView and booking_urls.py. Which change would best make the documentation easier to verify and use for collaboration?</p>`,
          options: [`Use one diagram for all roles, with the same access level shown for every participant.`, `Use the project’s actual model, view, route and participant names, with notes on access and data use.`, `Use screenshots of each web page, with brief notes on colours, layout and navigation order.`, `Use general labels like user, page and database, with extra comments explaining the source code.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use the project’s actual model, view, route and participant names, with notes on access and data use.</p><p>Effective design documentation should connect diagrams to the real Django project by using consistent names for participants, data and components. It should also show each participant’s purpose, access level and how data is collected, stored and processed.</p>` }
      ] },
    // ---------------- Data Planning ----------------
    { number: '568', marks: 1, layout: 0, section: 'Data Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django project has a requirement that managers can approve or reject staff purchase requests depending on budget information. Which data planning approach best follows the slide’s advice?</p>`,
          options: [`A data plan should include the Django models first, then add approval rules after the main features are finished.`, `A data plan should include reports and audit logs only after users confirm the approval feature works correctly.`, `A data plan should include several example purchase requests so the database is not empty during early testing.`, `A data plan should include users, requests, budgets and approval states needed to test the manager approval requirement realistically.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A data plan should include users, requests, budgets and approval states needed to test the manager approval requirement realistically.</p><p>The slide explains that data planning must be linked to system requirements. For a manager approval requirement, realistic testing needs related records such as a manager, staff member, pending request and budget data, not just a few sample records.</p>` }
      ] },
    { number: '569', marks: 1, layout: 0, section: 'Data Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django shop system needs to test customers, products, orders, order items, order totals, and stock on hand. Which testing approach best reflects the different types of test data described in the slide?</p>`,
          options: [`Add customers and products only, then check that names and codes are stored correctly.`, `Check the report screen only, then confirm that totals and stock values are displayed.`, `Create several orders only, then check that each order has a date and status.`, `Add customers and products, create several orders with items, then check totals and stock levels.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Add customers and products, create several orders with items, then check totals and stock levels.</p><p>The best test data set includes primary data (customers and products), occurrence data (orders and order items), and calculated data checks (totals and stock levels). The other options focus on only one or two data types, so they would not fully test how the system handles relationships, repeated activity, and derived values.</p>` }
      ] },
    { number: '570', marks: 1, layout: 0, section: 'Data Planning',
      items: [
        { type: 'mcq',
          question: `<p>A team is preparing sample data for a Django system that stores student excursion requests, approvals, medical notes, and payment status. Which approach best follows professional data planning advice from the slide?</p>`,
          options: [`Use fictitious linked records covering normal, edge, and rule-based cases without exposing real people’s data.`, `Use random unlinked records to fill each table quickly and check that pages load.`, `Use one complete example per model and avoid unusual cases until final deployment.`, `Use a small set of real records so the system behaves exactly like it will after launch.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use fictitious linked records covering normal, edge, and rule-based cases without exposing real people’s data.</p><p>The slide says realistic sample records should match real system use, cover typical values, boundary values, and business rules, respect model relationships such as foreign keys and choices, and use fictitious or de-identified data to protect privacy.</p>` }
      ] },
    { number: '571', marks: 1, layout: 0, section: 'Data Planning',
      items: [
        { type: 'mcq',
          question: `<p>A school is testing an equipment booking system. A student can request equipment, staff can approve bookings, availability must update, and weekly usage reports are generated. Which test data approach best follows the slide’s advice?</p>`,
          options: [`Use random bookings to check that the first request form accepts valid student details correctly.`, `Use sample bookings that can be traced through submission, storage, availability updates, notifications, and reports.`, `Use copied bookings from last year to make the test database look realistic for staff.`, `Use only rejected bookings to confirm that unavailable equipment is never assigned to students.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use sample bookings that can be traced through submission, storage, availability updates, notifications, and reports.</p><p>The slide emphasises testing the full expected data flow, not just whether a form saves. Planned occurrence data should be traceable through each process, data store, output, and related feature so the team can identify defects clearly.</p>` }
      ] },
    { number: '572', marks: 1, layout: 0, section: 'Data Planning',
      items: [
        { type: 'mcq',
          question: `<p>A Django purchasing system produces a monthly budget report for managers. Which test data plan best checks that the report supports reliable business decisions?</p>`,
          options: [`Enter many supplier names and item descriptions so the report contains a wide range of realistic labels.`, `Use only approved purchase records so the monthly spending report is based on confirmed transactions.`, `Plan supplier, request and budget records so expected totals, warnings and variances can be checked independently.`, `Focus on checking that each purchase request saves correctly before comparing any report totals.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Plan supplier, request and budget records so expected totals, warnings and variances can be checked independently.</p><p>The slide says report testing should use planned primary, occurrence and calculated data so expected results can be calculated independently and compared with the system output. Budget data should also test constraints, warnings, variances and decision rules, not just storage.</p>` }
      ] },
    // ---------------- Feature Evidence ----------------
    { number: '573', marks: 1, layout: 0, section: 'Feature Evidence',
      items: [
        { type: 'mcq',
          question: `<p>Why is feature evidence important when documenting the first implemented feature in an enterprise computing system?</p>`,
          options: [`It focuses on code quality only, showing that the feature was programmed correctly.`, `It lists the feature name and stores screenshots to prove the interface was completed.`, `It links evidence of building and testing the feature to design requirements and user needs.`, `It records the final version of the feature after all development work has finished.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It links evidence of building and testing the feature to design requirements and user needs.</p><p>Feature evidence should show that a feature exists, how it was implemented, and how it supports system requirements. It connects practical work with verification, which checks whether it was built according to the design, and validation, which checks whether it meets user and stakeholder needs.</p>` }
      ] },
    { number: '574', marks: 1, layout: 0, section: 'Feature Evidence',
      items: [
        { type: 'mcq',
          question: `<p>A student documents a new incident report feature in a Django-style web application. Which approach would best demonstrate that they understand how the changed components work together?</p>`,
          options: [`It should list the changed filenames and commit dates, proving that the project files were edited correctly.`, `It should identify the model, view, template and URL changes, explaining how each part contributes to the feature.`, `It should include the full source code for every file, showing that the feature was completed in detail.`, `It should focus mainly on the template design, because users only interact with what appears in the browser.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It should identify the model, view, template and URL changes, explaining how each part contributes to the feature.</p><p>A strong evidence record selects relevant snippets and explains the role of each changed component. In a Django-style project, the model, view, template and URL configuration work together to store data, process requests, present information and make the feature accessible.</p>` }
      ] },
    { number: '575', marks: 1, layout: 0, section: 'Feature Evidence',
      items: [
        { type: 'mcq',
          question: `<p>A student needs to provide evidence that a new web form feature works from the user’s perspective. Which evidence would best meet this requirement?</p>`,
          options: [`Show the form being completed and the resulting updated page, with a short note on the user role, input, expected result, and actual result.`, `Show the page layout in the browser and briefly state that the feature has been added to the system and is ready to use.`, `Show the database table after testing and explain that the stored values prove the interface is working for the user.`, `Show the source code for the form and describe how the feature should behave once a user submits valid data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Show the form being completed and the resulting updated page, with a short note on the user role, input, expected result, and actual result.</p><p>Good browser screenshot evidence should show the feature being accessed and used through the interface, with realistic data and the expected outcome visible. A short explanation of the user role, test input, expected result, and actual result helps the marker understand both validation and verification.</p>` }
      ] },
    { number: '576', marks: 1, layout: 0, section: 'Feature Evidence',
      items: [
        { type: 'mcq',
          question: `<p>A developer tests a feature that allows users to submit service requests. Which action would best provide data state evidence that the feature works correctly?</p>`,
          options: [`Compare the expected stored values with the actual records after the feature runs.`, `Check that the browser page displays the form fields in the correct order.`, `Confirm that the report layout looks professional before using the data.`, `Record only the final screen shown after the user submits the request.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Compare the expected stored values with the actual records after the feature runs.</p><p>Data state evidence is about proving that the underlying data has been created, edited or deleted correctly. This means comparing expected values with actual stored records, not just checking what appears on screen or how a report looks.</p>` }
      ] },
    { number: '577', marks: 1, layout: 0, section: 'Feature Evidence',
      items: [
        { type: 'mcq',
          question: `<p>A student is writing a process diary entry after implementing a web form feature. The form originally failed because the template used a URL name that did not match the URL configuration. Which diary entry approach best shows effective evaluation?</p>`,
          options: [`List the pages created, state the feature is finished, and move on to the next task.`, `Record the date completed, name the requirement, and include a screenshot of the form.`, `Mention that bugs occurred, say they were fixed, and describe the final screen layout.`, `Explain the route mismatch, how the error was diagnosed, and what should be refined next.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Explain the route mismatch, how the error was diagnosed, and what should be refined next.</p><p>A strong process diary entry evaluates the development process using specific evidence. It should explain what went wrong, how the issue was identified and resolved, and what improvements or further testing are needed. General claims or simple timelines do not show enough reflection.</p>` }
      ] },
    // ---------------- Test Data Entry ----------------
    { number: '578', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A developer is testing a Django prototype for a school management system. Which approach best follows good practice for creating test data?</p>`,
          options: [`Create random fictional records for each page, without checking whether they match the model requirements.`, `Create realistic fictional records for every model, including less visible ones, to test relationships and rules safely.`, `Create real records from the organisation for the main screens, so the test closely matches actual users.`, `Create simple placeholder records for visible pages only, because hidden models are not part of user testing.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Create realistic fictional records for every model, including less visible ones, to test relationships and rules safely.</p><p>Effective test data should cover every model in the system, including less visible data types, so that relationships, validation rules and admin workflows can be checked. It should be realistic but fictional to avoid exposing personal or confidential information.</p>` }
      ] },
    { number: '579', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A team wants to use AI to create test data for a Django prototype with several linked models. Which approach best matches good practice?</p>`,
          options: [`Ask the AI for sample records, import the output directly and fix any issues after testing fails.`, `Describe the models, constraints, record counts and relationships, then review the generated data for errors.`, `Generate many random records first, then adjust the Django models to match the data produced.`, `Provide the model names only, request realistic data and assume the AI will infer the relationships.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Describe the models, constraints, record counts and relationships, then review the generated data for errors.</p><p>A strong AI prompt for test data should specify model fields, data types, required fields, choices, constraints, record counts, realistic values, edge cases and relationships such as valid foreign keys. The output still needs careful checking because AI-generated data may contain inconsistencies or invalid relationships.</p>` }
      ] },
    { number: '580', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A developer is using the Django admin site to test a prototype shop system. The models include Customers, Products and Orders, where each order refers to a customer and product. Which action best follows the intended use of the admin interface?</p>`,
          options: [`Avoid the admin interface and add sample data only by editing database tables.`, `Create customers and products first, then enter orders using the admin interface.`, `Create orders first, then add customers and products when errors appear.`, `Enter all records in any order because migrations handle relationships automatically.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Create customers and products first, then enter orders using the admin interface.</p><p>Records that are referenced by other records should usually be created first. Since orders may depend on existing customers and products, entering those records first tests whether the Django admin supports the intended maintenance workflow.</p>` }
      ] },
    { number: '581', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A Django model includes a discount field that must be a numeric percentage from 0 to 100. Which test set best checks that validation is protecting data quality?</p>`,
          options: [`Test only invalid text values to see whether the database stops wrong types.`, `Test one valid value such as 50 to confirm the admin form saves correctly.`, `Test several ordinary values such as 10, 20, 30 and 40 to check normal entry.`, `Test values such as 0, 100, -1 and 101 to check the limits and rejection rules.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Test values such as 0, 100, -1 and 101 to check the limits and rejection rules.</p><p>Boundary testing checks values at or just beyond the allowed limits. For a percentage from 0 to 100, 0 and 100 should be accepted, while -1 and 101 should be rejected with clear errors.</p>` }
      ] },
    { number: '582', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A student is preparing evidence that their Django prototype has been verified against its requirements. Which approach would provide the strongest proof that the prototype works as intended?</p>`,
          options: [`Record the original design requirements only, then explain that the admin site will enforce relationships automatically.`, `Collect screenshots only of the admin home page to show the system opens, then list the models that were planned.`, `Save a few valid records in the admin site and state that the prototype works without recording failed tests.`, `Organise screenshots and notes to show stored records, links between models, rejected invalid data, and the test result.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Organise screenshots and notes to show stored records, links between models, rejected invalid data, and the test result.</p><p>Good verification evidence should show that the prototype matches requirements: records are stored correctly, relationships are maintained, invalid data is rejected, and the evidence is organised so others can understand the test and result.</p>` }
      ] },
    { number: '583', marks: 1, layout: 0, section: 'Test Data Entry',
      items: [
        { type: 'mcq',
          question: `<p>A student is testing an enterprise appointment system that stores names, contact details and health notes. Which approach best protects privacy while still supporting useful testing?</p>`,
          options: [`Use real customer records because they show the system working under normal conditions.`, `Use random joke records because privacy is protected when the data is not realistic.`, `Use realistic fictional records and check them for bias, sensitivity and ethical issues.`, `Use copied online records if names and addresses are not checked too closely.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use realistic fictional records and check them for bias, sensitivity and ethical issues.</p><p>Enterprise testing should avoid real personal or sensitive data. Fictional but realistic data is safer, but it should still be reviewed for bias, inappropriate content and ethical or legal concerns.</p>` }
      ] },
    // ---------------- Implementation Planning ----------------
    { number: '584', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>Why is testing feasibility an important part of planning the implementation of an enterprise computing system?</p>`,
          options: [`It confirms whether the final software interface matches the original visual design.`, `It ensures the enterprise buys the most advanced hardware available for deployment.`, `It focuses on removing user training so the system can launch more quickly.`, `It checks whether the system can be introduced safely within real organisational limits.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It checks whether the system can be introduced safely within real organisational limits.</p><p>Feasibility in implementation planning means judging whether the plan can realistically be completed within constraints such as time, budget, technical environment, training, privacy, data migration and organisational needs.</p>` }
      ] },
    { number: '585', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>Which approach best describes effective risk analysis before implementing an enterprise computing system?</p>`,
          options: [`Focus on legal requirements first, then assume organisational issues will be solved during rollout.`, `Assess how likely and serious each risk is, then plan actions to reduce its chance or impact.`, `List the main technical problems, then delay implementation until every problem is fully removed.`, `Identify the most expensive risks, then choose the lowest-cost strategy for the implementation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Assess how likely and serious each risk is, then plan actions to reduce its chance or impact.</p><p>Risk analysis involves identifying possible events that could prevent successful implementation, judging each by likelihood and consequence, and planning mitigation strategies to reduce either the chance of the risk occurring or its impact if it occurs.</p>` }
      ] },
    { number: '586', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>A school is introducing a new cloud-based student management system that must share data with email, reporting and authentication services. Which action best supports successful integration with the existing enterprise environment?</p>`,
          options: [`Replace most existing infrastructure so the new system can run separately from older enterprise applications.`, `Install the new software first, then adjust databases, networks and security settings as problems appear during use.`, `Focus mainly on user training, since integration issues can usually be solved after staff begin using the system.`, `Check required connections, data mappings, security controls and whether existing devices and networks can support the system.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Check required connections, data mappings, security controls and whether existing devices and networks can support the system.</p><p>An implementation plan should consider how the new system connects to existing hardware, software, networks, databases, cloud services and security tools. It should also plan data migration, validation and protection to avoid inconsistent records, duplicated data or insecure workarounds.</p>` }
      ] },
    { number: '587', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>An organisation is replacing its customer records system. Staff roles will use the system differently, and some employees are worried the change will increase their workload. Which implementation approach best reflects effective training and change management?</p>`,
          options: [`Provide role-based training near launch, with practice, support, feedback and communication about the change.`, `Provide training only for managers first, then ask them to correct other users during the transition.`, `Provide identical training to all users early, then rely on manuals if procedures are forgotten.`, `Provide technical installation updates only, since users can learn workflows after the system is live.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Provide role-based training near launch, with practice, support, feedback and communication about the change.</p><p>Effective implementation prepares different user groups for how they will actually use the system, times training close enough to launch to be useful, and includes support and communication to reduce resistance and stress.</p>` }
      ] },
    { number: '588', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>An organisation is preparing to launch a new enterprise computing system. Which testing approach best shows that the system is ready before full operation?</p>`,
          options: [`Focus mainly on user opinions, and deploy once most staff say the screens are easy to use.`, `Run one final trial of the whole system, then deploy if no major fault appears immediately.`, `Check the main features quickly, and fix remaining issues after the system is fully deployed.`, `Combine several targeted tests, record results, and deploy only when agreed readiness criteria are met.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Combine several targeted tests, record results, and deploy only when agreed readiness criteria are met.</p><p>A strong testing methodology uses multiple types of testing, such as functional, integration, data, performance and user acceptance testing. Results should be documented, and deployment should depend on clear criteria such as fixing critical defects and confirming key processes work.</p>` }
      ] },
    { number: '589', marks: 1, layout: 0, section: 'Implementation Planning',
      items: [
        { type: 'mcq',
          question: `<p>A retail company is introducing a new inventory system. Downtime would disrupt sales, but the company can trial the system in one branch before using it everywhere. Which implementation method is most justified?</p>`,
          options: [`Use a direct rollout across all branches immediately, since this will reduce the time spent managing change.`, `Use a parallel rollout permanently in every branch, since keeping both systems avoids needing a final changeover.`, `Use a phased rollout by removing key functions first, since this will make training less important for users.`, `Use a pilot rollout in one branch first, then expand if testing and user feedback show it is reliable.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Use a pilot rollout in one branch first, then expand if testing and user feedback show it is reliable.</p><p>A pilot implementation suits a system that can be trialled with a small group or branch before wider deployment. It reduces risk by identifying issues in a controlled setting and allows feedback, testing results and user readiness to guide the full rollout.</p>` }
      ] },
    // ---------------- Analytical Reporting ----------------
    { number: '590', marks: 1, layout: 0, section: 'Analytical Reporting',
      items: [
        { type: 'mcq',
          question: `<p>A Django system has a requirement that only authorised staff can update customer records securely. Which statement best describes how an analytical report should evaluate this requirement?</p>`,
          options: [`It describes the system interface and includes screenshots showing the pages that users can access in Django.`, `It links each requirement to relevant Django features and supports the judgement with test results, logs or other evidence.`, `It summarises stakeholder opinions about the system and recommends extra features that could be added later.`, `It lists the main Django features used in the project and explains how each one was coded during development.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It links each requirement to relevant Django features and supports the judgement with test results, logs or other evidence.</p><p>An analytical report is meant to interpret evidence to judge how well the system meets its requirements. It should connect user needs and constraints to system features, then support claims with evidence such as tests, logs, screenshots or database records.</p>` }
      ] },
    { number: '591', marks: 1, layout: 0, section: 'Analytical Reporting',
      items: [
        { type: 'mcq',
          question: `<p>A school asks for a Django feature that lets students submit application forms online. In an analytical report, which statement best shows traceability for this requirement?</p>`,
          options: [`It describes the finished screen design without referring to how the data is handled.`, `It lists the requirement separately from the code so the report is easier to read.`, `It links the requirement to the model, view, template and validation used to deliver it.`, `It explains the Django files created even if they are not connected to user needs.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It links the requirement to the model, view, template and validation used to deliver it.</p><p>Traceability means following an important user requirement through design, development and testing. For an online application form, this includes showing how the requirement is supported by the Django model, view, template and validation rules.</p>` }
      ] },
    { number: '592', marks: 1, layout: 0, section: 'Analytical Reporting',
      items: [
        { type: 'mcq',
          question: `<p>A Django booking system must reject bookings made for dates in the past. Which statement best describes how an analytical report should use tests as evidence for this requirement?</p>`,
          options: [`It lists the booking form fields, describes the Django model structure, and states that the feature was completed.`, `It records the final booking totals, summarises customer feedback, and says the system is ready to deploy.`, `It compares valid and invalid date tests, explains expected and actual results, and links the outcome to data quality.`, `It shows screenshots of the booking page, names the staff who tested it, and confirms that users can log in.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It compares valid and invalid date tests, explains expected and actual results, and links the outcome to data quality.</p><p>Good test evidence should show what was tested, the test data used, the expected result and the actual result. The report should then interpret the outcome, such as explaining that rejecting past dates supports data quality. The other options give weak evidence because they rely on description, screenshots, feedback or unsupported claims rather than clear verification and validation results.</p>` }
      ] },
    { number: '593', marks: 1, layout: 0, section: 'Analytical Reporting',
      items: [
        { type: 'mcq',
          question: `<p>A company’s Django customer system is being redesigned. Research shows that staff often need to locate records by customer name and account status. Which design justification would be most appropriate in an analytical report?</p>`,
          options: [`Use fewer admin options, because reducing visible features always makes a system easier to use.`, `Use a larger logo and header, because a more visual dashboard looks more professional to staff.`, `Use search and status filters, because user research shows staff commonly find records that way.`, `Use longer text fields throughout, because giving users more typing space makes the system flexible.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use search and status filters, because user research shows staff commonly find records that way.</p><p>The best answer links a design choice directly to evidence from research and user needs. Analytical reporting should justify decisions using data, testing, or measurable user behaviour, not personal preference or assumptions.</p>` }
      ] },
    { number: '594', marks: 1, layout: 0, section: 'Analytical Reporting',
      items: [
        { type: 'mcq',
          question: `<p>A Django system for managing employee records meets its functional requirements and runs efficiently. Which statement best describes how an analytical report should evaluate its impact before deployment?</p>`,
          options: [`It should measure speed and accuracy because legal concerns are handled after release.`, `It should focus on whether the main functions work and leave wider issues to users.`, `It should explain the benefits while assessing privacy, access, fairness and deployment risks.`, `It should describe the interface design and assume authorised staff will use data correctly.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It should explain the benefits while assessing privacy, access, fairness and deployment risks.</p><p>An analytical report should consider not only whether the Django system works, but also its technical, social, ethical and legal effects. This includes privacy, access control, responsible use of logs, fairness, consent and risks before deployment.</p>` }
      ] },
    // ---------------- Django Project Fit ----------------
    { number: '595', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>Why is Django a suitable framework for an HSC Enterprise Computing project?</p>`,
          options: [`It is mainly useful for making visual website layouts, so students can avoid working with real data or system processes.`, `It guarantees a finished enterprise system quickly, because coding is the only major part of the project.`, `It provides built-in structures for data, users, forms and administration, so students can focus on the enterprise problem and testing.`, `It removes the need to collect requirements, because the framework automatically decides what users and organisations need.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It provides built-in structures for data, users, forms and administration, so students can focus on the enterprise problem and testing.</p><p>Django fits an enterprise computing project because it supports common features such as databases, user accounts, forms, administration tools and project structure. This helps students build a working prototype while focusing on requirements, data, testing and organisational needs.</p>` }
      ] },
    { number: '596', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>A student’s interviews show that staff need to search customer records and filter incident reports by date. How would Django models best support this enterprise computing project?</p>`,
          options: [`A model links user requirements to database tables, allowing data to be entered, searched and analysed.`, `A model formats the interface screens, allowing users to change colours and page layouts.`, `A model generates final reports only, allowing evaluation without collecting new evidence.`, `A model stores survey answers separately, allowing interview notes to replace database testing.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — A model links user requirements to database tables, allowing data to be entered, searched and analysed.</p><p>In Django, models describe the main data objects and are used to create and manage database tables. This lets requirements such as searching records or filtering reports be built into a prototype that can store, retrieve and analyse data.</p>` }
      ] },
    { number: '597', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>A Year 12 student is developing an enterprise system with customer and incident records. They need to show how staff would maintain the data, but they have limited time to design custom screens. Which approach best matches the role of Django’s automatic administration interface?</p>`,
          options: [`Store records in separate files so administrators can edit data without needing a secure interface.`, `Use Django’s admin interface so authorised staff can manage records securely while the student focuses on core functionality.`, `Avoid creating data models until the final stage so the admin area can be designed first.`, `Build every data entry screen manually so staff can access records without using built-in tools.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use Django’s admin interface so authorised staff can manage records securely while the student focuses on core functionality.</p><p>Django’s automatic admin interface is useful because, after data models are defined, it provides secure tools for authorised users to add, edit, delete and search records. This helps students demonstrate realistic enterprise management functions without manually building every screen.</p>` }
      ] },
    { number: '598', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>A student uses an AI tool to help prototype a Django system. Which approach best shows an appropriate understanding of Django’s MVT structure and AI-assisted development?</p>`,
          options: [`Use MVT to combine the data, request logic and interface, then accept the generated code if it runs.`, `Use MVT to replace manual testing and explanation, then submit the generated code as the design.`, `Use MVT to focus mainly on the interface design, then let the AI decide the data requirements.`, `Use MVT to separate the data, request logic and interface, then test each generated part against the requirements.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Use MVT to separate the data, request logic and interface, then test each generated part against the requirements.</p><p>Django’s MVT structure separates models, views and templates into distinct responsibilities. This makes AI-assisted code easier to review, test and explain, but students still need to check that it works and meets the requirements.</p>` }
      ] },
    { number: '599', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>A student’s research finds that staff need quicker access to records and users prefer a simple online form. Which action best shows how Django can connect this evidence to a working prototype?</p>`,
          options: [`Use the findings to design models, forms, permissions and pages, then demonstrate how the prototype meets those needs.`, `Create a detailed report only, then explain that the prototype could be developed later if time allows.`, `Focus mainly on visual layout, then use the presentation to describe the technical benefits of Django.`, `Build pages first, then collect research evidence that supports the chosen design and features already included.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use the findings to design models, forms, permissions and pages, then demonstrate how the prototype meets those needs.</p><p>The slide explains that research evidence should guide the Django prototype. Interview and survey findings can inform models, forms, permissions and pages, and the prototype can then be used to demonstrate how the system responds to identified needs.</p>` }
      ] },
    { number: '600', marks: 1, layout: 0, section: 'Django Project Fit',
      items: [
        { type: 'mcq',
          question: `<p>A student argues that Django is suitable for an enterprise project because it includes authentication, database support and administration tools. Which statement best improves this justification?</p>`,
          options: [`Django is appropriate only when the system avoids storing personal or organisational data.`, `Django is suitable mainly because it can replace ethical planning with ready-made code.`, `Django automatically guarantees privacy and security without further developer decisions.`, `Django offers built-in tools, but the student must configure and justify them responsibly.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Django offers built-in tools, but the student must configure and justify them responsibly.</p><p>The slide emphasises that Django provides useful enterprise features such as databases, authentication and administration tools, but developers are still responsible for privacy, authorised access, data accuracy, security and responsible use of AI-generated code.</p>` }
      ] },
    // ---------------- Project Environment Setup ----------------
    { number: '601', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>Which option best explains how the main project tools work together in the development environment?</p>`,
          options: [`VSCode provides the web framework, Python starts the server, Django edits the project files, and the terminal writes the program code.`, `VSCode runs the application logic, Python organises the files, Django installs packages, and the terminal stores the database records.`, `VSCode manages the project folder, Python provides the database interface, Django runs terminal commands, and the terminal structures the application.`, `VSCode organises the code files, Python runs the logic, Django structures the web system, and the terminal runs commands to manage and test it.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — VSCode organises the code files, Python runs the logic, Django structures the web system, and the terminal runs commands to manage and test it.</p><p>The tools work together by each handling a distinct part of the development workflow: VSCode is the editor, Python is the language, Django is the web framework, and the terminal is used for commands such as installing packages and running the server.</p>` }
      ] },
    { number: '602', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student is starting their major_project. Which action best shows they understand the project structure?</p>`,
          options: [`Memorising code commands without considering how the project is organised.`, `Identifying how the project is organised and where different work belongs.`, `Writing the final evaluation before understanding how work is stored.`, `Choosing the final design style before checking how files are arranged.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Identifying how the project is organised and where different work belongs.</p><p>Understanding the major_project structure means recognising how the project is organised so that different parts of the work can be found, managed, and developed appropriately.</p>` }
      ] },
    { number: '603', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student is worried that testing the Django security demonstration might expose their computer or personal data. Which explanation best addresses this concern?</p>`,
          options: [`It runs online by default, but Django blocks unknown users from changing any project files.`, `It runs in the background as a service, but only stores encrypted data in cloud databases.`, `It runs with production security tools, using real accounts to prove two-factor authentication works.`, `It runs locally and temporarily, using isolated test data that can be deleted with the project files.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It runs locally and temporarily, using isolated test data that can be deleted with the project files.</p><p>The slide explains that the Django project is safe because it runs only on localhost, uses a temporary development server, stores data in a local SQLite file, and does not require real personal data. This makes it suitable for controlled learning and testing.</p>` }
      ] },
    { number: '604', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student using macOS is preparing for the Django workshop. Which approach best follows the recommended setup and avoids relying on outdated system tools?</p>`,
          options: [`Update Django first and assume macOS will automatically update Python later.`, `Install Python 3 from Python.org and confirm it with \`python3 --version\` in Terminal.`, `Use the preinstalled Python 2 and confirm it with \`python --version\` in Terminal.`, `Run the shell profile update before checking whether Python 3 is already working.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Install Python 3 from Python.org and confirm it with \`python3 --version\` in Terminal.</p><p>The slide explains that macOS may include older Python versions, especially Python 2, which is no longer maintained. For the workshop, students should install the latest Python from Python.org and verify it using \`python3 --version\`. The shell profile update is optional and only needed if the command reports an error.</p>` }
      ] },
    { number: '605', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>A student is setting up Python for the first time on Windows or macOS. Which setup choice best matches the recommended installation process?</p>`,
          options: [`Install Python 3.12.5 manually, avoid admin options, and leave environment variables unchanged.`, `Choose the latest Python installer, customise the installation, and ensure Python is added to PATH or environment variables.`, `Use the system Python version, skip the installer, and only add Python to PATH if errors appear.`, `Choose any Python installer, keep the default installation, and avoid changing PATH or environment variables.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Choose the latest Python installer, customise the installation, and ensure Python is added to PATH or environment variables.</p><p>The slide recommends downloading the latest Python version, using a customised installation, and making sure Python is added to PATH or environment variables so it can be run easily from the command line.</p>` }
      ] },
    { number: '606', marks: 1, layout: 0, section: 'Project Environment Setup',
      items: [
        { type: 'mcq',
          question: `<p>A macOS student wants to confirm their setup before installing Django and the listed packages. Which sequence best matches the recommended commands?</p>`,
          options: [`Use python3 and python3 -m pip to check versions, then install with pip3 commands.`, `Use python3 to check Python, but use python -m pip and pip for all installs.`, `Use python and python -m pip to check versions, then install with pip commands.`, `Use pip3 to check Python, then use python3 --version to install each package.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Use python3 and python3 -m pip to check versions, then install with pip3 commands.</p><p>The slide separates the recommended commands by operating system. For macOS, Python is checked with python3 --version, pip is checked with python3 -m pip --version, and packages are installed using pip3 install.</p>` }
      ] },
  ]
});
