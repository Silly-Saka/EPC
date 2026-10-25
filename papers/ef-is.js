/* Ec.eforge MCQ - Intelligent Systems. Source: ec.eforge.online HSC textbook revision questions (448 questions). */
registerExam({
  id: 'ef-is',
  title: 'Ec.eforge MCQ — Intelligent Systems',
  source: 'ec.eforge.online', year: 2026, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 448,
  coverNotes: `<p>Multiple-choice revision questions from the ec.eforge.online Intelligent Systems textbook, grouped by topic. Answers and explanations are from the site.</p>`,
  groups: [
    // ---------------- Overview of Intelligent Systems ----------------
    { number: '1', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of a Decision Support System (DSS)?</p>`,
          options: [`To store and retrieve data like standard data processing systems.`, `To actively support the decision-making process by analyzing data, identifying patterns, and providing insights.`, `To replace human decision-makers in companies.`, `To predict future trends and business outcomes.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To actively support the decision-making process by analyzing data, identifying patterns, and providing insights.</p><p>A DSS is designed to support the decision-making process by analyzing data, identifying patterns, testing scenarios, and providing insights rather than simply storing and retrieving data.</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the main goal of intelligent systems?</p>`,
          options: [`To replace the need for human workers in all industries.`, `To replicate aspects of human intelligence and perform tasks that require human reasoning, learning, or problem-solving.`, `To manage large databases and information retrieval systems.`, `To entertain and interact with humans in a social manner.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To replicate aspects of human intelligence and perform tasks that require human reasoning, learning, or problem-solving.</p><p>The main goal of intelligent systems, as mentioned in the content, is to replicate aspects of human intelligence and carry out tasks that would typically require human reasoning, learning, or problem-solving.</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Where would a Decision Support System (DSS) run analytical models, simulations, or algorithms to support the decision-making process?</p>`,
          options: [`In the Data Management Component`, `In the User Interface (UI)`, `In the Model Management Component`, `Within the core system's kernel`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — In the Model Management Component</p><p>The Model Management Component is where the DSS runs analytical models, simulations, or algorithms to support the decision-making process. These models could be statistical, mathematical, or financial.</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which component of an intelligent system enables it to learn from data rather than being explicitly programmed?</p>`,
          options: [`Artificial Intelligence`, `Expert Systems`, `Machine Learning`, `Data Analytics`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Machine Learning</p><p>Machine Learning is a subfield of AI that allows systems to learn from data rather than being explicitly programmed. The system identifies patterns and relationships within data and uses this to build its internal models and update its behavior.</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is one way a Decision Support System (DSS) is utilized in the retail industry?</p>`,
          options: [`It helps evaluate the creditworthiness of individuals for loan approvals.`, `It assists in route optimisation and fleet management.`, `It helps in making data-driven decisions related to planting and harvesting in agriculture.`, `It analyses historical sales data and other factors to recommend what products are likely to be popular.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It analyses historical sales data and other factors to recommend what products are likely to be popular.</p><p>In the retail industry, DSS are utilized for inventory management, demand forecasting, and customer behaviour analysis which includes analyzing historical sales data and other factors to recommend popular products.</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes an intelligent system from a basic program?</p>`,
          options: [`An intelligent system uses a fixed set of instructions.`, `An intelligent system observes its environment, analyzes inputs, and produces evolving responses.`, `A basic program can interpret data and draw conclusions.`, `A basic program adapts its behavior based on new information.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — An intelligent system observes its environment, analyzes inputs, and produces evolving responses.</p><p>An intelligent system differs from a basic program because it has the capacity to observe its environment, analyze inputs, apply logic or models, and produce responses that evolve over time.</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is included as an optional part of modern DSS that makes it evolve into an Intelligent Decision Support System (IDSS)?</p>`,
          options: [`User interface`, `Knowledge-driven component`, `Intelligent component`, `Data Management Component`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Intelligent component</p><p>The Intelligent Component, which include machine learning or AI algorithms, is what turns a traditional DSS into an Intelligent Decision Support System (IDSS) by learning from historical data and user feedback.</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How do DSS assist in the finance sector?</p>`,
          options: [`They aid in credit scoring, fraud detection, portfolio management, and investment analysis.`, `They help in adjusting pricing dynamically.`, `They help farmers make data-driven decisions.`, `They optimize route planning and logistics.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They aid in credit scoring, fraud detection, portfolio management, and investment analysis.</p><p>In the finance sector, decision support systems are crucial for credit scoring, fraud detection, portfolio management, and investment analysis. They employ statistical models and machine learning algorithms to assess creditworthiness, evaluate risk exposure, assist in investment decisions and more.</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of Machine Learning as a component of intelligent systems?</p>`,
          options: [`It enables systems to follow a fixed set of instructions.`, `It allows systems to learn from data rather than being explicitly programmed.`, `It simulates the decision-making ability of a human expert.`, `It focuses only on reasoning and problem-solving tasks.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows systems to learn from data rather than being explicitly programmed.</p><p>Machine Learning, a subfield of AI, is distinct for its ability to enable systems to learn from data. Instead of following pre-programmed rules, these systems can identify patterns within data and adjust their behavior accordingly.</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the Intelligent Component of a Decision Support System (DSS)?</p>`,
          options: [`It is a component that stores and organizes data.`, `It is a component that runs simulations or algorithms to support decision-making.`, `It is the user interface where decisions are made.`, `It is a component that includes machine learning or AI algorithms, allowing the system to improve over time.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It is a component that includes machine learning or AI algorithms, allowing the system to improve over time.</p><p>The Intelligent Component of a DSS includes machine learning or AI algorithms, which enables the system to learn from historical data and user feedback, improve over time, and customize its decision support.</p>` }
      ] },
    { number: '11', marks: 1, layout: 0, section: 'Overview of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How are Decision Support Systems (DSS) utilized in the agriculture industry?</p>`,
          options: [`They are used for credit scoring and fraud detection.`, `They are used for route optimisation and fleet management.`, `They are used for data-driven decisions related to planting, irrigation, fertilisation, pest control, and harvesting.`, `They are used for inventory management and demand forecasting.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They are used for data-driven decisions related to planting, irrigation, fertilisation, pest control, and harvesting.</p><p>Decision Support Systems in the agriculture industry aid in data-driven decisions related to planting, irrigation, fertilisation, pest control, and harvesting, helping to improve yield, conserve resources, and minimise environmental impact.</p>` }
      ] },
    // ---------------- Types of Decisions in DSS: Unstructured ----------------
    { number: '12', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not a typical characteristic of unstructured decisions in an enterprise environment?</p>`,
          options: [`They are characterized by the need for human judgment.`, `They involve open-ended questions and multiple variables.`, `They can be easily reduced to a mathematical model.`, `They demand input from human decision-makers who must weigh risks and make sense of qualitative data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They can be easily reduced to a mathematical model.</p><p>Unstructured decisions cannot be easily reduced to a mathematical model or standardized routines. They are often complex and involve open-ended questions, the requirement for human judgment, and the necessity to weigh risks and make sense of qualitative data.</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>What are the ways in which Decision Support Systems (DSS) support unstructured decision-making?</p>`,
          options: [`Aggregating data from multiple sources`, `Visualizing trends and patterns`, `Facilitating group collaboration`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Decision Support Systems (DSS) support unstructured decision-making by aggregating data from multiple sources, visualizing trends and patterns, facilitating group collaboration, and more. Therefore, all listed options are correct.</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>What type of inputs often play a significant role in unstructured decision-making in enterprise environments?</p>`,
          options: [`Quantitative, numerical data`, `Customer feedback, social media sentiment, expert opinions`, `Financial forecasts and predictive analytics only`, `Predefined rules and algorithms`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Customer feedback, social media sentiment, expert opinions</p><p>In unstructured decision-making, non-numerical and qualitative inputs such as customer feedback, social media sentiment, and expert opinions are crucial for understanding the situation comprehensively.</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>How does DSS support unstructured decision-making by using data from multiple sources?</p>`,
          options: [`By merging data from various sources into one interface providing a complete view of the situation`, `By eliminating unnecessary data`, `By creating data silos for different information sources`, `By discarding data from external sources`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By merging data from various sources into one interface providing a complete view of the situation</p><p>DSS platforms pull data from various locations and consolidate them into a centralised interface. This gives decision-makers a holistic view of the situation, making it easier to cross-reference data, and gain deeper insights.</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>What makes unstructured decision-making fundamentally different from structured decisions in enterprise environments?</p>`,
          options: [`Unstructured decisions can be easily reduced to mathematical models`, `Unstructured decisions usually involve competing goals`, `Unstructured decisions can be handled by algorithms`, `Unstructured decisions follow established procedures and can often be automated`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Unstructured decisions usually involve competing goals</p><p>Unstructured decision-making in enterprise environments often involves multiple variables, ambiguity, uncertainty, and the need for human judgment. It usually involves competing goals, in contrast to structured decisions which follow established procedures and can often be automated.</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>What does the feature of what-if modeling and scenario analysis in Decision Support Systems (DSS) help decision makers with?</p>`,
          options: [`It helps predict outcomes with absolute certainty`, `It helps simulate different decision paths and observe potential consequences`, `It helps in making the final decision`, `It helps in collecting data from various sources`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps simulate different decision paths and observe potential consequences</p><p>What-if modeling and scenario analysis tool in DSS helps users to simulate different decision paths and observe potential consequences. This allows them to compare outcomes across various scenarios without having to implement changes in the real world first, enabling risk analysis and planning in highly uncertain environments.</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>What is a notable difference between unstructured and structured decisions in an enterprise environment?</p>`,
          options: [`Unstructured decisions often employ mathematical models for solutions.`, `Structured decisions typically involve higher levels of risk.`, `Unstructured decisions require a significant degree of human judgment.`, `Structured decisions demand input from multiple variables and conflicting information.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Unstructured decisions require a significant degree of human judgment.</p><p>Unstructured decisions are typically characterized by ambiguity and uncertainty, and often require significant human judgment to reach a decision. This is unlike structured decisions that can be handled by predefined rules or algorithms.</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Unstructured',
      items: [
        { type: 'mcq',
          question: `<p>How does a Decision Support System (DSS) facilitate unstructured decision-making in enterprise settings?</p>`,
          options: [`By only providing structured data for decision making.`, `By limiting collaboration among the decision-makers.`, `By providing varied inputs from different sources, visualizing data trends, facilitating group collaboration, and offering predictive support through AI.`, `By discouraging the use of external data and limiting the information to internal sources only.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By providing varied inputs from different sources, visualizing data trends, facilitating group collaboration, and offering predictive support through AI.</p><p>DSS enhances unstructured decision making by aggregating data from various sources, providing visual clarity for identifying trends and patterns, facilitating collaboration among decision-makers, and offering predictive analysis and insights powered by AI.</p>` }
      ] },
    // ---------------- Types of Decisions in DSS: Semi-Structured ----------------
    { number: '20', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements is true about the use of Decision Support Systems (DSS) in the field of marketing?</p>`,
          options: [`DSS can determine the tone, style, or messaging for a successful marketing campaign.`, `DSS can analyze customer data and suggest the optimal times for a campaign launch.`, `DSS can replace a marketing manager in creating and implementing marketing strategies.`, `DSS can predict and model cultural nuances and current events to guide the marketing campaign.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — DSS can analyze customer data and suggest the optimal times for a campaign launch.</p><p>DSS's function in marketing includes collecting, analyzing data on various factors such as customer demographics, website traffic, and click-through rates, and as such can suggest the optimal times for launching a campaign. However, it cannot determine the tone, style, or messaging of a marketing campaign, or predict cultural nuances and current events. This requires human creativity and experience.</p>` }
      ] },
    { number: '21', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of these fields uses a Decision Support System (DSS) in a semi-structured decision-making process?</p>`,
          options: [`Marketing Campaign Planning`, `Loan Approval in Banking`, `Human Resources Hiring Decisions`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>DSS is used in Marketing for analyzing data and recommending strategies, in Banking for approving loans based on structured criteria and in HR for sorting and screening applications. However, in all of these fields, the final decision relies on human judgement and interpretation.</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which three components does a Decision Support System (DSS) integrate for assisting with semi-structured decisions?</p>`,
          options: [`Data Input and Analysis, Model-Based Reasoning, and Human Judgment`, `Data Input and Analysis, Statistical Processing, and Artificial Intelligence`, `Historical Data, Predictive Analytics, and Machine Learning`, `Data Mining, Process Automation, and Business Intelligence`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data Input and Analysis, Model-Based Reasoning, and Human Judgment</p><p>A successful Decision Support System (DSS) integrates Data Input and Analysis, Model-Based Reasoning, and Human Judgment. This combination allows the system to manage complexity, improve accuracy, and maintain flexibility in decision-making.</p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>In terms of decision-making, what are semi-structured decisions?</p>`,
          options: [`Decisions that entirely follow strict rules.`, `Decisions that rely heavily on human judgment and creativity.`, `Decisions that are neither entirely rule-based nor entirely dependent on intuition or judgment. They involve elements of both.`, `Decisions that do not require any form of human intervention.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Decisions that are neither entirely rule-based nor entirely dependent on intuition or judgment. They involve elements of both.</p><p>Semi-structured decisions involve elements of both structured decision making and unstructured decision making. They have a predictable, logical foundation that can be partially guided by data, formulas, or defined criteria, but also involve factors that are not easily quantifiable or programmable. These decisions require a decision-maker to apply subjective reasoning, experience, or domain-specific knowledge.</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>What are the three core components of a Decision Support System (DSS) for semi-structured decision-making?</p>`,
          options: [`Statistical formulas, external knowledge, and human expertise`, `Data analysis, model-based reasoning, and human judgment`, `Live databases, cloud-based systems, and concurrent control`, `Human control, external knowledge, and growth rates`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data analysis, model-based reasoning, and human judgment</p><p>A successful DSS integrates three core components: data analysis to provide a evidence-based foundation for decisions, model-based reasoning to simulate possible outcomes based on input data, and human judgment to provide context and nuance that the system cannot grasp.</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>In semi-structured decisions, what role does the Decision Support System (DSS) play?</p>`,
          options: [`It replaces human judgment.`, `It enforces the decision.`, `It assists and enhances human judgment while making the final decision.`, `It completely automates the decision-making process.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It assists and enhances human judgment while making the final decision.</p><p>In semi-structured decisions, the Decision Support System (DSS) assists and complements human judgment by providing structured outputs, but the human decision-maker is responsible for considering the context and making the final decision. It also allows users to input new assumptions, adjust variables, and test hypotheses. The system's responsibility is to inform the decision, not enforce it.</p>` }
      ] },
    { number: '26', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a Decision Support System (DSS) in the hiring process of the Human Resources department?</p>`,
          options: [`It determines the candidates' attitude and adaptability.`, `It aids in filtering, scoring, and prioritizing applications based on predefined criteria.`, `It conducts interviews and interpersonal interactions.`, `It evaluates growth potential and team synergy.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It aids in filtering, scoring, and prioritizing applications based on predefined criteria.</p><p>In the hiring process, DSS assists HR by filtering, scoring, and ranking applicants based on structured data and predefined criteria, which helps reduce the time and effort spent on initial stages of recruitment. However, aspects like attitude, adaptability, team synergy and growth potential are evaluated by human HR professionals.</p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a core component of a Decision Support System (DSS) for semi-structured decision-making?</p>`,
          options: [`Data Input and Analysis`, `Simulation Techniques`, `Model-Based Reasoning`, `Complex Algorithms`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Complex Algorithms</p><p>The three core components of a DSS for semi-structured decision-making are Data Input and Analysis, Model-Based Reasoning and Human Judgment, not Complex Algorithms.</p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is a defining feature of semi-structured decisions?</p>`,
          options: [`They are entirely rule-based.`, `They utilize a set of finite instructions, such as formulas or algorithms.`, `They are entirely dependent on intuition or judgment.`, `They are fully automated with no need for human interpretation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They utilize a set of finite instructions, such as formulas or algorithms.</p><p>In semi-structured decisions, they utilize both structured logic and elements of human judgement. A defining feature of semi-structured decisions includes the use of specified set of finite instructions such as formulas, decision rules, or algorithms that help process input data and produce meaningful output. This is, however, not sufficient to fully automate the decision process without human interpretation.</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Semi-Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following statements accurately represents the role of a Decision Support System (DSS) in the human resources hiring decision process?</p>`,
          options: [`DSS makes the final decision regarding hiring, considering intangible assessments such as attitude and cultural fit.`, `DSS is only used to sort and screen résumés, and human HR professionals play no role in the hiring decision.`, `DSS acts as a filtering and support tool, but final hiring decisions depend upon human HR professionals.`, `DSS is unnecessary in HR departments as the entire process depends solely on human discretion.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — DSS acts as a filtering and support tool, but final hiring decisions depend upon human HR professionals.</p><p>During the hiring process, DSS can quickly sort through résumés, screen for qualifications, and score applicants based on predefined criteria. However, final hiring decisions, which might require assessing attributes like communication style, attitude, and cultural fit, are made by human HR professionals.</p>` }
      ] },
    // ---------------- Types of Decisions in DSS: Structured ----------------
    { number: '30', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the features that make structured decisions in banking, HR, manufacturing, and eCommerce well-suited for automation?</p>`,
          options: [`The inputs required for the decision are numeric, categorical, or otherwise clearly defined.`, `The decision-making rules are different and unique each time.`, `The possible results of the decision are unknown in advance.`, `The task heavily relies on emotion, context, or interpretation.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The inputs required for the decision are numeric, categorical, or otherwise clearly defined.</p><p>The structure of decisions in these fields involves fixed logic and structured datasets, which are categorical or numeric. These factors, along with predictable outcomes and the absence of human judgment, make them ideal for automation.</p>` }
      ] },
    { number: '31', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What type of decisions are handled by a Decision Support System (DSS) especially well?</p>`,
          options: [`Unstructured decisions`, `Semi-structured decisions`, `Structured decisions`, `Free-form decisions`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Structured decisions</p><p>Structured decisions are well-suited for DSS thanks to their routine, repetitive, and rule-based nature. These decisions follow consistent patterns, involve clearly defined procedures and easily fit into the data and logic-based system of DSS.</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of a Decision Support Systems (DSS) in managing inventory for large retail chains such as Woolworths or Coles?</p>`,
          options: [`Report sales to the management`, `Manage employees' schedules`, `Issue monthly financial reports`, `Automate the process of stock reordering based on predefined rules and real-time data`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Automate the process of stock reordering based on predefined rules and real-time data</p><p>DSS automates the process of reordering stock for retail chains. They assign a reorder point to every product—a predefined stock level that triggers a restocking action based on historical sales data, delivery times from suppliers, and seasonal demand patterns. When inventory for an item falls below this reorder point, the system automatically issues a purchase order to the supplier.</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the examples of a basic structured decision rule found in Decision Support Systems (DSS) used by retail chains?</p>`,
          options: [`IF Stock Level &gt; Reorder Point, THEN Place Order for 100 units.`, `IF Stock Level &lt; Reorder Point, THEN Place Order for 100 units.`, `IF Stock Level = Reorder Point, THEN Place Order for 100 units.`, `IF Stock Level = Reorder Point, THEN Place Order for 50 units.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — IF Stock Level &lt; Reorder Point, THEN Place Order for 100 units.</p><p>The rule is IF Stock Level &lt; Reorder Point, THEN Place Order for 100 units. This allows for automation of restocking when inventory falls below a predefined level.</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>How does a Decision Support System (DSS) enhance structured decision making?</p>`,
          options: [`By introducing more human judgement and intuition`, `By replacing the need for any human involvement in decision making`, `By reducing the amount of data to be evaluated`, `By systematically collecting, analyzing, and presenting data to provide logic-based decisions`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — By systematically collecting, analyzing, and presenting data to provide logic-based decisions</p><p>DSS are designed to enhance structured decision making by systematically collecting, analyzing, and presenting data. It follows clearly defined procedures and patterns to keep decisions efficient, consistent and accurate, thereby aiding the decision makers to make logic-based decisions without the need for personal judgement or intuition.</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>In the banking sector, how are structured decisions used in the process of fraud detection?</p>`,
          options: [`They are used to manually evaluate each transaction for fraudulent activity.`, `They help to train customer service representatives to recognize fraudulent transactions.`, `They are part of an automatic process that uses pre-defined rules to approve or decline transactions.`, `They are used to randomly select transactions for closer inspection.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They are part of an automatic process that uses pre-defined rules to approve or decline transactions.</p><p>Structured decisions in the banking sector are used extensively to maintain security, manage risk, and streamline operations. In the case of fraud detection, automatic approval or denial of transactions is governed by predefined rules, such as the size of the transaction amount or unusual activity. These decisions do not require human judgment and are instant and accurate.</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not an example of a structured decision?</p>`,
          options: [`Automatic approval or denial of credit card transactions based on predefined rules in banks.`, `Calculating employee wages using clear variables in HR.`, `Scheduling preventive maintenance based on machine usage data in manufacturing.`, `Considering a business's advertising strategy based on market trends.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Considering a business's advertising strategy based on market trends.</p><p>Structured decisions follow precise rules and often don't require human judgment. Examples include automatic approval or denial of credit card transactions, calculating employee wages using clear variables, and scheduling preventive maintenance based on machine usage data. In contrast, advertising strategies based on market trends involve a degree of human judgment and are thus not structured decisions.</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of advanced technologies like AI and RPA in automating structured decisions in Decision Support Systems (DSS)?</p>`,
          options: [`AI and RPA help to interpret and act on structured decisions manually`, `AI helps to make structured decisions while RPA acts on unstructured decisions`, `AI and RPA only provide predictive analysis for decision making in DSS`, `AI can optimize rules over time based on historical data patterns while RPA can complete tasks quickly and without error.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — AI can optimize rules over time based on historical data patterns while RPA can complete tasks quickly and without error.</p><p>These advanced technologies enable DSS to handle structured decisions more effectively, with AI optimizing rules based on patterns found in historical data, and RPA reliably completing tasks quickly and without error, therefore enhancing automation.</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What are the essential components of a Decision Support System (DSS) used for structured decisions in a retail environment?</p>`,
          options: [`Reorder Point and Purchase Order`, `Databases, Decision Rules and Models, User Interfaces, and Automated Triggers`, `POS Systems and Warehouse Management Systems`, `Seasonal Demand Patterns and Supplier Records`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Databases, Decision Rules and Models, User Interfaces, and Automated Triggers</p><p>DSS for structured decisions include several components such as databases that store all related data needed to support decisions, decision rules or models that interpret and process the stored data, user interfaces that allow human supervisors to monitor and adjust the decision process, and automated triggers that initiate specific actions when certain conditions are met. These components work together to transform raw data into automated business actions.</p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best defines structured decisions in a Decision Support System (DSS)?</p>`,
          options: [`Decisions that are intuitive and require human intervention.`, `Decisions that are unpredictable and require subjective evaluation.`, `Decisions that are routine, repetitive, and rule-based, often automated because they follow a consistent pattern and procedures.`, `Decisions that are only governed by historical data and do not require a set of rules or a formula.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Decisions that are routine, repetitive, and rule-based, often automated because they follow a consistent pattern and procedures.</p><p>Structured decisions are rule-based, repetitive, and follow consistent patterns and clearly defined procedures, making them ideal for automation in a DSS. They do not require significant personal judgment or intuition and instead rely on data and logic.</p>` }
      ] },
    { number: '40', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>In the context of structured decisions, what is an example of its use in the HR sector?</p>`,
          options: [`Implementing free shipping thresholds in eCommerce`, `Fraud detection and transaction approval in banking`, `Predictive maintenance scheduling in manufacturing`, `Payroll processing`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Payroll processing</p><p>Payroll processing is an example of structured decision-making in the HR sector. Various factors like the number of hours worked, tax rates, and bonuses are taken into account to calculate employee wages, and almost all of these decisions are automated.</p>` }
      ] },
    { number: '41', marks: 1, layout: 0, section: 'Types of Decisions in DSS: Structured',
      items: [
        { type: 'mcq',
          question: `<p>What role do automated triggers play in a Decision Support System (DSS) used for structured decisions in a retail environment?</p>`,
          options: [`Automated triggers initiate a specific action when certain conditions are met.`, `Automated triggers are used to manually adjust reorder thresholds during an unexpected sales spike.`, `Automated triggers are in place to check the quality of data stored in the system.`, `Automated triggers are used to interact with customers on the retail store.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Automated triggers initiate a specific action when certain conditions are met.</p><p>Automated triggers in a DSS for structured decisions are system events that initiate specific actions when certain conditions are met. These triggers help enable real-time decision-making and improve responsiveness.</p>` }
      ] },
    // ---------------- Expert Systems in Diagnosis ----------------
    { number: '42', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a rule-based logic in an expert system?</p>`,
          options: [`It is used to connect the user's device to the internet.`, `It is used to troubleshoot hardware issues in a device.`, `It helps decide on a diagnosis domain.`, `It helps in designing a diagnostic tool using conditional rules.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It helps in designing a diagnostic tool using conditional rules.</p><p>Rule-based logic in an expert system is used to make decisions based on a set of predefined rules or conditions. Here, it helps in creating a diagnostic tool using conditional rules i.e., IF-THEN statements.</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What is the key advantage of rule-based decision making in expert systems?</p>`,
          options: [`It allows the system to make inconsistent decisions and become less predictable`, `It allows for deterministic reasoning, ensuring consistency and predictability`, `It slows down the decision making process, making it easier to follow`, `It requires frequent updates, allowing for constant system changes`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows for deterministic reasoning, ensuring consistency and predictability</p><p>Rule-based decision making in expert systems allows for deterministic reasoning, meaning that the same input will always generate the same output. This ensures consistency and predictability. Additionally, this rule-based structure allows for modular updates, with new rules being added or existing ones modified without having to redesign the entire system which makes the system scalable and adaptable to changing information or conditions.</p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not a main component of an expert system?</p>`,
          options: [`The knowledge base`, `The inference engine`, `The user interface`, `The data mining tool`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — The data mining tool</p><p>The three main components of an expert system are the knowledge base, the inference engine and the user interface. The data mining tool is not a main component of an expert system.</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of symptom-based reasoning in diagnostic expert systems?</p>`,
          options: [`To recommend treatments based on patient symptoms.`, `To process inputs and determine the most likely causes of a problem.`, `To ensure the same input always produces the same output.`, `To collect inputs from the user and store them for future consideration.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To process inputs and determine the most likely causes of a problem.</p><p>Symptom-based reasoning in diagnostic expert systems is fundamental in processing inputs from the user, which may include symptoms or fault descriptions, in order to determine the most probable cause of the problem.</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What are the primary functions of an inference engine in an expert system?</p>`,
          options: [`It collects and stores data from human specialists`, `It applies rules to known facts or user-provided data to derive conclusions`, `That allows individuals with non-technical knowledge to interact with the system`, `It performs the job of evaluating pollution levels or ecosystem health`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It applies rules to known facts or user-provided data to derive conclusions</p><p>The inference engine is the reasoning mechanism of an expert system that applies the rules to known facts or user-provided data and uses logical processes to derive a conclusion. It acts as the system's “thinking” component.</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What are the primary components of an expert system?</p>`,
          options: [`The knowledge base, the inference engine, and the database.`, `The database, the logic base, and the user interface.`, `The knowledge base, the inference engine, and the user interface.`, `The logic base, the inference engine, and the question bank.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The knowledge base, the inference engine, and the user interface.</p><p>An expert system primarily operates through three components: the knowledge base which serves as a digital repository of knowledge, the inference engine which interprets the user's input and derives conclusions, and the user interface that allows users to interact with the system.</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Which industries utilize diagnostic expert systems?</p>`,
          options: [`Health and medicine`, `Mechanical engineering`, `Information Technology`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Diagnostic expert systems are used in various fields like medicine, agriculture, mechanical engineering, and information technology to improve decision-making based on symptoms, conditions, or patterns.</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a correct if-then-rule as used in an expert system for diagnosing flu or a cold?</p>`,
          options: [`IF coughing AND runny nose → THEN Flu`, `IF fever AND sore throat → THEN Flu`, `IF no fever AND runny nose → THEN Sore throat or mild infection`, `IF fever AND no cough → THEN Common cold`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — IF fever AND sore throat → THEN Flu</p><p>According to the information given, if there is fever and a sore throat, the expert system will diagnose it as flu.</p>` }
      ] },
    { number: '50', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Expert systems can be described as a practical application of which technology?</p>`,
          options: [`Data Mining`, `Machine Learning`, `Artificial Intelligence`, `Speech Recognition`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Artificial Intelligence</p><p>The passage describes expert systems as a practical application of Artificial Intelligence that replicate human reasoning and decision making abilities.</p>` }
      ] },
    { number: '51', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>What is the main role of the user interface in an expert system?</p>`,
          options: [`It applies relevant rules from the knowledge base and derives conclusions.`, `It holds the factual knowledge, procedural rules, and domain-specific logic collected from experienced human professionals.`, `It facilitates interaction between the users and the expert system.`, `It performs both forward chaining and backward chaining depending on the situation.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It facilitates interaction between the users and the expert system.</p><p>The user interface serves as a pathway for users to interact with the expert system. It enables the users to input relevant data and receive the system's output.</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is not an advantage of using rule-based logic in expert systems?</p>`,
          options: [`Ensuring fairness and predictability.`, `Allows for modular updates, enabling the system's scale and adaptability to changing information or conditions.`, `Requires redesigning the entire system when new knowledge becomes available.`, `Navigates large rule sets efficiently through forward or backward chaining.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Requires redesigning the entire system when new knowledge becomes available.</p><p>Rule-based logic does not require redesigning the entire system when new knowledge becomes available. It allows for modular updates, so new rules can be added or existing ones can be modified without changing the entire system.</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Expert Systems in Diagnosis',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following represents an example rule from the knowledge base of an expert system?</p>`,
          options: [`If the computer is slow and internet connection is low, suggest virus infection as potential problem.`, `35% of people who smoke daily will develop lung cancer.`, `Magnet attracts iron.`, `The stock market falls when there's political instability.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — If the computer is slow and internet connection is low, suggest virus infection as potential problem.</p><p>The knowledge base of an expert system comprises of expert-level facts, concepts, and rules usually written in an “IF-THEN” format.</p>` }
      ] },
    // ---------------- Expert Systems in Monitoring ----------------
    { number: '54', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What are the two key components of an expert system?</p>`,
          options: [`The knowledge base and the inference engine`, `The manufacturing system and the monitoring system`, `The sensor system and the control system`, `The neural network and the decision tree`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The knowledge base and the inference engine</p><p>An expert system consists of two key components: the knowledge base, which contains structured information—facts, rules, and experience-based insights—that define how the system understands the world and the inference engine, which is the reasoning module of the system. It interprets the data coming in from sensors or inputs, applies the logic from the knowledge base, and draws conclusions.</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of expert systems in healthcare, manufacturing, environmental management, and cybersecurity?</p>`,
          options: [`To monitor vital signs, track machinery conditions, detect environmental hazards, and identify network threats.`, `To replace nurses, machine operators, environmental activists, and IT personnel.`, `To automate administrative tasks in hospitals, factories, environmental offices, and tech companies.`, `To establish new protocols for patient care, machine maintenance, environmental conservation, and data protection.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To monitor vital signs, track machinery conditions, detect environmental hazards, and identify network threats.</p><p>The text describes how expert systems are used in different industries to monitor and make sense of crucial data, helping human operators respond quickly to potential issues. They don't replace human workers or automate administrative jobs, nor do they devise new regulations or protocols.</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What benefits do expert systems offer to enterprise-level decision-making?</p>`,
          options: [`They consistently act without fatigue, apply rule-based logic developed from expert knowledge, and learn and adapt over time.`, `They replace human workers, making the entire system automated.`, `They excel in areas which do not require accuracy or swift actions.`, `They do not require monitoring and can operate efficiently without human oversight.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They consistently act without fatigue, apply rule-based logic developed from expert knowledge, and learn and adapt over time.</p><p>Expert systems provide consistent actions without fatigue, apply rule-based logic developed from experience, can immediately respond to abnormal conditions, and have the ability to learn and adapt over time. Moreover, they support humans by offering data-driven insights, rather than replacing them.</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary goal of monitoring in a system, environment, or process?</p>`,
          options: [`To passively observe operation patterns.`, `To activate automated responses and alerts only when a system fails.`, `To detect when something is going wrong or about to go wrong so that timely actions can be taken.`, `To replace human input completely in the observation process.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To detect when something is going wrong or about to go wrong so that timely actions can be taken.</p><p>The goal of monitoring is not just to observe but to actively detect when something is wrong or about to go wrong, allowing for preemptive action.</p>` }
      ] },
    { number: '58', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What does monitoring by expert systems in healthcare involve?</p>`,
          options: [`Watching out for excessive machine vibration`, `Monitoring air quality and temperature`, `Tracking patients' vital signs in real time`, `Detecting suspicious network activity`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Tracking patients' vital signs in real time</p><p>In healthcare, expert systems are used to track vital signs such as heart rate, blood pressure, oxygen saturation, and respiration in real time. If any abnormal patterns or dangerous fluctuations occur, the system alerts the medical staff for immediate action.</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>Why are expert systems valuable for monitoring in an enterprise context?</p>`,
          options: [`They can process larger volumes of data.`, `They provide consistent, automated analysis.`, `They help in proactive decision making.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>Expert systems solve traditional monitoring challenges by providing consistent, automated analysis based on expert-level knowledge and logic. They never tire and can process large volumes of real-time data. Besides, they can store historical data, learn from previous incidents and support proactive decision-making. Thus, making them valuable for enterprise monitoring.</p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>How do expert systems enhance the reliability of patient monitoring in healthcare settings?</p>`,
          options: [`By operating continuously and analyzing data without breaks.`, `By reducing the workload of nurses.`, `By providing medical staff with real-time updates.`, `By reducing the number of patients in ICUs.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By operating continuously and analyzing data without breaks.</p><p>Expert systems enhance the reliability of patient monitoring in healthcare settings by operating continuously and analyzing data without breaks or distractions, unlike human staff who may become fatigued or make errors.</p>` }
      ] },
    { number: '61', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What is the advantage of using expert systems for monitoring over traditional methods?</p>`,
          options: [`Expert systems allow for better attention span and consistency than humans.`, `Expert systems decrease safety and risk detection.`, `Expert systems require a lot of manual input and analysis.`, `Expert systems cannot process large volumes of real-time data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Expert systems allow for better attention span and consistency than humans.</p><p>Expert systems provide continuous, automated analysis based on expert-level knowledge and logic. They are consistent, never tire and can process large volumes of real-time data, which allows for better attention span and consistency than humans.</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>How do expert systems support environmental management?</p>`,
          options: [`They scan network activity to detect suspicious activity.`, `They track machine performance indicators for predictive maintenance.`, `They observe ecosystems and analyze data to detect harmful changes.`, `They monitor vital signs of patients to ensure immediate medical response.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They observe ecosystems and analyze data to detect harmful changes.</p><p>For environmental management, expert systems analyze data collected on aspects like air quality, water pollution, temperature, humidity, and wind speed. The system identifies patterns that may signal environmental hazards, thus supporting effective detection and response.</p>` }
      ] },
    { number: '63', marks: 1, layout: 0, section: 'Expert Systems in Monitoring',
      items: [
        { type: 'mcq',
          question: `<p>What are the primary benefits of using expert systems for decision-making in real-time environments?</p>`,
          options: [`They are capable of learning and adapting over time`, `They reduce human fatigue by operating consistently`, `They can immediately respond to abnormal conditions`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Expert systems are beneficial in multiple ways. They can learn and adapt over time, particularly AI-enhanced systems. They operate consistently, reducing fatigue and human error. They can instantly detect and respond to abnormal conditions, which proves crucial in real-time environments.</p>` }
      ] },
    // ---------------- Process Control & Planning ----------------
    { number: '64', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of expert systems used in process control over traditional systems like Programmable Logic Controllers (PLCs) and SCADA (Supervisory Control and Data Acquisition) systems?</p>`,
          options: [`They solely rely on hardcoded control logic.`, `They apply reasoning strategies and use if-then rules.`, `They cannot adapt to new conditions or update their knowledge base.`, `They don't monitor real-time sensor data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They apply reasoning strategies and use if-then rules.</p><p>Expert systems differ from traditional system as they can apply reasoning strategies, use if-then rules, adapt to new conditions, and monitor real time sensor data.</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What is forward chaining in the context of a dairy processing plant?</p>`,
          options: [`It's a process of starting with a goal or hypothesis and working backwards to determine why a batch was under-pasteurised.`, `It's a reasoning process that starts with known facts and applies rules to infer new facts or trigger actions.`, `It's the process of checking each condition against stored data and rules to trace the root cause of an issue.`, `It's the process of freezing and thawing milk.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It's a reasoning process that starts with known facts and applies rules to infer new facts or trigger actions.</p><p>Forward chaining refers to taking known facts (usually from sensors or inputs) and applying rules to infer new facts or trigger actions, such as monitoring milk temperature, opening or closing steam valves, and triggering alerts.</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of sensors in a process control system?</p>`,
          options: [`To perform actions in response to system decisions`, `To monitor critical variables such as temperature, pressure, and flow rate`, `To make changes to the environment based on logic or instructions`, `To turn systems on/off`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To monitor critical variables such as temperature, pressure, and flow rate</p><p>Sensors are devices that collect data from the physical environment, including monitoring critical variables such as temperature, pressure, flow rate, etc. This data is essential for expert systems to make decisions.</p>` }
      ] },
    { number: '67', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What makes an expert system suitable for process control?</p>`,
          options: [`Ability to monitor real-time sensor data`, `Ability to apply logical reasoning based on expert-defined rules`, `Ability to provide automatic responses or decision support`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Expert systems are suitable for process control because they can monitor real-time sensor data, apply logical reasoning based on expert-defined rules, provide automatic responses or decision support and adapt to new conditions by updating its knowledge base.</p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What are the main tasks an expert system can perform if a truck breaks down during a delivery in a logistics company?</p>`,
          options: [`It can reassign packages to other vehicles, inform drivers and customers, and reroute remaining trucks to meet time expectations.`, `It can repair the broken down truck.`, `It can provide medical assistance to the driver.`, `It can alert the traffic police about the situation.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It can reassign packages to other vehicles, inform drivers and customers, and reroute remaining trucks to meet time expectations.</p><p>In the event of a truck breakdown, an expert system in a logistics company can efficiently manage the situation by reassigning packages to other vehicles, informing relevant stakeholders such as drivers and customers and rerouting remaining trucks to ensure that all deliveries are completed within the predetermined time windows.</p>` }
      ] },
    { number: '69', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT an example of a real-time sensor in process control systems?</p>`,
          options: [`Thermocouples in ovens`, `Pressure gauges in pipelines`, `Valves`, `Humidity sensors`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Valves</p><p>Valves are types of actuators, not sensors. They perform actions in response to system decisions.</p>` }
      ] },
    { number: '70', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What is the difference between Forward Chaining and Backward Chaining in process control?</p>`,
          options: [`Forward Chaining uses a data-driven response while Backward Chaining uses goal-driven reasoning.`, `Backward Chaining is used to infer new facts or trigger actions, while Forward Chaining is used for troubleshooting.`, `Forward Chaining starts with known facts and applies rules to infer new facts, while Backward Chaining starts with a goal and works backwards to support that goal.`, `Forward Chaining works in reverse, while Backward Chaining begins with sensor data and follows rule-based logic.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Forward Chaining uses a data-driven response while Backward Chaining uses goal-driven reasoning.</p><p>Forward Chaining is a reasoning process that starts with known facts (like data from sensors in a dairy plant) and applies rules to infer new actions. On the other hand, Backward Chaining starts with a goal (like finding the reason for milk's insufficient pasteurisation) and works backwards through available data to find the support of the goal.</p>` }
      ] },
    { number: '71', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What are the roles of sensors and actuators within an expert system in process control?</p>`,
          options: [`Sensors provide continuous data while actuators respond to system directions.`, `Actuators provide continuous data while sensors respond to system directions.`, `Both sensors and actuators provide continuous data to the expert system.`, `Both sensors and actuators respond to the decisions made by the expert system.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Sensors provide continuous data while actuators respond to system directions.</p><p>Sensors are responsible for collecting real-time data from the physical environment, while actuators are devices that perform actions based on decisions or instructions provided by the expert system.</p>` }
      ] },
    { number: '72', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What are the key functions of an expert system in process control?</p>`,
          options: [`They only react to changes in inputs or outputs`, `Expert systems monitor real-time sensor data, apply logical reasoning based on expert-defined rules and provide automatic responses or decision support`, `Expert systems maintain desired conditions, like temperature, pressure, flow rate`, `They only correct deviations using actuators or control loops`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Expert systems monitor real-time sensor data, apply logical reasoning based on expert-defined rules and provide automatic responses or decision support</p><p>An expert system in process control monitors real-time sensor data, applies logical reasoning based on rules defined by experts, provides automatic responses or decision support, and is able to adapt to new conditions by updating its knowledge base.</p>` }
      ] },
    { number: '73', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of forward chaining in a dairy processing plant?</p>`,
          options: [`To alert operators if the temperature rises too quickly or a cleaning cycle is missed`, `To help trace the root cause of an error by working in reverse`, `To determie why a batch of milk was under-pasteurised`, `To assist in conditional planning`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To alert operators if the temperature rises too quickly or a cleaning cycle is missed</p><p>In a dairy processing plant, forward chaining begins with sensor data and follows rule-based logic to make immediate decisions. Its functions include monitoring milk temperature to ensure it stays within the safe pasteurization range, and triggering alerts to operators if the pressure rises too quickly or a cleaning cycle is missed.</p>` }
      ] },
    { number: '74', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What function do actuators perform in a process control system?</p>`,
          options: [`They collect data from the environment`, `They perform actions based on system decisions`, `They monitor changes in variables such as temperature and pressure`, `They only provide data to the expert system`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They perform actions based on system decisions</p><p>Actuators perform actions in a process control system based on decisions or instructions from the expert system. They act as the hands of the control system, making changes to the environment as necessary.</p>` }
      ] },
    { number: '75', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What are some of the core aspects of process control?</p>`,
          options: [`Maintaining desired conditions, reacting to changes, and correcting deviations.`, `Designing and programming the control system.`, `Setting up the production line and choosing the best equipment.`, `Making sure the lights in the factory are kept on.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Maintaining desired conditions, reacting to changes, and correcting deviations.</p><p>The core aspects of process control are maintaining desired conditions (such as temperature, pressure, flow rate), reacting to changes in inputs or outputs, and correcting deviations using actuators or control loops. The other options do not accurately reflect the key aspects of process control.</p>` }
      ] },
    { number: '76', marks: 1, layout: 0, section: 'Process Control & Planning',
      items: [
        { type: 'mcq',
          question: `<p>What are two key operations in any large-scale organisation, such as in manufacturing, logistics, transport, or healthcare?</p>`,
          options: [`Inspecting and billing`, `Budgeting and hiring`, `Scheduling and planning`, `Marketing and outsourcing`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Scheduling and planning</p><p>Large-scale organisations in various sectors such as manufacturing, logistics, transport, or healthcare primarily focus on scheduling and planning as vital and complex operations. These processes ensure that the right resources are available and used effectively to meet business goals.</p>` }
      ] },
    // ---------------- From Rule-Based to Probabilistic Systems ----------------
    { number: '77', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>How has the improvement in storage technology impacted expert systems?</p>`,
          options: [`It has made expert systems smaller and more isolated.`, `It has restricted the amount of knowledge expert systems can store.`, `It has enabled expert systems to analyze huge datasets, train large machine learning models, and serve more users simultaneously.`, `It has lowered the cost of creating expert systems.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It has enabled expert systems to analyze huge datasets, train large machine learning models, and serve more users simultaneously.</p><p>The improved storage technology has resulted in vast, dynamic, and continuously learning platforms. Modern expert systems can analyze a huge amount of data, train sophisticated machine learning models and serve millions of users at the same time, due to the increased storage capacity and accessibility.</p>` }
      ] },
    { number: '78', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What was the significant factor behind the evolution of expert systems from simple rule-based models to complex probabilistic systems?</p>`,
          options: [`The advent of internet`, `Increase in processing power of computers`, `Introduction of new programming languages`, `Advancement in artificial intelligence techniques`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Increase in processing power of computers</p><p>The increase in computer processing power, following Moore's Law, was a crucial factor in the evolution of expert systems. As computers got faster, smaller, cheaper, and more energy-efficient, more complex expert system designs became possible.</p>` }
      ] },
    { number: '79', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What enabled the transformation of expert systems from isolated tools into continuously learning platforms?</p>`,
          options: [`The increase in computing speed`, `The development of more sophisticated software`, `The improvements in storage technology`, `The invention of the internet`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The improvements in storage technology</p><p>The improvements in storage technology, from kilobytes in early computers to terabytes and cloud storage in modern systems, have allowed expert systems to hold and manage vast amounts of knowledge. This has facilitated the transformation of expert systems into dynamic, constantly learning platforms.</p>` }
      ] },
    { number: '80', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What factors led to the evolution of expert systems from simple rule-based models to sophisticated probabilistic systems?</p>`,
          options: [`Improvement in programming languages`, `Increase in funding for research`, `Availability of skilled programmers`, `Dramatic increase in processing power`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Dramatic increase in processing power</p><p>The dramatic increase in processing power allowed expert systems to perform millions or billions of calculations per second, enabling the handling of vast data sets, dynamic reasoning, and machine learning functionalities. This was crucial for the evolution from simple rule-based models to complex probabilistic systems.</p>` }
      ] },
    { number: '81', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What features of modern expert systems allow them to be more effective in different domains as compared to early expert systems?</p>`,
          options: [`Modern expert systems depend solely on static rules programmed by human experts`, `Modern expert systems rarely update their rule bases`, `Modern expert systems can not adapt to new patterns in real time and adjust to changes and anomalies`, `Modern expert systems employ sophisticated, live, and continuously updating pools of data for decision making`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Modern expert systems employ sophisticated, live, and continuously updating pools of data for decision making</p><p>The availability of live, vast, and continuously updating data sources, as well as the ability of modern expert systems to integrate real-time data streams from multiple sources, enables them to continually update their knowledge bases without human intervention, adapt to new patterns in real-time, and make stronger evidence-based predictions, thereby making them more effective in various domains.</p>` }
      ] },
    { number: '82', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary difference in the way rule-based and probabilistic expert systems make decisions?</p>`,
          options: [`Rule-based systems reach decisions by calculating probabilities while probabilistic systems use if-then rules.`, `Rule-based systems utilize statistical data and machine learning while probabilistic systems rely on human experts' manually encoded rules.`, `Rule-based systems operate on predetermined if-then rules whereas probabilistic systems assign probabilities to different outcomes.`, `Rule-based systems can handle incomplete, conflicting, or noisy data while probabilistic systems cannot.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Rule-based systems operate on predetermined if-then rules whereas probabilistic systems assign probabilities to different outcomes.</p><p>Rule-based systems make decisions based on specific "if-then" rules. On the other hand, probabilistic systems calculate the likelihood of different outcomes and bear in mind the possibility of uncertainty, which makes them more flexible than rule-based systems.</p>` }
      ] },
    { number: '83', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of Moore's Law in the evolution of expert systems?</p>`,
          options: [`It predicted the decrease in size of transistors on a microchip.`, `It influenced the advancement of computer processing power.`, `It provided a framework for rule-based expert systems.`, `It enforced a limit to the processing power of computers.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It influenced the advancement of computer processing power.</p><p>Moore's Law, which predicted the doubling of transistors on a microchip approximately every two years and thus an increase of processor speeds and capabilities, significantly influenced the development of expert systems by allowing for greater processing power.</p>` }
      ] },
    { number: '84', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of probabilistic expert systems over rule-based expert systems?</p>`,
          options: [`Probabilistic expert systems are much faster in updating information as they can self-update from new data.`, `Probabilistic expert systems use fixed "if-then" rules, which make their reasoning much clearer.`, `Probabilistic expert systems are more rigid and work best in predefined conditions.`, `Probabilistic expert systems are limited in their capacity to handle messy, unpredictable environments.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Probabilistic expert systems are much faster in updating information as they can self-update from new data.</p><p>Probabilistic expert systems can automatically update information based on new data while rule-based systems require human revision of rules for updates. This makes probabilistic expert systems faster in updating new information.</p>` }
      ] },
    { number: '85', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What was a significant limitation for early expert systems in terms of data handling?</p>`,
          options: [`They lacked the processing power to handle large data.`, `There were constraints on data storage.`, `The systems were unable to analyze the data.`, `It was hard to access data in real-time.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — There were constraints on data storage.</p><p>In the early decades of computing, expert systems faced significant constraints on data storage. Computers had limited storage capacities, which led to difficulties in storing intricate knowledge bases for expert systems.</p>` }
      ] },
    { number: '86', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What enabled early expert systems to evolve into modern expert systems that continuously update their knowledge bases and adapt to new patterns?</p>`,
          options: [`The development of more complex rule-based models.`, `The improvement in storage technology.`, `The availability of abundant, diverse, and up-to-the-minute data.`, `The use of more advanced human expertise.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The availability of abundant, diverse, and up-to-the-minute data.</p><p>The availability of live, vast data sources due to advancements in internet, cloud computing, IoT sensors, satellites, and global databases has allowed expert systems to continuously update their knowledge and adapt to new patterns in real time.</p>` }
      ] },
    { number: '87', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What has been a crucial factor in transitioning expert systems from simple rule-based models to advanced, data-driven decision-makers?</p>`,
          options: [`Decrease in human expertise`, `More sophisticated algorithms`, `Improvement in data access and availability`, `Decreased need for real-time adjustments`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Improvement in data access and availability</p><p>The text highlights the dramatic improvement in data availability and access as a critical factor that has driven the transition of expert systems from simple rule-based models to advanced, data-driven decision-makers.</p>` }
      ] },
    { number: '88', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What was one major challenge for expert systems in the early days of computing due to storage limitations?</p>`,
          options: [`They couldn't serve many users simultaneously.`, `They were unable to store a broad range of knowledge.`, `They were unable to update their knowledge bases continuously.`, `They couldn't handle complex probabilistic models.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They were unable to store a broad range of knowledge.</p><p>Early expert systems had severe limitations on data storage. Computers in the 1970s and early 1980s had capacities measured in KBs or at most a few MBs. These systems had to carefully limit their knowledge base to fit the storage capacity, limiting their complexity and decision-making depth.</p>` }
      ] },
    { number: '89', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>How do rule-based expert systems differ from probabilistic expert systems in handling uncertainty?</p>`,
          options: [`Rule-based expert systems handle uncertainty better by using "if-then" rules`, `Both handle uncertainty in the same way`, `Rule-based expert systems struggle in handling uncertainty, while probabilistic systems model uncertainty and partial information`, `Probabilistic expert systems struggle in handling uncertainty, while rule-based systems model uncertainty and partial information`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Rule-based expert systems struggle in handling uncertainty, while probabilistic systems model uncertainty and partial information</p><p>Rule-based expert systems, by their nature of following fixed 'if-then' rules, struggle when faced with uncertainty or incomplete data. Probabilistic expert systems, on the other hand, are designed to manage uncertainty by calculating likelihoods and confidence levels, enabling them to adapt to varying, real-world environments.</p>` }
      ] },
    { number: '90', marks: 1, layout: 0, section: 'From Rule-Based to Probabilistic Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is one way in which the dramatic increase in processing power affected the evolution of expert systems?</p>`,
          options: [`Modern expert systems stay static and rely on pre-programmed rules.`, `Modern expert systems can only evaluate a few simple rules per second.`, `Modern expert systems were able to handle problems of great complexity in real time.`, `Modern expert systems can no longer adjust their recommendations based on new data.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Modern expert systems were able to handle problems of great complexity in real time.</p><p>The dramatic increase in processing power enabled expert systems to handle complex problems in real time, by allowing millions or even billions of calculations per second, and the ability to adjust recommendations dynamically based on new data.</p>` }
      ] },
    // ---------------- Hardware and Neural Network Influence ----------------
    { number: '91', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What are the two main forces that have been driving the transformation of expert systems in the last few decades?</p>`,
          options: [`Improvements in hardware and development of neural networks`, `The widespread use of the internet and the advent of blockchain technology`, `Migration to the cloud and introduction of 5G technology`, `Transition to digital transformation and utilization of big data`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Improvements in hardware and development of neural networks</p><p>The transformation of expert systems in the last few decades has been driven by the dramatic improvements in hardware and the development of adaptive, self-learning neural networks.</p>` }
      ] },
    { number: '92', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What was MYCIN, one of the early expert systems used for?</p>`,
          options: [`Diagnosing blood infections`, `Financial forecasting`, `Speech recognition`, `Weather prediction`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Diagnosing blood infections</p><p>MYCIN was an early expert system used for diagnosing blood infections, which was hosted on mainframes or large minicomputers.</p>` }
      ] },
    { number: '93', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What is Moore's Law as it relates to the development of expert systems?</p>`,
          options: [`The law that suggests the number of transistors on a computer chip would double approximately every two years.`, `The law that mandates limitations on processing speed in expert systems.`, `The law that dictates the cost of computer hardware will increase over time.`, `The law that compels hardware costs to remain constant.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The law that suggests the number of transistors on a computer chip would double approximately every two years.</p><p>Moore's Law was formulated by Gordon Moore, the co-founder of Intel. It states that the number of transistors on a computer chip would double approximately every two years, resulting in an exponential increase in processing power. This phenomenon significantly impacted the development and capabilities of expert systems.</p>` }
      ] },
    { number: '94', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What capabilities can modern expert systems have thanks to the advancements in hardware and neural networks?</p>`,
          options: [`They allow for real-time decision making`, `They can handle noisy or incomplete data and still make accurate predictions`, `They can continuously learn and improve over time`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>Modern expert systems, thanks to advancements in hardware and neural networks, are capable of processing and reacting to live data at rapid speeds, reasoning with incomplete or noisy data to make accurate predictions, and continuously learning and improving their models and predictions over time.</p>` }
      ] },
    { number: '95', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes neural networks from early expert systems in terms of their learning process?</p>`,
          options: [`Neural networks follow a list of hard-coded IF-THEN rules.`, `Neural networks learn patterns and make predictions by adjusting weights based on the data they receive.`, `Neural networks require humans to spell out every rule for their functionality.`, `Neural networks are incapable of training themselves to recognize patterns.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Neural networks learn patterns and make predictions by adjusting weights based on the data they receive.</p><p>Unlike early expert systems that followed a list of hard-coded IF-THEN rules, neural networks learn patterns and make predictions by adjusting weights based on the data they receive. This allows them to train themselves to recognize patterns, make decisions, and predict outcomes without needing explicit programming for every situation.</p>` }
      ] },
    { number: '96', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What benefits do modern expert systems offer compared to traditional rule-based systems in handling incomplete or uncertain data?</p>`,
          options: [`Modern expert systems produce wrong outputs.`, `Modern expert systems require exact rules and precise inputs.`, `Modern expert systems cannot handle ambiguous behavior patterns.`, `Modern expert systems can still make accurate predictions with incomplete or ambiguous data.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Modern expert systems can still make accurate predictions with incomplete or ambiguous data.</p><p>Thanks to probabilistic reasoning and neural networks, modern expert systems can tackle noisy, incomplete, or ambiguous data and churn out reasonably accurate predictions, overcoming a limitation traditional rule-based systems had.</p>` }
      ] },
    { number: '97', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What is a key difference between rule-based systems and neural networks in handling new situations?</p>`,
          options: [`Rule-based systems can adapt without the need for reprogramming, while neural networks require manual rule-insertion.`, `Rule-based systems need manual programming for every scenario, while neural networks can adjust and learn from data.`, `Both rule-based systems and neural networks rely on manual rule-insertion for handling new situations.`, `Both rule-based systems and neural networks can adapt without the need for reprogramming.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Rule-based systems need manual programming for every scenario, while neural networks can adjust and learn from data.</p><p>Unlike rule-based systems, which require new rules to be manually inserted for new scenarios, neural networks are capable of adjusting and learning from the data they receive, therefore being able to adapt to new situations more effectively.</p>` }
      ] },
    { number: '98', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the impact of Moore’s Law on expert systems?</p>`,
          options: [`It made expert systems slower due to increase in transistor count.`, `It led to an exponential increase in processing power, making expert systems more efficient and affordable.`, `It reduced the memory capacity of expert systems.`, `It increased the costs of producing expert systems due to the use of more transistors.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It led to an exponential increase in processing power, making expert systems more efficient and affordable.</p><p>Moore’s Law, formulated by the co-founder of Intel, Gordon Moore, states that the number of transistors on computer chip would double approximately every two years. This has led to a consistent increase in processing power without a proportional increase in cost. Thus, not only have expert systems become faster and capable of handling more complex operations, they have also become more affordable. With this, running complex processes such as probabilistic reasoning and neural network training became feasible for a much wider audience.</p>` }
      ] },
    { number: '99', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a real-world application of expert systems' ability for real-time decision-making?</p>`,
          options: [`Monitoring congestion patterns in real time to adjust traffic light timings in smart city traffic management.`, `Adjusting temperature in a smart home.`, `Diagnosing diseases in healthcare.`, `Predicting stock market trends.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Monitoring congestion patterns in real time to adjust traffic light timings in smart city traffic management.</p><p>In the context, the real-time decision-making ability of expert systems is illustrated by the example of smart city traffic management systems. These systems monitor congestion patterns in real time and adjust traffic light timings or recommend alternative routes to drivers.</p>` }
      ] },
    { number: '100', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What was a significant obstacle to the wider implementation of expert systems in the late 20th century?</p>`,
          options: [`Unavailability of adequate software`, `Resistance from human workers`, `High costs and slow processing speeds of computing hardware`, `Lack of academic research on expert systems`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — High costs and slow processing speeds of computing hardware</p><p>In the 1980s, the costs of computing hardware were quite high and their processing speeds were limited. This posed a significant barrier to the wider application of expert systems.</p>` }
      ] },
    { number: '101', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What key advantage does a neural network have over a rule-based system when a new condition or variable is introduced?</p>`,
          options: [`Neural networks require new rules to be manually written and inserted by human programmers.`, `Neural networks can simply be retrained by feeding it new examples.`, `Neural networks cannot adapt to new conditions or variables.`, `Neural networks adapt slower than rule-based systems to new conditions or variables.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Neural networks can simply be retrained by feeding it new examples.</p><p>Neural networks have the ability to learn from new data, thus when a new condition or variable is introduced, they can adapt by simply being retrained with newer examples. This makes them more flexible and adaptable compared to rule-based systems, which would require new rules to be manually written and inserted by human programmers.</p>` }
      ] },
    { number: '102', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What approach do modern expert systems use to ensure the necessity of transparency and adherence to regulations while still being adaptable?</p>`,
          options: [`They resort solely to rule-based logic.`, `They rely entirely on adaptive machine learning techniques.`, `They use a hybrid approach, blending traditional rule-based logic with adaptive machine learning techniques.`, `They switch between rule-based and machine learning models depending on the data being processed.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They use a hybrid approach, blending traditional rule-based logic with adaptive machine learning techniques.</p><p>Modern expert systems use a hybrid approach that combines traditional rule-based logic with adaptive machine learning techniques. This allows for the enforcement of critical regulations and the flexibility for the system to adapt, predict, and improve.</p>` }
      ] },
    { number: '103', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What is the reason neural networks are more efficient than rule-based systems when dealing with evolving conditions?</p>`,
          options: [`Neural networks can simply be retrained with new examples without needing to rewrite rules.`, `Updating neural networks requires human intervention through manual programming.`, `Neural networks use hard-coded IF-THEN rules which can handle changing conditions more efficiently.`, `Rule-based systems are naturally adaptable to new variables and thus, do not have an advantage over neural networks.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Neural networks can simply be retrained with new examples without needing to rewrite rules.</p><p>Unlike rule-based systems that require manual creation and insertion of new rules whenever a new variable is introduced, neural networks can easily adapt to new data by being retrained with updated examples. The network adjusts its internal weight based on the new data, eliminating the need for rule rewriting.</p>` }
      ] },
    { number: '104', marks: 1, layout: 0, section: 'Hardware and Neural Network Influence',
      items: [
        { type: 'mcq',
          question: `<p>What was a clear difference between expert systems in the 1980s and systems in 2025, regarding processing speed and computational capabilities?</p>`,
          options: [`Systems in the 80s were able to check approximately 1 million rules per second, whereas in 2025 they could perform more than 10 million probabilistic evaluations per second.`, `Systems in the 80s and in 2025 had the same processing speed and computational capabilities.`, `Systems in the 80s were able to perform approximately 1,000 rule checks per second, while systems in 2025 could perform over 10 million probabilistic evaluations per second.`, `Systems in the 80s could perform over 10 million probabilistic evaluations per second, while systems in 2025 could only execute around 1,000 rule checks per second.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Systems in the 80s were able to perform approximately 1,000 rule checks per second, while systems in 2025 could perform over 10 million probabilistic evaluations per second.</p><p>The article highlights the enormous leap in processing capabilities, allowing modern systems to perform more than 10 million probabilistic evaluations per second compared to the 1980s' systems that could only execute around 1,000 rule checks per second.</p>` }
      ] },
    // ---------------- Impact of Webometrics ----------------
    { number: '105', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What reasoning method did early expert systems use when making decisions?</p>`,
          options: [`Probabilistic reasoning`, `Inductive reasoning`, `Deductive reasoning`, `Deterministic reasoning`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Deterministic reasoning</p><p>In the early days of expert systems, decision-making was based on deterministic reasoning where systems assumed that if certain conditions were met, the outcome was guaranteed and unambiguous.</p>` }
      ] },
    { number: '106', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What is the main difference between the early expert systems and modern ones as presented in the text?</p>`,
          options: [`The early expert systems relied heavily on human intervention for updates, while modern ones can automatically update.`, `Modern expert systems are not as efficient as the early ones.`, `Early expert systems utilized webometrics while modern ones don't.`, `Early systems and modern systems work in the exact same way.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The early expert systems relied heavily on human intervention for updates, while modern ones can automatically update.</p><p>According to the text, early expert systems relied on information that had to be manually created and hard-coded into the system by a human, while modern expert systems, with the help of webometrics, can continuously and automatically update their knowledge bases.</p>` }
      ] },
    { number: '107', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What was a primary challenge of early "static" expert systems?</p>`,
          options: [`They could not monitor live information streams across the web.`, `They could adjust their internal models without human intervention.`, `They adapted rapidly to changes in financial markets or cybersecurity.`, `They could pull real-time data from trusted sources automatically.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They could not monitor live information streams across the web.</p><p>Early expert systems were static, meaning they could not adapt or change unless humans manually intervened. They could not monitor live information streams or automatically adjust their internal models - these are features of modern expert systems.</p>` }
      ] },
    { number: '108', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>How did early expert systems make decisions?</p>`,
          options: [`Based on fluid algorithms`, `Through real-time data analysis`, `Utilizing dynamic computations`, `Using hardcoded, static rules`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Using hardcoded, static rules</p><p>Early expert systems made decisions using hardcoded, static rules.</p>` }
      ] },
    { number: '109', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What are the key technologies that enable modern expert systems to handle probabilities instead of absolutes?</p>`,
          options: [`Linear Regression and Neural Networks`, `Neural Networks and Bayesian Inference`, `Bayesian Inference, Decision Trees and Neural Networks`, `Decision Trees and Support Vector Machine`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Bayesian Inference, Decision Trees and Neural Networks</p><p>Modern expert systems handle probabilities through various technologies and techniques, including Bayesian Inference, Decision Trees, and Neural Networks as mentioned in the text.</p>` }
      ] },
    { number: '110', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What helped revolutionise the way information could be gathered and used by expert systems?</p>`,
          options: [`The invention of the Internet`, `The rise of artificial intelligence (AI)`, `The invention and rapid spread of the World Wide Web in the 1990s and the development of webometrics`, `The development of robotics`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The invention and rapid spread of the World Wide Web in the 1990s and the development of webometrics</p><p>Webometrics enabled the quantitative analysis of internet-based information allowing expert systems to move beyond manually coded knowledge and start accessing and analysing live data streams.</p>` }
      ] },
    { number: '111', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What revolutionary solution enabled the evolution of static expert systems to adaptive expert systems?</p>`,
          options: [`The introduction of quantum computing`, `The decline of manual updating`, `The rise of webometrics`, `The development of better manual reviewing methods`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The rise of webometrics</p><p>The rise of webometrics allowed expert systems to monitor live information streams across the web, identify new trends and adapt their internal models without human intervention. This led to the creation of adaptive expert systems.</p>` }
      ] },
    { number: '112', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What was a significant shortcoming of the early "static" expert systems?</p>`,
          options: [`They could only handle probabilities, not absolutes`, `They could make decisions based on knowledge gathered over time`, `They could only make decisions based on predefined rules`, `They could adapt to new information and situations`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They could only make decisions based on predefined rules</p><p>Early expert systems, also known as "static" expert systems, could only make decisions based on predefined rules and were not designed to learn from new information or adjust to changes.</p>` }
      ] },
    { number: '113', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>In early expert systems, what kind of problem arose due to the use of deterministic reasoning?</p>`,
          options: [`There was an overflow of information for the systems to handle.`, `The systems performed better in structured environments but struggled with ambiguity or incomplete information.`, `The systems became obsolete quickly due to rapid technological advancements.`, `The systems avoided making absolute predictions, leading to inconsistent outcomes.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The systems performed better in structured environments but struggled with ambiguity or incomplete information.</p><p>Early expert systems using deterministic reasoning had issues with coping with ambiguous or incomplete information. Such systems worked well in structured environments, where relationships between causes and effects were clear and stable. However, in more complex scenarios with overlapping symptoms, missing data, and randomness, deterministic reasoning often struggled.</p>` }
      ] },
    { number: '114', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What was a key limitation of expert systems in the early generations during the 1970s and 1980s?</p>`,
          options: [`Expert systems could not analyse big data volumes.`, `Expert systems were difficult to code using available programming languages.`, `Every rule, fact, or decision strategy the system used had to be manually created and hard-coded into the system.`, `Expert systems lacked the processing power to make accurate predictions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Every rule, fact, or decision strategy the system used had to be manually created and hard-coded into the system.</p><p>According to the text, one of the greatest limitations of early expert systems was the manual creation and hard-coding of every rule, fact, or decision strategy used by the system.</p>` }
      ] },
    { number: '115', marks: 1, layout: 0, section: 'Impact of Webometrics',
      items: [
        { type: 'mcq',
          question: `<p>What are some of the technologies that facilitate continuous learning in modern expert systems?</p>`,
          options: [`Machine Learning Models`, `Online Learning Algorithms`, `Web Crawlers and Real-Time APIs`, `All of the above`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above</p><p>All of the listed technologies, Machine Learning Models, Online Learning Algorithms, Web Crawlers and Real-Time APIs, facilitate in providing continuous learning to modern expert systems by constantly updating their knowledge and adapting to new patterns and threats.</p>` }
      ] },
    // ---------------- Emerging User Needs ----------------
    { number: '116', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What is one key distinction between the Internet of Things (IoT) and the Internet of Me (IoMe)?</p>`,
          options: [`IoMe only uses personal data, while IoT uses non-personal data.`, `IoT primarily focuses on personalizing experiences for individuals, while IoMe focuses on connecting devices.`, `IoMe shifts the focus from connecting devices to personalising experiences for individuals, whereas IoT primarily links physical objects.`, `IoMe and IoT are essentially the same, they both aim to link physical objects.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — IoMe shifts the focus from connecting devices to personalising experiences for individuals, whereas IoT primarily links physical objects.</p><p>The key distinction between IoT and IoMe is that while IoT primarily focuses on linking physical objects, IoMe moves the focus towards personalising experiences for each individual.</p>` }
      ] },
    { number: '117', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What differentiates Industry 4.0 from previous industrial revolutions?</p>`,
          options: [`Industry 4.0 focuses on mechanization`, `Industry 4.0 is all about mass production`, `Industry 4.0 emphasizes on digital computing`, `Industry 4.0 integrates smart technologies, connecting physical production with intelligent digital systems in real-time`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Industry 4.0 integrates smart technologies, connecting physical production with intelligent digital systems in real-time</p><p>Unlike previous industrial revolutions which focused on mechanization, mass production, and digital computing, Industry 4.0 interfaces physical production with intelligent digital systems in real time. It makes industries self-optimising, adaptive, and predictive using Robotics and Automation, AI, Big Data Analytics, Cloud Computing, IoT, and Expert Systems.</p>` }
      ] },
    { number: '118', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of expert systems within the Internet of Things (IoT) ecosystem?</p>`,
          options: [`They are used to manually process, analyze, and respond to data produced by IoT systems in real-time.`, `They write the programming for all IoT devices.`, `They transmit all data from IoT sensors.`, `They analyze real-time data, detect patterns, and make automated decisions based on pre-programmed rules and adaptive learning.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — They analyze real-time data, detect patterns, and make automated decisions based on pre-programmed rules and adaptive learning.</p><p>Within the IoT ecosystem, expert systems analyze data coming from sensors, detect patterns, anomalies, or trends in the data and make decisions based on pre-programmed rules and adaptive learning. They automate the decision-making process as human operators cannot manually process, analyse, and respond to the enormous amount of data produced by IoT systems in real-time. This is especially essential in situations requiring immediate response times or managing thousands of data points at once.</p>` }
      ] },
    { number: '119', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What primary role do expert systems play in the Internet of Me (IoMe)?</p>`,
          options: [`Expert systems act as data collectors, gathering personal data from various devices.`, `Expert systems create meaningless floods of personal data.`, `Expert systems make decisions to create personalised experiences for each user based on their personal data.`, `Expert systems connect with physical objects to enhance user experience.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Expert systems make decisions to create personalised experiences for each user based on their personal data.</p><p>Expert systems within IoMe analyse individual personal data, identify patterns and apply decision rules to customize services thereby creating meaningful, personalized experiences for each user.</p>` }
      ] },
    { number: '120', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What are the primary components involved in Industry 4.0?</p>`,
          options: [`Robotics and Automation, Artificial Intelligence, Big Data Analytics, Cloud Computing, IoT, Expert Systems.`, `Mass production, digital computing, expert systems.`, `Analytical tools, predictive maintenance, quality control automation.`, `Customer insights, digital marketing, service operations and outsourcing.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Robotics and Automation, Artificial Intelligence, Big Data Analytics, Cloud Computing, IoT, Expert Systems.</p><p>Industry 4.0 involves the integration of digital and physical technologies such as robotics and automation, artificial intelligence, big data analytics, cloud computing, Internet of Things (IoT), and expert systems.</p>` }
      ] },
    { number: '121', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>Why are expert systems crucial for IoT efficacy and efficiency?</p>`,
          options: [`Expert systems allow more aesthetically pleasing device designs.`, `Expert systems give the IoT objects the ability to collect, send and receive data.`, `Expert systems enable automated decision-making and data interpretation, providing immediate response times assigned for certain tasks.`, `Expert systems increase the cost but improve the performance of the IoT ecosystem.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Expert systems enable automated decision-making and data interpretation, providing immediate response times assigned for certain tasks.</p><p>Expert systems are essential for the IoT as they emulate human decision-making abilities, enabling an automated interpretation of data and response, which is crucial given the enormous amount of data produced by IoT systems. This is especially important for applications that require immediate responses or manage vast amounts of data points at once.</p>` }
      ] },
    { number: '122', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>How does the IoMe use expert systems to personalize user experiences?</p>`,
          options: [`Expert systems are used to pair devices with users based on personal data.`, `Expert systems use personal data to identify patterns and apply decision rules for customization.`, `Expert systems only work on data provided directly by the user.`, `Expert systems create random experiences in order to identify user preferences.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Expert systems use personal data to identify patterns and apply decision rules for customization.</p><p>The IoMe uses expert systems to collect personal data from various sources, identify patterns (such as user behavior and preferences), and apply decision rules or adaptive models to tailor services specifically for each user.</p>` }
      ] },
    { number: '123', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>How do expert systems contribute to Industry 4.0?</p>`,
          options: [`They interpret data streams from machines, sensors, and production units.`, `They manually control machinery settings.`, `They sort and categorize data for human interpretation.`, `They do not contribute to Industry 4.0.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They interpret data streams from machines, sensors, and production units.</p><p>Expert systems within Industry 4.0 act as intelligent decision-makers by interpreting massive data streams from machines, sensors, and production units, recognising patterns indicating faults or optimisation opportunities, and making real-time decisions.</p>` }
      ] },
    { number: '124', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of the expert system in the IoT-based farming case study involving Peloris and Telstra?</p>`,
          options: [`It adjusts watering schedules based on weather forecasts.`, `It oversees the installation of the equipments.`, `It processes manual data input from farmers.`, `It maintains the funtionality of Telstra's network.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It adjusts watering schedules based on weather forecasts.</p><p>The expert system's role in the Peloris and Telstra case study is to constantly process information and make intelligent recommendations or automated decisions like adjusting watering schedules based on weather forecasts.</p>` }
      ] },
    { number: '125', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What is the sequence of steps in which IoT and Expert Systems work together in managing farm data?</p>`,
          options: [`Collection, Transmission, Decision Making, Pattern Detection, Adaptation`, `Collection, Transmission, Pattern Detection, Decision Making, Adaptation`, `Collection, Decision Making, Transmission, Pattern Detection, Adaptation`, `Collection, Pattern Detection, Transmission, Decision Making, Adaptation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Collection, Transmission, Pattern Detection, Decision Making, Adaptation</p><p>The IoT system collects data which is transmitted to the central server. Expert systems detect patterns based on this data and make decisions accordingly. Over time, the system adapts to changes.</p>` }
      ] },
    { number: '126', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>What are the ways in which expert systems contribute to Industry 4.0?</p>`,
          options: [`By interpreting massive data streams from machines, sensors, and production units.`, `By making real-time recommendations or triggering automated actions without human intervention.`, `By recognising patterns that indicate faults, inefficiencies, or opportunities for optimisation.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above.</p><p>Expert systems play a crucial role in Industry 4.0 by interpreting data, recognising patterns for optimization and making real-time decisions, all of which contribute to enhancing industrial operations and efficiencies.</p>` }
      ] },
    { number: '127', marks: 1, layout: 0, section: 'Emerging User Needs',
      items: [
        { type: 'mcq',
          question: `<p>How does Spotify's "Discover Weekly" utilize IoMe and expert systems?</p>`,
          options: [`It uses personal listening data and cross-user pattern detection to recommend new songs.`, `It uses social media data to recommend songs based on what you've liked or shared.`, `It uses the browsing history on your device to recommend songs based on your internet activity.`, `It uses demographic data to determine what songs might be popular in your age group or region.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It uses personal listening data and cross-user pattern detection to recommend new songs.</p><p>Spotify's "Discover Weekly" uses personal listening data and cross-user patterns to recommend new songs. This is a key example of IoMe and expert systems in action.</p>` }
      ] },
    // ---------------- Intelligent Agents & Search Interaction ----------------
    { number: '128', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What is the main function of the simplistic intelligent agent in predictive search?</p>`,
          options: [`To update itself over time without human intervention`, `To analyze new patterns in search queries`, `To match user input to known search patterns`, `To provide creative and new search queries`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To match user input to known search patterns</p><p>Simplistic intelligent agents in predictive search mainly match user input to known search patterns. This is done following pre-programmed rules and they do not dynamically adapt or learn new patterns without human intervention.</p>` }
      ] },
    { number: '129', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What is the process of interpreting human speech into text by intelligent assistant known as?</p>`,
          options: [`Semantic Analysis`, `Natural Language Processing`, `Automatic Speech Recognition`, `Voice Activity Detection`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Automatic Speech Recognition</p><p>Automatic Speech Recognition (ASR) is the system used by voice assistants like Siri, Alexa, and Google Assistant to convert spoken words into written text.</p>` }
      ] },
    { number: '130', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What is the cycle of key abilities demonstrated by an intelligent agent?</p>`,
          options: [`Act ➔ Learn ➔ Perceive ➔ Think`, `Think ➔ Perceive ➔ Learn ➔ Act`, `Perceive ➔ Think ➔ Act ➔ Learn`, `Learn ➔ Act ➔ Think ➔ Perceive`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Perceive ➔ Think ➔ Act ➔ Learn</p><p>An intelligent agent typically demonstrates a cycle of key abilities: Perceive ➔ Think ➔ Act ➔ Learn, which mirrors basic human decision-making.</p>` }
      ] },
    { number: '131', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of the wake word detection in speech recognition process?</p>`,
          options: [`It activates the assistant when a specific word or phrase is heard.`, `It converts spoken words into written text.`, `It helps to analyse the meaning of the user's request.`, `It transcribes the neural speech into digital format.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It activates the assistant when a specific word or phrase is heard.</p><p>The process of detecting a specific trigger phrase to activate the assistant is called wake word detection. It allows the assistant to stay dormant and conserve resources until it hears its specific trigger.</p>` }
      ] },
    { number: '132', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What advantages does predictive search offer to users?</p>`,
          options: [`Improves speed and accuracy.`, `Enhances user experience.`, `Both A and B.`, `None of the above.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Both A and B.</p><p>Predictive search improves speed as users type less, enhances accuracy as users find the correct query faster, and enhances user experience as users discover helpful search topics they may not have considered.</p>` }
      ] },
    { number: '133', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What technology does a predictive search engine use to make suggestions?</p>`,
          options: [`Auto-complete systems and machine learning`, `Search frequency analysis and human manual input`, `Modern search engines and simplistic intelligent agents`, `Repetitive decision-making tasks and trending searches`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Auto-complete systems and machine learning</p><p>Predictive search engines use auto-complete systems to match prefixes to full search phrases, and machine learning to adapt suggestions based on broader patterns like trending searches, geographic location, and recent events.</p>` }
      ] },
    { number: '134', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What are the key abilities demonstrated by an intelligent agent?</p>`,
          options: [`Perception, Reasoning, Action, and Learning`, `Hearing, Speaking, Thinking, and Interpreting`, `Imagining, Conceptualizing, Processing, and Creating`, `Moving, Understanding, Interacting, and Predicting`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Perception, Reasoning, Action, and Learning</p><p>An intelligent agent typically demonstrates key abilities such as Perception (gathers data from the environment, e.g., user inputs), Reasoning (processes information using rules or learned models), Action (responds, recommends, or completes tasks), and Learning (adapts behavior based on experience or new inputs).</p>` }
      ] },
    { number: '135', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What components of an intelligent agent enable it to understand and appropriately respond to the command "Remind me to call Mum at 6pm"?</p>`,
          options: [`Audio Capture and Automatic Transcription`, `Wake Word Detection and Preprocessing`, `Speech-to-Text and Natural Language Processing`, `Acoustic Model and Pronunciation Model`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Speech-to-Text and Natural Language Processing</p><p>To understand and respond to the command "Remind me to call Mum at 6pm", the intelligent agent first converts the spoken words into written text through the Speech-to-Text (STT) process, and then uses Natural Language Processing (NLP) to analyze the meaning of the request, extract entities (like names, dates, and times), and classify the user's intent.</p>` }
      ] },
    { number: '136', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>What features allow an intelligent agent to simulate human-like decision-making processes?</p>`,
          options: [`Perception, Reasoning, Action, and Learning`, `Perception, Listening, Response, and Unlearning`, `Scanning, Reasoning, Eliminating, and Understanding`, `Seeing, Thinking, Acting, and Reacting`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Perception, Reasoning, Action, and Learning</p><p>An intelligent agent typically demonstrates key abilities such as Perception, Reasoning, Action, and Learning which allows it to simulate human-like decision-making processes.</p>` }
      ] },
    { number: '137', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>How does predictive search enhance the user experience?</p>`,
          options: [`By learning or adapting without human intervention.`, `By enabling users to type less, find the correct query faster, and discover helpful search topics.`, `By analysing new patterns and updating over time.`, `By re-learning user habits and creative new queries.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By enabling users to type less, find the correct query faster, and discover helpful search topics.</p><p>Predictive search improves the user experience by reducing the amount of typing necessary, accelerating the process of finding the right query, and suggesting useful search topics that the user may not have considered.</p>` }
      ] },
    { number: '138', marks: 1, layout: 0, section: 'Intelligent Agents & Search Interaction',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following components is used to convert speech to text in intelligent assistants like Siri, Alexa, and Google Assistant?</p>`,
          options: [`Automatic Voice Recognition (AVR)`, `Automatic Speech Recognition (ASR)`, `Speech-to-Script Recognition (SSR)`, `Audio-to-Text Conversion (ATC)`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Automatic Speech Recognition (ASR)</p><p>In the speech recognition process, the spoken words are converted into written text by the Automatic Speech Recognition (ASR) system. This system might also be referred to as Speech-to-Text (STT).</p>` }
      ] },
    // ---------------- Inference Techniques: Truth Maintenance & Hypothetical Reasoning ----------------
    { number: '139', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the main function of a Truth Maintenance System (TMS)?</p>`,
          options: [`To ensure a conclusion once drawn is treated as permanent`, `To actively manage the web of dependencies between facts and conclusions adjusting if evidence changes`, `To enable expert systems to diagnose car engine issues`, `To store all facts, assumptions, and conclusions in a database`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To actively manage the web of dependencies between facts and conclusions adjusting if evidence changes</p><p>A TMS addresses the issue of dynamic real-world environments by actively managing the dependencies between facts and conclusions. If a foundational piece of evidence changes or is invalidated, the TMS automatically revises or retracts any conclusions that depended on that evidence.</p>` }
      ] },
    { number: '140', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of hypothetical reasoning in intelligent systems?</p>`,
          options: [`To discard all known facts and start from scratch`, `To permanently alter the knowledge base with every possible scenario`, `To simulate and reason about different possible scenarios without permanently changing their knowledge database`, `To ensure that the system always makes decisions without any uncertainty`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To simulate and reason about different possible scenarios without permanently changing their knowledge database</p><p>Hypothetical reasoning enables systems to simulate and reason about multiple "what-if" scenarios without permanently altering their knowledge database, allowing them to evaluate various strategies, prepare for contingencies or simulate potential futures without committing prematurely to any one pathway.</p>` }
      ] },
    { number: '141', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What function does the rollback mechanism serve in hypothetical reasoning systems?</p>`,
          options: [`It allows the system to add new assumptions to the knowledge base.`, `It allows the system to permanently commit to one course of action.`, `It allows the system to discard temporary assumptions and return to its original knowledge state.`, `It allows the system to generate different "what if" scenarios.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows the system to discard temporary assumptions and return to its original knowledge state.</p><p>The rollback mechanism is crucial in hypothetical reasoning systems as it allows the system to discard any temporary assumptions once the exploration of a scenario has finished or if new real-world information contradicts the hypothetical scenarios, thereby returning the system to its original state of knowledge. This prevents corruption of the system's permanent knowledge base.</p>` }
      ] },
    { number: '142', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the main difference between a Justification-Based Truth Maintenance System (JTMS) and an Assumption-Based Truth Maintenance System (ATMS)?</p>`,
          options: [`An ATMS maintains only one belief set while a JTMS tracks multiple sets of beliefs based on different assumptions.`, `A JTMS stores every belief alongside a list of justifications whereas an ATMS tracks multiple sets of beliefs based on different assumptions.`, `An ATMS maintains a justification network while a JTMS tracks the set of known facts.`, `A JTMS operates manually while an ATMS functions automatically.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A JTMS stores every belief alongside a list of justifications whereas an ATMS tracks multiple sets of beliefs based on different assumptions.</p><p>A Justification-Based TMS (JTMS), stores every belief with the list of facts or assumptions that support it. When these justifications are invalidated, the JTMS retracts the belief. An Assumption-Based TMS (ATMS) on the other hand, tracks multiple sets of beliefs based on different assumptions which is useful for hypothetical or exploratory reasoning where different scenarios are considered simultaneously.</p>` }
      ] },
    { number: '143', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>How does a Justification-Based Truth Maintenance System (JTMS) respond when a crucial fact or assumption supporting a belief is invalidated?</p>`,
          options: [`It keeps the belief intact till the entire system is manually reset or reprogrammed.`, `It automatically retracts the belief.`, `It investigates other potential causes that could support the belief.`, `It duplicates the entire reasoning chains.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It automatically retracts the belief.</p><p>A JTMS actively manages the web of dependencies between facts and beliefs. If any of these justifications are invalidated, the JTMS immediately revises or retracts the associated belief, functioning on a causal logic basis where if the cause disappears, so does the effect.</p>` }
      ] },
    { number: '144', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the major advantages of using hypothetical reasoning in decision-making systems?</p>`,
          options: [`It allows for decision-making despite having incomplete or changing information.`, `It reduces the need for the system to collect real-world data.`, `It allows for decision-making without any assumptions or "what-if" scenarios.`, `It ensures that every decision made by the system is accurate and without risk.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It allows for decision-making despite having incomplete or changing information.</p><p>Hypothetical reasoning allows a system to assume certain facts temporarily and explore the consequences of those assumptions. This can be particularly useful when the system doesn't have complete or constantly changing information but still needs to make decisions.</p>` }
      ] },
    { number: '145', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the key use of 'Branching' in hypothetical reasoning systems?</p>`,
          options: [`Branching is used to integrate new real-world information without altering the base knowledge.`, `Each branch from the branch represents different possible futures or assumed worlds, forming separate paths of reasoning.`, `Branching is the implementation of the rollback mechanism that discards false assumptions and irrelevant conclusions.`, `Branching is used to prevent the corruption of permanent knowledge by carefully separating it from temporary assumptions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Each branch from the branch represents different possible futures or assumed worlds, forming separate paths of reasoning.</p><p>In hypothetical reasoning system, branching refers to every hypothetical assumption leading to a distinct path of reasoning. Each branch signifies a different possible future or a different assumed world, allowing for simultaneous exploration of multiple potential outcomes.</p>` }
      ] },
    { number: '146', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of a Truth Maintenance System (TMS) in real-world applications like autonomous robotics or medical diagnostic systems?</p>`,
          options: [`A TMS in these applications simply provides a set of static conclusions using traditional logic systems.`, `A TMS helps these systems adapt and adjust their beliefs in real time based on changes in the environment or new information.`, `A TMS aids these applications in overlooking dynamic changes and sticking to initial assumptions.`, `A TMS works as a retrieval system for previously programmed information.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A TMS helps these systems adapt and adjust their beliefs in real time based on changes in the environment or new information.</p><p>A TMS enables real-world applications to maintain logical consistency without manual intervention. This feature helps adapt quickly to changes in the environment or emergence of new information by revising beliefs and conclusions, emulating the process of human reasoning based on new learnings.</p>` }
      ] },
    { number: '147', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is a major benefit of using a Truth Maintenance System (TMS) in a dynamic real-world environment?</p>`,
          options: [`TMS allows for a constant expansion of knowledge without the ability to decrease.`, `TMS validates the conclusions based on the available facts and they become permanently true.`, `TMS manages dependencies between facts and conclusions, revising or retracting conclusions if foundational evidence changes.`, `TMS needs manual intervention to maintain logical consistency.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — TMS manages dependencies between facts and conclusions, revising or retracting conclusions if foundational evidence changes.</p><p>A TMS can manage the web of dependencies between facts and conclusions, automatically revising or retracting any conclusions that depended on invalidated or changed evidence. This ability allows expert systems to maintain logical consistency without manual intervention.</p>` }
      ] },
    { number: '148', marks: 1, layout: 0, section: 'Inference Techniques: Truth Maintenance & Hypothetical Reasoning',
      items: [
        { type: 'mcq',
          question: `<p>What is the concept of 'Rollback' in the context of hypothetical reasoning?</p>`,
          options: [`It is the process of constructing different paths based on hypothetical assumptions.`, `It is the process of permanently adding the hypothetical assumption to the knowledge base.`, `It is the process of discarding the temporary assumptions and returning to the original knowledge state.`, `It is the process of committing to one particular hypothesis and rejecting all others.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It is the process of discarding the temporary assumptions and returning to the original knowledge state.</p><p>The concept of 'Rollback' in hypothetical reasoning refers to the critical mechanism that allows a system to undo or discard hypothetical assumptions post exploration of a scenario or when new real-world information arrives, thereby allowing the system to return to its original knowledge state.</p>` }
      ] },
    // ---------------- Heuristic Knowledge & Fuzzy Logic ----------------
    { number: '149', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is a heuristic in technical terms?</p>`,
          options: [`A perfect solution to any problem.`, `A shortcut method used to make decisions or find solutions faster, sacrificing some degree of accuracy or optimality for the sake of speed and efficiency.`, `The utilization of perfect mathematical proof to choose their next move.`, `The use of all possible options to reach the optimal solution.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A shortcut method used to make decisions or find solutions faster, sacrificing some degree of accuracy or optimality for the sake of speed and efficiency.</p><p>A heuristic is a shortcut method used to make decisions or find solutions faster, sacrificing some degree of accuracy or optimality for the sake of speed and efficiency. This is especially important in fields where the number of possible options explodes rapidly.</p>` }
      ] },
    { number: '150', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of heuristic-based inference in expert systems compared to exhaustive reasoning?</p>`,
          options: [`It provides more accurate results`, `It allows for more thorough checking of all possibilities`, `It speeds up the decision-making process by focusing on the most probable results first`, `It requires less computational resources`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It speeds up the decision-making process by focusing on the most probable results first</p><p>Heuristic-based inference in expert systems prioritize the most likely solutions, making the decision-making process faster compared to exhaustive reasoning, which checks every single possible outcome.</p>` }
      ] },
    { number: '151', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary advantage of using fuzzy logic instead of traditional logic systems?</p>`,
          options: [`Fuzzy logic is simpler and easier to implement than traditional logic.`, `Fuzzy logic allows "yes" or "no" decisions only.`, `Fuzzy logic supports degrees of truth, allowing for a wider range of responses.`, `Fuzzy logic restricts truth values to 0 or 1.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Fuzzy logic supports degrees of truth, allowing for a wider range of responses.</p><p>Unlike traditional logic systems that only allow for true or false responses, fuzzy logic permits degrees of truth. This makes it particularly useful when dealing with situations that involve uncertainty or subjective descriptions.</p>` }
      ] },
    { number: '152', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What are the three major steps in a fuzzy logic system?</p>`,
          options: [`Interpretation, application, execution`, `Preparation, operation, conclusion`, `Fuzzification, rule application, defuzzification`, `Analysis, computation, instantiation`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Fuzzification, rule application, defuzzification</p><p>In a fuzzy system, the basic process has three major steps: Fuzzification, Rule Application, and Defuzzification.</p>` }
      ] },
    { number: '153', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of heuristics in enterprise computing?</p>`,
          options: [`They allow systems to make decisions quickly and conveniently without evaluating every possible solution.`, `Heuristics allow systems to compute only the best possible solution, delivering the highest accuracy.`, `They increase the computational complexity of calculations.`, `They increase the time taken to reach decisions or find solutions.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They allow systems to make decisions quickly and conveniently without evaluating every possible solution.</p><p>The primary purpose of heuristics in enterprise computing is to simplify decision-making and reduce search time, particularly in complex scenarios, by suggesting "good enough" solutions without having to consider every possible outcome. This approach improves speed and efficiency, even though it may occasionally miss the perfect solution.</p>` }
      ] },
    { number: '154', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the main advantage of heuristic-based inference over exhaustive reasoning in expert systems?</p>`,
          options: [`It delivers more accurate results`, `It processes faster while considering most probable outcomes`, `It conducts a comprehensive checking of all possible rules`, `It deduces results without relying on any assigned confidences or rankings`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It processes faster while considering most probable outcomes</p><p>While exhaustive reasoning considers every single possible condition, rule, and outcome, it takes more time and computational resources which might not always be available. On the other hand, heuristic-based inference utilizes priority rules to consider the most likely solutions first, thereby offering a quicker reasoning process.</p>` }
      ] },
    { number: '155', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of a field where heuristic knowledge can be extremely useful due to the rapid growth of possible options?</p>`,
          options: [`Guitar-playing`, `Drawing`, `Pathfinding`, `Knitting`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Pathfinding</p><p>Pathfinding is an example where heuristics can be very helpful in managing limited computational resources due to the rapidly growing number of possible routes.</p>` }
      ] },
    { number: '156', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>How does fuzzy logic compare to traditional binary logic when dealing with uncertainty and complex situations?</p>`,
          options: [`Fuzzy logic is less effective than binary logic in handling uncertainty and complex situations.`, `Binary logic is more flexible and provides degrees of truth, unlike fuzzy logic.`, `Fuzzy logic permits degrees of truth and is more adaptable in handling uncertain and complex situations compared to binary logic.`, `Both binary logic and fuzzy logic are ineffective in dealing with uncertainty and complex situations.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Fuzzy logic permits degrees of truth and is more adaptable in handling uncertain and complex situations compared to binary logic.</p><p>Unlike binary logic, which is limited to true or false values, fuzzy logic allows for handling of uncertainty and complex situations by providing degrees of truth. This makes it more adaptable and suitable for real-world problems that often involve ambiguity and imprecisions.</p>` }
      ] },
    { number: '157', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>How is heuristic knowledge used in expert systems?</p>`,
          options: [`It is used to exhaustively check all possible rules or pathways.`, `It is used to guide the reasoning process efficiently by prioritizing certain rules based on likelihood or relevance.`, `It is not used in expert systems at all.`, `It ensures that the system can always provide entirely accurate solutions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is used to guide the reasoning process efficiently by prioritizing certain rules based on likelihood or relevance.</p><p>Heuristic knowledge is used in expert systems to allow it to prioritize certain rules or conclusions based on their likelihood of being important or relevant. This often leads to faster decision-making especially when there is incomplete or overwhelming information.</p>` }
      ] },
    { number: '158', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>Why are heuristics often used in fields where the number of possible options exponentially increases, such as pathfinding, scheduling, or complex games like chess?</p>`,
          options: [`Because they are always the most accurate solution.`, `They can provide a "good enough" solution within a reasonable time frame.`, `They always provide the perfect solution.`, `Because they allow for thorough analysis of all possible outcomes.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They can provide a "good enough" solution within a reasonable time frame.</p><p>By employing heuristic methods, a good enough solution can be obtained within a reasonable time frame. This is useful where exhaustive calculation of all possible outcomes would be impractical due to the excessive number of choices.</p>` }
      ] },
    { number: '159', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the main disadvantage of heuristic-based inference in expert systems?</p>`,
          options: [`It tends to overlook rare but critical outcomes.`, `It always produces a "perfect" solution.`, `It requires computational resources that aren't always available.`, `It focuses on exhaustive searches, considering every possible outcome.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It tends to overlook rare but critical outcomes.</p><p>Because heuristics prioritize efficiency and speed by focusing on highly probable outcomes, they may at times overlook rare but equally important possibilities, thus compromising the system's accuracy to some degree.</p>` }
      ] },
    { number: '160', marks: 1, layout: 0, section: 'Heuristic Knowledge & Fuzzy Logic',
      items: [
        { type: 'mcq',
          question: `<p>Why is fuzzy logic preferred over traditional logic systems for real-world problems?</p>`,
          options: [`Fuzzy logic cannot vary between 0 (false) and 1 (true).`, `Fuzzy logic only permits binary decisions.`, `Fuzzy logic supports responses like "mostly yes," "somewhat no," proving to be more flexible and adaptable.`, `Fuzzy logic systems are less efficient in complex scenarios.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Fuzzy logic supports responses like "mostly yes," "somewhat no," proving to be more flexible and adaptable.</p><p>Fuzzy logic is more flexible as it allows for degrees of truth, can interpret inputs that are not strictly black or white, and operates more efficiently in complex and uncertain environments, making it more suitable for modeling real-world problems.</p>` }
      ] },
    // ---------------- Ontology Classification ----------------
    { number: '161', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What is an ontology in the context of computing and artificial intelligence?</p>`,
          options: [`A list of terms related to computing and AI.`, `A programming language used in creating AI systems.`, `A formal representation of knowledge that defines types of entities, their characteristics and relationships.`, `A type of data storage system.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A formal representation of knowledge that defines types of entities, their characteristics and relationships.</p><p>In the world of AI, an ontology is a formal representation of knowledge — it defines the types of entities that exist in a particular domain, their characteristics, and how they relate to one another.</p>` }
      ] },
    { number: '162', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What is a characteristic of rule-based classification in inference engines?</p>`,
          options: [`It uses mathematical frameworks for classification.`, `It classifies based on probabilities.`, `It uses explicit "if-then" rules for classification.`, `It handles incomplete, contradictory, or uncertain information well.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It uses explicit "if-then" rules for classification.</p><p>Rule-based classification in inference engines happens using explicit "if-then" rules, whereas probabilistic classification bases its decisions on likelihoods and not certainties, and Description Logic (DL) reasoning uses a mathematical framework to classify concepts.</p>` }
      ] },
    { number: '163', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>How does a rule-based inference engine classify ontologies?</p>`,
          options: [`Using explicit "if-then" rules.`, `Based on chances and odds.`, `By formally defining concepts and then using logical reasoning to classify them.`, `Using algorithms and machine learning techniques.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Using explicit "if-then" rules.</p><p>Rule-based inference engines classify concepts by applying clear and explicit "if-then" rules. For instance, they might use the rule "if a vehicle has two wheels, then classify it as a motorcycle."</p>` }
      ] },
    { number: '164', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What are key elements of an ontology in AI and computing?</p>`,
          options: [`Items, Places, and People.`, `Values, Data, and Information.`, `Classes, Properties, and Relationships.`, `Facts, Opinions, and Arguments.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Classes, Properties, and Relationships.</p><p>In AI and computing, an ontology principally comprises Classes (or Concepts), Properties (or Attributes), and Relationships (or Links). These represent categories of things, details about these categories and connections between these categories respectively.</p>` }
      ] },
    { number: '165', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>Which type of inference engine uses a mathematical framework called Description Logic (DL)?</p>`,
          options: [`Rule-Based Classification Engine`, `Probabilistic Inference Engine`, `Description Logic Reasoning Engine`, `Decision Tree based Engine`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Description Logic Reasoning Engine</p><p>Description Logic Reasoning Engine uses Description Logic (DL), a mathematical framework that formally defines concepts and uses logical reasoning to automatically classify them.</p>` }
      ] },
    { number: '166', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of ontology classification in the context of AI systems?</p>`,
          options: [`To sort and classify colours used in AI systems`, `To group, organise, and label concepts within an ontology based on their properties and relationships`, `To predict future trends of AI systems`, `To manually categorise new products`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To group, organise, and label concepts within an ontology based on their properties and relationships</p><p>Ontology classification is all about grouping, organising, and labelling concepts within an ontology based on their properties and relationships. This process enables AI systems to reason intelligently and handle complex information efficiently.</p>` }
      ] },
    { number: '167', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of ontology classification in artificial intelligence systems?</p>`,
          options: [`It helps to generate random patterns and sequences.`, `It is the process of grouping, organising, and labelling concepts based on their properties and relationships.`, `It ensures the correct physical structure of a computer.`, `It manages the battery life of portable devices.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is the process of grouping, organising, and labelling concepts based on their properties and relationships.</p><p>The purpose of ontology classification is to categorize, organize, and label concepts based on their properties and relationships. With the help of logical reasoning, ontology classification determines how new or existing concepts fit into the overall structure of a system.</p>` }
      ] },
    { number: '168', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What technique does a probabilistic inference engine use to classify ontologies?</p>`,
          options: [`Probabilistic inference engines use strict yes/no rules for classification.`, `Probabilistic inference engines use a mathematical framework called Description Logic.`, `Probabilistic inference engines use explicit "if-then" rules for classification.`, `Probabilistic inference engines classify based on probabilities rather than certainties.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Probabilistic inference engines classify based on probabilities rather than certainties.</p><p>Probabilistic inference engines classify ontologies based on the likelihood of a concept being related to others. They do not use strict yes/no rules or description logic. Instead, these use models like Bayesian Networks and operate with degrees of belief.</p>` }
      ] },
    { number: '169', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What are the key elements of an ontology in the field of computing and artificial intelligence?</p>`,
          options: [`Algorithms, Data Structures, and Strings`, `Classes, Properties, and Relationships`, `Files, Operators, and Arrays`, `Pointers, Loops, and Statements`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Classes, Properties, and Relationships</p><p>In the context of computing and artificial intelligence, an ontology is comprised of Classes or Concepts (categories of things), Properties or Attributes (details about those classes), and Relationships or Links (connections between classes). These elements provide structure and meaning, enabling intelligent decision-making.</p>` }
      ] },
    { number: '170', marks: 1, layout: 0, section: 'Ontology Classification',
      items: [
        { type: 'mcq',
          question: `<p>What is a key characteristic of description logic reasoning used in some inference engines?</p>`,
          options: [`It uses strict yes/no rules.`, `It can handle incomplete, contradictory, or uncertain information better than rule-based engines.`, `It relies heavily on explicit "if-then" rules.`, `It uses probabilities to classify ontologies.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can handle incomplete, contradictory, or uncertain information better than rule-based engines.</p><p>Description Logic (DL) reasoning allows a system to formally define concepts and use logical reasoning to classify them. This approach is powerful as it can handle incomplete, contradictory, or uncertain information better than rule-based engines.</p>` }
      ] },
    // ---------------- Biometrics & Haptics in Intelligent Systems ----------------
    { number: '171', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT a typical step in a biometric system's process flow?</p>`,
          options: [`Sensor Capture`, `Feature Extraction`, `Identity Manipulation`, `Template Storage/Comparison`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Identity Manipulation</p><p>Identity Manipulation is not a typical step; biometric systems process captured data to verify or reject identity, without altering it.</p>` }
      ] },
    { number: '172', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary advantage of integrating haptics into expert systems in high-stakes environments?</p>`,
          options: [`It reduces the need for physical sensors.`, `It provides visual alerts to the user.`, `It enhances real-time decision feedback through physical sensations.`, `It increases the reliance on auditory alerts.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It enhances real-time decision feedback through physical sensations.</p><p>Haptics enhances real-time decision feedback by using physical sensations, which can improve learning and performance in high-stakes situations.</p>` }
      ] },
    { number: '173', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which biometric trait would be categorized under behavioral traits used for identity verification?</p>`,
          options: [`Fingerprints`, `Facial geometry`, `Gait`, `Iris patterns`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Gait</p><p>Gait, or walking style, is a behavioral trait used for identity verification in biometric systems.</p>` }
      ] },
    { number: '174', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>In which scenario could haptics replace traditional visual or auditory alerts to improve inclusivity and intuitiveness?</p>`,
          options: [`In quiet office spaces`, `In noisy factory environments`, `In a classroom setting`, `On a sports field`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — In noisy factory environments</p><p>Haptics can replace visual or auditory alerts in noisy factory environments, improving system inclusivity and intuitiveness.</p>` }
      ] },
    { number: '175', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a key reason why biometric authentication is effective for systems requiring non-transferable identity verification?</p>`,
          options: [`Biometric traits are intrinsic to the individual.`, `Biometric devices are more complex than other security systems.`, `Biometric systems are generally cheaper than alternatives.`, `Biometric systems do not require maintenance.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Biometric traits are intrinsic to the individual.</p><p>Biometric traits are unique and intrinsic to each individual, making them highly effective for identity verification that cannot be transferred or shared.</p>` }
      ] },
    { number: '176', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is one key benefit of integrating haptics into simulation-based learning environments?</p>`,
          options: [`It allows users to bypass physical training altogether.`, `It offers realistic, risk-free training experiences.`, `It replaces the need for visual and auditory feedback.`, `It simplifies the decision-making process for expert systems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It offers realistic, risk-free training experiences.</p><p>Haptics in simulation-based learning provides realistic and risk-free training experiences by simulating real-world physics and enforcing correct techniques.</p>` }
      ] },
    { number: '177', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following illustrates the use of multi-modal biometric fusion in expert systems?</p>`,
          options: [`A bank ATM using only a fingerprint scanner for transactions.`, `A gym entry system using retina recognition alone.`, `A military operation combining facial recognition, voiceprint, and fingerprint measurement.`, `An office door access system relying solely on an iris scan.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A military operation combining facial recognition, voiceprint, and fingerprint measurement.</p><p>Multi-modal biometric fusion involves using multiple biometric traits, such as facial recognition, voiceprint, and fingerprint, to enhance system accuracy and reliability.</p>` }
      ] },
    { number: '178', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How can haptic feedback enhance safety and efficiency in manufacturing and robotics environments?</p>`,
          options: [`By displaying visual warnings on-screen for the operator`, `By providing auditory alerts to indicate errors`, `By using vibrations or force feedback to physically nudge the operator`, `By automatically shutting down machines upon detecting errors`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By using vibrations or force feedback to physically nudge the operator</p><p>Haptic feedback improves safety and efficiency by physically nudging the operator through vibrations or force feedback to guide corrective actions.</p>` }
      ] },
    { number: '179', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes how biometric systems ensure secure authentication?</p>`,
          options: [`By storing passwords securely in databases.`, `By using physical keys that cannot be duplicated.`, `By comparing unique individual traits to stored profiles.`, `By implementing multi-factor authentication using security questions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By comparing unique individual traits to stored profiles.</p><p>Biometric systems authenticate users by capturing and comparing unique physical and behavioral traits to stored profiles.</p>` }
      ] },
    { number: '180', marks: 1, layout: 0, section: 'Biometrics & Haptics in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What role does haptic feedback play in expert systems designed for high-risk environments?</p>`,
          options: [`Allows systems to provide visual-only alerts`, `Improves decision-making by simulating real-world physics`, `Acts as a closed-loop communication channel`, `Replaces auditory alerts with vivid imagery`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Acts as a closed-loop communication channel</p><p>Haptic feedback acts as a closed-loop communication channel, providing real-time physical cues to enhance decision-making in high-risk environments.</p>` }
      ] },
    // ---------------- Touch, Gesture, VR/AR in Intelligent Systems ----------------
    { number: '181', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a key benefit of gesture recognition in intelligent systems?</p>`,
          options: [`It requires physical contact to operate.`, `It allows interaction using natural body language.`, `It only works in bright light conditions.`, `It is only used for entertainment purposes.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows interaction using natural body language.</p><p>Gesture recognition permits interaction through natural body language, making it more intuitive and hygienic.</p>` }
      ] },
    { number: '182', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What role does Virtual Reality (VR) play in intelligent systems?</p>`,
          options: [`VR serves only as an entertainment platform.`, `VR provides an interface for users and simulates environments for data collection.`, `VR is used exclusively for gaming applications.`, `VR primarily processes data without user interaction.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — VR provides an interface for users and simulates environments for data collection.</p><p>In intelligent systems, VR functions as both the interface for user interaction and the environment for simulating, collecting, and analyzing data.</p>` }
      ] },
    { number: '183', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How does Augmented Reality (AR) transform intelligent systems in industrial maintenance scenarios?</p>`,
          options: [`By overlaying 3D animations and step-by-step instructions on machinery.`, `By replacing real machinery with virtual models.`, `By only providing textual data about machinery.`, `By preventing any interaction with the machinery.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By overlaying 3D animations and step-by-step instructions on machinery.</p><p>AR enhances intelligent systems by overlaying 3D animations and step-by-step instructions onto real-world machinery, aiding in maintenance tasks.</p>` }
      ] },
    { number: '184', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What role does a touchscreen play in a modern intelligent system?</p>`,
          options: [`It acts as a direct control interface for manual inputs.`, `It serves as a data collection interface for decision-making.`, `It is only used for displaying information.`, `It solely functions as an entertainment medium.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It serves as a data collection interface for decision-making.</p><p>In intelligent systems, touch input is utilized for collecting data which is essential for making decisions.</p>` }
      ] },
    { number: '185', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How do touch interfaces contribute to data-driven decision-making in intelligent systems?</p>`,
          options: [`They operate solely as display screens.`, `They serve as sensory organs capturing user intent and context.`, `They provide only tactile feedback without data collection.`, `They replace AI algorithms entirely in decision-making.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They serve as sensory organs capturing user intent and context.</p><p>Touch interfaces act as sensory organs for intelligent systems, capturing user intent and context which feeds into decision-making processes.</p>` }
      ] },
    { number: '186', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>In what way is gesture recognition particularly advantageous in sensitive settings like hospitals and industrial environments?</p>`,
          options: [`It allows for interaction without physical contact.`, `It provides a more detailed analysis of facial expressions.`, `It enhances the aesthetic design of devices.`, `It reduces the cost of intelligent systems.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It allows for interaction without physical contact.</p><p>Gesture recognition enables interaction without physical contact, which is beneficial for cleanliness and efficiency in sensitive settings.</p>` }
      ] },
    { number: '187', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How does Augmented Reality (AR) enhance the real world in intelligent systems?</p>`,
          options: [`By overlaying 3D models and instructions onto physical environments`, `By replacing the real world with a digital one`, `By providing only audio guidance without visual support`, `By removing digital content from the user’s view`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By overlaying 3D models and instructions onto physical environments</p><p>Augmented Reality (AR) enhances the real world by overlaying digital content, such as 3D models and instructions, onto physical environments.</p>` }
      ] },
    { number: '188', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How does VR serve as an interface in intelligent systems?</p>`,
          options: [`By using 2D screens and keyboards.`, `Through immersive 3D visual engagement.`, `By connecting directly to a user’s nervous system.`, `By using traditional mouse and click operations.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Through immersive 3D visual engagement.</p><p>VR serves as an interface through immersive 3D visual engagement, allowing users to interact with intelligent systems in a more intuitive and engaging way.</p>` }
      ] },
    { number: '189', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a practical application of haptic feedback in intelligent touchscreen systems?</p>`,
          options: [`Sending text messages quickly`, `Informing users of a successful login`, `Providing warnings for risky transactions`, `Changing display brightness automatically`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Providing warnings for risky transactions</p><p>Haptic feedback can provide a strong buzz as a warning signal for risky transactions, prompting users to reconsider their actions.</p>` }
      ] },
    { number: '190', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a critical component of gesture recognition in intelligent systems?</p>`,
          options: [`Detecting and tracking motion`, `Incorporating tactile feedback devices`, `Using large displays for visualization`, `Integrating voice recognition technology`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Detecting and tracking motion</p><p>Gesture recognition begins with detecting and tracking motion as part of interpreting gestures and triggering actions in intelligent systems.</p>` }
      ] },
    { number: '191', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What makes Virtual Reality (VR) an ideal platform for training simulations in intelligent systems?</p>`,
          options: [`VR allows users to interact with 2D visual displays.`, `VR uses screens and keyboards to enhance computer navigation.`, `VR enables motion-based engagement and real-time system adaptation.`, `VR provides audio tutorials for learning experiences.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — VR enables motion-based engagement and real-time system adaptation.</p><p>VR's capability for motion-based engagement and real-time system adaptation makes it an ideal platform for immersive training simulations.</p>` }
      ] },
    { number: '192', marks: 1, layout: 0, section: 'Touch, Gesture, VR/AR in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How does Augmented Reality (AR) contribute to decision-making in intelligent systems?</p>`,
          options: [`By providing a digital replacement of real-world environments`, `By displaying insights and guidance exactly where needed`, `By collecting user data without displaying it`, `By functioning without any intelligent system interaction`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By displaying insights and guidance exactly where needed</p><p>AR acts as a visual and spatial output layer, providing insights and guidance where the user needs them, enhancing decision-making.</p>` }
      ] },
    // ---------------- Voice, Microcontrollers ----------------
    { number: '193', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>What interface is commonly used for communication between the voice recognition module and the microcontroller in a voice-activated system?</p>`,
          options: [`Bluetooth`, `UART`, `Wi-Fi`, `Ethernet`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — UART</p><p>UART (Universal Asynchronous Receiver-Transmitter) is often used for serial communication between a voice recognition module and a microcontroller.</p>` }
      ] },
    { number: '194', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>What is one key advantage of using a microcontroller over a microprocessor in an embedded system?</p>`,
          options: [`Higher processing power`, `Greater data handling capacity`, `Lower power consumption`, `Easier external component integration`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Lower power consumption</p><p>Microcontrollers are designed for low-power applications with all components integrated, which optimizes power consumption compared to microprocessors.</p>` }
      ] },
    { number: '195', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of the Wake Word Detection stage in speech recognition systems?</p>`,
          options: [`To transcribe spoken language into text.`, `To identify and activate the assistant using a specific trigger phrase.`, `To convert sound waves into phonemes.`, `To analyze the meaning of the spoken input.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To identify and activate the assistant using a specific trigger phrase.</p><p>Wake Word Detection is responsible for identifying and activating the assistant using a specific trigger phrase like "Hey Siri" or "Alexa".</p>` }
      ] },
    { number: '196', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>Which model in the Automatic Speech Recognition system maps audio signals to phonemes?</p>`,
          options: [`Pronunciation Model`, `Language Model`, `Acoustic Model`, `NLP Model`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Acoustic Model</p><p>The Acoustic Model is responsible for mapping audio signals to phonemes.</p>` }
      ] },
    { number: '197', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of the SEN0539 Voice Recognition Sensor in a voice-activated system?</p>`,
          options: [`To capture and interpret voice commands`, `To act as the system’s processor, running logic and controlling outputs`, `To manage power supply to other components`, `To display recognized commands on a screen`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To capture and interpret voice commands</p><p>The SEN0539 Voice Recognition Sensor is used to capture and interpret voice commands.</p>` }
      ] },
    { number: '198', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a primary feature that distinguishes a microcontroller from a microprocessor?</p>`,
          options: [`Microcontrollers require external memory for operation.`, `Microcontrollers integrate processor and peripherals on a single chip.`, `Microcontrollers support extremely high computational power.`, `Microcontrollers are typically used in high-speed communication systems.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Microcontrollers integrate processor and peripherals on a single chip.</p><p>Microcontrollers integrate the processor and necessary peripherals on a single chip, making them suitable for low-power, compact applications.</p>` }
      ] },
    { number: '199', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>Which component of the speech recognition process helps determine the context and probable meaning of words within spoken input?</p>`,
          options: [`Wake Word Detection`, `Acoustic Model`, `Pronunciation Model`, `Language Model`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Language Model</p><p>The Language Model uses context to decide which word or phrase most likely matches the spoken input based on grammar, syntax, and probability.</p>` }
      ] },
    { number: '200', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>Which component in a microcontroller is responsible for converting analog signals to digital data?</p>`,
          options: [`Processor (CPU)`, `Timers/Counters`, `Analog-to-Digital Converters (ADC)`, `Input/Output Ports (I/O)`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Analog-to-Digital Converters (ADC)</p><p>The Analog-to-Digital Converter (ADC) in a microcontroller converts analog signals to digital data.</p>` }
      ] },
    { number: '201', marks: 1, layout: 0, section: 'Voice, Microcontrollers',
      items: [
        { type: 'mcq',
          question: `<p>In a voice-activated lighting system, which component is responsible for processing the "lights on" command received from the voice recognition module?</p>`,
          options: [`Voice recognition module`, `Arduino Uno R4`, `LED Traffic Light Module`, `Microphone`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Arduino Uno R4</p><p>The Arduino Uno R4, as the microcontroller, processes the command from the voice recognition module.</p>` }
      ] },
    // ---------------- Sensors, Actuators, Motors in Intelligent Systems ----------------
    { number: '202', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What type of actuator is used for converting electrical energy into linear mechanical motion?</p>`,
          options: [`Solenoid`, `Motor`, `Hydraulic Pump`, `Gearbox`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Solenoid</p><p>A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion.</p>` }
      ] },
    { number: '203', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which type of motor is typically used in applications requiring precise control over angle and movement, such as robotic arms and camera positioning?</p>`,
          options: [`DC Motors`, `Brushless DC Motors`, `Stepper Motors`, `Servo Motors`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Servo Motors</p><p>Servo motors provide precise control of angular or linear position, velocity, and acceleration, making them suitable for applications like robotic arms and camera positioning.</p>` }
      ] },
    { number: '204', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of a sensor in intelligent systems?</p>`,
          options: [`To convert digital signals into analog signals`, `To process and store data in electronic systems`, `To detect, measure, and convert physical phenomena into signals`, `To enable wireless communication between devices`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To detect, measure, and convert physical phenomena into signals</p><p>Sensors detect physical phenomena and convert them into interpretable signals for electronic systems.</p>` }
      ] },
    { number: '205', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of Automated Guided Vehicles (AGVs) in industrial environments?</p>`,
          options: [`To reduce the number of vehicles needed in warehouses.`, `To enhance operational efficiency and improve workplace safety.`, `To increase the speed at which materials are transported.`, `To replace human workers entirely in factories.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To enhance operational efficiency and improve workplace safety.</p><p>AGVs are designed to enhance operational efficiency and improve workplace safety by autonomously transporting materials.</p>` }
      ] },
    { number: '206', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What are the three main components involved in a fully operational intelligent system's feedback-driven loop?</p>`,
          options: [`Sensors, processors, actuators/motors`, `Memory, AI models, network communication`, `GPS, gyroscopes, ultrasonic sensors`, `CPU, GPU, microcontroller`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Sensors, processors, actuators/motors</p><p>The feedback-driven loop consists of sensing via sensors, thinking via processors, and acting via actuators/motors.</p>` }
      ] },
    { number: '207', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>In a smart drone system, what role does the flight controller play in the feedback-driven loop?</p>`,
          options: [`It detects obstacles and measures orientation.`, `It interprets sensor input and decides the flight path.`, `It converts electrical energy into movement.`, `It executes lift and camera adjustments.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It interprets sensor input and decides the flight path.</p><p>The flight controller is responsible for interpreting sensor input and making decisions about the flight path.</p>` }
      ] },
    { number: '208', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following technologies is used by Automated Guided Vehicles (AGVs) for safe navigation through their environment?</p>`,
          options: [`Magnetic strips`, `Hydraulic sensors`, `Pneumatic actuators`, `Thermal cameras`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Magnetic strips</p><p>Magnetic guidance is one of the navigation technologies used by AGVs, involving magnetic strips embedded in the ground to guide movement.</p>` }
      ] },
    { number: '209', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which type of motor uses electronic commutation instead of mechanical brushes to switch current in the windings?</p>`,
          options: [`DC Motor`, `Servo Motor`, `Stepper Motor`, `Brushless DC Motor`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Brushless DC Motor</p><p>A Brushless DC (BLDC) motor uses electronic commutation instead of mechanical brushes to switch current in the windings.</p>` }
      ] },
    { number: '210', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which type of actuator converts compressed air energy into linear motion?</p>`,
          options: [`Solenoid`, `Pneumatic Cylinder`, `Hydraulic Motor`, `Electric Motor`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Pneumatic Cylinder</p><p>A pneumatic cylinder converts compressed air energy into linear motion by utilizing a pressure differential across a piston.</p>` }
      ] },
    { number: '211', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which component in a sensor system is responsible for converting analog signals into digital signals for processing?</p>`,
          options: [`Digital Signal Processor`, `Analog-to-Digital Converter`, `Microcontroller`, `Photodiode`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Analog-to-Digital Converter</p><p>The Analog-to-Digital Converter (ADC) converts analog signals into digital signals for processing.</p>` }
      ] },
    { number: '212', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which actuator type operates on the principle of electromagnetism to generate linear motion?</p>`,
          options: [`Solenoid`, `Pneumatic Cylinder`, `Hydraulic Motor`, `Electric Stepper Motor`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Solenoid</p><p>A solenoid converts electrical energy into linear mechanical motion using the principle of electromagnetism.</p>` }
      ] },
    { number: '213', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which navigation system in Automated Guided Vehicles (AGVs) uses cameras and sensors to follow painted or taped lines?</p>`,
          options: [`Laser guidance`, `Magnetic guidance`, `Optical guidance`, `GPS guidance`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Optical guidance</p><p>Optical guidance uses cameras and sensors to follow painted or taped lines.</p>` }
      ] },
    { number: '214', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which type of motor is known for converting electrical pulses into discrete mechanical movements and is commonly used in 3D printers and CNC machines?</p>`,
          options: [`DC Motor`, `Servo Motor`, `Stepper Motor`, `Brushless DC Motor`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Stepper Motor</p><p>Stepper motors are used for precise control of position and convert electrical pulses into discrete mechanical steps, making them suitable for 3D printers and CNC machines.</p>` }
      ] },
    { number: '215', marks: 1, layout: 0, section: 'Sensors, Actuators, Motors in Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>In an intelligent system's feedback loop, what stage involves interpreting sensor data and determining the appropriate response?</p>`,
          options: [`Sensing`, `Processing`, `Actuating`, `Feedback`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Processing</p><p>The processing stage is where sensor data is analyzed by a processor to determine the system's next actions.</p>` }
      ] },
    // ---------------- Decomposition & Pattern Recognition ----------------
    { number: '216', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>Why is decomposition crucial in building intelligent systems?</p>`,
          options: [`It allows developers to focus on the entire system at once.`, `It helps developers tackle smaller subtasks for integration into a solution.`, `It strictly applies to hardware design and excludes software aspects.`, `It eliminates the need for collaborative work on system components.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It helps developers tackle smaller subtasks for integration into a solution.</p><p>Decomposition assists developers in focusing on smaller subtasks that can be independently tackled and then integrated into a coherent solution.</p>` }
      ] },
    { number: '217', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>How does pattern recognition improve the decision-making process in intelligent systems such as smart irrigation?</p>`,
          options: [`By manually adjusting the water levels every day.`, `By integrating random environmental data without analysis.`, `By observing recurring data cycles to predict future conditions.`, `By ignoring historical data and focusing on immediate results.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By observing recurring data cycles to predict future conditions.</p><p>Pattern recognition improves decision-making by observing recurring data cycles, allowing the system to predict future conditions and act proactively.</p>` }
      ] },
    { number: '218', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of applying decomposition in developing intelligent systems?</p>`,
          options: [`Integrating multiple inputs simultaneously without separation.`, `Upgrading a single component without redesigning the entire system.`, `Designing an entire system before dividing it into parts.`, `Ignoring the interactions between different system modules.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Upgrading a single component without redesigning the entire system.</p><p>By using decomposition, developers can upgrade parts of the system, such as replacing a sensor type, without redesigning the entire system.</p>` }
      ] },
    { number: '219', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>What role does pattern recognition play in machine learning?</p>`,
          options: [`It helps in making systems react to current data only.`, `It is used to detect patterns in data for making predictions.`, `It ensures systems remain stagnant regardless of new data.`, `It reduces the need for sensors in system designs.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It is used to detect patterns in data for making predictions.</p><p>Pattern recognition in machine learning involves detecting patterns in large datasets to make predictions or classifications.</p>` }
      ] },
    { number: '220', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>What is one advantage of using decomposition in intelligent systems development?</p>`,
          options: [`It reduces the need for pattern recognition.`, `It allows different parts of the system to be upgraded independently.`, `It eliminates the need for collaboration among developers.`, `It ensures an entire system is completed without debugging.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows different parts of the system to be upgraded independently.</p><p>Decomposition allows for parts of the system to be upgraded without redesigning the entire system.</p>` }
      ] },
    { number: '221', marks: 1, layout: 0, section: 'Decomposition & Pattern Recognition',
      items: [
        { type: 'mcq',
          question: `<p>How does pattern recognition contribute to the development of environmentally sustainable systems like smart irrigation?</p>`,
          options: [`By increasing the frequency of watering schedules.`, `By anticipating natural moisture recovery and conserving water.`, `By ignoring past data to focus on current conditions.`, `By using random heuristics to decide watering times.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By anticipating natural moisture recovery and conserving water.</p><p>Pattern recognition in smart irrigation systems allows anticipation of natural moisture recovery, thus conserving water and preventing overwatering.</p>` }
      ] },
    // ---------------- Abstraction & Algorithms ----------------
    { number: '222', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What process is used to divide a complex problem into smaller, more manageable parts?</p>`,
          options: [`Decomposition`, `Abstraction`, `Generalization`, `Simplification`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Decomposition</p><p>Decomposition involves breaking down a problem into its individual components to make it more manageable.</p>` }
      ] },
    { number: '223', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following characteristics is NOT essential for a good algorithm as described in the content?</p>`,
          options: [`Definiteness`, `Randomness`, `Finiteness`, `Effectiveness`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Randomness</p><p>Randomness is not listed as an essential characteristic for a good algorithm in the content provided.</p>` }
      ] },
    { number: '224', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of abstraction when designing intelligent systems such as voice assistants?</p>`,
          options: [`Execute logical, step-by-step procedures.`, `Simplify real-world problems into a computer-understandable form.`, `Choose the appropriate action based on inputs.`, `Enhance speech-to-text conversion accuracy.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Simplify real-world problems into a computer-understandable form.</p><p>Abstraction involves identifying essential elements of a problem, allowing computers to process simplified, relevant data.</p>` }
      ] },
    { number: '225', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of using abstraction in computing systems?</p>`,
          options: [`It increases the complexity of the system.`, `It helps in visualizing every internal operation simultaneously.`, `It allows managing complexity by focusing on relevant details.`, `It requires understanding the internal workings of each component.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows managing complexity by focusing on relevant details.</p><p>Abstraction helps by simplifying complex systems, allowing focus on relevant details while ignoring unimportant ones.</p>` }
      ] },
    { number: '226', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>Which type of algorithm is commonly used in navigation apps to find the best route considering distance and obstacles?</p>`,
          options: [`Bubble Sort`, `Neural Networks`, `A* (A-star) Algorithm`, `Decision Trees`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A* (A-star) Algorithm</p><p>The A* (A-star) Algorithm is used in pathfinding to identify the best routes while considering distance and obstacles.</p>` }
      ] },
    { number: '227', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of data abstraction in a school management system?</p>`,
          options: [`Representing a student's information as { "name": "Jordan", "age": 17, "grade": "12" }`, `Using a for loop to iterate over a class list`, `Adjusting Google Maps based on real-time traffic flow`, `Modifying the facial detection algorithm in a recognition system`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Representing a student's information as { "name": "Jordan", "age": 17, "grade": "12" }</p><p>Data abstraction involves representing essential data while omitting irrelevant details, such as in the student example.</p>` }
      ] },
    { number: '228', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>In the context of intelligent systems, what is the primary function of a processing module?</p>`,
          options: [`To transform speech input into text using voice recognition.`, `To decide on a suitable action based on user input.`, `To capture raw data from the user, such as voice or text.`, `To send feedback to the user in a spoken or visual form.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To transform speech input into text using voice recognition.</p><p>The processing module extracts meaning using natural language processing algorithms, transforming input like speech into text.</p>` }
      ] },
    { number: '229', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What characteristic ensures that each step in an algorithm is precisely defined and unambiguous?</p>`,
          options: [`Input`, `Definiteness`, `Finiteness`, `Output`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Definiteness</p><p>Definiteness ensures that each step in an algorithm is precisely defined and unambiguous.</p>` }
      ] },
    { number: '230', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What type of filtering algorithm does Netflix use to recommend shows based on similarities to a user's past preferences?</p>`,
          options: [`Behavioral Filtering`, `Predictive Filtering`, `Content-Based Filtering`, `Trend Analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Content-Based Filtering</p><p>Content-Based Filtering recommends content based on a user's past preferences.</p>` }
      ] },
    { number: '231', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of the procedural abstraction layer in computing?</p>`,
          options: [`To optimize data storage and retrieval speeds.`, `To represent essential data while omitting irrelevant details.`, `To enable the reuse of logic without needing to understand internal workings.`, `To manage traffic flow and calculate alternate routes efficiently.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To enable the reuse of logic without needing to understand internal workings.</p><p>Procedural abstraction focuses on reusing blocks of logic (functions or procedures) without needing to know how they work internally.</p>` }
      ] },
    { number: '232', marks: 1, layout: 0, section: 'Abstraction & Algorithms',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of using decomposition in the design of a complex computing system?</p>`,
          options: [`To eliminate unnecessary details by focusing on the big picture.`, `To divide the problem into smaller parts to be understood separately.`, `To hide complexity by treating components as black boxes.`, `To integrate various components seamlessly into the final product.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To divide the problem into smaller parts to be understood separately.</p><p>Decomposition involves breaking a complex problem into smaller, more manageable parts.</p>` }
      ] },
    // ---------------- Communicating Intelligent System Logic ----------------
    { number: '233', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which visual tool would be most effective for showcasing the high-level benefits and value of a smart fridge to potential customers?</p>`,
          options: [`Flowchart`, `Data Flow Diagram`, `Infographic`, `Technical Report`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Infographic</p><p>An infographic is designed to communicate the value and benefits of a system to a non-technical audience, such as potential customers.</p>` }
      ] },
    { number: '234', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which symbol in a flowchart is used to represent a decision point where branching occurs based on conditions?</p>`,
          options: [`Oval`, `Rectangle`, `Diamond`, `Parallelogram`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Diamond</p><p>A diamond shape is used to indicate a decision point (branching) in a flowchart, reflecting conditional logic.</p>` }
      ] },
    { number: '235', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the main advantages of using infographics to explain intelligent systems to non-technical stakeholders?</p>`,
          options: [`They provide detailed step-by-step instructions of system processes`, `They use complex diagrams to represent technical jargon`, `They visually communicate high-level concepts without technical jargon`, `They focus on decision logic and data transformations`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They visually communicate high-level concepts without technical jargon</p><p>Infographics are effective at conveying high-level concepts and benefits without overwhelming non-technical stakeholders with details.</p>` }
      ] },
    { number: '236', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of using Data Flow Diagrams (DFDs) in system design?</p>`,
          options: [`To map out the decision-making logic of a system`, `To illustrate the data flow and transformation within a system`, `To create a high-level overview of programming code`, `To depict the physical layout of network infrastructure`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To illustrate the data flow and transformation within a system</p><p>DFDs focus on illustrating the movement and transformation of data within a system, not the decision-making logic or physical network layout.</p>` }
      ] },
    { number: '237', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>What key feature of an infographic helps to engage non-technical audiences in understanding intelligent systems?</p>`,
          options: [`Detailed technical descriptions`, `Consistent style`, `Complex flowcharts`, `Extensive use of text`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Consistent style</p><p>Consistent style helps guide viewers, making it easier to engage and understand the information without technical jargon.</p>` }
      ] },
    { number: '238', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which component of the smart fridge system is responsible for managing item details like name, expiry, and quantity?</p>`,
          options: [`Barcode Scanner`, `Inventory Processor`, `Notification System`, `Mobile App`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Inventory Processor</p><p>The Inventory Processor stores or updates item details in the inventory database.</p>` }
      ] },
    { number: '239', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which symbol in a Data Flow Diagram is used to represent the storage of data, such as a database or file?</p>`,
          options: [`Circle`, `Arrow`, `Open-ended Rectangle`, `Square`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Open-ended Rectangle</p><p>An open-ended rectangle represents a data store in a Data Flow Diagram.</p>` }
      ] },
    { number: '240', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which symbol is used in a flowchart to indicate a process or operation being performed?</p>`,
          options: [`Oval`, `Rectangle`, `Diamond`, `Parallelogram`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Rectangle</p><p>A rectangle is used in flowcharts to represent a process or operation.</p>` }
      ] },
    { number: '241', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which feature of an infographic is designed to communicate the system's narrative flow from input to output?</p>`,
          options: [`Icons &amp; Visual Metaphors`, `Simple Structure`, `Minimal Text`, `Narrative Flow`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Narrative Flow</p><p>Narrative Flow tells the story of the system from input to process to output or impact.</p>` }
      ] },
    { number: '242', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>In a flowchart for a smart plant-watering system, which symbol would you use to represent the decision-making point where the system determines if the soil is too dry?</p>`,
          options: [`Oval`, `Rectangle`, `Diamond`, `Parallelogram`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Diamond</p><p>A diamond shape is used in flowcharts to indicate a decision point where branching occurs based on conditions.</p>` }
      ] },
    { number: '243', marks: 1, layout: 0, section: 'Communicating Intelligent System Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary focus of a Data Flow Diagram (DFD) in system analysis and design?</p>`,
          options: [`Detailing system decision-making logic`, `Mapping the flow and transformation of data`, `Structuring code for software development`, `Visualizing user interface design`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Mapping the flow and transformation of data</p><p>DFDs primarily focus on illustrating the movement and transformation of data within a system.</p>` }
      ] },
    // ---------------- Disruptive Impacts of Intelligent Systems ----------------
    { number: '244', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary positive impacts of workflow transformation through intelligent systems?</p>`,
          options: [`Job Role Redundancy`, `Increased Speed and Efficiency`, `Reskilling and Upskilling Needs`, `Bias in Automated Decisions`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Increased Speed and Efficiency</p><p>Intelligent systems greatly enhance the speed and efficiency of task completion.</p>` }
      ] },
    { number: '245', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which cognitive behavior is often mistaken for multitasking, but is actually the rapid shifting of attention between tasks, leading to mental fatigue and increased error rates?</p>`,
          options: [`Single-tasking`, `Task switching`, `Deep work`, `Digital distraction`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Task switching</p><p>Task switching is often mistakenly considered multitasking, but it involves rapidly shifting attention between tasks, causing decreased efficiency and increased errors.</p>` }
      ] },
    { number: '246', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes a characteristic of disruptive innovation?</p>`,
          options: [`It focuses on improving the performance of an existing product.`, `It appeals primarily to high-end or loyal users.`, `It starts by serving niche or underserved users.`, `It supports the existing business model.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It starts by serving niche or underserved users.</p><p>Disruptive innovation often starts with niche or underserved users before attracting mainstream users and displacing established market leaders.</p>` }
      ] },
    { number: '247', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is a common consequence of attempting to multitask, according to cognitive research?</p>`,
          options: [`Improved memory retention`, `Reduced error rates`, `Increased mental fatigue`, `Enhanced creative thinking`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Increased mental fatigue</p><p>Cognitive research indicates that attempting to multitask leads to increased mental fatigue due to frequent task switching.</p>` }
      ] },
    { number: '248', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How do intelligent systems typically impact the workflow of enterprise tasks?</p>`,
          options: [`They eliminate the need for human intervention entirely.`, `They replace traditional methods with faster and more scalable solutions.`, `They maintain traditional workflows but increase the workload on employees.`, `They complicate decision-making processes with added layers of complexity.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They replace traditional methods with faster and more scalable solutions.</p><p>Intelligent systems transform workflows into faster and more scalable methods while maintaining the same task goals.</p>` }
      ] },
    { number: '249', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of a disruptive technology?</p>`,
          options: [`A new model of a luxury car`, `A mobile app for ordering food from restaurants`, `A smartphone with a better camera`, `An AI tool that offers instant, intelligent assistance in writing and coding`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — An AI tool that offers instant, intelligent assistance in writing and coding</p><p>Disruptive technology creates a paradigm shift and changes the status quo, like AI tools replacing traditional writing and tutoring methods.</p>` }
      ] },
    { number: '250', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>What is the main cognitive difference between multitasking and digital distraction?</p>`,
          options: [`Multitasking is caused by internal decisions, while digital distraction is triggered externally.`, `Multitasking always increases productivity, while digital distraction decreases it.`, `Multitasking only affects cognitive load, while digital distraction affects physical tasks.`, `Multitasking is due to system notifications, while digital distraction is due to personal choice.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Multitasking is caused by internal decisions, while digital distraction is triggered externally.</p><p>Multitasking is initiated by the user and involves switching between tasks, whereas digital distraction is often caused by external notifications or alerts.</p>` }
      ] },
    { number: '251', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>How has the integration of intelligent systems changed the way enterprise tasks are performed?</p>`,
          options: [`Tasks are performed manually and with more human errors.`, `Intelligent systems eliminate most jobs completely.`, `Tasks are completed faster and more efficiently with fewer human interventions.`, `Intelligent systems make no significant difference to task completion.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Tasks are completed faster and more efficiently with fewer human interventions.</p><p>Intelligent systems enable tasks to be completed faster and more efficiently by automating parts of the workflow, reducing the need for human intervention.</p>` }
      ] },
    { number: '252', marks: 1, layout: 0, section: 'Disruptive Impacts of Intelligent Systems',
      items: [
        { type: 'mcq',
          question: `<p>Who coined the term "disruptive technology"?</p>`,
          options: [`Steve Jobs`, `Bill Gates`, `Clayton Christensen`, `Elon Musk`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Clayton Christensen</p><p>The term was coined by Clayton Christensen in his 1997 book "The Innovator's Dilemma."</p>` }
      ] },
    // ---------------- Automation & AI in Work ----------------
    { number: '253', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following roles is most at risk of being automated due to advances in automation and AI?</p>`,
          options: [`Data Entry Clerk`, `Data Analyst`, `AI Trainer`, `Robot Maintenance Technician`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Data Entry Clerk</p><p>Data entry clerks perform repetitive tasks that can be easily automated by software systems.</p>` }
      ] },
    { number: '254', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>How does AI differ from traditional automation in enterprise operations?</p>`,
          options: [`AI follows a pre-defined set of instructions like traditional automation.`, `AI systems can learn from data and adapt to new situations.`, `Traditional automation can make decisions based on probabilistic models.`, `Traditional automation improves accuracy over time through feedback.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — AI systems can learn from data and adapt to new situations.</p><p>AI systems are designed to learn from data and adapt to new situations, unlike traditional automation which follows pre-defined instructions.</p>` }
      ] },
    { number: '255', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>Which sector is affected by self-checkout kiosks leading to a decline in routine cashier roles?</p>`,
          options: [`Manufacturing`, `Retail`, `Finance`, `Transport &amp; Logistics`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Retail</p><p>The retail sector is affected by self-checkout kiosks, reducing the need for floor staff, specifically routine cashier roles.</p>` }
      ] },
    { number: '256', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a primary benefit of automation in both manufacturing and enterprise settings?</p>`,
          options: [`Decreased initial investment cost`, `Improved consistency in task output`, `Increased manual labor opportunities`, `Higher levels of workplace stress`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Improved consistency in task output</p><p>Automation ensures that tasks are performed with accuracy and reduces variability, leading to improved consistency in the output.</p>` }
      ] },
    { number: '257', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What is a common challenge faced by businesses implementing automation technologies?</p>`,
          options: [`Enhanced speed and efficiency`, `High initial costs`, `Improved consistency`, `Increased scalability`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — High initial costs</p><p>Implementing automation technologies often requires significant investment, leading to high initial costs.</p>` }
      ] },
    { number: '258', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What is one major societal challenge posed by the widespread adoption of AI and automation?</p>`,
          options: [`Increased job satisfaction.`, `Decreased production capabilities.`, `Ethical concerns regarding decision-making.`, `Reduced data handling capacity.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ethical concerns regarding decision-making.</p><p>The widespread adoption of AI and automation raises ethical and societal questions about fairness, accountability, and transparency in decision-making.</p>` }
      ] },
    { number: '259', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What makes AI more effective than traditional automation at handling unstructured data in enterprises?</p>`,
          options: [`AI follows a strict set of rules to manage data.`, `AI uses advanced hardware for faster processing.`, `AI incorporates machine learning and NLP to understand and adapt to data.`, `AI deploys human assistants for data interpretation.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — AI incorporates machine learning and NLP to understand and adapt to data.</p><p>AI uses machine learning and NLP to extract meaning from unstructured data, making it more adaptable than traditional automation.</p>` }
      ] },
    { number: '260', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following new roles is highlighted as critical in ensuring AI systems adhere to ethical principles and privacy standards?</p>`,
          options: [`AI Trainer`, `Robot Maintenance Technician`, `Ethics Officer`, `Automation Consultant`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Ethics Officer</p><p>An Ethics Officer is responsible for ensuring AI systems follow ethical principles, avoid bias, and respect privacy.</p>` }
      ] },
    { number: '261', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What is one way AI supports strategic decision-making in businesses?</p>`,
          options: [`By performing repetitive physical tasks.`, `By providing personalised product recommendations.`, `By making independent decisions without data.`, `By offering 24/7 operational capability without fatigue.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By providing personalised product recommendations.</p><p>AI supports strategic decision-making by providing personalised product recommendations among other data-driven insights.</p>` }
      ] },
    { number: '262', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What is one key advantage of combining AI with Robotic Process Automation (RPA) in business operations?</p>`,
          options: [`It enables simple data entry tasks.`, `It improves the speed of manual data collection.`, `It allows for the automation of entire workflows.`, `It reduces the need for any human oversight.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows for the automation of entire workflows.</p><p>Combining AI with RPA allows businesses to automate entire workflows, not just individual tasks.</p>` }
      ] },
    { number: '263', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>In the context of manufacturing automation, what is a key component of Industry 4.0?</p>`,
          options: [`Manual assembly lines`, `Programmable Logic Controllers (PLCs)`, `Phone-based customer service`, `Traditional bookkeeping systems`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Programmable Logic Controllers (PLCs)</p><p>Industry 4.0 in manufacturing involves advanced technologies like Programmable Logic Controllers (PLCs) that enable smart factories through connectivity and automation.</p>` }
      ] },
    { number: '264', marks: 1, layout: 0, section: 'Automation & AI in Work',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of jobs that have emerged alongside automation and AI technologies?</p>`,
          options: [`They require higher skills and are often more intellectually engaging.`, `They are primarily low-paid and require little training.`, `They are temporary and mainly contractual.`, `They emphasize manual labor over cognitive skills.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They require higher skills and are often more intellectually engaging.</p><p>New jobs emerging with automation technologies typically require higher skills and are more intellectually engaging.</p>` }
      ] },
    // ---------------- Social & Ethical Issues ----------------
    { number: '265', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>Which type of bias occurs when data is collected from a non-representative sample, potentially leading to flawed conclusions?</p>`,
          options: [`Confirmation Bias`, `Sampling Bias`, `Algorithmic Bias`, `Measurement Bias`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Sampling Bias</p><p>Sampling Bias occurs when the data collected is not representative of the entire population.</p>` }
      ] },
    { number: '266', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>In the case of a self-driving car accident, who should be held accountable for the incident?</p>`,
          options: [`The software developer who programmed the AI system`, `The safety driver who was supposed to monitor the vehicle`, `The company that deployed the vehicle for public use`, `The AI system itself, as it made the driving decisions`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The company that deployed the vehicle for public use</p><p>The company, as they are ultimately responsible for deploying the vehicle and ensuring its safety features are adequately managed and tested.</p>` }
      ] },
    { number: '267', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary ethical concern regarding the use of intelligent systems for surveillance?</p>`,
          options: [`Informed consent is often bypassed.`, `Intelligent systems are never transparent about data usage.`, `Data collected is always owned by the government.`, `Surveillance is only used for national security purposes.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Informed consent is often bypassed.</p><p>Intelligent systems often collect data without the user's informed consent, raising ethical concerns.</p>` }
      ] },
    { number: '268', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the principle of "Transparency" in ethical AI frameworks?</p>`,
          options: [`Ensuring AI performs reliably in all conditions.`, `Ensuring AI treats people equally and avoids discrimination.`, `Allowing users to understand how and why decisions are made by AI.`, `Ensuring AI systems protect and respect users’ personal information.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Allowing users to understand how and why decisions are made by AI.</p><p>Transparency in ethical AI frameworks involves enabling users to comprehend the processes and reasons behind AI decision-making.</p>` }
      ] },
    { number: '269', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>When is consent considered ethical in the digital world?</p>`,
          options: [`When it is specific, informed, freely given, and revocable`, `When it is agreed to without reading the terms`, `When it is collected through hidden and complex agreements`, `When it cannot be withdrawn after being given`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — When it is specific, informed, freely given, and revocable</p><p>Ethical consent must be specific, informed, freely given, and revocable, ensuring users truly understand and control their data.</p>` }
      ] },
    { number: '270', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary challenges associated with intelligent systems gathering data without direct user input?</p>`,
          options: [`Ensuring data accuracy`, `Maintaining traditional data collection methods`, `Obtaining meaningful consent`, `Enhancing system efficiency`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Obtaining meaningful consent</p><p>Intelligent systems often collect data passively without direct user input, raising concerns about obtaining meaningful consent from users.</p>` }
      ] },
    { number: '271', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>Which key principle in ethical AI frameworks ensures systems do not cause harm to users or affected communities?</p>`,
          options: [`Fairness`, `Non-maleficence`, `Inclusiveness`, `Reliability`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Non-maleficence</p><p>Non-maleficence is the principle that ensures AI systems do not cause harm to users or affected communities.</p>` }
      ] },
    { number: '272', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>Which type of bias occurs when a system seeks out data that confirms existing beliefs, ignoring contradicting information?</p>`,
          options: [`Sampling Bias`, `Confirmation Bias`, `Algorithmic Bias`, `Measurement Bias`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Confirmation Bias</p><p>Confirmation Bias involves focusing on data that supports existing beliefs while disregarding data that contradicts them.</p>` }
      ] },
    { number: '273', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>What major challenge does the "Black Box" problem in AI systems present for accountability and transparency?</p>`,
          options: [`Difficulty in tracing decision-making processes.`, `Increased costs of AI implementation.`, `Simplified understanding of AI operations.`, `Enhanced human oversight in AI systems.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Difficulty in tracing decision-making processes.</p><p>The "Black Box" problem presents a challenge because the decision-making processes in AI systems are complex and often not understandable, creating difficulties in accountability and transparency.</p>` }
      ] },
    { number: '274', marks: 1, layout: 0, section: 'Social & Ethical Issues',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary ethical concern related to the use of voice assistants like Alexa or Siri in terms of user consent?</p>`,
          options: [`Users are not aware of how loud the device's speakers can be.`, `Users may not know their conversations are being recorded and reviewed.`, `Users can easily change their accents to interact with the device.`, `Users are unable to find the right activation phrase for the device.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Users may not know their conversations are being recorded and reviewed.</p><p>The ethical concern is that users may not realize their conversations are being recorded and potentially reviewed by humans.</p>` }
      ] },
    // ---------------- Current & Emerging Technologies ----------------
    { number: '275', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key technology used in computer vision for analyzing pixel data in images?</p>`,
          options: [`Optical Character Recognition (OCR)`, `Image Segmentation`, `Convolutional Neural Networks (CNNs)`, `Object Detection`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Convolutional Neural Networks (CNNs)</p><p>Convolutional Neural Networks (CNNs) are specifically designed to process pixel data in images.</p>` }
      ] },
    { number: '276', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary goal of artificial intelligence as described in the text?</p>`,
          options: [`To execute pre-programmed instructions exactly as input.`, `To create systems that can reason, learn, and adapt autonomously.`, `To develop systems that only perform language translation.`, `To ensure machines follow strict and rigid rules.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To create systems that can reason, learn, and adapt autonomously.</p><p>The ultimate goal of AI is to create systems capable of reasoning, learning, and acting autonomously in complex and unpredictable environments.</p>` }
      ] },
    { number: '277', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which type of machine learning involves learning through trial and error by interacting with an environment?</p>`,
          options: [`Supervised Learning`, `Unsupervised Learning`, `Reinforcement Learning`, `Continuous Learning`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Reinforcement Learning</p><p>Reinforcement Learning is the type of machine learning that involves interacting with an environment and learning through rewards or penalties.</p>` }
      ] },
    { number: '278', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>What major advantage does Edge AI offer when integrated with IoT devices?</p>`,
          options: [`Increased cloud storage capacity`, `Faster and private data processing`, `Lower hardware costs`, `Enhanced wireless connectivity`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Faster and private data processing</p><p>Edge AI processes data locally on devices, leading to faster and private data handling compared to cloud-based systems.</p>` }
      ] },
    { number: '279', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which AI application involves using computer vision to enhance the shopping experience by eliminating the need for checkouts?</p>`,
          options: [`Spam filtering in email`, `Recommendation systems`, `Facial recognition at airports`, `Automated checkout in retail stores`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Automated checkout in retail stores</p><p>Automated checkout in retail stores, like Amazon Go, utilizes computer vision to track and charge customers automatically for items without traditional checkouts.</p>` }
      ] },
    { number: '280', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>What is a critical ethical consideration for autonomous vehicles as they become more prevalent?</p>`,
          options: [`Speed of data processing`, `Liability in accidents`, `Energy consumption`, `Data accuracy`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Liability in accidents</p><p>A critical ethical consideration for autonomous vehicles is determining liability in the event of an accident.</p>` }
      ] },
    { number: '281', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a real-world example of AI integration mentioned in the text?</p>`,
          options: [`Self-driving cars`, `Voice assistants like Siri and Google Assistant`, `Recommending movies on Netflix`, `Chatbots used for customer service`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Voice assistants like Siri and Google Assistant</p><p>The text specifically mentions Siri and Google Assistant as examples of AI integration.</p>` }
      ] },
    { number: '282', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which AI technology is foundational for applications such as voice assistants to understand and respond to human speech?</p>`,
          options: [`Image processing`, `Natural Language Processing (NLP)`, `Collaborative filtering`, `Neural networks`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Natural Language Processing (NLP)</p><p>Natural Language Processing (NLP) helps machines understand and respond to human speech in applications like voice assistants.</p>` }
      ] },
    { number: '283', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>Which type of machine learning is used for grouping similar data points when there are no labels provided?</p>`,
          options: [`Supervised Learning`, `Unsupervised Learning`, `Reinforcement Learning`, `Neural Networks`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Unsupervised Learning</p><p>Unsupervised Learning is used to discover hidden patterns or groupings in unlabeled data.</p>` }
      ] },
    { number: '284', marks: 1, layout: 0, section: 'Current & Emerging Technologies',
      items: [
        { type: 'mcq',
          question: `<p>What is a typical application of computer vision in the field of medical imaging?</p>`,
          options: [`Detecting tumors or fractures in X-rays`, `Predicting weather patterns`, `Optimizing online advertisements`, `Translating handwritten notes`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Detecting tumors or fractures in X-rays</p><p>Computer vision is used in medical imaging to detect tumors or fractures in X-rays and other scans.</p>` }
      ] },
    // ---------------- Intelligent Systems in Enterprise ----------------
    { number: '285', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT considered a core technology behind intelligent systems mentioned in the text?</p>`,
          options: [`Natural Language Processing`, `Augmented Reality`, `Machine Learning`, `Robotics and Automation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Augmented Reality</p><p>Augmented Reality is not listed as a core technology behind intelligent systems in the provided content.</p>` }
      ] },
    { number: '286', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>Which technology enables machines to interpret visual data and is used for applications such as monitoring store shelves and facial recognition?</p>`,
          options: [`Machine Learning`, `Natural Language Processing`, `Computer Vision`, `Robotic Process Automation`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Computer Vision</p><p>Computer Vision allows machines to understand and interpret visual data, making it suitable for monitoring store shelves and facial recognition.</p>` }
      ] },
    { number: '287', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary benefit of using AI in credit risk assessment within the finance sector?</p>`,
          options: [`Reducing transaction fees`, `Increasing traditional credit score reliance`, `Generating more accurate and inclusive credit profiles`, `Enhancing physical branch customer service`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Generating more accurate and inclusive credit profiles</p><p>AI can utilize broader data sources to create more comprehensive credit assessments than traditional methods.</p>` }
      ] },
    { number: '288', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary reason why traditional industries experience digital disruption due to intelligent systems?</p>`,
          options: [`They offer minor incremental improvements to existing technologies.`, `They rapidly increase the cost of operation in traditional models.`, `They completely replace older technologies, creating new business models.`, `They require extensive human labor for operations.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They completely replace older technologies, creating new business models.</p><p>Intelligent systems replace older technologies and create new business models, fundamentally changing the way industries operate.</p>` }
      ] },
    { number: '289', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>What role does Natural Language Processing (NLP) play in enterprise customer service according to the text?</p>`,
          options: [`It replaces all human operators with fully automated responses.`, `It assists in managing customer databases.`, `It enables chatbots to understand customer intent and respond appropriately.`, `It automates the handling of financial transactions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It enables chatbots to understand customer intent and respond appropriately.</p><p>NLP in enterprise customer service allows chatbots to understand customer intent and respond appropriately.</p>` }
      ] },
    { number: '290', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>Which function of AI in healthcare involves alerting medical staff based on subtle changes in patient vitals?</p>`,
          options: [`Medical imaging analysis`, `Disease diagnosis`, `Personalised treatment`, `Patient deterioration prediction`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Patient deterioration prediction</p><p>AI is used to predict patient deterioration by monitoring subtle changes in vitals and alerting medical staff.</p>` }
      ] },
    { number: '291', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>What is a major characteristic of disruptive technology as described in Clayton Christensen's concept?</p>`,
          options: [`Enhances existing products without changing the market`, `Initially serves niche markets before gaining broader appeal`, `Is always superior and widely accepted from inception`, `Focuses solely on existing mainstream consumers`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Initially serves niche markets before gaining broader appeal</p><p>Disruptive technology often starts by serving niche markets and improves over time to attract mainstream users, eventually displacing established leaders.</p>` }
      ] },
    { number: '292', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>What is the main function of Robotic Process Automation (RPA) in enterprise use cases?</p>`,
          options: [`Optimising supply chains by predicting equipment failures`, `Automating repetitive, rules-based digital tasks`, `Analysing job applications to shortlist candidates`, `Recommending products based on user behavior`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Automating repetitive, rules-based digital tasks</p><p>RPA automates repetitive, rules-based digital tasks by using software bots to mimic human actions.</p>` }
      ] },
    { number: '293', marks: 1, layout: 0, section: 'Intelligent Systems in Enterprise',
      items: [
        { type: 'mcq',
          question: `<p>In which sector do intelligent systems provide AI-powered recommendation engines to enhance customer experience?</p>`,
          options: [`Finance`, `Healthcare`, `Retail`, `Human Resources`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Retail</p><p>The retail sector uses AI-powered recommendation engines to enhance customer experience by suggesting products based on behavior, preferences, and previous purchases.</p>` }
      ] },
    // ---------------- Infrastructure: Servers, Storage, Endpoints ----------------
    { number: '294', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>Which component in a smart manufacturing environment processes data locally for immediate safety and performance decisions?</p>`,
          options: [`Cloud server`, `Endpoint sensor`, `Edge server`, `Actuator`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Edge server</p><p>The edge server processes data locally for immediate decisions, reducing latency.</p>` }
      ] },
    { number: '295', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a primary benefit of using cloud storage for enterprise data management?</p>`,
          options: [`Immediate data retrieval without internet dependency`, `Full control over data access and management`, `Minimal costs with no need for IT staff`, `Scalability and remote access without hardware upgrades`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Scalability and remote access without hardware upgrades</p><p>Cloud storage allows enterprises to scale easily by upgrading plans and provides remote access, eliminating the need for additional physical hardware.</p>` }
      ] },
    { number: '296', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of sensors in an IoT system?</p>`,
          options: [`To process data locally and reduce latency`, `To collect data from the environment and convert it into digital signals`, `To provide high-speed internet connectivity`, `To perform actions in the real world based on received commands`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To collect data from the environment and convert it into digital signals</p><p>Sensors are designed to collect data from their environment and turn physical properties into digital signals, which are essential for IoT systems.</p>` }
      ] },
    { number: '297', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is one key advantage of using cloud servers over on-premises servers in an intelligent enterprise environment?</p>`,
          options: [`They provide full control over data security and compliance needs.`, `They offer global accessibility and built-in redundancy.`, `They require a high upfront investment and in-house maintenance.`, `They ensure low-latency local processing of data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They offer global accessibility and built-in redundancy.</p><p>Cloud servers offer global access and built-in redundancy, allowing for flexible and scalable computing.</p>` }
      ] },
    { number: '298', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is a major challenge when relying solely on cloud storage for enterprise data?</p>`,
          options: [`Scalability issues with large data volumes`, `Dependence on internet connectivity and third-party providers`, `Limited remote access for employees and partners`, `Inability to meet regulatory compliance standards`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Dependence on internet connectivity and third-party providers</p><p>Relying on cloud storage means dependence on internet connectivity and the security of third-party providers.</p>` }
      ] },
    { number: '299', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>In a smart city traffic management system, what role do cloud servers play?</p>`,
          options: [`Adjusting traffic signals in real time`, `Identifying long-term traffic trends and planning infrastructure`, `Providing local data processing for low-latency control`, `Ensuring data never leaves the city premises`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Identifying long-term traffic trends and planning infrastructure</p><p>Cloud servers perform deeper analytics to identify traffic trends and suggest infrastructure upgrades.</p>` }
      ] },
    { number: '300', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>In a smart manufacturing plant, which component is responsible for making instant adjustments, such as slowing down a conveyor or activating a cooling system, based on real-time data analysis?</p>`,
          options: [`Sensors`, `Edge servers`, `Cloud storage`, `Actuators`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Actuators</p><p>Actuators are the components that make physical adjustments in response to commands from the edge server's real-time analysis.</p>` }
      ] },
    { number: '301', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>In an IoT system, which type of endpoint is responsible for responding to commands by performing actions in the real world?</p>`,
          options: [`Sensors`, `Actuators`, `User Devices`, `Central Servers`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Actuators</p><p>Actuators are the IoT system components that respond to commands by performing physical actions.</p>` }
      ] },
    { number: '302', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of using on-premises servers for data processing in specific environments?</p>`,
          options: [`Lower initial costs compared to cloud servers`, `Full control over data security and compliance`, `Automatic hardware maintenance and updates`, `Global access to data from any location`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Full control over data security and compliance</p><p>On-premises servers offer full control over data security and compliance, as they are directly managed by the organization within their premises.</p>` }
      ] },
    { number: '303', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>Which type of wireless connection is best suited for short-range, low-energy applications in IoT systems?</p>`,
          options: [`Wi-Fi`, `Bluetooth`, `Zigbee`, `LoRaWAN`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Bluetooth</p><p>Bluetooth is best suited for short-range, low-energy applications, such as wearables.</p>` }
      ] },
    { number: '304', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of edge computing in a smart manufacturing environment?</p>`,
          options: [`To process and analyze data locally for immediate decision-making`, `To store and archive historical data for future analysis`, `To replace the need for cloud-based AI models`, `To solely monitor production speed`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To process and analyze data locally for immediate decision-making</p><p>Edge computing allows data to be processed and analyzed locally, enabling real-time decision-making directly at the factory floor.</p>` }
      ] },
    { number: '305', marks: 1, layout: 0, section: 'Infrastructure: Servers, Storage, Endpoints',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant disadvantage of relying solely on local storage for enterprise data management?</p>`,
          options: [`High scalability without additional costs.`, `Fast access to data with reduced latency.`, `Full control and management over data.`, `Higher maintenance costs and resource requirements.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Higher maintenance costs and resource requirements.</p><p>Relying solely on local storage requires enterprises to invest in hardware, maintenance, and IT resources, leading to higher costs and complexity.</p>` }
      ] },
    // ---------------- Communication & Data Flow ----------------
    { number: '306', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>Which network topology allows for devices to connect to each other, providing multiple pathways for data transmission?</p>`,
          options: [`Star Topology`, `Hybrid Topology`, `Mesh Topology`, `Point-to-Point Topology`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Mesh Topology</p><p>Mesh Topology allows devices to connect to each other, forming multiple pathways for data transmission.</p>` }
      ] },
    { number: '307', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of using edge devices in an IoT system for real-time data processing?</p>`,
          options: [`Increased data storage capacity`, `Enhanced security for transmitted data`, `Reduced latency in decision-making`, `Improved sensor accuracy`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Reduced latency in decision-making</p><p>Edge devices process data locally, reducing latency and enabling faster real-time decision-making.</p>` }
      ] },
    { number: '308', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What role does a gateway play in IoT communication?</p>`,
          options: [`It measures environmental conditions and sends data.`, `It visually displays trends and insights from data.`, `It converts device-specific protocols to standard internet protocols.`, `It stores large amounts of data in the cloud.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It converts device-specific protocols to standard internet protocols.</p><p>A gateway acts as a "middleman," converting device-specific protocols into standard internet protocols for data transmission.</p>` }
      ] },
    { number: '309', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>Which protocol is most suitable for gathering data at the edge in an IoT environment with constrained devices?</p>`,
          options: [`MQTT`, `CoAP`, `HTTP`, `FTP`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — CoAP</p><p>CoAP is designed for constrained devices, making it ideal for gathering data at the edge.</p>` }
      ] },
    { number: '310', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What is one primary advantage of processing data at the edge instead of sending all data to the cloud in an IoT system?</p>`,
          options: [`Reduced latency for faster decision-making.`, `Increased storage capacity.`, `Improved data accuracy.`, `Enhanced cloud processing power.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Reduced latency for faster decision-making.</p><p>Processing data at the edge can reduce latency, allowing for faster decision-making without relying solely on cloud infrastructure.</p>` }
      ] },
    { number: '311', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>Which cloud computing service model provides a virtualized hardware environment over the internet?</p>`,
          options: [`SaaS (Software as a Service)`, `PaaS (Platform as a Service)`, `IaaS (Infrastructure as a Service)`, `DaaS (Desktop as a Service)`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — IaaS (Infrastructure as a Service)</p><p>IaaS (Infrastructure as a Service) provides virtualized hardware resources, such as virtual machines, over the internet.</p>` }
      ] },
    { number: '312', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of actuators in an IoT system?</p>`,
          options: [`Measure environmental conditions.`, `Generate data for processing.`, `Respond to instructions by changing something physically.`, `Enhance everyday devices with connectivity.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Respond to instructions by changing something physically.</p><p>Actuators respond to instructions by making physical changes, like opening a valve or turning on a motor.</p>` }
      ] },
    { number: '313', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of hybrid topology in an IoT network?</p>`,
          options: [`Devices connect directly to a single central hub.`, `Devices form a self-healing mesh with multiple pathways.`, `Combines features of both star and mesh topologies.`, `Utilizes low-power, wide-area network protocols.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Combines features of both star and mesh topologies.</p><p>Hybrid topology combines the advantages of both star and mesh topologies in an IoT network.</p>` }
      ] },
    { number: '314', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What component of an IoT system acts as the "local brains," performing real-time processing and analysis of sensor data before it reaches the wider network?</p>`,
          options: [`Sensors`, `Cloud Servers`, `Edge Devices`, `Gateways`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Edge Devices</p><p>Edge devices act as the "local brains" of an IoT system, performing real-time processing and analysis of sensor data locally.</p>` }
      ] },
    { number: '315', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>In the context of edge AI deployment, which aspect is crucial for ensuring user data privacy and security?</p>`,
          options: [`Encrypting all data before transmission to the cloud`, `Processing identifiable images on the cloud`, `Conducting data processing at the edge`, `Sending all raw data directly to the cloud for analysis`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Conducting data processing at the edge</p><p>Conducting data processing at the edge is crucial for ensuring user data privacy and security by minimizing the exposure of sensitive information outside the local environment.</p>` }
      ] },
    { number: '316', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>Which protocol is typically used to distribute data across an enterprise in IoT systems, particularly from gateways to cloud systems?</p>`,
          options: [`HTTP`, `CoAP`, `MQTT`, `SMTP`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — MQTT</p><p>MQTT is designed for efficiently distributing data across enterprise systems, such as from gateways to the cloud.</p>` }
      ] },
    { number: '317', marks: 1, layout: 0, section: 'Communication & Data Flow',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary benefit of using cloud computing for organizations compared to maintaining physical infrastructure?</p>`,
          options: [`Greater control over hardware`, `Improved hardware performance`, `Enhanced data security`, `Cost efficiency`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Cost efficiency</p><p>Cloud computing allows organizations to use a pay-as-you-go model, reducing the need for significant investments in physical infrastructure, which leads to cost efficiency.</p>` }
      ] },
    // ---------------- Data Lifecycle in IoT ----------------
    { number: '318', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of sensors in an IoT system?</p>`,
          options: [`They store and process data.`, `They measure environmental conditions and convert them into electronic data.`, `They take automated action based on collected data.`, `They transmit data to cloud services for analysis.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They measure environmental conditions and convert them into electronic data.</p><p>Sensors in an IoT system measure environmental conditions and convert them into electronic data.</p>` }
      ] },
    { number: '319', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>In an IoT system, where would data processing ideally occur for real-time decisions, such as immediately responding to temperature changes?</p>`,
          options: [`Cloud Processing`, `Edge Processing`, `Data Center Processing`, `Blockchain Processing`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Edge Processing</p><p>Edge Processing allows quick, on-site responses necessary for real-time decisions by reducing delays.</p>` }
      ] },
    { number: '320', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary benefit of data application in IoT systems?</p>`,
          options: [`It allows for more efficient data storage.`, `It transforms raw data into meaningful actions.`, `It enables devices to display more complex data.`, `It increases the size and number of sensors needed.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It transforms raw data into meaningful actions.</p><p>Data application transforms raw data into meaningful actions, enabling IoT systems to make decisions and act autonomously.</p>` }
      ] },
    { number: '321', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>In an IoT system, which storage strategy is most suitable for instant data access and quick response times?</p>`,
          options: [`Cloud storage`, `Edge storage`, `Distributed storage`, `Local storage`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Edge storage</p><p>Edge storage allows data to be stored close to where it's created, enabling faster response times.</p>` }
      ] },
    { number: '322', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>In the context of IoT data types, which of the following is considered unstructured data?</p>`,
          options: [`Temperature readings from a sensor`, `A JSON file with metadata`, `Video footage from a security camera`, `Sensor status updates in a table`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Video footage from a security camera</p><p>Video footage from a security camera is considered unstructured data because it consists of continuous streams of images and sound, lacking a simple tabular structure.</p>` }
      ] },
    { number: '323', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of processing data in the IoT data lifecycle?</p>`,
          options: [`To store data securely`, `To turn raw data into insights`, `To collect environmental data`, `To transmit data between devices`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To turn raw data into insights</p><p>Processing turns raw data into insights, finding patterns and generating predictions.</p>` }
      ] },
    { number: '324', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of filtering in IoT systems?</p>`,
          options: [`To increase the amount of data stored in the cloud.`, `To determine the right time to collect data.`, `To identify and retain relevant data while discarding surplus data.`, `To slow down decision-making processes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To identify and retain relevant data while discarding surplus data.</p><p>Filtering helps to retain relevant data that impacts decision-making and discard surplus data that wastes resources.</p>` }
      ] },
    { number: '325', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary challenge of data transmission in IoT systems that involves large files like video or audio streams?</p>`,
          options: [`Security`, `Latency`, `Bandwidth`, `Power consumption`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Bandwidth</p><p>Large files like video or audio streams require a lot of bandwidth to transfer, which can strain networks if not managed carefully.</p>` }
      ] },
    { number: '326', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of data application in IoT systems for energy optimisation?</p>`,
          options: [`Collecting data from wearable fitness trackers.`, `Triggering predictive maintenance in factories.`, `Automatically adjusting heating or cooling based on room occupancy.`, `Monitoring heart rate through wearable devices.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Automatically adjusting heating or cooling based on room occupancy.</p><p>Energy optimisation involves automatically adjusting heating or cooling based on room occupancy.</p>` }
      ] },
    { number: '327', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>In the context of IoT data processing, what is the main advantage of edge processing?</p>`,
          options: [`It allows for more detailed long-term data analysis.`, `It reduces delay and avoids the need to send all data to the cloud.`, `It involves the use of advanced machine learning algorithms.`, `It facilitates the collection of large volumes of raw data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It reduces delay and avoids the need to send all data to the cloud.</p><p>Edge processing minimizes delay by handling data locally and reduces the need for constant cloud communication.</p>` }
      ] },
    { number: '328', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is a key advantage of using edge storage in an IoT system?</p>`,
          options: [`It provides massive storage and powerful analysis tools.`, `It reduces latency and enhances response times.`, `It allows for aggregating data from multiple devices.`, `It depends on a reliable internet connection for operation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It reduces latency and enhances response times.</p><p>Edge storage reduces latency because data is stored close to where it's created, enhancing response times, especially important for real-time applications.</p>` }
      ] },
    { number: '329', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the function of actuators in an IoT system?</p>`,
          options: [`Actuators measure environmental conditions and convert them into data.`, `Actuators collect data at defined intervals to conserve resources.`, `Actuators take automated actions based on collected data.`, `Actuators store and process collected data for future use.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Actuators take automated actions based on collected data.</p><p>Actuators in an IoT system take automated actions based on the data collected by sensors.</p>` }
      ] },
    { number: '330', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>Which type of IoT data is generated by devices like smart cameras and requires computer vision algorithms to analyse?</p>`,
          options: [`Structured data`, `Unstructured data`, `Semi-structured data`, `Categorical data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Unstructured data</p><p>Unstructured data includes video footage from smart cameras, which lacks simple rows and columns, necessitating computer vision algorithms for analysis.</p>` }
      ] },
    { number: '331', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>Which protocol is specifically designed for low-power or constrained IoT devices?</p>`,
          options: [`MQTT`, `HTTP`, `CoAP`, `HTTPS`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — CoAP</p><p>CoAP (Constrained Application Protocol) is designed for very low-power or constrained devices, like battery-operated sensors in remote locations.</p>` }
      ] },
    { number: '332', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes surplus data in an IoT system?</p>`,
          options: [`Data that directly triggers system responses.`, `Data collected but not immediately useful to system goals.`, `Data processed and stored for future insights.`, `Data filtered for decision-making efficiency.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Data collected but not immediately useful to system goals.</p><p>Surplus data refers to information collected by IoT systems that isn't immediately useful for achieving system goals.</p>` }
      ] },
    { number: '333', marks: 1, layout: 0, section: 'Data Lifecycle in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the final stage in the IoT data lifecycle where analysed data is used to make decisions or trigger actions automatically?</p>`,
          options: [`Collection`, `Storage`, `Processing`, `Application`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Application</p><p>The final stage in the IoT data lifecycle is the Application stage, where analysed data is used to make decisions or trigger actions automatically.</p>` }
      ] },
    // ---------------- Simulation in Education & Business ----------------
    { number: '334', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is one significant benefit of using simulations in education and training?</p>`,
          options: [`They provide unlimited physical resources for experiments.`, `They eliminate the need for any safety precautions.`, `They allow learners to engage with complex systems in a repeatable environment.`, `They offer a high-stakes environment similar to real life.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They allow learners to engage with complex systems in a repeatable environment.</p><p>Simulations allow learners to engage with complex systems in a safe, controlled, and repeatable environment.</p>` }
      ] },
    { number: '335', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is one key advantage of combining predictive modelling with automation in businesses?</p>`,
          options: [`Reduced data collection efforts.`, `Improved intuition-based decision making.`, `Real-time monitoring and response.`, `Decreased reliance on machine learning.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Real-time monitoring and response.</p><p>Combining predictive modelling with automation allows businesses to continuously monitor new data in real-time and update forecasts, triggering automated responses to adapt operations effectively.</p>` }
      ] },
    { number: '336', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is one major benefit of using business simulation for companies?</p>`,
          options: [`It guarantees an increase in profits.`, `It eliminates the need for data analysis.`, `It removes all risk from business operations.`, `It allows testing strategies without real-world risks or costs.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It allows testing strategies without real-world risks or costs.</p><p>Business simulations enable companies to test strategies and scenarios without incurring the real-world risks or costs that could result from making poor decisions.</p>` }
      ] },
    { number: '337', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary benefit of incorporating gamification into simulations?</p>`,
          options: [`It increases data accuracy.`, `It makes learning more engaging and motivating through interactive challenges.`, `It reduces the need for technological skills.`, `It simplifies complex tasks through intuitive design.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It makes learning more engaging and motivating through interactive challenges.</p><p>Gamification uses game-like elements to make learning or working more engaging and motivating by transforming repetitive tasks into interactive challenges.</p>` }
      ] },
    { number: '338', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>Why are simulations particularly beneficial for vocational training?</p>`,
          options: [`They minimize the costs of materials.`, `They eliminate the need for any supervision.`, `They provide opportunities for repeated practice.`, `They guarantee better job placement.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They provide opportunities for repeated practice.</p><p>Simulations in vocational training offer the chance to repeat processes until mastery, which is critical for developing skills in tasks like welding or operating machinery.</p>` }
      ] },
    { number: '339', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key characteristic of educational simulations like those used in medical and aviation training?</p>`,
          options: [`They provide real-world consequences without any risk.`, `They do not allow for variable adjustments or feedback.`, `They replace practical hands-on experience entirely.`, `They are solely for entertainment purposes.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They provide real-world consequences without any risk.</p><p>Educational simulations provide an authentic experience with real-world consequences but without the associated risks.</p>` }
      ] },
    { number: '340', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of using business simulations in organizations?</p>`,
          options: [`To improve hiring processes`, `To replicate real-world business processes and test strategies safely`, `To reduce marketing costs`, `To enhance customer service techniques`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To replicate real-world business processes and test strategies safely</p><p>Business simulations allow organizations to replicate complex processes and test strategies without real-world risks.</p>` }
      ] },
    { number: '341', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>How does predictive modelling contribute to decision-making in businesses?</p>`,
          options: [`It allows businesses to rely on guesswork for making choices.`, `It bases business decisions on static plans and outdated data.`, `It helps managers make data-driven decisions by forecasting future scenarios.`, `It restricts businesses from adapting quickly to new trends.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It helps managers make data-driven decisions by forecasting future scenarios.</p><p>Predictive modelling helps managers make data-driven decisions by forecasting future scenarios, enhancing the decision-making process.</p>` }
      ] },
    { number: '342', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>How do gamification elements enhance simulations in learning and working contexts?</p>`,
          options: [`By making tasks less competitive and achievement-focused.`, `By increasing user involvement and encouraging exploration.`, `By eliminating the need for adaptive feedback systems.`, `By reducing the need for interactive challenges.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By increasing user involvement and encouraging exploration.</p><p>Gamification enhances simulations by increasing user involvement and encouraging exploration through elements like points and badges.</p>` }
      ] },
    { number: '343', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>How do simulations contribute to a safer learning environment for students in educational settings?</p>`,
          options: [`They eliminate the need for immediate feedback.`, `They allow students to engage with real-world scenarios without the associated risks.`, `They reduce the importance of understanding theoretical concepts.`, `They limit the ability to repeat experiments multiple times.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow students to engage with real-world scenarios without the associated risks.</p><p>Simulations allow students to engage with real-world scenarios, such as chemical reactions or emergency drills, without the risks involved in real-life situations.</p>` }
      ] },
    { number: '344', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary role of predictive modelling in a business context?</p>`,
          options: [`To manually forecast future demand based on management intuition.`, `To eliminate the need for any human intervention in decision-making processes.`, `To analyze historical data and predict future outcomes using algorithms.`, `To focus solely on improving customer service experiences.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To analyze historical data and predict future outcomes using algorithms.</p><p>Predictive modelling uses historical data and algorithms to forecast future business outcomes, leading to more informed decision-making.</p>` }
      ] },
    { number: '345', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary benefit of using business simulations with AI integration in organizations?</p>`,
          options: [`They eliminate the need for data analysis`, `They provide static predictions for decision-making`, `They continuously update simulations with new data and suggest improvements`, `They make physical changes unnecessary in real-world operations`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They continuously update simulations with new data and suggest improvements</p><p>AI integration in business simulations allows for continuous updates and suggestions for improvements, enhancing decision-making.</p>` }
      ] },
    { number: '346', marks: 1, layout: 0, section: 'Simulation in Education & Business',
      items: [
        { type: 'mcq',
          question: `<p>What role does Artificial Intelligence play in simulations like language learning platforms?</p>`,
          options: [`It provides static scenarios for learners to follow.`, `It uses adaptive algorithms to tailor feedback and challenge levels.`, `It replaces the need for human interaction completely.`, `It only simulates competitive game scenarios.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It uses adaptive algorithms to tailor feedback and challenge levels.</p><p>AI in simulations uses adaptive algorithms to adjust learning experiences based on user performance.</p>` }
      ] },
    // ---------------- Simulation in High-Risk Fields ----------------
    { number: '347', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of using simulation in high-risk industries?</p>`,
          options: [`It allows real-world trial-and-error without consequences.`, `It eliminates the need for human operators entirely.`, `It enables the exploration of “what if” scenarios safely.`, `It guarantees that no mistakes will occur in the real world.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It enables the exploration of “what if” scenarios safely.</p><p>The purpose of simulation is to safely explore “what if” scenarios by testing without endangering lives or resources.</p>` }
      ] },
    { number: '348', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary advantages of using simulations in high-risk industries?</p>`,
          options: [`They increase the speed of real-world operations.`, `They allow for error reduction without real-world consequences.`, `They completely eliminate the need for human operators.`, `They are less useful compared to traditional training methods.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow for error reduction without real-world consequences.</p><p>Simulations allow for error reduction without the risk of real-world consequences, making them valuable for training in high-risk industries.</p>` }
      ] },
    { number: '349', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>Which industry heavily relies on simulation technology to ensure safety due to the high-risk nature of its operations?</p>`,
          options: [`E-commerce`, `Space exploration`, `Retail`, `Agriculture`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Space exploration</p><p>Space exploration involves high financial stakes and safety risks, requiring extensive simulations for testing and training.</p>` }
      ] },
    { number: '350', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the key reasons NASA uses simulation technology in space exploration?</p>`,
          options: [`To reduce the cost of building spacecraft.`, `To create entertaining scenarios for astronauts.`, `To minimize risk by anticipating problems.`, `To shorten the duration of missions.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To minimize risk by anticipating problems.</p><p>NASA employs simulation technology to minimize risk by allowing engineers and astronauts to anticipate problems and develop solutions in advance.</p>` }
      ] },
    { number: '351', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is a significant advantage of using simulation technology in industries like aviation and medicine?</p>`,
          options: [`It eliminates the need for any real-world training.`, `It allows practices without the risk of real-world consequences.`, `It guarantees success in all real-life operations.`, `It reduces the time required for training to zero.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows practices without the risk of real-world consequences.</p><p>Simulation allows for error-making and learning without real-world consequences, which is crucial in high-risk industries.</p>` }
      ] },
    { number: '352', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is a key feature of intelligent systems in simulation within enterprise computing?</p>`,
          options: [`They replay fixed scenarios repeatedly.`, `They adapt to new data and user actions.`, `They are only useful in video game development.`, `They eliminate the need for human involvement entirely.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They adapt to new data and user actions.</p><p>Intelligent systems in simulation adapt based on new data and user actions, creating a dynamic training environment.</p>` }
      ] },
    { number: '353', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a reason why trial-and-error is not suitable for high-risk applications?</p>`,
          options: [`It is less time-consuming.`, `It involves real-world testing, which is necessary.`, `Errors in high-risk applications can have unacceptable consequences.`, `It allows for innovative but dangerous practices.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Errors in high-risk applications can have unacceptable consequences.</p><p>In high-risk applications, the cost of error is unacceptable, making trial-and-error unsuitable.</p>` }
      ] },
    { number: '354', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following advanced tools is used in surgical simulation to train surgeons on complex procedures?</p>`,
          options: [`Flight Simulator`, `Neutral Buoyancy Laboratory`, `Intelligent Monitoring Systems`, `da Vinci Surgical System`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — da Vinci Surgical System</p><p>The da Vinci Surgical System allows surgeons to practise complex procedures using 3D virtual models and real-time feedback.</p>` }
      ] },
    { number: '355', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>In the context of space exploration, what facility does NASA use to simulate the experience of weightlessness for astronauts?</p>`,
          options: [`Virtual Reality Chamber`, `Neutral Buoyancy Laboratory`, `Digital Twin Laboratory`, `Flight Simulator`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Neutral Buoyancy Laboratory</p><p>The Neutral Buoyancy Laboratory in Houston is used to simulate weightlessness for astronaut training.</p>` }
      ] },
    { number: '356', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>In what way does simulation help reduce human error in high-risk applications?</p>`,
          options: [`By providing real-time feedback and collaboration.`, `By allowing repeated practice in safe environments.`, `By offering static scenarios for easy completion.`, `By eliminating the need for human intervention.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By allowing repeated practice in safe environments.</p><p>Simulation allows repeated practice in safe environments, which builds familiarity and reduces human error.</p>` }
      ] },
    { number: '357', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>Which industry utilizes flight simulators to ensure safety in high-risk situations?</p>`,
          options: [`Space exploration`, `Nuclear facilities`, `Aviation`, `Healthcare`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Aviation</p><p>In aviation, flight simulators are used to safely train pilots for emergency situations.</p>` }
      ] },
    { number: '358', marks: 1, layout: 0, section: 'Simulation in High-Risk Fields',
      items: [
        { type: 'mcq',
          question: `<p>What is a benefit of simulation in terms of cost efficiency for industries like aviation and nuclear facilities?</p>`,
          options: [`It eliminates the need for any real-world equipment.`, `It completely removes the risk of human error.`, `It offers training environments that are vastly cheaper than real-world conditions.`, `It allows operators to skip routine procedures.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It offers training environments that are vastly cheaper than real-world conditions.</p><p>Simulations are cost-effective because they allow training without using expensive real-world equipment, such as planes or nuclear reactors.</p>` }
      ] },
    // ---------------- Surveillance Systems: CCTV, Biometrics ----------------
    { number: '359', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary role of CCTV in enterprise surveillance systems?</p>`,
          options: [`Identity verification`, `Monitoring and recording events`, `Securing access to locations`, `Protecting privacy`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Monitoring and recording events</p><p>CCTV primarily serves the role of monitoring and recording events in enterprise surveillance systems.</p>` }
      ] },
    { number: '360', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary ethical concern associated with the use of surveillance technologies in enterprises?</p>`,
          options: [`Cost efficiency of surveillance equipment`, `Potential for discriminatory practices`, `Speed of technology implementation`, `Dependence on manual labor`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Potential for discriminatory practices</p><p>Ethical concerns include the potential misuse of surveillance technologies for discriminatory practices, such as targeting certain groups.</p>` }
      ] },
    { number: '361', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which biometric technology is particularly noted for its use in high-security facilities due to its extreme accuracy in recognizing patterns in a person's eyes?</p>`,
          options: [`Fingerprint Scanning`, `Facial Recognition`, `Iris or Retina Scans`, `Voice Recognition`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Iris or Retina Scans</p><p>Iris or Retina Scans are noted for their extreme accuracy due to the highly unique patterns in a person's eyes, making them suitable for high-security facilities.</p>` }
      ] },
    { number: '362', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a major strength of CCTV systems?</p>`,
          options: [`Provides continuous live monitoring without privacy concerns.`, `Acts as a deterrent to crime due to the visible presence of cameras.`, `Eliminates the need for security personnel entirely.`, `Offers unlimited storage without maintenance costs.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Acts as a deterrent to crime due to the visible presence of cameras.</p><p>The visible presence of CCTV cameras can deter theft, vandalism, and other crimes.</p>` }
      ] },
    { number: '363', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>What is a notable benefit of using surveillance systems in logistics companies?</p>`,
          options: [`Enhancing customer trust`, `Optimizing delivery routes`, `Monitoring employee behavior`, `Increasing product quality`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Optimizing delivery routes</p><p>Logistics companies use surveillance data like GPS tracking to optimize delivery routes, improving operational efficiency.</p>` }
      ] },
    { number: '364', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which biometric technology analyzes vocal patterns, pitch, and tone to authenticate users?</p>`,
          options: [`Fingerprint Scanning`, `Facial Recognition`, `Voice Recognition`, `Iris or Retina Scans`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Voice Recognition</p><p>Voice Recognition analyzes vocal patterns, pitch, and tone to authenticate users.</p>` }
      ] },
    { number: '365', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which type of CCTV camera is best suited for monitoring in complete darkness?</p>`,
          options: [`Fixed Cameras`, `Pan-Tilt-Zoom Cameras`, `Infrared/Night Vision Cameras`, `Network Video Recorders`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Infrared/Night Vision Cameras</p><p>Infrared/Night Vision Cameras use infrared light to capture clear images in low-light or nighttime conditions.</p>` }
      ] },
    { number: '366', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a major weakness of biometric systems in enterprise surveillance?</p>`,
          options: [`They can easily be reset if compromised.`, `They pose privacy risks as biometric data cannot be reset if stolen.`, `They provide unreliable evidence for investigations.`, `They do not offer secure identity verification.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They pose privacy risks as biometric data cannot be reset if stolen.</p><p>Biometric data poses privacy risks because it cannot be reset if stolen, making it a significant weakness.</p>` }
      ] },
    { number: '367', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>What technology allows modern CCTV systems to automatically detect unusual patterns and trigger real-time alerts?</p>`,
          options: [`Motion Detection`, `Cloud Storage`, `AI-driven Video Analytics`, `Infrared Cameras`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — AI-driven Video Analytics</p><p>AI-driven video analytics allow modern CCTV systems to automatically detect unusual patterns and trigger real-time alerts.</p>` }
      ] },
    { number: '368', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>In modern enterprises, which of the following systems is used to track the location of delivery vehicles and improve route efficiency?</p>`,
          options: [`CCTV cameras`, `GPS tracking`, `Biometric authentication`, `Facial recognition`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — GPS tracking</p><p>GPS tracking is used to monitor the location of delivery vehicles and optimize delivery routes for efficiency.</p>` }
      ] },
    { number: '369', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>Which biometric technology is commonly used in mobile devices for unlocking and security purposes?</p>`,
          options: [`Fingerprint Scanning`, `Gait Recognition`, `Iris Scanning`, `Voice Recognition`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Fingerprint Scanning</p><p>Fingerprint scanning is widely used in mobile devices due to its ease of use and uniqueness to each individual.</p>` }
      ] },
    { number: '370', marks: 1, layout: 0, section: 'Surveillance Systems: CCTV, Biometrics',
      items: [
        { type: 'mcq',
          question: `<p>How do enterprises typically enhance their security by combining CCTV and biometric systems?</p>`,
          options: [`By using CCTV cameras to verify identities and biometrics for monitoring events.`, `By using CCTV for observation and biometrics for proactive access control.`, `By using biometrics to deter crimes in progress and CCTV to prevent access.`, `By using both technologies equally for all surveillance tasks.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By using CCTV for observation and biometrics for proactive access control.</p><p>Enterprises enhance security by using CCTV for observation and event monitoring, while biometrics are used proactively for identity verification and preventing unauthorised access.</p>` }
      ] },
    // ---------------- Surveillance Systems: Loyalty, Fraud, Sniffing ----------------
    { number: '371', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the main advantages of using AI-powered systems in fraud detection for financial institutions?</p>`,
          options: [`AI systems eliminate the need for human interaction.`, `AI systems can automatically approve all transactions.`, `AI systems efficiently flag irregularities in transactions.`, `AI systems guarantee no false positives occur.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — AI systems efficiently flag irregularities in transactions.</p><p>AI systems efficiently flag irregularities in transactions, which helps in detecting potential fraud.</p>` }
      ] },
    { number: '372', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the main advantages for businesses that use loyalty schemes according to the content provided?</p>`,
          options: [`They can increase customer loyalty and retention.`, `They can outsource their marketing efforts.`, `They can eliminate the need for physical stores.`, `They can reduce the number of products they offer.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They can increase customer loyalty and retention.</p><p>Loyalty schemes help businesses retain customers, reducing the likelihood of them switching to competitors.</p>` }
      ] },
    { number: '373', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary reason encrypted traffic is less vulnerable to sniffing attacks compared to unencrypted traffic?</p>`,
          options: [`Sniffers cannot intercept encrypted traffic at all.`, `Encrypted traffic is larger in size, making it harder to capture.`, `Encryption scrambles data, making it unreadable without the correct key.`, `Encrypted traffic uses a different route than unencrypted traffic.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Encryption scrambles data, making it unreadable without the correct key.</p><p>Encryption scrambles data using encryption keys, making it nearly impossible for unauthorized sniffers to read.</p>` }
      ] },
    { number: '374', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is the key difference between passive and active sniffing on a network?</p>`,
          options: [`Passive sniffing captures traffic without altering it, while active sniffing can manipulate data.`, `Passive sniffing requires ARP poisoning, while active sniffing needs DNS spoofing.`, `Passive sniffing is used only by hackers, while active sniffing is used only by IT administrators.`, `Passive sniffing is easier to detect, while active sniffing is nearly impossible to detect.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Passive sniffing captures traffic without altering it, while active sniffing can manipulate data.</p><p>Passive sniffing captures traffic without altering it, making it harder to detect, while active sniffing involves manipulating data, making it easier to detect.</p>` }
      ] },
    { number: '375', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is a major ethical concern associated with loyalty schemes as described in the content provided?</p>`,
          options: [`They enhance customer experience.`, `They lack informed consent regarding data collection.`, `They offer too many discounts to customers.`, `They promote the use of outdated technology.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They lack informed consent regarding data collection.</p><p>One ethical concern is that many customers may not fully understand how much of their data is collected due to lack of informed consent.</p>` }
      ] },
    { number: '376', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is a major challenge faced by AI-driven fraud detection systems in maintaining effective security without alienating customers?</p>`,
          options: [`The rapid growth of online banking platforms.`, `The increasing complexity of fraud schemes.`, `The occurrence of false positives.`, `The high cost of implementation.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The occurrence of false positives.</p><p>False positives can result in legitimate transactions being mistakenly flagged as fraudulent, leading to inconvenience for customers.</p>` }
      ] },
    { number: '377', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary method by which companies use loyalty schemes to improve customer retention?</p>`,
          options: [`By offering real-time customer service`, `By hosting frequent customer surveys`, `By providing personalized offers and rewards`, `By guaranteeing lower prices than competitors`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By providing personalized offers and rewards</p><p>Companies use loyalty schemes to provide personalized offers and rewards, encouraging repeat purchases and improving customer retention.</p>` }
      ] },
    { number: '378', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>Which method in AI fraud detection relies on continuously learning from historical data to identify subtle fraud patterns?</p>`,
          options: [`Anomaly Detection`, `Rule-Based Systems`, `Machine Learning Models`, `Transaction Verification`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Machine Learning Models</p><p>Machine learning models continuously improve by analyzing historical fraud cases to detect subtle patterns that are difficult for humans to notice.</p>` }
      ] },
    { number: '379', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary reason why sniffing can pose a significant security risk on public Wi-Fi networks?</p>`,
          options: [`It allows anyone connected to the network to capture encrypted data.`, `It requires sophisticated hardware that is difficult to detect.`, `It enables the capture of unencrypted traffic, revealing sensitive information.`, `It can only be used by cybersecurity professionals for legitimate purposes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It enables the capture of unencrypted traffic, revealing sensitive information.</p><p>Sniffing captures unencrypted traffic, making sensitive information like passwords visible on public Wi-Fi.</p>` }
      ] },
    { number: '380', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>Which technique in AI-driven fraud detection focuses on understanding typical spending behaviors to identify unusual transactions?</p>`,
          options: [`Phishing Detection`, `Anomaly Detection`, `Identity Theft Monitoring`, `Rule-Based Systems`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Anomaly Detection</p><p>Anomaly Detection involves learning what "normal" spending behavior looks like for each customer and raises alerts for transactions that deviate significantly from this pattern.</p>` }
      ] },
    { number: '381', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is one way companies use data from loyalty schemes to enhance their marketing strategies?</p>`,
          options: [`By offering generic discounts to all customers`, `By increasing product prices for everyone`, `By creating customer segments for targeted marketing`, `By selling the data to competitors directly`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By creating customer segments for targeted marketing</p><p>Companies use data from loyalty schemes to create customer segments for targeted marketing, which helps them tailor offers and promotions to specific groups.</p>` }
      ] },
    { number: '382', marks: 1, layout: 0, section: 'Surveillance Systems: Loyalty, Fraud, Sniffing',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential risk of using packet sniffing technology in cybersecurity?</p>`,
          options: [`It can slow down network speeds significantly.`, `It can expose sensitive data if misused by hackers.`, `It requires extensive encryption to operate effectively.`, `It is ineffective on encrypted networks like HTTPS.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It can expose sensitive data if misused by hackers.</p><p>Packet sniffing can expose sensitive data if misused by hackers, as they can capture unencrypted traffic and steal information such as passwords and credit card details.</p>` }
      ] },
    // ---------------- Trolling & AI in IoT ----------------
    { number: '383', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is a key benefit of integrating AI in IoT systems for smart cities?</p>`,
          options: [`Reducing hardware costs significantly`, `Providing real-time anomaly detection and response`, `Increasing the number of devices exponentially`, `Eliminating the need for data privacy concerns`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Providing real-time anomaly detection and response</p><p>AI's ability to identify and respond to anomalies in real-time enhances efficiency and safety in IoT systems.</p>` }
      ] },
    { number: '384', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is one major ethical concern associated with the use of IoT devices in daily life?</p>`,
          options: [`They increase energy consumption.`, `They promote social interaction.`, `They collect sensitive personal data.`, `They rely heavily on human supervision.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They collect sensitive personal data.</p><p>IoT devices collect sensitive personal data, which raises privacy concerns if mismanaged.</p>` }
      ] },
    { number: '385', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary limitation of early trolling detection methods that relied on simple keyword filters?</p>`,
          options: [`They could only detect coded language such as slang.`, `They were unable to interpret the intent or tone behind the words.`, `They frequently flagged humour as offensive interactions.`, `They required vast datasets to be effective.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They were unable to interpret the intent or tone behind the words.</p><p>Early keyword filters couldn't understand intent or tone, allowing trolls to bypass them with misspellings or sarcasm.</p>` }
      ] },
    { number: '386', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What makes trolling a significant concern in enterprise-level IoT environments?</p>`,
          options: [`It can cause physical damages to devices.`, `It disrupts gameplay in online gaming.`, `It erodes trust and limits adoption of IoT technologies.`, `It improves cybersecurity resilience.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It erodes trust and limits adoption of IoT technologies.</p><p>Trolling incidents demonstrate vulnerabilities in IoT systems, which can harm consumer trust and limit technology adoption.</p>` }
      ] },
    { number: '387', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>How does AI contribute to real-time decision-making in IoT systems?</p>`,
          options: [`By manually sorting data.`, `By collecting data through sensors.`, `By instantly adjusting systems based on live data.`, `By manufacturing IoT devices.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By instantly adjusting systems based on live data.</p><p>AI contributes to real-time decision-making in IoT systems by instantly adjusting systems based on live data.</p>` }
      ] },
    { number: '388', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>How do modern intelligent systems enhance trolling detection compared to early methods?</p>`,
          options: [`They utilize keyword filters.`, `They use natural language processing to understand intent and tone.`, `They only detect explicit language.`, `They primarily focus on image content.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They use natural language processing to understand intent and tone.</p><p>Modern intelligent systems use natural language processing and machine learning to understand the intent and tone beyond just the words used.</p>` }
      ] },
    { number: '389', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is a common consequence of trolling in online gaming environments?</p>`,
          options: [`Increased gameplay resistance`, `Reduced user retention`, `Improved gaming strategies`, `Enhanced player collaboration`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Reduced user retention</p><p>Trolling can create toxic gaming environments that drive players away, thereby reducing user retention.</p>` }
      ] },
    { number: '390', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a potential risk associated with biased AI training data in recruitment platforms?</p>`,
          options: [`Increased operational efficiency`, `Enhanced user experience`, `Unfair outcomes and legal risks`, `Improved candidate diversity`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Unfair outcomes and legal risks</p><p>Biased AI training data in recruitment can lead to unfair outcomes and legal risks by favoring certain groups over others.</p>` }
      ] },
    { number: '391', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>Which detection strategy uses past user activity to identify abnormal trolling behavior?</p>`,
          options: [`Content Analysis`, `Anomaly Detection`, `Sentiment Analysis`, `Contextual Awareness`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Anomaly Detection</p><p>Anomaly Detection focuses on identifying unusual spikes or changes in behavior compared to normal user patterns.</p>` }
      ] },
    { number: '392', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>How does AI enhance predictive analysis in IoT applications?</p>`,
          options: [`By enabling IoT devices to store more historical data.`, `By allowing devices to operate independently from the internet.`, `By forecasting future events based on historical data.`, `By reducing the cost of IoT device manufacturing.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By forecasting future events based on historical data.</p><p>AI enhances predictive analysis in IoT by learning from historical data to forecast future events.</p>` }
      ] },
    { number: '393', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is one reason why trolling in smart homes can erode user confidence in IoT technologies?</p>`,
          options: [`Trolling in smart homes can lead to increased energy consumption.`, `Trolling incidents may cause users to doubt the reliability of IoT devices.`, `Smart home trolling typically results in higher maintenance costs.`, `Most smart home devices are inherently insecure.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Trolling incidents may cause users to doubt the reliability of IoT devices.</p><p>Trolling can lead to repeated false alerts or commands in smart homes, undermining trust in IoT technologies.</p>` }
      ] },
    { number: '394', marks: 1, layout: 0, section: 'Trolling & AI in IoT',
      items: [
        { type: 'mcq',
          question: `<p>What is a major challenge companies face when handling sensitive personal data collected by IoT devices?</p>`,
          options: [`Ensuring the availability of data to all stakeholders`, `Complying with strict privacy regulations such as GDPR`, `Increasing the data storage capacity frequently`, `Providing real-time analytics to end users`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Complying with strict privacy regulations such as GDPR</p><p>Companies must comply with strict privacy regulations to protect the sensitive personal data collected by IoT devices, maintaining public trust.</p>` }
      ] },
    // ---------------- Rules, Facts, and Certainty Factors ----------------
    { number: '395', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of rules in an expert system?</p>`,
          options: [`To store data for retrieval and processing.`, `To define the user interface of the system.`, `To connect known facts to possible conclusions.`, `To manage hardware resources efficiently.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To connect known facts to possible conclusions.</p><p>Rules are central to an expert system's intelligence, as they connect known facts to possible conclusions through logical reasoning.</p>` }
      ] },
    { number: '396', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential consequence of an expert system using incorrect facts?</p>`,
          options: [`The system might produce unreliable outcomes.`, `The system will automatically correct the facts.`, `The system will stop functioning entirely.`, `The system will provide only the correct conclusions.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The system might produce unreliable outcomes.</p><p>If the facts are incorrect, the expert system may produce flawed results, no matter how well its rules are designed.</p>` }
      ] },
    { number: '397', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What does a certainty factor (CF) of 0.5 indicate about an expert system's conclusion?</p>`,
          options: [`The conclusion is definitely true.`, `The conclusion is absolutely false.`, `The conclusion has medium confidence.`, `The conclusion is irrelevant.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The conclusion has medium confidence.</p><p>A certainty factor of 0.5 indicates medium confidence, meaning the conclusion is possible but not certain.</p>` }
      ] },
    { number: '398', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What logical structure is commonly used to express rules in an expert system?</p>`,
          options: [`WHILE–THEN statements`, `FOR–EACH statements`, `IF–THEN statements`, `CASE–END statements`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — IF–THEN statements</p><p>Rules in expert systems are typically expressed as IF–THEN statements to capture cause-and-effect reasoning.</p>` }
      ] },
    { number: '399', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary source of facts in an expert system that can help identify a diagnosis?</p>`,
          options: [`Internet search`, `User Inputs`, `Social Media Trends`, `Random Guessing`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — User Inputs</p><p>User Inputs provide direct information such as patient symptoms, crucial for diagnosing in expert systems.</p>` }
      ] },
    { number: '400', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>How do certainty factors help in decision-making within expert systems?</p>`,
          options: [`They provide absolute certainty about conclusions.`, `They allow systems to rank multiple conclusions by likelihood.`, `They eliminate the need for human intervention.`, `They complicate the decision-making process unnecessarily.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow systems to rank multiple conclusions by likelihood.</p><p>Certainty factors enable expert systems to present and rank multiple possible conclusions based on likelihood, mirroring human decision-making.</p>` }
      ] },
    { number: '401', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a source of facts in an expert system?</p>`,
          options: [`User feedback`, `Sensor data`, `Inference rules`, `Neural networks`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Sensor data</p><p>Sensor data is a source of facts, providing automated readings for expert systems.</p>` }
      ] },
    { number: '402', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>How does an expert system handle rule conflicts when multiple rules suggest different conclusions?</p>`,
          options: [`It randomly selects one conclusion.`, `It ignores all conflicting rules.`, `It uses certainty factors to weigh conclusions or presents multiple diagnoses.`, `It always prioritizes the earliest rule.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It uses certainty factors to weigh conclusions or presents multiple diagnoses.</p><p>Expert systems often use certainty factors or allow multiple conclusions to handle rule conflicts.</p>` }
      ] },
    { number: '403', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What happens when multiple rules with different certainty factors are triggered in an expert system?</p>`,
          options: [`The system ignores the rule with the lower certainty factor.`, `The system presents only the rule with the highest certainty factor.`, `The system combines the certainty factors into a single value.`, `The system discards all triggered rules to avoid confusion.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The system combines the certainty factors into a single value.</p><p>An expert system combines the certainty factors to provide a single confidence score reflecting the combined strength of the evidence.</p>` }
      ] },
    { number: '404', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What is a derived fact in an expert system?</p>`,
          options: [`Information directly entered by a user`, `Automated readings collected from devices`, `Facts calculated or inferred from other data`, `Pre-stored information from databases`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Facts calculated or inferred from other data</p><p>Derived facts are calculated or inferred from other data in an expert system.</p>` }
      ] },
    { number: '405', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What does the use of "AND" logic in rule conditions require in an expert system?</p>`,
          options: [`At least one condition must be true.`, `All conditions must be true.`, `None of the conditions need to be true.`, `All conditions must be false.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — All conditions must be true.</p><p>"AND" logic requires all conditions to be true for the conclusion to be reached.</p>` }
      ] },
    { number: '406', marks: 1, layout: 0, section: 'Rules, Facts, and Certainty Factors',
      items: [
        { type: 'mcq',
          question: `<p>What is a certainty factor used for in expert systems?</p>`,
          options: [`To eliminate uncertainty completely.`, `To express the system's confidence in a conclusion.`, `To increase the system's accuracy by 100%.`, `To guarantee that the conclusion is correct.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To express the system's confidence in a conclusion.</p><p>A certainty factor is used to express the system's confidence in a conclusion and reflects real-life decision-making by indicating likelihoods instead of absolute certainty.</p>` }
      ] },
    // ---------------- Source Verification & IF-THEN Logic ----------------
    { number: '407', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which strategy helps ensure information accuracy by comparing a claim against multiple credible sources?</p>`,
          options: [`Check the Author`, `Cross-Check`, `Evaluate the Domain`, `Fact-Checking Tools`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Cross-Check</p><p>Cross-checking involves comparing information across multiple reliable sources to verify accuracy.</p>` }
      ] },
    { number: '408', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is an essential feature of IF–THEN rules in expert systems that ensures decisions are applied the same way every time?</p>`,
          options: [`Scalability`, `Consistency`, `Transparency`, `Adaptability`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Consistency</p><p>IF–THEN rules ensure decisions are applied consistently, reducing arbitrary or biased judgments.</p>` }
      ] },
    { number: '409', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is a key strategy for ensuring intelligent systems produce high-quality outputs?</p>`,
          options: [`Using random social media posts as data sources`, `Incorporating source verification strategies`, `Ignoring data accuracy`, `Relying solely on outdated data`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Incorporating source verification strategies</p><p>Source verification strategies help ensure that intelligent systems use reliable and accurate data, which is essential for producing accurate and safe outputs.</p>` }
      ] },
    { number: '410', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of using flowcharts in enterprise computing?</p>`,
          options: [`They provide a permanent record of decision-making logic.`, `They eliminate the need for coding in expert systems.`, `They ensure complete accuracy in decision-making.`, `They speed up the processing time of computers.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — They provide a permanent record of decision-making logic.</p><p>Flowcharts serve as permanent records of decision-making logic, making it easier to train new team members or audit system behaviour.</p>` }
      ] },
    { number: '411', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is a major risk associated with training intelligent systems on outdated data?</p>`,
          options: [`It may increase the system's credibility.`, `It may lead to accurate investment recommendations.`, `It may reinforce harmful social biases.`, `It may cause the system to provide incorrect or unsafe advice.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It may cause the system to provide incorrect or unsafe advice.</p><p>Outdated data can lead to errors in advice or recommendations, making them incorrect or unsafe.</p>` }
      ] },
    { number: '412', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which strategy involves verifying the qualifications and background of the information's author?</p>`,
          options: [`Cross-Check`, `Check the Author`, `Trace the Evidence`, `Evaluate the Domain`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Check the Author</p><p>Check the Author is the strategy that focuses on the author’s credibility to assess the reliability of the information.</p>` }
      ] },
    { number: '413', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the main benefits of using IF–THEN logic in intelligent systems?</p>`,
          options: [`It allows systems to handle thousands of scenarios without a risk of rule explosion.`, `It ensures that the reasoning process is transparent and easily understandable.`, `It allows for easy integration with machine learning models.`, `It automatically adapts to new knowledge without human intervention.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It ensures that the reasoning process is transparent and easily understandable.</p><p>IF–THEN logic ensures that the reasoning process is transparent and easily understandable.</p>` }
      ] },
    { number: '414', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What symbol in a flowchart represents a decision point in the IF–THEN logic?</p>`,
          options: [`Circle`, `Diamond`, `Rectangle`, `Arrow`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Diamond</p><p>Diamonds in flowcharts are used to represent decisions, which are the "IF" parts of the IF–THEN logic.</p>` }
      ] },
    { number: '415', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What factor is essential for intelligent systems to provide reliable recommendations?</p>`,
          options: [`Incorporating outdated information`, `Using promotional materials from companies`, `Verifying the credibility and accuracy of data sources`, `Ensuring data is influenced by social media trends`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Verifying the credibility and accuracy of data sources</p><p>Intelligent systems rely on credible and accurate data sources to make reliable recommendations, as poor-quality inputs lead to poor-quality outputs.</p>` }
      ] },
    { number: '416', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is a common risk if an intelligent system fails to trace information back to original studies or data sets?</p>`,
          options: [`It may promote unreliable domains.`, `It might replicate misinformation without noticing contradictions.`, `It could base decisions on cherry-picked or misinterpreted evidence.`, `It may not give proper visibility to credible authors.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It could base decisions on cherry-picked or misinterpreted evidence.</p><p>Failure to trace information back to original studies can lead systems to make decisions based on incomplete or distorted evidence.</p>` }
      ] },
    { number: '417', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a reason why flowcharts are valuable in enterprise computing?</p>`,
          options: [`They can directly execute decisions without coding.`, `They eliminate the need for documentation.`, `They reveal gaps and redundancies in logic.`, `They replace all forms of programming language.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They reveal gaps and redundancies in logic.</p><p>Flowcharts reveal gaps and redundancies in logic, which helps in error detection and improving system efficiency.</p>` }
      ] },
    { number: '418', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>In the context of expert systems, what role does the inference engine play?</p>`,
          options: [`It contains the rules provided by domain experts.`, `It matches facts to rules and applies logic to reach conclusions.`, `It automates household devices based on specific conditions.`, `It captures the uncertainty of conclusions using certainty factors.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It matches facts to rules and applies logic to reach conclusions.</p><p>The inference engine is responsible for matching facts to rules and applying logic to reach conclusions in an expert system.</p>` }
      ] },
    { number: '419', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What is a critical consideration to avoid when training intelligent systems to prevent biased outputs?</p>`,
          options: [`Using peer-reviewed journals as the only data source`, `Integrating diverse datasets and representation gaps`, `Relying primarily on politically biased sources`, `Updating datasets frequently to include current information`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Relying primarily on politically biased sources</p><p>Relying primarily on politically biased sources can lead to biased outputs by reinforcing "echo chambers" and promoting propaganda.</p>` }
      ] },
    { number: '420', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>Which strategy involves using established fact-checking tools to verify controversial or viral claims?</p>`,
          options: [`Cross-checking`, `Evaluating the Domain`, `Fact-Checking Tools`, `Checking the Author`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Fact-Checking Tools</p><p>Fact-checking tools like Snopes or PolitiFact assess the validity of controversial claims, helping to confirm or debunk them.</p>` }
      ] },
    { number: '421', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What visual tool is often used to transform abstract IF–THEN rules into an easily understandable format for both humans and machines?</p>`,
          options: [`Data tables`, `Flowcharts`, `Scatter plots`, `Histograms`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Flowcharts</p><p>Flowcharts transform abstract IF–THEN rules into visual diagrams, making them easier to understand.</p>` }
      ] },
    { number: '422', marks: 1, layout: 0, section: 'Source Verification & IF-THEN Logic',
      items: [
        { type: 'mcq',
          question: `<p>What limitation is associated with using IF–THEN rules in expert systems?</p>`,
          options: [`They do not allow for human expertise capture.`, `They cannot handle uncertainty at all.`, `They can result in a rule explosion as complexity increases.`, `They enable rapid adaptation to new knowledge.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They can result in a rule explosion as complexity increases.</p><p>IF–THEN rules can lead to a rule explosion, requiring thousands of rules to handle complex scenarios.</p>` }
      ] },
    // ---------------- Smart Systems: Design, Inputs, Processing ----------------
    { number: '423', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What role do actuators play in a smart system?</p>`,
          options: [`They collect data from the environment.`, `They process data to make decisions.`, `They produce the final output of the system.`, `They provide data storage for the system.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They produce the final output of the system.</p><p>Actuators are responsible for converting electrical signals into physical actions, which results in the final output of the system.</p>` }
      ] },
    { number: '424', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary function of sensors in a smart system?</p>`,
          options: [`To adjust the output settings.`, `To detect physical conditions in the environment.`, `To reduce energy consumption.`, `To send notifications to users.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To detect physical conditions in the environment.</p><p>Sensors in a smart system gather information from the environment by detecting physical conditions.</p>` }
      ] },
    { number: '425', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What role do sensors play in smart systems?</p>`,
          options: [`They process data and execute commands.`, `They remove obstacles in the environment.`, `They monitor the environment and collect data.`, `They store data for long-term analysis.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They monitor the environment and collect data.</p><p>Sensors monitor the environment and collect data, acting as the "eyes and ears" of the system.</p>` }
      ] },
    { number: '426', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What allows a smart thermostat to adjust heating or cooling schedules based on user patterns?</p>`,
          options: [`IF–THEN logic`, `Machine Learning`, `Flowcharts`, `Block-based coding tools`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Machine Learning</p><p>Machine learning enables a smart thermostat to learn patterns from data and adjust schedules accordingly.</p>` }
      ] },
    { number: '427', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the benefits of using a simulator when designing smart systems?</p>`,
          options: [`It allows real-time monitoring of physical components.`, `Simulators can replace all physical prototyping.`, `They provide a safe environment to test electrical systems.`, `Simulators are only used for small-scale projects.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They provide a safe environment to test electrical systems.</p><p>Simulators provide a safe environment for testing electrical systems without the risk of damaging real components.</p>` }
      ] },
    { number: '428', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>Which component of a smart system is responsible for interpreting sensor data and making decisions?</p>`,
          options: [`Actuators`, `Sensors`, `Processing (Logic or Algorithms)`, `Inputs`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Processing (Logic or Algorithms)</p><p>The processing component uses logic or algorithms to interpret data and make decisions in a smart system.</p>` }
      ] },
    { number: '429', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of a real-world output from a smart system that involves turning on a device in response to sensor input?</p>`,
          options: [`A smartwatch sending a workout reminder.`, `A street lamp turning on at night.`, `A smartphone playing a video.`, `A printer completing a print job.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A street lamp turning on at night.</p><p>A street lamp turning on at night is an example of a smart system output where a light sensor detects darkness and triggers the lamp to turn on.</p>` }
      ] },
    { number: '430', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>Which type of sensor would be most appropriate for automatically adjusting a building's lighting based on ambient conditions?</p>`,
          options: [`Temperature Sensor`, `Humidity Sensor`, `Light Sensor`, `Motion Sensor`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Light Sensor</p><p>Light sensors detect brightness or changes in light intensity, making them suitable for adjusting lighting automatically.</p>` }
      ] },
    { number: '431', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>Why is modelling considered a low-risk, high-value step in the development of smart systems?</p>`,
          options: [`It eliminates the need for coding in the final product.`, `It allows for early detection and correction of logic errors.`, `It requires no technical knowledge to create models.`, `It ensures hardware components are always accurate.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It allows for early detection and correction of logic errors.</p><p>Modelling allows for early identification and correction of logic errors without the costs and risks of building physical prototypes.</p>` }
      ] },
    { number: '432', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of processing in a smart system?</p>`,
          options: [`To collect raw data from the environment.`, `To convert raw data into meaningful actions.`, `To store data for future analysis.`, `To manually control system actions.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To convert raw data into meaningful actions.</p><p>Processing converts raw data into meaningful actions by applying rules, enabling smart systems to act autonomously.</p>` }
      ] },
    { number: '433', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of the input stage in a smart system?</p>`,
          options: [`To display collected data to users`, `To monitor the environment and collect data`, `To execute decisions made by the system processor`, `To control the system's output devices`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To monitor the environment and collect data</p><p>The input stage is responsible for monitoring the environment and collecting data through sensors.</p>` }
      ] },
    { number: '434', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>In a smart system, what is the primary purpose of an output?</p>`,
          options: [`To gather data from the environment.`, `To convert electrical signals into physical actions.`, `To process and analyze collected data.`, `To store data for future use.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To convert electrical signals into physical actions.</p><p>Outputs convert electrical signals into physical actions through actuators, creating tangible results for users and environments.</p>` }
      ] },
    { number: '435', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is one major advantage of using flowcharts in the modelling of smart systems?</p>`,
          options: [`They eliminate the need for actual testing of a system.`, `They use physical components to demonstrate system logic.`, `They provide a shared visual language for collaboration.`, `They ensure that hardware is more durable.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — They provide a shared visual language for collaboration.</p><p>Flowcharts provide a shared visual language for collaboration, making it easier for teams to understand and communicate system logic.</p>` }
      ] },
    { number: '436', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary benefit of using IF–THEN logic in smart systems?</p>`,
          options: [`It allows systems to collect data efficiently.`, `It enables systems to respond automatically to different conditions.`, `It reduces the need for sensors in the system.`, `It makes systems less dependent on algorithms.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It enables systems to respond automatically to different conditions.</p><p>IF–THEN logic enables systems to respond automatically to different environmental conditions, allowing for basic automation.</p>` }
      ] },
    { number: '437', marks: 1, layout: 0, section: 'Smart Systems: Design, Inputs, Processing',
      items: [
        { type: 'mcq',
          question: `<p>How do smart systems improve efficiency in smart lighting applications?</p>`,
          options: [`By manually controlling all lights in a building.`, `By using smart bulbs with different colors.`, `By activating lights only when motion is detected and it is needed.`, `By continuously keeping lights on for convenience.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By activating lights only when motion is detected and it is needed.</p><p>Smart lighting systems improve efficiency by turning lights on only when motion is detected and it is necessary, thus avoiding wasted energy.</p>` }
      ] },
    // ---------------- System Output, Assessment, & Applications ----------------
    { number: '438', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Which evaluation metric is crucial for assessing the performance of digital assistants like Siri or Alexa in maintaining a conversation?</p>`,
          options: [`Speech Recognition Accuracy`, `Response Speed`, `Context Awareness`, `User Satisfaction`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Context Awareness</p><p>Context Awareness measures the ability of digital assistants to maintain a coherent conversation, understanding follow-up questions or commands.</p>` }
      ] },
    { number: '439', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>What evaluation metric measures how quickly a system produces outputs, crucial for applications like real-time fraud detection?</p>`,
          options: [`Precision`, `Efficiency`, `Recall`, `User Satisfaction`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Efficiency</p><p>Efficiency measures the speed and resource use of a system's output, important for real-time applications.</p>` }
      ] },
    { number: '440', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Which evaluation metric is particularly important when dealing with imbalanced datasets, such as spam filtering?</p>`,
          options: [`Accuracy`, `Precision`, `Reliability`, `Efficiency`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Precision</p><p>Precision is important for imbalanced datasets as it focuses on the correctness of positive predictions, crucial in applications like spam filtering.</p>` }
      ] },
    { number: '441', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Which application of streaming services focuses on keeping users engaged by suggesting appealing new content?</p>`,
          options: [`Content Recommendations`, `Dynamic Playlists`, `User Retention`, `Ethical Concerns`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — User Retention</p><p>User Retention is focused on keeping users engaged by constantly suggesting appealing new content.</p>` }
      ] },
    { number: '442', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Why is clear presentation of outputs important in intelligent systems?</p>`,
          options: [`It simplifies system development.`, `It enhances human understanding and trust.`, `It reduces system errors.`, `It increases processing speed.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It enhances human understanding and trust.</p><p>Clear presentation of outputs helps humans interpret and trust the results, bridging the gap between complex computations and human understanding.</p>` }
      ] },
    { number: '443', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>What is an important metric to consider when ensuring a classification system, such as for spam detection, balances identifying positives while minimizing false positives?</p>`,
          options: [`Safety`, `User Satisfaction`, `Precision and Recall`, `Accuracy`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Precision and Recall</p><p>Precision and recall help balance identifying correct positive cases while minimizing false positives in classification tasks.</p>` }
      ] },
    { number: '444', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the key reasons why visualization improves trust in outputs of intelligent systems?</p>`,
          options: [`Visualizations help in reducing the computational load of the system.`, `Visualizations make data presentation more cost-effective.`, `Visualizations allow users to detect patterns and issues more easily.`, `Visualizations ensure the system's outputs are always accurate.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Visualizations allow users to detect patterns and issues more easily.</p><p>Visualizations allow users to detect patterns and issues more easily, enhancing trust by making complex data more understandable.</p>` }
      ] },
    { number: '445', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>What is an example of how supercomputers contribute to medical research?</p>`,
          options: [`Simulating protein folding to design new medicines.`, `Controlling smart home devices for patient monitoring.`, `Providing dynamic playlists for stress relief.`, `Recommending documentaries about human anatomy.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Simulating protein folding to design new medicines.</p><p>Supercomputers simulate protein folding to help design new medicines in medical research.</p>` }
      ] },
    { number: '446', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary reason why outputs are considered the "voice" of intelligent systems?</p>`,
          options: [`They perform complex calculations.`, `They allow human interaction with the system.`, `They predict future events accurately.`, `They store vast amounts of data.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — They allow human interaction with the system.</p><p>Outputs are the means by which humans interact with a system, making them the "voice" of intelligent systems.</p>` }
      ] },
    { number: '447', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Which evaluation metric for autonomous vehicles focuses on their ability to operate consistently in different environments like rain or snow?</p>`,
          options: [`Safety`, `Reaction Time`, `Environmental Awareness`, `Reliability`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Environmental Awareness</p><p>Environmental Awareness evaluates the vehicle's performance in various weather and lighting conditions.</p>` }
      ] },
    { number: '448', marks: 1, layout: 0, section: 'System Output, Assessment, & Applications',
      items: [
        { type: 'mcq',
          question: `<p>Which metric is crucial for evaluating the consistency of outputs in intelligent systems such as navigation or scientific simulations?</p>`,
          options: [`Accuracy`, `Precision`, `Reliability`, `Safety`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Reliability</p><p>Reliability measures whether a system consistently produces the same outputs under the same conditions.</p>` }
      ] },
  ]
});
