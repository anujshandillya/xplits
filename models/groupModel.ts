import { model, models, Schema } from "mongoose";

const GroupSchema = new Schema({
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    ],
    name: {
        type: String,
        required: true,
    },
});

const Group = models.Group || model("Group", GroupSchema);

export default Group;
