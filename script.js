let currentPage = 1;
const totalPages = 150; // Total halaman diset ke 150

const kitabImage = document.getElementById('kitab-image');
const pageInfo = document.getElementById('page-info');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

function padZero(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function updatePage() {
    let pageNumStr = padZero(currentPage, 4);
    // Mengambil file dari folder pages/ dengan format penamaan kitab
    kitabImage.src = `pages/فتح المعين_page-${pageNumStr}.jpg`;
    pageInfo.innerText = `Halaman ${currentPage} dari ${totalPages}`;
}

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Inisialisasi awal
updatePage();
