it('should map controller to url /<%= nameParamCase %>', function () {
  expect($route.routes['/<%= nameParamCase %>'].controller).toBe('<%= namePascalCase %>Controller');
});
it('should map /<%= nameParamCase %> route to <%= name %> View template', function () {
	var view = '<%= appSubFolder %><%= moduleNameParamCase %>/<%= nameParamCase %>.html';
  expect($route.routes['/<%= nameParamCase %>'].templateUrl).toEqual(view);
});
