'use strict';
{
//imagesの配列を作る
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
//currentNumという変数を定義
let currentIndex = 0;
//mainImageを定義
const mainImage = document.getElementById('main');
//mainImageについてcurrentIndex番目のimageをsourceにするようにする
mainImage.src = images[currentIndex];

//サムネイルの生成
//imageとindexの要素を使って、imagesに対してそれぞれ処理を行う
images.forEach((image, index) => {
  //imgを生成
  const img = document.createElement('img');
  //imgのsourceがforEachの引数であるimageだと設定する
  img.src = image;
  //imgを格納するliを生成。順番を間違えていた（eventListenerの後に入れていた）
  const li = document.createElement('li');
  //index番目のimageについてcurrentクラスをつける
  if(index === currentIndex) {
    li.classList.add('current');
  }
  //clickEventを作る。clickしたthumbnailをmainImageに表示
  li.addEventListener('click', () => {
    //imageがクリックしたliのimgとなっている
    mainImage.src = image;
    //currentIndexをクリックしたところに更新
      //thumbnailsを定義(liの集合)。li全体について定義されていないから
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      //currentIndex番目のcurrent classを外す
      thumbnails[currentIndex].classList.remove('current');
      //clickしたliにcurrentIndexを設定
      currentIndex = index;
      //current classをつける
      thumbnails[currentIndex].classList.add('current');
  });
  //liにimgをいれこむ
  li.appendChild(img);
  //liに.thumbnailsクラスをつける
  document.querySelector('.thumbnails').appendChild(li);
});

//nextボタンの設定
  //next要素の取得
  const next = document.getElementById('next');
  //eventListenerを設定
  next.addEventListener('click', () => {
    //今表示されているimage（images [current])の次のimageをclickするのと同じ動作をつける
      //currentIndexの次という意味でtargetという変数を定義
      let target = currentIndex + 1;
      //最後まで表示したら、最初に戻る処理
      if(target === images.length) {
        target = 0;
      }
      //target番目のimageを表示する
      document.querySelectorAll('.thumbnails > li')[target].click();
  });

//prevボタンの設定
  //nextボタンと同じように
  //prev要素の取得
  const prev = document.getElementById('prev');
  //eventListenerを設定
  prev.addEventListener('click', () => {
    //今表示されているimage（images [current])の前のimageをclickするのと同じ動作をつける
      //currentIndexの前という意味でtargetという変数を定義
      let target = currentIndex - 1;
      //最初まで表示したら、最後に戻る処理
      if(target < 0) {
        target = images.length - 1;
      }
      //target番目のimageを表示する
      document.querySelectorAll('.thumbnails > li')[target].click();
    });
//clearTimeoutのための変数を定義
let timeoutId;
//playSlideShowの設定
function playSlideShow() {
  timeoutId = setTimeout(() => {
    //nextボタンを押すのと同じ動作をつける
    next.click();
    playSlideShow();
  }, 1000);
}
//playボタンの設定
  //prayとpauseを切り替えるために変数を定義
  let isPlay = false;
  //play要素の取得
  const play = document.getElementById('play');
  //eventListenerの設定
  play.addEventListener('click', () => {
    //playの処理
    if(isPlay === false) {
      playSlideShow();
      //playの文字をpauseにする
      play.textContent = 'pause'
    //pauseの処理
    } else {
      clearTimeout(timeoutId);
    }
    //isPlayの切り替え
    isPlay = !isPlay;
  });

}