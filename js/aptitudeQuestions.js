/* 100 verified easy aptitude questions: 10 categories × 10 questions each. */
const AptitudeQuestions = (() => {
  const data = [
    // --- 1. PERCENTAGE (Q1 - Q10) ---
    {
      id: 1,
      category: "Percentage",
      difficulty: "Easy",
      question: "What is 20% of 150?",
      options: ["20", "30", "40", "50"],
      correctAnswer: "30",
      explanation: "20% of 150 = (20 / 100) × 150 = 30."
    },
    {
      id: 2,
      category: "Percentage",
      difficulty: "Easy",
      question: "What is 50% of 84?",
      options: ["38", "40", "42", "44"],
      correctAnswer: "42",
      explanation: "50% of 84 = 84 ÷ 2 = 42."
    },
    {
      id: 3,
      category: "Percentage",
      difficulty: "Easy",
      question: "15 is what percentage of 60?",
      options: ["15%", "20%", "25%", "30%"],
      correctAnswer: "25%",
      explanation: "(15 / 60) × 100 = 0.25 × 100 = 25%."
    },
    {
      id: 4,
      category: "Percentage",
      difficulty: "Easy",
      question: "What is 10% of 250?",
      options: ["15", "20", "25", "30"],
      correctAnswer: "25",
      explanation: "10% of 250 = 250 / 10 = 25."
    },
    {
      id: 5,
      category: "Percentage",
      difficulty: "Easy",
      question: "Express 3/4 as a percentage.",
      options: ["60%", "70%", "75%", "80%"],
      correctAnswer: "75%",
      explanation: "3/4 × 100 = 75%."
    },
    {
      id: 6,
      category: "Percentage",
      difficulty: "Easy",
      question: "A shirt priced at ₹500 has a 20% discount. What is the discount amount?",
      options: ["₹50", "₹100", "₹150", "₹200"],
      correctAnswer: "₹100",
      explanation: "20% of 500 = (20 / 100) × 500 = ₹100."
    },
    {
      id: 7,
      category: "Percentage",
      difficulty: "Easy",
      question: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      correctAnswer: "50",
      explanation: "25% of 200 = 200 / 4 = 50."
    },
    {
      id: 8,
      category: "Percentage",
      difficulty: "Easy",
      question: "A student scored 40 out of 50 in a test. What is the percentage score?",
      options: ["70%", "75%", "80%", "85%"],
      correctAnswer: "80%",
      explanation: "(40 / 50) × 100 = 80%."
    },
    {
      id: 9,
      category: "Percentage",
      difficulty: "Easy",
      question: "What is 5% of 300?",
      options: ["10", "15", "20", "25"],
      correctAnswer: "15",
      explanation: "5% of 300 = (5 / 100) × 300 = 15."
    },
    {
      id: 10,
      category: "Percentage",
      difficulty: "Easy",
      question: "Increase 80 by 25%. What is the new number?",
      options: ["90", "95", "100", "105"],
      correctAnswer: "100",
      explanation: "25% of 80 = 20. New number = 80 + 20 = 100."
    },

    // --- 2. PROFIT AND LOSS (Q11 - Q20) ---
    {
      id: 11,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "An item bought for ₹100 is sold for ₹120. What is the profit?",
      options: ["₹10", "₹15", "₹20", "₹25"],
      correctAnswer: "₹20",
      explanation: "Profit = Selling Price − Cost Price = 120 − 100 = ₹20."
    },
    {
      id: 12,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "A book bought for ₹200 is sold for ₹150. What is the loss?",
      options: ["₹30", "₹40", "₹50", "₹60"],
      correctAnswer: "₹50",
      explanation: "Loss = Cost Price − Selling Price = 200 − 150 = ₹50."
    },
    {
      id: 13,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "Cost price is ₹400 and profit is ₹80. What is the Selling Price?",
      options: ["₹420", "₹450", "₹480", "₹500"],
      correctAnswer: "₹480",
      explanation: "Selling Price = Cost Price + Profit = 400 + 80 = ₹480."
    },
    {
      id: 14,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "If Cost Price = ₹50 and Selling Price = ₹60, what is the profit percentage?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: "20%",
      explanation: "Profit = ₹10. Profit % = (10 / 50) × 100 = 20%."
    },
    {
      id: 15,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "Selling price is ₹300 and loss is ₹30. What was the Cost Price?",
      options: ["₹270", "₹300", "₹330", "₹360"],
      correctAnswer: "₹330",
      explanation: "Cost Price = Selling Price + Loss = 300 + 30 = ₹330."
    },
    {
      id: 16,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "A toy bought for ₹80 is sold at a profit of ₹20. What is the selling price?",
      options: ["₹90", "₹100", "₹110", "₹120"],
      correctAnswer: "₹100",
      explanation: "Selling Price = Cost Price + Profit = 80 + 20 = ₹100."
    },
    {
      id: 17,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "A pen is bought for ₹10 and sold for ₹15. What is the profit percentage?",
      options: ["33%", "40%", "50%", "60%"],
      correctAnswer: "50%",
      explanation: "Profit = ₹5. Profit % = (5 / 10) × 100 = 50%."
    },
    {
      id: 18,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "If cost price is ₹250 and profit rate is 10%, what is the profit amount?",
      options: ["₹15", "₹20", "₹25", "₹30"],
      correctAnswer: "₹25",
      explanation: "10% of 250 = (10 / 100) × 250 = ₹25."
    },
    {
      id: 19,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "An article is sold for ₹90 with a loss of ₹10. What is the cost price?",
      options: ["₹80", "₹90", "₹100", "₹110"],
      correctAnswer: "₹100",
      explanation: "Cost Price = Selling Price + Loss = 90 + 10 = ₹100."
    },
    {
      id: 20,
      category: "Profit and Loss",
      difficulty: "Easy",
      question: "A watch bought for ₹500 is sold for ₹600. What is the profit percentage?",
      options: ["15%", "18%", "20%", "25%"],
      correctAnswer: "20%",
      explanation: "Profit = ₹100. Profit % = (100 / 500) × 100 = 20%."
    },

    // --- 3. RATIO AND PROPORTION (Q21 - Q30) ---
    {
      id: 21,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "Simplify the ratio 10 : 15.",
      options: ["1 : 2", "2 : 3", "3 : 4", "2 : 5"],
      correctAnswer: "2 : 3",
      explanation: "Divide both terms by 5: 10/5 : 15/5 = 2 : 3."
    },
    {
      id: 22,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "If A : B = 2 : 3 and B = 12, what is A?",
      options: ["6", "8", "9", "10"],
      correctAnswer: "8",
      explanation: "3 parts = 12 => 1 part = 4. So A = 2 × 4 = 8."
    },
    {
      id: 23,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "Divide ₹100 between A and B in the ratio 3 : 2. What is A's share?",
      options: ["₹40", "₹50", "₹60", "₹70"],
      correctAnswer: "₹60",
      explanation: "Total parts = 3 + 2 = 5. A's share = (3 / 5) × 100 = ₹60."
    },
    {
      id: 24,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "What is the ratio of 40 minutes to 1 hour?",
      options: ["2 : 3", "3 : 4", "4 : 5", "1 : 2"],
      correctAnswer: "2 : 3",
      explanation: "1 hour = 60 minutes. Ratio = 40 : 60 = 2 : 3."
    },
    {
      id: 25,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "If 2 : 5 = X : 20, find X.",
      options: ["4", "6", "8", "10"],
      correctAnswer: "8",
      explanation: "2 / 5 = X / 20 => X = (2 × 20) / 5 = 8."
    },
    {
      id: 26,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "Simplify the ratio 8 : 24.",
      options: ["1 : 2", "1 : 3", "1 : 4", "2 : 3"],
      correctAnswer: "1 : 3",
      explanation: "Divide both terms by 8: 8/8 : 24/8 = 1 : 3."
    },
    {
      id: 27,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "Two numbers are in ratio 4 : 5. If their sum is 90, what is the smaller number?",
      options: ["36", "40", "45", "50"],
      correctAnswer: "40",
      explanation: "Sum of parts = 9. 1 part = 90 / 9 = 10. Smaller = 4 × 10 = 40."
    },
    {
      id: 28,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "If A : B = 1 : 4 and A = 5, what is B?",
      options: ["15", "20", "25", "30"],
      correctAnswer: "20",
      explanation: "B = 4 × A = 4 × 5 = 20."
    },
    {
      id: 29,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "What is the ratio of 50 cm to 2 meters?",
      options: ["1 : 2", "1 : 3", "1 : 4", "1 : 5"],
      correctAnswer: "1 : 4",
      explanation: "2 meters = 200 cm. Ratio = 50 : 200 = 1 : 4."
    },
    {
      id: 30,
      category: "Ratio and Proportion",
      difficulty: "Easy",
      question: "If 3 : 4 = 15 : Y, find Y.",
      options: ["16", "18", "20", "24"],
      correctAnswer: "20",
      explanation: "3 / 4 = 15 / Y => Y = (4 × 15) / 3 = 20."
    },

    // --- 4. AVERAGE (Q31 - Q40) ---
    {
      id: 31,
      category: "Average",
      difficulty: "Easy",
      question: "What is the average of 10, 20, and 30?",
      options: ["15", "20", "25", "30"],
      correctAnswer: "20",
      explanation: "Average = (10 + 20 + 30) / 3 = 60 / 3 = 20."
    },
    {
      id: 32,
      category: "Average",
      difficulty: "Easy",
      question: "What is the average of the first 5 positive integers (1, 2, 3, 4, 5)?",
      options: ["2.5", "3", "3.5", "4"],
      correctAnswer: "3",
      explanation: "Sum = 1 + 2 + 3 + 4 + 5 = 15. Average = 15 / 5 = 3."
    },
    {
      id: 33,
      category: "Average",
      difficulty: "Easy",
      question: "The total weight of 4 students is 120 kg. What is their average weight?",
      options: ["25 kg", "30 kg", "35 kg", "40 kg"],
      correctAnswer: "30 kg",
      explanation: "Average = Total Weight / Count = 120 / 4 = 30 kg."
    },
    {
      id: 34,
      category: "Average",
      difficulty: "Easy",
      question: "What is the average of 5, 10, 15, and 20?",
      options: ["10", "12.5", "15", "17.5"],
      correctAnswer: "12.5",
      explanation: "Sum = 50. Average = 50 / 4 = 12.5."
    },
    {
      id: 35,
      category: "Average",
      difficulty: "Easy",
      question: "Test marks of a student in 3 subjects are 70, 80, and 90. What is the average mark?",
      options: ["75", "80", "85", "90"],
      correctAnswer: "80",
      explanation: "Average = (70 + 80 + 90) / 3 = 240 / 3 = 80."
    },
    {
      id: 36,
      category: "Average",
      difficulty: "Easy",
      question: "If the average of 3 numbers is 15, what is their sum?",
      options: ["30", "40", "45", "50"],
      correctAnswer: "45",
      explanation: "Sum = Average × Count = 15 × 3 = 45."
    },
    {
      id: 37,
      category: "Average",
      difficulty: "Easy",
      question: "What is the average of 12, 16, and 20?",
      options: ["14", "15", "16", "18"],
      correctAnswer: "16",
      explanation: "(12 + 16 + 20) / 3 = 48 / 3 = 16."
    },
    {
      id: 38,
      category: "Average",
      difficulty: "Easy",
      question: "The average age of 5 children is 10 years. What is the sum of their ages?",
      options: ["40", "45", "50", "55"],
      correctAnswer: "50",
      explanation: "Sum of ages = 5 × 10 = 50 years."
    },
    {
      id: 39,
      category: "Average",
      difficulty: "Easy",
      question: "Find the average of 100 and 200.",
      options: ["120", "140", "150", "160"],
      correctAnswer: "150",
      explanation: "Average = (100 + 200) / 2 = 150."
    },
    {
      id: 40,
      category: "Average",
      difficulty: "Easy",
      question: "The average of 4 numbers is 20. What is the sum of all 4 numbers?",
      options: ["60", "70", "80", "100"],
      correctAnswer: "80",
      explanation: "Sum = Count × Average = 4 × 20 = 80."
    },

    // --- 5. SIMPLE INTEREST (Q41 - Q50) ---
    {
      id: 41,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Find the Simple Interest on ₹1000 at 10% per annum for 1 year.",
      options: ["₹50", "₹80", "₹100", "₹120"],
      correctAnswer: "₹100",
      explanation: "SI = (P × R × T) / 100 = (1000 × 10 × 1) / 100 = ₹100."
    },
    {
      id: 42,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Find the Simple Interest on ₹500 at 5% per annum for 2 years.",
      options: ["₹25", "₹50", "₹75", "₹100"],
      correctAnswer: "₹50",
      explanation: "SI = (500 × 5 × 2) / 100 = ₹50."
    },
    {
      id: 43,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "If Principal = ₹200, Rate = 10%, Time = 3 years, what is the Simple Interest?",
      options: ["₹40", "₹50", "₹60", "₹70"],
      correctAnswer: "₹60",
      explanation: "SI = (200 × 10 × 3) / 100 = ₹60."
    },
    {
      id: 44,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Principal = ₹400 and Interest = ₹40. What is the total Amount?",
      options: ["₹420", "₹440", "₹460", "₹480"],
      correctAnswer: "₹440",
      explanation: "Amount = Principal + Interest = 400 + 40 = ₹440."
    },
    {
      id: 45,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Simple Interest on ₹300 at 6% for 1 year is:",
      options: ["₹12", "₹15", "₹18", "₹24"],
      correctAnswer: "₹18",
      explanation: "SI = (300 × 6 × 1) / 100 = ₹18."
    },
    {
      id: 46,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Find Simple Interest on ₹800 at 5% for 1 year.",
      options: ["₹30", "₹40", "₹50", "₹60"],
      correctAnswer: "₹40",
      explanation: "SI = (800 × 5 × 1) / 100 = ₹40."
    },
    {
      id: 47,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "At what rate per annum will ₹100 earn ₹20 interest in 2 years?",
      options: ["5%", "8%", "10%", "12%"],
      correctAnswer: "10%",
      explanation: "Rate = (SI × 100) / (P × T) = (20 × 100) / (100 × 2) = 10%."
    },
    {
      id: 48,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "If P = ₹1500, R = 4%, T = 1 year, find SI.",
      options: ["₹50", "₹60", "₹70", "₹80"],
      correctAnswer: "₹60",
      explanation: "SI = (1500 × 4 × 1) / 100 = ₹60."
    },
    {
      id: 49,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "If SI = ₹100, P = ₹1000, R = 10%, what is the Time T in years?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      correctAnswer: "1 year",
      explanation: "T = (SI × 100) / (P × R) = (100 × 100) / (1000 × 10) = 1 year."
    },
    {
      id: 50,
      category: "Simple Interest",
      difficulty: "Easy",
      question: "Find Amount if Principal = ₹600 and SI = ₹90.",
      options: ["₹660", "₹690", "₹720", "₹750"],
      correctAnswer: "₹690",
      explanation: "Amount = Principal + SI = 600 + 90 = ₹690."
    },

    // --- 6. TIME AND WORK (Q51 - Q60) ---
    {
      id: 51,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If A can finish a job in 10 days, what fraction of work does A do in 1 day?",
      options: ["1/5", "1/10", "1/15", "1/20"],
      correctAnswer: "1/10",
      explanation: "1-day work = 1 / total days = 1/10."
    },
    {
      id: 52,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If 1 person finishes a work in 6 days, how many days will 2 people take at the same rate?",
      options: ["2 days", "3 days", "4 days", "5 days"],
      correctAnswer: "3 days",
      explanation: "Time taken = 6 / 2 = 3 days."
    },
    {
      id: 53,
      category: "Time and Work",
      difficulty: "Easy",
      question: "A completes a task in 4 days and B in 4 days. Working together, how many days will it take?",
      options: ["1 day", "2 days", "3 days", "4 days"],
      correctAnswer: "2 days",
      explanation: "Combined 1-day work = 1/4 + 1/4 = 1/2. Total time = 2 days."
    },
    {
      id: 54,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If 4 workers build a wall in 12 hours, how many hours will 8 workers take?",
      options: ["4 hours", "6 hours", "8 hours", "10 hours"],
      correctAnswer: "6 hours",
      explanation: "Workers × Hours = constant (4 × 12 = 48). Hours = 48 / 8 = 6 hours."
    },
    {
      id: 55,
      category: "Time and Work",
      difficulty: "Easy",
      question: "A does 1/5 of a work in 1 day. How many days to complete the full work?",
      options: ["3 days", "4 days", "5 days", "6 days"],
      correctAnswer: "5 days",
      explanation: "Total days = 1 / (1/5) = 5 days."
    },
    {
      id: 56,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If 5 workers complete a job in 10 days, how many person-days are needed?",
      options: ["25", "40", "50", "60"],
      correctAnswer: "50",
      explanation: "Person-days = 5 × 10 = 50."
    },
    {
      id: 57,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If A takes 6 days to complete a job and B takes 12 days, who is faster?",
      options: ["A", "B", "Both same speed", "Cannot determine"],
      correctAnswer: "A",
      explanation: "A takes fewer days (6 vs 12), so A is faster."
    },
    {
      id: 58,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If 3 identical pipes fill a tank in 6 hours, how long will 1 pipe take alone?",
      options: ["12 hours", "15 hours", "18 hours", "24 hours"],
      correctAnswer: "18 hours",
      explanation: "Time for 1 pipe = 3 × 6 = 18 hours."
    },
    {
      id: 59,
      category: "Time and Work",
      difficulty: "Easy",
      question: "A worker completes 50% of a job in 4 days. How many total days to complete 100%?",
      options: ["6 days", "8 days", "10 days", "12 days"],
      correctAnswer: "8 days",
      explanation: "Total time = 4 × 2 = 8 days."
    },
    {
      id: 60,
      category: "Time and Work",
      difficulty: "Easy",
      question: "If 10 people plant 10 trees in 10 minutes, how long does 1 person take to plant 1 tree?",
      options: ["1 minute", "5 minutes", "10 minutes", "100 minutes"],
      correctAnswer: "10 minutes",
      explanation: "Each person works independently and takes 10 minutes per tree."
    },

    // --- 7. TIME, SPEED AND DISTANCE (Q61 - Q70) ---
    {
      id: 61,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "A car travels at 60 km/h. How far does it travel in 2 hours?",
      options: ["100 km", "110 km", "120 km", "140 km"],
      correctAnswer: "120 km",
      explanation: "Distance = Speed × Time = 60 × 2 = 120 km."
    },
    {
      id: 62,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "A train covers 150 km in 3 hours. What is its speed?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      correctAnswer: "50 km/h",
      explanation: "Speed = Distance / Time = 150 / 3 = 50 km/h."
    },
    {
      id: 63,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "How much time is needed to travel 100 km at a speed of 25 km/h?",
      options: ["2 hours", "3 hours", "4 hours", "5 hours"],
      correctAnswer: "4 hours",
      explanation: "Time = Distance / Speed = 100 / 25 = 4 hours."
    },
    {
      id: 64,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "Convert 18 km/h to m/s.",
      options: ["3 m/s", "5 m/s", "8 m/s", "10 m/s"],
      correctAnswer: "5 m/s",
      explanation: "18 × (5 / 18) = 5 m/s."
    },
    {
      id: 65,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "A cyclist covers 30 km in 2 hours. What is the speed?",
      options: ["10 km/h", "12 km/h", "15 km/h", "20 km/h"],
      correctAnswer: "15 km/h",
      explanation: "Speed = Distance / Time = 30 / 2 = 15 km/h."
    },
    {
      id: 66,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "Walking at 4 km/h, how far do you walk in 30 minutes (0.5 hour)?",
      options: ["1 km", "2 km", "3 km", "4 km"],
      correctAnswer: "2 km",
      explanation: "Distance = 4 × 0.5 = 2 km."
    },
    {
      id: 67,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "A runner covers 400 meters in 80 seconds. What is the speed in m/s?",
      options: ["4 m/s", "5 m/s", "6 m/s", "8 m/s"],
      correctAnswer: "5 m/s",
      explanation: "Speed = 400 / 80 = 5 m/s."
    },
    {
      id: 68,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "How far does a bus traveling at 40 km/h go in 15 minutes (1/4 hour)?",
      options: ["5 km", "10 km", "15 km", "20 km"],
      correctAnswer: "10 km",
      explanation: "Distance = 40 × (1/4) = 10 km."
    },
    {
      id: 69,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "If speed is 0 km/h, what distance is covered in 5 hours?",
      options: ["0 km", "5 km", "10 km", "50 km"],
      correctAnswer: "0 km",
      explanation: "Distance = 0 × 5 = 0 km."
    },
    {
      id: 70,
      category: "Time, Speed and Distance",
      difficulty: "Easy",
      question: "A car travels 200 km at 50 km/h. How long does the trip take?",
      options: ["3 hours", "4 hours", "5 hours", "6 hours"],
      correctAnswer: "4 hours",
      explanation: "Time = 200 / 50 = 4 hours."
    },

    // --- 8. NUMBER SYSTEM (Q71 - Q80) ---
    {
      id: 71,
      category: "Number System",
      difficulty: "Easy",
      question: "Which of the following is an even number?",
      options: ["11", "15", "18", "21"],
      correctAnswer: "18",
      explanation: "18 is divisible by 2, so it is an even number."
    },
    {
      id: 72,
      category: "Number System",
      difficulty: "Easy",
      question: "Which of the following is a prime number?",
      options: ["4", "7", "9", "12"],
      correctAnswer: "7",
      explanation: "7 has only two factors: 1 and 7."
    },
    {
      id: 73,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the smallest 2-digit whole number?",
      options: ["9", "10", "11", "99"],
      correctAnswer: "10",
      explanation: "10 is the smallest positive 2-digit integer."
    },
    {
      id: 74,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the place value of 5 in the number 452?",
      options: ["5", "50", "500", "5000"],
      correctAnswer: "50",
      explanation: "5 is in the tens position, so its place value is 50."
    },
    {
      id: 75,
      category: "Number System",
      difficulty: "Easy",
      question: "Which of the following numbers is divisible by 5?",
      options: ["23", "34", "45", "56"],
      correctAnswer: "45",
      explanation: "Numbers ending in 0 or 5 are divisible by 5."
    },
    {
      id: 76,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the successor (next number) of 999?",
      options: ["998", "1000", "1001", "1010"],
      correctAnswer: "1000",
      explanation: "Successor = 999 + 1 = 1000."
    },
    {
      id: 77,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the predecessor (previous number) of 500?",
      options: ["490", "499", "501", "510"],
      correctAnswer: "499",
      explanation: "Predecessor = 500 − 1 = 499."
    },
    {
      id: 78,
      category: "Number System",
      difficulty: "Easy",
      question: "Which number is neither positive nor negative?",
      options: ["-1", "0", "1", "10"],
      correctAnswer: "0",
      explanation: "Zero is neutral."
    },
    {
      id: 79,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the sum of the first two odd numbers (1 and 3)?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      explanation: "1 + 3 = 4."
    },
    {
      id: 80,
      category: "Number System",
      difficulty: "Easy",
      question: "What is the value of 7 × 0?",
      options: ["0", "1", "7", "70"],
      correctAnswer: "0",
      explanation: "Any number multiplied by 0 is equal to 0."
    },

    // --- 9. SIMPLIFICATION (Q81 - Q90) ---
    {
      id: 81,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 12 + 8 ÷ 2?",
      options: ["10", "14", "16", "20"],
      correctAnswer: "16",
      explanation: "Using BODMAS: divide first (8 ÷ 2 = 4), then add (12 + 4 = 16)."
    },
    {
      id: 82,
      category: "Simplification",
      difficulty: "Easy",
      question: "Simplify: (10 + 5) × 2",
      options: ["20", "25", "30", "35"],
      correctAnswer: "30",
      explanation: "Solve inside brackets first: 10 + 5 = 15. Then 15 × 2 = 30."
    },
    {
      id: 83,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 50 − 5 × 4?",
      options: ["30", "40", "160", "180"],
      correctAnswer: "30",
      explanation: "Multiply first: 5 × 4 = 20. Then 50 − 20 = 30."
    },
    {
      id: 84,
      category: "Simplification",
      difficulty: "Easy",
      question: "Calculate: 100 ÷ 10 + 5",
      options: ["10", "12", "15", "20"],
      correctAnswer: "15",
      explanation: "100 ÷ 10 = 10. Then 10 + 5 = 15."
    },
    {
      id: 85,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 4 × 5 + 6 × 2?",
      options: ["22", "32", "42", "52"],
      correctAnswer: "32",
      explanation: "4 × 5 = 20 and 6 × 2 = 12. 20 + 12 = 32."
    },
    {
      id: 86,
      category: "Simplification",
      difficulty: "Easy",
      question: "Simplify: 25 − (10 + 5)",
      options: ["5", "10", "15", "20"],
      correctAnswer: "10",
      explanation: "10 + 5 = 15. Then 25 − 15 = 10."
    },
    {
      id: 87,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 36 ÷ 6 × 2?",
      options: ["3", "6", "12", "18"],
      correctAnswer: "12",
      explanation: "Left-to-right operations: 36 ÷ 6 = 6. Then 6 × 2 = 12."
    },
    {
      id: 88,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 7 + 7 ÷ 7?",
      options: ["1", "2", "8", "14"],
      correctAnswer: "8",
      explanation: "Divide first: 7 ÷ 7 = 1. Then 7 + 1 = 8."
    },
    {
      id: 89,
      category: "Simplification",
      difficulty: "Easy",
      question: "Simplify: (8 − 3) × (4 + 1)",
      options: ["15", "20", "25", "30"],
      correctAnswer: "25",
      explanation: "5 × 5 = 25."
    },
    {
      id: 90,
      category: "Simplification",
      difficulty: "Easy",
      question: "What is 90 ÷ 9 − 3?",
      options: ["3", "7", "10", "13"],
      correctAnswer: "7",
      explanation: "90 ÷ 9 = 10. Then 10 − 3 = 7."
    },

    // --- 10. BASIC DATA INTERPRETATION (Q91 - Q100) ---
    {
      id: 91,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "A table shows daily sales: Mon (10), Tue (15), Wed (20). What is total sales?",
      options: ["35", "40", "45", "50"],
      correctAnswer: "45",
      explanation: "10 + 15 + 20 = 45."
    },
    {
      id: 92,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "In a class survey, 12 students like Math and 18 like Science. How many total students?",
      options: ["25", "28", "30", "32"],
      correctAnswer: "30",
      explanation: "12 + 18 = 30 students."
    },
    {
      id: 93,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "A fruit chart shows 8 apples and 4 bananas. What is the difference between apples and bananas?",
      options: ["2", "4", "6", "8"],
      correctAnswer: "4",
      explanation: "8 − 4 = 4."
    },
    {
      id: 94,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "Monday rainfall was 5 mm, Tuesday was 10 mm. What was the average daily rainfall?",
      options: ["5 mm", "7.5 mm", "10 mm", "15 mm"],
      correctAnswer: "7.5 mm",
      explanation: "(5 + 10) / 2 = 7.5 mm."
    },
    {
      id: 95,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "Team A scored 40 points and Team B scored 60 points. How many more points did Team B score?",
      options: ["10", "15", "20", "25"],
      correctAnswer: "20",
      explanation: "60 − 40 = 20 points."
    },
    {
      id: 96,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "A shop sold 20 books Saturday and 30 Sunday. What fraction of total weekend sales occurred on Sunday?",
      options: ["1/3", "2/5", "1/2", "3/5"],
      correctAnswer: "3/5",
      explanation: "Total = 50. Sunday fraction = 30 / 50 = 3/5."
    },
    {
      id: 97,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "A graph shows temperatures: 25°C, 30°C, and 35°C over 3 days. What was the highest temperature?",
      options: ["25°C", "30°C", "35°C", "40°C"],
      correctAnswer: "35°C",
      explanation: "The highest recorded value is 35°C."
    },
    {
      id: 98,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "In a group of 50 people, 30 preferred Tea and 20 preferred Coffee. What percentage preferred Tea?",
      options: ["40%", "50%", "60%", "70%"],
      correctAnswer: "60%",
      explanation: "(30 / 50) × 100 = 60%."
    },
    {
      id: 99,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "Scores: John (80), Mary (90), Alex (70). Who scored the lowest?",
      options: ["John", "Mary", "Alex", "None"],
      correctAnswer: "Alex",
      explanation: "Alex scored 70, which is the lowest score."
    },
    {
      id: 100,
      category: "Basic Data Interpretation",
      difficulty: "Easy",
      question: "A budget pie chart shows 50% for Rent and 30% for Food. What percentage remains for savings?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: "20%",
      explanation: "Remaining = 100% − (50% + 30%) = 20%."
    }
  ];

  const categories = [
    "All Categories",
    "Percentage",
    "Profit and Loss",
    "Ratio and Proportion",
    "Average",
    "Simple Interest",
    "Time and Work",
    "Time, Speed and Distance",
    "Number System",
    "Simplification",
    "Basic Data Interpretation"
  ];

  const pick = (count = 10, category = "All Categories") => {
    let filtered = data;
    if (category && category !== "All Categories") {
      filtered = data.filter(q => q.category === category);
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  return { data, categories, pick };
})();
