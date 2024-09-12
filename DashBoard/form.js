







// let firstForm = document.querySelectorAll(".firstForm input");
// let seconForm = document.querySelectorAll(".seconForm input");
// let thirdForm = document.querySelectorAll(".thirdForm input");
// let erros = document.getElementById("erros");

// let [fullName, email, cnic, domicile, date] = firstForm;
// let [fname, pnumber, nationality, fcnic] = seconForm;
// let [address, qualification, skills, experience, uploadBtn] = thirdForm;

// let submission = document.getElementById("submission");
// let imgUrl = ""; // Initialize the imgUrl outside the function to use it globally

// const submissionForm = (event) => {
//     event.preventDefault(); // Ensure event is passed in correctly
    
//     if (
//         fullName.value.trim() !== "" &&
//         email.value.trim() !== "" &&
//         cnic.value.trim() !== "" &&
//         fname.value.trim() !== "" &&
//         pnumber.value.trim() !== "" &&
//         fcnic.value.trim() !== "" &&
//         address.value.trim() !== "" &&
//         qualification.value.trim() !== "" &&
//         skills.value.trim() !== "" && // Correct the missing parentheses
//         experience.value.trim() !== "" &&
//         uploadBtn.value.trim() !== ""
//     ) {
//         let img = uploadBtn.files[0];
//         if (img) {
//             let fileReader = new FileReader();
//             fileReader.onload = () => {
//                 imgUrl = fileReader.result;

//                 let obj = {
//                     userName: fullName.value,
//                     userEmail: email.value,
//                     userCnic: cnic.value,
//                     userDomicile: domicile.value,
//                     userDate: date.value,
//                     userFName: fname.value,
//                     userNumber: pnumber.value,
//                     userNationality: nationality.value,
//                     userFCnic: fcnic.value,
//                     userAddress: address.value,
//                     userQualification: qualification.value,
//                     userSkills: skills.value, // Corrected key from 'userUser'
//                     userExperience: experience.value,
//                     userPic: imgUrl,
//                 };

//                 localStorage.setItem("userInformation", JSON.stringify(obj));
//                 console.log(fullName.value, email.value, cnic.value, date.value);
//                 console.log(fname.value, pnumber.value, fcnic.value);
//                 console.log(address.value, qualification.value, skills.value, experience.value, uploadBtn.value);

//                 // Now you can show the image and any other actions
//                 document.getElementById("showImage").src = imgUrl;
//                 erros.innerText = "";
//             };
//             fileReader.readAsDataURL(img); // Start reading the file
//         }
//     } else {
//         erros.innerText = "Please fill in all input fields!";
//     }
// };

// submission.addEventListener("click", submissionForm);

// // Handling the card download
// let downloadIdCard = document.getElementById("downloadIdCard");
// let error = document.getElementById("error");
// let userCardBtn = document.getElementById("userCard");

// const userCard = () => {
//     if (downloadIdCard.value.trim() !== "") {
//         if (downloadIdCard.value === cnic.value) {
//             document.getElementById("profile").innerHTML = `
//                 <div class="card mt-5 mb-5" style="width: 18rem;">
//                     <div class="imgset mb-3 mt-3">
//                         <img src="${imgUrl}" class="card-img-top size mt-3" alt="...">
//                     </div>
//                     <div class="card-body">
//                         <h5 class="card-title">NAME : ${fullName.value}</h5>
//                         <p> FATHER NAME : ${fname.value} </p>
//                         <p> CNIC : ${cnic.value} </p>
//                         <p> Qualification : ${qualification.value}</p>
//                         <p> Address : ${address.value} </p>
//                         *******************************
//                     </div>
//                 </div>
//             `;
//             error.innerText = "";
//         } else {
//             error.innerText = "Incorrect CNIC";
//         }
//     } else {
//         error.innerText = "Input is empty!";
//     }
//     downloadIdCard.value = "";
// };

// userCardBtn.addEventListener("click", userCard);
