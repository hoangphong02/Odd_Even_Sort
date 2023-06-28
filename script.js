const container = document.querySelector(".data-sort");
var x = screen.width;
//Lệnh tạo cột lúc đầu và khi người dùng không nhập giá trị
function createColum(number = 20) {
  for (let i = 0; i < number; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${randomNumber * 4}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barlabel = document.createElement("label");
    barlabel.classList.add("bar1");
    barlabel.innerHTML = randomNumber;
    bar.appendChild(barlabel);
    container.appendChild(bar);
  }
  //set button khi mới vào

  document.getElementById("pause").disabled = true;
  document.getElementById("pause").style.backgroundColor = "#D3D3D3";
  document.getElementById("pause").style.color = "#F0FFFF";

  document.getElementById("continue").disabled = true;
  document.getElementById("continue").style.backgroundColor = "#D3D3D3";
  document.getElementById("continue").style.color = "#F0FFFF";
}
// createColum();

// Lệnh tạo ra các cột giá trị
function newarr() {
  let valueIP = document.getElementById("valueinput").value;
  let data = document.getElementById("datasort");
  let numlist = document.getElementById("number-list");
  data.innerHTML = "";
  numlist.innerHTML = "";
  if (document.getElementById("checkbox1").checked) {
    createColumnwithUser();
  } else if (
    document.getElementById("checkbox1").checked == false &&
    valueIP != 0 &&
    valueIP != ""
  ) {
    createColumRandomUser();
  }
}

document.getElementById("continue").setAttribute("disabled", "true");
let temp = 0;
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}

//lệnh dừng hoạt động
function pause() {
  return new Promise((resolve) => {
    let click = function () {
      document.getElementById("pause").removeAttribute("disabled");
      document.getElementById("continue").removeAttribute("disabled", "true");
      document.getElementById("continue").removeEventListener("click", click);
      temp = 0;
      resolve("resolved");
    };
    document.getElementById("continue").addEventListener("click", click);
  });
}

document.getElementById("pause").addEventListener("click", function () {
  temp = 1;
  document.getElementById("pause").setAttribute("disabled", "true");
  document.getElementById("continue").removeAttribute("disabled");
});

//Nhập giá trị các phần tử mảng
let list = new Array();
document.getElementById("checkbox1").onclick = function (e) {
  let valueIP = document.getElementById("valueinput").value;
  if (this.checked) {
    if (valueIP == 0 || valueIP == "") {
      alert("Bạn chưa nhập số phần tử!!!");
      $("#checkbox1".removeAttr("checked"));
    } else if (valueIP < 0) {
      alert("Giá trị nhập vào phải lớn hơn 0. Vui lòng nhập lại.");
      $("#checkbox1".removeAttr("checked"));
    } else {
      for (let i = 0; i < valueIP; i++) {
        list[i] = document.createElement("INPUT");
        list[i].setAttribute("type", "number");
        if (x < 575) {
          list[i].setAttribute("style", "width:20px");
        } else {
          list[i].setAttribute("style", "width:40px");
        }
        list[i].style.marginBottom = "10px";
        list[i].style.marginRight = "10px";
        document.getElementById("data").appendChild(list[i]);
      }
    }
  } else {
    document.getElementById("data").innerHTML = "";
  }
};

// //Dãy số dưới chân
// const numberListDiv = document.getElementById("number-list");
// function createnumberList() {
//   let valueIP = document.getElementById("valueinput").value;
//   for (let i = 0; i < valueIP; i++) {
//     const numberParagraph = document.createElement("p"); // Tạo thẻ p
//     const numberText = document.createTextNode(i); // Tạo nội dung số
//     numberParagraph.appendChild(numberText); // Chèn nội dung số vào thẻ p
//     numberListDiv.appendChild(numberParagraph); // Chèn thẻ p vào div
//   }
// }

//Hàm tạo cột do người dùng nhập số lượng và tạo ngẫu nhiên

function createColumRandomUser() {
  let valueIP = document.getElementById("valueinput").value;
  for (let i = 0; i < valueIP; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${randomNumber * 4}px`;
    if (x < 575) {
      bar.style.transform = `translateX(${i * 22}px)`;
    } else {
      bar.style.transform = `translateX(${i * 38}px)`;
    }
    const barlabel = document.createElement("label");
    barlabel.classList.add("bar1");
    barlabel.innerHTML = randomNumber;
    bar.appendChild(barlabel);
    container.appendChild(bar);
    //tạo hàng số lượng bên dưới
    const numberListDiv = document.getElementById("number-list");
    const numberParagraph = document.createElement("p");
    numberParagraph.classList.add("number_" + i);
    if (x < 575) {
      numberParagraph.style.width = "20px";
    }
    const numberText = document.createTextNode(i); // Tạo nội dung số
    numberParagraph.appendChild(numberText); // Chèn nội dung số vào thẻ p
    numberListDiv.appendChild(numberParagraph); // Chèn thẻ p vào div
  }
  let margindatasort = document.getElementById("number_data");
  if (x < 575) {
    if (valueIP > 0 && valueIP < 16) {
      margindatasort.style.marginLeft = "10%";
    } else {
      margindatasort.style.marginLeft = "0%";
    }
  } else {
    if (valueIP > 0 && valueIP < 18) {
      margindatasort.style.marginLeft = "16%";
    }
  }
}

//Tạo các cột do người dùng nhập số lượng và nhập giá trị từ bàn phím
function createColumnwithUser() {
  let valueIP = document.getElementById("valueinput").value;
  for (let i = 0; i < valueIP; i++) {
    let randomNumber = list[i].value;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${randomNumber * 4}px`;
    if (x < 575) {
      bar.style.transform = `translateX(${i * 22}px)`;
    } else {
      bar.style.transform = `translateX(${i * 38}px)`;
    }
    const barlabel = document.createElement("label");
    barlabel.classList.add("bar1");
    barlabel.innerHTML = randomNumber;
    bar.appendChild(barlabel);
    container.appendChild(bar);
    //tạo hàng số lượng bên dưới
    const numberListDiv = document.getElementById("number-list");
    const numberParagraph = document.createElement("p");
    numberParagraph.classList.add("number_" + i);
    if (x < 575) {
      numberParagraph.style.width = "20px";
    }
    const numberText = document.createTextNode(i); // Tạo nội dung số
    numberParagraph.appendChild(numberText); // Chèn nội dung số vào thẻ p
    numberListDiv.appendChild(numberParagraph); // Chèn thẻ p vào div
  }
  let margindatasort = document.getElementById("number_data");
  if (x < 575) {
    if (valueIP > 0 && valueIP < 18) {
      margindatasort.style.marginLeft = "10%";
    } else {
      margindatasort.style.marginLeft = "0%";
    }
  } else {
    if (valueIP > 0 && valueIP < 18) {
      margindatasort.style.marginLeft = "16%";
    }
  }
}

//Hàm lâý dữ liệu từ tập tin
let number, soluong; // Khai báo 2 biến number, soluong
const fileInput = document.getElementById("inputFile");
const outputDiv = document.getElementById("output");

fileInput.addEventListener("change", function () {
  // Thêm một sự kiện "change" vào đối tượng fileinput bằng cách sử dụng phương thức addEventListener().
  let data = document.getElementById("datasort"); //Khai báo thêm 2 biến data và numlist
  let numlist = document.getElementById("number-list");
  data.innerHTML = "";
  numlist.innerHTML = "";

  const reader = new FileReader(); //Trong hàm xử lý sự kiện, tạo một đối tượng FileReader mới và gán cho biến reader.
  reader.readAsText(inputFile.files[0]); // Gọi phương thức readAsText() trên đối tượng fr, và truyền vào tệp được chọn làm đối số.
  reader.onload = function () {
    //Định nghĩa hàm xử lý sự kiện load của đối tượng reader
    let result = reader.result; //Lấy nội dung của tệp bằng cách sử dụng thuộc tính result của đối tượng reader
    number = result.split("\n"); //Tách nội dung thành các dòng bằng cách sử dụng phương thức split('\n'), rồi lấy dòng đầu tiên để lấy số lượng phần tử cần sắp xếp và gán cho biến number.
    let element = result.split("\n"); //Tách các dòng còn lại thành các chuỗi con bằng cách sử dụng phương thức split('\n') và gán cho biến element
    let string = element[1].split(" "); //Tách chuỗi con thứ hai thành một mảng các số bằng cách sử dụng phương thức split(' ') và gán cho biến String.
    // console.log(string);
    soluong = parseInt(number); //Chuyển đổi giá trị của number từ chuỗi sang số nguyên bằng cách sử dụng hàm parseInt().
    if (soluong == string.length) {
      //So sánh giá trị của soluong và độ dài của mảng substring. Nếu chúng bằng nhau, tiếp tục thực hiện các bước tiếp theo, nếu không hiển thị một thông báo lỗi và không thực hiện bất kỳ xử lý nào khác.
      let valueIP = document.getElementById("output").value;
      let tam = document.getElementById("datasort");
      tam.innerHTML = ""; //Xóa tất cả các phần tử con của đối tượng HTML div có id là "datasort" bằng cách gán giá trị rỗng cho thuộc tính innerHTML.
      for (let i = 0; i < string.length; i++) {
        let randomNumber = string[i];
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${randomNumber * 4}px`;
        if (x < 575) {
          bar.style.transform = `translateX(${i * 22}px)`;
        } else {
          bar.style.transform = `translateX(${i * 38}px)`;
        }
        const barlabel = document.createElement("label");
        barlabel.classList.add("bar1");
        barlabel.innerHTML = randomNumber;
        bar.appendChild(barlabel);
        container.appendChild(bar);

        //tạo hàng số lượng bên dưới
        const numberListDiv = document.getElementById("number-list");
        const numberParagraph = document.createElement("p");
        numberParagraph.classList.add("number_" + i);
        if (x < 575) {
          numberParagraph.style.width = "20px";
        }
        const numberText = document.createTextNode(i); // Tạo nội dung số
        numberParagraph.appendChild(numberText); // Chèn nội dung số vào thẻ p
        numberListDiv.appendChild(numberParagraph); // Chèn thẻ p vào div
      }
      let margindatasort = document.getElementById("number_data");
      if (x < 575) {
        if (soluong > 0 && soluong < 16) {
          margindatasort.style.marginLeft = "10%";
        } else {
          margindatasort.style.marginLeft = "0%";
        }
      } else {
        if (soluong > 0 && soluong < 18) {
          margindatasort.style.marginLeft = "16%";
        }
      }
    }
  };
});

function continue1() {
  document.getElementById("continue").style.backgroundColor = "bisque";
  document.getElementById("pause").style.backgroundColor = "#FCFCFD";
  document.getElementById("run").disabled = true;
  document.getElementById("run").style.backgroundColor = "#D3D3D3";
  document.getElementById("run").style.color = "#F0FFFF";
  document.getElementById("newA").disabled = false;
  document.getElementById("newA").style.backgroundColor = "#FCFCFD";
  document.getElementById("newA").style.color = "#36395A";
}

function pause1() {
  document.getElementById("pause").style.backgroundColor = "bisque";
  document.getElementById("continue").style.backgroundColor = "#FCFCFD";
  document.getElementById("run").disabled = true;
  document.getElementById("run").style.backgroundColor = "#D3D3D3";
  document.getElementById("run").style.color = "#F0FFFF";
  document.getElementById("newA").disabled = false;
  document.getElementById("newA").style.backgroundColor = "#FCFCFD";
  document.getElementById("newA").style.color = "#36395A";
}

function newarr1() {
  //set màu vô hiệu hóa nút pause khi khởi tạo
  document.getElementById("pause").disabled = true;
  document.getElementById("pause").style.backgroundColor = "#D3D3D3";
  document.getElementById("pause").style.color = "#F0FFFF";
  //set màu vô hiệu hóa nút continue khi khởi tạo
  document.getElementById("continue").disabled = true;
  document.getElementById("continue").style.backgroundColor = "#D3D3D3";
  document.getElementById("continue").style.color = "#F0FFFF";

  document.getElementById("run").disabled = false;
  document.getElementById("run").style.backgroundColor = "#FCFCFD";
  document.getElementById("run").style.color = "#36395A";
  document.getElementById("newA").disabled = false;
  document.getElementById("newA").style.backgroundColor = "#FCFCFD";
  document.getElementById("newA").style.color = "#36395A";
}

function setcolorrun() {
  document.getElementById("run").style.backgroundColor = "bisque";
  document.getElementById("run").disabled = true;
  // document.getElementById("newA").disabled = true;
  // document.getElementById("newA").style.backgroundColor = "#D3D3D3";
  // document.getElementById("newA").style.color = "#F0FFFF";
  document.getElementById("pause").disabled = false;
  document.getElementById("pause").style.backgroundColor = "#FCFCFD";
  document.getElementById("pause").style.color = "#36395A";
  document.getElementById("continue").disabled = false;
  document.getElementById("continue").style.backgroundColor = "#FCFCFD";
  document.getElementById("continue").style.color = "#36395A";
}

function checkinput() {
  $("#checkbox1").removeAttr("checked");
  let valueIP = document.getElementById("valueinput").value;
  document.getElementById("data").innerHTML = "";
}

// Hàm chạy khi nhập số lượng phần tử
async function Odd_evenSort1() {
  let bars = document.querySelectorAll(".bar");
  let flag = true;
  let number = document.querySelectorAll("[class^=number_]");
  let width = () => {
    return `100%`;
  };

  let code1 = document.querySelector("#line1");
  let code2 = document.querySelector("#line2");
  let code3 = document.querySelector("#line3");
  let code4 = document.querySelector("#line4");
  let code5 = document.querySelector("#line5");
  let code6 = document.querySelector("#line6");
  let e;
  let valueIP = document.getElementById("valueinput").value;
  if (valueIP == "") {
    e = soluong;
  } else {
    e = valueIP;
  }

  while (flag) {
    //nếu flag = true thì vòng lặp tiếp tục thực hiện
    flag = false;
    code1.style.setProperty("--width", width());
    code4.style.setProperty("--width", 0);
    code5.style.setProperty("--width", 0);
    code6.style.setProperty("--width", 0);

    for (let i = 0; i < e - 1; i += 2) {
      number[i].style.backgroundColor = "red";
      number[i].style.color = "white";
    }
    for (let i = 1; i <= e - 1; i += 2) {
      number[i].style.backgroundColor = "white";
      number[i].style.color = "darkgrey";
    }

    for (let i = 0; i < e - 1; i += 2) {
      var value1 = parseInt(bars[i].childNodes[0].innerHTML);
      var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

      var rangeInput = document.querySelector('input[type="range"]');
      var rangeValue = rangeInput.value;

      if (rangeValue >= 0 && rangeValue <= 10) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 800)
        );
      } else {
        if (rangeValue > 10 && rangeValue <= 20) {
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 700)
          );
        } else {
          if (rangeValue > 20 && rangeValue <= 30) {
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 600)
            );
          } else {
            if (rangeValue > 30 && rangeValue <= 40) {
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 400)
              );
            } else {
              if (rangeValue > 40 && rangeValue <= 50) {
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, 300)
                );
              } else {
                if (rangeValue > 50 && rangeValue <= 60) {
                  await new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, 200)
                  );
                } else {
                  if (rangeValue > 60 && rangeValue <= 70) {
                    await new Promise((resolve) =>
                      setTimeout(() => {
                        resolve();
                      }, 100)
                    );
                  } else {
                    if (rangeValue > 70 && rangeValue <= 80) {
                      await new Promise((resolve) =>
                        setTimeout(() => {
                          resolve();
                        }, 50)
                      );
                    } else {
                      if (rangeValue > 80 && rangeValue <= 90) {
                        await new Promise((resolve) =>
                          setTimeout(() => {
                            resolve();
                          }, 20)
                        );
                      } else {
                        if (rangeValue > 90 && rangeValue <= 100) {
                          await new Promise((resolve) =>
                            setTimeout(() => {
                              resolve();
                            }, 0)
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     resolve();
      //   }, 300)
      // );

      // Định nghĩa màu đỏ cho thanh thứ i
      bars[i].style.backgroundColor = "red";

      // Định nghĩa màu đỏ cho thanh thứ i + 1
      bars[i + 1].style.backgroundColor = "red";

      code2.style.setProperty("--width", width());
      code3.style.setProperty("--width", 0);
      if (value1 > value2) {
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;

        // Dừng thực thi dòng code trong 300ms

        if (rangeValue >= 0 && rangeValue <= 10) {
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 800)
          );
        } else {
          if (rangeValue > 10 && rangeValue <= 20) {
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 700)
            );
          } else {
            if (rangeValue > 20 && rangeValue <= 30) {
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 600)
              );
            } else {
              if (rangeValue > 30 && rangeValue <= 40) {
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, 400)
                );
              } else {
                if (rangeValue > 40 && rangeValue <= 50) {
                  await new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, 300)
                  );
                } else {
                  if (rangeValue > 50 && rangeValue <= 60) {
                    await new Promise((resolve) =>
                      setTimeout(() => {
                        resolve();
                      }, 200)
                    );
                  } else {
                    if (rangeValue > 60 && rangeValue <= 70) {
                      await new Promise((resolve) =>
                        setTimeout(() => {
                          resolve();
                        }, 100)
                      );
                    } else {
                      if (rangeValue > 70 && rangeValue <= 80) {
                        await new Promise((resolve) =>
                          setTimeout(() => {
                            resolve();
                          }, 50)
                        );
                      } else {
                        if (rangeValue > 80 && rangeValue <= 90) {
                          await new Promise((resolve) =>
                            setTimeout(() => {
                              resolve();
                            }, 20)
                          );
                        } else {
                          if (rangeValue > 90 && rangeValue <= 100) {
                            await new Promise((resolve) =>
                              setTimeout(() => {
                                resolve();
                              }, 0)
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // await new Promise((resolve) =>
        //   setTimeout(() => {
        //     resolve();
        //   }, 300)
        // );

        code3.style.setProperty("--width", width());
        code2.style.setProperty("--width", 0);
        // Đổi thanh i với thanh i+1
        bars[i].style.height = bars[i + 1].style.height;
        bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
        bars[i + 1].style.height = temp1;
        bars[i + 1].childNodes[0].innerText = temp2;
        flag = true; // đặt giá trị flag thành true nếu có hoán đổi
      }
      // Dừng thực thi dòng code trong 300ms
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // Định nghĩa màu cho thanh i
      bars[i].style.backgroundColor = "#36395A";

      // Định nghĩa màu cho thanh i+1
      bars[i + 1].style.backgroundColor = "#36395A";

      await wait(50);
      if (temp == 1) await pause();
    }

    code1.style.setProperty("--width", 0);
    code2.style.setProperty("--width", 0);
    code4.style.setProperty("--width", width());
    code3.style.setProperty("--width", 0);

    for (let i = 0; i < e - 1; i += 2) {
      number[i].style.backgroundColor = "white";
      number[i].style.color = "darkgrey";
    }
    for (let i = 1; i <= e - 1; i += 2) {
      number[i].style.backgroundColor = "red";
      number[i].style.color = "white";
    }

    for (let i = 1; i < e - 1; i += 2) {
      var value3 = parseInt(bars[i].childNodes[0].innerHTML);
      var value4 = parseInt(bars[i + 1].childNodes[0].innerHTML);

      var rangeInput = document.querySelector('input[type="range"]');
      var rangeValue = rangeInput.value;

      if (rangeValue >= 0 && rangeValue <= 10) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 800)
        );
      } else {
        if (rangeValue > 10 && rangeValue <= 20) {
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 700)
          );
        } else {
          if (rangeValue > 20 && rangeValue <= 30) {
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 600)
            );
          } else {
            if (rangeValue > 30 && rangeValue <= 40) {
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 400)
              );
            } else {
              if (rangeValue > 40 && rangeValue <= 50) {
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, 300)
                );
              } else {
                if (rangeValue > 50 && rangeValue <= 60) {
                  await new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, 200)
                  );
                } else {
                  if (rangeValue > 60 && rangeValue <= 70) {
                    await new Promise((resolve) =>
                      setTimeout(() => {
                        resolve();
                      }, 100)
                    );
                  } else {
                    if (rangeValue > 70 && rangeValue <= 80) {
                      await new Promise((resolve) =>
                        setTimeout(() => {
                          resolve();
                        }, 50)
                      );
                    } else {
                      if (rangeValue > 80 && rangeValue <= 90) {
                        await new Promise((resolve) =>
                          setTimeout(() => {
                            resolve();
                          }, 20)
                        );
                      } else {
                        if (rangeValue > 90 && rangeValue <= 100) {
                          await new Promise((resolve) =>
                            setTimeout(() => {
                              resolve();
                            }, 0)
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     resolve();
      //   }, 300)
      // );

      // Định nghĩa màu đỏ cho thanh thứ i
      bars[i].style.backgroundColor = "red";

      // Định nghĩa màu đỏ cho thanh thứ i + 1
      bars[i + 1].style.backgroundColor = "red";

      code5.style.setProperty("--width", width());
      code6.style.setProperty("--width", 0);
      if (value3 > value4) {
        var temp3 = bars[i].style.height;
        var temp4 = bars[i].childNodes[0].innerText;

        // Dừng thực thi dòng code trong 300ms
        if (rangeValue >= 0 && rangeValue <= 10) {
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 800)
          );
        } else {
          if (rangeValue > 10 && rangeValue <= 20) {
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 700)
            );
          } else {
            if (rangeValue > 20 && rangeValue <= 30) {
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 600)
              );
            } else {
              if (rangeValue > 30 && rangeValue <= 40) {
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, 400)
                );
              } else {
                if (rangeValue > 40 && rangeValue <= 50) {
                  await new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, 300)
                  );
                } else {
                  if (rangeValue > 50 && rangeValue <= 60) {
                    await new Promise((resolve) =>
                      setTimeout(() => {
                        resolve();
                      }, 200)
                    );
                  } else {
                    if (rangeValue > 60 && rangeValue <= 70) {
                      await new Promise((resolve) =>
                        setTimeout(() => {
                          resolve();
                        }, 100)
                      );
                    } else {
                      if (rangeValue > 70 && rangeValue <= 80) {
                        await new Promise((resolve) =>
                          setTimeout(() => {
                            resolve();
                          }, 50)
                        );
                      } else {
                        if (rangeValue > 80 && rangeValue <= 90) {
                          await new Promise((resolve) =>
                            setTimeout(() => {
                              resolve();
                            }, 20)
                          );
                        } else {
                          if (rangeValue > 90 && rangeValue <= 100) {
                            await new Promise((resolve) =>
                              setTimeout(() => {
                                resolve();
                              }, 0)
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // await new Promise((resolve) =>
        //   setTimeout(() => {
        //     resolve();
        //   }, 300)
        // );

        code6.style.setProperty("--width", width());
        code5.style.setProperty("--width", 0);
        // Đổi thanh i với thanh i+1
        bars[i].style.height = bars[i + 1].style.height;
        bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
        bars[i + 1].style.height = temp3;
        bars[i + 1].childNodes[0].innerText = temp4;
        flag = true; // đặt giá trị flag = true nếu có hoán đổi
      }
      // Dừng thực thi dòng code trong 300ms
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // Định nghĩa màu cho thanh thứ i
      bars[i].style.backgroundColor = "#36395A";

      // Định nghĩa màu cho thanh thứ i+1
      bars[i + 1].style.backgroundColor = "#36395A";

      await wait(50);
      if (temp == 1) await pause();
    }
    code4.style.setProperty("--width", 0);
    code5.style.setProperty("--width", 0);
  }
  for (let i = 0; i <= e - 1; i++) {
    number[i].style.backgroundColor = "white";
    number[i].style.color = "black";
  }
  for (var x = 0; x < e; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
  }

  //test thiết lập nút run
  document.getElementById("run").disabled = false;
  document.getElementById("run").style.backgroundColor = "#FCFCFD";
  document.getElementById("run").style.color = "#36395A";
}
