const input = document.getElementById("input");
const daftar = document.getElementById("daftar");

function tambahCatatan() {
  const teks = input.value;
  if (!teks) return;

  const li = document.createElement("li");
  li.innerText = teks;
  li.onclick = () => {
    li.remove();
    simpanCatatan();
  };

  daftar.appendChild(li);
  input.value = "";
  simpanCatatan();
}

function simpanCatatan() {
  const semua = [];
  daftar.querySelectorAll("li").forEach(li => semua.push(li.innerText));
  localStorage.setItem("catatan", JSON.stringify(semua));
}

function muatCatatan() {
  const semua = JSON.parse(localStorage.getItem("catatan") || "[]");
  semua.forEach(teks => {
    const li = document.createElement("li");
    li.innerText = teks;
    li.onclick = () => {
      li.remove();
      simpanCatatan();
    };
    daftar.appendChild(li);
  });
}

window.onload = muatCatatan;