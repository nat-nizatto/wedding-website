// ========================================================
// THE MASTER GUEST LIST DATABASE (Strategy 1 - Aliases)
// ========================================================
const weddingGuestDatabase = [
  {
    "householdId": "Household_1: Peter Ross & Cristina Voinea",
    "searchNames": [
      "christina",
      "christina voinea",
      "crissy",
      "crissy voinea",
      "cristina",
      "cristina voinea",
      "pete",
      "pete ross",
      "peter",
      "peter ross",
      "tina",
      "tina voinea"
    ],
    "guests": [
      {
        "name": "Peter Ross",
        "tier": "day"
      },
      {
        "name": "Cristina Voinea",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_2: Katie Heighway & Jon Little",
    "searchNames": [
      "jon",
      "jon little",
      "jonathan",
      "jonathan little",
      "kate",
      "kate heighway",
      "katie",
      "katie heighway"
    ],
    "guests": [
      {
        "name": "Katie Heighway",
        "tier": "day"
      },
      {
        "name": "Jon Little",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_3: Craig Chapman & Charlotte King",
    "searchNames": [
      "charlie",
      "charlie king",
      "charlotte",
      "charlotte king",
      "craig",
      "craig chapman",
      "lottie",
      "lottie king"
    ],
    "guests": [
      {
        "name": "Craig Chapman",
        "tier": "day"
      },
      {
        "name": "Charlotte King",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_4: Alex Welton & Rachel Roxburgh",
    "searchNames": [
      "alex",
      "alex welton",
      "alexander",
      "alexander welton",
      "alexandra",
      "alexandra welton",
      "ali",
      "ali welton",
      "rachel",
      "rachel roxburgh"
    ],
    "guests": [
      {
        "name": "Alex Welton",
        "tier": "day"
      },
      {
        "name": "Rachel Roxburgh",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_5: David Richmond & Weronika Widenska",
    "searchNames": [
      "dave",
      "dave richmond",
      "david",
      "david richmond",
      "weronika",
      "weronika widenska"
    ],
    "guests": [
      {
        "name": "David Richmond",
        "tier": "day"
      },
      {
        "name": "Weronika Widenska",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_6: Pete Smith & Debbie Drouet-Lewis",
    "searchNames": [
      "debbie",
      "debbie drouet-lewis",
      "deborah",
      "deborah drouet-lewis",
      "pete",
      "pete smith",
      "peter",
      "peter smith"
    ],
    "guests": [
      {
        "name": "Pete Smith",
        "tier": "day"
      },
      {
        "name": "Debbie Drouet-Lewis",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_7: Matt Strover & Sophie Toft",
    "searchNames": [
      "matt",
      "matt strover",
      "matthew",
      "matthew strover",
      "sophia",
      "sophia toft",
      "sophie",
      "sophie toft"
    ],
    "guests": [
      {
        "name": "Matt Strover",
        "tier": "evening"
      },
      {
        "name": "Sophie Toft",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_8: Graham Tripp & Shanice Russel",
    "searchNames": [
      "graham",
      "graham tripp",
      "shanice",
      "shanice russel"
    ],
    "guests": [
      {
        "name": "Graham Tripp",
        "tier": "evening"
      },
      {
        "name": "Shanice Russel",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_9: Jade Harris & Oli Ridge",
    "searchNames": [
      "jade",
      "jade harris",
      "oli",
      "oli ridge",
      "oliver",
      "oliver ridge",
      "ollie",
      "ollie ridge"
    ],
    "guests": [
      {
        "name": "Jade Harris",
        "tier": "evening"
      },
      {
        "name": "Oli Ridge",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_10: Tom Gravett & Zita Tomaszewska",
    "searchNames": [
      "thomas",
      "thomas gravett",
      "tom",
      "tom gravett",
      "zita",
      "zita tomaszewska"
    ],
    "guests": [
      {
        "name": "Tom Gravett",
        "tier": "evening"
      },
      {
        "name": "Zita Tomaszewska",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_11: Connor Cast & Connor Cast +1",
    "searchNames": [
      "connor",
      "connor cast",
      "connor cast +1"
    ],
    "guests": [
      {
        "name": "Connor Cast",
        "tier": "evening"
      },
      {
        "name": "Connor Cast +1",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_12: Cy Connor & Cy Connor +1",
    "searchNames": [
      "cy",
      "cy connor",
      "cy connor +1"
    ],
    "guests": [
      {
        "name": "Cy Connor",
        "tier": "evening"
      },
      {
        "name": "Cy Connor +1",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_13: Adam Payne & Jo Webb Payne",
    "searchNames": [
      "adam",
      "adam payne",
      "jo",
      "jo webb payne",
      "joanna",
      "joanna payne",
      "joanne",
      "joanne payne"
    ],
    "guests": [
      {
        "name": "Adam Payne",
        "tier": "evening"
      },
      {
        "name": "Jo Webb Payne",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_14: Lucy Douglas & Isaac Douglas",
    "searchNames": [
      "isaac",
      "isaac douglas",
      "lucy",
      "lucy douglas"
    ],
    "guests": [
      {
        "name": "Lucy Douglas",
        "tier": "day"
      },
      {
        "name": "Isaac Douglas",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_15: Abbi Summers-Outen & Sara Summers-Outen",
    "searchNames": [
      "abbi",
      "abbi summers-outen",
      "abby",
      "abby summers-outen",
      "abigail",
      "abigail summers-outen",
      "sara",
      "sara summers-outen",
      "sarah",
      "sarah summers-outen"
    ],
    "guests": [
      {
        "name": "Abbi Summers-Outen",
        "tier": "day"
      },
      {
        "name": "Sara Summers-Outen",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_16: Aimee Blowey & Phil Blowey",
    "searchNames": [
      "aimee",
      "aimee blowey",
      "amy",
      "amy blowey",
      "phil",
      "phil blowey",
      "philip",
      "philip blowey"
    ],
    "guests": [
      {
        "name": "Aimee Blowey",
        "tier": "day"
      },
      {
        "name": "Phil Blowey",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_17: Becky Chittock & Ashley Chittock",
    "searchNames": [
      "ash",
      "ash chittock",
      "ashley",
      "ashley chittock",
      "becca",
      "becca chittock",
      "becky",
      "becky chittock",
      "rebecca",
      "rebecca chittock"
    ],
    "guests": [
      {
        "name": "Becky Chittock",
        "tier": "day"
      },
      {
        "name": "Ashley Chittock",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_18: Ryan Page & Daniela Scial\u00f3-Page",
    "searchNames": [
      "daniela",
      "daniela scial\u00f3-page",
      "ryan",
      "ryan page"
    ],
    "guests": [
      {
        "name": "Ryan Page",
        "tier": "evening"
      },
      {
        "name": "Daniela Scial\u00f3-Page",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_19: Natalie Walker & Yvonne Walker (surname?)",
    "searchNames": [
      "nat",
      "nat walker",
      "natalie",
      "natalie walker",
      "yvonne",
      "yvonne walker",
      "yvonne walker (surname?)"
    ],
    "guests": [
      {
        "name": "Natalie Walker",
        "tier": "evening"
      },
      {
        "name": "Yvonne Walker (surname?)",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_20: Terry Hill & Mark Hill",
    "searchNames": [
      "mark",
      "mark hill",
      "terry",
      "terry hill"
    ],
    "guests": [
      {
        "name": "Terry Hill",
        "tier": "day"
      },
      {
        "name": "Mark Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_21: Pamela Fox & Peter Fox",
    "searchNames": [
      "pam",
      "pam fox",
      "pamela",
      "pamela fox",
      "pete",
      "pete fox",
      "peter",
      "peter fox"
    ],
    "guests": [
      {
        "name": "Pamela Fox",
        "tier": "day"
      },
      {
        "name": "Peter Fox",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_22: Lauren Fox-Shalders & Adam Fox-Shalders",
    "searchNames": [
      "adam",
      "adam fox-shalders",
      "lauren",
      "lauren fox-shalders"
    ],
    "guests": [
      {
        "name": "Lauren Fox-Shalders",
        "tier": "day"
      },
      {
        "name": "Adam Fox-Shalders",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_23: Amy Ray & Ben Ray",
    "searchNames": [
      "amy",
      "amy ray",
      "ben",
      "ben ray"
    ],
    "guests": [
      {
        "name": "Amy Ray",
        "tier": "day"
      },
      {
        "name": "Ben Ray",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_24: Jess Ridgers & Mike Ridgers",
    "searchNames": [
      "jess",
      "jess ridgers",
      "jessie",
      "jessie ridgers",
      "michael",
      "michael ridgers",
      "mike",
      "mike ridgers"
    ],
    "guests": [
      {
        "name": "Jess Ridgers",
        "tier": "day"
      },
      {
        "name": "Mike Ridgers",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_25: Becky Hill",
    "searchNames": [
      "becca",
      "becca hill",
      "becky",
      "becky hill",
      "rebecca",
      "rebecca hill"
    ],
    "guests": [
      {
        "name": "Becky Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_26: Pete Docker & Domino Docker",
    "searchNames": [
      "domino",
      "domino docker",
      "pete",
      "pete docker",
      "peter",
      "peter docker"
    ],
    "guests": [
      {
        "name": "Pete Docker",
        "tier": "day"
      },
      {
        "name": "Domino Docker",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_27: Claire Coates & Mike Coates",
    "searchNames": [
      "claire",
      "claire coates",
      "michael",
      "michael coates",
      "mike",
      "mike coates"
    ],
    "guests": [
      {
        "name": "Claire Coates",
        "tier": "day"
      },
      {
        "name": "Mike Coates",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_28: Dawn Walling & Ralph Walling",
    "searchNames": [
      "dawn",
      "dawn walling",
      "ralph",
      "ralph walling"
    ],
    "guests": [
      {
        "name": "Dawn Walling",
        "tier": "day"
      },
      {
        "name": "Ralph Walling",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_29: Chris Priestman & Simon Priestman",
    "searchNames": [
      "chris",
      "chris priestman",
      "christopher",
      "christopher priestman",
      "simon",
      "simon priestman"
    ],
    "guests": [
      {
        "name": "Chris Priestman",
        "tier": "day"
      },
      {
        "name": "Simon Priestman",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_30: Kim Hoffmeister & James Hoffmeister",
    "searchNames": [
      "james",
      "james hoffmeister",
      "jamie",
      "jamie hoffmeister",
      "jim",
      "jim hoffmeister",
      "kim",
      "kim hoffmeister"
    ],
    "guests": [
      {
        "name": "Kim Hoffmeister",
        "tier": "day"
      },
      {
        "name": "James Hoffmeister",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_31: Fiona Hill",
    "searchNames": [
      "fiona",
      "fiona hill"
    ],
    "guests": [
      {
        "name": "Fiona Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_32: Cristina Reed-Richards",
    "searchNames": [
      "christina",
      "christina reed-richards",
      "crissy",
      "crissy reed-richards",
      "cristina",
      "cristina reed-richards",
      "tina",
      "tina reed-richards"
    ],
    "guests": [
      {
        "name": "Cristina Reed-Richards",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_33: Milly Docker & William Docker",
    "searchNames": [
      "bill",
      "bill docker",
      "billy",
      "billy docker",
      "millie",
      "millie docker",
      "milly",
      "milly docker",
      "will",
      "will docker",
      "william",
      "william docker"
    ],
    "guests": [
      {
        "name": "Milly Docker",
        "tier": "day"
      },
      {
        "name": "William Docker",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_34: Crissy Reed-Richards",
    "searchNames": [
      "christina",
      "christina reed-richards",
      "crissy",
      "crissy reed-richards",
      "cristina",
      "cristina reed-richards"
    ],
    "guests": [
      {
        "name": "Crissy Reed-Richards",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_35: Luke Coates & Jude Coates",
    "searchNames": [
      "jude",
      "jude coates",
      "luke",
      "luke coates"
    ],
    "guests": [
      {
        "name": "Luke Coates",
        "tier": "day"
      },
      {
        "name": "Jude Coates",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_36: Lizzie Hoffmeister & Tom Hoffmeister",
    "searchNames": [
      "elizabeth",
      "elizabeth hoffmeister",
      "liz",
      "liz hoffmeister",
      "lizzie",
      "lizzie hoffmeister",
      "lizzy",
      "lizzy hoffmeister",
      "thomas",
      "thomas hoffmeister",
      "tom",
      "tom hoffmeister"
    ],
    "guests": [
      {
        "name": "Lizzie Hoffmeister",
        "tier": "day"
      },
      {
        "name": "Tom Hoffmeister",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_37: Francis Hoffmeister",
    "searchNames": [
      "fran",
      "fran hoffmeister",
      "frances",
      "frances hoffmeister",
      "francis",
      "francis hoffmeister"
    ],
    "guests": [
      {
        "name": "Francis Hoffmeister",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_38: Amelie Priestman & Hatty Priestman",
    "searchNames": [
      "amelie",
      "amelie priestman",
      "harriet",
      "harriet priestman",
      "hatty",
      "hatty priestman"
    ],
    "guests": [
      {
        "name": "Amelie Priestman",
        "tier": "day"
      },
      {
        "name": "Hatty Priestman",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_39: Sylvester Walling & Victor Walling",
    "searchNames": [
      "sylvester",
      "sylvester walling",
      "victor",
      "victor walling"
    ],
    "guests": [
      {
        "name": "Sylvester Walling",
        "tier": "day"
      },
      {
        "name": "Victor Walling",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_40: Megan Hill & Alex Hill",
    "searchNames": [
      "alex",
      "alex hill",
      "alexander",
      "alexander hill",
      "alexandra",
      "alexandra hill",
      "ali",
      "ali hill",
      "meg",
      "meg hill",
      "megan",
      "megan hill"
    ],
    "guests": [
      {
        "name": "Megan Hill",
        "tier": "day"
      },
      {
        "name": "Alex Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_41: Ashley Hill",
    "searchNames": [
      "ash",
      "ash hill",
      "ashley",
      "ashley hill"
    ],
    "guests": [
      {
        "name": "Ashley Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_42: Bhavin Rajani & Reena Rajani",
    "searchNames": [
      "bhavin",
      "bhavin rajani",
      "reena",
      "reena rajani"
    ],
    "guests": [
      {
        "name": "Bhavin Rajani",
        "tier": "day"
      },
      {
        "name": "Reena Rajani",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_43: Charlotte May & Alex May",
    "searchNames": [
      "alex",
      "alex may",
      "alexander",
      "alexander may",
      "alexandra",
      "alexandra may",
      "ali",
      "ali may",
      "charlie",
      "charlie may",
      "charlotte",
      "charlotte may",
      "lottie",
      "lottie may"
    ],
    "guests": [
      {
        "name": "Charlotte May",
        "tier": "day"
      },
      {
        "name": "Alex May",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_44: Nick Jackson & Emma Jackson",
    "searchNames": [
      "emma",
      "emma jackson",
      "nicholas",
      "nicholas jackson",
      "nick",
      "nick jackson"
    ],
    "guests": [
      {
        "name": "Nick Jackson",
        "tier": "day"
      },
      {
        "name": "Emma Jackson",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_45: Will Sacilotti Martins & Lauren Sacilotti Martins",
    "searchNames": [
      "lauren",
      "lauren sacilotti martins",
      "will",
      "will sacilotti martins",
      "william",
      "william martins"
    ],
    "guests": [
      {
        "name": "Will Sacilotti Martins",
        "tier": "day"
      },
      {
        "name": "Lauren Sacilotti Martins",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_46: Georgia Frntic-Stedman",
    "searchNames": [
      "george",
      "george frntic-stedman",
      "georgia",
      "georgia frntic-stedman"
    ],
    "guests": [
      {
        "name": "Georgia Frntic-Stedman",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_47: Lydia Cassidy",
    "searchNames": [
      "lydia",
      "lydia cassidy"
    ],
    "guests": [
      {
        "name": "Lydia Cassidy",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_48: Katie Rushbrook",
    "searchNames": [
      "kate",
      "kate rushbrook",
      "katie",
      "katie rushbrook"
    ],
    "guests": [
      {
        "name": "Katie Rushbrook",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_49: Oli Gokgol",
    "searchNames": [
      "oli",
      "oli gokgol",
      "oliver",
      "oliver gokgol",
      "ollie",
      "ollie gokgol"
    ],
    "guests": [
      {
        "name": "Oli Gokgol",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_50: Hazel Fitzsimons & Sean Fitzsimons",
    "searchNames": [
      "hazel",
      "hazel fitzsimons",
      "sean",
      "sean fitzsimons"
    ],
    "guests": [
      {
        "name": "Hazel Fitzsimons",
        "tier": "day"
      },
      {
        "name": "Sean Fitzsimons",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_51: Charlotte Jones",
    "searchNames": [
      "charlie",
      "charlie jones",
      "charlotte",
      "charlotte jones",
      "lottie",
      "lottie jones"
    ],
    "guests": [
      {
        "name": "Charlotte Jones",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_52: Elsa Douglas Lamb",
    "searchNames": [
      "elsa",
      "elsa douglas lamb"
    ],
    "guests": [
      {
        "name": "Elsa Douglas Lamb",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_53: Chris",
    "searchNames": [
      "chris",
      "christopher"
    ],
    "guests": [
      {
        "name": "Chris",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_54: Paul McKeivor & Julia McKeivor",
    "searchNames": [
      "julia",
      "julia mckeivor",
      "paul",
      "paul mckeivor"
    ],
    "guests": [
      {
        "name": "Paul McKeivor",
        "tier": "day"
      },
      {
        "name": "Julia McKeivor",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_55: Chris Dilworth & Sophie Dilworth",
    "searchNames": [
      "chris",
      "chris dilworth",
      "christopher",
      "christopher dilworth",
      "sophia",
      "sophia dilworth",
      "sophie",
      "sophie dilworth"
    ],
    "guests": [
      {
        "name": "Chris Dilworth",
        "tier": "day"
      },
      {
        "name": "Sophie Dilworth",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_56: Theo Ray",
    "searchNames": [
      "theo",
      "theo ray",
      "theodore",
      "theodore ray"
    ],
    "guests": [
      {
        "name": "Theo Ray",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_57: Eli Ridgers & Bump Ridgers",
    "searchNames": [
      "bump",
      "bump ridgers",
      "eli",
      "eli ridgers"
    ],
    "guests": [
      {
        "name": "Eli Ridgers",
        "tier": "day"
      },
      {
        "name": "Bump Ridgers",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_58: Maggie Hill",
    "searchNames": [
      "maggie",
      "maggie hill",
      "margaret",
      "margaret hill"
    ],
    "guests": [
      {
        "name": "Maggie Hill",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_59: Rupa Rajani & Raj Rajani",
    "searchNames": [
      "raj",
      "raj rajani",
      "rupa",
      "rupa rajani"
    ],
    "guests": [
      {
        "name": "Rupa Rajani",
        "tier": "day"
      },
      {
        "name": "Raj Rajani",
        "tier": "day"
      }
    ]
  },
  {
    "householdId": "Household_60: Katy Ying Yu",
    "searchNames": [
      "katie",
      "katie yu",
      "katy",
      "katy ying yu"
    ],
    "guests": [
      {
        "name": "Katy Ying Yu",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_61: Charlotte Coates",
    "searchNames": [
      "charlie",
      "charlie coates",
      "charlotte",
      "charlotte coates",
      "lottie",
      "lottie coates"
    ],
    "guests": [
      {
        "name": "Charlotte Coates",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_62: Holly Hoffmeister",
    "searchNames": [
      "holly",
      "holly hoffmeister"
    ],
    "guests": [
      {
        "name": "Holly Hoffmeister",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_63: Florence Percival",
    "searchNames": [
      "flo",
      "flo percival",
      "florence",
      "florence percival"
    ],
    "guests": [
      {
        "name": "Florence Percival",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_64: Steph Chesson-Hoy",
    "searchNames": [
      "steph",
      "steph chesson-hoy",
      "stephanie",
      "stephanie chesson-hoy"
    ],
    "guests": [
      {
        "name": "Steph Chesson-Hoy",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_65: Sam Curtis (sp?)",
    "searchNames": [
      "sam",
      "sam curtis",
      "sam curtis (sp?)",
      "samantha",
      "samantha curtis",
      "samuel",
      "samuel curtis"
    ],
    "guests": [
      {
        "name": "Sam Curtis (sp?)",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_66: Andrea Poynter",
    "searchNames": [
      "andrea",
      "andrea poynter"
    ],
    "guests": [
      {
        "name": "Andrea Poynter",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_67: Sue Baker & Charlie Baker",
    "searchNames": [
      "charles",
      "charles baker",
      "charlie",
      "charlie baker",
      "sue",
      "sue baker",
      "susan",
      "susan baker"
    ],
    "guests": [
      {
        "name": "Sue Baker",
        "tier": "evening"
      },
      {
        "name": "Charlie Baker",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_68: Lorna Baker (surname?)",
    "searchNames": [
      "lorna",
      "lorna baker",
      "lorna baker (surname?)"
    ],
    "guests": [
      {
        "name": "Lorna Baker (surname?)",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_69: Geoff Miles & Jenny Miles",
    "searchNames": [
      "geoff",
      "geoff miles",
      "geoffrey",
      "geoffrey miles",
      "jen",
      "jen miles",
      "jennifer",
      "jennifer miles",
      "jenny",
      "jenny miles"
    ],
    "guests": [
      {
        "name": "Geoff Miles",
        "tier": "evening"
      },
      {
        "name": "Jenny Miles",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_70: Lucy Sheppard & Zander Sheppard",
    "searchNames": [
      "alexander",
      "alexander sheppard",
      "lucy",
      "lucy sheppard",
      "zander",
      "zander sheppard"
    ],
    "guests": [
      {
        "name": "Lucy Sheppard",
        "tier": "evening"
      },
      {
        "name": "Zander Sheppard",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_71: Marilyn Walker? & Trevor Walker",
    "searchNames": [
      "marilyn",
      "marilyn walker",
      "marilyn walker?",
      "maz",
      "maz walker",
      "trevor",
      "trevor walker"
    ],
    "guests": [
      {
        "name": "Marilyn Walker?",
        "tier": "evening"
      },
      {
        "name": "Trevor Walker",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_72: Judie Walker",
    "searchNames": [
      "judie",
      "judie walker"
    ],
    "guests": [
      {
        "name": "Judie Walker",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_73: Dawn Meadows & Mark Meadows",
    "searchNames": [
      "dawn",
      "dawn meadows",
      "mark",
      "mark meadows"
    ],
    "guests": [
      {
        "name": "Dawn Meadows",
        "tier": "evening"
      },
      {
        "name": "Mark Meadows",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_74: Dan Andrews & Benna Andrews",
    "searchNames": [
      "benna",
      "benna andrews",
      "dan",
      "dan andrews",
      "daniel",
      "daniel andrews"
    ],
    "guests": [
      {
        "name": "Dan Andrews",
        "tier": "evening"
      },
      {
        "name": "Benna Andrews",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_75: Clare Ingram",
    "searchNames": [
      "claire",
      "claire ingram",
      "clare",
      "clare ingram"
    ],
    "guests": [
      {
        "name": "Clare Ingram",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_76: Lizzie Simpson",
    "searchNames": [
      "elizabeth",
      "elizabeth simpson",
      "liz",
      "liz simpson",
      "lizzie",
      "lizzie simpson",
      "lizzy",
      "lizzy simpson"
    ],
    "guests": [
      {
        "name": "Lizzie Simpson",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_77: Georgia Robinson",
    "searchNames": [
      "george",
      "george robinson",
      "georgia",
      "georgia robinson"
    ],
    "guests": [
      {
        "name": "Georgia Robinson",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_78: Diane Guinan",
    "searchNames": [
      "diane",
      "diane guinan"
    ],
    "guests": [
      {
        "name": "Diane Guinan",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_79: Paula Forsyth",
    "searchNames": [
      "paula",
      "paula forsyth"
    ],
    "guests": [
      {
        "name": "Paula Forsyth",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_80: Claire Warwick & Mark Warwick",
    "searchNames": [
      "claire",
      "claire warwick",
      "mark",
      "mark warwick"
    ],
    "guests": [
      {
        "name": "Claire Warwick",
        "tier": "evening"
      },
      {
        "name": "Mark Warwick",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_81: Jess Matthews",
    "searchNames": [
      "jess",
      "jess matthews",
      "jessie",
      "jessie matthews"
    ],
    "guests": [
      {
        "name": "Jess Matthews",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_82: John Martins & Gemma Martins",
    "searchNames": [
      "gemma",
      "gemma martins",
      "john",
      "john martins"
    ],
    "guests": [
      {
        "name": "John Martins",
        "tier": "evening"
      },
      {
        "name": "Gemma Martins",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_83: Jack Beard & Maggie Beard",
    "searchNames": [
      "jack",
      "jack beard",
      "john",
      "john beard",
      "maggie",
      "maggie beard",
      "margaret",
      "margaret beard"
    ],
    "guests": [
      {
        "name": "Jack Beard",
        "tier": "evening"
      },
      {
        "name": "Maggie Beard",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_84: Ed Mackie & Robin Mackie",
    "searchNames": [
      "ed",
      "ed mackie",
      "edward",
      "edward mackie",
      "robin",
      "robin mackie",
      "ted",
      "ted mackie",
      "teddy",
      "teddy mackie"
    ],
    "guests": [
      {
        "name": "Ed Mackie",
        "tier": "evening"
      },
      {
        "name": "Robin Mackie",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_85: Kane Holborn & Geoff Holborn",
    "searchNames": [
      "geoff",
      "geoff holborn",
      "geoffrey",
      "geoffrey holborn",
      "kane",
      "kane holborn"
    ],
    "guests": [
      {
        "name": "Kane Holborn",
        "tier": "evening"
      },
      {
        "name": "Geoff Holborn",
        "tier": "evening"
      }
    ]
  },
  {
    "householdId": "Household_86: Kerryn Holborn",
    "searchNames": [
      "kerryn",
      "kerryn holborn"
    ],
    "guests": [
      {
        "name": "Kerryn Holborn",
        "tier": "evening"
      }
    ]
  }
];

// ========================================================
// APPLICATION CONTROLLER LOGIC
// ========================================================
document.addEventListener("DOMContentLoaded", function () {
  const btnFind = document.getElementById("btn-find-invite");
  const searchInput = document.getElementById("search-name");
  const errorMsg = document.getElementById("lookup-error");
  
  const portalDiv = document.getElementById("rsvp-portal");
  const formEl = document.getElementById("rsvp-form");

  // Trigger search on click
  btnFind.addEventListener("click", performLookup);

  // Trigger search on hitting "Enter" inside input row
  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      performLookup();
    }
  });

  function performLookup() {
    const rawInput = searchInput.value.trim().toLowerCase();
    errorMsg.style.display = "none";

    if (!rawInput) return;

    // Search for a matching household entry
    const matchedHousehold = weddingGuestDatabase.find(household => 
      household.searchNames.includes(rawInput)
    );

    if (matchedHousehold) {
      revealAndConfigureForm(matchedHousehold);
    } else {
      errorMsg.style.display = "block";
    }
  }

  function revealAndConfigureForm(household) {
    // 1. Transition standard viewing blocks
    portalDiv.style.display = "none";
    formEl.style.display = "block";
    document.getElementById("wb3-household").value = household.householdId;

    // 2. Setup Guest 1 Profiles
    const g1Data = household.guests[0];
    const g1Section = document.getElementById("smart-g1-section");
    g1Section.style.display = "block";
    document.getElementById("label-g1-name").innerText = g1Data.name;
    document.getElementById("input-g1-name").value = g1Data.name;
    
    configureGuestRow(1, g1Data.tier);

    // 3. Setup Guest 2 Profiles (if household size permits)
    const g2Section = document.getElementById("smart-g2-section");
    if (household.guests.length > 1) {
      const g2Data = household.guests[1];
      g2Section.style.display = "block";
      document.getElementById("label-g2-name").innerText = g2Data.name;
      document.getElementById("input-g2-name").value = g2Data.name;
      
      configureGuestRow(2, g2Data.tier);
    } else {
      // Disable non-existent fields completely so Web3Forms skips them
      g2Section.querySelectorAll("input, select, textarea").forEach(el => el.disabled = true);
      g2Section.style.display = "none";
    }
  }

  function configureGuestRow(guestNumber, tier) {
    const radioAccept = document.getElementById(`g${guestNumber}-rsvp-accept`);
    const radioDecline = document.getElementById(`g${guestNumber}-rsvp-decline`);
    const mealsContainer = document.getElementById(`g${guestNumber}-meals-container`);
    const acceptDesc = document.getElementById(`g${guestNumber}-accept-desc`);

    // Customize description cards based on permissions
    if (tier === "evening") {
      acceptDesc.innerText = "Excited to join you for the evening reception at 7:00 PM!";
    } else {
      acceptDesc.innerText = "Can't wait to celebrate the full day with you!";
    }

    function evalMealVisibility() {
      const isAttending = radioAccept.checked;
      
      // Crucial Step: Only force required dropdown selections if they are a DAY guest AND accepting
      if (isAttending && tier === "day") {
        mealsContainer.style.display = "block";
        mealsContainer.querySelectorAll("select").forEach(select => select.required = true);
      } else {
        mealsContainer.style.display = "none";
        mealsContainer.querySelectorAll("select").forEach(select => {
          select.required = false;
          select.selectedIndex = 0; // reset values cleanly
        });
      }
    }

    // Bind state evaluations directly to interactive radio modifications
    radioAccept.addEventListener("change", evalMealVisibility);
    radioDecline.addEventListener("change", evalMealVisibility);
    
    // Evaluate layout structures on generation runtime initialization
    evalMealVisibility();
  }
});
