/**
 * Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
 * 
 * For example, given
 * 
 * input: 
 * meetings = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]
  ouput:
    [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ]
 */

const mergeMeetings = (meetings) => {
  //if array is empty or only has one value, nothing to merge
  if (meetings.length === 0 || meetings.length === 1) {
    return meetings;
  }

  //sort the meetings array by start time
  const sortedMeetings = meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  //initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};

let meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

console.log(mergeMeetings(meetings));

//time complexity: O(n log n) -- we sort the meetings, and then go through the sorted meetings array once
//space complexity: O(n) -- creating a new mergedMeetings array
