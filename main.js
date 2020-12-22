'use strict';

//inputに入力（住所、氏名、年齢）
//登録ボタンをクリック
//「この内容で登録して良いですか？」確認メッセージ
//この時、登録ボタンの横に修正ボタンが出現
//同時にclassでインスタンスを作成し、登録する内容が表示される
//最終的にはfinderを呼び出し、登録する写真も呼び出せるように

//登録内容を格納
const regists = [];

//登録内容を設定したクラス
class Regist{
  constructor(address, name, age){
    this.address = address;
    this.name = name;
    this.age = age;
  }
}

//登録情報のindex。クリック時の処理、登録内容の表示をする際に使用
let i = 0;

//登録ボタンをクリック
document.querySelector('button').addEventListener('click', function(){
    //登録内容を格納
    let address = document.getElementById('address').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    regists.push(new Regist(address, name, age));

    //登録内容の確認。trueを選べば登録作業を実行
    const message = `住所：${address} \n 氏名：${name} \n 年齢：${age} \n 以上の内容で登録しますか？`;
    if(window.confirm(message)){
    
    //以下、投稿画面を変更
    const timeLine = document.getElementById('timeLine');
    
    //「登録されていません」の表示を取り除く
      const nonePost = timeLine.querySelector('.nonePost');
      nonePost.classList.add('invisible')

    //日付情報の取得
    const present = new Date();
    const year = present.getFullYear();
    const month = present.getMonth() + 1;
    const date = present.getDate();
    const day = present.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //登録内容の表示
    const post = document.createElement('div');
    post.classList = 'post';
    post.innerHTML = `
      <div>
        <p>住所：${regists[i].address}</p>
        <p>名前：${regists[i].name}</p>
        <p>年齢：${regists[i].age}</p>
        <p>登録日：${year}年${month}月${date}日(${days[day]})</p>
      </div>
    `;
    timeLine.appendChild(post)
    i++; //次回投稿内容表示用
    address = undefined;
    name = undefined;
    age = undefined;


    }
})

//requierdの使い方


//https://ja.javascript.info/class-inheritance を参照
//クラス継承、オーバーライドについて
  