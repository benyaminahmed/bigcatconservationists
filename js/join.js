const localStorageKey = "ba_members_names";

function onSubmit() {
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const name = firstName.value + ' ' + surname.value;
    addMember(name);
    const memberNames = localStorage.getItem(localStorageKey)
    if (memberNames) {
        localStorage.setItem(localStorageKey, memberNames + ',' + name);
    } else {
        localStorage.setItem(localStorageKey, name);
    }
}

function addMember(name) {
    const list = document.getElementById('memberList');
    const listItem = document.createElement('li');
    const heading = document.createElement('h5');
    heading.appendChild(document.createTextNode(name));
    listItem.appendChild(heading);
    list.appendChild(listItem);
}

const memberNames = localStorage.getItem(localStorageKey);
if (memberNames) {
    const names = memberNames.split(',');
    names.forEach(name => {
        addMember(name);
    });
}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Join Chicken Clan</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                First Name
                        <input class="input" type="text" id="firstName" value="">
                    <br> Surname
                        <input class="input" type="text" id="surname" value="">
                            <br>
                    </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick="onSubmit()" data-dismiss="modal">Submit</button>
                            </div>
                </div>
            </div>
        </div>

            </div>