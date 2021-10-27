//1
function myFunction() {
    alert("Hello World!");
}
myFunction();

//2
function myFunction(){
    alert("Hello World!");
}

//3
function myFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

//4
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
}