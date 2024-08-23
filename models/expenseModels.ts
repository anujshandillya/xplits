import { model, models, Schema } from "mongoose";

const ExpenseSchema = new Schema({
    __groupId: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        required: true,
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    ],
    amount: [
        {
            type: String,
            required: true,
        }
    ],
    expensetype: {
        type: String,
        required: true,
        default: "Others"
    },
    isSettled: {
        type: Boolean,
        default: false,
    },
});

const Expense = models.Expense || model("Expense", ExpenseSchema);

export default Expense;