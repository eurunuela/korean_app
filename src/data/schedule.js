// 24-Week Korean Fluency Study Schedule
// 30-45 minutes per day, 5-6 days per week
// Each day has a unique lesson

// Re-export Basque schedule
export { scheduleBasque, getWeekScheduleBasque, getDaySessionBasque, getMonthThemeBasque } from './schedule-basque'

export const schedule = [
  // MONTH 1: Foundations (Weeks 1-4)
  {
    week: 1,
    theme: 'Hangul Mastery',
    goals: ['Master all 14 basic consonants', 'Master all 10 basic vowels', 'Read simple syllables', 'Basic greetings'],
    targetVocab: 30,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 5, content: 'Introduction to Korean' },
          { type: 'lesson', minutes: 20, content: 'Basic vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ)', moduleId: 'daily', lessonId: 'w1d1-basic-vowels' },
          { type: 'output', minutes: 15, content: 'Write each vowel 10 times, pronounce aloud' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review vowels from Day 1' },
          { type: 'lesson', minutes: 20, content: 'Compound vowels (ㅐ, ㅔ, ㅚ, ㅟ)', moduleId: 'daily', lessonId: 'w1d2-compound-vowels' },
          { type: 'output', minutes: 15, content: 'Practice reading all vowels randomly' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'All vowels quiz' },
          { type: 'lesson', minutes: 20, content: 'Basic consonants Group 1 (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ)', moduleId: 'daily', lessonId: 'w1d3-consonants-1' },
          { type: 'output', minutes: 15, content: 'Write consonants + combine with ㅏ (가, 나, 다...)' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review consonants 1-5' },
          { type: 'lesson', minutes: 20, content: 'Basic consonants Group 2 (ㅂ, ㅅ, ㅇ, ㅈ, ㅎ)', moduleId: 'daily', lessonId: 'w1d4-consonants-2' },
          { type: 'output', minutes: 15, content: 'Combine all consonants with different vowels' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'All consonants review' },
          { type: 'lesson', minutes: 15, content: 'First greetings: 안녕하세요, 감사합니다', moduleId: 'daily', lessonId: 'w1d5-first-greetings' },
          { type: 'output', minutes: 20, content: 'Read and write greeting words, practice pronunciation' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 1 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Building syllables (CV structure)', moduleId: 'daily', lessonId: 'w1d6-syllable-building' },
          { type: 'output', minutes: 15, content: 'Quiz yourself on random syllables' }
        ]
      }
    ]
  },
  {
    week: 2,
    theme: 'Complete Hangul + First Sentences',
    goals: ['Double consonants', 'Batchim (final consonants)', 'Self-introduction', 'Yes/No responses'],
    targetVocab: 60,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'Week 1 Hangul review + SRS cards' },
          { type: 'lesson', minutes: 20, content: 'Double consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)', moduleId: 'daily', lessonId: 'w2d1-double-consonants' },
          { type: 'output', minutes: 15, content: 'Practice tense sounds vs regular' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Double consonants + new vocab cards' },
          { type: 'lesson', minutes: 20, content: 'Aspirated consonants (ㅋ, ㅌ, ㅍ, ㅊ)', moduleId: 'daily', lessonId: 'w2d2-aspirated-consonants' },
          { type: 'output', minutes: 15, content: 'Minimal pairs practice: 달/탈/딸' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Batchim (받침) - Final consonants', moduleId: 'daily', lessonId: 'w2d3-batchim-intro' },
          { type: 'output', minutes: 15, content: 'Read words with batchim: 밥, 국, 집' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Batchim practice + cards' },
          { type: 'lesson', minutes: 20, content: 'Self-intro: 저는 [name]이에요/예요', moduleId: 'daily', lessonId: 'w2d4-self-intro' },
          { type: 'output', minutes: 15, content: 'Write and say your self-introduction' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + pronunciation review' },
          { type: 'lesson', minutes: 15, content: 'Native Korean numbers 1-10', moduleId: 'daily', lessonId: 'w2d5-native-numbers' },
          { type: 'output', minutes: 20, content: 'Count objects around you' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 2 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Reading practice: Simple Korean text', moduleId: 'daily', lessonId: 'w2d6-reading-simple' },
          { type: 'output', minutes: 15, content: 'Read a children\'s story or sign' }
        ]
      }
    ]
  },
  {
    week: 3,
    theme: 'Basic Sentence Structure',
    goals: ['SOV word order', 'Topic particle 은/는', 'Polite present tense', 'Sino-Korean numbers'],
    targetVocab: 90,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS vocabulary review' },
          { type: 'lesson', minutes: 20, content: 'Korean sentence order (SOV)', moduleId: 'daily', lessonId: 'w3d1-sentence-order' },
          { type: 'output', minutes: 15, content: 'Rearrange English sentences to Korean order' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'SOV practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Topic particle 은/는', moduleId: 'daily', lessonId: 'w3d2-topic-particle' },
          { type: 'output', minutes: 15, content: 'Make sentences: 저는..., 이름은...' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particles practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Sino-Korean numbers 1-10', moduleId: 'daily', lessonId: 'w3d3-sino-numbers' },
          { type: 'output', minutes: 15, content: 'Practice dates and phone numbers' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Both number systems' },
          { type: 'lesson', minutes: 20, content: 'Telling time in Korean', moduleId: 'daily', lessonId: 'w3d4-telling-time' },
          { type: 'output', minutes: 15, content: 'Say times throughout your day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Food vocabulary basics', moduleId: 'daily', lessonId: 'w3d5-food-vocab' },
          { type: 'output', minutes: 15, content: 'Describe meals in Korean' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 3 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Restaurant basics: 주세요', moduleId: 'daily', lessonId: 'w3d6-restaurant-basics' },
          { type: 'output', minutes: 15, content: 'Role-play ordering food' }
        ]
      }
    ]
  },
  {
    week: 4,
    theme: 'Essential Verbs & Conjugation',
    goals: ['Basic verbs (가다, 오다, 먹다, 마시다)', 'Present tense -아요/-어요', 'Object particle 을/를', 'Complete restaurant dialogue'],
    targetVocab: 120,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + Week 3 review' },
          { type: 'lesson', minutes: 20, content: 'Core verbs: 가다, 오다, 하다', moduleId: 'daily', lessonId: 'w4d1-core-verbs' },
          { type: 'output', minutes: 15, content: 'Conjugate verbs in present tense' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Verb conjugation practice' },
          { type: 'lesson', minutes: 20, content: 'Object particle 을/를', moduleId: 'daily', lessonId: 'w4d2-object-particle' },
          { type: 'output', minutes: 15, content: 'Make sentences: X를 Y해요' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particles 은/는, 을/를' },
          { type: 'lesson', minutes: 20, content: 'More verbs: 먹다, 마시다, 보다', moduleId: 'daily', lessonId: 'w4d3-more-verbs' },
          { type: 'output', minutes: 15, content: 'Describe daily activities' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Restaurant dialogue practice', moduleId: 'daily', lessonId: 'w4d4-restaurant-dialogue' },
          { type: 'output', minutes: 15, content: 'Practice full restaurant conversation' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'All verbs learned' },
          { type: 'lesson', minutes: 20, content: '있다/없다 (exist/not exist)', moduleId: 'daily', lessonId: 'w4d5-existence-verbs' },
          { type: 'output', minutes: 15, content: 'Describe what you have/don\'t have' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 20, content: 'Month 1 comprehensive review' },
          { type: 'lesson', minutes: 10, content: 'Month 1 assessment', moduleId: 'daily', lessonId: 'w4d6-month1-review' },
          { type: 'output', minutes: 15, content: 'Self-assessment & goal setting' }
        ]
      }
    ]
  },

  // MONTH 2: Core Grammar (Weeks 5-8)
  {
    week: 5,
    theme: 'Locations & Activities',
    goals: ['Location particle 에/에서', 'Place vocabulary', 'Daily routine verbs', 'Describe where you do things'],
    targetVocab: 150,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'Month 1 SRS review' },
          { type: 'lesson', minutes: 20, content: 'Location particle 에 (destination/static)', moduleId: 'daily', lessonId: 'w5d1-particle-e' },
          { type: 'output', minutes: 15, content: 'Say where you go: 학교에 가요' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Location particle 에 practice' },
          { type: 'lesson', minutes: 20, content: 'Location particle 에서 (action location)', moduleId: 'daily', lessonId: 'w5d2-particle-eseo' },
          { type: 'output', minutes: 15, content: 'Say where you do things: 카페에서 공부해요' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + 에 vs 에서' },
          { type: 'lesson', minutes: 20, content: 'Place vocabulary: 집, 학교, 회사, 가게', moduleId: 'daily', lessonId: 'w5d3-places' },
          { type: 'output', minutes: 15, content: 'Describe your daily locations' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Places vocabulary' },
          { type: 'lesson', minutes: 20, content: 'Routine verbs: 자다, 일어나다, 씻다', moduleId: 'daily', lessonId: 'w5d4-routine-verbs' },
          { type: 'output', minutes: 15, content: 'Describe your morning routine' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'More routine: 공부하다, 일하다, 운동하다', moduleId: 'daily', lessonId: 'w5d5-more-routines' },
          { type: 'output', minutes: 15, content: 'Write 10 sentences about your day' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 5 review' },
          { type: 'lesson', minutes: 15, content: 'Combining location + activity', moduleId: 'daily', lessonId: 'w5d6-location-activity' },
          { type: 'output', minutes: 15, content: 'Full daily schedule in Korean' }
        ]
      }
    ]
  },
  {
    week: 6,
    theme: 'Time Expressions & Past Tense',
    goals: ['Past tense -았어요/-었어요', 'Time words (오늘, 내일, 어제)', 'Days of the week', 'Talk about past activities'],
    targetVocab: 180,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + present tense' },
          { type: 'lesson', minutes: 20, content: 'Past tense formation: 았/었어요', moduleId: 'daily', lessonId: 'w6d1-past-tense' },
          { type: 'output', minutes: 15, content: 'Conjugate known verbs to past' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Past tense conjugation' },
          { type: 'lesson', minutes: 20, content: 'Time words: 오늘, 내일, 어제, 지금', moduleId: 'daily', lessonId: 'w6d2-time-words' },
          { type: 'output', minutes: 15, content: 'Talk about yesterday vs today' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + time words' },
          { type: 'lesson', minutes: 20, content: 'Days of the week', moduleId: 'daily', lessonId: 'w6d3-days-of-week' },
          { type: 'output', minutes: 15, content: 'Describe your weekly schedule' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Week days practice' },
          { type: 'lesson', minutes: 20, content: 'Time of day: 아침, 점심, 저녁, 밤', moduleId: 'daily', lessonId: 'w6d4-time-of-day' },
          { type: 'output', minutes: 15, content: 'Describe meals throughout day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'Full time vocabulary' },
          { type: 'lesson', minutes: 20, content: 'Combining time + activity + place', moduleId: 'daily', lessonId: 'w6d5-complex-sentences' },
          { type: 'output', minutes: 15, content: 'Complex sentences about your life' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 6 review' },
          { type: 'lesson', minutes: 15, content: 'Journal writing in past tense', moduleId: 'daily', lessonId: 'w6d6-journal-past' },
          { type: 'output', minutes: 15, content: 'Write about yesterday' }
        ]
      }
    ]
  },
  {
    week: 7,
    theme: 'Questions & Adjectives',
    goals: ['Question words (뭐, 어디, 언제, 누구)', 'Basic adjectives', 'Subject particle 이/가', 'Ask and answer questions'],
    targetVocab: 210,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + past tense' },
          { type: 'lesson', minutes: 20, content: 'Question words: 뭐, 누구', moduleId: 'daily', lessonId: 'w7d1-questions-what-who' },
          { type: 'output', minutes: 15, content: 'Form questions with 뭐 and 누구' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Question formation' },
          { type: 'lesson', minutes: 20, content: 'Question words: 어디, 언제', moduleId: 'daily', lessonId: 'w7d2-questions-where-when' },
          { type: 'output', minutes: 15, content: 'Ask where and when questions' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'All question words' },
          { type: 'lesson', minutes: 20, content: 'Subject particle 이/가', moduleId: 'daily', lessonId: 'w7d3-subject-particle' },
          { type: 'output', minutes: 15, content: 'Compare 은/는 vs 이/가 usage' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particle practice' },
          { type: 'lesson', minutes: 20, content: 'Basic adjectives: 좋다, 크다, 작다', moduleId: 'daily', lessonId: 'w7d4-basic-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe objects around you' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'More adjectives: 많다, 적다, 새롭다', moduleId: 'daily', lessonId: 'w7d5-more-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe people and things' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 7 review' },
          { type: 'lesson', minutes: 15, content: 'Q&A practice dialogue', moduleId: 'daily', lessonId: 'w7d6-qa-dialogue' },
          { type: 'output', minutes: 15, content: 'Interview yourself in Korean' }
        ]
      }
    ]
  },
  {
    week: 8,
    theme: 'Shopping & Money',
    goals: ['Shopping vocabulary', 'Prices and currency', 'Descriptive adjectives', 'Complete shopping dialogue'],
    targetVocab: 240,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + questions' },
          { type: 'lesson', minutes: 20, content: 'Shopping vocab: 가게, 사다, 팔다', moduleId: 'daily', lessonId: 'w8d1-shopping-vocab' },
          { type: 'output', minutes: 15, content: 'Basic shopping expressions' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping phrases' },
          { type: 'lesson', minutes: 20, content: 'Asking prices: 얼마예요?', moduleId: 'daily', lessonId: 'w8d2-asking-prices' },
          { type: 'output', minutes: 15, content: 'Practice prices: 5000원, 만 원' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Numbers + prices' },
          { type: 'lesson', minutes: 20, content: 'Price adjectives: 비싸다, 싸다', moduleId: 'daily', lessonId: 'w8d3-price-adjectives' },
          { type: 'output', minutes: 15, content: 'Describe products as expensive/cheap' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping vocabulary' },
          { type: 'lesson', minutes: 20, content: 'Shopping dialogue: Buying items', moduleId: 'daily', lessonId: 'w8d4-buying-dialogue' },
          { type: 'output', minutes: 15, content: 'Role-play shopping scenario' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Payment: 카드, 현금, 계산', moduleId: 'daily', lessonId: 'w8d5-payment' },
          { type: 'output', minutes: 15, content: 'Complete purchase conversation' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 8 + Month 2 review' },
          { type: 'lesson', minutes: 15, content: 'Month 2 assessment', moduleId: 'daily', lessonId: 'w8d6-month2-review' },
          { type: 'output', minutes: 15, content: 'Write about a recent purchase' }
        ]
      }
    ]
  },

  // MONTH 3: Everyday Scenarios (Weeks 9-12)
  {
    week: 9,
    theme: 'Transportation & Directions',
    goals: ['Direction vocabulary', 'Transportation words', 'Asking for directions', 'Location descriptions'],
    targetVocab: 270,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Direction words: 오른쪽, 왼쪽, 앞, 뒤', moduleId: 'daily', lessonId: 'w9d1-directions' },
          { type: 'output', minutes: 15, content: 'Give simple directions' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Directions practice' },
          { type: 'lesson', minutes: 20, content: 'Transportation: 버스, 지하철, 택시', moduleId: 'daily', lessonId: 'w9d2-transportation' },
          { type: 'output', minutes: 15, content: 'Describe how you get places' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Transport vocab' },
          { type: 'lesson', minutes: 20, content: 'Asking: 어디예요? 어떻게 가요?', moduleId: 'daily', lessonId: 'w9d3-asking-directions' },
          { type: 'output', minutes: 15, content: 'Practice asking where things are' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Direction dialogue' },
          { type: 'lesson', minutes: 20, content: 'Places: 역, 병원, 은행, 약국', moduleId: 'daily', lessonId: 'w9d4-public-places' },
          { type: 'output', minutes: 15, content: 'Describe your neighborhood' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Giving directions: 직진하세요, 돌아가세요', moduleId: 'daily', lessonId: 'w9d5-giving-directions' },
          { type: 'output', minutes: 15, content: 'Full navigation dialogue' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 9 review' },
          { type: 'lesson', minutes: 15, content: 'Directions comprehension practice', moduleId: 'daily', lessonId: 'w9d6-directions-practice' },
          { type: 'output', minutes: 15, content: 'Draw a map from Korean directions' }
        ]
      }
    ]
  },
  {
    week: 10,
    theme: 'Expressing Wants & Likes',
    goals: ['-고 싶다 (want to)', '좋아하다/싫어하다 (like/dislike)', 'Hobbies vocabulary', 'Talk about preferences'],
    targetVocab: 300,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + directions' },
          { type: 'lesson', minutes: 20, content: 'Want to do: -고 싶다', moduleId: 'daily', lessonId: 'w10d1-want-to' },
          { type: 'output', minutes: 15, content: 'Express 5 things you want to do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Want to practice' },
          { type: 'lesson', minutes: 20, content: 'Like/Dislike: 좋아하다, 싫어하다', moduleId: 'daily', lessonId: 'w10d2-like-dislike' },
          { type: 'output', minutes: 15, content: 'List likes and dislikes' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Preferences' },
          { type: 'lesson', minutes: 20, content: 'Hobbies vocabulary', moduleId: 'daily', lessonId: 'w10d3-hobbies' },
          { type: 'output', minutes: 15, content: 'Describe your hobbies' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Hobbies vocab' },
          { type: 'lesson', minutes: 20, content: 'Question words: 왜, 어떻게', moduleId: 'daily', lessonId: 'w10d4-why-how' },
          { type: 'output', minutes: 15, content: 'Ask and answer why questions' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Extended self-introduction with hobbies', moduleId: 'daily', lessonId: 'w10d5-intro-hobbies' },
          { type: 'output', minutes: 15, content: 'Full self-intro with interests' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 10 review' },
          { type: 'lesson', minutes: 15, content: 'Hobby discussion dialogue', moduleId: 'daily', lessonId: 'w10d6-hobby-dialogue' },
          { type: 'output', minutes: 15, content: 'Record yourself describing interests' }
        ]
      }
    ]
  },
  {
    week: 11,
    theme: 'Can & May (Ability & Permission)',
    goals: ['-ㄹ 수 있다/없다 (can/cannot)', '-아/어도 되다 (may)', 'Request politely', 'Express ability'],
    targetVocab: 330,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + wants/likes' },
          { type: 'lesson', minutes: 20, content: 'Can do: -(으)ㄹ 수 있다', moduleId: 'daily', lessonId: 'w11d1-can-do' },
          { type: 'output', minutes: 15, content: 'List things you can do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can practice' },
          { type: 'lesson', minutes: 20, content: 'Cannot: -(으)ㄹ 수 없다 / 못', moduleId: 'daily', lessonId: 'w11d2-cannot' },
          { type: 'output', minutes: 15, content: 'Express abilities and limitations' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can/cannot' },
          { type: 'lesson', minutes: 20, content: 'May I: -아/어도 되다', moduleId: 'daily', lessonId: 'w11d3-may-i' },
          { type: 'output', minutes: 15, content: 'Ask for permission politely' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Permission practice' },
          { type: 'lesson', minutes: 20, content: 'Polite requests: -아/어 주세요', moduleId: 'daily', lessonId: 'w11d4-polite-requests' },
          { type: 'output', minutes: 15, content: 'Practice polite request scenarios' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Combining can + want expressions', moduleId: 'daily', lessonId: 'w11d5-can-want-combo' },
          { type: 'output', minutes: 15, content: 'Express complex desires' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 11 review' },
          { type: 'lesson', minutes: 15, content: 'Permission dialogue practice', moduleId: 'daily', lessonId: 'w11d6-permission-dialogue' },
          { type: 'output', minutes: 15, content: 'Role-play asking permission' }
        ]
      }
    ]
  },
  {
    week: 12,
    theme: 'Weather & Future Plans',
    goals: ['Future tense -ㄹ 거예요', 'Weather vocabulary', 'Making plans', 'Month 3 review'],
    targetVocab: 360,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + can/may' },
          { type: 'lesson', minutes: 20, content: 'Future tense: -(으)ㄹ 거예요', moduleId: 'daily', lessonId: 'w12d1-future-tense' },
          { type: 'output', minutes: 15, content: 'Talk about future plans' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Future tense practice' },
          { type: 'lesson', minutes: 20, content: 'Weather vocabulary', moduleId: 'daily', lessonId: 'w12d2-weather' },
          { type: 'output', minutes: 15, content: 'Describe today\'s weather' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Weather vocab' },
          { type: 'lesson', minutes: 20, content: 'Making plans dialogue', moduleId: 'daily', lessonId: 'w12d3-making-plans' },
          { type: 'output', minutes: 15, content: 'Plan a weekend in Korean' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Plans practice' },
          { type: 'lesson', minutes: 20, content: 'Combining tenses: past, present, future', moduleId: 'daily', lessonId: 'w12d4-all-tenses' },
          { type: 'output', minutes: 15, content: 'Tell a story using all tenses' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS comprehensive' },
          { type: 'lesson', minutes: 20, content: 'Month 3 grammar review', moduleId: 'daily', lessonId: 'w12d5-grammar-review' },
          { type: 'output', minutes: 15, content: 'Self-assessment quiz' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 20, content: 'Months 1-3 comprehensive review' },
          { type: 'lesson', minutes: 10, content: 'Month 3 assessment', moduleId: 'daily', lessonId: 'w12d6-month3-review' },
          { type: 'output', minutes: 15, content: 'Record 2-minute self-intro' }
        ]
      }
    ]
  },

  // MONTH 4: Complex Communication (Weeks 13-16)
  {
    week: 13,
    theme: 'Connectors & Complex Sentences',
    goals: ['그리고, 그래서, 그런데', '-고 (and verb connector)', 'Longer sentences', 'Storytelling basics'],
    targetVocab: 390,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Sentence connectors: 그리고, 그래서', moduleId: 'daily', lessonId: 'w13d1-connectors-1' },
          { type: 'output', minutes: 15, content: 'Connect sentences with 그리고/그래서' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Connectors' },
          { type: 'lesson', minutes: 20, content: 'More connectors: 그런데, 그러면', moduleId: 'daily', lessonId: 'w13d2-connectors-2' },
          { type: 'output', minutes: 15, content: 'Use contrast and condition connectors' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Practice connectors' },
          { type: 'lesson', minutes: 20, content: 'Verb connector: -고 (and then)', moduleId: 'daily', lessonId: 'w13d3-verb-connector-go' },
          { type: 'output', minutes: 15, content: 'Chain activities with -고' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Writing review' },
          { type: 'lesson', minutes: 20, content: 'Building paragraphs', moduleId: 'daily', lessonId: 'w13d4-paragraphs' },
          { type: 'output', minutes: 15, content: 'Write a paragraph about your day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Storytelling vocabulary', moduleId: 'daily', lessonId: 'w13d5-storytelling-vocab' },
          { type: 'output', minutes: 15, content: 'Tell a simple story' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Story practice: sequence of events', moduleId: 'daily', lessonId: 'w13d6-story-practice' },
          { type: 'output', minutes: 15, content: 'Write a short story' }
        ]
      }
    ]
  },
  {
    week: 14,
    theme: 'Conditionals & Contrast',
    goals: ['-면 (if/when)', '-지만 (but)', 'Expressing conditions', 'Contrast statements'],
    targetVocab: 420,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'If/When: -(으)면', moduleId: 'daily', lessonId: 'w14d1-conditional-if' },
          { type: 'output', minutes: 15, content: 'Make if statements' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: '-면 practice' },
          { type: 'lesson', minutes: 20, content: 'But: -지만', moduleId: 'daily', lessonId: 'w14d2-contrast-but' },
          { type: 'output', minutes: 15, content: 'Make contrast statements' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Conditionals' },
          { type: 'lesson', minutes: 20, content: 'Because: -어서/아서', moduleId: 'daily', lessonId: 'w14d3-because' },
          { type: 'output', minutes: 15, content: 'Give reasons with -어서' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Dialogue review' },
          { type: 'lesson', minutes: 20, content: 'Expressing opinions', moduleId: 'daily', lessonId: 'w14d4-opinions' },
          { type: 'output', minutes: 15, content: 'Share your opinions' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Complex conditional sentences', moduleId: 'daily', lessonId: 'w14d5-complex-conditionals' },
          { type: 'output', minutes: 15, content: 'Create hypothetical scenarios' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Debate practice: expressing views', moduleId: 'daily', lessonId: 'w14d6-debate-practice' },
          { type: 'output', minutes: 15, content: 'Argue both sides of a topic' }
        ]
      }
    ]
  },
  {
    week: 15,
    theme: 'Daily Life Routines',
    goals: ['Detailed routine verbs', 'Sequence expressions', 'Time management vocab', 'Describe a full day'],
    targetVocab: 450,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Morning routine in detail', moduleId: 'daily', lessonId: 'w15d1-morning-routine' },
          { type: 'output', minutes: 15, content: 'Describe your morning step by step' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Morning vocab' },
          { type: 'lesson', minutes: 20, content: 'Work/school activities', moduleId: 'daily', lessonId: 'w15d2-work-school' },
          { type: 'output', minutes: 15, content: 'Describe your work/school day' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Activities' },
          { type: 'lesson', minutes: 20, content: 'Evening routines', moduleId: 'daily', lessonId: 'w15d3-evening-routine' },
          { type: 'output', minutes: 15, content: 'Describe your evening' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Routines' },
          { type: 'lesson', minutes: 20, content: 'Frequency: 항상, 자주, 가끔, 안', moduleId: 'daily', lessonId: 'w15d4-frequency' },
          { type: 'output', minutes: 15, content: 'How often you do things' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Sequence words: 먼저, 그 다음에, 마지막으로', moduleId: 'daily', lessonId: 'w15d5-sequence' },
          { type: 'output', minutes: 15, content: 'Describe a process in order' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Full day description practice', moduleId: 'daily', lessonId: 'w15d6-full-day' },
          { type: 'output', minutes: 15, content: 'Record your entire daily routine' }
        ]
      }
    ]
  },
  {
    week: 16,
    theme: 'Emotions & Feelings',
    goals: ['Emotion adjectives', 'Expressing feelings', 'Sympathy expressions', 'Emotional conversations'],
    targetVocab: 480,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Basic emotions: 기쁘다, 슬프다, 화나다', moduleId: 'daily', lessonId: 'w16d1-basic-emotions' },
          { type: 'output', minutes: 15, content: 'Express your emotions' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Emotions' },
          { type: 'lesson', minutes: 20, content: 'More feelings: 피곤하다, 배고프다, 아프다', moduleId: 'daily', lessonId: 'w16d2-physical-feelings' },
          { type: 'output', minutes: 15, content: 'Describe how you feel' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Feelings' },
          { type: 'lesson', minutes: 20, content: 'Sympathy: 괜찮아요? 힘내세요!', moduleId: 'daily', lessonId: 'w16d3-sympathy' },
          { type: 'output', minutes: 15, content: 'Comfort someone in Korean' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Sympathy' },
          { type: 'lesson', minutes: 20, content: 'Emotional responses in dialogue', moduleId: 'daily', lessonId: 'w16d4-emotional-dialogue' },
          { type: 'output', minutes: 15, content: 'Role-play emotional scenarios' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Describing moods and states', moduleId: 'daily', lessonId: 'w16d5-moods' },
          { type: 'output', minutes: 15, content: 'Write an emotional journal' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week + Month 4 review' },
          { type: 'lesson', minutes: 15, content: 'Month 4 assessment', moduleId: 'daily', lessonId: 'w16d6-month4-review' },
          { type: 'output', minutes: 15, content: 'Emotional journal entry' }
        ]
      }
    ]
  },

  // MONTH 5: Real-World Practice (Weeks 17-20)
  {
    week: 17,
    theme: 'Shopping Advanced',
    goals: ['Bargaining', 'Returns & exchanges', 'Detailed product descriptions', 'Complex shopping scenarios'],
    targetVocab: 510,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Clothes shopping vocabulary', moduleId: 'daily', lessonId: 'w17d1-clothes-shopping' },
          { type: 'output', minutes: 15, content: 'Describe clothing items' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping' },
          { type: 'lesson', minutes: 20, content: 'Trying on: 입어 봐도 돼요?', moduleId: 'daily', lessonId: 'w17d2-trying-on' },
          { type: 'output', minutes: 15, content: 'Fitting room dialogue' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Returns' },
          { type: 'lesson', minutes: 20, content: 'Returns and exchanges', moduleId: 'daily', lessonId: 'w17d3-returns' },
          { type: 'output', minutes: 15, content: 'Return item dialogue' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Products' },
          { type: 'lesson', minutes: 20, content: 'Comparing products: 더, 제일, 보다', moduleId: 'daily', lessonId: 'w17d4-comparing' },
          { type: 'output', minutes: 15, content: 'Compare products' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Market shopping: 깎아 주세요', moduleId: 'daily', lessonId: 'w17d5-market' },
          { type: 'output', minutes: 15, content: 'Bargaining dialogue' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Full shopping scenario', moduleId: 'daily', lessonId: 'w17d6-shopping-scenario' },
          { type: 'output', minutes: 15, content: 'Market roleplay' }
        ]
      }
    ]
  },
  {
    week: 18,
    theme: 'Travel & Transportation',
    goals: ['Travel vocabulary', 'Booking & reservations', 'Airport/station phrases', 'Travel dialogues'],
    targetVocab: 540,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Travel vocabulary: 여행, 비행기, 호텔', moduleId: 'daily', lessonId: 'w18d1-travel-vocab' },
          { type: 'output', minutes: 15, content: 'Describe travel plans' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Travel' },
          { type: 'lesson', minutes: 20, content: 'Booking: 예약하고 싶어요', moduleId: 'daily', lessonId: 'w18d2-booking' },
          { type: 'output', minutes: 15, content: 'Make a reservation' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Booking' },
          { type: 'lesson', minutes: 20, content: 'Airport vocabulary and phrases', moduleId: 'daily', lessonId: 'w18d3-airport' },
          { type: 'output', minutes: 15, content: 'Airport check-in dialogue' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Airport' },
          { type: 'lesson', minutes: 20, content: 'Train and bus stations', moduleId: 'daily', lessonId: 'w18d4-stations' },
          { type: 'output', minutes: 15, content: 'Buy train/bus tickets' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Hotel check-in/out', moduleId: 'daily', lessonId: 'w18d5-hotel' },
          { type: 'output', minutes: 15, content: 'Hotel dialogue practice' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Travel problems: lost, late, help', moduleId: 'daily', lessonId: 'w18d6-travel-problems' },
          { type: 'output', minutes: 15, content: 'Problem-solving scenarios' }
        ]
      }
    ]
  },
  {
    week: 19,
    theme: 'Technology & Communication',
    goals: ['Tech vocabulary', 'Phone conversations', 'Texting style', 'Digital communication'],
    targetVocab: 570,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Tech vocabulary: 컴퓨터, 핸드폰, 인터넷', moduleId: 'daily', lessonId: 'w19d1-tech-vocab' },
          { type: 'output', minutes: 15, content: 'Describe your devices' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Tech' },
          { type: 'lesson', minutes: 20, content: 'Phone conversations: 여보세요', moduleId: 'daily', lessonId: 'w19d2-phone-calls' },
          { type: 'output', minutes: 15, content: 'Phone call dialogue' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Phone' },
          { type: 'lesson', minutes: 20, content: 'Korean texting abbreviations', moduleId: 'daily', lessonId: 'w19d3-texting' },
          { type: 'output', minutes: 15, content: 'Write text messages' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Texting' },
          { type: 'lesson', minutes: 20, content: 'Social media vocabulary', moduleId: 'daily', lessonId: 'w19d4-social-media' },
          { type: 'output', minutes: 15, content: 'Write a social media post' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Online shopping: 배송, 주문, 결제', moduleId: 'daily', lessonId: 'w19d5-online-shopping' },
          { type: 'output', minutes: 15, content: 'Navigate online shopping' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Digital communication practice', moduleId: 'daily', lessonId: 'w19d6-digital-practice' },
          { type: 'output', minutes: 15, content: 'Full digital communication scenarios' }
        ]
      }
    ]
  },
  {
    week: 20,
    theme: 'Health & Medical',
    goals: ['Body parts', 'Symptoms', 'Doctor visit dialogue', 'Health expressions'],
    targetVocab: 600,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Body parts vocabulary', moduleId: 'daily', lessonId: 'w20d1-body-parts' },
          { type: 'output', minutes: 15, content: 'Name body parts' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Body' },
          { type: 'lesson', minutes: 20, content: 'Symptoms: 아프다, 기침하다, 열이 나다', moduleId: 'daily', lessonId: 'w20d2-symptoms' },
          { type: 'output', minutes: 15, content: 'Describe symptoms' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Symptoms' },
          { type: 'lesson', minutes: 20, content: 'At the doctor: 어디가 아프세요?', moduleId: 'daily', lessonId: 'w20d3-doctor-visit' },
          { type: 'output', minutes: 15, content: 'Doctor visit dialogue' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Medical' },
          { type: 'lesson', minutes: 20, content: 'Pharmacy: 약, 처방전, 약국', moduleId: 'daily', lessonId: 'w20d4-pharmacy' },
          { type: 'output', minutes: 15, content: 'Buy medicine dialogue' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Health advice: 쉬세요, 물 많이 드세요', moduleId: 'daily', lessonId: 'w20d5-health-advice' },
          { type: 'output', minutes: 15, content: 'Give and receive health advice' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week + Month 5 review' },
          { type: 'lesson', minutes: 15, content: 'Month 5 assessment', moduleId: 'daily', lessonId: 'w20d6-month5-review' },
          { type: 'output', minutes: 15, content: 'Emergency phrases practice' }
        ]
      }
    ]
  },

  // MONTH 6: Fluency & Review (Weeks 21-24)
  {
    week: 21,
    theme: 'Work & Career',
    goals: ['Job vocabulary', 'Workplace expressions', 'Formal language', 'Work conversations'],
    targetVocab: 630,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Job titles and occupations', moduleId: 'daily', lessonId: 'w21d1-jobs' },
          { type: 'output', minutes: 15, content: 'Describe different jobs' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Jobs' },
          { type: 'lesson', minutes: 20, content: 'Workplace vocabulary: 회의, 보고서, 마감', moduleId: 'daily', lessonId: 'w21d2-workplace' },
          { type: 'output', minutes: 15, content: 'Office dialogue' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Workplace' },
          { type: 'lesson', minutes: 20, content: 'Formal speech: 합니다 level', moduleId: 'daily', lessonId: 'w21d3-formal-speech' },
          { type: 'output', minutes: 15, content: 'Practice formal conversation' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Formal' },
          { type: 'lesson', minutes: 20, content: 'Business meetings', moduleId: 'daily', lessonId: 'w21d4-meetings' },
          { type: 'output', minutes: 15, content: 'Meeting scenario roleplay' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Email writing in Korean', moduleId: 'daily', lessonId: 'w21d5-email' },
          { type: 'output', minutes: 15, content: 'Write a work email' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Job interview practice', moduleId: 'daily', lessonId: 'w21d6-interview' },
          { type: 'output', minutes: 15, content: 'Mock interview in Korean' }
        ]
      }
    ]
  },
  {
    week: 22,
    theme: 'Culture & Traditions',
    goals: ['Korean holidays', 'Cultural practices', 'Traditional vocabulary', 'Cultural conversations'],
    targetVocab: 660,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Korean holidays: 설날, 추석', moduleId: 'daily', lessonId: 'w22d1-holidays' },
          { type: 'output', minutes: 15, content: 'Describe Korean holidays' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Holidays' },
          { type: 'lesson', minutes: 20, content: 'Traditional customs and etiquette', moduleId: 'daily', lessonId: 'w22d2-customs' },
          { type: 'output', minutes: 15, content: 'Explain Korean customs' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Customs' },
          { type: 'lesson', minutes: 20, content: 'Traditional food: 떡, 한복, 전통', moduleId: 'daily', lessonId: 'w22d3-traditional' },
          { type: 'output', minutes: 15, content: 'Describe traditional food' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Food' },
          { type: 'lesson', minutes: 20, content: 'Honorifics and age respect', moduleId: 'daily', lessonId: 'w22d4-honorifics' },
          { type: 'output', minutes: 15, content: 'Practice honorific speech' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Comparing Korean and your culture', moduleId: 'daily', lessonId: 'w22d5-culture-compare' },
          { type: 'output', minutes: 15, content: 'Write a culture comparison' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Cultural Q&A dialogue', moduleId: 'daily', lessonId: 'w22d6-culture-qa' },
          { type: 'output', minutes: 15, content: 'Culture discussion practice' }
        ]
      }
    ]
  },
  {
    week: 23,
    theme: 'Entertainment & Media',
    goals: ['Entertainment vocabulary', 'Opinions & reviews', 'Media discussions', 'Recommendations'],
    targetVocab: 690,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Entertainment: 영화, 드라마, 음악', moduleId: 'daily', lessonId: 'w23d1-entertainment' },
          { type: 'output', minutes: 15, content: 'Describe entertainment you enjoy' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Entertainment' },
          { type: 'lesson', minutes: 20, content: 'Giving opinions and reviews', moduleId: 'daily', lessonId: 'w23d2-reviews' },
          { type: 'output', minutes: 15, content: 'Review a movie or show' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Opinions' },
          { type: 'lesson', minutes: 20, content: 'K-drama and K-pop vocabulary', moduleId: 'daily', lessonId: 'w23d3-kpop-kdrama' },
          { type: 'output', minutes: 15, content: 'Discuss your favorite K-content' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'K-content' },
          { type: 'lesson', minutes: 20, content: 'Recommendations: 추천해요', moduleId: 'daily', lessonId: 'w23d4-recommendations' },
          { type: 'output', minutes: 15, content: 'Recommend things to others' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Discussing current media', moduleId: 'daily', lessonId: 'w23d5-media-discussion' },
          { type: 'output', minutes: 15, content: 'Discuss recent media' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week review' },
          { type: 'lesson', minutes: 15, content: 'Free conversation practice', moduleId: 'daily', lessonId: 'w23d6-free-conversation' },
          { type: 'output', minutes: 15, content: 'Extended casual conversation' }
        ]
      }
    ]
  },
  {
    week: 24,
    theme: 'Final Review & Assessment',
    goals: ['Comprehensive review', 'All grammar patterns', 'Extended conversation', 'Final assessment'],
    targetVocab: 700,
    dailySessions: [
      {
        day: 1,
        blocks: [
          { type: 'review', minutes: 15, content: 'Comprehensive SRS' },
          { type: 'lesson', minutes: 15, content: 'Grammar review: particles', moduleId: 'daily', lessonId: 'w24d1-particles-review' },
          { type: 'output', minutes: 15, content: 'Particle practice exercises' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 15, content: 'SRS' },
          { type: 'lesson', minutes: 15, content: 'Grammar review: conjugation', moduleId: 'daily', lessonId: 'w24d2-conjugation-review' },
          { type: 'output', minutes: 15, content: 'Conjugation in all tenses' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Grammar review: connectors', moduleId: 'daily', lessonId: 'w24d3-connectors-review' },
          { type: 'output', minutes: 15, content: 'Build complex sentences' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS' },
          { type: 'lesson', minutes: 20, content: 'Conversation review', moduleId: 'daily', lessonId: 'w24d4-conversation-review' },
          { type: 'output', minutes: 15, content: 'Extended dialogue practice' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'Final SRS' },
          { type: 'lesson', minutes: 20, content: 'Final comprehensive exam', moduleId: 'daily', lessonId: 'w24d5-final-exam' },
          { type: 'output', minutes: 15, content: 'Self-assessment' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 10, content: 'Celebration!' },
          { type: 'lesson', minutes: 20, content: '6-month reflection and next steps', moduleId: 'daily', lessonId: 'w24d6-reflection' },
          { type: 'output', minutes: 15, content: 'Record 5-minute Korean introduction' }
        ]
      }
    ]
  }
]

// Helper functions
export function getWeekSchedule(weekNumber) {
  return schedule.find(w => w.week === weekNumber)
}

export function getDaySession(weekNumber, dayNumber) {
  const week = getWeekSchedule(weekNumber)
  if (!week) return null
  return week.dailySessions.find(d => d.day === dayNumber)
}

export function getWeeksInMonth(month) {
  const monthWeeks = {
    1: [1, 2, 3, 4],
    2: [5, 6, 7, 8],
    3: [9, 10, 11, 12],
    4: [13, 14, 15, 16],
    5: [17, 18, 19, 20],
    6: [21, 22, 23, 24]
  }
  return monthWeeks[month] || []
}

export function getMonthTheme(month) {
  const themes = {
    1: 'Foundations',
    2: 'Core Grammar & Vocabulary',
    3: 'Everyday Scenarios',
    4: 'Complex Communication',
    5: 'Real-World Practice',
    6: 'Fluency & Review'
  }
  return themes[month] || ''
}
