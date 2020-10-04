// Tạo mới function React đầu tiên
import React from 'react'; // import react để sử dụng cú pháp của jsx

const Person = (props) => { // arrow function trong ES6 // sử dụng object name props bên trong component con props bây giờ là các giá như name or age gọi bên class Cha
    // lợi ích của component là để dễ bảo trì có thể tái sử dụng sau này (Dynamic Content)
    return (
        <div>
            <p>
                I'm {
                // sử dụng lại props name và age ở trong component con sẽ nhận được giá trị để set ban đầu bên class cha
                props.name
            } and I'm
                {
                    // sử dụng dấu ngoặc kép để sử dụng cú pháp của javascript bên trong jsx
                    // Math.floor(Math.random()*30)
                    props.age
                }

                Years Old</p>
            {/*// props children là tất cả các element nằm trong dầu của component ví dụ <Person> // đây là vị trí của children</Person>*/}
            <p>{props.children}</p>
        </div>

    )
};
export default Person;