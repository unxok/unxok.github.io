function greeting() {
  let a = document.getElementById("hello");
  let x = a.value;
  let y = document.getElementById("goodbye");
  if (x === "hello") {
    y.innerHTML = "goodbye";
    console.log("success");
  } else {
    y.innerHTML = " error: please say 'hello' ";
    console.log("fail");
  }
}
