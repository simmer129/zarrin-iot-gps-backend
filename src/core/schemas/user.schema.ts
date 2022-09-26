import { EntitySchema } from "typeorm";
import { GenderType } from "../entity/gender-type.enum";
import { UserRole } from "../entity/user-role.enum";
import { User } from "../entity/user.entity";

export const UserSchema = new EntitySchema<User> ({
    name: "User",
    target:User,
    columns:{
        id:{
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        accountId:{
            type: 'uuid',
            unique: true,
            generated: 'uuid',    
        },
        userName:{
            type: String,
            nullable: true,
        },
        password:{
            type: String,
            nullable: true,
        },
        mobile:{
            type: Number,
            nullable: true,
            default: 0,
        },
        email:{
            type: String,
            nullable: true,
            default: "email"
        },
        gender: {
            type: 'enum',
            enum: GenderType,
            nullable: true,
        },
        avatar: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate: {
            type: String,
        },
        role: {
            type: 'enum',
            enum: UserRole,
            nullable: true,
        },
        instagram: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        },
        address: {
            type:String,
        },
        createdAt:{
            type: Date,
            createDate: true,
        },
    }
    
    //TODO: add nullable true or false in type
});