let filterOption = document.getElementById("select-filter")
filterOption.addEventListener("change", () => {
  console.log(filterOption.value);
    if(filterOption.value == "genre" || filterOption.value == "title"){
        document.getElementById("input-type").setAttribute("type","text")
    }
    if(filterOption.value == "year"){
        document.getElementById("input-type").setAttribute("type","number")
        document.getElementById("input-type").setAttribute("min","1900")
        document.getElementById("input-type").setAttribute("max","2026")
    }


});