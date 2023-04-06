function makeUrl() {
  var username = document.getElementById("uname").value;
  var url = `https://srchlink.github.io/u/${uname}`;
  document.getElementById("scrh").textContent = url;
}
