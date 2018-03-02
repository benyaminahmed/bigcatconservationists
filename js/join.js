const localStorageKey = "ba_members_names";

function onSubmit() {
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const name = firstName.value + ' ' + surname.value;
    addMember(name);
    const memberNames = localStorage.getItem(localStorageKey)
    if(memberNames) {
        localStorage.setItem(localStorageKey, memberNames + ',' + name);
    } else {
        localStorage.setItem(localStorageKey, name);
    }
}

function addMember(name){
    const list = document.getElementById('memberList');
    const listItem = document.createElement('li');
    const heading = document.createElement('h5');
    heading.appendChild(document.createTextNode(name));
    listItem.appendChild(heading);
    list.appendChild(listItem);
}

const memberNames = localStorage.getItem(localStorageKey);
if(memberNames) {
    const names = memberNames.split(',');
    names.forEach(name => {
        addMember(name);
    });
}