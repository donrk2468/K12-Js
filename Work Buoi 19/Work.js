// viết 1 form nhập vào gồm
    // nane - string
    // tuổi - number - tính tuổi
    // sinh nhật - date
    // sở thích - string
// => click => thêm các value vào 1 object tên là info
// lấy các thông tin trên, viết 1 đoạn giới thiệt bản thân ngắn

const info = []
var date = document.querySelectorAll('.date')[0]
var label_age = document.querySelectorAll('.age')[0]
var name = document.querySelectorAll('.name')[0]
var birthday = document.querySelectorAll('.birthday')[0]
var hobby = document.querySelectorAll('.hobby')[0]
var submit_button = document.querySelectorAll('.submit')[0]

date.addEventListener('change', age)
function age() {
    var customsDate = new Date(date.value).getFullYear()
    var currentDate = new Date().getFullYear()
    var age = currentDate - customsDate
    label_age.value = age
    console.log(label_age)
}

submit_button.addEventListener('click', submit_button)
function submit_button() {
    let data = 
    {
        name: name.value,
        age: label_age.value,
        birthday: birthday.value,
        hobby: hobby.value,
    };
    if(data.name && data.age && data.birthday && data.hobby) {
        info.push(data  )
    }
    console.log(info)
}