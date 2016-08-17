describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function () {
		var mockedList = [{
			name: 'name1',
			favoriteFood: 'food1'
		}, {
			name: 'name2',
			favoriteFood: 'food2'
		}, {
			name: 'name3',
			favoriteFood: 'food3'
		}];

		var results = $filter('favoriteFood')(mockedList, 'food1');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('name1');
	});
	
});
