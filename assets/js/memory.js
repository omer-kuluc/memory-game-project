let datas = [1, 2, 3, 4, 5, 6, 7, 8];
datas = datas.concat(datas);

datas.sort(function () {
  return Math.random() - 0.5;
});

const gameContainer = document.querySelector('.game');
let counter = 0;
for (const x of datas) {
  gameContainer.innerHTML += `<div class="game-item">${x}</div>`;
}

const items = document.querySelectorAll('.game-item');
let selectedCards = [];

counter = 0;
items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('game-item-active');
    selectedCards.push(item);

    if (selectedCards.length === 1) {
      console.log('first')
      selectedCards[0].classList.add('game-item-active');
      selectedCards[0].classList.toggle('game-item-active');
    }
    else if (selectedCards.length === 2) {
      if (selectedCards[0].textContent !== selectedCards[1].textContent) {
        console.log('second')
        selectedCards[1].classList.toggle('game-item-active');
      }
      else if (selectedCards[0].textContent === selectedCards[1].textContent) {
        console.log('same')
        selectedCards[0].classList.add('game-item-same');
        selectedCards[1].classList.add('game-item-same');
        counter++;
        counterTxt.innerText += counter; 
      }

      setTimeout(() => {
        selectedCards.forEach(c => c.classList.remove('game-item-active'));
        selectedCards = [];
      }, 1000);
    }
  });
});

/**
 * eğer querySelector dersek doğrudan elementi getirir
 * querySelectorAll dersek elementlerin olduğu bir dizi getirir
 * bu sebeple querySelector'de addEventListener çalışırken
 * querySelectorAll'da dizi olduğu için doğrudan addEventListener
 * yazılmaz.
 * Onun yerine döngü ile tüm elemanlara tek tek erişip 
 * addEventListener yazarız
 */

function handleItemClick() {
  // toggle - eğer yoksa ekler, varsa kaldırır
  this.classList.toggle('game-item-active');
}

// 16 kere çalışacak
for (const item of items) {
  // item her seferinde sıradan bize tek tek game-item'ları getirecek
  item.addEventListener('click', handleItemClick);
}

// for (const item of items) {
//   // item her seferinde sıradan bize tek tek game-item'ları getirecek
//   item.addEventListener('click', handleSameCard);
// }

// function handleSameCard() {
//   // if (data == data) {
//   //   items.forEach(item => {
//   //     item.classList.add('game-item-same');
//   //   })
//   // }
//   if () {

//   }
// }

// handleSameCard();