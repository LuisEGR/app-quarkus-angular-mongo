package org.acme.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Filters;

import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserService {

    @Inject MongoClient mongoClient;

    public List<User> list(){
        List<User> list = new ArrayList<>();
        MongoCursor<Document> cursor = getCollection().find().iterator();

        try {
            while (cursor.hasNext()) {
                Document document = cursor.next();
                User user = new User();
                user.setId(document.getString("id"));
                user.setFirstName(document.getString("firstName"));
                user.setLastName(document.getString("lastName"));
                user.setEmail(document.getString("email"));
                list.add(user);
            }
        } finally {
            cursor.close();
        }
        return list;
    }

    public void add(User user){
        Document document = new Document()
                .append("id", user.generateId())
                .append("firstName", user.getFirstName())
                .append("lastName", user.getLastName())
                .append("email", user.getEmail());
        getCollection().insertOne(document);
    }

    public void delete(String id){
        getCollection().deleteOne(Filters.eq("id", id));
    }

    public void update(User user){
        Document document = new Document()
                .append("id", user.getId())
                .append("firstName", user.getFirstName())
                .append("lastName", user.getLastName())
                .append("email", user.getEmail());

        getCollection()
            .updateOne(Filters.eq("id", user.getId()), new Document("$set", document));
    }

    private MongoCollection getCollection(){
        return mongoClient.getDatabase("user").getCollection("user");
    }
}