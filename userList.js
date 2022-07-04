class UserList{
     #userList={};
     ul;
     #timeUserList={};
     storageItemName = 'storageUserList';
     constructor (userList){
         this.ul = userList;
         this.#userList = this.ul;
         this.table = new Table();
     }
    
    addElement(element) {
       
        let nextKey = Object.keys(this.#userList).length + 1;
        this.#userList[nextKey] = element;
        this.saveStorageUserList();
    }

    updateElement(element,id){
        this.#userList[id] = element;
        this.saveStorageUserList();
    }

    getElement(key){
        if (key in this.#userList){
            console.log('this element is present ', key);
            return this.#userList[key];
        }
        this.#userList
    }

    getAllElements(){
        return this.#userList;
    }

    editElement(itemId){

        let id = 'tr-'+itemId;
        console.log("id",this.getElement(itemId));
        setEditFields(itemId, document.getElementById(id));

    }

    deleteElement(id){
       delete  this.#userList[id];
       this.reorganizeList();
    }

    reorganizeList(){
        let timeUserList = this.#userList;
        this.#userList={};
        console.log("time", timeUserList, 'this', this.#userList);
        for (let key in timeUserList){
            console.log("key",key);
            console.log('elem',(timeUserList[key]));
                this.addElement(( timeUserList[key]));
        }
        this.saveStorageUserList();
    }

    setElementsFromDom(userListFromDom){
        this.#userList = userListFromDom;

    }

    saveStorageUserList(){
        if(localStorage!='undefine'){console.log(this.storageItemName,this.getAllElements() );
            localStorage.setItem(this.storageItemName, JSON.stringify(this.getAllElements()))
        }
    }

    retrieveStorageUserList(){
        if (localStorage != 'undefined' && localStorage.getItem(this.storageItemName) != null){
            let userList = new UserList ( localStorage.getItem(this.storageItemName));
        }else {alert("op");
            var userList = new UserList({
            '1':{"name":"first","phone":"1111","email":"first@email.com","date":"2022-07-03, 16:19"},
            '2':{"name":"second","phone":"2222","email":"second@email.com","date":"2022-07-03, 16:19"},
            '3':{"name":"third","phone":"3333","email":"third@email.com","date":"2022-07-03, 16:19"},
            })
        };
        return userList;
    };
}