function addtocart() {
  var imgpath = document.getElementById("img").getAttribute("src");
  var title = document.getElementById("title").innerText;
  var description = document.getElementById("description").innerText;

  var merge =
    "IMAGE PATH = " +
    imgpath +
    "IMAGE TITLE= " +
    title +
    " IMAGE DESCRIPTION= " +
    description;

  alert(description);
}
