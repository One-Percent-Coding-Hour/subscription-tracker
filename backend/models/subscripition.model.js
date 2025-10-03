// models/subscription.model.js
import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        currency: { type: String, enum: ['USD', 'EUR', 'NGN', 'GBP'], default: 'USD' },
        frequency: { typed: String, enum: ['daily', 'weekly', 'monthly', 'yearly'], required: true },
        category: {
            type: String,
            enum: [
                "Entertainment",
                "Productivity",
                "Utilities",
                "Sports",
                "News",
                "Other",
            ],
            default: "Other",
        },
        paymentMethod: { type: String },
        startDate: { type: Date, required: true },
        renewalDate: { type: Date, required: true },
        status: { type: String, enum: [ "Active", "Cancelled", "Expired" ], default: "Active" },
    }, 
    { timestamps: true }
);

// Middleware: auto-expire on save
subscriptionSchema.pre("save", function (next) {
    if (this.renewalDate < new Date() && this.status === "Active") {
        this.status = "Expired";
    }
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;