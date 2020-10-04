import React, {useState} from 'react'; // sử dụng useState để sử dụng react HOOK
import './App.css';
import Person from "./Person/Person";

const App = props => {
    const [personState,setPerson] = useState({ // initial là state được khởi tạo ban đầu ví dụ giống như this.state = person[] sử dụng ở class
        // bên trong [] sẽ gồm 2 tham số là giá trị chuối state ban đầu và function để set lại state
            persons: [
                {name: 'Thang', age: 23},
                {name: 'Tuan', age: 25} ,
                {name: 'Nhan', age: 22},
            ],
        }
    ); //
    // có thể sử dụng nhiều useState
    const [ortherState,setortherState] = useState("some value");
    console.log(ortherState);
    // console.log(personState); // là 1 object gồm các biến state bên trong
    // this.state và setState sử dụng trong class function còn trong function component có thể sử dụng react hook
    // react HOOK chỉ được sử dụng khi gọi trong function
   // function trong reacthook
    const switchNameHandler = () =>{
    // console.log('function was clicked')
    //  không được set thẳng state như vậy mà phải dùng setState this.state.persons[0].name = "Thang1"
    setPerson({ // sử  dụng setPerson tương tự như this.setState
        persons : [
            {name : "thang1", age : 23},
            {name : "thang1", age : 23},
            {name : "thang1", age : 23}
        ],
        ortherState: personState.ortherState
    })
    }
    return (
        <div className="App">
            {/*import component class Person vào class chính*/}
            {/*// sử dụng props gọi thẳng vào trong component con props chính là biến để khai báo vào trong compoent con ví dụ name or age
        props sẽ không hoạt động khi không được gọi ở bên trong component con
      */}
            {/*// sử dụng onClick để handing Event when change dữ liệu*/}
            {/*trong function thì không cần sử dụng this.functionname*/}
            <button onClick={switchNameHandler}>Switch Name</button>
            {/*// sử dụng this this ở đây chính là CLass lớn*/}
            {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
            {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>*/}
            {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/  được sử dụng class>*/ }
            {/*// personstate bây giờ được sử dụng thay cho this.state*/}
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
            {/*<Person name="Nhan" age="22">Đây là children</Person>*/}
        </div>
    );
}
export default App;
// state = {
//     persons : [
//         {name : 'Thang', age : 23},
//         {name : 'Tuan', age : 25},
//         {name : 'Nhan', age : 22},
//     ], // khai báo state có thể sử dụng nhiều biến khởi tạo ban đầu
//     // state có thể thay đổi được bằng cách rerender lại dom html sử dụng setState
//     ortherState : 'some other value' // sẽ không bị thay đổi nếu thay đổi person
// }
//
