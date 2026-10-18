/*
 * Interface text in Traditional Chinese (Hong Kong usage).
 * Keys are the English strings used in app.js; {name} marks a value filled in at run time.
 * A missing key falls back to the English text.
 * Question translations live in questions.zh.js.
 */
window.I18N = {
  zh: {
    /* nav, header, footer */
    'DSE Physics Review': 'DSE 物理溫習',
    'Home': '主頁',
    'Practice': '練習',
    'Mock Paper': '模擬試卷',
    'Wrong Book': '錯題簿',
    'Data': '數據',
    'Questions are original practice items written in the HKDSE Physics Paper 1 Section A format. Progress is saved in this browser only.':
      '題目均為按 HKDSE 物理卷一甲部形式編寫的原創練習題。進度只會儲存在此瀏覽器中。',

    /* question card */
    'of {n}': '共 {n} 題',
    'Not answered — the answer is {a}': '未作答 — 答案是 {a}',
    'Correct — {a}': '正確 — {a}',
    'Incorrect — you chose {c}, the answer is {a}': '錯誤 — 你選了 {c}，答案是 {a}',

    /* home */
    'HKDSE Physics Revision': 'HKDSE 物理溫習',
    'Paper 1 Section A style multiple-choice practice for the compulsory part. {n} questions in the bank.':
      '以卷一甲部形式編寫的必修部分多項選擇題練習。題庫共有 {n} 題。',
    'Unfinished mock paper': '未完成的模擬試卷',
    'Unfinished practice': '未完成的練習',
    'Question {i} of {n}': '第 {i} 題，共 {n} 題',
    'Resume': '繼續',
    'questions tried': '已嘗試題目',
    'overall accuracy': '整體準確率',
    'in wrong book': '錯題簿題目',
    'best mock score': '模擬試卷最佳成績',
    'Start practice': '開始練習',
    'Take a mock paper': '做模擬試卷',
    'Review wrong book': '溫習錯題簿',
    'By topic': '按課題',
    '{seen}/{n} questions tried': '已嘗試 {seen}/{n} 題',
    'accuracy': '準確率',
    'Recent mock papers': '最近的模擬試卷',
    'Date': '日期',
    'Score': '分數',
    'Time used': '所用時間',
    'Your data': '你的數據',
    'Progress is stored in this browser. Export it to move to another device.': '進度儲存在此瀏覽器中。如要轉用另一部裝置，請先匯出進度。',
    'Export progress': '匯出進度',
    'Import progress': '匯入進度',
    'Reset all progress': '重設所有進度',
    'That file is not a valid progress export.': '這個檔案不是有效的進度匯出檔。',
    'Delete all progress, mock history and the wrong book on this browser?': '要刪除此瀏覽器上的所有進度、模擬試卷記錄和錯題簿嗎？',

    /* practice setup */
    'Topic practice': '課題練習',
    'Answer one question at a time and see the worked solution immediately. Wrong answers go into your wrong book automatically.':
      '每次作答一題，並即時查看詳細題解。答錯的題目會自動加入錯題簿。',
    'Topics': '課題',
    'Number of questions': '題數',
    'All': '全部',
    'Unseen questions first': '優先出未做過的題目',
    'Start': '開始',
    'Pick at least one topic.': '請最少選擇一個課題。',

    /* mock setup */
    'Mock paper — Paper 1 Section A': '模擬試卷 — 卷一甲部',
    '{n} multiple-choice questions drawn across the compulsory part, arranged in syllabus order like the real paper. Each question has one correct answer out of A–D; there is no penalty for wrong answers, so answer every question.':
      '共 {n} 題多項選擇題，題目涵蓋必修部分，並像真實試卷一樣按課程次序排列。每題只有一個正確答案（A–D）；答錯不扣分，所以每題都應作答。',
    'Timer: {m} minutes (a typical share of the 2 h 30 min Paper 1 for Section A). Answers and solutions are shown only after you hand in.':
      '限時 {m} 分鐘（約為卷一 2 小時 30 分鐘中甲部所佔的時間）。交卷後才會顯示答案和題解。',
    'Topic': '課題',
    'Questions': '題目',
    'Start mock paper': '開始模擬試卷',
    'Time is up. Your paper has been handed in.': '時間到，試卷已經提交。',

    /* quiz */
    'Mock paper': '模擬試卷',
    'Wrong book redo': '錯題重做',
    '{a} / {n} answered': '已答 {a} / {n}',
    '← Previous': '← 上一題',
    'Next →': '下一題 →',
    'Unflag': '取消標記',
    'Flag for review': '標記稍後檢查',
    'See summary': '查看總結',
    'Time left': '剩餘時間',
    'Blue = answered · orange line = flagged': '藍色 = 已作答 · 橙線 = 已標記',
    'Green = correct · red = wrong': '綠色 = 正確 · 紅色 = 錯誤',
    'Keys: A–D to answer, ← → to move': '按鍵：A–D 作答，← → 轉題',
    'Hand in paper': '交卷',
    'End session': '結束練習',
    'You have {n} unanswered question(s). Hand in anyway?': '你還有 {n} 題未作答。確定要交卷嗎？',
    'Hand in your paper?': '確定要交卷嗎？',

    /* result */
    'Mock paper result': '模擬試卷成績',
    'Session summary': '練習總結',
    '{p}% · time used {t}': '{p}% · 所用時間 {t}',
    'Open wrong book ({n})': '打開錯題簿（{n}）',
    'New mock paper': '再做一份模擬試卷',
    'Practise again': '再練習',
    'Review': '題目回顧',
    'Show wrong answers only': '只顯示答錯的題目',
    'All correct — nothing to review.': '全部正確 — 沒有需要回顧的題目。',

    /* wrong book */
    'Wrong question book': '錯題簿',
    'Every question you get wrong is collected here. Get it right {m} times in a row and it moves to Mastered.':
      '你答錯的題目都會收集在這裡。連續答對 {m} 次，題目便會移到「已掌握」。',
    'Active ({n})': '待溫習（{n}）',
    'Mastered ({n})': '已掌握（{n}）',
    'All topics': '所有課題',
    'Redo these {n} questions': '重做這 {n} 題',
    'Redo questions': '重做題目',
    'left blank': '未作答',
    'chose {c}': '選了 {c}',
    'Wrong {n}×': '答錯 {n} 次',
    'Last: {x}': '上次：{x}',
    'Mastered': '已掌握',
    'Streak {s}/{m}': '連續答對 {s}/{m}',
    'Show question &amp; solution ▾': '顯示題目及題解 ▾',
    'My notes (why I got it wrong)': '我的筆記（為何答錯）',
    'e.g. forgot to convert °C to K': '例如：忘記把 °C 轉換為 K',
    'Redo this question': '重做此題',
    'Move back to active': '移回待溫習',
    'Mark as mastered': '標記為已掌握',
    'Remove': '移除',
    'Remove this question from the wrong book? Your note will be lost.': '要從錯題簿移除此題嗎？你的筆記將會刪除。',
    'No wrong questions here. Keep practising!': '這裡沒有錯題，繼續努力！',
    'Nothing mastered yet.': '尚未有已掌握的題目。',

    /* data page */
    'List of data': '數據表',
    'Quantity': '物理量',
    'Symbol': '符號',
    'Value': '數值',
    'Section A tips': '甲部答題提示',
    'acceleration due to gravity': '重力加速度',
    'universal gravitational constant': '萬有引力常數',
    'speed of light in vacuum': '真空中的光速',
    'charge of electron': '電子電荷',
    'electron rest mass': '電子靜止質量',
    'permittivity of free space': '真空電容率',
    'permeability of free space': '真空磁導率',
    'atomic mass unit': '原子質量單位',
    'Avogadro constant': '阿佛加德羅常數',
    'universal gas constant': '普適氣體常數',
    'Boltzmann constant': '玻耳茲曼常數',
    'Planck constant': '普朗克常數',
    'Coulomb constant': '庫侖常數',
    '9.81 m s⁻² (close to the Earth)': '9.81 m s⁻²（接近地球表面）',
    '1.661 × 10⁻²⁷ kg (1 u ≡ 931 MeV)': '1.661 × 10⁻²⁷ kg（1 u 相當於 931 MeV）',
    'For "(1) (2) (3)" questions, judge each statement separately, then eliminate options — one false statement removes every option containing it.':
      '遇到「(1) (2) (3)」類題目，先逐一判斷每項敘述，再刪去選項 — 只要一項敘述錯誤，所有包含它的選項都可刪去。',
    'Always convert to SI units (cm → m, °C → K in gas laws, kW h → J) before substituting.':
      '代入數值前，先轉換為國際單位（cm → m；氣體定律中 °C → K；kW h → J）。',
    'There is no negative marking: never leave a question blank.': '答錯不扣分：切勿留空任何題目。',
    'Spend about 1.5–2 minutes per question; flag hard ones and come back.': '每題約用 1.5–2 分鐘；遇到難題先標記，稍後再回來作答。'
  },

  /* Words inside figures, swapped when a figure is shown in Chinese. */
  figure: {
    zh: {
      '>temperature<': '>溫度<',
      '>direction of travel<': '>傳播方向<',
      '>current into page<': '>電流流入紙面<'
    }
  },

  /* Statement-question option sets, e.g. "(1) and (2) only" → "只有 (1) 及 (2)". */
  stmtOption: {
    zh: s => {
      let m = s.match(/^(\(\d\)) only$/);
      if (m) return '只有 ' + m[1];
      m = s.match(/^(\(\d\)) and (\(\d\)) only$/);
      if (m) return '只有 ' + m[1] + ' 及 ' + m[2];
      m = s.match(/^(\(\d\)), (\(\d\)) and (\(\d\))$/);
      if (m) return m[1] + '、' + m[2] + ' 及 ' + m[3];
      return s;
    }
  }
};
