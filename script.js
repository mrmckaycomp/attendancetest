function populateReport(){
  // Get params (called query string)
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const pupilname = urlParams.get('pupilname')
  console.log(pupilname);

  //Populate
  document.getElementById("namelabel").innerText=pupilname;

}