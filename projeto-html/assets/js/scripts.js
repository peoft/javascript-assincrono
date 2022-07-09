const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    const data = await fetch(BASE_URL, { signal: AbortSignal.timeout(120000)})
        .then(res => res.json())
        .catch(e => console.log(e.message))

    return data.webpurl;
}

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();