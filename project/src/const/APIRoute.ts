const APIRoute = {
  Login: ():string => '/login',
  Logout: ():string => '/logout',
  Hotels: ():string => '/hotels',
  Comments: (id: string):string => `/comments/${id}`,
  Hotel: (id: string):string => `/hotels/${id}`,
  Nearby: (id: string):string => `/hotels/${id}/nearby`,
};

export default APIRoute;
