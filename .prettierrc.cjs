module.exports = {
    tabWidth: 4,                // 使用4個空格縮排
    semi: false,                 // 程式碼結尾是否加分號
    trailingComma: 'none',      // 程式碼結尾不需要逗號
    singleQuote: true,           // 是否使用單引號
    printWidth: 100,            // 超過多少字元強制換行
    arrowParens: 'avoid',       // 單一參數的箭頭函數不加括號x => x
    bracketSpacing: true,        // 物件大括號內兩邊是否加空格{ a: 0 }

    endOfLine: 'auto',          // 檔案換行格式LF/CRLF
    useTabs: false,              // 不使用縮排符號,而使用空格
    quoteProps: 'as-needed' ,    // 物件的key僅在必要時用引號
    jsxSingleQuote: false,       // jsx 不使用單引號,而使用雙引號
    jsxBracketSameLine: false,   // jsx 標籤的反尖括號需要換行
    rangeStart: 0 ,              // 每個檔案格式化的範圍是檔案的全部內容
    rangeEnd: Infinity,          // 結尾
    requirePragma: false,        // 不需要寫檔案開頭的@prettier
    insertPragma: false,         // 不需要自動在檔案開頭插入@prettier
    proseWrap: 'preserve' ,      // 使用預設的折行標準
    htmlWhitespaceSensitivity: 'css'   // 依照顯示樣式決定html要不要折行
}