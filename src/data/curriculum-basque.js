// Basque (Euskara) Fluency Course Curriculum
// Pattern-focused learning approach

export const basqueCurriculum = {
  id: 'basque',
  name: 'Basque',
  nativeName: 'Euskara',
  modules: [
  {
    id: 'alphabet',
    name: 'Alphabet & Pronunciation',
    icon: 'A',
    description: 'Master Basque sounds and spelling patterns',
    lessons: [
      {
        id: 'alphabet-vowels',
        title: 'Vowels',
        intro: `Basque vowels are simple and consistent—there are only 5, and they ALWAYS sound the same. No exceptions!

**THE FIVE BASQUE VOWELS:**

| Letter | Sound | Like English | Example |
|--------|-------|--------------|---------|
| a | /a/ | "ah" in father | etxea (house) |
| e | /e/ | "e" in bed | emakumea (woman) |
| i | /i/ | "ee" in see | ikusi (to see) |
| o | /o/ | "o" in go | ona (good) |
| u | /u/ | "oo" in moon | ura (water) |

**THE KEY INSIGHT:**
Unlike English where vowels have multiple sounds, Basque vowels are 100% predictable. Once you learn these 5 sounds, you can pronounce ANY Basque word correctly.

**NO SILENT VOWELS:**
Every vowel is pronounced. "Etxea" = e-txe-a (3 syllables)

**DIPHTHONGS (Vowel Combinations):**
When two vowels appear together, pronounce BOTH:
- ai = "ah-ee" (like "eye")
- ei = "eh-ee"
- au = "ah-oo"
- eu = "eh-oo"

**WHY THIS MATTERS:**
Basque spelling is phonetic. What you see is what you say. This makes reading aloud much easier than English!`,
        studyGuide: [
          {
            korean: 'a',
            romanization: '/a/',
            meaning: 'Open "ah" sound',
            usage: 'Same as Spanish or Italian "a"',
            example: 'aita (father), ama (mother)'
          },
          {
            korean: 'e',
            romanization: '/e/',
            meaning: 'Short "e" as in "bed"',
            usage: 'Never sounds like "ee"',
            example: 'etxea (house), emakumea (woman)'
          },
          {
            korean: 'i',
            romanization: '/i/',
            meaning: 'Long "ee" sound',
            usage: 'Always pronounced "ee"',
            example: 'ikusi (to see), irakurri (to read)'
          },
          {
            korean: 'o',
            romanization: '/o/',
            meaning: 'Pure "o" sound',
            usage: 'Round your lips slightly',
            example: 'ona (good), ogia (bread)'
          },
          {
            korean: 'u',
            romanization: '/u/',
            meaning: 'Long "oo" sound',
            usage: 'Round your lips tightly',
            example: 'ura (water), uda (summer)'
          }
        ],
        quiz: [
          {
            question: 'How many vowels does Basque have?',
            options: ['3', '5', '7', '12'],
            correct: 1,
            explanation: 'Basque has exactly 5 vowels: a, e, i, o, u—all with consistent pronunciation.'
          },
          {
            question: 'How is "etxea" pronounced?',
            options: ['Et-chee-a', 'E-txe-a', 'Et-xa', 'Ee-txea'],
            correct: 1,
            explanation: 'Each vowel is pronounced: e-txe-a (3 syllables)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice saying: aita, ama, etxea, ura, ona',
            type: 'speaking'
          },
          {
            prompt: 'Record yourself saying the 5 vowels: a, e, i, o, u',
            type: 'recording'
          }
        ]
      },
      {
        id: 'alphabet-consonants',
        title: 'Consonants',
        intro: `Basque consonants mostly follow Spanish patterns, with a few unique sounds. Here are the systematic patterns.

**CONSONANTS SAME AS ENGLISH:**
b, d, f, k, l, m, n, p, t

**SPECIAL BASQUE SOUNDS:**

| Letter(s) | Sound | Like | Example |
|-----------|-------|------|---------|
| tx | /tʃ/ | "ch" in church | etxea (house) |
| ts | /ts/ | "ts" in cats | itsu (blind) |
| tz | /ts/ | harder "ts" | hitz (word) |
| x | /ʃ/ | "sh" in ship | xagu (mouse) |
| z | /s/ | "s" in see | zuzen (correct) |
| s | /s̺/ | apical "s" | seme (son) |
| rr | /r/ | rolled "r" | irakurri (to read) |
| r | /ɾ/ | soft tap "r" | ura (water) |

**THE Z/S DISTINCTION:**
- **z** = regular "s" sound (like English)
- **s** = apical "s" (tongue tip touches ridge behind teeth)

This is subtle—don't worry too much about it at first. Both sound like "s" to English ears.

**THE H RULE:**
- In standard Basque, **h** is silent
- Some dialects pronounce it like English "h"
- Just ignore it when starting: "hitz" sounds like "its"

**DOUBLE CONSONANTS:**
- **rr** = strongly rolled r (multiple taps)
- **tt**, **dd**, **ll** = palatalized (softened) versions

**THE TX/TS/TZ PATTERN:**
All are "t + s-like sound":
- tx = t + sh → "ch"
- ts/tz = t + s → "ts"`,
        studyGuide: [
          {
            korean: 'tx',
            romanization: '/tʃ/',
            meaning: '"ch" sound like "church"',
            usage: 'Common in Basque words',
            example: 'etxea (house), txakurra (dog)'
          },
          {
            korean: 'x',
            romanization: '/ʃ/',
            meaning: '"sh" sound like "ship"',
            usage: 'Softer than English "x"',
            example: 'xagu (mouse), xake (chess)'
          },
          {
            korean: 'rr',
            romanization: '/r/',
            meaning: 'Rolled "r"',
            usage: 'Multiple tongue taps',
            example: 'irakurri (to read), harri (stone)'
          },
          {
            korean: 'z',
            romanization: '/s/',
            meaning: 'Regular "s" sound',
            usage: 'NOT like English "z"',
            example: 'zuzen (correct), zerua (sky)'
          },
          {
            korean: 'h',
            romanization: 'silent',
            meaning: 'Usually silent',
            usage: 'Ignore when reading',
            example: 'hitz (word) → sounds like "its"'
          }
        ],
        quiz: [
          {
            question: 'How do you pronounce "tx"?',
            options: ['Like "tx" in taxi', 'Like "ch" in church', 'Like "x" in box', 'Silent'],
            correct: 1,
            explanation: 'tx makes the "ch" sound as in "church" - etxea sounds like "e-che-a"'
          },
          {
            question: 'How is "z" pronounced in Basque?',
            options: ['Like English "z"', 'Like "s"', 'Like "th"', 'Silent'],
            correct: 1,
            explanation: 'Basque "z" sounds like "s" - zuzen sounds like "su-sen"'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice: etxea, txakurra, harri, hitz, zuzen',
            type: 'speaking'
          },
          {
            prompt: 'Try rolling your "r" in: irakurri, harri, erreka',
            type: 'speaking'
          }
        ]
      },
      {
        id: 'alphabet-stress',
        title: 'Stress & Rhythm',
        intro: `Basque stress patterns are relatively simple. Here's the system.

**THE BASIC STRESS RULE:**
In most Basque words, stress falls on the **second syllable**.

Examples:
- e-**TXE**-a (house)
- gi-**ZON**-a (man)
- e-**MA**-ku-mea (woman)

**EXCEPTIONS (Stress Markers):**
When stress differs, it's often marked with an accent:
- **á**, **é**, **í**, **ó**, **ú** = stressed syllable

**SUFFIX STRESS:**
When you add suffixes (and Basque adds LOTS of suffixes), stress often shifts:
- etxe (house) → e-**TXE**-a (the house)
- etxea → e-txe-**AN** (in the house)

**THE RHYTHM PATTERN:**
Basque has a flowing, even rhythm. Unlike English (which stresses some syllables heavily), Basque syllables are more equally weighted.

**COMPOUND WORDS:**
In compounds, each part keeps its stress:
- etxe + alde → etxealde (around the house)

**PRACTICE TIP:**
Listen to native speakers. The rhythm is more important than perfectly placing stress. Basque speakers will understand you even if stress is slightly off.`,
        studyGuide: [
          {
            korean: 'Second syllable stress',
            romanization: 'Default pattern',
            meaning: 'Most words stress the 2nd syllable',
            usage: 'The baseline rule for pronunciation',
            example: 'e-TXE-a, gi-ZON-a'
          },
          {
            korean: 'Accent marks',
            romanization: 'á, é, í, ó, ú',
            meaning: 'Indicates non-standard stress',
            usage: 'Stress the marked vowel',
            example: 'áma vs amá (different meanings)'
          }
        ],
        quiz: [
          {
            question: 'Where does stress usually fall in Basque words?',
            options: ['First syllable', 'Second syllable', 'Last syllable', 'Random'],
            correct: 1,
            explanation: 'Most Basque words are stressed on the second syllable.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice stressing the second syllable: etxea, gizona, emakumea, mutila',
            type: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 'grammar',
    name: 'Basic Grammar',
    icon: 'G',
    description: 'Learn essential Basque sentence structure',
    lessons: [
      {
        id: 'grammar-sov',
        title: 'Subject-Object-Verb Order',
        intro: `Like Korean and Japanese, Basque is an SOV language. The verb comes LAST.

**THE FUNDAMENTAL RULE:**
\`\`\`
VERB GOES LAST. ALWAYS.
\`\`\`

**THE SENTENCE FORMULA:**

| English (SVO) | Basque (SOV) |
|---------------|--------------|
| I eat bread | Nik ogia jaten dut |
| I + eat + bread | I + bread + eat |

**WORD ORDER COMPARISON:**
- English: The dog eats meat
- Basque: Txakurrak haragia jaten du (The-dog meat eats)

**THE FLEXIBILITY PRINCIPLE:**
While SOV is standard, other orders are possible for emphasis. But the verb STILL goes last:
- Nik ogia jaten dut (I eat bread - neutral)
- Ogia nik jaten dut (BREAD I eat - emphasizing bread)

**CASE MARKERS ALLOW FLEXIBILITY:**
Because Basque marks grammatical roles with suffixes (not word order), you always know what's what:
- **Nik** = I (as subject/doer)
- **Ogia** = bread (as object)
- The -k on "ni" and -a on "ogi" tell you their roles

**THE PATTERN:**
\`\`\`
[Subject + case] + [Object + case] + Verb
\`\`\`

This is remarkably similar to Korean's particle system!`,
        studyGuide: [
          {
            korean: 'SOV word order',
            romanization: 'Subject-Object-Verb',
            meaning: 'Verb always comes last',
            usage: 'The fundamental Basque sentence pattern',
            example: 'Nik ogia jaten dut (I bread eat)'
          },
          {
            korean: 'Case markers',
            romanization: 'Suffixes show roles',
            meaning: 'Endings tell you subject/object',
            usage: 'Like Korean particles',
            example: 'Nik (I-subject), ogia (bread-object)'
          }
        ],
        quiz: [
          {
            question: 'What is Basque word order?',
            options: ['SVO (like English)', 'SOV (verb last)', 'VSO', 'Free order'],
            correct: 1,
            explanation: 'Basque uses SOV order—the verb always comes at the end.'
          },
          {
            question: 'In "Nik ogia jaten dut", what does "ogia" mean?',
            options: ['I', 'eat', 'bread', 'the'],
            correct: 2,
            explanation: 'Ogia = bread (with the -a article suffix). Nik = I, jaten dut = eat.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Rearrange to Basque order: "The cat drinks milk" → Katuak esnea edaten du',
            type: 'writing'
          }
        ]
      },
      {
        id: 'grammar-articles',
        title: 'The Article System',
        intro: `Basque has a unique article system—the definite article is a SUFFIX, not a separate word!

**THE CORE PATTERN:**
\`\`\`
Noun + -A = "the noun"
\`\`\`

| Without article | With article (-a) | English |
|-----------------|-------------------|---------|
| etxe | etxea | the house |
| gizon | gizona | the man |
| ogi | ogia | the bread |

**THE -A SUFFIX IS THE DEFINITE ARTICLE:**
- etxe = house (indefinite)
- etxea = THE house (definite)

**PLURAL: -AK**
\`\`\`
Noun + -AK = "the [plural nouns]"
\`\`\`

| Singular | Plural |
|----------|--------|
| gizona (the man) | gizonak (the men) |
| etxea (the house) | etxeak (the houses) |
| emakumea (the woman) | emakumeak (the women) |

**INDEFINITE ARTICLE: BAT**
For "a/an", use "bat" AFTER the noun:
- gizon bat = a man
- etxe bat = a house
- emakume bat = a woman

**THE PATTERN RULE:**
\`\`\`
Noun + -a = the (definite)
Noun + bat = a (indefinite)
Noun + -ak = the (plural)
\`\`\`

**WHY THIS MATTERS:**
Almost every Basque noun you see ends in -a. Now you know why—it's "the X"!`,
        studyGuide: [
          {
            korean: '-a',
            romanization: 'Definite article suffix',
            meaning: '"the"',
            usage: 'Attached to end of nouns',
            example: 'etxe → etxea (the house)'
          },
          {
            korean: '-ak',
            romanization: 'Plural definite',
            meaning: '"the" (plural)',
            usage: 'Makes noun plural and definite',
            example: 'etxea → etxeak (the houses)'
          },
          {
            korean: 'bat',
            romanization: 'Indefinite article',
            meaning: '"a/an"',
            usage: 'Comes after the noun',
            example: 'etxe bat (a house)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "the house" in Basque?',
            options: ['a etxe', 'etxe bat', 'etxea', 'etxe'],
            correct: 2,
            explanation: 'Add -a suffix: etxe + a = etxea (the house)'
          },
          {
            question: 'How do you say "a man" in Basque?',
            options: ['gizona', 'gizon bat', 'bat gizon', 'a gizon'],
            correct: 1,
            explanation: '"Bat" (a/an) comes AFTER the noun: gizon bat'
          }
        ],
        outputPractice: [
          {
            prompt: 'Convert to definite: etxe, gizon, emakume, txakur, katu',
            type: 'writing',
            answer: 'etxea, gizona, emakumea, txakurra, katua'
          }
        ]
      },
      {
        id: 'grammar-cases',
        title: 'The Case System',
        intro: `Basque uses cases (suffixes) to mark grammatical roles. This is the key to understanding Basque grammar!

**THE MAJOR CASES:**

| Case | Suffix | Function | Example |
|------|--------|----------|---------|
| Absolutive | -a/-ak | Subject (intrans), Object | Gizona etorri da (The man came) |
| Ergative | -k/-ek | Subject (transitive) | Gizonak ogia jaten du (The man eats bread) |
| Dative | -i/-ri | Indirect object | Gizonari eman diot (I gave to the man) |
| Genitive | -ren | Possession | Gizonaren etxea (The man's house) |
| Locative | -n | Location (in/at) | Etxean (in the house) |

**THE ERGATIVE-ABSOLUTIVE SYSTEM:**
This is Basque's most distinctive feature!

**THE PATTERN:**
- **Absolutive** = default case (no extra marking on most nouns)
- **Ergative** = marks the DOER of an action that affects something else

Compare:
- Gizona etorri da (The man came) — gizona = absolutive (no object)
- Gizon**ak** ogia jan du (The man ate bread) — gizonak = ergative (has object)

**THE LOGIC:**
If the sentence has a direct object, the subject gets -k (ergative).
If the sentence has NO direct object, the subject stays absolutive.

**SIMPLIFIED RULE:**
\`\`\`
Action + Object → Subject gets -K
Action only → Subject stays normal
\`\`\``,
        studyGuide: [
          {
            korean: 'Absolutive (-a)',
            romanization: 'Default case',
            meaning: 'Subject (no object) or Object',
            usage: 'Basic noun form',
            example: 'Gizona etorri da (The man came)'
          },
          {
            korean: 'Ergative (-k)',
            romanization: 'Transitive subject',
            meaning: 'Subject when there IS an object',
            usage: 'The "doer" in transitive sentences',
            example: 'Gizonak ogia jan du (The man ate bread)'
          },
          {
            korean: 'Dative (-i/-ri)',
            romanization: 'Indirect object',
            meaning: '"to/for someone"',
            usage: 'Recipient of action',
            example: 'Amari eman diot (I gave to mother)'
          },
          {
            korean: 'Genitive (-ren)',
            romanization: 'Possession',
            meaning: '"of / \'s"',
            usage: 'Shows ownership',
            example: 'Aitaren etxea (Father\'s house)'
          },
          {
            korean: 'Locative (-n)',
            romanization: 'Location',
            meaning: '"in/at"',
            usage: 'Where something is',
            example: 'Etxean (in the house)'
          }
        ],
        quiz: [
          {
            question: 'When does a subject take the ergative case (-k)?',
            options: ['Always', 'Never', 'When there is a direct object', 'Only for people'],
            correct: 2,
            explanation: 'The ergative marks subjects in sentences WITH a direct object.'
          },
          {
            question: 'What does "-n" indicate?',
            options: ['Possession', 'Location (in/at)', 'Subject', 'Object'],
            correct: 1,
            explanation: '-n is the locative case, meaning "in" or "at": etxean = in the house'
          }
        ],
        outputPractice: [
          {
            prompt: 'Add the correct case: "The woman sees the dog" → Emakume___ txakurra ikusten du',
            type: 'writing',
            answer: 'Emakumeak txakurra ikusten du (ergative -k because there\'s an object)'
          }
        ]
      },
      {
        id: 'grammar-verbs',
        title: 'Verb Conjugation Basics',
        intro: `Basque verbs are complex—but there's good news: you only need to fully conjugate a handful of auxiliary verbs.

**THE BIG PICTURE:**
Most Basque verbs use a two-part structure:
\`\`\`
Main Verb (participle form) + Auxiliary Verb (conjugated)
\`\`\`

Example: "I eat bread"
- jaten (eating) + dut (I have/do) = jaten dut (I eat)

**THE THREE KEY AUXILIARIES:**

| Auxiliary | Type | Used with |
|-----------|------|-----------|
| izan (to be) | Intransitive | Verbs without object |
| *edun (to have) | Transitive | Verbs with object |
| ukan | Alternative for *edun | Same |

**IZAN (To Be) - PRESENT TENSE:**

| Person | Singular | Plural |
|--------|----------|--------|
| I | naiz | gara |
| You (informal) | haiz | zarete |
| You (formal) | zara | zarete |
| He/She/It | da | dira |

**EDUN (To Have) - PRESENT TENSE (Subject "I"):**

| Object | Form | Example |
|--------|------|---------|
| it | dut | Ogia jaten dut (I eat bread) |
| him/her | dut | Ikusten dut (I see him/her) |
| them | ditut | Ikusten ditut (I see them) |

**THE PATTERN:**
\`\`\`
[Subject] + [Object] + [Main verb participle] + [Auxiliary]
\`\`\`

Nik + ogia + jaten + dut = I eat bread`,
        studyGuide: [
          {
            korean: 'izan',
            romanization: 'To be (intransitive)',
            meaning: 'Used when no object',
            usage: 'For states, coming, going, etc.',
            example: 'Ni naiz (I am), Etorri naiz (I came)'
          },
          {
            korean: '*edun / ukan',
            romanization: 'To have (transitive)',
            meaning: 'Used when there IS an object',
            usage: 'For eating, seeing, having, etc.',
            example: 'Dut (I have it), Ogia jaten dut (I eat bread)'
          },
          {
            korean: 'naiz / da',
            romanization: 'am / is',
            meaning: 'Izan conjugated',
            usage: 'First person / Third person',
            example: 'Ni naiz (I am), Hura da (He/she is)'
          },
          {
            korean: 'dut',
            romanization: 'I have/do it',
            meaning: 'Edun conjugated',
            usage: 'Subject=I, Object=singular',
            example: 'Ikusten dut (I see it)'
          }
        ],
        quiz: [
          {
            question: 'Which auxiliary do you use with transitive verbs (verbs with objects)?',
            options: ['izan', '*edun/ukan', 'egon', 'joan'],
            correct: 1,
            explanation: '*edun (or ukan) is used for transitive verbs—those with direct objects.'
          },
          {
            question: 'How do you say "I am" in Basque?',
            options: ['dut', 'naiz', 'da', 'zara'],
            correct: 1,
            explanation: 'Naiz = I am (from izan: to be)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice: I am = Ni naiz, He/She is = Hura da, We are = Gu gara',
            type: 'speaking'
          }
        ]
      },
      {
        id: 'grammar-negation',
        title: 'Negation Patterns',
        intro: `Basque negation follows clear patterns. The word "ez" (not) is your key tool.

**THE BASIC PATTERN:**
\`\`\`
EZ + Verb = Negative
\`\`\`

**PRESENT TENSE NEGATION:**
- Ogia jaten dut → Ez dut ogia jaten (I don't eat bread)

Notice: ez + auxiliary come TOGETHER, then the object and main verb follow.

**THE WORD ORDER SHIFT:**
\`\`\`
Affirmative: Subject + Object + Main Verb + Auxiliary
Negative: Subject + EZ + Auxiliary + Object + Main Verb
\`\`\`

**EXAMPLES:**

| Affirmative | Negative |
|-------------|----------|
| Jaten dut (I eat) | Ez dut jaten (I don't eat) |
| Dator (He comes) | Ez dator (He doesn't come) |
| Badakit (I know) | Ez dakit (I don't know) |

**THE "BA-" PREFIX:**
Basque uses "ba-" prefix for emphasis in affirmatives:
- dakit (I know) → badakit (I DO know, indeed I know)
- dago (he is) → badago (he IS there, yes he is)

**NEGATIVE QUESTIONS:**
\`\`\`
Ez + Auxiliary + Main Verb + ?
\`\`\`
- Ez duzu nahi? (Don't you want?)
- Ez al dator? (Isn't he coming?) — "al" adds question emphasis

**THE PATTERN SUMMARY:**
\`\`\`
Positive: Verb happens
Negative: EZ + [auxiliary shifts to front]
Emphatic positive: BA- + verb
\`\`\``,
        studyGuide: [
          {
            korean: 'ez',
            romanization: 'Not',
            meaning: 'Negation word',
            usage: 'Goes before the auxiliary verb',
            example: 'Ez dut jaten (I don\'t eat)'
          },
          {
            korean: 'ez dut',
            romanization: 'I don\'t / I haven\'t',
            meaning: 'Negative transitive',
            usage: 'For actions with objects',
            example: 'Ez dut ikusten (I don\'t see)'
          },
          {
            korean: 'ez naiz',
            romanization: 'I am not',
            meaning: 'Negative intransitive',
            usage: 'For states, being',
            example: 'Ez naiz etorri (I haven\'t come)'
          },
          {
            korean: 'ba-',
            romanization: 'Emphatic prefix',
            meaning: '"indeed" / "yes, ..."',
            usage: 'Strengthens affirmation',
            example: 'Badakit (I DO know)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I don\'t eat" in Basque?',
            options: ['Jaten ez dut', 'Ez jaten dut', 'Ez dut jaten', 'Dut ez jaten'],
            correct: 2,
            explanation: 'Ez + auxiliary comes first: Ez dut jaten'
          },
          {
            question: 'What does "ba-" prefix indicate?',
            options: ['Negation', 'Question', 'Emphasis/affirmation', 'Past tense'],
            correct: 2,
            explanation: 'Ba- emphasizes the affirmative: badakit = I DO know'
          }
        ],
        outputPractice: [
          {
            prompt: 'Make negative: Jaten dut, Dator, Badakit',
            type: 'writing',
            answer: 'Ez dut jaten, Ez dator, Ez dakit'
          }
        ]
      },
      {
        id: 'grammar-questions',
        title: 'Question Formation',
        intro: `Basque questions can be formed with intonation alone or with question words.

**YES/NO QUESTIONS:**
Two methods:
1. Rising intonation only (like English)
2. Add "al" particle for emphasis

\`\`\`
Statement: Etortzen da (He comes)
Question: Etortzen da? (Does he come?) — intonation
Question: Etortzen al da? (Does he come?) — with "al"
\`\`\`

**THE "AL" PARTICLE:**
Inserted before the auxiliary to mark questions:
- Badakizu? (Do you know?) — intonation only
- Ba al dakizu? (Do you know?) — with "al"

**QUESTION WORDS (Galde-hitzak):**

| Basque | English | Example |
|--------|---------|---------|
| Zer? | What? | Zer da hau? (What is this?) |
| Nor? | Who? | Nor da? (Who is it?) |
| Non? | Where? | Non dago? (Where is it?) |
| Noiz? | When? | Noiz etorriko da? (When will he come?) |
| Zergatik? | Why? | Zergatik? (Why?) |
| Nola? | How? | Nola zaude? (How are you?) |
| Zenbat? | How much/many? | Zenbat da? (How much is it?) |

**WORD ORDER WITH QUESTIONS:**
Question word typically comes first:
- Non dago? (Where is-it?)
- Zer jaten duzu? (What eat you?)
- Nor etorri da? (Who come has?)

**THE PATTERN:**
\`\`\`
Question word + [rest of sentence with verb at end]
\`\`\``,
        studyGuide: [
          {
            korean: 'Zer?',
            romanization: 'What?',
            meaning: 'Asks about things',
            usage: 'Most common question word',
            example: 'Zer da hau? (What is this?)'
          },
          {
            korean: 'Nor?',
            romanization: 'Who?',
            meaning: 'Asks about people',
            usage: 'For identity questions',
            example: 'Nor da? (Who is it?)'
          },
          {
            korean: 'Non?',
            romanization: 'Where?',
            meaning: 'Asks about location',
            usage: 'Location questions',
            example: 'Non dago? (Where is it?)'
          },
          {
            korean: 'Nola?',
            romanization: 'How?',
            meaning: 'Asks about manner',
            usage: 'Common greeting question',
            example: 'Nola zaude? (How are you?)'
          },
          {
            korean: 'al',
            romanization: 'Question particle',
            meaning: 'Marks yes/no questions',
            usage: 'Optional but common',
            example: 'Etortzen al da? (Is he coming?)'
          }
        ],
        quiz: [
          {
            question: 'How do you ask "What is this?"',
            options: ['Hau zer da?', 'Zer da hau?', 'Da zer hau?', 'Zer hau da?'],
            correct: 1,
            explanation: 'Question word first: Zer da hau?'
          },
          {
            question: 'What does "al" do in a question?',
            options: ['Makes it negative', 'Makes it past tense', 'Emphasizes the question', 'Changes meaning'],
            correct: 2,
            explanation: '"Al" is an optional particle that emphasizes yes/no questions.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Form questions: Where is the house? What do you eat? Who is coming?',
            type: 'writing',
            answer: 'Non dago etxea? Zer jaten duzu? Nor dator?'
          }
        ]
      }
    ]
  },
  {
    id: 'vocab',
    name: 'Essential Vocabulary',
    icon: 'H',
    description: 'Build your core Basque vocabulary',
    lessons: [
      {
        id: 'vocab-greetings',
        title: 'Greetings & Basic Expressions',
        intro: `Basque greetings are warm and follow clear patterns. Learn these and you can start conversations immediately!

**BASIC GREETINGS:**

| Basque | English | When to use |
|--------|---------|-------------|
| Kaixo! | Hello! | Informal, anytime |
| Egun on! | Good morning! | Until noon |
| Arratsalde on! | Good afternoon! | Afternoon |
| Gabon! | Good evening/night! | Evening |
| Agur! | Goodbye! | Leaving |

**HOW ARE YOU?**
- Nola zaude? (How are you? - formal)
- Zer moduz? (How's it going? - informal)
- Zelan? (How? - very informal)

**RESPONSES:**
- Ondo! (Good!/Well!)
- Oso ondo! (Very well!)
- Primeran! (Great!)
- Ez hain ondo (Not so good)
- Hala-hola (So-so)

**POLITENESS:**

| Basque | English |
|--------|---------|
| Eskerrik asko! | Thank you very much! |
| Mila esker! | A thousand thanks! |
| Ez horregatik | You're welcome (lit. "not for that") |
| Barkatu | Sorry / Excuse me |
| Mesedez | Please |

**THE POLITENESS PATTERN:**
Basque uses the formal "zu" (you) by default with strangers. The informal "hi" is only for close friends and family. When in doubt, use "zu" forms.

**INTRODUCTIONS:**
- Ni [name] naiz = I am [name]
- Nire izena [name] da = My name is [name]
- Pozten naiz = Nice to meet you (lit. "I rejoice")`,
        studyGuide: [
          {
            korean: 'Kaixo',
            romanization: 'Hello',
            meaning: 'General greeting',
            usage: 'Any time of day, informal',
            example: 'Kaixo! Nola zaude?'
          },
          {
            korean: 'Egun on',
            romanization: 'Good morning',
            meaning: 'Morning greeting',
            usage: 'Until around noon',
            example: 'Egun on! Zer moduz?'
          },
          {
            korean: 'Eskerrik asko',
            romanization: 'Thank you very much',
            meaning: 'Most common thanks',
            usage: 'For any situation',
            example: 'Eskerrik asko! (Thank you!)'
          },
          {
            korean: 'Barkatu',
            romanization: 'Sorry / Excuse me',
            meaning: 'Apology or attention',
            usage: 'Like "excuse me" or "sorry"',
            example: 'Barkatu, non dago...? (Excuse me, where is...?)'
          },
          {
            korean: 'Agur',
            romanization: 'Goodbye',
            meaning: 'Farewell',
            usage: 'When leaving',
            example: 'Agur! Bihar arte! (Bye! See you tomorrow!)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "Thank you very much" in Basque?',
            options: ['Barkatu', 'Eskerrik asko', 'Mesedez', 'Agur'],
            correct: 1,
            explanation: 'Eskerrik asko = Thank you very much'
          },
          {
            question: 'What does "Nola zaude?" mean?',
            options: ['What\'s your name?', 'Where are you?', 'How are you?', 'What do you want?'],
            correct: 2,
            explanation: 'Nola zaude? = How are you? (formal)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice: Kaixo! Nola zaude? - Ondo, eskerrik asko! Eta zu?',
            type: 'speaking'
          },
          {
            prompt: 'Introduce yourself: Kaixo! Ni [your name] naiz. Pozten naiz!',
            type: 'speaking'
          }
        ]
      },
      {
        id: 'vocab-numbers',
        title: 'Numbers',
        intro: `Basque numbers have unique features. The system is vigesimal (base-20) for larger numbers!

**NUMBERS 0-10:**

| Number | Basque |
|--------|--------|
| 0 | zero |
| 1 | bat |
| 2 | bi |
| 3 | hiru |
| 4 | lau |
| 5 | bost |
| 6 | sei |
| 7 | zazpi |
| 8 | zortzi |
| 9 | bederatzi |
| 10 | hamar |

**NUMBERS 11-20:**

| Number | Basque | Pattern |
|--------|--------|---------|
| 11 | hamaika | hamar + bat (10+1) |
| 12 | hamabi | hamar + bi (10+2) |
| 13 | hamahiru | hamar + hiru |
| 14 | hamalau | hamar + lau |
| 15 | hamabost | hamar + bost |
| 16 | hamasei | hamar + sei |
| 17 | hamazazpi | hamar + zazpi |
| 18 | hemezortzi | special form |
| 19 | hemeretzi | special form |
| 20 | hogei | base unit |

**THE VIGESIMAL SYSTEM (Base-20):**
Larger numbers build on 20:
- 20 = hogei
- 40 = berrogei (2 × 20)
- 60 = hirurogei (3 × 20)
- 80 = laurogei (4 × 20)
- 100 = ehun

**COMBINING NUMBERS:**
21-39 = hogei + ta + number
- 21 = hogeita bat (20 and 1)
- 25 = hogeita bost (20 and 5)
- 30 = hogeita hamar (20 and 10)

**WITH NOUNS:**
Number + Noun (no article):
- Bi etxe = two houses
- Hiru gizon = three men`,
        studyGuide: [
          {
            korean: 'bat, bi, hiru, lau, bost',
            romanization: '1, 2, 3, 4, 5',
            meaning: 'Basic counting',
            usage: 'Foundation numbers',
            example: 'Bi kafe, mesedez (Two coffees, please)'
          },
          {
            korean: 'sei, zazpi, zortzi, bederatzi, hamar',
            romanization: '6, 7, 8, 9, 10',
            meaning: 'Completing 1-10',
            usage: 'Essential counting',
            example: 'Hamar euro (Ten euros)'
          },
          {
            korean: 'hogei',
            romanization: '20',
            meaning: 'Base of vigesimal system',
            usage: 'Key number for larger counts',
            example: 'Hogei urte (20 years)'
          },
          {
            korean: 'hogeita',
            romanization: '20 and...',
            meaning: 'Combines with 1-19',
            usage: 'Numbers 21-39',
            example: 'Hogeita bost (25)'
          },
          {
            korean: 'ehun',
            romanization: '100',
            meaning: 'Hundred',
            usage: 'Larger numbers',
            example: 'Ehun euro (100 euros)'
          }
        ],
        quiz: [
          {
            question: 'How do you say "25" in Basque?',
            options: ['Hamabost', 'Hogeita bost', 'Berrogei', 'Bost hogei'],
            correct: 1,
            explanation: '25 = hogeita bost (20 and 5)'
          },
          {
            question: 'What number system does Basque use for larger numbers?',
            options: ['Decimal (base-10)', 'Vigesimal (base-20)', 'Hexadecimal', 'Binary'],
            correct: 1,
            explanation: 'Basque uses a vigesimal (base-20) system: 40 = berrogei (2×20)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Count from 1-10 in Basque',
            type: 'speaking'
          },
          {
            prompt: 'Say these numbers: 15, 20, 25, 30, 100',
            type: 'speaking',
            hint: 'hamabost, hogei, hogeita bost, hogeita hamar, ehun'
          }
        ]
      },
      {
        id: 'vocab-food',
        title: 'Food & Dining',
        intro: `Basque cuisine is famous! Learn the vocabulary to order and enjoy it.

**BASIC FOOD WORDS:**

| Basque | English |
|--------|---------|
| ogia | bread |
| ura | water |
| ardoa | wine |
| kafea | coffee |
| garagardoa | beer |
| esnea | milk |
| haragia | meat |
| arraina | fish |
| oilaskoa | chicken |
| urdaiazpikoa | ham |

**AT A RESTAURANT:**

| Basque | English |
|--------|---------|
| Barkatu! | Excuse me! (to call waiter) |
| Karta, mesedez | The menu, please |
| Zer gomendatzen duzu? | What do you recommend? |
| Hau nahi dut | I want this |
| Kontua, mesedez | The bill, please |
| Goxoa! | Delicious! |

**ORDERING PATTERN:**
\`\`\`
[Item] + bat/bi/hiru + mesedez
\`\`\`
- Kafe bat, mesedez (One coffee, please)
- Bi garagardo, mesedez (Two beers, please)
- Ura, mesedez (Water, please)

**TASTE WORDS:**

| Basque | English |
|--------|---------|
| goxoa | sweet/delicious |
| ona | good |
| txarra | bad |
| beroa | hot |
| hotza | cold |
| gazia | salty |

**TRADITIONAL BASQUE FOODS:**
- Pintxoak = Basque tapas/small bites
- Txuletona = Large ribeye steak
- Bacalao al pil-pil = Cod in garlic sauce
- Marmitako = Tuna stew
- Idiazabal = Basque cheese`,
        studyGuide: [
          {
            korean: 'ogia',
            romanization: 'bread',
            meaning: 'Staple food',
            usage: 'Common at every meal',
            example: 'Ogi bat, mesedez (One bread, please)'
          },
          {
            korean: 'ura',
            romanization: 'water',
            meaning: 'Essential drink',
            usage: 'Restaurant essential',
            example: 'Ura, mesedez (Water, please)'
          },
          {
            korean: 'kafea',
            romanization: 'coffee',
            meaning: 'Café culture is big',
            usage: 'Very common order',
            example: 'Kafe bat, mesedez (One coffee, please)'
          },
          {
            korean: 'mesedez',
            romanization: 'please',
            meaning: 'Polite request',
            usage: 'Add to any order',
            example: 'Kontua, mesedez (The bill, please)'
          },
          {
            korean: 'goxoa',
            romanization: 'delicious/sweet',
            meaning: 'Compliment for food',
            usage: 'Expressing enjoyment',
            example: 'Oso goxoa! (Very delicious!)'
          }
        ],
        quiz: [
          {
            question: 'How do you ask for coffee in Basque?',
            options: ['Kafea mesedez', 'Kafe bat, mesedez', 'Mesedez kafea', 'Kafea bat'],
            correct: 1,
            explanation: 'Kafe bat, mesedez = One coffee, please'
          },
          {
            question: 'What are "pintxoak"?',
            options: ['Drinks', 'Basque tapas', 'Fish', 'Desserts'],
            correct: 1,
            explanation: 'Pintxoak are Basque tapas - small bites typically served on bread'
          }
        ],
        outputPractice: [
          {
            prompt: 'Order at a restaurant: coffee, water, and bread',
            type: 'speaking',
            hint: 'Kafe bat, ura eta ogi bat, mesedez'
          },
          {
            prompt: 'Practice: Barkatu! Karta, mesedez. Zer gomendatzen duzu?',
            type: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 'conversation',
    name: 'Conversational Practice',
    icon: 'K',
    description: 'Practice real-world Basque dialogues',
    lessons: [
      {
        id: 'convo-intro',
        title: 'Self Introduction',
        intro: `Introducing yourself in Basque follows a friendly, warm pattern. Here's how to make a great first impression!

**THE INTRODUCTION TEMPLATE:**
1. Greeting: Kaixo! / Egun on!
2. Name: Ni [name] naiz
3. Origin: [Place]-koa naiz
4. Nice to meet you: Pozten naiz!

**SAYING WHERE YOU'RE FROM:**
Add -koa (from [place]) to the place name:
- Londresekoa naiz = I'm from London
- Parisekoa naiz = I'm from Paris
- Ameriketakoa naiz = I'm from America
- Bilbokoa naiz = I'm from Bilbao

**ASKING QUESTIONS:**
- Nongoa zara? = Where are you from?
- Nola duzu izena? = What's your name?
- Zer egiten duzu? = What do you do?

**SAMPLE DIALOGUE:**
A: Kaixo! Ni Mikel naiz. Eta zu?
B: Kaixo! Ni Sarah naiz.
A: Nongoa zara, Sarah?
B: Londresekoa naiz. Eta zu?
A: Ni Bilbokoa naiz. Pozten naiz!
B: Ni ere pozten naiz!

**USEFUL ADDITIONS:**
- Euskara ikasten ari naiz = I'm learning Basque
- Euskal Herrian bizi naiz = I live in the Basque Country
- Turista naiz = I'm a tourist`,
        dialogue: {
          title: 'Meeting Someone New',
          lines: [
            { speaker: 'A', korean: 'Kaixo! Ni Mikel naiz.', english: 'Hello! I\'m Mikel.' },
            { speaker: 'B', korean: 'Kaixo! Ni Sarah naiz. Pozten naiz!', english: 'Hello! I\'m Sarah. Nice to meet you!' },
            { speaker: 'A', korean: 'Pozten naiz! Nongoa zara?', english: 'Nice to meet you! Where are you from?' },
            { speaker: 'B', korean: 'Londresekoa naiz. Eta zu?', english: 'I\'m from London. And you?' },
            { speaker: 'A', korean: 'Ni Bilbokoa naiz.', english: 'I\'m from Bilbao.' }
          ]
        },
        studyGuide: [
          {
            korean: 'Ni [name] naiz',
            romanization: 'I am [name]',
            meaning: 'Basic introduction',
            usage: 'First thing to say',
            example: 'Ni Mikel naiz (I am Mikel)'
          },
          {
            korean: '-koa naiz',
            romanization: 'I\'m from...',
            meaning: 'Origin suffix',
            usage: 'Add to place name',
            example: 'Londresekoa naiz (I\'m from London)'
          },
          {
            korean: 'Pozten naiz',
            romanization: 'Nice to meet you',
            meaning: 'Literally "I rejoice"',
            usage: 'After introductions',
            example: 'Pozten naiz, Sarah!'
          },
          {
            korean: 'Nongoa zara?',
            romanization: 'Where are you from?',
            meaning: 'Asking origin',
            usage: 'Getting to know someone',
            example: 'Nongoa zara? - Madrilekoa naiz.'
          }
        ],
        outputPractice: [
          {
            prompt: 'Introduce yourself: name, where you\'re from, nice to meet you',
            type: 'speaking',
            hint: 'Kaixo! Ni [name] naiz. [Place]-koa naiz. Pozten naiz!'
          },
          {
            prompt: 'Practice the full introduction dialogue',
            type: 'speaking'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I\'m from Paris" in Basque?',
            options: ['Paris naiz', 'Parisen naiz', 'Parisekoa naiz', 'Nire Paris'],
            correct: 2,
            explanation: 'Add -koa to place names: Parisekoa naiz'
          }
        ]
      },
      {
        id: 'convo-restaurant',
        title: 'At a Restaurant',
        intro: `Basque Country has amazing food culture! Here's how to navigate a restaurant.

**THE RESTAURANT FLOW:**
1. Enter → Arratsalde on! / Kaixo!
2. Get seated → Mahai bat, mesedez (A table, please)
3. Order → [Food] nahi dut (I want [food])
4. Enjoy → Goxoa! (Delicious!)
5. Pay → Kontua, mesedez (Bill, please)

**USEFUL PHRASES:**

| Basque | English |
|--------|---------|
| Barkatu! | Excuse me! (to server) |
| Karta, mesedez | Menu, please |
| Zer daukazu? | What do you have? |
| Zer gomendatzen duzu? | What do you recommend? |
| Hau nahi dut | I want this |
| Gehiago, mesedez | More, please |
| Nahikoa | Enough |
| Kontua, mesedez | The bill, please |

**ORDERING PATTERN:**
\`\`\`
[Food/Drink] + nahi dut = I want [food/drink]
[Food] + bat + mesedez = One [food] please
\`\`\`

**DIETARY NEEDS:**
- Begetarianoa naiz = I'm vegetarian
- Haragirik ez, mesedez = No meat, please
- Glutenik gabea ba al dago? = Is there gluten-free?

**PINTXO BAR CULTURE:**
In pintxo bars, you typically:
1. Point at what you want: Hau, mesedez (This, please)
2. They keep track of what you ate
3. At the end: Zenbat da? (How much is it?)`,
        dialogue: {
          title: 'Ordering at a Restaurant',
          lines: [
            { speaker: 'Server', korean: 'Arratsalde on! Zer hartuko duzue?', english: 'Good afternoon! What will you have?' },
            { speaker: 'Customer', korean: 'Kaixo! Karta, mesedez.', english: 'Hello! Menu, please.' },
            { speaker: 'Server', korean: 'Bai, hemen daukazu.', english: 'Yes, here you go.' },
            { speaker: 'Customer', korean: 'Zer gomendatzen duzu?', english: 'What do you recommend?' },
            { speaker: 'Server', korean: 'Arraina oso ona da gaur.', english: 'The fish is very good today.' },
            { speaker: 'Customer', korean: 'Ondo da. Arraina eta ura, mesedez.', english: 'OK. Fish and water, please.' },
            { speaker: 'Server', korean: 'Primeran!', english: 'Great!' }
          ]
        },
        studyGuide: [
          {
            korean: 'Karta, mesedez',
            romanization: 'Menu, please',
            meaning: 'Asking for menu',
            usage: 'First thing at restaurant',
            example: 'Barkatu! Karta, mesedez.'
          },
          {
            korean: '[X] nahi dut',
            romanization: 'I want [X]',
            meaning: 'Expressing desire',
            usage: 'For ordering',
            example: 'Kafea nahi dut (I want coffee)'
          },
          {
            korean: 'Kontua, mesedez',
            romanization: 'The bill, please',
            meaning: 'Asking to pay',
            usage: 'End of meal',
            example: 'Barkatu! Kontua, mesedez.'
          },
          {
            korean: 'Zenbat da?',
            romanization: 'How much is it?',
            meaning: 'Asking the price',
            usage: 'At pintxo bars or shops',
            example: 'Zenbat da guztira? (How much total?)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Order: menu, fish, wine, and then ask for the bill',
            type: 'speaking',
            hint: 'Karta, mesedez... Arraina eta ardoa, mesedez... Kontua, mesedez'
          },
          {
            prompt: 'Practice: Ask what they recommend and respond',
            type: 'speaking'
          }
        ],
        quiz: [
          {
            question: 'How do you say "I want this" in Basque?',
            options: ['Hau da', 'Hau nahi dut', 'Hau mesedez', 'Nahi hau'],
            correct: 1,
            explanation: 'Hau nahi dut = I want this'
          }
        ]
      }
    ]
  },
  {
    id: 'listening',
    name: 'Listening Skills',
    icon: 'E',
    description: 'Train your Basque listening comprehension',
    lessons: [
      {
        id: 'listening-intro',
        title: 'Listening Strategy',
        studyGuide: [
          {
            korean: 'Entzute-praktika',
            romanization: 'Listening practice',
            meaning: 'Developing comprehension',
            usage: 'Essential skill',
            example: 'Daily practice builds understanding'
          }
        ],
        content: `
## Effective Basque Listening Practice

### Challenges Specific to Basque
- Word order differs from English (SOV)
- Verb agreement is complex (who does what to whom)
- Multiple dialects exist (Batua is standard)

### The 3-Step Method
1. **First listen**: Don't look at text. Catch what you can.
2. **Second listen**: Read along. Note unfamiliar words.
3. **Third listen**: Focus on verb endings and case markers.

### Resources
- ETB (Basque TV) - news and shows
- Euskarazko Wikipedia - read-aloud articles
- Basque music (Berri Txarrak, Ken Zazpi, etc.)
- EITB podcasts in Basque

### Daily Goals
- Start with 10-15 minutes of clear, slow Basque
- Progress to natural speech over time
- Focus on understanding main ideas, not every word
        `,
        outputPractice: [
          {
            prompt: 'Find a Basque song or video and practice the 3-step method',
            type: 'activity'
          }
        ]
      }
    ]
  },
  {
    id: 'speaking',
    name: 'Speaking Practice',
    icon: 'M',
    description: 'Develop your Basque speaking skills',
    lessons: [
      {
        id: 'speaking-practice',
        title: 'Pronunciation & Fluency',
        studyGuide: [
          {
            korean: 'Ahoskera',
            romanization: 'Pronunciation',
            meaning: 'How to say words correctly',
            usage: 'Foundation of speaking',
            example: 'Practice the unique Basque sounds'
          }
        ],
        content: `
## Building Speaking Skills

### Key Sounds to Master
1. **tx** - like "ch" in church
2. **x** - like "sh" in ship
3. **rr** - rolled r (practice trilling)
4. **z/s** distinction (subtle, don't stress)

### Shadowing Practice
1. Find audio of native Basque speakers
2. Listen to a phrase
3. Repeat immediately, mimicking exactly
4. Focus on rhythm and intonation

### Common Phrases to Practice Daily
- Kaixo! Nola zaude? (Hello! How are you?)
- Ondo, eskerrik asko! (Good, thanks!)
- Ez dut ulertzen (I don't understand)
- Motelago, mesedez (Slower, please)
- Nola esaten da...? (How do you say...?)

### Speaking Partners
- HelloTalk or Tandem apps
- Basque cultural centers worldwide
- Online Basque communities
        `,
        outputPractice: [
          {
            prompt: 'Practice: Kaixo! Nola zaude? - Ondo, eskerrik asko, eta zu?',
            type: 'recording'
          },
          {
            prompt: 'Practice the unique sounds: tx, x, rr in words like etxea, xagu, irakurri',
            type: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 'reading',
    name: 'Reading & Writing',
    icon: 'I',
    description: 'Strengthen your Basque literacy',
    lessons: [
      {
        id: 'reading-practice',
        title: 'Reading Strategies',
        content: `
## Building Reading Skills in Basque

### The Good News
Basque spelling is phonetic! Once you know the sounds, you can read any word aloud correctly.

### Start With
- Children's books (haur-liburuak)
- Simple news articles (albisteak)
- Basque Wikipedia articles
- Signs and menus

### Reading Strategy
1. Read aloud - pronunciation is consistent
2. Identify word roots (before suffixes)
3. Notice case endings (-a, -k, -n, -ri, etc.)
4. Look for verb at sentence end

### Common Suffixes to Recognize
| Suffix | Meaning |
|--------|---------|
| -a | the (article) |
| -ak | the (plural) |
| -k | ergative (subject with object) |
| -n | in/at (location) |
| -ra | to (direction) |
| -tik | from (origin) |
| -rekin | with |

### Writing Practice
- Keep a daily journal in Basque
- Start with simple sentences
- Use learned vocabulary and grammar
        `,
        outputPractice: [
          {
            prompt: 'Write 3 sentences about your day using vocabulary you\'ve learned',
            type: 'writing'
          }
        ]
      }
    ]
  },
  {
    id: 'culture',
    name: 'Cultural Context',
    icon: 'B',
    description: 'Understand Basque culture for better communication',
    lessons: [
      {
        id: 'culture-basics',
        title: 'Basque Culture & Identity',
        studyGuide: [
          {
            korean: 'Euskal Herria',
            romanization: 'Basque Country',
            meaning: 'The Basque homeland',
            usage: 'Cultural/geographic term',
            example: 'Euskal Herrian bizi naiz (I live in the Basque Country)'
          },
          {
            korean: 'Euskaldun',
            romanization: 'Basque person/speaker',
            meaning: 'Someone who speaks Basque',
            usage: 'Cultural identity',
            example: 'Euskaldun berria naiz (I\'m a new Basque speaker)'
          }
        ],
        content: `
## Understanding Basque Culture

### Euskal Herria (The Basque Country)
The Basque Country spans:
- **Hegoalde** (South): 3 provinces in Spain (Bizkaia, Gipuzkoa, Araba)
- **Iparralde** (North): 3 provinces in France (Lapurdi, Nafarroa Beherea, Zuberoa)
- **Nafarroa**: Navarre (partially)

### The Basque Language
- Euskara is a language isolate - not related to any other language!
- One of Europe's oldest languages
- Standardized form: Euskara Batua (Unified Basque)
- Dialects vary by region

### Cultural Values
- **Community** (elkartasuna): Strong sense of togetherness
- **Language pride**: Speaking Euskara is a cultural act
- **Tradition + modernity**: Rich heritage with forward thinking
- **Food culture**: Gastronomic societies, pintxos, cuisine

### Important Terms
- **Euskaldun berri**: "New Basque speaker" - non-native who learned
- **Euskaldun zahar**: "Old Basque speaker" - native speaker
- **Ikastola**: Basque-language school
- **Bertsolari**: Improvised verse singer

### Etiquette
- Basques appreciate any attempt to speak Euskara
- "Euskaldun berria naiz" (I'm a new Basque speaker) opens doors
- Food is central to socializing
- Toasting: "Topa!" (Cheers!)
        `,
        quiz: [
          {
            question: 'What does "Euskaldun berri" mean?',
            options: ['Old Basque speaker', 'New Basque speaker', 'Basque food', 'Basque country'],
            correct: 1,
            explanation: 'Euskaldun berri = "New Basque speaker" - someone who learned Basque as a second language'
          }
        ]
      }
    ]
  },
  {
    id: 'situations',
    name: 'Everyday Situations',
    icon: 'L',
    description: 'Handle common real-world scenarios',
    lessons: [
      {
        id: 'situation-shopping',
        title: 'Shopping',
        intro: `Shopping in the Basque Country combines traditional markets with modern stores. Here's the vocabulary you need!

**ESSENTIAL SHOPPING PHRASES:**

| Basque | English |
|--------|---------|
| Zenbat da? | How much is it? |
| Hau nahi dut | I want this |
| Txartelaz ordain dezaket? | Can I pay by card? |
| Eskudirutan | In cash |
| Merkeegia | Too expensive |
| Deskontua al dago? | Is there a discount? |

**SHOPPING VOCABULARY:**

| Basque | English |
|--------|---------|
| denda | shop |
| azoka | market |
| prezio | price |
| tamaina | size |
| kolore | color |
| poltsa | bag |
| tiketa | receipt |

**THE SHOPPING PATTERN:**
\`\`\`
1. Kaixo! (Hello!)
2. Hau nahi dut (I want this)
3. Zenbat da? (How much?)
4. [Pay] Txartelaz / Eskudirutan
5. Eskerrik asko! Agur! (Thanks! Bye!)
\`\`\`

**POINTING:**
- Hau = this (near me)
- Hori = that (near you)
- Hura = that (over there)`,
        dialogue: {
          title: 'At a Shop',
          lines: [
            { speaker: 'Customer', korean: 'Kaixo! Hau nahi dut.', english: 'Hello! I want this.' },
            { speaker: 'Clerk', korean: 'Bai, beste kolorerik nahi al duzu?', english: 'Yes, would you like another color?' },
            { speaker: 'Customer', korean: 'Ez, hau ondo dago. Zenbat da?', english: 'No, this is fine. How much is it?' },
            { speaker: 'Clerk', korean: 'Hogeita bost euro.', english: 'Twenty-five euros.' },
            { speaker: 'Customer', korean: 'Txartelaz ordain dezaket?', english: 'Can I pay by card?' },
            { speaker: 'Clerk', korean: 'Bai, noski!', english: 'Yes, of course!' }
          ]
        },
        studyGuide: [
          {
            korean: 'Zenbat da?',
            romanization: 'How much is it?',
            meaning: 'Asking price',
            usage: 'Essential shopping phrase',
            example: 'Hau zenbat da? (How much is this?)'
          },
          {
            korean: 'Txartelaz ordain dezaket?',
            romanization: 'Can I pay by card?',
            meaning: 'Payment method question',
            usage: 'At checkout',
            example: 'Txartelaz edo eskudirutan?'
          }
        ],
        outputPractice: [
          {
            prompt: 'Practice: Ask the price, pay by card, say thanks and goodbye',
            type: 'speaking'
          }
        ]
      },
      {
        id: 'situation-directions',
        title: 'Asking for Directions',
        intro: `Getting around requires asking for and understanding directions. Here's how!

**GETTING ATTENTION:**
- Barkatu! = Excuse me!
- Aizu! = Hey! (informal)

**THE QUESTION PATTERN:**
Non dago [place]? = Where is [place]?
- Non dago geltokia? (Where is the station?)
- Non dago komuna? (Where is the bathroom?)
- Non dago ostatua? (Where is the hotel?)

**DIRECTION WORDS:**

| Basque | English |
|--------|---------|
| zuzen | straight |
| eskuinera | to the right |
| ezkerrera | to the left |
| aurrera | forward |
| atzera | back |
| hemen | here |
| han | there |
| hurbil | near |
| urrun | far |

**UNDERSTANDING RESPONSES:**
- Zuzen jarraitu = Go straight
- Eskuinera jo = Turn right
- Ezkerrera jo = Turn left
- Lehen kalea = First street
- Bigarren kalea = Second street

**USEFUL QUESTIONS:**
- Urrun dago? = Is it far?
- Zenbat minutu? = How many minutes?
- Oinez joan daiteke? = Can I walk there?`,
        dialogue: {
          title: 'Finding Your Way',
          lines: [
            { speaker: 'You', korean: 'Barkatu! Non dago geltokia?', english: 'Excuse me! Where is the station?' },
            { speaker: 'Person', korean: 'Zuzen jarraitu eta eskuinera jo.', english: 'Go straight and turn right.' },
            { speaker: 'You', korean: 'Eskerrik asko! Urrun dago?', english: 'Thank you! Is it far?' },
            { speaker: 'Person', korean: 'Ez, bost minutu oinez.', english: 'No, five minutes on foot.' }
          ]
        },
        studyGuide: [
          {
            korean: 'Non dago?',
            romanization: 'Where is?',
            meaning: 'Location question',
            usage: 'Finding places',
            example: 'Non dago geltokia? (Where is the station?)'
          },
          {
            korean: 'Zuzen jarraitu',
            romanization: 'Go straight',
            meaning: 'Direction instruction',
            usage: 'Common response',
            example: 'Zuzen jarraitu 100 metro'
          },
          {
            korean: 'Eskuinera / Ezkerrera',
            romanization: 'Right / Left',
            meaning: 'Direction turns',
            usage: 'Essential directions',
            example: 'Eskuinera jo (Turn right)'
          }
        ],
        outputPractice: [
          {
            prompt: 'Ask for directions to: the station, a restaurant, the bathroom',
            type: 'speaking',
            hint: 'Non dago [place]?'
          }
        ]
      }
    ]
  },
  {
    id: 'review',
    name: 'Review & Practice',
    icon: 'R',
    description: 'Consolidate your Basque learning',
    lessons: [
      {
        id: 'review-foundation',
        title: 'Foundation Review',
        content: `
## Basque Foundations Review

### What You Should Know
- All sounds and pronunciation rules
- The article system (-a, -ak, bat)
- Basic cases (absolutive, ergative, dative, locative)
- SOV word order
- Auxiliary verbs (izan, *edun)
- Negation with ez
- Question words
- Numbers 1-100
- Essential greetings and phrases
- Basic food and shopping vocabulary

### Self-Assessment
Can you:
- [ ] Pronounce any Basque word correctly?
- [ ] Introduce yourself fully?
- [ ] Order food at a restaurant?
- [ ] Ask for and understand basic directions?
- [ ] Use correct case endings?
- [ ] Form negative sentences?
- [ ] Count to 100?

### Key Patterns to Remember
1. Verb goes LAST (SOV)
2. -a = the (definite article)
3. -k = ergative (subject with object)
4. ez + auxiliary = negative
5. Question word comes first
        `,
        quiz: [
          {
            question: 'Complete: Nik ogia jaten ___',
            options: ['da', 'naiz', 'dut', 'du'],
            correct: 2,
            explanation: 'Dut = I have/do (transitive with "I" as subject, "it" as object)'
          },
          {
            question: 'How do you make "jaten dut" negative?',
            options: ['jaten ez dut', 'ez jaten dut', 'ez dut jaten', 'dut ez jaten'],
            correct: 2,
            explanation: 'Ez + auxiliary first: ez dut jaten'
          }
        ]
      }
    ]
  },
  {
    id: 'final',
    name: 'Final Assessment',
    icon: 'F',
    description: 'Test your Basque proficiency',
    lessons: [
      {
        id: 'final-exam',
        title: 'Comprehensive Test',
        quiz: [
          {
            question: 'What is Basque word order?',
            options: ['SVO', 'SOV', 'VSO', 'OVS'],
            correct: 1,
            explanation: 'Basque uses SOV - verb comes last'
          },
          {
            question: 'How do you say "the house" in Basque?',
            options: ['a etxe', 'etxe bat', 'etxea', 'etxe'],
            correct: 2,
            explanation: 'Add -a suffix: etxea (the house)'
          },
          {
            question: 'When does a subject take the ergative (-k)?',
            options: ['Always', 'Never', 'When there\'s a direct object', 'Only in questions'],
            correct: 2,
            explanation: 'Ergative marks the subject when there IS a direct object'
          },
          {
            question: 'How do you ask "How much is it?"',
            options: ['Zer da?', 'Non dago?', 'Zenbat da?', 'Nola da?'],
            correct: 2,
            explanation: 'Zenbat da? = How much is it?'
          },
          {
            question: 'What does "Eskerrik asko" mean?',
            options: ['Hello', 'Goodbye', 'Thank you very much', 'Please'],
            correct: 2,
            explanation: 'Eskerrik asko = Thank you very much'
          }
        ]
      }
    ]
  }
]
}

// Helper function to get a module by ID
export function getModule(moduleId) {
  return basqueCurriculum.modules.find(m => m.id === moduleId)
}

// Helper function to get a lesson by module and lesson ID
export function getLesson(moduleId, lessonId) {
  const module = getModule(moduleId)
  if (!module) return null
  return module.lessons.find(l => l.id === lessonId)
}

// Get all lessons flat
export function getAllLessons() {
  return basqueCurriculum.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleName: m.name })))
}
