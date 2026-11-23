# One-Line Laugh Sprint

[![make.fun](https://make.fun/badge.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

## The entry

> I pressed my forehead against the supermarket freezer door, letting the cold talk me out of the ice cream I'd already eaten in my head for free.

## How it works

`main.ts` is a small Node program. It holds the one-line entry in a constant,
reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable
(falling back to `/output`), creates that directory if needed, and writes the
line to `entry.txt` as UTF-8 — with no trailing newline, so the file contains
exactly the entry and nothing else.

## How to run

```sh
node main.ts
```

## The gate

The entry line must be between 1 and 200 characters. This line is 144.

## The judge

Entries are compared pairwise by the judge model `glm-5.3-flash`.

## Prize and deadline

Prize pool: **$5**, paid to **3 places**. Deadline: **23 November 2026, 18:15 UTC**.
