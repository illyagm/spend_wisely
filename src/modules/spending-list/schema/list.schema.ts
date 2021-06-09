import { Document, model, Schema } from "mongoose";


export interface IList extends Document {
    my_budget: number,
    total_spent: number,
    amount_left: number,
    portfolio: [
        {
            spending_date: Date,
            title: string,
            amount: number,
            spending_belongs_to: string[],
            category: {
                enum: [
                    'alimentation',
                    'service_expenses',
                    'transport',
                    'personal_and_health_care',
                    'entertainment',
                    'clothes',
                    'education',
                    'others',
                ]
            },
            category_additional_detail: string,
            return_money_to: {
                id_user: string,
                amount_to_return: number
            },
            notes: string,
            created_by: string,
        }
    ],
}

const ListSchema = new Schema({
    my_budget: {
        type: Number,
        default: 0
    },
    total_spent: {
        type: Number,
        default: 0
    },
    amount_left: {
        type: Number,
        default: 0
    },
    portfolio: [
        {
            spending_date: Date,
            title: String,
            amount: Number,
            spending_belongs_to: [String],
            category: {
                enum: [
                    'food',
                    'service_expenses',
                    'transport',
                    'personal_and_health_care',
                    'entertainment',
                    'clothes',
                    'education',
                    'others',
                ]
            },
            category_additional_detail: String,
            return_money_to: {
                id_user: String,
                amount_to_return: Number
            },
            notes: String,
            created_by: String,
        }
    ],
}, { timestamps: true });

export default model<IList>('List', ListSchema);