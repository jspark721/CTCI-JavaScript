# Random Access Memory (RAM)

When a computer is running code, it needs to keep track of variables (numbers, strings, arrays, etc.).

Variables are stored in random access memory (RAM). We sometimes call RAM "working memory" or just "memory."

### Think of RAM like a really tall bookcase with a lot of shelves. Like, billions of shelves.
the shelves are numbered, the shelf's number is its **address**, each shelf holds **8 bits**. a _bit_ is a tiny electric switch that can be turned "on" or "off" -- but instead, we call it 1 or 0

8 bits is called a **byte** -- each shelf has one byte (8 bits) of storage

the processor does all the real work, it's connected to a **memory controller** which does the reading and writing to and from RAM, it has a _direct connection_ to each shelf of RAM

Even though the memory controller can jump between far-apart memory addresses quickly, programs tend to access memory that's nearby. So computers are tuned to get an extra speed boost when reading memory addresses that're close to each other.

The processor has a cache where it stores a copy of stuff it's recently read from RAM. This cache is much faster to read from than RAM, so the processor saves time whenever it can read something from cache instead of going out to RAM.