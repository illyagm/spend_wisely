import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    username: string,
    password: string,
    avatar: string,
    my_lists: string[],
    lists_shared_with_me: string[],
    my_main_list: string,
}

const UserSchema = new Schema ({
    username: String,
    password: String,
    avatar: String,
    my_lists: [ String ],
    lists_shared_with_me: [ String],
    my_main_list: String,
}, { timestamps: true });

export default model<IUser>('User', UserSchema);