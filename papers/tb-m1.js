registerExam({
  id: 'tb-m1',
  title: 'Textbook MCQ — Module 1: Enterprise project',
  source: 'Textbook', year: 2025, kind: 'textbook',
  readingMinutes: 0, workingMinutes: 0,
  totalMarks: 100,
  coverNotes: `<p>Multiple-choice questions from the textbook exercises for Module 1. Answers were prepared from the textbook content (the textbook has no answer key).</p>`,
  groups: [
    // ---------------- Exercise 1.1.1 ----------------
    { number: '1', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the first stage of system development focused on?</p>`,
          options: [`Identifying and defining`, `Research and designing`, `Designing and implementation`, `Testing and evaluating`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Identifying and defining. The first stage defines the problem and requirements before any design or development begins (textbook p. 5).</p>` }
      ] },
    { number: '2', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>How is data collected during this stage of system development?</p>`,
          options: [`Through developing requirement reports and feasibility studies.`, `By making estimations based on previous experiences.`, `Through the use of interviews, surveys and observations.`, `Through using AI based data collection tools that operate independently.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Through the use of interviews, surveys and observations. The textbook states that observations, interviews and surveys help collect data about an enterprise's existing issues or opportunities when defining the problem (textbook p. 6).</p>` }
      ] },
    { number: '3', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the main purpose of a problem definition?</p>`,
          options: [`A problem definition is used to gather feedback from a range of different individuals about a system.`, `A problem definition is used to document a specific problem and establish its scope`, `A problem definition is used for researching and designing potential solutions to a problem.`, `A problem definition supports users in understanding how a newly developed system works.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — A problem definition is used to document a specific problem and establish its scope. It summarises the needs of the project and acts as the starting point for the team (textbook p. 6).</p>` }
      ] },
    { number: '4', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following tools is commonly used to schedule tasks and track a project's progress over time?</p>`,
          options: [`Flowchart`, `Gantt chart`, `SWOT analysis`, `Data flow diagram`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Gantt chart. Gantt charts are commonly used to schedule tasks, allocate resources and track a system's development progress over time (textbook p. 8).</p>` }
      ] },
    { number: '5', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a procedure that involves repeating system development steps to perfect projects and solutions?</p>`,
          options: [`Waterfall approach`, `Linear approach`, `Iterative approach`, `Big Bang approach`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Iterative approach. An iterative approach involves the repetition of specific steps (feedback, modification, further testing) to perfect projects and solutions (textbook p. 9).</p>` }
      ] },
    { number: '6', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which development methodology is known for its use of sprints?</p>`,
          options: [`Outsourcing`, `Prototyping`, `End user`, `Agile`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Agile. The agile approach uses development cycles divided into sprints, typically lasting 1–4 weeks (textbook p. 9).</p>` }
      ] },
    { number: '7', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a feasibility study?</p>`,
          options: [`To assess whether a proposed project should be undertaken.`, `To determine the final implementation plan for a proposed project.`, `To allocate resources throughout the system development cycle`, `To test a final system before it is published.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To assess whether a proposed project should be undertaken. A feasibility study lets a project manager decide whether a project is worth undertaking or whether costs and risks are too great (textbook p. 13).</p>` }
      ] },
    { number: '8', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What is a primary purpose of prototyping in system development?</p>`,
          options: [`It serves as a backup file for data related to a developing project.`, `It is the final version of a system released on the conclusion of development`, `It is the default page that loads when visitors access a website.`, `It is a working model of a system built to gather feedback.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It is a working model of a system built to gather feedback. A requirements prototype is a working model built to emulate a system; users and clients are consulted for feedback on it (textbook p. 14).</p>` }
      ] },
    { number: '9', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>What does active listening involve in project management?</p>`,
          options: [`Directing conversation away from the subject topic.`, `Trying to find a solution that makes everyone happy.`, `Reiterating what was spoken to ensure understanding.`, `Using a mediator to help resolve conflict amongst different project team members.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Reiterating what was spoken to ensure understanding. In active listening the listener replies by reiterating what was said to show it was heard and understood correctly (textbook p. 17).</p>` }
      ] },
    { number: '10', marks: 1, layout: 0, section: 'Exercise 1.1.1',
      items: [
        { type: 'mcq',
          question: `<p>Which skill is crucial for finding agreements related to different ideas between project team members?</p>`,
          options: [`Negotiation skills`, `Programming skills.`, `Graphic design skills.`, `Data entry skills.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Negotiation skills. Negotiation involves two or more parties reaching an agreement on a matter where they have different interests or ideas (textbook p. 18).</p>` }
      ] },

    // ---------------- Exercise 1.1.2 ----------------
    { number: '11', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is one of the primary benefits of offshore development for enterprises?</p>`,
          options: [`Increased local employment`, `Support of domestic resources`, `Improved communication`, `Cost reduction`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Cost reduction. The textbook names cost reduction as one of the primary benefits, as companies save on labour and operational costs in countries with lower wages (textbook p. 24).</p>` }
      ] },
    { number: '12', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How does offshore development enhance a company's capabilities?</p>`,
          options: [`By providing access to global talent.`, `By increasing local operational costs.`, `By reducing project scalability.`, `By limiting the talent pool.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — By providing access to global talent. Offshore development gives access to a global talent pool with diverse skill sets and expertise that may be scarce locally (textbook p. 24).</p>` }
      ] },
    { number: '13', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How does remote work benefit employees?</p>`,
          options: [`Through increasing their working hours per day.`, `It decreases work-life balance for employees`, `By reducing commuting costs and time for employees.`, `Through employers providing workspaces for their employees.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By reducing commuting costs and time for employees. Working from home allows workers to save time and money travelling to and from work (textbook p. 25).</p>` }
      ] },
    { number: '14', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a common tool used to support remote work?</p>`,
          options: [`Physical meeting rooms`, `Video conferencing software`, `Authoring software`, `Physical documentation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Video conferencing software. Remote workers interact with their workplace using collaborative platforms, email and video conferencing software (textbook p. 25).</p>` }
      ] },
    { number: '15', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an advantage of remote work for employers?</p>`,
          options: [`It provides employers access to global talent.`, `There are increased costs in providing equipment for employees.`, `It provides limited employee flexibility.`, `There are higher rental costs due to the requirement for more physical working spaces.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It provides employers access to global talent. Remote working gives employers a wider talent pool unrestricted by geographical boundaries (textbook p. 25).</p>` }
      ] },
    { number: '16', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How can enterprises overcome the challenges of remote work?</p>`,
          options: [`By reducing the flexibility of work options for employees.`, `By increasing physical office space available for their workers to complete their tasks.`, `By integrating collaboration tools and implementing cybersecurity measures.`, `By eliminating remote work options and providing more structure in work procedures.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By integrating collaboration tools and implementing cybersecurity measures. Both are listed as strategies to overcome the communication, collaboration and security challenges of remote work (textbook p. 25).</p>` }
      ] },
    { number: '17', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a benefit of accessing freelance work for an enterprise?</p>`,
          options: [`They can lock in workers for long-term commitments.`, `Increased overhead costs of hiring independent staff to complete specific work.`, `The process reduces workforce flexibility.`, `It provides the enterprise with access to specialised skills on a project basis.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It provides the enterprise with access to specialised skills on a project basis. Hiring freelancers gives access to specialised skills when needed for certain projects, reducing long-term commitments (textbook p. 26).</p>` }
      ] },
    { number: '18', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How does freelance work benefit individual professionals?</p>`,
          options: [`Flexibility in choosing projects and work hours.`, `It provides limited income sources.`, `Reduced job satisfaction.`, `Increased long-term commitments to enterprises.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Flexibility in choosing projects and work hours. For freelancers the most striking benefit is the flexibility to choose when, where and whom they work for (textbook p. 26).</p>` }
      ] },
    { number: '19', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>How do start-ups benefit the economy and society?</p>`,
          options: [`By reducing competition.`, `By limiting technological advancements.`, `By driving innovation and job creation.`, `By avoiding sustainability initiatives.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — By driving innovation and job creation. Start-ups are at the forefront of innovation, and economies benefit from the jobs they create (textbook p. 27).</p>` }
      ] },
    { number: '20', marks: 1, layout: 0, section: 'Exercise 1.1.2',
      items: [
        { type: 'mcq',
          question: `<p>What role do enterprises play in supporting start-ups?</p>`,
          options: [`By avoiding collaboration with start-up businesses, allowing them to thrive on their own.`, `By providing mentorship, funding and access to networks.`, `By increasing market competition amongst small businesses.`, `By limiting innovation within their sector.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — By providing mentorship, funding and access to networks. Enterprises support start-ups through collaboration, investment and partnerships, giving access to resources, funding and market data (textbook p. 26).</p>` }
      ] },

    // ---------------- Exercise 1.2.1 ----------------
    { number: '21', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which tool is used to visually represent processes and workflows within a system?</p>`,
          options: [`Gantt chart`, `Bar chart`, `System flowchart`, `Decision matrix`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — System flowchart. System flowcharts are tools used to visually represent the processes and workflows within a system (textbook p. 39).</p>` }
      ] },
    { number: '22', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of time/task action plans in project management?</p>`,
          options: [`To organise and prioritise tasks to meet project objectives within a scheduled timeframe.`, `To design the graphical user interface.`, `To generate random tasks for team members.`, `To store and retrieve historical data.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To organise and prioritise tasks to meet project objectives within a scheduled timeframe. This is the textbook's definition of time/task action plans (textbook p. 35).</p>` }
      ] },
    { number: '23', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a category of software tool that supports online collaboration for a project team?</p>`,
          options: [`Calculator`, `File Transfer Protocol (FTP)`, `Data Warehousing.`, `Video Conferencing.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Video Conferencing. Communication tools such as chat, video conferencing and email are listed as online collaboration tools (textbook p. 34).</p>` }
      ] },
    { number: '24', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What does a process diary typically document?</p>`,
          options: [`Financial transactions`, `Progress, thoughts, and decisions made by team members during development`, `Software code`, `Marketing strategies`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Progress, thoughts, and decisions made by team members during development. Process diaries record the progress of a system and team members' thoughts and decisions (textbook p. 36).</p>` }
      ] },
    { number: '25', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of establishing a budget for a project?</p>`,
          options: [`Planning project scope and managing financial resources effectively`, `Creating a project timeline`, `Designing user interfaces`, `Developing coding standards`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Planning project scope and managing financial resources effectively. A budget lets an enterprise allocate finances efficiently and maintain a project's scope without overspending (textbook p. 36).</p>` }
      ] },
    { number: '26', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which symbol in a data flow diagram is used to represent a process?</p>`,
          options: [`Square`, `Triangle`, `Circle`, `Three-sided rectangle`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Circle. In the textbook's DFDs a process is a circle; external entities are squares and data stores are three-sided rectangles (textbook pp. 41, 43).</p>` }
      ] },
    { number: '27', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of a Level 0 data flow diagram?</p>`,
          options: [`To show the detailed processes within a system.`, `To provide an overview of an entire information system.`, `To design the user interface.`, `To represent hardware components.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To provide an overview of an entire information system. A Level 0 DFD (context diagram) has a single process representing the entire system (textbook p. 41).</p>` }
      ] },
    { number: '28', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of using a decision tree?</p>`,
          options: [`To store data in a structured format.`, `To illustrate a directory's structure and hierarchy.`, `To create flowcharts for data movement in a system.`, `To specify possible outcomes for different choices.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To specify possible outcomes for different choices. Decision trees show the possible outcomes of a system and the conditional paths that lead to each outcome (textbook p. 45).</p>` }
      ] },
    { number: '29', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which tool is most effective in providing a clear reference point for accountability in a project?</p>`,
          options: [`System flowchart.`, `Marketing flyer.`, `Data flow diagram.`, `Time/task action plan.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Time/task action plan. These plans schedule activities and deadlines and assign responsible parties to tasks, so it is clear who is accountable for what (textbook p. 35).</p>` }
      ] },
    { number: '30', marks: 1, layout: 0, section: 'Exercise 1.2.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is true about a Level 1 data flow diagram?</p>`,
          options: [`The diagram provides an overview of an entire system.`, `The diagram illustrates the physical layout of hardware.`, `The diagram provides details on the individual processes within a system.`, `The diagram illustrates user interface design and navigational elements of a system.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — The diagram provides details on the individual processes within a system. A Level 1 DFD shows each process as an individual circle, giving greater detail than Level 0 (textbook p. 43).</p>` }
      ] },

    // ---------------- Exercise 1.2.2 ----------------
    { number: '31', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a core concept of computational thinking?</p>`,
          options: [`Ideation`, `Decomposition`, `User-centred design`, `Data validation`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Decomposition. Computational thinking is supported by pattern recognition, abstraction, algorithmic design and decomposition (textbook p. 49).</p>` }
      ] },
    { number: '32', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What does abstraction in computational thinking involve?</p>`,
          options: [`Breaking down a problem into smaller parts so it is easier to comprehend.`, `Creating a physical model of the system.`, `Testing different solutions to a problem to determine which is the best.`, `Focusing on essential details while ignoring irrelevant information.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Focusing on essential details while ignoring irrelevant information. Abstraction focuses on the most critical elements while filtering out unnecessary details (textbook p. 49).</p>` }
      ] },
    { number: '33', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What is an algorithm in the context of computational thinking?</p>`,
          options: [`A type of programming language used for creating applications.`, `A diagram to visually illustrate a system's components.`, `A step-by-step procedure created to solve a problem.`, `A set of variables to store data related to an application.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A step-by-step procedure created to solve a problem. Algorithmic design is the process of creating a step-by-step set of instructions to solve a specific problem (textbook p. 49).</p>` }
      ] },
    { number: '34', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key element related to design thinking?</p>`,
          options: [`Programming.`, `Empathy`, `Abstraction`, `Scope`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Empathy. Design thinking develops a system through a lens of creativity and empathy, beginning with understanding users (textbook p. 50).</p>` }
      ] },
    { number: '35', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>How may a problem be defined by a project team when using design thinking?</p>`,
          options: [`Through articulating the problem based on user needs.`, `Through developing algorithms based on components of the problem.`, `Through thinking of a problem as a subset of a larger system.`, `Through reviewing previous, similar projects as the foundation for new solutions.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Through articulating the problem based on user needs. After gathering data from users, the team refines the core problem around those users' needs (textbook p. 50).</p>` }
      ] },
    { number: '36', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a prototype?</p>`,
          options: [`A finished product ready to be released for commercial distribution.`, `A diagram outlining the development process used for creating a new solution.`, `A flowchart that illustrates a problem-solving process for a common issue.`, `A simple model or version of a product used for testing and obtaining feedback.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A simple model or version of a product used for testing and obtaining feedback. Prototypes of the team's best ideas are assessed with real users to gather feedback and refine the design (textbook p. 51).</p>` }
      ] },
    { number: '37', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>What does systems thinking primarily focus on?</p>`,
          options: [`Breaking down tasks into simple components so that they are easier to manage.`, `Understanding the relationships and interactions between parts of a system.`, `Gathering as much data as possible for developing a solution for a client.`, `Optimising individual components of a system in an isolated manner.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Understanding the relationships and interactions between parts of a system. Systems thinking focuses on how different components influence one another as part of a larger whole (textbook p. 51).</p>` }
      ] },
    { number: '38', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key principle of systems thinking?</p>`,
          options: [`Focusing on isolated elements of a project.`, `Using algorithms to solve a problem as efficiently as possible.`, `The use of a repetitive cycle of programming and testing to refine solutions.`, `Recognising that changes in one part of the system affect the whole system.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Recognising that changes in one part of the system affect the whole system. Systems thinking addresses problems where changes in one part can impact other parts or the entire system (textbook p. 51).</p>` }
      ] },
    { number: '39', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following would be considered a benefit when applying systems thinking?</p>`,
          options: [`Considering the long-term effects and interactions of system changes.`, `Focusing on solving individual tasks quickly providing greater resource efficiency`, `Isolating problems to simplify solutions.`, `Providing a logical framework for breaking down tasks and designing algorithms.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Considering the long-term effects and interactions of system changes. Systems thinking ensures short-term solutions do not harm the larger system and aligns solutions with long-term goals (textbook p. 52).</p>` }
      ] },
    { number: '40', marks: 1, layout: 0, section: 'Exercise 1.2.2',
      items: [
        { type: 'mcq',
          question: `<p>Which thinking concept involves breaking a problem into smaller, more manageable parts?</p>`,
          options: [`System thinking.`, `Agile thinking.`, `Design thinking.`, `Computational thinking.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Computational thinking. Computational thinking breaks complex scenarios into manageable components (decomposition) (textbook p. 49).</p>` }
      ] },

    // ---------------- Exercise 1.2.3 ----------------
    { number: '41', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>What is a key benefit of designing a system for ease of operation?</p>`,
          options: [`Reduced costs of development.`, `Advanced features can be implemented into a system.`, `Minimal training required for users.`, `Elaborate workflows can be integrated.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Minimal training required for users. Systems designed for ease of operation should be intuitive so users can operate functions with minimal training (textbook p. 57).</p>` }
      ] },
    { number: '42', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Why is automation important in designing a system for ease of maintenance?</p>`,
          options: [`It allows for individuals to interact through a user-friendly interface.`, `The process creates a physical model of the system to test.`, `The process supports in breaking down a problem into smaller parts.`, `It reduces the need for manual system intervention when managing a system.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — It reduces the need for manual system intervention when managing a system. Updates, backups and diagnostics can run automatically without IT staff manually installing them (textbook p. 57).</p>` }
      ] },
    { number: '43', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary purpose of clarifying relevant informatics in a system?</p>`,
          options: [`To efficiently manage data storage requirements of a system.`, `To ensure the system can effectively process and manage key data.`, `To increase the complexity of a system, maximising features and functionality.`, `To minimise user involvement when maintaining a system.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To ensure the system can effectively process and manage key data. Clarifying informatics defines the data types, flows and processes so the system efficiently manages its data and meets user needs (textbook p. 57).</p>` }
      ] },
    { number: '44', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to clarify the types of data managed in a system?</p>`,
          options: [`To ensure that all necessary information is captured and used efficiently.`, `It helps in limiting a system's storage capacity.`, `It can allow for a system to create complex file systems for data storage.`, `To reduce the complexity of the structure of a database.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To ensure that all necessary information is captured and used efficiently. Data is crucial to a system's function, so specific data types are classified as part of the criteria and factored into the design (textbook p. 60).</p>` }
      ] },
    { number: '45', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Who are the participants of a system?</p>`,
          options: [`Only IT staff.`, `End-users.`, `All people involved in a system's processes.`, `Those who manage hardware and software components.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — All people involved in a system's processes. Participants are the people who interact with a system, providing input or operating parts of it — data entry staff, administrators, analysts and sometimes customers (textbook p. 59).</p>` }
      ] },
    { number: '46', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the role of data in a system?</p>`,
          options: [`It is the raw facts entered into a system for processing.`, `It is the code that allows for software application to complete operations.`, `It provides commands for hardware to function correctly.`, `It is the output of a system, relevant user needs.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It is the raw facts entered into a system for processing. Data includes text, values and raw facts entered into a system for processing; once processed it becomes information (textbook p. 60).</p>` }
      ] },
    { number: '47', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following best describes the components of a system?</p>`,
          options: [`Breaking down tasks into sections so that they are easier to manage.`, `The hardware, software and network elements of a system.`, `The features that allow a system to be connected online.`, `The decision-makers in a system.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The hardware, software and network elements of a system. Components are the hardware, software, database and communication elements that work together to process data (textbook p. 62).</p>` }
      ] },
    { number: '48', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to define the role of participants during a system's development?</p>`,
          options: [`To control user access to parts of a system and stored data.`, `To limit the human involvement in a system's processes.`, `To ensure people's responsibilities are identified with a proposed system.`, `To specify the use of hardware, software, databases and network infrastructure.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To ensure people's responsibilities are identified with a proposed system. Participants assist with core processes, so their roles need to be clearly identified when establishing criteria (textbook p. 59).</p>` }
      ] },
    { number: '49', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the foundation of negotiating client needs and wants?</p>`,
          options: [`Immediately agreeing to all client requests and implementing all features.`, `Considering the long-term effects of features implemented into a system.`, `Prioritising needs first, then considering wants based on budget and timeline.`, `Incorporating feedback to refine and improve the system over time.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Prioritising needs first, then considering wants based on budget and timeline. Needs are non-negotiable while wants are optional, and negotiation aims for an outcome delivered within the timeframe and budget (textbook pp. 64–65).</p>` }
      ] },
    { number: '50', marks: 1, layout: 0, section: 'Exercise 1.2.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is typically considered a client “want” rather than a “need”?</p>`,
          options: [`Data security tools.`, `Technology related to system reliability.`, `Compliance with legal standards.`, `Customisable user interfaces.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Customisable user interfaces. The textbook lists customised user interfaces as a want; security, reliability and legal compliance are needs (textbook p. 64).</p>` }
      ] },

    // ---------------- Exercise 1.3.1 ----------------
    { number: '51', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following would NOT be a tool used to inform a project team of the requirements and limitations of an enterprise system?</p>`,
          options: [`Interviews`, `Surveys`, `Gantt charts`, `Prototypes`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Gantt charts. The listed tools for informing requirements and limitations are interviews, surveys, analytical reports, prototypes and presentations of research results; Gantt charts are scheduling tools (textbook p. 74).</p>` }
      ] },
    { number: '52', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Interviews primarily serve which of the following purposes in enterprise system development?</p>`,
          options: [`Gather detailed feedback on a functioning system.`, `Collect quantitative data on user preferences.`, `Obtain direct insights and perspectives from stakeholders.`, `Test the feasibility of different system implementation methods.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Obtain direct insights and perspectives from stakeholders. Interviews gather feedback directly from stakeholders, who share their ideas and feelings about proposed designs (textbook p. 74).</p>` }
      ] },
    { number: '53', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Analytical reports are valuable in informing the requirements and limitations of an enterprise system because they:</p>`,
          options: [`Provide visual representations of system processes.`, `Offer evidence-based insights into existing systems or processes.`, `Facilitate collaborative brainstorming among stakeholders.`, `Detail the step-by-step procedures for system implementation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Offer evidence-based insights into existing systems or processes. Analytical reports are built from survey, interview and system data, analysed to interpret data and support decisions (textbook p. 76).</p>` }
      ] },
    { number: '54', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Prototypes, in the context of enterprise system development, are used to:</p>`,
          options: [`Showcase a final, fully functional system.`, `Create a preliminary model for user testing and feedback.`, `Determine the budget allocation for the project.`, `Train users on the operation of the new system.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Create a preliminary model for user testing and feedback. A prototype is a basic model that stakeholders use so the team can gather feedback on their ideas (textbook p. 77).</p>` }
      ] },
    { number: '55', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Presentations of research results are crucial for:</p>`,
          options: [`Gathering initial user requirements for analysis processes.`, `Testing a system's security features within real world environments.`, `Communicating findings and recommendations to stakeholders.`, `Developing training materials for system users.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Communicating findings and recommendations to stakeholders. In a presentation the team presents its ideas, data summaries and visualisations and discusses its findings with stakeholders (textbook p. 78).</p>` }
      ] },
    { number: '56', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Why is it important to identify the limitations of an enterprise system during development?</p>`,
          options: [`To set realistic expectations and identify requirements.`, `To eliminate the need for testing and evaluation.`, `To reduce the need for user input and feedback.`, `To increase the complexity and functionality of the system.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To set realistic expectations and identify requirements. Addressing limitations early helps set realistic goals and manage client expectations (textbook p. 73).</p>` }
      ] },
    { number: '57', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>How can understanding the requirements of an enterprise system inform the choice of a development approach?</p>`,
          options: [`A complex system with evolving needs might benefit from an agile approach.`, `A simple system with clearly defined features might suit a waterfall approach.`, `A system requiring extensive customisation might be best suited for outsourcing.`, `All of the above.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — All of the above. The choice of approach depends on characteristics such as complexity and how stable the requirements are: agile suits changing needs, waterfall suits well-defined requirements, and outsourcing suits work needing specialised skills the team lacks (textbook pp. 82–88).</p>` }
      ] },
    { number: '58', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which tool would be most effective for gathering quantitative data on user satisfaction related to a proposed enterprise system feature?</p>`,
          options: [`Interview.`, `Survey.`, `Prototype.`, `Analytical report.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Survey. Surveys can be sent in bulk and use rating scales to gauge satisfaction, producing quantitative data (textbook pp. 75, 79).</p>` }
      ] },
    { number: '59', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>Which tool could help visually demonstrate insights obtained from surveys and interviews related to an existing enterprise system?</p>`,
          options: [`Interview.`, `Survey.`, `Prototype.`, `All of the above.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Prototype. Of the options, only a prototype is a visual tool. The team builds feedback from surveys and interviews into a prototype that shows how the system will look and work (textbook p. 77).</p><p><em>Note: the textbook's own tool for visualising survey and interview insights is the analytical report (p. 76), which is not an option. Interviews and surveys collect data rather than display it, so "All of the above" is not correct.</em></p>` }
      ] },
    { number: '60', marks: 1, layout: 0, section: 'Exercise 1.3.1',
      items: [
        { type: 'mcq',
          question: `<p>How can identifying limitations early in the development process benefit a project overall?</p>`,
          options: [`It can prevent costly revisions later on in the development cycle.`, `It can help ensure the chosen system aligns with business needs.`, `It can facilitate more accurate budgeting and resource allocation.`, `Customisable user interfaces.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — It can prevent costly revisions later on in the development cycle. Recognising limitations early keeps goals realistic and the final system feasible within its constraints, avoiding expensive changes later (textbook pp. 73, 89).</p><p><em>Note: options B and C are also true benefits. Option D appears to be a misprint, possibly of "All of the above", which would make D the intended answer. A is chosen as the single best answer from the options as printed.</em></p>` }
      ] },

    // ---------------- Exercise 1.3.2 ----------------
    { number: '61', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Which system development approach is characterized by a linear and sequential process, where each stage is completed before moving to the next?</p>`,
          options: [`Waterfall (Structured).`, `Agile.`, `Prototyping.`, `End-user.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Waterfall (Structured). Its linear, sequential process means each phase is completed thoroughly before moving to the next (textbook p. 84).</p>` }
      ] },
    { number: '62', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>The agile system development approach prioritises which of the following areas?</p>`,
          options: [`Strict adherence to initial plans.`, `Flexibility and iterative development.`, `Minimal user involvement.`, `Extensive upfront documentation.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Flexibility and iterative development. Agile is highly flexible and uses iterative sprints with continuous feedback and adjustments (textbook pp. 84, 88).</p>` }
      ] },
    { number: '63', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>The prototyping approach involves:</p>`,
          options: [`Developing a complete system before user testing.`, `Creating a preliminary model for user feedback.`, `Outsourcing the entire development process.`, `Ignoring user requirements.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Creating a preliminary model for user feedback. Prototyping provides early, tangible models that users test and give feedback on, refined in each cycle (textbook p. 86).</p>` }
      ] },
    { number: '64', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>When is end-user development most suitable?</p>`,
          options: [`For highly complex systems requiring specialised expertise.`, `When users have sufficient skills and clearly defined needs.`, `For projects with strict timelines and limited budgets.`, `When extensive documentation and formal processes are required.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — When users have sufficient skills and clearly defined needs. End-user development works well where users have some technical skills and need a system tailored to their own workflows, and it depends on them having sufficient skills (textbook pp. 87–88).</p>` }
      ] },
    { number: '65', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>Outsourcing a system development project involves:</p>`,
          options: [`Hiring internal staff to complete all development tasks.`, `Contracting external groups to handle specific aspects of a project.`, `Using only open-source software and tools.`, `Limiting user involvement in the development process.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Contracting external groups to handle specific aspects of a project. The project manager contracts a freelancer or third-party business to develop a part of the project (textbook p. 87).</p>` }
      ] },
    { number: '66', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential advantage of the waterfall approach?</p>`,
          options: [`It easily accommodates changing requirements.`, `It provides a clear structure and documentation for a project.`, `It encourages frequent user feedback throughout development.`, `It is highly adaptable to complex projects with unclear requirements.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It provides a clear structure and documentation for a project. Waterfall has clear, structured phases with thorough documentation; it is inflexible to change (textbook pp. 84, 88).</p>` }
      ] },
    { number: '67', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a benefit of accessing freelance work for an enterprise?</p>`,
          options: [`Increased development speed due to documentation.`, `Resistance to change from participants.`, `Increased risk of project failure.`, `Enhanced responsiveness to changing user needs.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Enhanced responsiveness to changing user needs. D is the only benefit listed; B and C are drawbacks and A is not supported by the textbook. Freelancers let an enterprise structure its staff quickly around a project's needs (textbook p. 26), and flexible approaches adapt to changing requirements (textbook p. 88).</p><p><em>Note: this stem repeats Exercise 1.1.2 Q7, but the options look written for a different question, probably the advantages of agile.</em></p>` }
      ] },
    { number: '68', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a potential disadvantage of the prototyping approach?</p>`,
          options: [`The approach can lead to a more refined final product.`, `Prototyping encourages user involvement.`, `A project's scope may change if not managed effectively.`, `It can help identify potential issues early on.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — A project's scope may change if not managed effectively. A listed limitation of prototyping is that a project's scope may be impacted as new ideas emerge during feedback (textbook p. 88).</p>` }
      ] },
    { number: '69', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>End-user development can be advantageous because:</p>`,
          options: [`It eliminates the need for professional developers.`, `It ensures high-quality code and system security.`, `It allows users to directly create solutions tailored to their needs.`, `It simplifies the development process, making it faster and cheaper.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — It allows users to directly create solutions tailored to their needs. The main advantage given is highly tailored solutions built by the users themselves (textbook pp. 86–88).</p><p><em>Note: option D is arguable because the textbook says end-user development "can lead to faster implementation and reduced development costs" (p. 87). C is the defining advantage.</em></p>` }
      ] },
    { number: '70', marks: 1, layout: 0, section: 'Exercise 1.3.2',
      items: [
        { type: 'mcq',
          question: `<p>A significant risk of outsourcing system development is:</p>`,
          options: [`Increased control over the development process.`, `Reduced communication challenges.`, `The loss of intellectual property.`, `Project security and confidentiality.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Project security and confidentiality. The textbook lists "potential security risks with sharing sensitive information externally" as a limitation of outsourcing (textbook p. 88).</p><p><em>Note: option C is also arguable because losing intellectual property is a real outsourcing risk (the textbook raises IP ownership for freelance work, p. 26). D matches the textbook's wording for outsourcing.</em></p>` }
      ] },

    // ---------------- Exercise 1.3.3 ----------------
    { number: '71', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is NOT typically included in an implementation plan for a new enterprise computing system?</p>`,
          options: [`Data migration procedures.`, `Market research analysis.`, `User training schedules.`, `System rollout strategy.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Market research analysis. An implementation plan covers tasks for deploying the system, such as training users, integration, choosing an implementation method and removing the old system. Market research is not part of it (textbook pp. 92, 97).</p>` }
      ] },
    { number: '72', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Feasibility testing during the implementation planning stage primarily focuses on:</p>`,
          options: [`Assessing the technical capabilities of the chosen hardware.`, `Gathering feedback from users on a system's design.`, `Identifying potential security vulnerabilities in the system.`, `Evaluating the practicality and viability of an implementation plan.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Evaluating the practicality and viability of an implementation plan. The plan's feasibility is assessed for its effectiveness in the enterprise's context before deployment (textbook p. 92).</p>` }
      ] },
    { number: '73', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>A "preferred system implementation method" refers to what?</p>`,
          options: [`The specific programming language used to develop the system.`, `The approach or strategy for deploying a system into an operational environment.`, `The design principles guiding the user interface development and supporting user experience.`, `The project management methodology used by a team for system development.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The approach or strategy for deploying a system into an operational environment. Implementation methods are structured approaches used to deploy a new system into an enterprise (textbook p. 102).</p>` }
      ] },
    { number: '74', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What does a Gantt chart illustrate at this point of system development?</p>`,
          options: [`The timeline of tasks.`, `The flow of data between system components.`, `The potential risks and mitigation strategies.`, `The hardware and software requirements.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — The timeline of tasks. A Gantt chart visualises the timeline of an implementation plan, scheduling each task with start and end dates (textbook p. 97).</p>` }
      ] },
    { number: '75', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the importance of hardware and software integration during a system implementation phase?</p>`,
          options: [`It determines the aesthetic appeal of the system's user interface.`, `It ensures seamless communication and data flow between different system components.`, `It dictates the marketing strategy for the system's launch.`, `It establishes the legal framework for data privacy and security when a system goes live to the public.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — It ensures seamless communication and data flow between different system components. Integration ensures components communicate effectively and data flows efficiently between them (textbook p. 100).</p>` }
      ] },
    { number: '76', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Why is training crucial when implementing a new enterprise computing system?</p>`,
          options: [`To ensure users understand a system's functionalities and can operate it effectively.`, `To gather feedback for future system updates and improvements from developers.`, `To reduce the need for ongoing technical support and maintenance.`, `To comply with industry regulations and standards.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To ensure users understand a system's functionalities and can operate it effectively. Training helps participants understand how to complete their workplace tasks with the new system's features and tools (textbook p. 101).</p>` }
      ] },
    { number: '77', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which implementation method involves a gradual rollout of a system's parts over time when being implemented into an enterprise?</p>`,
          options: [`Direct implementation.`, `Parallel implementation.`, `Phased implementation.`, `Pilot implementation.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Phased implementation. A phased conversion gradually implements parts of a new system at designated intervals (textbook p. 104).</p>` }
      ] },
    { number: '78', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Design thinking in the context of enterprise computing emphasises:</p>`,
          options: [`A purely technical approach to problem-solving.`, `A focus on maximising profits and minimising costs.`, `A reliance on pre-existing solutions without adaptation.`, `A user-centric approach to understanding and addressing needs.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — A user-centric approach to understanding and addressing needs. Design thinking is a human-centred approach built on understanding users' requirements and experiences (textbook p. 93).</p>` }
      ] },
    { number: '79', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a crucial aspect of risk analysis in enterprise project development?</p>`,
          options: [`Ignoring potential problems to maintain a positive project outlook.`, `Assessing the likelihood and potential impact of identified risks.`, `Selecting the most visually appealing system interface design.`, `Dictating the system's marketing and advertising strategies.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Assessing the likelihood and potential impact of identified risks. Risk analysis determines the likelihood of each risk and the severity of its impact (textbook pp. 98–100).</p>` }
      ] },
    { number: '80', marks: 1, layout: 0, section: 'Exercise 1.3.3',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of conducting thorough testing of an enterprise computing system before its full implementation?</p>`,
          options: [`To delay the project timeline and increase development costs.`, `To identify and rectify any defects or errors, ensuring optimal functionality.`, `To demonstrate the system's complexity to stakeholders.`, `To eliminate the need for post-implementation maintenance and support.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — To identify and rectify any defects or errors, ensuring optimal functionality. Testing identifies and solves potential problems before full deployment so that newly installed elements work as planned (textbook pp. 92, 102).</p>` }
      ] },

    // ---------------- Exercise 1.4.1 ----------------
    { number: '81', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>Which of these is a primary goal of live data testing?</p>`,
          options: [`Assessing system performance with actual data.`, `Identifying issues with simulated user behaviour.`, `Simulating rare or extreme scenarios.`, `Measuring user satisfaction.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Assessing system performance with actual data. Live data testing enters real-world data to assess performance and reliability under real operating conditions (textbook p. 114).</p>` }
      ] },
    { number: '82', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>In simulated data testing, the data used is:</p>`,
          options: [`Derived from live systems.`, `Collected from end-users.`, `Extracted from an archival database.`, `Generated to mimic real-world scenarios.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Generated to mimic real-world scenarios. Simulated data is made-up test data that emulates potential live data (textbook p. 113).</p>` }
      ] },
    { number: '83', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What type of testing involves end-users using a nearly complete system to provide feedback?</p>`,
          options: [`Volume testing.`, `Functional testing.`, `Beta testing.`, `Simulated data testing.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Beta testing. In beta testing a nearly complete system is released to a limited group of end-users for feedback (textbook p. 114).</p>` }
      ] },
    { number: '84', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the primary focus of functional testing?</p>`,
          options: [`Ensuring the system operates under stress.`, `Validating that each function of the system works as expected.`, `Assessing user satisfaction.`, `Reviewing system maintenance procedures.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Validating that each function of the system works as expected. Functional testing checks that each feature works according to specified requirements (textbook p. 115).</p>` }
      ] },
    { number: '85', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>When is acceptance testing typically conducted?</p>`,
          options: [`During the development phase.`, `Before deployment.`, `After system retirement.`, `At the prototyping stage.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Before deployment. Acceptance testing is the final phase of testing at the end of development, deciding whether the system is ready for deployment (textbook p. 116).</p>` }
      ] },
    { number: '86', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the key objective of volume testing?</p>`,
          options: [`To assess system behaviour under heavy data loads.`, `To ensure compliance with legal standards.`, `To review user satisfaction.`, `To test rare scenarios.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — To assess system behaviour under heavy data loads. Volume testing assesses how much data a system can handle and how it responds under high data volumes (textbook pp. 115–116).</p>` }
      ] },
    { number: '87', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What distinguishes beta testing from acceptance testing?</p>`,
          options: [`Beta testing involves stakeholders evaluating the system.`, `Beta testing uses live users in real-world conditions.`, `Acceptance testing focuses on system scalability.`, `Acceptance testing is always automated.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Beta testing uses live users in real-world conditions. Beta testers use the system in their daily lives under varied real-world conditions. Acceptance testing is a final check against specified requirements, often run as trials in a controlled environment (textbook pp. 114–116).</p>` }
      ] },
    { number: '88', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>In functional testing, the outcomes are compared to:</p>`,
          options: [`Business requirements.`, `User preferences.`, `System configuration settings.`, `Expected outputs.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — Expected outputs. Functional testing checks that inputs produce expected outputs, comparing actual results with expected outcomes (textbook p. 115).</p>` }
      ] },
    { number: '89', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>What is the focus of acceptance testing?</p>`,
          options: [`Verifying functionality.`, `Validating that a system meets business requirements.`, `Assessing performance under load.`, `Simulating extreme scenarios.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Validating that a system meets business requirements. Acceptance testing determines whether a system meets its specified requirements and satisfies business objectives and user needs (textbook p. 116).</p>` }
      ] },
    { number: '90', marks: 1, layout: 0, section: 'Exercise 1.4.1',
      items: [
        { type: 'mcq',
          question: `<p>The primary aim of simulated data testing is to:</p>`,
          options: [`Test functionality under controlled, artificial scenarios.`, `Evaluate system performance using real-world data.`, `Assess user satisfaction.`, `Validate final deployment readiness.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Test functionality under controlled, artificial scenarios. Simulated data testing offers a controlled environment to evaluate functionality, performance and error handling (textbook p. 113).</p>` }
      ] },

    // ---------------- Exercise 1.4.2 ----------------
    { number: '91', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Validating an enterprise computing system involves:</p>`,
          options: [`Confirming that the system fulfils its intended purpose and meets user needs.`, `Checking the accuracy and completeness of the system's documentation.`, `Training users on how to effectively operate and maintain the system.`, `Assessing the system's compatibility with existing hardware and software.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Confirming that the system fulfils its intended purpose and meets user needs. Validation evaluates whether a system addresses its intended goals and meets user expectations (textbook p. 120).</p>` }
      ] },
    { number: '92', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Trialling operation and maintenance documentation during the evaluation phase helps to determine:</p>`,
          options: [`The technical proficiency of the system administrators.`, `The clarity and effectiveness of the instructions for using and maintaining a system.`, `The overall satisfaction of users with the system's functionality.`, `The potential return on investment (ROI) of the implemented system.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The clarity and effectiveness of the instructions for using and maintaining a system. The documentation is trialled to verify its clarity, accuracy and usability (textbook p. 120).</p>` }
      ] },
    { number: '93', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Reviewing the impact of system implementation within relevant environments focuses on understanding:</p>`,
          options: [`The technical specifications of the hardware and software infrastructure.`, `The effects of the system on business processes, workflows, and stakeholders.`, `The financial costs associated with developing and implementing the system.`, `The legal and regulatory compliance of the system.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — The effects of the system on business processes, workflows, and stakeholders. The review assesses how the system improves operational efficiency, streamlines workflows and affects users (textbook pp. 121–122).</p>` }
      ] },
    { number: '94', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Why is modifying designs to improve functionality an important part of the testing and evaluation process?</p>`,
          options: [`To reduce development costs and shorten the project timeline.`, `To ensure that the system meets the minimum performance standards.`, `To address issues identified during testing and enhance the system's overall effectiveness.`, `To comply with industry best practices and coding standards.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — To address issues identified during testing and enhance the system's overall effectiveness. The team uses feedback, performance metrics and test results to find issues and modify the design (textbook p. 123).</p>` }
      ] },
    { number: '95', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is an example of operation and maintenance documentation?</p>`,
          options: [`System architecture diagrams.`, `Market research reports.`, `System requirements specifications.`, `User manuals.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — User manuals. User manuals are listed as operational documentation (textbook p. 121).</p>` }
      ] },
    { number: '96', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of these activities is a part of maintaining an enterprise system?</p>`,
          options: [`Conducting user interviews.`, `Performing code reviews.`, `Applying software updates.`, `Designing system prototypes.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Applying software updates. Regular software updates (patches and fixes) are a listed task in a maintenance plan (textbook p. 126).</p>` }
      ] },
    { number: '97', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Which of the following is a key benefit of trialling operation and maintenance documentation during testing?</p>`,
          options: [`Identifying gaps in user instructions.`, `Enhancing system scalability.`, `Reducing development costs.`, `Improving data accuracy.`],
          answer: 1,
          guide: `<p><strong>Answer: A</strong> — Identifying gaps in user instructions. Trialling the documentation helps identify gaps or areas needing improvement (textbook p. 120).</p>` }
      ] },
    { number: '98', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is a common tool used to gather user feedback during the evaluation of system implementation?</p>`,
          options: [`Network diagrams.`, `Change logs.`, `Surveys and online forms.`, `Compliance reports.`],
          answer: 3,
          guide: `<p><strong>Answer: C</strong> — Surveys and online forms. Surveys, feedback forms and online forms are used to gather consistent feedback from users during evaluation (textbook pp. 122, 126).</p>` }
      ] },
    { number: '99', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>Which documentation provides a step-by-step guide for users to complete specific tasks within a system?</p>`,
          options: [`FAQ's.`, `Operation manuals.`, `Maintenance schedules.`, `Compliance reports.`],
          answer: 2,
          guide: `<p><strong>Answer: B</strong> — Operation manuals. An operations manual contains procedures on how to complete specific tasks using a system (textbook p. 121).</p>` }
      ] },
    { number: '100', marks: 1, layout: 0, section: 'Exercise 1.4.2',
      items: [
        { type: 'mcq',
          question: `<p>What is the purpose of maintaining system documentation after deployment?</p>`,
          options: [`To provide historical data for development.`, `To design new features for the system.`, `To identify future market opportunities.`, `To ensure ongoing system functionality and efficiency.`],
          answer: 4,
          guide: `<p><strong>Answer: D</strong> — To ensure ongoing system functionality and efficiency. Maintenance documentation ensures the ongoing functionality, reliability and efficiency of a system after deployment (textbook pp. 121, 127).</p>` }
      ] }
  ]
});
