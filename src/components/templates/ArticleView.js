import React from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";

import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";
import ArticleComments from "../molecules/ArticleComments/ArticleComments";

export default function ArticleView() {
    const comments = [
        {
            author: "Horse Ammar",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            author: "Horse Ammar",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];

    const article = [
        "One of the first things I discovered as President of the United States was that no decision that landed on my desk had an easy, tidy answer. The black-and-white questions never made it to me — somebody else on my staff would have already answered them. And while few decisions in life are as complex as the ones you face in the Oval Office, I did walk away from my eight years as president with some thoughts on how to approach tough questions.",
        "In March of 2009, just a couple of months into my presidency, the economy was in freefall. Unemployment was up to 8.5 percent, on its way to ten percent. 800,000 Americans lost their jobs that month, families across the country were losing their homes, a tanking stock market was depleting their 401ks, and a difficult credit market was making it hard for small business owners to take out the loans they needed. To turn around any of this required stabilizing the financial system, and to do that, I had settled on what was the least bad of three lousy options — subjecting the 19 largest banks to “stress tests” to see whether they had the capital to survive an even worse economy.",
        "Nobody was happy about it — not the public, not Wall Street, not me. My own advisors disagreed about the path forward, with some calling for a sharper condemnation of the bankers whose recklessness had gotten us into the mess, and others saying that such gestures might stifle the very market confidence we needed.",
        "To get everybody on the same page, I called a meeting with my economic team. We spent a long, exhausting day hearing from Treasury Secretary Tim Geithner about how the stress tests were going, hashing out various alternatives, and pushing every idea to its logical conclusion to see if it might work. By evening, I left the meeting to have dinner and get a haircut and told my team that I expected a consensus upon my return. But the truth was that, through that grueling process, I had already reached my decision to let the stress tests bear out. Within six months, the economy would start growing again. And by the next year, the biggest banks had paid back every dime of taxpayer money — plus interest.",
        "But the point is, in just a few short weeks on the job, I had already realized that because every tough decision came down to a probability, then certainty was an impossibility — which could leave me encumbered by the sense that I could never get it quite right. So rather than let myself get paralyzed in the quest for a perfect solution, or succumb to the temptation to just go with my gut every time, I created a sound decision-making process — one where I really listened to the experts, followed the facts, considered my goals and weighed all of that against my principles. Then, no matter how things turned out, I would at least know I had done my level best with the information in front of me.",
        "There was something liberating, and humbling, about leaning on a process.",
        "Of course, that only works if you listen — really listen — to others. For me, that meant asking everybody in a meeting what they thought about the problem at hand. I’d call on folks in the back row, including the most junior staffer. That required people to come prepared to share their views.",
        "But, like every leader, I had my blind spots. Late in my first year, Valerie Jarrett reported that some of the senior women on staff were experiencing a culture where the men on the team interrupted them, dismissed their ideas before adopting them as their own, and generally made them feel diminished — to the point where some of the women had altogether stopped talking in meetings. These were some of my most important advisors, so I convened them over dinner to hear more. Listening to their stories, I considered the degree to which my own tolerance for machismo behavior had contributed to their discomfort and, inadvertently, stifled their important contributions. We didn’t resolve everything in one night — but being aware was a start. The men, I later discovered, had been oblivious — and were appropriately mortified. They promised to do better, and a few months later, Valerie said she noticed some improvement.",
        "One of the earliest decisions I had to make about the war in Afghanistan was one that had been pending since before I took office. Although we were planning to revamp our entire strategy, the commander on the ground was requesting an immediate deployment of an additional 30,000 troops. That’s how I found myself in the Situation Room, two days after inauguration, discussing the issue with the principal members of the National Security Council — people like the Chairman of the Joint Chiefs of Staff and the Director of the CIA. Almost everyone in the group was inclined to support the troop deployment.",
    ];

    return (
        <div className="article-page">
            <ArticleHeader
                author="Obama"
                time="8"
                title="How to approach the most difficult decisions!"
                profileUrl="https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png"
            />

            {article.map((para) => (
                <div className="article-content">{para}</div>
            ))}

            <div>
                <AiOutlineLike
                    style={{ margin: "0 5px" }}
                    color="#fa6400"
                    size={30}
                />
                <AiOutlineShareAlt
                    style={{ margin: "0 5px" }}
                    color="#fa6400"
                    size={30}
                />
                <VscBookmark
                    style={{ margin: "0 5px" }}
                    color="#fa6400"
                    size={30}
                />
            </div>

            <ArticleComments comments={comments} />
        </div>
    );
}
