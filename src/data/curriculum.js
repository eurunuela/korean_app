// Curriculum - Re-exports for backward compatibility
// The actual curricula are in curriculum-korean.js and curriculum-basque.js

import { koreanCurriculum, getModule as getKoreanModule, getLesson as getKoreanLesson, getAllLessons as getAllKoreanLessons } from './curriculum-korean'

// Export Korean curriculum as default for backward compatibility
export const modules = koreanCurriculum.modules

// Re-export helper functions
export const getModule = getKoreanModule
export const getLesson = getKoreanLesson
export const getAllLessons = getAllKoreanLessons

// Also export the full curriculum object
export { koreanCurriculum }

/* ORIGINAL KOREAN CURRICULUM MOVED TO curriculum-korean.js */

const _originalModules = [
  {
    id: 'hangul',
    name: 'Hangul Basics',
    icon: 'ㄱ',
    description: 'Master the Korean alphabet and pronunciation fundamentals',
    lessons: [
      {
        id: 'hangul-vowels',
        title: 'Basic Vowels',
        intro: `Korean vowels follow a systematic visual logic that makes them predictable once you see the pattern.

**THE CORE PATTERN - Vowels are built from 3 elements:**
1. A main line (horizontal ㅡ or vertical ㅣ)
2. A short stroke that points in a direction
3. Position of stroke = sound quality

**THE DIRECTION RULE:**
- Stroke points RIGHT or UP → "bright" vowel (ㅏ, ㅗ)
- Stroke points LEFT or DOWN → "dark" vowel (ㅓ, ㅜ)

**THE VISUAL SYSTEM:**
| Vowel | Structure | Sound |
|-------|-----------|-------|
| ㅏ | vertical + stroke RIGHT | "ah" |
| ㅓ | vertical + stroke LEFT | "uh" |
| ㅗ | horizontal + stroke UP | "oh" |
| ㅜ | horizontal + stroke DOWN | "oo" |
| ㅡ | just horizontal | "eu" |
| ㅣ | just vertical | "ee" |

**WHY THIS MATTERS:** The bright/dark distinction drives verb conjugation. Verbs with bright vowels take -아요, dark vowels take -어요. Learn this pattern now and conjugation becomes logical, not memorization.

**THE FORMULA:** Main line shape + stroke direction = predictable sound.`,
        studyGuide: [
          {
            korean: 'ㅏ',
            romanization: 'a',
            meaning: 'as in "father"',
            usage: 'One of the most common vowels in Korean',
            example: '아버지 (abeoji) - father',
            audio: null
          },
          {
            korean: 'ㅓ',
            romanization: 'eo',
            meaning: 'as in "son" (British)',
            usage: 'Open your mouth slightly less than ㅏ',
            example: '어머니 (eomeoni) - mother',
            commonMistake: 'English speakers often confuse this with "oh"',
            audio: null
          },
          {
            korean: 'ㅗ',
            romanization: 'o',
            meaning: 'as in "go"',
            usage: 'Round your lips',
            example: '오이 (oi) - cucumber',
            audio: null
          },
          {
            korean: 'ㅜ',
            romanization: 'u',
            meaning: 'as in "moon"',
            usage: 'Round your lips tightly',
            example: '우유 (uyu) - milk',
            audio: null
          },
          {
            korean: 'ㅡ',
            romanization: 'eu',
            meaning: 'no English equivalent - like "uh" with spread lips',
            usage: 'Spread your lips and make a sound from the back of your throat',
            example: '으르렁 (eureureong) - growl',
            commonMistake: 'One of the hardest sounds for English speakers',
            audio: null
          },
          {
            korean: 'ㅣ',
            romanization: 'i',
            meaning: 'as in "see"',
            usage: 'Spread your lips and smile',
            example: '이름 (ireum) - name',
            audio: null
          }
        ],
        quiz: [
          {
            question: 'What sound does ㅏ make?',
            options: ['a as in "father"', 'o as in "go"', 'u as in "moon"', 'i as in "see"'],
            correct: 0,
            explanation: 'ㅏ makes the "a" sound as in "father" - one of the most common Korean vowels.'
          },
          {
            question: 'Which vowel requires you to round your lips tightly?',
            options: ['ㅏ', 'ㅓ', 'ㅜ', 'ㅡ'],
            correct: 2,
            explanation: 'ㅜ (u) requires tightly rounded lips, like in "moon".'
          },
          {
            question: 'What is the hardest vowel for English speakers?',
            options: ['ㅏ', 'ㅡ', 'ㅗ', 'ㅣ'],
            correct: 1,
            explanation: 'ㅡ (eu) has no English equivalent and is typically the hardest for English speakers.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice saying each vowel 5 times: ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ',
            type: 'speaking'
          },
          {
            prompt: 'Record yourself saying: 아, 어, 오, 우, 으, 이',
            type: 'recording'
          }
        ]
      },
      {
        id: 'hangul-consonants',
        title: 'Basic Consonants',
        intro: `Korean consonants follow a logical system based on HOW sounds are made in your mouth. King Sejong designed them this way intentionally!

**THE ARTICULATION PATTERN - Consonants are grouped by mouth position:**

| Position | Basic | + Air (aspirated) | + Tension (tense) |
|----------|-------|-------------------|-------------------|
| Back of throat | ㄱ (g/k) | ㅋ (k') | ㄲ (kk) |
| Tongue tip | ㄴ (n) | — | — |
| Tongue tip | ㄷ (d/t) | ㅌ (t') | ㄸ (tt) |
| Lips | ㅁ (m) | — | — |
| Lips | ㅂ (b/p) | ㅍ (p') | ㅃ (pp) |
| Teeth | ㅅ (s) | — | ㅆ (ss) |
| Teeth | ㅈ (j) | ㅊ (ch') | ㅉ (jj) |

**THE THREE-WAY CONTRAST SYSTEM:**
1. **Basic** (ㄱ, ㄷ, ㅂ, ㅈ) = soft, no extra air
2. **Aspirated** (ㅋ, ㅌ, ㅍ, ㅊ) = add extra puff of air (hold paper in front of mouth—it moves)
3. **Tense** (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ) = tighten throat, no air, more forceful

**THE SHAPE LOGIC:**
- Basic shape → represents tongue/mouth position
- Add a stroke → adds aspiration (ㄱ→ㅋ, ㄷ→ㅌ, ㅂ→ㅍ, ㅈ→ㅊ)
- Double it → makes it tense (ㄱ→ㄲ, ㄷ→ㄸ)

**POSITION CHANGES SOUND:**
- ㄱ at start = "g", at end = "k"
- ㄷ at start = "d", at end = "t"
- This is predictable: voiced at start, unvoiced at end.`,
        studyGuide: [
          {
            korean: 'ㄱ',
            romanization: 'g/k',
            meaning: 'Between "g" and "k"',
            usage: 'Sounds like "g" at the start of a word, "k" at the end',
            example: '가다 (gada) - to go',
            commonMistake: 'Not aspirated like English "k"',
            memoryAid: 'Looks like a gun shape'
          },
          {
            korean: 'ㄴ',
            romanization: 'n',
            meaning: 'as in "no"',
            usage: 'Same as English "n"',
            example: '나 (na) - I/me',
            memoryAid: 'Looks like the letter "n" rotated'
          },
          {
            korean: 'ㄷ',
            romanization: 'd/t',
            meaning: 'Between "d" and "t"',
            usage: 'Sounds like "d" at the start, "t" at the end',
            example: '다리 (dari) - leg/bridge',
            memoryAid: 'Looks like a door frame'
          },
          {
            korean: 'ㄹ',
            romanization: 'r/l',
            meaning: 'Between "r" and "l"',
            usage: 'More like "r" between vowels, "l" at end of syllables',
            example: '라면 (ramyeon) - ramen',
            commonMistake: 'Neither a full "r" nor a full "l"'
          },
          {
            korean: 'ㅁ',
            romanization: 'm',
            meaning: 'as in "mom"',
            usage: 'Same as English "m"',
            example: '엄마 (eomma) - mom',
            memoryAid: 'Looks like a square mouth'
          },
          {
            korean: 'ㅂ',
            romanization: 'b/p',
            meaning: 'Between "b" and "p"',
            usage: 'Softer than English "b" or "p"',
            example: '밥 (bap) - rice/meal',
            memoryAid: 'Looks like a bucket'
          },
          {
            korean: 'ㅅ',
            romanization: 's',
            meaning: 'as in "see"',
            usage: 'Before ㅣ sounds more like "sh"',
            example: '사람 (saram) - person',
            commonMistake: '시 sounds like "shi" not "si"'
          },
          {
            korean: 'ㅇ',
            romanization: 'ng (or silent)',
            meaning: 'Silent at start, "ng" at end',
            usage: 'Acts as a placeholder at the beginning of syllables',
            example: '아이 (ai) - child',
            memoryAid: 'Looks like a zero = zero sound at start'
          },
          {
            korean: 'ㅈ',
            romanization: 'j',
            meaning: 'as in "judge"',
            usage: 'Between "j" and "ch"',
            example: '자다 (jada) - to sleep'
          },
          {
            korean: 'ㅎ',
            romanization: 'h',
            meaning: 'as in "hat"',
            usage: 'Same as English "h"',
            example: '하다 (hada) - to do',
            memoryAid: 'Looks like a person wearing a hat'
          }
        ],
        quiz: [
          {
            question: 'Which consonant is silent at the beginning of a syllable?',
            options: ['ㄱ', 'ㅇ', 'ㅎ', 'ㄴ'],
            correct: 1,
            explanation: 'ㅇ is silent at the beginning but makes "ng" sound at the end.'
          },
          {
            question: 'What sound does ㄹ make?',
            options: ['Clear "l" sound', 'Clear "r" sound', 'Between "r" and "l"', 'Silent'],
            correct: 2,
            explanation: 'ㄹ is between "r" and "l" - more like "r" between vowels, "l" at syllable end.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice reading: 가, 나, 다, 라, 마, 바, 사, 아, 자, 하',
            type: 'speaking'
          },
          {
            prompt: 'Write each consonant 3 times by hand, then take a photo',
            type: 'writing'
          }
        ]
      },
      {
        id: 'hangul-syllables',
        title: 'Building Syllables',
        intro: `Korean syllables follow strict structural rules. Once you know the pattern, you can read ANY Korean word—even ones you don't understand.

**THE SYLLABLE FORMULA:**

\`\`\`
SYLLABLE = Initial Consonant + Vowel + (Optional Final Consonant)
         = C + V + (C)
\`\`\`

**THE POSITION RULES (100% consistent):**

| Vowel Type | Structure | Example |
|------------|-----------|---------|
| Vertical (ㅏㅓㅣ) | C to LEFT of V | 가, 너, 미 |
| Horizontal (ㅗㅜㅡ) | C on TOP of V | 고, 누, 그 |
| Final consonant | ALWAYS at bottom | 강, 물, 한 |

**THE READING ALGORITHM:**
1. Find the consonant(s)
2. Find the vowel → determines layout
3. Read: top/left → right → bottom

**EXAMPLES DECODED:**
- 한 = ㅎ(top) + ㅏ(right) + ㄴ(bottom) = h + a + n = "han"
- 국 = ㄱ(top) + ㅜ(middle) + ㄱ(bottom) = g + u + k = "guk"
- 어 = ㅇ(silent) + ㅓ = "eo"

**KEY INSIGHT:** ㅇ at the START is a placeholder (silent). At the END it makes "ng".
- 아 (a) = silent ㅇ + ㅏ
- 강 (gang) = ㄱ + ㅏ + ㅇ(ng)

**THERE ARE NO EXCEPTIONS.** Every Korean word follows this pattern.`,
        studyGuide: [
          {
            korean: 'Syllable Structure',
            romanization: 'CV, CVC',
            meaning: 'Korean syllables are built in blocks',
            usage: 'Every syllable needs at least one consonant and one vowel',
            example: '가 (ga) = ㄱ + ㅏ',
            commonMistake: 'Trying to read left-to-right like English instead of as blocks'
          },
          {
            korean: '받침 (batchim)',
            romanization: 'Final consonant',
            meaning: 'The consonant at the bottom of a syllable block',
            usage: 'Not all syllables have batchim',
            example: '강 (gang) = ㄱ + ㅏ + ㅇ',
            commonMistake: 'Forgetting that batchim changes pronunciation'
          }
        ],
        quiz: [
          {
            question: 'How do you build the syllable 한?',
            options: ['ㅎ + ㅏ + ㄴ', 'ㅎ + ㅏ', 'ㄴ + ㅏ + ㅎ', 'ㅏ + ㄴ'],
            correct: 0,
            explanation: '한 = ㅎ (h) + ㅏ (a) + ㄴ (n) = han'
          }
        ],
        outputPractice: [
          {
            prompt: 'Write these syllables: 한, 국, 어, 사, 람',
            type: 'writing'
          },
          {
            prompt: 'Read aloud: 한국 사람 (Korean person)',
            type: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 'grammar',
    name: 'Basic Grammar',
    icon: '문',
    description: 'Learn essential Korean sentence structure and particles',
    lessons: [
      {
        id: 'grammar-sov',
        title: 'Subject-Object-Verb Order',
        intro: `Korean sentence structure follows one unbreakable rule that makes everything predictable.

**THE FUNDAMENTAL RULE:**
\`\`\`
VERB GOES LAST. ALWAYS.
\`\`\`

**THE SENTENCE FORMULA:**

| English (SVO) | Korean (SOV) |
|---------------|--------------|
| I eat rice | I + rice + eat |
| Subject + Verb + Object | Subject + Object + Verb |

**THE FLEXIBILITY PRINCIPLE:**
Everything EXCEPT the verb can move around. These all mean "I eat rice":
- 나는 밥을 먹어요 (standard)
- 밥을 나는 먹어요 (emphasizing rice)
- 밥을 먹어요 (subject dropped—implied from context)

**THE LISTENING STRATEGY:**
Since the verb is always last, the most important information comes at the END. Train yourself to wait for sentence endings.

**BUILDING SENTENCES - The algorithm:**
1. Start with WHAT you're talking about (topic/subject)
2. Add WHAT is affected (object, if any)
3. End with the ACTION (verb)

**WHY PARTICLES EXIST:**
Because word order is flexible, Korean uses particles (markers) to show each word's role. Think of them as labels:
- 은/는 = "this is the topic"
- 이/가 = "this is the subject"
- 을/를 = "this is the object"

This means you always know what's what, regardless of order.`,
        studyGuide: [
          {
            korean: 'SOV 어순',
            romanization: 'SOV eosun',
            meaning: 'Subject-Object-Verb word order',
            usage: 'Korean sentences end with the verb, unlike English SVO',
            example: '나는 밥을 먹어요 (I rice eat) = I eat rice',
            commonMistake: 'Putting the verb in the middle like English'
          },
          {
            korean: '저는 학생이에요',
            romanization: 'Jeoneun haksaengieyo',
            meaning: 'I am a student',
            usage: 'Basic "I am X" sentence structure',
            example: '저는 미국 사람이에요 = I am American'
          }
        ],
        quiz: [
          {
            question: 'What is the correct word order in Korean?',
            options: ['Subject-Verb-Object', 'Subject-Object-Verb', 'Verb-Subject-Object', 'Object-Subject-Verb'],
            correct: 1,
            explanation: 'Korean uses SOV order: the verb always comes at the end.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Translate to Korean word order: "I coffee drink" → 나는 커피를 마셔요',
            type: 'writing'
          }
        ]
      },
      {
        id: 'grammar-particles',
        title: 'Essential Particles',
        intro: `Particles follow predictable rules. They're not random—they're systematic labels that attach to nouns.

**THE CONSONANT/VOWEL RULE (applies to ALL particles):**
\`\`\`
Word ends in CONSONANT → use form with vowel (은, 이, 을)
Word ends in VOWEL → use form starting with consonant (는, 가, 를)
\`\`\`

| Particle Type | After Consonant | After Vowel | Function |
|---------------|-----------------|-------------|----------|
| Topic | 은 | 는 | "As for X..." |
| Subject | 이 | 가 | "X does..." |
| Object | 을 | 를 | "...does X" |

**EXAMPLES OF THE RULE:**
- 밥 (ends in ㅂ consonant) → 밥**을** 먹어요
- 커피 (ends in vowel) → 커피**를** 마셔요
- 선생님 (ends in ㅁ consonant) → 선생님**이** 가르쳐요
- 저 (ends in vowel) → 저**가** 했어요

**은/는 vs 이/가 - THE LOGIC:**
- **은/는** = "Speaking of X" (introduces topic, contrasts)
- **이/가** = "It is X that..." (identifies, emphasizes)

**THE TEST:** Ask "Who/what specifically?" If that's what you're answering, use 이/가.
- Q: 누가 했어요? (Who did it?) → A: 제**가** 했어요 (I did it)
- Statement: 저**는** 학생이에요 (As for me, I'm a student)

**LOCATION PARTICLES:**
- 에 = static location OR destination ("at" or "to")
- 에서 = where ACTION happens ("at" with verbs)

Rule: If someone is DOING something there → use 에서.`,
        studyGuide: [
          {
            korean: '은/는',
            romanization: 'eun/neun',
            meaning: 'Topic marker',
            usage: '은 after consonant, 는 after vowel. Marks the topic of discussion.',
            example: '저는 (as for me), 날씨는 (as for the weather)',
            commonMistake: 'Confusing with subject marker 이/가'
          },
          {
            korean: '이/가',
            romanization: 'i/ga',
            meaning: 'Subject marker',
            usage: '이 after consonant, 가 after vowel. Marks the grammatical subject.',
            example: '비가 와요 (Rain is coming)',
            commonMistake: 'Using interchangeably with 은/는'
          },
          {
            korean: '을/를',
            romanization: 'eul/reul',
            meaning: 'Object marker',
            usage: '을 after consonant, 를 after vowel. Marks the direct object.',
            example: '밥을 먹어요 (eat rice), 커피를 마셔요 (drink coffee)'
          },
          {
            korean: '에',
            romanization: 'e',
            meaning: 'Location/time marker',
            usage: 'Indicates location (at/to) or time (at/on)',
            example: '학교에 가요 (go to school), 3시에 (at 3 o\'clock)'
          },
          {
            korean: '에서',
            romanization: 'eseo',
            meaning: 'Action location marker',
            usage: 'Where an action takes place (at/in)',
            example: '카페에서 공부해요 (study at the cafe)',
            commonMistake: 'Using 에 instead of 에서 for action locations'
          }
        ],
        quiz: [
          {
            question: 'Which particle marks the topic of a sentence?',
            options: ['이/가', '을/를', '은/는', '에'],
            correct: 2,
            explanation: '은/는 is the topic marker, used to indicate what the sentence is about.'
          },
          {
            question: '밥___ 먹어요 - which particle fills the blank?',
            options: ['은', '이', '을', '에'],
            correct: 2,
            explanation: '을 is the object marker used after consonants. 밥을 먹어요 = eat rice.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Fill in particles: 저___ 한국어___ 공부해요 (I study Korean)',
            type: 'writing',
            answer: '저는 한국어를 공부해요'
          },
          {
            prompt: 'Say: "I drink coffee at the cafe" in Korean',
            type: 'speaking',
            hint: '저는 카페에서 커피를 마셔요'
          }
        ]
      },
      {
        id: 'grammar-conjugation',
        title: 'Basic Verb Conjugation',
        intro: `Korean verb conjugation is almost entirely rule-based. Learn the patterns and you can conjugate thousands of verbs.

**THE UNIVERSAL CONJUGATION ALGORITHM:**
\`\`\`
1. Take dictionary form (ends in -다)
2. Remove -다 to get the STEM
3. Check the stem's LAST VOWEL
4. Apply vowel harmony rule
5. Add ending
\`\`\`

**THE VOWEL HARMONY RULE:**
| Last vowel in stem | Add this | Why |
|--------------------|----------|-----|
| ㅏ or ㅗ (bright) | -아요 | Bright + bright |
| Anything else (dark) | -어요 | Dark + dark |
| 하다 verbs | -해요 | Special contraction |

**APPLYING THE ALGORITHM:**
| Dictionary | Stem | Last Vowel | Category | Result |
|------------|------|------------|----------|--------|
| 가다 (go) | 가 | ㅏ | bright | 가 + 아요 = 가요 |
| 오다 (come) | 오 | ㅗ | bright | 오 + 아요 = 와요* |
| 먹다 (eat) | 먹 | ㅓ | dark | 먹 + 어요 = 먹어요 |
| 마시다 (drink) | 마시 | ㅣ | dark | 마시 + 어요 = 마셔요* |
| 공부하다 (study) | 공부하 | 하 | 하다 | 공부해요 |

*Contractions occur when vowels merge (ㅗ+ㅏ=ㅘ, ㅣ+ㅓ=ㅕ)

**THE TENSE PATTERN:**
| Tense | Formula | Example (먹다) |
|-------|---------|----------------|
| Present | stem + 아/어요 | 먹어요 |
| Past | stem + 았/었어요 | 먹었어요 |
| Future | stem + (으)ㄹ 거예요 | 먹을 거예요 |

Past tense just inserts 았/었 before 어요. Same vowel harmony applies!`,
        studyGuide: [
          {
            korean: '-아요/-어요',
            romanization: '-ayo/-eoyo',
            meaning: 'Polite present tense ending',
            usage: '-아요 after bright vowels (ㅏ,ㅗ), -어요 after dark vowels',
            example: '가다 → 가요, 먹다 → 먹어요',
            commonMistake: 'Forgetting vowel harmony rules'
          },
          {
            korean: '-았어요/-었어요',
            romanization: '-asseoyo/-eosseoyo',
            meaning: 'Polite past tense ending',
            usage: 'Add 았/었 before 어요 based on vowel harmony',
            example: '가다 → 갔어요, 먹다 → 먹었어요'
          },
          {
            korean: '-을/ㄹ 거예요',
            romanization: '-eul/l geoyeyo',
            meaning: 'Future tense (will do)',
            usage: '을 after consonant, ㄹ after vowel',
            example: '먹다 → 먹을 거예요, 가다 → 갈 거예요'
          }
        ],
        quiz: [
          {
            question: 'How do you conjugate 먹다 (to eat) in polite present?',
            options: ['먹아요', '먹어요', '먹요', '먹이요'],
            correct: 1,
            explanation: '먹 has the vowel ㅓ (dark vowel), so we add -어요 → 먹어요'
          }
        ],
        outputPractice: [
          {
            prompt: 'Conjugate these verbs in present tense: 가다, 오다, 하다, 먹다, 마시다',
            type: 'writing',
            answer: '가요, 와요, 해요, 먹어요, 마셔요'
          }
        ]
      },
      {
        id: 'grammar-negation',
        title: 'Negation Patterns',
        intro: `Korean has exactly TWO ways to make negatives, and they follow clear patterns.

**THE TWO NEGATION SYSTEMS:**

| Method | Structure | When to Use |
|--------|-----------|-------------|
| 안 (an) | 안 + verb | Simple, casual negation |
| -지 않다 | verb stem + 지 않다 | Formal, emphatic negation |

**METHOD 1: 안 (Short Negation)**
\`\`\`
안 + Verb
\`\`\`
- 먹어요 → 안 먹어요 (don't eat)
- 가요 → 안 가요 (don't go)
- 해요 → 안 해요 (don't do)

**METHOD 2: -지 않다 (Long Negation)**
\`\`\`
Verb Stem + 지 않아요
\`\`\`
- 먹다 → 먹지 않아요 (don't eat)
- 가다 → 가지 않아요 (don't go)
- 하다 → 하지 않아요 (don't do)

**THEY MEAN THE SAME THING.** 안 먹어요 = 먹지 않아요

**SPECIAL CASE: 못 (Cannot)**
For "can't" instead of "don't":
- 못 + verb: 못 먹어요 (can't eat)
- verb + 지 못하다: 먹지 못해요 (can't eat)

**THE EXISTENCE NEGATIVE: 없다**
- 있다 (exist/have) → 없다 (not exist/don't have)
- 돈이 있어요 (I have money) → 돈이 없어요 (I don't have money)

**THE PATTERN RULE:**
\`\`\`
Action verbs: 안/못 + verb OR verb + 지 않다/못하다
있다/없다: Just use 없다 (not "안 있다")
\`\`\``,
        studyGuide: [
          {
            korean: '안',
            romanization: 'an',
            meaning: 'Not (simple negation)',
            usage: 'Place directly before the verb',
            example: '안 먹어요 (don\'t eat), 안 가요 (don\'t go)'
          },
          {
            korean: '-지 않다',
            romanization: '-ji anta',
            meaning: 'Not (formal negation)',
            usage: 'Attach to verb stem, then conjugate 않다',
            example: '먹지 않아요, 가지 않아요'
          },
          {
            korean: '못',
            romanization: 'mot',
            meaning: 'Cannot',
            usage: 'Indicates inability, not choice',
            example: '못 먹어요 (can\'t eat—physically unable)'
          },
          {
            korean: '없다',
            romanization: 'eopda',
            meaning: 'To not exist / to not have',
            usage: 'Opposite of 있다',
            example: '시간이 없어요 (I don\'t have time)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I don\'t eat" using the short form?',
            options: ['먹지 않아요', '안 먹어요', '못 먹어요', '먹어요 안'],
            correct: 1,
            explanation: '안 goes BEFORE the verb: 안 먹어요'
          },
          {
            question: 'What\'s the difference between 안 and 못?',
            options: ['No difference', '안 = don\'t, 못 = can\'t', '안 = past, 못 = present', '안 = formal, 못 = casual'],
            correct: 1,
            explanation: '안 indicates choice (don\'t), 못 indicates inability (can\'t)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Convert to negative: 가요, 먹어요, 마셔요, 공부해요',
            type: 'writing',
            answer: '안 가요, 안 먹어요, 안 마셔요, 안 공부해요 (or 가지 않아요, etc.)'
          }
        ]
      },
      {
        id: 'grammar-questions',
        title: 'Question Formation',
        intro: `Korean questions are remarkably simple—often just intonation changes. Here are the systematic patterns.

**THE SIMPLEST PATTERN: Rising Intonation**
\`\`\`
Statement + ? = Question (just raise your voice at the end)
\`\`\`
- 밥 먹어요. (You eat rice.) → 밥 먹어요? (Do you eat rice?)
- 학생이에요. (I'm a student.) → 학생이에요? (Are you a student?)

**QUESTION WORDS (의문사):**

| Korean | Meaning | Pattern |
|--------|---------|---------|
| 뭐 | what | 뭐 + verb? |
| 누구 | who | 누구 + particle + verb? |
| 어디 | where | 어디 + 에/에서 + verb? |
| 언제 | when | 언제 + verb? |
| 왜 | why | 왜 + verb? |
| 어떻게 | how | 어떻게 + verb? |
| 얼마 | how much | 얼마 + 예요? |
| 몇 | how many | 몇 + counter? |

**THE KEY INSIGHT:** Korean question words stay IN PLACE. Don't move them to the front like English!

English: **What** do you eat?
Korean: 뭐 먹어요? (You eat **what**?)

**PATTERN EXAMPLES:**
- 뭐 해요? (What are you doing?)
- 어디에 가요? (Where are you going?)
- 언제 와요? (When are you coming?)
- 왜 안 먹어요? (Why don't you eat?)
- 이거 얼마예요? (How much is this?)
- 몇 시예요? (What time is it?)

**YES/NO QUESTIONS:** Just use rising intonation on any statement.`,
        studyGuide: [
          {
            korean: '뭐',
            romanization: 'mwo',
            meaning: 'What',
            usage: 'Replaces the unknown thing in the sentence',
            example: '뭐 먹어요? (What are you eating?)'
          },
          {
            korean: '어디',
            romanization: 'eodi',
            meaning: 'Where',
            usage: 'Used with location particles 에 or 에서',
            example: '어디에 가요? (Where are you going?)'
          },
          {
            korean: '언제',
            romanization: 'eonje',
            meaning: 'When',
            usage: 'Replaces time expressions',
            example: '언제 와요? (When are you coming?)'
          },
          {
            korean: '왜',
            romanization: 'wae',
            meaning: 'Why',
            usage: 'Asks for reason',
            example: '왜요? (Why?) / 왜 안 해요? (Why don\'t you do it?)'
          },
          {
            korean: '어떻게',
            romanization: 'eotteoke',
            meaning: 'How',
            usage: 'Asks about method or manner',
            example: '어떻게 해요? (How do you do it?)'
          },
          {
            korean: '몇',
            romanization: 'myeot',
            meaning: 'How many / What (number)',
            usage: 'Used with counters',
            example: '몇 시예요? (What time?), 몇 개? (How many?)'
          }
        ],
        quiz: [
          {
            question: 'How do you ask "Where are you going?"',
            options: ['가요 어디에?', '어디에 가요?', '어디 가요에?', '가요 어디?'],
            correct: 1,
            explanation: 'Question word stays in natural position: 어디에 가요?'
          },
          {
            question: 'How do you turn "밥 먹어요" into a yes/no question?',
            options: ['밥 먹어요 네?', '밥 먹어요?', '네 밥 먹어요?', '먹어요 밥?'],
            correct: 1,
            explanation: 'Just add rising intonation (question mark): 밥 먹어요?'
          }
        ],
        outputPractice: [
          {
            prompt: 'Form questions: What is this? Where is the bathroom? When do you study?',
            type: 'writing',
            answer: '이거 뭐예요? 화장실이 어디예요? 언제 공부해요?'
          }
        ]
      },
      {
        id: 'grammar-connectors',
        title: 'Sentence Connectors',
        intro: `Korean connects ideas by attaching endings to verb stems. These patterns let you build complex sentences.

**THE CONNECTOR FORMULA:**
\`\`\`
Verb Stem + Connector Ending + Next Clause
\`\`\`

**ESSENTIAL CONNECTORS:**

| Ending | Meaning | Example |
|--------|---------|---------|
| -고 | and (then) | 먹고 자요 (eat and sleep) |
| -지만 | but | 비싸지만 맛있어요 (expensive but delicious) |
| -어서/아서 | so, because | 배고파서 먹어요 (hungry so I eat) |
| -(으)면 | if/when | 시간이 있으면 가요 (if I have time, I go) |
| -(으)니까 | because (emphasis) | 바쁘니까 못 가요 (because I'm busy, I can't go) |

**THE -고 PATTERN (Sequential Actions):**
\`\`\`
Verb Stem + 고 = "and" / "and then"
\`\`\`
- 밥을 먹고 커피를 마셔요 (I eat rice and drink coffee)
- 일어나고 샤워해요 (I wake up and shower)

**THE -지만 PATTERN (Contrast):**
\`\`\`
Verb Stem + 지만 = "but"
\`\`\`
- 바쁘지만 행복해요 (I'm busy but happy)
- 어렵지만 재미있어요 (It's difficult but interesting)

**THE -어서/아서 PATTERN (Cause/Reason):**
Same vowel harmony as conjugation!
- Bright vowel: 아서 (가다 → 가서)
- Dark vowel: 어서 (먹다 → 먹어서)
- 하다: 해서

Examples:
- 피곤해서 잤어요 (I was tired so I slept)
- 맛있어서 많이 먹었어요 (It was delicious so I ate a lot)

**THE -(으)면 PATTERN (Conditional):**
\`\`\`
Consonant ending: 으면
Vowel ending: 면
\`\`\`
- 먹다 → 먹으면 (if you eat)
- 가다 → 가면 (if you go)
- 시간이 있으면 영화 봐요 (If I have time, I watch movies)`,
        studyGuide: [
          {
            korean: '-고',
            romanization: '-go',
            meaning: 'And / And then',
            usage: 'Connects actions in sequence, no vowel harmony needed',
            example: '먹고 자요 (eat and sleep)'
          },
          {
            korean: '-지만',
            romanization: '-jiman',
            meaning: 'But / However',
            usage: 'Shows contrast between two clauses',
            example: '춥지만 좋아요 (It\'s cold but nice)'
          },
          {
            korean: '-어서/아서',
            romanization: '-eoseo/aseo',
            meaning: 'So / Because',
            usage: 'Follows vowel harmony rules',
            example: '배고파서 먹어요 (I\'m hungry so I eat)'
          },
          {
            korean: '-(으)면',
            romanization: '-(eu)myeon',
            meaning: 'If / When',
            usage: '으면 after consonant, 면 after vowel',
            example: '시간 있으면 만나요 (If you have time, let\'s meet)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I eat and sleep"?',
            options: ['먹어서 자요', '먹고 자요', '먹지만 자요', '먹으면 자요'],
            correct: 1,
            explanation: '-고 connects sequential actions: 먹고 자요'
          },
          {
            question: 'Complete: 피곤___ 일찍 잤어요 (I was tired so I slept early)',
            options: ['하고', '지만', '해서', '하면'],
            correct: 2,
            explanation: '-해서 shows cause/reason: 피곤해서 (because I was tired)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Connect these ideas: "I study Korean" + "it\'s difficult but fun"',
            type: 'writing',
            answer: '한국어를 공부해요. 어렵지만 재미있어요.'
          }
        ]
      },
      {
        id: 'grammar-want-can',
        title: 'Expressing Want & Ability',
        intro: `Korean uses specific patterns for expressing desires and abilities. These are among the most useful grammar structures.

**WANTING TO DO SOMETHING: -고 싶다**
\`\`\`
Verb Stem + 고 싶다 = "want to [verb]"
\`\`\`

| Base | Want to... |
|------|------------|
| 먹다 (eat) | 먹고 싶어요 (want to eat) |
| 가다 (go) | 가고 싶어요 (want to go) |
| 보다 (see) | 보고 싶어요 (want to see) |
| 자다 (sleep) | 자고 싶어요 (want to sleep) |

**NEGATIVE WANT:**
- 가고 싶지 않아요 (don't want to go)
- 안 가고 싶어요 (don't want to go) — same meaning

**ABILITY: -(으)ㄹ 수 있다/없다**
\`\`\`
Verb Stem + (으)ㄹ 수 있다 = "can [verb]"
Verb Stem + (으)ㄹ 수 없다 = "cannot [verb]"
\`\`\`

| Ending Rule | Pattern |
|-------------|---------|
| After consonant | 으ㄹ 수 있다 |
| After vowel | ㄹ 수 있다 |

Examples:
- 먹다 → 먹을 수 있어요 (can eat)
- 가다 → 갈 수 있어요 (can go)
- 하다 → 할 수 있어요 (can do)

**INABILITY:**
- 먹을 수 없어요 (cannot eat)
- 갈 수 없어요 (cannot go)
- OR simply: 못 먹어요, 못 가요 (shorter form)

**WANTING THINGS (Nouns): -을/를 원하다 or 갖고 싶다**
- 커피를 원해요 (I want coffee)
- 새 차를 갖고 싶어요 (I want to have a new car)

**THE PATTERN SUMMARY:**
| Want to... | Can... | Can't... |
|------------|--------|----------|
| V + 고 싶다 | V + (으)ㄹ 수 있다 | V + (으)ㄹ 수 없다 / 못 V |`,
        studyGuide: [
          {
            korean: '-고 싶다',
            romanization: '-go sipda',
            meaning: 'Want to (do something)',
            usage: 'Attach to verb stem',
            example: '먹고 싶어요 (I want to eat)'
          },
          {
            korean: '-(으)ㄹ 수 있다',
            romanization: '-(eu)l su itda',
            meaning: 'Can (do something)',
            usage: '을 after consonant, ㄹ after vowel',
            example: '할 수 있어요 (I can do it)'
          },
          {
            korean: '-(으)ㄹ 수 없다',
            romanization: '-(eu)l su eopda',
            meaning: 'Cannot (do something)',
            usage: 'Same pattern with 없다',
            example: '갈 수 없어요 (I cannot go)'
          },
          {
            korean: '못',
            romanization: 'mot',
            meaning: 'Cannot (short form)',
            usage: 'Place before verb',
            example: '못 해요 (I can\'t do it)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I want to eat"?',
            options: ['먹을 수 있어요', '먹고 싶어요', '먹어서요', '먹지만요'],
            correct: 1,
            explanation: '-고 싶다 expresses desire: 먹고 싶어요'
          },
          {
            question: 'How do you say "I can speak Korean"?',
            options: ['한국어 말하고 싶어요', '한국어 할 수 있어요', '한국어를 말해요', '한국어를 할 수 있어요'],
            correct: 3,
            explanation: '한국어를 할 수 있어요 uses -(으)ㄹ 수 있다 for ability'
          }
        ],
        outputPractice: [
          {
            prompt: 'Express: I want to go to Korea. I can speak a little Korean.',
            type: 'writing',
            answer: '한국에 가고 싶어요. 한국어를 조금 할 수 있어요.'
          }
        ]
      },
      {
        id: 'grammar-adjectives',
        title: 'Adjectives as Verbs',
        intro: `In Korean, adjectives behave like verbs. This is a key insight that simplifies grammar significantly.

**THE CORE CONCEPT:**
Korean "adjectives" are actually descriptive verbs. They conjugate just like action verbs!

| English | Korean | Type |
|---------|--------|------|
| to be big | 크다 | Descriptive verb |
| to be small | 작다 | Descriptive verb |
| to be delicious | 맛있다 | Descriptive verb |

**CONJUGATION IS IDENTICAL TO ACTION VERBS:**
\`\`\`
Dictionary form: 크다 (to be big)
Present: 커요 (is big)
Past: 컸어요 (was big)
Future: 클 거예요 (will be big)
\`\`\`

**THE SAME VOWEL HARMONY APPLIES:**
- 작다 → 작아요 (ㅏ is bright → 아요)
- 크다 → 커요 (ㅡ is dark → 어요)
- 좋다 → 좋아요 (ㅗ is bright → 아요)
- 맛있다 → 맛있어요 (ㅣ is dark → 어요)

**MODIFYING NOUNS (Adjective Form):**
To put an adjective BEFORE a noun:
\`\`\`
Stem + (으)ㄴ + Noun
\`\`\`

| Adjective | Modifier Form | With Noun |
|-----------|---------------|-----------|
| 크다 (big) | 큰 | 큰 집 (big house) |
| 작다 (small) | 작은 | 작은 방 (small room) |
| 맛있다 (delicious) | 맛있는 | 맛있는 음식 (delicious food) |

**RULE FOR -(으)ㄴ:**
- Consonant ending: 은 (작다 → 작은)
- Vowel ending: ㄴ (크다 → 큰)
- 있다/없다: 는 (맛있다 → 맛있는)

**WHY THIS MATTERS:**
Once you understand that adjectives ARE verbs, you don't need separate adjective rules. Just apply verb patterns!`,
        studyGuide: [
          {
            korean: '크다 / 작다',
            romanization: 'keuda / jakda',
            meaning: 'To be big / To be small',
            usage: 'Conjugates like a verb',
            example: '커요 (is big), 작아요 (is small)'
          },
          {
            korean: '좋다 / 나쁘다',
            romanization: 'jota / nappeuda',
            meaning: 'To be good / To be bad',
            usage: 'Conjugates like a verb',
            example: '좋아요 (is good), 나빠요 (is bad)'
          },
          {
            korean: '맛있다 / 맛없다',
            romanization: 'masitda / maeopsda',
            meaning: 'To be delicious / To be not delicious',
            usage: 'Note: 있다/없다 compounds',
            example: '맛있어요 (is delicious)'
          },
          {
            korean: '-(으)ㄴ',
            romanization: '-(eu)n',
            meaning: 'Adjective modifier ending',
            usage: 'Makes adjective modify a noun',
            example: '큰 집 (big house), 작은 방 (small room)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "The food is delicious"?',
            options: ['음식 맛있다', '음식이 맛있어요', '맛있는 음식', '음식 맛있는'],
            correct: 1,
            explanation: 'Adjectives conjugate like verbs: 음식이 맛있어요'
          },
          {
            question: 'How do you say "big house"?',
            options: ['크다 집', '커요 집', '큰 집', '크 집'],
            correct: 2,
            explanation: 'Use -(으)ㄴ before nouns: 크다 → 큰 집'
          }
        ],
        outputPractice: [
          {
            prompt: 'Describe: The room is small. The coffee is hot. It\'s a delicious meal.',
            type: 'writing',
            answer: '방이 작아요. 커피가 뜨거워요. 맛있는 음식이에요.'
          }
        ]
      }
    ]
  },
  {
    id: 'vocab',
    name: 'Essential Vocabulary',
    icon: '어',
    description: 'Build your core Korean vocabulary',
    lessons: [
      {
        id: 'vocab-greetings',
        title: 'Greetings & Basic Expressions',
        intro: `Korean expressions follow predictable politeness patterns. Learn the system and you can adjust formality for any situation.

**THE POLITENESS LADDER - A Systematic Pattern:**
Korean has three main levels that apply consistently across expressions:

| Level | Verb Ending | Usage | Example (Thank you) |
|-------|-------------|-------|---------------------|
| Casual (반말) | -해, -어 | Close friends, kids | 고마워 |
| Polite (해요체) | -해요, -어요 | Default, strangers | 고마워요 |
| Formal (합니다) | -합니다 | Business, very formal | 감사합니다 |

**THE PATTERN APPLIES TO ALL EXPRESSIONS:**

| Meaning | Casual | Polite | Formal |
|---------|--------|--------|--------|
| Hello/Bye | 안녕 | 안녕하세요 | 안녕하십니까 |
| Thanks | 고마워 | 고마워요 | 감사합니다 |
| Sorry | 미안해 | 미안해요 | 죄송합니다 |
| Excuse me | — | 저기요 | 실례합니다 |

**THE LOGIC:**
- Adding 요 → makes it polite
- Adding 합니다/습니다 → makes it formal
- Root + 요 is the safe default for learners

**GREETING STRUCTURE PATTERN:**
Most greetings come from verbs that were "frozen" into set phrases:
- 안녕하세요 = 안녕 (peace) + 하세요 (do you have?) → "Are you at peace?"
- 감사합니다 = 감사 (gratitude) + 합니다 (I do) → "I do gratitude"

Understanding this helps you see that Korean expressions are logical, not random phrases to memorize.`,
        studyGuide: [
          {
            korean: '안녕하세요',
            romanization: 'annyeonghaseyo',
            meaning: 'Hello (polite)',
            usage: 'Standard greeting for most situations',
            example: 'Meeting someone: 안녕하세요!'
          },
          {
            korean: '감사합니다',
            romanization: 'gamsahamnida',
            meaning: 'Thank you (formal)',
            usage: 'Most polite form of thank you',
            example: 'After receiving help: 감사합니다!'
          },
          {
            korean: '고마워요',
            romanization: 'gomawoyo',
            meaning: 'Thank you (polite casual)',
            usage: 'Less formal than 감사합니다',
            example: 'To friends: 고마워요!'
          },
          {
            korean: '죄송합니다',
            romanization: 'joesonghamnida',
            meaning: 'I\'m sorry (formal)',
            usage: 'For apologies in formal situations',
            example: 'Apologizing: 죄송합니다'
          },
          {
            korean: '네 / 아니요',
            romanization: 'ne / aniyo',
            meaning: 'Yes / No',
            usage: 'Basic responses',
            example: '커피 마실래요? 네! / 아니요'
          },
          {
            korean: '주세요',
            romanization: 'juseyo',
            meaning: 'Please give me',
            usage: 'For requesting things politely',
            example: '물 주세요 (Water please)',
            commonMistake: 'Using for non-giving requests'
          }
        ],
        quiz: [
          {
            question: 'How do you say "Thank you" formally?',
            options: ['고마워요', '감사합니다', '안녕하세요', '주세요'],
            correct: 1,
            explanation: '감사합니다 is the most formal/polite way to say thank you.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice a greeting exchange: Hello, how are you? I\'m fine, thank you.',
            type: 'speaking',
            hint: '안녕하세요, 잘 지내세요? 네, 잘 지내요. 감사합니다.'
          }
        ]
      },
      {
        id: 'vocab-numbers',
        title: 'Numbers (Native & Sino-Korean)',
        intro: `Korean has two number systems, but each follows predictable patterns for when to use which.

**THE DECISION RULE:**
\`\`\`
Ask: "Is this countable/physical?"
  YES → Native Korean (하나, 둘, 셋)
  NO → Sino-Korean (일, 이, 삼)
\`\`\`

**SINO-KOREAN SYSTEM (일, 이, 삼...) - The "Official" Numbers:**
| Use Case | Pattern | Example |
|----------|---------|---------|
| Money | 숫자 + 원 | 오천 원 (5,000 won) |
| Dates | 숫자 + 월/일 | 삼월 십오일 (March 15) |
| Phone numbers | Digit by digit | 공일공-삼사이오 |
| Minutes | 숫자 + 분 | 삼십 분 (30 minutes) |
| Floor numbers | 숫자 + 층 | 오 층 (5th floor) |

**NATIVE KOREAN SYSTEM (하나, 둘, 셋...) - The "Counting" Numbers:**
| Use Case | Pattern | Example |
|----------|---------|---------|
| Counting items | 숫자 + counter | 사과 두 개 (2 apples) |
| Age | 숫자 + 살 | 스물다섯 살 (25 years old) |
| Hours | 숫자 + 시 | 세 시 (3 o'clock) |
| People | 숫자 + 명/분 | 네 명 (4 people) |

**THE TRUNCATION RULE (Native numbers before counters):**
하나→한, 둘→두, 셋→세, 넷→네, 스물→스무
- 하나 개 ❌ → 한 개 ✓

**TIME USES BOTH (The Mixed Pattern):**
\`\`\`
[Native] 시 [Sino-Korean] 분
\`\`\`
- 3:30 = 세 시 삼십 분 (Native hour + Sino minute)

**THE LARGER NUMBER PATTERN:**
Both systems use base-10 logic:
- 십 (10), 백 (100), 천 (1000), 만 (10,000)
- 열 (10), 스물 (20), 서른 (30), 마흔 (40), 쉰 (50)`,
        studyGuide: [
          {
            korean: '하나, 둘, 셋, 넷, 다섯',
            romanization: 'hana, dul, set, net, daseot',
            meaning: '1, 2, 3, 4, 5 (Native Korean)',
            usage: 'Used for counting items, age, hours',
            example: '사과 두 개 (two apples)'
          },
          {
            korean: '여섯, 일곱, 여덟, 아홉, 열',
            romanization: 'yeoseot, ilgop, yeodeol, ahop, yeol',
            meaning: '6, 7, 8, 9, 10 (Native Korean)',
            usage: 'Continues the native counting system',
            example: '열 시 (10 o\'clock)'
          },
          {
            korean: '일, 이, 삼, 사, 오',
            romanization: 'il, i, sam, sa, o',
            meaning: '1, 2, 3, 4, 5 (Sino-Korean)',
            usage: 'Used for dates, phone numbers, money, minutes',
            example: '삼월 (March), 오천 원 (5000 won)'
          },
          {
            korean: '육, 칠, 팔, 구, 십',
            romanization: 'yuk, chil, pal, gu, sip',
            meaning: '6, 7, 8, 9, 10 (Sino-Korean)',
            usage: 'Continues the Sino-Korean system',
            example: '십이월 (December)'
          }
        ],
        quiz: [
          {
            question: 'Which number system is used for telling hours?',
            options: ['Sino-Korean', 'Native Korean', 'Either one', 'Neither'],
            correct: 1,
            explanation: 'Native Korean numbers are used for hours (한 시, 두 시, etc.)'
          },
          {
            question: 'How do you say "March" in Korean?',
            options: ['셋월', '삼월', '세월', '삼개월'],
            correct: 1,
            explanation: 'Months use Sino-Korean numbers: 삼월 (sam-wol) = March'
          }
        ],
        outputPractice: [
          {
            prompt: 'Count from 1-10 in both Native Korean and Sino-Korean',
            type: 'speaking'
          },
          {
            prompt: 'Say these times: 3:00, 7:30, 10:15',
            type: 'speaking',
            hint: '세 시, 일곱 시 삼십 분, 열 시 십오 분'
          }
        ]
      },
      {
        id: 'vocab-food',
        title: 'Food & Dining',
        intro: `Food vocabulary reveals systematic patterns in Korean—especially around counters, loan words, and the 주세요 request structure.

**THE REQUEST PATTERN:**
\`\`\`
[Thing] + 주세요 = "Please give me [thing]"
\`\`\`
This is your universal ordering template. Everything follows this pattern.

**THE ORDERING FORMULA:**
\`\`\`
[Item] + [Native Korean Number] + [Counter] + 주세요
\`\`\`

| Item | Number | Counter | Full Order |
|------|--------|---------|------------|
| 비빔밥 | 두 (2) | 개 (general) | 비빔밥 두 개 주세요 |
| 커피 | 한 (1) | 잔 (cups) | 커피 한 잔 주세요 |
| 맥주 | 세 (3) | 병 (bottles) | 맥주 세 병 주세요 |
| 물 | — | — | 물 주세요 |

**THE COUNTER SYSTEM (Logical Categories):**
| Counter | Category | Examples |
|---------|----------|----------|
| 개 | General items | food portions, objects |
| 잔 | Drinks in cups | 커피, 차, 물 |
| 병 | Bottles | 맥주, 소주, 물 |
| 그릇 | Bowls | 밥, 국, 찌개 |
| 인분 | Servings (BBQ) | 삼겹살 2인분 |

**LOAN WORD PATTERN:**
Many food words are borrowed from English and sound similar:
- 커피 (keopi) = coffee
- 메뉴 (menyu) = menu
- 주스 (juseu) = juice
- 케이크 (keikeu) = cake

**THE 있다/없다 PATTERN FOR AVAILABILITY:**
- 이거 있어요? (Do you have this?)
- 네, 있어요 / 아니요, 없어요 (Yes we have it / No we don't)

**TASTE ADJECTIVES (Verb Pattern):**
맛있다 (delicious) and 맛없다 (not delicious) are compound adjectives:
- 맛 (taste) + 있다 (exist) = taste exists = delicious
- 맛 (taste) + 없다 (not exist) = taste doesn't exist = not tasty`,
        studyGuide: [
          {
            korean: '밥',
            romanization: 'bap',
            meaning: 'Rice / Meal',
            usage: 'The staple food; also means "meal" in general',
            example: '밥 먹었어요? (Have you eaten?)'
          },
          {
            korean: '물',
            romanization: 'mul',
            meaning: 'Water',
            usage: 'Essential vocabulary for restaurants',
            example: '물 주세요 (Water please)'
          },
          {
            korean: '커피',
            romanization: 'keopi',
            meaning: 'Coffee',
            usage: 'Loan word from English',
            example: '아이스 커피 한 잔 주세요'
          },
          {
            korean: '맛있어요',
            romanization: 'masisseoyo',
            meaning: 'It\'s delicious',
            usage: 'Complimenting food',
            example: '이 음식 정말 맛있어요!'
          },
          {
            korean: '메뉴',
            romanization: 'menyu',
            meaning: 'Menu',
            usage: 'Loan word',
            example: '메뉴 주세요 (Menu please)'
          },
          {
            korean: '계산이요',
            romanization: 'gyesaniyo',
            meaning: 'Check please / Bill please',
            usage: 'Asking for the bill at a restaurant',
            example: 'Ready to pay: 계산이요!'
          }
        ],
        quiz: [
          {
            question: 'How do you ask for water at a restaurant?',
            options: ['물 있어요?', '물 주세요', '물 마셔요', '물이에요'],
            correct: 1,
            explanation: '물 주세요 = Water please (requesting water)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Role-play: Order coffee and water at a cafe',
            type: 'speaking',
            hint: '안녕하세요! 커피하고 물 주세요.'
          }
        ]
      }
    ]
  },
  {
    id: 'conversation',
    name: 'Conversational Practice',
    icon: '화',
    description: 'Practice real-world Korean dialogues',
    lessons: [
      {
        id: 'convo-intro',
        title: 'Self Introduction',
        intro: `Self-introduction (자기소개, jagisogae) is one of the most important skills in Korean culture. Koreans often introduce themselves formally, even in casual settings.

**The basic self-introduction template:**
1. Greeting: 안녕하세요
2. Name: 저는 [name]이에요/예요
3. Nationality: [country] 사람이에요
4. Occupation: [job]이에요/예요 or [job]을/를 해요
5. Nice to meet you: 만나서 반가워요

**Name endings:**
- 이에요 after consonant: 저는 민수**이에요**
- 예요 after vowel: 저는 사라**예요**

**Honorific name suffix - 씨 (ssi):**
Add 씨 after someone's name to be polite: 민수 씨, 사라 씨
Never use 씨 with your own name—that's arrogant!

**Cultural tip:** In Korean business culture, you'd also mention your company and exchange business cards with two hands. The self-intro is much more ritualized than in Western culture.

Practice your self-introduction until it's smooth—you'll use it constantly!`,
        dialogue: {
          title: 'Meeting Someone New',
          lines: [
            { speaker: 'A', korean: '안녕하세요! 저는 민수예요.', english: 'Hello! I\'m Minsu.' },
            { speaker: 'B', korean: '안녕하세요! 저는 사라예요. 만나서 반가워요.', english: 'Hello! I\'m Sarah. Nice to meet you.' },
            { speaker: 'A', korean: '어느 나라 사람이에요?', english: 'What country are you from?' },
            { speaker: 'B', korean: '미국 사람이에요. 민수 씨는요?', english: 'I\'m American. And you, Minsu?' },
            { speaker: 'A', korean: '저는 한국 사람이에요.', english: 'I\'m Korean.' }
          ]
        },
        studyGuide: [
          {
            korean: '만나서 반가워요',
            romanization: 'mannaseo bangawoyo',
            meaning: 'Nice to meet you',
            usage: 'Said when meeting someone for the first time',
            example: 'After introductions: 만나서 반가워요!'
          },
          {
            korean: '어느 나라 사람이에요?',
            romanization: 'eoneu nara saramieyo?',
            meaning: 'What country are you from?',
            usage: 'Asking about nationality',
            example: 'A: 어느 나라 사람이에요? B: 미국 사람이에요.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Introduce yourself: Say your name, nationality, and that you\'re learning Korean',
            type: 'speaking',
            hint: '안녕하세요! 저는 [name]이에요/예요. [country] 사람이에요. 한국어를 공부해요.'
          },
          {
            prompt: 'Write a self-introduction including: name, country, occupation, hobby',
            type: 'writing'
          }
        ],
        quiz: [
          {
            question: 'How do you ask "What country are you from?"',
            options: ['뭐예요?', '어디 가요?', '어느 나라 사람이에요?', '이름이 뭐예요?'],
            correct: 2,
            explanation: '어느 나라 사람이에요? literally asks "Which country person are you?"'
          }
        ]
      },
      {
        id: 'convo-restaurant',
        title: 'At a Restaurant',
        intro: `Going to a Korean restaurant is a wonderful way to practice! Restaurant interactions follow predictable patterns, so once you learn them, you can navigate any eatery.

**The typical restaurant flow:**
1. Enter → Staff says "어서오세요!" (Welcome!)
2. Get seated → "몇 분이세요?" (How many people?)
3. Order → "[food] 주세요" (Please give me...)
4. During meal → "맛있어요!" (It's delicious!)
5. Pay → "계산이요!" (Check please!)

**Useful phrases:**
- 여기요! = Excuse me! (to call server)
- 메뉴 있어요? = Do you have a menu?
- 이거 뭐예요? = What is this?
- 조금만요 = Just a moment (if you need time)
- 잘 먹겠습니다 = I will eat well (said before eating)
- 잘 먹었습니다 = I ate well (said after eating)

**Connecting items with "하고":**
When ordering multiple things, use 하고 (and):
- 비빔밥하고 물 주세요 = Bibimbap and water please

**Cultural note:** In Korea, servers don't constantly check on you. Call them when you need something by saying "여기요!" or pressing the table button.`,
        dialogue: {
          title: 'Ordering Food',
          lines: [
            { speaker: 'Server', korean: '어서오세요! 몇 분이세요?', english: 'Welcome! How many people?' },
            { speaker: 'Customer', korean: '두 명이요.', english: 'Two people.' },
            { speaker: 'Server', korean: '이쪽으로 오세요. 메뉴 여기 있어요.', english: 'Come this way. Here\'s the menu.' },
            { speaker: 'Customer', korean: '감사합니다. 비빔밥 두 개하고 물 주세요.', english: 'Thank you. Two bibimbaps and water please.' },
            { speaker: 'Server', korean: '네, 알겠습니다. 잠시만요.', english: 'Yes, understood. One moment.' },
            { speaker: 'Customer', korean: '(After eating) 맛있었어요! 계산이요.', english: '(After eating) It was delicious! Check please.' }
          ]
        },
        studyGuide: [
          {
            korean: '몇 분이세요?',
            romanization: 'myeot buniseyo?',
            meaning: 'How many people?',
            usage: 'Asked by restaurant staff',
            example: 'Entering a restaurant: 몇 분이세요?'
          },
          {
            korean: '~하고',
            romanization: '~hago',
            meaning: 'and (connecting nouns)',
            usage: 'Connects two things being ordered',
            example: '비빔밥하고 물 = bibimbap and water'
          }
        ],
        outputPractice: [
          {
            prompt: 'Order your favorite Korean dish and a drink',
            type: 'speaking',
            hint: '[dish] 하고 [drink] 주세요'
          },
          {
            prompt: 'Practice the full restaurant dialogue, playing both roles',
            type: 'speaking'
          }
        ],
        quiz: [
          {
            question: 'How do you connect items when ordering?',
            options: ['그리고', '하고', '에서', '을'],
            correct: 1,
            explanation: 'When ordering, use 하고 to connect items: 비빔밥하고 물'
          }
        ]
      }
    ]
  },
  {
    id: 'listening',
    name: 'Listening Skills',
    icon: '듣',
    description: 'Train your Korean listening comprehension',
    lessons: [
      {
        id: 'listening-intro',
        title: 'Listening Strategy',
        studyGuide: [
          {
            korean: '듣기 연습',
            romanization: 'deutgi yeonseup',
            meaning: 'Listening practice',
            usage: 'The foundation of language comprehension',
            example: 'Daily practice is essential'
          }
        ],
        content: `
## Effective Listening Practice

### The 3-Step Method
1. **Blind Listen**: Listen without any text first. Try to catch keywords.
2. **Listen with Text**: Read along while listening. Note pronunciation differences.
3. **Shadow**: Speak along with the audio, matching rhythm and intonation.

### Daily Listening Goals
- Week 1-4: 15 minutes/day of slow, clear Korean
- Week 5-12: 20-30 minutes/day, increasing speed
- Week 13-24: 30-60 minutes/day, including native content

### Recommended Resources
- TTMIK (Talk To Me In Korean) podcasts
- Korean variety show clips with subtitles
- K-drama scenes you've watched with English first
        `,
        outputPractice: [
          {
            prompt: 'Find a 1-minute Korean audio clip and practice the 3-step method',
            type: 'activity'
          }
        ]
      }
    ]
  },
  {
    id: 'speaking',
    name: 'Speaking Practice',
    icon: '말',
    description: 'Develop your Korean speaking skills',
    lessons: [
      {
        id: 'speaking-shadowing',
        title: 'Shadowing Technique',
        studyGuide: [
          {
            korean: '따라하기',
            romanization: 'ttarahagi',
            meaning: 'Following along / Shadowing',
            usage: 'Key technique for pronunciation improvement',
            example: 'Listen and immediately repeat'
          }
        ],
        content: `
## Shadowing Practice

### What is Shadowing?
Speaking along with native audio in real-time, matching:
- **Pronunciation**: Each sound accurately
- **Rhythm**: The natural flow of speech
- **Intonation**: Rising and falling tones

### How to Shadow
1. Choose audio slightly above your level
2. Listen to a short segment (5-10 seconds)
3. Play again and speak simultaneously
4. Record yourself and compare
5. Repeat until it sounds natural

### Daily Goals
- 10-15 minutes of shadowing per day
- Focus on dialogue you want to use in real life
        `,
        outputPractice: [
          {
            prompt: 'Shadow this sentence: 안녕하세요, 만나서 반가워요!',
            type: 'recording'
          },
          {
            prompt: 'Shadow the restaurant dialogue from the Conversation module',
            type: 'activity'
          }
        ]
      }
    ]
  },
  {
    id: 'reading',
    name: 'Reading & Writing',
    icon: '읽',
    description: 'Strengthen your Korean literacy',
    lessons: [
      {
        id: 'reading-practice',
        title: 'Reading Strategies',
        content: `
## Building Reading Skills

### Start Simple
- Children's books and webtoons
- Subtitles on familiar shows
- Signs and menus

### Reading Aloud
Reading aloud helps connect written and spoken Korean.
Practice daily with new vocabulary.

### Writing Practice
- Keep a simple daily journal in Korean
- Start with 1-2 sentences per day
- Use grammar and vocabulary you've learned
        `,
        outputPractice: [
          {
            prompt: 'Write 3 sentences about your day using today\'s vocabulary',
            type: 'writing'
          }
        ]
      }
    ]
  },
  {
    id: 'culture',
    name: 'Cultural Context',
    icon: '한',
    description: 'Understand Korean culture for better communication',
    lessons: [
      {
        id: 'culture-honorifics',
        title: 'Speech Levels & Honorifics',
        studyGuide: [
          {
            korean: '존댓말 / 반말',
            romanization: 'jondaenmal / banmal',
            meaning: 'Formal speech / Casual speech',
            usage: 'Korean has multiple speech levels based on social context',
            example: '해요 (polite) vs 해 (casual)',
            commonMistake: 'Using 반말 with strangers or elders'
          },
          {
            korean: '씨',
            romanization: 'ssi',
            meaning: 'Mr./Ms. (polite name suffix)',
            usage: 'Added after someone\'s name for politeness',
            example: '민수 씨, 사라 씨'
          }
        ],
        content: `
## Korean Speech Levels

### The Main Levels
1. **Formal Polite (합쇼체)**: Business, presentations, news
2. **Informal Polite (해요체)**: Daily conversation with strangers, acquaintances
3. **Casual (반말)**: Close friends, younger people, children

### When to Use What
- Default to 해요체 (informal polite) - safe for most situations
- Use 합쇼체 in formal settings, with much older people
- Only use 반말 with close friends or those younger than you
- When in doubt, use polite forms!
        `,
        quiz: [
          {
            question: 'Which speech level should you use with a stranger?',
            options: ['반말 (casual)', '해요체 (informal polite)', 'Any level', '합쇼체 only'],
            correct: 1,
            explanation: '해요체 is the safe default for strangers and everyday situations.'
          }
        ]
      }
    ]
  },
  {
    id: 'situations',
    name: 'Everyday Situations',
    icon: '일',
    description: 'Handle common real-world scenarios',
    lessons: [
      {
        id: 'situation-shopping',
        title: 'Shopping',
        intro: `Shopping in Korea is fun once you know the key phrases! From street markets to department stores, these expressions will help you navigate any shopping situation.

**Essential shopping vocabulary:**
- 얼마예요? = How much is it?
- 이거 주세요 = I'll take this / This one please
- 카드 돼요? = Can I use a card?
- 현금만이요 = Cash only
- 깎아 주세요 = Please give me a discount (markets only!)

**Numbers for prices:**
Prices use Sino-Korean numbers:
- 천 원 = 1,000 won
- 만 원 = 10,000 won
- 오만 원 = 50,000 won

**Reading prices:**
- 삼천 원 = 3,000 won
- 이만 오천 원 = 25,000 won

**Pointing phrases:**
- 이거 (igo) = this (near me)
- 그거 (geugeo) = that (near you)
- 저거 (jeogeo) = that over there

**Bargaining:** Acceptable at traditional markets, but NOT at regular stores or department stores. At markets, try "조금만 깎아 주세요" (please discount a little).`,
        dialogue: {
          title: 'At a Store',
          lines: [
            { speaker: 'Clerk', korean: '뭐 찾으세요?', english: 'What are you looking for?' },
            { speaker: 'Customer', korean: '이거 얼마예요?', english: 'How much is this?' },
            { speaker: 'Clerk', korean: '만 원이에요.', english: 'It\'s 10,000 won.' },
            { speaker: 'Customer', korean: '카드 돼요?', english: 'Can I use a card?' },
            { speaker: 'Clerk', korean: '네, 돼요.', english: 'Yes, you can.' },
            { speaker: 'Customer', korean: '이거 주세요.', english: 'I\'ll take this.' }
          ]
        },
        studyGuide: [
          {
            korean: '얼마예요?',
            romanization: 'eolmayeyo?',
            meaning: 'How much is it?',
            usage: 'Essential shopping phrase',
            example: '이거 얼마예요? (How much is this?)'
          },
          {
            korean: '카드 돼요?',
            romanization: 'kadeu dwaeyo?',
            meaning: 'Can I use a card?',
            usage: 'Asking about card payment',
            example: 'At checkout: 카드 돼요?'
          }
        ],
        outputPractice: [
          {
            prompt: 'Ask about the price of 3 different items and say you\'ll buy one',
            type: 'speaking'
          }
        ]
      },
      {
        id: 'situation-directions',
        title: 'Asking for Directions',
        intro: `Getting around Korea requires knowing how to ask for and understand directions. Public transportation is excellent, but sometimes you need to ask a local!

**Getting someone's attention:**
- 저기요 (jeogiyo) = Excuse me (to a stranger)
- 실례합니다 (sillyehamnida) = Excuse me (more formal)

**The essential question pattern:**
[Place] + 이/가 + 어디예요?
- 화장실이 어디예요? = Where is the bathroom?
- 지하철역이 어디예요? = Where is the subway station?
- 버스 정류장이 어디예요? = Where is the bus stop?

**Direction vocabulary:**
- 직진하세요 = Go straight
- 오른쪽으로 가세요 = Go right
- 왼쪽으로 가세요 = Go left
- 돌아가세요 = Turn around
- 이쪽 (this way), 저쪽 (that way)

**Distance and time:**
- 멀어요? = Is it far?
- 가까워요 = It's close
- 5분쯤 걸려요 = It takes about 5 minutes
- 걸어서 / 버스로 = on foot / by bus

**Pro tip:** Most Koreans will walk you partway there rather than give complicated directions. Don't be surprised!`,
        dialogue: {
          title: 'Finding Your Way',
          lines: [
            { speaker: 'You', korean: '저기요, 지하철역이 어디예요?', english: 'Excuse me, where is the subway station?' },
            { speaker: 'Person', korean: '저쪽으로 가세요. 직진하고 오른쪽으로 가세요.', english: 'Go that way. Go straight and turn right.' },
            { speaker: 'You', korean: '감사합니다! 멀어요?', english: 'Thank you! Is it far?' },
            { speaker: 'Person', korean: '아니요, 5분쯤 걸려요.', english: 'No, it takes about 5 minutes.' }
          ]
        },
        studyGuide: [
          {
            korean: '어디예요?',
            romanization: 'eodiyeyo?',
            meaning: 'Where is it?',
            usage: 'Asking for location',
            example: '화장실이 어디예요? (Where is the bathroom?)'
          },
          {
            korean: '직진하세요',
            romanization: 'jikjinhaseyo',
            meaning: 'Go straight',
            usage: 'Direction instruction',
            example: '직진하고 왼쪽으로 가세요'
          },
          {
            korean: '오른쪽 / 왼쪽',
            romanization: 'oreunjjok / oenjjok',
            meaning: 'Right / Left',
            usage: 'Direction words',
            example: '오른쪽으로 가세요 (Go right)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Ask for directions to: the bathroom, a cafe, the bus stop',
            type: 'speaking',
            hint: '[place]이/가 어디예요?'
          }
        ]
      }
    ]
  },
  {
    id: 'review',
    name: 'Review & Practice',
    icon: '복',
    description: 'Consolidate your learning with comprehensive review',
    lessons: [
      {
        id: 'review-week1-4',
        title: 'Weeks 1-4 Review',
        content: `
## Foundation Review

### What You Should Know
- All Hangul letters and their sounds
- Basic sentence structure (SOV)
- Essential particles (은/는, 이/가, 을/를, 에, 에서)
- Present tense conjugation (-아요/-어요)
- Self-introduction
- Numbers (both systems)
- Basic greetings and expressions

### Self-Assessment
Can you:
- [ ] Read any Hangul text (even if slowly)?
- [ ] Introduce yourself in 5+ sentences?
- [ ] Count to 100 in both number systems?
- [ ] Order food at a restaurant?
- [ ] Use basic particles correctly?
        `,
        quiz: [
          {
            question: 'Complete: 저는 학생___.',
            options: ['이요', '이에요', '예요', '있어요'],
            correct: 1,
            explanation: 'After a consonant, use 이에요 for "is/am": 학생이에요'
          },
          {
            question: 'How do you say "3 o\'clock" in Korean?',
            options: ['삼 시', '세 시', '셋 시', '삼시'],
            correct: 1,
            explanation: 'Hours use Native Korean numbers: 세 시 (se si)'
          }
        ]
      }
    ]
  },
  {
    id: 'final',
    name: 'Final Assessment',
    icon: '시',
    description: 'Test your overall Korean proficiency',
    lessons: [
      {
        id: 'final-exam',
        title: 'Comprehensive Test',
        quiz: [
          {
            question: 'Which is the correct particle usage: "I eat rice"?',
            options: ['저는 밥이 먹어요', '저는 밥을 먹어요', '저가 밥을 먹어요', '저는 밥에 먹어요'],
            correct: 1,
            explanation: '저는 (topic) + 밥을 (object) + 먹어요 (verb)'
          },
          {
            question: 'How do you ask "How much is this?"',
            options: ['이거 뭐예요?', '이거 어디예요?', '이거 얼마예요?', '이거 있어요?'],
            correct: 2,
            explanation: '얼마예요? asks about price'
          },
          {
            question: 'Which ending makes past tense?',
            options: ['-아요/-어요', '-았어요/-었어요', '-을 거예요', '-고'],
            correct: 1,
            explanation: '-았어요/-었어요 is the polite past tense ending'
          },
          {
            question: 'What does 만나서 반가워요 mean?',
            options: ['Goodbye', 'Thank you', 'Nice to meet you', 'See you later'],
            correct: 2,
            explanation: '만나서 반가워요 = Nice to meet you (lit. "meeting you, I\'m happy")'
          },
          {
            question: 'Which speech level should you use with strangers?',
            options: ['반말', '해요체', '해체', 'Any level'],
            correct: 1,
            explanation: '해요체 (informal polite) is the safe default for strangers'
          }
        ]
      }
    ]
  }
]

// These functions are now imported from curriculum-korean.js
// Kept here for reference but no longer used
