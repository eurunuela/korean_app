// Vocabulary items for SRS flashcards
// Organized by category and difficulty

// Re-export Basque vocabulary
export { vocabularyBasque, getVocabForWeekBasque, getVocabByCategoryBasque, getVocabUpToWeekBasque } from './vocabulary-basque'

export const vocabulary = [
  // Greetings & Basic Expressions
  { id: 'v001', front: '안녕하세요', back: 'Hello (polite)', pronunciation: 'an-nyeong-ha-se-yo', category: 'greetings', week: 1 },
  { id: 'v002', front: '감사합니다', back: 'Thank you (formal)', pronunciation: 'gam-sa-ham-ni-da', category: 'greetings', week: 1 },
  { id: 'v003', front: '고마워요', back: 'Thank you (polite casual)', pronunciation: 'go-ma-wo-yo', category: 'greetings', week: 1 },
  { id: 'v004', front: '죄송합니다', back: 'I\'m sorry (formal)', pronunciation: 'joe-song-ham-ni-da', category: 'greetings', week: 1 },
  { id: 'v005', front: '네', back: 'Yes', pronunciation: 'ne', category: 'greetings', week: 1 },
  { id: 'v006', front: '아니요', back: 'No', pronunciation: 'a-ni-yo', category: 'greetings', week: 1 },
  { id: 'v007', front: '안녕히 가세요', back: 'Goodbye (to person leaving)', pronunciation: 'an-nyeong-hi ga-se-yo', category: 'greetings', week: 1 },
  { id: 'v008', front: '안녕히 계세요', back: 'Goodbye (to person staying)', pronunciation: 'an-nyeong-hi gye-se-yo', category: 'greetings', week: 1 },
  { id: 'v009', front: '만나서 반가워요', back: 'Nice to meet you', pronunciation: 'man-na-seo ban-ga-wo-yo', category: 'greetings', week: 1 },
  { id: 'v010', front: '잘 지내요?', back: 'How are you?', pronunciation: 'jal ji-nae-yo', category: 'greetings', week: 1 },

  // Pronouns & People
  { id: 'v011', front: '저', back: 'I/me (humble)', pronunciation: 'jeo', category: 'pronouns', week: 1 },
  { id: 'v012', front: '나', back: 'I/me (casual)', pronunciation: 'na', category: 'pronouns', week: 1 },
  { id: 'v013', front: '당신', back: 'You (formal, rarely used)', pronunciation: 'dang-shin', category: 'pronouns', week: 2 },
  { id: 'v014', front: '우리', back: 'We/our', pronunciation: 'u-ri', category: 'pronouns', week: 2 },
  { id: 'v015', front: '사람', back: 'Person', pronunciation: 'sa-ram', category: 'people', week: 1 },
  { id: 'v016', front: '친구', back: 'Friend', pronunciation: 'chin-gu', category: 'people', week: 2 },
  { id: 'v017', front: '가족', back: 'Family', pronunciation: 'ga-jok', category: 'people', week: 2 },
  { id: 'v018', front: '아버지', back: 'Father', pronunciation: 'a-beo-ji', category: 'people', week: 2 },
  { id: 'v019', front: '어머니', back: 'Mother', pronunciation: 'eo-meo-ni', category: 'people', week: 2 },
  { id: 'v020', front: '학생', back: 'Student', pronunciation: 'hak-saeng', category: 'people', week: 1 },

  // Numbers - Native Korean
  { id: 'v021', front: '하나', back: 'One (Native)', pronunciation: 'ha-na', category: 'numbers', week: 2 },
  { id: 'v022', front: '둘', back: 'Two (Native)', pronunciation: 'dul', category: 'numbers', week: 2 },
  { id: 'v023', front: '셋', back: 'Three (Native)', pronunciation: 'set', category: 'numbers', week: 2 },
  { id: 'v024', front: '넷', back: 'Four (Native)', pronunciation: 'net', category: 'numbers', week: 2 },
  { id: 'v025', front: '다섯', back: 'Five (Native)', pronunciation: 'da-seot', category: 'numbers', week: 2 },
  { id: 'v026', front: '여섯', back: 'Six (Native)', pronunciation: 'yeo-seot', category: 'numbers', week: 2 },
  { id: 'v027', front: '일곱', back: 'Seven (Native)', pronunciation: 'il-gop', category: 'numbers', week: 2 },
  { id: 'v028', front: '여덟', back: 'Eight (Native)', pronunciation: 'yeo-deol', category: 'numbers', week: 2 },
  { id: 'v029', front: '아홉', back: 'Nine (Native)', pronunciation: 'a-hop', category: 'numbers', week: 2 },
  { id: 'v030', front: '열', back: 'Ten (Native)', pronunciation: 'yeol', category: 'numbers', week: 2 },

  // Numbers - Sino-Korean
  { id: 'v031', front: '일', back: 'One (Sino)', pronunciation: 'il', category: 'numbers', week: 3 },
  { id: 'v032', front: '이', back: 'Two (Sino)', pronunciation: 'i', category: 'numbers', week: 3 },
  { id: 'v033', front: '삼', back: 'Three (Sino)', pronunciation: 'sam', category: 'numbers', week: 3 },
  { id: 'v034', front: '사', back: 'Four (Sino)', pronunciation: 'sa', category: 'numbers', week: 3 },
  { id: 'v035', front: '오', back: 'Five (Sino)', pronunciation: 'o', category: 'numbers', week: 3 },
  { id: 'v036', front: '육', back: 'Six (Sino)', pronunciation: 'yuk', category: 'numbers', week: 3 },
  { id: 'v037', front: '칠', back: 'Seven (Sino)', pronunciation: 'chil', category: 'numbers', week: 3 },
  { id: 'v038', front: '팔', back: 'Eight (Sino)', pronunciation: 'pal', category: 'numbers', week: 3 },
  { id: 'v039', front: '구', back: 'Nine (Sino)', pronunciation: 'gu', category: 'numbers', week: 3 },
  { id: 'v040', front: '십', back: 'Ten (Sino)', pronunciation: 'ship', category: 'numbers', week: 3 },

  // Food & Drinks
  { id: 'v041', front: '밥', back: 'Rice/Meal', pronunciation: 'bap', category: 'food', week: 3 },
  { id: 'v042', front: '물', back: 'Water', pronunciation: 'mul', category: 'food', week: 3 },
  { id: 'v043', front: '커피', back: 'Coffee', pronunciation: 'keo-pi', category: 'food', week: 3 },
  { id: 'v044', front: '차 (음료)', back: 'Tea', pronunciation: 'cha', category: 'food', week: 3 },
  { id: 'v045', front: '음식', back: 'Food', category: 'food', week: 3 },
  { id: 'v046', front: '고기', back: 'Meat', category: 'food', week: 4 },
  { id: 'v047', front: '생선', back: 'Fish', category: 'food', week: 4 },
  { id: 'v048', front: '야채', back: 'Vegetables', category: 'food', week: 4 },
  { id: 'v049', front: '과일', back: 'Fruit', category: 'food', week: 4 },
  { id: 'v050', front: '김치', back: 'Kimchi', category: 'food', week: 3 },
  { id: 'v051', front: '비빔밥', back: 'Bibimbap', category: 'food', week: 4 },
  { id: 'v052', front: '불고기', back: 'Bulgogi', category: 'food', week: 4 },
  { id: 'v053', front: '라면', back: 'Ramen', category: 'food', week: 4 },

  // Verbs - Basic
  { id: 'v054', front: '가다', back: 'To go', category: 'verbs', week: 4 },
  { id: 'v055', front: '오다', back: 'To come', category: 'verbs', week: 4 },
  { id: 'v056', front: '먹다', back: 'To eat', category: 'verbs', week: 4 },
  { id: 'v057', front: '마시다', back: 'To drink', category: 'verbs', week: 4 },
  { id: 'v058', front: '하다', back: 'To do', category: 'verbs', week: 4 },
  { id: 'v059', front: '보다', back: 'To see/watch', category: 'verbs', week: 5 },
  { id: 'v060', front: '듣다', back: 'To listen/hear', category: 'verbs', week: 5 },
  { id: 'v061', front: '읽다', back: 'To read', category: 'verbs', week: 5 },
  { id: 'v062', front: '쓰다', back: 'To write', category: 'verbs', week: 5 },
  { id: 'v063', front: '말하다', back: 'To speak', category: 'verbs', week: 5 },
  { id: 'v064', front: '공부하다', back: 'To study', category: 'verbs', week: 5 },
  { id: 'v065', front: '일하다', back: 'To work', category: 'verbs', week: 5 },
  { id: 'v066', front: '자다', back: 'To sleep', category: 'verbs', week: 5 },
  { id: 'v067', front: '일어나다', back: 'To wake up', category: 'verbs', week: 5 },
  { id: 'v068', front: '앉다', back: 'To sit', category: 'verbs', week: 6 },
  { id: 'v069', front: '서다', back: 'To stand', category: 'verbs', week: 6 },
  { id: 'v070', front: '걷다', back: 'To walk', category: 'verbs', week: 6 },
  { id: 'v071', front: '뛰다', back: 'To run', category: 'verbs', week: 6 },
  { id: 'v072', front: '사다', back: 'To buy', category: 'verbs', week: 6 },
  { id: 'v073', front: '팔다', back: 'To sell', category: 'verbs', week: 6 },
  { id: 'v074', front: '주다', back: 'To give', category: 'verbs', week: 6 },
  { id: 'v075', front: '받다', back: 'To receive', category: 'verbs', week: 6 },
  { id: 'v076', front: '알다', back: 'To know', category: 'verbs', week: 7 },
  { id: 'v077', front: '모르다', back: 'To not know', category: 'verbs', week: 7 },
  { id: 'v078', front: '있다', back: 'To have/exist', category: 'verbs', week: 4 },
  { id: 'v079', front: '없다', back: 'To not have/not exist', category: 'verbs', week: 4 },

  // Adjectives
  { id: 'v080', front: '좋다', back: 'Good', category: 'adjectives', week: 7 },
  { id: 'v081', front: '나쁘다', back: 'Bad', category: 'adjectives', week: 7 },
  { id: 'v082', front: '크다', back: 'Big', category: 'adjectives', week: 7 },
  { id: 'v083', front: '작다', back: 'Small', category: 'adjectives', week: 7 },
  { id: 'v084', front: '많다', back: 'Many/much', category: 'adjectives', week: 7 },
  { id: 'v085', front: '적다', back: 'Few/little', category: 'adjectives', week: 7 },
  { id: 'v086', front: '맛있다', back: 'Delicious', category: 'adjectives', week: 4 },
  { id: 'v087', front: '맛없다', back: 'Not delicious', category: 'adjectives', week: 4 },
  { id: 'v088', front: '비싸다', back: 'Expensive', category: 'adjectives', week: 8 },
  { id: 'v089', front: '싸다', back: 'Cheap', category: 'adjectives', week: 8 },
  { id: 'v090', front: '덥다', back: 'Hot (weather)', category: 'adjectives', week: 8 },
  { id: 'v091', front: '춥다', back: 'Cold (weather)', category: 'adjectives', week: 8 },
  { id: 'v092', front: '예쁘다', back: 'Pretty', category: 'adjectives', week: 8 },
  { id: 'v093', front: '멋있다', back: 'Cool/handsome', category: 'adjectives', week: 8 },
  { id: 'v094', front: '재미있다', back: 'Interesting/fun', category: 'adjectives', week: 8 },
  { id: 'v095', front: '재미없다', back: 'Boring', category: 'adjectives', week: 8 },

  // Places
  { id: 'v096', front: '집', back: 'Home/house', category: 'places', week: 5 },
  { id: 'v097', front: '학교', back: 'School', category: 'places', week: 5 },
  { id: 'v098', front: '회사', back: 'Company/office', category: 'places', week: 5 },
  { id: 'v099', front: '가게', back: 'Store', category: 'places', week: 8 },
  { id: 'v100', front: '식당', back: 'Restaurant', category: 'places', week: 5 },
  { id: 'v101', front: '카페', back: 'Cafe', category: 'places', week: 5 },
  { id: 'v102', front: '병원', back: 'Hospital', category: 'places', week: 9 },
  { id: 'v103', front: '은행', back: 'Bank', category: 'places', week: 9 },
  { id: 'v104', front: '공항', back: 'Airport', category: 'places', week: 9 },
  { id: 'v105', front: '역', back: 'Station', category: 'places', week: 9 },
  { id: 'v106', front: '지하철역', back: 'Subway station', category: 'places', week: 9 },
  { id: 'v107', front: '화장실', back: 'Bathroom', category: 'places', week: 5 },
  { id: 'v108', front: '호텔', back: 'Hotel', category: 'places', week: 9 },

  // Time
  { id: 'v109', front: '오늘', back: 'Today', category: 'time', week: 6 },
  { id: 'v110', front: '내일', back: 'Tomorrow', category: 'time', week: 6 },
  { id: 'v111', front: '어제', back: 'Yesterday', category: 'time', week: 6 },
  { id: 'v112', front: '지금', back: 'Now', category: 'time', week: 6 },
  { id: 'v113', front: '아침', back: 'Morning', category: 'time', week: 6 },
  { id: 'v114', front: '점심', back: 'Lunch/noon', category: 'time', week: 6 },
  { id: 'v115', front: '저녁', back: 'Evening', category: 'time', week: 6 },
  { id: 'v116', front: '밤', back: 'Night', category: 'time', week: 6 },
  { id: 'v117', front: '시', back: 'Hour/o\'clock', category: 'time', week: 3 },
  { id: 'v118', front: '분', back: 'Minute', category: 'time', week: 3 },
  { id: 'v119', front: '주', back: 'Week', category: 'time', week: 10 },
  { id: 'v120', front: '달/월', back: 'Month', category: 'time', week: 10 },

  // Question words
  { id: 'v121', front: '뭐/무엇', back: 'What', category: 'questions', week: 7 },
  { id: 'v122', front: '누구', back: 'Who', category: 'questions', week: 7 },
  { id: 'v123', front: '어디', back: 'Where', category: 'questions', week: 7 },
  { id: 'v124', front: '언제', back: 'When', category: 'questions', week: 7 },
  { id: 'v125', front: '왜', back: 'Why', category: 'questions', week: 10 },
  { id: 'v126', front: '어떻게', back: 'How', category: 'questions', week: 10 },
  { id: 'v127', front: '얼마', back: 'How much', category: 'questions', week: 8 },
  { id: 'v128', front: '몇', back: 'How many', category: 'questions', week: 8 },

  // Useful phrases
  { id: 'v129', front: '주세요', back: 'Please give me', category: 'phrases', week: 3 },
  { id: 'v130', front: '~하고 싶어요', back: 'Want to ~', category: 'phrases', week: 10 },
  { id: 'v131', front: '~할 수 있어요', back: 'Can do ~', category: 'phrases', week: 11 },
  { id: 'v132', front: '~해도 돼요?', back: 'May I ~?', category: 'phrases', week: 11 },
  { id: 'v133', front: '잠시만요', back: 'One moment please', category: 'phrases', week: 9 },
  { id: 'v134', front: '알겠습니다', back: 'I understand', category: 'phrases', week: 9 },
  { id: 'v135', front: '모르겠어요', back: 'I don\'t know', category: 'phrases', week: 9 },
  { id: 'v136', front: '천천히 말해 주세요', back: 'Please speak slowly', category: 'phrases', week: 9 },
  { id: 'v137', front: '다시 말해 주세요', back: 'Please say it again', category: 'phrases', week: 9 },
  { id: 'v138', front: '한국어로 뭐예요?', back: 'What is it in Korean?', category: 'phrases', week: 10 },

  // Directions
  { id: 'v139', front: '오른쪽', back: 'Right', category: 'directions', week: 11 },
  { id: 'v140', front: '왼쪽', back: 'Left', category: 'directions', week: 11 },
  { id: 'v141', front: '직진', back: 'Straight', category: 'directions', week: 11 },
  { id: 'v142', front: '위', back: 'Up/above', category: 'directions', week: 11 },
  { id: 'v143', front: '아래', back: 'Down/below', category: 'directions', week: 11 },
  { id: 'v144', front: '앞', back: 'Front', category: 'directions', week: 11 },
  { id: 'v145', front: '뒤', back: 'Behind', category: 'directions', week: 11 },
  { id: 'v146', front: '옆', back: 'Next to/side', category: 'directions', week: 11 },

  // Weather
  { id: 'v147', front: '날씨', back: 'Weather', category: 'weather', week: 12 },
  { id: 'v148', front: '비', back: 'Rain', category: 'weather', week: 12 },
  { id: 'v149', front: '눈', back: 'Snow', category: 'weather', week: 12 },
  { id: 'v150', front: '바람', back: 'Wind', category: 'weather', week: 12 },

  // More verbs
  { id: 'v151', front: '좋아하다', back: 'To like', category: 'verbs', week: 10 },
  { id: 'v152', front: '싫어하다', back: 'To dislike', category: 'verbs', week: 10 },
  { id: 'v153', front: '필요하다', back: 'To need', category: 'verbs', week: 12 },
  { id: 'v154', front: '만나다', back: 'To meet', category: 'verbs', week: 10 },
  { id: 'v155', front: '기다리다', back: 'To wait', category: 'verbs', week: 12 },
  { id: 'v156', front: '찾다', back: 'To find/look for', category: 'verbs', week: 12 },
  { id: 'v157', front: '돕다', back: 'To help', category: 'verbs', week: 12 },
  { id: 'v158', front: '배우다', back: 'To learn', category: 'verbs', week: 10 },
  { id: 'v159', front: '가르치다', back: 'To teach', category: 'verbs', week: 12 },
  { id: 'v160', front: '생각하다', back: 'To think', category: 'verbs', week: 13 },

  // Connectors & Grammar
  { id: 'v161', front: '그리고', back: 'And (sentence connector)', category: 'grammar', week: 13 },
  { id: 'v162', front: '그래서', back: 'So/therefore', category: 'grammar', week: 13 },
  { id: 'v163', front: '그런데', back: 'But/however', category: 'grammar', week: 13 },
  { id: 'v164', front: '그러면', back: 'Then/if so', category: 'grammar', week: 13 },
  { id: 'v165', front: '~지만', back: 'But (clause connector)', category: 'grammar', week: 14 },
  { id: 'v166', front: '~고', back: 'And (verb connector)', category: 'grammar', week: 14 },
  { id: 'v167', front: '~면', back: 'If/when', category: 'grammar', week: 14 },
  { id: 'v168', front: '~서', back: 'Because/so', category: 'grammar', week: 14 },

  // Daily activities
  { id: 'v169', front: '세수하다', back: 'To wash face', category: 'daily', week: 15 },
  { id: 'v170', front: '샤워하다', back: 'To shower', category: 'daily', week: 15 },
  { id: 'v171', front: '옷을 입다', back: 'To get dressed', category: 'daily', week: 15 },
  { id: 'v172', front: '이를 닦다', back: 'To brush teeth', category: 'daily', week: 15 },
  { id: 'v173', front: '요리하다', back: 'To cook', category: 'daily', week: 15 },
  { id: 'v174', front: '청소하다', back: 'To clean', category: 'daily', week: 15 },
  { id: 'v175', front: '빨래하다', back: 'To do laundry', category: 'daily', week: 15 },

  // Emotions
  { id: 'v176', front: '행복하다', back: 'Happy', category: 'emotions', week: 16 },
  { id: 'v177', front: '슬프다', back: 'Sad', category: 'emotions', week: 16 },
  { id: 'v178', front: '화나다', back: 'Angry', category: 'emotions', week: 16 },
  { id: 'v179', front: '피곤하다', back: 'Tired', category: 'emotions', week: 16 },
  { id: 'v180', front: '배고프다', back: 'Hungry', category: 'emotions', week: 16 },
  { id: 'v181', front: '목마르다', back: 'Thirsty', category: 'emotions', week: 16 },
  { id: 'v182', front: '기쁘다', back: 'Glad/pleased', category: 'emotions', week: 16 },
  { id: 'v183', front: '걱정하다', back: 'To worry', category: 'emotions', week: 17 },

  // Shopping
  { id: 'v184', front: '가격', back: 'Price', category: 'shopping', week: 17 },
  { id: 'v185', front: '할인', back: 'Discount', category: 'shopping', week: 17 },
  { id: 'v186', front: '카드', back: 'Card', category: 'shopping', week: 17 },
  { id: 'v187', front: '현금', back: 'Cash', category: 'shopping', week: 17 },
  { id: 'v188', front: '영수증', back: 'Receipt', category: 'shopping', week: 17 },
  { id: 'v189', front: '계산', back: 'Calculation/bill', category: 'shopping', week: 17 },

  // Transportation
  { id: 'v190', front: '버스', back: 'Bus', category: 'transport', week: 18 },
  { id: 'v191', front: '지하철', back: 'Subway', category: 'transport', week: 18 },
  { id: 'v192', front: '택시', back: 'Taxi', category: 'transport', week: 18 },
  { id: 'v193', front: '비행기', back: 'Airplane', category: 'transport', week: 18 },
  { id: 'v194', front: '기차', back: 'Train', category: 'transport', week: 18 },
  { id: 'v195', front: '차 (교통)', back: 'Car', pronunciation: 'cha', category: 'transport', week: 18 },
  { id: 'v196', front: '자전거', back: 'Bicycle', category: 'transport', week: 18 },

  // Technology
  { id: 'v197', front: '핸드폰', back: 'Cell phone', category: 'tech', week: 19 },
  { id: 'v198', front: '컴퓨터', back: 'Computer', category: 'tech', week: 19 },
  { id: 'v199', front: '인터넷', back: 'Internet', category: 'tech', week: 19 },
  { id: 'v200', front: '와이파이', back: 'WiFi', category: 'tech', week: 19 },

  // Health
  { id: 'v201', front: '아프다', back: 'To be sick/hurt', category: 'health', week: 20 },
  { id: 'v202', front: '감기', back: 'Cold (illness)', category: 'health', week: 20 },
  { id: 'v203', front: '약', back: 'Medicine', category: 'health', week: 20 },
  { id: 'v204', front: '의사', back: 'Doctor', category: 'health', week: 20 },

  // More adjectives
  { id: 'v205', front: '새롭다', back: 'New', category: 'adjectives', week: 21 },
  { id: 'v206', front: '오래되다', back: 'Old (things)', category: 'adjectives', week: 21 },
  { id: 'v207', front: '어렵다', back: 'Difficult', category: 'adjectives', week: 21 },
  { id: 'v208', front: '쉽다', back: 'Easy', category: 'adjectives', week: 21 },
  { id: 'v209', front: '빠르다', back: 'Fast', category: 'adjectives', week: 21 },
  { id: 'v210', front: '느리다', back: 'Slow', category: 'adjectives', week: 21 },

  // Frequency
  { id: 'v211', front: '항상', back: 'Always', category: 'frequency', week: 22 },
  { id: 'v212', front: '자주', back: 'Often', category: 'frequency', week: 22 },
  { id: 'v213', front: '가끔', back: 'Sometimes', category: 'frequency', week: 22 },
  { id: 'v214', front: '거의', back: 'Almost/rarely', category: 'frequency', week: 22 },
  { id: 'v215', front: '전혀', back: 'Never/not at all', category: 'frequency', week: 22 },

  // Countries
  { id: 'v216', front: '한국', back: 'Korea', category: 'countries', week: 1 },
  { id: 'v217', front: '미국', back: 'USA', category: 'countries', week: 1 },
  { id: 'v218', front: '일본', back: 'Japan', category: 'countries', week: 23 },
  { id: 'v219', front: '중국', back: 'China', category: 'countries', week: 23 },
  { id: 'v220', front: '영국', back: 'UK', category: 'countries', week: 23 },

  // Honorifics
  { id: 'v221', front: '씨', back: 'Mr./Ms. (after name)', category: 'honorifics', week: 2 },
  { id: 'v222', front: '님', back: 'Sir/Madam (respectful)', category: 'honorifics', week: 23 },
  { id: 'v223', front: '선생님', back: 'Teacher', category: 'honorifics', week: 23 },
]

// Get vocabulary for a specific week
export function getVocabForWeek(week) {
  return vocabulary.filter(v => v.week === week)
}

// Get vocabulary by category
export function getVocabByCategory(category) {
  return vocabulary.filter(v => v.category === category)
}

// Get all vocabulary up to a certain week
export function getVocabUpToWeek(week) {
  return vocabulary.filter(v => v.week <= week)
}
