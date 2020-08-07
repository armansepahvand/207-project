// Created by Hui (Sky), function that adds confirm password and validation
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
            let messages = []
            if (name.value === ''|| name.value == null) {
                        message.push ('Name is required')
            }
            if (message.lenth > 0) {
                        e.preventDefault()
                        errorElement.innerText = messages.join(', ')
            }
})

function checkpassword () {
            var p=f.pass.value;
            var cp=f.cpass.value;
             if(p==cp)
               alert("password and confirm password are similar")
               else
               alert("mismatch!")
            //   using ternary operator
            msg=(p==cp)?"Both are some":"mismatch";
            alert(msg)
}
