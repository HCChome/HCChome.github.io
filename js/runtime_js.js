var now = new Date;
function createtime() {
    now.setTime(now.getTime() + 1000);
    var start = new Date("08/01/2022 00:00:00");
    var voyagerDistance = Math.trunc(234000000 + (now - start) / 1000 * 17);
    var au = (voyagerDistance / 149600000).toFixed(6);

    var siteStart = new Date("08/09/2022 00:00:00");
    var diff = (now - siteStart) / 1000;
    var days = Math.floor(diff / (60 * 60 * 24));
    var hours = String(Math.floor(diff / (60 * 60)) % 24).padStart(2, '0');
    var minutes = String(Math.floor(diff / 60) % 60).padStart(2, '0');
    var seconds = String(Math.floor(diff % 60)).padStart(2, '0');

    let content = `
    <br>
    <div style="font-size:13px;font-weight:bold">
      本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒
      <i id="heartbeat" class='fas fa-heartbeat'></i><br>
      旅行者 1 号当前距离地球 ${voyagerDistance} 千米，约为 ${au} 个天文单位 🚀
    </div>
  `;

    const workboard = document.getElementById("workboard");
    if (workboard) workboard.innerHTML = content;
}
setInterval(() => { createtime() }, 1000);
