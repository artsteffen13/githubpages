class Github {
    constructor() {
        this.id = '4b22d12a6e2b68b9ca61';
        this.secret = '2eccb5eb33d407b8438e569130889f0eede8128f';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }

    async getRepos(user) {
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.id}&client_secret=${this.secret}`);
        const repos = await reposResponse.json();
        return {
            repos
        }
    }
}