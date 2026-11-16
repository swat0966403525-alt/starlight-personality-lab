# 星夜研究所｜成人偏好探索測驗

## 本機執行
1. 解壓縮資料夾。
2. 直接以瀏覽器開啟 `index.html`。
3. 若瀏覽器限制本機功能，可在資料夾執行 `python -m http.server 8000`，再開啟 `http://localhost:8000`。

## 免費發布（GitHub Pages）
1. 建立 GitHub repository。
2. 上傳 `index.html`、`style.css`、`app.js`。
3. 進入 Settings → Pages。
4. 選擇 Deploy from a branch，指定 `main` 與 `/ (root)`，儲存。
5. 等待 GitHub Pages 提供網站網址。

## 隱私與限制
- 不需要帳號，無後端資料庫。
- 測驗紀錄存在瀏覽器 localStorage；可在頁面中清除。
- 結果 PNG 由瀏覽器 Canvas 本機產生。
- 年齡確認是使用者自我聲明，不是身份驗證。
- 本站題目屬非臨床自我探索內容，不是經驗證的心理量表或診斷工具。
- 如需跨裝置同步、管理後台或真正的年齡驗證，需另建後端與隱私政策。
