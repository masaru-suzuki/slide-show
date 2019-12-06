'use strict';
{



  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
    ];


  const mainImage = document.getElementById('main');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const play = document.getElementById('play');

  let currentIndex = 0;

  mainImage.src = images[currentIndex];
  images.forEach((image, index) =>{
    const img = document.createElement('img');
    img.src = image;
    const li = document.createElement('li');
    li.appendChild(img);
    //ulにliを入れ込む
    document.querySelector('.thumbnails').appendChild(li);
    //eventListenerの設定ではなく、それぞれのliの設定
    if(currentIndex === index) {
      li.classList.add('current');
    }
    li.addEventListener('click', () => {
      mainImage.src = images[index];
      //thumbnails > li とできる
      //.thumbnailsの . が抜けていた！
      const thumbnails = document.querySelectorAll(`.thumbnails > li`);
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current')
    });
  });

next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target > images.length - 1){
    target = 0;
  }
    // li[target].click();
    document.querySelectorAll('.thumbnails > li')[target].click();
});
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
  document.querySelectorAll('.thumbnails > li')[target].click();
});

let timeoutId;
let isPlay = false;

function slideshow() {
  timeoutId = setTimeout(() => {
    next.click();
    slideshow();
  }, 1000);
}
play.addEventListener('click', () => {
  if (isPlay === false){
    play.textContent = 'pause'
    slideshow();
  } else {
    clearTimeout(timeoutId);
  }
  isPlay = !isPlay;
});




















//imagesの配列を作る
//currentNumという変数を定義
//mainImageを定義
//mainImageについてcurrentIndex番目のimageをsourceにするようにする

//サムネイルの生成
//imageとindexの要素を使って、imagesに対してそれぞれ処理を行う
  //imgを生成
  //imgのsourceがforEachの引数であるimageだと設定する
  //imgを格納するliを生成。順番を間違えていた（eventListenerの後に入れていた）
  //index番目のimageについてcurrentクラスをつける

  //clickEventを作る。clickしたthumbnailをmainImageに表示
    //imageがクリックしたliのimgとなっている
    //currentIndexをクリックしたところに更新
      //thumbnailsを定義(liの集合)。li全体について定義されていないから
      //currentIndex番目のcurrent classを外す
      //clickしたliにcurrentIndexを設定
      //current classをつける

  //liにimgをいれこむ
  //liに.thumbnailsクラスをつける

//nextボタンの設定
  //next要素の取得
  //eventListenerを設定
    //今表示されているimage（images [current])の次のimageをclickするのと同じ動作をつける
      //currentIndexの次という意味でtargetという変数を定義
      //最後まで表示したら、最初に戻る処理
      //target番目のimageを表示する

//prevボタンの設定
  //nextボタンと同じように
  //prev要素の取得
  //eventListenerを設定
    //今表示されているimage（images [current])の前のimageをclickするのと同じ動作をつける
      //currentIndexの前という意味でtargetという変数を定義
      //最初まで表示したら、最後に戻る処理
      //target番目のimageを表示する
//clearTimeoutのための変数を定義
//playSlideShowの設定
    //nextボタンを押すのと同じ動作をつける
//playボタンの設定
  //prayとpauseを切り替えるために変数を定義
  //play要素の取得
  //eventListenerの設定
    //playの処理
      //playの文字をpauseにする
    //pauseの処理
    //isPlayの切り替え



}