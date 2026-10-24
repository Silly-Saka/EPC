registerExam({
  id: 'tb-m2',
  title: 'Textbook MCQ — Module 2: Data science',
  source: 'Textbook', year: 2025, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 100,
  coverNotes: `<p>Multiple-choice questions from the textbook exercises for Module 2. Answers were prepared from the textbook content (the textbook has no answer key).</p>`,
  groups: [
    // ===== Exercise 2.1.1 =====
    { number: '1', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What type of data answers the question "How many?" and can be measured or counted?</p>`,
          options: [`Qualitative data.`, `Quantitative data.`, `Nominal data.`, `Ordinal data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Quantitative data. Quantitative data is numerical: it can be counted or measured and answers questions such as "how many" or "how much" (textbook p. 134).</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of qualitative data?</p>`,
          options: [`The number of students in a classroom.`, `The average mark in a class.`, `Students' opinions on their favourite subjects.`, `The percentage of students who play a sport.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Students' opinions on their favourite subjects. Qualitative data is descriptive (opinions, feelings, comments) rather than numerical; the other options are all counts or calculated numbers (textbook p. 134).</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>In a survey about a new movie, a researcher records comments from viewers about the plot and characters. What type of data is being collected?</p>`,
          options: [`Quantitative.`, `Categorical.`, `Qualitative.`, `Binary.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Qualitative. Written comments describe viewers' opinions and cannot be measured numerically, so they are qualitative data (textbook p. 134).</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes nominal data?</p>`,
          options: [`Data that can be ranked in order.`, `Data that categorises items without any order.`, `Data that has a true zero.`, `Data that measures consistent intervals.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data that categorises items without any order. The textbook defines nominal data as categorising items without any order or ranking (e.g. favourite fruit); ranking is ordinal, consistent intervals is interval and a true zero is ratio (textbook p. 137).</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>If a teacher measures the time it takes for students to complete an exam, what type of data is this?</p>`,
          options: [`Categorical data.`, `Ordinal data.`, `Interval data.`, `Ratio data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Ratio data. Ratio data has consistent intervals and a true zero; the textbook lists "time taken to complete a task" as an example of ratio data (textbook p. 138).</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>A clothing brand launches a new line of sustainable clothing. After the launch, they notice a decline in sales and decide to check customer feedback on social media and fashion review websites. What type of data does the comments about the clothing quality and style represent?</p>`,
          options: [`Quantitative data.`, `Categorical data.`, `Qualitative data.`, `Ratio data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Qualitative data. Customer comments about quality and style are descriptive opinions, not numbers, so they are qualitative data (textbook p. 134).</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary disadvantage of convenience sampling?</p>`,
          options: [`It is time-consuming.`, `It can be cost-effective.`, `It may not represent the entire population.`, `It is complex to implement.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It may not represent the entire population. Convenience sampling collects data from people who are easy to reach, which introduces bias and means the sample may not represent the whole population (textbook p. 138).</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of stratified sampling?</p>`,
          options: [`Randomly selecting every 5th student from a list.`, `Surveying students at lunchtime.`, `Dividing students by grade level and then randomly selecting from each grade.`, `Asking friends about their favourite subjects.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Dividing students by grade level and then randomly selecting from each grade. Stratified sampling divides the population into groups with shared characteristics and then randomly samples from each group; every 5th student is systematic sampling (textbook p. 138).</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>During a research project, a student manually observes how many students enter the library without interacting with them. What method of data collection is this?</p>`,
          options: [`Active data collection.`, `Passive data collection.`, `Computerised data collection.`, `Survey data collection.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Passive data collection. Passive collection gathers data without direct interaction; the textbook gives "tracking how many students enter the library without speaking to them" as a manual passive method (textbook p. 139).</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Exercise 2.1.1',
      items: [
        { type: 'mcq',
          question: `<p>A student collects the following data: temperature readings for a week. What type of data does this represent?</p>`,
          options: [`Nominal data.`, `Ordinal data.`, `Interval data.`, `Ratio data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Interval data. Temperature (°C) has consistent intervals but no true zero (0 °C does not mean no temperature); the textbook uses a week of daily temperatures as its interval data example (textbook p. 137).</p>` }
      ] },

    // ===== Exercise 2.1.2 =====
    { number: '11', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>A researcher is studying the effects of sleep on academic performance. They find a study that shows students who sleep less than six hours a night have lower grades. What aspect of data quality should the researcher consider to ensure the findings are applicable?</p>`,
          options: [`Accuracy.`, `Relevance.`, `Reliability.`, `Validity.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Relevance. Data should be relevant to the problem being addressed; when using another study's (secondary) data the textbook says to check whether it "remains relevant to the current research", as outdated or unrelated data may not be applicable (textbook p. 143).</p><p><em>Note: option D (validity) is also arguable because the researcher should check that the study measured what it claims to measure, but "applicable" matches the textbook's description of relevance.</em></p>` }
      ] },
    { number: '12', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What does accuracy refer to in the context of data quality?</p>`,
          options: [`The data must be easily accessible.`, `The data should measure what it is intended to measure.`, `The data must be correct and free from errors.`, `The data should come from reliable sources.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The data must be correct and free from errors. Accuracy is the correctness and precision of the data (e.g. a score of 85 wrongly entered as 58 is inaccurate); measuring what is intended is validity (textbook p. 143).</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>A marketing team uses a survey to gather feedback on a new product. However, they realise that many participants misunderstood a key question. What data quality aspect is most likely compromised in this scenario?</p>`,
          options: [`Reliability`, `Validity.`, `Relevance.`, `Timeliness.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Validity. Valid data measures what it is intended to measure; if participants misunderstood the question, their answers do not measure what the team intended (textbook p. 143).</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>A researcher collects data from various sources to analyse the impact of social media on youth. They use data from old articles, recent studies, and social media analytics. What type of data is the researcher primarily using?</p>`,
          options: [`Primary data.`, `Secondary data.`, `Tertiary data.`, `Qualitative data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Secondary data. Secondary data has already been collected by others, often for different purposes, such as statistics from prior studies, newspaper articles or existing databases (textbook p. 143).</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes structured data?</p>`,
          options: [`Data that cannot be categorised easily.`, `Data organised in a predefined format.`, `Data that consists of images and audio files.`, `Data collected through surveys and interviews.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data organised in a predefined format. Structured data is organised in a predefined, orderly format (tables, spreadsheets, databases) where every piece fits a clearly defined field; images and audio are unstructured (textbook p. 150).</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following methods is used for presenting data visually?</p>`,
          options: [`Dashboards`, `Reports.`, `Infographics.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above. The textbook lists graphs and charts, infographics, dashboards, reports, network diagrams and maps as methods for presenting data visually (textbook p. 145).</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Primary data is best described as:</p>`,
          options: [`Data collected by others for different purposes.`, `Data that is gathered specifically for a research project.`, `Data that cannot be quantified.`, `Data that is outdated and irrelevant.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data that is gathered specifically for a research project. Primary data is collected directly for a specific research project (e.g. through surveys, interviews or experiments); data collected by others is secondary (textbook p. 143).</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Secondary data is best defined as:</p>`,
          options: [`Data collected directly from participants.`, `Data that is tailored to specific research needs.`, `Data that has already been collected by someone else.`, `Data that requires analysis tool.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Data that has already been collected by someone else. Secondary data consists of information already collected by others, often for different purposes (textbook p. 143).</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the main challenge of working with unstructured data?</p>`,
          options: [`It is easy to analyse.`, `It lacks qualitative insights.`, `It does not fit into predefined categories.`, `It is always outdated.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It does not fit into predefined categories. Unstructured data (text documents, emails, social media posts, images, audio) is not arranged in neat predefined categories, so it is harder to analyse with traditional methods (textbook p. 150).</p>` }
      ] },
    { number: '20', marks: 1, layout: 0, section: 'Exercise 2.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What role does informatics play in data management?</p>`,
          options: [`It makes data collection more complex.`, `It disorganises data for easier access.`, `It helps to organise, process, and analyse data.`, `It limits the types of data that can be collected.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It helps to organise, process, and analyse data. Informatics refers to the tools and techniques used to manage and analyse data, playing a crucial role in organising, processing and extracting meaningful insights (textbook p. 144).</p>` }
      ] },

    // ===== Exercise 2.1.3 =====
    { number: '21', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of blockchain technology?</p>`,
          options: [`To store all data in a single location.`, `To encrypt and securely store data in decentralized blocks.`, `To enhance internet speed for online applications.`, `To make data easy to access without permission.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To encrypt and securely store data in decentralized blocks. Blockchain securely manages and verifies data using decentralised ledgers distributed across many computers, with blocks chained together and secured by encryption (textbook p. 159).</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>How does a blockchain ensure data integrity?</p>`,
          options: [`By storing data in a single, centralized location.`, `By chaining blocks of data together with encryption.`, `By providing full access to all users.`, `By making data easily editable by anyone.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By chaining blocks of data together with encryption. Each new block contains a reference to the previous block, creating a secure chain, and encryption secures the data so it cannot easily be altered or tampered with (textbook p. 159).</p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a 'hash' in the context of blockchain?</p>`,
          options: [`A unique identifier used to represent a digital identity.`, `A form of encryption that protects blockchain data.`, `A type of cryptocurrency used for transactions.`, `A process of storing data on a central server.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — A unique identifier used to represent a digital identity. In the textbook's example, your sign-up data is converted into a unique code called a 'hash', which then represents your identity and is placed into a block (textbook p. 159).</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an advantage of blockchain for online voting?</p>`,
          options: [`Security through encryption to prevent tampering.`, `Transparency for voters to check if their vote was counted.`, `Trust is increased due to the decentralisation of data.`, `Voters can easily alter their vote after submission.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Voters can easily alter their vote after submission. Once submitted, a vote is encrypted and stored on the blockchain, making it impossible to change; security, transparency and trust are the listed advantages (textbook p. 160).</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the main benefit of using blockchain for tracking items in a supply chain?</p>`,
          options: [`It allows companies to bypass customs and regulations.`, `It creates a permanent, unchangeable record of every transaction.`, `It stores personal data of customers for marketing.`, `It enables products to be manufactured faster.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It creates a permanent, unchangeable record of every transaction. Every time a product moves, a transaction is recorded, creating a permanent and unchangeable history that prevents tampering and counterfeiting (textbook p. 161).</p>` }
      ] },
    { number: '26', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is true about public connections, like free Wi-Fi in a cafe?</p>`,
          options: [`They are encrypted and provide better protection for data.`, `They are open to anyone and usually lack strong security measures.`, `They offer high-speed, stable internet access.`, `They are secured with firewalls and intrusion detection systems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They are open to anyone and usually lack strong security measures. Public connections are open to anyone, are predominantly unencrypted and lack robust data protection; firewalls, encryption and stable connections describe private connections (textbook p. 164).</p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>How does blockchain technology improve accountability in the food supply chain, according to Walmart's case study?</p>`,
          options: [`It allows consumers to track their food in real time.`, `It reduces the ability to trace food contamination.`, `It creates an unchangeable history of every food item.`, `It speeds up the manufacturing process.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It creates an unchangeable history of every food item. Walmart's blockchain traceability system records each item's journey, so contaminated products can be traced back to the source in record time and selective recalls made (textbook pp. 161–162).</p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a risk of using the autofill feature in browsers?</p>`,
          options: [`It speeds up form completion.`, `It can unintentionally fill in personal details on malicious websites.`, `It automatically updates software applications.`, `It makes it impossible to change stored data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can unintentionally fill in personal details on malicious websites. The textbook lists "unintended data sharing": autofill may input personal details on unsafe websites without your knowledge (textbook p. 163).</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the major risk of unchecked pre-selected checkboxes during software sign-up?</p>`,
          options: [`Users may agree to share data with third parties without realising.`, `Users will be automatically unsubscribed from unwanted emails.`, `Users will receive no marketing emails or notifications.`, `Users cannot access the service without accepting terms.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Users may agree to share data with third parties without realising. Pre-selected ("opt-out") checkboxes mean users may unknowingly agree to share their personal data, often with third-party companies such as advertisers (textbook p. 165).</p>` }
      ] },
    { number: '30', marks: 1, layout: 0, section: 'Exercise 2.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which is a potential issue with terms of agreement that users often overlook?</p>`,
          options: [`Users may unknowingly agree to data sharing or loss of control over their information.`, `Users will always receive the benefits of reading the full terms.`, `Users are guaranteed to be informed about the terms in advance.`, `Users can avoid agreeing to terms altogether.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Users may unknowingly agree to data sharing or loss of control over their information. Users often accept terms without reading them; the risks include data sharing with third parties and loss of control over their data (textbook p. 166).</p>` }
      ] },

    // ===== Exercise 2.1.4 =====
    { number: '31', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the key characteristic of big data in relation to the volume of information?</p>`,
          options: [`Small datasets that are easy to analyse.`, `Extremely large amounts of data.`, `Data that can be stored in a traditional database.`, `Data that is only structured.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Extremely large amounts of data. Volume refers to the very large amount of data being generated — hundreds of terabytes or even petabytes (textbook p. 169).</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data is considered semi-structured?</p>`,
          options: [`Databases.`, `XML files.`, `Emails.`, `Social media posts.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — XML files. Under "variety", the textbook gives databases as structured data, XML files as semi-structured data, and emails, videos and social media posts as unstructured data (textbook p. 169).</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What does the 'velocity' aspect of big data refer to?</p>`,
          options: [`The size of the data being generated.`, `The format of the data.`, `The speed at which the data is generated and processed.`, `The security of the data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The speed at which the data is generated and processed. Velocity is about speed, e.g. real-time processing of live video streams; size is volume and format is variety (textbook p. 169).</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of using cloud storage for big data?</p>`,
          options: [`Limited access from different devices.`, `Scalable storage.`, `Requires physical hardware.`, `Slow data transfer speeds.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Scalable storage. Cloud storage lets companies scale storage capacity as needed; the textbook lists scalable storage as a key advantage of cloud storage (textbook pp. 172, 174).</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a common example of a data warehouse system?</p>`,
          options: [`Google Drive.`, `Amazon Redshift.`, `USB flashdrive.`, `Internal hard drive.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Amazon Redshift. The textbook uses Amazon Redshift (part of AWS) as its example of a data warehouse; Google Drive is cloud storage and USB/internal drives are portable/local storage (textbook pp. 170, 174).</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which type of data is unstructured?</p>`,
          options: [`Database tables.`, `XML files.`, `Social media posts.`, `Spreadsheets.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Social media posts. Social media posts are given as unstructured data; database tables and spreadsheets are structured and XML files are semi-structured (textbook pp. 150, 169).</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of data mining?</p>`,
          options: [`To increase the amount of data stored.`, `To analyse the data for patterns and insights.`, `To transfer data between devices.`, `To improve data storage systems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To analyse the data for patterns and insights. Data mining is the process of analysing large sets of data to discover patterns, trends or useful information to help make decisions or predictions (textbook p. 171).</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a common disadvantage of using real-time data processing in businesses?</p>`,
          options: [`Faster decision-making.`, `Higher storage costs.`, `Complex system integration.`, `Inability to collect data quickly.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Complex system integration. Real-time systems must be able to process data continuously as it is generated, which requires powerful, complex systems that must integrate with many data sources (textbook pp. 170, 172).</p><p><em>Note: option B is also arguable because the textbook mentions managing storage costs as a challenge of data scale, but that applies to big data generally rather than specifically to real-time processing.</em></p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a potential ethical concern with big data?</p>`,
          options: [`Efficient data processing.`, `Data ownership and privacy concerns.`, `Faster decision-making.`, `Real-time data collection.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data ownership and privacy concerns. The ethical implications listed for big data include privacy concerns, data ownership and surveillance (textbook pp. 172–173).</p>` }
      ] },
    { number: '40', marks: 1, layout: 0, section: 'Exercise 2.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the main function of a data warehouse?</p>`,
          options: [`To store and manage small datasets.`, `To analyse real-time data only.`, `To store and analyse large volumes of historical data.`, `To process unstructured data only.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To store and analyse large volumes of historical data. A data warehouse is a centralised system for storing large volumes of data optimised for analysis and reporting; it handles extensive historical datasets and is less suited to real-time processing (textbook pp. 170, 174).</p>` }
      ] },

    // ===== Exercise 2.2.1 =====
    { number: '41', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary characteristic of accurate data?</p>`,
          options: [`It represents real-world facts correctly.`, `It is relevant to the purpose.`, `It is consistent over time.`, `It includes all necessary information.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It represents real-world facts correctly. "Accurate data correctly represents real-world facts"; consistency over time is reliability, usefulness is relevance and including all information is completeness (textbook p. 180).</p>` }
      ] },
    { number: '42', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following describes reliable data?</p>`,
          options: [`It is updated frequently.`, `It is useful for a specific purpose.`, `It is consistent over time.`, `It provides correct real-world facts.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is consistent over time. The textbook states "reliable data is consistent over time" (textbook p. 180).</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of anonymisation in data use?</p>`,
          options: [`To collect more data quickly.`, `To protect personal identifiers and privacy.`, `To make data more accessible to the public.`, `To ensure complete transparency of participants' details.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To protect personal identifiers and privacy. Anonymisation removes personal identifiers such as names or addresses, protecting individuals' privacy so information cannot be traced back to them (textbook p. 183).</p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is acknowledging sources important in data use?</p>`,
          options: [`To ensure transparency and respect for intellectual property.`, `To anonymise data.`, `To bypass copyright regulations.`, `To collect more data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To ensure transparency and respect for intellectual property. Using data without crediting its source is unethical; acknowledging the source shows transparency and respect for intellectual property (textbook p. 183).</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What does ICIP stand for?</p>`,
          options: [`International Community Intellectual Property.`, `Indigenous Cultural and Intellectual Property.`, `Inclusive Cultural Information Protection.`, `Institutional Code of Information Privacy.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Indigenous Cultural and Intellectual Property. ICIP refers to Indigenous Cultural and Intellectual Property; misuse can harm communities and erode cultural heritage (textbook p. 185).</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>How does addressing bias contribute to better data quality?</p>`,
          options: [`By improving data accuracy.`, `By ensuring fairness and equality in decision-making.`, `By simplifying data collection.`, `By making data more reliable.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By ensuring fairness and equality in decision-making. Bias occurs when data unfairly represents or excludes groups; "identifying and addressing bias is crucial to ensure fairness and equality in decision-making" (textbook p. 181).</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What role does metadata play in data quality?</p>`,
          options: [`It reduces data bias.`, `It provides context and details about the data.`, `It makes data more reliable.`, `It ensures data is accurate.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It provides context and details about the data. Metadata is information that describes and gives context to data, such as when, how and by whom it was collected (textbook p. 181).</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>In the airline example, why is accurate data crucial?</p>`,
          options: [`It helps in determining passenger preferences.`, `It ensures meal planning is cost-effective.`, `It prevents health risks by ensuring all dietary requirements are met.`, `It makes the process of ordering meals faster.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It prevents health risks by ensuring all dietary requirements are met. In the airline example, inaccurate data that did not fully record a passenger's allergies could lead to serious health risks (textbook p. 180).</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is a benefit of following ethical data principles?</p>`,
          options: [`It avoids accountability.`, `It builds trust and promotes fairness.`, `It uses personal data for manipulative advertising.`, `It ignores participant rights.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It builds trust and promotes fairness. Ethical data use ensures fairness, and adhering to ethical principles builds trust between organisations and individuals and promotes accountability (textbook p. 183).</p>` }
      ] },
    { number: '50', marks: 1, layout: 0, section: 'Exercise 2.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What does informed consent require?</p>`,
          options: [`Participants agreeing without needing detailed information.`, `Explaining the purpose, use, and access of data to participants.`, `Collecting data from participants anonymously.`, `Forcing participants to agree to all terms.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Explaining the purpose, use, and access of data to participants. Researchers must explain the purpose of the study, how the data will be used and who will access it, so participants agree after understanding all relevant details (textbook p. 183).</p>` }
      ] },

    // ===== Exercise 2.2.2 =====
    { number: '51', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What does data literacy enable individuals to do?</p>`,
          options: [`Memorise datasets.`, `Identify, interpret, and apply data effectively.`, `Avoid engaging with digital platforms.`, `Collect data from others without consent.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Identify, interpret, and apply data effectively. Data literacy is the ability to interpret, evaluate and apply data effectively, and it empowers people to identify bias, misinformation or manipulation (textbook p. 195).</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a challenge in maintaining data sovereignty for Indigenous communities?</p>`,
          options: [`Lack of encryption technologies.`, `Historical misuse and unauthorised data collection.`, `Overregulation of data governance frameworks.`, `Limited digital storage options for cultural data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Historical misuse and unauthorised data collection. A key challenge is the historical misuse of Indigenous data, collected for decades without consent or involvement, leading to distrust (textbook p. 192).</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>The Australian Cyber Security Centre (ACSC) primarily focuses on:</p>`,
          options: [`Enforcing the Spam Act 2003.`, `Protecting against cyber threats and data breaches.`, `Investigating privacy violations in the public sector.`, `Educating businesses on consumer data practices.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Protecting against cyber threats and data breaches. The ACSC focuses on cybersecurity, protecting Australians from cyber threats and helping organisations prevent data breaches caused by cyberattacks; investigating privacy complaints is the OAIC's role (textbook p. 190).</p>` }
      ] },
    { number: '54', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What is one key feature of the Australian Privacy Principles (APPs)?</p>`,
          options: [`Mandating encryption for all personal data.`, `Enabling businesses to sell data without consent.`, `Regulating how personal information is handled.`, `Imposing global penalties for data breaches.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Regulating how personal information is handled. The Privacy Act 1988 regulates how personal information is handled and introduced the APPs, which include rules for handling, storing and sharing data responsibly (textbook p. 189).</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which is one consequence of biased data?</p>`,
          options: [`Increased accuracy in analysis.`, `Misleading conclusions and decisions.`, `Improved public trust in algorithms.`, `Enhanced transparency of information.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Misleading conclusions and decisions. Bias unfairly represents or excludes groups, leading to skewed results and unfair decisions, which is why users must learn to recognise biases (textbook pp. 181, 199).</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which strategy can help prevent data swamp?</p>`,
          options: [`Ignoring indexing.`, `Implementing data governance practices.`, `Increasing the amount of low-quality data.`, `Reducing data collection entirely.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Implementing data governance practices. To reduce the risk of a data swamp, organisations should implement robust data governance practices such as data cleaning, indexing and metadata management (textbook p. 198).</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What does the term "data sovereignty" mean in the context of Aboriginal and Torres Strait Islander Peoples?</p>`,
          options: [`Government ownership of Indigenous data.`, `Community control over the collection, storage, and use of their data.`, `The exclusive right of corporations to manage cultural data.`, `The ability to encrypt data for digital protection.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Community control over the collection, storage, and use of their data. Data sovereignty ensures Indigenous communities have the authority to control how their data is collected, stored and used (textbook p. 192).</p>` }
      ] },
    { number: '58', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of how data literacy can combat misinformation?</p>`,
          options: [`Believing all statistics presented in an article.`, `Questioning the source and context of a graph before accepting its validity.`, `Ignoring data entirely in favour of opinions.`, `Sharing content without verifying its credibility.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Questioning the source and context of a graph before accepting its validity. A data-literate person can critically analyse graphs, question their validity and seek credible sources to verify the information (textbook p. 195).</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to understand the biases in curated data?</p>`,
          options: [`To avoid using any data.`, `To identify how data might shape perspectives or decisions.`, `The storage capacity of a device.`, `To increase data storage.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To identify how data might shape perspectives or decisions. Curated data can shape how we think, feel and act; by recognising biases, individuals can better interpret the information they see (textbook pp. 194, 199).</p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Exercise 2.2.2',
      items: [
        { type: 'mcq',
          question: `<p>In the context of data quality, which of the following is an example of a behavioural signal?</p>`,
          options: [`A movie's runtime.`, `A notification about a new social media post.`, `Collecting data from participants anonymously.`, `A user's data privacy agreement.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A notification about a new social media post. Signals are subtle cues that influence user behaviour; the textbook's examples include notifications (e.g. about a friend's new post), personalised recommendations, targeted ads and content arrangement (textbook p. 196).</p>` }
      ] },

    // ===== Exercise 2.3.1 =====
    { number: '61', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What spreadsheet feature is used to display only rows that meet specific conditions?</p>`,
          options: [`Sorting.`, `Filtering.`, `Conditional formatting.`, `Grouping.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Filtering. Filters allow users to display only the rows that meet specific conditions, such as days with temperatures above 30°C (textbook p. 208).</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a 'what-if' analysis tool in spreadsheets?</p>`,
          options: [`Conditional formatting.`, `Data validation.`, `Goal seek.`, `Filter.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Goal seek. What-if analysis is a tool that explores different outcomes by changing certain variables (textbook p. 206). Goal Seek is one of Excel's What-If Analysis tools, alongside the Scenario Manager used in the textbook's weather activity (textbook p. 217). Conditional formatting, data validation and filters do not model changed variables.</p>` }
      ] },
    { number: '63', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Conditional formatting allows you to:</p>`,
          options: [`Lock cells for editing.`, `Summarise large datasets.`, `Highlight cells based on their content.`, `Create pivot tables.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Highlight cells based on their content. Conditional formatting applies rules to highlight cells visually, e.g. sales below a threshold in red (textbook pp. 211, 216).</p>` }
      ] },
    { number: '64', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>To summarise data from multiple sheets in one place, which feature would you use?</p>`,
          options: [`Copy and paste.`, `Linking cells across sheets.`, `Conditional formatting.`, `Data validation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Linking cells across sheets. Linking multiple sheets with formulas and references (e.g. =Sheet2!B5) lets you extract data and create summaries that update dynamically (textbook pp. 208–209).</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>What type of chart is best suited for comparing trends over time across categories?</p>`,
          options: [`Pie chart.`, `Bar chart.`, `Line graph.`, `Scatter plot.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Line graph. Line graphs are ideal for showing changes over time, and several lines can compare categories; bar charts compare discrete categories and pie charts show proportions (textbook p. 206).</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>If you want to group data by month in a spreadsheet, which step should you perform?</p>`,
          options: [`Apply a filter.`, `Use a pivot table.`, `Enable conditional formatting.`, `Perform a what-if analysis.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Use a pivot table. The textbook states that a pivot table can group weather data by month and calculate the average temperature for each month (textbook pp. 205, 221).</p>` }
      ] },
    { number: '67', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>How would you compare sales data for two different years in a spreadsheet?</p>`,
          options: [`Create a chart with both datasets displayed.`, `Use conditional formatting to highlight the highest year.`, `Filter data to show only one year at a time.`, `Sort the data alphabetically.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Create a chart with both datasets displayed. Graphs and charts make comparisons more intuitive; displaying both years together allows side-by-side comparison of trends and differences (textbook pp. 210–211).</p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which spreadsheet feature allows you to design user-friendly input areas?</p>`,
          options: [`Goal seek.`, `Forms.`, `Charts.`, `Conditional formatting.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Forms. Forms serve as an interface that allows users to input data in a structured, user-friendly way (textbook p. 212).</p>` }
      ] },
    { number: '69', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>A report generated from spreadsheet data typically includes:</p>`,
          options: [`Only raw data from the spreadsheet.`, `Summarised data, visualisations, and interpretations.`, `Conditional formatting rules.`, `Only the largest dataset in the workbook.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Summarised data, visualisations, and interpretations. Reports transform raw data into readable summaries using charts, tables and text, focusing on insights and conclusions (textbook p. 213).</p>` }
      ] },
    { number: '70', marks: 1, layout: 0, section: 'Exercise 2.3.1',
      items: [
        { type: 'mcq',
          question: `<p>To highlight cells where sales exceeded $10,000, you would use:</p>`,
          options: [`A filter.`, `Grouping.`, `Conditional formatting.`, `A line chart.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Conditional formatting. Conditional formatting highlights cells that meet a rule (e.g. cell value greater than a set amount) without hiding any rows, unlike a filter (textbook pp. 211, 216).</p>` }
      ] },

    // ===== Exercise 2.3.2 =====
    { number: '71', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of a data dashboard?</p>`,
          options: [`To store data securely.`, `To visualise and summarise complex datasets.`, `To back up data for security.`, `To perform programming tasks.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To visualise and summarise complex datasets. "Data dashboards are powerful tools for visualising and summarising complex datasets", giving insights at a glance (textbook p. 221).</p>` }
      ] },
    { number: '72', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which chart type is best suited for showing trends over time?</p>`,
          options: [`Pie chart.`, `Bar chart.`, `Line chart.`, `Scatter plot.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Line chart. Line charts are ideal for showing trends over time, such as temperature changes across a week (textbook p. 221).</p>` }
      ] },
    { number: '73', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the key advantage of using pivot tables in a dashboard?</p>`,
          options: [`They allow manual calculations.`, `They are pre-designed for specific data types.`, `They replace the need for charts.`, `They offer dynamic data organisation and automatic calculations.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They offer dynamic data organisation and automatic calculations. The key features of pivot tables are dynamic organisation, automatic calculations and data grouping (textbook p. 221).</p>` }
      ] },
    { number: '74', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a slicer in the context of spreadsheets?</p>`,
          options: [`A tool for creating charts.`, `A feature to filter data dynamically.`, `A type of statistical analysis.`, `A way to group data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A feature to filter data dynamically. Slicers are filters with clickable buttons that instantly update the data shown in a pivot table, chart or report (textbook p. 222).</p>` }
      ] },
    { number: '75', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>How can summary metrics, such as averages or totals, be calculated for a dashboard?</p>`,
          options: [`By entering data manually.`, `By applying formulas like =AVERAGE() or =SUM().`, `By using slicers.`, `By creating another pivot table.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By applying formulas like =AVERAGE() or =SUM(). In the dashboard activity, summary metrics are added using formulas such as =AVERAGE(Sheet1!B2:B8) and =SUM(Sheet1!D2:D8) (textbook p. 227).</p>` }
      ] },
    { number: '76', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>In the steps to create a pivot table, what is the first action?</p>`,
          options: [`Select data range.`, `Insert a slicer.`, `Create a chart.`, `Format the dashboard.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Select data range. The first step when adding a pivot table is to select the data range (highlight the dataset), then insert the pivot table (textbook p. 225).</p>` }
      ] },
    { number: '77', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a feature of pivot tables?</p>`,
          options: [`Dynamic organisation.`, `Real-time collaborative editing.`, `Automatic calculations.`, `Data grouping.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Real-time collaborative editing. The listed key features of pivot tables are dynamic organisation, automatic calculations and data grouping; collaborative editing is not one of them (textbook p. 221).</p>` }
      ] },
    { number: '78', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of validation rules in a flat-file database?</p>`,
          options: [`To protect the file with a password.`, `To enhance visual appeal.`, `To prevent incorrect data entries.`, `To create dynamic relationships.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To prevent incorrect data entries. Validation rules restrict what can be entered (e.g. limiting Genre to a list of allowed values), preventing incorrect entries (textbook pp. 212, 231).</p>` }
      ] },
    { number: '79', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a limitation of flat-file databases?</p>`,
          options: [`Scalability issues with large datasets.`, `High cost of implementation.`, `Complex relationships between data`, `Incompatibility with spreadsheet software.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Scalability issues with large datasets. The limitations listed are data redundancy, scalability issues (performance may degrade with large datasets) and no relationships; low cost is an advantage (textbook p. 229).</p>` }
      ] },
    { number: '80', marks: 1, layout: 0, section: 'Exercise 2.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the best practice for avoiding data redundancy in flat-file databases?</p>`,
          options: [`Regularly backing up the database.`, `Using a relational database instead.`, `Adding multiple validation rules.`, `Organising fields efficiently and planning the structure.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Organising fields efficiently and planning the structure. Within a flat-file database, the textbook stresses applying best practices for organising data efficiently, since repeated data leads to redundancy and inconsistencies (textbook pp. 228–229).</p><p><em>Note: option B is also arguable because relational databases eliminate redundancy through normalisation (textbook p. 236), but the question asks for a practice within flat-file databases.</em></p>` }
      ] },

    // ===== Exercise 2.3.3 =====
    { number: '81', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of a relational database?</p>`,
          options: [`To simplify spreadsheet formatting.`, `To reduce redundancy and improve data consistency.`, `To provide real-time collaboration features.`, `To store data in a single table.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To reduce redundancy and improve data consistency. Relational databases store data in multiple linked tables, which avoids duplication and improves data consistency; a single table is a flat-file database (textbook p. 234).</p>` }
      ] },
    { number: '82', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a foreign key used for in relational databases?</p>`,
          options: [`To create calculated fields in tables.`, `To sort and filter data in a single table.`, `To duplicate data across tables.`, `To connect tables by referencing primary keys.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To connect tables by referencing primary keys. A foreign key is a field in one table that links to the primary key in another table, enabling relationships between tables (textbook p. 235).</p>` }
      ] },
    { number: '83', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a primary key in a relational database?</p>`,
          options: [`Date of enrolment.`, `Address.`, `Student ID.`, `Course name.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Student ID. A primary key is a unique identifier for each record, e.g. StudentID in a "Students" table; dates, addresses and names may not be unique (textbook p. 235).</p>` }
      ] },
    { number: '84', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which is a key advantage of dividing data into multiple tables in a relational database?</p>`,
          options: [`Increased data redundancy.`, `Reduced need for primary keys.`, `Simplified data entry.`, `Improved organisation and scalability.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Improved organisation and scalability. The advantages of dividing data into tables are improved data organisation, elimination of redundancy, data integrity and scalability (textbook p. 235).</p>` }
      ] },
    { number: '85', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a typical use case for a relational database over a flat-file database?</p>`,
          options: [`Creating a simple to-do list.`, `Managing data relationships in a healthcare system.`, `Tracking a small inventory for personal use.`, `Maintaining a list of favourite movies.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Managing data relationships in a healthcare system. Relational databases are preferred for larger datasets where relationships between categories of data must be defined and maintained; small, simple lists suit flat-file databases (textbook pp. 229, 236).</p>` }
      ] },
    { number: '86', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>In relational databases, what does "normalisation" achieve?</p>`,
          options: [`Enhanced spreadsheet formatting.`, `Higher data redundancy.`, `Simplification of table structures.`, `Reduction of data duplication and redundancy.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Reduction of data duplication and redundancy. Normalisation is the process of organising data to reduce redundancy and improve integrity (textbook p. 235).</p>` }
      ] },
    { number: '87', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of SQL in relational databases?</p>`,
          options: [`To query, manage, and manipulate data.`, `To add graphical elements to the database.`, `To organise data into a single table.`, `To create visual dashboards.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To query, manage, and manipulate data. SQL is the standard language for managing relational databases, used for sorting and filtering, updating records and joining tables (textbook pp. 242–243).</p>` }
      ] },
    { number: '88', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which feature ensures accuracy in relationships between database tables?</p>`,
          options: [`Adding multiple forms.`, `Primary keys and foreign keys.`, `Data redundancy.`, `Use of flat-file structure.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Primary keys and foreign keys. "These key fields ensure the database maintains accurate relationships between different sets of data" (textbook p. 235).</p>` }
      ] },
    { number: '89', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Why are reports used in relational databases?</p>`,
          options: [`To present data in a structured, visual format.`, `To reduce database size.`, `To join tables automatically.`, `To input new data into the database.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To present data in a structured, visual format. Reports present data in a visually appealing format, such as a summary of student grades; forms are used for data input (textbook p. 246).</p>` }
      ] },
    { number: '90', marks: 1, layout: 0, section: 'Exercise 2.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a data dictionary?</p>`,
          options: [`A set of user-friendly data input forms.`, `Documentation of database structure and field definitions.`, `A tool to connect tables dynamically.`, `A collection of all reports in a database.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Documentation of database structure and field definitions. A data dictionary documents the structure of the database, giving details about field names, data types, formats and other attributes (textbook p. 245).</p>` }
      ] },

    // ===== Exercise 2.3.4 =====
    { number: '91', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What is machine learning?</p>`,
          options: [`A type of mathematical formula used to interpret data.`, `A branch of artificial intelligence that enables computers to learn from data.`, `A method of manually programming a computer to process data.`, `A type of statistical modelling used in weather forecasting.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A branch of artificial intelligence that enables computers to learn from data. Machine learning enables computers to learn from data without being explicitly programmed (textbook p. 260).</p>` }
      ] },
    { number: '92', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary difference between machine learning and statistical modelling?</p>`,
          options: [`Machine learning uses mathematical principles, while statistical modelling does not.`, `Machine learning requires large datasets, while statistical modelling does not.`, `Statistical modelling focuses on hypothesis testing, while machine learning focuses on pattern recognition.`, `Statistical modelling relies on automation, while machine learning requires human intervention.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Statistical modelling focuses on hypothesis testing, while machine learning focuses on pattern recognition. Unlike machine learning, which relies on automation to find patterns, statistical modelling is focused on testing hypotheses and understanding relationships between variables (textbook pp. 262–263).</p>` }
      ] },
    { number: '93', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an application of machine learning in data analytics?</p>`,
          options: [`Predicting disease outbreaks in healthcare.`, `Detecting fraudulent transactions in finance.`, `Performing arithmetic calculations.`, `Personalising customer recommendations in retail.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Performing arithmetic calculations. Predicting disease outbreaks, detecting fraud and personalising recommendations are all given as machine learning applications; simple arithmetic does not require learning from data (textbook pp. 259, 261).</p>` }
      ] },
    { number: '94', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of machine learning over traditional forecasting methods in weather prediction?</p>`,
          options: [`It requires less data to make predictions.`, `It processes data much faster and can identify patterns quickly.`, `It relies on simpler models with fewer variables.`, `It requires more human intervention.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It processes data much faster and can identify patterns quickly. One of GenCast's biggest advantages is speed: AI systems quickly analyse vast amounts of data and identify patterns much faster than traditional models (textbook p. 264).</p>` }
      ] },
    { number: '95', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of statistical modelling?</p>`,
          options: [`To allow computers to learn from data automatically.`, `To test hypotheses and interpret relationships within data.`, `To provide real-time predictions for future trends.`, `To visualise complex datasets.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To test hypotheses and interpret relationships within data. Statistical modelling uses mathematical formulas to summarise and interpret data and focuses on testing hypotheses and understanding relationships between variables (textbook p. 262).</p>` }
      ] },
    { number: '96', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a statistical model used in data analytics?</p>`,
          options: [`Linear regression.`, `Clustering algorithm.`, `Neural network.`, `Decision tree.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Linear regression. Linear regression (and logistic regression) are given as statistical models; clustering and neural networks are described as machine learning algorithms (textbook pp. 260, 262).</p>` }
      ] },
    { number: '97', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>Why do some meteorologists prefer combining AI models like GenCast with traditional physics-based models?</p>`,
          options: [`AI models are often more accurate than traditional models.`, `Traditional models are based on well-understood scientific principles.`, `AI models work faster than traditional models.`, `Traditional models are easier to interpret and understand.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Traditional models are based on well-understood scientific principles. Meteorologists are cautious about relying entirely on AI because traditional models are based on well-understood scientific principles, while AI models work as "black boxes" (textbook p. 264).</p><p><em>Note: option D is also arguable because the "black box" problem implies traditional models are easier to interpret, but option B is the reason the textbook states directly.</em></p>` }
      ] },
    { number: '98', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the key challenges with AI models like GenCast in weather forecasting?</p>`,
          options: [`AI models cannot process large datasets.`, `AI models are not fast enough for real-time predictions.`, `AI models are considered "black boxes," making it difficult to understand their reasoning.`, `AI models require more data cleaning than traditional models.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — AI models are considered "black boxes," making it difficult to understand their reasoning. AI models like GenCast produce results without clearly explaining how they arrived at their conclusions (textbook p. 264).</p>` }
      ] },
    { number: '99', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>In which industries could AI-based forecasting models like GenCast be particularly useful?</p>`,
          options: [`Only in healthcare.`, `Only in retail and marketing.`, `In agriculture, aviation, and disaster response.`, `Only in the financial sector.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — In agriculture, aviation, and disaster response. The case study says combined AI and physics-based forecasting could be especially useful for agriculture, aviation and disaster response (textbook p. 264).</p>` }
      ] },
    { number: '100', marks: 1, layout: 0, section: 'Exercise 2.3.4',
      items: [
        { type: 'mcq',
          question: `<p>What are the two main types of approaches discussed in data analytics, and how do they differ in their use?</p>`,
          options: [`Machine learning model.`, `Regression model.`, `Clustering model.`, `Statistical regression model.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Machine learning model. The two main approaches discussed are machine learning and statistical modelling; machine learning finds patterns and makes predictions from large datasets, while statistical modelling tests hypotheses and explains relationships (textbook pp. 259, 263). Of the options given, only "machine learning model" names one of these two approaches.</p><p><em>Note: this question is flawed in the textbook — the options do not fully answer it. Option D is also arguable as a reference to statistical modelling, but regression and clustering are techniques used within the approaches rather than the approaches themselves.</em></p>` }
      ] }
  ]
});
