function editBrandName() {
  document.getElementById('editBradName').removeAttribute('disabled');
  document.getElementById('saveBrandName').removeAttribute('disabled');
}

async function saveBrandName() {
  const brandName = document.forms['admin']['brandName'].value;
  console.log(brandName);
  if (brandName == '') {
    alert("Can't be empty !");
    return false;
  }
}
