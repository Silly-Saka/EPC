registerExam({
  id: 'pem2025',
  title: 'PEM 2025 Enterprise Computing Preliminary Examination',
  source: 'PEM',
  year: 2025,
  kind: 'prelim',
  readingMinutes: 5,
  workingMinutes: 120,
  totalMarks: 65,
  coverNotes: `<ul>
<li>Reading time – 5 minutes</li>
<li>Working time – 2 hours</li>
<li>Draw diagrams using pencil</li>
</ul>
<p><strong>Section I</strong> – 20 marks</p>
<ul>
<li>Attempt Questions 1–20</li>
<li>Allow about 30 minutes for this section</li>
</ul>
<p><strong>Section II</strong> – 45 marks</p>
<ul>
<li>Attempt Questions 21–23</li>
<li>Allow about 1 hour and 30 minutes for this section</li>
<li>If you include diagrams in your answer, ensure that they are clearly labelled.</li>
</ul>`,
  groups: [
    {
      number: '1', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>An interface allowing for interactivity</p>`,
          options: [`Text-based command-line`, `Graphical user interface`, `World wide web`, `All of the above`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '2', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Online learning courses</p>`,
          options: [`MOOC`, `MMOG`, `OpenAI`, `Course sera sera`],
          answer: 1, guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '3', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Which is <em>not</em> part of the ‘Internet of Things’?</p>`,
          options: [`Smart-watch`, `Washing machine`, `Streaming services`, `Smart TV`],
          answer: 3, guide: `<p>Answer: C</p>
<p><em>Note: the official PEM key gives A, but a smart-watch is a typical IoT device. The option that is not an IoT ‘thing’ is C (Streaming services – a software service, not a connected physical device), so this site marks C as correct.</em></p>` }
      ]
    },
    {
      number: '4', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>An example of a non-graphical user interface is</p>`,
          options: [`Microsoft Windows`, `WYSIWYG`, `Command-line`, `Apple iPhone`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '5', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>In graph theory, vertices are called</p>`,
          options: [`links`, `nodes`, `edges`, `networks`],
          answer: 2, guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '6', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Australia has introduced a world-first social media ban for under 16-year olds. What were the main reasons for this?</p>`,
          options: [`Under 16-year olds were the most vulnerable from on-line predators`, `Social media can have some explicit, mature content with adult-themes`, `Social media can contain fake-news, deep-fakes, etc`, `All of the above`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '7', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>An ‘End user license agreement’ involves which type of issue:</p>`,
          options: [`Social`, `Ethical`, `Legal`, `None of the above`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '8', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>A device that digitises assets for interactive media use.</p>`,
          options: [`Hard drive`, `CD drive`, `OCR`, `Monitor`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '9', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>How do on-line companies monitor user behaviour?</p>`,
          options: [`Cookies and trackers`, `From a user’s personnel information`, `From the user’s password and device details`, `From your purchase history`],
          answer: 1, guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '10', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Edge computing</p>`,
          options: [`Minimises latency`, `Is leveraged by Netflix`, `Sends instant security and failure alerts`, `All of the above`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '11', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>A lossless file format</p>`,
          options: [`jpeg`, `flac`, `bmp`, `mp3`],
          answer: 2, guide: `<p>Answer: B</p>
<p><em>Note: bmp (C) is normally uncompressed and so also loses no data; B (flac, a lossless compressed format) is the intended answer.</em></p>` }
      ]
    },
    {
      number: '12', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>A characteristic of a start-up is</p>`,
          options: [`Adaptability`, `Innovation`, `Resilience to setbacks`, `All of the above`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '13', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>The cloud computing service which eliminates the need to install, maintain and update software locally</p>`,
          options: [`PaaS`, `IaaS`, `SaaS`, `AWS`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '14', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>An item which belongs to the Internet of Things</p>`,
          options: [`Smart phone`, `Network server`, `Laptop`, `Smart Washing machine`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '15', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>A cloud-based data storage owned by third party services with resources shared amongst Internet customers.</p>`,
          options: [`Public cloud`, `Private cloud`, `Hybrid cloud`, `Non-cloud on premises`],
          answer: 1, guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '16', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>How would you reduce the risk of identity theft?</p>`,
          options: [`Don’t use two-factor authentication`, `Check your permission settings`, `Implement software updates including antivirus software`, `Use public wi-fi networks where possible`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '17', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>A botnet is</p>`,
          options: [`A network of private computers`, `An infected computer network`, `A vulnerability caused by employee action`, `A Smishing network`],
          answer: 2, guide: `<p>Answer: B</p>` }
      ]
    },
    {
      number: '18', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>SCADA is</p>`,
          options: [`Supervisory control and data acquisition`, `Software controlled application designed automation`, `Supervising computer and data automation`, `Standard critical alarm detecting algorithm`],
          answer: 1, guide: `<p>Answer: A</p>` }
      ]
    },
    {
      number: '19', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Machine learning algorithms can be used in farm irrigation to:</p>`,
          options: [`Optimise irrigation scheduling`, `Analyse soil moisture data`, `Make predictions based on weather and historic data`, `All of the above`],
          answer: 4, guide: `<p>Answer: D</p>` }
      ]
    },
    {
      number: '20', marks: 1, layout: 0,
      items: [
        { type: 'mcq', question: `<p>Finding the nearest nodes for a given node, what is needed?</p>`,
          options: [`Centrality`, `Weighted graphs`, `Adjacency`, `Connectedness`],
          answer: 3, guide: `<p>Answer: C</p>` }
      ]
    },
    {
      number: '21', marks: 15, layout: 0,
      items: [
        { type: 'text', part: 'a', marks: 1, wordLimit: 30,
          question: `<p>Define EULA.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Correct answer</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>End user license agreement.</p>` },
        { type: 'text', part: 'b', marks: 1, wordLimit: 30,
          question: `<p>State <em>two</em> commonly used communication apps (voice/video) that are used for collaboration.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Half mark for each of <em>two</em> correct communication app</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Slack, Microsoft Teams, Zoom.</p>` },
        { type: 'text', part: 'c', marks: 2, wordLimit: 50,
          question: `<p>What is a haptic controller? State <em>one</em> example of a haptic controller.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Good description for haptic controller with one example</td><td>2</td></tr>
<tr><td>Partial understanding for haptic controller with example</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A haptic controller can provide feedback to the user. It can simulate sensations like vibrations and touch. Some game controllers are haptic.</p>` },
        { type: 'text', part: 'd(i)', marks: 1, wordLimit: 30,
          question: `<p>Select a suitable file format for:</p>
<p>(i) Bitmap images.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Naming <em>one</em> correct file format</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>bmp, png, jpg/jpeg, tiff, gif.</p>` },
        { type: 'text', part: 'd(ii)', marks: 1, wordLimit: 30,
          question: `<p>Select a suitable file format for:</p>
<p>(ii) Compressing file folders.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Naming <em>one</em> correct file format</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>zip, rar, lzh, 7z.</p>` },
        { type: 'text', part: 'd(iii)', marks: 1, wordLimit: 30,
          question: `<p>Select a suitable file format for:</p>
<p>(iii) Attaching an uncompressed multimedia file to an email.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Naming <em>one</em> correct file format</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>docx, pdf, opendoc.</p>
<p><em>Note: the official sample lists document formats, which are not uncompressed multimedia formats (docx is itself zip-compressed). Better answers: WAV/AIFF (audio), BMP/TIFF (image) or uncompressed AVI (video).</em></p>` },
        { type: 'text', part: 'e', marks: 2, wordLimit: 50,
          question: `<p>What is meant by the term <em>profiling</em> and <em>auto-profiling</em>?</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Good understanding for both profiling and auto-profiling</td><td>2</td></tr>
<tr><td>Partially understanding</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Profiling is where an organisation assesses someone’s characteristics and classifies them into a category. Auto-profiling is where a computer does the profiling assessment with no human involvement.</p>` },
        { type: 'text', part: 'f', marks: 3, wordLimit: 80,
          question: `<p>What techniques can be used to develop an engaging UI?</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good understanding of an engaging UI</td><td>3</td></tr>
<tr><td>Good understanding of an engaging UI</td><td>2</td></tr>
<tr><td>Reasonable understanding of an engaging UI</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Since UIs are available on mobiles, tablets and computers, the position of the content needs to be adjusted using a ‘responsive design’. Simple designs with good contrasting colours are more effective.</p>` },
        { type: 'text', part: 'g', marks: 3, wordLimit: 80,
          question: `<p>Using examples, explain how digital marketing techniques can influence consumer behaviour.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good discussion with relevant examples</td><td>3</td></tr>
<tr><td>Good discussion with some examples</td><td>2</td></tr>
<tr><td>Fair discussion for the influence of digital marketing techniques</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Ads can be easily tailored to users through their browsing history, eg nudging; User preferences and cookies (stored on device) can be used to target consumers and influence them; Pop-ups are attention grabbing and often provide discounts/promotions; also autofill which speeds up and streamlines purchases.</p>` }
      ]
    },
    {
      number: '22', marks: 15, layout: 0,
      items: [
        { type: 'text', part: 'a', marks: 1, wordLimit: 30,
          question: `<p>State <em>one</em> example of ‘biometric authentication’.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>One correct example</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Facial, iris and fingerprint recognition.</p>` },
        { type: 'text', part: 'b', marks: 2, wordLimit: 50,
          question: `<p>What is a ‘Trusted Platform Module’?</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good explanation for TPM</td><td>2</td></tr>
<tr><td>Reasonable explanation for TPM</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A TPM is a microcontroller on a circuit board which is used to store critical information needed for authentication.</p>` },
        { type: 'text', part: 'c(i)', marks: 2, wordLimit: 50,
          question: `<p>Enterprises use digital workflows.</p>
<p>(i) Describe what a digital workflow is.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Good description of digital workflow</td><td>2</td></tr>
<tr><td>Reasonable description of digital workflow</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>It is where organisational digital processes are automated.</p>` },
        { type: 'text', part: 'c(ii)', marks: 1, wordLimit: 30,
          question: `<p>Enterprises use digital workflows.</p>
<p>(ii) Name <em>one</em> benefit of a digital workflow.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>One correct benefit for digital workflow</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A benefit can be: increased efficiency/productivity/accuracy, minimal human error; and cost saving.</p>` },
        { type: 'text', part: 'c(iii)', marks: 1, wordLimit: 30,
          question: `<p>Enterprises use digital workflows.</p>
<p>(iii) Name <em>one</em> limitation of a digital workflow.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>One correct limitation for digital workflow</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A limitation can be: initial setup cost, employee training, over reliance on technology.</p>` },
        { type: 'text', part: 'd', marks: 2, wordLimit: 50,
          question: `<p>Briefly describe some characteristics that make a successful start-up business.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Good description for a successful start-up</td><td>2</td></tr>
<tr><td>Reasonable description for a successful start-up</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The start-up would need to be adaptable, minimise costs and be creative. Hot-desking can offer flexible workspaces when employees are at the office – alternative to working from home. Video conferencing reduces the need for formal meetings and can reduce travel time for off-site workers. Cloud storage can reduce the need for expensive storage.</p>` },
        { type: 'text', part: 'e', marks: 3, wordLimit: 80,
          question: `<p>What are the factors that interfere with data transmission?</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good discussion of the interfering factors</td><td>3</td></tr>
<tr><td>Good discussion of the interfering factors</td><td>2</td></tr>
<tr><td>Reasonable discussion of the interfering factors</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p><em>Distance</em> – the greater the distance, the higher the chance of packet loss and delays, and reduced transmission speed. <em>Environment</em> – extreme weather, temperature, power surges, dead zones due to thick walls, etc. <em>Network topography</em> – each topology (eg. star, ring) are suited to different situations.</p>` },
        { type: 'text', part: 'f', marks: 3, wordLimit: 80,
          question: `<p>Discuss the application of theoretical models in the design of social networks.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good explanation for the design of social networks</td><td>3</td></tr>
<tr><td>Good explanation for the design of social networks</td><td>2</td></tr>
<tr><td>Reasonable explanation for the design of social networks</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Graph theory is used to build, analyse and optimise a recommendation engine for suggesting friends. Network theory relates to transmission of information (eg. personal) which enables change of behaviour in social relationships.</p>` }
      ]
    },
    {
      number: '23', marks: 15, layout: 0,
      items: [
        { type: 'text', part: 'a(i)', marks: 1, wordLimit: 30,
          question: `<p>Define the following words:</p>
<p>(i) Malware</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Reasonable definition for malware</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Malware is software specifically designed to damage a computer system, or gain unauthorized access.</p>` },
        { type: 'text', part: 'a(ii)', marks: 1, wordLimit: 30,
          question: `<p>Define the following words:</p>
<p>(ii) Cyber</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Reasonable definition for cyber</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>The term cyber refers to all things computer related.</p>` },
        { type: 'text', part: 'a(iii)', marks: 1, wordLimit: 30,
          question: `<p>Define the following words:</p>
<p>(iii) Legacy system</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Reasonable definition for legacy system</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>A legacy system is an existing working computer system with old, outdated hardware and software. The system doesn’t allow for updates to meet current needs – just the original needs it was designed for.</p>` },
        { type: 'text', part: 'b', marks: 3, wordLimit: 80,
          question: `<p>Discuss the concept of multi-factor authentication. Give an example.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good discussion for multi-factor authentication</td><td>3</td></tr>
<tr><td>Good discussion for multi-factor authentication</td><td>2</td></tr>
<tr><td>Fair discussion for multi-factor authentication</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Multi-factor authentication requires the user to provide at least <em>two</em> verification methods to gain access to something. For example, logging into a bank may require username and password, but then the user is sent a one time code to their phone which is needed to gain access.</p>` },
        { type: 'text', part: 'c', marks: 3, wordLimit: 80,
          question: `<p>Discuss the quote: “Encryption doesn’t work. Everything can be decrypted”.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good discussion for encryption</td><td>3</td></tr>
<tr><td>Good discussion for encryption</td><td>2</td></tr>
<tr><td>Reasonable discussion for encryption</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Encryption is used to prevent unauthorised access. It is a conversion process of information/data into a code. Today it is difficult to decrypt heavily encrypted data, but these encryption methods might be vulnerable by 2030 when Quantum computers are used to break encryption algorithms.</p>` },
        { type: 'text', part: 'd(i)', marks: 3, wordLimit: 80,
          question: `<p>A common cybercrime these days involves <em>deep fake</em> and <em>ransomware</em>.</p>
<p>(i) What is <em>deep fake</em>? Give an example.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good explanation with an example</td><td>3</td></tr>
<tr><td>Reasonable explanation with an example</td><td>2</td></tr>
<tr><td>Fair explanation only</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Deep fake is where a video and/or audio have been created artificially. Typically the images and audio have been created from many other existing videos by training a system. These deep fakes tend to be made about famous people where there are many available videos on the Internet. For example, the famous deep fake of Barrack Obama.</p>` },
        { type: 'text', part: 'd(ii)', marks: 3, wordLimit: 80,
          question: `<p>A common cybercrime these days involves <em>deep fake</em> and <em>ransomware</em>.</p>
<p>(ii) What is <em>ransomware</em>? Give an example.</p>`,
          guide: `<table class="hoa-table-normal"><thead><tr><th>Criteria</th><th>Marks</th></tr></thead><tbody>
<tr><td>Very good explanation with an example</td><td>3</td></tr>
<tr><td>Reasonable explanation with an example</td><td>2</td></tr>
<tr><td>Fair explanation only</td><td>1</td></tr>
</tbody></table>
<p><strong>Sample answer:</strong></p>
<p>Ransomware is a dangerous example of malware. It locks access to files by encrypting them. The owner of the files is asked to pay a ransom (money in cryptocurrency) to restore access to the files. Although most attacks occur in the finance and healthcare sectors, Newcastle Grammar school was attacked. The hackers demanded 1 million in cryptocurrency.</p>` }
      ]
    }
  ],
  figures: []
});
