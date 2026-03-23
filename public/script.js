// JSON 読み込みテスト
fetch("../data/weapons/dainsleif.json")  // ← ここは存在する JSON に合わせて変更してOK
  .then(res => res.json())
  .then(data => {
    console.log("読み込み成功:", data);

    // 画面に表示（テスト用）
    const app = document.getElementById("app");
    if (app) {
      app.innerText = JSON.stringify(data, null, 2);
    }
  })
  .catch(err => {
    console.error("読み込み失敗:", err);
  });
