package org.acme.mongodb;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PATCH;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.MediaType;

import java.util.List;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserAdminResource {

    @Inject UserService userService;

    @GET
    @Path("/users")
    public List<User> list() {
        return userService.list();
    }

    @POST
    @Path("/user")
    public List<User> add(User user) {
        userService.add(user);
        return list();
    }

    @DELETE
    @Path("/user/{id}")
    public List<User> delete(@PathParam("id") String id){
        userService.delete(id);
        return list();
    }

    @PATCH
    @Path("/user")
    public List<User> update(User user){
        userService.update(user);
        return list();
    }

    
}