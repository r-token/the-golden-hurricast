---
path: "/Recaps-for-dayz"
date: "01/16/2022"
sortDate: "2022/01/16"
title: "Recap 2021"
authors: "Matt Rechtien"
excerpt: "Deep football recap"
tags: ['football', 'stats', 'golden hurristats']
---

# Hello

2021 was an interesting season for the Golden Hurricane. A lot of people (including both members of this podcast) had high expectations for how the team would perform this season. However, as is the normal for Tulsa it was a way more chaotic year that saw them lose to FCS UC Davis in the opener, and win a bowl game against a solid ODU squad. While a bowl qualifying season is never a bad thing, it was definitely a frustrating season to watch, especially after a conference title game berth just a season ago.

The two big stories heading into this season were: Would the offense take the next step forward under Davis Brin? And would the defense see a drop-off from last year when we had All-American, first rounder Zaven Collins leading the squad?

If you listened to our season preview, both Ryan and myself were expecting the answer to be yes to both of those questions. We figured there would be a slight drop in defensive production with the loss of Collins along with DB coach Aaron Fletcher and Akayleb Evans and Allie Green IV, but that the defense would be solid again this year. We felt confident in the players we had returning on that side of the ball.

And we were both high on Davis Brin continuing his performance from 2020's heroic win over Tulane. Especially with almost the entire rest of our offense returning from 2020.

To get a good analytic comparison between how this team did in general, as well as how they did compared to last year I will be spending a lot of time looking at various metrics, including Expected Points Added / Predicted Points Added (EPA / PPA). I will explain those in just a second, but if you want to see where I'm getting my data and read more you can look at [CFB Data](https://collegefootballdata.com/glossary) which has a lot of awesome stuff that I've been playing with this year.

## Expected Points Added

EPA and PPA refer to the exact same thing, so I will be using EPA from here on out. But what is EPA and why is it a good tool to use? Football box scores have a lot of really good information; total yards of offense, yards per rush / pass, points, individual stats, etc. But what they really don't show is any sort of context for most of those numbers. Not every play for four yards is worth the same. Down, distance and where you are on the field matters. For example a pass for four yards on a 3rd and 2 at your opponents 30 yard line is more valuable than a four-yard pass on 3rd and 7 from your own 30. EPA is a way to try and quantify the value of these plays by assigning them "expected" point values that they add to a drive.

People smarter than I have built models that assign an expected point value to every spot on the field for every possible down and distance. Since their API is free and has loads of valuable and insightful data I use CFB's EPA model [found here](https://collegefootballdata.com/exporter/ppa/predicted?down=1&distance=10).

So, let's say as an example that Tulsa just received the opening kickoff and took a knee in the end zone. It would be 1st and 10 from their own 25. Based on the model linked above, the expected points for that drive at the first play would be **0.922**. Knowing this starting expected value allows us to determine how many added points the offense is able to generate on that drive. A touchdown would see the team add **6.078** points (TDs are assumed to be seven for the sake of simplicity). A field goal would be **2.078**, and any sort of turnover -- interception, fumble, punt -- would yield **-0.922** points added because you got no points on the drive.

Taking this idea even further you can calculate the expected points value for every play based on the expected points of the play before and after it occurs. Simply take the expected points from before the play and subtract that value from the expected points after the play. So, looking back at our 1st and 10 from the 25 the **before** expected points was **0.922**. If the team ran the ball for 5 yards the next play would be 2nd and 5 from the 30. Using the CFB model we know that the expected points on the drive is now **1.017**. Taking the after EPA minus the before EPA shows that the run added **0.095** expected points to the drive.

This flexibility in calculating the metric allows us evaluate every play in the context of the game. And since it's a per play metric and not a per game metric we can use it as a comparison against past Tulsa teams as well as against other teams in college football. Looking at total points, total points added or other counting stats is difficult because there is so much variability in college football. A team that runs fewer plays and has fewer possessions (like a military academy) won't generally see as high of counting stats. This includes cumulative EPA.

On the other side of the spectrum a team like LSU in 2019 with Joe Burrow at the helm lit up the scoreboard an had lots of possessions. Comparing those two styles of football would normally be a very tall order since they play such different styles, but EPA gives us this opportunity. LSU in 2019 had **0.420** EPA per play, top in the country - Navy who finished the season ranked No. 20 in 2019 was not too far behind at **0.369** EPA per play. Navy was actually the sixth best team in terms of EPA per play on offense. That is why EPA is such a useful tool for comparison.

It works similarly on defense but obviously you want a smaller value because that would indicate fewer expected points allowed per play from your opponents.

## TU's Returning EPA

I know I just spent a lot of time explaining why I prefer per play metrics and their usefulness, but the first thing I want to look at is Tulsa's cumulative EPA from 2020. The reason for that is to get a better feel for what our returning production looked like coming into the 2021 season.


Table: Tulsa's returning production from 2020.

| Total EPA Returning | Passing EPA Returning | Receiving EPA Returning | Rushing EPA Returning | Percent EPA Returning | Percent EPA Passing | Percent EPA Receiving | Percent EPA Rushing | Total Usage (# of Plays) | Passing Usage | Receiving Usage | Rushing Usage |
|:-------------------:|:---------------------:|:-----------------------:|:---------------------:|:---------------------:|:-------------------:|:---------------------:|:-------------------:|:------------------------:|:-------------:|:---------------:|:-------------:|
|        173.6        |         16.9          |          144.9          |         11.8          |         0.72          |        0.244        |         0.988         |        0.472        |           0.47           |     0.141     |      0.985      |     0.366     |

Couple of important notes / caveats on this table. For this chart's purpose passing and receiving EPA are separated so that we can see it based on position group. When you split passing and receiving you get a somewhat inflated value for EPA because wide receivers are not penalized for incompletions - the receiving EPA will almost always be higher than the passing EPA (based on reviewing play-by-play data they aren't even penalized for drops). All that to say that a majority of our returning EPA production from our wide receiving corps. This has to be taken with a grain of salt, because only about a quarter of our passing production is returning. Zach Smith, who had \~seventy-five percent of the passing EPA and was a obviously a key contributor to the receiving EPA, graduated in 2020.

The upside from the table is that our returning EPA was larger than our usage in all three phases of the offense. Meaning, the players returning contributed an outsized percentage of our offensive production last year.

The most dramatic is the difference between our returning passing EPA and usage. The combination of Davis Brin and a little bit of Seth Boomer accounted for only fourteen percent of our total passes in 2020, with all but one taking place in the second half of the Tulane game. But, in that limited usage Davis Brin accounted for ***twenty four percent*** of Tulsa's total passing EPA. For the entire season. His total EPA for the season was fifth on the team behind just Keylon Stokes, Smith, J.C. Santana and Josh Johnson. With only ***31*** passes. This is obviously an incredibly small sample size, but nonetheless it left a lot of Tulsa fans incredibly optimistic coming into 2021 with Brin at the helm. I mean, just look at this comparison among QBs in the conference last season.

An important qualification for EPA regarding rushing [Rushing caveat]

On the running side of the ball Corey Taylor had some big shoes to fill, but the return of Shamri Brooks from injury and Deneric Prince's strong debut season looked promising. A veteran offense line, with a Freshman All-American in Tyler Smith only increased expectations.

[Flesh out more information about running back as a position just being hampered on EPA]

Finally, all of our top receivers in Johnson, Santana, Sam Crawford, and Stokes were returning, giving Brin a lot of returning targets. [Only 24 passes caught in 2020 were not back on the team]

[]

Did all of this returning production result in a better offense in 2021? Yes, but it was not quite the leap that a lot of fans were hoping and dreaming.

## 2021 EPA Results


| Season| Offense EPA Per Play| Passing EPA Per Play| Rushing EPA Per Play|
|------:|--------------------:|--------------------:|--------------------:|
|   2020|            0.1285993|            0.2071765|            0.0583213|
|   2021|            0.1436621|            0.2327946|            0.0688150|

The offense saw about a twelve and a half percent increase in expected points added per play from 2020 to 2021, but

[offense was better than last year, but pretty close to what we saw in 2019]

[offense have been well below average though in general] show overall table, passing, and then rushing

[Davis Brin, best full season QB EPA since Dane Evans] show table with QB EPA in last 7 years

[Rushing has been trending up, but still not our identity in terms of production] Running chart

[Conference comparisons] Chart

[Final thoughts - trending right direction, would like to see more consistency and explosiveness. more balance in the offense in general]