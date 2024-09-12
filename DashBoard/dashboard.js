// import {auth, signOut, onAuthStateChanged} from '../firebase.js'

// let logOutBtn = document.getElementById('logOut');
// const logOut = () =>{
//     signOut(auth).then(() => {
//         Toastify({
//             text: errorMessage,
//             duration: 3000,
//             position: "center"
//             }).showToast();

//       }).catch((error) => {
//         Toastify({
//             text: error,
//             duration: 3000,
//             position: "center"
//             }).showToast();
//       });
// }

// logOutBtn.addEventListener('click', logOut);

// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         window.location.href = "../SignUp/index.html"
//     }
//   });

// //   form

// let firstForm = document.querySelectorAll(".firstForm input")
// let seconForm = document.querySelectorAll(".seconForm input")
// let thirdForm = document.querySelectorAll(".thirdForm input")
// let showImage = document.getElementById("showImage")
// let erros = document.getElementById("erros")

// let [fullName,email,cnic,domicile,date] = firstForm
// let [fname,pnumber,nationality,fcnic] = seconForm
// let [address,qualification,skills,experience,uploadBtn] = thirdForm

// let imgUrl;

// let obj = {
//     userName: fullName.value,
//     userEmail: email.value,
//     userCnic: cnic.value,
//     userDomicile: domicile.value,
//     userDate: date.value,
//     userFName: fname.value,
//     userNumber: pnumber.value,
//     userNationality: nationality.value,
//     userFCnic: fcnic.value,
//     userAddress: address.value,
//     userQualification: qualification.value,
//     userUser: skills.value,
//     userExperience: experience.value,
//     userPic: imgUrl,
// }

// let submission = document.getElementById("submission")

// const submissionForm = () => {

//     event.preventDefault()
//     if(fullName.value.trim() !== "" && email.value.trim() !== "" && cnic.value.trim() !== "" && fname.value.trim() !== "" && pnumber.value.trim() !==""  && fcnic.value.trim() !=="" && address.value.trim() !== "" && qualification.value.trim() !== "" && skills.value.trim !== "" && experience.value.trim !== "" && uploadBtn.value.trim() !== ""){

//         localStorage.setItem("userInformation", JSON.stringify(obj))

//         console.log(fullName.value,email.value,cnic.value,date.value);
//         console.log(fname.value,pnumber.value,fcnic.value);
//         console.log(address.value,qualification.value,skills.value,experience.value,uploadBtn.value);

//         let img = uploadBtn.files[0]
//         let fileReader = new FileReader()
//         fileReader.onload = () => {
//             imgUrl = fileReader.result
//         }
//         fileReader.readAsDataURL(img)
//         console.log(fileReader);

//         showImage.src = imgUrl

//         Toastify({
//             text: "Resume SuccessFully generated",
//             duration: 3000,
//             position: "center"
//         }).showToast();

//         erros.innerText = ""

//     }
//     else{
//         Toastify({
//             text: "please fill input fields !!",
//             duration: 3000,
//             position: "center"
//         }).showToast();
//         erros.innerText = "please fill input fields !!"
//     }

// }

// submission.addEventListener("click", submissionForm)

// // asdasdasd

// let downloadIdCard = document.getElementById("downloadIdCard")
// let error = document.getElementById("error")
// let userCardBtn = document.getElementById("userCardBtn")
// let profile = document.querySelector(".profile")

// const userCard =() => {

//     if(downloadIdCard.value.trim() !== ""){
//         if(downloadIdCard.value === cnic.value){
//             profile.innerHTML = `
//             <div class="card mt-5 mb-5" style="width: 18rem;">
//           <div class="imgset mb-3 mt-3">
//           <img src="${imgUrl}" class="card-img-top size mt-3" alt="...">
//         </div>
//           <div class="card-body">
//             <h5 class="card-title">NAME : ${fullName.value}</h5>
//             <p> FATHER NAME : ${fname.value} </p>
//             <p> CNIC : ${cnic.value} </p>
//             <p> COURSE : ${courseSelection.value} </p>
//             <p> Qualification : ${qualification.value}</p>
//             <p> Address : ${address.value} </p>
//             *******************************
//           </div>
//         </div>
//             `
//             error.innerText = ""
//         }
//         else{
//             error.innerText = "Incorrect Cnic"
//         }
//     }
//     else{
//         error.innerText = "Input is Empty !!"
//     }
//     downloadIdCard.value = ""

// }

// userCardBtn.addEventListener("click", userCard)

import { auth, signOut, onAuthStateChanged } from "../firebase.js";

let logOutBtn = document.getElementById("logOut");
const logOut = () => {
  signOut(auth)
    .then(() => {
      Toastify({
        text: "Logged out successfully",
        duration: 3000,
        position: "center",
      }).showToast();
    })
    .catch((error) => {
      Toastify({
        text: error.message,
        duration: 3000,
        position: "center",
      }).showToast();
    });
};

logOutBtn.addEventListener("click", logOut);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../SignUp/index.html";
  }
});

// Form handling
let firstForm = document.querySelectorAll(".firstForm input");
let seconForm = document.querySelectorAll(".seconForm input");
let thirdForm = document.querySelectorAll(".thirdForm input");
let showImage = document.getElementById("showImage");
let erros = document.getElementById("erros");

let [fullName, email, cnic, domicile, school, schoolYear, schoolBoard,  date] = firstForm;
let [fname, pnumber, nationality, college,collegeYear, collegeBoard,  fcnic] = seconForm;
let [address, qualification, skills, experience, uploadBtn] = thirdForm;

let imgUrl; // Define imgUrl globally to use it after loading image

let submission = document.getElementById("submission");

const submissionForm = (event) => {
  event.preventDefault(); // Ensure event is passed properly

  if (
    fullName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    cnic.value.trim() !== "" &&
    fname.value.trim() !== "" &&
    pnumber.value.trim() !== "" &&
    fcnic.value.trim() !== "" &&
    address.value.trim() !== "" &&
    qualification.value.trim() !== "" &&
    skills.value.trim() !== "" &&
    experience.value.trim() !== "" &&
    uploadBtn.value.trim() !== "" &&
    college.value.trim() !== "" &&
    school.value.trim() !== "" &&
    collegeYear.value.trim() !== "" &&
    schoolBoard.value.trim() !== "" &&
    collegeBoard.value.trim() !== "" &&
    schoolYear.value.trim() !== "" 

  ) {
    let img = uploadBtn.files[0];

    if (img) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        imgUrl = fileReader.result; // Assign imgUrl after image is loaded

        let obj = {
          userName: fullName.value,
          userEmail: email.value,
          userCnic: cnic.value,
          userDomicile: domicile.value,
          userDate: date.value,
          userFName: fname.value,
          userNumber: pnumber.value,
          userNationality: nationality.value,
          userFCnic: fcnic.value,
          userCollege: college.value,
          userSchool: school.value,
          userSchoolYear: schoolYear.value,
          userCollegeYear: collegeYear.value,
          userSchoolBoard: schoolBoard.value,
          userCollegeBoard: collegeBoard.value,
          userAddress: address.value,
          userQualification: qualification.value,
          userSkills: skills.value, // Corrected key from 'userUser'
          userExperience: experience.value,
          userPic: imgUrl, // Now the imgUrl is properly set
        };

        // Now save the object to localStorage
        localStorage.setItem("userInformation", JSON.stringify(obj));

        // Display the image
        showImage.src = imgUrl;

        Toastify({
          text: "Resume successfully generated",
          duration: 3000,
          position: "center",
        }).showToast();

        erros.innerText = ""; // Clear error messages
      };

      fileReader.readAsDataURL(img); // Start reading the file
    }
  } else {
    Toastify({
      text: "Please fill all input fields!",
      duration: 3000,
      position: "center",
    }).showToast();
    erros.innerText = "Please fill input fields!";
  }
};

submission.addEventListener("click", submissionForm);

// Card generation
let downloadIdCard = document.getElementById("downloadIdCard");
let error = document.getElementById("error");
let userCardBtn = document.getElementById("userCardBtn");
let profile = document.querySelector(".profile");

const userCard = () => {
  if (downloadIdCard.value.trim() !== "") {
    if (downloadIdCard.value === cnic.value) {
      profile.innerHTML = `
                    <div class="mainCv">
        <div class="content-left">
            <div class="left-side-top">
                <img src="${imgUrl}">
            </div>
            <div class="left-side-bottom">
                <h2> <span> <i class="fa-solid fa-user"></i></span> CONTACT</h2>
                <h3> <span> <i class="fa-solid fa-phone"></i></span> &nbsp; Mobile No.</h3>
                <p><b>${pnumber.value}</b></p>
                <h3> <span> <i class="fa-solid fa-location-dot"></i></span> &nbsp; Postal Address:</h3>
                <p><b>${address.value}</b></p>
                <br>
                <h3> <span> <i class="fa-solid fa-envelope"></i></span> &nbsp; EMAIL ADDRESS:</h3>
                <p><b>${email.value}</b></p>
            </div>
        </div>
        <div class="content-right">
            <div class="right-side">
                <h1>CURRICULUM VITAE</h1>
                <hr>
                <h2> <span><i class="fa-solid fa-user"></i></span> &nbsp;PERSONAL INFORMATION</h2>
                <br>
                <ul>
                    <li>Name: &nbsp; <b> ${fullName.value} </b></li>
                    <li>Father Name: &nbsp; <b> ${fname.value} </b></li>
                    <li>Date of Birth: &nbsp; <b> ${date.value}</b></li>
                    <li>Domicile: &nbsp; <b> ${domicile.value}</b></li>
                    <li>CNIC No. &nbsp; <b> ${cnic.value}</b></li>
                    <li>Nationality: &nbsp; <b> ${nationality.value}</b></li>
                </ul>
                <h2> <span><i class="fa-solid fa-user-graduate"></i></span> &nbsp; EDUCATION</h2>
                <br>
                <ul>
                    <li>${schoolYear.value}- &nbsp; <b> MATRICULATION</b> &nbsp; from <b>&nbsp; ${school.value}</b>&nbsp;  board <b> ${schoolBoard.value}</b> </li>
                    <li>${collegeYear.value}- &nbsp; <b> INTERMEDIATE</b> &nbsp; from <b>&nbsp; ${college.value}</b> board <b> ${collegeBoard.value}</b></li>
                </ul>
                <h2> <span><i class="fa-solid fa-head-side-virus"></i></span> &nbsp; <b> PROFESSIOANL SKILLS</b></h2>
                <br>
                <ul>
                    <li>• <b> ${skills.value}</b></li>
                </ul>
            </div>
        </div>
    </div>
    
            `;
      error.innerText = "";
    } else {
      error.innerText = "Incorrect CNIC";
    }
  } else {
    error.innerText = "Input is empty!";
  }
  downloadIdCard.value = ""; // Clear the input after processing
};

userCardBtn.addEventListener("click", userCard);
