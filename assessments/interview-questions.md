---
layout: minimal
title: Interview Questions
description: &desc Data structure and algorithm design.
summary: *desc
parent: Assessments
grand_parent: DSC 30
chance: yes
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

<input id="email" type="email" size="15" placeholder="email@ucsd.edu" class="text-beta p-2 mb-2" />

{: .question .d-none }
> Describe 2 approaches to design a data type that can:
>
> 1. Add words.
> 1. Return a list of all the unique words in alphabetical order.
> 1. Return the number of times a given word has been added.
>
> For your most efficient approach, give a worst-case asymptotic analysis for all methods where _N_ is the total number of words. If helpful, you can choose your own variable to describe the number of unique words.

{: .question .d-none }
> Describe 2 approaches to design a data type that can:
>
> 1. Add "observed" words.
> 1. Add "known" words.
> 1. Return how many "observed" words are present in "known".
>
> For your most efficient approach, give a worst-case asymptotic analysis for all methods where _N_ is the number of "observed" words and _M_ is the number of "known" words.

{: .question .d-none }
> Describe 2 approaches to design a data type that can:
>
> 1. Add places, where a place consists of an (_x_, _y_) coordinate pair.
> 1. Return the closest place to a given _x_ coordinate.
> 1. Return the closest place to a given _y_ coordinate.
>
> For your most efficient approach, give a worst-case asymptotic analysis for all methods where _N_ is the size of the data type.

{: .question .d-none }
> Describe 2 approaches to design a data type that can:
>
> 1. Add numbers.
> 1. Remove the minimum number.
> 1. Remove the maximum number.
>
> For your most efficient approach, give a worst-case asymptotic analysis for all methods where _N_ is the size of the data type.

{: .question .d-none }
> Describe 2 approaches to design a data type that can:
>
> 1. Cast a vote for a candidate.
> 1. Return the number of votes for a given candidate.
> 1. Return the candidate with the greatest number of votes.
>
> For your most efficient approach, give a worst-case asymptotic analysis for all methods where _N_ is the number of votes and _M_ is the number of candidates.

<script>
const email = document.getElementById("email");
const questions = document.getElementsByTagName("blockquote");

email.addEventListener("input", event => {
    const seed = event.target.value.trim().toLowerCase();
    if (seed.endsWith("@ucsd.edu")) {
        document.title = document.title.replace("|", ` for ${seed} |`);
        const url = new URL(window.location);
        url.searchParams.set("email", seed);
        window.history.pushState(null, "", url.toString());
        for (const question of questions) {
            question.classList.add("d-none");
        };
        const chance = new Chance(seed);
        const shuffled = chance.shuffle(questions);
        for (const question of shuffled.slice(0, 2).sort((x, y) => x - y)) {
            question.classList.remove("d-none");
        };
    };
});

(new URL(window.location)).searchParams.forEach((val, key) => {
    const field = document.getElementById(key);
    field.value = val;
    field.dispatchEvent(new Event("input"));
});
</script>
