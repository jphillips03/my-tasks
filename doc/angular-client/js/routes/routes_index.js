var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/about/about.routing.ts","module":"AboutRoutingModule","children":[{"path":"about","component":"AboutComponent"}],"kind":"module"},{"name":"appRoutes","filename":"src/app/app.routing.ts","module":"AppRoutingModule","children":[{"path":"about","loadChildren":"./about/about.module#AboutModule"},{"path":"","pathMatch":"full","redirectTo":"tasks"},{"path":"404","component":"PageNotFoundComponent"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/tasks/tasks.routing.ts","module":"TasksRoutingModule","children":[{"path":"tasks","component":"TasksComponent","children":[{"path":"pending","component":"PendingTasksTableComponent"},{"path":"complete","component":"CompleteTasksTableComponent"},{"path":"","pathMatch":"full","redirectTo":"pending"},{"path":":id","component":"EditTaskComponent"}]}],"kind":"module"}]}
