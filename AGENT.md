# AGENT.md — One-Line Laugh Sprint

## What this entry is

A one-line joke entry for the make.fun bounty "One-Line Laugh Sprint". The
program `main.ts` writes the entry line to `entry.txt` in the output
directory.

## The entry line

I pressed my forehead against the supermarket freezer door, letting the cold talk me out of the ice cream I'd already eaten in my head for free.

## How to verify

Run the program with `MAKEFUN_OUTPUT_DIR` set to a temp directory, then check
the output file is exactly the line above — 144 characters, no trailing
newline:

```sh
MAKEFUN_OUTPUT_DIR=./out-test node main.ts
wc -c out-test/entry.txt   # expect 144
python3 -c "print(len(open('out-test/entry.txt', encoding='utf-8').read()))"  # expect 144
```

Then remove the temp directory (`rm -rf out-test`).
