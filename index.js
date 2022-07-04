function createUserList(){
    let userList = new UserList();
    userList.setElementsFromDom(userList.table.getAllElements('userTable'));
    return userList;

}

function renderTable(){
   
}

function getUserFromForm(){

    let user = {
        name : document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        date:  new Date().toLocaleString('en-Ca', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'}),
    }
    return user;
}
function saveHandler(){
    let user = getUserFromForm();
    console.log('user',user);
    let userList = createUserList();
    console.log('userlist',userList);
    userList.addElement(user);
    document.getElementById('userListBody').innerHTML= userList.table.createBody(userList.getAllElements());

}

function changeButtonToSaveMode(){
    document.getElementById('editButton').hidden = true;
    document.getElementById('saveButton').hidden = false;
}

function updateHandler(element){
    let user = getUserFromForm();
    let userList = createUserList();

    userList.updateElement(user, element.getAttribute('itemid') );
    document.getElementById('userListBody').innerHTML= userList.table.createBody(userList.getAllElements());
    changeButtonToSaveMode();
    userList.saveStorageUserList();
}

function deleteItem(itemId){
   
    

    let userList = new UserList();
    let userFromDom = userList.table.getAllElements('userTable');
    userList.setElementsFromDom(userFromDom);
    userList.deleteElement(itemId);

    let tableBody = userList.table.createBody(userList.getAllElements());
    document.getElementById('userListBody').innerHTML= tableBody;


}

function setEditFields(itemId, element){
    console.log('element ',element);
    document.getElementById('name').value = element.cells[1].innerHTML;
    document.getElementById('phone').value = element.cells[2].innerHTML;
    document.getElementById('email').value = element.cells[3].innerHTML;
    document.getElementById('editButton').hidden = false;
    document.getElementById('editButton').setAttribute('itemid',itemId);

    document.getElementById('saveButton').hidden = true;
   
    document.getElementById('name').innerHTML = element
}

function editItem(itemId){

    let tableObject = new Table();
    let userFromDom = tableObject.getAllElements('userTable');

    let userList = new UserList();
    userList.setElementsFromDom(userFromDom);
    userList.editElement(itemId);

    let tableBody = tableObject.createBody(userList.getAllElements());
    document.getElementById('userListBody').innerHTML= tableBody;
   
}



if (localStorage != 'undefined' && localStorage.getItem('storageUserList') != null){
    var userList = new UserList ( JSON.parse(localStorage.getItem('storageUserList')));
}else {
    var userList = new UserList({
    '1':{"name":"first","phone":"1111","email":"first@email.com","date":"2022-07-03, 16:19"},
    '2':{"name":"second","phone":"2222","email":"second@email.com","date":"2022-07-03, 16:19"},
    '3':{"name":"third","phone":"3333","email":"third@email.com","date":"2022-07-03, 16:19"},
    })
};

let userTableHeader=['№','Name', 'Phone','Email','Date'];
console.log('userList',userList);

document.getElementById('userListHeader').innerHTML= userList.table.createTable(userTableHeader);
document.getElementById('userListBody').innerHTML= userList.table.createBody(userList.getAllElements());





