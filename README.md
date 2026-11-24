# One Word From Grandma

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/sandytaztaz-hue/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/sandytaztaz-hue/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on make.fun.

## The word

knowitall

The single word my grandma would text about AI: the machine that answers
everything is a know-it-all. Warm, a little baffled, funny in one word, and
tied to the thing that knows it all.

## How it works

`main.ts` (Node 22) writes exactly that one word, with no trailing newline,
to `entry.txt` in the output directory: `MAKEFUN_OUTPUT_DIR` if set, else the
`--output` flag, else `/output`.

Run it locally:

```sh
node main.ts --output ./out
cat ./out/entry.txt
```

The output is deterministic: every run writes the same 9 bytes.
