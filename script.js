const photos = [
  { image: "images/image1.jpg", head: "Gorrilaz (2001)", text:'Первый альбом группы, который представил миру их уникальный стиль, сочетающий альтернативный рок, электронику и хип-хоп. С такими хитами, как "Clint Eastwood" и "19-2000", альбом стал культовым и заложил основу для успеха группы.'},
  { image: "images/image2.jpeg", head: "Demon Days (2005)", text:'Второй альбом, который принёс Gorillaz мировую славу. Включает такие треки, как "Feel Good Inc." и "Dare". Альбом отличается мрачной атмосферой и социальными темами, а также участием множества приглашённых артистов.'},
  { image: "images/image3.jpg", head: "Plastic Beach (2010)", text:'Концептуальный альбом, посвящённый экологическим проблемам и загрязнению океанов. С участием таких звёзд, как Snoop Dogg, Lou Reed и Mos Def, альбом сочетает электронику, рок и оркестровые элементы.'},
  { image: "images/image4.jpeg", head: "The Fall (2011)", text:'Экспериментальный альбом, записанный на iPad во время турне группы. Он отличается минималистичным звучанием и атмосферными треками, такими как "Amarillo" и "Revolving Doors".'},
  { image: "images/image5.png", head: "Humanz (2017)", text:'Альбом, вдохновлённый политическими и социальными потрясениями. С участием множества артистов, включая Vince Staples, Pusha T и Grace Jones, он предлагает энергичные танцевальные треки и мрачные размышления о будущем.'},
  { image: "images/image6.jpg", head: "The Now Now (2018)", text:'Более личный и меланхоличный альбом, записанный в основном с участием 2-D (Деймона Албарна). Включает треки, такие как "Humility" и "Tranz", и отличается лёгким, ностальгическим звучанием.'},
  { image: "images/image7.png", head: "Song Machine, Season One: Strange Timez (2020)", text:'Инновационный проект, выпущенный в формате серии синглов с участием таких артистов, как Robert Smith, Elton John и Slowthai. Альбом сочетает разнообразные жанры и экспериментальные подходы.'},
  { image: "images/image8.jpeg", head: "Cracker Island (2023)", text:'Самый свежий альбом группы, исследующий темы технологий, изоляции и современной культуры. Включает коллаборации с Bad Bunny, Thundercat и Tame Impala.'}
]
let currentIndex = 0;

const albumImage = document.getElementById('albumImage');
const albumName = document.getElementById('albumName');
const albumText = document.getElementById('albumText');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateAlbum() {
  albumImage.src = photos[currentIndex].image;
  albumName.textContent = photos[currentIndex].head;
  albumText.textContent = photos[currentIndex].text;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updateAlbum();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateAlbum();
});

updateImage();