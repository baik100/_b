class UI {
    static async fetchUser(){
        const result = await axios.get('https://jsonplaceholder.typicode.com' + '/users');
        const users = result.data;
        return users;
    }

    static async onSearch(){
        const users = await this.fetchUser();

        console.log(users)
        document.querySelector('.search-input').addEventListener('keyup',(e) => {
            let result = [];

            const word = e.target.value;

            if(word.length > 0) {
                users.forEach((user, index) => {
                    if(user.name.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) !== -1 ){
                        result.push(users[index])
                    }
                });

                if(result.length > 0){
                    const resultDOM = result.map((user)=>{
                        return `
                            <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                <div class="card user-info">
                                  <div class="card-body">
                                    <h5 class="card-title">${user.name}</h5>
                                    <p class="name">${user.name}</p>
                                    <p class="email">${user.email}</p>
                                    <p class="phone">${user.phone}</p>
                                    <p class="card-subtitle address">${user.address.city}</p>
                                    <a href="http://${user.website}" class="card-link">${user.website}</a>
                                  </div>
                                </div>
                            </div>        `
                    }).join('');

                    document.querySelector('.search-result').innerHTML = resultDOM;
                } else {
                    document.querySelector('.search-result').innerHTML = "검색결과가 없습니다. 다른검색어를 입력해주세요."
                }


            }
            else {
                document.querySelector('.search-result').innerHTML = "";
            }

            console.log(result)




        })
    }
}

UI.fetchUser();

UI.onSearch();