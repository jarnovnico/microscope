var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	},
	{
		title: 'COME ON YOU SPURS',
		url: 'http://reddit.com/r/coys'
	}

];
Template.postsList.helpers({
	posts: postsData
});