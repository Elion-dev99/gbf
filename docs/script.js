async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to load: ${path}`);
  }
  return await res.json();
}

async function main() {
  const app = document.getElementById("app");
  app.innerText = "読み込み中...";

  try {
    const data = await loadJSON("../data/weapons/dainsleif.json");
    app.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    app.innerText = "読み込み失敗: " + err.message;
  }
}

main();
