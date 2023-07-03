---
layout: minimal
title: DSC 30
has_children: true
has_toc: true
permalink: /:path/
seo:
  type: Course
  name: Data Structures and Algorithms for Data Science
---

# {{ site.description }}
{: .fs-7 .mb-2 }
{{ site.tagline }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

[Triton Maps](https://tritonmaps.kevinl.info) is a web app for mapping the world, searching for places, and navigating around campus. All these features are powered by data structures and algorithms: programming abstractions designed to represent data and automate processes. In your prior programming experience, you learned *how to implement specifications* by writing Python programs that used data structures to solve data analysis problems. In this course, you'll learn how to answer the *why* question: *Why did we write the specification that way in the first place?*

There are many decisions to make when designing a software system, and many of these decisions have significant consequences on qualities of a system. In this course, we'll focus on learning *data structures* as implementations of *abstract data types*. An abstract data type describes what you can do with a data type, but not how the data type is implemented; a data structure provides both a description of functionality and a specific implementation of functionality. Rather than think of problems as requiring custom algorithms that we invent from scratch each time, abstract data types help us think of problems as variations that can be addressed by adapting more general algorithm ideas.

**Data Structures and Algorithms for Data Science** presents a selection of these ideas in a way intended to help you design, analyze, and evaluate software systems. Learning these ideas can enable fuller participation in the community of computing professionals. This 5-week course is organized around 5 weeklong modules culminating in a final portfolio.

{% for module in site.modules %}
{{ module }}
{% endfor %}

## Why should we learn?

The education you receive in this course can help prepare you for programming jobs, but this isn't the only purpose for computing education.[^1] Education is not only about yourself and your personal gain, but also about all of us and our capacity to live together as a community.

[^1]: Mark Guzdial. 2021. [Computer science was always supposed to be taught to everyone, and it wasn't about getting a job](https://computinged.wordpress.com/2021/11/26/computer-science-was-always-supposed-to-be-taught-to-everyone-but-not-about-getting-a-job-a-historical-perspective/).

In Seattle, the University of Washington acknowledges the Coast Salish peoples of this land, the land which touches the shared waters of all tribes and bands within the Duwamish, Puyallup, Suquamish, Tulalip and Muckleshoot nations. Among the traditions of the Coast Salish peoples is a value for the connectedness between all living things and a recognition of the unique ways that each of us comes to know something.[^2]

[^2]: Roger Fernandes. 2012. [Roger Fernandes: Artist/Storyteller/Educator](https://youtu.be/O6sS1ZI8dDk).

> Modern education has the idea that we all need to know the same thing. At the end of the lesson, everyone will know the same thing. That's why we have tests, that's why we have quizzes, that's why we have homework: to ensure we all know the same thing. And that's powerful---that's important---within a certain context.
>
> But for native culture, the idea that each listener divines or finds their own answer, their own meaning, their own teaching from the story is equally powerful---that each person needs to be able to look at the world and define it for themselves within their culture and then also find a way to live in that world according to the teachings of their people in their culture.

Likewise, in San Diego, the university was built on the unceded territory of the Kumeyaay Nation. Today, the Kumeyaay people continue to maintain their political sovereignty and cultural traditions as vital members of the San Diego Community.

Our course emphasizes the following values and policies.

We are responsible for each others' success
: Everyone has a right to feel like they belong in this course. We'll need to act with compassion and caring to collaborate with each other. Although we will need more than just unexamined commitments to collaboration, listening, empathy, mindfulness, and caring,[^3] the following guidelines offer a starting point for ensuring compassion toward each other.[^4]

  - Listen with intention to understand first and form an opinion only after you fully understand.
  - Take responsibility for the intended and unintended effects of your words and actions on others.
  - Mindfully respond to others' ideas by acknowledging the unique value of each contribution.

: We are committed to creating an inclusive learning environment in which individual differences are respected and all students feel comfortable. We expect that you, as a student in this course, will honor and respect your classmates, abiding by the [UCSD Principles of Community](https://ucsd.edu/about/principles.html). Please understand that others' backgrounds, perspectives and experiences may be different than your own, and help us to build an environment where everyone is respected and able to thrive.
: You should expect and demand to be treated by your classmates and teachers with respect. If you experience any sort of harassment or discrimination, please contact the instructor as soon as possible. If you prefer to speak with someone outside of the course, please contact the [Office of Prevention of Harassment and Discrimination](https://ophd.ucsd.edu/).

[^3]: Brian Arao and Kristi Clemens. 2013. "From Safe Spaces to Brave Spaces: A New Way to Frame Dialogue Around Diversity and Social Justice" in *The Art of Effective Facilitation*.

[^4]: Asao B. Inoue. 2019. "Sample Charter for Compassion" in [Labor-Based Grading Contracts: Building Equity and Inclusion in the Compassionate Writing Classroom](https://wac.colostate.edu/books/perspectives/labor/).

We recognize everyone has unique circumstances
: Do not hesitate to contact the instructor by private discussion post or [appointment](https://kevinl.info/meet/). The sooner we are made aware of your circumstances, the more we can help. Extenuating circumstances include work-school balance, familial responsibilities, religious observations, military duties, unexpected travel, or anything else beyond your control that may negatively impact your performance in the class.
: Students requesting accommodations for this course due to a disability or current functional limitation must provide a current Authorization for Accommodation (AFA) letter issued by the [Office for Students with Disabilities](https://osd.ucsd.edu/) (OSD). This AFA letter should be shared with the instructor and the Data Science OSD Liaison, who can be reached at <dscstudent@ucsd.edu>. Please contact them as soon as possible to ensure accommodations can be arranged as needed.

We believe everyone wants to learn
: Education is about shaping your identity as much as it is about learning things. In school, the consequences of making mistakes are relatively small. But the habits you form now---repeated over days, weeks, months, or years---determine who you will be in the future. Now is the best time to practice honest habits.
: We ask that you do not claim to be responsible for work that is not yours. When you receive substantial help from someone else, include a citation. Don't request a copy of someone else's work, don't provide your work to another student, and don't post your solutions publicly.
: Academic honesty reflects the trust (or the lack thereof) between students and teachers. We do our best to design the course in ways that ensure trust, but we know our systems are not perfect. If you submit work in violation of these policies but bring it to the attention of the instructor within 72 hours, you may resubmit your own work without further consequence. Rather than blame students, we want to fix or replace broken systems that compel students to lose trust.

## How will you learn?

In a traditional classroom, you attend class while a teacher lectures until time is up. Then, you go home and do the important work of applying concepts toward practice problems or assignments on your own. Finally, you take an exam to show what you know.

Today, we know that there are more effective ways to learn science, engineering, and mathematics.[^5] Learning skills like software engineering and algorithm analysis requires **deliberate practice**: a learning cycle that starts with sustained motivation, then presents tasks that build on prior knowledge, and concludes with immediate, personalized feedback. Each module in the course will involve several different activities that are designed so that we can make the most of our class time together.

[^5]: Scott Freeman, Sarah L. Eddy, Miles McDonough, Michelle K. Smith, Nnadozie Okoroafor, Hannah Jordt, and Mary Pat Wenderoth. 2014. [Active learning increases student performance in science, engineering, and mathematics](https://doi.org/10.1073/pnas.1319030111).

On your own before class, prepare for learning by completing the pre-class preparation.
: In Canvas, open the weekly **Lessons** and add an annotation or reply to an annotation.
> Lessons are designed to introduce all the concepts for the entire week's classes.

In your team during class, collaborate on the in-class guided practice.
: In Canvas, tutors will observe your learning and record your **Teamwork**.
> Class meetings are designed to deepen and connect ideas across the course.

On your own after class, record a video showing what you learned in the past two weeks.
: In Canvas, demonstrate your learning by explaining your work for each **Assessment**.
> Your videos not only demonstrate problem solving skills, but also communication skills.

In your team throughout the module, apply your learning by collaborating on the project.
: In Canvas, demonstrate your learning by assembling a **Project Presentation** video.
> Projects are designed to situate what you learned in real-world practice.

Communicating your ideas and explaining your problem solving process is important in this course. We ask students to record their own screenshared and voiced videos because they provide rich information about your solution process and authenticate your assessment. But we know that visual or voiceover presentations are not accessible or equitable for everyone. If for any reason a voiceover presentation won't work for you, we would be happy to work with you to find a better way to communicate your ideas and explain your problem solving process. You do not need to disclose why you feel uncomfortable, but we were thinking about people with vision impairment, gender and voice dysphoria, limited access to resources, or complicated living situations when designing this policy.

Expect to spend 4 hours in class and 8 hours outside of class working on this course. Some weeks may require more or less time than other weeks. If you find the workload is significantly exceeding this expectation, talk to your TA.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}

## How is this course graded?

Grading in this course encourages learning through deliberate practice by emphasizing revision and resubmission of work. Most of the coursework is designed around feedback loops where you try something, get feedback, then try again. Grades are based on what you eventually learn through this process.

C level work
: Completion of most requirements in the **Java** module.
: Completion of most requirements in the **Deques** module.
: Completion of most requirements in the **Autocomplete** module.

B level work
: Completion of most requirements in the **Java** module.
: Completion of most requirements in the **Deques** module.
: Completion of most requirements in the **Autocomplete** module.
: Completion of most requirements in the **Priority Queues** module.
: Completion of most requirements in the **Portfolio** module.

A level work
: Completion of **all** requirements in the **Java** module.
: Completion of **all** requirements in the **Deques** module.
: Completion of **all** requirements in the **Autocomplete** module.
: Completion of **all** requirements in the **Priority Queues** module.
: Highest marks across all parts of the **Portfolio**.
