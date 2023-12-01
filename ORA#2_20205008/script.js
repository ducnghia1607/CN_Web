const btnList = document.getElementsByClassName('button')[0];
const studentInfor= document.querySelector('.student-section');
const editInfor = document.querySelector('.edit-infor');
const editBtn = document.querySelector('.icon');
const cancelBtn = document.querySelector('.cancel-btn');
const okBtn = document.querySelector('.ok-btn');
const resetBtn = document.querySelector('.reset-btn');
const inputList = document.querySelectorAll('input');
const selectFileElement = inputList[0];
const selectElement = document.querySelectorAll('select')[1];
const inforElements = document.querySelectorAll('.inforcontent');
const avatar = document.querySelector('#avatar');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const TTSV = {
    fname:'Nguyễn Đức Nghĩa',
    admission_year:'2020',
    training_level:'KSCLC-TN-TT-VN-ICT',
    program:'Công nghệ thông tin Việt-Nhật 2020',
    faculty:'Trường Công nghệ Thông tin và Truyền thông',
    study_status:'Học',
    gender:'Nam',
    class:'Việt Nhật 03-K65',
    course:'65',
    email:'nghia.nd205008@sis.hust.edu.vn',
    srcImg:'./img/avata.png'
}

const originTTSV = {
    fname:'Nguyễn Đức Nghĩa',
    admission_year:'2020',
    training_level:'KSCLC-TN-TT-VN-ICT',
    program:'Công nghệ thông tin Việt-Nhật 2020',
    faculty:'Trường Công nghệ Thông tin và Truyền thông',
    study_status:'Học',
    gender:'Nam',
    class:'Việt Nhật 03-K65',
    course:'65',
    email:'nghia.nd205008@sis.hust.edu.vn',
    srcImg:'./img/avata.png',
}

selectFileElement.addEventListener('change',()=>{
    var fReader = new FileReader();
    fReader.readAsDataURL(selectFileElement.files[0]);
    fReader.onloadend = function(event){
        img2.src = event.target.result;
        avatar.src =  event.target.result;
        img1.src = event.target.result;
}
})

editBtn.addEventListener('click',()=>{

    inputList[1].value =  TTSV["fname"],
    inputList[2].value = TTSV["training_level"],
    inputList[3].value =  TTSV["faculty"]  ,
    selectElement.value = TTSV['gender'] ,
    inputList[4].value = TTSV["course"] ,
    inputList[5].value = TTSV["email"] 
    studentInfor.style.display="none";
    editInfor.style.display="flex";
    btnList.style.display= "block";

})

cancelBtn.addEventListener('click',()=>{
    studentInfor.style.display="flex";
    editInfor.style.display="none";
    btnList.style.display= "none";
    img2.src = TTSV.srcImg;
    avatar.src = TTSV.srcImg;
    img1.src = TTSV.srcImg;
    console.log(TTSV);
})

okBtn.addEventListener('click',()=>{
    TTSV["fname"] = inputList[1].value,
    TTSV["training_level"] = inputList[2].value,
    TTSV["faculty"] = inputList[3].value,
    TTSV['gender'] = selectElement.value,
    TTSV["course"] = inputList[4].value,
    TTSV["email"] = inputList[5].value
    
    var fReader = new FileReader();
    if(selectFileElement.value){
        fReader.readAsDataURL(selectFileElement.files[0])
        fReader.onloadend = function(event){
            TTSV.srcImg = event.target.result;
        }
    }

    console.log(TTSV);
    
    inforElements[0].innerHTML = TTSV["fname"];
    inforElements[2].innerHTML =  TTSV["training_level"];
    inforElements[4].innerHTML =   TTSV["faculty"];
    inforElements[6].innerHTML =  TTSV['gender'];
    inforElements[8].innerHTML =   TTSV["course"];
    inforElements[9].innerHTML =   TTSV["email"];



    studentInfor.style.display="flex";
    editInfor.style.display="none";
    btnList.style.display= "none"


});


resetBtn.addEventListener("click", ()=>{
    Object.assign(TTSV,originTTSV);
    inforElements[0].innerHTML = TTSV["fname"];
    inforElements[2].innerHTML =  TTSV["training_level"];
    inforElements[4].innerHTML =   TTSV["faculty"];
    inforElements[6].innerHTML =  TTSV['gender'];
    inforElements[8].innerHTML =   TTSV["course"];
    inforElements[9].innerHTML =   TTSV["email"];
    TTSV.srcImg = originTTSV.srcImg;
    img2.src = TTSV.srcImg;
    avatar.src = TTSV.srcImg;
    img1.src = TTSV.srcImg;

    inputList[1].value =  TTSV["fname"],
    inputList[2].value = TTSV["training_level"],
    inputList[3].value =  TTSV["faculty"]  ,
    selectElement.value = TTSV['gender'] ,
    inputList[4].value = TTSV["course"] ,
    inputList[5].value = TTSV["email"] 

    console.log(TTSV);
})