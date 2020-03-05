class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
                        View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">
                        Public Repos: ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary">
                        Public Gists: ${user.public_gists}
                    </span>
                    <span class="badge badge-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-info">
                        Following: ${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Company: ${user.company}
                        </li>
                        <li class="list-group-item">
                            Website/Blog: ${user.blog}
                        </li>
                        <li class="list-group-item">
                            Location: ${user.location}
                        </li>
                        <li class="list-group-item">
                            Member Since: ${user.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        <div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
                `;
    }

    showRepos(repos) {
        repos.map(item => {
            const output = `<div class="card card-body mb-2">
                                <div class="row">
                                    <div class="col-md-6">
                                    <a href="${item.html_url}" target="_blank">${item.name}</a>
                                    </div>
                                    <div class="col-md-6">
                                    <span class="badge badge-primary">
                                    Stars: ${item.stargazers_count}
                                    </span>
                                    <span class="badge badge-secondary">
                                    Watchers: ${item.watchers_count}
                                    </span>
                                    <span class="badge badge-success">
                                    Forks: ${item.forks_count}
                                    </span>
                                    </div>
                                </div>
                            </div>
`;
            document.getElementById('repos').insertAdjacentHTML('afterbegin', output)

        })
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert() {
        let delay;
        const timer = () => delay = setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
        const stopTimer = () => clearTimeout(delay);
        if (document.querySelector('.alert')) {
            stopTimer();
            timer();
        } else {
            document.querySelector('.lead').insertAdjacentHTML('afterend', `
        <p class="alert" style="background-color: red">Profile not found</p>
       `);
            timer()
        }
    }

}