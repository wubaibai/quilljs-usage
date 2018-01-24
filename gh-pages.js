const ghpages = require('gh-pages');

ghpages.publish('build', {
	branch: 'gh-pages',
	repo: 'git@github.com:wubaibai/quilljs-usage.git',
	user: {
		name: 'BeiBei Studio',
		email: 'labbeibei@gmail.com',
	},
}, (err) => {
	console.log(err);
});
