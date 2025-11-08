# Vibe Coding - Succinct Definition

**Source:** Wikipedia, Collins Dictionary Word of the Year 2025

## What is Vibe Coding?

**Vibe coding** is an AI-assisted software development technique where developers use Large Language Models (LLMs) to generate code through natural language descriptions rather than manual coding.

### Key Characteristics:
- **Natural Language First:** Developer describes tasks/projects in plain language to AI
- **AI Generates Code:** LLM writes all or most code based on prompts
- **Focus on Testing:** Developer evaluates through execution results, not code review
- **Iterative Feedback:** Developer requests improvements based on behavior, not code structure
- **Minimal Code Review:** Unlike traditional AI-assisted coding, developer accepts AI output without deep examination

### Origin:
Coined by **Andrej Karpathy** (OpenAI co-founder, former Tesla AI lead) in **February 2025**. His quote: "fully give in to the vibes, embrace exponentials, and forget that the code even exists."

### Definition from Simon Willison:
"If an LLM wrote every line of your code, but you've reviewed, tested, and understood it all, that's not vibe coding—that's using an LLM as a typing assistant."

**Key distinction:** Vibe coding means accepting AI-generated code without fully understanding it.

### Benefits:
- Enables non-programmers to create functional software
- Rapid prototyping and experimentation
- Learning tool for unfamiliar languages/technologies
- Reduces need for extensive programming training

### Risks & Limitations:
- **Security vulnerabilities** (undetected due to lack of review)
- **Maintainability issues** (code structure may be unclear)
- **Debugging challenges** (developer didn't write the code)
- **Quality concerns** (bugs/errors may go unnoticed)
- **Best for:** Prototypes, personal projects, "software for one"
- **Risky for:** Production systems, critical applications, multi-file complex projects

### Industry Adoption (2025):
- 25% of Y Combinator W25 startups: 95% AI-generated codebases
- Adopted by professional engineers entering commercial use
- Collins Dictionary: **Word of the Year 2025**
- Merriam-Webster: Listed as "slang & trending" (March 2025)

---

## Full Wikipedia Article

From Wikipedia, the free encyclopedia
Vibe coding is an artificial intelligence-assisted software development technique popularized by Andrej Karpathy in February 2025.[1][2][3] The term was listed on the Merriam-Webster website the following month as a "slang & trending" term.[4] It was named Collins Dictionary's Word of the Year for 2025.[5][6]

Vibe coding describes a chatbot-based approach to creating software where the developer describes a project or task to a large language model (LLM), which generates code based on the prompt. The developer does not review or edit the code, but solely uses tools and execution results to evaluate it and asks the LLM for improvements. Unlike traditional AI-assisted coding or pair programming, the human developer avoids examination of the code, accepts AI-suggested completions without human review, and focuses more on iterative experimentation than code correctness or structure.

Advocates of vibe coding say that it allows even amateur programmers to produce software without the extensive training and skills required for software engineering.[7][8] Critics point out a lack of accountability, maintainability, and the increased risk of introducing security vulnerabilities in the resulting software.[8][1]

Definition
Computer scientist Andrej Karpathy, a co-founder of OpenAI and former AI leader at Tesla, introduced the term vibe coding in February 2025. The concept refers to a coding approach that relies on LLMs, allowing programmers to generate working code by providing natural language descriptions rather than manually writing it.[1][2][8]

Karpathy described it as "fully giv[ing] in to the vibes, embrac[ing] exponentials, and forget[ting] that the code even exists."[3] He used the method to build prototypes like MenuGen, letting LLMs generate all code, while he provided goals, examples, and feedback via natural language instructions.[9] The programmer shifts from manual coding to guiding, testing, and giving feedback about the AI-generated source code.[1][2][10]

The concept of vibe coding elaborates on Karpathy's claim from 2023 that "the hottest new programming language is English", meaning that the capabilities of LLMs were such that humans would no longer need to learn specific programming languages to command computers.[11]

A key part of the definition of vibe coding is that the user accepts AI-generated code without fully understanding it.[1] Programmer Simon Willison said: "If an LLM wrote every line of your code, but you've reviewed, tested, and understood it all, that's not vibe coding in my book—that's using an LLM as a typing assistant."[1]

Reception and use
In February 2025, New York Times journalist Kevin Roose, who is not a professional coder, experimented with vibe coding to create several small-scale applications. He described these as "software for one", referring to personalised AI-generated tools designed to address specific individual needs, such as an app that analyzed his fridge contents to suggest items for a packed lunch. Roose noted that while vibe coding enables non-programmers to generate functional software, the results are often limited and prone to errors.[10][11]

In one case, the AI-generated code fabricated fake reviews for an e-commerce site. He also observed that AI-assisted coding enables individuals to develop software that previously required an engineering team.[10] In response to Roose, cognitive scientist Gary Marcus said that the algorithm that generated Roose's LunchBox Buddy app had presumably been trained on existing code for similar tasks. Marcus said that Roose's enthusiasm stemmed from reproduction, not originality.[11]

In March 2025, Y Combinator reported that 25% of startup companies in its Winter 2025 batch had codebases that were 95% AI-generated, reflecting a shift toward AI-assisted development within newer startups.[12] The question asked was about AI-generated code in general, and not specifically about vibed code.

Three engineers interviewed by IEEE Spectrum agreed that vibe coding is a way for programmers to learn languages and technologies they are not yet familiar with.[13]

Inspired by "vibe coding", The Economist suggested the term "vibe valuation" to describe the very large valuations of AI startups by venture capital firms that ignore accepted metrics such as Annual Recurring Revenue.[14]

In July 2025, The Wall Street Journal reported that vibe coding was being adopted by professional software engineers and had begun to enter commercial use cases.[15]

In July 2025, SaaStr founder documented his negative experiences with vibe coding: Replit's AI agent deleted a database despite explicit instructions not to make any changes.[16][17]

In September 2025, Fast Company reported that the 'vibe coding hangover' is upon us, with senior software engineers citing 'development hell' when working with AI-generated vibe-code.[18]

Limitations
Mischaracterization of software development
Andrew Ng has taken issue with the term, saying that it misleads people into assuming that software engineers just "go with the vibes" when using AI tools to create applications.[19]

Quality of code and security issues
Vibe coding has raised concerns about understanding and accountability. Developers may use AI-generated code without fully comprehending its functionality, leading to undetected bugs, errors, or security vulnerabilities.[20] While this approach may be suitable for prototyping or "throwaway weekend projects" as Karpathy originally envisioned, it is considered by some experts to pose risks in professional settings, where a deep understanding of the code is crucial for debugging, maintenance, and security. Ars Technica cites Simon Willison, who stated: "Vibe coding your way to a production codebase is clearly risky. Most of the work we do as software engineers involves evolving existing systems, where the quality and understandability of the underlying code is crucial."[1]

In May 2025, Lovable, a Swedish vibe coding app, was reported to have security vulnerabilities in the code it generated, with 170 out of 1,645 Lovable-created web applications having an issue that would allow personal information to be accessed by anyone.[21][22]

Task complexity
Generative AI is highly capable of handling simple tasks like basic algorithms. However, such systems struggle with more novel, complex coding problems like projects involving multiple files, poorly documented libraries, or critical code that has real-world impacts.[23]

Challenges with debugging
LLMs generate code dynamically, and the structure of such code may be subject to variation.[24] In addition, since the developer did not write the code, they may struggle to understand syntax/concepts that they themselves have not used.[23]

