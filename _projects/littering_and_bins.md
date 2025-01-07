---
title: 'Do Garbage Bins Reduce Illegal Littering?'
summary: 'Investigate whether the availability of garbage bins influences the occurrence of illegal littering.'
category: 'data analysis'
link: 'https://inky-trunk-6f7.notion.site/Do-Garbage-Bins-Reduce-Illegal-Littering-15304b8816d980c68cd6fbcd2688c53a?pvs=74'
stack:
  - MySQL
  - Python
  - Pandas
  - Matplotlib
  - Folium
  - Geopy
related_posts:
---

**Did you know it is as hard to find a garbage bin in Seoul as to find a toilet in London?**

I always wondered why and encountered the news that it’s because of illegal littering, which I think is quite counter-intuitive. If there were enough garbage bins on the street, wouldn’t illegal littering decrease? This project started from this question.

<br/>

**This project tells nothing.**

I immediately knew this project would obviously fail.

The available raw data was far too limited. Even the dataset that existed was hard to process — it lacked latitude and longitude information, and the addresses varied in format by district. For instance, some districts even used descriptions like “in front of A building” instead of proper address formats.

Not all districts provided data, and apart from addresses, there was little usable information. Details like the incident date and time or the type of waste were unavailable (even though similar requests have been on the Open Data Portal for over two years). The garbage bin location data wasn’t much better.

In the end, I had to analyse with just two districts' garbage bin location data and illegal dumping location data.

<br/>

**I decided to go on anyway.**

Here’s why: in real-world scenarios, I might face similar challenges. I won’t always receive clean and well-organised data. Of course, in practice, I’d be able to work with the data team or relevant departments to define the data structure I need, but I wanted to practice making the most out of what I had.

In addition, although latitude and longitude information was missing, it would give me an opportunity to work with Geopy, which is a bonus.

<br/>

**So how was it?**

While it was meaningful to explore libraries I’d wanted to try, like Pandas and Matplotlib, the biggest takeaway was communication.

It was a valuable opportunity to think about how I could effectively communicate with relevant teams to obtain the data I need in the desired format, if I were to run this project in a real-world scenario.

Additionally, when designing an SQL database, I reflected on questions like: How should I structure the tables so non-technical users can update or modify the raw data while maintaining the single source of truth(SSOT) principle and ensuring data quality?\*\* It was a great chance to think about effective communication between those who use the data directly and those who provide the raw data.

<br/>

**Still, this project tells nothing. No. Actually, it can tell a few things:**

- **Need for well-structured data guidance** <br/>
  While examining the raw data, I could see that the people who created it made an effort to provide detailed information, like "across from X" or "to the right of the crosswalk."
  If they had been given proper training and guidance on data collection, the quality of the dataset could have been significantly improved.
  Moreover, if the objective had gone beyond merely publishing open data - if there had been enough thought into how the data would be used and all districts had been guided to provide standardised datasets — their efforts could have shone even brighter.
- **Importance of communication** <br/>
  From a data analyst’s perspective, I could learn the importance of proactive and clear communication on the type of data I need and how it should be structured, all based on my understanding of the domain I’m working on.
- **Number is not important** <br/>
  No, the number is important. But the number itself is significantly less important than the message you want to deliver. Even before proceeding with any project, it is crucial to deeply consider the following: What message do you want to convey? What matters most to the people consuming the data? What data do you need to efficiently tell your story? <br/>
  And the project helped me embrace this mindset.

  <br/>

I do hope in the near future, I can improve this project with additional data and better skills.

Meanwhile, if you’re interested in my project, check it out [here]('https://inky-trunk-6f7.notion.site/Do-Garbage-Bins-Reduce-Illegal-Littering-15304b8816d980c68cd6fbcd2688c53a?pvs=74')

<br/>
<br/>
