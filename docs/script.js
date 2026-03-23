async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load: ${path}`);
  return await res.json();
}

async function main() {
  const app = document.getElementById("app");
  app.innerText = "読み込み中...";

  try {
    // docs/data/weapons/index.json を読み込む
    const list = await loadJSON("./data/weapons/index.json");

    // 武器データを読み込む
    const weapons = [];
    for (const file of list) {
      const data = await loadJSON(`./data/weapons/${file}`);
      weapons.push(data);
    }

    // 一覧表示
    app.innerHTML = weapons.map(w => `・${w.name}`).join("<br>");

  } catch (err) {
    app.innerText = "読み込み失敗: " + err.message;
  }
}

main();
