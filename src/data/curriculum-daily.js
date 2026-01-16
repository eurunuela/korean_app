// Daily Lessons Curriculum - 144 unique lessons for the 24-week course
// Each day has its own focused lesson content

export const dailyLessons = {
  id: 'daily',
  name: 'Daily Lessons',
  icon: '📅',
  description: 'Day-by-day Korean lessons',
  lessons: [
    // WEEK 1: Hangul Mastery
    {
      id: 'w1d1-basic-vowels',
      title: 'Basic Vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ)',
      intro: `Today you'll learn the 6 basic Korean vowels. These are the building blocks of all Korean sounds.

**The 6 Basic Vowels:**
| Vowel | Sound | Like English |
|-------|-------|--------------|
| ㅏ | a | "ah" in father |
| ㅓ | eo | "uh" in son |
| ㅗ | o | "oh" in go |
| ㅜ | u | "oo" in moon |
| ㅡ | eu | no equivalent - spread lips, say "uh" |
| ㅣ | i | "ee" in see |

**The Pattern:** Vertical vowels (ㅏ, ㅓ, ㅣ) go to the RIGHT of consonants. Horizontal vowels (ㅗ, ㅜ, ㅡ) go BELOW consonants.`,
      studyGuide: [
        { korean: 'ㅏ', romanization: 'a', meaning: '"ah" as in father', example: '아 (a) - using silent ㅇ' },
        { korean: 'ㅓ', romanization: 'eo', meaning: '"uh" as in son', example: '어 (eo)' },
        { korean: 'ㅗ', romanization: 'o', meaning: '"oh" as in go', example: '오 (o)' },
        { korean: 'ㅜ', romanization: 'u', meaning: '"oo" as in moon', example: '우 (u)' },
        { korean: 'ㅡ', romanization: 'eu', meaning: 'spread lips, say "uh"', example: '으 (eu)' },
        { korean: 'ㅣ', romanization: 'i', meaning: '"ee" as in see', example: '이 (i)' }
      ],
      quiz: [
        { question: 'What sound does ㅏ make?', options: ['oh', 'ah', 'ee', 'oo'], correct: 1, explanation: 'ㅏ makes the "ah" sound as in father.' },
        { question: 'Which vowel sounds like "oo" in moon?', options: ['ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], correct: 1, explanation: 'ㅜ makes the "oo" sound.' }
      ]
    },
    {
      id: 'w1d2-compound-vowels',
      title: 'Compound Vowels (ㅐ, ㅔ, ㅚ, ㅟ, ㅢ)',
      intro: `Today you'll learn compound vowels - vowels made by combining basic vowels.

**Compound Vowels:**
| Vowel | Components | Sound |
|-------|------------|-------|
| ㅐ | ㅏ + ㅣ | "ae" like "a" in bad |
| ㅔ | ㅓ + ㅣ | "e" like "e" in bed |
| ㅚ | ㅗ + ㅣ | "we" or "oe" |
| ㅟ | ㅜ + ㅣ | "wi" like "we" |
| ㅢ | ㅡ + ㅣ | "ui" - eu + i together |

**Note:** In modern Korean, ㅐ and ㅔ sound almost identical to most speakers.`,
      studyGuide: [
        { korean: 'ㅐ', romanization: 'ae', meaning: '"a" as in bad', example: '개 (gae) - dog' },
        { korean: 'ㅔ', romanization: 'e', meaning: '"e" as in bed', example: '네 (ne) - yes' },
        { korean: 'ㅚ', romanization: 'oe/we', meaning: '"we" sound', example: '외국 (oeguk) - foreign country' },
        { korean: 'ㅟ', romanization: 'wi', meaning: '"wi" as in we', example: '위 (wi) - above' },
        { korean: 'ㅢ', romanization: 'ui', meaning: 'eu + i combined', example: '의자 (uija) - chair' }
      ],
      quiz: [
        { question: 'What is ㅐ a combination of?', options: ['ㅏ + ㅣ', 'ㅓ + ㅣ', 'ㅗ + ㅣ', 'ㅜ + ㅣ'], correct: 0, explanation: 'ㅐ is ㅏ + ㅣ combined.' }
      ]
    },
    {
      id: 'w1d3-consonants-1',
      title: 'Basic Consonants Group 1 (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ)',
      intro: `Today you'll learn your first 5 consonants. These are the most common consonants in Korean.

**First 5 Consonants:**
| Consonant | Sound | Memory Tip |
|-----------|-------|------------|
| ㄱ | g/k | Looks like a gun |
| ㄴ | n | Looks like "n" rotated |
| ㄷ | d/t | Looks like a door |
| ㄹ | r/l | Between r and l |
| ㅁ | m | Looks like a mouth (square) |

**Position Rule:** ㄱ, ㄷ sound voiced (g, d) at the start of words, unvoiced (k, t) at the end.`,
      studyGuide: [
        { korean: 'ㄱ', romanization: 'g/k', meaning: 'Between g and k', example: '가 (ga) - to go' },
        { korean: 'ㄴ', romanization: 'n', meaning: 'Same as English n', example: '나 (na) - I/me' },
        { korean: 'ㄷ', romanization: 'd/t', meaning: 'Between d and t', example: '다 (da) - all' },
        { korean: 'ㄹ', romanization: 'r/l', meaning: 'Between r and l', example: '라면 (ramyeon) - ramen' },
        { korean: 'ㅁ', romanization: 'm', meaning: 'Same as English m', example: '마 (ma)' }
      ],
      quiz: [
        { question: 'Which consonant looks like a gun?', options: ['ㄴ', 'ㄱ', 'ㅁ', 'ㄷ'], correct: 1, explanation: 'ㄱ looks like a gun shape.' }
      ]
    },
    {
      id: 'w1d4-consonants-2',
      title: 'Basic Consonants Group 2 (ㅂ, ㅅ, ㅇ, ㅈ, ㅎ)',
      intro: `Today you'll complete the basic consonants with 5 more essential sounds.

**Second 5 Consonants:**
| Consonant | Sound | Memory Tip |
|-----------|-------|------------|
| ㅂ | b/p | Looks like a bucket |
| ㅅ | s | Looks like a tree/mountain |
| ㅇ | silent/ng | Circle = zero sound at start |
| ㅈ | j | Looks like a person |
| ㅎ | h | Person wearing a hat |

**Special:** ㅇ is silent at the START of a syllable but makes "ng" at the END.`,
      studyGuide: [
        { korean: 'ㅂ', romanization: 'b/p', meaning: 'Between b and p', example: '밥 (bap) - rice' },
        { korean: 'ㅅ', romanization: 's', meaning: 's sound (sh before i)', example: '사람 (saram) - person' },
        { korean: 'ㅇ', romanization: 'silent/ng', meaning: 'Silent at start, ng at end', example: '아 (a), 강 (gang)' },
        { korean: 'ㅈ', romanization: 'j', meaning: 'j sound', example: '자 (ja) - ruler/sleep' },
        { korean: 'ㅎ', romanization: 'h', meaning: 'h sound', example: '하다 (hada) - to do' }
      ],
      quiz: [
        { question: 'When is ㅇ silent?', options: ['At the end', 'At the start', 'Always', 'Never'], correct: 1, explanation: 'ㅇ is silent at the start of a syllable.' }
      ]
    },
    {
      id: 'w1d5-first-greetings',
      title: 'First Greetings: 안녕하세요, 감사합니다',
      intro: `Today you'll learn your first Korean phrases using the letters you've learned!

**Essential Greetings:**
| Korean | Meaning | When to Use |
|--------|---------|-------------|
| 안녕하세요 | Hello | Anytime meeting someone |
| 감사합니다 | Thank you (formal) | Formal situations |
| 고마워요 | Thank you (casual) | Casual situations |
| 네 | Yes | Responding affirmatively |
| 아니요 | No | Responding negatively |

**Pronunciation Tip:** 안녕하세요 = an-nyeong-ha-se-yo (5 syllables)`,
      studyGuide: [
        { korean: '안녕하세요', romanization: 'annyeonghaseyo', meaning: 'Hello', example: 'Used for hello and goodbye' },
        { korean: '감사합니다', romanization: 'gamsahamnida', meaning: 'Thank you (formal)', example: 'In shops, to strangers' },
        { korean: '고마워요', romanization: 'gomawoyo', meaning: 'Thank you (casual)', example: 'To friends' },
        { korean: '네', romanization: 'ne', meaning: 'Yes', example: 'Affirming something' },
        { korean: '아니요', romanization: 'aniyo', meaning: 'No', example: 'Denying something' }
      ],
      quiz: [
        { question: 'How do you say "Hello" in Korean?', options: ['감사합니다', '안녕하세요', '네', '아니요'], correct: 1, explanation: '안녕하세요 means hello.' }
      ]
    },
    {
      id: 'w1d6-syllable-building',
      title: 'Building Syllables (CV Structure)',
      intro: `Today you'll learn how to combine consonants and vowels into syllables.

**The Syllable Formula:**
\`\`\`
Syllable = Consonant + Vowel (+ optional final consonant)
\`\`\`

**Vertical Vowels (ㅏ, ㅓ, ㅣ):** Consonant goes LEFT
- 가 = ㄱ + ㅏ
- 너 = ㄴ + ㅓ
- 미 = ㅁ + ㅣ

**Horizontal Vowels (ㅗ, ㅜ, ㅡ):** Consonant goes TOP
- 고 = ㄱ on top of ㅗ
- 누 = ㄴ on top of ㅜ
- 므 = ㅁ on top of ㅡ`,
      studyGuide: [
        { korean: '가', romanization: 'ga', meaning: 'Consonant + vertical vowel', example: 'ㄱ left of ㅏ' },
        { korean: '고', romanization: 'go', meaning: 'Consonant + horizontal vowel', example: 'ㄱ on top of ㅗ' },
        { korean: '나', romanization: 'na', meaning: 'Another CV syllable', example: 'ㄴ + ㅏ' }
      ],
      quiz: [
        { question: 'How do you write "ga" in Korean?', options: ['고', '가', '그', '기'], correct: 1, explanation: '가 = ㄱ + ㅏ' }
      ]
    },

    // WEEK 2: Complete Hangul + First Sentences
    {
      id: 'w2d1-double-consonants',
      title: 'Double Consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)',
      intro: `Today you'll learn the tense (double) consonants - stronger versions of basic consonants.

**Double Consonants (쌍자음):**
| Double | Base | Sound | Example |
|--------|------|-------|---------|
| ㄲ | ㄱ | kk | 까 (kka) |
| ㄸ | ㄷ | tt | 따 (tta) |
| ㅃ | ㅂ | pp | 빠 (ppa) |
| ㅆ | ㅅ | ss | 싸 (ssa) |
| ㅉ | ㅈ | jj | 짜 (jja) |

**How to Pronounce:** Tense your throat and release the sound more forcefully, with no air puff.`,
      studyGuide: [
        { korean: 'ㄲ', romanization: 'kk', meaning: 'Tense k', example: '까다 (kkada) - to peel' },
        { korean: 'ㄸ', romanization: 'tt', meaning: 'Tense t', example: '따다 (ttada) - to pick' },
        { korean: 'ㅃ', romanization: 'pp', meaning: 'Tense p', example: '빠르다 (ppareuda) - fast' },
        { korean: 'ㅆ', romanization: 'ss', meaning: 'Tense s', example: '쓰다 (sseuda) - to write' },
        { korean: 'ㅉ', romanization: 'jj', meaning: 'Tense j', example: '짜다 (jjada) - salty' }
      ],
      quiz: [
        { question: 'What is the double consonant of ㄱ?', options: ['ㄲ', 'ㅋ', 'ㄴ', 'ㄷ'], correct: 0, explanation: 'ㄲ is the doubled/tense version of ㄱ.' }
      ]
    },
    {
      id: 'w2d2-aspirated-consonants',
      title: 'Aspirated Consonants (ㅋ, ㅌ, ㅍ, ㅊ)',
      intro: `Today you'll learn aspirated consonants - consonants with an extra puff of air.

**Aspirated Consonants:**
| Aspirated | Base | Sound | Test |
|-----------|------|-------|------|
| ㅋ | ㄱ | k' | Paper moves when you say it |
| ㅌ | ㄷ | t' | Strong puff of air |
| ㅍ | ㅂ | p' | Like English "p" in "pin" |
| ㅊ | ㅈ | ch' | Like "ch" in "church" |

**The Three-Way Contrast:**
- Basic: ㄱ ㄷ ㅂ ㅈ (soft, no air)
- Aspirated: ㅋ ㅌ ㅍ ㅊ (with air puff)
- Tense: ㄲ ㄸ ㅃ ㅉ (tight throat, no air)`,
      studyGuide: [
        { korean: 'ㅋ', romanization: "k'", meaning: 'Aspirated k', example: '커피 (keopi) - coffee' },
        { korean: 'ㅌ', romanization: "t'", meaning: 'Aspirated t', example: '타다 (tada) - to ride' },
        { korean: 'ㅍ', romanization: "p'", meaning: 'Aspirated p', example: '피자 (pija) - pizza' },
        { korean: 'ㅊ', romanization: "ch'", meaning: 'Aspirated ch', example: '차 (cha) - tea/car' }
      ],
      quiz: [
        { question: 'Which is the aspirated version of ㄱ?', options: ['ㄲ', 'ㅋ', 'ㄴ', 'ㅎ'], correct: 1, explanation: 'ㅋ is the aspirated version of ㄱ.' }
      ]
    },
    {
      id: 'w2d3-batchim-intro',
      title: 'Batchim (받침) - Final Consonants',
      intro: `Today you'll learn about batchim - consonants that appear at the bottom of syllables.

**What is Batchim?**
Batchim (받침) means "support" - it's the consonant at the bottom of a syllable block.

**Examples:**
- 밥 (bap) = ㅂ + ㅏ + ㅂ (final ㅂ is batchim)
- 국 (guk) = ㄱ + ㅜ + ㄱ (final ㄱ is batchim)
- 집 (jip) = ㅈ + ㅣ + ㅂ (final ㅂ is batchim)

**7 Final Sound Categories:**
All batchim reduce to 7 sounds: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ`,
      studyGuide: [
        { korean: '밥', romanization: 'bap', meaning: 'Rice/meal', example: 'ㅂ batchim sounds like "p"' },
        { korean: '국', romanization: 'guk', meaning: 'Soup', example: 'ㄱ batchim sounds like "k"' },
        { korean: '집', romanization: 'jip', meaning: 'House', example: 'ㅂ batchim' },
        { korean: '강', romanization: 'gang', meaning: 'River', example: 'ㅇ batchim sounds like "ng"' }
      ],
      quiz: [
        { question: 'What is the batchim in 밥?', options: ['ㅂ', 'ㅏ', 'ㅁ', 'None'], correct: 0, explanation: 'The final ㅂ is the batchim.' }
      ]
    },
    {
      id: 'w2d4-self-intro',
      title: 'Self Introduction: 저는 [name]이에요/예요',
      intro: `Today you'll learn to introduce yourself in Korean!

**The Self-Intro Pattern:**
\`\`\`
저는 [name]이에요. (after consonant)
저는 [name]예요. (after vowel)
\`\`\`

**Examples:**
- 저는 민수예요. (I'm Minsu - ends in vowel)
- 저는 존이에요. (I'm John - ends in consonant)

**Full Introduction:**
안녕하세요. 저는 [name]이에요/예요. 만나서 반가워요.
(Hello. I'm [name]. Nice to meet you.)`,
      studyGuide: [
        { korean: '저는', romanization: 'jeoneun', meaning: 'I (topic)', example: 'Used to introduce topic "I"' },
        { korean: '이에요/예요', romanization: 'ieyo/yeyo', meaning: 'am/is', example: 'Polite form of "to be"' },
        { korean: '만나서 반가워요', romanization: 'mannaseo bangawoyo', meaning: 'Nice to meet you', example: 'Said after introduction' }
      ],
      quiz: [
        { question: 'How do you say "I am Sarah"?', options: ['저는 사라예요', '저는 사라이에요', '나는 사라', '저 사라'], correct: 0, explanation: 'Sarah ends in a vowel, so use 예요.' }
      ]
    },
    {
      id: 'w2d5-native-numbers',
      title: 'Native Korean Numbers 1-10',
      intro: `Today you'll learn the native Korean counting system (1-10).

**Native Korean Numbers:**
| Number | Korean | Used For |
|--------|--------|----------|
| 1 | 하나 (한) | hours, counting |
| 2 | 둘 (두) | hours, counting |
| 3 | 셋 (세) | hours, counting |
| 4 | 넷 (네) | hours, counting |
| 5 | 다섯 | counting |
| 6 | 여섯 | counting |
| 7 | 일곱 | counting |
| 8 | 여덟 | counting |
| 9 | 아홉 | counting |
| 10 | 열 | counting |

**Note:** 하나, 둘, 셋, 넷 shorten to 한, 두, 세, 네 before counters.`,
      studyGuide: [
        { korean: '하나', romanization: 'hana', meaning: 'One', example: '한 개 (one item)' },
        { korean: '둘', romanization: 'dul', meaning: 'Two', example: '두 명 (two people)' },
        { korean: '셋', romanization: 'set', meaning: 'Three', example: '세 시 (three o\'clock)' },
        { korean: '넷', romanization: 'net', meaning: 'Four', example: '네 개 (four items)' },
        { korean: '다섯', romanization: 'daseot', meaning: 'Five', example: '다섯 명' }
      ],
      quiz: [
        { question: 'What is "three" in native Korean?', options: ['삼', '셋', '넷', '다섯'], correct: 1, explanation: '셋 is three in native Korean numbers.' }
      ]
    },
    {
      id: 'w2d6-reading-simple',
      title: 'Reading Practice: Simple Korean Text',
      intro: `Today you'll practice reading Korean words you can now decode!

**Practice Words:**
| Korean | Romanization | Meaning |
|--------|--------------|---------|
| 사과 | sagwa | apple |
| 바나나 | banana | banana |
| 우유 | uyu | milk |
| 가방 | gabang | bag |
| 학교 | hakgyo | school |
| 친구 | chingu | friend |

**Reading Tips:**
1. Identify each syllable block
2. Find consonant(s) and vowel
3. Sound out each syllable
4. Put them together`,
      studyGuide: [
        { korean: '사과', romanization: 'sagwa', meaning: 'Apple', example: 'ㅅ+ㅏ ㄱ+ㅘ' },
        { korean: '바나나', romanization: 'banana', meaning: 'Banana', example: 'Loan word from English' },
        { korean: '학교', romanization: 'hakgyo', meaning: 'School', example: 'ㅎ+ㅏ+ㄱ ㄱ+ㅛ' },
        { korean: '친구', romanization: 'chingu', meaning: 'Friend', example: 'Common word!' }
      ],
      quiz: [
        { question: 'What does 학교 mean?', options: ['Friend', 'Apple', 'School', 'Bag'], correct: 2, explanation: '학교 means school.' }
      ]
    },

    // WEEK 3: Basic Sentence Structure
    {
      id: 'w3d1-sentence-order',
      title: 'Korean Sentence Order (SOV)',
      intro: `Today you'll learn the fundamental Korean sentence structure.

**The Golden Rule:**
\`\`\`
Korean = Subject + Object + Verb (SOV)
English = Subject + Verb + Object (SVO)
\`\`\`

**Example:**
- English: I eat rice.
- Korean: 나는 밥을 먹어요. (I rice eat)

**Key Points:**
1. The VERB always comes LAST
2. Other elements can move around
3. Subject is often dropped if clear from context`,
      studyGuide: [
        { korean: 'SOV', romanization: 'Subject-Object-Verb', meaning: 'Korean word order', example: '나는 밥을 먹어요' },
        { korean: '나는', romanization: 'naneun', meaning: 'I (topic)', example: 'Subject with topic marker' },
        { korean: '밥을', romanization: 'babeul', meaning: 'Rice (object)', example: 'Object with marker' },
        { korean: '먹어요', romanization: 'meogeoyo', meaning: 'Eat', example: 'Verb at the end' }
      ],
      quiz: [
        { question: 'What is Korean word order?', options: ['SVO', 'SOV', 'VSO', 'OVS'], correct: 1, explanation: 'Korean uses Subject-Object-Verb order.' }
      ]
    },
    {
      id: 'w3d2-topic-particle',
      title: 'Topic Particle 은/는',
      intro: `Today you'll learn the topic marker - one of the most important Korean particles.

**Topic Particle 은/는:**
- 은 after consonant: 저 + 은 = 저는
- 는 after vowel: 나 + 는 = 나는

**Meaning:** "As for..." or "Speaking of..."

**Examples:**
- 저는 학생이에요. (As for me, I'm a student)
- 날씨는 좋아요. (As for the weather, it's good)
- 이름은 뭐예요? (As for your name, what is it?)`,
      studyGuide: [
        { korean: '은', romanization: 'eun', meaning: 'Topic marker (after consonant)', example: '밥은 (as for rice)' },
        { korean: '는', romanization: 'neun', meaning: 'Topic marker (after vowel)', example: '저는 (as for me)' },
        { korean: '저는 학생이에요', romanization: 'jeoneun haksaengieyo', meaning: 'I am a student', example: 'Basic self-intro' }
      ],
      quiz: [
        { question: 'Which topic marker follows 저 (I)?', options: ['은', '는', '이', '가'], correct: 1, explanation: '저 ends in a vowel, so use 는.' }
      ]
    },
    {
      id: 'w3d3-sino-numbers',
      title: 'Sino-Korean Numbers 1-10',
      intro: `Today you'll learn the Sino-Korean number system (Chinese-origin numbers).

**Sino-Korean Numbers:**
| Number | Korean | Used For |
|--------|--------|----------|
| 1 | 일 (il) | dates, money, minutes |
| 2 | 이 (i) | dates, money, minutes |
| 3 | 삼 (sam) | dates, money, minutes |
| 4 | 사 (sa) | dates, money, minutes |
| 5 | 오 (o) | dates, money, minutes |
| 6 | 육 (yuk) | dates, money, minutes |
| 7 | 칠 (chil) | dates, money, minutes |
| 8 | 팔 (pal) | dates, money, minutes |
| 9 | 구 (gu) | dates, money, minutes |
| 10 | 십 (sip) | dates, money, minutes |

**Usage:** Dates, phone numbers, money, minutes, floors`,
      studyGuide: [
        { korean: '일', romanization: 'il', meaning: 'One', example: '일월 (January)' },
        { korean: '이', romanization: 'i', meaning: 'Two', example: '이천 원 (2000 won)' },
        { korean: '삼', romanization: 'sam', meaning: 'Three', example: '삼월 (March)' },
        { korean: '십', romanization: 'sip', meaning: 'Ten', example: '십분 (10 minutes)' }
      ],
      quiz: [
        { question: 'What is "five" in Sino-Korean?', options: ['다섯', '오', '사', '육'], correct: 1, explanation: '오 is five in Sino-Korean.' }
      ]
    },
    {
      id: 'w3d4-telling-time',
      title: 'Telling Time in Korean',
      intro: `Today you'll learn to tell time - using BOTH number systems!

**Time Formula:**
\`\`\`
[Native Korean] 시 [Sino-Korean] 분
      hour              minute
\`\`\`

**Examples:**
| Time | Korean |
|------|--------|
| 1:00 | 한 시 |
| 3:30 | 세 시 삼십 분 |
| 7:15 | 일곱 시 십오 분 |

**Remember:** Hours use native Korean, minutes use Sino-Korean!`,
      studyGuide: [
        { korean: '시', romanization: 'si', meaning: 'Hour/o\'clock', example: '세 시 (3 o\'clock)' },
        { korean: '분', romanization: 'bun', meaning: 'Minute', example: '삼십 분 (30 minutes)' },
        { korean: '몇 시예요?', romanization: 'myeot siyeyo?', meaning: 'What time is it?', example: 'Asking the time' }
      ],
      quiz: [
        { question: 'How do you say 2 o\'clock?', options: ['이 시', '두 시', '둘 시', '두시'], correct: 1, explanation: 'Hours use native Korean: 두 시' }
      ]
    },
    {
      id: 'w3d5-food-vocab',
      title: 'Food Vocabulary Basics',
      intro: `Today you'll learn essential food vocabulary.

**Basic Food Words:**
| Korean | Meaning |
|--------|---------|
| 밥 | rice/meal |
| 물 | water |
| 고기 | meat |
| 생선 | fish |
| 야채 | vegetables |
| 과일 | fruit |
| 빵 | bread |
| 커피 | coffee |
| 차 | tea |
| 맥주 | beer |

**Useful Phrase:** 맛있어요! (It's delicious!)`,
      studyGuide: [
        { korean: '밥', romanization: 'bap', meaning: 'Rice/meal', example: '밥 먹었어요? (Did you eat?)' },
        { korean: '물', romanization: 'mul', meaning: 'Water', example: '물 주세요 (Water please)' },
        { korean: '커피', romanization: 'keopi', meaning: 'Coffee', example: '커피 마셔요 (I drink coffee)' },
        { korean: '맛있어요', romanization: 'masisseoyo', meaning: "It's delicious", example: 'Complimenting food' }
      ],
      quiz: [
        { question: 'What does 밥 mean?', options: ['Water', 'Coffee', 'Rice/meal', 'Meat'], correct: 2, explanation: '밥 means rice or meal.' }
      ]
    },
    {
      id: 'w3d6-restaurant-basics',
      title: 'Restaurant Basics: 주세요',
      intro: `Today you'll learn the essential restaurant phrase: 주세요 (please give me).

**The 주세요 Pattern:**
\`\`\`
[item] + 주세요 = Please give me [item]
\`\`\`

**Examples:**
- 물 주세요 (Water please)
- 메뉴 주세요 (Menu please)
- 커피 주세요 (Coffee please)
- 계산서 주세요 (Check please)

**Ordering Multiple Items:**
물하고 커피 주세요 (Water and coffee please)`,
      studyGuide: [
        { korean: '주세요', romanization: 'juseyo', meaning: 'Please give me', example: 'Universal ordering phrase' },
        { korean: '메뉴', romanization: 'menyu', meaning: 'Menu', example: '메뉴 주세요' },
        { korean: '계산', romanization: 'gyesan', meaning: 'Check/bill', example: '계산이요! (Check please!)' },
        { korean: '하고', romanization: 'hago', meaning: 'And', example: 'Connects items' }
      ],
      quiz: [
        { question: 'How do you say "Water please"?', options: ['물이에요', '물 주세요', '물 먹어요', '물 있어요'], correct: 1, explanation: '물 주세요 = Water please' }
      ]
    },

    // WEEK 4: Essential Verbs & Conjugation
    {
      id: 'w4d1-core-verbs',
      title: 'Core Verbs: 가다, 오다, 하다',
      intro: `Today you'll learn three essential verbs and how to conjugate them.

**The Three Core Verbs:**
| Dictionary | Meaning | Polite Form |
|------------|---------|-------------|
| 가다 | to go | 가요 |
| 오다 | to come | 와요 |
| 하다 | to do | 해요 |

**Conjugation Rule:**
1. Remove -다 from dictionary form
2. Check the last vowel
3. Add -아요 (bright vowel) or -어요 (dark vowel)

**가다:** 가 + 아요 = 가요 (아 + 아 merge)
**오다:** 오 + 아요 = 와요 (ㅗ + ㅏ = ㅘ)
**하다:** 하 + 여요 = 해요 (special)`,
      studyGuide: [
        { korean: '가요', romanization: 'gayo', meaning: 'Go (polite)', example: '학교에 가요 (I go to school)' },
        { korean: '와요', romanization: 'wayo', meaning: 'Come (polite)', example: '집에 와요 (I come home)' },
        { korean: '해요', romanization: 'haeyo', meaning: 'Do (polite)', example: '뭐 해요? (What are you doing?)' }
      ],
      quiz: [
        { question: 'What is the polite form of 가다?', options: ['가요', '가아요', '갈요', '간요'], correct: 0, explanation: '가다 → 가요' }
      ]
    },
    {
      id: 'w4d2-object-particle',
      title: 'Object Particle 을/를',
      intro: `Today you'll learn the object marker - it marks what receives the action.

**Object Particle 을/를:**
- 을 after consonant: 밥 + 을 = 밥을
- 를 after vowel: 커피 + 를 = 커피를

**Sentence Pattern:**
\`\`\`
[Subject]는/은 + [Object]를/을 + [Verb]
\`\`\`

**Examples:**
- 저는 밥을 먹어요. (I eat rice)
- 저는 커피를 마셔요. (I drink coffee)
- 저는 한국어를 공부해요. (I study Korean)`,
      studyGuide: [
        { korean: '을', romanization: 'eul', meaning: 'Object marker (after consonant)', example: '밥을 먹어요' },
        { korean: '를', romanization: 'reul', meaning: 'Object marker (after vowel)', example: '커피를 마셔요' },
        { korean: '먹어요', romanization: 'meogeoyo', meaning: 'Eat (polite)', example: 'From 먹다' }
      ],
      quiz: [
        { question: 'Fill in: 저는 커피___ 마셔요', options: ['을', '를', '은', '는'], correct: 1, explanation: '커피 ends in vowel, so 를' }
      ]
    },
    {
      id: 'w4d3-more-verbs',
      title: 'More Verbs: 먹다, 마시다, 보다',
      intro: `Today you'll learn three more essential daily verbs.

**New Verbs:**
| Dictionary | Meaning | Polite Form |
|------------|---------|-------------|
| 먹다 | to eat | 먹어요 |
| 마시다 | to drink | 마셔요 |
| 보다 | to see/watch | 봐요 |

**Conjugation:**
- 먹다: 먹 + 어요 = 먹어요 (ㅓ is dark)
- 마시다: 마시 + 어요 = 마셔요 (ㅣ + ㅓ = ㅕ)
- 보다: 보 + 아요 = 봐요 (ㅗ + ㅏ = ㅘ)`,
      studyGuide: [
        { korean: '먹어요', romanization: 'meogeoyo', meaning: 'Eat (polite)', example: '밥을 먹어요' },
        { korean: '마셔요', romanization: 'masyeoyo', meaning: 'Drink (polite)', example: '물을 마셔요' },
        { korean: '봐요', romanization: 'bwayo', meaning: 'See/watch (polite)', example: '영화를 봐요' }
      ],
      quiz: [
        { question: 'What is the polite form of 먹다?', options: ['먹아요', '먹어요', '먹요', '먹이요'], correct: 1, explanation: '먹다 → 먹어요 (ㅓ is dark vowel)' }
      ]
    },
    {
      id: 'w4d4-restaurant-dialogue',
      title: 'Restaurant Dialogue Practice',
      intro: `Today you'll learn a complete restaurant conversation.

**Restaurant Dialogue:**

**Server:** 어서오세요! 몇 분이세요?
(Welcome! How many people?)

**You:** 두 명이요.
(Two people.)

**Server:** 이쪽으로 오세요.
(Come this way.)

**You:** 비빔밥 두 개하고 물 주세요.
(Two bibimbaps and water please.)

**Server:** 네, 알겠습니다.
(Yes, understood.)

**[After eating]**

**You:** 맛있었어요! 계산이요.
(It was delicious! Check please.)`,
      studyGuide: [
        { korean: '어서오세요', romanization: 'eoseooseyo', meaning: 'Welcome', example: 'Said by staff' },
        { korean: '몇 분이세요?', romanization: 'myeot buniseyo?', meaning: 'How many people?', example: 'When entering' },
        { korean: '알겠습니다', romanization: 'algesseumnida', meaning: 'Understood', example: 'Staff acknowledgment' }
      ],
      quiz: [
        { question: 'How do you say "two people"?', options: ['두 개', '두 명', '이 명', '둘 분'], correct: 1, explanation: '두 명 = two people (명 is counter for people)' }
      ]
    },
    {
      id: 'w4d5-existence-verbs',
      title: '있다/없다 (Exist/Not Exist)',
      intro: `Today you'll learn the existence verbs - extremely useful for daily life!

**있다/없다:**
| Verb | Meaning | Polite |
|------|---------|--------|
| 있다 | to exist/have | 있어요 |
| 없다 | to not exist/not have | 없어요 |

**Uses:**
1. **Possession:** 돈이 있어요. (I have money.)
2. **Location:** 카페가 있어요. (There's a cafe.)
3. **Existence:** 시간이 없어요. (I don't have time.)

**Pattern:** [thing] + 이/가 + 있어요/없어요`,
      studyGuide: [
        { korean: '있어요', romanization: 'isseoyo', meaning: 'Have/exist (polite)', example: '시간이 있어요' },
        { korean: '없어요', romanization: 'eopseoyo', meaning: "Don't have/not exist", example: '돈이 없어요' },
        { korean: '뭐가 있어요?', romanization: 'mwoga isseoyo?', meaning: 'What do you have?', example: 'Asking about existence' }
      ],
      quiz: [
        { question: 'How do you say "I don\'t have money"?', options: ['돈을 없어요', '돈이 없어요', '돈은 있어요', '돈 없다'], correct: 1, explanation: '돈이 없어요 - use subject marker 이 with 없다' }
      ]
    },
    {
      id: 'w4d6-month1-review',
      title: 'Month 1 Assessment & Review',
      intro: `Congratulations on completing Month 1! Let's review what you've learned.

**Month 1 Achievements:**
- All Hangul letters (consonants + vowels)
- Double and aspirated consonants
- Syllable structure and batchim
- Basic greetings
- Self-introduction
- Numbers (native & Sino-Korean)
- Telling time
- Basic sentence structure (SOV)
- Particles: 은/는, 을/를
- Core verbs and conjugation
- 있다/없다
- Restaurant vocabulary

**You can now:**
- Read and write Korean
- Introduce yourself
- Count and tell time
- Order food at restaurants
- Make basic sentences`,
      studyGuide: [
        { korean: '잘했어요!', romanization: 'jalhaesseoyo!', meaning: 'Well done!', example: 'Celebrate your progress' },
        { korean: '화이팅!', romanization: 'hwaiting!', meaning: 'Fighting!/Good luck!', example: 'Korean encouragement' }
      ],
      quiz: [
        { question: 'What word order does Korean use?', options: ['SVO', 'SOV', 'VSO', 'OSV'], correct: 1, explanation: 'Korean uses SOV - verb at the end.' }
      ]
    },

    // WEEK 5: Expanding Grammar
    {
      id: 'w5d1-subject-particle',
      title: 'Subject Particle 이/가',
      intro: `Today you'll learn the subject marker - different from the topic marker!

**Subject Particle 이/가:**
- 이 after consonant: 책 + 이 = 책이
- 가 after vowel: 날씨 + 가 = 날씨가

**은/는 vs 이/가:**
- 은/는 = "As for X..." (topic, contrast)
- 이/가 = "X is the one that..." (subject, emphasis, new info)

**Example:**
- Q: 누가 했어요? (Who did it?)
- A: 제가 했어요. (I did it.) - emphasis on WHO`,
      studyGuide: [
        { korean: '이', romanization: 'i', meaning: 'Subject marker (after consonant)', example: '책이 있어요' },
        { korean: '가', romanization: 'ga', meaning: 'Subject marker (after vowel)', example: '날씨가 좋아요' },
        { korean: '누가', romanization: 'nuga', meaning: 'Who (subject)', example: '누가 했어요?' }
      ],
      quiz: [
        { question: 'Which particle marks NEW information?', options: ['은/는', '이/가', '을/를', '에'], correct: 1, explanation: '이/가 marks subjects and new/emphasized info.' }
      ]
    },
    {
      id: 'w5d2-location-particle',
      title: 'Location Particle 에',
      intro: `Today you'll learn 에 - the location and destination particle.

**에 Uses:**
1. **Location:** 학교에 있어요 (I'm at school)
2. **Destination:** 학교에 가요 (I go to school)
3. **Time:** 세 시에 (at 3 o'clock)

**Pattern:**
\`\`\`
[Place] + 에 + 있다/가다/오다
\`\`\`

**Examples:**
- 집에 있어요. (I'm at home.)
- 카페에 가요. (I'm going to the cafe.)
- 월요일에 만나요. (Let's meet on Monday.)`,
      studyGuide: [
        { korean: '에', romanization: 'e', meaning: 'At/to/on', example: 'Location & destination marker' },
        { korean: '집에', romanization: 'jibe', meaning: 'At home/to home', example: '집에 가요' },
        { korean: '학교에', romanization: 'hakgyoe', meaning: 'At school/to school', example: '학교에 있어요' }
      ],
      quiz: [
        { question: 'Fill in: 카페___ 가요', options: ['에서', '에', '을', '는'], correct: 1, explanation: '에 marks destination: 카페에 가요' }
      ]
    },
    {
      id: 'w5d3-action-location',
      title: 'Action Location 에서',
      intro: `Today you'll learn 에서 - where ACTIONS happen.

**에 vs 에서:**
- 에 = static location or destination
- 에서 = where you DO something

**The Rule:**
\`\`\`
Doing something there? → Use 에서
Just being/going there? → Use 에
\`\`\`

**Examples:**
- 카페에서 공부해요. (I study AT the cafe.)
- 집에서 일해요. (I work AT home.)
- 한국에서 왔어요. (I came FROM Korea.)`,
      studyGuide: [
        { korean: '에서', romanization: 'eseo', meaning: 'At (action location)/from', example: 'Where actions happen' },
        { korean: '카페에서 공부해요', romanization: 'kapeeeseo gongbuhaeyo', meaning: 'I study at the cafe', example: 'Action location' },
        { korean: '어디에서 왔어요?', romanization: 'eodieseo wasseoyo?', meaning: 'Where are you from?', example: 'Asking origin' }
      ],
      quiz: [
        { question: 'Which is correct for "I work at home"?', options: ['집에 일해요', '집에서 일해요', '집을 일해요', '집이 일해요'], correct: 1, explanation: 'Use 에서 for action locations.' }
      ]
    },
    {
      id: 'w5d4-negation-an',
      title: 'Negation with 안',
      intro: `Today you'll learn the simple way to make negative sentences.

**안 Negation Pattern:**
\`\`\`
안 + Verb = don't/doesn't [verb]
\`\`\`

**Examples:**
- 먹어요 → 안 먹어요 (don't eat)
- 가요 → 안 가요 (don't go)
- 해요 → 안 해요 (don't do)
- 좋아요 → 안 좋아요 (not good)

**Position:** 안 always goes DIRECTLY before the verb.`,
      studyGuide: [
        { korean: '안', romanization: 'an', meaning: 'Not/don\'t', example: 'Simple negation' },
        { korean: '안 먹어요', romanization: 'an meogeoyo', meaning: "I don't eat", example: 'Negating 먹다' },
        { korean: '안 해요', romanization: 'an haeyo', meaning: "I don't do", example: 'Negating 하다' }
      ],
      quiz: [
        { question: 'How do you say "I don\'t go"?', options: ['가요 안', '안 가요', '가 안요', '않 가요'], correct: 1, explanation: '안 goes before the verb: 안 가요' }
      ]
    },
    {
      id: 'w5d5-adjectives-basic',
      title: 'Basic Adjectives as Verbs',
      intro: `Today you'll learn that Korean adjectives work like verbs!

**Adjective = Descriptive Verb:**
| Dictionary | Meaning | Polite |
|------------|---------|--------|
| 크다 | to be big | 커요 |
| 작다 | to be small | 작아요 |
| 좋다 | to be good | 좋아요 |
| 맛있다 | to be delicious | 맛있어요 |
| 예쁘다 | to be pretty | 예뻐요 |

**Examples:**
- 방이 커요. (The room is big.)
- 음식이 맛있어요. (The food is delicious.)`,
      studyGuide: [
        { korean: '커요', romanization: 'keoyo', meaning: 'Is big', example: '방이 커요' },
        { korean: '작아요', romanization: 'jagayo', meaning: 'Is small', example: '가방이 작아요' },
        { korean: '좋아요', romanization: 'joayo', meaning: 'Is good', example: '날씨가 좋아요' },
        { korean: '예뻐요', romanization: 'yeppeoyo', meaning: 'Is pretty', example: '꽃이 예뻐요' }
      ],
      quiz: [
        { question: 'How do you say "The weather is good"?', options: ['날씨가 좋다', '날씨가 좋아요', '날씨를 좋아요', '좋아요 날씨'], correct: 1, explanation: '날씨가 좋아요 - subject + adjective verb' }
      ]
    },
    {
      id: 'w5d6-question-words',
      title: 'Question Words: 뭐, 누구, 어디',
      intro: `Today you'll learn essential question words.

**Question Words:**
| Korean | Meaning | Example |
|--------|---------|---------|
| 뭐 | what | 뭐예요? (What is it?) |
| 누구 | who | 누구예요? (Who is it?) |
| 어디 | where | 어디예요? (Where is it?) |
| 언제 | when | 언제예요? (When is it?) |
| 왜 | why | 왜요? (Why?) |

**Key:** Question words stay IN PLACE in Korean sentences.
- English: What do you eat?
- Korean: 뭐 먹어요? (You eat what?)`,
      studyGuide: [
        { korean: '뭐', romanization: 'mwo', meaning: 'What', example: '뭐 해요?' },
        { korean: '누구', romanization: 'nugu', meaning: 'Who', example: '누구예요?' },
        { korean: '어디', romanization: 'eodi', meaning: 'Where', example: '어디에 가요?' },
        { korean: '언제', romanization: 'eonje', meaning: 'When', example: '언제 와요?' },
        { korean: '왜', romanization: 'wae', meaning: 'Why', example: '왜요?' }
      ],
      quiz: [
        { question: 'How do you ask "What are you doing?"', options: ['해요 뭐?', '뭐 해요?', '무슨 해요?', '뭐를 해요?'], correct: 1, explanation: '뭐 해요? - question word stays in place' }
      ]
    },

    // WEEK 6: Past & Future Tense
    {
      id: 'w6d1-past-tense',
      title: 'Past Tense: -았/었어요',
      intro: `Today you'll learn to talk about the past!

**Past Tense Formula:**
\`\`\`
Stem + 았/었어요
- 았 after bright vowels (ㅏ, ㅗ)
- 었 after dark vowels (everything else)
- 했 for 하다 verbs
\`\`\`

**Examples:**
| Present | Past |
|---------|------|
| 가요 | 갔어요 (went) |
| 먹어요 | 먹었어요 (ate) |
| 해요 | 했어요 (did) |
| 봐요 | 봤어요 (saw) |`,
      studyGuide: [
        { korean: '갔어요', romanization: 'gasseoyo', meaning: 'Went', example: '학교에 갔어요' },
        { korean: '먹었어요', romanization: 'meogeosseoyo', meaning: 'Ate', example: '밥을 먹었어요' },
        { korean: '했어요', romanization: 'haesseoyo', meaning: 'Did', example: '공부했어요' }
      ],
      quiz: [
        { question: 'What is the past tense of 먹다?', options: ['먹았어요', '먹었어요', '먹해요', '먹이요'], correct: 1, explanation: '먹 has ㅓ (dark), so 먹었어요' }
      ]
    },
    {
      id: 'w6d2-past-practice',
      title: 'Past Tense Practice',
      intro: `Today you'll practice more past tense conjugations.

**More Past Tense Examples:**
| Dictionary | Present | Past |
|------------|---------|------|
| 오다 (come) | 와요 | 왔어요 |
| 마시다 (drink) | 마셔요 | 마셨어요 |
| 보다 (see) | 봐요 | 봤어요 |
| 읽다 (read) | 읽어요 | 읽었어요 |
| 쓰다 (write) | 써요 | 썼어요 |

**Practice Sentences:**
- 어제 뭐 했어요? (What did you do yesterday?)
- 커피를 마셨어요. (I drank coffee.)`,
      studyGuide: [
        { korean: '왔어요', romanization: 'wasseoyo', meaning: 'Came', example: '친구가 왔어요' },
        { korean: '마셨어요', romanization: 'masyeosseoyo', meaning: 'Drank', example: '물을 마셨어요' },
        { korean: '어제', romanization: 'eoje', meaning: 'Yesterday', example: '어제 뭐 했어요?' }
      ],
      quiz: [
        { question: 'How do you say "I drank coffee"?', options: ['커피를 마셔요', '커피를 마셨어요', '커피를 마시다', '커피를 마심어요'], correct: 1, explanation: '마시다 → 마셨어요 (past)' }
      ]
    },
    {
      id: 'w6d3-future-tense',
      title: 'Future Tense: -(으)ㄹ 거예요',
      intro: `Today you'll learn to talk about the future!

**Future Tense Formula:**
\`\`\`
Stem + (으)ㄹ 거예요
- 을 거예요 after consonant
- ㄹ 거예요 after vowel
\`\`\`

**Examples:**
| Dictionary | Future |
|------------|--------|
| 가다 | 갈 거예요 (will go) |
| 먹다 | 먹을 거예요 (will eat) |
| 하다 | 할 거예요 (will do) |
| 보다 | 볼 거예요 (will see) |`,
      studyGuide: [
        { korean: '갈 거예요', romanization: 'gal geoyeyo', meaning: 'Will go', example: '내일 갈 거예요' },
        { korean: '먹을 거예요', romanization: 'meogeul geoyeyo', meaning: 'Will eat', example: '밥을 먹을 거예요' },
        { korean: '내일', romanization: 'naeil', meaning: 'Tomorrow', example: '내일 뭐 할 거예요?' }
      ],
      quiz: [
        { question: 'How do you say "I will go"?', options: ['가요', '갔어요', '갈 거예요', '가을 거예요'], correct: 2, explanation: '가다 → 갈 거예요 (future)' }
      ]
    },
    {
      id: 'w6d4-time-expressions',
      title: 'Time Expressions: 오늘, 어제, 내일',
      intro: `Today you'll learn essential time words.

**Time Words:**
| Korean | Meaning |
|--------|---------|
| 오늘 | today |
| 어제 | yesterday |
| 내일 | tomorrow |
| 지금 | now |
| 나중에 | later |
| 아까 | earlier/a while ago |

**Time in Sentences:**
Time words usually come near the beginning.
- 오늘 뭐 해요? (What are you doing today?)
- 어제 영화 봤어요. (I watched a movie yesterday.)
- 내일 학교에 갈 거예요. (I will go to school tomorrow.)`,
      studyGuide: [
        { korean: '오늘', romanization: 'oneul', meaning: 'Today', example: '오늘 뭐 해요?' },
        { korean: '어제', romanization: 'eoje', meaning: 'Yesterday', example: '어제 뭐 했어요?' },
        { korean: '내일', romanization: 'naeil', meaning: 'Tomorrow', example: '내일 만나요' },
        { korean: '지금', romanization: 'jigeum', meaning: 'Now', example: '지금 뭐 해요?' }
      ],
      quiz: [
        { question: 'What does 내일 mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Now'], correct: 2, explanation: '내일 = tomorrow' }
      ]
    },
    {
      id: 'w6d5-want-to',
      title: 'Expressing Want: -고 싶다',
      intro: `Today you'll learn to say what you want to do!

**Want Pattern:**
\`\`\`
Verb Stem + 고 싶어요 = want to [verb]
\`\`\`

**Examples:**
| Base | Want to... |
|------|------------|
| 가다 | 가고 싶어요 (want to go) |
| 먹다 | 먹고 싶어요 (want to eat) |
| 보다 | 보고 싶어요 (want to see) |
| 자다 | 자고 싶어요 (want to sleep) |

**Sentences:**
- 한국에 가고 싶어요. (I want to go to Korea.)
- 피자 먹고 싶어요. (I want to eat pizza.)`,
      studyGuide: [
        { korean: '-고 싶어요', romanization: '-go sipeoyo', meaning: 'Want to...', example: 'Expressing desires' },
        { korean: '가고 싶어요', romanization: 'gago sipeoyo', meaning: 'Want to go', example: '한국에 가고 싶어요' },
        { korean: '먹고 싶어요', romanization: 'meokgo sipeoyo', meaning: 'Want to eat', example: '뭐 먹고 싶어요?' }
      ],
      quiz: [
        { question: 'How do you say "I want to eat"?', options: ['먹어요', '먹고 싶어요', '먹을 거예요', '먹었어요'], correct: 1, explanation: '먹다 + 고 싶어요 = 먹고 싶어요' }
      ]
    },
    {
      id: 'w6d6-daily-routine',
      title: 'Talking About Daily Routine',
      intro: `Today you'll learn to describe your daily activities.

**Daily Routine Verbs:**
| Korean | Meaning |
|--------|---------|
| 일어나다 | to wake up |
| 씻다 | to wash |
| 먹다 | to eat |
| 출근하다 | to go to work |
| 공부하다 | to study |
| 운동하다 | to exercise |
| 자다 | to sleep |

**Example Routine:**
아침에 일어나요. (I wake up in the morning.)
밥을 먹어요. (I eat.)
학교에 가요. (I go to school.)
밤에 자요. (I sleep at night.)`,
      studyGuide: [
        { korean: '일어나요', romanization: 'ireonayo', meaning: 'Wake up', example: '아침에 일어나요' },
        { korean: '씻어요', romanization: 'ssiseoyo', meaning: 'Wash up', example: '아침에 씻어요' },
        { korean: '아침', romanization: 'achim', meaning: 'Morning', example: '아침에 = in the morning' },
        { korean: '밤', romanization: 'bam', meaning: 'Night', example: '밤에 = at night' }
      ],
      quiz: [
        { question: 'What does 일어나다 mean?', options: ['To sleep', 'To wake up', 'To eat', 'To work'], correct: 1, explanation: '일어나다 = to wake up' }
      ]
    },

    // WEEK 7: Connectors & Complex Sentences
    {
      id: 'w7d1-and-connector',
      title: 'Connector: -고 (and/then)',
      intro: `Today you'll learn to connect actions with -고.

**-고 Pattern:**
\`\`\`
Verb Stem + 고 = and/and then
\`\`\`

**Examples:**
- 밥을 먹고 커피를 마셔요.
  (I eat rice AND drink coffee.)
- 일어나고 씻어요.
  (I wake up AND wash.)
- 공부하고 자요.
  (I study AND THEN sleep.)

**Note:** -고 connects actions in sequence or simultaneously.`,
      studyGuide: [
        { korean: '-고', romanization: '-go', meaning: 'And/and then', example: 'Connects verbs' },
        { korean: '먹고', romanization: 'meokgo', meaning: 'Eat and...', example: '먹고 마셔요' },
        { korean: '공부하고', romanization: 'gongbuhago', meaning: 'Study and...', example: '공부하고 자요' }
      ],
      quiz: [
        { question: 'How do you say "I eat and sleep"?', options: ['먹어요 자요', '먹고 자요', '먹고 싶어요', '먹으면 자요'], correct: 1, explanation: '먹고 자요 = eat and sleep' }
      ]
    },
    {
      id: 'w7d2-but-connector',
      title: 'Connector: -지만 (but)',
      intro: `Today you'll learn to express contrast with -지만.

**-지만 Pattern:**
\`\`\`
Verb/Adj Stem + 지만 = but/however
\`\`\`

**Examples:**
- 비싸지만 맛있어요.
  (It's expensive BUT delicious.)
- 피곤하지만 공부해요.
  (I'm tired BUT I study.)
- 한국어는 어렵지만 재미있어요.
  (Korean is difficult BUT interesting.)`,
      studyGuide: [
        { korean: '-지만', romanization: '-jiman', meaning: 'But/however', example: 'Shows contrast' },
        { korean: '비싸지만', romanization: 'bissajiman', meaning: 'Expensive but...', example: '비싸지만 좋아요' },
        { korean: '어렵지만', romanization: 'eoryeopjiman', meaning: 'Difficult but...', example: '어렵지만 재미있어요' }
      ],
      quiz: [
        { question: 'How do you say "expensive but good"?', options: ['비싸고 좋아요', '비싸지만 좋아요', '비싸면 좋아요', '비싸서 좋아요'], correct: 1, explanation: '-지만 shows contrast' }
      ]
    },
    {
      id: 'w7d3-because-connector',
      title: 'Connector: -아서/어서 (because/so)',
      intro: `Today you'll learn to express cause and effect.

**-아서/어서 Pattern:**
\`\`\`
Verb Stem + 아서/어서 = because/so
- 아서 after bright vowels (ㅏ, ㅗ)
- 어서 after dark vowels
- 해서 for 하다
\`\`\`

**Examples:**
- 배고파서 먹어요. (I'm hungry SO I eat.)
- 피곤해서 잤어요. (I was tired SO I slept.)
- 맛있어서 많이 먹었어요. (It was delicious SO I ate a lot.)`,
      studyGuide: [
        { korean: '-아서/어서', romanization: '-aseo/eoseo', meaning: 'Because/so', example: 'Cause and effect' },
        { korean: '배고파서', romanization: 'baegopaseo', meaning: 'Because I\'m hungry', example: '배고파서 먹어요' },
        { korean: '피곤해서', romanization: 'pigonhaeseo', meaning: 'Because I\'m tired', example: '피곤해서 자요' }
      ],
      quiz: [
        { question: 'How do you say "Because I\'m tired, I sleep"?', options: ['피곤하고 자요', '피곤하지만 자요', '피곤해서 자요', '피곤하면 자요'], correct: 2, explanation: '-해서 shows reason: 피곤해서 자요' }
      ]
    },
    {
      id: 'w7d4-if-connector',
      title: 'Connector: -(으)면 (if/when)',
      intro: `Today you'll learn conditional sentences with -(으)면.

**-(으)면 Pattern:**
\`\`\`
Verb Stem + (으)면 = if/when
- 으면 after consonant
- 면 after vowel
\`\`\`

**Examples:**
- 시간이 있으면 가요. (If I have time, I'll go.)
- 배고프면 먹어요. (If you're hungry, eat.)
- 돈이 있으면 사고 싶어요. (If I have money, I want to buy it.)`,
      studyGuide: [
        { korean: '-(으)면', romanization: '-(eu)myeon', meaning: 'If/when', example: 'Conditional' },
        { korean: '있으면', romanization: 'isseumyeon', meaning: 'If there is/have', example: '시간이 있으면' },
        { korean: '가면', romanization: 'gamyeon', meaning: 'If you go', example: '한국에 가면' }
      ],
      quiz: [
        { question: 'How do you say "if I have time"?', options: ['시간이 있어서', '시간이 있으면', '시간이 있고', '시간이 있지만'], correct: 1, explanation: '있으면 = if (I) have' }
      ]
    },
    {
      id: 'w7d5-can-cannot',
      title: 'Can/Cannot: -(으)ㄹ 수 있다/없다',
      intro: `Today you'll learn to express ability.

**Can/Cannot Pattern:**
\`\`\`
Verb Stem + (으)ㄹ 수 있어요 = can
Verb Stem + (으)ㄹ 수 없어요 = cannot
\`\`\`

**Examples:**
- 한국어를 할 수 있어요. (I can speak Korean.)
- 수영을 할 수 없어요. (I cannot swim.)
- 운전을 할 수 있어요? (Can you drive?)

**Short form for can't:** 못 + verb
- 못 먹어요. (I can't eat.)`,
      studyGuide: [
        { korean: '할 수 있어요', romanization: 'hal su isseoyo', meaning: 'Can do', example: '한국어를 할 수 있어요' },
        { korean: '할 수 없어요', romanization: 'hal su eopseoyo', meaning: 'Cannot do', example: '못 해요 (short form)' },
        { korean: '못', romanization: 'mot', meaning: 'Cannot (short)', example: '못 먹어요' }
      ],
      quiz: [
        { question: 'How do you say "I can speak Korean"?', options: ['한국어를 해요', '한국어를 할 수 있어요', '한국어를 못 해요', '한국어를 하고 싶어요'], correct: 1, explanation: '할 수 있어요 = can do' }
      ]
    },
    {
      id: 'w7d6-week7-review',
      title: 'Week 7 Review: Connectors',
      intro: `Let's review the sentence connectors you learned this week.

**Connector Summary:**
| Connector | Meaning | Example |
|-----------|---------|---------|
| -고 | and/then | 먹고 자요 |
| -지만 | but | 어렵지만 재미있어요 |
| -아서/어서 | because/so | 배고파서 먹어요 |
| -(으)면 | if/when | 시간이 있으면 |

**Practice combining ideas:**
한국어는 어렵지만 재미있어서 매일 공부해요.
(Korean is difficult but interesting, so I study every day.)`,
      studyGuide: [
        { korean: '-고', romanization: '-go', meaning: 'And/then', example: 'Sequence' },
        { korean: '-지만', romanization: '-jiman', meaning: 'But', example: 'Contrast' },
        { korean: '-아서/어서', romanization: '-aseo/eoseo', meaning: 'Because/so', example: 'Reason' },
        { korean: '-(으)면', romanization: '-(eu)myeon', meaning: 'If/when', example: 'Condition' }
      ],
      quiz: [
        { question: 'Which connector shows reason?', options: ['-고', '-지만', '-아서/어서', '-(으)면'], correct: 2, explanation: '-아서/어서 shows cause/reason' }
      ]
    },

    // WEEK 8: Practical Conversations
    {
      id: 'w8d1-shopping-vocab',
      title: 'Shopping Vocabulary',
      intro: `Today you'll learn essential shopping vocabulary.

**Shopping Words:**
| Korean | Meaning |
|--------|---------|
| 가게 | store |
| 시장 | market |
| 마트 | supermarket |
| 백화점 | department store |
| 돈 | money |
| 카드 | card |
| 현금 | cash |
| 영수증 | receipt |

**Price Words:**
- 원 (won) - Korean currency
- 얼마예요? - How much?
- 비싸요 - It's expensive
- 싸요 - It's cheap`,
      studyGuide: [
        { korean: '얼마예요?', romanization: 'eolmayeyo?', meaning: 'How much?', example: '이거 얼마예요?' },
        { korean: '비싸요', romanization: 'bissayo', meaning: "It's expensive", example: 'Price reaction' },
        { korean: '싸요', romanization: 'ssayo', meaning: "It's cheap", example: 'Price reaction' },
        { korean: '카드 돼요?', romanization: 'kadeu dwaeyo?', meaning: 'Can I use card?', example: 'Payment question' }
      ],
      quiz: [
        { question: 'How do you ask "How much is this?"', options: ['이거 뭐예요?', '이거 얼마예요?', '이거 어디예요?', '이거 있어요?'], correct: 1, explanation: '얼마예요 asks about price' }
      ]
    },
    {
      id: 'w8d2-shopping-dialogue',
      title: 'Shopping Dialogue Practice',
      intro: `Today you'll practice a shopping conversation.

**Shopping Dialogue:**

**You:** 이거 얼마예요?
(How much is this?)

**Clerk:** 만 오천 원이에요.
(It's 15,000 won.)

**You:** 좀 비싸요. 깎아 주세요.
(It's a bit expensive. Please give me a discount.)

**Clerk:** 만 이천 원에 드릴게요.
(I'll give it to you for 12,000 won.)

**You:** 좋아요. 카드 돼요?
(Good. Can I use a card?)

**Clerk:** 네, 돼요.
(Yes, you can.)`,
      studyGuide: [
        { korean: '깎아 주세요', romanization: 'kkakka juseyo', meaning: 'Please give a discount', example: 'At markets' },
        { korean: '좀 비싸요', romanization: 'jom bissayo', meaning: 'A bit expensive', example: 'Polite reaction' },
        { korean: '드릴게요', romanization: 'deurilgeyo', meaning: 'I will give (humble)', example: 'Clerk language' }
      ],
      quiz: [
        { question: 'How do you ask for a discount?', options: ['돈 주세요', '깎아 주세요', '싸 주세요', '얼마 주세요'], correct: 1, explanation: '깎아 주세요 = please discount' }
      ]
    },
    {
      id: 'w8d3-directions-vocab',
      title: 'Directions Vocabulary',
      intro: `Today you'll learn words for asking and giving directions.

**Direction Words:**
| Korean | Meaning |
|--------|---------|
| 직진 | straight |
| 오른쪽 | right |
| 왼쪽 | left |
| 이쪽 | this way |
| 저쪽 | that way |
| 앞 | front |
| 뒤 | back |
| 옆 | side/beside |

**Useful Phrases:**
- 어디예요? - Where is it?
- 어떻게 가요? - How do I get there?
- 직진하세요 - Go straight
- 오른쪽으로 가세요 - Go right`,
      studyGuide: [
        { korean: '직진하세요', romanization: 'jikjinhaseyo', meaning: 'Go straight', example: 'Direction instruction' },
        { korean: '오른쪽', romanization: 'oreunjjok', meaning: 'Right', example: '오른쪽으로 가세요' },
        { korean: '왼쪽', romanization: 'oenjjok', meaning: 'Left', example: '왼쪽으로 가세요' },
        { korean: '어떻게 가요?', romanization: 'eotteoke gayo?', meaning: 'How do I get there?', example: 'Asking directions' }
      ],
      quiz: [
        { question: 'How do you say "go straight"?', options: ['오른쪽', '직진하세요', '왼쪽으로', '저쪽에'], correct: 1, explanation: '직진하세요 = go straight' }
      ]
    },
    {
      id: 'w8d4-directions-dialogue',
      title: 'Asking for Directions',
      intro: `Today you'll practice asking for directions.

**Directions Dialogue:**

**You:** 저기요, 지하철역이 어디예요?
(Excuse me, where is the subway station?)

**Person:** 여기서 직진하세요. 그리고 오른쪽으로 가세요.
(Go straight from here. Then go right.)

**You:** 멀어요?
(Is it far?)

**Person:** 아니요, 5분쯤 걸려요.
(No, it takes about 5 minutes.)

**You:** 감사합니다!
(Thank you!)`,
      studyGuide: [
        { korean: '저기요', romanization: 'jeogiyo', meaning: 'Excuse me', example: 'Getting attention' },
        { korean: '멀어요?', romanization: 'meoreoyo?', meaning: 'Is it far?', example: 'Asking distance' },
        { korean: '걸려요', romanization: 'geollyeoyo', meaning: 'It takes (time)', example: '5분쯤 걸려요' },
        { korean: '쯤', romanization: 'jjeum', meaning: 'About/approximately', example: '5분쯤' }
      ],
      quiz: [
        { question: 'How do you say "Is it far?"', options: ['어디예요?', '멀어요?', '가까워요?', '어떻게요?'], correct: 1, explanation: '멀어요 = Is it far?' }
      ]
    },
    {
      id: 'w8d5-telephone-basics',
      title: 'Telephone Korean',
      intro: `Today you'll learn basic phone conversation skills.

**Phone Phrases:**
| Korean | Meaning |
|--------|---------|
| 여보세요 | Hello (on phone) |
| 누구세요? | Who is this? |
| 잠깐만요 | Just a moment |
| 다시 한번 말해 주세요 | Please say that again |
| 전화번호가 뭐예요? | What's your phone number? |
| 문자 보낼게요 | I'll send a text |

**Number Pattern:**
Phone numbers are read digit by digit using Sino-Korean.
010-1234-5678 = 공일공-일이삼사-오육칠팔`,
      studyGuide: [
        { korean: '여보세요', romanization: 'yeoboseyo', meaning: 'Hello (phone)', example: 'Answering calls' },
        { korean: '잠깐만요', romanization: 'jamkkanmanyo', meaning: 'Just a moment', example: 'Please wait' },
        { korean: '전화번호', romanization: 'jeonhwabeonho', meaning: 'Phone number', example: '전화번호가 뭐예요?' },
        { korean: '공', romanization: 'gong', meaning: 'Zero', example: 'Used in phone numbers' }
      ],
      quiz: [
        { question: 'What do you say when answering the phone?', options: ['안녕하세요', '여보세요', '감사합니다', '죄송합니다'], correct: 1, explanation: '여보세요 = Hello (phone only)' }
      ]
    },
    {
      id: 'w8d6-month2-review',
      title: 'Month 2 Assessment & Review',
      intro: `Congratulations on completing Month 2! Let's review.

**Month 2 Achievements:**
- Subject particle 이/가
- Location particles 에/에서
- Negation with 안
- Adjectives as verbs
- Question words
- Past tense -았/었어요
- Future tense -(으)ㄹ 거예요
- Want: -고 싶어요
- Connectors: -고, -지만, -아서/어서, -(으)면
- Can/cannot: -(으)ㄹ 수 있다/없다
- Shopping and directions vocabulary

**You can now:**
- Talk about past and future events
- Express wants and abilities
- Connect ideas in complex sentences
- Navigate shopping and asking directions`,
      studyGuide: [
        { korean: '잘했어요!', romanization: 'jalhaesseoyo!', meaning: 'Well done!', example: 'You completed Month 2!' },
        { korean: '계속 화이팅!', romanization: 'gyesok hwaiting!', meaning: 'Keep fighting!', example: 'Keep going!' }
      ],
      quiz: [
        { question: 'Which tense uses -았/었어요?', options: ['Present', 'Past', 'Future', 'Want'], correct: 1, explanation: '-았/었어요 is past tense' }
      ]
    },

    // WEEK 9: Honorifics & Politeness
    {
      id: 'w9d1-speech-levels',
      title: 'Understanding Speech Levels',
      intro: `Today you'll learn about Korean speech levels - essential for proper communication.

**The Main Speech Levels:**
| Level | Ending | Usage |
|-------|--------|-------|
| 합니다체 | -습니다/-ㅂ니다 | Formal, business, news |
| 해요체 | -아요/-어요 | Polite, everyday |
| 반말 | -아/-어 | Casual, friends |

**When to Use Each:**
- 합니다체: Job interviews, presentations, elderly
- 해요체: Default for strangers, daily life
- 반말: Close friends your age or younger

**Rule:** When in doubt, use 해요체!`,
      studyGuide: [
        { korean: '합니다', romanization: 'hamnida', meaning: 'Do (formal)', example: '감사합니다' },
        { korean: '해요', romanization: 'haeyo', meaning: 'Do (polite)', example: '뭐 해요?' },
        { korean: '해', romanization: 'hae', meaning: 'Do (casual)', example: '뭐 해?' }
      ],
      quiz: [
        { question: 'Which speech level is safest with strangers?', options: ['합니다체', '해요체', '반말', 'Any'], correct: 1, explanation: '해요체 is the safe default for everyday situations' }
      ]
    },
    {
      id: 'w9d2-formal-style',
      title: 'Formal Style: -습니다/-ㅂ니다',
      intro: `Today you'll learn the formal polite style.

**Formal Ending Pattern:**
\`\`\`
Consonant stem + 습니다: 먹습니다
Vowel stem + ㅂ니다: 갑니다
\`\`\`

**Examples:**
| Dictionary | Formal |
|------------|--------|
| 가다 | 갑니다 (go) |
| 먹다 | 먹습니다 (eat) |
| 하다 | 합니다 (do) |
| 있다 | 있습니다 (have/exist) |

**Questions:** Add -까?
- 갑니까? (Do you go?)
- 먹습니까? (Do you eat?)`,
      studyGuide: [
        { korean: '갑니다', romanization: 'gamnida', meaning: 'Go (formal)', example: '학교에 갑니다' },
        { korean: '먹습니다', romanization: 'meoksseumnida', meaning: 'Eat (formal)', example: '밥을 먹습니다' },
        { korean: '합니다', romanization: 'hamnida', meaning: 'Do (formal)', example: '일합니다' }
      ],
      quiz: [
        { question: 'What is the formal form of 가다?', options: ['가요', '갑니다', '가십니다', '가습니다'], correct: 1, explanation: 'Vowel stem + ㅂ니다 = 갑니다' }
      ]
    },
    {
      id: 'w9d3-honorific-subjects',
      title: 'Honorific Subject Marker -(으)시-',
      intro: `Today you'll learn to speak respectfully about someone's actions.

**-(으)시- Pattern:**
\`\`\`
Add -(으)시- between stem and ending to honor the subject
- Consonant + 으시: 먹으시다
- Vowel + 시: 가시다
\`\`\`

**Examples:**
- 가다 → 가시다 → 가세요 (you/he/she goes - honorific)
- 먹다 → 드시다 (special honorific for eat)
- 있다 → 계시다 (special honorific for exist/stay)

**When to use:** For elders, teachers, bosses, customers`,
      studyGuide: [
        { korean: '가세요', romanization: 'gaseyo', meaning: 'Go (honorific)', example: '어디 가세요?' },
        { korean: '드세요', romanization: 'deuseyo', meaning: 'Eat (honorific)', example: '많이 드세요' },
        { korean: '계세요', romanization: 'gyeseyo', meaning: 'Stay/be (honorific)', example: '집에 계세요?' }
      ],
      quiz: [
        { question: 'Which is honorific for "Do you eat?"', options: ['먹어요?', '드세요?', '먹으세요?', '먹습니까?'], correct: 1, explanation: '드시다 is the honorific form of 먹다' }
      ]
    },
    {
      id: 'w9d4-humble-forms',
      title: 'Humble Forms: 저, 드리다',
      intro: `Today you'll learn humble forms used when speaking about yourself.

**Humble Vocabulary:**
| Regular | Humble | Meaning |
|---------|--------|---------|
| 나 | 저 | I/me |
| 우리 | 저희 | we/us |
| 주다 | 드리다 | to give (to superior) |
| 묻다 | 여쭤보다 | to ask (to superior) |

**Examples:**
- 저는 학생이에요. (I am a student. - humble)
- 선물을 드릴게요. (I will give you a gift. - humble)
- 질문 여쭤봐도 돼요? (May I ask a question? - humble)`,
      studyGuide: [
        { korean: '저', romanization: 'jeo', meaning: 'I (humble)', example: '저는 학생이에요' },
        { korean: '드리다', romanization: 'deurida', meaning: 'To give (humble)', example: '선물을 드릴게요' },
        { korean: '저희', romanization: 'jeohui', meaning: 'We (humble)', example: '저희 회사' }
      ],
      quiz: [
        { question: 'Which is the humble form of 나?', options: ['내', '저', '우리', '제'], correct: 1, explanation: '저 is the humble form of 나' }
      ]
    },
    {
      id: 'w9d5-polite-requests',
      title: 'Polite Requests: -아/어 주세요',
      intro: `Today you'll learn to make polite requests.

**Request Pattern:**
\`\`\`
Verb Stem + 아/어 주세요 = Please do [verb] for me
\`\`\`

**Examples:**
- 도와주세요. (Please help me.)
- 가르쳐 주세요. (Please teach me.)
- 기다려 주세요. (Please wait.)
- 사진 찍어 주세요. (Please take a photo for me.)

**Even more polite:** -아/어 주시겠어요?
- 도와주시겠어요? (Would you please help me?)`,
      studyGuide: [
        { korean: '-아/어 주세요', romanization: '-a/eo juseyo', meaning: 'Please do... for me', example: 'Making requests' },
        { korean: '도와주세요', romanization: 'dowajuseyo', meaning: 'Please help me', example: 'Asking for help' },
        { korean: '기다려 주세요', romanization: 'gidaryeo juseyo', meaning: 'Please wait', example: 'Asking someone to wait' }
      ],
      quiz: [
        { question: 'How do you say "Please help me"?', options: ['도와요', '도와주세요', '도움이에요', '도와 싶어요'], correct: 1, explanation: '도와주세요 = Please help me' }
      ]
    },
    {
      id: 'w9d6-politeness-practice',
      title: 'Politeness Level Practice',
      intro: `Today you'll practice switching between politeness levels.

**Same Sentence, Different Levels:**

"Do you eat rice?"
- Formal: 밥을 먹습니까?
- Polite: 밥 먹어요?
- Casual: 밥 먹어?
- Honorific: 밥 드세요?

**Situation Practice:**
- Boss: 사장님, 커피 드세요? (Boss, would you like coffee?)
- Friend: 야, 커피 마실래? (Hey, want coffee?)
- Stranger: 저기요, 커피 마셔요? (Excuse me, do you drink coffee?)`,
      studyGuide: [
        { korean: '밥 드세요?', romanization: 'bap deuseyo?', meaning: 'Do you eat? (honorific)', example: 'To elders' },
        { korean: '밥 먹어요?', romanization: 'bap meogeoyo?', meaning: 'Do you eat? (polite)', example: 'To strangers' },
        { korean: '밥 먹어?', romanization: 'bap meogeo?', meaning: 'Do you eat? (casual)', example: 'To friends' }
      ],
      quiz: [
        { question: 'Which is appropriate for your boss?', options: ['먹어', '먹어요', '드세요', '먹습니다'], correct: 2, explanation: 'Use honorific 드세요 with superiors' }
      ]
    },

    // WEEK 10: More Grammar Patterns
    {
      id: 'w10d1-progressive',
      title: 'Progressive: -고 있다 (Doing)',
      intro: `Today you'll learn to express ongoing actions.

**Progressive Pattern:**
\`\`\`
Verb Stem + 고 있어요 = am/is/are [verb]ing
\`\`\`

**Examples:**
- 먹고 있어요. (I am eating.)
- 공부하고 있어요. (I am studying.)
- 뭐 하고 있어요? (What are you doing?)
- 기다리고 있어요. (I am waiting.)

**Past Progressive:** -고 있었어요
- 자고 있었어요. (I was sleeping.)`,
      studyGuide: [
        { korean: '-고 있다', romanization: '-go itda', meaning: 'Be doing', example: 'Progressive tense' },
        { korean: '먹고 있어요', romanization: 'meokgo isseoyo', meaning: 'Am eating', example: '지금 먹고 있어요' },
        { korean: '뭐 하고 있어요?', romanization: 'mwo hago isseoyo?', meaning: 'What are you doing?', example: 'Asking current action' }
      ],
      quiz: [
        { question: 'How do you say "I am studying"?', options: ['공부해요', '공부하고 있어요', '공부했어요', '공부할 거예요'], correct: 1, explanation: '-고 있어요 = currently doing' }
      ]
    },
    {
      id: 'w10d2-trying-to',
      title: 'Trying to: -아/어 보다',
      intro: `Today you'll learn to express "trying" an action.

**Try Pattern:**
\`\`\`
Verb Stem + 아/어 보다 = try to [verb]
\`\`\`

**Examples:**
- 먹어 봐요. (Try eating it.)
- 해 봐요. (Try doing it.)
- 가 봤어요. (I tried going./I've been there.)
- 한번 해 볼게요. (I'll give it a try.)

**Common phrases:**
- 한번 해 보세요! (Try it once!)
- 먹어 본 적 있어요? (Have you tried eating it?)`,
      studyGuide: [
        { korean: '-아/어 보다', romanization: '-a/eo boda', meaning: 'Try to...', example: 'Trying actions' },
        { korean: '먹어 봐요', romanization: 'meogeo bwayo', meaning: 'Try eating', example: 'Suggesting to try' },
        { korean: '해 봤어요', romanization: 'hae bwasseoyo', meaning: 'I tried/have done', example: 'Past experience' }
      ],
      quiz: [
        { question: 'How do you say "Try it"?', options: ['해요', '해 봐요', '하고 있어요', '할 거예요'], correct: 1, explanation: '해 봐요 = try doing it' }
      ]
    },
    {
      id: 'w10d3-have-to',
      title: 'Have to: -아/어야 하다',
      intro: `Today you'll learn to express obligation.

**Must/Have to Pattern:**
\`\`\`
Verb Stem + 아/어야 해요 = have to [verb]
\`\`\`

**Examples:**
- 가야 해요. (I have to go.)
- 공부해야 해요. (I have to study.)
- 일찍 일어나야 해요. (I have to wake up early.)

**Stronger:** -아/어야 돼요 (same meaning)
- 빨리 가야 돼요. (I must go quickly.)

**Negative:** Don't have to = 안 -아/어도 돼요
- 안 가도 돼요. (You don't have to go.)`,
      studyGuide: [
        { korean: '-아/어야 해요', romanization: '-a/eoya haeyo', meaning: 'Have to...', example: 'Obligation' },
        { korean: '가야 해요', romanization: 'gaya haeyo', meaning: 'Have to go', example: '지금 가야 해요' },
        { korean: '안 해도 돼요', romanization: 'an haedo dwaeyo', meaning: "Don't have to do", example: 'No obligation' }
      ],
      quiz: [
        { question: 'How do you say "I have to go"?', options: ['가고 싶어요', '가야 해요', '갈 수 있어요', '가고 있어요'], correct: 1, explanation: '-아야 해요 = have to' }
      ]
    },
    {
      id: 'w10d4-permission',
      title: 'Permission: -아/어도 되다',
      intro: `Today you'll learn to ask for and give permission.

**Permission Pattern:**
\`\`\`
Verb Stem + 아/어도 돼요? = May I [verb]?
네, -아/어도 돼요. = Yes, you may.
아니요, -으면 안 돼요. = No, you may not.
\`\`\`

**Examples:**
- 들어가도 돼요? (May I come in?)
- 사진 찍어도 돼요? (May I take a photo?)
- 앉아도 돼요? (May I sit?)

**Denial:** -(으)면 안 돼요
- 여기서 담배 피우면 안 돼요. (You can't smoke here.)`,
      studyGuide: [
        { korean: '-아/어도 돼요?', romanization: '-a/eodo dwaeyo?', meaning: 'May I...?', example: 'Asking permission' },
        { korean: '들어가도 돼요?', romanization: 'deureogado dwaeyo?', meaning: 'May I enter?', example: 'At doors' },
        { korean: '-(으)면 안 돼요', romanization: '-(eu)myeon an dwaeyo', meaning: 'Must not...', example: 'Prohibition' }
      ],
      quiz: [
        { question: 'How do you ask "May I sit?"', options: ['앉아요?', '앉아도 돼요?', '앉을 거예요?', '앉고 싶어요?'], correct: 1, explanation: '-아도 돼요? asks permission' }
      ]
    },
    {
      id: 'w10d5-suggestion',
      title: 'Suggestions: -(으)ㄹ까요?, -(으)ㅂ시다',
      intro: `Today you'll learn to make suggestions.

**Suggestion Patterns:**

**"Shall we...?"**
\`\`\`
Verb Stem + (으)ㄹ까요? = Shall we [verb]?
\`\`\`
- 갈까요? (Shall we go?)
- 먹을까요? (Shall we eat?)

**"Let's..."**
\`\`\`
Verb Stem + (으)ㅂ시다 = Let's [verb] (formal)
\`\`\`
- 갑시다! (Let's go!)
- 먹읍시다! (Let's eat!)

**Casual "Let's":** -자
- 가자! (Let's go! - casual)`,
      studyGuide: [
        { korean: '-(으)ㄹ까요?', romanization: '-(eu)lkkayo?', meaning: 'Shall we...?', example: 'Suggesting together' },
        { korean: '갈까요?', romanization: 'galkkayo?', meaning: 'Shall we go?', example: 'Suggesting departure' },
        { korean: '갑시다', romanization: 'gapsida', meaning: "Let's go (formal)", example: 'Formal suggestion' }
      ],
      quiz: [
        { question: 'How do you say "Shall we eat?"', options: ['먹어요?', '먹을까요?', '먹읍시다', '먹자'], correct: 1, explanation: '-(으)ㄹ까요? = Shall we?' }
      ]
    },
    {
      id: 'w10d6-week10-review',
      title: 'Week 10 Review: Grammar Patterns',
      intro: `Let's review the grammar patterns from this week.

**Pattern Summary:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| -고 있다 | am doing | 먹고 있어요 |
| -아/어 보다 | try to | 해 봐요 |
| -아/어야 하다 | have to | 가야 해요 |
| -아/어도 되다 | may I | 가도 돼요? |
| -(으)ㄹ까요? | shall we | 갈까요? |

**These patterns let you:**
- Describe ongoing actions
- Suggest trying things
- Express obligation
- Ask for permission
- Make suggestions`,
      studyGuide: [
        { korean: '-고 있다', romanization: '-go itda', meaning: 'Progressive', example: 'Ongoing action' },
        { korean: '-아/어 보다', romanization: '-a/eo boda', meaning: 'Try', example: 'Attempting' },
        { korean: '-아/어야 하다', romanization: '-a/eoya hada', meaning: 'Have to', example: 'Obligation' },
        { korean: '-아/어도 되다', romanization: '-a/eodo doeda', meaning: 'May', example: 'Permission' }
      ],
      quiz: [
        { question: 'Which pattern expresses obligation?', options: ['-고 있다', '-아/어 보다', '-아/어야 하다', '-아/어도 되다'], correct: 2, explanation: '-아/어야 하다 = have to' }
      ]
    },

    // WEEK 11: Intermediate Vocabulary
    {
      id: 'w11d1-family-terms',
      title: 'Family Vocabulary',
      intro: `Today you'll learn family terms - important for Korean culture!

**Immediate Family:**
| Korean | Meaning |
|--------|---------|
| 아버지 | father |
| 어머니 | mother |
| 형 | older brother (male speaking) |
| 누나 | older sister (male speaking) |
| 오빠 | older brother (female speaking) |
| 언니 | older sister (female speaking) |
| 남동생 | younger brother |
| 여동생 | younger sister |

**Note:** Korean distinguishes who is speaking!`,
      studyGuide: [
        { korean: '아버지/아빠', romanization: 'abeoji/appa', meaning: 'Father/Dad', example: 'Formal/casual' },
        { korean: '어머니/엄마', romanization: 'eomeoni/eomma', meaning: 'Mother/Mom', example: 'Formal/casual' },
        { korean: '형/오빠', romanization: 'hyeong/oppa', meaning: 'Older brother', example: 'Male/female speaker' },
        { korean: '누나/언니', romanization: 'nuna/eonni', meaning: 'Older sister', example: 'Male/female speaker' }
      ],
      quiz: [
        { question: 'What does a girl call her older brother?', options: ['형', '오빠', '누나', '언니'], correct: 1, explanation: 'Girls call older brothers 오빠' }
      ]
    },
    {
      id: 'w11d2-body-parts',
      title: 'Body Parts',
      intro: `Today you'll learn body vocabulary.

**Body Parts:**
| Korean | Meaning |
|--------|---------|
| 머리 | head |
| 눈 | eye |
| 코 | nose |
| 입 | mouth |
| 귀 | ear |
| 손 | hand |
| 발 | foot |
| 다리 | leg |
| 팔 | arm |
| 배 | stomach |

**Useful phrases:**
- 머리가 아파요. (I have a headache.)
- 배가 아파요. (My stomach hurts.)`,
      studyGuide: [
        { korean: '머리', romanization: 'meori', meaning: 'Head', example: '머리가 아파요' },
        { korean: '눈', romanization: 'nun', meaning: 'Eye', example: '눈이 예뻐요' },
        { korean: '배', romanization: 'bae', meaning: 'Stomach', example: '배가 고파요' },
        { korean: '아프다', romanization: 'apeuda', meaning: 'To hurt/be sick', example: '어디가 아파요?' }
      ],
      quiz: [
        { question: 'How do you say "I have a headache"?', options: ['머리 있어요', '머리가 아파요', '머리를 먹어요', '머리예요'], correct: 1, explanation: '머리가 아파요 = My head hurts' }
      ]
    },
    {
      id: 'w11d3-weather',
      title: 'Weather Expressions',
      intro: `Today you'll learn to talk about weather.

**Weather Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 날씨 | weather |
| 비 | rain |
| 눈 | snow |
| 바람 | wind |
| 구름 | cloud |
| 맑다 | clear |
| 흐리다 | cloudy |
| 덥다 | hot |
| 춥다 | cold |

**Weather Sentences:**
- 오늘 날씨가 좋아요. (The weather is nice today.)
- 비가 와요. (It's raining.)
- 눈이 와요. (It's snowing.)`,
      studyGuide: [
        { korean: '날씨', romanization: 'nalssi', meaning: 'Weather', example: '날씨가 좋아요' },
        { korean: '비가 와요', romanization: 'biga wayo', meaning: "It's raining", example: 'Rain comes' },
        { korean: '덥다/춥다', romanization: 'deopda/chupda', meaning: 'Hot/cold', example: '오늘 더워요' }
      ],
      quiz: [
        { question: 'How do you say "It\'s raining"?', options: ['비예요', '비가 와요', '비가 있어요', '비 먹어요'], correct: 1, explanation: '비가 와요 = Rain is coming/It\'s raining' }
      ]
    },
    {
      id: 'w11d4-emotions',
      title: 'Emotions & Feelings',
      intro: `Today you'll learn to express emotions.

**Emotion Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 기쁘다 | happy/glad |
| 슬프다 | sad |
| 화나다 | angry |
| 무섭다 | scary/scared |
| 피곤하다 | tired |
| 심심하다 | bored |
| 걱정되다 | worried |
| 신나다 | excited |

**Expressing feelings:**
- 기뻐요! (I'm happy!)
- 슬퍼요. (I'm sad.)
- 화나요. (I'm angry.)`,
      studyGuide: [
        { korean: '기쁘다', romanization: 'gippeuda', meaning: 'Happy', example: '기뻐요!' },
        { korean: '슬프다', romanization: 'seulpeuda', meaning: 'Sad', example: '슬퍼요' },
        { korean: '피곤하다', romanization: 'pigonhada', meaning: 'Tired', example: '피곤해요' },
        { korean: '걱정되다', romanization: 'geokjeongdoeda', meaning: 'Worried', example: '걱정돼요' }
      ],
      quiz: [
        { question: 'How do you say "I\'m tired"?', options: ['기뻐요', '슬퍼요', '피곤해요', '화나요'], correct: 2, explanation: '피곤해요 = I\'m tired' }
      ]
    },
    {
      id: 'w11d5-hobbies',
      title: 'Hobbies & Activities',
      intro: `Today you'll learn hobby vocabulary.

**Hobby Words:**
| Korean | Meaning |
|--------|---------|
| 취미 | hobby |
| 영화 보다 | watch movies |
| 음악 듣다 | listen to music |
| 책 읽다 | read books |
| 운동하다 | exercise |
| 요리하다 | cook |
| 게임하다 | play games |
| 여행하다 | travel |
| 사진 찍다 | take photos |

**Talking about hobbies:**
- 취미가 뭐예요? (What's your hobby?)
- 제 취미는 영화 보기예요. (My hobby is watching movies.)`,
      studyGuide: [
        { korean: '취미', romanization: 'chwimi', meaning: 'Hobby', example: '취미가 뭐예요?' },
        { korean: '영화 보다', romanization: 'yeonghwa boda', meaning: 'Watch movies', example: '영화 봐요' },
        { korean: '음악 듣다', romanization: 'eumak deutda', meaning: 'Listen to music', example: '음악 들어요' },
        { korean: '여행하다', romanization: 'yeohaenghada', meaning: 'Travel', example: '여행하고 싶어요' }
      ],
      quiz: [
        { question: 'How do you ask "What\'s your hobby?"', options: ['취미 있어요?', '취미가 뭐예요?', '취미 해요?', '취미를 좋아해요?'], correct: 1, explanation: '취미가 뭐예요? = What is your hobby?' }
      ]
    },
    {
      id: 'w11d6-daily-objects',
      title: 'Daily Objects',
      intro: `Today you'll learn everyday object vocabulary.

**Common Objects:**
| Korean | Meaning |
|--------|---------|
| 핸드폰/휴대폰 | cell phone |
| 컴퓨터 | computer |
| 지갑 | wallet |
| 가방 | bag |
| 열쇠 | key |
| 안경 | glasses |
| 우산 | umbrella |
| 시계 | watch/clock |
| 책 | book |
| 의자 | chair |

**Useful phrases:**
- 핸드폰이 어디 있어요? (Where is my phone?)
- 가방에 있어요. (It's in the bag.)`,
      studyGuide: [
        { korean: '핸드폰', romanization: 'haendeupon', meaning: 'Cell phone', example: '핸드폰 어디 있어요?' },
        { korean: '지갑', romanization: 'jigap', meaning: 'Wallet', example: '지갑을 잃어버렸어요' },
        { korean: '우산', romanization: 'usan', meaning: 'Umbrella', example: '우산 있어요?' },
        { korean: '열쇠', romanization: 'yeolsoe', meaning: 'Key', example: '열쇠가 없어요' }
      ],
      quiz: [
        { question: 'What does 핸드폰 mean?', options: ['Computer', 'Cell phone', 'Wallet', 'Key'], correct: 1, explanation: '핸드폰 = cell phone' }
      ]
    },

    // WEEK 12: Mid-Course Review
    {
      id: 'w12d1-grammar-review',
      title: 'Grammar Review: Tenses',
      intro: `Today we'll review all the tenses you've learned.

**Tense Review:**
| Tense | Pattern | Example |
|-------|---------|---------|
| Present | -아/어요 | 먹어요 |
| Past | -았/었어요 | 먹었어요 |
| Future | -(으)ㄹ 거예요 | 먹을 거예요 |
| Progressive | -고 있어요 | 먹고 있어요 |

**Practice:**
가다 (to go):
- 가요 (go)
- 갔어요 (went)
- 갈 거예요 (will go)
- 가고 있어요 (am going)`,
      studyGuide: [
        { korean: '현재', romanization: 'hyeonjae', meaning: 'Present tense', example: '-아/어요' },
        { korean: '과거', romanization: 'gwageo', meaning: 'Past tense', example: '-았/었어요' },
        { korean: '미래', romanization: 'mirae', meaning: 'Future tense', example: '-(으)ㄹ 거예요' },
        { korean: '진행', romanization: 'jinhaeng', meaning: 'Progressive', example: '-고 있어요' }
      ],
      quiz: [
        { question: 'What is the past tense of 가다?', options: ['가요', '갔어요', '갈 거예요', '가고 있어요'], correct: 1, explanation: '갔어요 is past tense' }
      ]
    },
    {
      id: 'w12d2-particle-review',
      title: 'Grammar Review: Particles',
      intro: `Today we'll review all the particles you've learned.

**Particle Review:**
| Particle | Function | Example |
|----------|----------|---------|
| 은/는 | Topic | 저는 학생이에요 |
| 이/가 | Subject | 날씨가 좋아요 |
| 을/를 | Object | 밥을 먹어요 |
| 에 | Location/time | 학교에 가요 |
| 에서 | Action location | 카페에서 공부해요 |
| 하고/와/과 | And (nouns) | 밥하고 국 |

**Key distinction:**
- 에 = destination or static location
- 에서 = where actions happen`,
      studyGuide: [
        { korean: '은/는', romanization: 'eun/neun', meaning: 'Topic marker', example: '저는' },
        { korean: '이/가', romanization: 'i/ga', meaning: 'Subject marker', example: '뭐가' },
        { korean: '을/를', romanization: 'eul/reul', meaning: 'Object marker', example: '밥을' },
        { korean: '에/에서', romanization: 'e/eseo', meaning: 'Location markers', example: '학교에/학교에서' }
      ],
      quiz: [
        { question: 'Which particle marks where an action happens?', options: ['에', '에서', '을', '는'], correct: 1, explanation: '에서 marks action locations' }
      ]
    },
    {
      id: 'w12d3-connector-review',
      title: 'Grammar Review: Connectors',
      intro: `Today we'll review sentence connectors.

**Connector Review:**
| Connector | Meaning | Example |
|-----------|---------|---------|
| -고 | and/then | 먹고 자요 |
| -지만 | but | 비싸지만 좋아요 |
| -아서/어서 | because | 배고파서 먹어요 |
| -(으)면 | if/when | 시간이 있으면 |
| -(으)니까 | because (emphasis) | 바쁘니까 못 가요 |

**Combining connectors:**
한국어는 어렵지만 재미있어서 매일 공부해요.
(Korean is hard but interesting, so I study every day.)`,
      studyGuide: [
        { korean: '-고', romanization: '-go', meaning: 'And/then', example: 'Sequence' },
        { korean: '-지만', romanization: '-jiman', meaning: 'But', example: 'Contrast' },
        { korean: '-아서/어서', romanization: '-aseo/eoseo', meaning: 'Because', example: 'Reason' },
        { korean: '-(으)면', romanization: '-(eu)myeon', meaning: 'If', example: 'Condition' }
      ],
      quiz: [
        { question: 'Which shows contrast?', options: ['-고', '-지만', '-아서', '-(으)면'], correct: 1, explanation: '-지만 = but/however' }
      ]
    },
    {
      id: 'w12d4-expression-review',
      title: 'Grammar Review: Expressions',
      intro: `Today we'll review key expression patterns.

**Expression Patterns:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| -고 싶다 | want to | 가고 싶어요 |
| -(으)ㄹ 수 있다 | can | 할 수 있어요 |
| -아/어야 하다 | have to | 가야 해요 |
| -아/어도 되다 | may | 가도 돼요? |
| -아/어 보다 | try | 해 봐요 |
| -(으)ㄹ까요? | shall we | 갈까요? |`,
      studyGuide: [
        { korean: '-고 싶다', romanization: '-go sipda', meaning: 'Want to', example: 'Desire' },
        { korean: '-(으)ㄹ 수 있다', romanization: '-(eu)l su itda', meaning: 'Can', example: 'Ability' },
        { korean: '-아/어야 하다', romanization: '-a/eoya hada', meaning: 'Have to', example: 'Obligation' },
        { korean: '-아/어도 되다', romanization: '-a/eodo doeda', meaning: 'May', example: 'Permission' }
      ],
      quiz: [
        { question: 'Which means "want to"?', options: ['-고 싶다', '-(으)ㄹ 수 있다', '-아/어야 하다', '-아/어 보다'], correct: 0, explanation: '-고 싶다 = want to' }
      ]
    },
    {
      id: 'w12d5-conversation-practice',
      title: 'Conversation Practice',
      intro: `Today you'll practice a complete conversation using everything you've learned.

**Meeting a Friend:**

A: 안녕! 요즘 뭐 하고 있어?
(Hi! What have you been doing lately?)

B: 한국어 공부하고 있어. 재미있지만 어려워.
(I've been studying Korean. It's fun but hard.)

A: 나도 배우고 싶어! 어디에서 공부해?
(I want to learn too! Where do you study?)

B: 집에서 공부해. 시간이 있으면 같이 공부할까?
(I study at home. If you have time, shall we study together?)

A: 좋아! 내일 만나자.
(Good! Let's meet tomorrow.)`,
      studyGuide: [
        { korean: '요즘', romanization: 'yojeum', meaning: 'These days/lately', example: '요즘 바빠요' },
        { korean: '같이', romanization: 'gachi', meaning: 'Together', example: '같이 가요' },
        { korean: '내일 만나자', romanization: 'naeil mannaja', meaning: "Let's meet tomorrow", example: 'Making plans' }
      ],
      quiz: [
        { question: 'What does 요즘 mean?', options: ['Yesterday', 'Tomorrow', 'These days', 'Always'], correct: 2, explanation: '요즘 = these days/lately' }
      ]
    },
    {
      id: 'w12d6-month3-review',
      title: 'Month 3 Assessment & Review',
      intro: `Congratulations on completing Month 3 - you're halfway through!

**Month 3 Achievements:**
- Speech levels (formal, polite, casual)
- Honorific -(으)시- forms
- Humble forms (저, 드리다)
- Progressive -고 있다
- Try to -아/어 보다
- Have to -아/어야 하다
- Permission -아/어도 되다
- Suggestions -(으)ㄹ까요?
- Family, body, weather, emotions vocabulary

**You can now:**
- Adjust politeness for different situations
- Express ongoing actions
- Give and ask for permission
- Make suggestions
- Describe family, health, weather, feelings`,
      studyGuide: [
        { korean: '잘하고 있어요!', romanization: 'jalhago isseoyo!', meaning: "You're doing well!", example: 'Halfway there!' },
        { korean: '절반이에요!', romanization: 'jeolbanieyo!', meaning: "It's halfway!", example: 'Month 3 complete' }
      ],
      quiz: [
        { question: 'Which shows ongoing action?', options: ['-았/었어요', '-(으)ㄹ 거예요', '-고 있어요', '-고 싶어요'], correct: 2, explanation: '-고 있어요 = am doing (progressive)' }
      ]
    },

    // WEEK 13: Comparative & Superlative
    {
      id: 'w13d1-comparisons',
      title: 'Comparisons: 더, 덜, 보다',
      intro: `Today you'll learn to make comparisons in Korean.

**Comparison Pattern:**
\`\`\`
A가 B보다 더 [adjective] = A is more [adj] than B
\`\`\`

**Key Words:**
- 더 = more
- 덜 = less
- 보다 = than

**Examples:**
- 한국어가 영어보다 더 어려워요.
  (Korean is more difficult than English.)
- 여름이 겨울보다 더 더워요.
  (Summer is hotter than winter.)`,
      studyGuide: [
        { korean: '더', romanization: 'deo', meaning: 'More', example: '더 좋아요' },
        { korean: '보다', romanization: 'boda', meaning: 'Than', example: 'A보다 B' },
        { korean: '덜', romanization: 'deol', meaning: 'Less', example: '덜 어려워요' }
      ],
      quiz: [
        { question: 'How do you say "A is bigger than B"?', options: ['A가 B보다 더 커요', 'A가 B보다 더 작아요', 'A가 B 더 커요', 'A보다 B가 커요'], correct: 0, explanation: 'A가 B보다 더 [adj] is the comparison pattern' }
      ]
    },
    {
      id: 'w13d2-superlatives',
      title: 'Superlatives: 가장, 제일',
      intro: `Today you'll learn to express "the most" in Korean.

**Superlative Words:**
- 가장 = the most (formal)
- 제일 = the most (common)

**Pattern:**
\`\`\`
[Subject]가/이 가장/제일 [adjective]
\`\`\`

**Examples:**
- 이게 제일 맛있어요. (This is the most delicious.)
- 한국어가 가장 어려워요. (Korean is the hardest.)
- 누가 제일 키가 커요? (Who is the tallest?)`,
      studyGuide: [
        { korean: '가장', romanization: 'gajang', meaning: 'The most (formal)', example: '가장 좋아요' },
        { korean: '제일', romanization: 'jeil', meaning: 'The most (common)', example: '제일 맛있어요' },
        { korean: '뭐가 제일 좋아요?', romanization: 'mwoga jeil joayo?', meaning: 'What do you like most?', example: 'Asking preferences' }
      ],
      quiz: [
        { question: 'How do you say "the most delicious"?', options: ['더 맛있어요', '제일 맛있어요', '덜 맛있어요', '맛있보다'], correct: 1, explanation: '제일 맛있어요 = the most delicious' }
      ]
    },
    {
      id: 'w13d3-same-different',
      title: 'Same & Different: 같다, 다르다',
      intro: `Today you'll learn to express similarity and difference.

**Same & Different:**
| Korean | Meaning |
|--------|---------|
| 같다 | to be the same |
| 다르다 | to be different |
| 비슷하다 | to be similar |

**Patterns:**
- A와/과 B가 같아요. (A and B are the same.)
- A와/과 B가 달라요. (A and B are different.)
- A처럼 = like A

**Examples:**
- 이거랑 저거랑 같아요. (This and that are the same.)
- 한국어랑 일본어는 달라요. (Korean and Japanese are different.)`,
      studyGuide: [
        { korean: '같다', romanization: 'gatda', meaning: 'Same', example: '같아요' },
        { korean: '다르다', romanization: 'dareuda', meaning: 'Different', example: '달라요' },
        { korean: '비슷하다', romanization: 'biseutada', meaning: 'Similar', example: '비슷해요' },
        { korean: '처럼', romanization: 'cheoreom', meaning: 'Like/as', example: '나처럼' }
      ],
      quiz: [
        { question: 'How do you say "They are the same"?', options: ['달라요', '같아요', '비슷해요', '다르다'], correct: 1, explanation: '같아요 = (they are) the same' }
      ]
    },
    {
      id: 'w13d4-preferences',
      title: 'Expressing Preferences',
      intro: `Today you'll learn to express likes, dislikes, and preferences.

**Preference Verbs:**
| Korean | Meaning |
|--------|---------|
| 좋아하다 | to like |
| 싫어하다 | to dislike |
| 좋다 | to be good/liked |
| 싫다 | to be disliked |

**Patterns:**
- [Object]를/을 좋아해요 = like [object]
- [Object]가/이 좋아요 = [object] is liked (by me)

**Examples:**
- 커피를 좋아해요. (I like coffee.)
- 커피가 좋아요. (Coffee is good/I like coffee.)
- 뭐가 더 좋아요? (Which do you like better?)`,
      studyGuide: [
        { korean: '좋아하다', romanization: 'joahada', meaning: 'To like', example: '커피를 좋아해요' },
        { korean: '싫어하다', romanization: 'sireohada', meaning: 'To dislike', example: '더운 날씨를 싫어해요' },
        { korean: '좋다', romanization: 'jota', meaning: 'To be good/liked', example: '한국 음식이 좋아요' }
      ],
      quiz: [
        { question: 'How do you say "I like coffee"?', options: ['커피가 좋아요', '커피를 좋아해요', '커피 좋아', 'All are correct'], correct: 3, explanation: 'Both 커피가 좋아요 and 커피를 좋아해요 mean I like coffee' }
      ]
    },
    {
      id: 'w13d5-describing-appearance',
      title: 'Describing Appearance',
      intro: `Today you'll learn to describe how things look.

**Appearance Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 키가 크다 | tall (height) |
| 키가 작다 | short (height) |
| 뚱뚱하다 | fat |
| 날씬하다 | slim |
| 예쁘다 | pretty |
| 잘생기다 | handsome |
| 귀엽다 | cute |
| 못생기다 | ugly |

**Examples:**
- 그 사람은 키가 커요. (That person is tall.)
- 강아지가 귀여워요. (The puppy is cute.)`,
      studyGuide: [
        { korean: '키가 크다', romanization: 'kiga keuda', meaning: 'Tall', example: '키가 커요' },
        { korean: '예쁘다', romanization: 'yeppeuda', meaning: 'Pretty', example: '예뻐요' },
        { korean: '잘생기다', romanization: 'jalsaenggida', meaning: 'Handsome', example: '잘생겼어요' },
        { korean: '귀엽다', romanization: 'gwiyeopda', meaning: 'Cute', example: '귀여워요' }
      ],
      quiz: [
        { question: 'How do you say "cute"?', options: ['예뻐요', '잘생겼어요', '귀여워요', '못생겼어요'], correct: 2, explanation: '귀여워요 = cute' }
      ]
    },
    {
      id: 'w13d6-week13-review',
      title: 'Week 13 Review: Comparisons',
      intro: `Let's review comparisons and descriptions.

**Comparison Summary:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| A보다 더 | more than A | 이게 더 좋아요 |
| 제일/가장 | the most | 제일 맛있어요 |
| 같다 | same | 같아요 |
| 다르다 | different | 달라요 |

**Preference Summary:**
- 좋아하다 (like) + object marker 를/을
- 좋다 (good/liked) + subject marker 가/이
- 싫어하다 (dislike) / 싫다 (disliked)`,
      studyGuide: [
        { korean: '보다', romanization: 'boda', meaning: 'Than', example: 'Comparison' },
        { korean: '제일', romanization: 'jeil', meaning: 'The most', example: 'Superlative' },
        { korean: '같다/다르다', romanization: 'gatda/dareuda', meaning: 'Same/different', example: 'Similarity' }
      ],
      quiz: [
        { question: 'Which means "the most"?', options: ['더', '보다', '제일', '같다'], correct: 2, explanation: '제일 = the most' }
      ]
    },

    // WEEK 14: Advanced Verb Forms
    {
      id: 'w14d1-quoted-speech',
      title: 'Quoted Speech: -다고 하다',
      intro: `Today you'll learn to report what others said.

**Quotation Pattern:**
\`\`\`
[Statement] + (이)라고 하다 = say that...
\`\`\`

**For statements:**
- Verb + ㄴ/는다고 하다
- Adjective + 다고 하다
- Noun + (이)라고 하다

**Examples:**
- 가다 → 간다고 해요. (They say they're going.)
- 좋다 → 좋다고 해요. (They say it's good.)
- 학생이라고 해요. (They say they're a student.)`,
      studyGuide: [
        { korean: '-다고 하다', romanization: '-dago hada', meaning: 'Say that...', example: 'Quoting' },
        { korean: '간다고 해요', romanization: 'gandago haeyo', meaning: 'They say they go', example: 'Quoting action' },
        { korean: '뭐라고요?', romanization: 'mworaguyo?', meaning: 'What did you say?', example: 'Asking repetition' }
      ],
      quiz: [
        { question: 'How do you report "he says he\'s going"?', options: ['가요', '간다고 해요', '가다고 해요', '갔다고 해요'], correct: 1, explanation: '간다고 해요 = says he\'s going' }
      ]
    },
    {
      id: 'w14d2-indirect-questions',
      title: 'Indirect Questions: -냐고/-는지',
      intro: `Today you'll learn to report questions.

**Question Quotation Patterns:**

**-냐고 하다** (reporting a question):
- 뭐 먹냐고 해요. (They ask what you're eating.)
- 어디 가냐고 해요. (They ask where you're going.)

**-는지 알다/모르다** (whether/if):
- 언제 오는지 몰라요. (I don't know when they're coming.)
- 누구인지 알아요? (Do you know who it is?)`,
      studyGuide: [
        { korean: '-냐고 하다', romanization: '-nyago hada', meaning: 'Ask if/whether', example: 'Reporting questions' },
        { korean: '-는지 모르다', romanization: '-neunji moreuda', meaning: "Don't know if", example: '언제인지 몰라요' },
        { korean: '-는지 알다', romanization: '-neunji alda', meaning: 'Know if/whether', example: '누구인지 알아요?' }
      ],
      quiz: [
        { question: 'How do you say "I don\'t know when"?', options: ['언제요?', '언제인지 몰라요', '언제 알아요', '언제라고 해요'], correct: 1, explanation: '언제인지 몰라요 = I don\'t know when' }
      ]
    },
    {
      id: 'w14d3-while-doing',
      title: 'While Doing: -(으)면서',
      intro: `Today you'll learn to express simultaneous actions.

**-(으)면서 Pattern:**
\`\`\`
Verb Stem + (으)면서 = while [verb]ing
- 으면서 after consonant
- 면서 after vowel
\`\`\`

**Examples:**
- 음악을 들으면서 공부해요.
  (I study while listening to music.)
- 밥을 먹으면서 TV를 봐요.
  (I watch TV while eating.)
- 걸으면서 전화해요.
  (I talk on the phone while walking.)`,
      studyGuide: [
        { korean: '-(으)면서', romanization: '-(eu)myeonseo', meaning: 'While doing', example: 'Simultaneous actions' },
        { korean: '들으면서', romanization: 'deureumyeonseo', meaning: 'While listening', example: '음악을 들으면서' },
        { korean: '먹으면서', romanization: 'meogeumyeonseo', meaning: 'While eating', example: '밥 먹으면서' }
      ],
      quiz: [
        { question: 'How do you say "while listening to music"?', options: ['음악을 듣고', '음악을 들으면서', '음악을 들어서', '음악을 들으면'], correct: 1, explanation: '-(으)면서 = while doing' }
      ]
    },
    {
      id: 'w14d4-before-after',
      title: 'Before & After: 전에, 후에, -기 전에',
      intro: `Today you'll learn to express sequence in time.

**Time Sequence Words:**
| Korean | Meaning |
|--------|---------|
| 전에 | before |
| 후에/뒤에 | after |
| -기 전에 | before doing |
| -(으)ㄴ 후에 | after doing |

**Examples:**
- 자기 전에 책을 읽어요. (I read before sleeping.)
- 먹은 후에 커피 마셔요. (I drink coffee after eating.)
- 수업 전에 복습해요. (I review before class.)`,
      studyGuide: [
        { korean: '전에', romanization: 'jeone', meaning: 'Before', example: '수업 전에' },
        { korean: '후에/뒤에', romanization: 'hue/dwie', meaning: 'After', example: '수업 후에' },
        { korean: '-기 전에', romanization: '-gi jeone', meaning: 'Before doing', example: '자기 전에' },
        { korean: '-(으)ㄴ 후에', romanization: '-(eu)n hue', meaning: 'After doing', example: '먹은 후에' }
      ],
      quiz: [
        { question: 'How do you say "before sleeping"?', options: ['자는 중에', '잔 후에', '자기 전에', '자고'], correct: 2, explanation: '-기 전에 = before doing' }
      ]
    },
    {
      id: 'w14d5-intention',
      title: 'Intention: -(으)려고 하다',
      intro: `Today you'll learn to express intentions.

**Intention Pattern:**
\`\`\`
Verb Stem + (으)려고 하다 = intend to, plan to
- 으려고 after consonant
- 려고 after vowel
\`\`\`

**Examples:**
- 한국에 가려고 해요. (I'm planning to go to Korea.)
- 한국어를 배우려고 해요. (I intend to learn Korean.)
- 뭐 하려고 해요? (What are you planning to do?)

**Similar pattern:** -(으)려면 = if you want to
- 한국어를 배우려면 매일 공부해야 해요.
  (If you want to learn Korean, you have to study every day.)`,
      studyGuide: [
        { korean: '-(으)려고 하다', romanization: '-(eu)ryeogo hada', meaning: 'Intend to/plan to', example: 'Intention' },
        { korean: '가려고 해요', romanization: 'garyeogo haeyo', meaning: 'Plan to go', example: '한국에 가려고 해요' },
        { korean: '-(으)려면', romanization: '-(eu)ryeomyeon', meaning: 'If you want to', example: '배우려면' }
      ],
      quiz: [
        { question: 'How do you say "I plan to go"?', options: ['가고 싶어요', '가려고 해요', '갈 거예요', '가야 해요'], correct: 1, explanation: '-(으)려고 하다 = plan to' }
      ]
    },
    {
      id: 'w14d6-week14-review',
      title: 'Week 14 Review: Advanced Verbs',
      intro: `Let's review the advanced verb patterns.

**Pattern Summary:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| -다고 하다 | say that | 간다고 해요 |
| -는지 | whether/if | 언제인지 몰라요 |
| -(으)면서 | while | 먹으면서 |
| -기 전에 | before | 자기 전에 |
| -(으)려고 | intend to | 가려고 해요 |

**These allow you to:**
- Report what others said
- Express uncertainty
- Describe simultaneous actions
- Talk about sequence
- Express intentions`,
      studyGuide: [
        { korean: '인용', romanization: 'inyong', meaning: 'Quotation', example: '-다고 하다' },
        { korean: '동시', romanization: 'dongsi', meaning: 'Simultaneous', example: '-(으)면서' },
        { korean: '의도', romanization: 'uido', meaning: 'Intention', example: '-(으)려고' }
      ],
      quiz: [
        { question: 'Which expresses "while doing"?', options: ['-다고 하다', '-(으)면서', '-기 전에', '-(으)려고'], correct: 1, explanation: '-(으)면서 = while doing' }
      ]
    },

    // WEEK 15: Practical Situations
    {
      id: 'w15d1-making-appointments',
      title: 'Making Appointments',
      intro: `Today you'll learn to make appointments and plans.

**Appointment Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 약속 | appointment/promise |
| 예약 | reservation |
| 약속하다 | to make an appointment |
| 예약하다 | to reserve |
| 취소하다 | to cancel |
| 변경하다 | to change |

**Making plans:**
- 언제 만날까요? (When shall we meet?)
- 토요일 어때요? (How about Saturday?)
- 좋아요, 토요일에 만나요. (Good, let's meet Saturday.)`,
      studyGuide: [
        { korean: '약속', romanization: 'yaksok', meaning: 'Appointment/promise', example: '약속이 있어요' },
        { korean: '예약하다', romanization: 'yeyakada', meaning: 'To reserve', example: '예약했어요' },
        { korean: '어때요?', romanization: 'eottaeyo?', meaning: 'How about?', example: '토요일 어때요?' }
      ],
      quiz: [
        { question: 'How do you say "I have an appointment"?', options: ['약속해요', '약속이 있어요', '예약해요', '약속 하세요'], correct: 1, explanation: '약속이 있어요 = I have an appointment' }
      ]
    },
    {
      id: 'w15d2-at-hospital',
      title: 'At the Hospital/Clinic',
      intro: `Today you'll learn medical vocabulary.

**Medical Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 병원 | hospital |
| 의사 | doctor |
| 약 | medicine |
| 약국 | pharmacy |
| 아프다 | to be sick/hurt |
| 감기 | cold (illness) |
| 열 | fever |
| 두통 | headache |

**Useful phrases:**
- 어디가 아파요? (Where does it hurt?)
- 머리가 아파요. (I have a headache.)
- 약 처방해 주세요. (Please prescribe medicine.)`,
      studyGuide: [
        { korean: '병원', romanization: 'byeongwon', meaning: 'Hospital', example: '병원에 가요' },
        { korean: '아프다', romanization: 'apeuda', meaning: 'To hurt/be sick', example: '어디가 아파요?' },
        { korean: '감기', romanization: 'gamgi', meaning: 'Cold (illness)', example: '감기에 걸렸어요' },
        { korean: '약', romanization: 'yak', meaning: 'Medicine', example: '약 먹어요' }
      ],
      quiz: [
        { question: 'How do you say "I have a cold"?', options: ['감기예요', '감기에 걸렸어요', '감기가 아파요', '감기를 먹어요'], correct: 1, explanation: '감기에 걸리다 = to catch a cold' }
      ]
    },
    {
      id: 'w15d3-at-post-office',
      title: 'At the Post Office',
      intro: `Today you'll learn postal vocabulary.

**Postal Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 우체국 | post office |
| 편지 | letter |
| 소포 | package |
| 우표 | stamp |
| 보내다 | to send |
| 받다 | to receive |
| 주소 | address |
| 배송 | delivery |

**Useful phrases:**
- 이거 한국에 보내고 싶어요. (I want to send this to Korea.)
- 얼마예요? (How much is it?)
- 며칠 걸려요? (How many days does it take?)`,
      studyGuide: [
        { korean: '우체국', romanization: 'ucheguk', meaning: 'Post office', example: '우체국에 가요' },
        { korean: '보내다', romanization: 'bonaeda', meaning: 'To send', example: '편지를 보내요' },
        { korean: '소포', romanization: 'sopo', meaning: 'Package', example: '소포를 받았어요' },
        { korean: '주소', romanization: 'juso', meaning: 'Address', example: '주소가 뭐예요?' }
      ],
      quiz: [
        { question: 'How do you say "I want to send this"?', options: ['이거 보내요', '이거 보내고 싶어요', '이거 받아요', '이거 보냈어요'], correct: 1, explanation: '보내고 싶어요 = want to send' }
      ]
    },
    {
      id: 'w15d4-at-bank',
      title: 'At the Bank',
      intro: `Today you'll learn banking vocabulary.

**Banking Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 은행 | bank |
| 계좌 | account |
| 돈 | money |
| 현금 | cash |
| 환전 | currency exchange |
| 입금 | deposit |
| 출금 | withdrawal |
| ATM | ATM |

**Useful phrases:**
- 계좌를 만들고 싶어요. (I want to open an account.)
- 환전해 주세요. (Please exchange currency.)
- 돈을 출금하고 싶어요. (I want to withdraw money.)`,
      studyGuide: [
        { korean: '은행', romanization: 'eunhaeng', meaning: 'Bank', example: '은행에 가요' },
        { korean: '환전', romanization: 'hwanjeon', meaning: 'Currency exchange', example: '환전해 주세요' },
        { korean: '계좌', romanization: 'gyejwa', meaning: 'Account', example: '계좌를 만들어요' },
        { korean: '출금/입금', romanization: 'chulgeum/ipgeum', meaning: 'Withdrawal/deposit', example: '돈을 출금해요' }
      ],
      quiz: [
        { question: 'How do you say "currency exchange"?', options: ['계좌', '환전', '출금', '입금'], correct: 1, explanation: '환전 = currency exchange' }
      ]
    },
    {
      id: 'w15d5-transportation',
      title: 'Public Transportation',
      intro: `Today you'll learn transportation vocabulary.

**Transportation Words:**
| Korean | Meaning |
|--------|---------|
| 버스 | bus |
| 지하철 | subway |
| 택시 | taxi |
| 기차 | train |
| 비행기 | airplane |
| 정류장 | bus stop |
| 역 | station |
| 표 | ticket |

**Useful phrases:**
- 이 버스 강남 가요? (Does this bus go to Gangnam?)
- 어디서 내려야 해요? (Where should I get off?)
- 다음 역에서 내리세요. (Get off at the next station.)`,
      studyGuide: [
        { korean: '지하철', romanization: 'jihacheol', meaning: 'Subway', example: '지하철 타요' },
        { korean: '버스 정류장', romanization: 'beoseu jeongnyujang', meaning: 'Bus stop', example: '정류장이 어디예요?' },
        { korean: '내리다', romanization: 'naerida', meaning: 'To get off', example: '여기서 내려요' },
        { korean: '타다', romanization: 'tada', meaning: 'To ride/get on', example: '버스를 타요' }
      ],
      quiz: [
        { question: 'How do you say "get off here"?', options: ['여기 타요', '여기서 내려요', '여기 가요', '여기서 올라요'], correct: 1, explanation: '내리다 = to get off' }
      ]
    },
    {
      id: 'w15d6-emergencies',
      title: 'Emergency Situations',
      intro: `Today you'll learn emergency vocabulary.

**Emergency Words:**
| Korean | Meaning |
|--------|---------|
| 도와주세요! | Help! |
| 긴급 | emergency |
| 경찰 | police |
| 소방서 | fire station |
| 구급차 | ambulance |
| 위험 | danger |
| 조심하세요 | be careful |

**Emergency numbers in Korea:**
- 112: Police
- 119: Fire/Ambulance

**Useful phrases:**
- 사고가 났어요! (There's been an accident!)
- 도둑이에요! (Thief!)
- 구급차를 불러 주세요. (Please call an ambulance.)`,
      studyGuide: [
        { korean: '도와주세요!', romanization: 'dowajuseyo!', meaning: 'Help!', example: 'Emergency call' },
        { korean: '경찰', romanization: 'gyeongchal', meaning: 'Police', example: '경찰을 불러 주세요' },
        { korean: '조심하세요', romanization: 'josimhaseyo', meaning: 'Be careful', example: 'Warning' },
        { korean: '사고', romanization: 'sago', meaning: 'Accident', example: '사고가 났어요' }
      ],
      quiz: [
        { question: 'What number is police in Korea?', options: ['119', '112', '911', '120'], correct: 1, explanation: '112 is police in Korea' }
      ]
    },

    // WEEK 16: Cultural Communication
    {
      id: 'w16d1-korean-culture',
      title: 'Korean Cultural Concepts',
      intro: `Today you'll learn important Korean cultural concepts.

**Cultural Words:**
| Korean | Meaning |
|--------|---------|
| 정 (jeong) | deep emotional bond |
| 눈치 (nunchi) | reading the room |
| 빨리빨리 (ppalli ppalli) | hurry hurry culture |
| 한 (han) | collective sorrow |
| 효도 (hyodo) | filial piety |

**Understanding Korean culture:**
- 정: The deep bond that develops through shared experiences
- 눈치: The ability to read situations and others' feelings
- These concepts don't have direct English translations!`,
      studyGuide: [
        { korean: '정', romanization: 'jeong', meaning: 'Deep bond/affection', example: 'Cultural concept' },
        { korean: '눈치', romanization: 'nunchi', meaning: 'Reading the room', example: 'Social awareness' },
        { korean: '빨리빨리', romanization: 'ppalli ppalli', meaning: 'Quickly quickly', example: 'Korean pace' }
      ],
      quiz: [
        { question: 'What is 눈치?', options: ['Deep bond', 'Reading the room', 'Hurry culture', 'Respect'], correct: 1, explanation: '눈치 = ability to read situations/social cues' }
      ]
    },
    {
      id: 'w16d2-idiomatic-expressions',
      title: 'Common Idioms',
      intro: `Today you'll learn common Korean expressions.

**Idiomatic Expressions:**
| Korean | Literal | Meaning |
|--------|---------|---------|
| 눈이 높다 | eyes are high | have high standards |
| 발이 넓다 | feet are wide | know many people |
| 손이 크다 | hands are big | generous |
| 입이 가볍다 | mouth is light | can't keep secrets |
| 귀가 얇다 | ears are thin | easily influenced |

**Using idioms:**
- 그 사람은 발이 넓어요. (That person knows a lot of people.)`,
      studyGuide: [
        { korean: '눈이 높다', romanization: 'nuni nopda', meaning: 'Have high standards', example: '그 사람은 눈이 높아요' },
        { korean: '발이 넓다', romanization: 'bari neopda', meaning: 'Know many people', example: 'Wide social network' },
        { korean: '손이 크다', romanization: 'soni keuda', meaning: 'Generous', example: '선생님은 손이 커요' }
      ],
      quiz: [
        { question: 'What does 발이 넓다 mean?', options: ['Have big feet', 'Know many people', 'Travel a lot', 'Walk fast'], correct: 1, explanation: '발이 넓다 = know many people (wide network)' }
      ]
    },
    {
      id: 'w16d3-exclamations',
      title: 'Exclamations & Reactions',
      intro: `Today you'll learn common Korean reactions and exclamations.

**Exclamations:**
| Korean | Meaning |
|--------|---------|
| 아이고! | Oh my! (frustration/pain) |
| 대박! | Amazing!/Wow! |
| 진짜? | Really? |
| 설마! | No way! |
| 어머! | Oh my! (surprise) |
| 헐! | OMG!/Whoa! (slang) |
| 아싸! | Yes!/Alright! |

**Using exclamations:**
- 대박! 정말요? (Amazing! Really?)
- 아이고, 피곤해요. (Oh my, I'm tired.)`,
      studyGuide: [
        { korean: '대박', romanization: 'daebak', meaning: 'Amazing/Wow', example: 'Positive surprise' },
        { korean: '진짜?', romanization: 'jinjja?', meaning: 'Really?', example: 'Asking confirmation' },
        { korean: '아이고', romanization: 'aigo', meaning: 'Oh my', example: 'Frustration/sympathy' },
        { korean: '설마', romanization: 'seolma', meaning: 'No way', example: 'Disbelief' }
      ],
      quiz: [
        { question: 'What do you say when amazed?', options: ['아이고', '대박', '설마', '아싸'], correct: 1, explanation: '대박 = Amazing/Wow' }
      ]
    },
    {
      id: 'w16d4-softening-speech',
      title: 'Softening Speech',
      intro: `Today you'll learn to soften requests and statements.

**Softening Words:**
| Korean | Effect |
|--------|--------|
| 좀 | a little (softens) |
| 혹시 | by any chance |
| 아마 | maybe/probably |
| 그냥 | just |
| 사실 | actually |

**Examples:**
- 물 좀 주세요. (Water please - softened)
- 혹시 시간 있어요? (By any chance, do you have time?)
- 아마 갈 거예요. (I'll probably go.)

**Using 좀 makes requests much more polite!**`,
      studyGuide: [
        { korean: '좀', romanization: 'jom', meaning: 'A little (softener)', example: '좀 도와주세요' },
        { korean: '혹시', romanization: 'hoksi', meaning: 'By any chance', example: '혹시 알아요?' },
        { korean: '아마', romanization: 'ama', meaning: 'Maybe/probably', example: '아마 올 거예요' },
        { korean: '사실', romanization: 'sasil', meaning: 'Actually', example: '사실은요...' }
      ],
      quiz: [
        { question: 'How do you soften "Give me water"?', options: ['물 주세요', '물 좀 주세요', '물 줘', '물 주셔요'], correct: 1, explanation: '좀 softens requests: 물 좀 주세요' }
      ]
    },
    {
      id: 'w16d5-texting-korean',
      title: 'Texting & Online Korean',
      intro: `Today you'll learn Korean texting slang.

**Texting Abbreviations:**
| Korean | Full Form | Meaning |
|--------|-----------|---------|
| ㅋㅋㅋ | 크크크 | hahaha |
| ㅎㅎㅎ | 하하하 | haha |
| ㅠㅠ/ㅜㅜ | crying eyes | sad face |
| ㄱㅅ | 감사 | thanks |
| ㄴㄴ | 노노 | no no |
| ㅇㅋ | 오케이 | okay |
| ㄷㄷ | 덜덜 | shocked/trembling |

**Common texting:**
- 뭐해? ㅋㅋ (What are you doing? haha)
- 진짜? ㄷㄷ (Really? omg)
- ㅠㅠ 슬퍼요 (sad emoji, I'm sad)`,
      studyGuide: [
        { korean: 'ㅋㅋㅋ', romanization: 'kkk', meaning: 'Hahaha', example: 'Laughter in text' },
        { korean: 'ㅠㅠ', romanization: 'ㅠㅠ', meaning: 'Crying/sad', example: 'Sad emoji' },
        { korean: 'ㄱㅅ', romanization: 'gs', meaning: 'Thanks', example: 'Short for 감사' },
        { korean: 'ㅇㅋ', romanization: 'ok', meaning: 'Okay', example: 'Agreement' }
      ],
      quiz: [
        { question: 'What does ㅋㅋㅋ mean?', options: ['Crying', 'Laughing', 'Angry', 'Okay'], correct: 1, explanation: 'ㅋㅋㅋ = hahaha (laughing)' }
      ]
    },
    {
      id: 'w16d6-month4-review',
      title: 'Month 4 Assessment & Review',
      intro: `Congratulations on completing Month 4!

**Month 4 Achievements:**
- Comparisons (더, 보다, 제일)
- Preferences (좋아하다, 같다, 다르다)
- Quoted speech (-다고 하다)
- Simultaneous actions (-(으)면서)
- Before/after (-기 전에, -(으)ㄴ 후에)
- Intentions (-(으)려고 하다)
- Practical situations vocabulary
- Cultural expressions and idioms
- Texting Korean

**You can now:**
- Make comparisons and express preferences
- Report what others said
- Describe sequences and simultaneous actions
- Handle practical situations
- Understand cultural nuances
- Text in Korean!`,
      studyGuide: [
        { korean: '대단해요!', romanization: 'daedanhaeyo!', meaning: 'Awesome!', example: 'You finished Month 4!' },
        { korean: '거의 다 왔어요!', romanization: 'geoui da wasseoyo!', meaning: "You're almost there!", example: 'Keep going!' }
      ],
      quiz: [
        { question: 'Which pattern is for intentions?', options: ['-다고 하다', '-(으)면서', '-(으)려고 하다', '-기 전에'], correct: 2, explanation: '-(으)려고 하다 = intend to/plan to' }
      ]
    },

    // WEEK 17: Complex Grammar
    {
      id: 'w17d1-passive-voice',
      title: 'Passive Voice: -이/히/리/기-',
      intro: `Today you'll learn passive constructions in Korean.

**Passive Suffixes:**
| Suffix | Example |
|--------|---------|
| -이- | 보이다 (to be seen) |
| -히- | 먹히다 (to be eaten) |
| -리- | 팔리다 (to be sold) |
| -기- | 잠기다 (to be locked) |

**Examples:**
- 문이 열려요. (The door opens/is opened.)
- 책이 팔려요. (The book is being sold.)
- 산이 보여요. (The mountain can be seen.)`,
      studyGuide: [
        { korean: '보이다', romanization: 'boida', meaning: 'To be seen', example: '산이 보여요' },
        { korean: '열리다', romanization: 'yeollida', meaning: 'To be opened', example: '문이 열려요' },
        { korean: '닫히다', romanization: 'dathida', meaning: 'To be closed', example: '문이 닫혀요' }
      ],
      quiz: [
        { question: 'What does 보이다 mean?', options: ['To see', 'To be seen', 'To show', 'To look'], correct: 1, explanation: '보이다 = to be seen (passive of 보다)' }
      ]
    },
    {
      id: 'w17d2-causative',
      title: 'Causative: Making Someone Do',
      intro: `Today you'll learn causative forms - making someone do something.

**Causative Patterns:**
| Base | Causative |
|------|-----------|
| 먹다 (eat) | 먹이다 (feed) |
| 보다 (see) | 보이다 (show) |
| 입다 (wear) | 입히다 (dress someone) |
| 읽다 (read) | 읽히다 (make read) |

**Using -게 하다:**
\`\`\`
Verb stem + 게 하다 = make/let someone do
\`\`\`
- 가게 해요. (I let/make them go.)
- 먹게 해 주세요. (Please let me eat.)`,
      studyGuide: [
        { korean: '먹이다', romanization: 'meogida', meaning: 'To feed', example: '아이에게 밥을 먹여요' },
        { korean: '-게 하다', romanization: '-ge hada', meaning: 'Make/let do', example: '가게 해요' },
        { korean: '입히다', romanization: 'ipida', meaning: 'To dress someone', example: '아이에게 옷을 입혀요' }
      ],
      quiz: [
        { question: 'How do you say "I feed the baby"?', options: ['아기가 먹어요', '아기를 먹여요', '아기 먹어요', '아기에게 먹어요'], correct: 1, explanation: '먹이다 = to feed' }
      ]
    },
    {
      id: 'w17d3-noun-modification',
      title: 'Noun Modifying: -(으)ㄴ/는/(으)ㄹ',
      intro: `Today you'll learn to modify nouns with clauses.

**Noun Modifier Patterns:**
| Tense | Verb | Adjective |
|-------|------|-----------|
| Past | -(으)ㄴ | -(으)ㄴ |
| Present | -는 | - |
| Future | -(으)ㄹ | -(으)ㄹ |

**Examples:**
- 먹은 음식 (food that I ate)
- 먹는 음식 (food that I'm eating)
- 먹을 음식 (food that I will eat)
- 맛있는 음식 (delicious food)`,
      studyGuide: [
        { korean: '-(으)ㄴ', romanization: '-(eu)n', meaning: 'Past modifier', example: '먹은 음식' },
        { korean: '-는', romanization: '-neun', meaning: 'Present modifier', example: '먹는 음식' },
        { korean: '-(으)ㄹ', romanization: '-(eu)l', meaning: 'Future modifier', example: '먹을 음식' }
      ],
      quiz: [
        { question: 'How do you say "food I ate"?', options: ['먹는 음식', '먹은 음식', '먹을 음식', '먹어 음식'], correct: 1, explanation: '-(으)ㄴ is past modifier: 먹은 음식' }
      ]
    },
    {
      id: 'w17d4-nominalization',
      title: 'Nominalization: -기, -(으)ㅁ, -는 것',
      intro: `Today you'll learn to turn verbs into nouns.

**Nominalization Patterns:**
\`\`\`
-기 = the act of doing (abstract)
-(으)ㅁ = the act of doing (formal)
-는 것 = the thing of doing (concrete)
\`\`\`

**Examples:**
- 수영하기 (swimming - the act)
- 수영하는 것 (swimming - the thing/activity)
- 한국어 배우기가 어려워요. (Learning Korean is difficult.)
- 운동하는 것을 좋아해요. (I like exercising.)`,
      studyGuide: [
        { korean: '-기', romanization: '-gi', meaning: 'Verb → noun (abstract)', example: '배우기가 어려워요' },
        { korean: '-는 것', romanization: '-neun geot', meaning: 'Verb → noun (concrete)', example: '먹는 것을 좋아해요' },
        { korean: '-(으)ㅁ', romanization: '-(eu)m', meaning: 'Verb → noun (formal)', example: '삶 (life)' }
      ],
      quiz: [
        { question: 'How do you say "I like eating"?', options: ['먹기를 좋아해요', '먹는 것을 좋아해요', 'Both are correct', '먹음을 좋아해요'], correct: 2, explanation: 'Both -기 and -는 것 work for nominalization' }
      ]
    },
    {
      id: 'w17d5-conjecture',
      title: 'Conjecture: -(으)ㄹ 것 같다',
      intro: `Today you'll learn to express guesses and opinions.

**Conjecture Patterns:**
\`\`\`
Verb/Adj + (으)ㄹ 것 같다 = seems like will
Verb/Adj + 는/ㄴ 것 같다 = seems like (present/past)
\`\`\`

**Examples:**
- 비가 올 것 같아요. (It seems like it will rain.)
- 맛있는 것 같아요. (It seems delicious.)
- 갔던 것 같아요. (It seems like they went.)

**Softer than stating directly!**`,
      studyGuide: [
        { korean: '-(으)ㄹ 것 같다', romanization: '-(eu)l geot gatda', meaning: 'Seems like will', example: '올 것 같아요' },
        { korean: '-는 것 같다', romanization: '-neun geot gatda', meaning: 'Seems like (now)', example: '좋은 것 같아요' },
        { korean: '-은 것 같다', romanization: '-eun geot gatda', meaning: 'Seems like (past)', example: '간 것 같아요' }
      ],
      quiz: [
        { question: 'How do you say "It seems like it will rain"?', options: ['비가 와요', '비가 올 것 같아요', '비가 온 것 같아요', '비가 오는 것 같아요'], correct: 1, explanation: '-(으)ㄹ 것 같다 for future conjecture' }
      ]
    },
    {
      id: 'w17d6-week17-review',
      title: 'Week 17 Review: Complex Grammar',
      intro: `Let's review complex grammar patterns.

**Pattern Summary:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| Passive | be done | 열리다 (be opened) |
| Causative | make do | 먹이다 (feed) |
| Modifier | describes noun | 먹은 음식 |
| Nominalization | verb → noun | 먹기, 먹는 것 |
| Conjecture | seems like | 올 것 같다 |

**These patterns help you:**
- Describe actions done to things
- Talk about making others do things
- Create complex noun phrases
- Express uncertainty politely`,
      studyGuide: [
        { korean: '피동', romanization: 'pidong', meaning: 'Passive', example: '-이/히/리/기-' },
        { korean: '사동', romanization: 'sadong', meaning: 'Causative', example: '-이/히/리/기-, -게 하다' },
        { korean: '관형사', romanization: 'gwanhyeongsa', meaning: 'Modifier', example: '-은/는/을' }
      ],
      quiz: [
        { question: 'Which makes verbs into nouns?', options: ['Passive', 'Causative', 'Nominalization', 'Modifier'], correct: 2, explanation: 'Nominalization turns verbs into nouns' }
      ]
    },

    // WEEK 18: Formal & Written Korean
    {
      id: 'w18d1-written-style',
      title: 'Written Style: -다/-ㄴ다/-는다',
      intro: `Today you'll learn the plain/written style used in books and diaries.

**Plain Style Endings:**
| Type | Pattern | Example |
|------|---------|---------|
| Action verb | -ㄴ다/-는다 | 간다, 먹는다 |
| Descriptive | -다 | 크다, 좋다 |
| 이다 | -다 | 학생이다 |

**Usage:**
- Diaries, novels, newspapers
- Speaking to yourself
- Casual writing

**Example diary:**
오늘 학교에 갔다. 친구를 만났다. 재미있었다.
(Today I went to school. I met a friend. It was fun.)`,
      studyGuide: [
        { korean: '-ㄴ다/-는다', romanization: '-nda/-neunda', meaning: 'Plain action verb', example: '간다, 먹는다' },
        { korean: '-다', romanization: '-da', meaning: 'Plain descriptive', example: '크다, 좋다' },
        { korean: '-(이)다', romanization: '-(i)da', meaning: 'Plain copula', example: '학생이다' }
      ],
      quiz: [
        { question: 'What is the plain form of 가요?', options: ['간다', '가다', '갔다', '가요다'], correct: 0, explanation: '가요 → 간다 (plain/written)' }
      ]
    },
    {
      id: 'w18d2-formal-writing',
      title: 'Formal Writing Expressions',
      intro: `Today you'll learn formal expressions for writing.

**Formal Expressions:**
| Casual | Formal |
|--------|--------|
| 그래서 | 따라서, 그러므로 |
| 하지만 | 그러나, 하지만 |
| 그리고 | 또한, 그 외에도 |
| 왜냐하면 | 왜냐하면...이기 때문이다 |

**Formal endings:**
- -입니다 (is - formal)
- -습니다/-ㅂ니다 (does - formal)
- -이다 (is - written)

**Example:**
한국어는 배우기 어렵다. 그러나 재미있다.
(Korean is difficult to learn. However, it's fun.)`,
      studyGuide: [
        { korean: '따라서', romanization: 'ttaraseo', meaning: 'Therefore (formal)', example: 'Formal writing' },
        { korean: '그러나', romanization: 'geureona', meaning: 'However (formal)', example: 'Formal contrast' },
        { korean: '또한', romanization: 'ttohan', meaning: 'Also (formal)', example: 'Formal addition' }
      ],
      quiz: [
        { question: 'What is the formal version of 그래서?', options: ['그리고', '따라서', '하지만', '왜냐하면'], correct: 1, explanation: '따라서 = therefore (formal)' }
      ]
    },
    {
      id: 'w18d3-news-korean',
      title: 'News Korean',
      intro: `Today you'll learn to understand Korean news.

**News Language Features:**
- Uses formal -ㅂ니다 endings
- Passive constructions common
- Sino-Korean vocabulary
- Abbreviated expressions

**Common news words:**
| Korean | Meaning |
|--------|---------|
| 정부 | government |
| 경제 | economy |
| 발표하다 | announce |
| 계획 | plan |
| 증가하다 | increase |
| 감소하다 | decrease |

**Example headline:**
정부, 새로운 정책 발표
(Government announces new policy)`,
      studyGuide: [
        { korean: '정부', romanization: 'jeongbu', meaning: 'Government', example: 'News vocabulary' },
        { korean: '발표하다', romanization: 'balpyohada', meaning: 'Announce', example: '새 정책을 발표했다' },
        { korean: '경제', romanization: 'gyeongje', meaning: 'Economy', example: '경제가 성장한다' }
      ],
      quiz: [
        { question: 'What does 정부 mean?', options: ['Company', 'Government', 'School', 'Hospital'], correct: 1, explanation: '정부 = government' }
      ]
    },
    {
      id: 'w18d4-email-writing',
      title: 'Email & Business Writing',
      intro: `Today you'll learn to write professional emails.

**Email Structure:**
1. 수신: [Recipient]
2. 제목: [Subject]
3. 인사: [Greeting]
4. 본문: [Body]
5. 맺음말: [Closing]

**Useful phrases:**
- 안녕하십니까 (Formal hello)
- ~에 대해 문의드립니다 (I'm inquiring about~)
- 확인 부탁드립니다 (Please confirm)
- 감사합니다/감사드립니다 (Thank you)
- 답변 기다리겠습니다 (I await your reply)`,
      studyGuide: [
        { korean: '문의드립니다', romanization: 'munuideurimnida', meaning: 'I inquire (humble)', example: '제품에 대해 문의드립니다' },
        { korean: '부탁드립니다', romanization: 'butakdeurimnida', meaning: 'I request (humble)', example: '확인 부탁드립니다' },
        { korean: '감사드립니다', romanization: 'gamsadeurimnida', meaning: 'Thank you (humble)', example: 'Email closing' }
      ],
      quiz: [
        { question: 'What is a polite email closing?', options: ['안녕', '감사드립니다', '바이', '좋아요'], correct: 1, explanation: '감사드립니다 = Thank you (formal/humble)' }
      ]
    },
    {
      id: 'w18d5-resume-cover',
      title: 'Resume & Cover Letter',
      intro: `Today you'll learn resume vocabulary.

**Resume Sections:**
| Korean | Meaning |
|--------|---------|
| 이력서 | resume |
| 성명 | name |
| 생년월일 | date of birth |
| 학력 | education |
| 경력 | work experience |
| 자격증 | certifications |
| 자기소개서 | cover letter |

**Cover letter phrases:**
- 지원하게 되었습니다 (I am applying for)
- 관심을 가지고 있습니다 (I am interested in)
- 기여할 수 있습니다 (I can contribute)`,
      studyGuide: [
        { korean: '이력서', romanization: 'iryeokseo', meaning: 'Resume', example: '이력서를 보내요' },
        { korean: '경력', romanization: 'gyeongnyeok', meaning: 'Work experience', example: '경력 3년' },
        { korean: '지원하다', romanization: 'jiwonhada', meaning: 'Apply for', example: '이 직업에 지원합니다' }
      ],
      quiz: [
        { question: 'What is 이력서?', options: ['Cover letter', 'Resume', 'Application', 'Interview'], correct: 1, explanation: '이력서 = resume' }
      ]
    },
    {
      id: 'w18d6-week18-review',
      title: 'Week 18 Review: Formal Korean',
      intro: `Let's review formal and written Korean.

**Style Summary:**
| Style | Usage | Example |
|-------|-------|---------|
| 해요체 | Casual polite | 가요 |
| 합니다체 | Formal polite | 갑니다 |
| 반말 | Casual | 가 |
| Written | Books, diary | 간다 |

**You can now:**
- Write in formal style
- Read news Korean
- Write professional emails
- Understand resume format`,
      studyGuide: [
        { korean: '격식체', romanization: 'gyeoksikche', meaning: 'Formal style', example: '-습니다/-ㅂ니다' },
        { korean: '비격식체', romanization: 'bigyeoksikche', meaning: 'Informal style', example: '-아요/-어요' },
        { korean: '서면체', romanization: 'seomyeonche', meaning: 'Written style', example: '-다/-ㄴ다' }
      ],
      quiz: [
        { question: 'Which style is used in diaries?', options: ['해요체', '합니다체', 'Written/plain', '반말'], correct: 2, explanation: 'Written/plain style (-다) is used in diaries' }
      ]
    },

    // WEEK 19: Media & Entertainment
    {
      id: 'w19d1-kdrama-vocab',
      title: 'K-Drama Vocabulary',
      intro: `Today you'll learn vocabulary from K-dramas.

**Drama Words:**
| Korean | Meaning |
|--------|---------|
| 사랑해(요) | I love you |
| 보고 싶어(요) | I miss you |
| 미안해(요) | I'm sorry |
| 헤어지다 | to break up |
| 사귀다 | to date |
| 고백하다 | to confess |
| 질투하다 | to be jealous |

**Romantic phrases:**
- 나랑 사귈래? (Will you date me?)
- 너무 보고 싶었어. (I missed you so much.)`,
      studyGuide: [
        { korean: '사랑해요', romanization: 'saranghaeyo', meaning: 'I love you', example: 'Romantic confession' },
        { korean: '보고 싶어요', romanization: 'bogo sipeoyo', meaning: 'I miss you', example: 'Missing someone' },
        { korean: '사귀다', romanization: 'sagwida', meaning: 'To date', example: '사귀고 있어요' }
      ],
      quiz: [
        { question: 'How do you say "I love you"?', options: ['좋아해요', '사랑해요', '보고 싶어요', '미안해요'], correct: 1, explanation: '사랑해요 = I love you' }
      ]
    },
    {
      id: 'w19d2-kpop-vocab',
      title: 'K-Pop Vocabulary',
      intro: `Today you'll learn K-pop related vocabulary.

**K-Pop Words:**
| Korean | Meaning |
|--------|---------|
| 팬 | fan |
| 아이돌 | idol |
| 앨범 | album |
| 노래 | song |
| 춤 | dance |
| 콘서트 | concert |
| 데뷔하다 | to debut |
| 컴백 | comeback |

**Fan vocabulary:**
- 최애 (bias - favorite member)
- 덕질 (fangirling/fanboying)
- 응원봉 (lightstick)`,
      studyGuide: [
        { korean: '최애', romanization: 'choeae', meaning: 'Bias/favorite', example: 'K-pop fan term' },
        { korean: '컴백', romanization: 'keombaek', meaning: 'Comeback', example: '새 앨범 컴백' },
        { korean: '콘서트', romanization: 'konseoteu', meaning: 'Concert', example: '콘서트에 가요' }
      ],
      quiz: [
        { question: 'What is 최애?', options: ['Album', 'Song', 'Bias/favorite', 'Concert'], correct: 2, explanation: '최애 = bias/favorite member' }
      ]
    },
    {
      id: 'w19d3-movie-vocab',
      title: 'Movie & Entertainment Vocabulary',
      intro: `Today you'll learn movie-related vocabulary.

**Movie Words:**
| Korean | Meaning |
|--------|---------|
| 영화 | movie |
| 영화관 | movie theater |
| 배우 | actor/actress |
| 감독 | director |
| 장르 | genre |
| 자막 | subtitles |
| 개봉하다 | to release (film) |

**Genres:**
- 로맨스 (romance)
- 공포 (horror)
- 액션 (action)
- 코미디 (comedy)`,
      studyGuide: [
        { korean: '영화관', romanization: 'yeonghwagwan', meaning: 'Movie theater', example: '영화관에 가요' },
        { korean: '배우', romanization: 'baeu', meaning: 'Actor', example: '좋아하는 배우' },
        { korean: '자막', romanization: 'jamak', meaning: 'Subtitles', example: '한국어 자막' }
      ],
      quiz: [
        { question: 'What does 영화관 mean?', options: ['Movie', 'Movie theater', 'Actor', 'Director'], correct: 1, explanation: '영화관 = movie theater' }
      ]
    },
    {
      id: 'w19d4-social-media',
      title: 'Social Media Korean',
      intro: `Today you'll learn social media vocabulary.

**Social Media Words:**
| Korean | Meaning |
|--------|---------|
| 게시물 | post |
| 댓글 | comment |
| 좋아요 | like |
| 팔로우 | follow |
| 공유하다 | to share |
| 해시태그 | hashtag |
| 인스타그램 | Instagram |
| 유튜브 | YouTube |

**Common expressions:**
- 좋아요 눌러 주세요 (Please hit like)
- 구독 부탁드려요 (Please subscribe)`,
      studyGuide: [
        { korean: '댓글', romanization: 'daetgeul', meaning: 'Comment', example: '댓글 달아 주세요' },
        { korean: '좋아요', romanization: 'joayo', meaning: 'Like', example: '좋아요 눌러 주세요' },
        { korean: '구독', romanization: 'gudok', meaning: 'Subscribe', example: '구독해 주세요' }
      ],
      quiz: [
        { question: 'What is 댓글?', options: ['Post', 'Comment', 'Like', 'Share'], correct: 1, explanation: '댓글 = comment' }
      ]
    },
    {
      id: 'w19d5-gaming-vocab',
      title: 'Gaming Vocabulary',
      intro: `Today you'll learn gaming-related vocabulary.

**Gaming Words:**
| Korean | Meaning |
|--------|---------|
| 게임 | game |
| 캐릭터 | character |
| 레벨 | level |
| 아이템 | item |
| 이기다 | to win |
| 지다 | to lose |
| 팀 | team |
| GG | good game |

**Gaming expressions:**
- 한 판 하자! (Let's play a round!)
- 이겼다! (I won!)
- 졌어... (I lost...)`,
      studyGuide: [
        { korean: '이기다', romanization: 'igida', meaning: 'To win', example: '이겼어요!' },
        { korean: '지다', romanization: 'jida', meaning: 'To lose', example: '졌어요' },
        { korean: '한 판', romanization: 'han pan', meaning: 'One round/game', example: '한 판 하자' }
      ],
      quiz: [
        { question: 'How do you say "I won"?', options: ['졌어요', '이겼어요', '했어요', '놀았어요'], correct: 1, explanation: '이기다 → 이겼어요 (won)' }
      ]
    },
    {
      id: 'w19d6-week19-review',
      title: 'Week 19 Review: Media Korean',
      intro: `Let's review media and entertainment Korean.

**Vocabulary Categories:**
- K-Drama: 사랑, 사귀다, 헤어지다
- K-Pop: 아이돌, 컴백, 최애
- Movies: 영화관, 배우, 감독
- Social Media: 댓글, 좋아요, 구독
- Gaming: 이기다, 지다, 한 판

**You can now:**
- Understand K-drama dialogue better
- Follow K-pop content
- Discuss movies
- Navigate Korean social media
- Play games with Korean speakers!`,
      studyGuide: [
        { korean: '미디어', romanization: 'midia', meaning: 'Media', example: 'Entertainment' },
        { korean: '엔터테인먼트', romanization: 'enteoteinmeonteu', meaning: 'Entertainment', example: 'K-entertainment' }
      ],
      quiz: [
        { question: 'What is 최애 in K-pop?', options: ['Album', 'Concert', 'Bias/favorite', 'Song'], correct: 2, explanation: '최애 = bias/favorite member' }
      ]
    },

    // WEEK 20: Travel & Living
    {
      id: 'w20d1-hotel-vocab',
      title: 'Hotel Vocabulary',
      intro: `Today you'll learn hotel-related vocabulary.

**Hotel Words:**
| Korean | Meaning |
|--------|---------|
| 호텔 | hotel |
| 방 | room |
| 예약 | reservation |
| 체크인 | check-in |
| 체크아웃 | check-out |
| 조식 | breakfast |
| 짐 | luggage |

**Useful phrases:**
- 예약했어요. (I have a reservation.)
- 방이 있어요? (Do you have rooms?)
- 체크아웃은 몇 시예요? (What time is checkout?)`,
      studyGuide: [
        { korean: '예약했어요', romanization: 'yeyakhaesseoyo', meaning: 'I have a reservation', example: 'At hotel desk' },
        { korean: '체크인/아웃', romanization: 'chekeu in/aut', meaning: 'Check in/out', example: 'Hotel procedures' },
        { korean: '조식', romanization: 'josik', meaning: 'Breakfast (formal)', example: '조식 포함' }
      ],
      quiz: [
        { question: 'How do you say "I have a reservation"?', options: ['예약해요', '예약했어요', '예약할 거예요', '예약이에요'], correct: 1, explanation: '예약했어요 = I made a reservation' }
      ]
    },
    {
      id: 'w20d2-airport-vocab',
      title: 'Airport Vocabulary',
      intro: `Today you'll learn airport-related vocabulary.

**Airport Words:**
| Korean | Meaning |
|--------|---------|
| 공항 | airport |
| 비행기 | airplane |
| 탑승 | boarding |
| 탑승권 | boarding pass |
| 수화물 | luggage |
| 입국 | arrival/immigration |
| 출국 | departure |
| 세관 | customs |

**Useful phrases:**
- 탑승구가 어디예요? (Where is the gate?)
- 비행기가 연착됐어요. (The flight is delayed.)`,
      studyGuide: [
        { korean: '탑승권', romanization: 'tapseunggwon', meaning: 'Boarding pass', example: '탑승권 보여 주세요' },
        { korean: '입국/출국', romanization: 'ipguk/chulguk', meaning: 'Arrival/departure', example: '입국 심사' },
        { korean: '연착', romanization: 'yeonchak', meaning: 'Delayed', example: '비행기가 연착됐어요' }
      ],
      quiz: [
        { question: 'What is 탑승권?', options: ['Passport', 'Boarding pass', 'Ticket', 'Visa'], correct: 1, explanation: '탑승권 = boarding pass' }
      ]
    },
    {
      id: 'w20d3-housing-vocab',
      title: 'Housing Vocabulary',
      intro: `Today you'll learn housing vocabulary.

**Housing Words:**
| Korean | Meaning |
|--------|---------|
| 집 | house/home |
| 아파트 | apartment |
| 원룸 | studio |
| 월세 | monthly rent |
| 전세 | deposit lease |
| 보증금 | deposit |
| 계약 | contract |
| 이사하다 | to move |

**Housing expressions:**
- 월세가 얼마예요? (How much is rent?)
- 이사했어요. (I moved.)`,
      studyGuide: [
        { korean: '월세', romanization: 'wolse', meaning: 'Monthly rent', example: '월세 50만 원' },
        { korean: '전세', romanization: 'jeonse', meaning: 'Deposit lease', example: 'Korean system' },
        { korean: '이사하다', romanization: 'isahada', meaning: 'To move', example: '이사했어요' }
      ],
      quiz: [
        { question: 'What is 월세?', options: ['Deposit', 'Monthly rent', 'House', 'Contract'], correct: 1, explanation: '월세 = monthly rent' }
      ]
    },
    {
      id: 'w20d4-neighborhood',
      title: 'Neighborhood Vocabulary',
      intro: `Today you'll learn neighborhood vocabulary.

**Neighborhood Words:**
| Korean | Meaning |
|--------|---------|
| 동네 | neighborhood |
| 편의점 | convenience store |
| 마트 | supermarket |
| 세탁소 | laundromat |
| 미용실 | hair salon |
| 약국 | pharmacy |
| 주민센터 | community center |

**Asking about places:**
- 근처에 편의점 있어요? (Is there a convenience store nearby?)
- 가장 가까운 약국이 어디예요? (Where's the nearest pharmacy?)`,
      studyGuide: [
        { korean: '동네', romanization: 'dongne', meaning: 'Neighborhood', example: '우리 동네' },
        { korean: '편의점', romanization: 'pyeonuijeom', meaning: 'Convenience store', example: '24시간 편의점' },
        { korean: '근처', romanization: 'geuncheo', meaning: 'Nearby', example: '근처에 있어요?' }
      ],
      quiz: [
        { question: 'What is 편의점?', options: ['Supermarket', 'Convenience store', 'Pharmacy', 'Bank'], correct: 1, explanation: '편의점 = convenience store' }
      ]
    },
    {
      id: 'w20d5-utilities',
      title: 'Utilities & Services',
      intro: `Today you'll learn utility vocabulary.

**Utility Words:**
| Korean | Meaning |
|--------|---------|
| 전기 | electricity |
| 가스 | gas |
| 수도 | water |
| 인터넷 | internet |
| 요금 | fee/bill |
| 고장 | broken |
| 수리하다 | to repair |

**Useful phrases:**
- 인터넷이 안 돼요. (The internet isn't working.)
- 고장 났어요. (It's broken.)
- 수리해 주세요. (Please repair it.)`,
      studyGuide: [
        { korean: '요금', romanization: 'yogeum', meaning: 'Fee/bill', example: '전기 요금' },
        { korean: '고장', romanization: 'gojang', meaning: 'Broken', example: '고장 났어요' },
        { korean: '수리하다', romanization: 'surihada', meaning: 'To repair', example: '수리해 주세요' }
      ],
      quiz: [
        { question: 'How do you say "It\'s broken"?', options: ['고장이에요', '고장 났어요', '고장해요', '고장했어요'], correct: 1, explanation: '고장 나다 → 고장 났어요' }
      ]
    },
    {
      id: 'w20d6-month5-review',
      title: 'Month 5 Assessment & Review',
      intro: `Congratulations on completing Month 5!

**Month 5 Achievements:**
- Complex grammar (passive, causative)
- Noun modification patterns
- Conjecture expressions
- Formal/written Korean
- Email and resume writing
- Media vocabulary (K-drama, K-pop)
- Travel vocabulary
- Housing and daily life vocabulary

**You can now:**
- Express complex ideas
- Write formally
- Understand media content
- Navigate travel situations
- Handle daily life in Korea`,
      studyGuide: [
        { korean: '훌륭해요!', romanization: 'hullyunghaeyo!', meaning: 'Excellent!', example: 'Month 5 complete!' },
        { korean: '마지막 달이에요!', romanization: 'majimak darieyo!', meaning: "It's the last month!", example: 'Almost done!' }
      ],
      quiz: [
        { question: 'Which is passive form of 보다?', options: ['봐요', '보이다', '보여요', '봤어요'], correct: 1, explanation: '보이다 = to be seen (passive)' }
      ]
    },

    // WEEK 21: Advanced Communication
    {
      id: 'w21d1-advanced-conditionals',
      title: 'Advanced Conditionals',
      intro: `Today you'll learn advanced conditional expressions.

**Advanced Conditional Patterns:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| -(으)ㄹ 텐데 | would expect | 올 텐데 |
| -(으)ㄹ걸 | probably | 좋을걸 |
| -더라도 | even if | 가더라도 |
| -거든요 | you see... | 바쁘거든요 |

**Examples:**
- 비가 올 텐데... (It will probably rain...)
- 맛있을걸요. (It's probably tasty.)
- 어렵더라도 포기하지 마세요. (Even if it's hard, don't give up.)`,
      studyGuide: [
        { korean: '-(으)ㄹ 텐데', romanization: '-(eu)l tende', meaning: 'Would expect that', example: '올 텐데' },
        { korean: '-더라도', romanization: '-deorado', meaning: 'Even if', example: '어렵더라도' },
        { korean: '-거든요', romanization: '-geodeunyo', meaning: 'You see (explanation)', example: '바쁘거든요' }
      ],
      quiz: [
        { question: 'What does -더라도 mean?', options: ['If', 'Even if', 'Because', 'When'], correct: 1, explanation: '-더라도 = even if' }
      ]
    },
    {
      id: 'w21d2-reported-speech',
      title: 'Reported Speech: -다고/-라고',
      intro: `Today you'll learn to report what others said.

**Reported Speech Patterns:**
| Type | Pattern | Example |
|------|---------|---------|
| Statement | -다고 하다 | 간다고 해요 |
| Question | -냐고 하다 | 가냐고 해요 |
| Command | -라고 하다 | 가라고 해요 |
| Suggestion | -자고 하다 | 가자고 해요 |

**Examples:**
- 친구가 바쁘다고 했어요. (My friend said they're busy.)
- 어디 가냐고 물었어요. (They asked where I'm going.)
- 빨리 오라고 했어요. (They told me to come quickly.)`,
      studyGuide: [
        { korean: '-다고 하다', romanization: '-dago hada', meaning: 'Said that (statement)', example: '간다고 했어요' },
        { korean: '-냐고 하다', romanization: '-nyago hada', meaning: 'Asked if', example: '가냐고 했어요' },
        { korean: '-라고 하다', romanization: '-rago hada', meaning: 'Told to', example: '가라고 했어요' }
      ],
      quiz: [
        { question: 'How do you say "He said he\'s going"?', options: ['가요 해요', '간다고 했어요', '가라고 했어요', '가자고 했어요'], correct: 1, explanation: '-다고 하다 for reported statements' }
      ]
    },
    {
      id: 'w21d3-hearsay-expressions',
      title: 'Hearsay: -대요/-래요',
      intro: `Today you'll learn shortened hearsay expressions.

**Hearsay Patterns:**
\`\`\`
-다고 해요 → -대요 (shorter)
-라고 해요 → -래요 (shorter)
\`\`\`

**Examples:**
- 내일 비 온대요. (They say it'll rain tomorrow.)
- 맛있대요. (They say it's delicious.)
- 빨리 오래요. (They say come quickly.)
- 같이 가재요. (They suggest going together.)

**Common usage:**
- Passing on information
- Rumors/what you heard`,
      studyGuide: [
        { korean: '-대요', romanization: '-daeyo', meaning: 'They say (short)', example: '온대요' },
        { korean: '-래요', romanization: '-raeyo', meaning: 'They tell to (short)', example: '오래요' },
        { korean: '-재요', romanization: '-jaeyo', meaning: 'They suggest (short)', example: '가재요' }
      ],
      quiz: [
        { question: 'What is -대요 short for?', options: ['-다고 해요', '-라고 해요', '-냐고 해요', '-자고 해요'], correct: 0, explanation: '-대요 is short for -다고 해요' }
      ]
    },
    {
      id: 'w21d4-nuance-particles',
      title: 'Nuance Particles: 요/네/군요',
      intro: `Today you'll learn particles that add nuance.

**Nuance Particles:**
| Particle | Meaning | Example |
|----------|---------|---------|
| -네요 | realization | 맛있네요! |
| -군요 | discovery | 맛있군요! |
| -는데요 | soft/inviting | 맛있는데요 |
| -잖아요 | you know | 맛있잖아요 |

**Differences:**
- -네요: "Oh, this is good!" (just noticed)
- -군요: "So this is good!" (learned new info)
- -잖아요: "It's good, you know!" (reminder)`,
      studyGuide: [
        { korean: '-네요', romanization: '-neyo', meaning: 'Oh!/realization', example: '맛있네요!' },
        { korean: '-군요', romanization: '-gunyo', meaning: 'I see!/discovery', example: '크군요!' },
        { korean: '-잖아요', romanization: '-janayo', meaning: 'You know', example: '알잖아요' }
      ],
      quiz: [
        { question: 'Which expresses realization?', options: ['-요', '-네요', '-고요', '-대요'], correct: 1, explanation: '-네요 expresses realization' }
      ]
    },
    {
      id: 'w21d5-emphasis-expressions',
      title: 'Emphasis & Emotion',
      intro: `Today you'll learn expressions for emphasis.

**Emphasis Patterns:**
| Pattern | Meaning | Example |
|---------|---------|---------|
| 얼마나...는지 | how... | 얼마나 좋은지 |
| -기는 하다 | do... but | 가기는 해요 |
| 진짜/정말 | really | 진짜 좋아요 |
| 너무 | too/so | 너무 맛있어요 |
| -다니 | can't believe | 간다니! |

**Examples:**
- 얼마나 맛있는지 몰라요. (You don't know how good it is.)
- 먹기는 했어요. (I did eat, but...)
- 벌써 갔다니! (I can't believe they left already!)`,
      studyGuide: [
        { korean: '얼마나...는지', romanization: 'eolmana...neunji', meaning: 'How (much)', example: '얼마나 좋은지' },
        { korean: '-기는 하다', romanization: '-gineun hada', meaning: 'Do...but', example: '가기는 해요' },
        { korean: '-다니', romanization: '-dani', meaning: 'Can\'t believe', example: '갔다니!' }
      ],
      quiz: [
        { question: 'What does 얼마나...는지 express?', options: ['Why', 'How/how much', 'When', 'Where'], correct: 1, explanation: '얼마나...는지 = how/how much' }
      ]
    },
    {
      id: 'w21d6-week21-review',
      title: 'Week 21 Review: Advanced Communication',
      intro: `Let's review advanced communication patterns.

**Patterns Learned:**
| Type | Pattern | Use |
|------|---------|-----|
| Conditional | -더라도 | even if |
| Reported | -다고 하다 | said that |
| Hearsay | -대요 | they say |
| Nuance | -네요/-군요 | realization |
| Emphasis | 얼마나...는지 | how much |

**You can now:**
- Express complex conditions
- Report what others said
- Pass on information naturally
- Add nuance to statements
- Emphasize feelings`,
      studyGuide: [
        { korean: '인용', romanization: 'inyong', meaning: 'Quotation/citation', example: 'Reported speech' },
        { korean: '뉘앙스', romanization: 'nwiangseu', meaning: 'Nuance', example: 'Subtle meanings' }
      ],
      quiz: [
        { question: 'Which reports a question?', options: ['-다고 하다', '-라고 하다', '-냐고 하다', '-자고 하다'], correct: 2, explanation: '-냐고 하다 reports questions' }
      ]
    },

    // WEEK 22: Professional Korean
    {
      id: 'w22d1-business-meetings',
      title: 'Business Meeting Korean',
      intro: `Today you'll learn business meeting expressions.

**Meeting Vocabulary:**
| Korean | Meaning |
|--------|---------|
| 회의 | meeting |
| 안건 | agenda |
| 발표 | presentation |
| 제안 | proposal |
| 결론 | conclusion |
| 합의 | agreement |

**Meeting expressions:**
- 회의를 시작하겠습니다. (Let's begin the meeting.)
- 의견 있으시면 말씀해 주세요. (Please share your opinions.)
- 다음 안건으로 넘어가겠습니다. (Let's move to the next item.)`,
      studyGuide: [
        { korean: '회의', romanization: 'hoeui', meaning: 'Meeting', example: '회의 시작합니다' },
        { korean: '안건', romanization: 'angeon', meaning: 'Agenda item', example: '다음 안건' },
        { korean: '발표', romanization: 'balpyo', meaning: 'Presentation', example: '발표하겠습니다' }
      ],
      quiz: [
        { question: 'What is 안건?', options: ['Meeting', 'Agenda item', 'Conclusion', 'Opinion'], correct: 1, explanation: '안건 = agenda item' }
      ]
    },
    {
      id: 'w22d2-workplace-honorifics',
      title: 'Workplace Honorifics',
      intro: `Today you'll learn workplace titles and honorifics.

**Job Titles:**
| Korean | Meaning |
|--------|---------|
| 사장님 | CEO |
| 부장님 | Manager |
| 과장님 | Section chief |
| 대리님 | Assistant manager |
| 신입 | New employee |

**Polite expressions:**
- 말씀하신 대로 (As you said)
- 검토해 보겠습니다 (I will review it)
- 보고 드리겠습니다 (I will report to you)

**Using titles:**
- Name + 직함 + 님 (Kim 과장님)`,
      studyGuide: [
        { korean: '사장님', romanization: 'sajangnim', meaning: 'CEO', example: 'Company president' },
        { korean: '부장님', romanization: 'bujangnim', meaning: 'Manager', example: 'Department head' },
        { korean: '검토하다', romanization: 'geomtohada', meaning: 'To review', example: '검토해 보겠습니다' }
      ],
      quiz: [
        { question: 'What title is higher than 과장?', options: ['대리', '신입', '부장', '직원'], correct: 2, explanation: '부장 > 과장 > 대리' }
      ]
    },
    {
      id: 'w22d3-presentations',
      title: 'Giving Presentations',
      intro: `Today you'll learn presentation expressions.

**Presentation Phrases:**
\`\`\`
Opening:
- 오늘 발표할 주제는...입니다.
  (Today's topic is...)
- ...에 대해 말씀드리겠습니다.
  (I will talk about...)

Body:
- 첫째로/둘째로/셋째로 (First/Second/Third)
- 다음 슬라이드를 보시면... (Looking at the next slide...)

Closing:
- 이상입니다. (That's all.)
- 질문 있으시면 말씀해 주세요.
  (Please let me know if you have questions.)
\`\`\``,
      studyGuide: [
        { korean: '발표하다', romanization: 'balpyohada', meaning: 'To present', example: '발표하겠습니다' },
        { korean: '슬라이드', romanization: 'seullaideu', meaning: 'Slide', example: '다음 슬라이드' },
        { korean: '이상입니다', romanization: 'isangimnida', meaning: 'That\'s all', example: 'Ending presentations' }
      ],
      quiz: [
        { question: 'How do you say "That\'s all" at the end?', options: ['끝이에요', '이상입니다', '됐어요', '그래요'], correct: 1, explanation: '이상입니다 = That\'s all (formal ending)' }
      ]
    },
    {
      id: 'w22d4-negotiation',
      title: 'Negotiation & Discussion',
      intro: `Today you'll learn negotiation expressions.

**Discussion Phrases:**
| Korean | Meaning |
|--------|---------|
| 협상하다 | to negotiate |
| 타협하다 | to compromise |
| 조건 | condition/terms |
| 제시하다 | to propose |
| 수락하다 | to accept |
| 거절하다 | to decline |

**Useful expressions:**
- 조건을 제시하겠습니다. (I'll propose terms.)
- 타협점을 찾읍시다. (Let's find a compromise.)
- 좀 더 생각해 볼게요. (I'll think about it more.)`,
      studyGuide: [
        { korean: '협상', romanization: 'hyeopsang', meaning: 'Negotiation', example: '협상 중이에요' },
        { korean: '타협', romanization: 'tahyeop', meaning: 'Compromise', example: '타협합시다' },
        { korean: '조건', romanization: 'jogeon', meaning: 'Condition/terms', example: '조건이 뭐예요?' }
      ],
      quiz: [
        { question: 'What does 타협하다 mean?', options: ['To negotiate', 'To compromise', 'To decline', 'To accept'], correct: 1, explanation: '타협하다 = to compromise' }
      ]
    },
    {
      id: 'w22d5-business-writing',
      title: 'Business Writing',
      intro: `Today you'll learn business writing expressions.

**Business Letter Structure:**
\`\`\`
수신: (To)
발신: (From)
제목: (Subject)
날짜: (Date)

존경하는 [Name]님께, (Dear [Name],)

[Body]

감사합니다. (Thank you.)
[Your name] 드림 (Respectfully,)
\`\`\`

**Formal expressions:**
- 귀사의 무궁한 발전을 기원합니다
  (Wishing your company prosperity)
- 검토 부탁드립니다 (Please review)`,
      studyGuide: [
        { korean: '수신/발신', romanization: 'susin/balsin', meaning: 'To/From', example: 'Business letters' },
        { korean: '드림', romanization: 'deurim', meaning: 'Respectfully', example: 'Letter closing' },
        { korean: '기원합니다', romanization: 'giwonhamnida', meaning: 'Wish/hope', example: '발전을 기원합니다' }
      ],
      quiz: [
        { question: 'What does 드림 mean in letters?', options: ['Dream', 'Respectfully', 'Thank you', 'Sincerely'], correct: 1, explanation: '드림 = respectfully (letter closing)' }
      ]
    },
    {
      id: 'w22d6-week22-review',
      title: 'Week 22 Review: Professional Korean',
      intro: `Let's review professional Korean.

**Professional Skills:**
| Skill | Key Vocabulary |
|-------|---------------|
| Meetings | 회의, 안건, 합의 |
| Titles | 사장님, 부장님, 과장님 |
| Presentations | 발표, 슬라이드, 이상입니다 |
| Negotiation | 협상, 타협, 조건 |
| Writing | 수신, 발신, 드림 |

**You can now:**
- Participate in business meetings
- Use proper workplace honorifics
- Give presentations
- Negotiate politely
- Write professional correspondence`,
      studyGuide: [
        { korean: '비즈니스', romanization: 'bijeuniseu', meaning: 'Business', example: 'Business Korean' },
        { korean: '프로페셔널', romanization: 'peuropesyeoneol', meaning: 'Professional', example: 'Professional level' }
      ],
      quiz: [
        { question: 'How do you end a formal presentation?', options: ['끝났어요', '이상입니다', '됐어요', '가세요'], correct: 1, explanation: '이상입니다 ends formal presentations' }
      ]
    },

    // WEEK 23: Cultural Fluency
    {
      id: 'w23d1-proverbs',
      title: 'Korean Proverbs (속담)',
      intro: `Today you'll learn popular Korean proverbs.

**Common Proverbs:**
| Korean | Meaning |
|--------|---------|
| 가는 말이 고와야 오는 말이 곱다 | Words given nicely return nicely |
| 콩 심은 데 콩 나고 팥 심은 데 팥 난다 | You reap what you sow |
| 호랑이도 제 말 하면 온다 | Speak of the devil |
| 원숭이도 나무에서 떨어진다 | Even experts make mistakes |
| 소 잃고 외양간 고친다 | Closing the barn door after the horse bolts |

**Usage:** Add 라고 하는데 to use proverbs naturally.`,
      studyGuide: [
        { korean: '속담', romanization: 'sokdam', meaning: 'Proverb', example: 'Korean sayings' },
        { korean: '가는 말이 고와야 오는 말이 곱다', romanization: 'ganeun mari gowaya oneun mari gopda', meaning: 'Be kind to receive kindness', example: 'About treating others' },
        { korean: '호랑이도 제 말 하면 온다', romanization: 'horangido je mal hamyeon onda', meaning: 'Speak of the devil', example: 'When someone appears' }
      ],
      quiz: [
        { question: 'What does 속담 mean?', options: ['Story', 'Proverb', 'Poem', 'Song'], correct: 1, explanation: '속담 = proverb' }
      ]
    },
    {
      id: 'w23d2-idioms',
      title: 'Korean Idioms (관용어)',
      intro: `Today you'll learn Korean idioms.

**Common Idioms:**
| Korean | Literal | Meaning |
|--------|---------|---------|
| 눈이 높다 | Eyes are high | Has high standards |
| 발이 넓다 | Feet are wide | Well-connected |
| 손이 크다 | Hands are big | Generous |
| 귀가 얇다 | Ears are thin | Easily influenced |
| 입이 무겁다 | Mouth is heavy | Good at keeping secrets |

**Body part idioms are very common!**`,
      studyGuide: [
        { korean: '관용어', romanization: 'gwanyongeo', meaning: 'Idiom', example: 'Fixed expressions' },
        { korean: '눈이 높다', romanization: 'nuni nopda', meaning: 'Has high standards', example: '눈이 높아요' },
        { korean: '입이 무겁다', romanization: 'ibi mugeopda', meaning: 'Keeps secrets', example: '입이 무거운 사람' }
      ],
      quiz: [
        { question: 'What does 눈이 높다 mean?', options: ['Tall', 'Has high standards', 'Sees well', 'Tired eyes'], correct: 1, explanation: '눈이 높다 = has high standards' }
      ]
    },
    {
      id: 'w23d3-slang-trends',
      title: 'Modern Slang & Trends',
      intro: `Today you'll learn current Korean slang.

**Popular Slang (2020s):**
| Korean | Meaning |
|--------|---------|
| 대박 | Amazing/wow |
| 헐 | OMG |
| 멘붕 | Mental breakdown |
| 존잼 | Super fun |
| 꿀잼 | Honey fun (great) |
| 노잼 | Not fun (boring) |
| TMI | Too much information |
| 갑분싸 | Sudden awkward silence |

**Internet abbreviations:**
- ㅋㅋㅋ (haha)
- ㅎㅎㅎ (hehe)
- ㅠㅠ/ㅜㅜ (crying)`,
      studyGuide: [
        { korean: '대박', romanization: 'daebak', meaning: 'Amazing/jackpot', example: '대박이다!' },
        { korean: '존잼', romanization: 'jonjaem', meaning: 'Super fun', example: '존잼이야!' },
        { korean: 'ㅋㅋㅋ', romanization: 'kkk', meaning: 'Haha', example: 'Text laughter' }
      ],
      quiz: [
        { question: 'What does 대박 mean?', options: ['Big bag', 'Amazing/wow', 'Expensive', 'Difficult'], correct: 1, explanation: '대박 = amazing/wow' }
      ]
    },
    {
      id: 'w23d4-cultural-taboos',
      title: 'Cultural Taboos & Etiquette',
      intro: `Today you'll learn Korean cultural taboos.

**Writing Names:**
- Never write names in red (associated with death)
- Use black or blue ink

**Number 4:**
- 4 (사) sounds like "death" (死)
- Many buildings skip 4th floor

**Dining Etiquette:**
- Don't blow your nose at the table
- Don't stick chopsticks upright in rice
- Pour drinks for others first

**Gift giving:**
- Avoid giving sets of 4 items
- Avoid scissors/knives (cutting relationship)`,
      studyGuide: [
        { korean: '예절', romanization: 'yejeol', meaning: 'Etiquette', example: 'Social manners' },
        { korean: '금기', romanization: 'geumgi', meaning: 'Taboo', example: 'Things to avoid' },
        { korean: '미신', romanization: 'misin', meaning: 'Superstition', example: 'Number 4' }
      ],
      quiz: [
        { question: 'Why avoid the number 4?', options: ['Bad luck', 'Sounds like death', 'Too even', 'Old tradition'], correct: 1, explanation: '4 (사) sounds like 死 (death)' }
      ]
    },
    {
      id: 'w23d5-humor-wordplay',
      title: 'Korean Humor & Wordplay',
      intro: `Today you'll learn Korean humor.

**Common Wordplay (말장난):**
\`\`\`
Q: 세상에서 가장 추운 바다는?
A: 썰렁해 (pun: 설렁해)
(What's the coldest sea? Cheesy/Cold)
\`\`\`

**Dad Jokes (아재 개그):**
- 귀여운 게 넘 쳐요 → 귀여운 개 넘쳐요
  (So cute vs. cute dogs everywhere)

**Types of humor:**
- 드립 (deurib) - jokes/puns
- 개그 (gaegeu) - gags
- 유머 (yumeo) - humor`,
      studyGuide: [
        { korean: '말장난', romanization: 'maljangnan', meaning: 'Wordplay/pun', example: 'Language jokes' },
        { korean: '아재 개그', romanization: 'ajae gaegeu', meaning: 'Dad joke', example: 'Corny jokes' },
        { korean: '드립', romanization: 'deurip', meaning: 'Joke/quip', example: '드립 치다' }
      ],
      quiz: [
        { question: 'What is 말장난?', options: ['Story', 'Wordplay/pun', 'Argument', 'Riddle'], correct: 1, explanation: '말장난 = wordplay/pun' }
      ]
    },
    {
      id: 'w23d6-week23-review',
      title: 'Week 23 Review: Cultural Fluency',
      intro: `Let's review Korean cultural fluency.

**Culture Topics:**
| Topic | Examples |
|-------|----------|
| Proverbs | 가는 말이 고와야... |
| Idioms | 눈이 높다, 입이 무겁다 |
| Slang | 대박, 존잼, ㅋㅋㅋ |
| Taboos | Red ink, number 4 |
| Humor | 말장난, 아재 개그 |

**Cultural fluency means:**
- Understanding the deeper meaning
- Knowing what NOT to do
- Appreciating Korean humor
- Using expressions naturally`,
      studyGuide: [
        { korean: '문화', romanization: 'munhwa', meaning: 'Culture', example: 'Korean culture' },
        { korean: '유창성', romanization: 'yuchangseong', meaning: 'Fluency', example: 'Cultural fluency' }
      ],
      quiz: [
        { question: 'What is 관용어?', options: ['Proverb', 'Idiom', 'Slang', 'Grammar'], correct: 1, explanation: '관용어 = idiom' }
      ]
    },

    // WEEK 24: Course Completion
    {
      id: 'w24d1-self-assessment',
      title: 'Self-Assessment Skills',
      intro: `Today you'll learn to assess your Korean.

**TOPIK Levels Guide:**
| Level | Skills |
|-------|--------|
| 1-2 | Basic conversation, survival Korean |
| 3-4 | Intermediate, handle most situations |
| 5-6 | Advanced, professional level |

**After this course, you should:**
- Have solid TOPIK 2-3 foundation
- Handle daily conversations
- Understand K-content with context
- Read and write simple texts

**Continue learning by:**
- Taking TOPIK practice tests
- Consuming Korean media daily
- Finding conversation partners`,
      studyGuide: [
        { korean: 'TOPIK', romanization: 'TOPIK', meaning: 'Korean proficiency test', example: 'Test of Proficiency in Korean' },
        { korean: '자기 평가', romanization: 'jagi pyeongga', meaning: 'Self-assessment', example: 'Evaluate yourself' },
        { korean: '연습', romanization: 'yeonseup', meaning: 'Practice', example: '연습이 중요해요' }
      ],
      quiz: [
        { question: 'What is TOPIK?', options: ['A school', 'Proficiency test', 'A textbook', 'A method'], correct: 1, explanation: 'TOPIK = Test of Proficiency in Korean' }
      ]
    },
    {
      id: 'w24d2-learning-resources',
      title: 'Learning Resources',
      intro: `Today you'll learn about resources to continue studying.

**Free Resources:**
| Type | Resource |
|------|----------|
| YouTube | Talk To Me In Korean, Korean Unnie |
| Apps | Duolingo, Memrise, Anki |
| Podcasts | KoreanClass101 |
| Websites | TTMIK, How to Study Korean |

**Media Immersion:**
- K-dramas with Korean subs
- K-pop lyrics
- Korean YouTube/TikTok
- Webtoons

**Practice:**
- Language exchange apps (HelloTalk, Tandem)
- Online tutors (italki)
- Korean communities`,
      studyGuide: [
        { korean: '자료', romanization: 'jaryo', meaning: 'Resources/materials', example: '학습 자료' },
        { korean: '앱', romanization: 'aep', meaning: 'App', example: '한국어 앱' },
        { korean: '언어 교환', romanization: 'eoneo gyohwan', meaning: 'Language exchange', example: '언어 교환 파트너' }
      ],
      quiz: [
        { question: 'What does 언어 교환 mean?', options: ['Language school', 'Language exchange', 'Language test', 'Language book'], correct: 1, explanation: '언어 교환 = language exchange' }
      ]
    },
    {
      id: 'w24d3-common-mistakes',
      title: 'Common Mistakes Review',
      intro: `Today you'll review common mistakes to avoid.

**Common Mistakes:**
| Mistake | Correct |
|---------|---------|
| 저는 학생이다 | 저는 학생이에요 (casual) |
| 나는 가요 | 나 가 (casual) / 저는 가요 |
| 뭐 마시고 싶어요? | 뭐 드실래요? (to others) |
| 수고하세요 (to boss) | 수고하셨습니다 |

**Register mixing:**
- Don't mix 반말 and 존댓말
- Match your speech level throughout

**Particle errors:**
- Subject (이/가) vs Topic (은/는)
- Object (을/를) sometimes optional`,
      studyGuide: [
        { korean: '실수', romanization: 'silsu', meaning: 'Mistake', example: '실수하지 마세요' },
        { korean: '주의', romanization: 'juui', meaning: 'Caution/attention', example: '주의하세요' },
        { korean: '올바른', romanization: 'olbareun', meaning: 'Correct', example: '올바른 표현' }
      ],
      quiz: [
        { question: 'When do you say 수고하셨습니다?', options: ['To juniors', 'To seniors/elders', 'To yourself', 'To strangers'], correct: 1, explanation: 'Use 수고하셨습니다 (past) to seniors' }
      ]
    },
    {
      id: 'w24d4-final-grammar-review',
      title: 'Final Grammar Review',
      intro: `Today is the final grammar review.

**Essential Patterns:**
| Pattern | Use |
|---------|-----|
| -아/어요 | Casual polite |
| -습니다 | Formal polite |
| -(으)면 | If/when |
| -아/어서 | So/because |
| -고 | And (sequential) |
| -(으)ㄹ 거예요 | Will/going to |
| -고 싶다 | Want to |
| -(으)면 좋겠다 | Hope/wish |
| -아/어 보다 | Try doing |
| -(으)ㄹ 수 있다 | Can/able to |

**You've learned 50+ grammar patterns!**`,
      studyGuide: [
        { korean: '문법', romanization: 'munbeop', meaning: 'Grammar', example: '한국어 문법' },
        { korean: '패턴', romanization: 'paeteun', meaning: 'Pattern', example: '문법 패턴' },
        { korean: '복습', romanization: 'bokseup', meaning: 'Review', example: '문법 복습' }
      ],
      quiz: [
        { question: 'Which expresses hope/wish?', options: ['-고 싶다', '-(으)면 좋겠다', '-(으)ㄹ 수 있다', '-아/어 보다'], correct: 1, explanation: '-(으)면 좋겠다 = hope/wish' }
      ]
    },
    {
      id: 'w24d5-final-vocab-review',
      title: 'Final Vocabulary Review',
      intro: `Today is the final vocabulary review.

**Vocabulary Categories Learned:**
| Category | Examples |
|----------|----------|
| Basics | 안녕하세요, 감사합니다 |
| Numbers | 하나, 일, 첫째 |
| Time | 오늘, 내일, 어제 |
| Family | 가족, 부모님, 형제 |
| Food | 밥, 음식, 맛있다 |
| Places | 집, 학교, 회사 |
| Actions | 가다, 오다, 먹다 |
| Descriptive | 좋다, 크다, 예쁘다 |
| Emotions | 행복하다, 슬프다 |

**You've learned 500+ vocabulary words!**`,
      studyGuide: [
        { korean: '어휘', romanization: 'eohwi', meaning: 'Vocabulary', example: '한국어 어휘' },
        { korean: '단어', romanization: 'daneo', meaning: 'Word', example: '새 단어' },
        { korean: '암기', romanization: 'amgi', meaning: 'Memorization', example: '단어 암기' }
      ],
      quiz: [
        { question: 'What does 어휘 mean?', options: ['Grammar', 'Vocabulary', 'Pronunciation', 'Writing'], correct: 1, explanation: '어휘 = vocabulary' }
      ]
    },
    {
      id: 'w24d6-course-completion',
      title: 'Course Completion',
      intro: `축하합니다! Congratulations!

**You have completed the 24-week Korean course!**

**Your Journey:**
- Month 1: Hangul & Basics
- Month 2: Essential Grammar
- Month 3: Expanding Skills
- Month 4: Practical Korean
- Month 5: Advanced Patterns
- Month 6: Fluency & Culture

**You can now:**
- Read and write Hangul fluently
- Have everyday conversations
- Understand Korean media
- Use polite and formal speech
- Express complex ideas
- Navigate Korean culture

**다음 단계 (Next steps):**
- Take TOPIK I or II
- Find a conversation partner
- Continue with Korean media
- Visit Korea!

**화이팅! 한국어 공부 계속하세요!**
(Fighting! Keep studying Korean!)`,
      studyGuide: [
        { korean: '축하합니다', romanization: 'chukahamnida', meaning: 'Congratulations', example: 'Course complete!' },
        { korean: '화이팅', romanization: 'hwaiting', meaning: 'Fighting/Good luck', example: 'Encouragement' },
        { korean: '수고하셨습니다', romanization: 'sugohasyeosseumnida', meaning: 'You worked hard', example: 'Course completion' }
      ],
      quiz: [
        { question: 'What does 화이팅 express?', options: ['Anger', 'Encouragement', 'Sadness', 'Surprise'], correct: 1, explanation: '화이팅 = encouragement/fighting!' }
      ]
    }
  ]
}
