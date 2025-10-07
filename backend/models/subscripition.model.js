import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        currency: { type: String, enum: ['USD', 'EUR', 'NGN', 'GBP'], default: 'USD' },
        frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'yearly'], required: true },
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
        startDate: { 
            type: Date, 
            required: true,
            validate: {
                validator: function(value) {
                    return value <= new Date();
                },
                message: 'Start date cannot be in the future'
            }
        },
        renewalDate: { type: Date },
        status: { type: String, enum: [ "Active", "Cancelled", "Expired" ], default: "Active" },
    }, 
    { timestamps: true }
);

// Helper function to calculate renewal date
function calculateRenewalDate(startDate, frequency) {
    const renewal = new Date(startDate);
    
    switch (frequency) {
        case 'daily':
            renewal.setDate(renewal.getDate() + 1);
            break;
        case 'weekly':
            renewal.setDate(renewal.getDate() + 7);
            break;
        case 'monthly':
            renewal.setMonth(renewal.getMonth() + 1);
            break;
        case 'yearly':
            renewal.setFullYear(renewal.getFullYear() + 1);
            break;
        default:
            renewal.setMonth(renewal.getMonth() + 1);
    }
    
    return renewal;
}

// Middleware: auto-calculate renewal date and check expiration
subscriptionSchema.pre("save", function (next) {
    // Auto-calculate renewal date if not set or if startDate/frequency changed
    if (!this.renewalDate || this.isModified('startDate') || this.isModified('frequency')) {
        this.renewalDate = calculateRenewalDate(this.startDate, this.frequency);
    }
    
    // Auto-expire if renewal date has passed
    if (this.renewalDate < new Date() && this.status === "Active") {
        this.status = "Expired";
    }
    
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;