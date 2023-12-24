var siteName = document.getElementById("siteName");
 var siteURL = document.getElementById("siteURL");
 var submit = document.getElementById("submit");
 var clear = document.getElementById("clear");

var mySites = [];

if (localStorage.getItem("sites") != null) {
  mySites = JSON.parse(localStorage.getItem("sites"));
  dispalyData();
}

function addNewSite() {
  if (validationName() == true && validationURL() == true) {
    var newSite = {
      name: siteName.value,
      url: siteURL.value,
    };
    mySites.push(newSite);
    localStorage.setItem("sites", JSON.stringify(mySites));
    dispalyData();
    clearData();
  }
}

function clearData() {
  siteName.value = "";
  siteURL.value = "";
}

function dispalyData() {
  var cartona = "";
  for (var i = 0; i < mySites.length; i++) {
    cartona += `
    <tr>
    <td>${i + 1}</td>
    <td>${mySites[i].name}</td>
    <td>
      <button class="btn btn-visit text-white text-center" >
        <a href="${mySites[i].url}" target="_blank" class="text-decoration-none">
          <i class="fa-solid fa-eye pe-2"></i> Visit
        </a>
      </button>
    </td>
    <td>   <button class="btn btn-update text-white btn-info text-center onclick="getUpdateData(${i}) {
      ">update</td>
    <td>
      <button class="btn btn-delete text-white btn-danger text-center" onclick="deleteData(${i})">
        <i class="fa-solid fa-trash-can"></i> Delete
      </button>
    </td>
  </tr>
    `;
  }
  document.getElementById("tableBookMark").innerHTML = cartona;
}

function getUpdateData(btee5) {
  siteName.value = mySites[btee5].name;
  siteURL.value = mySites[btee5].url;
}

function deleteData(Delete) {
  mySites.splice(Delete, 1);
  localStorage.setItem("sites", JSON.stringify(mySites));
  dispalyData();
}

function validationName() {
  var massageName = document.getElementById("massageName");
  const regexName = /^\w{3,6}(\s+\w+)*$/;
  var nameSite = siteName.value;
  if (regexName.test(nameSite)) {
    siteName.classList.remove("is-invalid");
    siteName.classList.add("is-valid");
    massageName.classList.add("d-none");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    massageName.classList.remove("d-none");
    return false;
  }
}

function validationURL() {
  var massageURL = document.getElementById("massageURL");
  const regexURL = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,7})?(\/\w+)*$/;

  var URLSite = siteURL.value;
  if (regexURL.test(URLSite) == true) {
    siteURL.classList.remove("is-invalid");
    siteName.classList.add("is-valid");
    massageURL.classList.add("d-none");
    return true;
  } else {
    siteURL.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    massageURL.classList.remove("d-none");
    return false;
  }
}
