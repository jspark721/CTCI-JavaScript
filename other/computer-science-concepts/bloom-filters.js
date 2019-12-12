/* bloom filters are an interesting data structure which are designed to tell you quickly and efficiently if an item is in a set

fast
memory efficient
but the tradeoff is it can't tell you definitely if an item is in the set; it can only tell you definitely that item is NOT in the set

false positive rate, but do not have false negatives

why is it useful?
- sometimes you don't care about false positives, you just want to make sure something is NOT in the set

can't remove anything from a bloom filter 
*/
