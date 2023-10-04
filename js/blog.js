// let namaSiswa1 = "Rizqul";
// let namaSiswa2 = "Lidia";
// let namaSiswa3 = "Putu";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// Array
// let namaSiswa = ["Rizqul", "Lidia", "Putu", "Joko"];
// console.log(namaSiswa);
// console.log(namaSiswa[1]);
// console.log(namaSiswa[2]);

// let nama = "Abel Dustin";
// let alamat = "Tangerang Selatan";
// let umur = 25;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// object

// let dataPersonal1 = {
//   nama: "Rizqul",
//   alamat: "Margonda",
//   umur: 24,
// };

// let dataPersonal2 = {
//   nama: "Abel Dustin",
//   alamat: "Tangerang Selatan",
//   umur: 25,
// };

// let dataPersonal3 = {
//   nama: "Putu",
//   alamat: "Kendari",
//   umur: 25,
// };

// let dataPersonal4 = {
//   nama: "Ansor",
//   alamat: "Bandung",
//   umur: 20,
// };

// console.log(dataPersonal1.nama);
// console.log(dataPersonal2.alamat);
// console.log(dataPersonal3.umur);
// console.log(dataPersonal4);

// let dataPersonal = [
//   {
//     nama: "Rizqul",
//     alamat: "Margonda",
//     umur: 24,
//   },
//   {
//     nama: ["Abel", "Dustin"],
//     alamat: "Tangerang Selatan",
//     umur: 25,
//   },
//   {
//     nama: "Putu",
//     alamat: "Kendari",
//     umur: 25,
//   },
//   {
//     nama: "Ansor",
//     alamat: "Bandung",
//     umur: 20,
//   },
// ];

// console.log(dataPersonal);
// console.log(dataPersonal[2]);
// console.log(dataPersonal[3].nama);

// let data = [];

// function addData(e) {
//   e.preventDefault();

//   let person = {
//     name: "Samsul",
//     address: "Tangerang",
//   };

//   data.push(person);
//   console.log(data);
// }

// let data = [];

// function addData(e) {
//   e.preventDefault();

//   let blog = {
//     title: document.getElementById("input-blog-title").value,
//     content: document.getElementById("input-blog-content").value,
//   };

//   data.push(blog);
//   for (let index = 0; index < data.length; index++) {
//     console.log(data[index]);
//   }
// }

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar image dapat ditampilkan
  image = URL.createObjectURL(image[0]);
  //   console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: new Date(),
    author: "Abel Dustin",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a target="_blank" href="blog-detail.html">${
                      dataBlog[index].title
                    }</a>
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(dataBlog[index].postAt)} | ${
      dataBlog[index].author
    }
                </div>
                <p>${dataBlog[index].content}</p>

                <div style="float:right; margin:10px;">
                  <p style="font-size:15px; color:grey;">${getDistanceTime(
                    dataBlog[index].postAt
                  )}</p>
                </div>
            </div>
        </div>
    `;
  }
}

function getFullTime(time) {
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[4]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  // 4 Oct 2023 09:30 WIB
  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 3000);
// 1000 = 1 detik
