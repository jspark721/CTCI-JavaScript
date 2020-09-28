/*
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges

input: [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
output:   [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

do not assume the meetings are in order - the meeting times are coming from multiple teams

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. 
*/

const mergeMeetingTimes = (meetings) => {
  if (meetings.length === 0) return meetings;
  //sort meetings by the start time
  let sortedMeetings = meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  //initialize merged meetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    //if the current meeting overlaps with the last merged meeting, use the later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      //add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};

console.log(
  mergeMeetingTimes([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);

//time complexity: O(n log n) -- sorting and then looping through the sorted meetings once
//space complexity: O(n) -- creating new array of merged meetings
