db.createUser(
    {
        user: "mongouser",
        pwd: "mongopassword",
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    }
)