// const ticketName = document.querySelectorAll(".col-ticket-pass h2");

// const ticketNameArr = [...ticketName];

// let ticketText;

// ticketNameArr.forEach((el) => {
//   el.className = el.innerText.toLowerCase().trim().replace(/\s+/g, "-");
// });

/////////////

const getRandomNum = () => {
  return Math.floor(Math.random() * 23);
};

const ticket = document.querySelectorAll(".col-ticket-pass > .col-sm-12");
// const ticketName = document.querySelectorAll(".col-ticket-pass h2");

const ticketArr = [...ticket];
// const ticketNameArr = [...ticketName];

let ticketName;

ticketArr.forEach((el) => {
  ticketName = el.querySelector("h2");
  ticketName.className = ticketName.innerText
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  // el.insertAdjacentHTML(
  //   "afterbegin",
  //   `<div class="col-ticket-img">${ticketImg}</div>`
  // );
  el.insertAdjacentHTML(
    "afterbegin",
    `<div class="col-ticket-img" style="height: 200px; background-image: url('https://source.unsplash.com/collection/9586529/${getRandomNum()}'); background-position: center center;background-size: cover;"></div>`
  );
});

// let ticketImg = document.querySelectorAll(".col-ticket-img").innerHTML;
// ticketImg =
//   '<img src="https://source.unsplash.com/random/592x200?rocket" alt="">';
