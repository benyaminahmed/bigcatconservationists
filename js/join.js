const localStorageKey = "ba_members_names";

const allowedNames = [
    "ansh agarwal",
    "leon kinsley",
    "amos goodman",
    "niam shah",
    "anek shergill",
    "vihaan vekaria",
    "leo basset",
    "aayan choudhry",
    "yash patel",
    "nayan patel",
    "aaron scott",
    "albert vasvari",
    "blake blau",
    "vivaan chhabra",
    "aryan goria",
    "aarav rajput",
    "michael sawyer",
    "zac waterman",
    "sahib bisal",
    "shay patel",
    "ruben rockliffe",
    "rohan shinn",
    "sahib singh",
    "daniel southon",
    "oscar wilson",
    "hamza shehabi",
    "oliver ockleford",
    "rakshaan desaur",
    "trian lakha",
    "william pixton",
    "rian unulkat",
    "ishaan thakra",
    "nayan patel",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",

];

function onSubmit() {
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const name = firstName.value + ' ' + surname.value;
    if (name.trim().length > 0) {
        addMember(name);
        const memberNames = localStorage.getItem(localStorageKey)
        if (memberNames) {
            localStorage.setItem(localStorageKey, memberNames + ',' + name);
        } else {
            localStorage.setItem(localStorageKey, name);
        }
    }
}

function addMember(name) {
    name = name.toString().toLowerCase();

    if (allowedNames.indexOf(name) !== -1) {
        const list = document.getElementById('memberList');
        const listItem = document.createElement('li');
        const heading = document.createElement('h5');
        heading.appendChild(document.createTextNode(name));
        listItem.appendChild(heading);
        list.appendChild(listItem);
    }
}

const memberNames = localStorage.getItem(localStorageKey);
if (memberNames) {
    const names = memberNames.split(',');
    names.forEach(name => {
        addMember(name);
    });
}