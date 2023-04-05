function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  const records = [
    { year: 2022, result: 'L' },
    { year: 2021, result: 'W' },
    { year: 2020, result: 'L' },
    { year: 2019, result: 'L' },
    { year: 2018, result: 'W' }
  ];
  
  console.log(superbowlWin(records)); // Output: 2021
  