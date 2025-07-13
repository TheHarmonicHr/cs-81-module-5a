const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];
// This function totalTime logs the sum of the time spent during the session as minutes.
// There's a total of two; 1 for function purpose and another for reduce to accumulate total time by summing the minutes of each session.
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}
// This function uniqueHobbies returns a list of unique hobby names from the log.
// There's a total of three; 1 for function purpose; 1 for .map(0), and 1 for Set;
// Callbacks are being used to identify new names.
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}
// This function longSessions returns all sessions longer than a given number of minutes.
// There's a total of two; 1 for function purpose, 1 for .filter(0).
// Filters the log to return only entries where minues > minMinutes.
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}
// This function countMood counts how many sessions match a given mood (e.g., 'calm', 'relaxed', 'stressed').
// There's a total of three; 1 for purpose; 1 for .filter(0); 1 for .length use.
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// totalTimespent; Logs the total (n) of mins per session(s).
// totalTime() returns a single (n) that represents the sum of all session durations.

// Uniquehobbies; Logs an array of distinct hobby names found in the log.
// uniqueHobbies() uses map + set to remove duplicates and returns a list of hobbies.

// longSessions(); uses filter to return entries where minutes > 30.
// longSessions(); Logs all sessions that lasted longer than 30 mins.

// countmood; Logs how many sessions were logged with the mood 'relaxed'
// countMood () filters entries by mood and returns the count using .length.

// Improvements; 
// const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
//  reason: reduction of repetition
// const moods =  ["calm","stressed","tired","relaxed"];
// const minutes = [45, 50, 30, 60, 35];

// const hobbyLog = weekdays.map((day,i)) => ({
// day,
// hobby: "Drawing"
// minutes: minutes[i],
// mood: moods[i]
// }));


// Tests how countMood handles a mood not present in the log.
// This checks if the function safely returns 0 rather than throwing an error.
console.log("Ecstatic sessions:", countMood(hobbyLog, "ecstatic"));
