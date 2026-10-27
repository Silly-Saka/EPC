registerExam({
  id: 'tb-m4',
  title: 'Textbook MCQ — Module 4: Intelligent systems',
  source: 'Textbook', year: 2025, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 70,
  coverNotes: `<p>Multiple-choice questions from the textbook exercises for Module 4. Answers were prepared from the textbook content (the textbook has no answer key).</p>`,
  groups: [
    // ---------------- Exercise 4.1.1 ----------------
    { number: '1', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a decision support system (DSS) in healthcare?</p>`,
          options: [`Database management.`, `Diagnosis assistance through patient data analysis.`, `Scheduling patient appointments.`, `Managing insurance claims.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Diagnosis assistance through patient data analysis. A Clinical Decision Support System (CDSS) integrates patient data with medical knowledge to assist clinical decisions, such as alerting doctors to drug reactions or recommending tests (textbook p. 406).</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is a common feature of decision support systems?</p>`,
          options: [`Automating simple tasks.`, `Supporting complex decision-making through data analysis.`, `Data storage.`, `Manual report generation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Supporting complex decision-making through data analysis. DSS combine models, analytical tools and databases to assist with decision-making, and are most useful for decisions that are neither fully structured nor fully unstructured (textbook pp. 406, 408).</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What type of decision-making process follows a defined sequence of steps?</p>`,
          options: [`Structured.`, `Unstructured.`, `Semi-structured.`, `Randomised.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Structured. A structured decision follows clear, step-by-step, predefined rules and can be automated, e.g. reordering stock when it falls to a set level (textbook p. 408).</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which category of decision-making typically involves creative solutions and judgement calls?</p>`,
          options: [`Structured.`, `Unstructured.`, `Semi-structured.`, `Predictive.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Unstructured. Unstructured decisions have no set rules and rely on experience, intuition and creativity, e.g. designing a theme for a Year 12 formal (textbook p. 408).</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>In which type of decision-making does a DSS assist with financial forecasting?</p>`,
          options: [`Structured.`, `Unstructured.`, `Semi-structured.`, `Creative.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Semi-structured. The textbook gives budgeting and project planning as semi-structured decisions, where the DSS uses automated tools while leaving room for human judgement (textbook p. 410).</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a feature of a DSS?</p>`,
          options: [`Helps analyse data that will support decision-making.`, `Provides tools for scenario planning and simulations.`, `Can support both structured and unstructured decisions.`, `Automatically makes all business decisions without human input.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Automatically makes all business decisions without human input. A DSS <em>supports</em> decision-makers; for semi-structured and unstructured decisions human judgement is still required (textbook pp. 408–410).</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which decision category is partially defined but still requires human judgement?</p>`,
          options: [`Structured.`, `Unstructured.`, `Algorithmic.`, `Semi-structured.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Semi-structured. A semi-structured decision follows some rules but still needs human judgement, e.g. choosing a school excursion based on student interest and cost (textbook p. 408).</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes where Decision Support Systems (DSS) are most useful?</p>`,
          options: [`In fully automated decisions with no human involvement.`, `In decisions that rely only on opinion.`, `In decisions that combine rules with human judgement.`, `In decisions that require only mathematical calculations.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — In decisions that combine rules with human judgement. The textbook states that decision support systems are most useful when the decision lies somewhere between the highly structured and highly unstructured extremes (textbook p. 408).</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of these examples best represents a structured decision?</p>`,
          options: [`Deciding which work of art deserves first prize.`, `Forecasting future market stock prices.`, `Calculating the average score of the Enterprise Computing class exam results.`, `Choosing a holiday destination with friends.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Calculating the average score of the Enterprise Computing class exam results. The textbook says finding the average of a set of numbers is highly structured, whereas judging the merits of a piece of art is highly unstructured (textbook p. 408).</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Exercise 4.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements about structured, semi-structured, and unstructured decisions is TRUE?</p>`,
          options: [`All decision types require the same level of human judgement.`, `Structured decisions rely mostly on opinion and personal experience.`, `Semi-structured decisions combine clear rules with areas needing judgement.`, `Unstructured decisions can always be automated using a decision support system.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Semi-structured decisions combine clear rules with areas needing judgement. Each category requires a different level of human judgement; semi-structured decisions follow some rules but still need human judgement (textbook p. 408).</p>` }
      ] },
    // ---------------- Exercise 4.1.2 ----------------
    { number: '11', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key application of an expert system?</p>`,
          options: [`Word processing.`, `Diagnostic problem-solving in medicine.`, `Managing social media accounts.`, `Designing web pages.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Diagnostic problem-solving in medicine. Diagnosis is one of the main applications of expert systems, e.g. assisting radiologists to interpret chest X-rays or diagnosing skin cancer (textbook p. 415).</p>` }
      ] },
    { number: '12', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of an expert system used in banking?</p>`,
          options: [`Automated teller machines (ATMs).`, `Fraud detection systems.`, `Coin-counting machines.`, `Online account balance check.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Fraud detection systems. Expert systems in finance and banking assess risk using patterns in credit history, income and spending behaviour; ATMs, coin counters and balance checks simply follow fixed procedures and do not simulate expert reasoning (textbook pp. 415, 452).</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Expert systems are typically used in which type of tasks?</p>`,
          options: [`Complex problem-solving.`, `Routine tasks.`, `Creative tasks.`, `Simple data entry.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Complex problem-solving. Expert systems simulate the decision-making of human experts to offer recommendations and solve complicated issues that would normally need specialist knowledge (textbook p. 415).</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a key component of an expert system?</p>`,
          options: [`Knowledge base.`, `Inference engine.`, `Machine learning.`, `User interface.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Machine learning. The five key components are the knowledge base, database of facts, inference engine, explanation mechanism and user interface; machine learning is not one of them (textbook p. 419).</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What component of an expert system enables it to justify decisions made?</p>`,
          options: [`Inference engine.`, `Explanation mechanism.`, `User interface.`, `Knowledge base.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Explanation mechanism. It shows the facts collected, the rules used and how they were used to reach a conclusion, so the system can explain its reasoning (textbook p. 424).</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which factor has helped expert systems improve the way they handle uncertainty and make better probabilistic decisions?</p>`,
          options: [`Increased availability of big data.`, `Advances in quantum computing.`, `Development of cloud storage.`, `Growth of social media platforms.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Increased availability of big data. Big data gives expert systems large datasets to train models, so they can better identify patterns and refine their probability-based reasoning (textbook p. 428).</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What factor has made it possible for modern expert systems to handle large amounts of data and perform complex tasks in real time?</p>`,
          options: [`The rise of social media platforms.`, `The development of mobile apps.`, `The decreasing cost of processors, memory and storage.`, `The use of 3D printing technology.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The decreasing cost of processors, memory and storage. The textbook states that thanks to cheaper processors, memory and storage, modern expert systems can handle more data and perform complex tasks in real time (textbook p. 428).</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Why were early expert systems limited in their ability to process complex tasks?</p>`,
          options: [`There was not enough demand for expert systems.`, `The hardware needed was expensive and had limited processing power.`, `Programming languages were not yet invented.`, `Expert systems could not be connected to the internet.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The hardware needed was expensive and had limited processing power. In the early days of rule-based systems, the processing power needed to run even a modest expert system was costly and limited (textbook p. 428).</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How are neural networks different from traditional rule-based expert systems?</p>`,
          options: [`Neural networks follow fixed IF-THEN rules without change.`, `Neural networks can learn from data and improve over time.`, `Neural networks are designed to store large amounts of static information.`, `Neural networks do not require any input data to function.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Neural networks can learn from data and improve over time. The textbook states neural networks differ from traditional expert systems in that they are able to learn (textbook p. 428).</p>` }
      ] },
    { number: '20', marks: 1, layout: 0, section: 'Exercise 4.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What gives neural networks the ability to improve their decision-making over time?</p>`,
          options: [`They store every possible rule in advance.`, `They use a random process to generate outputs.`, `They operate heuristically by adjusting the weighting of inputs based on experience.`, `They rely on external human experts to update the rules manually.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They operate heuristically by adjusting the weighting of inputs based on experience. Neural networks learn from experience by adjusting the weighting (importance) of different inputs as new data arrives (textbook p. 429).</p>` }
      ] },
    // ---------------- Exercise 4.1.3 ----------------
    { number: '21', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What societal change has most contributed to the increased use of expert systems?</p>`,
          options: [`People's need for personalised and efficient services.`, `The rise in mobile app development.`, `The shift from in-person to remote working.`, `The growth of social networking sites.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — People's need for personalised and efficient services. As people's wants changed, particularly for connectivity, customisation and automation, expert systems evolved to meet those demands (e.g. the Internet of Me's personalised services) (textbook pp. 438, 441).</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What has driven the need for expert systems in healthcare?</p>`,
          options: [`Limited availability of professionals.`, `The need for accurate diagnostic support.`, `A decrease in healthcare costs.`, `An increased focus on patient privacy.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The need for accurate diagnostic support. The textbook's healthcare examples are diagnostic: expert systems help diagnose skin cancer, interpret chest X-rays and flag dangerous vital-sign readings (textbook pp. 415, 439).</p><p><em>Note: option A is also arguable because expert systems do reduce reliance on scarce specialists, but the textbook emphasises diagnostic accuracy.</em></p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of a simplistic intelligent agent used by search engines?</p>`,
          options: [`Predictive text.`, `Complex machine learning algorithms.`, `Sentiment analysis.`, `Biometric identification.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Predictive text. Simplistic agents use established rules and rudimentary algorithms for duties such as crawling the web and predictive search strings based on popular search terms (textbook pp. 443–444).</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary advantage of using fuzzy logic in inference engines?</p>`,
          options: [`It handles binary data efficiently.`, `It allows for decision-making in ambiguous situations.`, `It is faster than other techniques.`, `It requires less memory.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows for decision-making in ambiguous situations. Unlike binary true/false logic, fuzzy logic reasons with degrees of truth, which is useful with ambiguous data (textbook p. 446).</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT typically a hardware requirement for intelligent systems?</p>`,
          options: [`Sensor interfaces.`, `Graphical User Interface (GUI).`, `Memory storage devices.`, `Data processing units.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Graphical User Interface (GUI). A GUI is software, not hardware. The textbook describes the hardware of intelligent systems as sensors that perceive the world, processors, interfaces, peripherals and actuators that act on it (textbook pp. 447–449).</p>` }
      ] },
    { number: '26', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>In which industry have people's changing needs most impacted the adoption of expert systems?</p>`,
          options: [`Entertainment.`, `Manufacturing.`, `Healthcare.`, `Real Estate.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Healthcare. Healthcare is the industry the textbook returns to most often, e.g. diagnosis support and wearable health monitors that alert doctors to unusual vital signs (textbook pp. 415, 439).</p><p><em>Note: options A and B are also arguable because the textbook also links changing needs to entertainment recommendations (Internet of Me, p. 441) and to manufacturing (Industry 4.0, p. 442).</em></p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What enables predictive search strings in search engines?</p>`,
          options: [`User feedback.`, `Simplistic intelligent agents.`, `Neural networks.`, `Stored search history and data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Simplistic intelligent agents. The textbook lists predictive search strings as a duty of simplistic intelligent agents, which use rudimentary predictive algorithms based on popular search terms, and states these predictions are made using intelligent agents (textbook pp. 444–445).</p><p><em>Note: option D is also arguable because the agents base their predictions on previous searches, user behaviour and historical data.</em></p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a complex intelligent agent?</p>`,
          options: [`Predictive search text`, `Google's knowledge graph.`, `Basic word processors.`, `Email spam filters.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Google's knowledge graph. Complex intelligent agents use advanced AI such as machine learning and NLP to grasp user intent and context; basic predictive search text is a simplistic agent (textbook p. 444).</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>Which technique focuses on maintaining consistent beliefs during reasoning?</p>`,
          options: [`Heuristic knowledge.`, `Truth maintenance.`, `Hypothetical reasoning.`, `Ontology classification.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Truth maintenance. Truth maintenance systems keep an expert system's judgements logically consistent, updating its belief set as conflicting information emerges (textbook p. 445).</p>` }
      ] },
    { number: '30', marks: 1, layout: 0, section: 'Exercise 4.1.3',
      items: [
        { type: 'mcq',
          question: `<p>What technique is commonly used by heuristic inference engines?</p>`,
          options: [`Trial and error.`, `Deductive reasoning.`, `Probabilistic analysis.`, `Memory recall.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Trial and error. Heuristic knowledge uses decision-making strategies based on experience, or rules of thumb, to make educated guesses rather than evaluating every possibility. Of the options, trial and error is the experience-based technique that matches this (textbook p. 446).</p><p><em>Note: option C is also arguable because heuristics are combined with fuzzy logic to handle uncertainty, but the textbook describes heuristics as experience-based rules of thumb, not probabilistic analysis.</em></p>` }
      ] },
    // ---------------- Exercise 4.1.4 ----------------
    { number: '31', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which computational thinking process involves breaking down a problem into smaller, more manageable parts?</p>`,
          options: [`Decomposition.`, `Abstraction.`, `Algorithmic thinking.`, `Pattern recognition.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Decomposition. Decomposition means breaking a complex problem into smaller, more manageable tasks, e.g. data collection, processing and decision-making stages (textbook p. 452).</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What role does pattern recognition play in developing intelligent systems?</p>`,
          options: [`Identifying recurring elements in data.`, `Ignoring relevant information.`, `Performing a step-by-step analysis.`, `Storing data for future use.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Identifying recurring elements in data. Pattern recognition involves spotting trends or similarities in data, identifying repeated behaviours to make predictions or adjustments (textbook p. 452).</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of a data flow diagram (DFD) in an intelligent system?</p>`,
          options: [`To display relationships between hardware components.`, `To show the flow of data between processes.`, `To visualise financial reports.`, `To represent network connections.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To show the flow of data between processes. DFDs illustrate how data passes through a system, its inputs and outputs, and how data is handled at each level (textbook p. 454).</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary concern regarding the disruptive impact of intelligent systems on the workforce?</p>`,
          options: [`Increased wages.`, `Job displacement due to automation.`, `Greater need for manual labour.`, `Reduced use of technology.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Job displacement due to automation. Some jobs are being replaced by machines or smart systems, e.g. truck drivers may lose work as self-driving vehicles become common (textbook pp. 460–461).</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is typically NOT represented in an infographic for an intelligent system?</p>`,
          options: [`Decision-making logic.`, `Data flow between components.`, `System architecture.`, `Marketing statistics.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Marketing statistics. An infographic for an intelligent system illustrates its key operations, such as its sensors, how data is collected and analysed, and the actions taken; marketing statistics are not part of the system's logic (textbook p. 457).</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What role does machine learning play in modern intelligent systems?</p>`,
          options: [`Storing large amounts of data.`, `Enabling systems to learn and improve from experience.`, `Automating hardware maintenance.`, `Reducing network bandwidth.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Enabling systems to learn and improve from experience. Machine learning allows computers to learn from past information and progressively get better over time without being programmed for every task (textbook p. 467).</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of abstraction in computational thinking when developing intelligent systems?</p>`,
          options: [`To simplify complex data into key elements.`, `To store detailed information for future use.`, `To eliminate errors in code.`, `To identify patterns in data sets.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To simplify complex data into key elements. Abstraction focuses only on the important details and filters out unnecessary information so the system concentrates on the key inputs (textbook p. 452).</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Which diagram best illustrates the transfer of data between external systems and an intelligent system?</p>`,
          options: [`Data flow diagram.`, `Pie chart.`, `Organisational chart.`, `Venn diagram.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data flow diagram. DFDs show external entities, processes, data stores and the flow lines of data entered into and returned from a system (textbook pp. 454–455).</p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>In an intelligent system, what is the main role of an algorithm?</p>`,
          options: [`To collect raw data from the environment.`, `To explain the system's reasoning to the user.`, `To store and display large amounts of information.`, `To provide clear instructions on how to process information and make decisions.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To provide clear instructions on how to process information and make decisions. Algorithms are the clear set of instructions that tell the system how to process information and make decisions (textbook p. 452).</p>` }
      ] },
    { number: '40', marks: 1, layout: 0, section: 'Exercise 4.1.4',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important for developers of intelligent systems, such as fitness apps, to include strong security and privacy measures?</p>`,
          options: [`To make the app more visually appealing.`, `To ensure the system runs faster and uses less resources.`, `To protect users' personal information from being shared without permission.`, `To help the system avoid making biased decisions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To protect users' personal information from being shared without permission. A fitness app tracks personal information, so developers must use strong security and strict privacy rules so it isn't shared without permission (textbook p. 462).</p>` }
      ] },
    // ---------------- Exercise 4.2.1 ----------------
    { number: '41', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a fundamental infrastructure requirement for an IoT network?</p>`,
          options: [`Unencrypted communication between devices.`, `Interconnected devices with low-latency communication protocols.`, `Manual data entry for each device in the network.`, `Isolated hardware with no internet connectivity.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Interconnected devices with low-latency communication protocols. The infrastructure must connect end-point devices so they communicate seamlessly, using protocols such as MQTT that reduce latency (textbook pp. 474–475).</p>` }
      ] },
    { number: '42', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>How does cloud computing enhance the infrastructure of an IoT network in an enterprise?</p>`,
          options: [`Manual operation devices.`, `Isolated hardware for security.`, `It provides scalable storage and real-time data access.`, `It disconnects devices when not in use.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It provides scalable storage and real-time data access. Cloud storage is easier to access from anywhere and can handle larger amounts of data, helping the network grow as needed (textbook p. 474).</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What key factor ensures efficient communication between IoT devices in an enterprise?</p>`,
          options: [`Manual operation devices.`, `Isolated hardware for security.`, `Use of shared communication protocols.`, `Regular device shutdowns.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Use of shared communication protocols. Intelligent systems use specific communication protocols such as MQTT and HTTP; choosing the right protocol reduces latency (textbook p. 475).</p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of how IoT data is used for predictive maintenance?</p>`,
          options: [`Sensors in smart transport systems adjust traffic lights based on real-time conditions.`, `Retailers using IoT data to monitor customer movement and improve store layout.`, `Mining enterprises using sensors to monitor equipment and predict when maintenance is needed.`, `Banks using encryption to protect IoT data during ATM transactions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Mining enterprises using sensors to monitor equipment and predict when maintenance is needed. Australian mining enterprises use sensors to monitor equipment status and predict when maintenance is required (textbook p. 479).</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of surplus data in an IoT system?</p>`,
          options: [`Key performance indicators generated by sensors.`, `Irrelevant environmental data captured by sensors.`, `Predictive maintenance data from machinery.`, `Historical temperature readings from sensors.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Irrelevant environmental data captured by sensors. Surplus data is data that isn't useful, e.g. sensor readings from rooms that are unoccupied and not scheduled to be used (textbook p. 476).</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which method is most efficient for transmitting data from multiple IoT devices in a smart city network?</p>`,
          options: [`Manual data collection from each device.`, `Centralised data processing on a single local server.`, `Wireless transmission using low-latency protocols.`, `Broadcasting data over social media channels.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Wireless transmission using low-latency protocols. Wireless networks offer mobility and flexibility, and lightweight protocols such as MQTT reduce latency for real-time updates (textbook pp. 475, 480).</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of unstructured data used in Australia's transport networks?</p>`,
          options: [`Commuter travel data stored in tables to predict public transport trends.`, `Sales figures organised in spreadsheets for retail decision-making.`, `Residential power usage stored in tabular databases for energy distribution.`, `Video footage from traffic cameras analysed by AI to monitor road conditions.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Video footage from traffic cameras analysed by AI to monitor road conditions. Video and audio are unstructured data; in Australia's transport networks AI analyses traffic camera footage to monitor road conditions (textbook p. 478).</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is cloud storage often used alongside local storage in intelligent systems like IoT networks?</p>`,
          options: [`Cloud storage is cheaper than local storage and doesn't need security.`, `Local storage is no longer necessary when cloud storage is used.`, `Local storage is only used for entertainment devices.`, `Cloud storage allows greater flexibility and scalability, while local storage provides fast access and security.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Cloud storage allows greater flexibility and scalability, while local storage provides fast access and security. Local storage is faster and often more secure; cloud storage is accessible anywhere and handles larger amounts of data (textbook pp. 474, 478).</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>How can IoT data help businesses improve their operations through automation?</p>`,
          options: [`By storing large amounts of data in paper files.`, `By limiting the type of data devices can collect.`, `By using sensors to adjust operations in real time, such as controlling machines or managing traffic flow.`, `By making all business decisions manually without technology.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By using sensors to adjust operations in real time, such as controlling machines or managing traffic flow. In smart transport, sensors adjust operations in real time; in manufacturing, sensor data controls machines (textbook p. 479).</p>` }
      ] },
    { number: '50', marks: 1, layout: 0, section: 'Exercise 4.2.1',
      items: [
        { type: 'mcq',
          question: `<p>In Australia's mining industry, how does predictive maintenance that uses IoT data, benefit operations?</p>`,
          options: [`It uses sensors to monitor equipment and predict maintenance needs, lowering the risk of breakdowns.`, `It reduces the need for safety checks.`, `It replaces all human workers with machines.`, `It focuses only on increasing the speed of production.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It uses sensors to monitor equipment and predict maintenance needs, lowering the risk of breakdowns. Predictive maintenance lowers the chance of unexpected breakdowns and improves productivity (textbook p. 479).</p>` }
      ] },
    // ---------------- Exercise 4.2.2 ----------------
    { number: '51', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following industries is simulation most likely to be used for training purposes?</p>`,
          options: [`Retail.`, `Agriculture.`, `Aviation.`, `Telecommunications.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Aviation. Aviation schools use flight simulators so student pilots can practise handling emergencies and tricky flight situations safely (textbook p. 483).</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key benefit of automating tasks in an enterprise?</p>`,
          options: [`Reduced operational costs and increased efficiency.`, `Reduced operational costs and decreased efficiency.`, `Increased operational costs and increased efficiency.`, `Increased operational costs and decreased efficiency.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Reduced operational costs and increased efficiency. Automation handles routine tasks, saving time and money and making the business more efficient (textbook pp. 484–485).</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>In which Australian industry is automation widely used to manage equipment remotely?</p>`,
          options: [`Tourism.`, `Mining.`, `Fashion.`, `Education.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Mining. Australian mining companies use autonomous trucks and drones, and sensors on remote mining equipment, to manage operations with fewer people on site (textbook pp. 460, 478).</p>` }
      ] },
    { number: '54', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>How does facial recognition technology contribute to surveillance?</p>`,
          options: [`By storing user preferences for future reference.`, `By archiving old data with facial profiles.`, `By manually comparing photographs with live footage.`, `By scanning faces to identify persons of interest in real-time.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — By scanning faces to identify persons of interest in real-time. Intelligent CCTV with facial recognition can recognise faces across cameras and identify persons of interest at major events and crowded places (textbook p. 487).</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an ethical concern associated with the use of intelligent systems in surveillance?</p>`,
          options: [`Reducing system costs.`, `Increasing system reliability.`, `Infringing on individual privacy.`, `Improving system performance.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Infringing on individual privacy. Intelligent surveillance presents significant ethical concerns, notably about privacy and the balance of security and individual rights (textbook pp. 488, 490).</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes how AI optimises data traffic in IoT networks?</p>`,
          options: [`AI slows down data transmission to reduce errors.`, `AI allocates bandwidth based on traffic patterns`, `AI collects data and stores it without processing.`, `AI stops data transmissions during off-peak hours.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — AI allocates bandwidth based on traffic patterns. AI manages the flow of data so the most important information moves through the network first, e.g. prioritising live traffic updates in Melbourne's smart transport system (textbook p. 491).</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>How do enterprises use data modelling to improve decision-making?</p>`,
          options: [`By manually analysing data trends.`, `By using models to predict future outcomes and trends.`, `By creating visual representations of raw data.`, `By relying on historical data only.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By using models to predict future outcomes and trends. Data modelling uses data to find patterns and make predictions; businesses analyse past data to predict future trends (textbook p. 484).</p>` }
      ] },
    { number: '58', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>How does simulation help enterprises test new systems?</p>`,
          options: [`By running real-time simulations to predict outcomes.`, `By analysing historical data manually.`, `By relying on existing processes without changes.`, `By simplifying existing workflows.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By running real-time simulations to predict outcomes. Simulating different scenarios makes it possible to predict outcomes before making real-world decisions, without risking money or time (textbook p. 484).</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>How does AI improve energy efficiency in smart homes?</p>`,
          options: [`By turning off all devices.`, `By monitoring energy usage and adjusting systems accordingly.`, `By manually controlling the temperature.`, `By storing excess energy for future use.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By monitoring energy usage and adjusting systems accordingly. AI-powered smart home systems automatically adjust lighting, heating and security based on occupancy, time of day and weather (textbook p. 491).</p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Exercise 4.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key function of AI in real-time data analysis for IoT systems?</p>`,
          options: [`Storing data for future use.`, `Manually organising all collected data.`, `Automatically detecting patterns and generating insights.`, `Eliminating the need for device communication.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Automatically detecting patterns and generating insights. AI quickly analyses IoT data and makes smart decisions automatically, reducing the need for human involvement (textbook p. 490).</p>` }
      ] },
    // ---------------- Exercise 4.3.1 ----------------
    { number: '61', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Rules and facts are the fundamental building blocks of:</p>`,
          options: [`intelligent systems`, `neural networks`, `certainty factors`, `expert systems`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — expert systems. When designing and developing expert systems, rules and facts are the fundamental building blocks for the system's ability to reason and draw conclusions (textbook p. 496).</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes certainty factors?</p>`,
          options: [`The probability a conclusion is correct`, `The expert's level of belief in a conclusion`, `The most likely outcome from a set of possible outcomes`, `The most correct conclusion based on the known facts`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The expert's level of belief in a conclusion. Certainty factors measure an expert's belief that the evidence leads to the outcome; they are based on expert opinion, not on statistical probability (textbook p. 496).</p>` }
      ] },
    { number: '63', marks: 1, layout: 1, section: 'Exercise 4.3.1',
      stimulus: `<p><strong>Combining certainty factors</strong></p><p>An expert system can attach a certainty factor (CF) to each rule. A CF lies between −1 and 1 and records how strongly a human expert believes the evidence points to the conclusion; a negative value means the evidence weakens that belief. CFs are expert judgements, not statistical probabilities.</p><p>Using the approach taken by the MYCIN medical expert system, only rules that fire (whose facts are true) are combined. For two rules with certainty factors X and Y that lead to the same outcome:</p><table class="hoa-table-normal"><thead><tr><th>Condition</th><th>Combined CF</th></tr></thead><tbody><tr><td>X &gt; 0 and Y &gt; 0</td><td>X + Y − XY</td></tr><tr><td>X &lt; 0 and Y &lt; 0</td><td>X + Y + XY</td></tr><tr><td>Otherwise (one positive, one negative)</td><td>(X + Y) / (1 − min(|X|, |Y|))</td></tr></tbody></table>`,
      items: [
        { type: 'mcq',
          question: `<p>Two facts lead to a single outcome. If the certainty factors are 0.5 and 0.7, what is the combined certainty factor given both facts are true?</p>`,
          options: [`0.35`, `0.7`, `0.85`, `1.2`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — 0.85. When both CFs are positive, CF = X + Y − XY = 0.5 + 0.7 − 0.35 = 0.85 (textbook p. 497).</p>` }
      ] },
    { number: '64', marks: 1, layout: 1, section: 'Exercise 4.3.1',
      stimulus: `<p><strong>Combining certainty factors</strong></p><p>An expert system can attach a certainty factor (CF) to each rule. A CF lies between −1 and 1 and records how strongly a human expert believes the evidence points to the conclusion; a negative value means the evidence weakens that belief. CFs are expert judgements, not statistical probabilities.</p><p>Using the approach taken by the MYCIN medical expert system, only rules that fire (whose facts are true) are combined. For two rules with certainty factors X and Y that lead to the same outcome:</p><table class="hoa-table-normal"><thead><tr><th>Condition</th><th>Combined CF</th></tr></thead><tbody><tr><td>X &gt; 0 and Y &gt; 0</td><td>X + Y − XY</td></tr><tr><td>X &lt; 0 and Y &lt; 0</td><td>X + Y + XY</td></tr><tr><td>Otherwise (one positive, one negative)</td><td>(X + Y) / (1 − min(|X|, |Y|))</td></tr></tbody></table>`,
      items: [
        { type: 'mcq',
          question: `<p>Two facts lead to a single outcome. If the certainty factors are 0.6 and -0.3, what is the combined certainty factor given both facts are true?</p>`,
          options: [`-0.3`, `-0.18`, `0.43`, `0.6`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — 0.43. When one CF is positive and the other negative, CF = (X + Y) / (1 − min(|X|, |Y|)) = (0.6 − 0.3) / (1 − 0.3) = 0.3 / 0.7 ≈ 0.43 (textbook pp. 497–498).</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Compared to other data sources, government reports and statistics are likely to be more:</p>`,
          options: [`credible`, `transparent`, `up to date`, `auditable`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — credible. Under data source credibility, the textbook notes that external sources such as industry reports or government statistics should be well-known and trustworthy (textbook p. 500).</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a visual tool describing the logical order of inputs, outputs and IF THEN rules?</p>`,
          options: [`data flow diagram`, `visualisation`, `decision tree`, `flowchart`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — flowchart. Flowcharts are visual tools that outline the logical flow of an algorithm; expert systems' IF-THEN rules are well suited to them, as in the car price calculator that inputs facts, applies each rule in turn and outputs a price (textbook p. 502).</p><p><em>Note: option C is also arguable because decision trees also show how conclusions are reached from rules, but they do not show the order of inputs and outputs.</em></p>` }
      ] },
    { number: '67', marks: 1, layout: 1, section: 'Exercise 4.3.1',
      stimulus: `<p><strong>Four named technologies</strong></p><ul><li><strong>SPARK</strong>: a CSIRO computer model that simulates how a bushfire is likely to spread, using live weather, wind direction, fuel type and terrain. Emergency managers use its maps and scenarios to plan evacuations and decide where to send firefighting crews and aircraft.</li><li><strong>CLIPS</strong> (C Language Integrated Production System): a programming language originally developed by NASA and now freely available. Developers write knowledge as IF &lt;condition&gt; THEN &lt;action&gt; rules in a bracket-based, Lisp-like syntax, and the program reasons over these rules to reach conclusions.</li><li><strong>El Capitan</strong>: a supercomputer at Lawrence Livermore National Laboratory in California, ranked the world's fastest in the June 2025 TOP500 list, with more than 11 million cores and a measured speed of about 1,742 petaflops.</li><li><strong>Shopify</strong>: a commercial e-commerce platform that businesses use to set up and run online stores and process sales.</li></ul>`,
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is used to create expert systems?</p>`,
          options: [`SPARK`, `CLIPS`, `El Capitan`, `Shopify`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — CLIPS. The C Language Integrated Production System (CLIPS) is a rule-based programming language for creating expert systems (textbook p. 503). SPARK is CSIRO's disaster-management decision support system (p. 518); El Capitan and Shopify are not expert system tools.</p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following components are generally associated with automated smart systems?</p>`,
          options: [`knowledge base, inference engine, user interface`, `intelligent agents, scripts, statistical analysis`, `backwards chaining, forwards chaining, neurons`, `sensors, artificial intelligence, actuators`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — sensors, artificial intelligence, actuators. Automated smart systems use sensors as inputs, process the data (often with AI) and produce outputs via actuators (textbook p. 507).</p>` }
      ] },
    { number: '69', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Why compare predicted to actual outputs?</p>`,
          options: [`To highlight incorrect actual outputs`, `To identify where adjustments may be needed`, `To prove the model is mathematically correct`, `To remove the need to make future predictions`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To identify where adjustments may be needed. Organisations compare what a DSS predicted with what actually happened to check how accurate the system is; graphing predicted versus actual results shows how accurate it is and where adjustments, if any, might be needed (textbook pp. 518–519).</p>` }
      ] },
    { number: '70', marks: 1, layout: 0, section: 'Exercise 4.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following simulate the tasks traditionally performed by humans?</p>`,
          options: [`Autonomous vehicles`, `Digital assistants`, `Expert systems`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above. Autonomous vehicles simulate a human driver, advanced digital assistants simulate a human PA, and expert systems simulate the decision-making of human experts (textbook pp. 415, 522, 523).</p>` }
      ] }
  ]
});
