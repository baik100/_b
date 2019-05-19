
class Todo {
    constructor (todo, isCompleted){
        this.todo = todo;
        this.isCompleted = isCompleted;
    }

    appendTodo () {
        const todoDOM =
            $(`<div class="todo">
            <h3>${this.todo}</h3>
            <div class="btn-area">
                <div class="btn-done btn-primary btn-sm">${this.isCompleted ? "완료" : "미완료"}</div>
                <div class="btn-delete btn-danger btn-sm">삭제</div>
            </div>
        </div>
            `)

        todoDOM.find('.btn-delete').on('click',function () {
            $(this).closest('.todo').remove();
        })

        $('.list').prepend(todoDOM);
    }
}

class utill {
    static addTodo () {
        $('button').on('click',function (e) {
            e.preventDefault();
            const newTodo = $('input').val();

            if(newTodo === ''){
                alert('please enter new todo..')
                return;
            }

            const todo = new Todo (newTodo, false);
            todo.appendTodo();

            $('input').val('');
        })
    }
    static validator () {

    }
}

utill.addTodo();
utill.validator();


// class User {
//     state = {
//         name: '',
//         point: 0,
//     }
//
//     constructor( { name, point } ) {
//         this.state.name = name;
//         this.state.point = point;
//     }
//
//     greet () {
//         return this.state.name + '님 안녕하세요~'
//     }
//
//     checkMyPoint () {
//         return this.state.name + '님의 포인트는' + this.state.point + '입니다.'
//     }
//
//     bye () {
//         return this.state.name + '님 빠염!'
//     }
// }
//
// const user1 = new User('영훈', 2500);
// const user2 = new User('채연', 10500);
//
//

//
// //비동기
//
// const result = {
//     name: '영훈',
//     point: 2500
// }
//
//
// const user = new User(result);
//
//
//
//
// console.log (user.greet())
// console.log (user.checkMyPoint())
// console.log(user.bye())