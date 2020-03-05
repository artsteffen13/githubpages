const github = new Github;
const ui = new Ui;

const searchUser = document.getElementById('searchUser');

const finder = (e) => {
    const value = e.target.value;
    if (value !== '') {
        github.getUser(value)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert();
                } else {
                    ui.showProfile(data.profile);
                }
            });
        github.getRepos(value)
            .then(data => {
                const list = data.repos.slice(0, 3);
                if (data.repos.message === 'Not Found') {
                    ui.showAlert();
                } else {
                    ui.showRepos(list);
                }
            });

    } else {
        ui.clearProfile();
    }
};

searchUser.addEventListener('keyup', finder);