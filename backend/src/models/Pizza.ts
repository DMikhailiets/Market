import mongoose, { Schema, Document } from "mongoose";

export interface IPizza extends Document {
    title: {
        type: string
        require: boolean
    }
    description: {
        type: string
        require: boolean
    }
    costInDollars: {
        type: number
        require: boolean
    }
    costInEuro: {
        type: number
        require: boolean
    }
    photoUrl: {
        type: string
        require: boolean
    }
    photoUrlMini: {
        type: string
        require: boolean
    }
}

const PizzaSchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
        photoUrl: { type: String, require: Boolean},
        photoUrlMini: { type: String, require: Boolean},
        costInDollars: {type: Number, require: Boolean},
        costInEuro: {type: Number, require: Boolean},
    },
    {
        timestamps: true
    }
)

const PizzaModel = mongoose.model<IPizza>("Pizza", PizzaSchema)

export default PizzaModel