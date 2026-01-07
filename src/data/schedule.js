// 24-Week Korean Fluency Study Schedule
// 30-45 minutes per day, 5-6 days per week

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
          { type: 'lesson', minutes: 20, content: 'Basic vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ)', moduleId: 'hangul', lessonId: 'hangul-vowels' },
          { type: 'output', minutes: 15, content: 'Write each vowel 10 times, pronounce aloud' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review vowels from Day 1' },
          { type: 'lesson', minutes: 20, content: 'Compound vowels (ㅐ, ㅔ, ㅚ, ㅟ, etc.)', moduleId: 'hangul', lessonId: 'hangul-vowels' },
          { type: 'output', minutes: 15, content: 'Practice reading all vowels randomly' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'All vowels quiz' },
          { type: 'lesson', minutes: 20, content: 'Basic consonants (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ)', moduleId: 'hangul', lessonId: 'hangul-consonants' },
          { type: 'output', minutes: 15, content: 'Write consonants + combine with ㅏ (가, 나, 다...)' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Review consonants 1-5' },
          { type: 'lesson', minutes: 20, content: 'More consonants (ㅂ, ㅅ, ㅇ, ㅈ, ㅎ)', moduleId: 'hangul', lessonId: 'hangul-consonants' },
          { type: 'output', minutes: 15, content: 'Combine all consonants with different vowels' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'All consonants review' },
          { type: 'lesson', minutes: 15, content: 'Basic greetings: 안녕하세요, 감사합니다', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 20, content: 'Read and write greeting words, practice pronunciation' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 1 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Building syllables (CVC structure)', moduleId: 'hangul', lessonId: 'hangul-syllables' },
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
          { type: 'lesson', minutes: 20, content: 'Double consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)', moduleId: 'hangul', lessonId: 'hangul-consonants' },
          { type: 'output', minutes: 15, content: 'Practice tense sounds vs regular' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Double consonants + new vocab cards' },
          { type: 'lesson', minutes: 20, content: 'Aspirated consonants (ㅋ, ㅌ, ㅍ, ㅊ)', moduleId: 'hangul', lessonId: 'hangul-consonants' },
          { type: 'output', minutes: 15, content: 'Minimal pairs practice: 달/탈/딸' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Batchim (받침) basics', moduleId: 'hangul', lessonId: 'hangul-syllables' },
          { type: 'output', minutes: 15, content: 'Read words with batchim: 밥, 국, 집' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Batchim practice + cards' },
          { type: 'lesson', minutes: 20, content: 'Self-intro: 저는 [name]이에요/예요', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Write and say your self-introduction' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + pronunciation review' },
          { type: 'lesson', minutes: 15, content: 'Numbers 1-10 (Native Korean)', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 20, content: 'Count objects around you' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 2 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Practice reading Korean text', moduleId: 'reading', lessonId: 'reading-practice' },
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
          { type: 'lesson', minutes: 20, content: 'SOV word order', moduleId: 'grammar', lessonId: 'grammar-sov' },
          { type: 'output', minutes: 15, content: 'Rearrange English sentences to Korean order' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'SOV practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Topic particle 은/는', moduleId: 'grammar', lessonId: 'grammar-particles' },
          { type: 'output', minutes: 15, content: 'Make sentences: 저는..., 이름은...' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particles practice + SRS' },
          { type: 'lesson', minutes: 20, content: 'Sino-Korean numbers 1-10', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Practice dates and phone numbers' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Both number systems' },
          { type: 'lesson', minutes: 20, content: 'Telling time in Korean', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Say times throughout your day' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Food vocabulary', moduleId: 'vocab', lessonId: 'vocab-food' },
          { type: 'output', minutes: 15, content: 'Describe meals in Korean' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 3 comprehensive review' },
          { type: 'lesson', minutes: 15, content: 'Restaurant basics: 주세요', moduleId: 'conversation', lessonId: 'convo-restaurant' },
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
          { type: 'lesson', minutes: 20, content: 'Basic verbs: 가다, 오다, 하다', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Conjugate verbs in present tense' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Verb conjugation practice' },
          { type: 'lesson', minutes: 20, content: 'Object particle 을/를', moduleId: 'grammar', lessonId: 'grammar-particles' },
          { type: 'output', minutes: 15, content: 'Make sentences: X를 Y해요' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particles 은/는, 을/를' },
          { type: 'lesson', minutes: 20, content: 'More verbs: 먹다, 마시다, 보다', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Describe daily activities' }
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
          { type: 'lesson', minutes: 20, content: '있다/없다 (have/not have)', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Describe what you have/don\'t have' }
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

  // MONTH 2-3: Core Everyday Functions (Weeks 5-12)
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
          { type: 'lesson', minutes: 20, content: 'Location particles 에 vs 에서', moduleId: 'grammar', lessonId: 'grammar-particles' },
          { type: 'output', minutes: 15, content: 'Describe where things happen' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Location particle practice' },
          { type: 'lesson', minutes: 20, content: 'Place vocabulary: 집, 학교, 회사', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe your daily locations' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + locations' },
          { type: 'lesson', minutes: 20, content: 'Routine verbs: 자다, 일어나다, 공부하다', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Describe your morning routine' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Routine practice' },
          { type: 'lesson', minutes: 20, content: 'More activity verbs', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Full daily schedule in Korean' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Combining locations + activities', moduleId: 'grammar', lessonId: 'grammar-particles' },
          { type: 'output', minutes: 15, content: 'Write 10 sentences about your day' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 5 review' },
          { type: 'lesson', minutes: 15, content: 'Listening practice: daily routines', moduleId: 'listening', lessonId: 'listening-intro' },
          { type: 'output', minutes: 15, content: 'Shadow a routine description' }
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
          { type: 'lesson', minutes: 20, content: 'Past tense formation -았/었어요', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Conjugate known verbs to past' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Past tense conjugation' },
          { type: 'lesson', minutes: 20, content: 'Time words: 오늘, 내일, 어제, 지금', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Talk about yesterday vs today' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS + time words' },
          { type: 'lesson', minutes: 20, content: 'Days of the week', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Describe your weekly schedule' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Week days practice' },
          { type: 'lesson', minutes: 20, content: 'Time of day: 아침, 점심, 저녁', moduleId: 'vocab', lessonId: 'vocab-numbers' },
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
          { type: 'lesson', minutes: 15, content: 'Listening: time-based conversations', moduleId: 'listening', lessonId: 'listening-intro' },
          { type: 'output', minutes: 15, content: 'Journal entry about yesterday' }
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
          { type: 'lesson', minutes: 20, content: 'Question words: 뭐, 어디, 누구', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Form questions with each word' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Question formation' },
          { type: 'lesson', minutes: 20, content: 'Subject particle 이/가', moduleId: 'grammar', lessonId: 'grammar-particles' },
          { type: 'output', minutes: 15, content: 'Compare 은/는 vs 이/가 usage' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Particle practice' },
          { type: 'lesson', minutes: 20, content: 'Adjectives: 좋다, 크다, 작다, 많다', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe objects around you' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Adjective practice' },
          { type: 'lesson', minutes: 20, content: 'More adjectives + conjugation', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Describe people and things' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Q&A dialogue practice', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Interview yourself in Korean' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 7 review' },
          { type: 'lesson', minutes: 15, content: '알다/모르다 (know/don\'t know)', moduleId: 'grammar', lessonId: 'grammar-negation' },
          { type: 'output', minutes: 15, content: 'Practice asking for info' }
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
          { type: 'lesson', minutes: 20, content: 'Shopping vocab: 가게, 가격, 얼마', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Ask prices of items' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Shopping phrases' },
          { type: 'lesson', minutes: 20, content: 'Large numbers + 원 (won)', moduleId: 'vocab', lessonId: 'vocab-numbers' },
          { type: 'output', minutes: 15, content: 'Practice prices: 5000원, 만 원' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Numbers + prices' },
          { type: 'lesson', minutes: 20, content: 'Adjectives: 비싸다/싸다, 예쁘다', moduleId: 'vocab', lessonId: 'vocab-greetings' },
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
          { type: 'lesson', minutes: 20, content: 'Payment: 카드, 현금, 계산', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Complete purchase conversation' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 8 + Month 2 review' },
          { type: 'lesson', minutes: 15, content: 'Practice: shopping in Korean', moduleId: 'situations', lessonId: 'situation-shopping' },
          { type: 'output', minutes: 15, content: 'Write about a recent purchase' }
        ]
      }
    ]
  },
  // Weeks 9-12: Continue building with more scenarios
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
          { type: 'lesson', minutes: 20, content: 'Direction words: 오른쪽, 왼쪽, 직진', moduleId: 'situations', lessonId: 'situation-directions' },
          { type: 'output', minutes: 15, content: 'Give directions in Korean' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Directions practice' },
          { type: 'lesson', minutes: 20, content: 'Transportation: 버스, 지하철, 택시', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe how you get places' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Transport vocab' },
          { type: 'lesson', minutes: 20, content: 'Asking for directions dialogue', moduleId: 'situations', lessonId: 'situation-directions' },
          { type: 'output', minutes: 15, content: 'Practice asking where things are' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Direction dialogue' },
          { type: 'lesson', minutes: 20, content: 'Place vocabulary: 역, 병원, 은행', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe your neighborhood' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Useful phrases for getting around', moduleId: 'situations', lessonId: 'situation-directions' },
          { type: 'output', minutes: 15, content: 'Full navigation dialogue' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 9 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: direction instructions', moduleId: 'situations', lessonId: 'situation-directions' },
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
          { type: 'lesson', minutes: 20, content: '-고 싶다 (want to do)', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Express 5 things you want to do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Want to practice' },
          { type: 'lesson', minutes: 20, content: '좋아하다/싫어하다', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'List likes and dislikes' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Preferences' },
          { type: 'lesson', minutes: 20, content: 'Hobbies and interests vocab', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe your hobbies' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Hobbies vocab' },
          { type: 'lesson', minutes: 20, content: 'Question words: 왜, 어떻게', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Ask and answer why questions' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Conversation about hobbies', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Extended self-introduction with hobbies' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 10 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: hobby discussions', moduleId: 'listening', lessonId: 'listening-intro' },
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
          { type: 'lesson', minutes: 20, content: '-ㄹ 수 있다 (can do)', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'List things you can do' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can practice' },
          { type: 'lesson', minutes: 20, content: '-ㄹ 수 없다 (cannot)', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Abilities and limitations' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Can/cannot' },
          { type: 'lesson', minutes: 20, content: '-아/어도 되다 (may/is it okay)', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Ask for permission politely' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Permission practice' },
          { type: 'lesson', minutes: 20, content: 'Polite requests and responses', moduleId: 'culture', lessonId: 'culture-honorifics' },
          { type: 'output', minutes: 15, content: 'Practice polite scenarios' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS review' },
          { type: 'lesson', minutes: 20, content: 'Combined can/want expressions', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Express complex desires' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 15, content: 'Week 11 review' },
          { type: 'lesson', minutes: 15, content: 'Listening: permission dialogues', moduleId: 'listening', lessonId: 'listening-intro' },
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
          { type: 'lesson', minutes: 20, content: 'Future tense -ㄹ 거예요', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Talk about future plans' }
        ]
      },
      {
        day: 2,
        blocks: [
          { type: 'review', minutes: 10, content: 'Future tense practice' },
          { type: 'lesson', minutes: 20, content: 'Weather vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' },
          { type: 'output', minutes: 15, content: 'Describe today\'s weather' }
        ]
      },
      {
        day: 3,
        blocks: [
          { type: 'review', minutes: 10, content: 'Weather vocab' },
          { type: 'lesson', minutes: 20, content: 'Making plans dialogue', moduleId: 'conversation', lessonId: 'convo-intro' },
          { type: 'output', minutes: 15, content: 'Plan a weekend in Korean' }
        ]
      },
      {
        day: 4,
        blocks: [
          { type: 'review', minutes: 10, content: 'Plans practice' },
          { type: 'lesson', minutes: 20, content: 'Combining tenses', moduleId: 'grammar', lessonId: 'grammar-conjugation' },
          { type: 'output', minutes: 15, content: 'Past, present, future story' }
        ]
      },
      {
        day: 5,
        blocks: [
          { type: 'review', minutes: 10, content: 'SRS comprehensive' },
          { type: 'lesson', minutes: 20, content: 'Month 3 grammar review', moduleId: 'review', lessonId: 'review-week1-4' },
          { type: 'output', minutes: 15, content: 'Self-assessment quiz' }
        ]
      },
      {
        day: 6,
        blocks: [
          { type: 'review', minutes: 20, content: 'Months 2-3 comprehensive review' },
          { type: 'lesson', minutes: 10, content: 'Progress check', moduleId: 'review', lessonId: 'review-week1-4' },
          { type: 'output', minutes: 15, content: 'Record 2-minute self-intro' }
        ]
      }
    ]
  },

  // MONTHS 4-6: Fluency & Real-World Practice (Weeks 13-24)
  // Abbreviated for space - following same pattern
  {
    week: 13,
    theme: 'Connectors & Complex Sentences',
    goals: ['그리고, 그래서, 그런데', '-고 (and verb connector)', 'Longer sentences', 'Storytelling basics'],
    targetVocab: 390,
    dailySessions: [
      { day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS review' }, { type: 'lesson', minutes: 20, content: 'Sentence connectors', moduleId: 'grammar', lessonId: 'grammar-particles' }, { type: 'output', minutes: 15, content: 'Connect sentences' }] },
      { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Connectors' }, { type: 'lesson', minutes: 20, content: '-고 verb connector', moduleId: 'grammar', lessonId: 'grammar-conjugation' }, { type: 'output', minutes: 15, content: 'Chain activities' }] },
      { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Practice' }, { type: 'lesson', minutes: 20, content: 'Building paragraphs', moduleId: 'reading', lessonId: 'reading-practice' }, { type: 'output', minutes: 15, content: 'Write a paragraph' }] },
      { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Writing review' }, { type: 'lesson', minutes: 20, content: 'Storytelling vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Tell a simple story' }] },
      { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: stories', moduleId: 'listening', lessonId: 'listening-intro' }, { type: 'output', minutes: 15, content: 'Retell a story' }] },
      { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Complex sentence practice', moduleId: 'grammar', lessonId: 'grammar-connectors' }, { type: 'output', minutes: 15, content: 'Journal entry' }] }
    ]
  },
  {
    week: 14,
    theme: 'Conditionals & Contrast',
    goals: ['-면 (if/when)', '-지만 (but)', 'Expressing conditions', 'Contrast statements'],
    targetVocab: 420,
    dailySessions: [
      { day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: '-면 conditional', moduleId: 'grammar', lessonId: 'grammar-conjugation' }, { type: 'output', minutes: 15, content: 'If statements' }] },
      { day: 2, blocks: [{ type: 'review', minutes: 10, content: '-면 practice' }, { type: 'lesson', minutes: 20, content: '-지만 contrast', moduleId: 'grammar', lessonId: 'grammar-conjugation' }, { type: 'output', minutes: 15, content: 'But statements' }] },
      { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Conditionals' }, { type: 'lesson', minutes: 20, content: 'Complex dialogues', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Practice dialogues' }] },
      { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Dialogue review' }, { type: 'lesson', minutes: 20, content: 'Opinion expressions', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Share opinions' }] },
      { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: opinions', moduleId: 'listening', lessonId: 'listening-intro' }, { type: 'output', minutes: 15, content: 'Respond to opinions' }] },
      { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Combined conditionals', moduleId: 'grammar', lessonId: 'grammar-connectors' }, { type: 'output', minutes: 15, content: 'Debate practice' }] }
    ]
  },
  // Weeks 15-24 follow similar pattern with increasing complexity
  { week: 15, theme: 'Daily Life Routines', goals: ['Detailed routine verbs', 'Sequence expressions', 'Time management vocab', 'Describe a full day'], targetVocab: 450, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Morning routine details', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe morning' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Morning vocab' }, { type: 'lesson', minutes: 20, content: 'Work/school activities', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe day activities' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Activities' }, { type: 'lesson', minutes: 20, content: 'Evening routines', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Full day description' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Routines' }, { type: 'lesson', minutes: 20, content: 'Frequency adverbs', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'How often you do things' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: daily life', moduleId: 'listening', lessonId: 'listening-intro' }, { type: 'output', minutes: 15, content: 'Shadow routine audio' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Combined practice', moduleId: 'speaking', lessonId: 'speaking-shadowing' }, { type: 'output', minutes: 15, content: 'Record daily routine' }] }] },
  { week: 16, theme: 'Emotions & Feelings', goals: ['Emotion adjectives', 'Expressing feelings', 'Sympathy expressions', 'Emotional conversations'], targetVocab: 480, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Basic emotions', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Express emotions' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Emotions' }, { type: 'lesson', minutes: 20, content: 'Physical states', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe how you feel' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Feelings' }, { type: 'lesson', minutes: 20, content: 'Sympathy & comfort', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Comfort someone' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Sympathy' }, { type: 'lesson', minutes: 20, content: 'Emotional dialogues', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Role-play emotions' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening: emotional content', moduleId: 'listening', lessonId: 'listening-intro' }, { type: 'output', minutes: 15, content: 'Respond emotionally' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Month 4 review', moduleId: 'review', lessonId: 'review-week1-4' }, { type: 'output', minutes: 15, content: 'Emotional journal' }] }] },
  { week: 17, theme: 'Shopping Advanced', goals: ['Bargaining', 'Returns & exchanges', 'Detailed product descriptions', 'Complex shopping scenarios'], targetVocab: 510, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Advanced shopping vocab', moduleId: 'situations', lessonId: 'situation-shopping' }, { type: 'output', minutes: 15, content: 'Detailed shopping' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Shopping' }, { type: 'lesson', minutes: 20, content: 'Returns and exchanges', moduleId: 'situations', lessonId: 'situation-shopping' }, { type: 'output', minutes: 15, content: 'Return scenario' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Returns' }, { type: 'lesson', minutes: 20, content: 'Product descriptions', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe products' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Products' }, { type: 'lesson', minutes: 20, content: 'Comparing items', moduleId: 'grammar', lessonId: 'grammar-conjugation' }, { type: 'output', minutes: 15, content: 'Compare products' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Full shopping dialogue', moduleId: 'situations', lessonId: 'situation-shopping' }, { type: 'output', minutes: 15, content: 'Extended shopping' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Market vocabulary', moduleId: 'situations', lessonId: 'situation-shopping' }, { type: 'output', minutes: 15, content: 'Market roleplay' }] }] },
  { week: 18, theme: 'Travel & Transportation', goals: ['Travel vocabulary', 'Booking & reservations', 'Airport/station phrases', 'Travel dialogues'], targetVocab: 540, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Travel vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Travel plans' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Travel' }, { type: 'lesson', minutes: 20, content: 'Booking phrases', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Make a booking' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Booking' }, { type: 'lesson', minutes: 20, content: 'Airport vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Airport scenario' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Airport' }, { type: 'lesson', minutes: 20, content: 'Public transport phrases', moduleId: 'situations', lessonId: 'situation-directions' }, { type: 'output', minutes: 15, content: 'Transport dialogue' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Travel dialogues', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Full travel scenario' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Travel problems', moduleId: 'situations', lessonId: 'situation-directions' }, { type: 'output', minutes: 15, content: 'Problem solving' }] }] },
  { week: 19, theme: 'Technology & Communication', goals: ['Tech vocabulary', 'Phone conversations', 'Texting style', 'Digital communication'], targetVocab: 570, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Technology vocab', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe devices' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Tech' }, { type: 'lesson', minutes: 20, content: 'Phone conversations', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Phone dialogue' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Phone' }, { type: 'lesson', minutes: 20, content: 'Korean texting style', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Write text messages' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Texting' }, { type: 'lesson', minutes: 20, content: 'Internet vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe online activities' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Digital communication', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Online interaction' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'SNS vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Social media post' }] }] },
  { week: 20, theme: 'Health & Medical', goals: ['Body parts', 'Symptoms', 'Doctor visit dialogue', 'Health expressions'], targetVocab: 600, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Body vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe body' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Body' }, { type: 'lesson', minutes: 20, content: 'Symptoms and illness', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe symptoms' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Symptoms' }, { type: 'lesson', minutes: 20, content: 'Doctor visit dialogue', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Doctor roleplay' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Medical' }, { type: 'lesson', minutes: 20, content: 'Pharmacy vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Buy medicine' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Health advice', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Give health advice' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week + Month 5 review' }, { type: 'lesson', minutes: 15, content: 'Emergency phrases', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Emergency scenario' }] }] },
  { week: 21, theme: 'Work & Career', goals: ['Job vocabulary', 'Workplace expressions', 'Formal language', 'Work conversations'], targetVocab: 630, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Job vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe jobs' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Jobs' }, { type: 'lesson', minutes: 20, content: 'Workplace phrases', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Office dialogue' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Workplace' }, { type: 'lesson', minutes: 20, content: 'Formal speech practice', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Formal conversation' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Formal' }, { type: 'lesson', minutes: 20, content: 'Business vocabulary', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Business scenario' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Work conversations', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Extended work dialogue' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Email writing', moduleId: 'reading', lessonId: 'reading-practice' }, { type: 'output', minutes: 15, content: 'Write work email' }] }] },
  { week: 22, theme: 'Culture & Traditions', goals: ['Korean holidays', 'Cultural practices', 'Traditional vocabulary', 'Cultural conversations'], targetVocab: 660, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Korean holidays', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Describe holidays' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Holidays' }, { type: 'lesson', minutes: 20, content: 'Traditional customs', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Explain customs' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Customs' }, { type: 'lesson', minutes: 20, content: 'Traditional food', moduleId: 'vocab', lessonId: 'vocab-food' }, { type: 'output', minutes: 15, content: 'Describe traditional food' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'Food' }, { type: 'lesson', minutes: 20, content: 'Age and respect', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Respectful conversation' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Cultural comparison', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Compare cultures' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Cultural Q&A', moduleId: 'culture', lessonId: 'culture-honorifics' }, { type: 'output', minutes: 15, content: 'Culture discussion' }] }] },
  { week: 23, theme: 'Entertainment & Media', goals: ['Entertainment vocabulary', 'Opinions & reviews', 'Media discussions', 'Recommendations'], targetVocab: 690, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Entertainment vocab', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Describe entertainment' }] }, { day: 2, blocks: [{ type: 'review', minutes: 10, content: 'Entertainment' }, { type: 'lesson', minutes: 20, content: 'Giving opinions', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Review something' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'Opinions' }, { type: 'lesson', minutes: 20, content: 'K-drama/K-pop vocab', moduleId: 'vocab', lessonId: 'vocab-greetings' }, { type: 'output', minutes: 15, content: 'Discuss K-content' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'K-content' }, { type: 'lesson', minutes: 20, content: 'Recommendations', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Recommend things' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Media discussions', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Discuss recent media' }] }, { day: 6, blocks: [{ type: 'review', minutes: 15, content: 'Week review' }, { type: 'lesson', minutes: 15, content: 'Casual conversation', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Free discussion' }] }] },
  { week: 24, theme: 'Final Review & Assessment', goals: ['Comprehensive review', 'All grammar patterns', 'Extended conversation', 'Final assessment'], targetVocab: 700, dailySessions: [{ day: 1, blocks: [{ type: 'review', minutes: 15, content: 'Comprehensive SRS' }, { type: 'lesson', minutes: 15, content: 'Grammar review 1', moduleId: 'review', lessonId: 'review-week1-4' }, { type: 'output', minutes: 15, content: 'Grammar practice' }] }, { day: 2, blocks: [{ type: 'review', minutes: 15, content: 'SRS' }, { type: 'lesson', minutes: 15, content: 'Grammar review 2', moduleId: 'review', lessonId: 'review-week1-4' }, { type: 'output', minutes: 15, content: 'Complex sentences' }] }, { day: 3, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Conversation review', moduleId: 'conversation', lessonId: 'convo-intro' }, { type: 'output', minutes: 15, content: 'Extended dialogue' }] }, { day: 4, blocks: [{ type: 'review', minutes: 10, content: 'SRS' }, { type: 'lesson', minutes: 20, content: 'Listening review', moduleId: 'listening', lessonId: 'listening-intro' }, { type: 'output', minutes: 15, content: 'Listening practice' }] }, { day: 5, blocks: [{ type: 'review', minutes: 10, content: 'Final SRS' }, { type: 'lesson', minutes: 20, content: 'Final exam', moduleId: 'final', lessonId: 'final-exam' }, { type: 'output', minutes: 15, content: 'Self-assessment' }] }, { day: 6, blocks: [{ type: 'review', minutes: 10, content: 'Celebration!' }, { type: 'lesson', minutes: 20, content: '6-month reflection', moduleId: 'review', lessonId: 'review-week1-4' }, { type: 'output', minutes: 15, content: 'Record 5-min Korean intro' }] }] }
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
