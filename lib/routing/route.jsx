publicRoutes = FlowRouter.group({
	name : 'publicroutes'
});
privateRoutes = FlowRouter.group({
	name : 'privateroutes'
});
publicRoutes.route('/',{
	name : 'H ome'
})