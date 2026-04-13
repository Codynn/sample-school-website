const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuToggle.textContent = 'x';
    } else {
        menuToggle.textContent = 'Menu ';
    }
});

async function makeRequest() {
    const container = document.getElementById("notices-container");
    if (!container) return;

    try {
        const response = await fetch("https://api.betterschool.app/api/notice/public?page=1&limit=6&school=pgs");
        const noticeData = await response.json();

        noticeData.data.forEach(notice => {
            const article = document.createElement("article");
            article.className = "notice-card";
            article.innerHTML = `
                <div class="card-top">
                    <span class="badge">Notice</span>
                    <time><i class="far fa-calendar"></i> ${notice.createdAt.slice(0, 10)}</time>
                </div>
                <div class="notice-body">
                    <h3>${notice.title}</h3>
                    <p>${notice.content}</p>
                    <a href="#">Read More &#8594;</a>
                </div>
            `;
            container.appendChild(article);
        });
    }
    catch (error) {
        console.log(error);
        alert("Failed to fetch data. Please check your internet connection or try again later.");
    }
}
makeRequest();