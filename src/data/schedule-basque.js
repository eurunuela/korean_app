// 24-Week Basque Fluency Study Schedule
// 30-45 minutes per day, 5-6 days per week

export const scheduleBasque = [
  // MONTH 1: Foundations (Weeks 1-4)
  {
    week: 1,
    theme: 'Euskara Alphabet & Pronunciation',
    goals: ['Master Basque alphabet', 'Understand unique sounds (tx, ts, tz)', 'Basic greetings', 'Introduction to agglutination'],
    targetVocab: 30,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 5, content: 'Introduction to Basque' },
          { type: 'lesson', minutes: 20, content: 'Basque alphabet and vowels (a, e, i, o, u)', moduleId: 'alphabet', lessonId: 'alphabet-letters' },
          { type: 'output', minutes: 15, content: 'Practice pronunciation aloud' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review vowels from Day 1' },
          { type: 'lesson', minutes: 20, content: 'Consonants and digraphs (tx, ts, tz, dd, tt)', moduleId: 'alphabet', lessonId: 'alphabet-letters' },
          { type: 'output', minutes: 15, content: 'Practice unique Basque sounds' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'All sounds quiz' },
          { type: 'lesson', minutes: 20, content: 'Basic greetings: Kaixo, Egun on, Arratsalde on', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Practice greetings aloud' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review greetings' },
          { type: 'lesson', minutes: 20, content: 'More greetings: Eskerrik asko, Bai, Ez', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Combine greetings in dialogues' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'All greetings review' },
          { type: 'lesson', minutes: 15, content: 'Introduction to agglutination', moduleId: 'grammar', lessonId: 'grammar-agglutination' },
          { type: 'output', minutes: 20, content: 'Identify word parts in examples' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 1 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Reading practice: simple words', moduleId: 'alphabet', lessonId: 'alphabet-letters' },
          { type: 'output', minutes: 15, content: 'Read and pronounce new words' }
        ]
      }
    ]
  },
  {
    week: 2,
    theme: 'First Sentences & Pronouns',
    goals: ['Personal pronouns (ni, zu, hura)', 'Verb izan (to be)', 'Self-introduction', 'Simple sentences'],
    targetVocab: 60,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'Week 1 review + SRS cards' },
          { type: 'lesson', minutes: 20, content: 'Personal pronouns: ni, zu, hura', moduleId: 'grammar', lessonId: 'grammar-pronouns' },
          { type: 'output', minutes: 15, content: 'Practice pronouns in context' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Pronouns + new vocab cards' },
          { type: 'lesson', minutes: 20, content: 'Verb izan (to be): naiz, zara, da', moduleId: 'grammar', lessonId: 'grammar-izan' },
          { type: 'output', minutes: 15, content: 'Conjugate izan with pronouns' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Self-intro: Ni [name] naiz', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Write and say your self-introduction' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Self-intro practice + cards' },
          { type: 'lesson', minutes: 20, content: 'Plural pronouns: gu, zuek, haiek', moduleId: 'grammar', lessonId: 'grammar-pronouns' },
          { type: 'output', minutes: 15, content: 'Practice all pronouns' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + pronouns review' },
          { type: 'lesson', minutes: 15, content: 'Numbers 1-10: bat, bi, hiru...', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 20, content: 'Count objects around you' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 2 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Practice reading sentences' },
          { type: 'output', minutes: 15, content: 'Read simple Basque texts' }
        ]
      }
    ]
  },
  {
    week: 3,
    theme: 'SOV Word Order & Cases Intro',
    goals: ['SOV word order', 'Introduction to absolutive case', 'Definite articles (-a, -ak)', 'Basic nouns'],
    targetVocab: 90,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS vocabulary review' },
          { type: 'lesson', minutes: 20, content: 'SOV word order', moduleId: 'grammar', lessonId: 'grammar-sov' },
          { type: 'output', minutes: 15, content: 'Rearrange sentences to Basque order' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'SOV practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Definite articles: -a (sing), -ak (plural)', moduleId: 'grammar', lessonId: 'grammar-articles' },
          { type: 'output', minutes: 15, content: 'Add articles to nouns' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Articles practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Numbers 11-20 (hamaika, hamabi...)', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Practice vigesimal (base-20) system' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Numbers practice' },
          { type: 'lesson', minutes: 20, content: 'Telling time in Basque', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Say times throughout your day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Food vocabulary: ogia, ura, sagarra', moduleId: 'vocab', lessonId: 'vocab-food' },
          { type: 'output', minutes: 15, content: 'Describe meals in Basque' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 3 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Restaurant basics: Mesedez', moduleId: 'conversation', lessonId: 'convo-restaurant' },
          { type: 'output', minutes: 15, content: 'Role-play ordering food' }
        ]
      }
    ]
  },
  {
    week: 4,
    theme: 'Ergative Case & Transitive Verbs',
    goals: ['Ergative-absolutive system intro', 'Transitive verb ukan (to have)', 'Object marking', 'Complete restaurant dialogue'],
    targetVocab: 120,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + Week 3 review' },
          { type: 'lesson', minutes: 20, content: 'Ergative case introduction (-k suffix)', moduleId: 'grammar', lessonId: 'grammar-ergative' },
          { type: 'output', minutes: 15, content: 'Identify ergative in sentences' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Ergative practice' },
          { type: 'lesson', minutes: 20, content: 'Verb ukan (to have): dut, duzu, du', moduleId: 'grammar', lessonId: 'grammar-ukan' },
          { type: 'output', minutes: 15, content: 'Make sentences: X dut (I have X)' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Ukan practice' },
          { type: 'lesson', minutes: 20, content: 'Transitive vs intransitive verbs', moduleId: 'grammar', lessonId: 'grammar-ergative' },
          { type: 'output', minutes: 15, content: 'Identify verb types' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Restaurant dialogue', moduleId: 'conversation', lessonId: 'convo-restaurant' },
          { type: 'output', minutes: 15, content: 'Practice full restaurant conversation' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'All verbs learned' },
          { type: 'lesson', minutes: 20, content: 'Egon (to be located/to stay)', moduleId: 'grammar', lessonId: 'grammar-egon' },
          { type: 'output', minutes: 15, content: 'Describe where things are' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 20, content: 'Month 1 comprehensive review' },
          { type: 'lesson', minutes: 10, content: 'Month 1 quiz', moduleId: 'review', lessonId: 'review-week1-4' },
          { type: 'output', minutes: 15, content: 'Self-assessment & goal setting' }
        ]
      }
    ]
  },

  // MONTH 2: Core Grammar (Weeks 5-8)
  {
    week: 5,
    theme: 'Locations & The Locative Case',
    goals: ['Locative case (-n)', 'Place vocabulary', 'Inessive/inesive forms', 'Describe locations'],
    targetVocab: 150,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'Month 1 SRS review' },
          { type: 'lesson', minutes: 20, content: 'Locative case -n (in/at)', moduleId: 'grammar', lessonId: 'grammar-locative' },
          { type: 'output', minutes: 15, content: 'Describe where you are' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Locative practice' },
          { type: 'lesson', minutes: 20, content: 'Place vocabulary: etxea, eskola, bulegoa', moduleId: 'vocab', lessonId: 'vocab-places' },
          { type: 'output', minutes: 15, content: 'Describe your daily locations' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + locations' },
          { type: 'lesson', minutes: 20, content: 'Daily routine verbs: lo egin, jaiki, jan', moduleId: 'grammar', lessonId: 'grammar-verbs' },
          { type: 'output', minutes: 15, content: 'Describe your morning routine' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Routine practice' },
          { type: 'lesson', minutes: 20, content: 'More activity verbs', moduleId: 'grammar', lessonId: 'grammar-verbs' },
          { type: 'output', minutes: 15, content: 'Full daily schedule in Basque' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Combining locations + activities', moduleId: 'grammar', lessonId: 'grammar-locative' },
          { type: 'output', minutes: 15, content: 'Write 10 sentences about your day' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 5 review' },
          { type: 'lesson', minutes: 15, content: 'Listening practice: daily routines' },
          { type: 'output', minutes: 15, content: 'Shadow a routine description' }
        ]
      }
    ]
  },
  {
    week: 6,
    theme: 'Past Tense & Time Expressions',
    goals: ['Past tense formation', 'Time words (gaur, bihar, atzo)', 'Days of the week', 'Talk about past activities'],
    targetVocab: 180,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + present tense' },
          { type: 'lesson', minutes: 20, content: 'Past tense with izan and ukan', moduleId: 'grammar', lessonId: 'grammar-past' },
          { type: 'output', minutes: 15, content: 'Conjugate known verbs to past' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Past tense conjugation' },
          { type: 'lesson', minutes: 20, content: 'Time words: gaur, bihar, atzo, orain', moduleId: 'vocab', lessonId: 'vocab-time' },
          { type: 'output', minutes: 15, content: 'Talk about yesterday vs today' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + time words' },
          { type: 'lesson', minutes: 20, content: 'Days: astelehena, asteartea, asteazkena...', moduleId: 'vocab', lessonId: 'vocab-time' },
          { type: 'output', minutes: 15, content: 'Describe your weekly schedule' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Week days practice' },
          { type: 'lesson', minutes: 20, content: 'Time of day: goizean, eguerdian, arratsaldean', moduleId: 'vocab', lessonId: 'vocab-time' },
          { type: 'output', minutes: 15, content: 'Describe meals throughout day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'Full time vocabulary' },
          { type: 'lesson', minutes: 20, content: 'Combining time + activity + place', moduleId: 'grammar', lessonId: 'grammar-sov' },
          { type: 'output', minutes: 15, content: 'Complex sentences about your life' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 6 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: time-based conversations' },
          { type: 'output', minutes: 15, content: 'Journal entry about yesterday' }
        ]
      }
    ]
  },
  {
    week: 7,
    theme: 'Questions & Adjectives',
    goals: ['Question words (zer, non, noiz, nor)', 'Basic adjectives', 'Adjective agreement', 'Ask and answer questions'],
    targetVocab: 210,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + past tense' },
          { type: 'lesson', minutes: 20, content: 'Question words: zer, non, nor', moduleId: 'vocab', lessonId: 'vocab-questions' },
          { type: 'output', minutes: 15, content: 'Form questions with each word' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Question formation' },
          { type: 'lesson', minutes: 20, content: 'More questions: noiz, zergatik, nola', moduleId: 'vocab', lessonId: 'vocab-questions' },
          { type: 'output', minutes: 15, content: 'Practice question-answer pairs' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'All question words' },
          { type: 'lesson', minutes: 20, content: 'Adjectives: ona, handia, txikia, polita', moduleId: 'vocab', lessonId: 'vocab-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe objects around you' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Adjective practice' },
          { type: 'lesson', minutes: 20, content: 'Adjective placement and agreement', moduleId: 'grammar', lessonId: 'grammar-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe people and things' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Q&A dialogue practice', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Interview yourself in Basque' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 7 review' },
          { type: 'lesson', minutes: 15, content: 'Jakin/ez jakin (know/don\'t know)' },
          { type: 'output', minutes: 15, content: 'Practice asking for info' }
        ]
      }
    ]
  },
  {
    week: 8,
    theme: 'Shopping & Numbers',
    goals: ['Shopping vocabulary', 'Large numbers (vigesimal)', 'Descriptive adjectives', 'Complete shopping dialogue'],
    targetVocab: 240,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + questions' },
          { type: 'lesson', minutes: 20, content: 'Shopping vocab: denda, prezioa, zenbat', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Ask prices of items' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping phrases' },
          { type: 'lesson', minutes: 20, content: 'Large numbers: hogei, berrogei, ehun', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Practice prices in euros' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Numbers + prices' },
          { type: 'lesson', minutes: 20, content: 'Adjectives: garestia/merkea, polita', moduleId: 'vocab', lessonId: 'vocab-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe products' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping vocabulary' },
          { type: 'lesson', minutes: 20, content: 'Shopping dialogue', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Role-play shopping scenario' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Payment: txartela, dirua, ordaindu', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Complete purchase conversation' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 8 + Month 2 review' },
          { type: 'lesson', minutes: 15, content: 'Practice: shopping in Basque' },
          { type: 'output', minutes: 15, content: 'Write about a recent purchase' }
        ]
      }
    ]
  },
  // Weeks 9-12: More scenarios
  {
    week: 9,
    theme: 'Transportation & Directions',
    goals: ['Direction vocabulary', 'Allative case (-ra, towards)', 'Ablative case (-tik, from)', 'Location descriptions'],
    targetVocab: 270,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Direction words: eskuinera, ezkerrera, aurrera', moduleId: 'situations', lessonId: 'situation-directions' },
          { type: 'output', minutes: 15, content: 'Give directions in Basque' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Directions practice' },
          { type: 'lesson', minutes: 20, content: 'Transportation: autobusa, trena, taxia', moduleId: 'vocab', lessonId: 'vocab-transport' },
          { type: 'output', minutes: 15, content: 'Describe how you get places' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Transport vocab' },
          { type: 'lesson', minutes: 20, content: 'Allative case: -ra (to/towards)', moduleId: 'grammar', lessonId: 'grammar-cases' },
          { type: 'output', minutes: 15, content: 'Say where you are going' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Allative practice' },
          { type: 'lesson', minutes: 20, content: 'Ablative case: -tik (from)', moduleId: 'grammar', lessonId: 'grammar-cases' },
          { type: 'output', minutes: 15, content: 'Describe origins and destinations' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Asking for directions dialogue', moduleId: 'situations', lessonId: 'situation-directions' },
          { type: 'output', minutes: 15, content: 'Full navigation dialogue' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 9 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: direction instructions' },
          { type: 'output', minutes: 15, content: 'Draw a map from Basque directions' }
        ]
      }
    ]
  },
  {
    week: 10,
    theme: 'Expressing Wants & Likes',
    goals: ['Nahi izan (to want)', 'Gustatu (to like)', 'Hobbies vocabulary', 'Talk about preferences'],
    targetVocab: 300,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + directions' },
          { type: 'lesson', minutes: 20, content: 'Nahi izan (to want)', moduleId: 'grammar', lessonId: 'grammar-verbs' },
          { type: 'output', minutes: 15, content: 'Express 5 things you want to do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Want to practice' },
          { type: 'lesson', minutes: 20, content: 'Gustatu (to like/please)', moduleId: 'vocab', lessonId: 'vocab-expressions' },
          { type: 'output', minutes: 15, content: 'List likes and dislikes' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Preferences' },
          { type: 'lesson', minutes: 20, content: 'Hobbies and interests vocab', moduleId: 'vocab', lessonId: 'vocab-hobbies' },
          { type: 'output', minutes: 15, content: 'Describe your hobbies' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Hobbies vocab' },
          { type: 'lesson', minutes: 20, content: 'Question words: zergatik, nola', moduleId: 'vocab', lessonId: 'vocab-questions' },
          { type: 'output', minutes: 15, content: 'Ask and answer why questions' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Conversation about hobbies', moduleId: 'conversation', lessonId: 'convo-hobbies' },
          { type: 'output', minutes: 15, content: 'Extended self-introduction with hobbies' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 10 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: hobby discussions' },
          { type: 'output', minutes: 15, content: 'Record yourself describing interests' }
        ]
      }
    ]
  },
  {
    week: 11,
    theme: 'Ability & Possibility',
    goals: ['Ahal izan (can/be able)', 'Permission expressions', 'Request politely', 'Express ability'],
    targetVocab: 330,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + wants/likes' },
          { type: 'lesson', minutes: 20, content: 'Ahal izan (can/be able to)', moduleId: 'grammar', lessonId: 'grammar-modals' },
          { type: 'output', minutes: 15, content: 'List things you can do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can practice' },
          { type: 'lesson', minutes: 20, content: 'Ezin izan (cannot)', moduleId: 'grammar', lessonId: 'grammar-modals' },
          { type: 'output', minutes: 15, content: 'Abilities and limitations' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can/cannot' },
          { type: 'lesson', minutes: 20, content: 'Asking permission politely', moduleId: 'conversation', lessonId: 'convo-polite' },
          { type: 'output', minutes: 15, content: 'Ask for permission' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Permission practice' },
          { type: 'lesson', minutes: 20, content: 'Formal vs informal speech', moduleId: 'culture', lessonId: 'culture-politeness' },
          { type: 'output', minutes: 15, content: 'Practice polite scenarios' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Combined can/want expressions', moduleId: 'grammar', lessonId: 'grammar-modals' },
          { type: 'output', minutes: 15, content: 'Express complex desires' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 11 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: permission dialogues' },
          { type: 'output', minutes: 15, content: 'Role-play asking permission' }
        ]
      }
    ]
  },
  {
    week: 12,
    theme: 'Weather & Future',
    goals: ['Future tense', 'Weather vocabulary', 'Making plans', 'Month 3 review'],
    targetVocab: 360,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + can/may' },
          { type: 'lesson', minutes: 20, content: 'Future tense with -ko/-en', moduleId: 'grammar', lessonId: 'grammar-future' },
          { type: 'output', minutes: 15, content: 'Talk about future plans' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Future tense practice' },
          { type: 'lesson', minutes: 20, content: 'Weather: eguraldia, euria, eguzkia', moduleId: 'vocab', lessonId: 'vocab-weather' },
          { type: 'output', minutes: 15, content: 'Describe today\'s weather' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Weather vocab' },
          { type: 'lesson', minutes: 20, content: 'Making plans dialogue', moduleId: 'conversation', lessonId: 'convo-plans' },
          { type: 'output', minutes: 15, content: 'Plan a weekend in Basque' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Plans practice' },
          { type: 'lesson', minutes: 20, content: 'Combining tenses', moduleId: 'grammar', lessonId: 'grammar-tenses' },
          { type: 'output', minutes: 15, content: 'Past, present, future story' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS comprehensive' },
          { type: 'lesson', minutes: 20, content: 'Month 3 grammar review', moduleId: 'review', lessonId: 'review-month3' },
          { type: 'output', minutes: 15, content: 'Self-assessment quiz' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 20, content: 'Months 2-3 comprehensive review' },
          { type: 'lesson', minutes: 10, content: 'Progress check' },
          { type: 'output', minutes: 15, content: 'Record 2-minute self-intro' }
        ]
      }
    ]
  },

  // MONTHS 4-6: Advanced patterns (Weeks 13-24)
  { week: 13, theme: 'Connectors & Complex Sentences', goals: ['Eta, baina, edo', 'Subordinate clauses', 'Longer sentences', 'Storytelling basics'], targetVocab: 390, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS review' }, { type: 'lesson', minutes: 20, content: 'Sentence connectors', moduleId: 'grammar', lessonId: 'grammar-connectors' }, { type: 'output', minutes: 15, content: 'Connect sentences' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Connectors' }, { type: 'lesson', minutes: 20, content: 'Relative clauses with -en', moduleId: 'grammar', lessonId: 'grammar-relative' }, { type: 'output', minutes: 15, content: 'Make complex sentences' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Practice' }, { type: 'lesson', minutes: 20, content: 'Building paragraphs', moduleId: 'reading', lessonId: 'reading-practice' }, { type: 'output', minutes: 15, content: 'Write a paragraph' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Writing review' }, { type: 'lesson', minutes: 20, content: 'Storytelling vocabulary', moduleId: 'vocab', lessonId: 'vocab-stories' }, { type: 'output', minutes: 15, content: 'Tell a simple story' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: stories', moduleId: 'listening', lessonId: 'listening-stories' }, { type: 'output', minutes: 15, content: 'Retell a story' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Complex sentence practice' }, { type: 'output', minutes: 15, content: 'Journal entry' }] }] },
  { week: 14, theme: 'Conditionals & Contrast', goals: ['Baldin ba- (if)', 'Nahiz eta (although)', 'Expressing conditions', 'Contrast statements'], targetVocab: 420, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Conditional with baldin ba-', moduleId: 'grammar', lessonId: 'grammar-conditional' }, { type: 'output', minutes: 15, content: 'If statements' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Conditional practice' }, { type: 'lesson', minutes: 20, content: 'Contrast with nahiz eta', moduleId: 'grammar', lessonId: 'grammar-contrast' }, { type: 'output', minutes: 15, content: 'Although statements' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Conditionals' }, { type: 'lesson', minutes: 20, content: 'Complex dialogues', moduleId: 'conversation', lessonId: 'convo-advanced' }, { type: 'output', minutes: 15, content: 'Practice dialogues' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Dialogue review' }, { type: 'lesson', minutes: 20, content: 'Opinion expressions', moduleId: 'vocab', lessonId: 'vocab-opinions' }, { type: 'output', minutes: 15, content: 'Share opinions' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: opinions', moduleId: 'listening', lessonId: 'listening-opinions' }, { type: 'output', minutes: 15, content: 'Respond to opinions' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Combined conditionals' }, { type: 'output', minutes: 15, content: 'Debate practice' }] }] },
  { week: 15, theme: 'Daily Life Routines', goals: ['Detailed routine verbs', 'Sequence expressions', 'Time management vocab', 'Describe a full day'], targetVocab: 450, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Morning routine details', moduleId: 'vocab', lessonId: 'vocab-routine' }, { type: 'output', minutes: 15, content: 'Describe morning' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Morning vocab' }, { type: 'lesson', minutes: 20, content: 'Work/school activities', moduleId: 'vocab', lessonId: 'vocab-work' }, { type: 'output', minutes: 15, content: 'Describe day activities' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Activities' }, { type: 'lesson', minutes: 20, content: 'Evening routines', moduleId: 'vocab', lessonId: 'vocab-routine' }, { type: 'output', minutes: 15, content: 'Full day description' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Routines' }, { type: 'lesson', minutes: 20, content: 'Frequency adverbs: beti, askotan, batzuetan', moduleId: 'vocab', lessonId: 'vocab-frequency' }, { type: 'output', minutes: 15, content: 'How often you do things' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: daily life', moduleId: 'listening', lessonId: 'listening-daily' }, { type: 'output', minutes: 15, content: 'Shadow routine audio' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Combined practice' }, { type: 'output', minutes: 15, content: 'Record daily routine' }] }] },
  { week: 16, theme: 'Emotions & Feelings', goals: ['Emotion adjectives', 'Expressing feelings', 'Sympathy expressions', 'Emotional conversations'], targetVocab: 480, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Basic emotions: pozik, triste, haserre', moduleId: 'vocab', lessonId: 'vocab-emotions' }, { type: 'output', minutes: 15, content: 'Express emotions' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Emotions' }, { type: 'lesson', minutes: 20, content: 'Physical states: nekatuta, goseak', moduleId: 'vocab', lessonId: 'vocab-states' }, { type: 'output', minutes: 15, content: 'Describe how you feel' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Feelings' }, { type: 'lesson', minutes: 20, content: 'Sympathy & comfort expressions', moduleId: 'conversation', lessonId: 'convo-sympathy' }, { type: 'output', minutes: 15, content: 'Comfort someone' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Sympathy' }, { type: 'lesson', minutes: 20, content: 'Emotional dialogues', moduleId: 'conversation', lessonId: 'convo-emotional' }, { type: 'output', minutes: 15, content: 'Role-play emotions' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: emotional content', moduleId: 'listening', lessonId: 'listening-emotional' }, { type: 'output', minutes: 15, content: 'Respond emotionally' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week + Month 4 review' }, { type: 'lesson', minutes: 15, content: 'Month 4 review' }, { type: 'output', minutes: 15, content: 'Emotional journal' }] }] },
  { week: 17, theme: 'Shopping Advanced', goals: ['Bargaining', 'Returns & exchanges', 'Detailed product descriptions', 'Complex shopping scenarios'], targetVocab: 510, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Advanced shopping vocab', moduleId: 'situations', lessonId: 'situation-shopping-advanced' }, { type: 'output', minutes: 15, content: 'Detailed shopping' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Shopping' }, { type: 'lesson', minutes: 20, content: 'Returns and exchanges', moduleId: 'situations', lessonId: 'situation-returns' }, { type: 'output', minutes: 15, content: 'Return scenario' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Returns' }, { type: 'lesson', minutes: 20, content: 'Product descriptions', moduleId: 'vocab', lessonId: 'vocab-products' }, { type: 'output', minutes: 15, content: 'Describe products' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Products' }, { type: 'lesson', minutes: 20, content: 'Comparing items with -ago', moduleId: 'grammar', lessonId: 'grammar-comparison' }, { type: 'output', minutes: 15, content: 'Compare products' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Full shopping dialogue', moduleId: 'situations', lessonId: 'situation-shopping-full' }, { type: 'output', minutes: 15, content: 'Extended shopping' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Market vocabulary' }, { type: 'output', minutes: 15, content: 'Market roleplay' }] }] },
  { week: 18, theme: 'Travel & Transportation', goals: ['Travel vocabulary', 'Booking & reservations', 'Airport/station phrases', 'Travel dialogues'], targetVocab: 540, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Travel vocabulary', moduleId: 'vocab', lessonId: 'vocab-travel' }, { type: 'output', minutes: 15, content: 'Travel plans' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Travel' }, { type: 'lesson', minutes: 20, content: 'Booking phrases', moduleId: 'conversation', lessonId: 'convo-booking' }, { type: 'output', minutes: 15, content: 'Make a booking' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Booking' }, { type: 'lesson', minutes: 20, content: 'Airport vocabulary', moduleId: 'vocab', lessonId: 'vocab-airport' }, { type: 'output', minutes: 15, content: 'Airport scenario' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Airport' }, { type: 'lesson', minutes: 20, content: 'Public transport phrases', moduleId: 'situations', lessonId: 'situation-transport' }, { type: 'output', minutes: 15, content: 'Transport dialogue' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Travel dialogues', moduleId: 'conversation', lessonId: 'convo-travel' }, { type: 'output', minutes: 15, content: 'Full travel scenario' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Travel problems' }, { type: 'output', minutes: 15, content: 'Problem solving' }] }] },
  { week: 19, theme: 'Technology & Communication', goals: ['Tech vocabulary', 'Phone conversations', 'Texting style', 'Digital communication'], targetVocab: 570, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Technology vocab', moduleId: 'vocab', lessonId: 'vocab-tech' }, { type: 'output', minutes: 15, content: 'Describe devices' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Tech' }, { type: 'lesson', minutes: 20, content: 'Phone conversations', moduleId: 'conversation', lessonId: 'convo-phone' }, { type: 'output', minutes: 15, content: 'Phone dialogue' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Phone' }, { type: 'lesson', minutes: 20, content: 'Basque texting style', moduleId: 'culture', lessonId: 'culture-texting' }, { type: 'output', minutes: 15, content: 'Write text messages' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Texting' }, { type: 'lesson', minutes: 20, content: 'Internet vocabulary', moduleId: 'vocab', lessonId: 'vocab-internet' }, { type: 'output', minutes: 15, content: 'Describe online activities' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Digital communication', moduleId: 'conversation', lessonId: 'convo-digital' }, { type: 'output', minutes: 15, content: 'Online interaction' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Social media vocabulary' }, { type: 'output', minutes: 15, content: 'Social media post' }] }] },
  { week: 20, theme: 'Health & Medical', goals: ['Body parts', 'Symptoms', 'Doctor visit dialogue', 'Health expressions'], targetVocab: 600, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Body vocabulary: burua, eskua, hanka', moduleId: 'vocab', lessonId: 'vocab-body' }, { type: 'output', minutes: 15, content: 'Describe body' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Body' }, { type: 'lesson', minutes: 20, content: 'Symptoms and illness', moduleId: 'vocab', lessonId: 'vocab-health' }, { type: 'output', minutes: 15, content: 'Describe symptoms' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Symptoms' }, { type: 'lesson', minutes: 20, content: 'Doctor visit dialogue', moduleId: 'conversation', lessonId: 'convo-doctor' }, { type: 'output', minutes: 15, content: 'Doctor roleplay' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Medical' }, { type: 'lesson', minutes: 20, content: 'Pharmacy vocabulary', moduleId: 'vocab', lessonId: 'vocab-pharmacy' }, { type: 'output', minutes: 15, content: 'Buy medicine' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Health advice', moduleId: 'conversation', lessonId: 'convo-health' }, { type: 'output', minutes: 15, content: 'Give health advice' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week + Month 5 review' }, { type: 'lesson', minutes: 15, content: 'Emergency phrases' }, { type: 'output', minutes: 15, content: 'Emergency scenario' }] }] },
  { week: 21, theme: 'Work & Career', goals: ['Job vocabulary', 'Workplace expressions', 'Formal language', 'Work conversations'], targetVocab: 630, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Job vocabulary: lana, enpresa, bulegoa', moduleId: 'vocab', lessonId: 'vocab-work' }, { type: 'output', minutes: 15, content: 'Describe jobs' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Jobs' }, { type: 'lesson', minutes: 20, content: 'Workplace phrases', moduleId: 'conversation', lessonId: 'convo-work' }, { type: 'output', minutes: 15, content: 'Office dialogue' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Workplace' }, { type: 'lesson', minutes: 20, content: 'Formal speech practice (zuka)', moduleId: 'culture', lessonId: 'culture-formal' }, { type: 'output', minutes: 15, content: 'Formal conversation' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Formal' }, { type: 'lesson', minutes: 20, content: 'Business vocabulary', moduleId: 'vocab', lessonId: 'vocab-business' }, { type: 'output', minutes: 15, content: 'Business scenario' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Work conversations', moduleId: 'conversation', lessonId: 'convo-business' }, { type: 'output', minutes: 15, content: 'Extended work dialogue' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Email writing' }, { type: 'output', minutes: 15, content: 'Write work email' }] }] },
  { week: 22, theme: 'Basque Culture & Traditions', goals: ['Basque festivals', 'Cultural practices', 'Traditional vocabulary', 'Cultural conversations'], targetVocab: 660, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Basque festivals: Aste Nagusia, San Fermin', moduleId: 'culture', lessonId: 'culture-festivals' }, { type: 'output', minutes: 15, content: 'Describe festivals' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Festivals' }, { type: 'lesson', minutes: 20, content: 'Traditional customs and sports', moduleId: 'culture', lessonId: 'culture-traditions' }, { type: 'output', minutes: 15, content: 'Explain customs' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Customs' }, { type: 'lesson', minutes: 20, content: 'Traditional food: pintxoak, txakoli', moduleId: 'vocab', lessonId: 'vocab-food-traditional' }, { type: 'output', minutes: 15, content: 'Describe traditional food' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Food' }, { type: 'lesson', minutes: 20, content: 'Basque music and dance', moduleId: 'culture', lessonId: 'culture-arts' }, { type: 'output', minutes: 15, content: 'Discuss Basque arts' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Dialects of Basque', moduleId: 'culture', lessonId: 'culture-dialects' }, { type: 'output', minutes: 15, content: 'Compare dialects' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Cultural Q&A' }, { type: 'output', minutes: 15, content: 'Culture discussion' }] }] },
  { week: 23, theme: 'Entertainment & Media', goals: ['Entertainment vocabulary', 'Opinions & reviews', 'Media discussions', 'Recommendations'], targetVocab: 690, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Entertainment vocab', moduleId: 'vocab', lessonId: 'vocab-entertainment' }, { type: 'output', minutes: 15, content: 'Describe entertainment' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Entertainment' }, { type: 'lesson', minutes: 20, content: 'Giving opinions', moduleId: 'conversation', lessonId: 'convo-opinions' }, { type: 'output', minutes: 15, content: 'Review something' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Opinions' }, { type: 'lesson', minutes: 20, content: 'Basque literature and film', moduleId: 'culture', lessonId: 'culture-media' }, { type: 'output', minutes: 15, content: 'Discuss Basque media' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Media' }, { type: 'lesson', minutes: 20, content: 'Recommendations', moduleId: 'conversation', lessonId: 'convo-recommend' }, { type: 'output', minutes: 15, content: 'Recommend things' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Media discussions', moduleId: 'conversation', lessonId: 'convo-media' }, { type: 'output', minutes: 15, content: 'Discuss recent media' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Casual conversation' }, { type: 'output', minutes: 15, content: 'Free discussion' }] }] },
  { week: 24, theme: 'Final Review & Assessment', goals: ['Comprehensive review', 'All grammar patterns', 'Extended conversation', 'Final assessment'], targetVocab: 700, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 15, content: 'Comprehensive SRS' }, { type: 'lesson', minutes: 15, content: 'Grammar review 1: Cases', moduleId: 'review', lessonId: 'review-grammar1' }, { type: 'output', minutes: 15, content: 'Case practice' }] }, { day: 2, blocks: [{ type: 'review', minutes: 15, content: 'SRS' }, { type: 'lesson', minutes: 15, content: 'Grammar review 2: Verbs', moduleId: 'review', lessonId: 'review-grammar2' }, { type: 'output', minutes: 15, content: 'Verb practice' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Conversation review', moduleId: 'conversation', lessonId: 'convo-final' }, { type: 'output', minutes: 15, content: 'Extended dialogue' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening review', moduleId: 'listening', lessonId: 'listening-final' }, { type: 'output', minutes: 15, content: 'Listening practice' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'Final SRS' }, { type: 'lesson', minutes: 20, content: 'Final exam', moduleId: 'final', lessonId: 'final-exam' }, { type: 'output', minutes: 15, content: 'Self-assessment' }] }, { day: 6, blocks: [{ type: 'review', minutes: 10, content: 'Zorionak! (Congratulations!)' }, { type: 'lesson', minutes: 20, content: '6-month reflection' }, { type: 'output', minutes: 15, content: 'Record 5-min Basque intro' }] }] }
]

// Helper functions
export function getWeekScheduleBasque(weekNumber) {
  return scheduleBasque.find(w => w.week === weekNumber)
}

export function getDaySessionBasque(weekNumber, dayNumber) {
  const week = getWeekScheduleBasque(weekNumber)
  if (!week) return null
  return week.dailySessions.find(d => d.day === dayNumber)
}

export function getMonthThemeBasque(month) {
  const themes = {
    1: 'Foundations',
    2: 'Core Grammar & Cases',
    3: 'Everyday Scenarios',
    4: 'Complex Communication',
    5: 'Real-World Practice',
    6: 'Fluency & Review'
  }
  return themes[month] || ''
}
