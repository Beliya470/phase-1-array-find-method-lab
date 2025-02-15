function superbowlWin(record) {
    const winRecord = record.find((game) => game.result === "W");
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }
  
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Add more game records if needed
  ];
  
  const winYear = superbowlWin(record);
  
  console.log("Superbowl Win Year:", winYear);
  